// src/index.js — hard-coded #DATA replacing the original inline JSON array
// (This replaces the original `const data = JSON.parse('...')` from your file.) [oai_citation:1‡index (2).js](file-service://file-CanMM6JjGKDFMnDN4i4m5n)

import cratedigger from './scripts/cratedigger';

// --- Hard-coded TSV block (title, artist, cover, year, hasSleeve) ---
const tsv = `title	artist	cover	Year	hasSleeve
The Barr Brothers	Let it Hiss	https://i.scdn.co/image/ab67616d0000b27392d68ffd58ad8ea4cf9be566	acid jazz-jazz funk	TRUE
Ike Reilly	Salesmen & Racists	https://i.scdn.co/image/ab67616d0000b273f63ef14157f7e8e0ed5e8113	acid jazz-jazz funk	TRUE
James McMurtry	The Horses and the Hounds	https://i.scdn.co/image/ab67616d0000b27388ef788544886eb4cb162792	acid jazz-jazz funk	TRUE
David Byrne& St. Vincent	Love This Giant	https://i.scdn.co/image/ab67616d0000b2731f1bafb7b062972bdd1f6cdc	acid jazz-jazz funk	TRUE
Dominique Fils-Aim√©	Our Roots Run Deep	https://i.scdn.co/image/ab67616d0000b273810ebe4ee7d21b022a35980e	acid jazz-jazz funk	TRUE
Taffetas	Taffetas	https://i.scdn.co/image/ab67616d0000b273923a878d3e0de9fb10993791	acid jazz-jazz funk	TRUE
Bruce Hornsby	Halcyon Days (Expanded Edition)	https://i.scdn.co/image/ab67616d0000b27318caaf52d7c2a553548f3e54	acid jazz-jazz funk	TRUE
The Be Good Tanyas	Hello Love	https://i.scdn.co/image/ab67616d0000b2730050e6a23be3f843943930a8	acid jazz-jazz funk	TRUE
David Gray	Money (That's What I Want) [From Jim Beam's Live Music Series]	https://i.scdn.co/image/ab67616d0000b2730c1b380dd74426a61febcdf9	acid jazz-jazz funk	TRUE
Wilczynski	Cafe Microphone / 32¬∞ Fahrenheit	https://i.scdn.co/image/ab67616d0000b273caba7f127c7a27bfde00b31c	acid jazz-jazz funk	TRUE
Frank Turner	Songbook	https://i.scdn.co/image/ab67616d0000b2736fb7596b0d83fcfaa274058e	acid jazz-jazz funk	TRUE
Patti Smith	Dream Of Life	https://i.scdn.co/image/ab67616d0000b2733763d1cb36a0f79d7a198a0a	acid jazz-jazz funk	TRUE
Eric Church	All My Friends: Celebrating The Songs & Voice Of Gregg Allman	https://i.scdn.co/image/ab67616d0000b273ca7965d1a450596137778f6a	acid jazz-jazz funk	TRUE
The Mighty Rootsmen& Toots & The Maytals& Gregory Isaacs& Mykal Rose	I Won't Back Down	https://i.scdn.co/image/ab67616d0000b27371300435962e79c4d3c7f516	afro soul-afropop	TRUE
Cracker	Sunrise In The Land Of Milk And Honey	https://i.scdn.co/image/ab67616d0000b27363a16571d0382386dc2846ff	afro soul-afropop	TRUE
Steve Forbert	Daylight Savings Time	https://i.scdn.co/image/ab67616d0000b273653eaed759d9930c36805be9	afro soul-afropop	TRUE
The Cars	The Cars	https://i.scdn.co/image/ab67616d0000b273f725bc7907dcf15aa2c6e7b7	afro soul-afropop	TRUE
DOPE LEMON	Honey Bones	https://i.scdn.co/image/ab67616d0000b2736e5f26c11f97c7211fe5f4fb	afro soul-afropop	TRUE
Alpha Blondy	Jah Victory	https://i.scdn.co/image/ab67616d0000b27391f3bb8309fc2ef2066cabfe	afro soul-afropop	TRUE
Orions Belte	Villa Amorini	https://i.scdn.co/image/ab67616d0000b2739525069482163b8af80bf3c5	afro soul-afropop	TRUE
Blind Melon	Blind Melon	https://i.scdn.co/image/ab67616d0000b2737ed1df1690df31d094d7c2bc	afro soul-afropop	TRUE
Traveling Wilburys	The Traveling Wilburys& Vol. 1	https://i.scdn.co/image/ab67616d0000b273d9e06f988048ecf3c54ca749	afro soul-afropop	TRUE
Dave Matthews Band	Come Tomorrow	https://i.scdn.co/image/ab67616d0000b273b27b9b65abca5a3c3a1021c2	afro soul-afropop	TRUE
Frank Turner	Songbook	https://i.scdn.co/image/ab67616d0000b2736fb7596b0d83fcfaa274058e	afro soul-afropop	TRUE
Patti Smith& Jay Dee Daugherty& Lenny Kaye	Dream Of Life	https://i.scdn.co/image/ab67616d0000b2733763d1cb36a0f79d7a198a0a	afro soul-afropop	TRUE
The Barr Brothers	Let it Hiss	https://i.scdn.co/image/ab67616d0000b27392d68ffd58ad8ea4cf9be566	afro soul-afropop	TRUE
Ike Reilly	Salesmen & Racists	https://i.scdn.co/image/ab67616d0000b273f63ef14157f7e8e0ed5e8113	alt country-americana	TRUE
James McMurtry	The Horses and the Hounds	https://i.scdn.co/image/ab67616d0000b27388ef788544886eb4cb162792	alt country-americana	TRUE
David Byrne& St. Vincent	Love This Giant	https://i.scdn.co/image/ab67616d0000b2731f1bafb7b062972bdd1f6cdc	alt country-americana	TRUE
Dominique Fils-Aim√©	Our Roots Run Deep	https://i.scdn.co/image/ab67616d0000b273810ebe4ee7d21b022a35980e	alt country-americana	TRUE
Taffetas	Taffetas	https://i.scdn.co/image/ab67616d0000b273923a878d3e0de9fb10993791	alt country-americana	TRUE
Bruce Hornsby	Halcyon Days (Expanded Edition)	https://i.scdn.co/image/ab67616d0000b27318caaf52d7c2a553548f3e54	alt country-americana	TRUE
The Be Good Tanyas	Hello Love	https://i.scdn.co/image/ab67616d0000b2730050e6a23be3f843943930a8	alt country-americana	TRUE
David Gray	Money (That's What I Want) [From Jim Beam's Live Music Series]	https://i.scdn.co/image/ab67616d0000b2730c1b380dd74426a61febcdf9	alt country-americana	TRUE
Wilczynski	Cafe Microphone / 32¬∞ Fahrenheit	https://i.scdn.co/image/ab67616d0000b273caba7f127c7a27bfde00b31c	alt country-americana	TRUE
Frank Turner	Songbook	https://i.scdn.co/image/ab67616d0000b2736fb7596b0d83fcfaa274058e	alt country-americana	TRUE
Patti Smith	Dream Of Life	https://i.scdn.co/image/ab67616d0000b2733763d1cb36a0f79d7a198a0a	alt country-americana	TRUE
Eric Church	All My Friends: Celebrating The Songs & Voice Of Gregg Allman	https://i.scdn.co/image/ab67616d0000b273ca7965d1a450596137778f6a	alt country-americana	TRUE
The Mighty Rootsmen& Toots & The Maytals& Gregory Isaacs& Mykal Rose	I Won't Back Down	https://i.scdn.co/image/ab67616d0000b27371300435962e79c4d3c7f516	alt country-americana	TRUE
Cracker	Sunrise In The Land Of Milk And Honey	https://i.scdn.co/image/ab67616d0000b27363a16571d0382386dc2846ff	alt country-americana	TRUE
Steve Forbert	Daylight Savings Time	https://i.scdn.co/image/ab67616d0000b273653eaed759d9930c36805be9	alt country-americana	TRUE
The Cars	The Cars	https://i.scdn.co/image/ab67616d0000b273f725bc7907dcf15aa2c6e7b7	alt country-americana	TRUE
DOPE LEMON	Honey Bones	https://i.scdn.co/image/ab67616d0000b2736e5f26c11f97c7211fe5f4fb	alt country-americana	TRUE
Alpha Blondy	Jah Victory	https://i.scdn.co/image/ab67616d0000b27391f3bb8309fc2ef2066cabfe	alt country-americana	TRUE
Orions Belte	Villa Amorini	https://i.scdn.co/image/ab67616d0000b2739525069482163b8af80bf3c5	alt country-americana	TRUE
Blind Melon	Blind Melon	https://i.scdn.co/image/ab67616d0000b2737ed1df1690df31d094d7c2bc	alt country-americana	TRUE
Traveling Wilburys	The Traveling Wilburys& Vol. 1	https://i.scdn.co/image/ab67616d0000b273d9e06f988048ecf3c54ca749	alt country-americana	TRUE
Dave Matthews Band	Come Tomorrow	https://i.scdn.co/image/ab67616d0000b273b27b9b65abca5a3c3a1021c2	alt country-americana	TRUE
Frank Turner	Songbook	https://i.scdn.co/image/ab67616d0000b2736fb7596b0d83fcfaa274058e	alt country-americana	TRUE
Patti Smith& Jay Dee Daugherty& Lenny Kaye	Dream Of Life	https://i.scdn.co/image/ab67616d0000b2733763d1cb36a0f79d7a198a0a	alt country-americana	TRUE
Jackson Browne& Gregg Allman	All My Friends: Celebrating The Songs & Voice Of Gregg Allman	https://i.scdn.co/image/ab67616d0000b273ca7965d1a450596137778f6a	alt country-americana	TRUE
Texas& John McElhone& Wu-Tang Clan& Robert F. "Prince Rakeem" Diggs	The Greatest Hits	https://i.scdn.co/image/ab67616d0000b2733a1fb109b59d508c2acf724b	alt country-americana	TRUE
Dan Mangan	Nice& Nice& Very Nice (10th Anniversary Deluxe Edition)	https://i.scdn.co/image/ab67616d0000b2731bd0fb7cce906f89b7c1a641	alt country-americana-bluegrass	TRUE
The Avett Brothers	Magpie And The Dandelion (Deluxe)	https://i.scdn.co/image/ab67616d0000b2739f7cabfabff0c2c64dbd0fae	alt country-americana-bluegrass	TRUE
Colbey	Journey Man	https://i.scdn.co/image/ab67616d0000b27367c87cfcad680ea69affcee0	alt country-americana-bluegrass	TRUE
Bob Marley & The Wailers	Rastaman Vibration	https://i.scdn.co/image/ab67616d0000b27396e1463315f7d1c84632e633	alt country-americana-bluegrass	TRUE
Bedouin Soundclash& Frank Turner	When the Night Feels My Song (Reimagined)	https://i.scdn.co/image/ab67616d0000b27343732cdab1c3aaf2638c2faa	alt country-americana-bluegrass	TRUE
Max Romeo	The Max Romeo Catalog Chapter 1 - Verse 1-16	https://i.scdn.co/image/ab67616d0000b2730c096957131d4a08d3475b96	alt country-americana-bluegrass	TRUE
Morphine	At Your Service (Anthology)	https://i.scdn.co/image/ab67616d0000b2733f3202c3327bca526f55d9bf	alt country-americana-bluegrass	TRUE
Angelique Kidjo& Peter Gabriel	Djin Djin	https://i.scdn.co/image/ab67616d0000b273e57233b54a880463c5c429fa	alt country-americana-bluegrass	TRUE
Mista Savona& Julito Padron	Havana Meets Kingston	https://i.scdn.co/image/ab67616d0000b27395a5fa55f8f9969534a54ddb	alt country-americana-bluegrass	TRUE
Ted Hawkins	The Next Hundred Years	https://i.scdn.co/image/ab67616d0000b27389525f5134cf5d741d52c138	alt country-americana-bluegrass	TRUE
twiddy	Live from the Bowling Alley	https://i.scdn.co/image/ab67616d0000b2735bcd392373ebb4eb71352328	alt country-americana-bluegrass	TRUE
Amanaz	Africa	https://i.scdn.co/image/ab67616d0000b2731a3e9f74688b6c8f7fe97751	alt country-americana-bluegrass	TRUE
The Olympians	The Olympians	https://i.scdn.co/image/ab67616d0000b273dfb22883cfcb5dcd6d158d45	alt country-americana-bluegrass	TRUE
Deren Ney	West Coast Mama	https://i.scdn.co/image/ab67616d0000b273211366d64862cd2bd012d275	alt country-americana-outlaw country	TRUE
Craig Cardiff	Mothers & Daughters	https://i.scdn.co/image/ab67616d0000b273a9f5002b07349416d840ee1a	alt country-americana-outlaw country	TRUE
Loudon Wainwright III	Strange Weirdos: Music From And Inspired By The Film Knocked Up	https://i.scdn.co/image/ab67616d0000b2734054ad4034544e1d65497b06	alt country-americana-outlaw country	TRUE
Michigan Rattlers	Time to Move On	https://i.scdn.co/image/ab67616d0000b273195f318aa3959e282fe56a80	alt country-americana-outlaw country	TRUE
Jon Batiste	Battle Hymn of the Republic	https://i.scdn.co/image/ab67616d0000b27382b8a616d0cafa58178bf868	alt country-americana-outlaw country	TRUE
Tinariwen	Amassakoul	https://i.scdn.co/image/ab67616d0000b27374757005c6b8a980d66e91eb	alt country-americana-outlaw country	TRUE
Frank Turner	Songbook	https://i.scdn.co/image/ab67616d0000b2736fb7596b0d83fcfaa274058e	alt country-americana-outlaw country	TRUE
Frank Turner	Be More Kind	https://i.scdn.co/image/ab67616d0000b273dce3805d8e00aac763236018	alt country-americana-outlaw country	TRUE
Patti Smith	Dream Of Life	https://i.scdn.co/image/ab67616d0000b2733763d1cb36a0f79d7a198a0a	alt country-americana-outlaw country	TRUE
Patti Smith	Outside Society	https://i.scdn.co/image/ab67616d0000b2738c26f65cf6d2eb781a73cbdc	alt country-americana-outlaw country	TRUE
Jackson Browne& Gregg Allman	All My Friends: Celebrating The Songs & Voice Of Gregg Allman	https://i.scdn.co/image/ab67616d0000b273ca7965d1a450596137778f6a	alt country-americana-outlaw country	TRUE
Allman Brothers Band	All My Friends: Celebrating The Songs & Voice Of Gregg Allman	https://i.scdn.co/image/ab67616d0000b273ca7965d1a450596137778f6a	alt country-americana-outlaw country	TRUE
BROS	Vol. 1	https://i.scdn.co/image/ab67616d0000b273151317b361cb89b3a014dd07	alt country-americana-outlaw country	TRUE
FaithNYC	Love Is A Wish Away	https://i.scdn.co/image/ab67616d0000b273150b2b0164feb9d7fcd4a6f0	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Aloe Blacc	Lift Your Spirit	https://i.scdn.co/image/ab67616d0000b2734de16370db3ca53c8e29e72f	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Unknown Mortal Orchestra	II (10 Year Anniversary Edition)	https://i.scdn.co/image/ab67616d0000b273172b71645a2626c9cb34e300	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Anderson .Paak	Malibu	https://i.scdn.co/image/ab67616d0000b273f8e77075414234fd77fce32b	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Sylvan Esso	Cluster Flies	https://i.scdn.co/image/ab67616d0000b273b7010afabacdcf6536e8f361	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Khruangbin	Mordechai	https://i.scdn.co/image/ab67616d0000b273f94c16116e5e2e850af916d3	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
The Revivalists	The Revivalists	https://i.scdn.co/image/ab67616d0000b273130f93eb55c01218ba6939f9	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Chris Thile& Brad Mehldau	Chris Thile & Brad Mehldau	https://i.scdn.co/image/ab67616d0000b2737a2358b47feab5e9340e61ce	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Chet Atkins& Mark Knopfler	Chet Atkins Certified Guitar Player	https://i.scdn.co/image/ab67616d0000b2735aa4f6a4653dbc89dfab4658	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Frank Turner	Be More Kind	https://i.scdn.co/image/ab67616d0000b273dce3805d8e00aac763236018	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Patti Smith	Dream Of Life	https://i.scdn.co/image/ab67616d0000b2733763d1cb36a0f79d7a198a0a	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Delta Rae& Lindsey Buckingham	Carry the Fire	https://i.scdn.co/image/ab67616d0000b27349aaf14f0936159764cd728a	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Eric McFadden	Eric McFadden does AC/DC (Acoustic Tribute)	https://i.scdn.co/image/ab67616d0000b273cddfc52b0f03f4a56828acd5	alt country-americana-outlaw country-red dirt-texas country-roots rock	TRUE
Les Dynamites	Pop Oud #2	https://i.scdn.co/image/ab67616d0000b2730c81e260743adad87ece7676	alt country-americana-roots rock	TRUE
Ziggy Marley	Long Story Short: Willie Nelson 90 (Live At The Hollywood Bowl)	https://i.scdn.co/image/ab67616d0000b2730d5328e56626d0a77bb0b53f	alt country-americana-roots rock	TRUE
Eels	Tomorrow Morning (Deluxe)	https://i.scdn.co/image/ab67616d0000b273b32b868b66c576c9c264a0a8	alt country-americana-roots rock	TRUE
Josh Ritter	Hello Starling	https://i.scdn.co/image/ab67616d0000b273c05b09ba8de646a48fe53fcf	alt country-americana-roots rock	TRUE
Xavier Rudd	White Moth	https://i.scdn.co/image/ab67616d0000b273e0b6e20c4d70ebb46a3eb0cc	alt country-americana-roots rock	TRUE
The Supremes	Favorites	https://i.scdn.co/image/ab67616d0000b273e6bee0d562bda5b6237996f8	alt country-americana-roots rock	TRUE
Joe Cocker	Mad Dogs & Englishmen (Deluxe Edition)	https://i.scdn.co/image/ab67616d0000b273c26d29e0574c83b3e2ab6371	alt country-americana-roots rock	TRUE
John Fullbright	From The Ground Up	https://i.scdn.co/image/ab67616d0000b273ec1ee525a147d369bca9eef1	alt country-americana-roots rock	TRUE
Lydian Collective	Adventure	https://i.scdn.co/image/ab67616d0000b2734b2cd72576601e9cc6c9a25b	alt country-americana-roots rock	TRUE
Frank Turner	Be More Kind	https://i.scdn.co/image/ab67616d0000b273dce3805d8e00aac763236018	alt country-americana-roots rock	TRUE
Sin√©ad O'Connor	I Do Not Want What I Haven't Got	https://i.scdn.co/image/ab67616d0000b2736f6536c2e326fb2b42db90f8	alt country-americana-roots rock	TRUE
Jason Isbell and the 400 Unit	Hope the High Road	https://i.scdn.co/image/ab67616d0000b273f041f136a4faea8356d8811f	alt country-americana-roots rock	TRUE
Mac Hanson	Alfa Romeo	https://i.scdn.co/image/ab67616d0000b273cfee37e97e42f473d29ae005	alt country-americana-roots rock	TRUE
Macadam Crocodile	Walk Faster	https://i.scdn.co/image/ab67616d0000b273c074a844ee6a76232c2bbb07	alt country-americana-roots rock	TRUE
John Mellencamp	Strictly A One-Eyed Jack	https://i.scdn.co/image/ab67616d0000b273469af8f55b559334071ae9f9	alt country-americana-roots rock	TRUE
James Tillman	Magic City Thrill	https://i.scdn.co/image/ab67616d0000b27382a2451d708d00ce2b486be6	alt country-americana-roots rock	TRUE
Bob Schneider	I'm Good Now	https://i.scdn.co/image/ab67616d0000b273ada52ffaa777929fd151f8c1	alt country-americana-roots rock	TRUE
Bukahara	Canaries in a Coal Mine	https://i.scdn.co/image/ab67616d0000b273f46f70bcbc37d92ebf959fac	alt country-americana-roots rock	TRUE
Van Morrison	Wavelength	https://i.scdn.co/image/ab67616d0000b273bad7dd1bb61103d0e71dc0b5	alt country-americana-roots rock	TRUE
Eilen Jewell	Queen of the Minor Key	https://i.scdn.co/image/ab67616d0000b2730e19f19aaca37f7edfc6ed51	alt country-americana-roots rock	TRUE
Matthew Logan Vasquez	Austin	https://i.scdn.co/image/ab67616d0000b27329144767f7087d7014fe40b7	alt country-americana-roots rock	TRUE
AQUA STONE THRONE	Children of Light	https://i.scdn.co/image/ab67616d0000b273b8212da81e41476b2efbc019	alt country-americana-roots rock	TRUE
Frank Turner	Be More Kind	https://i.scdn.co/image/ab67616d0000b273dce3805d8e00aac763236018	alt country-americana-roots rock	TRUE
Sin√©ad O'Connor	I Do Not Want What I Haven't Got	https://i.scdn.co/image/ab67616d0000b2736f6536c2e326fb2b42db90f8	alt country-americana-roots rock	TRUE
Neil Young	Freedom	https://i.scdn.co/image/ab67616d0000b27349862db9cbce96b19c03c3c6	alt country-americana-roots rock	TRUE
Charlie Mars	Like a Bird& Like a Plane	https://i.scdn.co/image/ab67616d0000b273ab41b018fcf7fb93b8f6af70	alt country-americana-roots rock	TRUE
Electric Light Orchestra	Face the Music	https://i.scdn.co/image/ab67616d0000b273f309550529487fe09f3ff041	alt country-americana-roots rock	TRUE
Brian Eno	Discreet Music	https://i.scdn.co/image/ab67616d0000b273b540c9476ea9425a2bd6d3ec	alt country-americana-roots rock	TRUE
Ukandanz	Evil Plan	https://i.scdn.co/image/ab67616d0000b273461bc8f7026536da909196e0	alt country-americana-roots rock	TRUE
Beth Hart	Bang Bang Boom Boom	https://i.scdn.co/image/ab67616d0000b2736b5f77b7966a82a998cfda24	alt country-americana-roots rock	TRUE
MC YOGI	All the Love in the World	https://i.scdn.co/image/ab67616d0000b2731ae6807ea26ed12dcf78365d	alt country-americana-roots rock	TRUE
Anders Osborne	American Patchwork	https://i.scdn.co/image/ab67616d0000b2730579f666c1149d49a77f1e3e	alt country-americana-roots rock	TRUE
Bobby Alu	Bobby Alu	https://i.scdn.co/image/ab67616d0000b2734824c01e17b7d67db29bf273	alt country-americana-roots rock	TRUE
Nil√ºfer Yanya	Extraordinary Renditions	https://i.scdn.co/image/ab67616d0000b273fb156eeb4ff1552379483d36	alt country-americana-roots rock	TRUE
Frank Turner	Undefeated	https://i.scdn.co/image/ab67616d0000b273a240f004cd8c693b7bc827a7	alt country-americana-roots rock	TRUE`;

// --- Parse TSV into objects: keep headers, coerce hasSleeve to boolean ---
function parseTSV(txt) {
  const lines = txt.split(/\r?\n/).filter(Boolean);
  const headers = lines.shift().split('\t').map(h => h.trim());
  return lines.map((line, idx) => {
    const cols = line.split('\t');
    const row = Object.fromEntries(headers.map((h, i) => [h.toLowerCase(), (cols[i] ?? '').trim()]));
    return {
      title: row.title || '',
      artist: row.artist || '',
      cover: row.cover || '',
      year: row['year'] || '',            // keeping your “Year” values verbatim
      hasSleeve: /^true$/i.test(row['hassleeve'] || ''), // TRUE → true
      id: `REC_${idx + 1}`                 // lightweight stable id
    };
  });
}

const data = parseTSV(tsv);

// --- UI & Cratedigger wiring (unchanged from your original file’s structure) ---
const bottomBar = document.getElementById('bottom-bar');
const buttonPrev = document.getElementById('button-prev');
const buttonShow = document.getElementById('button-show');
const buttonNext = document.getElementById('button-next');
const titleContainer = document.getElementById('cratedigger-record-title');
const artistContainer = document.getElementById('cratedigger-record-artist');
const coverContainer = document.getElementById('cratedigger-record-cover');

function bindEvents() {
  buttonPrev.addEventListener('click', (e) => {
    e.preventDefault();
    cratedigger.selectPrevRecord();
  }, false);

  buttonShow.addEventListener('click', (e) => {
    e.preventDefault();
    if (cratedigger.getSelectedRecord()) {
      cratedigger.flipSelectedRecord();
    } else {
      cratedigger.selectNextRecord();
    }
  }, false);

  buttonNext.addEventListener('click', (e) => {
    e.preventDefault();
    cratedigger.selectNextRecord();
  }, false);
}

function fillInfoPanel(record) {
  if (record?.data?.title) {
    titleContainer.innerHTML = record.data.title;
  }
  if (record?.data?.artist) {
    artistContainer.innerHTML = record.data.artist;
  }
  if (record?.data?.cover) {
    coverContainer.style.backgroundImage = 'url(' + record.data.cover + ')';
  }
}

cratedigger.init({
  debug: false,
  elements: {
    rootContainer: document.getElementById('cratedigger'),
    canvasContainer: document.getElementById('cratedigger-canvas'),
    loadingContainer: document.getElementById('cratedigger-loading'),
    infoContainer: document.getElementById('cratedigger-info'),
  },
  onInfoPanelOpened() {
    bottomBar.classList.add('closed');
    fillInfoPanel(cratedigger.getSelectedRecord());
  },
  onInfoPanelClosed() {
    bottomBar.classList.remove('closed');
  },
});

// Load the hard-coded data (this mirrors your original flow)
cratedigger.loadRecords(data, true, () => {
  bindEvents();
});
