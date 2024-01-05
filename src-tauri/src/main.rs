#![feature(never_type)]
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use lazy_static::lazy_static;
use reqwest::{Client, self, Response};
use reqwest::header::HeaderMap;
use tokio::task::{self, JoinHandle};
use serde_json::{json, Value};
use std::time::Duration;
use std::thread::sleep;
use std::sync::{Arc, RwLock}; 
use rand::rngs::StdRng;
use rand::SeedableRng;
use rand::Rng;

lazy_static! {
    pub static ref THREAD_COUNT: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref CLIENT_COUNT: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref SUCCESSFUL_RESPONSES: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref FORBIDDEN_RESPONSES: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref NOT_FOUND_RESPONSES: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref CONNECTION_CLOSED_RESPONSES: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref REQUEST_COUNT: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref RESPONSE_COUNT: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref REQUEST_VOLUME: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref RESPONSE_VOLUME: Arc<RwLock<usize>> = Arc::new(RwLock::new(0usize));
    pub static ref HAMMER: Arc<RwLock<bool>> = Arc::new(RwLock::new(false));
}

#[tauri::command]
fn report_metrics() -> Value {

    let thread_count_access: Arc<RwLock<usize>> = Arc::clone(&THREAD_COUNT);
    let client_count_access: Arc<RwLock<usize>> = Arc::clone(&CLIENT_COUNT);
    let successful_responses_access: Arc<RwLock<usize>> = Arc::clone(&SUCCESSFUL_RESPONSES);
    let forbidden_responses_access: Arc<RwLock<usize>> = Arc::clone(&FORBIDDEN_RESPONSES);
    let not_found_response_access: Arc<RwLock<usize>> = Arc::clone(&NOT_FOUND_RESPONSES);
    let connection_closed_responses_access: Arc<RwLock<usize>> = Arc::clone(&CONNECTION_CLOSED_RESPONSES);
    let request_count_access: Arc<RwLock<usize>> = Arc::clone(&REQUEST_COUNT);
    let response_count_access: Arc<RwLock<usize>> = Arc::clone(&RESPONSE_COUNT);
    let request_volume_access: Arc<RwLock<usize>> = Arc::clone(&REQUEST_VOLUME);
    let response_volume_access: Arc<RwLock<usize>> = Arc::clone(&RESPONSE_VOLUME);
    let hammer_access: Arc<RwLock<bool>> = Arc::clone(&HAMMER);

    let thread_count: String = match thread_count_access.read() {
         Ok(data) => data.to_string(),
         Err(failed) => {println!("thread_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let client_count: String = match client_count_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("client_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let successful_responses: String = match successful_responses_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("successful_responses read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let forbidden_responses: String = match forbidden_responses_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("forbidden_responses read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let not_found_responses: String = match not_found_response_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("not_found_responses failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let connection_closed_responses: String = match connection_closed_responses_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("connection_closed_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let request_count: String = match request_count_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("client_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let response_count: String = match response_count_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("client_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let request_volume: String = match request_volume_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("client_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let response_volume: String = match response_volume_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("client_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let hammering: String = match hammer_access.read() {
        Ok(data) => data.to_string(),
        Err(failed) => {println!("client_count read failed, attempting recovery"); failed.into_inner().to_string()}
    };

    let metrics: Value = json!({
        "threadCount": thread_count,
        "clientCount": client_count,
        "successfulResponses": successful_responses,
        "forbiddenResponses": forbidden_responses,
        "notFoundResponses": not_found_responses,
        "connectionClosedResponses": connection_closed_responses,
        "requestCount": request_count,
        "responseCount": response_count,
        "requestVolume": request_volume,
        "responseVolume": response_volume,
        "hammering": hammering
    });

    return metrics

}

#[tauri::command]
async fn start_hammering(targets: Vec<String>, number_of_threads: usize, agent_details: Vec<String>, sleep_duration: u64) -> () {

    //Set HAMMER to true
    let hammer_access: Arc<RwLock<bool>> = Arc::clone(&HAMMER);
    {
        let mut hammer_write: std::sync::RwLockWriteGuard<'_, bool> = hammer_access.write().unwrap();
        *hammer_write = true;
    }

    println!("Starting the hammer...");

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
            let thread_count_access: Arc<RwLock<usize>> = Arc::clone(&THREAD_COUNT);

            //Iterate thread count
            let this_thread_num: usize;

            {
                let mut thread_count_data: std::sync::RwLockWriteGuard<usize> = match thread_count_access.write(){
                    Ok(data) => data,
                    Err(_poisoned) => panic!("thread_count_data is poisoned => no catch case written => panicking")
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
                println!("User requested a halt to hammering. Killing all threads..");
                for handle in handles {
                    handle.abort()
                }
                println!("Operations stopped.");

                let hammer_access: Arc<RwLock<bool>> = Arc::clone(&HAMMER);
                {
                    let mut hammer_write: std::sync::RwLockWriteGuard<'_, bool> = hammer_access.write().unwrap();
                    *hammer_write = false;
                }

                return ()
            };
        }
        sleep(Duration::from_millis(500));
    }

}

async fn make_request(thread_num: usize, target_url: String, agent_details: String) -> Result<(), reqwest::Error> {

    //assemble client
    let mut headers: HeaderMap = reqwest::header::HeaderMap::new();
    headers.insert(reqwest::header::USER_AGENT, reqwest::header::HeaderValue::from_str(&agent_details).unwrap());
    let this_request_size: usize = calculate_request_size(&headers).await;

    let client: Client = reqwest::Client::builder()
        .default_headers(headers)
        .build()?;

    //make request
    let res: Response = client.get(&target_url).send().await?;
    let response_status: reqwest::StatusCode = res.status();
    let this_response_size: usize = res.text().await?.len();

    //record size of request
    let request_volume_access: Arc<RwLock<usize>> = Arc::clone(&REQUEST_VOLUME);
    {
        let mut request_volume_write: std::sync::RwLockWriteGuard<'_, usize> = match request_volume_access.write(){
            Ok(data) => data,
            Err(_poisoned) => panic!("Request volume RwLock has been poisoned. No catch case. Panicking.")
        };
        *request_volume_write += this_request_size;
    }

    //record size of response
    let response_volume_access: Arc<RwLock<usize>> = Arc::clone(&RESPONSE_VOLUME);
    {
        let mut response_volume_write: std::sync::RwLockWriteGuard<'_, usize> = match response_volume_access.write(){
            Ok(data) => data,
            Err(_poisoned) => panic!("Request volume RwLock has been poisoned. No catch case. Panicking.")
        };
        *response_volume_write += this_response_size;
    }

    //handle response
    if response_status.is_success(){
        match response_status {

            reqwest::StatusCode::OK => {
                let successful_responses_access: Arc<RwLock<usize>> = Arc::clone(&SUCCESSFUL_RESPONSES);
                {
                    let mut successful_responses_write = match successful_responses_access.write(){
                        Ok(data) => data,
                        Err(_poisoned) => panic!("Successful response RwLock poisoned. No catch case. Panicking.")
                    };
                    *successful_responses_write += 1;
                }
            }
            reqwest::StatusCode::FORBIDDEN => {
                let forbidden_responses_access: Arc<RwLock<usize>> = Arc::clone(&FORBIDDEN_RESPONSES);
                {
                    let mut forbidden_responses_write = match forbidden_responses_access.write(){
                        Ok(data) => data,
                        Err(_poisoned) => panic!("Forbidden response RwLock poisoned. No catch case. Panicking.")
                    };
                    *forbidden_responses_write += 1;
                }
            }
            reqwest::StatusCode::NOT_FOUND => {
                let not_found_response_access: Arc<RwLock<usize>> = Arc::clone(&NOT_FOUND_RESPONSES);
                {
                    let mut not_found_responses_write = match not_found_response_access.write(){
                        Ok(data) => data,
                        Err(_poisoned) => panic!("Not found responses RwLock poisoned. No catch case. Panicking.")
                    };
                    *not_found_responses_write += 1;
                }
            }
            _ => {}
        };
        println!("Thread {}: Successfully sent request to {}. Server responded with {}. (Request size: {} <=> Response Size: {})", thread_num, target_url, response_status, this_request_size, this_response_size);
    } else {
        let connection_closed_responses_access: Arc<RwLock<usize>> = Arc::clone(&CONNECTION_CLOSED_RESPONSES);

        let mut connection_closed_responses_ptr: std::sync::RwLockWriteGuard<'_, usize> = match connection_closed_responses_access.write(){
            Ok(data) => data,
            Err(_poisoned) => panic!("Connection closed responses RwLock poisoned. No catch case. Panicking.")
        };
        *connection_closed_responses_ptr += 1;
        
        println!("Thread {}: Unsuccessful request to {} received status: {} (Response Size: {})", thread_num, target_url, response_status, this_response_size);
    }

    Ok(())
}

#[tauri::command]
async fn stop_hammering() -> String {
    
    //Set HAMMER to false
    let hammer_access: Arc<RwLock<bool>> = Arc::clone(&HAMMER);
    {
        let mut hammer_write: std::sync::RwLockWriteGuard<'_, bool> = match hammer_access.write(){
            Ok(data) => data,
            Err(_poisoned) => panic!("hammer RwLock is poisoned, no catch case, panicking")
        };
        *hammer_write = false;
    }
    
    return "Hammering stopped".to_string();

}

async fn calculate_request_size(headers: &HeaderMap) -> usize {
    headers.iter().map(|(key, value)| {
        key.as_str().len() + value.as_bytes().len()
    }).sum()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            start_hammering,
            stop_hammering,
            report_metrics
        ])
        .run(tauri::generate_context!())
        .expect("Failed to launch midhammer turbo, unknown exception");
}

