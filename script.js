
const DATA={
  beaches:[
    {name:"Whitehaven Beach",loc:"Queensland, Australia",emoji:"🏖️",desc:"Silica sand so pure it squeaks underfoot. Swirling turquoise waters at Hill Inlet create one of Earth's most photographed natural patterns.",tags:["Snorkeling","Sailing","UNESCO"],rating:4.9},
    {name:"Navagio Beach",loc:"Zakynthos, Greece",emoji:"⛵",desc:"Shipwreck Beach — only reachable by boat, enclosed by towering limestone cliffs with the rusting SS Panagiotis at its heart.",tags:["Iconic","Boat trips","Photography"],rating:4.8},
    {name:"Pink Sands Beach",loc:"Harbour Island, Bahamas",emoji:"🌸",desc:"Three miles of blush-pink sand tinted by coral fragments. Consistently ranked among the most beautiful beaches on the planet.",tags:["Pink sand","Romantic","Snorkeling"],rating:4.7},
    {name:"Anse Source d'Argent",loc:"La Digue, Seychelles",emoji:"🌊",desc:"Giant granite boulders, shallow crystal waters, and palm trees make this one of the most photographed beaches in the world.",tags:["Granite rocks","Photography","Tropical"],rating:4.9},
    {name:"Matira Beach",loc:"Bora Bora, French Polynesia",emoji:"🌺",desc:"The only true public beach on Bora Bora — a long strip of white sand with overwater bungalows on the horizon and lagoon views.",tags:["Luxury","Lagoon","Overwater villas"],rating:4.8},
    {name:"Radhanagar Beach",loc:"Havelock Island, India",emoji:"🐚",desc:"Voted Asia's best beach — untouched, quiet, and flush with dense green forest, glowing in vivid blues and greens at sunset.",tags:["Secluded","Sunset","Asia's best"],rating:4.6}
  ],
  temples:[
    {name:"Angkor Wat",loc:"Siem Reap, Cambodia",emoji:"🏛️",desc:"The world's largest religious monument — a 12th-century Khmer temple complex covering 400 acres, rising from the jungle floor.",tags:["UNESCO","12th century","Sunrise views"],rating:4.9},
    {name:"Shwedagon Pagoda",loc:"Yangon, Myanmar",emoji:"✨",desc:"A 99-metre golden pagoda covered in 60 tonnes of gold and 5,000 diamonds. Myanmar's most sacred Buddhist site, over 2,500 years old.",tags:["Buddhist","Gold","Sacred"],rating:4.9},
    {name:"Karnak Temple",loc:"Luxor, Egypt",emoji:"🗿",desc:"A vast complex of temples, chapels, and obelisks built over 2,000 years. The Avenue of Sphinxes leads to one of Egypt's most awe-inspiring sites.",tags:["Ancient","UNESCO","Pharaonic"],rating:4.8},
    {name:"Senso-ji Temple",loc:"Asakusa, Tokyo, Japan",emoji:"⛩️",desc:"Tokyo's oldest temple, founded in 628 AD. The iconic Kaminarimon gate and Nakamise shopping street draw 30 million visitors yearly.",tags:["Buddhist","628 AD","Iconic gate"],rating:4.7},
    {name:"Prambanan",loc:"Yogyakarta, Indonesia",emoji:"🕌",desc:"A 9th-century Hindu compound of 240 temples dedicated to Brahma, Vishnu, and Shiva — a masterpiece of classical Javanese architecture.",tags:["Hindu","UNESCO","9th century"],rating:4.8},
    {name:"Chichen Itza",loc:"Yucatán, Mexico",emoji:"🌄",desc:"The Maya's great city features El Castillo pyramid — a precise astronomical calendar that casts a serpent shadow every equinox.",tags:["Mayan","UNESCO","Astronomy"],rating:4.9}
  ],
  cities:{
    toronto:[
      {name:"CN Tower",loc:"Toronto, Canada",emoji:"🗼",desc:"Standing 553m tall, the CN Tower offers 360° views across Lake Ontario and the city skyline from its glass-floored observation deck.",tags:["Iconic","Views","Architecture"],rating:4.8},
      {name:"Royal Ontario Museum",loc:"Toronto, Canada",emoji:"🏛️",desc:"Canada's largest museum with 13 million artifacts spanning natural history, world cultures, and art across 40 galleries.",tags:["Museum","Culture","Family"],rating:4.6},
      {name:"Distillery District",loc:"Toronto, Canada",emoji:"🍷",desc:"Victorian-era industrial heritage transformed into a car-free village of galleries, restaurants, boutiques, and seasonal festivals.",tags:["Historic","Art","Dining"],rating:4.7},
      {name:"Ripley's Aquarium",loc:"Toronto, Canada",emoji:"🦈",desc:"One of Canada's largest indoor aquariums, featuring a moving walkway beneath a 97-metre shark tunnel and 16,000 sea creatures.",tags:["Family","Marine life","Interactive"],rating:4.8}
    ],
    paris:[
      {name:"Eiffel Tower",loc:"Paris, France",emoji:"🗼",desc:"Gustave Eiffel's 1889 iron lattice masterpiece — the most visited paid monument in the world, best seen at dusk when it sparkles.",tags:["Iconic","1889","Views"],rating:4.9},
      {name:"The Louvre",loc:"Paris, France",emoji:"🎨",desc:"The world's largest art museum, home to 380,000 works including the Mona Lisa and Venus de Milo across 72,000 m² of galleries.",tags:["Art","Museum","Historic"],rating:4.8},
      {name:"Notre-Dame Cathedral",loc:"Paris, France",emoji:"⛪",desc:"A masterpiece of French Gothic architecture, dating to 1163. Currently undergoing restoration following the 2019 fire.",tags:["Gothic","Medieval","Architecture"],rating:4.9},
      {name:"Montmartre",loc:"Paris, France",emoji:"🎭",desc:"The bohemian hilltop village beloved by Picasso and Monet, with the Sacré-Cœur basilica and sweeping city panoramas.",tags:["Art","Bohemian","Panoramic views"],rating:4.7}
    ],
    tokyo:[
      {name:"Shibuya Crossing",loc:"Tokyo, Japan",emoji:"🚶",desc:"The world's busiest pedestrian crossing — up to 3,000 people simultaneously surge across six lanes every time the lights change.",tags:["Iconic","Urban","Photography"],rating:4.8},
      {name:"Meiji Shrine",loc:"Harajuku, Tokyo, Japan",emoji:"⛩️",desc:"A forested Shinto shrine in the heart of Tokyo, dedicated to Emperor Meiji, offering a serene escape from the city's buzz.",tags:["Shinto","Forest","Peaceful"],rating:4.7},
      {name:"teamLab Borderless",loc:"Tokyo, Japan",emoji:"🌌",desc:"An immersive digital art museum where artworks bleed between rooms, move around visitors, and respond to human touch.",tags:["Digital art","Immersive","Unique"],rating:4.9},
      {name:"Tsukiji Outer Market",loc:"Tokyo, Japan",emoji:"🍣",desc:"Tokyo's legendary fish market neighbourhood — perfect for breakfast sushi, tamagoyaki, and fresh seafood street food at dawn.",tags:["Food","Market","Sushi"],rating:4.7}
    ],
    london:[
      {name:"British Museum",loc:"London, UK",emoji:"🏺",desc:"Eight million objects spanning two million years of human history — from the Rosetta Stone to the Elgin Marbles, free entry.",tags:["Free","History","World class"],rating:4.8},
      {name:"Tower of London",loc:"London, UK",emoji:"🏰",desc:"A thousand-year-old fortress, royal palace, and prison — now home to the Crown Jewels and the famous Yeoman Warders.",tags:["UNESCO","Medieval","Crown Jewels"],rating:4.7},
      {name:"Borough Market",loc:"London, UK",emoji:"🥨",desc:"London's oldest and most celebrated food market, running since the 13th century with over 100 stalls of artisan producers.",tags:["Food","Historic","Artisan"],rating:4.6},
      {name:"Tate Modern",loc:"London, UK",emoji:"🖼️",desc:"A former power station reborn as one of the world's top modern art galleries, with Turbine Hall installations that stop you in your tracks.",tags:["Free","Art","Modern"],rating:4.7}
    ]
  }
};

const TZ={toronto:"America/Toronto",paris:"Europe/Paris",tokyo:"Asia/Tokyo",london:"Europe/London",london:"Europe/London"};

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>{
    l.classList.toggle('active',l.textContent.toLowerCase().includes(id==='home'?'home':id==='about'?'about':'contact'));
  });
  if(id==='home'&&!document.getElementById('searchResults').style.display.includes('block')){
    document.getElementById('heroSection').style.display='flex';
  }
}

function getLocalTime(tz){
  try{
    return new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true,weekday:'short'}).format(new Date());
  }catch(e){return null;}
}

function doSearch(){
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  if(!q)return;
  showPage('home');
  document.getElementById('heroSection').style.display='none';
  const results=document.getElementById('searchResults');
  results.style.display='block';
  
  let matched=[];
  let title='';
  let subtitle='';
  let tz=null;
  
  if(q.includes('beach')){
    matched=DATA.beaches;title='Top beach destinations';
    subtitle=`Showing ${matched.length} curated beach destinations for you`;
  } else if(q.includes('temple')){
    matched=DATA.temples;title='Notable temples around the world';
    subtitle=`Showing ${matched.length} remarkable temples with spiritual and historical significance`;
  } else {
    const city=Object.keys(DATA.cities).find(c=>q.includes(c));
    if(city&&DATA.cities[city]){
      matched=DATA.cities[city];
      title=`Top attractions in ${city.charAt(0).toUpperCase()+city.slice(1)}`;
      subtitle=`Showing ${matched.length} landmarks and attractions`;
      tz=TZ[city];
    }
  }
  
  if(matched.length===0){
    results.innerHTML=`<div class="results-header"><h2>Search results</h2></div><div class="no-results"><i class="ti ti-map-off" aria-hidden="true"></i><p>No results found for "<strong>${document.getElementById('searchInput').value}</strong>".<br>Try searching for "beaches", "temples", "Toronto", "Paris", "Tokyo", or "London".</p></div>`;
    return;
  }
  
  let timeHtml='';
  if(tz){
    const t=getLocalTime(tz);
    if(t)timeHtml=`<div class="local-time"><i class="ti ti-clock" aria-hidden="true"></i><span>Current local time: <strong>${t}</strong></span></div>`;
  }
  
  const cards=matched.map(d=>`
    <div class="dest-card">
      <div class="dest-img" style="background:var(--surface-1);font-size:56px">${d.emoji}</div>
      <div class="dest-body">
        <div class="dest-name">${d.name}</div>
        <div class="dest-loc"><i class="ti ti-map-pin" aria-hidden="true" style="font-size:12px"></i>${d.loc}</div>
        <div class="dest-desc">${d.desc}</div>
        <div>${d.tags.map(t=>`<span class="dest-tag">${t}</span>`).join('')}</div>
        <div class="rating"><span class="stars">${'★'.repeat(Math.round(d.rating))}</span><span>${d.rating}/5</span></div>
      </div>
    </div>`).join('');
  
  results.innerHTML=`<div class="results-header"><h2>${title}</h2><p>${subtitle}</p></div>${timeHtml}<div class="dest-grid">${cards}</div>`;
}

function clearSearch(){
  document.getElementById('searchInput').value='';
  document.getElementById('searchResults').style.display='none';
  document.getElementById('heroSection').style.display='flex';
}

function submitContact(){
  const n=document.getElementById('cName').value.trim();
  const e=document.getElementById('cEmail').value.trim();
  const m=document.getElementById('cMsg').value.trim();
  if(!n||!e||!m){alert('Please fill in your name, email, and message.');return;}
  document.getElementById('contactForm').style.display='none';
  document.getElementById('successMsg').style.display='block';
}

