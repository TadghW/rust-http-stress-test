const { invoke } = window.__TAURI__.tauri;

const defaultTargets = [
  //insert your targets here
]

const agentDetails = [
   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.1",
   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.3",
   "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.",
   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2.1 Safari/605.1.1",
   "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.1",
   "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.",
   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.3",
   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.3",
   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.",
   "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.",
   "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 OPR/95.0.0.",
   "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.3",
   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.3",
   "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1.2 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (Linux; Android 9; JAT-L41) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.3",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 12_5_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.6099.119 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.6099.119 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (Linux; Android 8.0.0; WAS-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-G990B2) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-G980F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-A415F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/273.0.547966426 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1.1 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (Linux; Android 12; SAMSUNG SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 11; moto e20 Build/RONS31.267-94-14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-A336B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-A405FN) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 10; MAR-LX1A; HMSCore 6.12.4.312; GMSCore 23.48.16) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/14.0.2.311 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-G990B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (Linux; Android 14; SAMSUNG SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/115.0.0.0 Mobile Safari/537.3",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.6 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) GSA/295.0.590048842 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.",
   "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.3"
];

let test_button = document.getElementById('test_button');
let test_text = document.getElementById('test_value');
let hammering_dom = document.getElementById('hammering');
let threadCount_dom = document.getElementById('threadCount');
let clientCount_dom = document.getElementById('clientCount');
let successfulResponses_dom = document.getElementById('successfulResponses')
let forbiddenResponses_dom = document.getElementById('forbiddenResponses')
let notFoundResponses_dom = document.getElementById('notFoundResponses')
let connectionClosedResponses_dom = document.getElementById('connectionClosedResponses')
let requestCount_dom = document.getElementById('requestCount')
let responseCount_dom = document.getElementById('responseCount')
let requestVolume_dom = document.getElementById('requestVolume')
let responseVolume_dom = document.getElementById('responseVolume')
let hammering_button = document.getElementById('toggle_hammering')

hammering_button.addEventListener("click", toggleHammering)

let threadCount = 0
let clientCount = 0
let successfulResponses = 0
let forbiddenResponses = 0
let notFoundResponses = 0
let connectionClosedResponses = 0
let requestCount = 0
let responseCount = 0
let requestVolume = 0
let responseVolume = 0
let hammering = false
let monitoring = false


async function updateMetrics() {
  invoke('report_metrics').then((metrics) => {
    threadCount = metrics.threadCount
    clientCount = metrics.clientCount
    successfulResponses = metrics.successfulResponses
    forbiddenResponses = metrics.forbiddenResponses
    notFoundResponses = metrics.notFoundResponses
    connectionClosedResponses = metrics.connectionClosedResponses
    requestCount = metrics.requestCount
    responseCount = metrics.responseCount
    requestVolume = metrics.requestVolume
    responseVolume = metrics.responseVolume
    hammering = metrics.hammering
  })
}

function renderMetrics() {
  threadCount_dom.innerHTML = 'Thread Count: ' + threadCount
  clientCount_dom.innerHTML = 'Client Count: ' + clientCount
  successfulResponses_dom.innerHTML = 'Successful Responses: ' + successfulResponses
  forbiddenResponses_dom.innerHTML = 'Forbidden Responses: ' + forbiddenResponses
  notFoundResponses_dom.innerHTML = 'Not Found Responses: ' + notFoundResponses
  connectionClosedResponses_dom.innerHTML = 'Connection Closed Responses: ' + connectionClosedResponses
  requestCount_dom.innerHTML = 'Request Count: ' + requestCount
  responseCount_dom.innerHTML = 'Response Count: ' + responseCount
  requestVolume_dom.innerHTML = 'Request Volume: ' + requestVolume
  responseVolume_dom.innerHTML = 'Response Volume: ' + responseVolume
  hammering_dom.innerHTML = 'Hammering: ' + hammering
}

async function startHammering(){
  hammering = true
  hammering_button.innerHTML = 'HAMMERING...'
  await invoke('start_hammering', { targets: defaultTargets, numberOfThreads: 50000, agentDetails: agentDetails, sleepDuration: 0});
}

async function startMonitoring(){
  monitoring = true
  while (monitoring) {
    await updateMetrics()
    renderMetrics()
    console.log(
      `threadCount: ${threadCount},
      clientCount: ${clientCount},
      successfulResponses: ${successfulResponses},
      forbiddenResponses: ${forbiddenResponses},
      notFoundResponses: ${notFoundResponses},
      connectionClosedResponses: ${connectionClosedResponses},
      requestCount: ${requestCount},
      responseCount: ${responseCount},
      requestVolume: ${requestVolume},
      responseVolume: ${responseVolume},
      hammering: ${hammering}`
    )
    await new Promise(r => setTimeout(r, 1000));
  }
}

function stopMonitoring(){
  monitoring = false
}

async function stopHammering(){
  console.log('invoking Tauri command stopHammering')
  await invoke("stop_hammering")
  hammering_button.innerHTML = 'HAMMER'
  hammering = false
}

async function toggleHammering() {
  if(hammering){
    stopHammering()
    stopMonitoring()
  } else {
    startMonitoring()
    startHammering()
  }
}

renderMetrics()