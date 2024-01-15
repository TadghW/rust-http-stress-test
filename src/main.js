const { invoke } = window.__TAURI__.tauri;

const defaultTargets = [
  "web2.mid.ru/ru/",
  "www.mid.ru/ru/",
  "washington.mid.ru/ru/",
  "lithuania.mid.ru/ru/",
  "afghanistan.mid.ru/ru/",
  "sankt-peterburg.mid.ru/ru/",
  "antwerpen.mid.ru/ru/",
  "venezuela.mid.ru/ru/",
  "qatar.mid.ru/ru/",
  "denmark.mid.ru/ru/",
  "ghana.mid.ru/ru/",
  "chile.mid.ru/ru/",
  "greece.mid.ru/ru/",
  "romania.mid.ru/ru/",
  "iran.mid.ru/ru/",
  "moldova.mid.ru/ru/",
  "norway.mid.ru/ru/",
  "zambia.mid.ru/ru/",
  "netherlands.mid.ru/ru/",
  "laos.mid.ru/ru/",
  "poznan.mid.ru/ru/",
  "simferopol.mid.ru/ru/",
  "daugavpils.mid.ru/ru/",
  "jordan.mid.ru/ru/",
  "uae.mid.ru/ru/",
  "osh.mid.ru/ru/",
  "haifa.mid.ru/ru/",
  "congo.mid.ru/ru/",
  "frankfurt.mid.ru/ru/",
  "hongkong.mid.ru/ru/",
  "ireland.mid.ru/ru/",
  "ambruslu.mid.ru/ru/",
  "ecuador.mid.ru/ru/",
  "tokyo.mid.ru/ru/",
  "krsk.mid.ru/ru/",
  "colombia.mid.ru/ru/",
  "azerbaijan.mid.ru/ru/",
  "capeverde.mid.ru/ru/",
  "montreal.mid.ru/ru/",
  "czech.mid.ru/ru/",
  "isfahan.mid.ru/ru/",
  "irkutsk.mid.ru/ru/",
  "latvia.mid.ru/ru/",
  "kyrgyz.mid.ru/ru/",
  "sri-lanka.mid.ru/ru/",
  "uruguay.mid.ru/ru/",
  "novosibirsk.mid.ru/ru/",
  "barcelona.mid.ru/ru/",
  "harbin.mid.ru/ru/",
  "sapporo.mid.ru/ru/",
  "dubai.mid.ru/ru/",
  "cyprus.mid.ru/ru/",
  "algerie.mid.ru/ru/",
  "khabarovsk.mid.ru/ru/",
  "poland.mid.ru/ru/",
  "ptcus-4.mid.ru/ru/",
  "klaipeda.mid.ru/ru/",
  "shenyang.mid.ru/ru/",
  "marocco.mid.ru/ru/",
  "georgia.mid.ru/ru/",
  "mari-el.mid.ru/ru/",
  "rca.mid.ru/ru/",
  "indonesia.mid.ru/ru/",
  "turkey.mid.ru/ru/",
  "uzbekistan.mid.ru/ru/",
  "istanbul.mid.ru/ru/",
  "korea-seoul.mid.ru/ru/",
  "nigeria.mid.ru/ru/",
  "mauritius.mid.ru/ru/",
  "vladivostok.mid.ru/ru/",
  "konsaland.mid.ru/ru/",
  "australia.mid.ru/ru/",
  "uralsk.mid.ru/ru/",
  "helsinki.mid.ru/ru/",
  "rusconshcm.mid.ru/ru/",
  "benin.mid.ru/ru/",
  "orenburg.mid.ru/ru/",
  "israel.mid.ru/ru/",
  "dushanbe.mid.ru/ru/",
  "ufa.mid.ru/ru/",
  "izhevsk.mid.ru/ru/",
  "saloniki.mid.ru/ru/",
  "rus-slo.mid.ru/ru/",
  "cameroun.mid.ru/ru/",
  "newturkey.mid.ru/ru/",
  "pna.mid.ru/ru/",
  "brest.mid.ru/ru/",
  "salzburg.mid.ru/ru/",
  "brunei.mid.ru/ru/",
  "mw.mid.ru/ru/",
  "smolensk.mid.ru/ru/",
  "macedonia.mid.ru/ru/",
  "hurghada.mid.ru/ru/",
  "omsk.mid.ru/ru/",
  "petrozavodsk.mid.ru/ru/",
  "yemen.mid.ru/ru/",
  "smd.mid.ru/ru/",
  "nepal.mid.ru/ru/",
  "pskov.mid.ru/ru/",
  "vrn.mid.ru/ru/",
  "spitsbergen.mid.ru/ru/",
  "russiaeu.mid.ru/ru/",
  "pekin.mid.ru/ru/",
  "antalya.mid.ru/ru/",
  "senegal.mid.ru/ru/",
  "rusmissionvena.mid.ru/ru/",
  "tchad.mid.ru/ru/",
  "guangzhou.mid.ru/ru/",
  "mali.mid.ru/ru/",
  "peru.mid.ru/ru/",
  "cheboksary.mid.ru/ru/",
  "chita.mid.ru/ru/",
  "abkhazia.mid.ru/ru/",
  "newprofsoyuz.mid.ru/ru/",
  "iraq.mid.ru/ru/",
  "guinea-bissau.mid.ru/ru/",
  "rusemwhk.mid.ru/ru/",
  "kazan.mid.ru/ru/",
  "uganda.mid.ru/ru/",
  "yakutsk.mid.ru/ru/",
  "kamchatka.mid.ru/ru/",
  "cuba.mid.ru/ru/",
  "debrecen.mid.ru/ru/",
  "barnaul.mid.ru/ru/",
  "mazari-sharif.mid.ru/ru/",
  "darkhan.mid.ru/ru/",
  "vkiya.mid.ru/ru/",
  "rusconsroma.mid.ru/ru/",
  "niigata.mid.ru/ru/",
  "vladikavkaz.mid.ru/ru/",
  "singapore.mid.ru/ru/",
  "brno.mid.ru/ru/",
  "basrah.mid.ru/ru/",
  "villefranche.mid.ru/ru/",
  "jeddah.mid.ru/ru/",
  "murmansk.mid.ru/ru/",
  "belgrad.mid.ru/ru/",
  "go.mid.ru/ru/",
  "namibia.mid.ru/ru/",
  "grodno.mid.ru/ru/",
  "libya.mid.ru/ru/",
  "rusgencons-erbil.mid.ru/ru/",
  "khudzhand.mid.ru/ru/",
  "slovenia.mid.ru/ru/",
  "philippines.mid.ru/ru/",
  "zimbabwe.mid.ru/ru/",
  "vietnam.mid.ru/ru/",
  "myanmar.mid.ru/ru/",
  "sydney.mid.ru/ru/",
  "newzealand.mid.ru/ru/",
  "newchina.mid.ru/ru/",
  "mexico.mid.ru/ru/",
  "milan.mid.ru/ru/",
  "france.mid.ru/ru/",
  "tunisie.mid.ru/ru/",
  "thailand.mid.ru/ru/",
  "consrio.mid.ru/ru/",
  "rostov.mid.ru/ru/",
  "cotedivoire.mid.ru/ru/",
  "marseille.mid.ru/ru/",
  "sweden.mid.ru/ru/",
  "alexandria.mid.ru/ru/",
  "gabon.mid.ru/ru/",
  "bih.mid.ru/ru/",
  "rusconsdanang.mid.ru/ru/",
  "panama.mid.ru/ru/",
  "beijing.mid.ru/ru/",
  "brazil.mid.ru/ru/",
  "austria.mid.ru/ru/",
  "madagascar.mid.ru/ru/",
  "india.mid.ru/ru/",
  "belarus.mid.ru/ru/",
  "rusconhouston.mid.ru/ru/",
  "sao-paulo.mid.ru/ru/",
  "riyadh.mid.ru/ru/",
  "nici.mid.ru/ru/",
  "casablanca.mid.ru/ru/",
  "trabzon.mid.ru/ru/",
  "nicaragua.mid.ru/ru/",
  "rusconshanghai.mid.ru/ru/",
  "gothenburg.mid.ru/ru/",
  "guyana.mid.ru/ru/",
  "gdansk.mid.ru/ru/",
  "krasnodar.mid.ru/ru/",
  "almaata.mid.ru/ru/",
  "djibouti.mid.ru/ru/",
  "argentina.mid.ru/ru/",
  "embrusscambodia.mid.ru/ru/",
  "guinea.mid.ru/ru/",
  "mumbai.mid.ru/ru/",
  "liepaja.mid.ru/ru/",
  "albania.mid.ru/ru/",
  "roma.mid.ru/ru/",
  "portugal.mid.ru/ru/",
  "russianembassyza.mid.ru/ru/",
  "kaliningrad.mid.ru/ru/",
  "malaysia.mid.ru/ru/",
  "buryatia.mid.ru/ru/",
  "arkhangelsk.mid.ru/ru/",
  "bolivia.mid.ru/ru/",
  "chondjin.mid.ru/ru/",
  "guat.mid.ru/ru/",
  "angola.mid.ru/ru/",
  "narva.mid.ru/ru/",
  "edinburgh.mid.ru/ru/",
  "slovakia.mid.ru/ru/",
  "ruse.mid.ru/ru/",
  "kuwait.mid.ru/ru/",
  "belgium.mid.ru/ru/",
  "canada.mid.ru/ru/",
  "makhachkala.mid.ru/ru/",
  "botswana.mid.ru/ru/",
  "pakistan.mid.ru/ru/",
  "rfsosetia.mid.ru/ru/",
  "drc.mid.ru/ru/",
  "tanzania.mid.ru/ru/",
  "bahrain.mid.ru/ru/",
  "burundi.mid.ru/ru/",
  "estonia.mid.ru/ru/",
  "hungary.mid.ru/ru/",
  "armenia.mid.ru/ru/",
  "spain.mid.ru/ru/",
  "malta.mid.ru/ru/",
  "bangladesh.mid.ru/ru/",
  "lebanon.mid.ru/ru/",
  "gyumri.mid.ru/ru/",
  "kolkata.mid.ru/ru/",
  "kenya.mid.ru/ru/",
  "kirov.mid.ru/ru/",
  "phuket.mid.ru/ru/",
  "cstorussia2020.mid.ru/ru/",
  "jamaica.mid.ru/ru/",
  "switzerland.mid.ru/ru/",
  "vatican.mid.ru/ru/",
  "grozny.mid.ru/ru/",
  "ethiopia.mid.ru/ru/",
  "seychelles.mid.ru/ru/",
  "london.mid.ru/ru/",
  "ustkamenogorsk.mid.ru/ru/",
  "kirkenes.mid.ru/ru/",
  "russembkenya.mid.ru/ru/",
  "serbia.mid.ru/ru/",
  "oman.mid.ru/ru/",
  "bulgaria.mid.ru/ru/",
  "strasbourg.mid.ru/ru/",
  "newrussembkenya.mid.ru/ru/",
  "karachi.mid.ru/ru/",
  "palermo.mid.ru/ru/",
  "costarica.mid.ru/ru/",
  "voronezh.mid.ru/ru/",
  "samara.mid.ru/ru/",
  "russianunesco.mid.ru/ru/",
  "ekaterinburg.mid.ru/ru/",
  "croatia.mid.ru/ru/",
  "astrakhan.mid.ru/ru/",
  "genova.mid.ru/ru/",
  "egypt.mid.ru/ru/",
  "sakhalin.mid.ru/ru/",
  "bonn.mid.ru/ru/",
  "saransk.mid.ru/ru/",
  "sarajevo.mid.ru/ru/",
  "syria.mid.ru/ru/",
  "pusan.mid.ru/ru/",
  "rusembmali.mid.ru/ru/",
  "iceland.mid.ru/ru/",
  "zagreb.mid.ru/ru/",
  "sochi.mid.ru/ru/",
  "eritrea.mid.ru/ru/",
  "kmw.mid.ru/ru/",
  "mauritanie.mid.ru/ru/",
  "russiaun.mid.ru/ru/",
  "blag.mid.ru/ru/",
  "dprk.mid.ru/ru/",
  "rwanda.mid.ru/ru/",
  "nnov.mid.ru/ru/",
  "newruse.mid.ru/ru/",
  "sudan.mid.ru/ru/",
  "krakow.mid.ru/ru/",
  "newgreat-britain.mid.ru/ru/",
  "constanza.mid.ru/ru/",
  "germany.mid.ru/ru/",
  "constanta.mid.ru/ru/",
  "asean.mid.ru/ru/",
  "odessa.mid.ru/ru/",
  "missiontonato.mid.ru/ru/",
  "web164.mid.ru/ru/",
  "paraguay.mid.ru/ru/",
  "montenegro.mid.ru/ru/",
  "hamburg.mid.ru/ru/",
  "leipzig.mid.ru/ru/",
  "ukraine.mid.ru/ru/",
  "lvov.mid.ru/ru/",
  "newyork.mid.ru/ru/",
  "lviv.mid.ru/ru/",
  "viennamission.mid.ru/ru/",
  "idd.mid.ru/ru/",
  "rusconsmchn.mid.ru/ru/",
  "capetown.mid.ru/ru/",
  "rusfao.mid.ru/ru/",
  "russiaconsulmumbai.mid.ru/ru/",
  "karlovy-vary.mid.ru/ru/",
  "bsec.mid.ru/ru/",
  "vmeste-s-rossiei.mid.ru/ru/",
  "centrerusbranly.mid.ru/ru/",
  "peterburg.mid.ru/ru/",
  "embajadaderusiaenchile.mid.ru/ru/",
  "oldsweden.mid.ru/ru/",
  "oldguangzhou.mid.ru/ru/",
  "archive-helsinki.mid.ru/ru/",
  "archive-casablanca.mid.ru/ru/",
  "archive-mari-el.mid.ru/ru/",
  "chennai.mid.ru/ru/",
  "toronto.mid.ru/ru/",
  "seattle.mid.ru/ru/",
  "osce.mid.ru/ru/",
  "mongolia.mid.ru/ru/",
  "guinee.mid.ru/ru/",
  "coe.mid.ru/ru/",
  "kharkov.mid.ru/ru/",
  "turkmenistan.mid.ru/ru/",
  "geneva.mid.ru/ru/",
  "cismission.mid.ru/ru/",
  "oldmarseille.mid.ru/ru/",
  "sanfrancisco.mid.ru/ru/",
  "varna.mid.ru/ru/",
  "mozambik.mid.ru/ru/",
  "turku.mid.ru/ru/",
  "istanbul.turkey.mid.ru/ru/",
  "cambodia.mid.ru/ru/",
  "cisrussia2017.mid.ru/ru/",
  "oldrusconshanghai.mid.ru/ru/",
  "archive-czech.mid.ru/ru/",
  "archive-khudzhand.mid.ru/ru/",
  "new-tel.net",
  "nppmayak.ru",
  "service-telecom.net",
  "supr.ru",
  "oktell.ru",
  "lobaevarms.com",
  "orsis.com",
  "zid.ru",
  "zala-aero.com",
  "flyseeagro.ru"
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
  await invoke('start_hammering', { targets: defaultTargets, numberOfThreads: 1, agentDetails: agentDetails, sleepDuration: 1000});
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