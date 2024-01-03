
pub const NUMBER_OF_THREADS: i16 = 10;
pub const SLEEP_DURATION: u64 = 1000;
pub const TARGETS: [&'static str; 333] = [ 
    "https://web2.mid.ru",
    "https://www.mid.ru",
    "https://washington.mid.ru",
    "https://lithuania.mid.ru",
    "https://afghanistan.mid.ru",
    "https://sankt-peterburg.mid.ru",
    "https://antwerpen.mid.ru",
    "https://venezuela.mid.ru",
    "https://qatar.mid.ru",
    "https://denmark.mid.ru",
    "https://ghana.mid.ru",
    "https://chile.mid.ru",
    "https://greece.mid.ru",
    "https://romania.mid.ru",
    "https://iran.mid.ru",
    "https://moldova.mid.ru",
    "https://norway.mid.ru",
    "https://zambia.mid.ru",
    "https://netherlands.mid.ru",
    "https://laos.mid.ru",
    "https://poznan.mid.ru",
    "https://simferopol.mid.ru",
    "https://daugavpils.mid.ru",
    "https://jordan.mid.ru",
    "https://uae.mid.ru",
    "https://osh.mid.ru",
    "https://haifa.mid.ru",
    "https://congo.mid.ru",
    "https://frankfurt.mid.ru",
    "https://hongkong.mid.ru",
    "https://ireland.mid.ru",
    "https://ambruslu.mid.ru",
    "https://ecuador.mid.ru",
    "https://tokyo.mid.ru",
    "https://krsk.mid.ru",
    "https://colombia.mid.ru",
    "https://azerbaijan.mid.ru",
    "https://capeverde.mid.ru",
    "https://montreal.mid.ru",
    "https://czech.mid.ru",
    "https://isfahan.mid.ru",
    "https://irkutsk.mid.ru",
    "https://latvia.mid.ru",
    "https://kyrgyz.mid.ru",
    "https://sri-lanka.mid.ru",
    "https://uruguay.mid.ru",
    "https://novosibirsk.mid.ru",
    "https://barcelona.mid.ru",
    "https://harbin.mid.ru",
    "https://sapporo.mid.ru",
    "https://dubai.mid.ru",
    "https://cyprus.mid.ru",
    "https://algerie.mid.ru",
    "https://khabarovsk.mid.ru",
    "https://poland.mid.ru",
    "https://ptcus-4.mid.ru",
    "https://klaipeda.mid.ru",
    "https://shenyang.mid.ru",
    "https://marocco.mid.ru",
    "https://georgia.mid.ru",
    "https://mari-el.mid.ru",
    "https://rca.mid.ru",
    "https://indonesia.mid.ru",
    "https://turkey.mid.ru",
    "https://uzbekistan.mid.ru",
    "https://istanbul.mid.ru",
    "https://korea-seoul.mid.ru",
    "https://nigeria.mid.ru",
    "https://mauritius.mid.ru",
    "https://vladivostok.mid.ru",
    "https://konsaland.mid.ru",
    "https://australia.mid.ru",
    "https://uralsk.mid.ru",
    "https://helsinki.mid.ru",
    "https://rusconshcm.mid.ru",
    "https://benin.mid.ru",
    "https://orenburg.mid.ru",
    "https://israel.mid.ru",
    "https://dushanbe.mid.ru",
    "https://ufa.mid.ru",
    "https://izhevsk.mid.ru",
    "https://saloniki.mid.ru",
    "https://rus-slo.mid.ru",
    "https://cameroun.mid.ru",
    "https://newturkey.mid.ru",
    "https://pna.mid.ru",
    "https://brest.mid.ru",
    "https://salzburg.mid.ru",
    "https://brunei.mid.ru",
    "https://mw.mid.ru",
    "https://smolensk.mid.ru",
    "https://macedonia.mid.ru",
    "https://hurghada.mid.ru",
    "https://omsk.mid.ru",
    "https://petrozavodsk.mid.ru",
    "https://yemen.mid.ru",
    "https://smd.mid.ru",
    "https://nepal.mid.ru",
    "https://pskov.mid.ru",
    "https://vrn.mid.ru",
    "https://spitsbergen.mid.ru",
    "https://russiaeu.mid.ru",
    "https://pekin.mid.ru",
    "https://antalya.mid.ru",
    "https://senegal.mid.ru",
    "https://rusmissionvena.mid.ru",
    "https://tchad.mid.ru",
    "https://guangzhou.mid.ru",
    "https://mali.mid.ru",
    "https://peru.mid.ru",
    "https://cheboksary.mid.ru",
    "https://chita.mid.ru",
    "https://abkhazia.mid.ru",
    "https://newprofsoyuz.mid.ru",
    "https://iraq.mid.ru",
    "https://guinea-bissau.mid.ru",
    "https://rusemwhk.mid.ru",
    "https://kazan.mid.ru",
    "https://uganda.mid.ru",
    "https://yakutsk.mid.ru",
    "https://kamchatka.mid.ru",
    "https://cuba.mid.ru",
    "https://debrecen.mid.ru",
    "https://barnaul.mid.ru",
    "https://mazari-sharif.mid.ru",
    "https://darkhan.mid.ru",
    "https://vkiya.mid.ru",
    "https://rusconsroma.mid.ru",
    "https://niigata.mid.ru",
    "https://vladikavkaz.mid.ru",
    "https://singapore.mid.ru",
    "https://brno.mid.ru",
    "https://basrah.mid.ru",
    "https://villefranche.mid.ru",
    "https://jeddah.mid.ru",
    "https://murmansk.mid.ru",
    "https://belgrad.mid.ru",
    "https://go.mid.ru",
    "https://namibia.mid.ru",
    "https://grodno.mid.ru",
    "https://libya.mid.ru",
    "https://rusgencons-erbil.mid.ru",
    "https://khudzhand.mid.ru",
    "https://slovenia.mid.ru",
    "https://philippines.mid.ru",
    "https://zimbabwe.mid.ru",
    "https://vietnam.mid.ru",
    "https://myanmar.mid.ru",
    "https://sydney.mid.ru",
    "https://newzealand.mid.ru",
    "https://newchina.mid.ru",
    "https://mexico.mid.ru",
    "https://milan.mid.ru",
    "https://france.mid.ru",
    "https://tunisie.mid.ru",
    "https://thailand.mid.ru",
    "https://consrio.mid.ru",
    "https://rostov.mid.ru",
    "https://cotedivoire.mid.ru",
    "https://marseille.mid.ru",
    "https://sweden.mid.ru",
    "https://alexandria.mid.ru",
    "https://gabon.mid.ru",
    "https://bih.mid.ru",
    "https://rusconsdanang.mid.ru",
    "https://panama.mid.ru",
    "https://beijing.mid.ru",
    "https://brazil.mid.ru",
    "https://austria.mid.ru",
    "https://madagascar.mid.ru",
    "https://india.mid.ru",
    "https://belarus.mid.ru",
    "https://rusconhouston.mid.ru",
    "https://sao-paulo.mid.ru",
    "https://riyadh.mid.ru",
    "https://nici.mid.ru",
    "https://casablanca.mid.ru",
    "https://trabzon.mid.ru",
    "https://nicaragua.mid.ru",
    "https://rusconshanghai.mid.ru",
    "https://gothenburg.mid.ru",
    "https://guyana.mid.ru",
    "https://gdansk.mid.ru",
    "https://krasnodar.mid.ru",
    "https://almaata.mid.ru",
    "https://djibouti.mid.ru",
    "https://argentina.mid.ru",
    "https://embrusscambodia.mid.ru",
    "https://guinea.mid.ru",
    "https://mumbai.mid.ru",
    "https://liepaja.mid.ru",
    "https://albania.mid.ru",
    "https://roma.mid.ru",
    "https://portugal.mid.ru",
    "https://russianembassyza.mid.ru",
    "https://kaliningrad.mid.ru",
    "https://malaysia.mid.ru",
    "https://buryatia.mid.ru",
    "https://arkhangelsk.mid.ru",
    "https://bolivia.mid.ru",
    "https://chondjin.mid.ru",
    "https://guat.mid.ru",
    "https://angola.mid.ru",
    "https://narva.mid.ru",
    "https://edinburgh.mid.ru",
    "https://slovakia.mid.ru",
    "https://ruse.mid.ru",
    "https://kuwait.mid.ru",
    "https://belgium.mid.ru",
    "https://canada.mid.ru",
    "https://makhachkala.mid.ru",
    "https://botswana.mid.ru",
    "https://pakistan.mid.ru",
    "https://rfsosetia.mid.ru",
    "https://drc.mid.ru",
    "https://tanzania.mid.ru",
    "https://bahrain.mid.ru",
    "https://burundi.mid.ru",
    "https://estonia.mid.ru",
    "https://hungary.mid.ru",
    "https://armenia.mid.ru",
    "https://spain.mid.ru",
    "https://malta.mid.ru",
    "https://bangladesh.mid.ru",
    "https://lebanon.mid.ru",
    "https://gyumri.mid.ru",
    "https://kolkata.mid.ru",
    "https://kenya.mid.ru",
    "https://kirov.mid.ru",
    "https://phuket.mid.ru",
    "https://cstorussia2020.mid.ru",
    "https://jamaica.mid.ru",
    "https://switzerland.mid.ru",
    "https://vatican.mid.ru",
    "https://grozny.mid.ru",
    "https://ethiopia.mid.ru",
    "https://seychelles.mid.ru",
    "https://london.mid.ru",
    "https://ustkamenogorsk.mid.ru",
    "https://kirkenes.mid.ru",
    "https://russembkenya.mid.ru",
    "https://serbia.mid.ru",
    "https://oman.mid.ru",
    "https://bulgaria.mid.ru",
    "https://strasbourg.mid.ru",
    "https://newrussembkenya.mid.ru",
    "https://karachi.mid.ru",
    "https://palermo.mid.ru",
    "https://costarica.mid.ru",
    "https://voronezh.mid.ru",
    "https://samara.mid.ru",
    "https://russianunesco.mid.ru",
    "https://ekaterinburg.mid.ru",
    "https://croatia.mid.ru",
    "https://astrakhan.mid.ru",
    "https://genova.mid.ru",
    "https://egypt.mid.ru",
    "https://sakhalin.mid.ru",
    "https://bonn.mid.ru",
    "https://saransk.mid.ru",
    "https://sarajevo.mid.ru",
    "https://syria.mid.ru",
    "https://pusan.mid.ru",
    "https://rusembmali.mid.ru",
    "https://iceland.mid.ru",
    "https://zagreb.mid.ru",
    "https://sochi.mid.ru",
    "https://eritrea.mid.ru",
    "https://kmw.mid.ru",
    "https://mauritanie.mid.ru",
    "https://russiaun.mid.ru",
    "https://blag.mid.ru",
    "https://dprk.mid.ru",
    "https://rwanda.mid.ru",
    "https://nnov.mid.ru",
    "https://newruse.mid.ru",
    "https://sudan.mid.ru",
    "https://krakow.mid.ru",
    "https://newgreat-britain.mid.ru",
    "https://constanza.mid.ru",
    "https://germany.mid.ru",
    "https://constanta.mid.ru",
    "https://asean.mid.ru",
    "https://odessa.mid.ru",
    "https://missiontonato.mid.ru",
    "https://web164.mid.ru",
    "https://paraguay.mid.ru",
    "https://montenegro.mid.ru",
    "https://hamburg.mid.ru",
    "https://leipzig.mid.ru",
    "https://ukraine.mid.ru",
    "https://lvov.mid.ru",
    "https://newyork.mid.ru",
    "https://lviv.mid.ru",
    "https://viennamission.mid.ru",
    "https://idd.mid.ru",
    "https://rusconsmchn.mid.ru",
    "https://capetown.mid.ru",
    "https://rusfao.mid.ru",
    "https://russiaconsulmumbai.mid.ru",
    "https://karlovy-vary.mid.ru",
    "https://bsec.mid.ru",
    "https://vmeste-s-rossiei.mid.ru",
    "https://centrerusbranly.mid.ru",
    "https://peterburg.mid.ru",
    "https://embajadaderusiaenchile.mid.ru",
    "https://oldsweden.mid.ru",
    "https://oldguangzhou.mid.ru",
    "https://archive-helsinki.mid.ru",
    "https://archive-casablanca.mid.ru",
    "https://archive-mari-el.mid.ru",
    "https://chennai.mid.ru",
    "https://toronto.mid.ru",
    "https://seattle.mid.ru",
    "https://osce.mid.ru",
    "https://mongolia.mid.ru",
    "https://guinee.mid.ru",
    "https://coe.mid.ru",
    "https://kharkov.mid.ru",
    "https://turkmenistan.mid.ru",
    "https://geneva.mid.ru",
    "https://cismission.mid.ru",
    "https://oldmarseille.mid.ru",
    "https://sanfrancisco.mid.ru",
    "https://varna.mid.ru",
    "https://mozambik.mid.ru",
    "https://turku.mid.ru",
    "https://istanbul.turkey.mid.ru",
    "https://cambodia.mid.ru",
    "https://cisrussia2017.mid.ru",
    "https://oldrusconshanghai.mid.ru",
    "https://archive-czech.mid.ru",
    "https://archive-khudzhand.mid.ru"
];