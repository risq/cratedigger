(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cratedigger = require('./cratedigger');

var data = JSON.parse('[{"title":"So What","artist":"Miles Davis","cover":"http://cdn-images.deezer.com/images/cover/63bf5fe5f15f69bfeb097139fc34f3d7/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBYBNV14607703ACA","hasSleeve":false},{"title":"Stolen Moments","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOCNMPH12B0B8064AA","hasSleeve":false},{"title":"Theme for Maxine","artist":"Woody Shaw","cover":"http://cdn-images.deezer.com/images/cover/bb937f1e1d57f7542a64c74b13c47900/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMLSGW131343841A7","hasSleeve":false},{"title":"Moanin\' Mambo","artist":"Mingus Big Band","cover":"http://cdn-images.deezer.com/images/cover/dcd1565cf3dd663f7b7492e4da378855/400x400-000000-80-0-0.jpg","year":"1996","id":"SOVQLVX13134386AF9","hasSleeve":false},{"title":"Summertime","artist":"Oscar Peterson","cover":"http://cdn-images.deezer.com/images/cover/d6acdf4a975edf9556182d7c6a31e596/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFNWTV137712739BC","hasSleeve":false},{"title":"Tea for Two","artist":"Lester Young","cover":"http://cdn-images.deezer.com/images/cover/8effbd8dc7a95f06c5aca8e6ecf3a78e/400x400-000000-80-0-0.jpg","year":"1997","id":"SOAPBMQ144C4A18CD4","hasSleeve":false},{"title":"Line Up","artist":"Lennie Tristano","cover":"http://cdn-images.deezer.com/images/cover/23b2766c2457be502e3b79f088cb8ba9/400x400-000000-80-0-0.jpg","year":"1955","id":"SOBPDRQ1313439BA51","hasSleeve":false},{"title":"I Remember Clifford","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/efa706e1d3fc1363c7a5f07f9088a6cb/400x400-000000-80-0-0.jpg","year":"1999","id":"SOCRUWO12AB0184846","hasSleeve":false},{"title":"All The Things You Are","artist":"Oscar Pettiford","cover":"http://cdn-images.deezer.com/images/cover/8ce9fcf0ec333b06c38ad999c8dccb29/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBHKVG1315CD41C41","hasSleeve":false},{"title":"Easy Living","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/e8463630813b6c25536cdbef03134ae3/400x400-000000-80-0-0.jpg","year":"1995","id":"SOEVLRZ131343A28D6","hasSleeve":false},{"title":"Whiplash","artist":"Don Ellis","cover":"http://cdn-images.deezer.com/images/cover/34d87cf0631937bdb79675402054d3b2/400x400-000000-80-0-0.jpg","year":"1973","id":"SOOVZHR12A8C132FA8","hasSleeve":false},{"title":"Bumpin\' On Sunset","artist":"Wes Montgomery","cover":"http://cdn-images.deezer.com/images/cover/75f43523fcd01b3046486674e09d3700/400x400-000000-80-0-0.jpg","year":"1966","id":"SOKXHZT1478B63887A","hasSleeve":false},{"title":"Footprints","artist":"Wayne Shorter","cover":"http://cdn-images.deezer.com/images/cover/40c4768d6ee25d5356b5efbd0f69c324/400x400-000000-80-0-0.jpg","year":"2007","id":"SOZLFJA144D13D0768","hasSleeve":false},{"title":"Blue Train","artist":"John Coltrane","cover":"http://cdn-images.deezer.com/images/cover/1d019d81f99c5213398791c8a0d6a2d1/400x400-000000-80-0-0.jpg","year":"1957","id":"SOACYSS145FEBAD8C6","hasSleeve":false},{"title":"All Blues","artist":"Ron Carter","cover":"http://cdn-images.deezer.com/images/cover/2d20ae4c4127ce6b8aa58f08becc9c05/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBJQBM144E5CA4D89","hasSleeve":false},{"title":"My Funny Valentine","artist":"Chet Baker","cover":"http://cdn-images.deezer.com/images/cover/d2f8b4d15a624333903c57b7d4aa5ab5/400x400-000000-80-0-0.jpg","year":"1954","id":"SOAAQIZ144C486A932","hasSleeve":false},{"title":"Love for Sale","artist":"Cannonball Adderley","cover":"http://cdn-images.deezer.com/images/cover/b7df440f2e746476810b8fc36e1970df/400x400-000000-80-0-0.jpg","year":"1959","id":"SOPJQEU144AD705584","hasSleeve":false},{"title":"Lady Sings the Blues","artist":"Herbie Nichols","cover":"http://cdn-images.deezer.com/images/cover/17ea4a0526096e5a8fb20717386e99e9/400x400-000000-80-0-0.jpg","year":"2010","id":"SOAOYTH1376F78A4BA","hasSleeve":false},{"title":"Cleopatra\'s Dream","artist":"Bud Powell","cover":"http://cdn-images.deezer.com/images/cover/013ea0cecc3e8b370bd21b445ce5b8c5/400x400-000000-80-0-0.jpg","year":"1958","id":"SOKPATT12A6D4F412B","hasSleeve":false},{"title":"Bernie\'s Tune","artist":"Gerry Mulligan","cover":"http://cdn-images.deezer.com/images/cover/7bce5b21ad29df130368121a5c4bcf36/400x400-000000-80-0-0.jpg","year":"1990","id":"SOBJHOS137618BE4FD","hasSleeve":false},{"title":"Let The Good Times Roll","artist":"Lester Bowie","cover":"http://cdn-images.deezer.com/images/cover/08e18d6e4f8499003ed8c9ebbc7ce73a/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBRPSD13134386B16","hasSleeve":false},{"title":"Grooveyard","artist":"Harold Land","cover":"http://cdn-images.deezer.com/images/cover/0cac603ac7828983edb63c59f4b2ff99/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHANRF1311AFECA2F","hasSleeve":false},{"title":"Far West","artist":"Tim Hagans","cover":"http://cdn-images.deezer.com/images/cover/f1d9645904ea3441fe5c7d025c450d0c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGFYEL12A58A7C0B2","hasSleeve":false},{"title":"My Ideal","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFQKLH1313439C9D0","hasSleeve":false},{"title":"Yearnin\'","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOEIGTM12A6D4F92E1","hasSleeve":false},{"title":"Moanin\'","artist":"Art Blakey","cover":"http://cdn-images.deezer.com/images/cover/3e8498d49bc3d030a36730aada3c553b/400x400-000000-80-0-0.jpg","year":"1958","id":"SOBWNRX145FD6B55E2","hasSleeve":false},{"title":"Like Someone in Love","artist":"Art Farmer","cover":"http://cdn-images.deezer.com/images/cover/c85aed0c4cb96bcc6753d6140de9cf75/400x400-000000-80-0-0.jpg","year":"2004","id":"SOBFGKP12A6D4F8834","hasSleeve":false},{"title":"Cheese Cake","artist":"Dexter Gordon","cover":"http://cdn-images.deezer.com/images/cover/767354ab07d1fdcc6924bbce0a431e60/400x400-000000-80-0-0.jpg","year":"1988","id":"SOKPRXE1377042B07E","hasSleeve":false},{"title":"Peace Piece","artist":"Bill Evans","cover":"http://cdn-images.deezer.com/images/cover/12a472c142105e0496e842e486b252cc/400x400-000000-80-0-0.jpg","year":"1998","id":"SOAYBHG144C74C5C52","hasSleeve":false},{"title":"Ain\'t It Funky Now","artist":"Grant Green","cover":"http://cdn-images.deezer.com/images/cover/dfe2b24b075435f62907d3637cd812b4/400x400-000000-80-0-0.jpg","year":"1970","id":"SOBAGJQ13167714741","hasSleeve":false},{"title":"Driva\' Man","artist":"Max Roach","cover":"http://cdn-images.deezer.com/images/cover/7aee52fbf15a6b9a034a3a915fbe0d60/400x400-000000-80-0-0.jpg","year":"2011","id":"SOERNHP13767946CFF","hasSleeve":false},{"title":"What Are You Doing The Rest Of Your Life?","artist":"Milt Jackson","cover":"http://cdn-images.deezer.com/images/cover/a1133e65eb7cbee9e5e32d8f31f50475/400x400-000000-80-0-0.jpg","year":"1973","id":"SOHXWWN13777557752","hasSleeve":false},{"title":"The Girl From Ipanema","artist":"Stan Getz","cover":"http://cdn-images.deezer.com/images/cover/0b072edc1697b558720c640948371d7a/400x400-000000-80-0-0.jpg","year":"2000","id":"SOCNBTN1478C4603ED","hasSleeve":false},{"title":"Alone Together","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOABROI12AB017C3E5","hasSleeve":false},{"title":"September In The Rain","artist":"Roy Hargrove","cover":"http://cdn-images.deezer.com/images/cover/98a482d8ccca7b22152d5714c22aa464/400x400-000000-80-0-0.jpg","year":"1994","id":"SOPWTIL12A8C13BBDF","hasSleeve":false},{"title":"Love Theme from \'Spartacus\'","artist":"Yusef Lateef","cover":"http://cdn-images.deezer.com/images/cover/bb50516b507ac87482a446ce44b0629e/400x400-000000-80-0-0.jpg","year":"1961","id":"SOIFBAQ1311AFE3148","hasSleeve":false},{"title":"Almost Like Being in Love","artist":"Red Garland","cover":"http://cdn-images.deezer.com/images/cover/b3cf6995de24d43c717e41300e78f607/400x400-000000-80-0-0.jpg","year":"2006","id":"SOATHDZ12AB0185B5F","hasSleeve":false},{"title":"Night And Day","artist":"Joe Pass","cover":"http://cdn-images.deezer.com/images/cover/17ecd15c241bf378e684d553b4e7b8bc/400x400-000000-80-0-0.jpg","year":"2005","id":"SOBYOAC13E6CB01926","hasSleeve":false},{"title":"Sous Le Ciel De Paris","artist":"Toots Thielemans","cover":"http://cdn-images.deezer.com/images/cover/81f873457a346b26b85a8122541a8f07/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMUWQS12A8C13B2D3","hasSleeve":false},{"title":"Scrambled Eggs","artist":"Nat Adderley","cover":"http://cdn-images.deezer.com/images/cover/a2154ebd75c247095fef500c6d5f163c/400x400-000000-80-0-0.jpg","year":"1960","id":"SODJAYZ1311AFDA13F","hasSleeve":false},{"title":"Lansana\'s Priestess","artist":"Donald Byrd","cover":"http://cdn-images.deezer.com/images/cover/c00ba5c47f58252e4ef81279e6feb1a0/400x400-000000-80-0-0.jpg","year":"1973","id":"SODUJIR12A6D4F85A0","hasSleeve":false},{"title":"My Little Brown Book","artist":"Duke Ellington","cover":"http://cdn-images.deezer.com/images/cover/ac05edd38684177e3556b1cdbde4764a/400x400-000000-80-0-0.jpg","year":"1963","id":"SOGTTHV136F24052DE","hasSleeve":false},{"title":"Patricia","artist":"Art Pepper","cover":"http://cdn-images.deezer.com/images/cover/4928a2211000a85bbe02cd299b5d6291/400x400-000000-80-0-0.jpg","year":"2007","id":"SONVUPG13772274375","hasSleeve":false},{"title":"The Sidewinder","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/38ebedd7c4a77c3502b2cc5d80db3109/400x400-000000-80-0-0.jpg","year":"1998","id":"SOGTXEX12B0B806866","hasSleeve":false},{"title":"You Don\'t Know What Love Is","artist":"Sonny Rollins","cover":"http://cdn-images.deezer.com/images/cover/49d72537f916a90c27e629a87308bc53/400x400-000000-80-0-0.jpg","year":"1956","id":"SOEDTNN13772A39D94","hasSleeve":false},{"title":"Blue Monk","artist":"Thelonious Monk","cover":"http://cdn-images.deezer.com/images/cover/023727db68f4edbb78eb11808fd95574/400x400-000000-80-0-0.jpg","year":"1999","id":"SOATUCE144AD0E89D1","hasSleeve":false},{"title":"Las Vegas Tango","artist":"Gil Evans","cover":"http://cdn-images.deezer.com/images/cover/316f0911a56060678c224120387cd7a8/400x400-000000-80-0-0.jpg","year":"1964","id":"SOFDOCY13775C36109","hasSleeve":false},{"title":"Sandu","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/acd61c42e28df7fbd337ffd3e6383908/400x400-000000-80-0-0.jpg","year":"1955","id":"SOAACEF13152A71E9D","hasSleeve":false}]');
var data2 = JSON.parse('[{"title":"You Got Me","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/80768e0c7f2662d74273404f879650bc/400x400-000000-80-0-0.jpg","year":"1999","id":"SOJANBO144BA08EC60","hasSleeve":false},{"title":"What\'s Golden","artist":"Jurassic 5","cover":"http://cdn-images.deezer.com/images/cover/c41c6c376770253f8805f5410308560c/400x400-000000-80-0-0.jpg","year":"2002","id":"SOMYUBT144C2877D88","hasSleeve":false},{"title":"Fazers","artist":"King Geedorah","cover":"http://cdn-images.deezer.com/images/cover/498d19a7bd8efcabfe19a9cff20036c4/400x400-000000-80-0-0.jpg","year":"2003","id":"SOCTFLE137686D44D0","hasSleeve":false},{"title":"Peachfuzz","artist":"KMD","cover":"http://cdn-images.deezer.com/images/cover/fb34d03a4518f2920abb3c9f149663c1/400x400-000000-80-0-0.jpg","year":"1991","id":"SORJEGE13719B8C358","hasSleeve":false},{"title":"None Shall Pass","artist":"Aesop Rock","cover":"http://cdn-images.deezer.com/images/cover/fd0130bb478ed7fff6ca8cc28693aef2/400x400-000000-80-0-0.jpg","year":"2007","id":"SOKJIZT1311AFE7DAE","hasSleeve":false},{"title":"MC\'s Act Like They Don\'t Know","artist":"KRS-One","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SORINAN1311AFD88CB","hasSleeve":false},{"title":"It\'s Tricky","artist":"Run-D.M.C.","cover":"http://cdn-images.deezer.com/images/cover/6738946c5c48780a0608842447cc0b47/400x400-000000-80-0-0.jpg","year":"1986","id":"SODJTQX144BD986FD6","hasSleeve":false},{"title":"Get By","artist":"Talib Kweli","cover":"http://cdn-images.deezer.com/images/cover/f81ec68d371c6c8c6b3499d5d89344f2/400x400-000000-80-0-0.jpg","year":"2002","id":"SOEGOYO13730DADE42","hasSleeve":false},{"title":"A Little Soul","artist":"Pete Rock","cover":"http://cdn-images.deezer.com/images/cover/9b1cf8de1f93088531e05f6d367714f9/400x400-000000-80-0-0.jpg","year":"2001","id":"SOCEROK12A6D4FA5FC","hasSleeve":false},{"title":"The Show Goes On","artist":"Lupe Fiasco","cover":"http://cdn-images.deezer.com/images/cover/4f1e0978615ffa5fd7433d7c3a72d0d5/400x400-000000-80-0-0.jpg","year":"2010","id":"SOCMPYA12C56413B5F","hasSleeve":false},{"title":"Wavin\' Flag","artist":"K\'naan","cover":"http://cdn-images.deezer.com/images/cover/c221e82e49c657ff2ddf42ab30038005/400x400-000000-80-0-0.jpg","year":"2010","id":"SOTBICN13759295452","hasSleeve":false},{"title":"You Gots To Chill","artist":"EPMD","cover":"http://cdn-images.deezer.com/images/cover/c1c225ca9accb0c13fb97f684b44937f/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHNXDQ141917E3E88","hasSleeve":false},{"title":"Everything Changes","artist":"Aceyalone","cover":"http://cdn-images.deezer.com/images/cover/05281dea6ebc150cc845242ef06f8675/400x400-000000-80-0-0.jpg","year":"2005","id":"SODYUQX131343A56B5","hasSleeve":false},{"title":"C.R.E.A.M.","artist":"Wu-Tang Clan","cover":"http://cdn-images.deezer.com/images/cover/f668b179366bb3ed623dd8bccd2f38eb/400x400-000000-80-0-0.jpg","year":"1993","id":"SOHYJIZ146037961A9","hasSleeve":false},{"title":"Sweetest Girl (Dollar Bill)","artist":"Wyclef Jean","cover":"http://cdn-images.deezer.com/images/cover/b986b2f1d3fa50a5a8a9402cd273af0d/400x400-000000-80-0-0.jpg","year":"2007","id":"SODUALI1313438B53E","hasSleeve":false},{"title":"Breathe And Stop","artist":"Q-Tip","cover":"http://cdn-images.deezer.com/images/cover/324315846539ae9a430638bd78538f2c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOEUVEH12B0B8086F5","hasSleeve":false},{"title":"Ms. Jackson","artist":"OutKast","cover":"http://cdn-images.deezer.com/images/cover/653316993a79f936dcdec7573e26256f/400x400-000000-80-0-0.jpg","year":"2001","id":"SOSRDPS144B28ECEB5","hasSleeve":false},{"title":"Children\'s Story","artist":"Slick Rick","cover":"http://cdn-images.deezer.com/images/cover/5ef85a738d6fd32120d0e2b5cbc0222f/400x400-000000-80-0-0.jpg","year":"1988","id":"SODQHOL144BD94C4FD","hasSleeve":false},{"title":"Paid In Full","artist":"Eric B. & Rakim","cover":"http://cdn-images.deezer.com/images/cover/9badf0e54dff9de69211a75179750d88/400x400-000000-80-0-0.jpg","year":"2002","id":"SOBTYFF146009D2312","hasSleeve":false},{"title":"Watch Out Now","artist":"The Beatnuts","cover":"http://cdn-images.deezer.com/images/cover/587758a5b55bd4c07ed2b226bc352fa2/400x400-000000-80-0-0.jpg","year":"1999","id":"SONJBOI1315CD489EC","hasSleeve":false},{"title":"Shadowboxin\' (Album Version (Explicit))","artist":"GZA","cover":"http://cdn-images.deezer.com/images/cover/48a9e31ff33ba3f75501dd7a366b9cd1/400x400-000000-80-0-0.jpg","year":"1995","id":"SOCMSVB12B0B808230","hasSleeve":false},{"title":"Luchini Aka This Is It","artist":"Camp Lo","cover":"http://cdn-images.deezer.com/images/cover/b2244fbcf3841f0ca9ce7cd3166e5ce9/400x400-000000-80-0-0.jpg","year":"1997","id":"SOCLSAD13134399947","hasSleeve":false},{"title":"Uknowhowwedu","artist":"Bahamadia","cover":"http://cdn-images.deezer.com/images/cover/714d1810cde9dfc9401f8e89cd21852c/400x400-000000-80-0-0.jpg","year":"1996","id":"SOKILAT12A6D4F7FC7","hasSleeve":false},{"title":"Won\'t Do","artist":"J Dilla","cover":"http://cdn-images.deezer.com/images/cover/088f163087d7af72881db574eba40674/400x400-000000-80-0-0.jpg","year":"2006","id":"SOGHARK12A58A7D128","hasSleeve":false},{"title":"Crazy","artist":"Gnarls Barkley","cover":"http://cdn-images.deezer.com/images/cover/d6c9abb3972dee7b6b8b624beb08b67c/400x400-000000-80-0-0.jpg","year":"2006","id":"SOBKMKP14509A7F36E","hasSleeve":false},{"title":"Full Clip","artist":"Gang Starr","cover":"http://cdn-images.deezer.com/images/cover/169f994d7ab2a8d868cde77fd566cbbf/400x400-000000-80-0-0.jpg","year":"1999","id":"SOAKAXG1456B07B9DA","hasSleeve":false},{"title":"Coastin\' feat. K. Flay","artist":"Zion I","cover":"http://cdn-images.deezer.com/images/cover/03ea1c4655b44c586e90dd4d5f9e1aac/400x400-000000-80-0-0.jpg","year":"2009","id":"SOVXZYY12AB0184DA4","hasSleeve":false},{"title":"One","artist":"Ghostface Killah","cover":"http://cdn-images.deezer.com/images/cover/3a5da6b535f5f7307cba62d42011cb5f/400x400-000000-80-0-0.jpg","year":"2000","id":"SOPDDBK1312A8A8FD5","hasSleeve":false},{"title":"Hip Hop","artist":"Mos Def","cover":"http://cdn-images.deezer.com/images/cover/89e28a0a93eff9dc574476710b5c09e2/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGWGSJ12AF72A8AC2","hasSleeve":false},{"title":"My Philosophy","artist":"Boogie Down Productions","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SODLVET12A58A77A31","hasSleeve":false},{"title":"Worst Comes To Worst","artist":"Dilated Peoples","cover":"http://cdn-images.deezer.com/images/cover/bef22b88d74c9fc79a0921d5f479518f/400x400-000000-80-0-0.jpg","year":"2001","id":"SODEKQK131677146C6","hasSleeve":false},{"title":"If You Must","artist":"Del the Funky Homosapien","cover":"http://cdn-images.deezer.com/images/cover/df1b0a28ee65efc54a5960991a96b872/400x400-000000-80-0-0.jpg","year":"2000","id":"SOREGQF12B0B80658E","hasSleeve":false},{"title":"When I B On Tha Mic","artist":"Rakim","cover":"http://cdn-images.deezer.com/images/cover/4ddcfa5e69a1b79acbe20f4ce282475c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOOCMSF136CA2E9BC1","hasSleeve":false},{"title":"Lyrical Swords","artist":"Ras Kass","cover":"http://cdn-images.deezer.com/images/cover/f24fe73ffa34b9f997ba4a2631c0334d/400x400-000000-80-0-0.jpg","year":"2005","id":"SODEXGO12A8C13C01D","hasSleeve":false},{"title":"Shimmy Shimmy Ya","artist":"Ol\' Dirty Bastard","cover":"http://cdn-images.deezer.com/images/cover/786388d368900f66f05bd3831bda4ff8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOYVNXN144B26B71A2","hasSleeve":false},{"title":"The Seed (2.0)","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/411ffd8911f1fc05c205e86509f6eca1/400x400-000000-80-0-0.jpg","year":"2002","id":"SOCZZUU144F500F16F","hasSleeve":false},{"title":"Ice Cream","artist":"Raekwon","cover":"http://cdn-images.deezer.com/images/cover/75c9f84b189c2bc310647e61b7a6d5e8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOWTQFY135C395E98C","hasSleeve":false},{"title":"Milk The Cow","artist":"Cappadonna","cover":"http://cdn-images.deezer.com/images/cover/5953b45d6716fcb3b2fd222072ac4029/400x400-000000-80-0-0.jpg","year":"1998","id":"SOCEGCF1311AFE5D52","hasSleeve":false},{"title":"Runnin\'","artist":"The Pharcyde","cover":"http://cdn-images.deezer.com/images/cover/71de7ca1aea063a87dca08907d7d9d11/400x400-000000-80-0-0.jpg","year":"2013","id":"SOLFYAD137AD7633B2","hasSleeve":false},{"title":"The Choice Is Yours","artist":"Black Sheep","cover":"http://cdn-images.deezer.com/images/cover/d8ac4fae559fb005ddf7f0ed5adbf2f9/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEVEPY12A6310EAD3","hasSleeve":false},{"title":"Tennessee","artist":"Arrested Development","cover":"http://cdn-images.deezer.com/images/cover/2c7039e6188be44a8600a8f87edb5ec7/400x400-000000-80-0-0.jpg","year":"1992","id":"SOIXAYX12A8C139032","hasSleeve":false},{"title":"Sugar Hill","artist":"AZ","cover":"http://cdn-images.deezer.com/images/cover/b2eac1235c5ec67612d2fa0cce3c7905/400x400-000000-80-0-0.jpg","year":"1995","id":"SOECJXV136A5B5EB5E","hasSleeve":false},{"title":"Loungin\'","artist":"Guru","cover":"http://cdn-images.deezer.com/images/cover/9af047171c514d7d558be4d2eb0a637d/400x400-000000-80-0-0.jpg","year":"2008","id":"SOHLCCS1312A8AD2C6","hasSleeve":false},{"title":"La Rhumba","artist":"Bobby Digital","cover":"http://cdn-images.deezer.com/images/cover/ac98a11c434ca76b55553eaa1722a4ad/400x400-000000-80-0-0.jpg","year":"2002","id":"SOFXNEJ12B0B80BD35","hasSleeve":false},{"title":"N.Y. State Of Mind","artist":"Nas","cover":"http://cdn-images.deezer.com/images/cover/e7f5acdfbc1c49bc4520938b4d775ec6/400x400-000000-80-0-0.jpg","year":"1994","id":"SOFQKQO1312FE0065F","hasSleeve":false},{"title":"Award Tour","artist":"A Tribe Called Quest","cover":"http://cdn-images.deezer.com/images/cover/aacb57691f97456e6594d8e991bb81bb/400x400-000000-80-0-0.jpg","year":"1993","id":"SODGQBF144BD8F4FD1","hasSleeve":false},{"title":"My Definition Of A Boombastic Jazz Style","artist":"Dream Warriors","cover":"http://cdn-images.deezer.com/images/cover/1f9bfa4c7665e07fc7dfc7ab4e59ec49/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEHHZE144E604C29B","hasSleeve":false},{"title":"Ready or Not","artist":"Fugees","cover":"http://cdn-images.deezer.com/images/cover/04a5526b7b94c6e2d617ade762ddf5dc/400x400-000000-80-0-0.jpg","year":"1996","id":"SOCGQAJ136077E8945","hasSleeve":false}]');

var bottomBar  = document.getElementById('bottom-bar');
var buttonPrev = document.getElementById('button-prev');
var buttonShow = document.getElementById('button-show');
var buttonNext = document.getElementById('button-next');

cratedigger.init({

    elements: {
        rootContainerId     : 'cratedigger',
        canvasContainerId   : 'cratedigger-canvas',
        loadingContainerId  : 'cratedigger-loading',
        infoContainerId     : 'cratedigger-info',
        titleContainerId    : 'cratedigger-record-title',
        artistContainerId   : 'cratedigger-record-artist',
        coverContainerId    : 'cratedigger-record-cover'
    },

    onInfoPanelOpened: function() {
    	classie.add(bottomBar, 'closed');
    },

	onInfoPanelClosed: function() {
		classie.remove(bottomBar, 'closed');
	}
});

cratedigger.loadRecords(data, true);

buttonPrev.addEventListener('click', function(e) {
	cratedigger.selectPrevRecord();
    return false;
}, false);

buttonShow.addEventListener('click', function(e) {
	if (cratedigger.getSelectedRecord()) {
		cratedigger.flipSelectedRecord();
	} else {
		cratedigger.selectNextRecord();
	}
    return false;
}, false);

buttonNext.addEventListener('click', function(e) {
	cratedigger.selectNextRecord();
    return false;
}, false);
},{"./cratedigger":2}],2:[function(require,module,exports){
(function (global){
/*
                  _____              _____              _____             _______
                 /\    \            /\    \            /\    \           /::\    \
                /::\    \          /::\    \          /::\    \         /::::\    \
               /::::\    \         \:::\    \        /::::\    \       /::::::\    \
              /::::::\    \         \:::\    \      /::::::\    \     /::::::::\    \
             /:::/\:::\    \         \:::\    \    /:::/\:::\    \   /:::/~~\:::\    \
            /:::/__\:::\    \         \:::\    \  /:::/__\:::\    \ /:::/    \:::\    \
           /::::\   \:::\    \        /::::\    \ \:::\   \:::\    \:::/    / \:::\    \
          /::::::\   \:::\    \__    /::::::\    \_\:::\   \:::\    \:/____/   \:::\____\
         /:::/\:::\   \:::\____\ \  /:::/\:::\    \ \:::\   \:::\    \    |     |:::|    |
        /:::/  \:::\   \:::|    | \/:::/  \:::\____\ \:::\   \:::\____\___|     |:::|____|
        \::/   |::::\  /:::|____| /:::/    \::/    /  \:::\   \::/    /   _\___/:::/    /
         \/____|:::::\/:::/    /\/:::/    / \/____/\   \:::\   \/____/:\ |::| /:::/    /
               |:::::::::/    /:::::/    /      \:::\   \:::\    \  \:::\|::|/:::/    /
               |::|\::::/    /\::::/____/        \:::\   \:::\____\  \::::::::::/    /
               |::| \::/____/  \:::\    \         \:::\  /:::/    /   \::::::::/    /
               |::|  ~|         \:::\    \         \:::\/:::/    /     \::::::/    /
               |::|   |          \:::\    \         \::::::/    /       \::::/____/
               \::|   |           \:::\____\         \::::/    /         |::|    |
                \:|   |            \::/    /          \::/    /          |::|____|
                 \|___|             \/____/            \/____/            ~~

                          __             .___.__                                   __
       ________________ _/  |_  ____   __| _/|__| ____   ____   ___________       |__| ______
     _/ ___\_  __ \__  \\   __\/ __ \ / __ | |  |/ ___\ / ___\_/ __ \_  __ \      |  |/  ___/
     \  \___|  | \// __ \|  | \  ___// /_/ | |  / /_/  > /_/  >  ___/|  | \/      |  |\___ \
      \___  >__|  (____  /__|  \___  >____ | |__\___  /\___  / \___  >__|  /\ /\__|  /____  >
          \/           \/          \/     \/   /_____//_____/      \/      \/ \______|    \/


*/



/*=======================================================
=            cratedigger.js v0.0.1 - by risq            =
=======================================================*/
'use strict';

var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null);

/*==========  Inject all external modules to THREE.js ==========*/

require('./threejs_modules/ShaderPass')(THREE);
require('./threejs_modules/CopyShader')(THREE);
require('./threejs_modules/RenderPass')(THREE);
require('./threejs_modules/DoFShader')(THREE);
require('./threejs_modules/FXAAShader')(THREE);
require('./threejs_modules/MaskPass')(THREE);
require('./threejs_modules/EffectComposer')(THREE);

/*=================================
=            VARIABLES            =
=================================*/

var options = {},
    exports = {}, // Object for public APIs


    /*==========  DOM container elements  ==========*/

    rootContainerElement,
    canvasContainerElement,
    loadingContainerElement,
    infoContainerElement,
    titleInfoElement,
    artistInfoElement,
    coverInfoElement,


    /*==========  Three.js objects  ==========*/

    stats,
    scene,
    camera,
    target,
    renderer,
    light,
    leftLight,
    rightLight,
    composer,
    FXAA,
    dof,
    gui,
    depthTarget,
    depthShader,
    depthUniforms,
    depthMaterial,


    /*==========  Feature test  ==========*/

    // TODO: to fix - supports = !!document.querySelector && !!root.addEventListener,


    /*==========  Objects & data arrays  ==========*/

    crates = [],
    records = [],
    recordsDataList = [],


    /*==========  Three.js objects containers  ==========*/

    rootContainer,
    cratesContainer,
    recordsContainer,


    /*==========  States, util vars  ==========*/

    canvasWidth,
    canvasHeight,
    dpr,
    scrollRecordsTimeout,
    isLoading = false,
    infoPanelState = "closed",
    isScrolling = false,
    doRender = true,
    mouse = {
        x: 0,
        y: 0
    },
    mouseDownPos = {
        x: 0,
        y: 0
    },
    targetCameraPos = {
        x: 0,
        y: 0
    },
    selectedRecord = -1,
    shownRecord = -1,
    loadedRecords = 0,


    /*==========  Materials  ==========*/

    wood_material,


    /*==========  Default settings  ==========*/

    defaults = {
        debug: true,
        canvasWidth: null,
        canvasHeight: null,
        nbCrates: 2,
        recordsPerCrate: 24,
        lightIntensity: 1,
        cameraMouseMove: true,
        backgroundColor: 0x111111,
        sleeveColor: 0x0d0702,
        sleeveMaskTexture: 'img/sleeve.png',
        crateTexture: 'img/wood.jpg',
        closeInfoPanelOnClick: true,
        closeInfoPanelOnScroll: true,
        infoPanelOpacity: 0.9,
        postprocessing: true,
        blurAmount: 0.4,
        updateCanvasSizeOnWindowResize: true,
        onInfoPanelOpened: function () {},
        onInfoPanelClosed: function () {},
        onLoadingEnd: function () {},
        elements: {
            rootContainerId: 'cratedigger',
            canvasContainerId: 'cratedigger-canvas',
            loadingContainerId: 'cratedigger-loading',
            infoContainerId: 'cratedigger-info',
            titleContainerId: 'cratedigger-record-title',
            artistContainerId: 'cratedigger-record-artist',
            coverContainerId: 'cratedigger-record-cover'
        },
        constants: {
            recordMoveTime: 1000,
            cameraMoveTime: 800,
            infoOpenTime: 800,
            recordBaseY: 5,
            recordShownY: 25,
            recordFlippedY: 110,
            targetBasePosition: {
                x: -20,
                y: 10,
                z: 0
            },
            cameraBasePosition: {
                x: 280,
                y: 200,
                z: 180
            },
            cameraFocusPosition: {
                x: 160,
                y: 190,
                z: 85
            },
            cameraMouseMoveSpeedY: 0.07,
            cameraMouseMoveSpeedZ: 0.03,
            grabSensitivity: 6
        }
    };


/*===============================
=            CLASSES            =
===============================*/


/*==========  Record Class  ==========*/

var Record = function ( id, crateId, pos ) {

    this.id = id;
    this.crateId = crateId;
    this.pos = pos;
    this.state = 'out';
    this.recordXPos = -62 + ( 135 / options.recordsPerCrate ) * pos;
    this.mesh = new THREE.Mesh( new THREE.BoxGeometry( 100, 1.5, 100, 1, 1, 1 ), new THREE.MeshFaceMaterial( getRecordMaterial( null, false ) ) );
    this.mesh.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 50, 0, 0 ) );
    this.mesh.position.set( this.recordXPos, options.constants.recordBaseY, 0 );
    this.mesh.rotation.z = Math.PI / 2;
    this.mesh.recordId = id;
    this.absolutePosition = new THREE.Vector3();

    this.setUnactive();
    this.pushRecord();

};

Record.prototype.log = function () {

    console.log( "Record n°", this.id,
        "crateId =", this.crateId,
        "pos =", this.pos );

};

Record.prototype.setActive = function () {

    this.active = true;
    this.mesh.visible = true;

};

Record.prototype.setUnactive = function () {

    this.active = false;
    this.mesh.visible = false;

};

Record.prototype.showRecord = function () {

    if ( this.state !== 'shown' ) {

        this.state = 'shown';
        this.absolutePosition.setFromMatrixPosition( this.mesh.matrixWorld );

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: options.constants.recordShownY
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( target.position )
            .to( {
                x: this.recordXPos,
                y: 50 + options.constants.recordShownY,
                z: this.absolutePosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( camera.position )
            .to( {
                x: this.recordXPos + options.constants.cameraFocusPosition.x,
                y: options.constants.cameraFocusPosition.y,
                z: this.absolutePosition.z + options.constants.cameraFocusPosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pushRecord = function () {

    if ( this.state != 'pushed' ) {

        this.state = 'pushed';

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: options.constants.recordBaseY
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 + Math.PI / 7
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pullRecord = function () {

    if ( this.state !== 'pulled' ) {

        this.state = 'pulled';

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: options.constants.recordBaseY
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 - Math.PI / 7
            }, options.constants.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.flipRecord = function ( done ) {

    this.state = 'flipped';

    new TWEEN.Tween( this.mesh.position )
        .to( {
            y: options.constants.recordFlippedY
        }, options.constants.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( this.mesh.rotation )
        .delay( options.constants.infoOpenTime / 4 )
        .to( {
            y: Math.PI
        }, options.constants.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( target.position )
        .to( {
            x: this.recordXPos,
            y: options.constants.recordFlippedY + 50,
            z: this.absolutePosition.z
        }, options.constants.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()
        .onComplete( done );

    new TWEEN.Tween( camera.position )
        .to( {
            x: this.recordXPos + options.constants.cameraFocusPosition.x + 80,
            y: options.constants.cameraFocusPosition.y - 50,
        }, options.constants.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

};

Record.prototype.flipBackRecord = function ( done , noCameraTween ) {

    if ( this.state === 'flipped' ) {

        new TWEEN.Tween( this.mesh.position )
            .delay( options.constants.infoOpenTime / 2 )
            .to( {
                y: options.constants.recordBaseY
            }, options.constants.infoOpenTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                y: 0
            }, options.constants.infoOpenTime / 2 )
            .easing( TWEEN.Easing.Quartic.Out ).start()
            .onComplete( done );

        if (!noCameraTween) {
            
            new TWEEN.Tween( target.position )
                .delay( options.constants.infoOpenTime / 2 )
                .to( {
                    x: this.recordXPos,
                    y: 75,
                    z: this.absolutePosition.z
                }, options.constants.infoOpenTime )
                .easing( TWEEN.Easing.Quartic.Out ).start();

            new TWEEN.Tween( camera.position )
                .to( {
                    x: this.recordXPos + options.constants.cameraFocusPosition.x,
                    y: options.constants.cameraFocusPosition.y,
                }, options.constants.cameraMoveTime )
                .easing( TWEEN.Easing.Quartic.Out ).start();
            
        }

    }
};


/*====================================
=            BASE METHODS            =
====================================*/


var extend = function ( defaults, options ) {

    for ( var key in options ) {

        if ( Object.prototype.hasOwnProperty.call( options, key ) ) {

            defaults[ key ] = options[ key ];

        }
    }

    return defaults;
};

var animate = function () {

    if ( doRender ) {

        requestAnimationFrame( animate );
        render();

        if ( options.debug ) {

            stats.update();

        }
    }
};

var render = function () {

    TWEEN.update();
    updateShownRecord();

    if ( options.cameraMouseMove ) {

        targetCameraPos.x = ( mouse.x / canvasWidth - 0.5 ) * 0.25; // inverse axis?
        targetCameraPos.y = ( mouse.y / canvasWidth - 0.5 ) * 0.25;
        rootContainer.rotation.y += options.constants.cameraMouseMoveSpeedY * ( targetCameraPos.x - rootContainer.rotation.y );
        rootContainer.rotation.z += options.constants.cameraMouseMoveSpeedZ * ( targetCameraPos.y - rootContainer.rotation.z );

    }

    camera.lookAt( target.position );

    if ( options.postprocessing ) {

        scene.overrideMaterial = depthMaterial;
        renderer.render( scene, camera, depthTarget );
        scene.overrideMaterial = null;
        composer.render();

    } else {

        renderer.render( scene, camera );

    }
};

/*
 * Loading methods
 */
var unloadRecords = function () {

    for ( var i = 0; i < records.length; i++ ) {

        records[ i ].data = null;
        records[ i ].setUnactive();

    }

    loadedRecords = 0;
    recordsDataList = [];

};


var loadRecords = function ( recordsData, shuffleBeforeLoading, done ) {

    resetShownRecord( true );

    showLoading( function () {

        if ( loadedRecords > 0 ) {

            unloadRecords();

        }

        if ( shuffleBeforeLoading ) {

            recordsData = shuffle( recordsData );

        }

        for ( var i = 0; i < records.length && i < recordsData.length; i++ ) {
            
            records[ i ].data = recordsData[ i ];
            records[ i ].setActive();
            records[ i ].mesh.material.materials = getRecordMaterial( recordsData[ i ].cover, recordsData[ i ].hasSleeve );

        }

        // why ??
        // loadedRecords = recordsData.length < records.length ? recordsData.length : records.length;
        loadedRecords = records.length;
        recordsDataList = recordsData;
        
        setTimeout( function () {

            hideLoading( loadingContainerElement );
            options.onLoadingEnd();

            if ( done ) {

                done();

            }

        }, 2000 );
    } );
};

var shuffleRecords = function () {

    var shuffledRecords = recordsDataList;
    shuffledRecords = shuffle( shuffledRecords );
    loadRecords( shuffledRecords );

};


/*=================================================
=            RECORDS SELECTION METHODS            =
=================================================*/


var selectRecord = function ( id ) {

    if ( infoPanelState === 'opened' ) {

        flipBackSelectedRecord();

    } else if ( infoPanelState !== 'opening' && infoPanelState !== 'closing' ) {

        selectedRecord = id;

    }
};

var flipSelectedRecord = function () {

    if ( records[ selectedRecord ] ) {

        fillInfoPanel( records[ selectedRecord ] );
        infoPanelState = 'opening';

        records[ selectedRecord ].flipRecord( function () {

            infoPanelState = 'opened';

        } );

        options.onInfoPanelOpened();

        setTimeout( function () {

            fadeIn( infoContainerElement, options.infoPanelOpacity );

        }, 300 );
    }
};

var flipBackSelectedRecord = function (force) {

    if ( infoPanelState === 'opened' ) {

        fadeOut( infoContainerElement );
        infoPanelState = 'closing';

        records[ selectedRecord ].flipBackRecord( function () {

            infoPanelState = 'closed';
            options.onInfoPanelClosed();

        }, force );
    }
};

var updateShownRecord = function () {

    if ( infoPanelState === 'closed' && shownRecord != selectedRecord ) {

        //console.log('updateShownRecord..');
        shownRecord = selectedRecord;

        for ( var recordId = 0; recordId < loadedRecords; recordId++ ) {

            if ( selectedRecord == -1 ) {

                records[ recordId ].pushRecord();

            } else if ( recordId > selectedRecord &&
                recordId > records[ selectedRecord ].crateId * options.recordsPerCrate &&
                recordId < ( records[ selectedRecord ].crateId * options.recordsPerCrate ) + options.recordsPerCrate ) {

                records[ recordId ].pullRecord();

            } else if ( recordId == selectedRecord ) {

                records[ recordId ].showRecord();

            } else {

                records[ recordId ].pushRecord();

            }
        }
    }
};

var resetShownRecord = function ( force ) {

    if ( infoPanelState === 'opened' && !force ) {

        flipBackSelectedRecord();

    } else if ( infoPanelState !== 'opening' && infoPanelState !== 'closing' ) {

        if ( infoPanelState === 'opened' ) {
            flipBackSelectedRecord(true);
        }

        selectedRecord = -1;
        new TWEEN.Tween( target.position )
            .to( {
                x: options.constants.targetBasePosition.x,
                y: options.constants.targetBasePosition.y,
                z: options.constants.targetBasePosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( camera.position )
            .to( {
                x: options.constants.cameraBasePosition.x,
                y: options.constants.cameraBasePosition.y,
                z: options.constants.cameraBasePosition.z
            }, options.constants.cameraMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();
    }
};

var selectPrevRecord = function () {

    selectRecord(getPrevAvailableRecord(selectedRecord));
    
};

var selectNextRecord = function () {

    selectRecord(getNextAvailableRecord(selectedRecord));

};

var getPrevAvailableRecord = function (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord < loadedRecords - 1 ) {

        fromRecord = fromRecord + 1;

    } else {

        fromRecord = 0;

    }

    return records[ fromRecord ].active ? fromRecord : getPrevAvailableRecord(fromRecord);
    
};

var getNextAvailableRecord = function (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord > 0 ) {

        fromRecord = fromRecord - 1;

    } else {

        fromRecord = loadedRecords - 1;

    }

    return records[ fromRecord ].active ? fromRecord : getNextAvailableRecord(fromRecord);

};

var navigateRecords = function ( direction ) {

    if ( infoPanelState === 'closed' ) {

        if ( direction === 'prev' ) {

            selectPrevRecord();

        } else {

            selectNextRecord();

        }

    } else if ( infoPanelState === 'opened' && options.closeInfoPanelOnScroll ) {

        flipBackSelectedRecord();

    }

};

var scrollRecords = function ( baseY, oldDelta ) {

    oldDelta = !oldDelta || Math.abs( oldDelta ) > 0.5 ? 0.5 : Math.abs( oldDelta );
    var inverseDelta = 1 - oldDelta;
    var scrollSpeed = inverseDelta * inverseDelta * inverseDelta * 300;

    scrollRecordsTimeout = setTimeout( function () {
        renderer.domElement.classList.add('grab');
        var delta = ( baseY - mouse.y ) / canvasHeight;
        if ( delta > 0 ) {
            selectNextRecord();
            //console.log("NEXT RECORD " + delta);
        } else if ( delta < 0 ) {
            selectPrevRecord();
            //console.log("PREV RECORD " + delta);
        }
        scrollRecords( baseY, delta );
    }, scrollSpeed );

};

var fillInfoPanel = function ( record ) {

    if ( record.data.title ) {

        titleInfoElement.innerHTML = record.data.title;

    }

    if ( record.data.artist ) {

        artistInfoElement.innerHTML = record.data.artist;

    }

    if ( record.data.cover ) {

        coverInfoElement.style.backgroundImage = 'url(' + record.data.cover + ')';

    }
};


/*=======================================
=            EVENTS HANDLING            =
=======================================*/


var onMouseMoveEvent = function ( e ) {

    var m_posx = 0,
        m_posy = 0,
        e_posx = 0,
        e_posy = 0,
        obj = this;

    //get mouse position on document crossbrowser
    if ( !e ) {

        e = window.event;

    }

    if ( e.pageX || e.pageY ) {

        m_posx = e.pageX;
        m_posy = e.pageY;
    } else if ( e.clientX || e.clientY ) {

        m_posx = e.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        m_posy = e.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;

    }

    //get parent element position in document
    if ( obj.offsetParent ) {

        do {

            e_posx += obj.offsetLeft;
            e_posy += obj.offsetTop;

        } while ( obj = obj.offsetParent ); // jshint ignore:line

    }

    // mouse position minus elm position is mouseposition relative to element:
    mouse.x = m_posx - e_posx;
    mouse.y = m_posy - e_posy;
};

var onScrollEvent = function ( e ) {


    if ( wheelDirection( e ) < 0 ) {

        navigateRecords( 'prev' );

    } else {

        navigateRecords( 'next' );

    }

    return false;
};

var onClickEvent = function ( mouseDownPos ) {

    if ( infoPanelState === 'closed' ) {

        var vectorPos = {
            x: ( ( ( mouseDownPos.x - renderer.domElement.offsetLeft ) / ( renderer.domElement.width ) ) * 2 - 1 ),
            y: ( -( ( mouseDownPos.y - renderer.domElement.offsetTop ) / ( renderer.domElement.height ) ) * 2 + 1 ),
            z: 0.5
        };

        var vector = new THREE.Vector3( vectorPos.x, vectorPos.y, vectorPos.z );
        vector.unproject( camera );
        var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
        var intersects = raycaster.intersectObjects( cratesContainer.children, true );

        // If intersect something
        if ( intersects.length > 0 ) {

            var clickedRecord;

            // Get the first visible record intersected
            for ( var i = 0; i < intersects.length; i++ ) {

                // If intercept a mesh which is not a record, break
                if ( typeof(intersects[ i ].object.recordId) === 'undefined' ) {

                    break;

                } else if ( intersects[ i ].object.visible && intersects[ i ].object.recordId >= 0 ) {

                    clickedRecord = records[ intersects[ i ].object.recordId ];

                    break;

                }

            }

            // If there is one
            if ( clickedRecord ) {

                if ( selectedRecord === clickedRecord.id ) {

                    flipSelectedRecord();

                } else {

                    selectRecord( clickedRecord.id );

                }

            }

            // All intersected records are not visibles
            else {

                resetShownRecord();

            }
        }

        // No record has been intersected
        else {

            resetShownRecord();

        }
    }
};

var onMouseDownEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );

    if ( infoPanelState === 'closed' ) {

        scrollRecords( mouse.y );
        mouseDownPos = {
            x: mouse.x,
            y: mouse.y
        };

    } else if ( infoPanelState === 'opened' && options.closeInfoPanelOnClick ) {

        flipBackSelectedRecord();

    }
};

var onMouseUpEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );
    renderer.domElement.classList.remove('grab');

    if ( coordsEqualsApprox( mouseDownPos, mouse, options.constants.grabSensitivity ) ) {

        onClickEvent( mouseDownPos );

    }

};

var onKeyDownEvent = function ( e ) {

    if ( e.keyCode === 37 || e.keyCode === 38 ) {

        navigateRecords( 'next' );

    } else if ( e.keyCode === 39 || e.keyCode === 40 ) {

        navigateRecords( 'prev' );

    }
};

var onWindowResizeEvent = function ( e ) {

    calculateCanvasSize();
    setCanvasDimensions();

    renderer.setSize( canvasWidth, canvasHeight );
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    dof.uniforms.tDepth.value = depthTarget;
    dof.uniforms.size.value.set( canvasWidth, canvasHeight );
    dof.uniforms.textel.value.set( 1.0 / canvasWidth, 1.0 / canvasHeight );
    FXAA.uniforms.resolution.value.set( 1 / canvasWidth, 1 / canvasHeight );

};


/*======================================
=              UI METHODS              =
======================================*/


var showLoading = function ( done ) {

    fadeIn( loadingContainerElement, 1, done );

};

var hideLoading = function ( done ) {

    fadeOut( loadingContainerElement, done );

};




/*======================================
=            INITIALISATION            =
======================================*/


var initScene = function () {

    // scene, renderer, camera,...
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( {
        antialias: true
    } );
    renderer.setSize( canvasWidth, canvasHeight );

    canvasContainerElement.appendChild( renderer.domElement );
    renderer.domElement.id = "context";
    renderer.setClearColor( options.backgroundColor, 1 );

    camera = new THREE.PerspectiveCamera( 45, canvasWidth / canvasHeight, 0.1, 20000 );
    camera.focalLength = 45;
    camera.frameSize = 32;
    camera.setLens( camera.focalLength, camera.frameSize );

    target = new THREE.Object3D();
    //        target = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10, 1, 1, 1));
    //        scene.add(target);
    camera.lookAt( target.position );

    var wood_texture = THREE.ImageUtils.loadTexture( options.crateTexture );
    wood_texture.anisotropy = renderer.getMaxAnisotropy();
    wood_material = new THREE.MeshLambertMaterial( {
        map: wood_texture
    } );

    rootContainer = new THREE.Object3D();
    cratesContainer = new THREE.Object3D();
    scene.add( rootContainer );
    rootContainer.add( cratesContainer );

    initCrates();
    initRecords();

    light = new THREE.PointLight( 0xFFFFFF, options.lightIntensity * 1.1 );
    light.position.set( 300, 80, 0 );
    scene.add( light );

    leftLight = new THREE.PointLight( 0xFFFFFF, options.lightIntensity * 0.6 );
    leftLight.position.set( -100, 300, 1000 );
    scene.add( leftLight );

    rightLight = new THREE.PointLight( 0xFFFFFF, options.lightIntensity * 0.6 );
    rightLight.position.set( -100, 300, -1000 );
    scene.add( rightLight );

    initPostProcessing();

    rootContainerElement.addEventListener( 'DOMMouseScroll', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousewheel', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousemove', onMouseMoveEvent, false );
    rootContainerElement.addEventListener( 'mousedown', onMouseDownEvent, false );
    rootContainerElement.addEventListener( 'mouseup', onMouseUpEvent, false );

    window.addEventListener( 'keydown', onKeyDownEvent, false ); 

    if ( options.updateCanvasSizeOnWindowResize ) {

        window.addEventListener( 'resize', onWindowResizeEvent, false );

    }

    // DOM setup
    rootContainerElement.style.position = 'relative';
    canvasContainerElement.style.position = 'absolute';
    infoContainerElement.style.position = 'absolute';
    loadingContainerElement.style.position = 'absolute';

    setCanvasDimensions();

    infoContainerElement.style.display = 'none';

    if ( options.debug ) {

        initDebug();
        initGUI();

    }

    resetShownRecord();
    animate();
};

var initPostProcessing = function () {

    depthShader = THREE.ShaderLib.depthRGBA;
    depthUniforms = THREE.UniformsUtils.clone( depthShader.uniforms );

    depthMaterial = new THREE.ShaderMaterial( {
        fragmentShader: depthShader.fragmentShader,
        vertexShader: depthShader.vertexShader,
        uniforms: depthUniforms
    } );
    depthMaterial.blending = THREE.NoBlending;

    depthTarget = new THREE.WebGLRenderTarget( canvasWidth, canvasHeight, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
    } );

    composer = new THREE.EffectComposer( renderer );
    composer.addPass( new THREE.RenderPass( scene, camera ) );


    /*==========  Depth of field shader  ==========*/

    dof = new THREE.ShaderPass( THREE.DoFShader );
    dof.uniforms.tDepth.value = depthTarget;
    dof.uniforms.size.value.set( canvasWidth, canvasHeight );
    dof.uniforms.textel.value.set( 1.0 / canvasWidth, 1.0 / canvasHeight );

    //make sure that these two values are the same for your camera, otherwise distances will be wrong.
    dof.uniforms.znear.value = camera.near; //camera clipping start
    dof.uniforms.zfar.value = camera.far; //camera clipping end

    dof.uniforms.focalDepth.value = 5; //focal distance value in meters, but you may use autofocus option below
    dof.uniforms.focalLength.value = camera.focalLength; //focal length in mm
    dof.uniforms.fstop.value = 8.0; //f-stop value
    dof.uniforms.showFocus.value = false; //show debug focus point and focal range (orange = focal point, blue = focal range)

    dof.uniforms.manualdof.value = true; //manual dof calculation
    dof.uniforms.ndofstart.value = 11; //near dof blur start
    dof.uniforms.ndofdist.value = 80; //near dof blur falloff distance    
    dof.uniforms.fdofstart.value = 0; //far dof blur start
    dof.uniforms.fdofdist.value = 100; //far dof blur falloff distance 

    dof.uniforms.CoC.value = 0.03; //circle of confusion size in mm (35mm film = 0.03mm)    

    dof.uniforms.vignetting.value = false; //use optical lens vignetting?

    dof.uniforms.autofocus.value = true; //use autofocus in shader? disable if you use external focalDepth value
    dof.uniforms.focus.value.set( 0.35, 0.35 ); // autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right) 
    dof.uniforms.maxblur.value = options.blurAmount; //clamp value of max blur (0.0 = no blur,1.0 default)    

    dof.uniforms.threshold.value = 0; //highlight threshold;
    dof.uniforms.gain.value = 0; //highlight gain;

    dof.uniforms.bias.value = 0; //bokeh edge bias        
    dof.uniforms.fringe.value = 0; //bokeh chromatic aberration/fringing

    FXAA = new THREE.ShaderPass( THREE.FXAAShader );

    FXAA.uniforms.resolution.value.set( 1 / canvasWidth, 1 / canvasHeight );
    FXAA.renderToScreen = true;

    composer.addPass( dof );
    composer.addPass( FXAA );

};

var initDebug = function () {

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = "0";
    stats.domElement.style.top = "0";
    rootContainerElement.appendChild( stats.domElement );

    var debug = new THREE.Mesh( new THREE.BoxGeometry( 20, 20, 20, 1, 1, 1 ) );
    debug.position.set(
        light.position.x,
        light.position.y,
        light.position.z
    );
    scene.add( debug );

};

var initGUI = function () {

    var cameraFolder,
        cameraFocalLength,
        dofFolder,
        _last;

    gui = new dat.GUI();

    if ( options.postprocessing ) {

        cameraFolder = gui.addFolder( 'Camera' );
        cameraFocalLength = cameraFolder.add( camera, 'focalLength', 28, 200 ).name( 'Focal Length' );
        cameraFocalLength.onChange( updateCamera );

        dofFolder = gui.addFolder( 'Depth of Field' );
        dofFolder.add( dof.uniforms.focalDepth, 'value', 0, 10 ).name( 'Focal Depth' );
        dofFolder.add( dof.uniforms.fstop, 'value', 0, 22 ).name( 'F Stop' );
        dofFolder.add( dof.uniforms.maxblur, 'value', 0, 3 ).name( 'max blur' );

        dofFolder.add( dof.uniforms.showFocus, 'value' ).name( 'Show Focal Range' );

        dofFolder.add( dof.uniforms.manualdof, 'value' ).name( 'Manual DoF' );
        dofFolder.add( dof.uniforms.ndofstart, 'value', 0, 200 ).name( 'near start' );
        dofFolder.add( dof.uniforms.ndofdist, 'value', 0, 200 ).name( 'near falloff' );
        dofFolder.add( dof.uniforms.fdofstart, 'value', 0, 200 ).name( 'far start' );
        dofFolder.add( dof.uniforms.fdofdist, 'value', 0, 200 ).name( 'far falloff' );

        dofFolder.add( dof.uniforms.CoC, 'value', 0, 0.1 ).step( 0.001 ).name( 'circle of confusion' );

        dofFolder.add( dof.uniforms.vignetting, 'value' ).name( 'Vignetting' );
        dofFolder.add( dof.uniforms.vignout, 'value', 0, 2 ).name( 'outer border' );
        dofFolder.add( dof.uniforms.vignin, 'value', 0, 1 ).step( 0.01 ).name( 'inner border' );
        dofFolder.add( dof.uniforms.vignfade, 'value', 0, 22 ).name( 'fade at' );

        dofFolder.add( dof.uniforms.autofocus, 'value' ).name( 'Autofocus' );
        dofFolder.add( dof.uniforms.focus.value, 'x', 0, 1 ).name( 'focus x' );
        dofFolder.add( dof.uniforms.focus.value, 'y', 0, 1 ).name( 'focus y' );

        dofFolder.add( dof.uniforms.threshold, 'value', 0, 1 ).step( 0.01 ).name( 'threshold' );
        dofFolder.add( dof.uniforms.gain, 'value', 0, 100 ).name( 'gain' );

        dofFolder.add( dof.uniforms.bias, 'value', 0, 4 ).step( 0.01 ).name( 'bias' );
        dofFolder.add( dof.uniforms.fringe, 'value', 0, 5 ).step( 0.01 ).name( 'fringe' );

        dofFolder.add( dof.uniforms.noise, 'value' ).name( 'Use Noise' );
        dofFolder.add( dof.uniforms.namount, 'value', 0, 0.001 ).step( 0.0001 ).name( 'dither' );

        dofFolder.add( dof.uniforms.depthblur, 'value' ).name( 'Blur Depth' );
        dofFolder.add( dof.uniforms.dbsize, 'value', 0, 5 ).name( 'blur size' );

    }

    gui.close();

};

var updateCamera = function () {

    camera.setLens( camera.focalLength, camera.frameSize );
    camera.updateProjectionMatrix();
    dof.uniforms.focalLength.value = camera.focalLength;

};

var initCrates = function () {

    for ( var crateId = 0; crateId < options.nbCrates; crateId++ ) {
        var crate = createCrate( crateId );
        cratesContainer.add( crate );
    }
    cratesContainer.position.z = -( 110 - ( 110 * options.nbCrates ) ) / 2;

};

var createCrate = function ( id ) {

    crates[ id ] = new THREE.Object3D();

    var box_bottom = new THREE.Mesh( new THREE.BoxGeometry( 200, 10, 100 ), wood_material );
    crates[ id ].add( box_bottom );

    var box_left = new THREE.Mesh( new THREE.BoxGeometry( 200, 10, 80 ), wood_material );
    box_left.position.set( 0, 35, -55 );
    box_left.rotation.x = Math.PI / 2;
    crates[ id ].add( box_left );

    if ( id === 0 ) {
        var box_right = new THREE.Mesh( new THREE.BoxGeometry( 200, 10, 80 ), wood_material );
        box_right.position.set( 0, 35, 55 );
        box_right.rotation.x = Math.PI / 2;
        crates[ id ].add( box_right );
    }

    var box_back = new THREE.Mesh( new THREE.BoxGeometry( 80, 10, 120 ), wood_material );
    box_back.position.set( -105, 35, 0 );
    box_back.rotation.z = Math.PI / 2;
    crates[ id ].add( box_back );

    var box_front = new THREE.Mesh( new THREE.BoxGeometry( 40, 10, 100 ), wood_material );
    box_front.position.set( 95, 25, 0 );
    box_front.rotation.z = Math.PI / 2;
    crates[ id ].add( box_front );

    crates[ id ].position.z = -110 * id;
    return crates[ id ];

};

var initRecords = function () {

    var currentRecordId = 0;
    for ( var crateId = 0; crateId < crates.length; crateId++ ) {

        for ( var pos = 0; pos < options.recordsPerCrate; pos++ ) {
            createRecord( currentRecordId, crateId, pos );
            currentRecordId++;
        }
    }
};

var createRecord = function ( id, crateId, pos ) {

    var record = new Record( id, crateId, pos );
    crates[ crateId ].add( record.mesh );
    records.push( record );

};

var getRecordMaterial = function ( src, hasSleeve ) {

    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src ? src : '';

    var imgWidth = 400,
        imgHeight = 400,
        mapCanvas = document.createElement( 'canvas' );

    mapCanvas.width = mapCanvas.height = 400;

    var texture = new THREE.Texture( mapCanvas );
    texture.minFilter = THREE.LinearFilter;

    img.onload = function () {

        if ( hasSleeve ) {

            var sleeve = new Image();
            sleeve.src = options.sleeveMaskTexture;

            sleeve.onload = function () {

                var ctx = mapCanvas.getContext( '2d' );
                ctx.translate( imgWidth / 2, imgHeight / 2 );
                ctx.rotate( Math.PI / 2 );
                ctx.translate( -imgWidth / 2, -imgHeight / 2 );
                ctx.drawImage( img, 130, 130, 135, 135 );
                ctx.drawImage( sleeve, 0, 0, 400, 400 );
                texture.needsUpdate = true;

            };

        } else {

            var ctx = mapCanvas.getContext( '2d' );
            ctx.translate( imgWidth / 2, imgHeight / 2 );
            ctx.rotate( Math.PI / 2 );
            ctx.translate( -imgWidth / 2, -imgHeight / 2 );
            ctx.drawImage( img, 0, 0, 400, 400 );
            texture.needsUpdate = true;

        }
    };

    var sleeveMaterial = new THREE.MeshLambertMaterial( {

        color: options.sleeveColor

    } );

    var materials = [
        sleeveMaterial,
        sleeveMaterial,
        sleeveMaterial,
        // texture
        new THREE.MeshLambertMaterial( {
            color: 0xffffff,
            map: texture
        } ),
        sleeveMaterial,
        sleeveMaterial
    ];
    return materials;

};


/*=============================
=            UTILS            =
=============================*/


var wheelDistance = function ( e ) {

    if ( !e ) e = event;
    var w = e.wheelDelta,
        d = e.detail;
    if ( d ) {

        if ( w ) return w / d / 40 * d > 0 ? 1 : -1; // Opera
        else return -d / 3; // Firefox;

    } else return w / 120; // IE/Safari/Chrome
};

var wheelDirection = function ( e ) {

    if ( !e ) e = event;
    return ( e.detail < 0 ) ? 1 : ( e.wheelDelta > 0 ) ? 1 : -1;

};

var coordsEqualsApprox = function ( coord1, coord2, range ) {

    return ( Math.abs( coord1.x - coord2.x ) <= range ) && ( Math.abs( coord1.y - coord2.y ) <= range );

};

var fadeOut = function ( element, done ) {

    if ( element.style.opacity <= 0.1 ) {
        element.style.display = 'none';
        element.style.opacity = 0;
        if ( isFunction( done ) ) {
            done();
        }
    } else {
        element.style.opacity -= 0.1;
        setTimeout( function () {
            fadeOut( element, done );
        }, 10 );
    }
};

var fadeIn = function ( element, fadeTo, done, op ) {

    if ( !element.style.opacity || element.style.opacity && element.style.opacity < fadeTo ) {

        if ( element.style.display == 'none' ) {

            element.style.display = 'block';
            op = 0;

        } else if ( !element.style.display ) {

            op = element.style.opacity || 1;

        }

        op += 0.03;
        element.style.opacity = op;

        setTimeout( function () {

            fadeIn( element, fadeTo, done, op );

        }, 10 );

    } else {

        element.style.opacity = fadeTo;

        if ( isFunction( done ) ) {

            done();

        }
    }
};

var calculateCanvasSize = function () {

    canvasWidth = options.canvasWidth ? options.canvasWidth : rootContainerElement.clientWidth;
    canvasHeight = options.canvasHeight ? options.canvasHeight : rootContainerElement.clientHeight;

};

var setCanvasDimensions = function () {

    //rootContainerElement.style.height     = canvasHeight + 'px';
    canvasContainerElement.style.height = canvasHeight + 'px';
    infoContainerElement.style.height = canvasHeight + 'px';
    loadingContainerElement.style.height = canvasHeight + 'px';

    //rootContainerElement.style.width     = canvasWidth + 'px';
    canvasContainerElement.style.width = canvasWidth + 'px';
    infoContainerElement.style.width = canvasWidth + 'px';
    loadingContainerElement.style.width = canvasWidth + 'px';

};

function shuffle( v ) { // Jonas Raoni Soares Silva - http://jsfromhell.com/array/shuffle [rev. #1]

    for ( var j, x, i = v.length; i; j = parseInt( Math.random() * i ), x = v[ --i ], v[ i ] = v[ j ], v[ j ] = x );
    return v;

}

function isFunction( obj ) {

    return typeof obj == 'function' || false;

}


/*===============================
=            EXPORTS            =
===============================*/


/*==========  Public Methods  ==========*/

exports.init = function ( params ) {

    options = extend( defaults, params );
    // feature test
    // TODO: to fix - if ( !supports || !Modernizr.webgl ) return;
    console.log( 'Initializing cratedigger.js...' );

    if ( window.devicePixelRatio !== undefined ) {

        dpr = window.devicePixelRatio;

    } else {

        dpr = 1;

    }

    rootContainerElement = document.getElementById( options.elements.rootContainerId );
    if ( !rootContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find root container element.' );
        return;

    }
    canvasContainerElement = document.getElementById( options.elements.canvasContainerId );
    if ( !canvasContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find canvas container element.' );
        return;

    }
    loadingContainerElement = document.getElementById( options.elements.loadingContainerId );
    if ( !loadingContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find loading container element.' );
        return;

    }
    infoContainerElement = document.getElementById( options.elements.infoContainerId );
    if ( !infoContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find info container element.' );
        return;

    }
    titleInfoElement = document.getElementById( options.elements.titleContainerId );
    if ( !titleInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record title container element.' );
        return;

    }
    artistInfoElement = document.getElementById( options.elements.artistContainerId );
    if ( !artistInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record artist container element.' );
        return;

    }
    coverInfoElement = document.getElementById( options.elements.coverContainerId );
    if ( !coverInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find cover image container element.' );
        return;

    }

    calculateCanvasSize();

    initScene();
};

exports.selectRecord = function ( id ) {

    if ( id < 0 ) {

        resetShownRecord();

    } else if ( id > loadedRecords ) {

        selectedRecord = loadedRecords - 1;

    } else {

        selectedRecord = id;

    }
};

exports.startRender = function () {

    doRender = true;
    animate();

};

exports.stopRender = function () {

    doRender = false;

};

exports.enablePostprocessing = function () {

    options.postprocessing = true;

};

exports.disablePostprocessing = function () {

    options.postprocessing = false;

};

/*==========  Public getters  ==========*/

exports.getCanvas = function () {

    return renderer.domElement;

};

exports.getRecordsDataList = function () {

    return recordsDataList;

};

exports.getLoadedRecords = function () {

    return loadedRecords;

};

exports.getSelectedRecord = function () {

    return records[ selectedRecord ];

};


/*==========  Methods accessors  ==========*/

exports.loadRecords = loadRecords;
exports.unloadRecords = unloadRecords;
exports.resetShownRecord = resetShownRecord;
exports.shuffleRecords = shuffleRecords;
exports.flipSelectedRecord = flipSelectedRecord;
exports.selectPrevRecord = selectPrevRecord;
exports.selectNextRecord = selectNextRecord;
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;

/*==================================
=            PUBLIC API            =
==================================*/

module.exports = exports;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3JpcHRzL2NyYXRlZGlnZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICAgICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgLzo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgLzo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAvOjo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAvOjo6Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAvOjo6L35+XFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAvOjo6L19fXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgIC86OjovX19cXDo6OlxcICAgIFxcIC86OjovICAgIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAvOjo6OlxcICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXDo6Oi8gICAgLyBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAvOjo6Ojo6XFwgICBcXDo6OlxcICAgIFxcX18gICAgLzo6Ojo6OlxcICAgIFxcX1xcOjo6XFwgICBcXDo6OlxcICAgIFxcOi9fX19fLyAgIFxcOjo6XFxfX19fXFxcclxuICAgICAgICAgLzo6Oi9cXDo6OlxcICAgXFw6OjpcXF9fX19cXCBcXCAgLzo6Oi9cXDo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICAgIHwgICAgIHw6Ojp8ICAgIHxcclxuICAgICAgICAvOjo6LyAgXFw6OjpcXCAgIFxcOjo6fCAgICB8IFxcLzo6Oi8gIFxcOjo6XFxfX19fXFwgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFxfX198ICAgICB8Ojo6fF9fX198XHJcbiAgICAgICAgXFw6Oi8gICB8Ojo6OlxcICAvOjo6fF9fX198IC86OjovICAgIFxcOjovICAgIC8gIFxcOjo6XFwgICBcXDo6LyAgICAvICAgX1xcX19fLzo6Oi8gICAgL1xyXG4gICAgICAgICBcXC9fX19ffDo6Ojo6XFwvOjo6LyAgICAvXFwvOjo6LyAgICAvIFxcL19fX18vXFwgICBcXDo6OlxcICAgXFwvX19fXy86XFwgfDo6fCAvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6Ojo6Ojo6OjovICAgIC86Ojo6Oi8gICAgLyAgICAgIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICBcXDo6OlxcfDo6fC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fFxcOjo6Oi8gICAgL1xcOjo6Oi9fX19fLyAgICAgICAgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgIFxcOjo6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8IFxcOjovX19fXy8gIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAvOjo6LyAgICAvICAgXFw6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICB+fCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcLzo6Oi8gICAgLyAgICAgXFw6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgIHwgICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6Ojo6LyAgICAvICAgICAgIFxcOjo6Oi9fX19fL1xyXG4gICAgICAgICAgICAgICBcXDo6fCAgIHwgICAgICAgICAgIFxcOjo6XFxfX19fXFwgICAgICAgICBcXDo6OjovICAgIC8gICAgICAgICB8Ojp8ICAgIHxcclxuICAgICAgICAgICAgICAgIFxcOnwgICB8ICAgICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIHw6OnxfX19ffFxyXG4gICAgICAgICAgICAgICAgIFxcfF9fX3wgICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIH5+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9fICAgICAgICAgICAgIC5fX18uX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fXHJcbiAgICAgICBfX19fX19fX19fX19fX19fIF8vICB8XyAgX19fXyAgIF9ffCBfL3xfX3wgX19fXyAgIF9fX18gICBfX19fX19fX19fXyAgICAgICB8X198IF9fX19fX1xyXG4gICAgIF8vIF9fX1xcXyAgX18gXFxfXyAgXFxcXCAgIF9fXFwvIF9fIFxcIC8gX18gfCB8ICB8LyBfX19cXCAvIF9fX1xcXy8gX18gXFxfICBfXyBcXCAgICAgIHwgIHwvICBfX18vXHJcbiAgICAgXFwgIFxcX19ffCAgfCBcXC8vIF9fIFxcfCAgfCBcXCAgX19fLy8gL18vIHwgfCAgLyAvXy8gID4gL18vICA+ICBfX18vfCAgfCBcXC8gICAgICB8ICB8XFxfX18gXFxcclxuICAgICAgXFxfX18gID5fX3wgIChfX19fICAvX198ICBcXF9fXyAgPl9fX18gfCB8X19cXF9fXyAgL1xcX19fICAvIFxcX19fICA+X198ICAvXFwgL1xcX198ICAvX19fXyAgPlxyXG4gICAgICAgICAgXFwvICAgICAgICAgICBcXC8gICAgICAgICAgXFwvICAgICBcXC8gICAvX19fX18vL19fX19fLyAgICAgIFxcLyAgICAgIFxcLyBcXF9fX19fX3wgICAgXFwvXHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBjcmF0ZWRpZ2dlci5qcyB2MC4wLjEgLSBieSByaXNxICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBvcHRpb25zID0ge30sXHJcbiAgICBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBET00gY29udGFpbmVyIGVsZW1lbnRzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCxcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LFxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCxcclxuICAgIGFydGlzdEluZm9FbGVtZW50LFxyXG4gICAgY292ZXJJbmZvRWxlbWVudCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgdGFyZ2V0LFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRmVhdHVyZSB0ZXN0ICA9PT09PT09PT09Ki9cclxuXHJcbiAgICAvLyBUT0RPOiB0byBmaXggLSBzdXBwb3J0cyA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvciAmJiAhIXJvb3QuYWRkRXZlbnRMaXN0ZW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBPYmplY3RzICYgZGF0YSBhcnJheXMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNyYXRlcyA9IFtdLFxyXG4gICAgcmVjb3JkcyA9IFtdLFxyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW10sXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyBjb250YWluZXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyLFxyXG4gICAgY3JhdGVzQ29udGFpbmVyLFxyXG4gICAgcmVjb3Jkc0NvbnRhaW5lcixcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBTdGF0ZXMsIHV0aWwgdmFycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY2FudmFzV2lkdGgsXHJcbiAgICBjYW52YXNIZWlnaHQsXHJcbiAgICBkcHIsXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCxcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlLFxyXG4gICAgaW5mb1BhbmVsU3RhdGUgPSBcImNsb3NlZFwiLFxyXG4gICAgaXNTY3JvbGxpbmcgPSBmYWxzZSxcclxuICAgIGRvUmVuZGVyID0gdHJ1ZSxcclxuICAgIG1vdXNlID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICB0YXJnZXRDYW1lcmFQb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWRSZWNvcmQgPSAtMSxcclxuICAgIHNob3duUmVjb3JkID0gLTEsXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBNYXRlcmlhbHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHdvb2RfbWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVmYXVsdCBzZXR0aW5ncyAgPT09PT09PT09PSovXHJcblxyXG4gICAgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgZGVidWc6IHRydWUsXHJcbiAgICAgICAgY2FudmFzV2lkdGg6IG51bGwsXHJcbiAgICAgICAgY2FudmFzSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgIG5iQ3JhdGVzOiAyLFxyXG4gICAgICAgIHJlY29yZHNQZXJDcmF0ZTogMjQsXHJcbiAgICAgICAgbGlnaHRJbnRlbnNpdHk6IDEsXHJcbiAgICAgICAgY2FtZXJhTW91c2VNb3ZlOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgxMTExMTEsXHJcbiAgICAgICAgc2xlZXZlQ29sb3I6IDB4MGQwNzAyLFxyXG4gICAgICAgIHNsZWV2ZU1hc2tUZXh0dXJlOiAnaW1nL3NsZWV2ZS5wbmcnLFxyXG4gICAgICAgIGNyYXRlVGV4dHVyZTogJ2ltZy93b29kLmpwZycsXHJcbiAgICAgICAgY2xvc2VJbmZvUGFuZWxPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgIGNsb3NlSW5mb1BhbmVsT25TY3JvbGw6IHRydWUsXHJcbiAgICAgICAgaW5mb1BhbmVsT3BhY2l0eTogMC45LFxyXG4gICAgICAgIHBvc3Rwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIGJsdXJBbW91bnQ6IDAuNCxcclxuICAgICAgICB1cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemU6IHRydWUsXHJcbiAgICAgICAgb25JbmZvUGFuZWxPcGVuZWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBvbkxvYWRpbmdFbmQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgIHJvb3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyJyxcclxuICAgICAgICAgICAgY2FudmFzQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1jYW52YXMnLFxyXG4gICAgICAgICAgICBsb2FkaW5nQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1sb2FkaW5nJyxcclxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItaW5mbycsXHJcbiAgICAgICAgICAgIHRpdGxlQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnLFxyXG4gICAgICAgICAgICBhcnRpc3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1hcnRpc3QnLFxyXG4gICAgICAgICAgICBjb3ZlckNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWNvdmVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uc3RhbnRzOiB7XHJcbiAgICAgICAgICAgIHJlY29yZE1vdmVUaW1lOiAxMDAwLFxyXG4gICAgICAgICAgICBjYW1lcmFNb3ZlVGltZTogODAwLFxyXG4gICAgICAgICAgICBpbmZvT3BlblRpbWU6IDgwMCxcclxuICAgICAgICAgICAgcmVjb3JkQmFzZVk6IDUsXHJcbiAgICAgICAgICAgIHJlY29yZFNob3duWTogMjUsXHJcbiAgICAgICAgICAgIHJlY29yZEZsaXBwZWRZOiAxMTAsXHJcbiAgICAgICAgICAgIHRhcmdldEJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogLTIwLFxyXG4gICAgICAgICAgICAgICAgeTogMTAsXHJcbiAgICAgICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMjgwLFxyXG4gICAgICAgICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgICAgICAgejogMTgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYUZvY3VzUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDE2MCxcclxuICAgICAgICAgICAgICAgIHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIHo6IDg1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWTogMC4wNyxcclxuICAgICAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRaOiAwLjAzLFxyXG4gICAgICAgICAgICBncmFiU2Vuc2l0aXZpdHk6IDZcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQ0xBU1NFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBSZWNvcmQgQ2xhc3MgID09PT09PT09PT0qL1xyXG5cclxudmFyIFJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNyYXRlSWQgPSBjcmF0ZUlkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLnN0YXRlID0gJ291dCc7XHJcbiAgICB0aGlzLnJlY29yZFhQb3MgPSAtNjIgKyAoIDEzNSAvIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkgKiBwb3M7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEuNSwgMTAwLCAxLCAxLCAxICksIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKCBnZXRSZWNvcmRNYXRlcmlhbCggbnVsbCwgZmFsc2UgKSApICk7XHJcbiAgICB0aGlzLm1lc2guZ2VvbWV0cnkuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKCA1MCwgMCwgMCApICk7XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KCB0aGlzLnJlY29yZFhQb3MsIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZLCAwICk7XHJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgdGhpcy5tZXNoLnJlY29yZElkID0gaWQ7XHJcbiAgICB0aGlzLmFic29sdXRlUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHRoaXMuc2V0VW5hY3RpdmUoKTtcclxuICAgIHRoaXMucHVzaFJlY29yZCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBcIlJlY29yZCBuwrBcIiwgdGhpcy5pZCxcclxuICAgICAgICBcImNyYXRlSWQgPVwiLCB0aGlzLmNyYXRlSWQsXHJcbiAgICAgICAgXCJwb3MgPVwiLCB0aGlzLnBvcyApO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldFVuYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2hvd1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdzaG93bicgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2hvd24nO1xyXG4gICAgICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMubWVzaC5tYXRyaXhXb3JsZCApO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgICAgIHk6IDUwICsgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkU2hvd25ZLFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnogKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiAtIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdmbGlwcGVkJztcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEZsaXBwZWRZXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDQgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBNYXRoLlBJXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnggKyA4MCxcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgICAgICBpZiAoIW5vQ2FtZXJhVHdlZW4pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEJBU0UgTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgZXh0ZW5kID0gZnVuY3Rpb24gKCBkZWZhdWx0cywgb3B0aW9ucyApIHtcclxuXHJcbiAgICBmb3IgKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBvcHRpb25zLCBrZXkgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHRzWyBrZXkgXSA9IG9wdGlvbnNbIGtleSBdO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xyXG59O1xyXG5cclxudmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBkb1JlbmRlciApIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgcmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG4gICAgdXBkYXRlU2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlU3BlZWRZICogKCB0YXJnZXRDYW1lcmFQb3MueCAtIHJvb3RDb250YWluZXIucm90YXRpb24ueSApO1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueiArPSBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmVTcGVlZFogKiAoIHRhcmdldENhbWVyYVBvcy55IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxudmFyIHVubG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG52YXIgbG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBsb2FkZWRSZWNvcmRzID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHVubG9hZFJlY29yZHMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNodWZmbGVCZWZvcmVMb2FkaW5nICkge1xyXG5cclxuICAgICAgICAgICAgcmVjb3Jkc0RhdGEgPSBzaHVmZmxlKCByZWNvcmRzRGF0YSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoICYmIGkgPCByZWNvcmRzRGF0YS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gcmVjb3Jkc0RhdGFbIGkgXTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0ubWVzaC5tYXRlcmlhbC5tYXRlcmlhbHMgPSBnZXRSZWNvcmRNYXRlcmlhbCggcmVjb3Jkc0RhdGFbIGkgXS5jb3ZlciwgcmVjb3Jkc0RhdGFbIGkgXS5oYXNTbGVldmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aHkgPz9cclxuICAgICAgICAvLyBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGEubGVuZ3RoIDwgcmVjb3Jkcy5sZW5ndGggPyByZWNvcmRzRGF0YS5sZW5ndGggOiByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgcmVjb3Jkc0RhdGFMaXN0ID0gcmVjb3Jkc0RhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaGlkZUxvYWRpbmcoIGxvYWRpbmdDb250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25Mb2FkaW5nRW5kKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvbmUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAyMDAwICk7XHJcbiAgICB9ICk7XHJcbn07XHJcblxyXG52YXIgc2h1ZmZsZVJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBmaWxsSW5mb1BhbmVsKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBvcHRpb25zLm9uSW5mb1BhbmVsT3BlbmVkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggaW5mb0NvbnRhaW5lckVsZW1lbnQsIG9wdGlvbnMuaW5mb1BhbmVsT3BhY2l0eSApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIG9wdGlvbnMub25JbmZvUGFuZWxDbG9zZWQoKTtcclxuXHJcbiAgICAgICAgfSwgZm9yY2UgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciB1cGRhdGVTaG93blJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBzaG93blJlY29yZCAhPSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlU2hvd25SZWNvcmQuLicpO1xyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSArIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZXNldFNob3duUmVjb3JkID0gZnVuY3Rpb24gKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgc2VsZWN0UHJldlJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgc2VsZWN0TmV4dFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIGdldE5leHRBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbnZhciBuYXZpZ2F0ZVJlY29yZHMgPSBmdW5jdGlvbiAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBvcHRpb25zLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIHNjcm9sbFJlY29yZHMgPSBmdW5jdGlvbiAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgICAgIGlmICggZGVsdGEgPiAwICkge1xyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJORVhUIFJFQ09SRCBcIiArIGRlbHRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBkZWx0YSA8IDAgKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlBSRVYgUkVDT1JEIFwiICsgZGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCBiYXNlWSwgZGVsdGEgKTtcclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZpbGxJbmZvUGFuZWwgPSBmdW5jdGlvbiAoIHJlY29yZCApIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLnRpdGxlICkge1xyXG5cclxuICAgICAgICB0aXRsZUluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLnRpdGxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmFydGlzdCApIHtcclxuXHJcbiAgICAgICAgYXJ0aXN0SW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEuYXJ0aXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmNvdmVyICkge1xyXG5cclxuICAgICAgICBjb3ZlckluZm9FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHJlY29yZC5kYXRhLmNvdmVyICsgJyknO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBvbk1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxudmFyIG9uU2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG5cclxuICAgIGlmICggd2hlZWxEaXJlY3Rpb24oIGUgKSA8IDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxudmFyIG9uQ2xpY2tFdmVudCA9IGZ1bmN0aW9uICggbW91c2VEb3duUG9zICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoICggKCBtb3VzZURvd25Qb3MueCAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LndpZHRoICkgKSAqIDIgLSAxICksXHJcbiAgICAgICAgICAgIHk6ICggLSggKCBtb3VzZURvd25Qb3MueSAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0VG9wICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0ICkgKSAqIDIgKyAxICksXHJcbiAgICAgICAgICAgIHo6IDAuNVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggdmVjdG9yUG9zLngsIHZlY3RvclBvcy55LCB2ZWN0b3JQb3MueiApO1xyXG4gICAgICAgIHZlY3Rvci51bnByb2plY3QoIGNhbWVyYSApO1xyXG4gICAgICAgIHZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCBjYW1lcmEucG9zaXRpb24sIHZlY3Rvci5zdWIoIGNhbWVyYS5wb3NpdGlvbiApLm5vcm1hbGl6ZSgpICk7XHJcbiAgICAgICAgdmFyIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggY3JhdGVzQ29udGFpbmVyLmNoaWxkcmVuLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIElmIGludGVyc2VjdCBzb21ldGhpbmdcclxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCB2aXNpYmxlIHJlY29yZCBpbnRlcnNlY3RlZFxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGludGVyY2VwdCBhIG1lc2ggd2hpY2ggaXMgbm90IGEgcmVjb3JkLCBicmVha1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCkgPT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnZpc2libGUgJiYgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkUmVjb3JkID0gcmVjb3Jkc1sgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmVcclxuICAgICAgICAgICAgaWYgKCBjbGlja2VkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT09IGNsaWNrZWRSZWNvcmQuaWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJlY29yZCggY2xpY2tlZFJlY29yZC5pZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFsbCBpbnRlcnNlY3RlZCByZWNvcmRzIGFyZSBub3QgdmlzaWJsZXNcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm8gcmVjb3JkIGhhcyBiZWVuIGludGVyc2VjdGVkXHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbk1vdXNlRG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIG1vdXNlLnkgKTtcclxuICAgICAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnlcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBvcHRpb25zLmNsb3NlSW5mb1BhbmVsT25DbGljayApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbk1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIG9wdGlvbnMuY29uc3RhbnRzLmdyYWJTZW5zaXRpdml0eSApICkge1xyXG5cclxuICAgICAgICBvbkNsaWNrRXZlbnQoIG1vdXNlRG93blBvcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgb25LZXlEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvbldpbmRvd1Jlc2l6ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICAgIFVJIE1FVEhPRFMgICAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlSW4oIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCAxLCBkb25lICk7XHJcblxyXG59O1xyXG5cclxudmFyIGhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIGxvYWRpbmdDb250YWluZXJFbGVtZW50LCBkb25lICk7XHJcblxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgSU5JVElBTElTQVRJT04gICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgaW5pdFNjZW5lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIHNjZW5lLCByZW5kZXJlciwgY2FtZXJhLC4uLlxyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9ICk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwiY29udGV4dFwiO1xyXG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDQ1LCBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCwgMC4xLCAyMDAwMCApO1xyXG4gICAgY2FtZXJhLmZvY2FsTGVuZ3RoID0gNDU7XHJcbiAgICBjYW1lcmEuZnJhbWVTaXplID0gMzI7XHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcblxyXG4gICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICAvLyAgICAgICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxMCwgMTAsIDEsIDEsIDEpKTtcclxuICAgIC8vICAgICAgICBzY2VuZS5hZGQodGFyZ2V0KTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIHZhciB3b29kX3RleHR1cmUgPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCBvcHRpb25zLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDEuMSApO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KCAzMDAsIDgwLCAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxpZ2h0ICk7XHJcblxyXG4gICAgbGVmdExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICBsZWZ0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIDEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGVmdExpZ2h0ICk7XHJcblxyXG4gICAgcmlnaHRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZSApIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBET00gc2V0dXBcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG52YXIgaW5pdFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBvcHRpb25zLmJsdXJBbW91bnQ7IC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQudmFsdWUgPSAwOyAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcbiAgICBkb2YudW5pZm9ybXMuZ2Fpbi52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmJpYXMudmFsdWUgPSAwOyAvL2Jva2VoIGVkZ2UgYmlhcyAgICAgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZnJpbmdlLnZhbHVlID0gMDsgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuICAgIEZYQUEgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRlhBQVNoYWRlciApO1xyXG5cclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS5yZW5kZXJUb1NjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggZG9mICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBGWEFBICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXREZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCggc3RhdHMuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIHZhciBkZWJ1ZyA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwLCAyMCwgMjAsIDEsIDEsIDEgKSApO1xyXG4gICAgZGVidWcucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgc2NlbmUuYWRkKCBkZWJ1ZyApO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0R1VJID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjYW1lcmFGb2xkZXIsXHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgsXHJcbiAgICAgICAgZG9mRm9sZGVyLFxyXG4gICAgICAgIF9sYXN0O1xyXG5cclxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBjYW1lcmFGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnQ2FtZXJhJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoID0gY2FtZXJhRm9sZGVyLmFkZCggY2FtZXJhLCAnZm9jYWxMZW5ndGgnLCAyOCwgMjAwICkubmFtZSggJ0ZvY2FsIExlbmd0aCcgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdEZXB0aCBvZiBGaWVsZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aCwgJ3ZhbHVlJywgMCwgMTAgKS5uYW1lKCAnRm9jYWwgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZzdG9wLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdGIFN0b3AnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1heGJsdXIsICd2YWx1ZScsIDAsIDMgKS5uYW1lKCAnbWF4IGJsdXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnU2hvdyBGb2NhbCBSYW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm1hbnVhbGRvZiwgJ3ZhbHVlJyApLm5hbWUoICdNYW51YWwgRG9GJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgZmFsbG9mZicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIHN0YXJ0JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mZGlzdCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBmYWxsb2ZmJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuQ29DLCAndmFsdWUnLCAwLCAwLjEgKS5zdGVwKCAwLjAwMSApLm5hbWUoICdjaXJjbGUgb2YgY29uZnVzaW9uJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmV0dGluZywgJ3ZhbHVlJyApLm5hbWUoICdWaWduZXR0aW5nJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWdub3V0LCAndmFsdWUnLCAwLCAyICkubmFtZSggJ291dGVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmluLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICdpbm5lciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25mYWRlLCAndmFsdWUnLCAwLCAyMiApLm5hbWUoICdmYWRlIGF0JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLCAndmFsdWUnICkubmFtZSggJ0F1dG9mb2N1cycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd4JywgMCwgMSApLm5hbWUoICdmb2N1cyB4JyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3knLCAwLCAxICkubmFtZSggJ2ZvY3VzIHknICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQsICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ3RocmVzaG9sZCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZ2FpbiwgJ3ZhbHVlJywgMCwgMTAwICkubmFtZSggJ2dhaW4nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5iaWFzLCAndmFsdWUnLCAwLCA0ICkuc3RlcCggMC4wMSApLm5hbWUoICdiaWFzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mcmluZ2UsICd2YWx1ZScsIDAsIDUgKS5zdGVwKCAwLjAxICkubmFtZSggJ2ZyaW5nZScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5vaXNlLCAndmFsdWUnICkubmFtZSggJ1VzZSBOb2lzZScgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmFtb3VudCwgJ3ZhbHVlJywgMCwgMC4wMDEgKS5zdGVwKCAwLjAwMDEgKS5uYW1lKCAnZGl0aGVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGVwdGhibHVyLCAndmFsdWUnICkubmFtZSggJ0JsdXIgRGVwdGgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRic2l6ZSwgJ3ZhbHVlJywgMCwgNSApLm5hbWUoICdibHVyIHNpemUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGd1aS5jbG9zZSgpO1xyXG5cclxufTtcclxuXHJcbnZhciB1cGRhdGVDYW1lcmEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdENyYXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBvcHRpb25zLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIG9wdGlvbnMubmJDcmF0ZXMgKSApIC8gMjtcclxuXHJcbn07XHJcblxyXG52YXIgY3JlYXRlQ3JhdGUgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuICAgIHZhciBib3hfYm90dG9tID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9ib3R0b20gKTtcclxuXHJcbiAgICB2YXIgYm94X2xlZnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfbGVmdC5wb3NpdGlvbi5zZXQoIDAsIDM1LCAtNTUgKTtcclxuICAgIGJveF9sZWZ0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9sZWZ0ICk7XHJcblxyXG4gICAgaWYgKCBpZCA9PT0gMCApIHtcclxuICAgICAgICB2YXIgYm94X3JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgICAgIGJveF9yaWdodC5wb3NpdGlvbi5zZXQoIDAsIDM1LCA1NSApO1xyXG4gICAgICAgIGJveF9yaWdodC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X3JpZ2h0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJveF9iYWNrID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggODAsIDEwLCAxMjAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2JhY2sucG9zaXRpb24uc2V0KCAtMTA1LCAzNSwgMCApO1xyXG4gICAgYm94X2JhY2sucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JhY2sgKTtcclxuXHJcbiAgICB2YXIgYm94X2Zyb250ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggNDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2Zyb250LnBvc2l0aW9uLnNldCggOTUsIDI1LCAwICk7XHJcbiAgICBib3hfZnJvbnQucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2Zyb250ICk7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdLnBvc2l0aW9uLnogPSAtMTEwICogaWQ7XHJcbiAgICByZXR1cm4gY3JhdGVzWyBpZCBdO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0UmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY3VycmVudFJlY29yZElkID0gMDtcclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IGNyYXRlcy5sZW5ndGg7IGNyYXRlSWQrKyApIHtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHBvcyA9IDA7IHBvcyA8IG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlOyBwb3MrKyApIHtcclxuICAgICAgICAgICAgY3JlYXRlUmVjb3JkKCBjdXJyZW50UmVjb3JkSWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgICAgICAgICBjdXJyZW50UmVjb3JkSWQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHZhciByZWNvcmQgPSBuZXcgUmVjb3JkKCBpZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICBjcmF0ZXNbIGNyYXRlSWQgXS5hZGQoIHJlY29yZC5tZXNoICk7XHJcbiAgICByZWNvcmRzLnB1c2goIHJlY29yZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBnZXRSZWNvcmRNYXRlcmlhbCA9IGZ1bmN0aW9uICggc3JjLCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLmNyb3NzT3JpZ2luID0gXCJBbm9ueW1vdXNcIjtcclxuICAgIGltZy5zcmMgPSBzcmMgPyBzcmMgOiAnJztcclxuXHJcbiAgICB2YXIgaW1nV2lkdGggPSA0MDAsXHJcbiAgICAgICAgaW1nSGVpZ2h0ID0gNDAwLFxyXG4gICAgICAgIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XHJcblxyXG4gICAgbWFwQ2FudmFzLndpZHRoID0gbWFwQ2FudmFzLmhlaWdodCA9IDQwMDtcclxuXHJcbiAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCBtYXBDYW52YXMgKTtcclxuICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggaGFzU2xlZXZlICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsZWV2ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBzbGVldmUuc3JjID0gb3B0aW9ucy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogb3B0aW9ucy5zbGVldmVDb2xvclxyXG5cclxuICAgIH0gKTtcclxuXHJcbiAgICB2YXIgbWF0ZXJpYWxzID0gW1xyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIC8vIHRleHR1cmVcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIG1hcDogdGV4dHVyZVxyXG4gICAgICAgIH0gKSxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbFxyXG4gICAgXTtcclxuICAgIHJldHVybiBtYXRlcmlhbHM7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFVUSUxTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHdoZWVsRGlzdGFuY2UgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHZhciB3ID0gZS53aGVlbERlbHRhLFxyXG4gICAgICAgIGQgPSBlLmRldGFpbDtcclxuICAgIGlmICggZCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3ICkgcmV0dXJuIHcgLyBkIC8gNDAgKiBkID4gMCA/IDEgOiAtMTsgLy8gT3BlcmFcclxuICAgICAgICBlbHNlIHJldHVybiAtZCAvIDM7IC8vIEZpcmVmb3g7XHJcblxyXG4gICAgfSBlbHNlIHJldHVybiB3IC8gMTIwOyAvLyBJRS9TYWZhcmkvQ2hyb21lXHJcbn07XHJcblxyXG52YXIgd2hlZWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHJldHVybiAoIGUuZGV0YWlsIDwgMCApID8gMSA6ICggZS53aGVlbERlbHRhID4gMCApID8gMSA6IC0xO1xyXG5cclxufTtcclxuXHJcbnZhciBjb29yZHNFcXVhbHNBcHByb3ggPSBmdW5jdGlvbiAoIGNvb3JkMSwgY29vcmQyLCByYW5nZSApIHtcclxuXHJcbiAgICByZXR1cm4gKCBNYXRoLmFicyggY29vcmQxLnggLSBjb29yZDIueCApIDw9IHJhbmdlICkgJiYgKCBNYXRoLmFicyggY29vcmQxLnkgLSBjb29yZDIueSApIDw9IHJhbmdlICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGRvbmUgKSB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPD0gMC4xICkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGlmICggaXNGdW5jdGlvbiggZG9uZSApICkge1xyXG4gICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgLT0gMC4xO1xyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZmFkZU91dCggZWxlbWVudCwgZG9uZSApO1xyXG4gICAgICAgIH0sIDEwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmFkZUluID0gZnVuY3Rpb24gKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICkge1xyXG5cclxuICAgIGlmICggIWVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCBlbGVtZW50LnN0eWxlLm9wYWNpdHkgJiYgZWxlbWVudC5zdHlsZS5vcGFjaXR5IDwgZmFkZVRvICkge1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBvcCA9IDA7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoICFlbGVtZW50LnN0eWxlLmRpc3BsYXkgKSB7XHJcblxyXG4gICAgICAgICAgICBvcCA9IGVsZW1lbnQuc3R5bGUub3BhY2l0eSB8fCAxO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wICs9IDAuMDM7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGZhZGVJbiggZWxlbWVudCwgZmFkZVRvLCBkb25lLCBvcCApO1xyXG5cclxuICAgICAgICB9LCAxMCApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IGZhZGVUbztcclxuXHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcblxyXG4gICAgICAgICAgICBkb25lKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVDYW52YXNTaXplID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbnZhc1dpZHRoID0gb3B0aW9ucy5jYW52YXNXaWR0aCA/IG9wdGlvbnMuY2FudmFzV2lkdGggOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IG9wdGlvbnMuY2FudmFzSGVpZ2h0ID8gb3B0aW9ucy5jYW52YXNIZWlnaHQgOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxudmFyIHNldENhbnZhc0RpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgb3B0aW9ucyA9IGV4dGVuZCggZGVmYXVsdHMsIHBhcmFtcyApO1xyXG4gICAgLy8gZmVhdHVyZSB0ZXN0XHJcbiAgICAvLyBUT0RPOiB0byBmaXggLSBpZiAoICFzdXBwb3J0cyB8fCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG4gICAgY29uc29sZS5sb2coICdJbml0aWFsaXppbmcgY3JhdGVkaWdnZXIuanMuLi4nICk7XHJcblxyXG4gICAgaWYgKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBkcHIgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnJvb3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhcm9vdENvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgbG9hZGluZyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFpbmZvQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIHRpdGxlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmFydGlzdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFhcnRpc3RJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcmVjb3JkIGFydGlzdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNvdmVySW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jb3ZlckNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjb3ZlckluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjb3ZlciBpbWFnZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7Il19
},{"./threejs_modules/CopyShader":3,"./threejs_modules/DoFShader":4,"./threejs_modules/EffectComposer":5,"./threejs_modules/FXAAShader":6,"./threejs_modules/MaskPass":7,"./threejs_modules/RenderPass":8,"./threejs_modules/ShaderPass":9}],3:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */
module.exports = function(THREE) {
	
	THREE.CopyShader = {

		uniforms: {

			"tDiffuse": { type: "t", value: null },
			"opacity":  { type: "f", value: 1.0 }

		},

		vertexShader: [

			"varying vec2 vUv;",

			"void main() {",

				"vUv = uv;",
				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n"),

		fragmentShader: [

			"uniform float opacity;",

			"uniform sampler2D tDiffuse;",

			"varying vec2 vUv;",

			"void main() {",

				"vec4 texel = texture2D( tDiffuse, vUv );",
				"gl_FragColor = opacity * texel;",

			"}"

		].join("\n")

	};
};
},{}],4:[function(require,module,exports){
/**
 * @author andrewberg / http://andrewberg.com/
 *
 * Depth of Field
 * - ported from
 */
module.exports = function(THREE) {
		
	THREE.DoFShader = {

		uniforms: {

			"tDiffuse":     { type: "t", value: null },
			"tDepth":       { type: "t", value: null },
			"znear":		{ type: "f", value: 1.0 },
			"zfar":			{ type: "f", value: 1000.0 },
			"size":         { type: "v2", value: new THREE.Vector2( 512, 512 ) },
			"textel":		{ type: "v2", value: new THREE.Vector2( 1/512, 1/512)},
			"focalDepth":	{ type: "f", value: 200.0 },
			"focalLength":	{ type: "f", value: 28.0 },
			"fstop":		{ type: "f", value: 2.8 },
			"showFocus":	{ type: "i", value: 0 },
			"manualdof":	{ type: "i", value: 0 },
			"ndofstart":	{ type: "f", value: 1.0 },
			"ndofdist":		{ type: "f", value: 2.0 },
			"fdofstart":	{ type: "f", value: 1.0 },
			"fdofdist":		{ type: "f", value: 3.0 },
			"CoC":			{ type: "f", value: 0.03 },
			"vignetting":	{ type: "i", value: 1 },
			"vignout":		{ type: "f", value: 1.3 },
			"vignin":		{ type: "f", value: 0.0 },
			"vignfade":		{ type: "f", value: 22.0 },
			"autofocus":	{ type: "i", value: 1 },
			"focus":        { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
			"maxblur":		{ type: "f", value: 1.0 },
			"threshold":	{ type: "f", value: 0.8 },
			"gain":			{ type: "f", value: 1.7 },
			"bias":			{ type: "f", value: 0.5 },
			"fringe":		{ type: "f", value: 0.7 },
			"noise":		{ type: "i", value: 1 },
			"namount":		{ type: "f", value: 0.0001 },
			"depthblur":	{ type: "i", value: 0 },
			"dbsize":		{ type: "f", value: 1.25}

		},

		vertexShader: [

			"varying vec2 vUv;",

			"void main() {",

				"vUv = uv;",

				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n"),

		fragmentShader: [
			"precision mediump float;",
			"#define PI  3.14159265",

			"varying vec2 vUv;",

			//uniform variables from external script

			"uniform sampler2D tDiffuse;",
			"uniform sampler2D tDepth;",
			"uniform vec2 size;", // texture width and height
			"uniform vec2 texel;", // textel size

			"uniform float focalDepth;",  //focal distance value in meters, but you may use autofocus option below
			"uniform float focalLength;", //focal length in mm
			"uniform float fstop;", //f-stop value
			"uniform bool showFocus;", //show debug focus point and focal range (orange = focal point, blue = focal range)

			//make sure that these two values are the same for your camera, otherwise distances will be wrong.
			"uniform float znear;", //camera clipping start
			"uniform float zfar;", //camera clipping end

			//------------------------------------------
			//user variables now passed as uniforms

			"uniform bool manualdof;", //manual dof calculation
			"uniform float ndofstart;", //near dof blur start
			"uniform float ndofdist;", //near dof blur falloff distance
			"uniform float fdofstart;", //far dof blur start
			"uniform float fdofdist;", //far dof blur falloff distance

			"uniform float CoC;",//circle of confusion size in mm (35mm film = 0.03mm)

			"uniform bool vignetting;", //use optical lens vignetting?
			"uniform float vignout;", //vignetting outer border
			"uniform float vignin;", //vignetting inner border
			"uniform float vignfade;", //f-stops till vignete fades

			"uniform bool autofocus;", //use autofocus in shader? disable if you use external focalDepth value
			"uniform vec2 focus;", // autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right)
			"uniform float maxblur;", //clamp value of max blur (0.0 = no blur,1.0 default)

			"uniform float threshold;", //highlight threshold;
			"uniform float gain;", //highlight gain;

			"uniform float bias;", //bokeh edge bias
			"uniform float fringe;", //bokeh chromatic aberration/fringing

			"uniform bool noise;", //use noise instead of pattern for sample dithering
			"uniform float namount;", //dither amount

			"uniform bool depthblur;", //blur the depth buffer?
			"uniform float dbsize;", //depthblursize

			// samples and rings need to be constants. no dynamic loop counters in OpenGL ES
			// Can shader be broken into 2 pass? ... 
			"int samples = 3;", //samples on the first ring
			"const int rings = 3;", //ring count

			/*
			next part is experimental
			not looking good with small sample and ring count
			looks okay starting from samples = 4, rings = 4
			*/

			"bool pentagon = false;", //use pentagon as bokeh shape?
			"float feather = 0.4;", //pentagon shape feather

			//------------------------------------------

			// RGBA depth

			"float unpackDepth( const in vec4 rgba_depth ) {",

				"const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
				"float depth = dot( rgba_depth, bit_shift );",
				"return depth;",

			"}",


			"float penta(vec2 coords)", //pentagonal shape
			"{",
				"float scale = float(rings) - 1.3;",
				"vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);",
				"vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);",
				"vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);",
				"vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);",
				"vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);",
				"vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);",

				"vec4  one = vec4( 1.0 );",

				"vec4 P = vec4((coords),vec2(scale, scale));",

				"vec4 dist = vec4(0.0);",
				"float inorout = -4.0;",

				"dist.x = dot( P, HS0 );",
				"dist.y = dot( P, HS1 );",
				"dist.z = dot( P, HS2 );",
				"dist.w = dot( P, HS3 );",

				"dist = smoothstep( -feather, feather, dist );",

				"inorout += dot( dist, one );",

				"dist.x = dot( P, HS4 );",
				"dist.y = HS5.w - abs( P.z );",

				"dist = smoothstep( -feather, feather, dist );",
				"inorout += dist.x;",

				"return clamp( inorout, 0.0, 1.0 );",
			"}",

			"float bdepth(vec2 coords) //blurring depth",
			"{",
				"float d = 0.0;",
				"float kernel[9];",
				"vec2 offset[9];",

				"vec2 wh = vec2(texel.x, texel.y) * dbsize;",

				"offset[0] = vec2(-wh.x,-wh.y);",
				"offset[1] = vec2( 0.0, -wh.y);",
				"offset[2] = vec2( wh.x -wh.y);",

				"offset[3] = vec2(-wh.x,  0.0);",
				"offset[4] = vec2( 0.0,   0.0);",
				"offset[5] = vec2( wh.x,  0.0);",

				"offset[6] = vec2(-wh.x, wh.y);",
				"offset[7] = vec2( 0.0,  wh.y);",
				"offset[8] = vec2( wh.x, wh.y);",

				"kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;",
				"kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;",
				"kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;",


				"for( int i=0; i<9; i++ )",
				"{",
					"float tmp = unpackDepth(texture2D(tDepth, coords + offset[i]));",
					"d += tmp * kernel[i];",
				"}",

				"return d;",
			"}",


			"vec3 color(vec2 coords,float blur)", //processing the sample
			"{",
				"vec3 col = vec3(0.0);",

				"col.r = texture2D(tDiffuse,coords + vec2(0.0,1.0)*texel*fringe*blur).r;",
				"col.g = texture2D(tDiffuse,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;",
				"col.b = texture2D(tDiffuse,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;",

				"vec3 lumcoeff = vec3(0.299,0.587,0.114);",
				"float lum = dot(col.rgb, lumcoeff);",
				"float thresh = max((lum-threshold)*gain, 0.0);",
				"return col+mix(vec3(0.0),col,thresh*blur);",
			"}",

			"vec2 rand(vec2 coord) //generating noise/pattern texture for dithering",
			"{",
				"float noiseX = ((fract(1.0-coord.s*(size.x/2.0))*0.25)+(fract(coord.t*(size.y/2.0))*0.75))*2.0-1.0;",
				"float noiseY = ((fract(1.0-coord.s*(size.x/2.0))*0.75)+(fract(coord.t*(size.y/2.0))*0.25))*2.0-1.0;",

				"if (noise)",
				"{",
					"noiseX = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233))) * 43758.5453),0.0,1.0)*2.0-1.0;",
					"noiseY = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233)*2.0)) * 43758.5453),0.0,1.0)*2.0-1.0;",
				"}",
				"return vec2(noiseX,noiseY);",
			"}",

			"vec3 debugFocus(vec3 col, float blur, float depth)",
			"{",
				"float edge = 0.002*depth; //distance based edge smoothing",
				"float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);",
				"float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);",

				"col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);",
				"col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);",

				"return col;",
			"}",

			"float linearize(float depth)",
			"{",
				"return -zfar * znear / (depth * (zfar - znear) - zfar);",
			"}",

			"float vignette()",
			"{",
				"float dist = distance(vUv, vec2(0.5,0.5));",
				"dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);",
				"return clamp(dist,0.0,1.0);",
			"}",

			"void main()",
			"{",
				//scene depth calculation

				"float depth = linearize(unpackDepth(texture2D(tDepth,vUv)));",

				"if (depthblur)",
				"{",
					"depth = linearize(bdepth(vUv));",
				"}",

				//focal plane calculation",

				"float fDepth = focalDepth;",

				"if (autofocus)",
				"{",
					"fDepth = linearize(unpackDepth(texture2D(tDepth,focus)));",
				"}",

				//dof blur factor calculation

				"float blur = 0.0;",

				"if (manualdof)",
				"{",
					"float a = depth-fDepth;", //focal plane
					"float b = (a-fdofstart)/fdofdist;", //far DoF
					"float c = (-a-ndofstart)/ndofdist;", //near Dof
					"blur = (a>0.0)?b:c;",
				"}",

				"else",
				"{",
					"float f = focalLength;", //focal length in mm
					"float d = fDepth*1000.0;", //focal plane in mm
					"float o = depth*1000.0;", //depth in mm

					"float a = (o*f)/(o-f);",
					"float b = (d*f)/(d-f);",
					"float c = (d-f)/(d*fstop*CoC);",

					"blur = abs(a-b)*c;",
				"}",

				"blur = clamp(blur,0.0,1.0);",

				// calculation of pattern for ditering

				"vec2 noise = rand(vUv)*namount*blur;",

				// getting blur x and y step factor

				"float w = (1.0/size.x)*blur*maxblur+noise.x;",
				"float h = (1.0/size.y)*blur*maxblur+noise.y;",

				// calculation of final color

				"vec3 col = vec3(0.0);",

				"if(blur < 0.05)", //some optimization thingy
				"{",
					"col = texture2D(tDiffuse, vUv).rgb;",
				"}",
				"else",
				"{",
					"col = texture2D(tDiffuse, vUv).rgb;",
					"float s = 1.0;",

					"for (int i = 1; i <= rings; i += 1)",
					"{",
						"float ringsamples = float(i * samples);",

						"if(i == 1)",
						"{",
							"for (int j = 0 ; j < 3 ; j += 1)",
							"{",
								"float step = PI*2.0 / float(ringsamples);",
								"float pw = (cos(float(j)*step)*float(i));",
								"float ph = (sin(float(j)*step)*float(i));",
								"float p = 1.0;",
								"if (pentagon)",
								"{",
									"p = penta(vec2(pw,ph));",
								"}",
								"col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;",
								"s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;",
							"}",
						"}",
						"else if(i == 2)",
						"{",
							"for (int j = 0 ; j < 6 ; j += 1)",
							"{",
								"float step = PI*2.0 / float(ringsamples);",
								"float pw = (cos(float(j)*step)*float(i));",
								"float ph = (sin(float(j)*step)*float(i));",
								"float p = 1.0;",
								"if (pentagon)",
								"{",
									"p = penta(vec2(pw,ph));",
								"}",
								"col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;",
								"s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;",
							"}",
						"}",
						"else if(i == 3)",
						"{",
							"for (int j = 0 ; j < 9 ; j += 1)",
							"{",
								"float step = PI*2.0 / float(ringsamples);",
								"float pw = (cos(float(j)*step)*float(i));",
								"float ph = (sin(float(j)*step)*float(i));",
								"float p = 1.0;",
								"if (pentagon)",
								"{",
									"p = penta(vec2(pw,ph));",
								"}",
								"col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;",
								"s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;",
							"}",
						"}",
					"}",
					"col /= s;", //divide by sample count
				"}",

				"if (showFocus)",
				"{",
					"col = debugFocus(col, blur, depth);",
				"}",

				"if (vignetting)",
				"{",
					"col *= vignette();",
				"}",

				"gl_FragColor.rgb = col;",
				"gl_FragColor.a = 1.0;",
			"}"

		].join("\n")

	};

}
},{}],5:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
	
	THREE.EffectComposer = function ( renderer, renderTarget ) {

		this.renderer = renderer;

		if ( renderTarget === undefined ) {

			var width = window.innerWidth || 1;
			var height = window.innerHeight || 1;
			var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

			renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		this.passes = [];

		if ( THREE.CopyShader === undefined )
			console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

		this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

	};

	THREE.EffectComposer.prototype = {

		swapBuffers: function() {

			var tmp = this.readBuffer;
			this.readBuffer = this.writeBuffer;
			this.writeBuffer = tmp;

		},

		addPass: function ( pass ) {

			this.passes.push( pass );

		},

		insertPass: function ( pass, index ) {

			this.passes.splice( index, 0, pass );

		},

		render: function ( delta ) {

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;

			var maskActive = false;

			var pass, i, il = this.passes.length;

			for ( i = 0; i < il; i ++ ) {

				pass = this.passes[ i ];

				if ( !pass.enabled ) continue;

				pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

				if ( pass.needsSwap ) {

					if ( maskActive ) {

						var context = this.renderer.context;

						context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

						this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

						context.stencilFunc( context.EQUAL, 1, 0xffffffff );

					}

					this.swapBuffers();

				}

				if ( pass instanceof THREE.MaskPass ) {

					maskActive = true;

				} else if ( pass instanceof THREE.ClearMaskPass ) {

					maskActive = false;

				}

			}

		},

		reset: function ( renderTarget ) {

			if ( renderTarget === undefined ) {

				renderTarget = this.renderTarget1.clone();

				renderTarget.width = window.innerWidth;
				renderTarget.height = window.innerHeight;

			}

			this.renderTarget1 = renderTarget;
			this.renderTarget2 = renderTarget.clone();

			this.writeBuffer = this.renderTarget1;
			this.readBuffer = this.renderTarget2;

		},

		setSize: function ( width, height ) {

			var renderTarget = this.renderTarget1.clone();

			renderTarget.width = width;
			renderTarget.height = height;

			this.reset( renderTarget );

		}

	};
};

},{}],6:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 * @author davidedc / http://www.sketchpatch.net/
 *
 * NVIDIA FXAA by Timothy Lottes
 * http://timothylottes.blogspot.com/2011/06/fxaa3-source-released.html
 * - WebGL port by @supereggbert
 * http://www.glge.org/demos/fxaa/
 */
module.exports = function(THREE) {
		
	THREE.FXAAShader = {

		uniforms: {

			"tDiffuse":   { type: "t", value: null },
			"resolution": { type: "v2", value: new THREE.Vector2( 1 / 1024, 1 / 512 )  }

		},

		vertexShader: [

			"void main() {",

				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"

		].join("\n"),

		fragmentShader: [

			"uniform sampler2D tDiffuse;",
			"uniform vec2 resolution;",

			"#define FXAA_REDUCE_MIN   (1.0/128.0)",
			"#define FXAA_REDUCE_MUL   (1.0/8.0)",
			"#define FXAA_SPAN_MAX     8.0",

			"void main() {",

				"vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;",
				"vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;",
				"vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;",
				"vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;",
				"vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );",
				"vec3 rgbM  = rgbaM.xyz;",
				"vec3 luma = vec3( 0.299, 0.587, 0.114 );",

				"float lumaNW = dot( rgbNW, luma );",
				"float lumaNE = dot( rgbNE, luma );",
				"float lumaSW = dot( rgbSW, luma );",
				"float lumaSE = dot( rgbSE, luma );",
				"float lumaM  = dot( rgbM,  luma );",
				"float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );",
				"float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );",

				"vec2 dir;",
				"dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
				"dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",

				"float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );",

				"float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );",
				"dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),",
					  "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),",
							"dir * rcpDirMin)) * resolution;",
				"vec4 rgbA = (1.0/2.0) * (",
	        	"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (1.0/3.0 - 0.5)) +",
				"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (2.0/3.0 - 0.5)));",
	    		"vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (",
				"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (0.0/3.0 - 0.5)) +",
	      		"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (3.0/3.0 - 0.5)));",
	    		"float lumaB = dot(rgbB, vec4(luma, 0.0));",

				"if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {",

					"gl_FragColor = rgbA;",

				"} else {",
					"gl_FragColor = rgbB;",

				"}",

			"}"

		].join("\n")

	};

}
},{}],7:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */
module.exports = function(THREE) {
		
	THREE.MaskPass = function ( scene, camera ) {

		this.scene = scene;
		this.camera = camera;

		this.enabled = true;
		this.clear = true;
		this.needsSwap = false;

		this.inverse = false;

	};

	THREE.MaskPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			var context = renderer.context;

			// don't update color or depth

			context.colorMask( false, false, false, false );
			context.depthMask( false );

			// set up stencil

			var writeValue, clearValue;

			if ( this.inverse ) {

				writeValue = 0;
				clearValue = 1;

			} else {

				writeValue = 1;
				clearValue = 0;

			}

			context.enable( context.STENCIL_TEST );
			context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
			context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
			context.clearStencil( clearValue );

			// draw into the stencil buffer

			renderer.render( this.scene, this.camera, readBuffer, this.clear );
			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

			// re-enable update of color and depth

			context.colorMask( true, true, true, true );
			context.depthMask( true );

			// only render where stencil is set to 1

			context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
			context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

		}

	};


	THREE.ClearMaskPass = function () {

		this.enabled = true;

	};

	THREE.ClearMaskPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			var context = renderer.context;

			context.disable( context.STENCIL_TEST );

		}

	};

};
},{}],8:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */
module.exports = function(THREE) {

	THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

		this.scene = scene;
		this.camera = camera;

		this.overrideMaterial = overrideMaterial;

		this.clearColor = clearColor;
		this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

		this.oldClearColor = new THREE.Color();
		this.oldClearAlpha = 1;

		this.enabled = true;
		this.clear = true;
		this.needsSwap = false;

	};

	THREE.RenderPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			this.scene.overrideMaterial = this.overrideMaterial;

			if ( this.clearColor ) {

				this.oldClearColor.copy( renderer.getClearColor() );
				this.oldClearAlpha = renderer.getClearAlpha();

				renderer.setClearColor( this.clearColor, this.clearAlpha );

			}

			renderer.render( this.scene, this.camera, readBuffer, this.clear );

			if ( this.clearColor ) {

				renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

			}

			this.scene.overrideMaterial = null;

		}

	};
	
}
},{}],9:[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */
module.exports = function(THREE) {

	THREE.ShaderPass = function ( shader, textureID ) {

		this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

		this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

		this.material = new THREE.ShaderMaterial( {

			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		} );

		this.renderToScreen = false;

		this.enabled = true;
		this.needsSwap = true;
		this.clear = false;


		this.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );
		this.scene  = new THREE.Scene();

		this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
		this.scene.add( this.quad );

	};

	THREE.ShaderPass.prototype = {

		render: function ( renderer, writeBuffer, readBuffer, delta ) {

			if ( this.uniforms[ this.textureID ] ) {

				this.uniforms[ this.textureID ].value = readBuffer;

			}

			this.quad.material = this.material;

			if ( this.renderToScreen ) {

				renderer.render( this.scene, this.camera );

			} else {

				renderer.render( this.scene, this.camera, writeBuffer, this.clear );

			}

		}

	};
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvY3JhdGVkaWdnZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcy5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3bkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY3JhdGVkaWdnZXIgPSByZXF1aXJlKCcuL2NyYXRlZGlnZ2VyJyk7XHJcblxyXG52YXIgZGF0YSA9IEpTT04ucGFyc2UoJ1t7XCJ0aXRsZVwiOlwiU28gV2hhdFwiLFwiYXJ0aXN0XCI6XCJNaWxlcyBEYXZpc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzYzYmY1ZmU1ZjE1ZjY5YmZlYjA5NzEzOWZjMzRmM2Q3LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDFcIixcImlkXCI6XCJTT0JZQk5WMTQ2MDc3MDNBQ0FcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3RvbGVuIE1vbWVudHNcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0NOTVBIMTJCMEI4MDY0QUFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiVGhlbWUgZm9yIE1heGluZVwiLFwiYXJ0aXN0XCI6XCJXb29keSBTaGF3XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmI5MzdmMWUxZDU3Zjc1NDJhNjRjNzRiMTNjNDc5MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTUxTR1cxMzEzNDM4NDFBN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNb2FuaW5cXCcgTWFtYm9cIixcImFydGlzdFwiOlwiTWluZ3VzIEJpZyBCYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGNkMTU2NWNmM2RkNjYzZjdiNzQ5MmU0ZGEzNzg4NTUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPVlFMVlgxMzEzNDM4NkFGOVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTdW1tZXJ0aW1lXCIsXCJhcnRpc3RcIjpcIk9zY2FyIFBldGVyc29uXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZhY2RmNGE5NzVlZGY5NTU2MTgyZDdjNmEzMWU1OTYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1OVwiLFwiaWRcIjpcIlNPRk5XVFYxMzc3MTI3MzlCQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZWEgZm9yIFR3b1wiLFwiYXJ0aXN0XCI6XCJMZXN0ZXIgWW91bmdcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci84ZWZmYmQ4ZGM3YTk1ZjA2YzVhY2E4ZTZlY2YzYTc4ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk3XCIsXCJpZFwiOlwiU09BUEJNUTE0NEM0QTE4Q0Q0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpbmUgVXBcIixcImFydGlzdFwiOlwiTGVubmllIFRyaXN0YW5vXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMjNiMjc2NmMyNDU3YmU1MDJlM2I3OWYwODhjYjhiYTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQlBEUlExMzEzNDM5QkE1MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJIFJlbWVtYmVyIENsaWZmb3JkXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lZmE3MDZlMWQzZmMxMzYzYzdhNWYwN2Y5MDg4YTZjYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09DUlVXTzEyQUIwMTg0ODQ2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbCBUaGUgVGhpbmdzIFlvdSBBcmVcIixcImFydGlzdFwiOlwiT3NjYXIgUGV0dGlmb3JkXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOGNlOWZjZjBlYzMzM2IwNmMzOGFkOTk5YzhkY2NiMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQkhLVkcxMzE1Q0Q0MUM0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFYXN5IExpdmluZ1wiLFwiYXJ0aXN0XCI6XCJDbGlmZm9yZCBCcm93blwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2U4NDYzNjMwODEzYjZjMjU1MzZjZGJlZjAzMTM0YWUzLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0VWTFJaMTMxMzQzQTI4RDZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2hpcGxhc2hcIixcImFydGlzdFwiOlwiRG9uIEVsbGlzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzRkODdjZjA2MzE5MzdiZGI3OTY3NTQwMjA1NGQzYjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3M1wiLFwiaWRcIjpcIlNPT1ZaSFIxMkE4QzEzMkZBOFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCdW1waW5cXCcgT24gU3Vuc2V0XCIsXCJhcnRpc3RcIjpcIldlcyBNb250Z29tZXJ5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzVmNDM1MjNmY2QwMWIzMDQ2NDg2Njc0ZTA5ZDM3MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk2NlwiLFwiaWRcIjpcIlNPS1hIWlQxNDc4QjYzODg3QVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGb290cHJpbnRzXCIsXCJhcnRpc3RcIjpcIldheW5lIFNob3J0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80MGM0NzY4ZDZlZTI1ZDUzNTZiNWVmYmQwZjY5YzMyNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09aTEZKQTE0NEQxM0QwNzY4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgVHJhaW5cIixcImFydGlzdFwiOlwiSm9obiBDb2x0cmFuZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzFkMDE5ZDgxZjk5YzUyMTMzOTg3OTFjOGEwZDZhMmQxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTdcIixcImlkXCI6XCJTT0FDWVNTMTQ1RkVCQUQ4QzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWxsIEJsdWVzXCIsXCJhcnRpc3RcIjpcIlJvbiBDYXJ0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yZDIwYWU0YzQxMjdjZTZiOGFhNThmMDhiZWNjOWMwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAxXCIsXCJpZFwiOlwiU09CSlFCTTE0NEU1Q0E0RDg5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IEZ1bm55IFZhbGVudGluZVwiLFwiYXJ0aXN0XCI6XCJDaGV0IEJha2VyXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDJmOGI0ZDE1YTYyNDMzMzkwM2M1N2I3ZDRhYTVhYjUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NFwiLFwiaWRcIjpcIlNPQUFRSVoxNDRDNDg2QTkzMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMb3ZlIGZvciBTYWxlXCIsXCJhcnRpc3RcIjpcIkNhbm5vbmJhbGwgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iN2RmNDQwZjJlNzQ2NDc2ODEwYjhmYzM2ZTE5NzBkZi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09QSlFFVTE0NEFENzA1NTg0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhZHkgU2luZ3MgdGhlIEJsdWVzXCIsXCJhcnRpc3RcIjpcIkhlcmJpZSBOaWNob2xzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMTdlYTRhMDUyNjA5NmU1YThmYjIwNzE3Mzg2ZTk5ZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQU9ZVEgxMzc2Rjc4QTRCQVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDbGVvcGF0cmFcXCdzIERyZWFtXCIsXCJhcnRpc3RcIjpcIkJ1ZCBQb3dlbGxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMTNlYTBjZWNjM2U4YjM3MGJkMjFiNDQ1Y2U1YjhjNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09LUEFUVDEyQTZENEY0MTJCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJlcm5pZVxcJ3MgVHVuZVwiLFwiYXJ0aXN0XCI6XCJHZXJyeSBNdWxsaWdhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzdiY2U1YjIxYWQyOWRmMTMwMzY4MTIxYTVjNGJjZjM2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTBcIixcImlkXCI6XCJTT0JKSE9TMTM3NjE4QkU0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGV0IFRoZSBHb29kIFRpbWVzIFJvbGxcIixcImFydGlzdFwiOlwiTGVzdGVyIEJvd2llXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDhlMThkNmU0Zjg0OTkwMDNlZDhjOWViYmM3Y2U3M2EvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQlJQU0QxMzEzNDM4NkIxNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHcm9vdmV5YXJkXCIsXCJhcnRpc3RcIjpcIkhhcm9sZCBMYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMGNhYzYwM2FjNzgyODk4M2VkYjYzYzU5ZjRiMmZmOTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSEFOUkYxMzExQUZFQ0EyRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGYXIgV2VzdFwiLFwiYXJ0aXN0XCI6XCJUaW0gSGFnYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjFkOTY0NTkwNGVhMzQ0MWZlNWM3ZDAyNWM0NTBkMGMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPR0ZZRUwxMkE1OEE3QzBCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNeSBJZGVhbFwiLFwiYXJ0aXN0XCI6XCJLZW5ueSBEb3JoYW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yMjhiMDUzMmU4ZWY4NGE2Y2ZhNDliZWJmZWMyNDI3OC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09GUUtMSDEzMTM0MzlDOUQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlllYXJuaW5cXCdcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0VJR1RNMTJBNkQ0RjkyRTFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTW9hbmluXFwnXCIsXCJhcnRpc3RcIjpcIkFydCBCbGFrZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zZTg0OThkNDliYzNkMDMwYTM2NzMwYWFkYTNjNTUzYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09CV05SWDE0NUZENkI1NUUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpa2UgU29tZW9uZSBpbiBMb3ZlXCIsXCJhcnRpc3RcIjpcIkFydCBGYXJtZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9jODVhZWQwYzRjYjk2YmNjNjc1M2Q2MTQwZGU5Y2Y3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA0XCIsXCJpZFwiOlwiU09CRkdLUDEyQTZENEY4ODM0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNoZWVzZSBDYWtlXCIsXCJhcnRpc3RcIjpcIkRleHRlciBHb3Jkb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NjczNTRhYjA3ZDFmZGNjNjkyNGJiY2UwYTQzMWU2MC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09LUFJYRTEzNzcwNDJCMDdFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNlIFBpZWNlXCIsXCJhcnRpc3RcIjpcIkJpbGwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xMmE0NzJjMTQyMTA1ZTA0OTZlODQyZTQ4NmIyNTJjYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09BWUJIRzE0NEM3NEM1QzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFpblxcJ3QgSXQgRnVua3kgTm93XCIsXCJhcnRpc3RcIjpcIkdyYW50IEdyZWVuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGZlMmIyNGIwNzU0MzVmNjI5MDdkMzYzN2NkODEyYjQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3MFwiLFwiaWRcIjpcIlNPQkFHSlExMzE2NzcxNDc0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJEcml2YVxcJyBNYW5cIixcImFydGlzdFwiOlwiTWF4IFJvYWNoXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvN2FlZTUyZmJmMTVhNmI5YTAzNGEzYTkxNWZiZTBkNjAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMVwiLFwiaWRcIjpcIlNPRVJOSFAxMzc2Nzk0NkNGRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0IEFyZSBZb3UgRG9pbmcgVGhlIFJlc3QgT2YgWW91ciBMaWZlP1wiLFwiYXJ0aXN0XCI6XCJNaWx0IEphY2tzb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMTEzM2U2NWViN2NiZWU5ZTVlMzJkOGYzMWY1MDQ3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTczXCIsXCJpZFwiOlwiU09IWFdXTjEzNzc3NTU3NzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBHaXJsIEZyb20gSXBhbmVtYVwiLFwiYXJ0aXN0XCI6XCJTdGFuIEdldHpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wYjA3MmVkYzE2OTdiNTU4NzIwYzY0MDk0ODM3MWQ3YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09DTkJUTjE0NzhDNDYwM0VEXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsb25lIFRvZ2V0aGVyXCIsXCJhcnRpc3RcIjpcIktlbm55IERvcmhhbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzIyOGIwNTMyZThlZjg0YTZjZmE0OWJlYmZlYzI0Mjc4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTlcIixcImlkXCI6XCJTT0FCUk9JMTJBQjAxN0MzRTVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU2VwdGVtYmVyIEluIFRoZSBSYWluXCIsXCJhcnRpc3RcIjpcIlJveSBIYXJncm92ZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk4YTQ4MmQ4Y2NjYTdiMjIxNTJkNTcxNGMyMmFhNDY0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTRcIixcImlkXCI6XCJTT1BXVElMMTJBOEMxM0JCREZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTG92ZSBUaGVtZSBmcm9tIFxcJ1NwYXJ0YWN1c1xcJ1wiLFwiYXJ0aXN0XCI6XCJZdXNlZiBMYXRlZWZcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iYjUwNTE2YjUwN2FjODc0ODJhNDQ2Y2U0NGIwNjI5ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYxXCIsXCJpZFwiOlwiU09JRkJBUTEzMTFBRkUzMTQ4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbW9zdCBMaWtlIEJlaW5nIGluIExvdmVcIixcImFydGlzdFwiOlwiUmVkIEdhcmxhbmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iM2NmNjk5NWRlMjRkNDNjNzE3ZTQxMzAwZTc4ZjYwNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09BVEhEWjEyQUIwMTg1QjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5pZ2h0IEFuZCBEYXlcIixcImFydGlzdFwiOlwiSm9lIFBhc3NcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xN2VjZDE1YzI0MWJmMzc4ZTY4NGQ1NTNiNGU3YjhiYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA1XCIsXCJpZFwiOlwiU09CWU9BQzEzRTZDQjAxOTI2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNvdXMgTGUgQ2llbCBEZSBQYXJpc1wiLFwiYXJ0aXN0XCI6XCJUb290cyBUaGllbGVtYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODFmODczNDU3YTM0NmIyNmI4NWE4MTIyNTQxYThmMDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTVVXUVMxMkE4QzEzQjJEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTY3JhbWJsZWQgRWdnc1wiLFwiYXJ0aXN0XCI6XCJOYXQgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMjE1NGViZDc1YzI0NzA5NWZlZjUwMGM2ZDVmMTYzYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYwXCIsXCJpZFwiOlwiU09ESkFZWjEzMTFBRkRBMTNGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhbnNhbmFcXCdzIFByaWVzdGVzc1wiLFwiYXJ0aXN0XCI6XCJEb25hbGQgQnlyZFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2MwMGJhNWM0N2Y1ODI1MmU0ZWY4MTI3OWU2ZmViMWEwLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NzNcIixcImlkXCI6XCJTT0RVSklSMTJBNkQ0Rjg1QTBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgTGl0dGxlIEJyb3duIEJvb2tcIixcImFydGlzdFwiOlwiRHVrZSBFbGxpbmd0b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzA1ZWRkMzg2ODQxNzdlMzU1NmIxY2RiZGU0NzY0YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYzXCIsXCJpZFwiOlwiU09HVFRIVjEzNkYyNDA1MkRFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBhdHJpY2lhXCIsXCJhcnRpc3RcIjpcIkFydCBQZXBwZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OTI4YTIyMTEwMDBhODViYmUwMmNkMjk5YjVkNjI5MS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09OVlVQRzEzNzcyMjc0Mzc1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTaWRld2luZGVyXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zOGViZWRkN2M0YTc3YzM1MDJiMmNjNWQ4MGRiMzEwOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09HVFhFWDEyQjBCODA2ODY2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIllvdSBEb25cXCd0IEtub3cgV2hhdCBMb3ZlIElzXCIsXCJhcnRpc3RcIjpcIlNvbm55IFJvbGxpbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OWQ3MjUzN2Y5MTZhOTBjMjdlNjI5YTg3MzA4YmM1My80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU2XCIsXCJpZFwiOlwiU09FRFROTjEzNzcyQTM5RDk0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgTW9ua1wiLFwiYXJ0aXN0XCI6XCJUaGVsb25pb3VzIE1vbmtcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMjM3MjdkYjY4ZjRlZGJiNzhlYjExODA4ZmQ5NTU3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09BVFVDRTE0NEFEMEU4OUQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhcyBWZWdhcyBUYW5nb1wiLFwiYXJ0aXN0XCI6XCJHaWwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zMTZmMDkxMWE1NjA2MDY3OGMyMjQxMjAzODdjZDdhOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTY0XCIsXCJpZFwiOlwiU09GRE9DWTEzNzc1QzM2MTA5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNhbmR1XCIsXCJhcnRpc3RcIjpcIkNsaWZmb3JkIEJyb3duXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYWNkNjFjNDJlMjhkZjdmYmQzMzdmZmQzZTYzODM5MDgvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQUFDRUYxMzE1MkE3MUU5RFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9XScpO1xyXG52YXIgZGF0YTIgPSBKU09OLnBhcnNlKCdbe1widGl0bGVcIjpcIllvdSBHb3QgTWVcIixcImFydGlzdFwiOlwiVGhlIFJvb3RzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODA3NjhlMGM3ZjI2NjJkNzQyNzM0MDRmODc5NjUwYmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPSkFOQk8xNDRCQTA4RUM2MFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0XFwncyBHb2xkZW5cIixcImFydGlzdFwiOlwiSnVyYXNzaWMgNVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2M0MWM2YzM3Njc3MDI1M2Y4ODA1ZjU0MTAzMDg1NjBjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT01ZVUJUMTQ0QzI4NzdEODhcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiRmF6ZXJzXCIsXCJhcnRpc3RcIjpcIktpbmcgR2VlZG9yYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OThkMTlhN2JkOGVmY2FiZmUxOWE5Y2ZmMjAwMzZjNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAzXCIsXCJpZFwiOlwiU09DVEZMRTEzNzY4NkQ0NEQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNoZnV6elwiLFwiYXJ0aXN0XCI6XCJLTURcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mYjM0ZDAzYTQ1MThmMjkyMGFiYjNjOWYxNDk2NjNjMS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09SSkVHRTEzNzE5QjhDMzU4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5vbmUgU2hhbGwgUGFzc1wiLFwiYXJ0aXN0XCI6XCJBZXNvcCBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZmQwMTMwYmI0NzhlZDdmZmY2Y2E4Y2MyODY5M2FlZjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPS0pJWlQxMzExQUZFN0RBRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNQ1xcJ3MgQWN0IExpa2UgVGhleSBEb25cXCd0IEtub3dcIixcImFydGlzdFwiOlwiS1JTLU9uZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT1JJTkFOMTMxMUFGRDg4Q0JcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSXRcXCdzIFRyaWNreVwiLFwiYXJ0aXN0XCI6XCJSdW4tRC5NLkMuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjczODk0NmM1YzQ4NzgwYTA2MDg4NDI0NDdjYzBiNDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4NlwiLFwiaWRcIjpcIlNPREpUUVgxNDRCRDk4NkZENlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHZXQgQnlcIixcImFydGlzdFwiOlwiVGFsaWIgS3dlbGlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mODFlYzY4ZDM3MWM2YzhjNmIzNDk5ZDVkODkzNDRmMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09FR09ZTzEzNzMwREFERTQyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkEgTGl0dGxlIFNvdWxcIixcImFydGlzdFwiOlwiUGV0ZSBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOWIxY2Y4ZGUxZjkzMDg4NTMxZTA1ZjZkMzY3NzE0ZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPQ0VST0sxMkE2RDRGQTVGQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgU2hvdyBHb2VzIE9uXCIsXCJhcnRpc3RcIjpcIkx1cGUgRmlhc2NvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNGYxZTA5Nzg2MTVmZmE1ZmQ3NDMzZDdjM2E3MmQwZDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQ01QWUExMkM1NjQxM0I1RlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXYXZpblxcJyBGbGFnXCIsXCJhcnRpc3RcIjpcIktcXCduYWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzIyMWU4MmU0OWM2NTdmZjJkZGY0MmFiMzAwMzgwMDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPVEJJQ04xMzc1OTI5NTQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJZb3UgR290cyBUbyBDaGlsbFwiLFwiYXJ0aXN0XCI6XCJFUE1EXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzFjMjI1Y2E5YWNjYjBjMTNmYjk3ZjY4NGI0NDkzN2YvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSE5YRFExNDE5MTdFM0U4OFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFdmVyeXRoaW5nIENoYW5nZXNcIixcImFydGlzdFwiOlwiQWNleWFsb25lXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDUyODFkZWE2ZWJjMTUwY2M4NDUyNDJlZjA2Zjg2NzUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPRFlVUVgxMzEzNDNBNTZCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDLlIuRS5BLk0uXCIsXCJhcnRpc3RcIjpcIld1LVRhbmcgQ2xhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2Y2NjhiMTc5MzY2YmIzZWQ2MjNkZDhiY2NkMmYzOGViLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTNcIixcImlkXCI6XCJTT0hZSklaMTQ2MDM3OTYxQTlcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3dlZXRlc3QgR2lybCAoRG9sbGFyIEJpbGwpXCIsXCJhcnRpc3RcIjpcIld5Y2xlZiBKZWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjk4NmIyZjFkM2ZhNTBhNWE4YTk0MDJjZDI3M2FmMGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPRFVBTEkxMzEzNDM4QjUzRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCcmVhdGhlIEFuZCBTdG9wXCIsXCJhcnRpc3RcIjpcIlEtVGlwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzI0MzE1ODQ2NTM5YWU5YTQzMDYzOGJkNzg1MzhmMmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPRVVWRUgxMkIwQjgwODZGNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNcy4gSmFja3NvblwiLFwiYXJ0aXN0XCI6XCJPdXRLYXN0XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjUzMzE2OTkzYTc5ZjkzNmRjZGVjNzU3M2UyNjI1NmYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPU1JEUFMxNDRCMjhFQ0VCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDaGlsZHJlblxcJ3MgU3RvcnlcIixcImFydGlzdFwiOlwiU2xpY2sgUmlja1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzVlZjg1YTczOGQ2ZmQzMjEyMGQwZTJiNWNiYzAyMjJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5ODhcIixcImlkXCI6XCJTT0RRSE9MMTQ0QkQ5NEM0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUGFpZCBJbiBGdWxsXCIsXCJhcnRpc3RcIjpcIkVyaWMgQi4gJiBSYWtpbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzliYWRmMGU1NGRmZjlkZTY5MjExYTc1MTc5NzUwZDg4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0JUWUZGMTQ2MDA5RDIzMTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2F0Y2ggT3V0IE5vd1wiLFwiYXJ0aXN0XCI6XCJUaGUgQmVhdG51dHNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci81ODc3NThhNWI1NWJkNGMwN2VkMmIyMjZiYzM1MmZhMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09OSkJPSTEzMTVDRDQ4OUVDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNoYWRvd2JveGluXFwnIChBbGJ1bSBWZXJzaW9uIChFeHBsaWNpdCkpXCIsXCJhcnRpc3RcIjpcIkdaQVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQ4YTllMzFmZjMzYmEzZjc1NTAxZGQ3YTM2NmI5Y2QxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0NNU1ZCMTJCMEI4MDgyMzBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTHVjaGluaSBBa2EgVGhpcyBJcyBJdFwiLFwiYXJ0aXN0XCI6XCJDYW1wIExvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjIyNDRmYmNmMzg0MWYwY2E5Y2U3Y2QzMTY2ZTVjZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5N1wiLFwiaWRcIjpcIlNPQ0xTQUQxMzEzNDM5OTk0N1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJVa25vd2hvd3dlZHVcIixcImFydGlzdFwiOlwiQmFoYW1hZGlhXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzE0ZDE4MTBjZGU5ZGZjOTQwMWY4ZTg5Y2QyMTg1MmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPS0lMQVQxMkE2RDRGN0ZDN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXb25cXCd0IERvXCIsXCJhcnRpc3RcIjpcIkogRGlsbGFcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wODhmMTYzMDg3ZDdhZjcyODgxZGI1NzRlYmE0MDY3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09HSEFSSzEyQTU4QTdEMTI4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNyYXp5XCIsXCJhcnRpc3RcIjpcIkduYXJscyBCYXJrbGV5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZjOWFiYjM5NzJkZWU3YjZiOGI2MjRiZWIwOGI2N2MvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNlwiLFwiaWRcIjpcIlNPQktNS1AxNDUwOUE3RjM2RVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGdWxsIENsaXBcIixcImFydGlzdFwiOlwiR2FuZyBTdGFyclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzE2OWY5OTRkN2FiMmE4ZDg2OGNkZTc3ZmQ1NjZjYmJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0FLQVhHMTQ1NkIwN0I5REFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQ29hc3RpblxcJyBmZWF0LiBLLiBGbGF5XCIsXCJhcnRpc3RcIjpcIlppb24gSVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzAzZWExYzQ2NTViNDRjNTg2ZTkwZGQ0ZDVmOWUxYWFjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDlcIixcImlkXCI6XCJTT1ZYWllZMTJBQjAxODREQTRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiT25lXCIsXCJhcnRpc3RcIjpcIkdob3N0ZmFjZSBLaWxsYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zYTVkYTZiNTM1ZjVmNzMwN2NiYTYyZDQyMDExY2I1Zi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09QRERCSzEzMTJBOEE4RkQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkhpcCBIb3BcIixcImFydGlzdFwiOlwiTW9zIERlZlwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzg5ZTI4YTBhOTNlZmY5ZGM1NzQ0NzY3MTBiNWMwOWUyLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0dXR1NKMTJBRjcyQThBQzJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgUGhpbG9zb3BoeVwiLFwiYXJ0aXN0XCI6XCJCb29naWUgRG93biBQcm9kdWN0aW9uc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT0RMVkVUMTJBNThBNzdBMzFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV29yc3QgQ29tZXMgVG8gV29yc3RcIixcImFydGlzdFwiOlwiRGlsYXRlZCBQZW9wbGVzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmVmMjJiODhkNzRjOWZjNzlhMDkyMWQ1ZjQ3OTUxOGYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPREVLUUsxMzE2NzcxNDZDNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJZiBZb3UgTXVzdFwiLFwiYXJ0aXN0XCI6XCJEZWwgdGhlIEZ1bmt5IEhvbW9zYXBpZW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kZjFiMGEyOGVlNjVlZmM1NGE1OTYwOTkxYTk2Yjg3Mi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09SRUdRRjEyQjBCODA2NThFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldoZW4gSSBCIE9uIFRoYSBNaWNcIixcImFydGlzdFwiOlwiUmFraW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80ZGRjZmE1ZTY5YTFiNzlhY2JlMjBmNGNlMjgyNDc1Yy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09PQ01TRjEzNkNBMkU5QkMxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkx5cmljYWwgU3dvcmRzXCIsXCJhcnRpc3RcIjpcIlJhcyBLYXNzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjI0ZmU3M2ZmYTM0YjlmOTk3YmE0YTI2MzFjMDMzNGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPREVYR08xMkE4QzEzQzAxRFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTaGltbXkgU2hpbW15IFlhXCIsXCJhcnRpc3RcIjpcIk9sXFwnIERpcnR5IEJhc3RhcmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83ODYzODhkMzY4OTAwZjY2ZjA1YmQzODMxYmRhNGZmOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09ZVk5YTjE0NEIyNkI3MUEyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTZWVkICgyLjApXCIsXCJhcnRpc3RcIjpcIlRoZSBSb290c1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQxMWZmZDg5MTFmMWZjMDVjMjA1ZTg2NTA5ZjZlY2ExLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0NaWlVVMTQ0RjUwMEYxNkZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSWNlIENyZWFtXCIsXCJhcnRpc3RcIjpcIlJhZWt3b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NWM5Zjg0YjE4OWMyYmMzMTA2NDdlNjFiN2E2ZDVlOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09XVFFGWTEzNUMzOTVFOThDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk1pbGsgVGhlIENvd1wiLFwiYXJ0aXN0XCI6XCJDYXBwYWRvbm5hXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNTk1M2I0NWQ2NzE2ZmNiM2IyZmQyMjIwNzJhYzQwMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPQ0VHQ0YxMzExQUZFNUQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJSdW5uaW5cXCdcIixcImFydGlzdFwiOlwiVGhlIFBoYXJjeWRlXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzFkZTdjYTFhZWEwNjNhODdkY2EwODkwN2Q3ZDlkMTEvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxM1wiLFwiaWRcIjpcIlNPTEZZQUQxMzdBRDc2MzNCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgQ2hvaWNlIElzIFlvdXJzXCIsXCJhcnRpc3RcIjpcIkJsYWNrIFNoZWVwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDhhYzRmYWU1NTlmYjAwNWRkZjdmMGVkNWFkYmYyZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5MVwiLFwiaWRcIjpcIlNPRVZFUFkxMkE2MzEwRUFEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZW5uZXNzZWVcIixcImFydGlzdFwiOlwiQXJyZXN0ZWQgRGV2ZWxvcG1lbnRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yYzcwMzllNjE4OGJlNDRhODYwMGE4Zjg3ZWRiNWVjNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkyXCIsXCJpZFwiOlwiU09JWEFZWDEyQThDMTM5MDMyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlN1Z2FyIEhpbGxcIixcImFydGlzdFwiOlwiQVpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iMmVhYzEyMzVjNWVjNjc2MTJkMmZhMGNjZTNjNzkwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09FQ0pYVjEzNkE1QjVFQjVFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxvdW5naW5cXCdcIixcImFydGlzdFwiOlwiR3VydVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzlhZjA0NzE3MWM1MTRkN2Q1NThiZTRkMmViMGE2MzdkLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDhcIixcImlkXCI6XCJTT0hMQ0NTMTMxMkE4QUQyQzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGEgUmh1bWJhXCIsXCJhcnRpc3RcIjpcIkJvYmJ5IERpZ2l0YWxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzk4YTExYzQzNGNhNzZiNTU1NTNlYWExNzIyYTRhZC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09GWE5FSjEyQjBCODBCRDM1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk4uWS4gU3RhdGUgT2YgTWluZFwiLFwiYXJ0aXN0XCI6XCJOYXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lN2Y1YWNkZmJjMWM0OWJjNDUyMDkzOGI0ZDc3NWVjNi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk0XCIsXCJpZFwiOlwiU09GUUtRTzEzMTJGRTAwNjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkF3YXJkIFRvdXJcIixcImFydGlzdFwiOlwiQSBUcmliZSBDYWxsZWQgUXVlc3RcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYWNiNTc2OTFmOTc0NTZlNjU5NGQ4ZTk5MWJiODFiYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkzXCIsXCJpZFwiOlwiU09ER1FCRjE0NEJEOEY0RkQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IERlZmluaXRpb24gT2YgQSBCb29tYmFzdGljIEphenogU3R5bGVcIixcImFydGlzdFwiOlwiRHJlYW0gV2FycmlvcnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xZjliZmE0Yzc2NjVlMDdmYzdkZmM3YWI0ZTU5ZWM0OS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09FSEhaRTE0NEU2MDRDMjlCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlJlYWR5IG9yIE5vdFwiLFwiYXJ0aXN0XCI6XCJGdWdlZXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wNGE1NTI2YjdiOTRjNmUyZDYxN2FkZTc2MmRkZjVkYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk2XCIsXCJpZFwiOlwiU09DR1FBSjEzNjA3N0U4OTQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX1dJyk7XHJcblxyXG52YXIgYm90dG9tQmFyICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3R0b20tYmFyJyk7XHJcbnZhciBidXR0b25QcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1wcmV2Jyk7XHJcbnZhciBidXR0b25TaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zaG93Jyk7XHJcbnZhciBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXh0Jyk7XHJcblxyXG5jcmF0ZWRpZ2dlci5pbml0KHtcclxuXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHJvb3RDb250YWluZXJJZCAgICAgOiAnY3JhdGVkaWdnZXInLFxyXG4gICAgICAgIGNhbnZhc0NvbnRhaW5lcklkICAgOiAnY3JhdGVkaWdnZXItY2FudmFzJyxcclxuICAgICAgICBsb2FkaW5nQ29udGFpbmVySWQgIDogJ2NyYXRlZGlnZ2VyLWxvYWRpbmcnLFxyXG4gICAgICAgIGluZm9Db250YWluZXJJZCAgICAgOiAnY3JhdGVkaWdnZXItaW5mbycsXHJcbiAgICAgICAgdGl0bGVDb250YWluZXJJZCAgICA6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnLFxyXG4gICAgICAgIGFydGlzdENvbnRhaW5lcklkICAgOiAnY3JhdGVkaWdnZXItcmVjb3JkLWFydGlzdCcsXHJcbiAgICAgICAgY292ZXJDb250YWluZXJJZCAgICA6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtY292ZXInXHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbigpIHtcclxuICAgIFx0Y2xhc3NpZS5hZGQoYm90dG9tQmFyLCAnY2xvc2VkJyk7XHJcbiAgICB9LFxyXG5cclxuXHRvbkluZm9QYW5lbENsb3NlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRjbGFzc2llLnJlbW92ZShib3R0b21CYXIsICdjbG9zZWQnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuY3JhdGVkaWdnZXIubG9hZFJlY29yZHMoZGF0YSwgdHJ1ZSk7XHJcblxyXG5idXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdGNyYXRlZGlnZ2VyLnNlbGVjdFByZXZSZWNvcmQoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSwgZmFsc2UpO1xyXG5cclxuYnV0dG9uU2hvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRpZiAoY3JhdGVkaWdnZXIuZ2V0U2VsZWN0ZWRSZWNvcmQoKSkge1xyXG5cdFx0Y3JhdGVkaWdnZXIuZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNyYXRlZGlnZ2VyLnNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHR9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0sIGZhbHNlKTtcclxuXHJcbmJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0Y3JhdGVkaWdnZXIuc2VsZWN0TmV4dFJlY29yZCgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59LCBmYWxzZSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIGNyYXRlZGlnZ2VyLmpzIHYwLjAuMSAtIGJ5IHJpc3EgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKTtcclxuXHJcbi8qPT09PT09PT09PSAgSW5qZWN0IGFsbCBleHRlcm5hbCBtb2R1bGVzIHRvIFRIUkVFLmpzID09PT09PT09PT0qL1xyXG5cclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRG9GU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcycpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXInKShUSFJFRSk7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVkFSSUFCTEVTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxudmFyIG9wdGlvbnMgPSB7fSxcclxuICAgIGV4cG9ydHMgPSB7fSwgLy8gT2JqZWN0IGZvciBwdWJsaWMgQVBJc1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERPTSBjb250YWluZXIgZWxlbWVudHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LFxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LFxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICB0aXRsZUluZm9FbGVtZW50LFxyXG4gICAgYXJ0aXN0SW5mb0VsZW1lbnQsXHJcbiAgICBjb3ZlckluZm9FbGVtZW50LFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHN0YXRzLFxyXG4gICAgc2NlbmUsXHJcbiAgICBjYW1lcmEsXHJcbiAgICB0YXJnZXQsXHJcbiAgICByZW5kZXJlcixcclxuICAgIGxpZ2h0LFxyXG4gICAgbGVmdExpZ2h0LFxyXG4gICAgcmlnaHRMaWdodCxcclxuICAgIGNvbXBvc2VyLFxyXG4gICAgRlhBQSxcclxuICAgIGRvZixcclxuICAgIGd1aSxcclxuICAgIGRlcHRoVGFyZ2V0LFxyXG4gICAgZGVwdGhTaGFkZXIsXHJcbiAgICBkZXB0aFVuaWZvcm1zLFxyXG4gICAgZGVwdGhNYXRlcmlhbCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBGZWF0dXJlIHRlc3QgID09PT09PT09PT0qL1xyXG5cclxuICAgIC8vIFRPRE86IHRvIGZpeCAtIHN1cHBvcnRzID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yICYmICEhcm9vdC5hZGRFdmVudExpc3RlbmVyLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE9iamVjdHMgJiBkYXRhIGFycmF5cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY3JhdGVzID0gW10sXHJcbiAgICByZWNvcmRzID0gW10sXHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXSxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzIGNvbnRhaW5lcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXIsXHJcbiAgICBjcmF0ZXNDb250YWluZXIsXHJcbiAgICByZWNvcmRzQ29udGFpbmVyLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFN0YXRlcywgdXRpbCB2YXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGRwcixcclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0LFxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2UsXHJcbiAgICBpbmZvUGFuZWxTdGF0ZSA9IFwiY2xvc2VkXCIsXHJcbiAgICBpc1Njcm9sbGluZyA9IGZhbHNlLFxyXG4gICAgZG9SZW5kZXIgPSB0cnVlLFxyXG4gICAgbW91c2UgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHRhcmdldENhbWVyYVBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZFJlY29yZCA9IC0xLFxyXG4gICAgc2hvd25SZWNvcmQgPSAtMSxcclxuICAgIGxvYWRlZFJlY29yZHMgPSAwLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE1hdGVyaWFscyAgPT09PT09PT09PSovXHJcblxyXG4gICAgd29vZF9tYXRlcmlhbCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZWZhdWx0IHNldHRpbmdzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgICAgICBjYW52YXNXaWR0aDogbnVsbCxcclxuICAgICAgICBjYW52YXNIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgbmJDcmF0ZXM6IDIsXHJcbiAgICAgICAgcmVjb3Jkc1BlckNyYXRlOiAyNCxcclxuICAgICAgICBsaWdodEludGVuc2l0eTogMSxcclxuICAgICAgICBjYW1lcmFNb3VzZU1vdmU6IHRydWUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDExMTExMSxcclxuICAgICAgICBzbGVldmVDb2xvcjogMHgwZDA3MDIsXHJcbiAgICAgICAgc2xlZXZlTWFza1RleHR1cmU6ICdpbWcvc2xlZXZlLnBuZycsXHJcbiAgICAgICAgY3JhdGVUZXh0dXJlOiAnaW1nL3dvb2QuanBnJyxcclxuICAgICAgICBjbG9zZUluZm9QYW5lbE9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VJbmZvUGFuZWxPblNjcm9sbDogdHJ1ZSxcclxuICAgICAgICBpbmZvUGFuZWxPcGFjaXR5OiAwLjksXHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgYmx1ckFtb3VudDogMC40LFxyXG4gICAgICAgIHVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcclxuICAgICAgICBvbkluZm9QYW5lbE9wZW5lZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgb25JbmZvUGFuZWxDbG9zZWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIG9uTG9hZGluZ0VuZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgcm9vdENvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXInLFxyXG4gICAgICAgICAgICBjYW52YXNDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWNhbnZhcycsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWxvYWRpbmcnLFxyXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1pbmZvJyxcclxuICAgICAgICAgICAgdGl0bGVDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC10aXRsZScsXHJcbiAgICAgICAgICAgIGFydGlzdENvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWFydGlzdCcsXHJcbiAgICAgICAgICAgIGNvdmVyQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtY292ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgcmVjb3JkTW92ZVRpbWU6IDEwMDAsXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdmVUaW1lOiA4MDAsXHJcbiAgICAgICAgICAgIGluZm9PcGVuVGltZTogODAwLFxyXG4gICAgICAgICAgICByZWNvcmRCYXNlWTogNSxcclxuICAgICAgICAgICAgcmVjb3JkU2hvd25ZOiAyNSxcclxuICAgICAgICAgICAgcmVjb3JkRmxpcHBlZFk6IDExMCxcclxuICAgICAgICAgICAgdGFyZ2V0QmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAsXHJcbiAgICAgICAgICAgICAgICB5OiAxMCxcclxuICAgICAgICAgICAgICAgIHo6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhQmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAyODAsXHJcbiAgICAgICAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICAgICAgICB6OiAxODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhRm9jdXNQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMTYwLFxyXG4gICAgICAgICAgICAgICAgeTogMTkwLFxyXG4gICAgICAgICAgICAgICAgejogODVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRZOiAwLjA3LFxyXG4gICAgICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFo6IDAuMDMsXHJcbiAgICAgICAgICAgIGdyYWJTZW5zaXRpdml0eTogNlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBDTEFTU0VTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFJlY29yZCBDbGFzcyAgPT09PT09PT09PSovXHJcblxyXG52YXIgUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3JhdGVJZCA9IGNyYXRlSWQ7XHJcbiAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIHRoaXMuc3RhdGUgPSAnb3V0JztcclxuICAgIHRoaXMucmVjb3JkWFBvcyA9IC02MiArICggMTM1IC8gb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSAqIHBvcztcclxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMS41LCAxMDAsIDEsIDEsIDEgKSwgbmV3IFRIUkVFLk1lc2hGYWNlTWF0ZXJpYWwoIGdldFJlY29yZE1hdGVyaWFsKCBudWxsLCBmYWxzZSApICkgKTtcclxuICAgIHRoaXMubWVzaC5nZW9tZXRyeS5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oIDUwLCAwLCAwICkgKTtcclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi5zZXQoIHRoaXMucmVjb3JkWFBvcywgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVksIDAgKTtcclxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICB0aGlzLm1lc2gucmVjb3JkSWQgPSBpZDtcclxuICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdGhpcy5zZXRVbmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5wdXNoUmVjb3JkKCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coIFwiUmVjb3JkIG7CsFwiLCB0aGlzLmlkLFxyXG4gICAgICAgIFwiY3JhdGVJZCA9XCIsIHRoaXMuY3JhdGVJZCxcclxuICAgICAgICBcInBvcyA9XCIsIHRoaXMucG9zICk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0VW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zaG93UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3Nob3duJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzaG93bic7XHJcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5tZXNoLm1hdHJpeFdvcmxkICk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRTaG93bllcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDJcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICAgICAgeTogNTAgKyBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRTaG93blksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24ueiArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdXNoUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPSAncHVzaGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdXNoZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdWxsUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3B1bGxlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVsbGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyIC0gTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcFJlY29yZCA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gJ2ZsaXBwZWQnO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkRmxpcHBlZFlcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gNCApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IE1hdGguUElcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEZsaXBwZWRZICsgNTAsXHJcbiAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnkgLSA1MCxcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBCYWNrUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICwgbm9DYW1lcmFUd2VlbiApIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgPT09ICdmbGlwcGVkJyApIHtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgICAgIGlmICghbm9DYW1lcmFUd2Vlbikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgICAgICAgICB5OiA3NSxcclxuICAgICAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQkFTRSBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBleHRlbmQgPSBmdW5jdGlvbiAoIGRlZmF1bHRzLCBvcHRpb25zICkge1xyXG5cclxuICAgIGZvciAoIHZhciBrZXkgaW4gb3B0aW9ucyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG9wdGlvbnMsIGtleSApICkge1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdHNbIGtleSBdID0gb3B0aW9uc1sga2V5IF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVmYXVsdHM7XHJcbn07XHJcblxyXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBvcHRpb25zLmRlYnVnICkge1xyXG5cclxuICAgICAgICAgICAgc3RhdHMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgVFdFRU4udXBkYXRlKCk7XHJcbiAgICB1cGRhdGVTaG93blJlY29yZCgpO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5jYW1lcmFNb3VzZU1vdmUgKSB7XHJcblxyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy54ID0gKCBtb3VzZS54IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7IC8vIGludmVyc2UgYXhpcz9cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueSA9ICggbW91c2UueSAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1O1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueSArPSBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmVTcGVlZFkgKiAoIHRhcmdldENhbWVyYVBvcy54IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICk7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICs9IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gZGVwdGhNYXRlcmlhbDtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEsIGRlcHRoVGFyZ2V0ICk7XHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcbiAgICAgICAgY29tcG9zZXIucmVuZGVyKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogTG9hZGluZyBtZXRob2RzXHJcbiAqL1xyXG52YXIgdW5sb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IG51bGw7XHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLnNldFVuYWN0aXZlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlZFJlY29yZHMgPSAwO1xyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW107XHJcblxyXG59O1xyXG5cclxuXHJcbnZhciBsb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICggcmVjb3Jkc0RhdGEsIHNodWZmbGVCZWZvcmVMb2FkaW5nLCBkb25lICkge1xyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoIHRydWUgKTtcclxuXHJcbiAgICBzaG93TG9hZGluZyggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbkxvYWRpbmdFbmQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZG9uZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDIwMDAgKTtcclxuICAgIH0gKTtcclxufTtcclxuXHJcbnZhciBzaHVmZmxlUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2h1ZmZsZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGFMaXN0O1xyXG4gICAgc2h1ZmZsZWRSZWNvcmRzID0gc2h1ZmZsZSggc2h1ZmZsZWRSZWNvcmRzICk7XHJcbiAgICBsb2FkUmVjb3Jkcyggc2h1ZmZsZWRSZWNvcmRzICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUkVDT1JEUyBTRUxFQ1RJT04gTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKSB7XHJcblxyXG4gICAgICAgIGZpbGxJbmZvUGFuZWwoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuZWQnO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIG9wdGlvbnMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBpbmZvQ29udGFpbmVyRWxlbWVudCwgb3B0aW9ucy5pbmZvUGFuZWxPcGFjaXR5ICk7XHJcblxyXG4gICAgICAgIH0sIDMwMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmFkZU91dCggaW5mb0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwQmFja1JlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgb3B0aW9ucy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHVwZGF0ZVNob3duUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGVTaG93blJlY29yZC4uJyk7XHJcbiAgICAgICAgc2hvd25SZWNvcmQgPSBzZWxlY3RlZFJlY29yZDtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHJlY29yZElkID0gMDsgcmVjb3JkSWQgPCBsb2FkZWRSZWNvcmRzOyByZWNvcmRJZCsrICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID4gc2VsZWN0ZWRSZWNvcmQgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkID4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkIDwgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApICsgb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdWxsUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA9PSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnNob3dSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlc2V0U2hvd25SZWNvcmQgPSBmdW5jdGlvbiAoIGZvcmNlICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmICFmb3JjZSApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcbiAgICAgICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IC0xO1xyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBzZWxlY3RQcmV2UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBzZWxlY3ROZXh0UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXROZXh0QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcblxyXG59O1xyXG5cclxudmFyIGdldFByZXZBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPCBsb2FkZWRSZWNvcmRzIC0gMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgKyAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgZ2V0TmV4dEF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA+IDAgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldE5leHRBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcblxyXG59O1xyXG5cclxudmFyIG5hdmlnYXRlUmVjb3JkcyA9IGZ1bmN0aW9uICggZGlyZWN0aW9uICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBpZiAoIGRpcmVjdGlvbiA9PT0gJ3ByZXYnICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIG9wdGlvbnMuY2xvc2VJbmZvUGFuZWxPblNjcm9sbCApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgc2Nyb2xsUmVjb3JkcyA9IGZ1bmN0aW9uICggYmFzZVksIG9sZERlbHRhICkge1xyXG5cclxuICAgIG9sZERlbHRhID0gIW9sZERlbHRhIHx8IE1hdGguYWJzKCBvbGREZWx0YSApID4gMC41ID8gMC41IDogTWF0aC5hYnMoIG9sZERlbHRhICk7XHJcbiAgICB2YXIgaW52ZXJzZURlbHRhID0gMSAtIG9sZERlbHRhO1xyXG4gICAgdmFyIHNjcm9sbFNwZWVkID0gaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogMzAwO1xyXG5cclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JhYicpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9ICggYmFzZVkgLSBtb3VzZS55ICkgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5FWFQgUkVDT1JEIFwiICsgZGVsdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUFJFViBSRUNPUkQgXCIgKyBkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmlsbEluZm9QYW5lbCA9IGZ1bmN0aW9uICggcmVjb3JkICkge1xyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEudGl0bGUgKSB7XHJcblxyXG4gICAgICAgIHRpdGxlSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEudGl0bGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuYXJ0aXN0ICkge1xyXG5cclxuICAgICAgICBhcnRpc3RJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS5hcnRpc3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuY292ZXIgKSB7XHJcblxyXG4gICAgICAgIGNvdmVySW5mb0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcmVjb3JkLmRhdGEuY292ZXIgKyAnKSc7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIG9uTW91c2VNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICAvL2dldCBtb3VzZSBwb3NpdGlvbiBvbiBkb2N1bWVudCBjcm9zc2Jyb3dzZXJcclxuICAgIGlmICggIWUgKSB7XHJcblxyXG4gICAgICAgIGUgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggZS5wYWdlWCB8fCBlLnBhZ2VZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLnBhZ2VYO1xyXG4gICAgICAgIG1fcG9zeSA9IGUucGFnZVk7XHJcbiAgICB9IGVsc2UgaWYgKCBlLmNsaWVudFggfHwgZS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBtX3Bvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0IHBhcmVudCBlbGVtZW50IHBvc2l0aW9uIGluIGRvY3VtZW50XHJcbiAgICBpZiAoIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG52YXIgb25TY3JvbGxFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgb25DbGlja0V2ZW50ID0gZnVuY3Rpb24gKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG4gICAgICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgICAgeTogbW91c2UueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIG9wdGlvbnMuY2xvc2VJbmZvUGFuZWxPbkNsaWNrICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VVcEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyYWInKTtcclxuXHJcbiAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgb3B0aW9ucy5jb25zdGFudHMuZ3JhYlNlbnNpdGl2aXR5ICkgKSB7XHJcblxyXG4gICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBvbktleURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gNDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uV2luZG93UmVzaXplRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIDEsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZU91dCggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBJTklUSUFMSVNBVElPTiAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBpbml0U2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc2NlbmUsIHJlbmRlcmVyLCBjYW1lcmEsLi4uXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0gKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJjb250ZXh0XCI7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCBvcHRpb25zLmJhY2tncm91bmRDb2xvciwgMSApO1xyXG5cclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0LCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIC8vICAgICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCwgMSwgMSwgMSkpO1xyXG4gICAgLy8gICAgICAgIHNjZW5lLmFkZCh0YXJnZXQpO1xyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG4gICAgdmFyIHdvb2RfdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoIG9wdGlvbnMuY3JhdGVUZXh0dXJlICk7XHJcbiAgICB3b29kX3RleHR1cmUuYW5pc290cm9weSA9IHJlbmRlcmVyLmdldE1heEFuaXNvdHJvcHkoKTtcclxuICAgIHdvb2RfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgIG1hcDogd29vZF90ZXh0dXJlXHJcbiAgICB9ICk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgY3JhdGVzQ29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBzY2VuZS5hZGQoIHJvb3RDb250YWluZXIgKTtcclxuICAgIHJvb3RDb250YWluZXIuYWRkKCBjcmF0ZXNDb250YWluZXIgKTtcclxuXHJcbiAgICBpbml0Q3JhdGVzKCk7XHJcbiAgICBpbml0UmVjb3JkcygpO1xyXG5cclxuICAgIGxpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIGxlZnRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsZWZ0TGlnaHQgKTtcclxuXHJcbiAgICByaWdodExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICByaWdodExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAtMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCByaWdodExpZ2h0ICk7XHJcblxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcEV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93bkV2ZW50LCBmYWxzZSApOyBcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLmRlYnVnICkge1xyXG5cclxuICAgICAgICBpbml0RGVidWcoKTtcclxuICAgICAgICBpbml0R1VJKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxufTtcclxuXHJcbnZhciBpbml0UG9zdFByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZGVwdGhTaGFkZXIgPSBUSFJFRS5TaGFkZXJMaWIuZGVwdGhSR0JBO1xyXG4gICAgZGVwdGhVbmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGRlcHRoU2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG4gICAgZGVwdGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBkZXB0aFNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGRlcHRoU2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3JtczogZGVwdGhVbmlmb3Jtc1xyXG4gICAgfSApO1xyXG4gICAgZGVwdGhNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk5vQmxlbmRpbmc7XHJcblxyXG4gICAgZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHtcclxuICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG4gICAgfSApO1xyXG5cclxuICAgIGNvbXBvc2VyID0gbmV3IFRIUkVFLkVmZmVjdENvbXBvc2VyKCByZW5kZXJlciApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggbmV3IFRIUkVFLlJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEgKSApO1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlcHRoIG9mIGZpZWxkIHNoYWRlciAgPT09PT09PT09PSovXHJcblxyXG4gICAgZG9mID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkRvRlNoYWRlciApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcbiAgICBkb2YudW5pZm9ybXMuem5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjsgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy56ZmFyLnZhbHVlID0gY2FtZXJhLmZhcjsgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgudmFsdWUgPSA1OyAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDsgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuICAgIGRvZi51bmlmb3Jtcy5mc3RvcC52YWx1ZSA9IDguMDsgLy9mLXN0b3AgdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMudmFsdWUgPSBmYWxzZTsgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcbiAgICBkb2YudW5pZm9ybXMubWFudWFsZG9mLnZhbHVlID0gdHJ1ZTsgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcbiAgICBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LnZhbHVlID0gMTE7IC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LnZhbHVlID0gODA7IC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZzdGFydC52YWx1ZSA9IDA7IC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZmRpc3QudmFsdWUgPSAxMDA7IC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLkNvQy52YWx1ZSA9IDAuMDM7IC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLnZhbHVlID0gZmFsc2U7IC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMudmFsdWUgPSB0cnVlOyAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLnNldCggMC4zNSwgMC4zNSApOyAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodCkgXHJcbiAgICBkb2YudW5pZm9ybXMubWF4Ymx1ci52YWx1ZSA9IG9wdGlvbnMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdERlYnVnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRHVUkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIGNhbWVyYUZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdDYW1lcmEnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGggPSBjYW1lcmFGb2xkZXIuYWRkKCBjYW1lcmEsICdmb2NhbExlbmd0aCcsIDI4LCAyMDAgKS5uYW1lKCAnRm9jYWwgTGVuZ3RoJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLm9uQ2hhbmdlKCB1cGRhdGVDYW1lcmEgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0RlcHRoIG9mIEZpZWxkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLCAndmFsdWUnLCAwLCAxMCApLm5hbWUoICdGb2NhbCBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnN0b3AsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ0YgU3RvcCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWF4Ymx1ciwgJ3ZhbHVlJywgMCwgMyApLm5hbWUoICdtYXggYmx1cicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnNob3dGb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdTaG93IEZvY2FsIFJhbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWFudWFsZG9mLCAndmFsdWUnICkubmFtZSggJ01hbnVhbCBEb0YnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBmYWxsb2ZmJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIGZhbGxvZmYnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5Db0MsICd2YWx1ZScsIDAsIDAuMSApLnN0ZXAoIDAuMDAxICkubmFtZSggJ2NpcmNsZSBvZiBjb25mdXNpb24nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLCAndmFsdWUnICkubmFtZSggJ1ZpZ25ldHRpbmcnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25vdXQsICd2YWx1ZScsIDAsIDIgKS5uYW1lKCAnb3V0ZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduaW4sICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ2lubmVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmZhZGUsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ2ZhZGUgYXQnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnQXV0b2ZvY3VzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3gnLCAwLCAxICkubmFtZSggJ2ZvY3VzIHgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneScsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnRocmVzaG9sZCwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAndGhyZXNob2xkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5nYWluLCAndmFsdWUnLCAwLCAxMDAgKS5uYW1lKCAnZ2FpbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmJpYXMsICd2YWx1ZScsIDAsIDQgKS5zdGVwKCAwLjAxICkubmFtZSggJ2JpYXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZyaW5nZSwgJ3ZhbHVlJywgMCwgNSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnZnJpbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubm9pc2UsICd2YWx1ZScgKS5uYW1lKCAnVXNlIE5vaXNlJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uYW1vdW50LCAndmFsdWUnLCAwLCAwLjAwMSApLnN0ZXAoIDAuMDAwMSApLm5hbWUoICdkaXRoZXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kZXB0aGJsdXIsICd2YWx1ZScgKS5uYW1lKCAnQmx1ciBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGJzaXplLCAndmFsdWUnLCAwLCA1ICkubmFtZSggJ2JsdXIgc2l6ZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3VpLmNsb3NlKCk7XHJcblxyXG59O1xyXG5cclxudmFyIHVwZGF0ZUNhbWVyYSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0Q3JhdGVzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IG9wdGlvbnMubmJDcmF0ZXM7IGNyYXRlSWQrKyApIHtcclxuICAgICAgICB2YXIgY3JhdGUgPSBjcmVhdGVDcmF0ZSggY3JhdGVJZCApO1xyXG4gICAgICAgIGNyYXRlc0NvbnRhaW5lci5hZGQoIGNyYXRlICk7XHJcbiAgICB9XHJcbiAgICBjcmF0ZXNDb250YWluZXIucG9zaXRpb24ueiA9IC0oIDExMCAtICggMTEwICogb3B0aW9ucy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbnZhciBjcmVhdGVDcmF0ZSA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGU7IHBvcysrICkge1xyXG4gICAgICAgICAgICBjcmVhdGVSZWNvcmQoIGN1cnJlbnRSZWNvcmRJZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZWNvcmRJZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IG5ldyBSZWNvcmQoIGlkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgIGNyYXRlc1sgY3JhdGVJZCBdLmFkZCggcmVjb3JkLm1lc2ggKTtcclxuICAgIHJlY29yZHMucHVzaCggcmVjb3JkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGdldFJlY29yZE1hdGVyaWFsID0gZnVuY3Rpb24gKCBzcmMsIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nLnNyYyA9IHNyYyA/IHNyYyA6ICcnO1xyXG5cclxuICAgIHZhciBpbWdXaWR0aCA9IDQwMCxcclxuICAgICAgICBpbWdIZWlnaHQgPSA0MDAsXHJcbiAgICAgICAgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHJcbiAgICBtYXBDYW52YXMud2lkdGggPSBtYXBDYW52YXMuaGVpZ2h0ID0gNDAwO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoIG1hcENhbnZhcyApO1xyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xlZXZlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHNsZWV2ZS5zcmMgPSBvcHRpb25zLnNsZWV2ZU1hc2tUZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgc2xlZXZlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDEzMCwgMTMwLCAxMzUsIDEzNSApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggc2xlZXZlLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzbGVldmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgIGNvbG9yOiBvcHRpb25zLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgd2hlZWxEaXN0YW5jZSA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbnZhciB3aGVlbERpcmVjdGlvbiA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxudmFyIGNvb3Jkc0VxdWFsc0FwcHJveCA9IGZ1bmN0aW9uICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uICggZWxlbWVudCwgZG9uZSApIHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA8PSAwLjEgKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSAtPSAwLjE7XHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmYWRlT3V0KCBlbGVtZW50LCBkb25lICk7XHJcbiAgICAgICAgfSwgMTAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGZhZGVUbywgZG9uZSwgb3AgKSB7XHJcblxyXG4gICAgaWYgKCAhZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IGVsZW1lbnQuc3R5bGUub3BhY2l0eSAmJiBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPCBmYWRlVG8gKSB7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIG9wID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggIWVsZW1lbnQuc3R5bGUuZGlzcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIG9wID0gZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IDE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3AgKz0gMC4wMztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICk7XHJcblxyXG4gICAgICAgIH0sIDEwICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gZmFkZVRvO1xyXG5cclxuICAgICAgICBpZiAoIGlzRnVuY3Rpb24oIGRvbmUgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNhbGN1bGF0ZUNhbnZhc1NpemUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBvcHRpb25zLmNhbnZhc1dpZHRoID8gb3B0aW9ucy5jYW52YXNXaWR0aCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gb3B0aW9ucy5jYW52YXNIZWlnaHQgPyBvcHRpb25zLmNhbnZhc0hlaWdodCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbn07XHJcblxyXG52YXIgc2V0Q2FudmFzRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCAgICAgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCAgICAgPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlKCB2ICkgeyAvLyBKb25hcyBSYW9uaSBTb2FyZXMgU2lsdmEgLSBodHRwOi8vanNmcm9taGVsbC5jb20vYXJyYXkvc2h1ZmZsZSBbcmV2LiAjMV1cclxuXHJcbiAgICBmb3IgKCB2YXIgaiwgeCwgaSA9IHYubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkgKiBpICksIHggPSB2WyAtLWkgXSwgdlsgaSBdID0gdlsgaiBdLCB2WyBqIF0gPSB4ICk7XHJcbiAgICByZXR1cm4gdjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iaiApIHtcclxuXHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVhQT1JUUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgTWV0aG9kcyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoIHBhcmFtcyApIHtcclxuXHJcbiAgICBvcHRpb25zID0gZXh0ZW5kKCBkZWZhdWx0cywgcGFyYW1zICk7XHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIC8vIFRPRE86IHRvIGZpeCAtIGlmICggIXN1cHBvcnRzIHx8ICFNb2Rlcm5penIud2ViZ2wgKSByZXR1cm47XHJcbiAgICBjb25zb2xlLmxvZyggJ0luaXRpYWxpemluZyBjcmF0ZWRpZ2dlci5qcy4uLicgKTtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMucm9vdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFyb290Q29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcm9vdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jYW52YXNDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY2FudmFzQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY2FudmFzIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWxvYWRpbmdDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5pbmZvQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWluZm9Db250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBpbmZvIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnRpdGxlQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXRpdGxlSW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJlY29yZCB0aXRsZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGFydGlzdEluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuYXJ0aXN0Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWFydGlzdEluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgYXJ0aXN0IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY292ZXJJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmNvdmVyQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNvdmVySW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNvdmVyIGltYWdlIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuXHJcbiAgICBpbml0U2NlbmUoKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGlkIDwgMCApIHtcclxuXHJcbiAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGlkID4gbG9hZGVkUmVjb3JkcyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuc3RhcnRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSB0cnVlO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuc3RvcFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZW5hYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5kaXNhYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIGdldHRlcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRSZWNvcmRzRGF0YUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNEYXRhTGlzdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldExvYWRlZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFJlY29yZHM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09ICBNZXRob2RzIGFjY2Vzc29ycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmxvYWRSZWNvcmRzID0gbG9hZFJlY29yZHM7XHJcbmV4cG9ydHMudW5sb2FkUmVjb3JkcyA9IHVubG9hZFJlY29yZHM7XHJcbmV4cG9ydHMucmVzZXRTaG93blJlY29yZCA9IHJlc2V0U2hvd25SZWNvcmQ7XHJcbmV4cG9ydHMuc2h1ZmZsZVJlY29yZHMgPSBzaHVmZmxlUmVjb3JkcztcclxuZXhwb3J0cy5mbGlwU2VsZWN0ZWRSZWNvcmQgPSBmbGlwU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0UHJldlJlY29yZCA9IHNlbGVjdFByZXZSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0TmV4dFJlY29yZCA9IHNlbGVjdE5leHRSZWNvcmQ7XHJcbmV4cG9ydHMuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuZXhwb3J0cy5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBQVUJMSUMgQVBJICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXpZM0pwY0hSekwyTnlZWFJsWkdsbloyVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjlmWDE5ZklDQWdJQ0FnSUNBZ0lDQWdJQ0JmWDE5Zlh5QWdJQ0FnSUNBZ0lDQWdJQ0FnWDE5ZlgxOGdJQ0FnSUNBZ0lDQWdJQ0FnWDE5ZlgxOWZYMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM5Y1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUNBZ0lDOWNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lDQWdJQzljWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJQ0FnTHpvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDODZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQzg2T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUM4Nk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0x6bzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdMem82T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0F2T2pvNk9qbzZYRndnSUNBZ1hGeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZPam82T2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0x6bzZPam82T2x4Y0lDQWdJRnhjSUNBZ0lDQXZPam82T2pvNk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0x6bzZPaTljWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQXZPam82TDM1K1hGdzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZPam82TDE5ZlhGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDODZPam92WDE5Y1hEbzZPbHhjSUNBZ0lGeGNJQzg2T2pvdklDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0x6bzZPanBjWENBZ0lDQmNYQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hEbzZPaThnSUNBZ0x5QmNYRG82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQXZPam82T2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y1gxOGdJQ0FnTHpvNk9qbzZPbHhjSUNBZ0lGeGNYMXhjT2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y09pOWZYMTlmTHlBZ0lGeGNPam82WEZ4ZlgxOWZYRnhjY2x4dUlDQWdJQ0FnSUNBZ0x6bzZPaTljWERvNk9seGNJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hDQmNYQ0FnTHpvNk9pOWNYRG82T2x4Y0lDQWdJRnhjSUZ4Y09qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUh3Z0lDQWdJSHc2T2pwOElDQWdJSHhjY2x4dUlDQWdJQ0FnSUNBdk9qbzZMeUFnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZmQ0FnSUNCOElGeGNMem82T2k4Z0lGeGNPam82WEZ4ZlgxOWZYRndnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRnhmWDE5ZlhGeGZYMTk4SUNBZ0lDQjhPam82ZkY5ZlgxOThYSEpjYmlBZ0lDQWdJQ0FnWEZ3Nk9pOGdJQ0I4T2pvNk9seGNJQ0F2T2pvNmZGOWZYMTk4SUM4Nk9qb3ZJQ0FnSUZ4Y09qb3ZJQ0FnSUM4Z0lGeGNPam82WEZ3Z0lDQmNYRG82THlBZ0lDQXZJQ0FnWDF4Y1gxOWZMem82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNCY1hDOWZYMTlmZkRvNk9qbzZYRnd2T2pvNkx5QWdJQ0F2WEZ3dk9qbzZMeUFnSUNBdklGeGNMMTlmWDE4dlhGd2dJQ0JjWERvNk9seGNJQ0FnWEZ3dlgxOWZYeTg2WEZ3Z2ZEbzZmQ0F2T2pvNkx5QWdJQ0F2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh3Nk9qbzZPam82T2pvdklDQWdJQzg2T2pvNk9pOGdJQ0FnTHlBZ0lDQWdJRnhjT2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQmNYRG82T2x4Y2ZEbzZmQzg2T2pvdklDQWdJQzljY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkRvNmZGeGNPam82T2k4Z0lDQWdMMXhjT2pvNk9pOWZYMTlmTHlBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRnhmWDE5ZlhGd2dJRnhjT2pvNk9qbzZPam82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pwOElGeGNPam92WDE5Zlh5OGdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBdk9qbzZMeUFnSUNBdklDQWdYRnc2T2pvNk9qbzZPaThnSUNBZ0wxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjhPanA4SUNCK2ZDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0JjWERvNk9seGNMem82T2k4Z0lDQWdMeUFnSUNBZ1hGdzZPam82T2pvdklDQWdJQzljY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkRvNmZDQWdJSHdnSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82T2pvNkx5QWdJQ0F2SUNBZ0lDQWdJRnhjT2pvNk9pOWZYMTlmTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hEbzZmQ0FnSUh3Z0lDQWdJQ0FnSUNBZ0lGeGNPam82WEZ4ZlgxOWZYRndnSUNBZ0lDQWdJQ0JjWERvNk9qb3ZJQ0FnSUM4Z0lDQWdJQ0FnSUNCOE9qcDhJQ0FnSUh4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeGNPbndnSUNCOElDQWdJQ0FnSUNBZ0lDQWdYRnc2T2k4Z0lDQWdMeUFnSUNBZ0lDQWdJQ0JjWERvNkx5QWdJQ0F2SUNBZ0lDQWdJQ0FnSUh3Nk9ueGZYMTlmZkZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeGNmRjlmWDN3Z0lDQWdJQ0FnSUNBZ0lDQWdYRnd2WDE5Zlh5OGdJQ0FnSUNBZ0lDQWdJQ0JjWEM5ZlgxOWZMeUFnSUNBZ0lDQWdJQ0FnSUg1K1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUY5ZklDQWdJQ0FnSUNBZ0lDQWdJQzVmWDE4dVgxOGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOWZYSEpjYmlBZ0lDQWdJQ0JmWDE5ZlgxOWZYMTlmWDE5ZlgxOWZJRjh2SUNCOFh5QWdYMTlmWHlBZ0lGOWZmQ0JmTDN4Zlgzd2dYMTlmWHlBZ0lGOWZYMThnSUNCZlgxOWZYMTlmWDE5Zlh5QWdJQ0FnSUNCOFgxOThJRjlmWDE5ZlgxeHlYRzRnSUNBZ0lGOHZJRjlmWDF4Y1h5QWdYMThnWEZ4Zlh5QWdYRnhjWENBZ0lGOWZYRnd2SUY5ZklGeGNJQzhnWDE4Z2ZDQjhJQ0I4THlCZlgxOWNYQ0F2SUY5ZlgxeGNYeThnWDE4Z1hGeGZJQ0JmWHlCY1hDQWdJQ0FnSUh3Z0lId3ZJQ0JmWDE4dlhISmNiaUFnSUNBZ1hGd2dJRnhjWDE5ZmZDQWdmQ0JjWEM4dklGOWZJRnhjZkNBZ2ZDQmNYQ0FnWDE5Zkx5OGdMMTh2SUh3Z2ZDQWdMeUF2WHk4Z0lENGdMMTh2SUNBK0lDQmZYMTh2ZkNBZ2ZDQmNYQzhnSUNBZ0lDQjhJQ0I4WEZ4ZlgxOGdYRnhjY2x4dUlDQWdJQ0FnWEZ4ZlgxOGdJRDVmWDN3Z0lDaGZYMTlmSUNBdlgxOThJQ0JjWEY5Zlh5QWdQbDlmWDE4Z2ZDQjhYMTljWEY5Zlh5QWdMMXhjWDE5ZklDQXZJRnhjWDE5ZklDQStYMTk4SUNBdlhGd2dMMXhjWDE5OElDQXZYMTlmWHlBZ1BseHlYRzRnSUNBZ0lDQWdJQ0FnWEZ3dklDQWdJQ0FnSUNBZ0lDQmNYQzhnSUNBZ0lDQWdJQ0FnWEZ3dklDQWdJQ0JjWEM4Z0lDQXZYMTlmWDE4dkwxOWZYMTlmTHlBZ0lDQWdJRnhjTHlBZ0lDQWdJRnhjTHlCY1hGOWZYMTlmWDN3Z0lDQWdYRnd2WEhKY2JseHlYRzVjY2x4dUtpOWNjbHh1WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQmpjbUYwWldScFoyZGxjaTVxY3lCMk1DNHdMakVnTFNCaWVTQnlhWE54SUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVKM1Z6WlNCemRISnBZM1FuTzF4eVhHNWNjbHh1ZG1GeUlGUklVa1ZGSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCM2FXNWtiM2RiSjFSSVVrVkZKMTBnT2lCMGVYQmxiMllnWjJ4dlltRnNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnWjJ4dlltRnNXeWRVU0ZKRlJTZGRJRG9nYm5Wc2JDazdYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDBnSUVsdWFtVmpkQ0JoYkd3Z1pYaDBaWEp1WVd3Z2JXOWtkV3hsY3lCMGJ5QlVTRkpGUlM1cWN5QTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMU5vWVdSbGNsQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwTnZjSGxUYUdGa1pYSW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDFKbGJtUmxjbEJoYzNNbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMFJ2UmxOb1lXUmxjaWNwS0ZSSVVrVkZLVHRjY2x4dWNtVnhkV2x5WlNnbkxpOTBhSEpsWldwelgyMXZaSFZzWlhNdlJsaEJRVk5vWVdSbGNpY3BLRlJJVWtWRktUdGNjbHh1Y21WeGRXbHlaU2duTGk5MGFISmxaV3B6WDIxdlpIVnNaWE12VFdGemExQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwVm1abVZqZEVOdmJYQnZjMlZ5Snlrb1ZFaFNSVVVwTzF4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRlpCVWtsQlFreEZVeUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JuWmhjaUJ2Y0hScGIyNXpJRDBnZTMwc1hISmNiaUFnSUNCbGVIQnZjblJ6SUQwZ2UzMHNJQzh2SUU5aWFtVmpkQ0JtYjNJZ2NIVmliR2xqSUVGUVNYTmNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JFVDAwZ1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5SeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDeGNjbHh1SUNBZ0lHTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblFzWEhKY2JpQWdJQ0JzYjJGa2FXNW5RMjl1ZEdGcGJtVnlSV3hsYldWdWRDeGNjbHh1SUNBZ0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBMRnh5WEc0Z0lDQWdkR2wwYkdWSmJtWnZSV3hsYldWdWRDeGNjbHh1SUNBZ0lHRnlkR2x6ZEVsdVptOUZiR1Z0Wlc1MExGeHlYRzRnSUNBZ1kyOTJaWEpKYm1adlJXeGxiV1Z1ZEN4Y2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQlVhSEpsWlM1cWN5QnZZbXBsWTNSeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCemRHRjBjeXhjY2x4dUlDQWdJSE5qWlc1bExGeHlYRzRnSUNBZ1kyRnRaWEpoTEZ4eVhHNGdJQ0FnZEdGeVoyVjBMRnh5WEc0Z0lDQWdjbVZ1WkdWeVpYSXNYSEpjYmlBZ0lDQnNhV2RvZEN4Y2NseHVJQ0FnSUd4bFpuUk1hV2RvZEN4Y2NseHVJQ0FnSUhKcFoyaDBUR2xuYUhRc1hISmNiaUFnSUNCamIyMXdiM05sY2l4Y2NseHVJQ0FnSUVaWVFVRXNYSEpjYmlBZ0lDQmtiMllzWEhKY2JpQWdJQ0JuZFdrc1hISmNiaUFnSUNCa1pYQjBhRlJoY21kbGRDeGNjbHh1SUNBZ0lHUmxjSFJvVTJoaFpHVnlMRnh5WEc0Z0lDQWdaR1Z3ZEdoVmJtbG1iM0p0Y3l4Y2NseHVJQ0FnSUdSbGNIUm9UV0YwWlhKcFlXd3NYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnUm1WaGRIVnlaU0IwWlhOMElDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNBdkx5QlVUMFJQT2lCMGJ5Qm1hWGdnTFNCemRYQndiM0owY3lBOUlDRWhaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lBbUppQWhJWEp2YjNRdVlXUmtSWFpsYm5STWFYTjBaVzVsY2l4Y2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQlBZbXBsWTNSeklDWWdaR0YwWVNCaGNuSmhlWE1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dUlDQWdJR055WVhSbGN5QTlJRnRkTEZ4eVhHNGdJQ0FnY21WamIzSmtjeUE5SUZ0ZExGeHlYRzRnSUNBZ2NtVmpiM0prYzBSaGRHRk1hWE4wSUQwZ1cxMHNYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnVkdoeVpXVXVhbk1nYjJKcVpXTjBjeUJqYjI1MFlXbHVaWEp6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeUxGeHlYRzRnSUNBZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5TEZ4eVhHNGdJQ0FnY21WamIzSmtjME52Ym5SaGFXNWxjaXhjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCVGRHRjBaWE1zSUhWMGFXd2dkbUZ5Y3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnWTJGdWRtRnpWMmxrZEdnc1hISmNiaUFnSUNCallXNTJZWE5JWldsbmFIUXNYSEpjYmlBZ0lDQmtjSElzWEhKY2JpQWdJQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZEN4Y2NseHVJQ0FnSUdselRHOWhaR2x1WnlBOUlHWmhiSE5sTEZ4eVhHNGdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0JjSW1Oc2IzTmxaRndpTEZ4eVhHNGdJQ0FnYVhOVFkzSnZiR3hwYm1jZ1BTQm1ZV3h6WlN4Y2NseHVJQ0FnSUdSdlVtVnVaR1Z5SUQwZ2RISjFaU3hjY2x4dUlDQWdJRzF2ZFhObElEMGdlMXh5WEc0Z0lDQWdJQ0FnSUhnNklEQXNYSEpjYmlBZ0lDQWdJQ0FnZVRvZ01GeHlYRzRnSUNBZ2ZTeGNjbHh1SUNBZ0lHMXZkWE5sUkc5M2JsQnZjeUE5SUh0Y2NseHVJQ0FnSUNBZ0lDQjRPaUF3TEZ4eVhHNGdJQ0FnSUNBZ0lIazZJREJjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0IwWVhKblpYUkRZVzFsY21GUWIzTWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ2VEb2dNQ3hjY2x4dUlDQWdJQ0FnSUNCNU9pQXdYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lDQWdjMlZzWldOMFpXUlNaV052Y21RZ1BTQXRNU3hjY2x4dUlDQWdJSE5vYjNkdVVtVmpiM0prSUQwZ0xURXNYSEpjYmlBZ0lDQnNiMkZrWldSU1pXTnZjbVJ6SUQwZ01DeGNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JOWVhSbGNtbGhiSE1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dUlDQWdJSGR2YjJSZmJXRjBaWEpwWVd3c1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdSR1ZtWVhWc2RDQnpaWFIwYVc1bmN5QWdQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzRnSUNBZ1pHVm1ZWFZzZEhNZ1BTQjdYSEpjYmlBZ0lDQWdJQ0FnWkdWaWRXYzZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lDQWdZMkZ1ZG1GelYybGtkR2c2SUc1MWJHd3NYSEpjYmlBZ0lDQWdJQ0FnWTJGdWRtRnpTR1ZwWjJoME9pQnVkV3hzTEZ4eVhHNGdJQ0FnSUNBZ0lHNWlRM0poZEdWek9pQXlMRnh5WEc0Z0lDQWdJQ0FnSUhKbFkyOXlaSE5RWlhKRGNtRjBaVG9nTWpRc1hISmNiaUFnSUNBZ0lDQWdiR2xuYUhSSmJuUmxibk5wZEhrNklERXNYSEpjYmlBZ0lDQWdJQ0FnWTJGdFpYSmhUVzkxYzJWTmIzWmxPaUIwY25WbExGeHlYRzRnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dNSGd4TVRFeE1URXNYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxRMjlzYjNJNklEQjRNR1F3TnpBeUxGeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhjMnRVWlhoMGRYSmxPaUFuYVcxbkwzTnNaV1YyWlM1d2JtY25MRnh5WEc0Z0lDQWdJQ0FnSUdOeVlYUmxWR1Y0ZEhWeVpUb2dKMmx0Wnk5M2IyOWtMbXB3Wnljc1hISmNiaUFnSUNBZ0lDQWdZMnh2YzJWSmJtWnZVR0Z1Wld4UGJrTnNhV05yT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUdOc2IzTmxTVzVtYjFCaGJtVnNUMjVUWTNKdmJHdzZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lDQWdhVzVtYjFCaGJtVnNUM0JoWTJsMGVUb2dNQzQ1TEZ4eVhHNGdJQ0FnSUNBZ0lIQnZjM1J3Y205alpYTnphVzVuT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUdKc2RYSkJiVzkxYm5RNklEQXVOQ3hjY2x4dUlDQWdJQ0FnSUNCMWNHUmhkR1ZEWVc1MllYTlRhWHBsVDI1WGFXNWtiM2RTWlhOcGVtVTZJSFJ5ZFdVc1hISmNiaUFnSUNBZ0lDQWdiMjVKYm1adlVHRnVaV3hQY0dWdVpXUTZJR1oxYm1OMGFXOXVJQ2dwSUh0OUxGeHlYRzRnSUNBZ0lDQWdJRzl1U1c1bWIxQmhibVZzUTJ4dmMyVmtPaUJtZFc1amRHbHZiaUFvS1NCN2ZTeGNjbHh1SUNBZ0lDQWdJQ0J2Ymt4dllXUnBibWRGYm1RNklHWjFibU4wYVc5dUlDZ3BJSHQ5TEZ4eVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5Sek9pQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISnZiM1JEYjI1MFlXbHVaWEpKWkRvZ0oyTnlZWFJsWkdsbloyVnlKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ1ZG1GelEyOXVkR0ZwYm1WeVNXUTZJQ2RqY21GMFpXUnBaMmRsY2kxallXNTJZWE1uTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JzYjJGa2FXNW5RMjl1ZEdGcGJtVnlTV1E2SUNkamNtRjBaV1JwWjJkbGNpMXNiMkZrYVc1bkp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNW1iME52Ym5SaGFXNWxja2xrT2lBblkzSmhkR1ZrYVdkblpYSXRhVzVtYnljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhScGRHeGxRMjl1ZEdGcGJtVnlTV1E2SUNkamNtRjBaV1JwWjJkbGNpMXlaV052Y21RdGRHbDBiR1VuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JoY25ScGMzUkRiMjUwWVdsdVpYSkpaRG9nSjJOeVlYUmxaR2xuWjJWeUxYSmxZMjl5WkMxaGNuUnBjM1FuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjNabGNrTnZiblJoYVc1bGNrbGtPaUFuWTNKaGRHVmthV2RuWlhJdGNtVmpiM0prTFdOdmRtVnlKMXh5WEc0Z0lDQWdJQ0FnSUgwc1hISmNiaUFnSUNBZ0lDQWdZMjl1YzNSaGJuUnpPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpFMXZkbVZVYVcxbE9pQXhNREF3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVcxbGNtRk5iM1psVkdsdFpUb2dPREF3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm1adlQzQmxibFJwYldVNklEZ3dNQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa1FtRnpaVms2SURVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaRk5vYjNkdVdUb2dNalVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpFWnNhWEJ3WldSWk9pQXhNVEFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJoY21kbGRFSmhjMlZRYjNOcGRHbHZiam9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dMVEl3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dNVEFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNk9pQXdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiV1Z5WVVKaGMyVlFiM05wZEdsdmJqb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ01qZ3dMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ01qQXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ01UZ3dYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiV1Z5WVVadlkzVnpVRzl6YVhScGIyNDZJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhnNklERTJNQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklERTVNQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhvNklEZzFYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiV1Z5WVUxdmRYTmxUVzkyWlZOd1pXVmtXVG9nTUM0d055eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnRaWEpoVFc5MWMyVk5iM1psVTNCbFpXUmFPaUF3TGpBekxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbmNtRmlVMlZ1YzJsMGFYWnBkSGs2SURaY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlPMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdRMHhCVTFORlV5QWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlJQ0JTWldOdmNtUWdRMnhoYzNNZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVkbUZ5SUZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNnZ2FXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxtbGtJRDBnYVdRN1hISmNiaUFnSUNCMGFHbHpMbU55WVhSbFNXUWdQU0JqY21GMFpVbGtPMXh5WEc0Z0lDQWdkR2hwY3k1d2IzTWdQU0J3YjNNN1hISmNiaUFnSUNCMGFHbHpMbk4wWVhSbElEMGdKMjkxZENjN1hISmNiaUFnSUNCMGFHbHpMbkpsWTI5eVpGaFFiM01nUFNBdE5qSWdLeUFvSURFek5TQXZJRzl3ZEdsdmJuTXVjbVZqYjNKa2MxQmxja055WVhSbElDa2dLaUJ3YjNNN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJnZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0F4TURBc0lERXVOU3dnTVRBd0xDQXhMQ0F4TENBeElDa3NJRzVsZHlCVVNGSkZSUzVOWlhOb1JtRmpaVTFoZEdWeWFXRnNLQ0JuWlhSU1pXTnZjbVJOWVhSbGNtbGhiQ2dnYm5Wc2JDd2dabUZzYzJVZ0tTQXBJQ2s3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1WjJWdmJXVjBjbmt1WVhCd2JIbE5ZWFJ5YVhnb0lHNWxkeUJVU0ZKRlJTNU5ZWFJ5YVhnMEtDa3ViV0ZyWlZSeVlXNXpiR0YwYVc5dUtDQTFNQ3dnTUN3Z01DQXBJQ2s3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjR1YzJWMEtDQjBhR2x6TG5KbFkyOXlaRmhRYjNNc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkVKaGMyVlpMQ0F3SUNrN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0dWVpQTlJRTFoZEdndVVFa2dMeUF5TzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG5KbFkyOXlaRWxrSUQwZ2FXUTdYSEpjYmlBZ0lDQjBhR2x6TG1GaWMyOXNkWFJsVUc5emFYUnBiMjRnUFNCdVpYY2dWRWhTUlVVdVZtVmpkRzl5TXlncE8xeHlYRzVjY2x4dUlDQWdJSFJvYVhNdWMyVjBWVzVoWTNScGRtVW9LVHRjY2x4dUlDQWdJSFJvYVhNdWNIVnphRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXViRzluSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdOdmJuTnZiR1V1Ykc5bktDQmNJbEpsWTI5eVpDQnV3ckJjSWl3Z2RHaHBjeTVwWkN4Y2NseHVJQ0FnSUNBZ0lDQmNJbU55WVhSbFNXUWdQVndpTENCMGFHbHpMbU55WVhSbFNXUXNYSEpjYmlBZ0lDQWdJQ0FnWENKd2IzTWdQVndpTENCMGFHbHpMbkJ2Y3lBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWMyVjBRV04wYVhabElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIUm9hWE11WVdOMGFYWmxJRDBnZEhKMVpUdGNjbHh1SUNBZ0lIUm9hWE11YldWemFDNTJhWE5wWW14bElEMGdkSEoxWlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG5ObGRGVnVZV04wYVhabElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIUm9hWE11WVdOMGFYWmxJRDBnWm1Gc2MyVTdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ3VkbWx6YVdKc1pTQTlJR1poYkhObE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWMyaHZkMUpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhSb2FYTXVjM1JoZEdVZ0lUMDlJQ2R6YUc5M2JpY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBbmMyaHZkMjRuTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WVdKemIyeDFkR1ZRYjNOcGRHbHZiaTV6WlhSR2NtOXRUV0YwY21sNFVHOXphWFJwYjI0b0lIUm9hWE11YldWemFDNXRZWFJ5YVhoWGIzSnNaQ0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11Y21WamIzSmtVMmh2ZDI1WlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRTFoZEdndVVFa2dMeUF5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVjbVZqYjNKa1dGQnZjeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklEVXdJQ3NnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11Y21WamIzSmtVMmh2ZDI1WkxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nZEdocGN5NWhZbk52YkhWMFpWQnZjMmwwYVc5dUxucGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JR05oYldWeVlTNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VEb2dkR2hwY3k1eVpXTnZjbVJZVUc5eklDc2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU1TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dkR2hwY3k1aFluTnZiSFYwWlZCdmMybDBhVzl1TG5vZ0t5QnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NWpZVzFsY21GR2IyTjFjMUJ2YzJsMGFXOXVMbnBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWNIVnphRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhSb2FYTXVjM1JoZEdVZ0lUMGdKM0IxYzJobFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBbmNIVnphR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRUpoYzJWWlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRTFoZEdndVVFa2dMeUF5SUNzZ1RXRjBhQzVRU1NBdklEZGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1RXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYmxKbFkyOXlaQzV3Y205MGIzUjVjR1V1Y0hWc2JGSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JSFJvYVhNdWMzUmhkR1VnSVQwOUlDZHdkV3hzWldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnSjNCMWJHeGxaQ2M3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9MbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUkNZWE5sV1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuSnZkR0YwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNk9pQk5ZWFJvTGxCSklDOGdNaUF0SUUxaGRHZ3VVRWtnTHlBM1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbVpzYVhCU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHUnZibVVnS1NCN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1emRHRjBaU0E5SUNkbWJHbHdjR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbkpsWTI5eVpFWnNhWEJ3WldSWlhISmNiaUFnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11YVc1bWIwOXdaVzVVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQXVaR1ZzWVhrb0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtbHVabTlQY0dWdVZHbHRaU0F2SURRZ0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQk5ZWFJvTGxCSlhISmNiaUFnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11YVc1bWIwOXdaVzVVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdGeVoyVjBMbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NXlaV052Y21SWVVHOXpMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUkdiR2x3Y0dWa1dTQXJJRFV3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I2T2lCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHVlbHh5WEc0Z0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtbHVabTlQY0dWdVZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1Z4eVhHNGdJQ0FnSUNBZ0lDNXZia052YlhCc1pYUmxLQ0JrYjI1bElDazdYSEpjYmx4eVhHNGdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUIwYUdsekxuSmxZMjl5WkZoUWIzTWdLeUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRkdiMk4xYzFCdmMybDBhVzl1TG5nZ0t5QTRNQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NUlDMGdOVEFzWEhKY2JpQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNW1iR2x3UW1GamExSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ2daRzl1WlNBc0lHNXZRMkZ0WlhKaFZIZGxaVzRnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCMGFHbHpMbk4wWVhSbElEMDlQU0FuWm14cGNIQmxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1SbGJHRjVLQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVwYm1adlQzQmxibFJwYldVZ0x5QXlJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUkNZWE5sV1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1cGJtWnZUM0JsYmxScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1eWIzUmhkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ01GeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXBibVp2VDNCbGJsUnBiV1VnTHlBeUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1YjI1RGIyMXdiR1YwWlNnZ1pHOXVaU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lXNXZRMkZ0WlhKaFZIZGxaVzRwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR0Z5WjJWMExuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzVrWld4aGVTZ2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVhVzVtYjA5d1pXNVVhVzFsSUM4Z01pQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG5KbFkyOXlaRmhRYjNNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ056VXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dkR2hwY3k1aFluTnZiSFYwWlZCdmMybDBhVzl1TG5wY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbWx1Wm05UGNHVnVWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQmpZVzFsY21FdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTV5WldOdmNtUllVRzl6SUNzZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lFSkJVMFVnVFVWVVNFOUVVeUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibHh5WEc1MllYSWdaWGgwWlc1a0lEMGdablZ1WTNScGIyNGdLQ0JrWldaaGRXeDBjeXdnYjNCMGFXOXVjeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQm1iM0lnS0NCMllYSWdhMlY1SUdsdUlHOXdkR2x2Ym5NZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0NCdmNIUnBiMjV6TENCclpYa2dLU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhSeld5QnJaWGtnWFNBOUlHOXdkR2x2Ym5OYklHdGxlU0JkTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUdSbFptRjFiSFJ6TzF4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdGdWFXMWhkR1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQmtiMUpsYm1SbGNpQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0NCaGJtbHRZWFJsSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVZ1WkdWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYjNCMGFXOXVjeTVrWldKMVp5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlYUnpMblZ3WkdGMFpTZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdjbVZ1WkdWeUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lGUlhSVVZPTG5Wd1pHRjBaU2dwTzF4eVhHNGdJQ0FnZFhCa1lYUmxVMmh2ZDI1U1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUc5d2RHbHZibk11WTJGdFpYSmhUVzkxYzJWTmIzWmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwWVhKblpYUkRZVzFsY21GUWIzTXVlQ0E5SUNnZ2JXOTFjMlV1ZUNBdklHTmhiblpoYzFkcFpIUm9JQzBnTUM0MUlDa2dLaUF3TGpJMU95QXZMeUJwYm5abGNuTmxJR0Y0YVhNL1hISmNiaUFnSUNBZ0lDQWdkR0Z5WjJWMFEyRnRaWEpoVUc5ekxua2dQU0FvSUcxdmRYTmxMbmtnTHlCallXNTJZWE5YYVdSMGFDQXRJREF1TlNBcElDb2dNQzR5TlR0Y2NseHVJQ0FnSUNBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5rZ0t6MGdiM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTFjMlZOYjNabFUzQmxaV1JaSUNvZ0tDQjBZWEpuWlhSRFlXMWxjbUZRYjNNdWVDQXRJSEp2YjNSRGIyNTBZV2x1WlhJdWNtOTBZWFJwYjI0dWVTQXBPMXh5WEc0Z0lDQWdJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSXVjbTkwWVhScGIyNHVlaUFyUFNCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZOYjNWelpVMXZkbVZUY0dWbFpGb2dLaUFvSUhSaGNtZGxkRU5oYldWeVlWQnZjeTU1SUMwZ2NtOXZkRU52Ym5SaGFXNWxjaTV5YjNSaGRHbHZiaTU2SUNrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZUzVzYjI5clFYUW9JSFJoY21kbGRDNXdiM05wZEdsdmJpQXBPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2diM0IwYVc5dWN5NXdiM04wY0hKdlkyVnpjMmx1WnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyTmxibVV1YjNabGNuSnBaR1ZOWVhSbGNtbGhiQ0E5SUdSbGNIUm9UV0YwWlhKcFlXdzdYSEpjYmlBZ0lDQWdJQ0FnY21WdVpHVnlaWEl1Y21WdVpHVnlLQ0J6WTJWdVpTd2dZMkZ0WlhKaExDQmtaWEIwYUZSaGNtZGxkQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lITmpaVzVsTG05MlpYSnlhV1JsVFdGMFpYSnBZV3dnUFNCdWRXeHNPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJYQnZjMlZ5TG5KbGJtUmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbGJtUmxjbVZ5TG5KbGJtUmxjaWdnYzJObGJtVXNJR05oYldWeVlTQXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiaThxWEhKY2JpQXFJRXh2WVdScGJtY2diV1YwYUc5a2MxeHlYRzRnS2k5Y2NseHVkbUZ5SUhWdWJHOWhaRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdabTl5SUNnZ2RtRnlJR2tnUFNBd095QnBJRHdnY21WamIzSmtjeTVzWlc1bmRHZzdJR2tyS3lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2FTQmRMbVJoZEdFZ1BTQnVkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOYklHa2dYUzV6WlhSVmJtRmpkR2wyWlNncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCc2IyRmtaV1JTWldOdmNtUnpJRDBnTUR0Y2NseHVJQ0FnSUhKbFkyOXlaSE5FWVhSaFRHbHpkQ0E5SUZ0ZE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzUyWVhJZ2JHOWhaRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvSUhKbFkyOXlaSE5FWVhSaExDQnphSFZtWm14bFFtVm1iM0psVEc5aFpHbHVaeXdnWkc5dVpTQXBJSHRjY2x4dVhISmNiaUFnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NCMGNuVmxJQ2s3WEhKY2JseHlYRzRnSUNBZ2MyaHZkMHh2WVdScGJtY29JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQnNiMkZrWldSU1pXTnZjbVJ6SUQ0Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhWdWJHOWhaRkpsWTI5eVpITW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUhOb2RXWm1iR1ZDWldadmNtVk1iMkZrYVc1bklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMFJoZEdFZ1BTQnphSFZtWm14bEtDQnlaV052Y21SelJHRjBZU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb0lIWmhjaUJwSUQwZ01Ec2dhU0E4SUhKbFkyOXlaSE11YkdWdVozUm9JQ1ltSUdrZ1BDQnlaV052Y21SelJHRjBZUzVzWlc1bmRHZzdJR2tyS3lBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUdrZ1hTNWtZWFJoSUQwZ2NtVmpiM0prYzBSaGRHRmJJR2tnWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnYVNCZExuTmxkRUZqZEdsMlpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21Seld5QnBJRjB1YldWemFDNXRZWFJsY21saGJDNXRZWFJsY21saGJITWdQU0JuWlhSU1pXTnZjbVJOWVhSbGNtbGhiQ2dnY21WamIzSmtjMFJoZEdGYklHa2dYUzVqYjNabGNpd2djbVZqYjNKa2MwUmhkR0ZiSUdrZ1hTNW9ZWE5UYkdWbGRtVWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZMeUIzYUhrZ1B6OWNjbHh1SUNBZ0lDQWdJQ0F2THlCc2IyRmtaV1JTWldOdmNtUnpJRDBnY21WamIzSmtjMFJoZEdFdWJHVnVaM1JvSUR3Z2NtVmpiM0prY3k1c1pXNW5kR2dnUHlCeVpXTnZjbVJ6UkdGMFlTNXNaVzVuZEdnZ09pQnlaV052Y21SekxteGxibWQwYUR0Y2NseHVJQ0FnSUNBZ0lDQnNiMkZrWldSU1pXTnZjbVJ6SUQwZ2NtVmpiM0prY3k1c1pXNW5kR2c3WEhKY2JpQWdJQ0FnSUNBZ2NtVmpiM0prYzBSaGRHRk1hWE4wSUQwZ2NtVmpiM0prYzBSaGRHRTdYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FHbGtaVXh2WVdScGJtY29JR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MElDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHOXdkR2x2Ym5NdWIyNU1iMkZrYVc1blJXNWtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JR1J2Ym1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHOXVaU2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUxDQXlNREF3SUNrN1hISmNiaUFnSUNCOUlDazdYSEpjYm4wN1hISmNibHh5WEc1MllYSWdjMmgxWm1ac1pWSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSE5vZFdabWJHVmtVbVZqYjNKa2N5QTlJSEpsWTI5eVpITkVZWFJoVEdsemREdGNjbHh1SUNBZ0lITm9kV1ptYkdWa1VtVmpiM0prY3lBOUlITm9kV1ptYkdVb0lITm9kV1ptYkdWa1VtVmpiM0prY3lBcE8xeHlYRzRnSUNBZ2JHOWhaRkpsWTI5eVpITW9JSE5vZFdabWJHVmtVbVZqYjNKa2N5QXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRkpGUTA5U1JGTWdVMFZNUlVOVVNVOU9JRTFGVkVoUFJGTWdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JuWmhjaUJ6Wld4bFkzUlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9JR2xrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdJVDA5SUNkdmNHVnVhVzVuSnlBbUppQnBibVp2VUdGdVpXeFRkR0YwWlNBaFBUMGdKMk5zYjNOcGJtY25JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlJR2xrTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm1iR2x3VTJWc1pXTjBaV1JTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCeVpXTnZjbVJ6V3lCelpXeGxZM1JsWkZKbFkyOXlaQ0JkSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWFXeHNTVzVtYjFCaGJtVnNLQ0J5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNBbmIzQmxibWx1WnljN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjB1Wm14cGNGSmxZMjl5WkNnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuYjNCbGJtVmtKenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbTl1U1c1bWIxQmhibVZzVDNCbGJtVmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1poWkdWSmJpZ2dhVzVtYjBOdmJuUmhhVzVsY2tWc1pXMWxiblFzSUc5d2RHbHZibk11YVc1bWIxQmhibVZzVDNCaFkybDBlU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENBek1EQWdLVHRjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLR1p2Y21ObEtTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1poWkdWUGRYUW9JR2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwSUNrN1hISmNiaUFnSUNBZ0lDQWdhVzVtYjFCaGJtVnNVM1JoZEdVZ1BTQW5ZMnh2YzJsdVp5YzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOYklITmxiR1ZqZEdWa1VtVmpiM0prSUYwdVpteHBjRUpoWTJ0U1pXTnZjbVFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2x1Wm05UVlXNWxiRk4wWVhSbElEMGdKMk5zYjNObFpDYzdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHOXdkR2x2Ym5NdWIyNUpibVp2VUdGdVpXeERiRzl6WldRb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dabTl5WTJVZ0tUdGNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQjFjR1JoZEdWVGFHOTNibEpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBblkyeHZjMlZrSnlBbUppQnphRzkzYmxKbFkyOXlaQ0FoUFNCelpXeGxZM1JsWkZKbFkyOXlaQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5Z25kWEJrWVhSbFUyaHZkMjVTWldOdmNtUXVMaWNwTzF4eVhHNGdJQ0FnSUNBZ0lITm9iM2R1VW1WamIzSmtJRDBnYzJWc1pXTjBaV1JTWldOdmNtUTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvSUhaaGNpQnlaV052Y21SSlpDQTlJREE3SUhKbFkyOXlaRWxrSUR3Z2JHOWhaR1ZrVW1WamIzSmtjenNnY21WamIzSmtTV1FyS3lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnZ2MyVnNaV04wWldSU1pXTnZjbVFnUFQwZ0xURWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2Mxc2djbVZqYjNKa1NXUWdYUzV3ZFhOb1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0J5WldOdmNtUkpaQ0ErSUhObGJHVmpkR1ZrVW1WamIzSmtJQ1ltWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJKWkNBK0lISmxZMjl5WkhOYklITmxiR1ZqZEdWa1VtVmpiM0prSUYwdVkzSmhkR1ZKWkNBcUlHOXdkR2x2Ym5NdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNZbVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21SSlpDQThJQ2dnY21WamIzSmtjMXNnYzJWc1pXTjBaV1JTWldOdmNtUWdYUzVqY21GMFpVbGtJQ29nYjNCMGFXOXVjeTV5WldOdmNtUnpVR1Z5UTNKaGRHVWdLU0FySUc5d2RHbHZibk11Y21WamIzSmtjMUJsY2tOeVlYUmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSEpsWTI5eVpFbGtJRjB1Y0hWc2JGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2dnY21WamIzSmtTV1FnUFQwZ2MyVnNaV04wWldSU1pXTnZjbVFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnY21WamIzSmtTV1FnWFM1emFHOTNVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjSFZ6YUZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ5WlhObGRGTm9iM2R1VW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NCbWIzSmpaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBbmIzQmxibVZrSnlBbUppQWhabTl5WTJVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnNhWEJDWVdOclUyVnNaV04wWldSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQWhQVDBnSjI5d1pXNXBibWNuSUNZbUlHbHVabTlRWVc1bGJGTjBZWFJsSUNFOVBTQW5ZMnh2YzJsdVp5Y2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prS0hSeWRXVXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJWc1pXTjBaV1JTWldOdmNtUWdQU0F0TVR0Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWRHRnlaMlYwUW1GelpWQnZjMmwwYVc5dUxuZ3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1MFlYSm5aWFJDWVhObFVHOXphWFJwYjI0dWVTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5SaGNtZGxkRUpoYzJWUWIzTnBkR2x2Ymk1NlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQmpZVzFsY21FdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhnNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVVKaGMyVlFiM05wZEdsdmJpNTRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoUW1GelpWQnZjMmwwYVc5dUxua3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I2T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZDWVhObFVHOXphWFJwYjI0dWVseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NWpZVzFsY21GTmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYzJWc1pXTjBVSEpsZGxKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0J6Wld4bFkzUlNaV052Y21Rb1oyVjBVSEpsZGtGMllXbHNZV0pzWlZKbFkyOXlaQ2h6Wld4bFkzUmxaRkpsWTI5eVpDa3BPMXh5WEc0Z0lDQWdYSEpjYm4wN1hISmNibHh5WEc1MllYSWdjMlZzWldOMFRtVjRkRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnpaV3hsWTNSU1pXTnZjbVFvWjJWMFRtVjRkRUYyWVdsc1lXSnNaVkpsWTI5eVpDaHpaV3hsWTNSbFpGSmxZMjl5WkNrcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJuWlhSUWNtVjJRWFpoYVd4aFlteGxVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLR1p5YjIxU1pXTnZjbVFwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdaeWIyMVNaV052Y21RZ1BUMGdMVEVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaeWIyMVNaV052Y21RZ1BTQnNiMkZrWldSU1pXTnZjbVJ6SUMwZ01UdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCbWNtOXRVbVZqYjNKa0lEd2diRzloWkdWa1VtVmpiM0prY3lBdElERWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p5YjIxU1pXTnZjbVFnUFNCbWNtOXRVbVZqYjNKa0lDc2dNVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtY205dFVtVmpiM0prSUQwZ01EdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbFkyOXlaSE5iSUdaeWIyMVNaV052Y21RZ1hTNWhZM1JwZG1VZ1B5Qm1jbTl0VW1WamIzSmtJRG9nWjJWMFVISmxka0YyWVdsc1lXSnNaVkpsWTI5eVpDaG1jbTl0VW1WamIzSmtLVHRjY2x4dUlDQWdJRnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2RsZEU1bGVIUkJkbUZwYkdGaWJHVlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9abkp2YlZKbFkyOXlaQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnWm5KdmJWSmxZMjl5WkNBOVBTQXRNU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm5KdmJWSmxZMjl5WkNBOUlHeHZZV1JsWkZKbFkyOXlaSE1nTFNBeE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdaeWIyMVNaV052Y21RZ1BpQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtY205dFVtVmpiM0prSUQwZ1puSnZiVkpsWTI5eVpDQXRJREU3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm5KdmJWSmxZMjl5WkNBOUlHeHZZV1JsWkZKbFkyOXlaSE1nTFNBeE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnY21WamIzSmtjMXNnWm5KdmJWSmxZMjl5WkNCZExtRmpkR2wyWlNBL0lHWnliMjFTWldOdmNtUWdPaUJuWlhST1pYaDBRWFpoYVd4aFlteGxVbVZqYjNKa0tHWnliMjFTWldOdmNtUXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCdVlYWnBaMkYwWlZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0lHUnBjbVZqZEdsdmJpQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuWTJ4dmMyVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQmthWEpsWTNScGIyNGdQVDA5SUNkd2NtVjJKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEZCeVpYWlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEU1bGVIUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBbmIzQmxibVZrSnlBbUppQnZjSFJwYjI1ekxtTnNiM05sU1c1bWIxQmhibVZzVDI1VFkzSnZiR3dnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSE5qY205c2JGSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9JR0poYzJWWkxDQnZiR1JFWld4MFlTQXBJSHRjY2x4dVhISmNiaUFnSUNCdmJHUkVaV3gwWVNBOUlDRnZiR1JFWld4MFlTQjhmQ0JOWVhSb0xtRmljeWdnYjJ4a1JHVnNkR0VnS1NBK0lEQXVOU0EvSURBdU5TQTZJRTFoZEdndVlXSnpLQ0J2YkdSRVpXeDBZU0FwTzF4eVhHNGdJQ0FnZG1GeUlHbHVkbVZ5YzJWRVpXeDBZU0E5SURFZ0xTQnZiR1JFWld4MFlUdGNjbHh1SUNBZ0lIWmhjaUJ6WTNKdmJHeFRjR1ZsWkNBOUlHbHVkbVZ5YzJWRVpXeDBZU0FxSUdsdWRtVnljMlZFWld4MFlTQXFJR2x1ZG1WeWMyVkVaV3gwWVNBcUlETXdNRHRjY2x4dVhISmNiaUFnSUNCelkzSnZiR3hTWldOdmNtUnpWR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5WVdJbktUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1pHVnNkR0VnUFNBb0lHSmhjMlZaSUMwZ2JXOTFjMlV1ZVNBcElDOGdZMkZ1ZG1GelNHVnBaMmgwTzF4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnWkdWc2RHRWdQaUF3SUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCelpXeGxZM1JPWlhoMFVtVmpiM0prS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0pPUlZoVUlGSkZRMDlTUkNCY0lpQXJJR1JsYkhSaEtUdGNjbHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NCa1pXeDBZU0E4SURBZ0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxiR1ZqZEZCeVpYWlNaV052Y21Rb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWxCU1JWWWdVa1ZEVDFKRUlGd2lJQ3NnWkdWc2RHRXBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQnpZM0p2Ykd4U1pXTnZjbVJ6S0NCaVlYTmxXU3dnWkdWc2RHRWdLVHRjY2x4dUlDQWdJSDBzSUhOamNtOXNiRk53WldWa0lDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdacGJHeEpibVp2VUdGdVpXd2dQU0JtZFc1amRHbHZiaUFvSUhKbFkyOXlaQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhKbFkyOXlaQzVrWVhSaExuUnBkR3hsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFYUnNaVWx1Wm05RmJHVnRaVzUwTG1sdWJtVnlTRlJOVENBOUlISmxZMjl5WkM1a1lYUmhMblJwZEd4bE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9JSEpsWTI5eVpDNWtZWFJoTG1GeWRHbHpkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWVhKMGFYTjBTVzVtYjBWc1pXMWxiblF1YVc1dVpYSklWRTFNSUQwZ2NtVmpiM0prTG1SaGRHRXVZWEowYVhOME8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9JSEpsWTI5eVpDNWtZWFJoTG1OdmRtVnlJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjNabGNrbHVabTlGYkdWdFpXNTBMbk4wZVd4bExtSmhZMnRuY205MWJtUkpiV0ZuWlNBOUlDZDFjbXdvSnlBcklISmxZMjl5WkM1a1lYUmhMbU52ZG1WeUlDc2dKeWtuTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnUlZaRlRsUlRJRWhCVGtSTVNVNUhJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JuWmhjaUJ2YmsxdmRYTmxUVzkyWlVWMlpXNTBJRDBnWm5WdVkzUnBiMjRnS0NCbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnRYM0J2YzNnZ1BTQXdMRnh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplU0E5SURBc1hISmNiaUFnSUNBZ0lDQWdaVjl3YjNONElEMGdNQ3hjY2x4dUlDQWdJQ0FnSUNCbFgzQnZjM2tnUFNBd0xGeHlYRzRnSUNBZ0lDQWdJRzlpYWlBOUlIUm9hWE03WEhKY2JseHlYRzRnSUNBZ0x5OW5aWFFnYlc5MWMyVWdjRzl6YVhScGIyNGdiMjRnWkc5amRXMWxiblFnWTNKdmMzTmljbTkzYzJWeVhISmNiaUFnSUNCcFppQW9JQ0ZsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbElEMGdkMmx1Wkc5M0xtVjJaVzUwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHVXVjR0ZuWlZnZ2ZId2daUzV3WVdkbFdTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdiVjl3YjNONElEMGdaUzV3WVdkbFdEdGNjbHh1SUNBZ0lDQWdJQ0J0WDNCdmMza2dQU0JsTG5CaFoyVlpPMXh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnWlM1amJHbGxiblJZSUh4OElHVXVZMnhwWlc1MFdTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdiVjl3YjNONElEMGdaUzVqYkdsbGJuUllJQ3NnWkc5amRXMWxiblF1WW05a2VTNXpZM0p2Ykd4TVpXWjBJQ3RjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuTmpjbTlzYkV4bFpuUTdYSEpjYmlBZ0lDQWdJQ0FnYlY5d2IzTjVJRDBnWlM1amJHbGxiblJaSUNzZ1pHOWpkVzFsYm5RdVltOWtlUzV6WTNKdmJHeFViM0FnSzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZMMmRsZENCd1lYSmxiblFnWld4bGJXVnVkQ0J3YjNOcGRHbHZiaUJwYmlCa2IyTjFiV1Z1ZEZ4eVhHNGdJQ0FnYVdZZ0tDQnZZbW91YjJabWMyVjBVR0Z5Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtieUI3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbFgzQnZjM2dnS3owZ2IySnFMbTltWm5ObGRFeGxablE3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZmY0c5emVTQXJQU0J2WW1vdWIyWm1jMlYwVkc5d08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUlIZG9hV3hsSUNnZ2IySnFJRDBnYjJKcUxtOW1abk5sZEZCaGNtVnVkQ0FwT3lBdkx5QnFjMmhwYm5RZ2FXZHViM0psT214cGJtVmNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5OGdiVzkxYzJVZ2NHOXphWFJwYjI0Z2JXbHVkWE1nWld4dElIQnZjMmwwYVc5dUlHbHpJRzF2ZFhObGNHOXphWFJwYjI0Z2NtVnNZWFJwZG1VZ2RHOGdaV3hsYldWdWREcGNjbHh1SUNBZ0lHMXZkWE5sTG5nZ1BTQnRYM0J2YzNnZ0xTQmxYM0J2YzNnN1hISmNiaUFnSUNCdGIzVnpaUzU1SUQwZ2JWOXdiM041SUMwZ1pWOXdiM041TzF4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUc5dVUyTnliMnhzUlhabGJuUWdQU0JtZFc1amRHbHZiaUFvSUdVZ0tTQjdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnZDJobFpXeEVhWEpsWTNScGIyNG9JR1VnS1NBOElEQWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVoZG1sbllYUmxVbVZqYjNKa2N5Z2dKM0J5WlhZbklDazdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibUYyYVdkaGRHVlNaV052Y21SektDQW5ibVY0ZENjZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJRzl1UTJ4cFkydEZkbVZ1ZENBOUlHWjFibU4wYVc5dUlDZ2diVzkxYzJWRWIzZHVVRzl6SUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZGpiRzl6WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjJZWElnZG1WamRHOXlVRzl6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQW9JQ2dnS0NCdGIzVnpaVVJ2ZDI1UWIzTXVlQ0F0SUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWIyWm1jMlYwVEdWbWRDQXBJQzhnS0NCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1MExuZHBaSFJvSUNrZ0tTQXFJRElnTFNBeElDa3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJQ2dnTFNnZ0tDQnRiM1Z6WlVSdmQyNVFiM011ZVNBdElISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXViMlptYzJWMFZHOXdJQ2tnTHlBb0lISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXVhR1ZwWjJoMElDa2dLU0FxSURJZ0t5QXhJQ2tzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSG82SURBdU5WeHlYRzRnSUNBZ0lDQWdJSDA3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFpoY2lCMlpXTjBiM0lnUFNCdVpYY2dWRWhTUlVVdVZtVmpkRzl5TXlnZ2RtVmpkRzl5VUc5ekxuZ3NJSFpsWTNSdmNsQnZjeTU1TENCMlpXTjBiM0pRYjNNdWVpQXBPMXh5WEc0Z0lDQWdJQ0FnSUhabFkzUnZjaTUxYm5CeWIycGxZM1FvSUdOaGJXVnlZU0FwTzF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ5WVhsallYTjBaWElnUFNCdVpYY2dWRWhTUlVVdVVtRjVZMkZ6ZEdWeUtDQmpZVzFsY21FdWNHOXphWFJwYjI0c0lIWmxZM1J2Y2k1emRXSW9JR05oYldWeVlTNXdiM05wZEdsdmJpQXBMbTV2Y20xaGJHbDZaU2dwSUNrN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUdsdWRHVnljMlZqZEhNZ1BTQnlZWGxqWVhOMFpYSXVhVzUwWlhKelpXTjBUMkpxWldOMGN5Z2dZM0poZEdWelEyOXVkR0ZwYm1WeUxtTm9hV3hrY21WdUxDQjBjblZsSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklFbG1JR2x1ZEdWeWMyVmpkQ0J6YjIxbGRHaHBibWRjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR2x1ZEdWeWMyVmpkSE11YkdWdVozUm9JRDRnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCamJHbGphMlZrVW1WamIzSmtPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1IyVjBJSFJvWlNCbWFYSnpkQ0IyYVhOcFlteGxJSEpsWTI5eVpDQnBiblJsY25ObFkzUmxaRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0NCMllYSWdhU0E5SURBN0lHa2dQQ0JwYm5SbGNuTmxZM1J6TG14bGJtZDBhRHNnYVNzcklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUdsdWRHVnlZMlZ3ZENCaElHMWxjMmdnZDJocFkyZ2dhWE1nYm05MElHRWdjbVZqYjNKa0xDQmljbVZoYTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0IwZVhCbGIyWW9hVzUwWlhKelpXTjBjMXNnYVNCZExtOWlhbVZqZEM1eVpXTnZjbVJKWkNrZ1BUMDlJQ2QxYm1SbFptbHVaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0NCcGJuUmxjbk5sWTNSeld5QnBJRjB1YjJKcVpXTjBMblpwYzJsaWJHVWdKaVlnYVc1MFpYSnpaV04wYzFzZ2FTQmRMbTlpYW1WamRDNXlaV052Y21SSlpDQStQU0F3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiR2xqYTJWa1VtVmpiM0prSUQwZ2NtVmpiM0prYzFzZ2FXNTBaWEp6WldOMGMxc2dhU0JkTG05aWFtVmpkQzV5WldOdmNtUkpaQ0JkTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdWeVpTQnBjeUJ2Ym1WY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDQmpiR2xqYTJWa1VtVmpiM0prSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2djMlZzWldOMFpXUlNaV052Y21RZ1BUMDlJR05zYVdOclpXUlNaV052Y21RdWFXUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdac2FYQlRaV3hsWTNSbFpGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkRkpsWTI5eVpDZ2dZMnhwWTJ0bFpGSmxZMjl5WkM1cFpDQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFRnNiQ0JwYm5SbGNuTmxZM1JsWkNCeVpXTnZjbVJ6SUdGeVpTQnViM1FnZG1semFXSnNaWE5jY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WelpYUlRhRzkzYmxKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdMeThnVG04Z2NtVmpiM0prSUdoaGN5QmlaV1Z1SUdsdWRHVnljMlZqZEdWa1hISmNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnZiazF2ZFhObFJHOTNia1YyWlc1MElEMGdablZ1WTNScGIyNGdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR05zWldGeVNXNTBaWEoyWVd3b0lITmpjbTlzYkZKbFkyOXlaSE5VYVcxbGIzVjBJQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjJOc2IzTmxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhOamNtOXNiRkpsWTI5eVpITW9JRzF2ZFhObExua2dLVHRjY2x4dUlDQWdJQ0FnSUNCdGIzVnpaVVJ2ZDI1UWIzTWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUcxdmRYTmxMbmdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUcxdmRYTmxMbmxjY2x4dUlDQWdJQ0FnSUNCOU8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBbmIzQmxibVZrSnlBbUppQnZjSFJwYjI1ekxtTnNiM05sU1c1bWIxQmhibVZzVDI1RGJHbGpheUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCdmJrMXZkWE5sVlhCRmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCamJHVmhja2x1ZEdWeWRtRnNLQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBcE8xeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtDZG5jbUZpSnlrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCamIyOXlaSE5GY1hWaGJITkJjSEJ5YjNnb0lHMXZkWE5sUkc5M2JsQnZjeXdnYlc5MWMyVXNJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbWR5WVdKVFpXNXphWFJwZG1sMGVTQXBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J2YmtOc2FXTnJSWFpsYm5Rb0lHMXZkWE5sUkc5M2JsQnZjeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYjI1TFpYbEViM2R1UlhabGJuUWdQU0JtZFc1amRHbHZiaUFvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQmxMbXRsZVVOdlpHVWdQVDA5SURNM0lIeDhJR1V1YTJWNVEyOWtaU0E5UFQwZ016Z2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVoZG1sbllYUmxVbVZqYjNKa2N5Z2dKMjVsZUhRbklDazdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ1pTNXJaWGxEYjJSbElEMDlQU0F6T1NCOGZDQmxMbXRsZVVOdlpHVWdQVDA5SURRd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVZWFpwWjJGMFpWSmxZMjl5WkhNb0lDZHdjbVYySnlBcE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ2YmxkcGJtUnZkMUpsYzJsNlpVVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHTmhiR04xYkdGMFpVTmhiblpoYzFOcGVtVW9LVHRjY2x4dUlDQWdJSE5sZEVOaGJuWmhjMFJwYldWdWMybHZibk1vS1R0Y2NseHVYSEpjYmlBZ0lDQnlaVzVrWlhKbGNpNXpaWFJUYVhwbEtDQmpZVzUyWVhOWGFXUjBhQ3dnWTJGdWRtRnpTR1ZwWjJoMElDazdYSEpjYmlBZ0lDQmpZVzFsY21FdVlYTndaV04wSUQwZ1kyRnVkbUZ6VjJsa2RHZ2dMeUJqWVc1MllYTklaV2xuYUhRN1hISmNiaUFnSUNCallXMWxjbUV1ZFhCa1lYUmxVSEp2YW1WamRHbHZiazFoZEhKcGVDZ3BPMXh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTBSR1Z3ZEdndWRtRnNkV1VnUFNCa1pYQjBhRlJoY21kbGREdGNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTV6YVhwbExuWmhiSFZsTG5ObGRDZ2dZMkZ1ZG1GelYybGtkR2dzSUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5SbGVIUmxiQzUyWVd4MVpTNXpaWFFvSURFdU1DQXZJR05oYm5aaGMxZHBaSFJvTENBeExqQWdMeUJqWVc1MllYTklaV2xuYUhRZ0tUdGNjbHh1SUNBZ0lFWllRVUV1ZFc1cFptOXliWE11Y21WemIyeDFkR2x2Ymk1MllXeDFaUzV6WlhRb0lERWdMeUJqWVc1MllYTlhhV1IwYUN3Z01TQXZJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNBZ0lGVkpJRTFGVkVoUFJGTWdJQ0FnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JuWmhjaUJ6YUc5M1RHOWhaR2x1WnlBOUlHWjFibU4wYVc5dUlDZ2daRzl1WlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JtWVdSbFNXNG9JR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MExDQXhMQ0JrYjI1bElDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdocFpHVk1iMkZrYVc1bklEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdaaFpHVlBkWFFvSUd4dllXUnBibWREYjI1MFlXbHVaWEpGYkdWdFpXNTBMQ0JrYjI1bElDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1NVNUpWRWxCVEVsVFFWUkpUMDRnSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmx4eVhHNTJZWElnYVc1cGRGTmpaVzVsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUM4dklITmpaVzVsTENCeVpXNWtaWEpsY2l3Z1kyRnRaWEpoTEM0dUxseHlYRzRnSUNBZ2MyTmxibVVnUFNCdVpYY2dWRWhTUlVVdVUyTmxibVVvS1R0Y2NseHVYSEpjYmlBZ0lDQnlaVzVrWlhKbGNpQTlJRzVsZHlCVVNGSkZSUzVYWldKSFRGSmxibVJsY21WeUtDQjdYSEpjYmlBZ0lDQWdJQ0FnWVc1MGFXRnNhV0Z6T2lCMGNuVmxYSEpjYmlBZ0lDQjlJQ2s3WEhKY2JpQWdJQ0J5Wlc1a1pYSmxjaTV6WlhSVGFYcGxLQ0JqWVc1MllYTlhhV1IwYUN3Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JseHlYRzRnSUNBZ1kyRnVkbUZ6UTI5dWRHRnBibVZ5Uld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNnZ2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWRDQXBPMXh5WEc0Z0lDQWdjbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzVwWkNBOUlGd2lZMjl1ZEdWNGRGd2lPMXh5WEc0Z0lDQWdjbVZ1WkdWeVpYSXVjMlYwUTJ4bFlYSkRiMnh2Y2lnZ2IzQjBhVzl1Y3k1aVlXTnJaM0p2ZFc1a1EyOXNiM0lzSURFZ0tUdGNjbHh1WEhKY2JpQWdJQ0JqWVcxbGNtRWdQU0J1WlhjZ1ZFaFNSVVV1VUdWeWMzQmxZM1JwZG1WRFlXMWxjbUVvSURRMUxDQmpZVzUyWVhOWGFXUjBhQ0F2SUdOaGJuWmhjMGhsYVdkb2RDd2dNQzR4TENBeU1EQXdNQ0FwTzF4eVhHNGdJQ0FnWTJGdFpYSmhMbVp2WTJGc1RHVnVaM1JvSUQwZ05EVTdYSEpjYmlBZ0lDQmpZVzFsY21FdVpuSmhiV1ZUYVhwbElEMGdNekk3WEhKY2JpQWdJQ0JqWVcxbGNtRXVjMlYwVEdWdWN5Z2dZMkZ0WlhKaExtWnZZMkZzVEdWdVozUm9MQ0JqWVcxbGNtRXVabkpoYldWVGFYcGxJQ2s3WEhKY2JseHlYRzRnSUNBZ2RHRnlaMlYwSUQwZ2JtVjNJRlJJVWtWRkxrOWlhbVZqZERORUtDazdYSEpjYmlBZ0lDQXZMeUFnSUNBZ0lDQWdkR0Z5WjJWMElEMGdibVYzSUZSSVVrVkZMazFsYzJnb2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLREV3TENBeE1Dd2dNVEFzSURFc0lERXNJREVwS1R0Y2NseHVJQ0FnSUM4dklDQWdJQ0FnSUNCelkyVnVaUzVoWkdRb2RHRnlaMlYwS1R0Y2NseHVJQ0FnSUdOaGJXVnlZUzVzYjI5clFYUW9JSFJoY21kbGRDNXdiM05wZEdsdmJpQXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQjNiMjlrWDNSbGVIUjFjbVVnUFNCVVNGSkZSUzVKYldGblpWVjBhV3h6TG14dllXUlVaWGgwZFhKbEtDQnZjSFJwYjI1ekxtTnlZWFJsVkdWNGRIVnlaU0FwTzF4eVhHNGdJQ0FnZDI5dlpGOTBaWGgwZFhKbExtRnVhWE52ZEhKdmNIa2dQU0J5Wlc1a1pYSmxjaTVuWlhSTllYaEJibWx6YjNSeWIzQjVLQ2s3WEhKY2JpQWdJQ0IzYjI5a1gyMWhkR1Z5YVdGc0lEMGdibVYzSUZSSVVrVkZMazFsYzJoTVlXMWlaWEowVFdGMFpYSnBZV3dvSUh0Y2NseHVJQ0FnSUNBZ0lDQnRZWEE2SUhkdmIyUmZkR1Y0ZEhWeVpWeHlYRzRnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSWdQU0J1WlhjZ1ZFaFNSVVV1VDJKcVpXTjBNMFFvS1R0Y2NseHVJQ0FnSUdOeVlYUmxjME52Ym5SaGFXNWxjaUE5SUc1bGR5QlVTRkpGUlM1UFltcGxZM1F6UkNncE8xeHlYRzRnSUNBZ2MyTmxibVV1WVdSa0tDQnliMjkwUTI5dWRHRnBibVZ5SUNrN1hISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMbUZrWkNnZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5SUNrN1hISmNibHh5WEc0Z0lDQWdhVzVwZEVOeVlYUmxjeWdwTzF4eVhHNGdJQ0FnYVc1cGRGSmxZMjl5WkhNb0tUdGNjbHh1WEhKY2JpQWdJQ0JzYVdkb2RDQTlJRzVsZHlCVVNGSkZSUzVRYjJsdWRFeHBaMmgwS0NBd2VFWkdSa1pHUml3Z2IzQjBhVzl1Y3k1c2FXZG9kRWx1ZEdWdWMybDBlU0FxSURFdU1TQXBPMXh5WEc0Z0lDQWdiR2xuYUhRdWNHOXphWFJwYjI0dWMyVjBLQ0F6TURBc0lEZ3dMQ0F3SUNrN1hISmNiaUFnSUNCelkyVnVaUzVoWkdRb0lHeHBaMmgwSUNrN1hISmNibHh5WEc0Z0lDQWdiR1ZtZEV4cFoyaDBJRDBnYm1WM0lGUklVa1ZGTGxCdmFXNTBUR2xuYUhRb0lEQjRSa1pHUmtaR0xDQnZjSFJwYjI1ekxteHBaMmgwU1c1MFpXNXphWFI1SUNvZ01DNDJJQ2s3WEhKY2JpQWdJQ0JzWldaMFRHbG5hSFF1Y0c5emFYUnBiMjR1YzJWMEtDQXRNVEF3TENBek1EQXNJREV3TURBZ0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2diR1ZtZEV4cFoyaDBJQ2s3WEhKY2JseHlYRzRnSUNBZ2NtbG5hSFJNYVdkb2RDQTlJRzVsZHlCVVNGSkZSUzVRYjJsdWRFeHBaMmgwS0NBd2VFWkdSa1pHUml3Z2IzQjBhVzl1Y3k1c2FXZG9kRWx1ZEdWdWMybDBlU0FxSURBdU5pQXBPMXh5WEc0Z0lDQWdjbWxuYUhSTWFXZG9kQzV3YjNOcGRHbHZiaTV6WlhRb0lDMHhNREFzSURNd01Dd2dMVEV3TURBZ0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2djbWxuYUhSTWFXZG9kQ0FwTzF4eVhHNWNjbHh1SUNBZ0lHbHVhWFJRYjNOMFVISnZZMlZ6YzJsdVp5Z3BPMXh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZEVUMDFOYjNWelpWTmpjbTlzYkNjc0lHOXVVMk55YjJ4c1JYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmJXOTFjMlYzYUdWbGJDY3NJRzl1VTJOeWIyeHNSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDQW5iVzkxYzJWdGIzWmxKeXdnYjI1TmIzVnpaVTF2ZG1WRmRtVnVkQ3dnWm1Gc2MyVWdLVHRjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkdGIzVnpaV1J2ZDI0bkxDQnZiazF2ZFhObFJHOTNia1YyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMjF2ZFhObGRYQW5MQ0J2YmsxdmRYTmxWWEJGZG1WdWRDd2dabUZzYzJVZ0tUdGNjbHh1WEhKY2JpQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMnRsZVdSdmQyNG5MQ0J2Ymt0bGVVUnZkMjVGZG1WdWRDd2dabUZzYzJVZ0tUc2dYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnZjSFJwYjI1ekxuVndaR0YwWlVOaGJuWmhjMU5wZW1WUGJsZHBibVJ2ZDFKbGMybDZaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R5WlhOcGVtVW5MQ0J2YmxkcGJtUnZkMUpsYzJsNlpVVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2THlCRVQwMGdjMlYwZFhCY2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ0ozSmxiR0YwYVhabEp6dGNjbHh1SUNBZ0lHTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWVdKemIyeDFkR1VuTzF4eVhHNGdJQ0FnYVc1bWIwTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1Y0c5emFYUnBiMjRnUFNBbllXSnpiMngxZEdVbk8xeHlYRzRnSUNBZ2JHOWhaR2x1WjBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWVdKemIyeDFkR1VuTzF4eVhHNWNjbHh1SUNBZ0lITmxkRU5oYm5aaGMwUnBiV1Z1YzJsdmJuTW9LVHRjY2x4dVhISmNiaUFnSUNCcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYjNCMGFXOXVjeTVrWldKMVp5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhVzVwZEVSbFluVm5LQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXNXBkRWRWU1NncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NrN1hISmNiaUFnSUNCaGJtbHRZWFJsS0NrN1hISmNibjA3WEhKY2JseHlYRzUyWVhJZ2FXNXBkRkJ2YzNSUWNtOWpaWE56YVc1bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHUmxjSFJvVTJoaFpHVnlJRDBnVkVoU1JVVXVVMmhoWkdWeVRHbGlMbVJsY0hSb1VrZENRVHRjY2x4dUlDQWdJR1JsY0hSb1ZXNXBabTl5YlhNZ1BTQlVTRkpGUlM1VmJtbG1iM0p0YzFWMGFXeHpMbU5zYjI1bEtDQmtaWEIwYUZOb1lXUmxjaTUxYm1sbWIzSnRjeUFwTzF4eVhHNWNjbHh1SUNBZ0lHUmxjSFJvVFdGMFpYSnBZV3dnUFNCdVpYY2dWRWhTUlVVdVUyaGhaR1Z5VFdGMFpYSnBZV3dvSUh0Y2NseHVJQ0FnSUNBZ0lDQm1jbUZuYldWdWRGTm9ZV1JsY2pvZ1pHVndkR2hUYUdGa1pYSXVabkpoWjIxbGJuUlRhR0ZrWlhJc1hISmNiaUFnSUNBZ0lDQWdkbVZ5ZEdWNFUyaGhaR1Z5T2lCa1pYQjBhRk5vWVdSbGNpNTJaWEowWlhoVGFHRmtaWElzWEhKY2JpQWdJQ0FnSUNBZ2RXNXBabTl5YlhNNklHUmxjSFJvVlc1cFptOXliWE5jY2x4dUlDQWdJSDBnS1R0Y2NseHVJQ0FnSUdSbGNIUm9UV0YwWlhKcFlXd3VZbXhsYm1ScGJtY2dQU0JVU0ZKRlJTNU9iMEpzWlc1a2FXNW5PMXh5WEc1Y2NseHVJQ0FnSUdSbGNIUm9WR0Z5WjJWMElEMGdibVYzSUZSSVVrVkZMbGRsWWtkTVVtVnVaR1Z5VkdGeVoyVjBLQ0JqWVc1MllYTlhhV1IwYUN3Z1kyRnVkbUZ6U0dWcFoyaDBMQ0I3WEhKY2JpQWdJQ0FnSUNBZ2JXbHVSbWxzZEdWeU9pQlVTRkpGUlM1T1pXRnlaWE4wUm1sc2RHVnlMRnh5WEc0Z0lDQWdJQ0FnSUcxaFowWnBiSFJsY2pvZ1ZFaFNSVVV1VG1WaGNtVnpkRVpwYkhSbGNpeGNjbHh1SUNBZ0lDQWdJQ0JtYjNKdFlYUTZJRlJJVWtWRkxsSkhRa0ZHYjNKdFlYUmNjbHh1SUNBZ0lIMGdLVHRjY2x4dVhISmNiaUFnSUNCamIyMXdiM05sY2lBOUlHNWxkeUJVU0ZKRlJTNUZabVpsWTNSRGIyMXdiM05sY2lnZ2NtVnVaR1Z5WlhJZ0tUdGNjbHh1SUNBZ0lHTnZiWEJ2YzJWeUxtRmtaRkJoYzNNb0lHNWxkeUJVU0ZKRlJTNVNaVzVrWlhKUVlYTnpLQ0J6WTJWdVpTd2dZMkZ0WlhKaElDa2dLVHRjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCRVpYQjBhQ0J2WmlCbWFXVnNaQ0J6YUdGa1pYSWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1SUNBZ0lHUnZaaUE5SUc1bGR5QlVTRkpGUlM1VGFHRmtaWEpRWVhOektDQlVTRkpGUlM1RWIwWlRhR0ZrWlhJZ0tUdGNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTUwUkdWd2RHZ3VkbUZzZFdVZ1BTQmtaWEIwYUZSaGNtZGxkRHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1emFYcGxMblpoYkhWbExuTmxkQ2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuUmxlSFJsYkM1MllXeDFaUzV6WlhRb0lERXVNQ0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhMakFnTHlCallXNTJZWE5JWldsbmFIUWdLVHRjY2x4dVhISmNiaUFnSUNBdkwyMWhhMlVnYzNWeVpTQjBhR0YwSUhSb1pYTmxJSFIzYnlCMllXeDFaWE1nWVhKbElIUm9aU0J6WVcxbElHWnZjaUI1YjNWeUlHTmhiV1Z5WVN3Z2IzUm9aWEozYVhObElHUnBjM1JoYm1ObGN5QjNhV3hzSUdKbElIZHliMjVuTGx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxucHVaV0Z5TG5aaGJIVmxJRDBnWTJGdFpYSmhMbTVsWVhJN0lDOHZZMkZ0WlhKaElHTnNhWEJ3YVc1bklITjBZWEowWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWVtWmhjaTUyWVd4MVpTQTlJR05oYldWeVlTNW1ZWEk3SUM4dlkyRnRaWEpoSUdOc2FYQndhVzVuSUdWdVpGeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTmhiRVJsY0hSb0xuWmhiSFZsSUQwZ05Uc2dMeTltYjJOaGJDQmthWE4wWVc1alpTQjJZV3gxWlNCcGJpQnRaWFJsY25Nc0lHSjFkQ0I1YjNVZ2JXRjVJSFZ6WlNCaGRYUnZabTlqZFhNZ2IzQjBhVzl1SUdKbGJHOTNYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm05allXeE1aVzVuZEdndWRtRnNkV1VnUFNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnN0lDOHZabTlqWVd3Z2JHVnVaM1JvSUdsdUlHMXRYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm5OMGIzQXVkbUZzZFdVZ1BTQTRMakE3SUM4dlppMXpkRzl3SUhaaGJIVmxYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11YzJodmQwWnZZM1Z6TG5aaGJIVmxJRDBnWm1Gc2MyVTdJQzh2YzJodmR5QmtaV0oxWnlCbWIyTjFjeUJ3YjJsdWRDQmhibVFnWm05allXd2djbUZ1WjJVZ0tHOXlZVzVuWlNBOUlHWnZZMkZzSUhCdmFXNTBMQ0JpYkhWbElEMGdabTlqWVd3Z2NtRnVaMlVwWEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbTFoYm5WaGJHUnZaaTUyWVd4MVpTQTlJSFJ5ZFdVN0lDOHZiV0Z1ZFdGc0lHUnZaaUJqWVd4amRXeGhkR2x2Ymx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtNWtiMlp6ZEdGeWRDNTJZV3gxWlNBOUlERXhPeUF2TDI1bFlYSWdaRzltSUdKc2RYSWdjM1JoY25SY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXVaRzltWkdsemRDNTJZV3gxWlNBOUlEZ3dPeUF2TDI1bFlYSWdaRzltSUdKc2RYSWdabUZzYkc5bVppQmthWE4wWVc1alpTQWdJQ0JjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bVpHOW1jM1JoY25RdWRtRnNkV1VnUFNBd095QXZMMlpoY2lCa2IyWWdZbXgxY2lCemRHRnlkRnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1aa2IyWmthWE4wTG5aaGJIVmxJRDBnTVRBd095QXZMMlpoY2lCa2IyWWdZbXgxY2lCbVlXeHNiMlptSUdScGMzUmhibU5sSUZ4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVEYjBNdWRtRnNkV1VnUFNBd0xqQXpPeUF2TDJOcGNtTnNaU0J2WmlCamIyNW1kWE5wYjI0Z2MybDZaU0JwYmlCdGJTQW9NelZ0YlNCbWFXeHRJRDBnTUM0d00yMXRLU0FnSUNCY2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZG1sbmJtVjBkR2x1Wnk1MllXeDFaU0E5SUdaaGJITmxPeUF2TDNWelpTQnZjSFJwWTJGc0lHeGxibk1nZG1sbmJtVjBkR2x1Wno5Y2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11WVhWMGIyWnZZM1Z6TG5aaGJIVmxJRDBnZEhKMVpUc2dMeTkxYzJVZ1lYVjBiMlp2WTNWeklHbHVJSE5vWVdSbGNqOGdaR2x6WVdKc1pTQnBaaUI1YjNVZ2RYTmxJR1Y0ZEdWeWJtRnNJR1p2WTJGc1JHVndkR2dnZG1Gc2RXVmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtYjJOMWN5NTJZV3gxWlM1elpYUW9JREF1TXpVc0lEQXVNelVnS1RzZ0x5OGdZWFYwYjJadlkzVnpJSEJ2YVc1MElHOXVJSE5qY21WbGJpQW9NQzR3TERBdU1DQXRJR3hsWm5RZ2JHOTNaWElnWTI5eWJtVnlMQ0F4TGpBc01TNHdJQzBnZFhCd1pYSWdjbWxuYUhRcElGeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbTFoZUdKc2RYSXVkbUZzZFdVZ1BTQnZjSFJwYjI1ekxtSnNkWEpCYlc5MWJuUTdJQzh2WTJ4aGJYQWdkbUZzZFdVZ2IyWWdiV0Y0SUdKc2RYSWdLREF1TUNBOUlHNXZJR0pzZFhJc01TNHdJR1JsWm1GMWJIUXBJQ0FnSUZ4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTUwYUhKbGMyaHZiR1F1ZG1Gc2RXVWdQU0F3T3lBdkwyaHBaMmhzYVdkb2RDQjBhSEpsYzJodmJHUTdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11WjJGcGJpNTJZV3gxWlNBOUlEQTdJQzh2YUdsbmFHeHBaMmgwSUdkaGFXNDdYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtSnBZWE11ZG1Gc2RXVWdQU0F3T3lBdkwySnZhMlZvSUdWa1oyVWdZbWxoY3lBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVpuSnBibWRsTG5aaGJIVmxJRDBnTURzZ0x5OWliMnRsYUNCamFISnZiV0YwYVdNZ1lXSmxjbkpoZEdsdmJpOW1jbWx1WjJsdVoxeHlYRzVjY2x4dUlDQWdJRVpZUVVFZ1BTQnVaWGNnVkVoU1JVVXVVMmhoWkdWeVVHRnpjeWdnVkVoU1JVVXVSbGhCUVZOb1lXUmxjaUFwTzF4eVhHNWNjbHh1SUNBZ0lFWllRVUV1ZFc1cFptOXliWE11Y21WemIyeDFkR2x2Ymk1MllXeDFaUzV6WlhRb0lERWdMeUJqWVc1MllYTlhhV1IwYUN3Z01TQXZJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzRnSUNBZ1JsaEJRUzV5Wlc1a1pYSlViMU5qY21WbGJpQTlJSFJ5ZFdVN1hISmNibHh5WEc0Z0lDQWdZMjl0Y0c5elpYSXVZV1JrVUdGemN5Z2daRzltSUNrN1hISmNiaUFnSUNCamIyMXdiM05sY2k1aFpHUlFZWE56S0NCR1dFRkJJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHbHVhWFJFWldKMVp5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnpkR0YwY3lBOUlHNWxkeUJUZEdGMGN5Z3BPMXh5WEc0Z0lDQWdjM1JoZEhNdVpHOXRSV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdYSEpjYmlBZ0lDQnpkR0YwY3k1a2IyMUZiR1Z0Wlc1MExuTjBlV3hsTG14bFpuUWdQU0JjSWpCY0lqdGNjbHh1SUNBZ0lITjBZWFJ6TG1SdmJVVnNaVzFsYm5RdWMzUjViR1V1ZEc5d0lEMGdYQ0l3WENJN1hISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2dnYzNSaGRITXVaRzl0Uld4bGJXVnVkQ0FwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJrWldKMVp5QTlJRzVsZHlCVVNGSkZSUzVOWlhOb0tDQnVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvSURJd0xDQXlNQ3dnTWpBc0lERXNJREVzSURFZ0tTQXBPMXh5WEc0Z0lDQWdaR1ZpZFdjdWNHOXphWFJwYjI0dWMyVjBLRnh5WEc0Z0lDQWdJQ0FnSUd4cFoyaDBMbkJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ2JHbG5hSFF1Y0c5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQnNhV2RvZEM1d2IzTnBkR2x2Ymk1NlhISmNiaUFnSUNBcE8xeHlYRzRnSUNBZ2MyTmxibVV1WVdSa0tDQmtaV0oxWnlBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJwYm1sMFIxVkpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCallXMWxjbUZHYjJ4a1pYSXNYSEpjYmlBZ0lDQWdJQ0FnWTJGdFpYSmhSbTlqWVd4TVpXNW5kR2dzWEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxGeHlYRzRnSUNBZ0lDQWdJRjlzWVhOME8xeHlYRzVjY2x4dUlDQWdJR2QxYVNBOUlHNWxkeUJrWVhRdVIxVkpLQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0J2Y0hScGIyNXpMbkJ2YzNSd2NtOWpaWE56YVc1bklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpZVzFsY21GR2IyeGtaWElnUFNCbmRXa3VZV1JrUm05c1pHVnlLQ0FuUTJGdFpYSmhKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHTmhiV1Z5WVVadlkyRnNUR1Z1WjNSb0lEMGdZMkZ0WlhKaFJtOXNaR1Z5TG1Ga1pDZ2dZMkZ0WlhKaExDQW5abTlqWVd4TVpXNW5kR2duTENBeU9Dd2dNakF3SUNrdWJtRnRaU2dnSjBadlkyRnNJRXhsYm1kMGFDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUZHYjJOaGJFeGxibWQwYUM1dmJrTm9ZVzVuWlNnZ2RYQmtZWFJsUTJGdFpYSmhJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaUE5SUdkMWFTNWhaR1JHYjJ4a1pYSW9JQ2RFWlhCMGFDQnZaaUJHYVdWc1pDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpZV3hFWlhCMGFDd2dKM1poYkhWbEp5d2dNQ3dnTVRBZ0tTNXVZVzFsS0NBblJtOWpZV3dnUkdWd2RHZ25JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWnpkRzl3TENBbmRtRnNkV1VuTENBd0xDQXlNaUFwTG01aGJXVW9JQ2RHSUZOMGIzQW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtMWhlR0pzZFhJc0lDZDJZV3gxWlNjc0lEQXNJRE1nS1M1dVlXMWxLQ0FuYldGNElHSnNkWEluSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1emFHOTNSbTlqZFhNc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblUyaHZkeUJHYjJOaGJDQlNZVzVuWlNjZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtMWhiblZoYkdSdlppd2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZE5ZVzUxWVd3Z1JHOUdKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NXVaRzltYzNSaGNuUXNJQ2QyWVd4MVpTY3NJREFzSURJd01DQXBMbTVoYldVb0lDZHVaV0Z5SUhOMFlYSjBKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NXVaRzltWkdsemRDd2dKM1poYkhWbEp5d2dNQ3dnTWpBd0lDa3VibUZ0WlNnZ0oyNWxZWElnWm1Gc2JHOW1aaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVabVJ2Wm5OMFlYSjBMQ0FuZG1Gc2RXVW5MQ0F3TENBeU1EQWdLUzV1WVcxbEtDQW5abUZ5SUhOMFlYSjBKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW1aRzltWkdsemRDd2dKM1poYkhWbEp5d2dNQ3dnTWpBd0lDa3VibUZ0WlNnZ0oyWmhjaUJtWVd4c2IyWm1KeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11UTI5RExDQW5kbUZzZFdVbkxDQXdMQ0F3TGpFZ0tTNXpkR1Z3S0NBd0xqQXdNU0FwTG01aGJXVW9JQ2RqYVhKamJHVWdiMllnWTI5dVpuVnphVzl1SnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWRtbG5ibVYwZEdsdVp5d2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZFdhV2R1WlhSMGFXNW5KeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NTJhV2R1YjNWMExDQW5kbUZzZFdVbkxDQXdMQ0F5SUNrdWJtRnRaU2dnSjI5MWRHVnlJR0p2Y21SbGNpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWRtbG5ibWx1TENBbmRtRnNkV1VuTENBd0xDQXhJQ2t1YzNSbGNDZ2dNQzR3TVNBcExtNWhiV1VvSUNkcGJtNWxjaUJpYjNKa1pYSW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxuWnBaMjVtWVdSbExDQW5kbUZzZFdVbkxDQXdMQ0F5TWlBcExtNWhiV1VvSUNkbVlXUmxJR0YwSnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVlYVjBiMlp2WTNWekxDQW5kbUZzZFdVbklDa3VibUZ0WlNnZ0owRjFkRzltYjJOMWN5Y2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpkWE11ZG1Gc2RXVXNJQ2Q0Snl3Z01Dd2dNU0FwTG01aGJXVW9JQ2RtYjJOMWN5QjRKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW1iMk4xY3k1MllXeDFaU3dnSjNrbkxDQXdMQ0F4SUNrdWJtRnRaU2dnSjJadlkzVnpJSGtuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1MGFISmxjMmh2YkdRc0lDZDJZV3gxWlNjc0lEQXNJREVnS1M1emRHVndLQ0F3TGpBeElDa3VibUZ0WlNnZ0ozUm9jbVZ6YUc5c1pDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVoyRnBiaXdnSjNaaGJIVmxKeXdnTUN3Z01UQXdJQ2t1Ym1GdFpTZ2dKMmRoYVc0bklDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NWlhV0Z6TENBbmRtRnNkV1VuTENBd0xDQTBJQ2t1YzNSbGNDZ2dNQzR3TVNBcExtNWhiV1VvSUNkaWFXRnpKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW1jbWx1WjJVc0lDZDJZV3gxWlNjc0lEQXNJRFVnS1M1emRHVndLQ0F3TGpBeElDa3VibUZ0WlNnZ0oyWnlhVzVuWlNjZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtNXZhWE5sTENBbmRtRnNkV1VuSUNrdWJtRnRaU2dnSjFWelpTQk9iMmx6WlNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Ym1GdGIzVnVkQ3dnSjNaaGJIVmxKeXdnTUN3Z01DNHdNREVnS1M1emRHVndLQ0F3TGpBd01ERWdLUzV1WVcxbEtDQW5aR2wwYUdWeUp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVaR1Z3ZEdoaWJIVnlMQ0FuZG1Gc2RXVW5JQ2t1Ym1GdFpTZ2dKMEpzZFhJZ1JHVndkR2duSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVJpYzJsNlpTd2dKM1poYkhWbEp5d2dNQ3dnTlNBcExtNWhiV1VvSUNkaWJIVnlJSE5wZW1VbklDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHZDFhUzVqYkc5elpTZ3BPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCMWNHUmhkR1ZEWVcxbGNtRWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdZMkZ0WlhKaExuTmxkRXhsYm5Nb0lHTmhiV1Z5WVM1bWIyTmhiRXhsYm1kMGFDd2dZMkZ0WlhKaExtWnlZVzFsVTJsNlpTQXBPMXh5WEc0Z0lDQWdZMkZ0WlhKaExuVndaR0YwWlZCeWIycGxZM1JwYjI1TllYUnlhWGdvS1R0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1iMk5oYkV4bGJtZDBhQzUyWVd4MVpTQTlJR05oYldWeVlTNW1iMk5oYkV4bGJtZDBhRHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2FXNXBkRU55WVhSbGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQm1iM0lnS0NCMllYSWdZM0poZEdWSlpDQTlJREE3SUdOeVlYUmxTV1FnUENCdmNIUnBiMjV6TG01aVEzSmhkR1Z6T3lCamNtRjBaVWxrS3lzZ0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHTnlZWFJsSUQwZ1kzSmxZWFJsUTNKaGRHVW9JR055WVhSbFNXUWdLVHRjY2x4dUlDQWdJQ0FnSUNCamNtRjBaWE5EYjI1MFlXbHVaWEl1WVdSa0tDQmpjbUYwWlNBcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5TG5CdmMybDBhVzl1TG5vZ1BTQXRLQ0F4TVRBZ0xTQW9JREV4TUNBcUlHOXdkR2x2Ym5NdWJtSkRjbUYwWlhNZ0tTQXBJQzhnTWp0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdZM0psWVhSbFEzSmhkR1VnUFNCbWRXNWpkR2x2YmlBb0lHbGtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHTnlZWFJsYzFzZ2FXUWdYU0E5SUc1bGR5QlVTRkpGUlM1UFltcGxZM1F6UkNncE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCaWIzaGZZbTkwZEc5dElEMGdibVYzSUZSSVVrVkZMazFsYzJnb0lHNWxkeUJVU0ZKRlJTNUNiM2hIWlc5dFpYUnllU2dnTWpBd0xDQXhNQ3dnTVRBd0lDa3NJSGR2YjJSZmJXRjBaWEpwWVd3Z0tUdGNjbHh1SUNBZ0lHTnlZWFJsYzFzZ2FXUWdYUzVoWkdRb0lHSnZlRjlpYjNSMGIyMGdLVHRjY2x4dVhISmNiaUFnSUNCMllYSWdZbTk0WDJ4bFpuUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeU1EQXNJREV3TENBNE1DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQmliM2hmYkdWbWRDNXdiM05wZEdsdmJpNXpaWFFvSURBc0lETTFMQ0F0TlRVZ0tUdGNjbHh1SUNBZ0lHSnZlRjlzWldaMExuSnZkR0YwYVc5dUxuZ2dQU0JOWVhSb0xsQkpJQzhnTWp0Y2NseHVJQ0FnSUdOeVlYUmxjMXNnYVdRZ1hTNWhaR1FvSUdKdmVGOXNaV1owSUNrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcFpDQTlQVDBnTUNBcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1ltOTRYM0pwWjJoMElEMGdibVYzSUZSSVVrVkZMazFsYzJnb0lHNWxkeUJVU0ZKRlJTNUNiM2hIWlc5dFpYUnllU2dnTWpBd0xDQXhNQ3dnT0RBZ0tTd2dkMjl2WkY5dFlYUmxjbWxoYkNBcE8xeHlYRzRnSUNBZ0lDQWdJR0p2ZUY5eWFXZG9kQzV3YjNOcGRHbHZiaTV6WlhRb0lEQXNJRE0xTENBMU5TQXBPMXh5WEc0Z0lDQWdJQ0FnSUdKdmVGOXlhV2RvZEM1eWIzUmhkR2x2Ymk1NElEMGdUV0YwYUM1UVNTQXZJREk3WEhKY2JpQWdJQ0FnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbUZrWkNnZ1ltOTRYM0pwWjJoMElDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHSnZlRjlpWVdOcklEMGdibVYzSUZSSVVrVkZMazFsYzJnb0lHNWxkeUJVU0ZKRlJTNUNiM2hIWlc5dFpYUnllU2dnT0RBc0lERXdMQ0F4TWpBZ0tTd2dkMjl2WkY5dFlYUmxjbWxoYkNBcE8xeHlYRzRnSUNBZ1ltOTRYMkpoWTJzdWNHOXphWFJwYjI0dWMyVjBLQ0F0TVRBMUxDQXpOU3dnTUNBcE8xeHlYRzRnSUNBZ1ltOTRYMkpoWTJzdWNtOTBZWFJwYjI0dWVpQTlJRTFoZEdndVVFa2dMeUF5TzF4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZExtRmtaQ2dnWW05NFgySmhZMnNnS1R0Y2NseHVYSEpjYmlBZ0lDQjJZWElnWW05NFgyWnliMjUwSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvSUc1bGR5QlVTRkpGUlM1Q2IzaEhaVzl0WlhSeWVTZ2dOREFzSURFd0xDQXhNREFnS1N3Z2QyOXZaRjl0WVhSbGNtbGhiQ0FwTzF4eVhHNGdJQ0FnWW05NFgyWnliMjUwTG5CdmMybDBhVzl1TG5ObGRDZ2dPVFVzSURJMUxDQXdJQ2s3WEhKY2JpQWdJQ0JpYjNoZlpuSnZiblF1Y205MFlYUnBiMjR1ZWlBOUlFMWhkR2d1VUVrZ0x5QXlPMXh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDJaeWIyNTBJQ2s3WEhKY2JseHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbkJ2YzJsMGFXOXVMbm9nUFNBdE1URXdJQ29nYVdRN1hISmNiaUFnSUNCeVpYUjFjbTRnWTNKaGRHVnpXeUJwWkNCZE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJwYm1sMFVtVmpiM0prY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMllYSWdZM1Z5Y21WdWRGSmxZMjl5WkVsa0lEMGdNRHRjY2x4dUlDQWdJR1p2Y2lBb0lIWmhjaUJqY21GMFpVbGtJRDBnTURzZ1kzSmhkR1ZKWkNBOElHTnlZWFJsY3k1c1pXNW5kR2c3SUdOeVlYUmxTV1FyS3lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2dnZG1GeUlIQnZjeUE5SURBN0lIQnZjeUE4SUc5d2RHbHZibk11Y21WamIzSmtjMUJsY2tOeVlYUmxPeUJ3YjNNckt5QXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM0psWVhSbFVtVmpiM0prS0NCamRYSnlaVzUwVW1WamIzSmtTV1FzSUdOeVlYUmxTV1FzSUhCdmN5QXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVtVmpiM0prU1dRckt6dGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWTNKbFlYUmxVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JwWkN3Z1kzSmhkR1ZKWkN3Z2NHOXpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJ5WldOdmNtUWdQU0J1WlhjZ1VtVmpiM0prS0NCcFpDd2dZM0poZEdWSlpDd2djRzl6SUNrN1hISmNiaUFnSUNCamNtRjBaWE5iSUdOeVlYUmxTV1FnWFM1aFpHUW9JSEpsWTI5eVpDNXRaWE5vSUNrN1hISmNiaUFnSUNCeVpXTnZjbVJ6TG5CMWMyZ29JSEpsWTI5eVpDQXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCblpYUlNaV052Y21STllYUmxjbWxoYkNBOUlHWjFibU4wYVc5dUlDZ2djM0pqTENCb1lYTlRiR1ZsZG1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHbHRaeUE5SUc1bGR5QkpiV0ZuWlNncE8xeHlYRzRnSUNBZ2FXMW5MbU55YjNOelQzSnBaMmx1SUQwZ1hDSkJibTl1ZVcxdmRYTmNJanRjY2x4dUlDQWdJR2x0Wnk1emNtTWdQU0J6Y21NZ1B5QnpjbU1nT2lBbkp6dGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2FXMW5WMmxrZEdnZ1BTQTBNREFzWEhKY2JpQWdJQ0FnSUNBZ2FXMW5TR1ZwWjJoMElEMGdOREF3TEZ4eVhHNGdJQ0FnSUNBZ0lHMWhjRU5oYm5aaGN5QTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0lDZGpZVzUyWVhNbklDazdYSEpjYmx4eVhHNGdJQ0FnYldGd1EyRnVkbUZ6TG5kcFpIUm9JRDBnYldGd1EyRnVkbUZ6TG1obGFXZG9kQ0E5SURRd01EdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2RHVjRkSFZ5WlNBOUlHNWxkeUJVU0ZKRlJTNVVaWGgwZFhKbEtDQnRZWEJEWVc1MllYTWdLVHRjY2x4dUlDQWdJSFJsZUhSMWNtVXViV2x1Um1sc2RHVnlJRDBnVkVoU1JVVXVUR2x1WldGeVJtbHNkR1Z5TzF4eVhHNWNjbHh1SUNBZ0lHbHRaeTV2Ym14dllXUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2dhR0Z6VTJ4bFpYWmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSE5zWldWMlpTQTlJRzVsZHlCSmJXRm5aU2dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6YkdWbGRtVXVjM0pqSUQwZ2IzQjBhVzl1Y3k1emJHVmxkbVZOWVhOclZHVjRkSFZ5WlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITnNaV1YyWlM1dmJteHZZV1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR04wZUNBOUlHMWhjRU5oYm5aaGN5NW5aWFJEYjI1MFpYaDBLQ0FuTW1RbklDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWRISmhibk5zWVhSbEtDQnBiV2RYYVdSMGFDQXZJRElzSUdsdFowaGxhV2RvZENBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMGVDNXliM1JoZEdVb0lFMWhkR2d1VUVrZ0x5QXlJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VkSEpoYm5Oc1lYUmxLQ0F0YVcxblYybGtkR2dnTHlBeUxDQXRhVzFuU0dWcFoyaDBJQzhnTWlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1I0TG1SeVlYZEpiV0ZuWlNnZ2FXMW5MQ0F4TXpBc0lERXpNQ3dnTVRNMUxDQXhNelVnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzVrY21GM1NXMWhaMlVvSUhOc1pXVjJaU3dnTUN3Z01Dd2dOREF3TENBME1EQWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSbGVIUjFjbVV1Ym1WbFpITlZjR1JoZEdVZ1BTQjBjblZsTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJqZEhnZ1BTQnRZWEJEWVc1MllYTXVaMlYwUTI5dWRHVjRkQ2dnSnpKa0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTnNZWFJsS0NCcGJXZFhhV1IwYUNBdklESXNJR2x0WjBobGFXZG9kQ0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMbkp2ZEdGMFpTZ2dUV0YwYUM1UVNTQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExuUnlZVzV6YkdGMFpTZ2dMV2x0WjFkcFpIUm9JQzhnTWl3Z0xXbHRaMGhsYVdkb2RDQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExtUnlZWGRKYldGblpTZ2dhVzFuTENBd0xDQXdMQ0EwTURBc0lEUXdNQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMGRYSmxMbTVsWldSelZYQmtZWFJsSUQwZ2RISjFaVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVHRjY2x4dVhISmNiaUFnSUNCMllYSWdjMnhsWlhabFRXRjBaWEpwWVd3Z1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUV4aGJXSmxjblJOWVhSbGNtbGhiQ2dnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2diM0IwYVc5dWN5NXpiR1ZsZG1WRGIyeHZjbHh5WEc1Y2NseHVJQ0FnSUgwZ0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2JXRjBaWEpwWVd4eklEMGdXMXh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUM4dklIUmxlSFIxY21WY2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkVoU1JVVXVUV1Z6YUV4aGJXSmxjblJOWVhSbGNtbGhiQ2dnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dNSGhtWm1abVptWXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhjRG9nZEdWNGRIVnlaVnh5WEc0Z0lDQWdJQ0FnSUgwZ0tTeGNjbHh1SUNBZ0lDQWdJQ0J6YkdWbGRtVk5ZWFJsY21saGJDeGNjbHh1SUNBZ0lDQWdJQ0J6YkdWbGRtVk5ZWFJsY21saGJGeHlYRzRnSUNBZ1hUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCdFlYUmxjbWxoYkhNN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUZWVVNVeFRJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVjY2x4dWRtRnlJSGRvWldWc1JHbHpkR0Z1WTJVZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NBaFpTQXBJR1VnUFNCbGRtVnVkRHRjY2x4dUlDQWdJSFpoY2lCM0lEMGdaUzUzYUdWbGJFUmxiSFJoTEZ4eVhHNGdJQ0FnSUNBZ0lHUWdQU0JsTG1SbGRHRnBiRHRjY2x4dUlDQWdJR2xtSUNnZ1pDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCM0lDa2djbVYwZFhKdUlIY2dMeUJrSUM4Z05EQWdLaUJrSUQ0Z01DQS9JREVnT2lBdE1Uc2dMeThnVDNCbGNtRmNjbHh1SUNBZ0lDQWdJQ0JsYkhObElISmxkSFZ5YmlBdFpDQXZJRE03SUM4dklFWnBjbVZtYjNnN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElISmxkSFZ5YmlCM0lDOGdNVEl3T3lBdkx5QkpSUzlUWVdaaGNta3ZRMmh5YjIxbFhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2QyaGxaV3hFYVhKbFkzUnBiMjRnUFNCbWRXNWpkR2x2YmlBb0lHVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0FoWlNBcElHVWdQU0JsZG1WdWREdGNjbHh1SUNBZ0lISmxkSFZ5YmlBb0lHVXVaR1YwWVdsc0lEd2dNQ0FwSUQ4Z01TQTZJQ2dnWlM1M2FHVmxiRVJsYkhSaElENGdNQ0FwSUQ4Z01TQTZJQzB4TzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQmpiMjl5WkhORmNYVmhiSE5CY0hCeWIzZ2dQU0JtZFc1amRHbHZiaUFvSUdOdmIzSmtNU3dnWTI5dmNtUXlMQ0J5WVc1blpTQXBJSHRjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnS0NCTllYUm9MbUZpY3lnZ1kyOXZjbVF4TG5nZ0xTQmpiMjl5WkRJdWVDQXBJRHc5SUhKaGJtZGxJQ2tnSmlZZ0tDQk5ZWFJvTG1GaWN5Z2dZMjl2Y21ReExua2dMU0JqYjI5eVpESXVlU0FwSUR3OUlISmhibWRsSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR1poWkdWUGRYUWdQU0JtZFc1amRHbHZiaUFvSUdWc1pXMWxiblFzSUdSdmJtVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BEMGdNQzR4SUNrZ2UxeHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExuTjBlV3hsTG05d1lXTnBkSGtnUFNBd08xeHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2FYTkdkVzVqZEdsdmJpZ2daRzl1WlNBcElDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMjVsS0NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ0xUMGdNQzR4TzF4eVhHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm1Ga1pVOTFkQ2dnWld4bGJXVnVkQ3dnWkc5dVpTQXBPMXh5WEc0Z0lDQWdJQ0FnSUgwc0lERXdJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWm1Ga1pVbHVJRDBnWm5WdVkzUnBiMjRnS0NCbGJHVnRaVzUwTENCbVlXUmxWRzhzSUdSdmJtVXNJRzl3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ0lXVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0I4ZkNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dKaVlnWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEd2dabUZrWlZSdklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdWc1pXMWxiblF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlQU0FuYm05dVpTY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuWW14dlkyc25PMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjQ0E5SURBN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lDRmxiR1Z0Wlc1MExuTjBlV3hsTG1ScGMzQnNZWGtnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjQ0E5SUdWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQjhmQ0F4TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzl3SUNzOUlEQXVNRE03WEhKY2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJRDBnYjNBN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhObGRGUnBiV1Z2ZFhRb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdaaFpHVkpiaWdnWld4bGJXVnVkQ3dnWm1Ga1pWUnZMQ0JrYjI1bExDQnZjQ0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENBeE1DQXBPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNBOUlHWmhaR1ZVYnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQnBjMFoxYm1OMGFXOXVLQ0JrYjI1bElDa2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa2IyNWxLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJqWVd4amRXeGhkR1ZEWVc1MllYTlRhWHBsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdOaGJuWmhjMWRwWkhSb0lEMGdiM0IwYVc5dWN5NWpZVzUyWVhOWGFXUjBhQ0EvSUc5d2RHbHZibk11WTJGdWRtRnpWMmxrZEdnZ09pQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzVqYkdsbGJuUlhhV1IwYUR0Y2NseHVJQ0FnSUdOaGJuWmhjMGhsYVdkb2RDQTlJRzl3ZEdsdmJuTXVZMkZ1ZG1GelNHVnBaMmgwSUQ4Z2IzQjBhVzl1Y3k1allXNTJZWE5JWldsbmFIUWdPaUJ5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1amJHbGxiblJJWldsbmFIUTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhObGRFTmhiblpoYzBScGJXVnVjMmx2Ym5NZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0x5OXliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNW9aV2xuYUhRZ0lDQWdJRDBnWTJGdWRtRnpTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVJQ0FnSUdOaGJuWmhjME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWFHVnBaMmgwSUQwZ1kyRnVkbUZ6U0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1SUNBZ0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtaGxhV2RvZENBOUlHTmhiblpoYzBobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmlBZ0lDQnNiMkZrYVc1blEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzVvWldsbmFIUWdQU0JqWVc1MllYTklaV2xuYUhRZ0t5QW5jSGduTzF4eVhHNWNjbHh1SUNBZ0lDOHZjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVkMmxrZEdnZ0lDQWdJRDBnWTJGdWRtRnpWMmxrZEdnZ0t5QW5jSGduTzF4eVhHNGdJQ0FnWTJGdWRtRnpRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1M2FXUjBhQ0E5SUdOaGJuWmhjMWRwWkhSb0lDc2dKM0I0Snp0Y2NseHVJQ0FnSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG5kcFpIUm9JRDBnWTJGdWRtRnpWMmxrZEdnZ0t5QW5jSGduTzF4eVhHNGdJQ0FnYkc5aFpHbHVaME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWQybGtkR2dnUFNCallXNTJZWE5YYVdSMGFDQXJJQ2R3ZUNjN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyaDFabVpzWlNnZ2RpQXBJSHNnTHk4Z1NtOXVZWE1nVW1GdmJta2dVMjloY21WeklGTnBiSFpoSUMwZ2FIUjBjRG92TDJwelpuSnZiV2hsYkd3dVkyOXRMMkZ5Y21GNUwzTm9kV1ptYkdVZ1czSmxkaTRnSXpGZFhISmNibHh5WEc0Z0lDQWdabTl5SUNnZ2RtRnlJR29zSUhnc0lHa2dQU0IyTG14bGJtZDBhRHNnYVRzZ2FpQTlJSEJoY25ObFNXNTBLQ0JOWVhSb0xuSmhibVJ2YlNncElDb2dhU0FwTENCNElEMGdkbHNnTFMxcElGMHNJSFpiSUdrZ1hTQTlJSFpiSUdvZ1hTd2dkbHNnYWlCZElEMGdlQ0FwTzF4eVhHNGdJQ0FnY21WMGRYSnVJSFk3WEhKY2JseHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYzBaMWJtTjBhVzl1S0NCdlltb2dLU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhSNWNHVnZaaUJ2WW1vZ1BUMGdKMloxYm1OMGFXOXVKeUI4ZkNCbVlXeHpaVHRjY2x4dVhISmNibjFjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRVZZVUU5U1ZGTWdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQU0FnVUhWaWJHbGpJRTFsZEdodlpITWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1Wlhod2IzSjBjeTVwYm1sMElEMGdablZ1WTNScGIyNGdLQ0J3WVhKaGJYTWdLU0I3WEhKY2JseHlYRzRnSUNBZ2IzQjBhVzl1Y3lBOUlHVjRkR1Z1WkNnZ1pHVm1ZWFZzZEhNc0lIQmhjbUZ0Y3lBcE8xeHlYRzRnSUNBZ0x5OGdabVZoZEhWeVpTQjBaWE4wWEhKY2JpQWdJQ0F2THlCVVQwUlBPaUIwYnlCbWFYZ2dMU0JwWmlBb0lDRnpkWEJ3YjNKMGN5QjhmQ0FoVFc5a1pYSnVhWHB5TG5kbFltZHNJQ2tnY21WMGRYSnVPMXh5WEc0Z0lDQWdZMjl1YzI5c1pTNXNiMmNvSUNkSmJtbDBhV0ZzYVhwcGJtY2dZM0poZEdWa2FXZG5aWEl1YW5NdUxpNG5JQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0IzYVc1a2IzY3VaR1YyYVdObFVHbDRaV3hTWVhScGJ5QWhQVDBnZFc1a1pXWnBibVZrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2NISWdQU0IzYVc1a2IzY3VaR1YyYVdObFVHbDRaV3hTWVhScGJ6dGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtjSElnUFNBeE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDQnZjSFJwYjI1ekxtVnNaVzFsYm5SekxuSnZiM1JEYjI1MFlXbHVaWEpKWkNBcE8xeHlYRzRnSUNBZ2FXWWdLQ0FoY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSUNkamNtRjBaV1JwWjJkbGNpNXFjeUF0SUVsdWFYUWdabUZwYkdWa0lEb2dZMkZ1SUc1dmRDQm1hVzVrSUhKdmIzUWdZMjl1ZEdGcGJtVnlJR1ZzWlcxbGJuUXVKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmpZVzUyWVhORGIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUc5d2RHbHZibk11Wld4bGJXVnVkSE11WTJGdWRtRnpRMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJV05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSUNkamNtRjBaV1JwWjJkbGNpNXFjeUF0SUVsdWFYUWdabUZwYkdWa0lEb2dZMkZ1SUc1dmRDQm1hVzVrSUdOaGJuWmhjeUJqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0lHOXdkR2x2Ym5NdVpXeGxiV1Z1ZEhNdWJHOWhaR2x1WjBOdmJuUmhhVzVsY2tsa0lDazdYSEpjYmlBZ0lDQnBaaUFvSUNGc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpZ2dKMk55WVhSbFpHbG5aMlZ5TG1weklDMGdTVzVwZENCbVlXbHNaV1FnT2lCallXNGdibTkwSUdacGJtUWdiRzloWkdsdVp5QmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9JRzl3ZEdsdmJuTXVaV3hsYldWdWRITXVhVzVtYjBOdmJuUmhhVzVsY2tsa0lDazdYSEpjYmlBZ0lDQnBaaUFvSUNGcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ2FXNW1ieUJqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dUlDQWdJSFJwZEd4bFNXNW1iMFZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2diM0IwYVc5dWN5NWxiR1Z0Wlc1MGN5NTBhWFJzWlVOdmJuUmhhVzVsY2tsa0lDazdYSEpjYmlBZ0lDQnBaaUFvSUNGMGFYUnNaVWx1Wm05RmJHVnRaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ0FuWTNKaGRHVmthV2RuWlhJdWFuTWdMU0JKYm1sMElHWmhhV3hsWkNBNklHTmhiaUJ1YjNRZ1ptbHVaQ0J5WldOdmNtUWdkR2wwYkdVZ1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5RdUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dVhISmNiaUFnSUNCOVhISmNiaUFnSUNCaGNuUnBjM1JKYm1adlJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtZGxkRVZzWlcxbGJuUkNlVWxrS0NCdmNIUnBiMjV6TG1Wc1pXMWxiblJ6TG1GeWRHbHpkRU52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0ZoY25ScGMzUkpibVp2Uld4bGJXVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpZ2dKMk55WVhSbFpHbG5aMlZ5TG1weklDMGdTVzVwZENCbVlXbHNaV1FnT2lCallXNGdibTkwSUdacGJtUWdjbVZqYjNKa0lHRnlkR2x6ZENCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdOdmRtVnlTVzVtYjBWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2dnYjNCMGFXOXVjeTVsYkdWdFpXNTBjeTVqYjNabGNrTnZiblJoYVc1bGNrbGtJQ2s3WEhKY2JpQWdJQ0JwWmlBb0lDRmpiM1psY2tsdVptOUZiR1Z0Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCamIzWmxjaUJwYldGblpTQmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JqWVd4amRXeGhkR1ZEWVc1MllYTlRhWHBsS0NrN1hISmNibHh5WEc0Z0lDQWdhVzVwZEZOalpXNWxLQ2s3WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxuTmxiR1ZqZEZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNnZ2FXUWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwWkNBOElEQWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsYzJWMFUyaHZkMjVTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBaQ0ErSUd4dllXUmxaRkpsWTI5eVpITWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sYkdWamRHVmtVbVZqYjNKa0lEMGdiRzloWkdWa1VtVmpiM0prY3lBdElERTdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMlZzWldOMFpXUlNaV052Y21RZ1BTQnBaRHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUnpMbk4wWVhKMFVtVnVaR1Z5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdSdlVtVnVaR1Z5SUQwZ2RISjFaVHRjY2x4dUlDQWdJR0Z1YVcxaGRHVW9LVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUnpMbk4wYjNCU1pXNWtaWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWkc5U1pXNWtaWElnUFNCbVlXeHpaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUnpMbVZ1WVdKc1pWQnZjM1J3Y205alpYTnphVzVuSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUc5d2RHbHZibk11Y0c5emRIQnliMk5sYzNOcGJtY2dQU0IwY25WbE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVpHbHpZV0pzWlZCdmMzUndjbTlqWlhOemFXNW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJRzl3ZEdsdmJuTXVjRzl6ZEhCeWIyTmxjM05wYm1jZ1BTQm1ZV3h6WlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMGdJRkIxWW14cFl5Qm5aWFIwWlhKeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibVY0Y0c5eWRITXVaMlYwUTJGdWRtRnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRITXVaMlYwVW1WamIzSmtjMFJoZEdGTWFYTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnlaV052Y21SelJHRjBZVXhwYzNRN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owY3k1blpYUk1iMkZrWldSU1pXTnZjbVJ6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUJzYjJGa1pXUlNaV052Y21Sek8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBVMlZzWldOMFpXUlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjA3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQU0FnVFdWMGFHOWtjeUJoWTJObGMzTnZjbk1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVpYaHdiM0owY3k1c2IyRmtVbVZqYjNKa2N5QTlJR3h2WVdSU1pXTnZjbVJ6TzF4eVhHNWxlSEJ2Y25SekxuVnViRzloWkZKbFkyOXlaSE1nUFNCMWJteHZZV1JTWldOdmNtUnpPMXh5WEc1bGVIQnZjblJ6TG5KbGMyVjBVMmh2ZDI1U1pXTnZjbVFnUFNCeVpYTmxkRk5vYjNkdVVtVmpiM0prTzF4eVhHNWxlSEJ2Y25SekxuTm9kV1ptYkdWU1pXTnZjbVJ6SUQwZ2MyaDFabVpzWlZKbFkyOXlaSE03WEhKY2JtVjRjRzl5ZEhNdVpteHBjRk5sYkdWamRHVmtVbVZqYjNKa0lEMGdabXhwY0ZObGJHVmpkR1ZrVW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5ObGJHVmpkRkJ5WlhaU1pXTnZjbVFnUFNCelpXeGxZM1JRY21WMlVtVmpiM0prTzF4eVhHNWxlSEJ2Y25SekxuTmxiR1ZqZEU1bGVIUlNaV052Y21RZ1BTQnpaV3hsWTNST1pYaDBVbVZqYjNKa08xeHlYRzVsZUhCdmNuUnpMbk5vYjNkTWIyRmthVzVuSUQwZ2MyaHZkMHh2WVdScGJtYzdYSEpjYm1WNGNHOXlkSE11YUdsa1pVeHZZV1JwYm1jZ1BTQm9hV1JsVEc5aFpHbHVaenRjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdVRlZDVEVsRElFRlFTU0FnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHVjRjRzl5ZEhNN0lsMTkiLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICpcclxuICogRnVsbC1zY3JlZW4gdGV4dHVyZWQgcXVhZCBzaGFkZXJcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcclxuXHRUSFJFRS5Db3B5U2hhZGVyID0ge1xyXG5cclxuXHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcInREaWZmdXNlXCI6IHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwib3BhY2l0eVwiOiAgeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZVdiA9IHV2O1wiLFxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBvcGFjaXR5O1wiLFxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCB2VXYgKTtcIixcclxuXHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IG9wYWNpdHkgKiB0ZXhlbDtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcbn07IiwiLyoqXHJcbiAqIEBhdXRob3IgYW5kcmV3YmVyZyAvIGh0dHA6Ly9hbmRyZXdiZXJnLmNvbS9cclxuICpcclxuICogRGVwdGggb2YgRmllbGRcclxuICogLSBwb3J0ZWQgZnJvbVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuRG9GU2hhZGVyID0ge1xyXG5cclxuXHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcInREaWZmdXNlXCI6ICAgICB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcInREZXB0aFwiOiAgICAgICB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcInpuZWFyXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJ6ZmFyXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEwMDAuMCB9LFxyXG5cdFx0XHRcInNpemVcIjogICAgICAgICB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCA1MTIsIDUxMiApIH0sXHJcblx0XHRcdFwidGV4dGVsXCI6XHRcdHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDEvNTEyLCAxLzUxMil9LFxyXG5cdFx0XHRcImZvY2FsRGVwdGhcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyMDAuMCB9LFxyXG5cdFx0XHRcImZvY2FsTGVuZ3RoXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjguMCB9LFxyXG5cdFx0XHRcImZzdG9wXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyLjggfSxcclxuXHRcdFx0XCJzaG93Rm9jdXNcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwibWFudWFsZG9mXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcIm5kb2ZzdGFydFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcIm5kb2ZkaXN0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyLjAgfSxcclxuXHRcdFx0XCJmZG9mc3RhcnRcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJmZG9mZGlzdFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMy4wIH0sXHJcblx0XHRcdFwiQ29DXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuMDMgfSxcclxuXHRcdFx0XCJ2aWduZXR0aW5nXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMSB9LFxyXG5cdFx0XHRcInZpZ25vdXRcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMyB9LFxyXG5cdFx0XHRcInZpZ25pblwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wIH0sXHJcblx0XHRcdFwidmlnbmZhZGVcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIyLjAgfSxcclxuXHRcdFx0XCJhdXRvZm9jdXNcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwiZm9jdXNcIjogICAgICAgIHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDAuNSwgMC41ICkgfSxcclxuXHRcdFx0XCJtYXhibHVyXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJ0aHJlc2hvbGRcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjggfSxcclxuXHRcdFx0XCJnYWluXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuNyB9LFxyXG5cdFx0XHRcImJpYXNcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC41IH0sXHJcblx0XHRcdFwiZnJpbmdlXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjcgfSxcclxuXHRcdFx0XCJub2lzZVwiOlx0XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMSB9LFxyXG5cdFx0XHRcIm5hbW91bnRcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuMDAwMSB9LFxyXG5cdFx0XHRcImRlcHRoYmx1clwiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJkYnNpemVcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMjV9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZVdiA9IHV2O1wiLFxyXG5cclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblx0XHRcdFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIsXHJcblx0XHRcdFwiI2RlZmluZSBQSSAgMy4xNDE1OTI2NVwiLFxyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0Ly91bmlmb3JtIHZhcmlhYmxlcyBmcm9tIGV4dGVybmFsIHNjcmlwdFxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGVwdGg7XCIsXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHNpemU7XCIsIC8vIHRleHR1cmUgd2lkdGggYW5kIGhlaWdodFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiB0ZXhlbDtcIiwgLy8gdGV4dGVsIHNpemVcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmb2NhbERlcHRoO1wiLCAgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmb2NhbExlbmd0aDtcIiwgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZzdG9wO1wiLCAvL2Ytc3RvcCB2YWx1ZVxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBzaG93Rm9jdXM7XCIsIC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG5cdFx0XHQvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgem5lYXI7XCIsIC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB6ZmFyO1wiLCAvL2NhbWVyYSBjbGlwcGluZyBlbmRcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vdXNlciB2YXJpYWJsZXMgbm93IHBhc3NlZCBhcyB1bmlmb3Jtc1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgbWFudWFsZG9mO1wiLCAvL21hbnVhbCBkb2YgY2FsY3VsYXRpb25cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5kb2ZzdGFydDtcIiwgLy9uZWFyIGRvZiBibHVyIHN0YXJ0XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuZG9mZGlzdDtcIiwgLy9uZWFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2VcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZkb2ZzdGFydDtcIiwgLy9mYXIgZG9mIGJsdXIgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZkb2ZkaXN0O1wiLCAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgQ29DO1wiLC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCB2aWduZXR0aW5nO1wiLCAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHZpZ25vdXQ7XCIsIC8vdmlnbmV0dGluZyBvdXRlciBib3JkZXJcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHZpZ25pbjtcIiwgLy92aWduZXR0aW5nIGlubmVyIGJvcmRlclxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbmZhZGU7XCIsIC8vZi1zdG9wcyB0aWxsIHZpZ25ldGUgZmFkZXNcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIGF1dG9mb2N1cztcIiwgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgZm9jdXM7XCIsIC8vIGF1dG9mb2N1cyBwb2ludCBvbiBzY3JlZW4gKDAuMCwwLjAgLSBsZWZ0IGxvd2VyIGNvcm5lciwgMS4wLDEuMCAtIHVwcGVyIHJpZ2h0KVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbWF4Ymx1cjtcIiwgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdClcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB0aHJlc2hvbGQ7XCIsIC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGdhaW47XCIsIC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgYmlhcztcIiwgLy9ib2tlaCBlZGdlIGJpYXNcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZyaW5nZTtcIiwgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgbm9pc2U7XCIsIC8vdXNlIG5vaXNlIGluc3RlYWQgb2YgcGF0dGVybiBmb3Igc2FtcGxlIGRpdGhlcmluZ1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmFtb3VudDtcIiwgLy9kaXRoZXIgYW1vdW50XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBkZXB0aGJsdXI7XCIsIC8vYmx1ciB0aGUgZGVwdGggYnVmZmVyP1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZGJzaXplO1wiLCAvL2RlcHRoYmx1cnNpemVcclxuXHJcblx0XHRcdC8vIHNhbXBsZXMgYW5kIHJpbmdzIG5lZWQgdG8gYmUgY29uc3RhbnRzLiBubyBkeW5hbWljIGxvb3AgY291bnRlcnMgaW4gT3BlbkdMIEVTXHJcblx0XHRcdC8vIENhbiBzaGFkZXIgYmUgYnJva2VuIGludG8gMiBwYXNzPyAuLi4gXHJcblx0XHRcdFwiaW50IHNhbXBsZXMgPSAzO1wiLCAvL3NhbXBsZXMgb24gdGhlIGZpcnN0IHJpbmdcclxuXHRcdFx0XCJjb25zdCBpbnQgcmluZ3MgPSAzO1wiLCAvL3JpbmcgY291bnRcclxuXHJcblx0XHRcdC8qXHJcblx0XHRcdG5leHQgcGFydCBpcyBleHBlcmltZW50YWxcclxuXHRcdFx0bm90IGxvb2tpbmcgZ29vZCB3aXRoIHNtYWxsIHNhbXBsZSBhbmQgcmluZyBjb3VudFxyXG5cdFx0XHRsb29rcyBva2F5IHN0YXJ0aW5nIGZyb20gc2FtcGxlcyA9IDQsIHJpbmdzID0gNFxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0XCJib29sIHBlbnRhZ29uID0gZmFsc2U7XCIsIC8vdXNlIHBlbnRhZ29uIGFzIGJva2VoIHNoYXBlP1xyXG5cdFx0XHRcImZsb2F0IGZlYXRoZXIgPSAwLjQ7XCIsIC8vcGVudGFnb24gc2hhcGUgZmVhdGhlclxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdC8vIFJHQkEgZGVwdGhcclxuXHJcblx0XHRcdFwiZmxvYXQgdW5wYWNrRGVwdGgoIGNvbnN0IGluIHZlYzQgcmdiYV9kZXB0aCApIHtcIixcclxuXHJcblx0XHRcdFx0XCJjb25zdCB2ZWM0IGJpdF9zaGlmdCA9IHZlYzQoIDEuMCAvICggMjU2LjAgKiAyNTYuMCAqIDI1Ni4wICksIDEuMCAvICggMjU2LjAgKiAyNTYuMCApLCAxLjAgLyAyNTYuMCwgMS4wICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkZXB0aCA9IGRvdCggcmdiYV9kZXB0aCwgYml0X3NoaWZ0ICk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gZGVwdGg7XCIsXHJcblxyXG5cdFx0XHRcIn1cIixcclxuXHJcblxyXG5cdFx0XHRcImZsb2F0IHBlbnRhKHZlYzIgY29vcmRzKVwiLCAvL3BlbnRhZ29uYWwgc2hhcGVcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBzY2FsZSA9IGZsb2F0KHJpbmdzKSAtIDEuMztcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMCA9IHZlYzQoIDEuMCwgICAgICAgICAwLjAsICAgICAgICAgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMSA9IHZlYzQoIDAuMzA5MDE2OTk0LCAwLjk1MTA1NjUxNiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMiA9IHZlYzQoLTAuODA5MDE2OTk0LCAwLjU4Nzc4NTI1MiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMyA9IHZlYzQoLTAuODA5MDE2OTk0LC0wLjU4Nzc4NTI1MiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTNCA9IHZlYzQoIDAuMzA5MDE2OTk0LC0wLjk1MTA1NjUxNiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTNSA9IHZlYzQoIDAuMCAgICAgICAgLDAuMCAgICAgICAgICwgMS4wLCAgMS4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0ICBvbmUgPSB2ZWM0KCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IFAgPSB2ZWM0KChjb29yZHMpLHZlYzIoc2NhbGUsIHNjYWxlKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCBkaXN0ID0gdmVjNCgwLjApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgaW5vcm91dCA9IC00LjA7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdC54ID0gZG90KCBQLCBIUzAgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueSA9IGRvdCggUCwgSFMxICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnogPSBkb3QoIFAsIEhTMiApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC53ID0gZG90KCBQLCBIUzMgKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0ID0gc21vb3Roc3RlcCggLWZlYXRoZXIsIGZlYXRoZXIsIGRpc3QgKTtcIixcclxuXHJcblx0XHRcdFx0XCJpbm9yb3V0ICs9IGRvdCggZGlzdCwgb25lICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdC54ID0gZG90KCBQLCBIUzQgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueSA9IEhTNS53IC0gYWJzKCBQLnogKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0ID0gc21vb3Roc3RlcCggLWZlYXRoZXIsIGZlYXRoZXIsIGRpc3QgKTtcIixcclxuXHRcdFx0XHRcImlub3JvdXQgKz0gZGlzdC54O1wiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBjbGFtcCggaW5vcm91dCwgMC4wLCAxLjAgKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IGJkZXB0aCh2ZWMyIGNvb3JkcykgLy9ibHVycmluZyBkZXB0aFwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IGQgPSAwLjA7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBrZXJuZWxbOV07XCIsXHJcblx0XHRcdFx0XCJ2ZWMyIG9mZnNldFs5XTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIHdoID0gdmVjMih0ZXhlbC54LCB0ZXhlbC55KSAqIGRic2l6ZTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbMF0gPSB2ZWMyKC13aC54LC13aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFsxXSA9IHZlYzIoIDAuMCwgLXdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzJdID0gdmVjMiggd2gueCAtd2gueSk7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzNdID0gdmVjMigtd2gueCwgIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbNF0gPSB2ZWMyKCAwLjAsICAgMC4wKTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs1XSA9IHZlYzIoIHdoLngsICAwLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFs2XSA9IHZlYzIoLXdoLngsIHdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzddID0gdmVjMiggMC4wLCAgd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbOF0gPSB2ZWMyKCB3aC54LCB3aC55KTtcIixcclxuXHJcblx0XHRcdFx0XCJrZXJuZWxbMF0gPSAxLjAvMTYuMDsgICBrZXJuZWxbMV0gPSAyLjAvMTYuMDsgICBrZXJuZWxbMl0gPSAxLjAvMTYuMDtcIixcclxuXHRcdFx0XHRcImtlcm5lbFszXSA9IDIuMC8xNi4wOyAgIGtlcm5lbFs0XSA9IDQuMC8xNi4wOyAgIGtlcm5lbFs1XSA9IDIuMC8xNi4wO1wiLFxyXG5cdFx0XHRcdFwia2VybmVsWzZdID0gMS4wLzE2LjA7ICAga2VybmVsWzddID0gMi4wLzE2LjA7ICAga2VybmVsWzhdID0gMS4wLzE2LjA7XCIsXHJcblxyXG5cclxuXHRcdFx0XHRcImZvciggaW50IGk9MDsgaTw5OyBpKysgKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCB0bXAgPSB1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLCBjb29yZHMgKyBvZmZzZXRbaV0pKTtcIixcclxuXHRcdFx0XHRcdFwiZCArPSB0bXAgKiBrZXJuZWxbaV07XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGQ7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHJcblx0XHRcdFwidmVjMyBjb2xvcih2ZWMyIGNvb3JkcyxmbG9hdCBibHVyKVwiLCAvL3Byb2Nlc3NpbmcgdGhlIHNhbXBsZVxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcInZlYzMgY29sID0gdmVjMygwLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbC5yID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoMC4wLDEuMCkqdGV4ZWwqZnJpbmdlKmJsdXIpLnI7XCIsXHJcblx0XHRcdFx0XCJjb2wuZyA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKC0wLjg2NiwtMC41KSp0ZXhlbCpmcmluZ2UqYmx1cikuZztcIixcclxuXHRcdFx0XHRcImNvbC5iID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoMC44NjYsLTAuNSkqdGV4ZWwqZnJpbmdlKmJsdXIpLmI7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMyBsdW1jb2VmZiA9IHZlYzMoMC4yOTksMC41ODcsMC4xMTQpO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtID0gZG90KGNvbC5yZ2IsIGx1bWNvZWZmKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IHRocmVzaCA9IG1heCgobHVtLXRocmVzaG9sZCkqZ2FpbiwgMC4wKTtcIixcclxuXHRcdFx0XHRcInJldHVybiBjb2wrbWl4KHZlYzMoMC4wKSxjb2wsdGhyZXNoKmJsdXIpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwidmVjMiByYW5kKHZlYzIgY29vcmQpIC8vZ2VuZXJhdGluZyBub2lzZS9wYXR0ZXJuIHRleHR1cmUgZm9yIGRpdGhlcmluZ1wiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IG5vaXNlWCA9ICgoZnJhY3QoMS4wLWNvb3JkLnMqKHNpemUueC8yLjApKSowLjI1KSsoZnJhY3QoY29vcmQudCooc2l6ZS55LzIuMCkpKjAuNzUpKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbm9pc2VZID0gKChmcmFjdCgxLjAtY29vcmQucyooc2l6ZS54LzIuMCkpKjAuNzUpKyhmcmFjdChjb29yZC50KihzaXplLnkvMi4wKSkqMC4yNSkpKjIuMC0xLjA7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKG5vaXNlKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJub2lzZVggPSBjbGFtcChmcmFjdChzaW4oZG90KGNvb3JkICx2ZWMyKDEyLjk4OTgsNzguMjMzKSkpICogNDM3NTguNTQ1MyksMC4wLDEuMCkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcdFwibm9pc2VZID0gY2xhbXAoZnJhY3Qoc2luKGRvdChjb29yZCAsdmVjMigxMi45ODk4LDc4LjIzMykqMi4wKSkgKiA0Mzc1OC41NDUzKSwwLjAsMS4wKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFwicmV0dXJuIHZlYzIobm9pc2VYLG5vaXNlWSk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2ZWMzIGRlYnVnRm9jdXModmVjMyBjb2wsIGZsb2F0IGJsdXIsIGZsb2F0IGRlcHRoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IGVkZ2UgPSAwLjAwMipkZXB0aDsgLy9kaXN0YW5jZSBiYXNlZCBlZGdlIHNtb290aGluZ1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbSA9IGNsYW1wKHNtb290aHN0ZXAoMC4wLGVkZ2UsYmx1ciksMC4wLDEuMCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBlID0gY2xhbXAoc21vb3Roc3RlcCgxLjAtZWRnZSwxLjAsYmx1ciksMC4wLDEuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29sID0gbWl4KGNvbCx2ZWMzKDEuMCwwLjUsMC4wKSwoMS4wLW0pKjAuNik7XCIsXHJcblx0XHRcdFx0XCJjb2wgPSBtaXgoY29sLHZlYzMoMC4wLDAuNSwxLjApLCgoMS4wLWUpLSgxLjAtbSkpKjAuMik7XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGNvbDtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IGxpbmVhcml6ZShmbG9hdCBkZXB0aClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gLXpmYXIgKiB6bmVhciAvIChkZXB0aCAqICh6ZmFyIC0gem5lYXIpIC0gemZhcik7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCB2aWduZXR0ZSgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHZVdiwgdmVjMigwLjUsMC41KSk7XCIsXHJcblx0XHRcdFx0XCJkaXN0ID0gc21vb3Roc3RlcCh2aWdub3V0Kyhmc3RvcC92aWduZmFkZSksIHZpZ25pbisoZnN0b3AvdmlnbmZhZGUpLCBkaXN0KTtcIixcclxuXHRcdFx0XHRcInJldHVybiBjbGFtcChkaXN0LDAuMCwxLjApO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0Ly9zY2VuZSBkZXB0aCBjYWxjdWxhdGlvblxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGRlcHRoID0gbGluZWFyaXplKHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsdlV2KSkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChkZXB0aGJsdXIpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImRlcHRoID0gbGluZWFyaXplKGJkZXB0aCh2VXYpKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0Ly9mb2NhbCBwbGFuZSBjYWxjdWxhdGlvblwiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGZEZXB0aCA9IGZvY2FsRGVwdGg7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKGF1dG9mb2N1cylcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZkRlcHRoID0gbGluZWFyaXplKHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsZm9jdXMpKSk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdC8vZG9mIGJsdXIgZmFjdG9yIGNhbGN1bGF0aW9uXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgYmx1ciA9IDAuMDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAobWFudWFsZG9mKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBhID0gZGVwdGgtZkRlcHRoO1wiLCAvL2ZvY2FsIHBsYW5lXHJcblx0XHRcdFx0XHRcImZsb2F0IGIgPSAoYS1mZG9mc3RhcnQpL2Zkb2ZkaXN0O1wiLCAvL2ZhciBEb0ZcclxuXHRcdFx0XHRcdFwiZmxvYXQgYyA9ICgtYS1uZG9mc3RhcnQpL25kb2ZkaXN0O1wiLCAvL25lYXIgRG9mXHJcblx0XHRcdFx0XHRcImJsdXIgPSAoYT4wLjApP2I6YztcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJlbHNlXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGYgPSBmb2NhbExlbmd0aDtcIiwgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuXHRcdFx0XHRcdFwiZmxvYXQgZCA9IGZEZXB0aCoxMDAwLjA7XCIsIC8vZm9jYWwgcGxhbmUgaW4gbW1cclxuXHRcdFx0XHRcdFwiZmxvYXQgbyA9IGRlcHRoKjEwMDAuMDtcIiwgLy9kZXB0aCBpbiBtbVxyXG5cclxuXHRcdFx0XHRcdFwiZmxvYXQgYSA9IChvKmYpLyhvLWYpO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBiID0gKGQqZikvKGQtZik7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGMgPSAoZC1mKS8oZCpmc3RvcCpDb0MpO1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiYmx1ciA9IGFicyhhLWIpKmM7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiYmx1ciA9IGNsYW1wKGJsdXIsMC4wLDEuMCk7XCIsXHJcblxyXG5cdFx0XHRcdC8vIGNhbGN1bGF0aW9uIG9mIHBhdHRlcm4gZm9yIGRpdGVyaW5nXHJcblxyXG5cdFx0XHRcdFwidmVjMiBub2lzZSA9IHJhbmQodlV2KSpuYW1vdW50KmJsdXI7XCIsXHJcblxyXG5cdFx0XHRcdC8vIGdldHRpbmcgYmx1ciB4IGFuZCB5IHN0ZXAgZmFjdG9yXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgdyA9ICgxLjAvc2l6ZS54KSpibHVyKm1heGJsdXIrbm9pc2UueDtcIixcclxuXHRcdFx0XHRcImZsb2F0IGggPSAoMS4wL3NpemUueSkqYmx1ciptYXhibHVyK25vaXNlLnk7XCIsXHJcblxyXG5cdFx0XHRcdC8vIGNhbGN1bGF0aW9uIG9mIGZpbmFsIGNvbG9yXHJcblxyXG5cdFx0XHRcdFwidmVjMyBjb2wgPSB2ZWMzKDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYoYmx1ciA8IDAuMDUpXCIsIC8vc29tZSBvcHRpbWl6YXRpb24gdGhpbmd5XHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XCJlbHNlXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IHMgPSAxLjA7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJmb3IgKGludCBpID0gMTsgaSA8PSByaW5nczsgaSArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFwiZmxvYXQgcmluZ3NhbXBsZXMgPSBmbG9hdChpICogc2FtcGxlcyk7XCIsXHJcblxyXG5cdFx0XHRcdFx0XHRcImlmKGkgPT0gMSlcIixcclxuXHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJmb3IgKGludCBqID0gMCA7IGogPCAzIDsgaiArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBzdGVwID0gUEkqMi4wIC8gZmxvYXQocmluZ3NhbXBsZXMpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwdyA9IChjb3MoZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwaCA9IChzaW4oZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwID0gMS4wO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJpZiAocGVudGFnb24pXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwID0gcGVudGEodmVjMihwdyxwaCkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImNvbCArPSBjb2xvcih2VXYgKyB2ZWMyKHB3KncscGgqaCksYmx1cikqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcInMgKz0gMS4wKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJlbHNlIGlmKGkgPT0gMilcIixcclxuXHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJmb3IgKGludCBqID0gMCA7IGogPCA2IDsgaiArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBzdGVwID0gUEkqMi4wIC8gZmxvYXQocmluZ3NhbXBsZXMpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwdyA9IChjb3MoZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwaCA9IChzaW4oZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwID0gMS4wO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJpZiAocGVudGFnb24pXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwID0gcGVudGEodmVjMihwdyxwaCkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImNvbCArPSBjb2xvcih2VXYgKyB2ZWMyKHB3KncscGgqaCksYmx1cikqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcInMgKz0gMS4wKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJlbHNlIGlmKGkgPT0gMylcIixcclxuXHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJmb3IgKGludCBqID0gMCA7IGogPCA5IDsgaiArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBzdGVwID0gUEkqMi4wIC8gZmxvYXQocmluZ3NhbXBsZXMpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwdyA9IChjb3MoZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwaCA9IChzaW4oZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwID0gMS4wO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJpZiAocGVudGFnb24pXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwID0gcGVudGEodmVjMihwdyxwaCkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImNvbCArPSBjb2xvcih2VXYgKyB2ZWMyKHB3KncscGgqaCksYmx1cikqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcInMgKz0gMS4wKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XCJjb2wgLz0gcztcIiwgLy9kaXZpZGUgYnkgc2FtcGxlIGNvdW50XHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKHNob3dGb2N1cylcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gZGVidWdGb2N1cyhjb2wsIGJsdXIsIGRlcHRoKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJpZiAodmlnbmV0dGluZylcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sICo9IHZpZ25ldHRlKCk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yLnJnYiA9IGNvbDtcIixcclxuXHRcdFx0XHRcImdsX0ZyYWdDb2xvci5hID0gMS4wO1wiLFxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG5cclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcclxuXHRUSFJFRS5FZmZlY3RDb21wb3NlciA9IGZ1bmN0aW9uICggcmVuZGVyZXIsIHJlbmRlclRhcmdldCApIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcblxyXG5cdFx0aWYgKCByZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IDE7XHJcblx0XHRcdHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMTtcclxuXHRcdFx0dmFyIHBhcmFtZXRlcnMgPSB7IG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgZm9ybWF0OiBUSFJFRS5SR0JGb3JtYXQsIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIH07XHJcblxyXG5cdFx0XHRyZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHdpZHRoLCBoZWlnaHQsIHBhcmFtZXRlcnMgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQxID0gcmVuZGVyVGFyZ2V0O1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XHJcblxyXG5cdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcclxuXHJcblx0XHR0aGlzLnBhc3NlcyA9IFtdO1xyXG5cclxuXHRcdGlmICggVEhSRUUuQ29weVNoYWRlciA9PT0gdW5kZWZpbmVkIClcclxuXHRcdFx0Y29uc29sZS5lcnJvciggXCJUSFJFRS5FZmZlY3RDb21wb3NlciByZWxpZXMgb24gVEhSRUUuQ29weVNoYWRlclwiICk7XHJcblxyXG5cdFx0dGhpcy5jb3B5UGFzcyA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Db3B5U2hhZGVyICk7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLkVmZmVjdENvbXBvc2VyLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRzd2FwQnVmZmVyczogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR2YXIgdG1wID0gdGhpcy5yZWFkQnVmZmVyO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLndyaXRlQnVmZmVyO1xyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdG1wO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkUGFzczogZnVuY3Rpb24gKCBwYXNzICkge1xyXG5cclxuXHRcdFx0dGhpcy5wYXNzZXMucHVzaCggcGFzcyApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0aW5zZXJ0UGFzczogZnVuY3Rpb24gKCBwYXNzLCBpbmRleCApIHtcclxuXHJcblx0XHRcdHRoaXMucGFzc2VzLnNwbGljZSggaW5kZXgsIDAsIHBhc3MgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcclxuXHJcblx0XHRcdHZhciBtYXNrQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHR2YXIgcGFzcywgaSwgaWwgPSB0aGlzLnBhc3Nlcy5sZW5ndGg7XHJcblxyXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRwYXNzID0gdGhpcy5wYXNzZXNbIGkgXTtcclxuXHJcblx0XHRcdFx0aWYgKCAhcGFzcy5lbmFibGVkICkgY29udGludWU7XHJcblxyXG5cdFx0XHRcdHBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhLCBtYXNrQWN0aXZlICk7XHJcblxyXG5cdFx0XHRcdGlmICggcGFzcy5uZWVkc1N3YXAgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtYXNrQWN0aXZlICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0Lk5PVEVRVUFMLCAxLCAweGZmZmZmZmZmICk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvcHlQYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSApO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnN3YXBCdWZmZXJzKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBwYXNzIGluc3RhbmNlb2YgVEhSRUUuTWFza1Bhc3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHBhc3MgaW5zdGFuY2VvZiBUSFJFRS5DbGVhck1hc2tQYXNzICkge1xyXG5cclxuXHRcdFx0XHRcdG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVzZXQ6IGZ1bmN0aW9uICggcmVuZGVyVGFyZ2V0ICkge1xyXG5cclxuXHRcdFx0aWYgKCByZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XHJcblxyXG5cdFx0XHRcdHJlbmRlclRhcmdldC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRcdHJlbmRlclRhcmdldC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0U2l6ZTogZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0dmFyIHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0cmVuZGVyVGFyZ2V0LndpZHRoID0gd2lkdGg7XHJcblx0XHRcdHJlbmRlclRhcmdldC5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG5cdFx0XHR0aGlzLnJlc2V0KCByZW5kZXJUYXJnZXQgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKiBAYXV0aG9yIGRhdmlkZWRjIC8gaHR0cDovL3d3dy5za2V0Y2hwYXRjaC5uZXQvXHJcbiAqXHJcbiAqIE5WSURJQSBGWEFBIGJ5IFRpbW90aHkgTG90dGVzXHJcbiAqIGh0dHA6Ly90aW1vdGh5bG90dGVzLmJsb2dzcG90LmNvbS8yMDExLzA2L2Z4YWEzLXNvdXJjZS1yZWxlYXNlZC5odG1sXHJcbiAqIC0gV2ViR0wgcG9ydCBieSBAc3VwZXJlZ2diZXJ0XHJcbiAqIGh0dHA6Ly93d3cuZ2xnZS5vcmcvZGVtb3MvZnhhYS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcdFxyXG5cdFRIUkVFLkZYQUFTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogICB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcInJlc29sdXRpb25cIjogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMSAvIDEwMjQsIDEgLyA1MTIgKSAgfVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcIixcclxuXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1JFRFVDRV9NSU4gICAoMS4wLzEyOC4wKVwiLFxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9SRURVQ0VfTVVMICAgKDEuMC84LjApXCIsXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1NQQU5fTUFYICAgICA4LjBcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzMgcmdiTlcgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIC0xLjAsIC0xLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiTkUgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIDEuMCwgLTEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JTVyA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggLTEuMCwgMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYlNFID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAxLjAsIDEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjNCByZ2JhTSAgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKTtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiTSAgPSByZ2JhTS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIGx1bWEgPSB2ZWMzKCAwLjI5OSwgMC41ODcsIDAuMTE0ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU5XID0gZG90KCByZ2JOVywgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU5FID0gZG90KCByZ2JORSwgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYVNXID0gZG90KCByZ2JTVywgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYVNFID0gZG90KCByZ2JTRSwgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU0gID0gZG90KCByZ2JNLCAgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU1pbiA9IG1pbiggbHVtYU0sIG1pbiggbWluKCBsdW1hTlcsIGx1bWFORSApLCBtaW4oIGx1bWFTVywgbHVtYVNFICkgKSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU1heCA9IG1heCggbHVtYU0sIG1heCggbWF4KCBsdW1hTlcsIGx1bWFORSkgLCBtYXgoIGx1bWFTVywgbHVtYVNFICkgKSApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzIgZGlyO1wiLFxyXG5cdFx0XHRcdFwiZGlyLnggPSAtKChsdW1hTlcgKyBsdW1hTkUpIC0gKGx1bWFTVyArIGx1bWFTRSkpO1wiLFxyXG5cdFx0XHRcdFwiZGlyLnkgPSAgKChsdW1hTlcgKyBsdW1hU1cpIC0gKGx1bWFORSArIGx1bWFTRSkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGRpclJlZHVjZSA9IG1heCggKCBsdW1hTlcgKyBsdW1hTkUgKyBsdW1hU1cgKyBsdW1hU0UgKSAqICggMC4yNSAqIEZYQUFfUkVEVUNFX01VTCApLCBGWEFBX1JFRFVDRV9NSU4gKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCByY3BEaXJNaW4gPSAxLjAgLyAoIG1pbiggYWJzKCBkaXIueCApLCBhYnMoIGRpci55ICkgKSArIGRpclJlZHVjZSApO1wiLFxyXG5cdFx0XHRcdFwiZGlyID0gbWluKCB2ZWMyKCBGWEFBX1NQQU5fTUFYLCAgRlhBQV9TUEFOX01BWCksXCIsXHJcblx0XHRcdFx0XHQgIFwibWF4KCB2ZWMyKC1GWEFBX1NQQU5fTUFYLCAtRlhBQV9TUEFOX01BWCksXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJkaXIgKiByY3BEaXJNaW4pKSAqIHJlc29sdXRpb247XCIsXHJcblx0XHRcdFx0XCJ2ZWM0IHJnYkEgPSAoMS4wLzIuMCkgKiAoXCIsXHJcblx0ICAgICAgICBcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMS4wLzMuMCAtIDAuNSkpICtcIixcclxuXHRcdFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDIuMC8zLjAgLSAwLjUpKSk7XCIsXHJcblx0ICAgIFx0XHRcInZlYzQgcmdiQiA9IHJnYkEgKiAoMS4wLzIuMCkgKyAoMS4wLzQuMCkgKiAoXCIsXHJcblx0XHRcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgwLjAvMy4wIC0gMC41KSkgK1wiLFxyXG5cdCAgICAgIFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDMuMC8zLjAgLSAwLjUpKSk7XCIsXHJcblx0ICAgIFx0XHRcImZsb2F0IGx1bWFCID0gZG90KHJnYkIsIHZlYzQobHVtYSwgMC4wKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKCAoIGx1bWFCIDwgbHVtYU1pbiApIHx8ICggbHVtYUIgPiBsdW1hTWF4ICkgKSB7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSByZ2JBO1wiLFxyXG5cclxuXHRcdFx0XHRcIn0gZWxzZSB7XCIsXHJcblx0XHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IHJnYkI7XCIsXHJcblxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxuXHJcbn0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcdFxyXG5cdFRIUkVFLk1hc2tQYXNzID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhICkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5pbnZlcnNlID0gZmFsc2U7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLk1hc2tQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdC8vIGRvbid0IHVwZGF0ZSBjb2xvciBvciBkZXB0aFxyXG5cclxuXHRcdFx0Y29udGV4dC5jb2xvck1hc2soIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlICk7XHJcblx0XHRcdGNvbnRleHQuZGVwdGhNYXNrKCBmYWxzZSApO1xyXG5cclxuXHRcdFx0Ly8gc2V0IHVwIHN0ZW5jaWxcclxuXHJcblx0XHRcdHZhciB3cml0ZVZhbHVlLCBjbGVhclZhbHVlO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmludmVyc2UgKSB7XHJcblxyXG5cdFx0XHRcdHdyaXRlVmFsdWUgPSAwO1xyXG5cdFx0XHRcdGNsZWFyVmFsdWUgPSAxO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0d3JpdGVWYWx1ZSA9IDE7XHJcblx0XHRcdFx0Y2xlYXJWYWx1ZSA9IDA7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb250ZXh0LmVuYWJsZSggY29udGV4dC5TVEVOQ0lMX1RFU1QgKTtcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UgKTtcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5BTFdBWVMsIHdyaXRlVmFsdWUsIDB4ZmZmZmZmZmYgKTtcclxuXHRcdFx0Y29udGV4dC5jbGVhclN0ZW5jaWwoIGNsZWFyVmFsdWUgKTtcclxuXHJcblx0XHRcdC8vIGRyYXcgaW50byB0aGUgc3RlbmNpbCBidWZmZXJcclxuXHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdC8vIHJlLWVuYWJsZSB1cGRhdGUgb2YgY29sb3IgYW5kIGRlcHRoXHJcblxyXG5cdFx0XHRjb250ZXh0LmNvbG9yTWFzayggdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSApO1xyXG5cdFx0XHRjb250ZXh0LmRlcHRoTWFzayggdHJ1ZSApO1xyXG5cclxuXHRcdFx0Ly8gb25seSByZW5kZXIgd2hlcmUgc3RlbmNpbCBpcyBzZXQgdG8gMVxyXG5cclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApOyAgLy8gZHJhdyBpZiA9PSAxXHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbE9wKCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0VEhSRUUuQ2xlYXJNYXNrUGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5DbGVhck1hc2tQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdGNvbnRleHQuZGlzYWJsZSggY29udGV4dC5TVEVOQ0lMX1RFU1QgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG59OyIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cclxuXHRUSFJFRS5SZW5kZXJQYXNzID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhLCBvdmVycmlkZU1hdGVyaWFsLCBjbGVhckNvbG9yLCBjbGVhckFscGhhICkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cclxuXHRcdHRoaXMub3ZlcnJpZGVNYXRlcmlhbCA9IG92ZXJyaWRlTWF0ZXJpYWw7XHJcblxyXG5cdFx0dGhpcy5jbGVhckNvbG9yID0gY2xlYXJDb2xvcjtcclxuXHRcdHRoaXMuY2xlYXJBbHBoYSA9ICggY2xlYXJBbHBoYSAhPT0gdW5kZWZpbmVkICkgPyBjbGVhckFscGhhIDogMTtcclxuXHJcblx0XHR0aGlzLm9sZENsZWFyQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcclxuXHRcdHRoaXMub2xkQ2xlYXJBbHBoYSA9IDE7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuUmVuZGVyUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm92ZXJyaWRlTWF0ZXJpYWw7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcclxuXHJcblx0XHRcdFx0dGhpcy5vbGRDbGVhckNvbG9yLmNvcHkoIHJlbmRlcmVyLmdldENsZWFyQ29sb3IoKSApO1xyXG5cdFx0XHRcdHRoaXMub2xkQ2xlYXJBbHBoYSA9IHJlbmRlcmVyLmdldENsZWFyQWxwaGEoKTtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5jbGVhckNvbG9yLCB0aGlzLmNsZWFyQWxwaGEgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdGlmICggdGhpcy5jbGVhckNvbG9yICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLm9sZENsZWFyQ29sb3IsIHRoaXMub2xkQ2xlYXJBbHBoYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblx0XHJcbn0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHJcblx0VEhSRUUuU2hhZGVyUGFzcyA9IGZ1bmN0aW9uICggc2hhZGVyLCB0ZXh0dXJlSUQgKSB7XHJcblxyXG5cdFx0dGhpcy50ZXh0dXJlSUQgPSAoIHRleHR1cmVJRCAhPT0gdW5kZWZpbmVkICkgPyB0ZXh0dXJlSUQgOiBcInREaWZmdXNlXCI7XHJcblxyXG5cdFx0dGhpcy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIHNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXJcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUb1NjcmVlbiA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblx0XHR0aGlzLmNsZWFyID0gZmFsc2U7XHJcblxyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLTEsIDEsIDEsIC0xLCAwLCAxICk7XHJcblx0XHR0aGlzLnNjZW5lICA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdHRoaXMucXVhZCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMiwgMiApLCBudWxsICk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCggdGhpcy5xdWFkICk7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLlNoYWRlclBhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnVuaWZvcm1zWyB0aGlzLnRleHR1cmVJRCBdICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLnVuaWZvcm1zWyB0aGlzLnRleHR1cmVJRCBdLnZhbHVlID0gcmVhZEJ1ZmZlcjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMucmVuZGVyVG9TY3JlZW4gKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG59O1xyXG4iXX0=
