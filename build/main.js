(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cratedigger = require('./cratedigger');

var data = JSON.parse('[{"title":"So What","artist":"Miles Davis","cover":"http://cdn-images.deezer.com/images/cover/63bf5fe5f15f69bfeb097139fc34f3d7/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBYBNV14607703ACA","hasSleeve":false},{"title":"Stolen Moments","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOCNMPH12B0B8064AA","hasSleeve":false},{"title":"Theme for Maxine","artist":"Woody Shaw","cover":"http://cdn-images.deezer.com/images/cover/bb937f1e1d57f7542a64c74b13c47900/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMLSGW131343841A7","hasSleeve":false},{"title":"Moanin\' Mambo","artist":"Mingus Big Band","cover":"http://cdn-images.deezer.com/images/cover/dcd1565cf3dd663f7b7492e4da378855/400x400-000000-80-0-0.jpg","year":"1996","id":"SOVQLVX13134386AF9","hasSleeve":false},{"title":"Summertime","artist":"Oscar Peterson","cover":"http://cdn-images.deezer.com/images/cover/d6acdf4a975edf9556182d7c6a31e596/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFNWTV137712739BC","hasSleeve":false},{"title":"Tea for Two","artist":"Lester Young","cover":"http://cdn-images.deezer.com/images/cover/8effbd8dc7a95f06c5aca8e6ecf3a78e/400x400-000000-80-0-0.jpg","year":"1997","id":"SOAPBMQ144C4A18CD4","hasSleeve":false},{"title":"Line Up","artist":"Lennie Tristano","cover":"http://cdn-images.deezer.com/images/cover/23b2766c2457be502e3b79f088cb8ba9/400x400-000000-80-0-0.jpg","year":"1955","id":"SOBPDRQ1313439BA51","hasSleeve":false},{"title":"I Remember Clifford","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/efa706e1d3fc1363c7a5f07f9088a6cb/400x400-000000-80-0-0.jpg","year":"1999","id":"SOCRUWO12AB0184846","hasSleeve":false},{"title":"All The Things You Are","artist":"Oscar Pettiford","cover":"http://cdn-images.deezer.com/images/cover/8ce9fcf0ec333b06c38ad999c8dccb29/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBHKVG1315CD41C41","hasSleeve":false},{"title":"Easy Living","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/e8463630813b6c25536cdbef03134ae3/400x400-000000-80-0-0.jpg","year":"1995","id":"SOEVLRZ131343A28D6","hasSleeve":false},{"title":"Whiplash","artist":"Don Ellis","cover":"http://cdn-images.deezer.com/images/cover/34d87cf0631937bdb79675402054d3b2/400x400-000000-80-0-0.jpg","year":"1973","id":"SOOVZHR12A8C132FA8","hasSleeve":false},{"title":"Bumpin\' On Sunset","artist":"Wes Montgomery","cover":"http://cdn-images.deezer.com/images/cover/75f43523fcd01b3046486674e09d3700/400x400-000000-80-0-0.jpg","year":"1966","id":"SOKXHZT1478B63887A","hasSleeve":false},{"title":"Footprints","artist":"Wayne Shorter","cover":"http://cdn-images.deezer.com/images/cover/40c4768d6ee25d5356b5efbd0f69c324/400x400-000000-80-0-0.jpg","year":"2007","id":"SOZLFJA144D13D0768","hasSleeve":false},{"title":"Blue Train","artist":"John Coltrane","cover":"http://cdn-images.deezer.com/images/cover/1d019d81f99c5213398791c8a0d6a2d1/400x400-000000-80-0-0.jpg","year":"1957","id":"SOACYSS145FEBAD8C6","hasSleeve":false},{"title":"All Blues","artist":"Ron Carter","cover":"http://cdn-images.deezer.com/images/cover/2d20ae4c4127ce6b8aa58f08becc9c05/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBJQBM144E5CA4D89","hasSleeve":false},{"title":"My Funny Valentine","artist":"Chet Baker","cover":"http://cdn-images.deezer.com/images/cover/d2f8b4d15a624333903c57b7d4aa5ab5/400x400-000000-80-0-0.jpg","year":"1954","id":"SOAAQIZ144C486A932","hasSleeve":false},{"title":"Love for Sale","artist":"Cannonball Adderley","cover":"http://cdn-images.deezer.com/images/cover/b7df440f2e746476810b8fc36e1970df/400x400-000000-80-0-0.jpg","year":"1959","id":"SOPJQEU144AD705584","hasSleeve":false},{"title":"Lady Sings the Blues","artist":"Herbie Nichols","cover":"http://cdn-images.deezer.com/images/cover/17ea4a0526096e5a8fb20717386e99e9/400x400-000000-80-0-0.jpg","year":"2010","id":"SOAOYTH1376F78A4BA","hasSleeve":false},{"title":"Cleopatra\'s Dream","artist":"Bud Powell","cover":"http://cdn-images.deezer.com/images/cover/013ea0cecc3e8b370bd21b445ce5b8c5/400x400-000000-80-0-0.jpg","year":"1958","id":"SOKPATT12A6D4F412B","hasSleeve":false},{"title":"Bernie\'s Tune","artist":"Gerry Mulligan","cover":"http://cdn-images.deezer.com/images/cover/7bce5b21ad29df130368121a5c4bcf36/400x400-000000-80-0-0.jpg","year":"1990","id":"SOBJHOS137618BE4FD","hasSleeve":false},{"title":"Let The Good Times Roll","artist":"Lester Bowie","cover":"http://cdn-images.deezer.com/images/cover/08e18d6e4f8499003ed8c9ebbc7ce73a/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBRPSD13134386B16","hasSleeve":false},{"title":"Grooveyard","artist":"Harold Land","cover":"http://cdn-images.deezer.com/images/cover/0cac603ac7828983edb63c59f4b2ff99/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHANRF1311AFECA2F","hasSleeve":false},{"title":"Far West","artist":"Tim Hagans","cover":"http://cdn-images.deezer.com/images/cover/f1d9645904ea3441fe5c7d025c450d0c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGFYEL12A58A7C0B2","hasSleeve":false},{"title":"My Ideal","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFQKLH1313439C9D0","hasSleeve":false},{"title":"Yearnin\'","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOEIGTM12A6D4F92E1","hasSleeve":false},{"title":"Moanin\'","artist":"Art Blakey","cover":"http://cdn-images.deezer.com/images/cover/3e8498d49bc3d030a36730aada3c553b/400x400-000000-80-0-0.jpg","year":"1958","id":"SOBWNRX145FD6B55E2","hasSleeve":false},{"title":"Like Someone in Love","artist":"Art Farmer","cover":"http://cdn-images.deezer.com/images/cover/c85aed0c4cb96bcc6753d6140de9cf75/400x400-000000-80-0-0.jpg","year":"2004","id":"SOBFGKP12A6D4F8834","hasSleeve":false},{"title":"Cheese Cake","artist":"Dexter Gordon","cover":"http://cdn-images.deezer.com/images/cover/767354ab07d1fdcc6924bbce0a431e60/400x400-000000-80-0-0.jpg","year":"1988","id":"SOKPRXE1377042B07E","hasSleeve":false},{"title":"Peace Piece","artist":"Bill Evans","cover":"http://cdn-images.deezer.com/images/cover/12a472c142105e0496e842e486b252cc/400x400-000000-80-0-0.jpg","year":"1998","id":"SOAYBHG144C74C5C52","hasSleeve":false},{"title":"Ain\'t It Funky Now","artist":"Grant Green","cover":"http://cdn-images.deezer.com/images/cover/dfe2b24b075435f62907d3637cd812b4/400x400-000000-80-0-0.jpg","year":"1970","id":"SOBAGJQ13167714741","hasSleeve":false},{"title":"Driva\' Man","artist":"Max Roach","cover":"http://cdn-images.deezer.com/images/cover/7aee52fbf15a6b9a034a3a915fbe0d60/400x400-000000-80-0-0.jpg","year":"2011","id":"SOERNHP13767946CFF","hasSleeve":false},{"title":"What Are You Doing The Rest Of Your Life?","artist":"Milt Jackson","cover":"http://cdn-images.deezer.com/images/cover/a1133e65eb7cbee9e5e32d8f31f50475/400x400-000000-80-0-0.jpg","year":"1973","id":"SOHXWWN13777557752","hasSleeve":false},{"title":"The Girl From Ipanema","artist":"Stan Getz","cover":"http://cdn-images.deezer.com/images/cover/0b072edc1697b558720c640948371d7a/400x400-000000-80-0-0.jpg","year":"2000","id":"SOCNBTN1478C4603ED","hasSleeve":false},{"title":"Alone Together","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOABROI12AB017C3E5","hasSleeve":false},{"title":"September In The Rain","artist":"Roy Hargrove","cover":"http://cdn-images.deezer.com/images/cover/98a482d8ccca7b22152d5714c22aa464/400x400-000000-80-0-0.jpg","year":"1994","id":"SOPWTIL12A8C13BBDF","hasSleeve":false},{"title":"Love Theme from \'Spartacus\'","artist":"Yusef Lateef","cover":"http://cdn-images.deezer.com/images/cover/bb50516b507ac87482a446ce44b0629e/400x400-000000-80-0-0.jpg","year":"1961","id":"SOIFBAQ1311AFE3148","hasSleeve":false},{"title":"Almost Like Being in Love","artist":"Red Garland","cover":"http://cdn-images.deezer.com/images/cover/b3cf6995de24d43c717e41300e78f607/400x400-000000-80-0-0.jpg","year":"2006","id":"SOATHDZ12AB0185B5F","hasSleeve":false},{"title":"Night And Day","artist":"Joe Pass","cover":"http://cdn-images.deezer.com/images/cover/17ecd15c241bf378e684d553b4e7b8bc/400x400-000000-80-0-0.jpg","year":"2005","id":"SOBYOAC13E6CB01926","hasSleeve":false},{"title":"Sous Le Ciel De Paris","artist":"Toots Thielemans","cover":"http://cdn-images.deezer.com/images/cover/81f873457a346b26b85a8122541a8f07/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMUWQS12A8C13B2D3","hasSleeve":false},{"title":"Scrambled Eggs","artist":"Nat Adderley","cover":"http://cdn-images.deezer.com/images/cover/a2154ebd75c247095fef500c6d5f163c/400x400-000000-80-0-0.jpg","year":"1960","id":"SODJAYZ1311AFDA13F","hasSleeve":false},{"title":"Lansana\'s Priestess","artist":"Donald Byrd","cover":"http://cdn-images.deezer.com/images/cover/c00ba5c47f58252e4ef81279e6feb1a0/400x400-000000-80-0-0.jpg","year":"1973","id":"SODUJIR12A6D4F85A0","hasSleeve":false},{"title":"My Little Brown Book","artist":"Duke Ellington","cover":"http://cdn-images.deezer.com/images/cover/ac05edd38684177e3556b1cdbde4764a/400x400-000000-80-0-0.jpg","year":"1963","id":"SOGTTHV136F24052DE","hasSleeve":false},{"title":"Patricia","artist":"Art Pepper","cover":"http://cdn-images.deezer.com/images/cover/4928a2211000a85bbe02cd299b5d6291/400x400-000000-80-0-0.jpg","year":"2007","id":"SONVUPG13772274375","hasSleeve":false},{"title":"The Sidewinder","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/38ebedd7c4a77c3502b2cc5d80db3109/400x400-000000-80-0-0.jpg","year":"1998","id":"SOGTXEX12B0B806866","hasSleeve":false},{"title":"You Don\'t Know What Love Is","artist":"Sonny Rollins","cover":"http://cdn-images.deezer.com/images/cover/49d72537f916a90c27e629a87308bc53/400x400-000000-80-0-0.jpg","year":"1956","id":"SOEDTNN13772A39D94","hasSleeve":false},{"title":"Blue Monk","artist":"Thelonious Monk","cover":"http://cdn-images.deezer.com/images/cover/023727db68f4edbb78eb11808fd95574/400x400-000000-80-0-0.jpg","year":"1999","id":"SOATUCE144AD0E89D1","hasSleeve":false},{"title":"Las Vegas Tango","artist":"Gil Evans","cover":"http://cdn-images.deezer.com/images/cover/316f0911a56060678c224120387cd7a8/400x400-000000-80-0-0.jpg","year":"1964","id":"SOFDOCY13775C36109","hasSleeve":false},{"title":"Sandu","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/acd61c42e28df7fbd337ffd3e6383908/400x400-000000-80-0-0.jpg","year":"1955","id":"SOAACEF13152A71E9D","hasSleeve":false}]');
var data2 = JSON.parse('[{"title":"You Got Me","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/80768e0c7f2662d74273404f879650bc/400x400-000000-80-0-0.jpg","year":"1999","id":"SOJANBO144BA08EC60","hasSleeve":false},{"title":"What\'s Golden","artist":"Jurassic 5","cover":"http://cdn-images.deezer.com/images/cover/c41c6c376770253f8805f5410308560c/400x400-000000-80-0-0.jpg","year":"2002","id":"SOMYUBT144C2877D88","hasSleeve":false},{"title":"Fazers","artist":"King Geedorah","cover":"http://cdn-images.deezer.com/images/cover/498d19a7bd8efcabfe19a9cff20036c4/400x400-000000-80-0-0.jpg","year":"2003","id":"SOCTFLE137686D44D0","hasSleeve":false},{"title":"Peachfuzz","artist":"KMD","cover":"http://cdn-images.deezer.com/images/cover/fb34d03a4518f2920abb3c9f149663c1/400x400-000000-80-0-0.jpg","year":"1991","id":"SORJEGE13719B8C358","hasSleeve":false},{"title":"None Shall Pass","artist":"Aesop Rock","cover":"http://cdn-images.deezer.com/images/cover/fd0130bb478ed7fff6ca8cc28693aef2/400x400-000000-80-0-0.jpg","year":"2007","id":"SOKJIZT1311AFE7DAE","hasSleeve":false},{"title":"MC\'s Act Like They Don\'t Know","artist":"KRS-One","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SORINAN1311AFD88CB","hasSleeve":false},{"title":"It\'s Tricky","artist":"Run-D.M.C.","cover":"http://cdn-images.deezer.com/images/cover/6738946c5c48780a0608842447cc0b47/400x400-000000-80-0-0.jpg","year":"1986","id":"SODJTQX144BD986FD6","hasSleeve":false},{"title":"Get By","artist":"Talib Kweli","cover":"http://cdn-images.deezer.com/images/cover/f81ec68d371c6c8c6b3499d5d89344f2/400x400-000000-80-0-0.jpg","year":"2002","id":"SOEGOYO13730DADE42","hasSleeve":false},{"title":"A Little Soul","artist":"Pete Rock","cover":"http://cdn-images.deezer.com/images/cover/9b1cf8de1f93088531e05f6d367714f9/400x400-000000-80-0-0.jpg","year":"2001","id":"SOCEROK12A6D4FA5FC","hasSleeve":false},{"title":"The Show Goes On","artist":"Lupe Fiasco","cover":"http://cdn-images.deezer.com/images/cover/4f1e0978615ffa5fd7433d7c3a72d0d5/400x400-000000-80-0-0.jpg","year":"2010","id":"SOCMPYA12C56413B5F","hasSleeve":false},{"title":"Wavin\' Flag","artist":"K\'naan","cover":"http://cdn-images.deezer.com/images/cover/c221e82e49c657ff2ddf42ab30038005/400x400-000000-80-0-0.jpg","year":"2010","id":"SOTBICN13759295452","hasSleeve":false},{"title":"You Gots To Chill","artist":"EPMD","cover":"http://cdn-images.deezer.com/images/cover/c1c225ca9accb0c13fb97f684b44937f/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHNXDQ141917E3E88","hasSleeve":false},{"title":"Everything Changes","artist":"Aceyalone","cover":"http://cdn-images.deezer.com/images/cover/05281dea6ebc150cc845242ef06f8675/400x400-000000-80-0-0.jpg","year":"2005","id":"SODYUQX131343A56B5","hasSleeve":false},{"title":"C.R.E.A.M.","artist":"Wu-Tang Clan","cover":"http://cdn-images.deezer.com/images/cover/f668b179366bb3ed623dd8bccd2f38eb/400x400-000000-80-0-0.jpg","year":"1993","id":"SOHYJIZ146037961A9","hasSleeve":false},{"title":"Sweetest Girl (Dollar Bill)","artist":"Wyclef Jean","cover":"http://cdn-images.deezer.com/images/cover/b986b2f1d3fa50a5a8a9402cd273af0d/400x400-000000-80-0-0.jpg","year":"2007","id":"SODUALI1313438B53E","hasSleeve":false},{"title":"Breathe And Stop","artist":"Q-Tip","cover":"http://cdn-images.deezer.com/images/cover/324315846539ae9a430638bd78538f2c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOEUVEH12B0B8086F5","hasSleeve":false},{"title":"Ms. Jackson","artist":"OutKast","cover":"http://cdn-images.deezer.com/images/cover/653316993a79f936dcdec7573e26256f/400x400-000000-80-0-0.jpg","year":"2001","id":"SOSRDPS144B28ECEB5","hasSleeve":false},{"title":"Children\'s Story","artist":"Slick Rick","cover":"http://cdn-images.deezer.com/images/cover/5ef85a738d6fd32120d0e2b5cbc0222f/400x400-000000-80-0-0.jpg","year":"1988","id":"SODQHOL144BD94C4FD","hasSleeve":false},{"title":"Paid In Full","artist":"Eric B. & Rakim","cover":"http://cdn-images.deezer.com/images/cover/9badf0e54dff9de69211a75179750d88/400x400-000000-80-0-0.jpg","year":"2002","id":"SOBTYFF146009D2312","hasSleeve":false},{"title":"Watch Out Now","artist":"The Beatnuts","cover":"http://cdn-images.deezer.com/images/cover/587758a5b55bd4c07ed2b226bc352fa2/400x400-000000-80-0-0.jpg","year":"1999","id":"SONJBOI1315CD489EC","hasSleeve":false},{"title":"Shadowboxin\' (Album Version (Explicit))","artist":"GZA","cover":"http://cdn-images.deezer.com/images/cover/48a9e31ff33ba3f75501dd7a366b9cd1/400x400-000000-80-0-0.jpg","year":"1995","id":"SOCMSVB12B0B808230","hasSleeve":false},{"title":"Luchini Aka This Is It","artist":"Camp Lo","cover":"http://cdn-images.deezer.com/images/cover/b2244fbcf3841f0ca9ce7cd3166e5ce9/400x400-000000-80-0-0.jpg","year":"1997","id":"SOCLSAD13134399947","hasSleeve":false},{"title":"Uknowhowwedu","artist":"Bahamadia","cover":"http://cdn-images.deezer.com/images/cover/714d1810cde9dfc9401f8e89cd21852c/400x400-000000-80-0-0.jpg","year":"1996","id":"SOKILAT12A6D4F7FC7","hasSleeve":false},{"title":"Won\'t Do","artist":"J Dilla","cover":"http://cdn-images.deezer.com/images/cover/088f163087d7af72881db574eba40674/400x400-000000-80-0-0.jpg","year":"2006","id":"SOGHARK12A58A7D128","hasSleeve":false},{"title":"Crazy","artist":"Gnarls Barkley","cover":"http://cdn-images.deezer.com/images/cover/d6c9abb3972dee7b6b8b624beb08b67c/400x400-000000-80-0-0.jpg","year":"2006","id":"SOBKMKP14509A7F36E","hasSleeve":false},{"title":"Full Clip","artist":"Gang Starr","cover":"http://cdn-images.deezer.com/images/cover/169f994d7ab2a8d868cde77fd566cbbf/400x400-000000-80-0-0.jpg","year":"1999","id":"SOAKAXG1456B07B9DA","hasSleeve":false},{"title":"Coastin\' feat. K. Flay","artist":"Zion I","cover":"http://cdn-images.deezer.com/images/cover/03ea1c4655b44c586e90dd4d5f9e1aac/400x400-000000-80-0-0.jpg","year":"2009","id":"SOVXZYY12AB0184DA4","hasSleeve":false},{"title":"One","artist":"Ghostface Killah","cover":"http://cdn-images.deezer.com/images/cover/3a5da6b535f5f7307cba62d42011cb5f/400x400-000000-80-0-0.jpg","year":"2000","id":"SOPDDBK1312A8A8FD5","hasSleeve":false},{"title":"Hip Hop","artist":"Mos Def","cover":"http://cdn-images.deezer.com/images/cover/89e28a0a93eff9dc574476710b5c09e2/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGWGSJ12AF72A8AC2","hasSleeve":false},{"title":"My Philosophy","artist":"Boogie Down Productions","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SODLVET12A58A77A31","hasSleeve":false},{"title":"Worst Comes To Worst","artist":"Dilated Peoples","cover":"http://cdn-images.deezer.com/images/cover/bef22b88d74c9fc79a0921d5f479518f/400x400-000000-80-0-0.jpg","year":"2001","id":"SODEKQK131677146C6","hasSleeve":false},{"title":"If You Must","artist":"Del the Funky Homosapien","cover":"http://cdn-images.deezer.com/images/cover/df1b0a28ee65efc54a5960991a96b872/400x400-000000-80-0-0.jpg","year":"2000","id":"SOREGQF12B0B80658E","hasSleeve":false},{"title":"When I B On Tha Mic","artist":"Rakim","cover":"http://cdn-images.deezer.com/images/cover/4ddcfa5e69a1b79acbe20f4ce282475c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOOCMSF136CA2E9BC1","hasSleeve":false},{"title":"Lyrical Swords","artist":"Ras Kass","cover":"http://cdn-images.deezer.com/images/cover/f24fe73ffa34b9f997ba4a2631c0334d/400x400-000000-80-0-0.jpg","year":"2005","id":"SODEXGO12A8C13C01D","hasSleeve":false},{"title":"Shimmy Shimmy Ya","artist":"Ol\' Dirty Bastard","cover":"http://cdn-images.deezer.com/images/cover/786388d368900f66f05bd3831bda4ff8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOYVNXN144B26B71A2","hasSleeve":false},{"title":"The Seed (2.0)","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/411ffd8911f1fc05c205e86509f6eca1/400x400-000000-80-0-0.jpg","year":"2002","id":"SOCZZUU144F500F16F","hasSleeve":false},{"title":"Ice Cream","artist":"Raekwon","cover":"http://cdn-images.deezer.com/images/cover/75c9f84b189c2bc310647e61b7a6d5e8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOWTQFY135C395E98C","hasSleeve":false},{"title":"Milk The Cow","artist":"Cappadonna","cover":"http://cdn-images.deezer.com/images/cover/5953b45d6716fcb3b2fd222072ac4029/400x400-000000-80-0-0.jpg","year":"1998","id":"SOCEGCF1311AFE5D52","hasSleeve":false},{"title":"Runnin\'","artist":"The Pharcyde","cover":"http://cdn-images.deezer.com/images/cover/71de7ca1aea063a87dca08907d7d9d11/400x400-000000-80-0-0.jpg","year":"2013","id":"SOLFYAD137AD7633B2","hasSleeve":false},{"title":"The Choice Is Yours","artist":"Black Sheep","cover":"http://cdn-images.deezer.com/images/cover/d8ac4fae559fb005ddf7f0ed5adbf2f9/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEVEPY12A6310EAD3","hasSleeve":false},{"title":"Tennessee","artist":"Arrested Development","cover":"http://cdn-images.deezer.com/images/cover/2c7039e6188be44a8600a8f87edb5ec7/400x400-000000-80-0-0.jpg","year":"1992","id":"SOIXAYX12A8C139032","hasSleeve":false},{"title":"Sugar Hill","artist":"AZ","cover":"http://cdn-images.deezer.com/images/cover/b2eac1235c5ec67612d2fa0cce3c7905/400x400-000000-80-0-0.jpg","year":"1995","id":"SOECJXV136A5B5EB5E","hasSleeve":false},{"title":"Loungin\'","artist":"Guru","cover":"http://cdn-images.deezer.com/images/cover/9af047171c514d7d558be4d2eb0a637d/400x400-000000-80-0-0.jpg","year":"2008","id":"SOHLCCS1312A8AD2C6","hasSleeve":false},{"title":"La Rhumba","artist":"Bobby Digital","cover":"http://cdn-images.deezer.com/images/cover/ac98a11c434ca76b55553eaa1722a4ad/400x400-000000-80-0-0.jpg","year":"2002","id":"SOFXNEJ12B0B80BD35","hasSleeve":false},{"title":"N.Y. State Of Mind","artist":"Nas","cover":"http://cdn-images.deezer.com/images/cover/e7f5acdfbc1c49bc4520938b4d775ec6/400x400-000000-80-0-0.jpg","year":"1994","id":"SOFQKQO1312FE0065F","hasSleeve":false},{"title":"Award Tour","artist":"A Tribe Called Quest","cover":"http://cdn-images.deezer.com/images/cover/aacb57691f97456e6594d8e991bb81bb/400x400-000000-80-0-0.jpg","year":"1993","id":"SODGQBF144BD8F4FD1","hasSleeve":false},{"title":"My Definition Of A Boombastic Jazz Style","artist":"Dream Warriors","cover":"http://cdn-images.deezer.com/images/cover/1f9bfa4c7665e07fc7dfc7ab4e59ec49/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEHHZE144E604C29B","hasSleeve":false},{"title":"Ready or Not","artist":"Fugees","cover":"http://cdn-images.deezer.com/images/cover/04a5526b7b94c6e2d617ade762ddf5dc/400x400-000000-80-0-0.jpg","year":"1996","id":"SOCGQAJ136077E8945","hasSleeve":false}]');

var bottomBar  		= document.getElementById('bottom-bar'),
	buttonPrev 		= document.getElementById('button-prev'),
	buttonShow 		= document.getElementById('button-show'),
	buttonNext 		= document.getElementById('button-next'),
	titleContainer  = document.getElementById('cratedigger-record-title'),
	artistContainer = document.getElementById('cratedigger-record-artist'),
	coverContainer  = document.getElementById('cratedigger-record-cover');

cratedigger.init({

	debug: true,

    elements: {
        rootContainer     : document.getElementById('cratedigger'),
        canvasContainer   : document.getElementById('cratedigger-canvas'),
        loadingContainer  : document.getElementById('cratedigger-loading'),
        infoContainer     : document.getElementById('cratedigger-info')
    },

    onInfoPanelOpened: function() {
    	bottomBar.classList.add('closed');
    	fillInfoPanel(cratedigger.getSelectedRecord());
    },

	onInfoPanelClosed: function() {
		bottomBar.classList.remove('closed');
	}
});

cratedigger.loadRecords(data, true, function() {

	bindEvents();

});

function bindEvents() {

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
	
}


function fillInfoPanel ( record ) {

    if ( record.data.title ) {

        titleContainer.innerHTML = record.data.title;

    }

    if ( record.data.artist ) {

        artistContainer.innerHTML = record.data.artist;

    }

    if ( record.data.cover ) {

        coverContainer.style.backgroundImage = 'url(' + record.data.cover + ')';

    }
};
},{"./cratedigger":7}],2:[function(require,module,exports){
// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:12,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};"object"===typeof module&&(module.exports=Stats);

},{}],3:[function(require,module,exports){
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/sole/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/sole/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

// Date.now shim for (ahem) Internet Explo(d|r)er
if ( Date.now === undefined ) {

	Date.now = function () {

		return new Date().valueOf();

	};

}

var TWEEN = TWEEN || ( function () {

	var _tweens = [];

	return {

		REVISION: '14',

		getAll: function () {

			return _tweens;

		},

		removeAll: function () {

			_tweens = [];

		},

		add: function ( tween ) {

			_tweens.push( tween );

		},

		remove: function ( tween ) {

			var i = _tweens.indexOf( tween );

			if ( i !== -1 ) {

				_tweens.splice( i, 1 );

			}

		},

		update: function ( time ) {

			if ( _tweens.length === 0 ) return false;

			var i = 0;

			time = time !== undefined ? time : ( typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now() );

			while ( i < _tweens.length ) {

				if ( _tweens[ i ].update( time ) ) {

					i++;

				} else {

					_tweens.splice( i, 1 );

				}

			}

			return true;

		}
	};

} )();

TWEEN.Tween = function ( object ) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _valuesStartRepeat = {};
	var _duration = 1000;
	var _repeat = 0;
	var _yoyo = false;
	var _isPlaying = false;
	var _reversed = false;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;
	var _onStopCallback = null;

	// Set all starting values present on the target object
	for ( var field in object ) {

		_valuesStart[ field ] = parseFloat(object[field], 10);

	}

	this.to = function ( properties, duration ) {

		if ( duration !== undefined ) {

			_duration = duration;

		}

		_valuesEnd = properties;

		return this;

	};

	this.start = function ( time ) {

		TWEEN.add( this );

		_isPlaying = true;

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : ( typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now() );
		_startTime += _delayTime;

		for ( var property in _valuesEnd ) {

			// check if an Array was provided as property value
			if ( _valuesEnd[ property ] instanceof Array ) {

				if ( _valuesEnd[ property ].length === 0 ) {

					continue;

				}

				// create a local copy of the Array with the start value at the front
				_valuesEnd[ property ] = [ _object[ property ] ].concat( _valuesEnd[ property ] );

			}

			_valuesStart[ property ] = _object[ property ];

			if( ( _valuesStart[ property ] instanceof Array ) === false ) {
				_valuesStart[ property ] *= 1.0; // Ensures we're using numbers, not strings
			}

			_valuesStartRepeat[ property ] = _valuesStart[ property ] || 0;

		}

		return this;

	};

	this.stop = function () {

		if ( !_isPlaying ) {
			return this;
		}

		TWEEN.remove( this );
		_isPlaying = false;

		if ( _onStopCallback !== null ) {

			_onStopCallback.call( _object );

		}

		this.stopChainedTweens();
		return this;

	};

	this.stopChainedTweens = function () {

		for ( var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++ ) {

			_chainedTweens[ i ].stop();

		}

	};

	this.delay = function ( amount ) {

		_delayTime = amount;
		return this;

	};

	this.repeat = function ( times ) {

		_repeat = times;
		return this;

	};

	this.yoyo = function( yoyo ) {

		_yoyo = yoyo;
		return this;

	};


	this.easing = function ( easing ) {

		_easingFunction = easing;
		return this;

	};

	this.interpolation = function ( interpolation ) {

		_interpolationFunction = interpolation;
		return this;

	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;

	};

	this.onStart = function ( callback ) {

		_onStartCallback = callback;
		return this;

	};

	this.onUpdate = function ( callback ) {

		_onUpdateCallback = callback;
		return this;

	};

	this.onComplete = function ( callback ) {

		_onCompleteCallback = callback;
		return this;

	};

	this.onStop = function ( callback ) {

		_onStopCallback = callback;
		return this;

	};

	this.update = function ( time ) {

		var property;

		if ( time < _startTime ) {

			return true;

		}

		if ( _onStartCallbackFired === false ) {

			if ( _onStartCallback !== null ) {

				_onStartCallback.call( _object );

			}

			_onStartCallbackFired = true;

		}

		var elapsed = ( time - _startTime ) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		var value = _easingFunction( elapsed );

		for ( property in _valuesEnd ) {

			var start = _valuesStart[ property ] || 0;
			var end = _valuesEnd[ property ];

			if ( end instanceof Array ) {

				_object[ property ] = _interpolationFunction( end, value );

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if ( typeof(end) === "string" ) {
					end = start + parseFloat(end, 10);
				}

				// protect against non numeric properties.
				if ( typeof(end) === "number" ) {
					_object[ property ] = start + ( end - start ) * value;
				}

			}

		}

		if ( _onUpdateCallback !== null ) {

			_onUpdateCallback.call( _object, value );

		}

		if ( elapsed == 1 ) {

			if ( _repeat > 0 ) {

				if( isFinite( _repeat ) ) {
					_repeat--;
				}

				// reassign starting values, restart by making startTime = now
				for( property in _valuesStartRepeat ) {

					if ( typeof( _valuesEnd[ property ] ) === "string" ) {
						_valuesStartRepeat[ property ] = _valuesStartRepeat[ property ] + parseFloat(_valuesEnd[ property ], 10);
					}

					if (_yoyo) {
						var tmp = _valuesStartRepeat[ property ];
						_valuesStartRepeat[ property ] = _valuesEnd[ property ];
						_valuesEnd[ property ] = tmp;
					}

					_valuesStart[ property ] = _valuesStartRepeat[ property ];

				}

				if (_yoyo) {
					_reversed = !_reversed;
				}

				_startTime = time + _delayTime;

				return true;

			} else {

				if ( _onCompleteCallback !== null ) {

					_onCompleteCallback.call( _object );

				}

				for ( var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++ ) {

					_chainedTweens[ i ].start( time );

				}

				return false;

			}

		}

		return true;

	};

};


TWEEN.Easing = {

	Linear: {

		None: function ( k ) {

			return k;

		}

	},

	Quadratic: {

		In: function ( k ) {

			return k * k;

		},

		Out: function ( k ) {

			return k * ( 2 - k );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
			return - 0.5 * ( --k * ( k - 2 ) - 1 );

		}

	},

	Cubic: {

		In: function ( k ) {

			return k * k * k;

		},

		Out: function ( k ) {

			return --k * k * k + 1;

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k + 2 );

		}

	},

	Quartic: {

		In: function ( k ) {

			return k * k * k * k;

		},

		Out: function ( k ) {

			return 1 - ( --k * k * k * k );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
			return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

		}

	},

	Quintic: {

		In: function ( k ) {

			return k * k * k * k * k;

		},

		Out: function ( k ) {

			return --k * k * k * k * k + 1;

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
			return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

		}

	},

	Sinusoidal: {

		In: function ( k ) {

			return 1 - Math.cos( k * Math.PI / 2 );

		},

		Out: function ( k ) {

			return Math.sin( k * Math.PI / 2 );

		},

		InOut: function ( k ) {

			return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

		}

	},

	Exponential: {

		In: function ( k ) {

			return k === 0 ? 0 : Math.pow( 1024, k - 1 );

		},

		Out: function ( k ) {

			return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

		},

		InOut: function ( k ) {

			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
			return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

		}

	},

	Circular: {

		In: function ( k ) {

			return 1 - Math.sqrt( 1 - k * k );

		},

		Out: function ( k ) {

			return Math.sqrt( 1 - ( --k * k ) );

		},

		InOut: function ( k ) {

			if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
			return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

		},

		Out: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

		},

		InOut: function ( k ) {

			var s, a = 0.1, p = 0.4;
			if ( k === 0 ) return 0;
			if ( k === 1 ) return 1;
			if ( !a || a < 1 ) { a = 1; s = p / 4; }
			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
			if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
			return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

		}

	},

	Back: {

		In: function ( k ) {

			var s = 1.70158;
			return k * k * ( ( s + 1 ) * k - s );

		},

		Out: function ( k ) {

			var s = 1.70158;
			return --k * k * ( ( s + 1 ) * k + s ) + 1;

		},

		InOut: function ( k ) {

			var s = 1.70158 * 1.525;
			if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
			return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

		}

	},

	Bounce: {

		In: function ( k ) {

			return 1 - TWEEN.Easing.Bounce.Out( 1 - k );

		},

		Out: function ( k ) {

			if ( k < ( 1 / 2.75 ) ) {

				return 7.5625 * k * k;

			} else if ( k < ( 2 / 2.75 ) ) {

				return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

			} else if ( k < ( 2.5 / 2.75 ) ) {

				return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

			} else {

				return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

			}

		},

		InOut: function ( k ) {

			if ( k < 0.5 ) return TWEEN.Easing.Bounce.In( k * 2 ) * 0.5;
			return TWEEN.Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function ( v, k ) {

		var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.Linear;

		if ( k < 0 ) return fn( v[ 0 ], v[ 1 ], f );
		if ( k > 1 ) return fn( v[ m ], v[ m - 1 ], m - f );

		return fn( v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i );

	},

	Bezier: function ( v, k ) {

		var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i;

		for ( i = 0; i <= n; i++ ) {
			b += pw( 1 - k, n - i ) * pw( k, i ) * v[ i ] * bn( n, i );
		}

		return b;

	},

	CatmullRom: function ( v, k ) {

		var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.CatmullRom;

		if ( v[ 0 ] === v[ m ] ) {

			if ( k < 0 ) i = Math.floor( f = m * ( 1 + k ) );

			return fn( v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i );

		} else {

			if ( k < 0 ) return v[ 0 ] - ( fn( v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f ) - v[ 0 ] );
			if ( k > 1 ) return v[ m ] - ( fn( v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m ) - v[ m ] );

			return fn( v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i );

		}

	},

	Utils: {

		Linear: function ( p0, p1, t ) {

			return ( p1 - p0 ) * t + p0;

		},

		Bernstein: function ( n , i ) {

			var fc = TWEEN.Interpolation.Utils.Factorial;
			return fc( n ) / fc( i ) / fc( n - i );

		},

		Factorial: ( function () {

			var a = [ 1 ];

			return function ( n ) {

				var s = 1, i;
				if ( a[ n ] ) return a[ n ];
				for ( i = n; i > 1; i-- ) s *= i;
				return a[ n ] = s;

			};

		} )(),

		CatmullRom: function ( p0, p1, p2, p3, t ) {

			var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
			return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

		}

	}

};

module.exports=TWEEN;
},{}],4:[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null),
	TWEEN = require('tween.js'),

	Constants = require('./Constants');

var camera,
	target,
    cameraTween,
    targetTween;

function init(ratio) {

	camera = new THREE.PerspectiveCamera( 45, ratio, 0.1, 20000 );
    camera.focalLength = 45;
    camera.frameSize = 32;
    camera.setLens( camera.focalLength, camera.frameSize );

    target = new THREE.Object3D();
    camera.lookAt( target.position );

    cameraTween = new TWEEN.Tween();
    targetTween = new TWEEN.Tween();

}

function focusRecord(recordXPos, recordAbsolutePos) {
    
    cameraTween.stop();
    targetTween.stop();

    targetTween = new TWEEN.Tween( target.position )
	    .to( {
	        x: recordXPos,
	        y: 50 + Constants.scene.recordShownY,
	        z: recordAbsolutePos.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();

	cameraTween = new TWEEN.Tween( camera.position )
	    .to( {
	        x: recordXPos + Constants.scene.cameraFocusPosition.x,
	        y: Constants.scene.cameraFocusPosition.y,
	        z: recordAbsolutePos.z + Constants.scene.cameraFocusPosition.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomInRecord(recordXPos, recordAbsolutePos) {
    
    cameraTween.stop();
    targetTween.stop();

    targetTween = new TWEEN.Tween( target.position )
        .to( {
            x: recordXPos,
            y: Constants.scene.recordFlippedY + 50,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()

    cameraTween = new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x + 80,
            y: Constants.scene.cameraFocusPosition.y - 50,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomOutRecord(recordXPos, recordAbsolutePos) {
    
    cameraTween.stop();
    targetTween.stop();

    targetTween = new TWEEN.Tween( target.position )
        .delay( Constants.scene.infoOpenTime / 2 )
        .to( {
            x: recordXPos,
            y: 75,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    cameraTween = new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x,
            y: Constants.scene.cameraFocusPosition.y,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function resetCamera() {
    
    cameraTween.stop();
    targetTween.stop();

	targetTween = new TWEEN.Tween( target.position )
        .to( {
            x: Constants.scene.targetBasePosition.x,
            y: Constants.scene.targetBasePosition.y,
            z: Constants.scene.targetBasePosition.z
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    cameraTween = new TWEEN.Tween( camera.position )
        .to( {
            x: Constants.scene.cameraBasePosition.x,
            y: Constants.scene.cameraBasePosition.y,
            z: Constants.scene.cameraBasePosition.z
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function updateCameraAspect(ratio) {
	camera.aspect = ratio;
    camera.updateProjectionMatrix();
}

function lookAtTarget() {
	camera.lookAt( target.position );
}

module.exports = {
	init: init,
	focusRecord: focusRecord,
	zoomInRecord: zoomInRecord,
	zoomOutRecord: zoomOutRecord,
	resetCamera: resetCamera,
	updateCameraAspect: updateCameraAspect,
	lookAtTarget: lookAtTarget,
	
	getCamera: function() {
		return camera;
	},
	getTarget: function() {
		return target;
	}
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9DYW1lcmFNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuXHRUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcblxyXG5cdENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG52YXIgY2FtZXJhLFxyXG5cdHRhcmdldCxcclxuICAgIGNhbWVyYVR3ZWVuLFxyXG4gICAgdGFyZ2V0VHdlZW47XHJcblxyXG5mdW5jdGlvbiBpbml0KHJhdGlvKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIHJhdGlvLCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZm9jdXNSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuICAgIFxyXG4gICAgY2FtZXJhVHdlZW4uc3RvcCgpO1xyXG4gICAgdGFyZ2V0VHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcblx0ICAgICAgICB5OiA1MCArIENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93blksXHJcblx0ICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG5cdGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG5cdCAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuXHQgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnogKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21JblJlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgdGFyZ2V0VHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6b29tT3V0UmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcbiAgICBcclxuICAgIGNhbWVyYVR3ZWVuLnN0b3AoKTtcclxuICAgIHRhcmdldFR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogcmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnpcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2FtZXJhKCkge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG5cdHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW1lcmFBc3BlY3QocmF0aW8pIHtcclxuXHRjYW1lcmEuYXNwZWN0ID0gcmF0aW87XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29rQXRUYXJnZXQoKSB7XHJcblx0Y2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluaXQ6IGluaXQsXHJcblx0Zm9jdXNSZWNvcmQ6IGZvY3VzUmVjb3JkLFxyXG5cdHpvb21JblJlY29yZDogem9vbUluUmVjb3JkLFxyXG5cdHpvb21PdXRSZWNvcmQ6IHpvb21PdXRSZWNvcmQsXHJcblx0cmVzZXRDYW1lcmE6IHJlc2V0Q2FtZXJhLFxyXG5cdHVwZGF0ZUNhbWVyYUFzcGVjdDogdXBkYXRlQ2FtZXJhQXNwZWN0LFxyXG5cdGxvb2tBdFRhcmdldDogbG9va0F0VGFyZ2V0LFxyXG5cdFxyXG5cdGdldENhbWVyYTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gY2FtZXJhO1xyXG5cdH0sXHJcblx0Z2V0VGFyZ2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG59Il19
},{"./Constants":5,"tween.js":3}],5:[function(require,module,exports){
module.exports = {

    debug: false,
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
    postprocessing: false,
    blurAmount: 0.4,
    updateCanvasSizeOnWindowResize: true,
    onInfoPanelOpened: function () {},
    onInfoPanelClosed: function () {},
    onLoadingEnd: function () {},
    elements: {
        rootContainer: null,
        canvasContainer: null,
        loadingContainer: null,
        infoContainer: null,
        titleContainer: null,
        artistContainer: null,
        coverContainer: null
    },
    scene: {
        recordMoveTime: 1000,
        cameraMoveTime: 800,
        infoOpenTime: 700,
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
            x: 190,
            y: 195,
            z: 93
        },
        cameraMouseMoveSpeedY: 0.07,
        cameraMouseMoveSpeedZ: 0.04,
        grabSensitivity: 6
    },

    extend: function ( options ) {

        for ( var key in options ) {

            if ( Object.prototype.hasOwnProperty.call( options, key ) ) {

                this[ key ] = options[ key ];

            }
        }

        return this;
    }
};
},{}],6:[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null),
    TWEEN = require('tween.js'),

    Constants = require('./Constants'),
    CameraManager = require('./CameraManager');

var Record = function ( id, crateId, pos ) {

    this.id = id;
    this.crateId = crateId;
    this.pos = pos;
    this.state = 'out';
    this.recordXPos = -62 + ( 135 / Constants.recordsPerCrate ) * pos;
    this.mesh = new THREE.Mesh( 
        new THREE.BoxGeometry( 100, 1.5, 100, 1, 1, 1 ), 
        new THREE.MeshFaceMaterial( new THREE.MeshLambertMaterial( {
            color: Constants.sleeveColor
        }))
    );
    this.mesh.geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 50, 0, 0 ) );
    this.mesh.position.set( this.recordXPos, Constants.scene.recordBaseY, 0 );
    this.mesh.rotation.z = Math.PI / 2;
    this.mesh.recordId = id;
    this.absolutePosition = new THREE.Vector3();

    this.positionTween = new TWEEN.Tween();
    this.rotationTween = new TWEEN.Tween();

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

    this.positionTween.stop();
    this.rotationTween.stop();

    if ( this.state !== 'shown' ) {

        this.state = 'shown';
        this.absolutePosition.setFromMatrixPosition( this.mesh.matrixWorld );

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordShownY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        CameraManager.focusRecord(this.recordXPos, this.absolutePosition);

    }
};

Record.prototype.pushRecord = function () {

    if ( this.state != 'pushed' ) {

        this.state = 'pushed';

        this.positionTween.stop();
        this.rotationTween.stop();

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 + Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pullRecord = function () {

    if ( this.state !== 'pulled' ) {

        this.state = 'pulled';

        this.positionTween.stop();
        this.rotationTween.stop();

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 - Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.flipRecord = function ( done ) {

    this.state = 'flipped';

    this.positionTween.stop();
    this.rotationTween.stop();

    this.positionTween = new TWEEN.Tween( this.mesh.position )
        .to( {
            y: Constants.scene.recordFlippedY
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
        .delay( Constants.scene.infoOpenTime / 4 )
        .to( {
            x: 0,
            y: Math.PI,
            z: Math.PI / 2
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()
        .onComplete( done );

    CameraManager.zoomInRecord(this.recordXPos, this.absolutePosition);
};

Record.prototype.flipBackRecord = function ( done , noCameraTween ) {

    if ( this.state === 'flipped' ) {

        this.positionTween.stop();
        this.rotationTween.stop();

        this.positionTween = new TWEEN.Tween( this.mesh.position )
            .delay( Constants.scene.infoOpenTime / 2 )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.infoOpenTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        this.rotationTween = new TWEEN.Tween( this.mesh.rotation )
            .to( {
                y: 0
            }, Constants.scene.infoOpenTime / 2 )
            .easing( TWEEN.Easing.Quartic.Out ).start()
            .onComplete( done );

        if (!noCameraTween) {
            
            CameraManager.zoomOutRecord(this.recordXPos, this.absolutePosition);
            
        }
    }
};

module.exports = Record;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9SZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcbiAgICBUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcblxyXG4gICAgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKTtcclxuXHJcbnZhciBSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jcmF0ZUlkID0gY3JhdGVJZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdvdXQnO1xyXG4gICAgdGhpcy5yZWNvcmRYUG9zID0gLTYyICsgKCAxMzUgLyBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkgKiBwb3M7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCggXHJcbiAgICAgICAgbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEuNSwgMTAwLCAxLCAxLCAxICksIFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKCBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5tZXNoLmdlb21ldHJ5LmFwcGx5TWF0cml4KCBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbiggNTAsIDAsIDAgKSApO1xyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnNldCggdGhpcy5yZWNvcmRYUG9zLCBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVksIDAgKTtcclxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICB0aGlzLm1lc2gucmVjb3JkSWQgPSBpZDtcclxuICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuXHJcbiAgICB0aGlzLnNldFVuYWN0aXZlKCk7XHJcbiAgICB0aGlzLnB1c2hSZWNvcmQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJSZWNvcmQgbsKwXCIsIHRoaXMuaWQsXHJcbiAgICAgICAgXCJjcmF0ZUlkID1cIiwgdGhpcy5jcmF0ZUlkLFxyXG4gICAgICAgIFwicG9zID1cIiwgdGhpcy5wb3MgKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRVbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNob3dSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgIHRoaXMucm90YXRpb25Ud2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAnc2hvd24nICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3Nob3duJztcclxuICAgICAgICB0aGlzLmFic29sdXRlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLm1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93bllcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIENhbWVyYU1hbmFnZXIuZm9jdXNSZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdWxsUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3B1bGxlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVsbGVkJztcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiAtIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSAnZmxpcHBlZCc7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgIHRoaXMucm90YXRpb25Ud2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkRmxpcHBlZFlcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyA0IClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogTWF0aC5QSSxcclxuICAgICAgICAgICAgejogTWF0aC5QSSAvIDJcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLnpvb21JblJlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBCYWNrUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICwgbm9DYW1lcmFUd2VlbiApIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgPT09ICdmbGlwcGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC5kZWxheSggQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgICAgIGlmICghbm9DYW1lcmFUd2Vlbikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQ2FtZXJhTWFuYWdlci56b29tT3V0UmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWNvcmQ7Il19
},{"./CameraManager":4,"./Constants":5,"tween.js":3}],7:[function(require,module,exports){
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



/*===========================================================================
=            cratedigger.js v0.0.1 - by risq (Valentin Ledrapier)           =
===========================================================================*/


'use strict';

var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null),
    TWEEN = require('tween.js'),
    Stats = require('stats-js'),
    Modernizr = (typeof window !== "undefined" ? window['Modernizr'] : typeof global !== "undefined" ? global['Modernizr'] : null),
    dat = (typeof window !== "undefined" ? window['dat'] : typeof global !== "undefined" ? global['dat'] : null),

    Record = require('./Record'),
    CameraManager = require('./CameraManager'),
    Constants = require('./Constants');

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

var exports = {}, // Object for public APIs


    /*==========  Three.js objects  ==========*/

    stats,
    scene,
    camera,
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

    wood_material;


/*====================================
=            BASE METHODS            =
====================================*/

function animate () {

    if ( doRender ) {

        requestAnimationFrame( animate );
        render();

        if ( Constants.debug ) {

            stats.update();

        }
    }
};

function render () {

    TWEEN.update();
    updateShownRecord();

    if ( Constants.cameraMouseMove ) {

        targetCameraPos.x = ( mouse.x / canvasWidth - 0.5 ) * 0.25; // inverse axis?
        targetCameraPos.y = ( mouse.y / canvasWidth - 0.5 ) * 0.25;
        rootContainer.rotation.y += Constants.scene.cameraMouseMoveSpeedY * ( targetCameraPos.x - rootContainer.rotation.y );
        rootContainer.rotation.z += Constants.scene.cameraMouseMoveSpeedZ * ( targetCameraPos.y - rootContainer.rotation.z );

    }

    CameraManager.lookAtTarget();

    if ( Constants.postprocessing ) {

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
function unloadRecords () {

    for ( var i = 0; i < records.length; i++ ) {

        records[ i ].data = null;
        records[ i ].setUnactive();

    }

    loadedRecords = 0;
    recordsDataList = [];

};


function loadRecords ( recordsData, shuffleBeforeLoading, done ) {

    resetShownRecord( true );

    showLoading( function() {

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

            hideLoading(done);
            Constants.onLoadingEnd();

        }, 3000 );
    });

};

function shuffleRecords () {

    var shuffledRecords = recordsDataList;
    shuffledRecords = shuffle( shuffledRecords );
    loadRecords( shuffledRecords );

};


/*=================================================
=            RECORDS SELECTION METHODS            =
=================================================*/


function selectRecord ( id ) {

    if ( infoPanelState === 'opened' ) {

        flipBackSelectedRecord();

    } else if ( infoPanelState !== 'opening' && infoPanelState !== 'closing' ) {

        selectedRecord = id;

    }
};

function flipSelectedRecord () {

    if ( records[ selectedRecord ] ) {

        infoPanelState = 'opening';

        records[ selectedRecord ].flipRecord( function () {

            infoPanelState = 'opened';

        } );

        Constants.onInfoPanelOpened();

        setTimeout( function () {

            fadeIn( Constants.elements.infoContainer );

        }, 300 );
    }
};

function flipBackSelectedRecord (force) {

    if ( infoPanelState === 'opened' ) {

        fadeOut( Constants.elements.infoContainer );
        infoPanelState = 'closing';

        records[ selectedRecord ].flipBackRecord( function () {

            infoPanelState = 'closed';
            Constants.onInfoPanelClosed();

        }, force );
    }
};

function updateShownRecord () {

    if ( infoPanelState === 'closed' && shownRecord != selectedRecord ) {

        shownRecord = selectedRecord;

        for ( var recordId = 0; recordId < loadedRecords; recordId++ ) {

            if ( selectedRecord == -1 ) {

                records[ recordId ].pushRecord();

            } else if ( recordId > selectedRecord &&
                recordId > records[ selectedRecord ].crateId * Constants.recordsPerCrate &&
                recordId < ( records[ selectedRecord ].crateId * Constants.recordsPerCrate ) + Constants.recordsPerCrate ) {

                records[ recordId ].pullRecord();

            } else if ( recordId == selectedRecord ) {

                records[ recordId ].showRecord();

            } else {

                records[ recordId ].pushRecord();

            }
        }
    }
};

function resetShownRecord ( force ) {

    if ( infoPanelState === 'opened' && !force ) {

        flipBackSelectedRecord();

    } else if ( infoPanelState !== 'opening' && infoPanelState !== 'closing' ) {

        if ( infoPanelState === 'opened' ) {
            flipBackSelectedRecord(true);
        }

        selectedRecord = -1;
        
        CameraManager.resetCamera();
    }
};

function selectPrevRecord () {

    selectRecord(getPrevAvailableRecord(selectedRecord));
    
};

function selectNextRecord () {

    selectRecord(getNextAvailableRecord(selectedRecord));

};

function getPrevAvailableRecord (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord < loadedRecords - 1 ) {

        fromRecord = fromRecord + 1;

    } else {

        fromRecord = 0;

    }

    return records[ fromRecord ].active ? fromRecord : getPrevAvailableRecord(fromRecord);
    
};

function getNextAvailableRecord (fromRecord) {

    if ( fromRecord == -1 ) {

        fromRecord = loadedRecords - 1;

    } else if ( fromRecord > 0 ) {

        fromRecord = fromRecord - 1;

    } else {

        fromRecord = loadedRecords - 1;

    }

    return records[ fromRecord ].active ? fromRecord : getNextAvailableRecord(fromRecord);

};

function navigateRecords ( direction ) {

    if ( infoPanelState === 'closed' ) {

        if ( direction === 'prev' ) {

            selectPrevRecord();

        } else {

            selectNextRecord();

        }

    } else if ( infoPanelState === 'opened' && Constants.closeInfoPanelOnScroll ) {

        flipBackSelectedRecord();

    }

};

function scrollRecords ( baseY, oldDelta ) {

    oldDelta = !oldDelta || Math.abs( oldDelta ) > 0.5 ? 0.5 : Math.abs( oldDelta );
    var inverseDelta = 1 - oldDelta;
    var scrollSpeed = inverseDelta * inverseDelta * inverseDelta * 300;

    scrollRecordsTimeout = setTimeout( function () {
        renderer.domElement.classList.add('grab');
        var delta = ( baseY - mouse.y ) / canvasHeight;

        if ( delta > 0 ) {

            selectNextRecord();

        } else if ( delta < 0 ) {

            selectPrevRecord();

        }

        scrollRecords( baseY, delta );

    }, scrollSpeed );

};


/*=======================================
=            EVENTS HANDLING            =
=======================================*/

function bindEvents() {

    Constants.elements.rootContainer.addEventListener( 'DOMMouseScroll', onScrollEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousewheel', onScrollEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousemove', onMouseMoveEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousedown', onMouseDownEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mouseup', onMouseUpEvent, false );
    Constants.elements.rootContainer.addEventListener( 'contextmenu', onRightClickEvent, false );

    window.addEventListener( 'keydown', onKeyDownEvent, false ); 

    if ( Constants.updateCanvasSizeOnWindowResize ) {

        window.addEventListener( 'resize', onWindowResizeEvent, false );

    }
}


function onMouseMoveEvent ( e ) {

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

function onScrollEvent ( e ) {


    if ( wheelDirection( e ) < 0 ) {

        navigateRecords( 'prev' );

    } else {

        navigateRecords( 'next' );

    }

    return false;
};

function onClickEvent ( mouseDownPos ) {

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

    } else if ( Constants.closeInfoPanelOnClick ) {

        flipBackSelectedRecord();

    }
};

function onMouseDownEvent ( e ) {

    if ( e.button !== 1 && e.button !== 2 ) {

        clearInterval( scrollRecordsTimeout );

        if ( infoPanelState === 'closed' ) {

            scrollRecords( mouse.y );

        } 

        mouseDownPos = {
            x: mouse.x,
            y: mouse.y
        };

    }
};

function onMouseUpEvent ( e ) {

    if ( e.button !== 1 && e.button !== 2 ) {

        clearInterval( scrollRecordsTimeout );
        renderer.domElement.classList.remove('grab');

        // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
        if ( coordsEqualsApprox( mouseDownPos, mouse, Constants.scene.grabSensitivity ) && !( e.target && e.target.hasAttribute('href') ) ) {

            onClickEvent( mouseDownPos );

        }
    }
};

function onRightClickEvent ( e ) {

    e.preventDefault();

    if ( infoPanelState === 'opened' ) {

        flipBackSelectedRecord();

    } else {

        resetShownRecord();

    }

    return false;
}

function onKeyDownEvent ( e ) {

    if ( e.keyCode === 37 || e.keyCode === 38 ) {

        navigateRecords( 'next' );

    } else if ( e.keyCode === 39 || e.keyCode === 40 ) {

        navigateRecords( 'prev' );

    } else if ( infoPanelState === 'closed' && e.keyCode === 13 || e.keyCode === 32) {

        flipSelectedRecord();

    } else if ( e.keyCode === 27 ) {

        if ( infoPanelState === 'opened' ) {

            flipBackSelectedRecord();

        } else {

            resetShownRecord();

        }

    }
};

function onWindowResizeEvent ( e ) {

    calculateCanvasSize();
    setCanvasDimensions();

    renderer.setSize( canvasWidth, canvasHeight );
    CameraManager.updateCameraAspect( canvasWidth / canvasHeight );

    dof.uniforms.tDepth.value = depthTarget;
    dof.uniforms.size.value.set( canvasWidth, canvasHeight );
    dof.uniforms.textel.value.set( 1.0 / canvasWidth, 1.0 / canvasHeight );
    FXAA.uniforms.resolution.value.set( 1 / canvasWidth, 1 / canvasHeight );

};


/*======================================
=              UI METHODS              =
======================================*/


function showLoading ( done ) {

    fadeIn( Constants.elements.loadingContainer );
    setTimeout(done, 1000);

};

function hideLoading ( done ) {

    fadeOut( Constants.elements.loadingContainer );
    setTimeout(done, 1000);

};




/*======================================
=            INITIALISATION            =
======================================*/


function initScene () {

    // scene, renderer, camera,...
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( {
        antialias: true
    } );
    renderer.setSize( canvasWidth, canvasHeight );

    Constants.elements.canvasContainer.appendChild( renderer.domElement );
    renderer.domElement.id = "context";
    renderer.setClearColor( Constants.backgroundColor, 1 );

    CameraManager.init(canvasWidth / canvasHeight);
    camera = CameraManager.getCamera();

    var wood_texture = THREE.ImageUtils.loadTexture( Constants.crateTexture );
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

    light = new THREE.PointLight( 0xFFFFFF, Constants.lightIntensity * 1.1 );
    light.position.set( 300, 80, 0 );
    scene.add( light );

    leftLight = new THREE.PointLight( 0xFFFFFF, Constants.lightIntensity * 0.6 );
    leftLight.position.set( -100, 300, 1000 );
    scene.add( leftLight );

    rightLight = new THREE.PointLight( 0xFFFFFF, Constants.lightIntensity * 0.6 );
    rightLight.position.set( -100, 300, -1000 );
    scene.add( rightLight );

    initPostProcessing();

    bindEvents();

    // DOM setup
    Constants.elements.rootContainer.style.position = 'relative';
    Constants.elements.canvasContainer.style.position = 'absolute';
    Constants.elements.infoContainer.style.position = 'absolute';
    Constants.elements.loadingContainer.style.position = 'absolute';

    setCanvasDimensions();

    hideElement(Constants.elements.infoContainer);

    if ( Constants.debug ) {

        initDebug();
        initGUI();

    }

    resetShownRecord();
    animate();
};

function initPostProcessing () {

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
    dof.uniforms.maxblur.value = Constants.blurAmount; //clamp value of max blur (0.0 = no blur,1.0 default)    

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

function initDebug () {

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = "0";
    stats.domElement.style.top = "0";
    Constants.elements.rootContainer.appendChild( stats.domElement );

    var debug = new THREE.Mesh( new THREE.BoxGeometry( 20, 20, 20, 1, 1, 1 ) );
    debug.position.set(
        light.position.x,
        light.position.y,
        light.position.z
    );
    scene.add( debug );

};

function initGUI () {

    var cameraFolder,
        cameraFocalLength,
        dofFolder,
        _last;

    gui = new dat.GUI();
    
    cameraFolder = gui.addFolder( 'Camera' );
    cameraFocalLength = cameraFolder.add( camera, 'focalLength', 28, 200 ).name( 'Focal Length' );
    cameraFocalLength.onChange( updateCamera );

    if ( Constants.postprocessing ) {


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

function updateCamera () {

    camera.setLens( camera.focalLength, camera.frameSize );
    camera.updateProjectionMatrix();
    dof.uniforms.focalLength.value = camera.focalLength;

};

function initCrates () {

    for ( var crateId = 0; crateId < Constants.nbCrates; crateId++ ) {
        var crate = createCrate( crateId );
        cratesContainer.add( crate );
    }
    cratesContainer.position.z = -( 110 - ( 110 * Constants.nbCrates ) ) / 2;

};

function createCrate ( id ) {

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

function initRecords () {

    var currentRecordId = 0;
    for ( var crateId = 0; crateId < crates.length; crateId++ ) {

        for ( var pos = 0; pos < Constants.recordsPerCrate; pos++ ) {
            createRecord( currentRecordId, crateId, pos );
            currentRecordId++;
        }
    }
};

function createRecord ( id, crateId, pos ) {

    var record = new Record( id, crateId, pos );
    crates[ crateId ].add( record.mesh );
    records.push( record );

};

function getRecordMaterial ( src, hasSleeve ) {

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
            sleeve.src = Constants.sleeveMaskTexture;

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

        color: Constants.sleeveColor

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


function wheelDistance ( e ) {

    if ( !e ) e = event;
    var w = e.wheelDelta,
        d = e.detail;
    if ( d ) {

        if ( w ) return w / d / 40 * d > 0 ? 1 : -1; // Opera
        else return -d / 3; // Firefox;

    } else return w / 120; // IE/Safari/Chrome
};

function wheelDirection ( e ) {

    if ( !e ) e = event;
    return ( e.detail < 0 ) ? 1 : ( e.wheelDelta > 0 ) ? 1 : -1;

};

function coordsEqualsApprox ( coord1, coord2, range ) {

    return ( Math.abs( coord1.x - coord2.x ) <= range ) && ( Math.abs( coord1.y - coord2.y ) <= range );

};

function fadeOut ( element ) {

    if (element.style.opacity === 0) {

        element.style.display = 'none';

    } else {

        var transitionEvent = getTransitionEvent(element);

        if (transitionEvent) {

            element.addEventListener(transitionEvent, onFadeComplete);

            element.style.opacity = 0;

        }        
    }
};

function fadeIn ( element ) {

    if (element.style.opacity === '' || element.style.opacity === '1') {

        element.style.display = 'block';

    } else {
        
        var transitionEvent = getTransitionEvent(element);
        
        element.style.display = 'block';

        if (transitionEvent) {

            element.addEventListener(transitionEvent, onFadeComplete);

        }

        setTimeout(function () {
            element.style.opacity = 1;
        }, 15);
    }

};

function onFadeComplete( e , e2 ) {

    e.currentTarget.removeEventListener(e.type, onFadeComplete);

    if ( e.currentTarget.style.opacity === '0' ) {

        e.currentTarget.style.display = 'none';

    } else {

        e.currentTarget.style.display = 'block';

    }
}


function hideElement( element ) {

    element.style.opacity = 0;
    element.style.display = 'none';

}

function showElement( element ) {

    element.style.display = 'block';
    element.style.opacity = 1;

}

function getTransitionEvent () {

    var t,
        transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        };

    for(t in transitions) {

        if( document.body.style[t] !== undefined ) {

            return transitions[t];

        }
    }
}

function calculateCanvasSize () {

    canvasWidth = Constants.canvasWidth ? Constants.canvasWidth : Constants.elements.rootContainer.clientWidth;
    canvasHeight = Constants.canvasHeight ? Constants.canvasHeight : Constants.elements.rootContainer.clientHeight;

};

function setCanvasDimensions () {

    //Constants.elements.rootContainer.style.height     = canvasHeight + 'px';
    Constants.elements.canvasContainer.style.height = canvasHeight + 'px';
    Constants.elements.infoContainer.style.height = canvasHeight + 'px';
    Constants.elements.loadingContainer.style.height = canvasHeight + 'px';

    //Constants.elements.rootContainer.style.width     = canvasWidth + 'px';
    Constants.elements.canvasContainer.style.width = canvasWidth + 'px';
    Constants.elements.infoContainer.style.width = canvasWidth + 'px';
    Constants.elements.loadingContainer.style.width = canvasWidth + 'px';

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

    Constants.extend(params);

    // feature test
    if ( !Modernizr.webgl ) return;

    if ( window.devicePixelRatio !== undefined ) {

        dpr = window.devicePixelRatio;

    } else {

        dpr = 1;

    }

    if ( !Constants.elements.rootContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find root container element.' );
        return;

    }

    if ( !Constants.elements.canvasContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find canvas container element.' );
        return;

    }

    if ( !Constants.elements.loadingContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find loading container element.' );
        return;

    }

    if ( !Constants.elements.infoContainer ) {

        console.error( 'cratedigger.js - Init failed : can not find info container element.' );
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

    Constants.postprocessing = true;

};

exports.disablePostprocessing = function () {

    Constants.postprocessing = false;

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
exports.flipBackSelectedRecord = flipBackSelectedRecord;
exports.selectPrevRecord = selectPrevRecord;
exports.selectNextRecord = selectNextRecord;
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;

/*==================================
=            PUBLIC API            =
==================================*/

module.exports = exports;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICAgICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgLzo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgLzo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAvOjo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAvOjo6Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAvOjo6L35+XFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAvOjo6L19fXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgIC86OjovX19cXDo6OlxcICAgIFxcIC86OjovICAgIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAvOjo6OlxcICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXDo6Oi8gICAgLyBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAvOjo6Ojo6XFwgICBcXDo6OlxcICAgIFxcX18gICAgLzo6Ojo6OlxcICAgIFxcX1xcOjo6XFwgICBcXDo6OlxcICAgIFxcOi9fX19fLyAgIFxcOjo6XFxfX19fXFxcclxuICAgICAgICAgLzo6Oi9cXDo6OlxcICAgXFw6OjpcXF9fX19cXCBcXCAgLzo6Oi9cXDo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICAgIHwgICAgIHw6Ojp8ICAgIHxcclxuICAgICAgICAvOjo6LyAgXFw6OjpcXCAgIFxcOjo6fCAgICB8IFxcLzo6Oi8gIFxcOjo6XFxfX19fXFwgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFxfX198ICAgICB8Ojo6fF9fX198XHJcbiAgICAgICAgXFw6Oi8gICB8Ojo6OlxcICAvOjo6fF9fX198IC86OjovICAgIFxcOjovICAgIC8gIFxcOjo6XFwgICBcXDo6LyAgICAvICAgX1xcX19fLzo6Oi8gICAgL1xyXG4gICAgICAgICBcXC9fX19ffDo6Ojo6XFwvOjo6LyAgICAvXFwvOjo6LyAgICAvIFxcL19fX18vXFwgICBcXDo6OlxcICAgXFwvX19fXy86XFwgfDo6fCAvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6Ojo6Ojo6OjovICAgIC86Ojo6Oi8gICAgLyAgICAgIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICBcXDo6OlxcfDo6fC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fFxcOjo6Oi8gICAgL1xcOjo6Oi9fX19fLyAgICAgICAgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgIFxcOjo6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8IFxcOjovX19fXy8gIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAvOjo6LyAgICAvICAgXFw6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICB+fCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcLzo6Oi8gICAgLyAgICAgXFw6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgIHwgICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6Ojo6LyAgICAvICAgICAgIFxcOjo6Oi9fX19fL1xyXG4gICAgICAgICAgICAgICBcXDo6fCAgIHwgICAgICAgICAgIFxcOjo6XFxfX19fXFwgICAgICAgICBcXDo6OjovICAgIC8gICAgICAgICB8Ojp8ICAgIHxcclxuICAgICAgICAgICAgICAgIFxcOnwgICB8ICAgICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIHw6OnxfX19ffFxyXG4gICAgICAgICAgICAgICAgIFxcfF9fX3wgICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIH5+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9fICAgICAgICAgICAgIC5fX18uX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fXHJcbiAgICAgICBfX19fX19fX19fX19fX19fIF8vICB8XyAgX19fXyAgIF9ffCBfL3xfX3wgX19fXyAgIF9fX18gICBfX19fX19fX19fXyAgICAgICB8X198IF9fX19fX1xyXG4gICAgIF8vIF9fX1xcXyAgX18gXFxfXyAgXFxcXCAgIF9fXFwvIF9fIFxcIC8gX18gfCB8ICB8LyBfX19cXCAvIF9fX1xcXy8gX18gXFxfICBfXyBcXCAgICAgIHwgIHwvICBfX18vXHJcbiAgICAgXFwgIFxcX19ffCAgfCBcXC8vIF9fIFxcfCAgfCBcXCAgX19fLy8gL18vIHwgfCAgLyAvXy8gID4gL18vICA+ICBfX18vfCAgfCBcXC8gICAgICB8ICB8XFxfX18gXFxcclxuICAgICAgXFxfX18gID5fX3wgIChfX19fICAvX198ICBcXF9fXyAgPl9fX18gfCB8X19cXF9fXyAgL1xcX19fICAvIFxcX19fICA+X198ICAvXFwgL1xcX198ICAvX19fXyAgPlxyXG4gICAgICAgICAgXFwvICAgICAgICAgICBcXC8gICAgICAgICAgXFwvICAgICBcXC8gICAvX19fX18vL19fX19fLyAgICAgIFxcLyAgICAgIFxcLyBcXF9fX19fX3wgICAgXFwvXHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIGNyYXRlZGlnZ2VyLmpzIHYwLjAuMSAtIGJ5IHJpc3EgKFZhbGVudGluIExlZHJhcGllcikgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuICAgIFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKSxcclxuICAgIFN0YXRzID0gcmVxdWlyZSgnc3RhdHMtanMnKSxcclxuICAgIE1vZGVybml6ciA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydNb2Rlcm5penInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ01vZGVybml6ciddIDogbnVsbCksXHJcbiAgICBkYXQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snZGF0J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydkYXQnXSA6IG51bGwpLFxyXG5cclxuICAgIFJlY29yZCA9IHJlcXVpcmUoJy4vUmVjb3JkJyksXHJcbiAgICBDYW1lcmFNYW5hZ2VyID0gcmVxdWlyZSgnLi9DYW1lcmFNYW5hZ2VyJyksXHJcbiAgICBDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpO1xyXG5cclxuLyo9PT09PT09PT09ICBJbmplY3QgYWxsIGV4dGVybmFsIG1vZHVsZXMgdG8gVEhSRUUuanMgPT09PT09PT09PSovXHJcblxyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9TaGFkZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0ZYQUFTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3NlcicpKFRIUkVFKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBWQVJJQUJMRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgZXhwb3J0cyA9IHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgc3RhdHMsXHJcbiAgICBzY2VuZSxcclxuICAgIGNhbWVyYSxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgbGlnaHQsXHJcbiAgICBsZWZ0TGlnaHQsXHJcbiAgICByaWdodExpZ2h0LFxyXG4gICAgY29tcG9zZXIsXHJcbiAgICBGWEFBLFxyXG4gICAgZG9mLFxyXG4gICAgZ3VpLFxyXG4gICAgZGVwdGhUYXJnZXQsXHJcbiAgICBkZXB0aFNoYWRlcixcclxuICAgIGRlcHRoVW5pZm9ybXMsXHJcbiAgICBkZXB0aE1hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE9iamVjdHMgJiBkYXRhIGFycmF5cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY3JhdGVzID0gW10sXHJcbiAgICByZWNvcmRzID0gW10sXHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXSxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzIGNvbnRhaW5lcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXIsXHJcbiAgICBjcmF0ZXNDb250YWluZXIsXHJcbiAgICByZWNvcmRzQ29udGFpbmVyLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFN0YXRlcywgdXRpbCB2YXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGRwcixcclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0LFxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2UsXHJcbiAgICBpbmZvUGFuZWxTdGF0ZSA9IFwiY2xvc2VkXCIsXHJcbiAgICBpc1Njcm9sbGluZyA9IGZhbHNlLFxyXG4gICAgZG9SZW5kZXIgPSB0cnVlLFxyXG4gICAgbW91c2UgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHRhcmdldENhbWVyYVBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZFJlY29yZCA9IC0xLFxyXG4gICAgc2hvd25SZWNvcmQgPSAtMSxcclxuICAgIGxvYWRlZFJlY29yZHMgPSAwLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE1hdGVyaWFscyAgPT09PT09PT09PSovXHJcblxyXG4gICAgd29vZF9tYXRlcmlhbDtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQkFTRSBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSAoKSB7XHJcblxyXG4gICAgaWYgKCBkb1JlbmRlciApIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgcmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggQ29uc3RhbnRzLmRlYnVnICkge1xyXG5cclxuICAgICAgICAgICAgc3RhdHMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlciAoKSB7XHJcblxyXG4gICAgVFdFRU4udXBkYXRlKCk7XHJcbiAgICB1cGRhdGVTaG93blJlY29yZCgpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZSApIHtcclxuXHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnggPSAoIG1vdXNlLnggLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTsgLy8gaW52ZXJzZSBheGlzP1xyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy55ID0gKCBtb3VzZS55IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICs9IENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3VzZU1vdmVTcGVlZFkgKiAoIHRhcmdldENhbWVyYVBvcy54IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICk7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICs9IENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3VzZU1vdmVTcGVlZFogKiAoIHRhcmdldENhbWVyYVBvcy55IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIENhbWVyYU1hbmFnZXIubG9va0F0VGFyZ2V0KCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBkZXB0aE1hdGVyaWFsO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgZGVwdGhUYXJnZXQgKTtcclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuICAgICAgICBjb21wb3Nlci5yZW5kZXIoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBMb2FkaW5nIG1ldGhvZHNcclxuICovXHJcbmZ1bmN0aW9uIHVubG9hZFJlY29yZHMgKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gbnVsbDtcclxuICAgICAgICByZWNvcmRzWyBpIF0uc2V0VW5hY3RpdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDA7XHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXTtcclxuXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFJlY29yZHMgKCByZWNvcmRzRGF0YSwgc2h1ZmZsZUJlZm9yZUxvYWRpbmcsIGRvbmUgKSB7XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCggdHJ1ZSApO1xyXG5cclxuICAgIHNob3dMb2FkaW5nKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgaWYgKCBsb2FkZWRSZWNvcmRzID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHVubG9hZFJlY29yZHMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNodWZmbGVCZWZvcmVMb2FkaW5nICkge1xyXG5cclxuICAgICAgICAgICAgcmVjb3Jkc0RhdGEgPSBzaHVmZmxlKCByZWNvcmRzRGF0YSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoICYmIGkgPCByZWNvcmRzRGF0YS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gcmVjb3Jkc0RhdGFbIGkgXTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0ubWVzaC5tYXRlcmlhbC5tYXRlcmlhbHMgPSBnZXRSZWNvcmRNYXRlcmlhbCggcmVjb3Jkc0RhdGFbIGkgXS5jb3ZlciwgcmVjb3Jkc0RhdGFbIGkgXS5oYXNTbGVldmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aHkgPz9cclxuICAgICAgICAvLyBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGEubGVuZ3RoIDwgcmVjb3Jkcy5sZW5ndGggPyByZWNvcmRzRGF0YS5sZW5ndGggOiByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgcmVjb3Jkc0RhdGFMaXN0ID0gcmVjb3Jkc0RhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaGlkZUxvYWRpbmcoZG9uZSk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbkxvYWRpbmdFbmQoKTtcclxuXHJcbiAgICAgICAgfSwgMzAwMCApO1xyXG4gICAgfSk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZVJlY29yZHMgKCkge1xyXG5cclxuICAgIHZhciBzaHVmZmxlZFJlY29yZHMgPSByZWNvcmRzRGF0YUxpc3Q7XHJcbiAgICBzaHVmZmxlZFJlY29yZHMgPSBzaHVmZmxlKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuICAgIGxvYWRSZWNvcmRzKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBSRUNPUkRTIFNFTEVDVElPTiBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RSZWNvcmQgKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmbGlwU2VsZWN0ZWRSZWNvcmQgKCkge1xyXG5cclxuICAgIGlmICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApIHtcclxuXHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBDb25zdGFudHMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lciApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2hvd25SZWNvcmQgKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICsgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXNldFNob3duUmVjb3JkICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtZXJhTWFuYWdlci5yZXNldENhbWVyYSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0UHJldlJlY29yZCAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0TmV4dFJlY29yZCAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRBdmFpbGFibGVSZWNvcmQgKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBuYXZpZ2F0ZVJlY29yZHMgKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsUmVjb3JkcyAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG5cclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uUmlnaHRDbGlja0V2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93bkV2ZW50LCBmYWxzZSApOyBcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy51cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemUgKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemVFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlTW92ZUV2ZW50ICggZSApIHtcclxuXHJcbiAgICB2YXIgbV9wb3N4ID0gMCxcclxuICAgICAgICBtX3Bvc3kgPSAwLFxyXG4gICAgICAgIGVfcG9zeCA9IDAsXHJcbiAgICAgICAgZV9wb3N5ID0gMCxcclxuICAgICAgICBvYmogPSB0aGlzO1xyXG5cclxuICAgIC8vZ2V0IG1vdXNlIHBvc2l0aW9uIG9uIGRvY3VtZW50IGNyb3NzYnJvd3NlclxyXG4gICAgaWYgKCAhZSApIHtcclxuXHJcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBlLnBhZ2VYIHx8IGUucGFnZVkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUucGFnZVg7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5wYWdlWTtcclxuICAgIH0gZWxzZSBpZiAoIGUuY2xpZW50WCB8fCBlLmNsaWVudFkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIG1fcG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqLm9mZnNldFBhcmVudCApIHtcclxuXHJcbiAgICAgICAgZG8ge1xyXG5cclxuICAgICAgICAgICAgZV9wb3N4ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBlX3Bvc3kgKz0gb2JqLm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIG9iaiA9IG9iai5vZmZzZXRQYXJlbnQgKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdXNlIHBvc2l0aW9uIG1pbnVzIGVsbSBwb3NpdGlvbiBpcyBtb3VzZXBvc2l0aW9uIHJlbGF0aXZlIHRvIGVsZW1lbnQ6XHJcbiAgICBtb3VzZS54ID0gbV9wb3N4IC0gZV9wb3N4O1xyXG4gICAgbW91c2UueSA9IG1fcG9zeSAtIGVfcG9zeTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsRXZlbnQgKCBlICkge1xyXG5cclxuXHJcbiAgICBpZiAoIHdoZWVsRGlyZWN0aW9uKCBlICkgPCAwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudCAoIG1vdXNlRG93blBvcyApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvclBvcyA9IHtcclxuICAgICAgICAgICAgeDogKCAoICggbW91c2VEb3duUG9zLnggLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldExlZnQgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCApICkgKiAyIC0gMSApLFxyXG4gICAgICAgICAgICB5OiAoIC0oICggbW91c2VEb3duUG9zLnkgLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldFRvcCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodCApICkgKiAyICsgMSApLFxyXG4gICAgICAgICAgICB6OiAwLjVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIHZlY3RvclBvcy54LCB2ZWN0b3JQb3MueSwgdmVjdG9yUG9zLnogKTtcclxuICAgICAgICB2ZWN0b3IudW5wcm9qZWN0KCBjYW1lcmEgKTtcclxuICAgICAgICB2YXIgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlciggY2FtZXJhLnBvc2l0aW9uLCB2ZWN0b3Iuc3ViKCBjYW1lcmEucG9zaXRpb24gKS5ub3JtYWxpemUoKSApO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIGNyYXRlc0NvbnRhaW5lci5jaGlsZHJlbiwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBJZiBpbnRlcnNlY3Qgc29tZXRoaW5nXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpY2tlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3QgdmlzaWJsZSByZWNvcmQgaW50ZXJzZWN0ZWRcclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpbnRlcmNlcHQgYSBtZXNoIHdoaWNoIGlzIG5vdCBhIHJlY29yZCwgYnJlYWtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQpID09PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1sgaSBdLm9iamVjdC52aXNpYmxlICYmIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFJlY29yZCA9IHJlY29yZHNbIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgIGlmICggY2xpY2tlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09PSBjbGlja2VkUmVjb3JkLmlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSZWNvcmQoIGNsaWNrZWRSZWNvcmQuaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbGwgaW50ZXJzZWN0ZWQgcmVjb3JkcyBhcmUgbm90IHZpc2libGVzXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vIHJlY29yZCBoYXMgYmVlbiBpbnRlcnNlY3RlZFxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICggQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25DbGljayApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VEb3duRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5idXR0b24gIT09IDEgJiYgZS5idXR0b24gIT09IDIgKSB7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnlcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VVcEV2ZW50ICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUuYnV0dG9uICE9PSAxICYmIGUuYnV0dG9uICE9PSAyICkge1xyXG5cclxuICAgICAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG5cclxuICAgICAgICAvLyBUcmlnZ2VyIHNjZW5lIGNsaWNrIGV2ZW50IG9ubHkgaWYgbW91c2V1cCBldmVudCBpcyBub3QgYSBkcmFnIGVuZCBldmVudCAmIG5vdCBhIGNsaWNrIG9uIGEgbGlua1xyXG4gICAgICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBDb25zdGFudHMuc2NlbmUuZ3JhYlNlbnNpdGl2aXR5ICkgJiYgISggZS50YXJnZXQgJiYgZS50YXJnZXQuaGFzQXR0cmlidXRlKCdocmVmJykgKSApIHtcclxuXHJcbiAgICAgICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uUmlnaHRDbGlja0V2ZW50ICggZSApIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25LZXlEb3duRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSA0MCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XHJcblxyXG4gICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMjcgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemVFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIENhbWVyYU1hbmFnZXIudXBkYXRlQ2FtZXJhQXNwZWN0KCBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICAgIFVJIE1FVEhPRFMgICAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkaW5nICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlSW4oIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlT3V0KCBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lciApO1xyXG4gICAgc2V0VGltZW91dChkb25lLCAxMDAwKTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBJTklUSUFMSVNBVElPTiAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRTY2VuZSAoKSB7XHJcblxyXG4gICAgLy8gc2NlbmUsIHJlbmRlcmVyLCBjYW1lcmEsLi4uXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0gKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyLmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJjb250ZXh0XCI7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCBDb25zdGFudHMuYmFja2dyb3VuZENvbG9yLCAxICk7XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5pbml0KGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0KTtcclxuICAgIGNhbWVyYSA9IENhbWVyYU1hbmFnZXIuZ2V0Q2FtZXJhKCk7XHJcblxyXG4gICAgdmFyIHdvb2RfdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoIENvbnN0YW50cy5jcmF0ZVRleHR1cmUgKTtcclxuICAgIHdvb2RfdGV4dHVyZS5hbmlzb3Ryb3B5ID0gcmVuZGVyZXIuZ2V0TWF4QW5pc290cm9weSgpO1xyXG4gICAgd29vZF9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgbWFwOiB3b29kX3RleHR1cmVcclxuICAgIH0gKTtcclxuXHJcbiAgICByb290Q29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBjcmF0ZXNDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIHNjZW5lLmFkZCggcm9vdENvbnRhaW5lciApO1xyXG4gICAgcm9vdENvbnRhaW5lci5hZGQoIGNyYXRlc0NvbnRhaW5lciApO1xyXG5cclxuICAgIGluaXRDcmF0ZXMoKTtcclxuICAgIGluaXRSZWNvcmRzKCk7XHJcblxyXG4gICAgbGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDEuMSApO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KCAzMDAsIDgwLCAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxpZ2h0ICk7XHJcblxyXG4gICAgbGVmdExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBDb25zdGFudHMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIGxlZnRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsZWZ0TGlnaHQgKTtcclxuXHJcbiAgICByaWdodExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBDb25zdGFudHMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIHJpZ2h0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIC0xMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIHJpZ2h0TGlnaHQgKTtcclxuXHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcoKTtcclxuXHJcbiAgICBiaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgLy8gRE9NIHNldHVwXHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgaGlkZUVsZW1lbnQoQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLmRlYnVnICkge1xyXG5cclxuICAgICAgICBpbml0RGVidWcoKTtcclxuICAgICAgICBpbml0R1VJKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRQb3N0UHJvY2Vzc2luZyAoKSB7XHJcblxyXG4gICAgZGVwdGhTaGFkZXIgPSBUSFJFRS5TaGFkZXJMaWIuZGVwdGhSR0JBO1xyXG4gICAgZGVwdGhVbmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGRlcHRoU2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG4gICAgZGVwdGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBkZXB0aFNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGRlcHRoU2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3JtczogZGVwdGhVbmlmb3Jtc1xyXG4gICAgfSApO1xyXG4gICAgZGVwdGhNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk5vQmxlbmRpbmc7XHJcblxyXG4gICAgZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHtcclxuICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG4gICAgfSApO1xyXG5cclxuICAgIGNvbXBvc2VyID0gbmV3IFRIUkVFLkVmZmVjdENvbXBvc2VyKCByZW5kZXJlciApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggbmV3IFRIUkVFLlJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEgKSApO1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlcHRoIG9mIGZpZWxkIHNoYWRlciAgPT09PT09PT09PSovXHJcblxyXG4gICAgZG9mID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkRvRlNoYWRlciApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcbiAgICBkb2YudW5pZm9ybXMuem5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjsgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy56ZmFyLnZhbHVlID0gY2FtZXJhLmZhcjsgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgudmFsdWUgPSA1OyAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDsgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuICAgIGRvZi51bmlmb3Jtcy5mc3RvcC52YWx1ZSA9IDguMDsgLy9mLXN0b3AgdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMudmFsdWUgPSBmYWxzZTsgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcbiAgICBkb2YudW5pZm9ybXMubWFudWFsZG9mLnZhbHVlID0gdHJ1ZTsgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcbiAgICBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LnZhbHVlID0gMTE7IC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LnZhbHVlID0gODA7IC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZzdGFydC52YWx1ZSA9IDA7IC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZmRpc3QudmFsdWUgPSAxMDA7IC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLkNvQy52YWx1ZSA9IDAuMDM7IC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLnZhbHVlID0gZmFsc2U7IC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMudmFsdWUgPSB0cnVlOyAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLnNldCggMC4zNSwgMC4zNSApOyAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodCkgXHJcbiAgICBkb2YudW5pZm9ybXMubWF4Ymx1ci52YWx1ZSA9IENvbnN0YW50cy5ibHVyQW1vdW50OyAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudGhyZXNob2xkLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG4gICAgZG9mLnVuaWZvcm1zLmdhaW4udmFsdWUgPSAwOyAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5iaWFzLnZhbHVlID0gMDsgLy9ib2tlaCBlZGdlIGJpYXMgICAgICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZyaW5nZS52YWx1ZSA9IDA7IC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcbiAgICBGWEFBID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkZYQUFTaGFkZXIgKTtcclxuXHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEucmVuZGVyVG9TY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIGRvZiApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggRlhBQSApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXREZWJ1ZyAoKSB7XHJcblxyXG4gICAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbUVsZW1lbnQgKTtcclxuXHJcbiAgICB2YXIgZGVidWcgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMCwgMjAsIDIwLCAxLCAxLCAxICkgKTtcclxuICAgIGRlYnVnLnBvc2l0aW9uLnNldChcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi54LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24uelxyXG4gICAgKTtcclxuICAgIHNjZW5lLmFkZCggZGVidWcgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0R1VJICgpIHtcclxuXHJcbiAgICB2YXIgY2FtZXJhRm9sZGVyLFxyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLFxyXG4gICAgICAgIGRvZkZvbGRlcixcclxuICAgICAgICBfbGFzdDtcclxuXHJcbiAgICBndWkgPSBuZXcgZGF0LkdVSSgpO1xyXG4gICAgXHJcbiAgICBjYW1lcmFGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnQ2FtZXJhJyApO1xyXG4gICAgY2FtZXJhRm9jYWxMZW5ndGggPSBjYW1lcmFGb2xkZXIuYWRkKCBjYW1lcmEsICdmb2NhbExlbmd0aCcsIDI4LCAyMDAgKS5uYW1lKCAnRm9jYWwgTGVuZ3RoJyApO1xyXG4gICAgY2FtZXJhRm9jYWxMZW5ndGgub25DaGFuZ2UoIHVwZGF0ZUNhbWVyYSApO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuXHJcbiAgICAgICAgZG9mRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0RlcHRoIG9mIEZpZWxkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLCAndmFsdWUnLCAwLCAxMCApLm5hbWUoICdGb2NhbCBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnN0b3AsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ0YgU3RvcCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWF4Ymx1ciwgJ3ZhbHVlJywgMCwgMyApLm5hbWUoICdtYXggYmx1cicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnNob3dGb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdTaG93IEZvY2FsIFJhbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWFudWFsZG9mLCAndmFsdWUnICkubmFtZSggJ01hbnVhbCBEb0YnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBmYWxsb2ZmJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIGZhbGxvZmYnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5Db0MsICd2YWx1ZScsIDAsIDAuMSApLnN0ZXAoIDAuMDAxICkubmFtZSggJ2NpcmNsZSBvZiBjb25mdXNpb24nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLCAndmFsdWUnICkubmFtZSggJ1ZpZ25ldHRpbmcnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25vdXQsICd2YWx1ZScsIDAsIDIgKS5uYW1lKCAnb3V0ZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduaW4sICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ2lubmVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmZhZGUsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ2ZhZGUgYXQnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnQXV0b2ZvY3VzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3gnLCAwLCAxICkubmFtZSggJ2ZvY3VzIHgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneScsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnRocmVzaG9sZCwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAndGhyZXNob2xkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5nYWluLCAndmFsdWUnLCAwLCAxMDAgKS5uYW1lKCAnZ2FpbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmJpYXMsICd2YWx1ZScsIDAsIDQgKS5zdGVwKCAwLjAxICkubmFtZSggJ2JpYXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZyaW5nZSwgJ3ZhbHVlJywgMCwgNSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnZnJpbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubm9pc2UsICd2YWx1ZScgKS5uYW1lKCAnVXNlIE5vaXNlJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uYW1vdW50LCAndmFsdWUnLCAwLCAwLjAwMSApLnN0ZXAoIDAuMDAwMSApLm5hbWUoICdkaXRoZXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kZXB0aGJsdXIsICd2YWx1ZScgKS5uYW1lKCAnQmx1ciBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGJzaXplLCAndmFsdWUnLCAwLCA1ICkubmFtZSggJ2JsdXIgc2l6ZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3VpLmNsb3NlKCk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FtZXJhICgpIHtcclxuXHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRDcmF0ZXMgKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IENvbnN0YW50cy5uYkNyYXRlczsgY3JhdGVJZCsrICkge1xyXG4gICAgICAgIHZhciBjcmF0ZSA9IGNyZWF0ZUNyYXRlKCBjcmF0ZUlkICk7XHJcbiAgICAgICAgY3JhdGVzQ29udGFpbmVyLmFkZCggY3JhdGUgKTtcclxuICAgIH1cclxuICAgIGNyYXRlc0NvbnRhaW5lci5wb3NpdGlvbi56ID0gLSggMTEwIC0gKCAxMTAgKiBDb25zdGFudHMubmJDcmF0ZXMgKSApIC8gMjtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDcmF0ZSAoIGlkICkge1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuICAgIHZhciBib3hfYm90dG9tID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9ib3R0b20gKTtcclxuXHJcbiAgICB2YXIgYm94X2xlZnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfbGVmdC5wb3NpdGlvbi5zZXQoIDAsIDM1LCAtNTUgKTtcclxuICAgIGJveF9sZWZ0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9sZWZ0ICk7XHJcblxyXG4gICAgaWYgKCBpZCA9PT0gMCApIHtcclxuICAgICAgICB2YXIgYm94X3JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgICAgIGJveF9yaWdodC5wb3NpdGlvbi5zZXQoIDAsIDM1LCA1NSApO1xyXG4gICAgICAgIGJveF9yaWdodC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X3JpZ2h0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJveF9iYWNrID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggODAsIDEwLCAxMjAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2JhY2sucG9zaXRpb24uc2V0KCAtMTA1LCAzNSwgMCApO1xyXG4gICAgYm94X2JhY2sucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JhY2sgKTtcclxuXHJcbiAgICB2YXIgYm94X2Zyb250ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggNDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2Zyb250LnBvc2l0aW9uLnNldCggOTUsIDI1LCAwICk7XHJcbiAgICBib3hfZnJvbnQucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2Zyb250ICk7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdLnBvc2l0aW9uLnogPSAtMTEwICogaWQ7XHJcbiAgICByZXR1cm4gY3JhdGVzWyBpZCBdO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRSZWNvcmRzICgpIHtcclxuXHJcbiAgICB2YXIgY3VycmVudFJlY29yZElkID0gMDtcclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IGNyYXRlcy5sZW5ndGg7IGNyYXRlSWQrKyApIHtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHBvcyA9IDA7IHBvcyA8IENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGU7IHBvcysrICkge1xyXG4gICAgICAgICAgICBjcmVhdGVSZWNvcmQoIGN1cnJlbnRSZWNvcmRJZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZWNvcmRJZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY29yZCAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IG5ldyBSZWNvcmQoIGlkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgIGNyYXRlc1sgY3JhdGVJZCBdLmFkZCggcmVjb3JkLm1lc2ggKTtcclxuICAgIHJlY29yZHMucHVzaCggcmVjb3JkICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UmVjb3JkTWF0ZXJpYWwgKCBzcmMsIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nLnNyYyA9IHNyYyA/IHNyYyA6ICcnO1xyXG5cclxuICAgIHZhciBpbWdXaWR0aCA9IDQwMCxcclxuICAgICAgICBpbWdIZWlnaHQgPSA0MDAsXHJcbiAgICAgICAgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHJcbiAgICBtYXBDYW52YXMud2lkdGggPSBtYXBDYW52YXMuaGVpZ2h0ID0gNDAwO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoIG1hcENhbnZhcyApO1xyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xlZXZlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHNsZWV2ZS5zcmMgPSBDb25zdGFudHMuc2xlZXZlTWFza1RleHR1cmU7XHJcblxyXG4gICAgICAgICAgICBzbGVldmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMTMwLCAxMzAsIDEzNSwgMTM1ICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBzbGVldmUsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNsZWV2ZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuXHJcbiAgICAgICAgY29sb3I6IENvbnN0YW50cy5zbGVldmVDb2xvclxyXG5cclxuICAgIH0gKTtcclxuXHJcbiAgICB2YXIgbWF0ZXJpYWxzID0gW1xyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIC8vIHRleHR1cmVcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIG1hcDogdGV4dHVyZVxyXG4gICAgICAgIH0gKSxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbFxyXG4gICAgXTtcclxuICAgIHJldHVybiBtYXRlcmlhbHM7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFVUSUxTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gd2hlZWxEaXN0YW5jZSAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHZhciB3ID0gZS53aGVlbERlbHRhLFxyXG4gICAgICAgIGQgPSBlLmRldGFpbDtcclxuICAgIGlmICggZCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3ICkgcmV0dXJuIHcgLyBkIC8gNDAgKiBkID4gMCA/IDEgOiAtMTsgLy8gT3BlcmFcclxuICAgICAgICBlbHNlIHJldHVybiAtZCAvIDM7IC8vIEZpcmVmb3g7XHJcblxyXG4gICAgfSBlbHNlIHJldHVybiB3IC8gMTIwOyAvLyBJRS9TYWZhcmkvQ2hyb21lXHJcbn07XHJcblxyXG5mdW5jdGlvbiB3aGVlbERpcmVjdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHJldHVybiAoIGUuZGV0YWlsIDwgMCApID8gMSA6ICggZS53aGVlbERlbHRhID4gMCApID8gMSA6IC0xO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvb3Jkc0VxdWFsc0FwcHJveCAoIGNvb3JkMSwgY29vcmQyLCByYW5nZSApIHtcclxuXHJcbiAgICByZXR1cm4gKCBNYXRoLmFicyggY29vcmQxLnggLSBjb29yZDIueCApIDw9IHJhbmdlICkgJiYgKCBNYXRoLmFicyggY29vcmQxLnkgLSBjb29yZDIueSApIDw9IHJhbmdlICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmFkZU91dCAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gMCkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25FdmVudCA9IGdldFRyYW5zaXRpb25FdmVudChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmYWRlSW4gKCBlbGVtZW50ICkge1xyXG5cclxuICAgIGlmIChlbGVtZW50LnN0eWxlLm9wYWNpdHkgPT09ICcnIHx8IGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJzEnKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uRXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIG9uRmFkZUNvbXBsZXRlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICB9LCAxNSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25GYWRlQ29tcGxldGUoIGUgLCBlMiApIHtcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLnR5cGUsIG9uRmFkZUNvbXBsZXRlKTtcclxuXHJcbiAgICBpZiAoIGUuY3VycmVudFRhcmdldC5zdHlsZS5vcGFjaXR5ID09PSAnMCcgKSB7XHJcblxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoaWRlRWxlbWVudCggZWxlbWVudCApIHtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0VsZW1lbnQoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uRXZlbnQgKCkge1xyXG5cclxuICAgIHZhciB0LFxyXG4gICAgICAgIHRyYW5zaXRpb25zID0ge1xyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKSB7XHJcblxyXG4gICAgICAgIGlmKCBkb2N1bWVudC5ib2R5LnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlQ2FudmFzU2l6ZSAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBDb25zdGFudHMuY2FudmFzV2lkdGggPyBDb25zdGFudHMuY2FudmFzV2lkdGggOiBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IENvbnN0YW50cy5jYW52YXNIZWlnaHQgPyBDb25zdGFudHMuY2FudmFzSGVpZ2h0IDogQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldENhbnZhc0RpbWVuc2lvbnMgKCkge1xyXG5cclxuICAgIC8vQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuc3R5bGUuaGVpZ2h0ICAgICA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvL0NvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLnN0eWxlLndpZHRoICAgICA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyLnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoIHYgKSB7IC8vIEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAtIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlIFtyZXYuICMxXVxyXG5cclxuICAgIGZvciAoIHZhciBqLCB4LCBpID0gdi5sZW5ndGg7IGk7IGogPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSAqIGkgKSwgeCA9IHZbIC0taSBdLCB2WyBpIF0gPSB2WyBqIF0sIHZbIGogXSA9IHggKTtcclxuICAgIHJldHVybiB2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFWFBPUlRTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBNZXRob2RzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICggcGFyYW1zICkge1xyXG5cclxuICAgIENvbnN0YW50cy5leHRlbmQocGFyYW1zKTtcclxuXHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIGlmICggIU1vZGVybml6ci53ZWJnbCApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByb290IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoICFDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgbG9hZGluZyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoICFDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5kaXNhYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgZ2V0dGVycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmdldENhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFJlY29yZHNEYXRhTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc0RhdGFMaXN0O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0TG9hZGVkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gbG9hZGVkUmVjb3JkcztcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT0gIE1ldGhvZHMgYWNjZXNzb3JzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMubG9hZFJlY29yZHMgPSBsb2FkUmVjb3JkcztcclxuZXhwb3J0cy51bmxvYWRSZWNvcmRzID0gdW5sb2FkUmVjb3JkcztcclxuZXhwb3J0cy5yZXNldFNob3duUmVjb3JkID0gcmVzZXRTaG93blJlY29yZDtcclxuZXhwb3J0cy5zaHVmZmxlUmVjb3JkcyA9IHNodWZmbGVSZWNvcmRzO1xyXG5leHBvcnRzLmZsaXBTZWxlY3RlZFJlY29yZCA9IGZsaXBTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5mbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZmxpcEJhY2tTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3RQcmV2UmVjb3JkID0gc2VsZWN0UHJldlJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3ROZXh0UmVjb3JkID0gc2VsZWN0TmV4dFJlY29yZDtcclxuZXhwb3J0cy5zaG93TG9hZGluZyA9IHNob3dMb2FkaW5nO1xyXG5leHBvcnRzLmhpZGVMb2FkaW5nID0gaGlkZUxvYWRpbmc7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFBVQkxJQyBBUEkgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzOyJdfQ==
},{"./CameraManager":4,"./Constants":5,"./Record":6,"./threejs_modules/CopyShader":8,"./threejs_modules/DoFShader":9,"./threejs_modules/EffectComposer":10,"./threejs_modules/FXAAShader":11,"./threejs_modules/MaskPass":12,"./threejs_modules/RenderPass":13,"./threejs_modules/ShaderPass":14,"stats-js":2,"tween.js":3}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9zdGF0cy1qcy9idWlsZC9zdGF0cy5taW4uanMiLCJub2RlX21vZHVsZXMvdHdlZW4uanMvaW5kZXguanMiLCJzcmMvY3JhdGVkaWdnZXIvQ2FtZXJhTWFuYWdlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci9Db25zdGFudHMuanMiLCJzcmMvY3JhdGVkaWdnZXIvUmVjb3JkLmpzIiwic3JjL2NyYXRlZGlnZ2VyL2luZGV4LmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXIuanMiLCJzcmMvY3JhdGVkaWdnZXIvdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcy5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcy5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6M0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY3JhdGVkaWdnZXIgPSByZXF1aXJlKCcuL2NyYXRlZGlnZ2VyJyk7XHJcblxyXG52YXIgZGF0YSA9IEpTT04ucGFyc2UoJ1t7XCJ0aXRsZVwiOlwiU28gV2hhdFwiLFwiYXJ0aXN0XCI6XCJNaWxlcyBEYXZpc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzYzYmY1ZmU1ZjE1ZjY5YmZlYjA5NzEzOWZjMzRmM2Q3LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDFcIixcImlkXCI6XCJTT0JZQk5WMTQ2MDc3MDNBQ0FcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3RvbGVuIE1vbWVudHNcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0NOTVBIMTJCMEI4MDY0QUFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiVGhlbWUgZm9yIE1heGluZVwiLFwiYXJ0aXN0XCI6XCJXb29keSBTaGF3XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmI5MzdmMWUxZDU3Zjc1NDJhNjRjNzRiMTNjNDc5MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTUxTR1cxMzEzNDM4NDFBN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNb2FuaW5cXCcgTWFtYm9cIixcImFydGlzdFwiOlwiTWluZ3VzIEJpZyBCYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGNkMTU2NWNmM2RkNjYzZjdiNzQ5MmU0ZGEzNzg4NTUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPVlFMVlgxMzEzNDM4NkFGOVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTdW1tZXJ0aW1lXCIsXCJhcnRpc3RcIjpcIk9zY2FyIFBldGVyc29uXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZhY2RmNGE5NzVlZGY5NTU2MTgyZDdjNmEzMWU1OTYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1OVwiLFwiaWRcIjpcIlNPRk5XVFYxMzc3MTI3MzlCQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZWEgZm9yIFR3b1wiLFwiYXJ0aXN0XCI6XCJMZXN0ZXIgWW91bmdcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci84ZWZmYmQ4ZGM3YTk1ZjA2YzVhY2E4ZTZlY2YzYTc4ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk3XCIsXCJpZFwiOlwiU09BUEJNUTE0NEM0QTE4Q0Q0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpbmUgVXBcIixcImFydGlzdFwiOlwiTGVubmllIFRyaXN0YW5vXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMjNiMjc2NmMyNDU3YmU1MDJlM2I3OWYwODhjYjhiYTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQlBEUlExMzEzNDM5QkE1MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJIFJlbWVtYmVyIENsaWZmb3JkXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lZmE3MDZlMWQzZmMxMzYzYzdhNWYwN2Y5MDg4YTZjYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09DUlVXTzEyQUIwMTg0ODQ2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbCBUaGUgVGhpbmdzIFlvdSBBcmVcIixcImFydGlzdFwiOlwiT3NjYXIgUGV0dGlmb3JkXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOGNlOWZjZjBlYzMzM2IwNmMzOGFkOTk5YzhkY2NiMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQkhLVkcxMzE1Q0Q0MUM0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFYXN5IExpdmluZ1wiLFwiYXJ0aXN0XCI6XCJDbGlmZm9yZCBCcm93blwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2U4NDYzNjMwODEzYjZjMjU1MzZjZGJlZjAzMTM0YWUzLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0VWTFJaMTMxMzQzQTI4RDZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2hpcGxhc2hcIixcImFydGlzdFwiOlwiRG9uIEVsbGlzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzRkODdjZjA2MzE5MzdiZGI3OTY3NTQwMjA1NGQzYjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3M1wiLFwiaWRcIjpcIlNPT1ZaSFIxMkE4QzEzMkZBOFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCdW1waW5cXCcgT24gU3Vuc2V0XCIsXCJhcnRpc3RcIjpcIldlcyBNb250Z29tZXJ5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzVmNDM1MjNmY2QwMWIzMDQ2NDg2Njc0ZTA5ZDM3MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk2NlwiLFwiaWRcIjpcIlNPS1hIWlQxNDc4QjYzODg3QVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGb290cHJpbnRzXCIsXCJhcnRpc3RcIjpcIldheW5lIFNob3J0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80MGM0NzY4ZDZlZTI1ZDUzNTZiNWVmYmQwZjY5YzMyNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09aTEZKQTE0NEQxM0QwNzY4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgVHJhaW5cIixcImFydGlzdFwiOlwiSm9obiBDb2x0cmFuZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzFkMDE5ZDgxZjk5YzUyMTMzOTg3OTFjOGEwZDZhMmQxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTdcIixcImlkXCI6XCJTT0FDWVNTMTQ1RkVCQUQ4QzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWxsIEJsdWVzXCIsXCJhcnRpc3RcIjpcIlJvbiBDYXJ0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yZDIwYWU0YzQxMjdjZTZiOGFhNThmMDhiZWNjOWMwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAxXCIsXCJpZFwiOlwiU09CSlFCTTE0NEU1Q0E0RDg5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IEZ1bm55IFZhbGVudGluZVwiLFwiYXJ0aXN0XCI6XCJDaGV0IEJha2VyXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDJmOGI0ZDE1YTYyNDMzMzkwM2M1N2I3ZDRhYTVhYjUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NFwiLFwiaWRcIjpcIlNPQUFRSVoxNDRDNDg2QTkzMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMb3ZlIGZvciBTYWxlXCIsXCJhcnRpc3RcIjpcIkNhbm5vbmJhbGwgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iN2RmNDQwZjJlNzQ2NDc2ODEwYjhmYzM2ZTE5NzBkZi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09QSlFFVTE0NEFENzA1NTg0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhZHkgU2luZ3MgdGhlIEJsdWVzXCIsXCJhcnRpc3RcIjpcIkhlcmJpZSBOaWNob2xzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMTdlYTRhMDUyNjA5NmU1YThmYjIwNzE3Mzg2ZTk5ZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQU9ZVEgxMzc2Rjc4QTRCQVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDbGVvcGF0cmFcXCdzIERyZWFtXCIsXCJhcnRpc3RcIjpcIkJ1ZCBQb3dlbGxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMTNlYTBjZWNjM2U4YjM3MGJkMjFiNDQ1Y2U1YjhjNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09LUEFUVDEyQTZENEY0MTJCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJlcm5pZVxcJ3MgVHVuZVwiLFwiYXJ0aXN0XCI6XCJHZXJyeSBNdWxsaWdhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzdiY2U1YjIxYWQyOWRmMTMwMzY4MTIxYTVjNGJjZjM2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTBcIixcImlkXCI6XCJTT0JKSE9TMTM3NjE4QkU0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGV0IFRoZSBHb29kIFRpbWVzIFJvbGxcIixcImFydGlzdFwiOlwiTGVzdGVyIEJvd2llXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDhlMThkNmU0Zjg0OTkwMDNlZDhjOWViYmM3Y2U3M2EvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQlJQU0QxMzEzNDM4NkIxNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHcm9vdmV5YXJkXCIsXCJhcnRpc3RcIjpcIkhhcm9sZCBMYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMGNhYzYwM2FjNzgyODk4M2VkYjYzYzU5ZjRiMmZmOTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSEFOUkYxMzExQUZFQ0EyRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGYXIgV2VzdFwiLFwiYXJ0aXN0XCI6XCJUaW0gSGFnYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjFkOTY0NTkwNGVhMzQ0MWZlNWM3ZDAyNWM0NTBkMGMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPR0ZZRUwxMkE1OEE3QzBCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNeSBJZGVhbFwiLFwiYXJ0aXN0XCI6XCJLZW5ueSBEb3JoYW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yMjhiMDUzMmU4ZWY4NGE2Y2ZhNDliZWJmZWMyNDI3OC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09GUUtMSDEzMTM0MzlDOUQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlllYXJuaW5cXCdcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0VJR1RNMTJBNkQ0RjkyRTFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTW9hbmluXFwnXCIsXCJhcnRpc3RcIjpcIkFydCBCbGFrZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zZTg0OThkNDliYzNkMDMwYTM2NzMwYWFkYTNjNTUzYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09CV05SWDE0NUZENkI1NUUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpa2UgU29tZW9uZSBpbiBMb3ZlXCIsXCJhcnRpc3RcIjpcIkFydCBGYXJtZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9jODVhZWQwYzRjYjk2YmNjNjc1M2Q2MTQwZGU5Y2Y3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA0XCIsXCJpZFwiOlwiU09CRkdLUDEyQTZENEY4ODM0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNoZWVzZSBDYWtlXCIsXCJhcnRpc3RcIjpcIkRleHRlciBHb3Jkb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NjczNTRhYjA3ZDFmZGNjNjkyNGJiY2UwYTQzMWU2MC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09LUFJYRTEzNzcwNDJCMDdFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNlIFBpZWNlXCIsXCJhcnRpc3RcIjpcIkJpbGwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xMmE0NzJjMTQyMTA1ZTA0OTZlODQyZTQ4NmIyNTJjYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09BWUJIRzE0NEM3NEM1QzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFpblxcJ3QgSXQgRnVua3kgTm93XCIsXCJhcnRpc3RcIjpcIkdyYW50IEdyZWVuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGZlMmIyNGIwNzU0MzVmNjI5MDdkMzYzN2NkODEyYjQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3MFwiLFwiaWRcIjpcIlNPQkFHSlExMzE2NzcxNDc0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJEcml2YVxcJyBNYW5cIixcImFydGlzdFwiOlwiTWF4IFJvYWNoXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvN2FlZTUyZmJmMTVhNmI5YTAzNGEzYTkxNWZiZTBkNjAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMVwiLFwiaWRcIjpcIlNPRVJOSFAxMzc2Nzk0NkNGRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0IEFyZSBZb3UgRG9pbmcgVGhlIFJlc3QgT2YgWW91ciBMaWZlP1wiLFwiYXJ0aXN0XCI6XCJNaWx0IEphY2tzb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMTEzM2U2NWViN2NiZWU5ZTVlMzJkOGYzMWY1MDQ3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTczXCIsXCJpZFwiOlwiU09IWFdXTjEzNzc3NTU3NzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBHaXJsIEZyb20gSXBhbmVtYVwiLFwiYXJ0aXN0XCI6XCJTdGFuIEdldHpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wYjA3MmVkYzE2OTdiNTU4NzIwYzY0MDk0ODM3MWQ3YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09DTkJUTjE0NzhDNDYwM0VEXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsb25lIFRvZ2V0aGVyXCIsXCJhcnRpc3RcIjpcIktlbm55IERvcmhhbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzIyOGIwNTMyZThlZjg0YTZjZmE0OWJlYmZlYzI0Mjc4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTlcIixcImlkXCI6XCJTT0FCUk9JMTJBQjAxN0MzRTVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU2VwdGVtYmVyIEluIFRoZSBSYWluXCIsXCJhcnRpc3RcIjpcIlJveSBIYXJncm92ZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk4YTQ4MmQ4Y2NjYTdiMjIxNTJkNTcxNGMyMmFhNDY0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTRcIixcImlkXCI6XCJTT1BXVElMMTJBOEMxM0JCREZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTG92ZSBUaGVtZSBmcm9tIFxcJ1NwYXJ0YWN1c1xcJ1wiLFwiYXJ0aXN0XCI6XCJZdXNlZiBMYXRlZWZcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iYjUwNTE2YjUwN2FjODc0ODJhNDQ2Y2U0NGIwNjI5ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYxXCIsXCJpZFwiOlwiU09JRkJBUTEzMTFBRkUzMTQ4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbW9zdCBMaWtlIEJlaW5nIGluIExvdmVcIixcImFydGlzdFwiOlwiUmVkIEdhcmxhbmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iM2NmNjk5NWRlMjRkNDNjNzE3ZTQxMzAwZTc4ZjYwNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09BVEhEWjEyQUIwMTg1QjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5pZ2h0IEFuZCBEYXlcIixcImFydGlzdFwiOlwiSm9lIFBhc3NcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xN2VjZDE1YzI0MWJmMzc4ZTY4NGQ1NTNiNGU3YjhiYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA1XCIsXCJpZFwiOlwiU09CWU9BQzEzRTZDQjAxOTI2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNvdXMgTGUgQ2llbCBEZSBQYXJpc1wiLFwiYXJ0aXN0XCI6XCJUb290cyBUaGllbGVtYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODFmODczNDU3YTM0NmIyNmI4NWE4MTIyNTQxYThmMDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTVVXUVMxMkE4QzEzQjJEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTY3JhbWJsZWQgRWdnc1wiLFwiYXJ0aXN0XCI6XCJOYXQgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMjE1NGViZDc1YzI0NzA5NWZlZjUwMGM2ZDVmMTYzYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYwXCIsXCJpZFwiOlwiU09ESkFZWjEzMTFBRkRBMTNGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhbnNhbmFcXCdzIFByaWVzdGVzc1wiLFwiYXJ0aXN0XCI6XCJEb25hbGQgQnlyZFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2MwMGJhNWM0N2Y1ODI1MmU0ZWY4MTI3OWU2ZmViMWEwLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NzNcIixcImlkXCI6XCJTT0RVSklSMTJBNkQ0Rjg1QTBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgTGl0dGxlIEJyb3duIEJvb2tcIixcImFydGlzdFwiOlwiRHVrZSBFbGxpbmd0b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzA1ZWRkMzg2ODQxNzdlMzU1NmIxY2RiZGU0NzY0YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYzXCIsXCJpZFwiOlwiU09HVFRIVjEzNkYyNDA1MkRFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBhdHJpY2lhXCIsXCJhcnRpc3RcIjpcIkFydCBQZXBwZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OTI4YTIyMTEwMDBhODViYmUwMmNkMjk5YjVkNjI5MS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09OVlVQRzEzNzcyMjc0Mzc1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTaWRld2luZGVyXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zOGViZWRkN2M0YTc3YzM1MDJiMmNjNWQ4MGRiMzEwOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09HVFhFWDEyQjBCODA2ODY2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIllvdSBEb25cXCd0IEtub3cgV2hhdCBMb3ZlIElzXCIsXCJhcnRpc3RcIjpcIlNvbm55IFJvbGxpbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OWQ3MjUzN2Y5MTZhOTBjMjdlNjI5YTg3MzA4YmM1My80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU2XCIsXCJpZFwiOlwiU09FRFROTjEzNzcyQTM5RDk0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgTW9ua1wiLFwiYXJ0aXN0XCI6XCJUaGVsb25pb3VzIE1vbmtcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMjM3MjdkYjY4ZjRlZGJiNzhlYjExODA4ZmQ5NTU3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09BVFVDRTE0NEFEMEU4OUQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhcyBWZWdhcyBUYW5nb1wiLFwiYXJ0aXN0XCI6XCJHaWwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zMTZmMDkxMWE1NjA2MDY3OGMyMjQxMjAzODdjZDdhOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTY0XCIsXCJpZFwiOlwiU09GRE9DWTEzNzc1QzM2MTA5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNhbmR1XCIsXCJhcnRpc3RcIjpcIkNsaWZmb3JkIEJyb3duXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYWNkNjFjNDJlMjhkZjdmYmQzMzdmZmQzZTYzODM5MDgvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQUFDRUYxMzE1MkE3MUU5RFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9XScpO1xyXG52YXIgZGF0YTIgPSBKU09OLnBhcnNlKCdbe1widGl0bGVcIjpcIllvdSBHb3QgTWVcIixcImFydGlzdFwiOlwiVGhlIFJvb3RzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODA3NjhlMGM3ZjI2NjJkNzQyNzM0MDRmODc5NjUwYmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPSkFOQk8xNDRCQTA4RUM2MFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0XFwncyBHb2xkZW5cIixcImFydGlzdFwiOlwiSnVyYXNzaWMgNVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2M0MWM2YzM3Njc3MDI1M2Y4ODA1ZjU0MTAzMDg1NjBjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT01ZVUJUMTQ0QzI4NzdEODhcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiRmF6ZXJzXCIsXCJhcnRpc3RcIjpcIktpbmcgR2VlZG9yYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OThkMTlhN2JkOGVmY2FiZmUxOWE5Y2ZmMjAwMzZjNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAzXCIsXCJpZFwiOlwiU09DVEZMRTEzNzY4NkQ0NEQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNoZnV6elwiLFwiYXJ0aXN0XCI6XCJLTURcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mYjM0ZDAzYTQ1MThmMjkyMGFiYjNjOWYxNDk2NjNjMS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09SSkVHRTEzNzE5QjhDMzU4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5vbmUgU2hhbGwgUGFzc1wiLFwiYXJ0aXN0XCI6XCJBZXNvcCBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZmQwMTMwYmI0NzhlZDdmZmY2Y2E4Y2MyODY5M2FlZjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPS0pJWlQxMzExQUZFN0RBRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNQ1xcJ3MgQWN0IExpa2UgVGhleSBEb25cXCd0IEtub3dcIixcImFydGlzdFwiOlwiS1JTLU9uZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT1JJTkFOMTMxMUFGRDg4Q0JcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSXRcXCdzIFRyaWNreVwiLFwiYXJ0aXN0XCI6XCJSdW4tRC5NLkMuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjczODk0NmM1YzQ4NzgwYTA2MDg4NDI0NDdjYzBiNDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4NlwiLFwiaWRcIjpcIlNPREpUUVgxNDRCRDk4NkZENlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHZXQgQnlcIixcImFydGlzdFwiOlwiVGFsaWIgS3dlbGlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mODFlYzY4ZDM3MWM2YzhjNmIzNDk5ZDVkODkzNDRmMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09FR09ZTzEzNzMwREFERTQyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkEgTGl0dGxlIFNvdWxcIixcImFydGlzdFwiOlwiUGV0ZSBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOWIxY2Y4ZGUxZjkzMDg4NTMxZTA1ZjZkMzY3NzE0ZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPQ0VST0sxMkE2RDRGQTVGQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgU2hvdyBHb2VzIE9uXCIsXCJhcnRpc3RcIjpcIkx1cGUgRmlhc2NvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNGYxZTA5Nzg2MTVmZmE1ZmQ3NDMzZDdjM2E3MmQwZDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQ01QWUExMkM1NjQxM0I1RlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXYXZpblxcJyBGbGFnXCIsXCJhcnRpc3RcIjpcIktcXCduYWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzIyMWU4MmU0OWM2NTdmZjJkZGY0MmFiMzAwMzgwMDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPVEJJQ04xMzc1OTI5NTQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJZb3UgR290cyBUbyBDaGlsbFwiLFwiYXJ0aXN0XCI6XCJFUE1EXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzFjMjI1Y2E5YWNjYjBjMTNmYjk3ZjY4NGI0NDkzN2YvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSE5YRFExNDE5MTdFM0U4OFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFdmVyeXRoaW5nIENoYW5nZXNcIixcImFydGlzdFwiOlwiQWNleWFsb25lXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDUyODFkZWE2ZWJjMTUwY2M4NDUyNDJlZjA2Zjg2NzUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPRFlVUVgxMzEzNDNBNTZCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDLlIuRS5BLk0uXCIsXCJhcnRpc3RcIjpcIld1LVRhbmcgQ2xhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2Y2NjhiMTc5MzY2YmIzZWQ2MjNkZDhiY2NkMmYzOGViLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTNcIixcImlkXCI6XCJTT0hZSklaMTQ2MDM3OTYxQTlcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3dlZXRlc3QgR2lybCAoRG9sbGFyIEJpbGwpXCIsXCJhcnRpc3RcIjpcIld5Y2xlZiBKZWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjk4NmIyZjFkM2ZhNTBhNWE4YTk0MDJjZDI3M2FmMGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPRFVBTEkxMzEzNDM4QjUzRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCcmVhdGhlIEFuZCBTdG9wXCIsXCJhcnRpc3RcIjpcIlEtVGlwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzI0MzE1ODQ2NTM5YWU5YTQzMDYzOGJkNzg1MzhmMmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPRVVWRUgxMkIwQjgwODZGNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNcy4gSmFja3NvblwiLFwiYXJ0aXN0XCI6XCJPdXRLYXN0XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjUzMzE2OTkzYTc5ZjkzNmRjZGVjNzU3M2UyNjI1NmYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPU1JEUFMxNDRCMjhFQ0VCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDaGlsZHJlblxcJ3MgU3RvcnlcIixcImFydGlzdFwiOlwiU2xpY2sgUmlja1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzVlZjg1YTczOGQ2ZmQzMjEyMGQwZTJiNWNiYzAyMjJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5ODhcIixcImlkXCI6XCJTT0RRSE9MMTQ0QkQ5NEM0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUGFpZCBJbiBGdWxsXCIsXCJhcnRpc3RcIjpcIkVyaWMgQi4gJiBSYWtpbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzliYWRmMGU1NGRmZjlkZTY5MjExYTc1MTc5NzUwZDg4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0JUWUZGMTQ2MDA5RDIzMTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2F0Y2ggT3V0IE5vd1wiLFwiYXJ0aXN0XCI6XCJUaGUgQmVhdG51dHNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci81ODc3NThhNWI1NWJkNGMwN2VkMmIyMjZiYzM1MmZhMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09OSkJPSTEzMTVDRDQ4OUVDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNoYWRvd2JveGluXFwnIChBbGJ1bSBWZXJzaW9uIChFeHBsaWNpdCkpXCIsXCJhcnRpc3RcIjpcIkdaQVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQ4YTllMzFmZjMzYmEzZjc1NTAxZGQ3YTM2NmI5Y2QxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0NNU1ZCMTJCMEI4MDgyMzBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTHVjaGluaSBBa2EgVGhpcyBJcyBJdFwiLFwiYXJ0aXN0XCI6XCJDYW1wIExvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjIyNDRmYmNmMzg0MWYwY2E5Y2U3Y2QzMTY2ZTVjZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5N1wiLFwiaWRcIjpcIlNPQ0xTQUQxMzEzNDM5OTk0N1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJVa25vd2hvd3dlZHVcIixcImFydGlzdFwiOlwiQmFoYW1hZGlhXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzE0ZDE4MTBjZGU5ZGZjOTQwMWY4ZTg5Y2QyMTg1MmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPS0lMQVQxMkE2RDRGN0ZDN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXb25cXCd0IERvXCIsXCJhcnRpc3RcIjpcIkogRGlsbGFcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wODhmMTYzMDg3ZDdhZjcyODgxZGI1NzRlYmE0MDY3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09HSEFSSzEyQTU4QTdEMTI4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNyYXp5XCIsXCJhcnRpc3RcIjpcIkduYXJscyBCYXJrbGV5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZjOWFiYjM5NzJkZWU3YjZiOGI2MjRiZWIwOGI2N2MvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNlwiLFwiaWRcIjpcIlNPQktNS1AxNDUwOUE3RjM2RVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGdWxsIENsaXBcIixcImFydGlzdFwiOlwiR2FuZyBTdGFyclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzE2OWY5OTRkN2FiMmE4ZDg2OGNkZTc3ZmQ1NjZjYmJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0FLQVhHMTQ1NkIwN0I5REFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQ29hc3RpblxcJyBmZWF0LiBLLiBGbGF5XCIsXCJhcnRpc3RcIjpcIlppb24gSVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzAzZWExYzQ2NTViNDRjNTg2ZTkwZGQ0ZDVmOWUxYWFjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDlcIixcImlkXCI6XCJTT1ZYWllZMTJBQjAxODREQTRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiT25lXCIsXCJhcnRpc3RcIjpcIkdob3N0ZmFjZSBLaWxsYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zYTVkYTZiNTM1ZjVmNzMwN2NiYTYyZDQyMDExY2I1Zi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09QRERCSzEzMTJBOEE4RkQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkhpcCBIb3BcIixcImFydGlzdFwiOlwiTW9zIERlZlwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzg5ZTI4YTBhOTNlZmY5ZGM1NzQ0NzY3MTBiNWMwOWUyLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0dXR1NKMTJBRjcyQThBQzJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgUGhpbG9zb3BoeVwiLFwiYXJ0aXN0XCI6XCJCb29naWUgRG93biBQcm9kdWN0aW9uc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT0RMVkVUMTJBNThBNzdBMzFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV29yc3QgQ29tZXMgVG8gV29yc3RcIixcImFydGlzdFwiOlwiRGlsYXRlZCBQZW9wbGVzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmVmMjJiODhkNzRjOWZjNzlhMDkyMWQ1ZjQ3OTUxOGYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPREVLUUsxMzE2NzcxNDZDNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJZiBZb3UgTXVzdFwiLFwiYXJ0aXN0XCI6XCJEZWwgdGhlIEZ1bmt5IEhvbW9zYXBpZW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kZjFiMGEyOGVlNjVlZmM1NGE1OTYwOTkxYTk2Yjg3Mi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09SRUdRRjEyQjBCODA2NThFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldoZW4gSSBCIE9uIFRoYSBNaWNcIixcImFydGlzdFwiOlwiUmFraW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80ZGRjZmE1ZTY5YTFiNzlhY2JlMjBmNGNlMjgyNDc1Yy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09PQ01TRjEzNkNBMkU5QkMxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkx5cmljYWwgU3dvcmRzXCIsXCJhcnRpc3RcIjpcIlJhcyBLYXNzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjI0ZmU3M2ZmYTM0YjlmOTk3YmE0YTI2MzFjMDMzNGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPREVYR08xMkE4QzEzQzAxRFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTaGltbXkgU2hpbW15IFlhXCIsXCJhcnRpc3RcIjpcIk9sXFwnIERpcnR5IEJhc3RhcmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83ODYzODhkMzY4OTAwZjY2ZjA1YmQzODMxYmRhNGZmOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09ZVk5YTjE0NEIyNkI3MUEyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTZWVkICgyLjApXCIsXCJhcnRpc3RcIjpcIlRoZSBSb290c1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQxMWZmZDg5MTFmMWZjMDVjMjA1ZTg2NTA5ZjZlY2ExLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0NaWlVVMTQ0RjUwMEYxNkZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSWNlIENyZWFtXCIsXCJhcnRpc3RcIjpcIlJhZWt3b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NWM5Zjg0YjE4OWMyYmMzMTA2NDdlNjFiN2E2ZDVlOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09XVFFGWTEzNUMzOTVFOThDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk1pbGsgVGhlIENvd1wiLFwiYXJ0aXN0XCI6XCJDYXBwYWRvbm5hXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNTk1M2I0NWQ2NzE2ZmNiM2IyZmQyMjIwNzJhYzQwMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPQ0VHQ0YxMzExQUZFNUQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJSdW5uaW5cXCdcIixcImFydGlzdFwiOlwiVGhlIFBoYXJjeWRlXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzFkZTdjYTFhZWEwNjNhODdkY2EwODkwN2Q3ZDlkMTEvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxM1wiLFwiaWRcIjpcIlNPTEZZQUQxMzdBRDc2MzNCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgQ2hvaWNlIElzIFlvdXJzXCIsXCJhcnRpc3RcIjpcIkJsYWNrIFNoZWVwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDhhYzRmYWU1NTlmYjAwNWRkZjdmMGVkNWFkYmYyZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5MVwiLFwiaWRcIjpcIlNPRVZFUFkxMkE2MzEwRUFEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZW5uZXNzZWVcIixcImFydGlzdFwiOlwiQXJyZXN0ZWQgRGV2ZWxvcG1lbnRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yYzcwMzllNjE4OGJlNDRhODYwMGE4Zjg3ZWRiNWVjNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkyXCIsXCJpZFwiOlwiU09JWEFZWDEyQThDMTM5MDMyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlN1Z2FyIEhpbGxcIixcImFydGlzdFwiOlwiQVpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iMmVhYzEyMzVjNWVjNjc2MTJkMmZhMGNjZTNjNzkwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09FQ0pYVjEzNkE1QjVFQjVFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxvdW5naW5cXCdcIixcImFydGlzdFwiOlwiR3VydVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzlhZjA0NzE3MWM1MTRkN2Q1NThiZTRkMmViMGE2MzdkLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDhcIixcImlkXCI6XCJTT0hMQ0NTMTMxMkE4QUQyQzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGEgUmh1bWJhXCIsXCJhcnRpc3RcIjpcIkJvYmJ5IERpZ2l0YWxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzk4YTExYzQzNGNhNzZiNTU1NTNlYWExNzIyYTRhZC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09GWE5FSjEyQjBCODBCRDM1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk4uWS4gU3RhdGUgT2YgTWluZFwiLFwiYXJ0aXN0XCI6XCJOYXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lN2Y1YWNkZmJjMWM0OWJjNDUyMDkzOGI0ZDc3NWVjNi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk0XCIsXCJpZFwiOlwiU09GUUtRTzEzMTJGRTAwNjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkF3YXJkIFRvdXJcIixcImFydGlzdFwiOlwiQSBUcmliZSBDYWxsZWQgUXVlc3RcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYWNiNTc2OTFmOTc0NTZlNjU5NGQ4ZTk5MWJiODFiYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkzXCIsXCJpZFwiOlwiU09ER1FCRjE0NEJEOEY0RkQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IERlZmluaXRpb24gT2YgQSBCb29tYmFzdGljIEphenogU3R5bGVcIixcImFydGlzdFwiOlwiRHJlYW0gV2FycmlvcnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xZjliZmE0Yzc2NjVlMDdmYzdkZmM3YWI0ZTU5ZWM0OS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09FSEhaRTE0NEU2MDRDMjlCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlJlYWR5IG9yIE5vdFwiLFwiYXJ0aXN0XCI6XCJGdWdlZXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wNGE1NTI2YjdiOTRjNmUyZDYxN2FkZTc2MmRkZjVkYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk2XCIsXCJpZFwiOlwiU09DR1FBSjEzNjA3N0U4OTQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX1dJyk7XHJcblxyXG52YXIgYm90dG9tQmFyICBcdFx0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90dG9tLWJhcicpLFxyXG5cdGJ1dHRvblByZXYgXHRcdD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1wcmV2JyksXHJcblx0YnV0dG9uU2hvdyBcdFx0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXNob3cnKSxcclxuXHRidXR0b25OZXh0IFx0XHQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tbmV4dCcpLFxyXG5cdHRpdGxlQ29udGFpbmVyICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnKSxcclxuXHRhcnRpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JhdGVkaWdnZXItcmVjb3JkLWFydGlzdCcpLFxyXG5cdGNvdmVyQ29udGFpbmVyICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmF0ZWRpZ2dlci1yZWNvcmQtY292ZXInKTtcclxuXHJcbmNyYXRlZGlnZ2VyLmluaXQoe1xyXG5cclxuXHRkZWJ1ZzogdHJ1ZSxcclxuXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHJvb3RDb250YWluZXIgICAgIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyYXRlZGlnZ2VyJyksXHJcbiAgICAgICAgY2FudmFzQ29udGFpbmVyICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JhdGVkaWdnZXItY2FudmFzJyksXHJcbiAgICAgICAgbG9hZGluZ0NvbnRhaW5lciAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JhdGVkaWdnZXItbG9hZGluZycpLFxyXG4gICAgICAgIGluZm9Db250YWluZXIgICAgIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyYXRlZGlnZ2VyLWluZm8nKVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkluZm9QYW5lbE9wZW5lZDogZnVuY3Rpb24oKSB7XHJcbiAgICBcdGJvdHRvbUJhci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcclxuICAgIFx0ZmlsbEluZm9QYW5lbChjcmF0ZWRpZ2dlci5nZXRTZWxlY3RlZFJlY29yZCgpKTtcclxuICAgIH0sXHJcblxyXG5cdG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbigpIHtcclxuXHRcdGJvdHRvbUJhci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuY3JhdGVkaWdnZXIubG9hZFJlY29yZHMoZGF0YSwgdHJ1ZSwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdGJpbmRFdmVudHMoKTtcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuXHJcblx0YnV0dG9uUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRjcmF0ZWRpZ2dlci5zZWxlY3RQcmV2UmVjb3JkKCk7XHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRidXR0b25TaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdGlmIChjcmF0ZWRpZ2dlci5nZXRTZWxlY3RlZFJlY29yZCgpKSB7XHJcblxyXG5cdFx0XHRjcmF0ZWRpZ2dlci5mbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Y3JhdGVkaWdnZXIuc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0ICAgIHJldHVybiBmYWxzZTtcclxuXHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRidXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdGNyYXRlZGlnZ2VyLnNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHR9LCBmYWxzZSk7XHJcblx0XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmaWxsSW5mb1BhbmVsICggcmVjb3JkICkge1xyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEudGl0bGUgKSB7XHJcblxyXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmlubmVySFRNTCA9IHJlY29yZC5kYXRhLnRpdGxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmFydGlzdCApIHtcclxuXHJcbiAgICAgICAgYXJ0aXN0Q29udGFpbmVyLmlubmVySFRNTCA9IHJlY29yZC5kYXRhLmFydGlzdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS5jb3ZlciApIHtcclxuXHJcbiAgICAgICAgY292ZXJDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcmVjb3JkLmRhdGEuY292ZXIgKyAnKSc7XHJcblxyXG4gICAgfVxyXG59OyIsIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG52YXIgU3RhdHM9ZnVuY3Rpb24oKXt2YXIgbD1EYXRlLm5vdygpLG09bCxnPTAsbj1JbmZpbml0eSxvPTAsaD0wLHA9SW5maW5pdHkscT0wLHI9MCxzPTAsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2YuaWQ9XCJzdGF0c1wiO2YuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKTt0KCsrcyUyKX0sITEpO2Yuc3R5bGUuY3NzVGV4dD1cIndpZHRoOjgwcHg7b3BhY2l0eTowLjk7Y3Vyc29yOnBvaW50ZXJcIjt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuaWQ9XCJmcHNcIjthLnN0eWxlLmNzc1RleHQ9XCJwYWRkaW5nOjAgMCAzcHggM3B4O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDJcIjtmLmFwcGVuZENoaWxkKGEpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5pZD1cImZwc1RleHRcIjtpLnN0eWxlLmNzc1RleHQ9XCJjb2xvcjojMGZmO2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxNXB4XCI7XG5pLmlubmVySFRNTD1cIkZQU1wiO2EuYXBwZW5kQ2hpbGQoaSk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLmlkPVwiZnBzR3JhcGhcIjtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo3NHB4O2hlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzBmZlwiO2ZvcihhLmFwcGVuZENoaWxkKGMpOzc0PmMuY2hpbGRyZW4ubGVuZ3RoOyl7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7ai5zdHlsZS5jc3NUZXh0PVwid2lkdGg6MXB4O2hlaWdodDozMHB4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMTEzXCI7Yy5hcHBlbmRDaGlsZChqKX12YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuaWQ9XCJtc1wiO2Quc3R5bGUuY3NzVGV4dD1cInBhZGRpbmc6MCAwIDNweCAzcHg7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzAyMDtkaXNwbGF5Om5vbmVcIjtmLmFwcGVuZENoaWxkKGQpO3ZhciBrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5rLmlkPVwibXNUZXh0XCI7ay5zdHlsZS5jc3NUZXh0PVwiY29sb3I6IzBmMDtmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6MTVweFwiO2suaW5uZXJIVE1MPVwiTVNcIjtkLmFwcGVuZENoaWxkKGspO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1cIm1zR3JhcGhcIjtlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo3NHB4O2hlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzBmMFwiO2ZvcihkLmFwcGVuZENoaWxkKGUpOzc0PmUuY2hpbGRyZW4ubGVuZ3RoOylqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGouc3R5bGUuY3NzVGV4dD1cIndpZHRoOjFweDtoZWlnaHQ6MzBweDtmbG9hdDpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzEzMVwiLGUuYXBwZW5kQ2hpbGQoaik7dmFyIHQ9ZnVuY3Rpb24oYil7cz1iO3N3aXRjaChzKXtjYXNlIDA6YS5zdHlsZS5kaXNwbGF5PVxuXCJibG9ja1wiO2Quc3R5bGUuZGlzcGxheT1cIm5vbmVcIjticmVhaztjYXNlIDE6YS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJ9fTtyZXR1cm57UkVWSVNJT046MTIsZG9tRWxlbWVudDpmLHNldE1vZGU6dCxiZWdpbjpmdW5jdGlvbigpe2w9RGF0ZS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7dmFyIGI9RGF0ZS5ub3coKTtnPWItbDtuPU1hdGgubWluKG4sZyk7bz1NYXRoLm1heChvLGcpO2sudGV4dENvbnRlbnQ9ZytcIiBNUyAoXCIrbitcIi1cIitvK1wiKVwiO3ZhciBhPU1hdGgubWluKDMwLDMwLTMwKihnLzIwMCkpO2UuYXBwZW5kQ2hpbGQoZS5maXJzdENoaWxkKS5zdHlsZS5oZWlnaHQ9YStcInB4XCI7cisrO2I+bSsxRTMmJihoPU1hdGgucm91bmQoMUUzKnIvKGItbSkpLHA9TWF0aC5taW4ocCxoKSxxPU1hdGgubWF4KHEsaCksaS50ZXh0Q29udGVudD1oK1wiIEZQUyAoXCIrcCtcIi1cIitxK1wiKVwiLGE9TWF0aC5taW4oMzAsMzAtMzAqKGgvMTAwKSksYy5hcHBlbmRDaGlsZChjLmZpcnN0Q2hpbGQpLnN0eWxlLmhlaWdodD1cbmErXCJweFwiLG09YixyPTApO3JldHVybiBifSx1cGRhdGU6ZnVuY3Rpb24oKXtsPXRoaXMuZW5kKCl9fX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1TdGF0cyk7XG4iLCIvKipcbiAqIFR3ZWVuLmpzIC0gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc29sZS90d2Vlbi5qc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc29sZS90d2Vlbi5qcy9ncmFwaHMvY29udHJpYnV0b3JzIGZvciB0aGUgZnVsbCBsaXN0IG9mIGNvbnRyaWJ1dG9ycy5cbiAqIFRoYW5rIHlvdSBhbGwsIHlvdSdyZSBhd2Vzb21lIVxuICovXG5cbi8vIERhdGUubm93IHNoaW0gZm9yIChhaGVtKSBJbnRlcm5ldCBFeHBsbyhkfHIpZXJcbmlmICggRGF0ZS5ub3cgPT09IHVuZGVmaW5lZCApIHtcblxuXHREYXRlLm5vdyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcblxuXHR9O1xuXG59XG5cbnZhciBUV0VFTiA9IFRXRUVOIHx8ICggZnVuY3Rpb24gKCkge1xuXG5cdHZhciBfdHdlZW5zID0gW107XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAnMTQnLFxuXG5cdFx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBfdHdlZW5zO1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRfdHdlZW5zID0gW107XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAoIHR3ZWVuICkge1xuXG5cdFx0XHRfdHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiAoIHR3ZWVuICkge1xuXG5cdFx0XHR2YXIgaSA9IF90d2VlbnMuaW5kZXhPZiggdHdlZW4gKTtcblxuXHRcdFx0aWYgKCBpICE9PSAtMSApIHtcblxuXHRcdFx0XHRfdHdlZW5zLnNwbGljZSggaSwgMSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHRcdGlmICggX3R3ZWVucy5sZW5ndGggPT09IDAgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0dGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCkgKTtcblxuXHRcdFx0d2hpbGUgKCBpIDwgX3R3ZWVucy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYgKCBfdHdlZW5zWyBpIF0udXBkYXRlKCB0aW1lICkgKSB7XG5cblx0XHRcdFx0XHRpKys7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdF90d2VlbnMuc3BsaWNlKCBpLCAxICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fVxuXHR9O1xuXG59ICkoKTtcblxuVFdFRU4uVHdlZW4gPSBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuXHR2YXIgX29iamVjdCA9IG9iamVjdDtcblx0dmFyIF92YWx1ZXNTdGFydCA9IHt9O1xuXHR2YXIgX3ZhbHVlc0VuZCA9IHt9O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHZhciBfZHVyYXRpb24gPSAxMDAwO1xuXHR2YXIgX3JlcGVhdCA9IDA7XG5cdHZhciBfeW95byA9IGZhbHNlO1xuXHR2YXIgX2lzUGxheWluZyA9IGZhbHNlO1xuXHR2YXIgX3JldmVyc2VkID0gZmFsc2U7XG5cdHZhciBfZGVsYXlUaW1lID0gMDtcblx0dmFyIF9zdGFydFRpbWUgPSBudWxsO1xuXHR2YXIgX2Vhc2luZ0Z1bmN0aW9uID0gVFdFRU4uRWFzaW5nLkxpbmVhci5Ob25lO1xuXHR2YXIgX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IFRXRUVOLkludGVycG9sYXRpb24uTGluZWFyO1xuXHR2YXIgX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cdHZhciBfb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25Db21wbGV0ZUNhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cblx0Ly8gU2V0IGFsbCBzdGFydGluZyB2YWx1ZXMgcHJlc2VudCBvbiB0aGUgdGFyZ2V0IG9iamVjdFxuXHRmb3IgKCB2YXIgZmllbGQgaW4gb2JqZWN0ICkge1xuXG5cdFx0X3ZhbHVlc1N0YXJ0WyBmaWVsZCBdID0gcGFyc2VGbG9hdChvYmplY3RbZmllbGRdLCAxMCk7XG5cblx0fVxuXG5cdHRoaXMudG8gPSBmdW5jdGlvbiAoIHByb3BlcnRpZXMsIGR1cmF0aW9uICkge1xuXG5cdFx0aWYgKCBkdXJhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRfZHVyYXRpb24gPSBkdXJhdGlvbjtcblxuXHRcdH1cblxuXHRcdF92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCB0aW1lICkge1xuXG5cdFx0VFdFRU4uYWRkKCB0aGlzICk7XG5cblx0XHRfaXNQbGF5aW5nID0gdHJ1ZTtcblxuXHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0X3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCkgKTtcblx0XHRfc3RhcnRUaW1lICs9IF9kZWxheVRpbWU7XG5cblx0XHRmb3IgKCB2YXIgcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCApIHtcblxuXHRcdFx0Ly8gY2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gaW5zdGFuY2VvZiBBcnJheSApIHtcblxuXHRcdFx0XHRpZiAoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0ubGVuZ3RoID09PSAwICkge1xuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxuXHRcdFx0XHRfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdID0gWyBfb2JqZWN0WyBwcm9wZXJ0eSBdIF0uY29uY2F0KCBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdICk7XG5cblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdID0gX29iamVjdFsgcHJvcGVydHkgXTtcblxuXHRcdFx0aWYoICggX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIGluc3RhbmNlb2YgQXJyYXkgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3Ncblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICggIV9pc1BsYXlpbmcgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRUV0VFTi5yZW1vdmUoIHRoaXMgKTtcblx0XHRfaXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRpZiAoIF9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0X29uU3RvcENhbGxiYWNrLmNhbGwoIF9vYmplY3QgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcENoYWluZWRUd2VlbnMgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKCB2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKysgKSB7XG5cblx0XHRcdF9jaGFpbmVkVHdlZW5zWyBpIF0uc3RvcCgpO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0dGhpcy5kZWxheSA9IGZ1bmN0aW9uICggYW1vdW50ICkge1xuXG5cdFx0X2RlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMucmVwZWF0ID0gZnVuY3Rpb24gKCB0aW1lcyApIHtcblxuXHRcdF9yZXBlYXQgPSB0aW1lcztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMueW95byA9IGZ1bmN0aW9uKCB5b3lvICkge1xuXG5cdFx0X3lveW8gPSB5b3lvO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblxuXHR0aGlzLmVhc2luZyA9IGZ1bmN0aW9uICggZWFzaW5nICkge1xuXG5cdFx0X2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5pbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gKCBpbnRlcnBvbGF0aW9uICkge1xuXG5cdFx0X2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLmNoYWluID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0X2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RhcnQgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblVwZGF0ZSA9IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cblx0XHRfb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25TdG9wID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vblN0b3BDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cblx0XHRpZiAoIHRpbWUgPCBfc3RhcnRUaW1lICkge1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdH1cblxuXHRcdGlmICggX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSApIHtcblxuXHRcdFx0aWYgKCBfb25TdGFydENhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRcdF9vblN0YXJ0Q2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cblx0XHR9XG5cblx0XHR2YXIgZWxhcHNlZCA9ICggdGltZSAtIF9zdGFydFRpbWUgKSAvIF9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuXHRcdHZhciB2YWx1ZSA9IF9lYXNpbmdGdW5jdGlvbiggZWxhcHNlZCApO1xuXG5cdFx0Zm9yICggcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCApIHtcblxuXHRcdFx0dmFyIHN0YXJ0ID0gX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIHx8IDA7XG5cdFx0XHR2YXIgZW5kID0gX3ZhbHVlc0VuZFsgcHJvcGVydHkgXTtcblxuXHRcdFx0aWYgKCBlbmQgaW5zdGFuY2VvZiBBcnJheSApIHtcblxuXHRcdFx0XHRfb2JqZWN0WyBwcm9wZXJ0eSBdID0gX2ludGVycG9sYXRpb25GdW5jdGlvbiggZW5kLCB2YWx1ZSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcblx0XHRcdFx0aWYgKCB0eXBlb2YoZW5kKSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRlbmQgPSBzdGFydCArIHBhcnNlRmxvYXQoZW5kLCAxMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBwcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cblx0XHRcdFx0aWYgKCB0eXBlb2YoZW5kKSA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0XHRfb2JqZWN0WyBwcm9wZXJ0eSBdID0gc3RhcnQgKyAoIGVuZCAtIHN0YXJ0ICkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIF9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRfb25VcGRhdGVDYWxsYmFjay5jYWxsKCBfb2JqZWN0LCB2YWx1ZSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBlbGFwc2VkID09IDEgKSB7XG5cblx0XHRcdGlmICggX3JlcGVhdCA+IDAgKSB7XG5cblx0XHRcdFx0aWYoIGlzRmluaXRlKCBfcmVwZWF0ICkgKSB7XG5cdFx0XHRcdFx0X3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yKCBwcm9wZXJ0eSBpbiBfdmFsdWVzU3RhcnRSZXBlYXQgKSB7XG5cblx0XHRcdFx0XHRpZiAoIHR5cGVvZiggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdICsgcGFyc2VGbG9hdChfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdLCAxMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKF95b3lvKSB7XG5cdFx0XHRcdFx0XHR2YXIgdG1wID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdO1xuXHRcdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc0VuZFsgcHJvcGVydHkgXTtcblx0XHRcdFx0XHRcdF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRfcmV2ZXJzZWQgPSAhX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X3N0YXJ0VGltZSA9IHRpbWUgKyBfZGVsYXlUaW1lO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKysgKSB7XG5cblx0XHRcdFx0XHRfY2hhaW5lZFR3ZWVuc1sgaSBdLnN0YXJ0KCB0aW1lICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fTtcblxufTtcblxuXG5UV0VFTi5FYXNpbmcgPSB7XG5cblx0TGluZWFyOiB7XG5cblx0XHROb25lOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogKCAyIC0gayApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGs7XG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoIC0tayAqICggayAtIDIgKSAtIDEgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGsgKiBrO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiBrICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhcnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gKCAtLWsgKiBrICogayAqIGsgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcblx0XHRcdHJldHVybiAtIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiBrICogayAtIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqIGsgKiBrICogayArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFNpbnVzb2lkYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoIGsgKiBNYXRoLlBJIC8gMiApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zaW4oIGsgKiBNYXRoLlBJIC8gMiApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAwLjUgKiAoIDEgLSBNYXRoLmNvcyggTWF0aC5QSSAqIGsgKSApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KCAxMDI0LCBrIC0gMSApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coIDIsIC0gMTAgKiBrICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogTWF0aC5wb3coIDEwMjQsIGsgLSAxICk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAtIE1hdGgucG93KCAyLCAtIDEwICogKCBrIC0gMSApICkgKyAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDaXJjdWxhcjoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLnNxcnQoIDEgLSBrICogayApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KCAxIC0gKCAtLWsgKiBrICkgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxKSByZXR1cm4gLSAwLjUgKiAoIE1hdGguc3FydCggMSAtIGsgKiBrKSAtIDEpO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggTWF0aC5zcXJ0KCAxIC0gKCBrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRyZXR1cm4gLSAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRyZXR1cm4gKCBhICogTWF0aC5wb3coIDIsIC0gMTAgKiBrKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKyAxICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gLSAwLjUgKiAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICk7XG5cdFx0XHRyZXR1cm4gYSAqIE1hdGgucG93KCAyLCAtMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICogMC41ICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblx0XHRcdHJldHVybiBrICogayAqICggKCBzICsgMSApICogayAtIHMgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoICggcyArIDEgKSAqIGsgKyBzICkgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiAoIGsgKiBrICogKCAoIHMgKyAxICkgKiBrIC0gcyApICk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqICggKCBzICsgMSApICogayArIHMgKSArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJvdW5jZToge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCggMSAtIGsgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrIDwgKCAxIC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblxuXHRcdFx0fSBlbHNlIGlmICggayA8ICggMiAvIDIuNzUgKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcblxuXHRcdFx0fSBlbHNlIGlmICggayA8ICggMi41IC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrIDwgMC41ICkgcmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuSW4oIGsgKiAyICkgKiAwLjU7XG5cdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoIGsgKiAyIC0gMSApICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICggdiwgayApIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxLCBmID0gbSAqIGssIGkgPSBNYXRoLmZsb29yKCBmICksIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XG5cblx0XHRpZiAoIGsgPCAwICkgcmV0dXJuIGZuKCB2WyAwIF0sIHZbIDEgXSwgZiApO1xuXHRcdGlmICggayA+IDEgKSByZXR1cm4gZm4oIHZbIG0gXSwgdlsgbSAtIDEgXSwgbSAtIGYgKTtcblxuXHRcdHJldHVybiBmbiggdlsgaSBdLCB2WyBpICsgMSA+IG0gPyBtIDogaSArIDEgXSwgZiAtIGkgKTtcblxuXHR9LFxuXG5cdEJlemllcjogZnVuY3Rpb24gKCB2LCBrICkge1xuXG5cdFx0dmFyIGIgPSAwLCBuID0gdi5sZW5ndGggLSAxLCBwdyA9IE1hdGgucG93LCBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluLCBpO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPD0gbjsgaSsrICkge1xuXHRcdFx0YiArPSBwdyggMSAtIGssIG4gLSBpICkgKiBwdyggaywgaSApICogdlsgaSBdICogYm4oIG4sIGkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICggdiwgayApIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxLCBmID0gbSAqIGssIGkgPSBNYXRoLmZsb29yKCBmICksIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xuXG5cdFx0aWYgKCB2WyAwIF0gPT09IHZbIG0gXSApIHtcblxuXHRcdFx0aWYgKCBrIDwgMCApIGkgPSBNYXRoLmZsb29yKCBmID0gbSAqICggMSArIGsgKSApO1xuXG5cdFx0XHRyZXR1cm4gZm4oIHZbICggaSAtIDEgKyBtICkgJSBtIF0sIHZbIGkgXSwgdlsgKCBpICsgMSApICUgbSBdLCB2WyAoIGkgKyAyICkgJSBtIF0sIGYgLSBpICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoIGsgPCAwICkgcmV0dXJuIHZbIDAgXSAtICggZm4oIHZbIDAgXSwgdlsgMCBdLCB2WyAxIF0sIHZbIDEgXSwgLWYgKSAtIHZbIDAgXSApO1xuXHRcdFx0aWYgKCBrID4gMSApIHJldHVybiB2WyBtIF0gLSAoIGZuKCB2WyBtIF0sIHZbIG0gXSwgdlsgbSAtIDEgXSwgdlsgbSAtIDEgXSwgZiAtIG0gKSAtIHZbIG0gXSApO1xuXG5cdFx0XHRyZXR1cm4gZm4oIHZbIGkgPyBpIC0gMSA6IDAgXSwgdlsgaSBdLCB2WyBtIDwgaSArIDEgPyBtIDogaSArIDEgXSwgdlsgbSA8IGkgKyAyID8gbSA6IGkgKyAyIF0sIGYgLSBpICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRVdGlsczoge1xuXG5cdFx0TGluZWFyOiBmdW5jdGlvbiAoIHAwLCBwMSwgdCApIHtcblxuXHRcdFx0cmV0dXJuICggcDEgLSBwMCApICogdCArIHAwO1xuXG5cdFx0fSxcblxuXHRcdEJlcm5zdGVpbjogZnVuY3Rpb24gKCBuICwgaSApIHtcblxuXHRcdFx0dmFyIGZjID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XG5cdFx0XHRyZXR1cm4gZmMoIG4gKSAvIGZjKCBpICkgLyBmYyggbiAtIGkgKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6ICggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgYSA9IFsgMSBdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCBuICkge1xuXG5cdFx0XHRcdHZhciBzID0gMSwgaTtcblx0XHRcdFx0aWYgKCBhWyBuIF0gKSByZXR1cm4gYVsgbiBdO1xuXHRcdFx0XHRmb3IgKCBpID0gbjsgaSA+IDE7IGktLSApIHMgKj0gaTtcblx0XHRcdFx0cmV0dXJuIGFbIG4gXSA9IHM7XG5cblx0XHRcdH07XG5cblx0XHR9ICkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uICggcDAsIHAxLCBwMiwgcDMsIHQgKSB7XG5cblx0XHRcdHZhciB2MCA9ICggcDIgLSBwMCApICogMC41LCB2MSA9ICggcDMgLSBwMSApICogMC41LCB0MiA9IHQgKiB0LCB0MyA9IHQgKiB0Mjtcblx0XHRcdHJldHVybiAoIDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEgKSAqIHQzICsgKCAtIDMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxICkgKiB0MiArIHYwICogdCArIHAxO1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxubW9kdWxlLmV4cG9ydHM9VFdFRU47IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcblx0VFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG5cclxuXHRDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpO1xyXG5cclxudmFyIGNhbWVyYSxcclxuXHR0YXJnZXQsXHJcbiAgICBjYW1lcmFUd2VlbixcclxuICAgIHRhcmdldFR3ZWVuO1xyXG5cclxuZnVuY3Rpb24gaW5pdChyYXRpbykge1xyXG5cclxuXHRjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDQ1LCByYXRpbywgMC4xLCAyMDAwMCApO1xyXG4gICAgY2FtZXJhLmZvY2FsTGVuZ3RoID0gNDU7XHJcbiAgICBjYW1lcmEuZnJhbWVTaXplID0gMzI7XHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcblxyXG4gICAgdGFyZ2V0ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBjYW1lcmEubG9va0F0KCB0YXJnZXQucG9zaXRpb24gKTtcclxuXHJcbiAgICBjYW1lcmFUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG4gICAgdGFyZ2V0VHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvY3VzUmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcbiAgICBcclxuICAgIGNhbWVyYVR3ZWVuLnN0b3AoKTtcclxuICAgIHRhcmdldFR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuXHQgICAgLnRvKCB7XHJcblx0ICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG5cdCAgICAgICAgeTogNTAgKyBDb25zdGFudHMuc2NlbmUucmVjb3JkU2hvd25ZLFxyXG5cdCAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG5cdCAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG5cdCAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuXHRjYW1lcmFUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuXHQgICAgLnRvKCB7XHJcblx0ICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuXHQgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcblx0ICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56ICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24uelxyXG5cdCAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG5cdCAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6b29tSW5SZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuICAgIFxyXG4gICAgY2FtZXJhVHdlZW4uc3RvcCgpO1xyXG4gICAgdGFyZ2V0VHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkRmxpcHBlZFkgKyA1MCxcclxuICAgICAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuXHJcbiAgICBjYW1lcmFUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogcmVjb3JkWFBvcyArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnggKyA4MCxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSAtIDUwLFxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gem9vbU91dFJlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgdGFyZ2V0VHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IDc1LFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBjYW1lcmFUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogcmVjb3JkWFBvcyArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldENhbWVyYSgpIHtcclxuICAgIFxyXG4gICAgY2FtZXJhVHdlZW4uc3RvcCgpO1xyXG4gICAgdGFyZ2V0VHdlZW4uc3RvcCgpO1xyXG5cclxuXHR0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHo6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBjYW1lcmFUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHo6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FtZXJhQXNwZWN0KHJhdGlvKSB7XHJcblx0Y2FtZXJhLmFzcGVjdCA9IHJhdGlvO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9va0F0VGFyZ2V0KCkge1xyXG5cdGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpbml0OiBpbml0LFxyXG5cdGZvY3VzUmVjb3JkOiBmb2N1c1JlY29yZCxcclxuXHR6b29tSW5SZWNvcmQ6IHpvb21JblJlY29yZCxcclxuXHR6b29tT3V0UmVjb3JkOiB6b29tT3V0UmVjb3JkLFxyXG5cdHJlc2V0Q2FtZXJhOiByZXNldENhbWVyYSxcclxuXHR1cGRhdGVDYW1lcmFBc3BlY3Q6IHVwZGF0ZUNhbWVyYUFzcGVjdCxcclxuXHRsb29rQXRUYXJnZXQ6IGxvb2tBdFRhcmdldCxcclxuXHRcclxuXHRnZXRDYW1lcmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGNhbWVyYTtcclxuXHR9LFxyXG5cdGdldFRhcmdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amNtRjBaV1JwWjJkbGNpOURZVzFsY21GTllXNWhaMlZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUoyWVhJZ1ZFaFNSVVVnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUhkcGJtUnZkMXNuVkVoU1JVVW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKMVJJVWtWRkoxMGdPaUJ1ZFd4c0tTeGNjbHh1WEhSVVYwVkZUaUE5SUhKbGNYVnBjbVVvSjNSM1pXVnVMbXB6Snlrc1hISmNibHh5WEc1Y2RFTnZibk4wWVc1MGN5QTlJSEpsY1hWcGNtVW9KeTR2UTI5dWMzUmhiblJ6SnlrN1hISmNibHh5WEc1MllYSWdZMkZ0WlhKaExGeHlYRzVjZEhSaGNtZGxkQ3hjY2x4dUlDQWdJR05oYldWeVlWUjNaV1Z1TEZ4eVhHNGdJQ0FnZEdGeVoyVjBWSGRsWlc0N1hISmNibHh5WEc1bWRXNWpkR2x2YmlCcGJtbDBLSEpoZEdsdktTQjdYSEpjYmx4eVhHNWNkR05oYldWeVlTQTlJRzVsZHlCVVNGSkZSUzVRWlhKemNHVmpkR2wyWlVOaGJXVnlZU2dnTkRVc0lISmhkR2x2TENBd0xqRXNJREl3TURBd0lDazdYSEpjYmlBZ0lDQmpZVzFsY21FdVptOWpZV3hNWlc1bmRHZ2dQU0EwTlR0Y2NseHVJQ0FnSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnUFNBek1qdGNjbHh1SUNBZ0lHTmhiV1Z5WVM1elpYUk1aVzV6S0NCallXMWxjbUV1Wm05allXeE1aVzVuZEdnc0lHTmhiV1Z5WVM1bWNtRnRaVk5wZW1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0IwWVhKblpYUWdQU0J1WlhjZ1ZFaFNSVVV1VDJKcVpXTjBNMFFvS1R0Y2NseHVJQ0FnSUdOaGJXVnlZUzVzYjI5clFYUW9JSFJoY21kbGRDNXdiM05wZEdsdmJpQXBPMXh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZVlIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDazdYSEpjYmlBZ0lDQjBZWEpuWlhSVWQyVmxiaUE5SUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdwTzF4eVhHNWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWm05amRYTlNaV052Y21Rb2NtVmpiM0prV0ZCdmN5d2djbVZqYjNKa1FXSnpiMngxZEdWUWIzTXBJSHRjY2x4dUlDQWdJRnh5WEc0Z0lDQWdZMkZ0WlhKaFZIZGxaVzR1YzNSdmNDZ3BPMXh5WEc0Z0lDQWdkR0Z5WjJWMFZIZGxaVzR1YzNSdmNDZ3BPMXh5WEc1Y2NseHVJQ0FnSUhSaGNtZGxkRlIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBZWEpuWlhRdWNHOXphWFJwYjI0Z0tWeHlYRzVjZENBZ0lDQXVkRzhvSUh0Y2NseHVYSFFnSUNBZ0lDQWdJSGc2SUhKbFkyOXlaRmhRYjNNc1hISmNibHgwSUNBZ0lDQWdJQ0I1T2lBMU1DQXJJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21SVGFHOTNibGtzWEhKY2JseDBJQ0FnSUNBZ0lDQjZPaUJ5WldOdmNtUkJZbk52YkhWMFpWQnZjeTU2WEhKY2JseDBJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZOYjNabFZHbHRaU0FwWEhKY2JseDBJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzVjZEdOaGJXVnlZVlIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQmpZVzFsY21FdWNHOXphWFJwYjI0Z0tWeHlYRzVjZENBZ0lDQXVkRzhvSUh0Y2NseHVYSFFnSUNBZ0lDQWdJSGc2SUhKbFkyOXlaRmhRYjNNZ0t5QkRiMjV6ZEdGdWRITXVjMk5sYm1VdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTRMRnh5WEc1Y2RDQWdJQ0FnSUNBZ2VUb2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVVadlkzVnpVRzl6YVhScGIyNHVlU3hjY2x4dVhIUWdJQ0FnSUNBZ0lIbzZJSEpsWTI5eVpFRmljMjlzZFhSbFVHOXpMbm9nS3lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NlhISmNibHgwSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNWpZVzFsY21GTmIzWmxWR2x0WlNBcFhISmNibHgwSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSHB2YjIxSmJsSmxZMjl5WkNoeVpXTnZjbVJZVUc5ekxDQnlaV052Y21SQlluTnZiSFYwWlZCdmN5a2dlMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQmpZVzFsY21GVWQyVmxiaTV6ZEc5d0tDazdYSEpjYmlBZ0lDQjBZWEpuWlhSVWQyVmxiaTV6ZEc5d0tDazdYSEpjYmx4eVhHNGdJQ0FnZEdGeVoyVjBWSGRsWlc0Z1BTQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklISmxZMjl5WkZoUWIzTXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21SR2JHbHdjR1ZrV1NBcklEVXdMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjZPaUJ5WldOdmNtUkJZbk52YkhWMFpWQnZjeTU2WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtbHVabTlQY0dWdVZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1Z4eVhHNWNjbHh1SUNBZ0lHTmhiV1Z5WVZSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUJ5WldOdmNtUllVRzl6SUNzZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVDQXJJRGd3TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NUlDMGdOVEFzWEhKY2JpQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUI2YjI5dFQzVjBVbVZqYjNKa0tISmxZMjl5WkZoUWIzTXNJSEpsWTI5eVpFRmljMjlzZFhSbFVHOXpLU0I3WEhKY2JpQWdJQ0JjY2x4dUlDQWdJR05oYldWeVlWUjNaV1Z1TG5OMGIzQW9LVHRjY2x4dUlDQWdJSFJoY21kbGRGUjNaV1Z1TG5OMGIzQW9LVHRjY2x4dVhISmNiaUFnSUNCMFlYSm5aWFJVZDJWbGJpQTlJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR0Z5WjJWMExuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0F1WkdWc1lYa29JRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXBibVp2VDNCbGJsUnBiV1VnTHlBeUlDbGNjbHh1SUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2djbVZqYjNKa1dGQnZjeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nTnpVc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhvNklISmxZMjl5WkVGaWMyOXNkWFJsVUc5ekxucGNjbHh1SUNBZ0lDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1YVc1bWIwOXdaVzVVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZVlIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQmpZVzFsY21FdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQnlaV052Y21SWVVHOXpJQ3NnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVTeGNjbHh1SUNBZ0lDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlISmxjMlYwUTJGdFpYSmhLQ2tnZTF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0JqWVcxbGNtRlVkMlZsYmk1emRHOXdLQ2s3WEhKY2JpQWdJQ0IwWVhKblpYUlVkMlZsYmk1emRHOXdLQ2s3WEhKY2JseHlYRzVjZEhSaGNtZGxkRlIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBZWEpuWlhRdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWRHRnlaMlYwUW1GelpWQnZjMmwwYVc5dUxuZ3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNTBZWEpuWlhSQ1lYTmxVRzl6YVhScGIyNHVlU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlam9nUTI5dWMzUmhiblJ6TG5OalpXNWxMblJoY21kbGRFSmhjMlZRYjNOcGRHbHZiaTU2WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJR05oYldWeVlWUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhRbUZ6WlZCdmMybDBhVzl1TG5nc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZDWVhObFVHOXphWFJwYjI0dWVTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVVKaGMyVlFiM05wZEdsdmJpNTZYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjFjR1JoZEdWRFlXMWxjbUZCYzNCbFkzUW9jbUYwYVc4cElIdGNjbHh1WEhSallXMWxjbUV1WVhOd1pXTjBJRDBnY21GMGFXODdYSEpjYmlBZ0lDQmpZVzFsY21FdWRYQmtZWFJsVUhKdmFtVmpkR2x2YmsxaGRISnBlQ2dwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnNiMjlyUVhSVVlYSm5aWFFvS1NCN1hISmNibHgwWTJGdFpYSmhMbXh2YjJ0QmRDZ2dkR0Z5WjJWMExuQnZjMmwwYVc5dUlDazdYSEpjYm4xY2NseHVYSEpjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTF4eVhHNWNkR2x1YVhRNklHbHVhWFFzWEhKY2JseDBabTlqZFhOU1pXTnZjbVE2SUdadlkzVnpVbVZqYjNKa0xGeHlYRzVjZEhwdmIyMUpibEpsWTI5eVpEb2dlbTl2YlVsdVVtVmpiM0prTEZ4eVhHNWNkSHB2YjIxUGRYUlNaV052Y21RNklIcHZiMjFQZFhSU1pXTnZjbVFzWEhKY2JseDBjbVZ6WlhSRFlXMWxjbUU2SUhKbGMyVjBRMkZ0WlhKaExGeHlYRzVjZEhWd1pHRjBaVU5oYldWeVlVRnpjR1ZqZERvZ2RYQmtZWFJsUTJGdFpYSmhRWE53WldOMExGeHlYRzVjZEd4dmIydEJkRlJoY21kbGREb2diRzl2YTBGMFZHRnlaMlYwTEZ4eVhHNWNkRnh5WEc1Y2RHZGxkRU5oYldWeVlUb2dablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJ5WlhSMWNtNGdZMkZ0WlhKaE8xeHlYRzVjZEgwc1hISmNibHgwWjJWMFZHRnlaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNjbHh1WEhSY2RISmxkSFZ5YmlCMFlYSm5aWFE3WEhKY2JseDBmVnh5WEc1OUlsMTkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcbiAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICBjYW52YXNXaWR0aDogbnVsbCxcclxuICAgIGNhbnZhc0hlaWdodDogbnVsbCxcclxuICAgIG5iQ3JhdGVzOiAyLFxyXG4gICAgcmVjb3Jkc1BlckNyYXRlOiAyNCxcclxuICAgIGxpZ2h0SW50ZW5zaXR5OiAxLFxyXG4gICAgY2FtZXJhTW91c2VNb3ZlOiB0cnVlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAweDExMTExMSxcclxuICAgIHNsZWV2ZUNvbG9yOiAweDBkMDcwMixcclxuICAgIHNsZWV2ZU1hc2tUZXh0dXJlOiAnaW1nL3NsZWV2ZS5wbmcnLFxyXG4gICAgY3JhdGVUZXh0dXJlOiAnaW1nL3dvb2QuanBnJyxcclxuICAgIGNsb3NlSW5mb1BhbmVsT25DbGljazogdHJ1ZSxcclxuICAgIGNsb3NlSW5mb1BhbmVsT25TY3JvbGw6IHRydWUsXHJcbiAgICBwb3N0cHJvY2Vzc2luZzogZmFsc2UsXHJcbiAgICBibHVyQW1vdW50OiAwLjQsXHJcbiAgICB1cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemU6IHRydWUsXHJcbiAgICBvbkluZm9QYW5lbE9wZW5lZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICBvbkluZm9QYW5lbENsb3NlZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICBvbkxvYWRpbmdFbmQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgZWxlbWVudHM6IHtcclxuICAgICAgICByb290Q29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGNhbnZhc0NvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICBsb2FkaW5nQ29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGluZm9Db250YWluZXI6IG51bGwsXHJcbiAgICAgICAgdGl0bGVDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgYXJ0aXN0Q29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGNvdmVyQ29udGFpbmVyOiBudWxsXHJcbiAgICB9LFxyXG4gICAgc2NlbmU6IHtcclxuICAgICAgICByZWNvcmRNb3ZlVGltZTogMTAwMCxcclxuICAgICAgICBjYW1lcmFNb3ZlVGltZTogODAwLFxyXG4gICAgICAgIGluZm9PcGVuVGltZTogNzAwLFxyXG4gICAgICAgIHJlY29yZEJhc2VZOiA1LFxyXG4gICAgICAgIHJlY29yZFNob3duWTogMjUsXHJcbiAgICAgICAgcmVjb3JkRmxpcHBlZFk6IDExMCxcclxuICAgICAgICB0YXJnZXRCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgeDogLTIwLFxyXG4gICAgICAgICAgICB5OiAxMCxcclxuICAgICAgICAgICAgejogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhQmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IDI4MCxcclxuICAgICAgICAgICAgeTogMjAwLFxyXG4gICAgICAgICAgICB6OiAxODBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYUZvY3VzUG9zaXRpb246IHtcclxuICAgICAgICAgICAgeDogMTkwLFxyXG4gICAgICAgICAgICB5OiAxOTUsXHJcbiAgICAgICAgICAgIHo6IDkzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFk6IDAuMDcsXHJcbiAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRaOiAwLjA0LFxyXG4gICAgICAgIGdyYWJTZW5zaXRpdml0eTogNlxyXG4gICAgfSxcclxuXHJcbiAgICBleHRlbmQ6IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIGtleSBpbiBvcHRpb25zICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG9wdGlvbnMsIGtleSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXNbIGtleSBdID0gb3B0aW9uc1sga2V5IF07XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufTsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuICAgIFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKSxcclxuXHJcbiAgICBDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpLFxyXG4gICAgQ2FtZXJhTWFuYWdlciA9IHJlcXVpcmUoJy4vQ2FtZXJhTWFuYWdlcicpO1xyXG5cclxudmFyIFJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNyYXRlSWQgPSBjcmF0ZUlkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLnN0YXRlID0gJ291dCc7XHJcbiAgICB0aGlzLnJlY29yZFhQb3MgPSAtNjIgKyAoIDEzNSAvIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgKSAqIHBvcztcclxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBcclxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMS41LCAxMDAsIDEsIDEsIDEgKSwgXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hGYWNlTWF0ZXJpYWwoIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBDb25zdGFudHMuc2xlZXZlQ29sb3JcclxuICAgICAgICB9KSlcclxuICAgICk7XHJcbiAgICB0aGlzLm1lc2guZ2VvbWV0cnkuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKCA1MCwgMCwgMCApICk7XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KCB0aGlzLnJlY29yZFhQb3MsIENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWSwgMCApO1xyXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIHRoaXMubWVzaC5yZWNvcmRJZCA9IGlkO1xyXG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oKTtcclxuICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG5cclxuICAgIHRoaXMuc2V0VW5hY3RpdmUoKTtcclxuICAgIHRoaXMucHVzaFJlY29yZCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBcIlJlY29yZCBuwrBcIiwgdGhpcy5pZCxcclxuICAgICAgICBcImNyYXRlSWQgPVwiLCB0aGlzLmNyYXRlSWQsXHJcbiAgICAgICAgXCJwb3MgPVwiLCB0aGlzLnBvcyApO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldFVuYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2hvd1JlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uVHdlZW4uc3RvcCgpO1xyXG4gICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdzaG93bicgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnc2hvd24nO1xyXG4gICAgICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oIHRoaXMubWVzaC5tYXRyaXhXb3JsZCApO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZFNob3duWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDJcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgQ2FtZXJhTWFuYWdlci5mb2N1c1JlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdXNoUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPSAncHVzaGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdXNoZWQnO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1bGxSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAncHVsbGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdWxsZWQnO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyIC0gTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdmbGlwcGVkJztcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uVHdlZW4uc3RvcCgpO1xyXG4gICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRGbGlwcGVkWVxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgIC5kZWxheSggQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDQgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiBNYXRoLlBJLFxyXG4gICAgICAgICAgICB6OiBNYXRoLlBJIC8gMlxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgIENhbWVyYU1hbmFnZXIuem9vbUluUmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcEJhY2tSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgLCBub0NhbWVyYVR3ZWVuICkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gJ2ZsaXBwZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uVHdlZW4uc3RvcCgpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICAgICAgaWYgKCFub0NhbWVyYVR3ZWVuKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBDYW1lcmFNYW5hZ2VyLnpvb21PdXRSZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY29yZDtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpjbUYwWldScFoyZGxjaTlTWldOdmNtUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lkbUZ5SUZSSVVrVkZJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzZGJKMVJJVWtWRkoxMGdPaUIwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdaMnh2WW1Gc1d5ZFVTRkpGUlNkZElEb2diblZzYkNrc1hISmNiaUFnSUNCVVYwVkZUaUE5SUhKbGNYVnBjbVVvSjNSM1pXVnVMbXB6Snlrc1hISmNibHh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpJRDBnY21WeGRXbHlaU2duTGk5RGIyNXpkR0Z1ZEhNbktTeGNjbHh1SUNBZ0lFTmhiV1Z5WVUxaGJtRm5aWElnUFNCeVpYRjFhWEpsS0NjdUwwTmhiV1Z5WVUxaGJtRm5aWEluS1R0Y2NseHVYSEpjYm5aaGNpQlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9JR2xrTENCamNtRjBaVWxrTENCd2IzTWdLU0I3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTVwWkNBOUlHbGtPMXh5WEc0Z0lDQWdkR2hwY3k1amNtRjBaVWxrSUQwZ1kzSmhkR1ZKWkR0Y2NseHVJQ0FnSUhSb2FYTXVjRzl6SUQwZ2NHOXpPMXh5WEc0Z0lDQWdkR2hwY3k1emRHRjBaU0E5SUNkdmRYUW5PMXh5WEc0Z0lDQWdkR2hwY3k1eVpXTnZjbVJZVUc5eklEMGdMVFl5SUNzZ0tDQXhNelVnTHlCRGIyNXpkR0Z1ZEhNdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNrZ0tpQndiM003WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmdnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnWEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0F4TURBc0lERXVOU3dnTVRBd0xDQXhMQ0F4TENBeElDa3NJRnh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVTRkpGUlM1TlpYTm9SbUZqWlUxaGRHVnlhV0ZzS0NCdVpYY2dWRWhTUlVVdVRXVnphRXhoYldKbGNuUk5ZWFJsY21saGJDZ2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ1EyOXVjM1JoYm5SekxuTnNaV1YyWlVOdmJHOXlYSEpjYmlBZ0lDQWdJQ0FnZlNrcFhISmNiaUFnSUNBcE8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xtZGxiMjFsZEhKNUxtRndjR3g1VFdGMGNtbDRLQ0J1WlhjZ1ZFaFNSVVV1VFdGMGNtbDROQ2dwTG0xaGEyVlVjbUZ1YzJ4aGRHbHZiaWdnTlRBc0lEQXNJREFnS1NBcE8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xuQnZjMmwwYVc5dUxuTmxkQ2dnZEdocGN5NXlaV052Y21SWVVHOXpMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVjbVZqYjNKa1FtRnpaVmtzSURBZ0tUdGNjbHh1SUNBZ0lIUm9hWE11YldWemFDNXliM1JoZEdsdmJpNTZJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWNtVmpiM0prU1dRZ1BTQnBaRHRjY2x4dUlDQWdJSFJvYVhNdVlXSnpiMngxZEdWUWIzTnBkR2x2YmlBOUlHNWxkeUJVU0ZKRlJTNVdaV04wYjNJektDazdYSEpjYmx4eVhHNGdJQ0FnZEdocGN5NXdiM05wZEdsdmJsUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NrN1hISmNiaUFnSUNCMGFHbHpMbkp2ZEdGMGFXOXVWSGRsWlc0Z1BTQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0tUdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxuTmxkRlZ1WVdOMGFYWmxLQ2s3WEhKY2JpQWdJQ0IwYUdsekxuQjFjMmhTWldOdmNtUW9LVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbXh2WnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCamIyNXpiMnhsTG14dlp5Z2dYQ0pTWldOdmNtUWdic0t3WENJc0lIUm9hWE11YVdRc1hISmNiaUFnSUNBZ0lDQWdYQ0pqY21GMFpVbGtJRDFjSWl3Z2RHaHBjeTVqY21GMFpVbGtMRnh5WEc0Z0lDQWdJQ0FnSUZ3aWNHOXpJRDFjSWl3Z2RHaHBjeTV3YjNNZ0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExuTmxkRUZqZEdsMlpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG1GamRHbDJaU0E5SUhSeWRXVTdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ3VkbWx6YVdKc1pTQTlJSFJ5ZFdVN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVVtVmpiM0prTG5CeWIzUnZkSGx3WlM1elpYUlZibUZqZEdsMlpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG1GamRHbDJaU0E5SUdaaGJITmxPMXh5WEc0Z0lDQWdkR2hwY3k1dFpYTm9MblpwYzJsaWJHVWdQU0JtWVd4elpUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExuTm9iM2RTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVMbk4wYjNBb0tUdGNjbHh1SUNBZ0lIUm9hWE11Y205MFlYUnBiMjVVZDJWbGJpNXpkRzl3S0NrN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCMGFHbHpMbk4wWVhSbElDRTlQU0FuYzJodmQyNG5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ0ozTm9iM2R1Snp0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG1GaWMyOXNkWFJsVUc5emFYUnBiMjR1YzJWMFJuSnZiVTFoZEhKcGVGQnZjMmwwYVc5dUtDQjBhR2x6TG0xbGMyZ3ViV0YwY21sNFYyOXliR1FnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiM05wZEdsdmJsUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJUYUc5M2JsbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1eWIzUmhkR2x2YmxSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y205MFlYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SUUxaGRHZ3VVRWtnTHlBeVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lFTmhiV1Z5WVUxaGJtRm5aWEl1Wm05amRYTlNaV052Y21Rb2RHaHBjeTV5WldOdmNtUllVRzl6TENCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibEpsWTI5eVpDNXdjbTkwYjNSNWNHVXVjSFZ6YUZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdJVDBnSjNCMWMyaGxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQW5jSFZ6YUdWa0p6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUxuTjBiM0FvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5KdmRHRjBhVzl1VkhkbFpXNHVjM1J2Y0NncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2YzJsMGFXOXVWSGRsWlc0Z1BTQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuSmxZMjl5WkVKaGMyVlpYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21STmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWNtOTBZWFJwYjI1VWQyVmxiaUE5SUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I2T2lCTllYUm9MbEJKSUM4Z01pQXJJRTFoZEdndVVFa2dMeUEzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVVtVmpiM0prTG5CeWIzUnZkSGx3WlM1d2RXeHNVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnZEdocGN5NXpkR0YwWlNBaFBUMGdKM0IxYkd4bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBbmNIVnNiR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiM05wZEdsdmJsUjNaV1Z1TG5OMGIzQW9LVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkp2ZEdGMGFXOXVWSGRsWlc0dWMzUnZjQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZjMmwwYVc5dVZIZGxaVzRnUFNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRUpoYzJWWlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y205MFlYUnBiMjVVZDJWbGJpQTlJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9Mbkp2ZEdGMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUJOWVhSb0xsQkpJQzhnTWlBdElFMWhkR2d1VUVrZ0x5QTNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21STmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzVtYkdsd1VtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDQmtiMjVsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNBblpteHBjSEJsWkNjN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVMbk4wYjNBb0tUdGNjbHh1SUNBZ0lIUm9hWE11Y205MFlYUnBiMjVVZDJWbGJpNXpkRzl3S0NrN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1Y21WamIzSmtSbXhwY0hCbFpGbGNjbHh1SUNBZ0lDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1YVc1bWIwOXdaVzVVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVjbTkwWVhScGIyNVVkMlZsYmlBOUlHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuSnZkR0YwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0F1WkdWc1lYa29JRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXBibVp2VDNCbGJsUnBiV1VnTHlBMElDbGNjbHh1SUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dNQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nVFdGMGFDNVFTU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlam9nVFdGMGFDNVFTU0F2SURKY2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncFhISmNiaUFnSUNBZ0lDQWdMbTl1UTI5dGNHeGxkR1VvSUdSdmJtVWdLVHRjY2x4dVhISmNiaUFnSUNCRFlXMWxjbUZOWVc1aFoyVnlMbnB2YjIxSmJsSmxZMjl5WkNoMGFHbHpMbkpsWTI5eVpGaFFiM01zSUhSb2FYTXVZV0p6YjJ4MWRHVlFiM05wZEdsdmJpazdYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG1ac2FYQkNZV05yVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NCa2IyNWxJQ3dnYm05RFlXMWxjbUZVZDJWbGJpQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JSFJvYVhNdWMzUmhkR1VnUFQwOUlDZG1iR2x3Y0dWa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVMbk4wYjNBb0tUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuSnZkR0YwYVc5dVZIZGxaVzR1YzNSdmNDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CdmMybDBhVzl1VkhkbFpXNGdQU0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVrWld4aGVTZ2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtbHVabTlQY0dWdVZHbHRaU0F2SURJZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJDWVhObFdWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWFXNW1iMDl3Wlc1VWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV5YjNSaGRHbHZibFIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJREJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbWx1Wm05UGNHVnVWR2x0WlNBdklESWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1dmJrTnZiWEJzWlhSbEtDQmtiMjVsSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hibTlEWVcxbGNtRlVkMlZsYmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnUTJGdFpYSmhUV0Z1WVdkbGNpNTZiMjl0VDNWMFVtVmpiM0prS0hSb2FYTXVjbVZqYjNKa1dGQnZjeXdnZEdocGN5NWhZbk52YkhWMFpWQnZjMmwwYVc5dUtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCU1pXTnZjbVE3SWwxOSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qXHJcbiAgICAgICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgLzo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgLzo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAvOjo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAvOjo6Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAvOjo6L35+XFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAvOjo6L19fXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgIC86OjovX19cXDo6OlxcICAgIFxcIC86OjovICAgIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAvOjo6OlxcICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXDo6Oi8gICAgLyBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAvOjo6Ojo6XFwgICBcXDo6OlxcICAgIFxcX18gICAgLzo6Ojo6OlxcICAgIFxcX1xcOjo6XFwgICBcXDo6OlxcICAgIFxcOi9fX19fLyAgIFxcOjo6XFxfX19fXFxcclxuICAgICAgICAgLzo6Oi9cXDo6OlxcICAgXFw6OjpcXF9fX19cXCBcXCAgLzo6Oi9cXDo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICAgIHwgICAgIHw6Ojp8ICAgIHxcclxuICAgICAgICAvOjo6LyAgXFw6OjpcXCAgIFxcOjo6fCAgICB8IFxcLzo6Oi8gIFxcOjo6XFxfX19fXFwgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFxfX198ICAgICB8Ojo6fF9fX198XHJcbiAgICAgICAgXFw6Oi8gICB8Ojo6OlxcICAvOjo6fF9fX198IC86OjovICAgIFxcOjovICAgIC8gIFxcOjo6XFwgICBcXDo6LyAgICAvICAgX1xcX19fLzo6Oi8gICAgL1xyXG4gICAgICAgICBcXC9fX19ffDo6Ojo6XFwvOjo6LyAgICAvXFwvOjo6LyAgICAvIFxcL19fX18vXFwgICBcXDo6OlxcICAgXFwvX19fXy86XFwgfDo6fCAvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6Ojo6Ojo6OjovICAgIC86Ojo6Oi8gICAgLyAgICAgIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICBcXDo6OlxcfDo6fC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fFxcOjo6Oi8gICAgL1xcOjo6Oi9fX19fLyAgICAgICAgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgIFxcOjo6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8IFxcOjovX19fXy8gIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAvOjo6LyAgICAvICAgXFw6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICB+fCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcLzo6Oi8gICAgLyAgICAgXFw6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgIHwgICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6Ojo6LyAgICAvICAgICAgIFxcOjo6Oi9fX19fL1xyXG4gICAgICAgICAgICAgICBcXDo6fCAgIHwgICAgICAgICAgIFxcOjo6XFxfX19fXFwgICAgICAgICBcXDo6OjovICAgIC8gICAgICAgICB8Ojp8ICAgIHxcclxuICAgICAgICAgICAgICAgIFxcOnwgICB8ICAgICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIHw6OnxfX19ffFxyXG4gICAgICAgICAgICAgICAgIFxcfF9fX3wgICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIH5+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9fICAgICAgICAgICAgIC5fX18uX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fXHJcbiAgICAgICBfX19fX19fX19fX19fX19fIF8vICB8XyAgX19fXyAgIF9ffCBfL3xfX3wgX19fXyAgIF9fX18gICBfX19fX19fX19fXyAgICAgICB8X198IF9fX19fX1xyXG4gICAgIF8vIF9fX1xcXyAgX18gXFxfXyAgXFxcXCAgIF9fXFwvIF9fIFxcIC8gX18gfCB8ICB8LyBfX19cXCAvIF9fX1xcXy8gX18gXFxfICBfXyBcXCAgICAgIHwgIHwvICBfX18vXHJcbiAgICAgXFwgIFxcX19ffCAgfCBcXC8vIF9fIFxcfCAgfCBcXCAgX19fLy8gL18vIHwgfCAgLyAvXy8gID4gL18vICA+ICBfX18vfCAgfCBcXC8gICAgICB8ICB8XFxfX18gXFxcclxuICAgICAgXFxfX18gID5fX3wgIChfX19fICAvX198ICBcXF9fXyAgPl9fX18gfCB8X19cXF9fXyAgL1xcX19fICAvIFxcX19fICA+X198ICAvXFwgL1xcX198ICAvX19fXyAgPlxyXG4gICAgICAgICAgXFwvICAgICAgICAgICBcXC8gICAgICAgICAgXFwvICAgICBcXC8gICAvX19fX18vL19fX19fLyAgICAgIFxcLyAgICAgIFxcLyBcXF9fX19fX3wgICAgXFwvXHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIGNyYXRlZGlnZ2VyLmpzIHYwLjAuMSAtIGJ5IHJpc3EgKFZhbGVudGluIExlZHJhcGllcikgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuICAgIFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKSxcclxuICAgIFN0YXRzID0gcmVxdWlyZSgnc3RhdHMtanMnKSxcclxuICAgIE1vZGVybml6ciA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydNb2Rlcm5penInXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ01vZGVybml6ciddIDogbnVsbCksXHJcbiAgICBkYXQgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snZGF0J10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydkYXQnXSA6IG51bGwpLFxyXG5cclxuICAgIFJlY29yZCA9IHJlcXVpcmUoJy4vUmVjb3JkJyksXHJcbiAgICBDYW1lcmFNYW5hZ2VyID0gcmVxdWlyZSgnLi9DYW1lcmFNYW5hZ2VyJyksXHJcbiAgICBDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpO1xyXG5cclxuLyo9PT09PT09PT09ICBJbmplY3QgYWxsIGV4dGVybmFsIG1vZHVsZXMgdG8gVEhSRUUuanMgPT09PT09PT09PSovXHJcblxyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9TaGFkZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0ZYQUFTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3NlcicpKFRIUkVFKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBWQVJJQUJMRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgZXhwb3J0cyA9IHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgc3RhdHMsXHJcbiAgICBzY2VuZSxcclxuICAgIGNhbWVyYSxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgbGlnaHQsXHJcbiAgICBsZWZ0TGlnaHQsXHJcbiAgICByaWdodExpZ2h0LFxyXG4gICAgY29tcG9zZXIsXHJcbiAgICBGWEFBLFxyXG4gICAgZG9mLFxyXG4gICAgZ3VpLFxyXG4gICAgZGVwdGhUYXJnZXQsXHJcbiAgICBkZXB0aFNoYWRlcixcclxuICAgIGRlcHRoVW5pZm9ybXMsXHJcbiAgICBkZXB0aE1hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE9iamVjdHMgJiBkYXRhIGFycmF5cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY3JhdGVzID0gW10sXHJcbiAgICByZWNvcmRzID0gW10sXHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXSxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzIGNvbnRhaW5lcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXIsXHJcbiAgICBjcmF0ZXNDb250YWluZXIsXHJcbiAgICByZWNvcmRzQ29udGFpbmVyLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFN0YXRlcywgdXRpbCB2YXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGRwcixcclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0LFxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2UsXHJcbiAgICBpbmZvUGFuZWxTdGF0ZSA9IFwiY2xvc2VkXCIsXHJcbiAgICBpc1Njcm9sbGluZyA9IGZhbHNlLFxyXG4gICAgZG9SZW5kZXIgPSB0cnVlLFxyXG4gICAgbW91c2UgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHRhcmdldENhbWVyYVBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZFJlY29yZCA9IC0xLFxyXG4gICAgc2hvd25SZWNvcmQgPSAtMSxcclxuICAgIGxvYWRlZFJlY29yZHMgPSAwLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE1hdGVyaWFscyAgPT09PT09PT09PSovXHJcblxyXG4gICAgd29vZF9tYXRlcmlhbDtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQkFTRSBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSAoKSB7XHJcblxyXG4gICAgaWYgKCBkb1JlbmRlciApIHtcclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgcmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGlmICggQ29uc3RhbnRzLmRlYnVnICkge1xyXG5cclxuICAgICAgICAgICAgc3RhdHMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlciAoKSB7XHJcblxyXG4gICAgVFdFRU4udXBkYXRlKCk7XHJcbiAgICB1cGRhdGVTaG93blJlY29yZCgpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZSApIHtcclxuXHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnggPSAoIG1vdXNlLnggLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTsgLy8gaW52ZXJzZSBheGlzP1xyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy55ID0gKCBtb3VzZS55IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICs9IENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3VzZU1vdmVTcGVlZFkgKiAoIHRhcmdldENhbWVyYVBvcy54IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICk7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICs9IENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3VzZU1vdmVTcGVlZFogKiAoIHRhcmdldENhbWVyYVBvcy55IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIENhbWVyYU1hbmFnZXIubG9va0F0VGFyZ2V0KCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBkZXB0aE1hdGVyaWFsO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgZGVwdGhUYXJnZXQgKTtcclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuICAgICAgICBjb21wb3Nlci5yZW5kZXIoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBMb2FkaW5nIG1ldGhvZHNcclxuICovXHJcbmZ1bmN0aW9uIHVubG9hZFJlY29yZHMgKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gbnVsbDtcclxuICAgICAgICByZWNvcmRzWyBpIF0uc2V0VW5hY3RpdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDA7XHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXTtcclxuXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFJlY29yZHMgKCByZWNvcmRzRGF0YSwgc2h1ZmZsZUJlZm9yZUxvYWRpbmcsIGRvbmUgKSB7XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCggdHJ1ZSApO1xyXG5cclxuICAgIHNob3dMb2FkaW5nKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgaWYgKCBsb2FkZWRSZWNvcmRzID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHVubG9hZFJlY29yZHMoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHNodWZmbGVCZWZvcmVMb2FkaW5nICkge1xyXG5cclxuICAgICAgICAgICAgcmVjb3Jkc0RhdGEgPSBzaHVmZmxlKCByZWNvcmRzRGF0YSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoICYmIGkgPCByZWNvcmRzRGF0YS5sZW5ndGg7IGkrKyApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gcmVjb3Jkc0RhdGFbIGkgXTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0ubWVzaC5tYXRlcmlhbC5tYXRlcmlhbHMgPSBnZXRSZWNvcmRNYXRlcmlhbCggcmVjb3Jkc0RhdGFbIGkgXS5jb3ZlciwgcmVjb3Jkc0RhdGFbIGkgXS5oYXNTbGVldmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aHkgPz9cclxuICAgICAgICAvLyBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGEubGVuZ3RoIDwgcmVjb3Jkcy5sZW5ndGggPyByZWNvcmRzRGF0YS5sZW5ndGggOiByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICBsb2FkZWRSZWNvcmRzID0gcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgcmVjb3Jkc0RhdGFMaXN0ID0gcmVjb3Jkc0RhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaGlkZUxvYWRpbmcoZG9uZSk7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbkxvYWRpbmdFbmQoKTtcclxuXHJcbiAgICAgICAgfSwgMzAwMCApO1xyXG4gICAgfSk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZVJlY29yZHMgKCkge1xyXG5cclxuICAgIHZhciBzaHVmZmxlZFJlY29yZHMgPSByZWNvcmRzRGF0YUxpc3Q7XHJcbiAgICBzaHVmZmxlZFJlY29yZHMgPSBzaHVmZmxlKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuICAgIGxvYWRSZWNvcmRzKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBSRUNPUkRTIFNFTEVDVElPTiBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RSZWNvcmQgKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmbGlwU2VsZWN0ZWRSZWNvcmQgKCkge1xyXG5cclxuICAgIGlmICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApIHtcclxuXHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBDb25zdGFudHMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lciApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2hvd25SZWNvcmQgKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICsgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXNldFNob3duUmVjb3JkICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtZXJhTWFuYWdlci5yZXNldENhbWVyYSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0UHJldlJlY29yZCAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0TmV4dFJlY29yZCAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldE5leHRBdmFpbGFibGVSZWNvcmQgKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBuYXZpZ2F0ZVJlY29yZHMgKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsUmVjb3JkcyAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG5cclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uUmlnaHRDbGlja0V2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93bkV2ZW50LCBmYWxzZSApOyBcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy51cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemUgKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemVFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlTW92ZUV2ZW50ICggZSApIHtcclxuXHJcbiAgICB2YXIgbV9wb3N4ID0gMCxcclxuICAgICAgICBtX3Bvc3kgPSAwLFxyXG4gICAgICAgIGVfcG9zeCA9IDAsXHJcbiAgICAgICAgZV9wb3N5ID0gMCxcclxuICAgICAgICBvYmogPSB0aGlzO1xyXG5cclxuICAgIC8vZ2V0IG1vdXNlIHBvc2l0aW9uIG9uIGRvY3VtZW50IGNyb3NzYnJvd3NlclxyXG4gICAgaWYgKCAhZSApIHtcclxuXHJcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBlLnBhZ2VYIHx8IGUucGFnZVkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUucGFnZVg7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5wYWdlWTtcclxuICAgIH0gZWxzZSBpZiAoIGUuY2xpZW50WCB8fCBlLmNsaWVudFkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIG1fcG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqLm9mZnNldFBhcmVudCApIHtcclxuXHJcbiAgICAgICAgZG8ge1xyXG5cclxuICAgICAgICAgICAgZV9wb3N4ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBlX3Bvc3kgKz0gb2JqLm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIG9iaiA9IG9iai5vZmZzZXRQYXJlbnQgKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdXNlIHBvc2l0aW9uIG1pbnVzIGVsbSBwb3NpdGlvbiBpcyBtb3VzZXBvc2l0aW9uIHJlbGF0aXZlIHRvIGVsZW1lbnQ6XHJcbiAgICBtb3VzZS54ID0gbV9wb3N4IC0gZV9wb3N4O1xyXG4gICAgbW91c2UueSA9IG1fcG9zeSAtIGVfcG9zeTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsRXZlbnQgKCBlICkge1xyXG5cclxuXHJcbiAgICBpZiAoIHdoZWVsRGlyZWN0aW9uKCBlICkgPCAwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudCAoIG1vdXNlRG93blBvcyApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvclBvcyA9IHtcclxuICAgICAgICAgICAgeDogKCAoICggbW91c2VEb3duUG9zLnggLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldExlZnQgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCApICkgKiAyIC0gMSApLFxyXG4gICAgICAgICAgICB5OiAoIC0oICggbW91c2VEb3duUG9zLnkgLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldFRvcCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodCApICkgKiAyICsgMSApLFxyXG4gICAgICAgICAgICB6OiAwLjVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIHZlY3RvclBvcy54LCB2ZWN0b3JQb3MueSwgdmVjdG9yUG9zLnogKTtcclxuICAgICAgICB2ZWN0b3IudW5wcm9qZWN0KCBjYW1lcmEgKTtcclxuICAgICAgICB2YXIgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlciggY2FtZXJhLnBvc2l0aW9uLCB2ZWN0b3Iuc3ViKCBjYW1lcmEucG9zaXRpb24gKS5ub3JtYWxpemUoKSApO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIGNyYXRlc0NvbnRhaW5lci5jaGlsZHJlbiwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBJZiBpbnRlcnNlY3Qgc29tZXRoaW5nXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpY2tlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3QgdmlzaWJsZSByZWNvcmQgaW50ZXJzZWN0ZWRcclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpbnRlcmNlcHQgYSBtZXNoIHdoaWNoIGlzIG5vdCBhIHJlY29yZCwgYnJlYWtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQpID09PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1sgaSBdLm9iamVjdC52aXNpYmxlICYmIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFJlY29yZCA9IHJlY29yZHNbIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgIGlmICggY2xpY2tlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09PSBjbGlja2VkUmVjb3JkLmlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSZWNvcmQoIGNsaWNrZWRSZWNvcmQuaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbGwgaW50ZXJzZWN0ZWQgcmVjb3JkcyBhcmUgbm90IHZpc2libGVzXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vIHJlY29yZCBoYXMgYmVlbiBpbnRlcnNlY3RlZFxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICggQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25DbGljayApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VEb3duRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5idXR0b24gIT09IDEgJiYgZS5idXR0b24gIT09IDIgKSB7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgICAgIHk6IG1vdXNlLnlcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VVcEV2ZW50ICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUuYnV0dG9uICE9PSAxICYmIGUuYnV0dG9uICE9PSAyICkge1xyXG5cclxuICAgICAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG5cclxuICAgICAgICAvLyBUcmlnZ2VyIHNjZW5lIGNsaWNrIGV2ZW50IG9ubHkgaWYgbW91c2V1cCBldmVudCBpcyBub3QgYSBkcmFnIGVuZCBldmVudCAmIG5vdCBhIGNsaWNrIG9uIGEgbGlua1xyXG4gICAgICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBDb25zdGFudHMuc2NlbmUuZ3JhYlNlbnNpdGl2aXR5ICkgJiYgISggZS50YXJnZXQgJiYgZS50YXJnZXQuaGFzQXR0cmlidXRlKCdocmVmJykgKSApIHtcclxuXHJcbiAgICAgICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uUmlnaHRDbGlja0V2ZW50ICggZSApIHtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25LZXlEb3duRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSA0MCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7XHJcblxyXG4gICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMjcgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemVFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIENhbWVyYU1hbmFnZXIudXBkYXRlQ2FtZXJhQXNwZWN0KCBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICAgIFVJIE1FVEhPRFMgICAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkaW5nICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlSW4oIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlT3V0KCBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lciApO1xyXG4gICAgc2V0VGltZW91dChkb25lLCAxMDAwKTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBJTklUSUFMSVNBVElPTiAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRTY2VuZSAoKSB7XHJcblxyXG4gICAgLy8gc2NlbmUsIHJlbmRlcmVyLCBjYW1lcmEsLi4uXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0gKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyLmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJjb250ZXh0XCI7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCBDb25zdGFudHMuYmFja2dyb3VuZENvbG9yLCAxICk7XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5pbml0KGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0KTtcclxuICAgIGNhbWVyYSA9IENhbWVyYU1hbmFnZXIuZ2V0Q2FtZXJhKCk7XHJcblxyXG4gICAgdmFyIHdvb2RfdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoIENvbnN0YW50cy5jcmF0ZVRleHR1cmUgKTtcclxuICAgIHdvb2RfdGV4dHVyZS5hbmlzb3Ryb3B5ID0gcmVuZGVyZXIuZ2V0TWF4QW5pc290cm9weSgpO1xyXG4gICAgd29vZF9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgbWFwOiB3b29kX3RleHR1cmVcclxuICAgIH0gKTtcclxuXHJcbiAgICByb290Q29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBjcmF0ZXNDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIHNjZW5lLmFkZCggcm9vdENvbnRhaW5lciApO1xyXG4gICAgcm9vdENvbnRhaW5lci5hZGQoIGNyYXRlc0NvbnRhaW5lciApO1xyXG5cclxuICAgIGluaXRDcmF0ZXMoKTtcclxuICAgIGluaXRSZWNvcmRzKCk7XHJcblxyXG4gICAgbGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDEuMSApO1xyXG4gICAgbGlnaHQucG9zaXRpb24uc2V0KCAzMDAsIDgwLCAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxpZ2h0ICk7XHJcblxyXG4gICAgbGVmdExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBDb25zdGFudHMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIGxlZnRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsZWZ0TGlnaHQgKTtcclxuXHJcbiAgICByaWdodExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBDb25zdGFudHMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIHJpZ2h0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIC0xMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIHJpZ2h0TGlnaHQgKTtcclxuXHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcoKTtcclxuXHJcbiAgICBiaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgLy8gRE9NIHNldHVwXHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgaGlkZUVsZW1lbnQoQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIpO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLmRlYnVnICkge1xyXG5cclxuICAgICAgICBpbml0RGVidWcoKTtcclxuICAgICAgICBpbml0R1VJKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRQb3N0UHJvY2Vzc2luZyAoKSB7XHJcblxyXG4gICAgZGVwdGhTaGFkZXIgPSBUSFJFRS5TaGFkZXJMaWIuZGVwdGhSR0JBO1xyXG4gICAgZGVwdGhVbmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGRlcHRoU2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG4gICAgZGVwdGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBkZXB0aFNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGRlcHRoU2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3JtczogZGVwdGhVbmlmb3Jtc1xyXG4gICAgfSApO1xyXG4gICAgZGVwdGhNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk5vQmxlbmRpbmc7XHJcblxyXG4gICAgZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHtcclxuICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG4gICAgfSApO1xyXG5cclxuICAgIGNvbXBvc2VyID0gbmV3IFRIUkVFLkVmZmVjdENvbXBvc2VyKCByZW5kZXJlciApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggbmV3IFRIUkVFLlJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEgKSApO1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlcHRoIG9mIGZpZWxkIHNoYWRlciAgPT09PT09PT09PSovXHJcblxyXG4gICAgZG9mID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkRvRlNoYWRlciApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcbiAgICBkb2YudW5pZm9ybXMuem5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjsgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy56ZmFyLnZhbHVlID0gY2FtZXJhLmZhcjsgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgudmFsdWUgPSA1OyAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDsgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuICAgIGRvZi51bmlmb3Jtcy5mc3RvcC52YWx1ZSA9IDguMDsgLy9mLXN0b3AgdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMudmFsdWUgPSBmYWxzZTsgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcbiAgICBkb2YudW5pZm9ybXMubWFudWFsZG9mLnZhbHVlID0gdHJ1ZTsgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcbiAgICBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LnZhbHVlID0gMTE7IC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LnZhbHVlID0gODA7IC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZzdGFydC52YWx1ZSA9IDA7IC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZmRpc3QudmFsdWUgPSAxMDA7IC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLkNvQy52YWx1ZSA9IDAuMDM7IC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLnZhbHVlID0gZmFsc2U7IC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMudmFsdWUgPSB0cnVlOyAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLnNldCggMC4zNSwgMC4zNSApOyAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodCkgXHJcbiAgICBkb2YudW5pZm9ybXMubWF4Ymx1ci52YWx1ZSA9IENvbnN0YW50cy5ibHVyQW1vdW50OyAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudGhyZXNob2xkLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG4gICAgZG9mLnVuaWZvcm1zLmdhaW4udmFsdWUgPSAwOyAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5iaWFzLnZhbHVlID0gMDsgLy9ib2tlaCBlZGdlIGJpYXMgICAgICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZyaW5nZS52YWx1ZSA9IDA7IC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcbiAgICBGWEFBID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkZYQUFTaGFkZXIgKTtcclxuXHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEucmVuZGVyVG9TY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIGRvZiApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggRlhBQSApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXREZWJ1ZyAoKSB7XHJcblxyXG4gICAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbUVsZW1lbnQgKTtcclxuXHJcbiAgICB2YXIgZGVidWcgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMCwgMjAsIDIwLCAxLCAxLCAxICkgKTtcclxuICAgIGRlYnVnLnBvc2l0aW9uLnNldChcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi54LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24uelxyXG4gICAgKTtcclxuICAgIHNjZW5lLmFkZCggZGVidWcgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbml0R1VJICgpIHtcclxuXHJcbiAgICB2YXIgY2FtZXJhRm9sZGVyLFxyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLFxyXG4gICAgICAgIGRvZkZvbGRlcixcclxuICAgICAgICBfbGFzdDtcclxuXHJcbiAgICBndWkgPSBuZXcgZGF0LkdVSSgpO1xyXG4gICAgXHJcbiAgICBjYW1lcmFGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnQ2FtZXJhJyApO1xyXG4gICAgY2FtZXJhRm9jYWxMZW5ndGggPSBjYW1lcmFGb2xkZXIuYWRkKCBjYW1lcmEsICdmb2NhbExlbmd0aCcsIDI4LCAyMDAgKS5uYW1lKCAnRm9jYWwgTGVuZ3RoJyApO1xyXG4gICAgY2FtZXJhRm9jYWxMZW5ndGgub25DaGFuZ2UoIHVwZGF0ZUNhbWVyYSApO1xyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuXHJcbiAgICAgICAgZG9mRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0RlcHRoIG9mIEZpZWxkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLCAndmFsdWUnLCAwLCAxMCApLm5hbWUoICdGb2NhbCBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnN0b3AsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ0YgU3RvcCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWF4Ymx1ciwgJ3ZhbHVlJywgMCwgMyApLm5hbWUoICdtYXggYmx1cicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnNob3dGb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdTaG93IEZvY2FsIFJhbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWFudWFsZG9mLCAndmFsdWUnICkubmFtZSggJ01hbnVhbCBEb0YnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBmYWxsb2ZmJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIGZhbGxvZmYnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5Db0MsICd2YWx1ZScsIDAsIDAuMSApLnN0ZXAoIDAuMDAxICkubmFtZSggJ2NpcmNsZSBvZiBjb25mdXNpb24nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLCAndmFsdWUnICkubmFtZSggJ1ZpZ25ldHRpbmcnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25vdXQsICd2YWx1ZScsIDAsIDIgKS5uYW1lKCAnb3V0ZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduaW4sICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ2lubmVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmZhZGUsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ2ZhZGUgYXQnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnQXV0b2ZvY3VzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3gnLCAwLCAxICkubmFtZSggJ2ZvY3VzIHgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneScsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnRocmVzaG9sZCwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAndGhyZXNob2xkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5nYWluLCAndmFsdWUnLCAwLCAxMDAgKS5uYW1lKCAnZ2FpbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmJpYXMsICd2YWx1ZScsIDAsIDQgKS5zdGVwKCAwLjAxICkubmFtZSggJ2JpYXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZyaW5nZSwgJ3ZhbHVlJywgMCwgNSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnZnJpbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubm9pc2UsICd2YWx1ZScgKS5uYW1lKCAnVXNlIE5vaXNlJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uYW1vdW50LCAndmFsdWUnLCAwLCAwLjAwMSApLnN0ZXAoIDAuMDAwMSApLm5hbWUoICdkaXRoZXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kZXB0aGJsdXIsICd2YWx1ZScgKS5uYW1lKCAnQmx1ciBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGJzaXplLCAndmFsdWUnLCAwLCA1ICkubmFtZSggJ2JsdXIgc2l6ZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3VpLmNsb3NlKCk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FtZXJhICgpIHtcclxuXHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRDcmF0ZXMgKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IENvbnN0YW50cy5uYkNyYXRlczsgY3JhdGVJZCsrICkge1xyXG4gICAgICAgIHZhciBjcmF0ZSA9IGNyZWF0ZUNyYXRlKCBjcmF0ZUlkICk7XHJcbiAgICAgICAgY3JhdGVzQ29udGFpbmVyLmFkZCggY3JhdGUgKTtcclxuICAgIH1cclxuICAgIGNyYXRlc0NvbnRhaW5lci5wb3NpdGlvbi56ID0gLSggMTEwIC0gKCAxMTAgKiBDb25zdGFudHMubmJDcmF0ZXMgKSApIC8gMjtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDcmF0ZSAoIGlkICkge1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXSA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuICAgIHZhciBib3hfYm90dG9tID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9ib3R0b20gKTtcclxuXHJcbiAgICB2YXIgYm94X2xlZnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfbGVmdC5wb3NpdGlvbi5zZXQoIDAsIDM1LCAtNTUgKTtcclxuICAgIGJveF9sZWZ0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9sZWZ0ICk7XHJcblxyXG4gICAgaWYgKCBpZCA9PT0gMCApIHtcclxuICAgICAgICB2YXIgYm94X3JpZ2h0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgICAgIGJveF9yaWdodC5wb3NpdGlvbi5zZXQoIDAsIDM1LCA1NSApO1xyXG4gICAgICAgIGJveF9yaWdodC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X3JpZ2h0ICk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJveF9iYWNrID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggODAsIDEwLCAxMjAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2JhY2sucG9zaXRpb24uc2V0KCAtMTA1LCAzNSwgMCApO1xyXG4gICAgYm94X2JhY2sucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JhY2sgKTtcclxuXHJcbiAgICB2YXIgYm94X2Zyb250ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggNDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2Zyb250LnBvc2l0aW9uLnNldCggOTUsIDI1LCAwICk7XHJcbiAgICBib3hfZnJvbnQucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2Zyb250ICk7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdLnBvc2l0aW9uLnogPSAtMTEwICogaWQ7XHJcbiAgICByZXR1cm4gY3JhdGVzWyBpZCBdO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRSZWNvcmRzICgpIHtcclxuXHJcbiAgICB2YXIgY3VycmVudFJlY29yZElkID0gMDtcclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IGNyYXRlcy5sZW5ndGg7IGNyYXRlSWQrKyApIHtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHBvcyA9IDA7IHBvcyA8IENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGU7IHBvcysrICkge1xyXG4gICAgICAgICAgICBjcmVhdGVSZWNvcmQoIGN1cnJlbnRSZWNvcmRJZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZWNvcmRJZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY29yZCAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IG5ldyBSZWNvcmQoIGlkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgIGNyYXRlc1sgY3JhdGVJZCBdLmFkZCggcmVjb3JkLm1lc2ggKTtcclxuICAgIHJlY29yZHMucHVzaCggcmVjb3JkICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UmVjb3JkTWF0ZXJpYWwgKCBzcmMsIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nLnNyYyA9IHNyYyA/IHNyYyA6ICcnO1xyXG5cclxuICAgIHZhciBpbWdXaWR0aCA9IDQwMCxcclxuICAgICAgICBpbWdIZWlnaHQgPSA0MDAsXHJcbiAgICAgICAgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHJcbiAgICBtYXBDYW52YXMud2lkdGggPSBtYXBDYW52YXMuaGVpZ2h0ID0gNDAwO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoIG1hcENhbnZhcyApO1xyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xlZXZlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHNsZWV2ZS5zcmMgPSBDb25zdGFudHMuc2xlZXZlTWFza1RleHR1cmU7XHJcblxyXG4gICAgICAgICAgICBzbGVldmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMTMwLCAxMzAsIDEzNSwgMTM1ICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBzbGVldmUsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNsZWV2ZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuXHJcbiAgICAgICAgY29sb3I6IENvbnN0YW50cy5zbGVldmVDb2xvclxyXG5cclxuICAgIH0gKTtcclxuXHJcbiAgICB2YXIgbWF0ZXJpYWxzID0gW1xyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIC8vIHRleHR1cmVcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIG1hcDogdGV4dHVyZVxyXG4gICAgICAgIH0gKSxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbFxyXG4gICAgXTtcclxuICAgIHJldHVybiBtYXRlcmlhbHM7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFVUSUxTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gd2hlZWxEaXN0YW5jZSAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHZhciB3ID0gZS53aGVlbERlbHRhLFxyXG4gICAgICAgIGQgPSBlLmRldGFpbDtcclxuICAgIGlmICggZCApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3ICkgcmV0dXJuIHcgLyBkIC8gNDAgKiBkID4gMCA/IDEgOiAtMTsgLy8gT3BlcmFcclxuICAgICAgICBlbHNlIHJldHVybiAtZCAvIDM7IC8vIEZpcmVmb3g7XHJcblxyXG4gICAgfSBlbHNlIHJldHVybiB3IC8gMTIwOyAvLyBJRS9TYWZhcmkvQ2hyb21lXHJcbn07XHJcblxyXG5mdW5jdGlvbiB3aGVlbERpcmVjdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCAhZSApIGUgPSBldmVudDtcclxuICAgIHJldHVybiAoIGUuZGV0YWlsIDwgMCApID8gMSA6ICggZS53aGVlbERlbHRhID4gMCApID8gMSA6IC0xO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvb3Jkc0VxdWFsc0FwcHJveCAoIGNvb3JkMSwgY29vcmQyLCByYW5nZSApIHtcclxuXHJcbiAgICByZXR1cm4gKCBNYXRoLmFicyggY29vcmQxLnggLSBjb29yZDIueCApIDw9IHJhbmdlICkgJiYgKCBNYXRoLmFicyggY29vcmQxLnkgLSBjb29yZDIueSApIDw9IHJhbmdlICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmFkZU91dCAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gMCkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25FdmVudCA9IGdldFRyYW5zaXRpb25FdmVudChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmYWRlSW4gKCBlbGVtZW50ICkge1xyXG5cclxuICAgIGlmIChlbGVtZW50LnN0eWxlLm9wYWNpdHkgPT09ICcnIHx8IGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJzEnKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc2l0aW9uRXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRXZlbnQsIG9uRmFkZUNvbXBsZXRlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICB9LCAxNSk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25GYWRlQ29tcGxldGUoIGUgLCBlMiApIHtcclxuXHJcbiAgICBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLnR5cGUsIG9uRmFkZUNvbXBsZXRlKTtcclxuXHJcbiAgICBpZiAoIGUuY3VycmVudFRhcmdldC5zdHlsZS5vcGFjaXR5ID09PSAnMCcgKSB7XHJcblxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoaWRlRWxlbWVudCggZWxlbWVudCApIHtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0VsZW1lbnQoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uRXZlbnQgKCkge1xyXG5cclxuICAgIHZhciB0LFxyXG4gICAgICAgIHRyYW5zaXRpb25zID0ge1xyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKSB7XHJcblxyXG4gICAgICAgIGlmKCBkb2N1bWVudC5ib2R5LnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlQ2FudmFzU2l6ZSAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBDb25zdGFudHMuY2FudmFzV2lkdGggPyBDb25zdGFudHMuY2FudmFzV2lkdGggOiBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IENvbnN0YW50cy5jYW52YXNIZWlnaHQgPyBDb25zdGFudHMuY2FudmFzSGVpZ2h0IDogQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldENhbnZhc0RpbWVuc2lvbnMgKCkge1xyXG5cclxuICAgIC8vQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuc3R5bGUuaGVpZ2h0ICAgICA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvL0NvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLnN0eWxlLndpZHRoICAgICA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyLnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoIHYgKSB7IC8vIEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAtIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlIFtyZXYuICMxXVxyXG5cclxuICAgIGZvciAoIHZhciBqLCB4LCBpID0gdi5sZW5ndGg7IGk7IGogPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSAqIGkgKSwgeCA9IHZbIC0taSBdLCB2WyBpIF0gPSB2WyBqIF0sIHZbIGogXSA9IHggKTtcclxuICAgIHJldHVybiB2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFWFBPUlRTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBNZXRob2RzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICggcGFyYW1zICkge1xyXG5cclxuICAgIENvbnN0YW50cy5leHRlbmQocGFyYW1zKTtcclxuXHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIGlmICggIU1vZGVybml6ci53ZWJnbCApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByb290IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoICFDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgbG9hZGluZyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoICFDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5kaXNhYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgZ2V0dGVycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmdldENhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFJlY29yZHNEYXRhTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc0RhdGFMaXN0O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0TG9hZGVkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gbG9hZGVkUmVjb3JkcztcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT0gIE1ldGhvZHMgYWNjZXNzb3JzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMubG9hZFJlY29yZHMgPSBsb2FkUmVjb3JkcztcclxuZXhwb3J0cy51bmxvYWRSZWNvcmRzID0gdW5sb2FkUmVjb3JkcztcclxuZXhwb3J0cy5yZXNldFNob3duUmVjb3JkID0gcmVzZXRTaG93blJlY29yZDtcclxuZXhwb3J0cy5zaHVmZmxlUmVjb3JkcyA9IHNodWZmbGVSZWNvcmRzO1xyXG5leHBvcnRzLmZsaXBTZWxlY3RlZFJlY29yZCA9IGZsaXBTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5mbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZmxpcEJhY2tTZWxlY3RlZFJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3RQcmV2UmVjb3JkID0gc2VsZWN0UHJldlJlY29yZDtcclxuZXhwb3J0cy5zZWxlY3ROZXh0UmVjb3JkID0gc2VsZWN0TmV4dFJlY29yZDtcclxuZXhwb3J0cy5zaG93TG9hZGluZyA9IHNob3dMb2FkaW5nO1xyXG5leHBvcnRzLmhpZGVMb2FkaW5nID0gaGlkZUxvYWRpbmc7XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFBVQkxJQyBBUEkgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amNtRjBaV1JwWjJkbGNpOXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjlmWDE5ZklDQWdJQ0FnSUNBZ0lDQWdJQ0JmWDE5Zlh5QWdJQ0FnSUNBZ0lDQWdJQ0FnWDE5ZlgxOGdJQ0FnSUNBZ0lDQWdJQ0FnWDE5ZlgxOWZYMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM5Y1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUNBZ0lDOWNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lDQWdJQzljWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJQ0FnTHpvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDODZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQzg2T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUM4Nk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0x6bzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdMem82T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0F2T2pvNk9qbzZYRndnSUNBZ1hGeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZPam82T2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0x6bzZPam82T2x4Y0lDQWdJRnhjSUNBZ0lDQXZPam82T2pvNk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0x6bzZPaTljWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQXZPam82TDM1K1hGdzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZPam82TDE5ZlhGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDODZPam92WDE5Y1hEbzZPbHhjSUNBZ0lGeGNJQzg2T2pvdklDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0x6bzZPanBjWENBZ0lDQmNYQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hEbzZPaThnSUNBZ0x5QmNYRG82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQXZPam82T2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y1gxOGdJQ0FnTHpvNk9qbzZPbHhjSUNBZ0lGeGNYMXhjT2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y09pOWZYMTlmTHlBZ0lGeGNPam82WEZ4ZlgxOWZYRnhjY2x4dUlDQWdJQ0FnSUNBZ0x6bzZPaTljWERvNk9seGNJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hDQmNYQ0FnTHpvNk9pOWNYRG82T2x4Y0lDQWdJRnhjSUZ4Y09qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUh3Z0lDQWdJSHc2T2pwOElDQWdJSHhjY2x4dUlDQWdJQ0FnSUNBdk9qbzZMeUFnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZmQ0FnSUNCOElGeGNMem82T2k4Z0lGeGNPam82WEZ4ZlgxOWZYRndnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRnhmWDE5ZlhGeGZYMTk4SUNBZ0lDQjhPam82ZkY5ZlgxOThYSEpjYmlBZ0lDQWdJQ0FnWEZ3Nk9pOGdJQ0I4T2pvNk9seGNJQ0F2T2pvNmZGOWZYMTk4SUM4Nk9qb3ZJQ0FnSUZ4Y09qb3ZJQ0FnSUM4Z0lGeGNPam82WEZ3Z0lDQmNYRG82THlBZ0lDQXZJQ0FnWDF4Y1gxOWZMem82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNCY1hDOWZYMTlmZkRvNk9qbzZYRnd2T2pvNkx5QWdJQ0F2WEZ3dk9qbzZMeUFnSUNBdklGeGNMMTlmWDE4dlhGd2dJQ0JjWERvNk9seGNJQ0FnWEZ3dlgxOWZYeTg2WEZ3Z2ZEbzZmQ0F2T2pvNkx5QWdJQ0F2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh3Nk9qbzZPam82T2pvdklDQWdJQzg2T2pvNk9pOGdJQ0FnTHlBZ0lDQWdJRnhjT2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQmNYRG82T2x4Y2ZEbzZmQzg2T2pvdklDQWdJQzljY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkRvNmZGeGNPam82T2k4Z0lDQWdMMXhjT2pvNk9pOWZYMTlmTHlBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRnhmWDE5ZlhGd2dJRnhjT2pvNk9qbzZPam82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pwOElGeGNPam92WDE5Zlh5OGdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBdk9qbzZMeUFnSUNBdklDQWdYRnc2T2pvNk9qbzZPaThnSUNBZ0wxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjhPanA4SUNCK2ZDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0JjWERvNk9seGNMem82T2k4Z0lDQWdMeUFnSUNBZ1hGdzZPam82T2pvdklDQWdJQzljY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkRvNmZDQWdJSHdnSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82T2pvNkx5QWdJQ0F2SUNBZ0lDQWdJRnhjT2pvNk9pOWZYMTlmTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY1hEbzZmQ0FnSUh3Z0lDQWdJQ0FnSUNBZ0lGeGNPam82WEZ4ZlgxOWZYRndnSUNBZ0lDQWdJQ0JjWERvNk9qb3ZJQ0FnSUM4Z0lDQWdJQ0FnSUNCOE9qcDhJQ0FnSUh4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeGNPbndnSUNCOElDQWdJQ0FnSUNBZ0lDQWdYRnc2T2k4Z0lDQWdMeUFnSUNBZ0lDQWdJQ0JjWERvNkx5QWdJQ0F2SUNBZ0lDQWdJQ0FnSUh3Nk9ueGZYMTlmZkZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeGNmRjlmWDN3Z0lDQWdJQ0FnSUNBZ0lDQWdYRnd2WDE5Zlh5OGdJQ0FnSUNBZ0lDQWdJQ0JjWEM5ZlgxOWZMeUFnSUNBZ0lDQWdJQ0FnSUg1K1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUY5ZklDQWdJQ0FnSUNBZ0lDQWdJQzVmWDE4dVgxOGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOWZYSEpjYmlBZ0lDQWdJQ0JmWDE5ZlgxOWZYMTlmWDE5ZlgxOWZJRjh2SUNCOFh5QWdYMTlmWHlBZ0lGOWZmQ0JmTDN4Zlgzd2dYMTlmWHlBZ0lGOWZYMThnSUNCZlgxOWZYMTlmWDE5Zlh5QWdJQ0FnSUNCOFgxOThJRjlmWDE5ZlgxeHlYRzRnSUNBZ0lGOHZJRjlmWDF4Y1h5QWdYMThnWEZ4Zlh5QWdYRnhjWENBZ0lGOWZYRnd2SUY5ZklGeGNJQzhnWDE4Z2ZDQjhJQ0I4THlCZlgxOWNYQ0F2SUY5ZlgxeGNYeThnWDE4Z1hGeGZJQ0JmWHlCY1hDQWdJQ0FnSUh3Z0lId3ZJQ0JmWDE4dlhISmNiaUFnSUNBZ1hGd2dJRnhjWDE5ZmZDQWdmQ0JjWEM4dklGOWZJRnhjZkNBZ2ZDQmNYQ0FnWDE5Zkx5OGdMMTh2SUh3Z2ZDQWdMeUF2WHk4Z0lENGdMMTh2SUNBK0lDQmZYMTh2ZkNBZ2ZDQmNYQzhnSUNBZ0lDQjhJQ0I4WEZ4ZlgxOGdYRnhjY2x4dUlDQWdJQ0FnWEZ4ZlgxOGdJRDVmWDN3Z0lDaGZYMTlmSUNBdlgxOThJQ0JjWEY5Zlh5QWdQbDlmWDE4Z2ZDQjhYMTljWEY5Zlh5QWdMMXhjWDE5ZklDQXZJRnhjWDE5ZklDQStYMTk4SUNBdlhGd2dMMXhjWDE5OElDQXZYMTlmWHlBZ1BseHlYRzRnSUNBZ0lDQWdJQ0FnWEZ3dklDQWdJQ0FnSUNBZ0lDQmNYQzhnSUNBZ0lDQWdJQ0FnWEZ3dklDQWdJQ0JjWEM4Z0lDQXZYMTlmWDE4dkwxOWZYMTlmTHlBZ0lDQWdJRnhjTHlBZ0lDQWdJRnhjTHlCY1hGOWZYMTlmWDN3Z0lDQWdYRnd2WEhKY2JseHlYRzVjY2x4dUtpOWNjbHh1WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJR055WVhSbFpHbG5aMlZ5TG1weklIWXdMakF1TVNBdElHSjVJSEpwYzNFZ0tGWmhiR1Z1ZEdsdUlFeGxaSEpoY0dsbGNpa2dJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibHh5WEc0bmRYTmxJSE4wY21samRDYzdYSEpjYmx4eVhHNTJZWElnVkVoU1JVVWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25WRWhTUlVVblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4YkoxUklVa1ZGSjEwZ09pQnVkV3hzS1N4Y2NseHVJQ0FnSUZSWFJVVk9JRDBnY21WeGRXbHlaU2duZEhkbFpXNHVhbk1uS1N4Y2NseHVJQ0FnSUZOMFlYUnpJRDBnY21WeGRXbHlaU2duYzNSaGRITXRhbk1uS1N4Y2NseHVJQ0FnSUUxdlpHVnlibWw2Y2lBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z2QybHVaRzkzV3lkTmIyUmxjbTVwZW5JblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4YkowMXZaR1Z5Ym1sNmNpZGRJRG9nYm5Wc2JDa3NYSEpjYmlBZ0lDQmtZWFFnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUhkcGJtUnZkMXNuWkdGMEoxMGdPaUIwZVhCbGIyWWdaMnh2WW1Gc0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdaMnh2WW1Gc1d5ZGtZWFFuWFNBNklHNTFiR3dwTEZ4eVhHNWNjbHh1SUNBZ0lGSmxZMjl5WkNBOUlISmxjWFZwY21Vb0p5NHZVbVZqYjNKa0p5a3NYSEpjYmlBZ0lDQkRZVzFsY21GTllXNWhaMlZ5SUQwZ2NtVnhkV2x5WlNnbkxpOURZVzFsY21GTllXNWhaMlZ5Snlrc1hISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMME52Ym5OMFlXNTBjeWNwTzF4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOUlDQkpibXBsWTNRZ1lXeHNJR1Y0ZEdWeWJtRnNJRzF2WkhWc1pYTWdkRzhnVkVoU1JVVXVhbk1nUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1eVpYRjFhWEpsS0NjdUwzUm9jbVZsYW5OZmJXOWtkV3hsY3k5VGFHRmtaWEpRWVhOekp5a29WRWhTUlVVcE8xeHlYRzV5WlhGMWFYSmxLQ2N1TDNSb2NtVmxhbk5mYlc5a2RXeGxjeTlEYjNCNVUyaGhaR1Z5Snlrb1ZFaFNSVVVwTzF4eVhHNXlaWEYxYVhKbEtDY3VMM1JvY21WbGFuTmZiVzlrZFd4bGN5OVNaVzVrWlhKUVlYTnpKeWtvVkVoU1JVVXBPMXh5WEc1eVpYRjFhWEpsS0NjdUwzUm9jbVZsYW5OZmJXOWtkV3hsY3k5RWIwWlRhR0ZrWlhJbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMFpZUVVGVGFHRmtaWEluS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwMWhjMnRRWVhOekp5a29WRWhTUlVVcE8xeHlYRzV5WlhGMWFYSmxLQ2N1TDNSb2NtVmxhbk5mYlc5a2RXeGxjeTlGWm1abFkzUkRiMjF3YjNObGNpY3BLRlJJVWtWRktUdGNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCV1FWSkpRVUpNUlZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzUyWVhJZ1pYaHdiM0owY3lBOUlIdDlMQ0F2THlCUFltcGxZM1FnWm05eUlIQjFZbXhwWXlCQlVFbHpYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnVkdoeVpXVXVhbk1nYjJKcVpXTjBjeUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc0Z0lDQWdjM1JoZEhNc1hISmNiaUFnSUNCelkyVnVaU3hjY2x4dUlDQWdJR05oYldWeVlTeGNjbHh1SUNBZ0lISmxibVJsY21WeUxGeHlYRzRnSUNBZ2JHbG5hSFFzWEhKY2JpQWdJQ0JzWldaMFRHbG5hSFFzWEhKY2JpQWdJQ0J5YVdkb2RFeHBaMmgwTEZ4eVhHNGdJQ0FnWTI5dGNHOXpaWElzWEhKY2JpQWdJQ0JHV0VGQkxGeHlYRzRnSUNBZ1pHOW1MRnh5WEc0Z0lDQWdaM1ZwTEZ4eVhHNGdJQ0FnWkdWd2RHaFVZWEpuWlhRc1hISmNiaUFnSUNCa1pYQjBhRk5vWVdSbGNpeGNjbHh1SUNBZ0lHUmxjSFJvVlc1cFptOXliWE1zWEhKY2JpQWdJQ0JrWlhCMGFFMWhkR1Z5YVdGc0xGeHlYRzVjY2x4dVhISmNiaUFnSUNBdktqMDlQVDA5UFQwOVBUMGdJRTlpYW1WamRITWdKaUJrWVhSaElHRnljbUY1Y3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnWTNKaGRHVnpJRDBnVzEwc1hISmNiaUFnSUNCeVpXTnZjbVJ6SUQwZ1cxMHNYSEpjYmlBZ0lDQnlaV052Y21SelJHRjBZVXhwYzNRZ1BTQmJYU3hjY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCVWFISmxaUzVxY3lCdlltcGxZM1J6SUdOdmJuUmhhVzVsY25NZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSXNYSEpjYmlBZ0lDQmpjbUYwWlhORGIyNTBZV2x1WlhJc1hISmNiaUFnSUNCeVpXTnZjbVJ6UTI5dWRHRnBibVZ5TEZ4eVhHNWNjbHh1WEhKY2JpQWdJQ0F2S2owOVBUMDlQVDA5UFQwZ0lGTjBZWFJsY3l3Z2RYUnBiQ0IyWVhKeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCallXNTJZWE5YYVdSMGFDeGNjbHh1SUNBZ0lHTmhiblpoYzBobGFXZG9kQ3hjY2x4dUlDQWdJR1J3Y2l4Y2NseHVJQ0FnSUhOamNtOXNiRkpsWTI5eVpITlVhVzFsYjNWMExGeHlYRzRnSUNBZ2FYTk1iMkZrYVc1bklEMGdabUZzYzJVc1hISmNiaUFnSUNCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5SUZ3aVkyeHZjMlZrWENJc1hISmNiaUFnSUNCcGMxTmpjbTlzYkdsdVp5QTlJR1poYkhObExGeHlYRzRnSUNBZ1pHOVNaVzVrWlhJZ1BTQjBjblZsTEZ4eVhHNGdJQ0FnYlc5MWMyVWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ2VEb2dNQ3hjY2x4dUlDQWdJQ0FnSUNCNU9pQXdYSEpjYmlBZ0lDQjlMRnh5WEc0Z0lDQWdiVzkxYzJWRWIzZHVVRzl6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJSGc2SURBc1hISmNiaUFnSUNBZ0lDQWdlVG9nTUZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0FnSUhSaGNtZGxkRU5oYldWeVlWQnZjeUE5SUh0Y2NseHVJQ0FnSUNBZ0lDQjRPaUF3TEZ4eVhHNGdJQ0FnSUNBZ0lIazZJREJjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlJQzB4TEZ4eVhHNGdJQ0FnYzJodmQyNVNaV052Y21RZ1BTQXRNU3hjY2x4dUlDQWdJR3h2WVdSbFpGSmxZMjl5WkhNZ1BTQXdMRnh5WEc1Y2NseHVYSEpjYmlBZ0lDQXZLajA5UFQwOVBUMDlQVDBnSUUxaGRHVnlhV0ZzY3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnZDI5dlpGOXRZWFJsY21saGJEdGNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnUWtGVFJTQk5SVlJJVDBSVElDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1lXNXBiV0YwWlNBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQmtiMUpsYm1SbGNpQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0NCaGJtbHRZWFJsSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVZ1WkdWeUtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnUTI5dWMzUmhiblJ6TG1SbFluVm5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUmhkSE11ZFhCa1lYUmxLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlISmxibVJsY2lBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnVkZkRlJVNHVkWEJrWVhSbEtDazdYSEpjYmlBZ0lDQjFjR1JoZEdWVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dRMjl1YzNSaGJuUnpMbU5oYldWeVlVMXZkWE5sVFc5MlpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR0Z5WjJWMFEyRnRaWEpoVUc5ekxuZ2dQU0FvSUcxdmRYTmxMbmdnTHlCallXNTJZWE5YYVdSMGFDQXRJREF1TlNBcElDb2dNQzR5TlRzZ0x5OGdhVzUyWlhKelpTQmhlR2x6UDF4eVhHNGdJQ0FnSUNBZ0lIUmhjbWRsZEVOaGJXVnlZVkJ2Y3k1NUlEMGdLQ0J0YjNWelpTNTVJQzhnWTJGdWRtRnpWMmxrZEdnZ0xTQXdMalVnS1NBcUlEQXVNalU3WEhKY2JpQWdJQ0FnSUNBZ2NtOXZkRU52Ym5SaGFXNWxjaTV5YjNSaGRHbHZiaTU1SUNzOUlFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZOYjNWelpVMXZkbVZUY0dWbFpGa2dLaUFvSUhSaGNtZGxkRU5oYldWeVlWQnZjeTU0SUMwZ2NtOXZkRU52Ym5SaGFXNWxjaTV5YjNSaGRHbHZiaTU1SUNrN1hISmNiaUFnSUNBZ0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2k1eWIzUmhkR2x2Ymk1NklDczlJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNWpZVzFsY21GTmIzVnpaVTF2ZG1WVGNHVmxaRm9nS2lBb0lIUmhjbWRsZEVOaGJXVnlZVkJ2Y3k1NUlDMGdjbTl2ZEVOdmJuUmhhVzVsY2k1eWIzUmhkR2x2Ymk1NklDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lFTmhiV1Z5WVUxaGJtRm5aWEl1Ykc5dmEwRjBWR0Z5WjJWMEtDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVjRzl6ZEhCeWIyTmxjM05wYm1jZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmpaVzVsTG05MlpYSnlhV1JsVFdGMFpYSnBZV3dnUFNCa1pYQjBhRTFoZEdWeWFXRnNPMXh5WEc0Z0lDQWdJQ0FnSUhKbGJtUmxjbVZ5TG5KbGJtUmxjaWdnYzJObGJtVXNJR05oYldWeVlTd2daR1Z3ZEdoVVlYSm5aWFFnS1R0Y2NseHVJQ0FnSUNBZ0lDQnpZMlZ1WlM1dmRtVnljbWxrWlUxaGRHVnlhV0ZzSUQwZ2JuVnNiRHRjY2x4dUlDQWdJQ0FnSUNCamIyMXdiM05sY2k1eVpXNWtaWElvS1R0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCeVpXNWtaWEpsY2k1eVpXNWtaWElvSUhOalpXNWxMQ0JqWVcxbGNtRWdLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzR2S2x4eVhHNGdLaUJNYjJGa2FXNW5JRzFsZEdodlpITmNjbHh1SUNvdlhISmNibVoxYm1OMGFXOXVJSFZ1Ykc5aFpGSmxZMjl5WkhNZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdadmNpQW9JSFpoY2lCcElEMGdNRHNnYVNBOElISmxZMjl5WkhNdWJHVnVaM1JvT3lCcEt5c2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1a1lYUmhJRDBnYm5Wc2JEdGNjbHh1SUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJwSUYwdWMyVjBWVzVoWTNScGRtVW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiRzloWkdWa1VtVmpiM0prY3lBOUlEQTdYSEpjYmlBZ0lDQnlaV052Y21SelJHRjBZVXhwYzNRZ1BTQmJYVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2JHOWhaRkpsWTI5eVpITWdLQ0J5WldOdmNtUnpSR0YwWVN3Z2MyaDFabVpzWlVKbFptOXlaVXh2WVdScGJtY3NJR1J2Ym1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WelpYUlRhRzkzYmxKbFkyOXlaQ2dnZEhKMVpTQXBPMXh5WEc1Y2NseHVJQ0FnSUhOb2IzZE1iMkZrYVc1bktDQm1kVzVqZEdsdmJpZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCc2IyRmtaV1JTWldOdmNtUnpJRDRnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFZ1Ykc5aFpGSmxZMjl5WkhNb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JSE5vZFdabWJHVkNaV1p2Y21WTWIyRmthVzVuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2MwUmhkR0VnUFNCemFIVm1abXhsS0NCeVpXTnZjbVJ6UkdGMFlTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvSUhaaGNpQnBJRDBnTURzZ2FTQThJSEpsWTI5eVpITXViR1Z1WjNSb0lDWW1JR2tnUENCeVpXTnZjbVJ6UkdGMFlTNXNaVzVuZEdnN0lHa3JLeUFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1a1lYUmhJRDBnY21WamIzSmtjMFJoZEdGYklHa2dYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2Mxc2dhU0JkTG5ObGRFRmpkR2wyWlNncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCcElGMHViV1Z6YUM1dFlYUmxjbWxoYkM1dFlYUmxjbWxoYkhNZ1BTQm5aWFJTWldOdmNtUk5ZWFJsY21saGJDZ2djbVZqYjNKa2MwUmhkR0ZiSUdrZ1hTNWpiM1psY2l3Z2NtVmpiM0prYzBSaGRHRmJJR2tnWFM1b1lYTlRiR1ZsZG1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBdkx5QjNhSGtnUHo5Y2NseHVJQ0FnSUNBZ0lDQXZMeUJzYjJGa1pXUlNaV052Y21SeklEMGdjbVZqYjNKa2MwUmhkR0V1YkdWdVozUm9JRHdnY21WamIzSmtjeTVzWlc1bmRHZ2dQeUJ5WldOdmNtUnpSR0YwWVM1c1pXNW5kR2dnT2lCeVpXTnZjbVJ6TG14bGJtZDBhRHRjY2x4dUlDQWdJQ0FnSUNCc2IyRmtaV1JTWldOdmNtUnpJRDBnY21WamIzSmtjeTVzWlc1bmRHZzdYSEpjYmlBZ0lDQWdJQ0FnY21WamIzSmtjMFJoZEdGTWFYTjBJRDBnY21WamIzSmtjMFJoZEdFN1hISmNiaUFnSUNBZ0lDQWdYSEpjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYUdsa1pVeHZZV1JwYm1jb1pHOXVaU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRU52Ym5OMFlXNTBjeTV2Ymt4dllXUnBibWRGYm1Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dNekF3TUNBcE8xeHlYRzRnSUNBZ2ZTazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdjMmgxWm1ac1pWSmxZMjl5WkhNZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnphSFZtWm14bFpGSmxZMjl5WkhNZ1BTQnlaV052Y21SelJHRjBZVXhwYzNRN1hISmNiaUFnSUNCemFIVm1abXhsWkZKbFkyOXlaSE1nUFNCemFIVm1abXhsS0NCemFIVm1abXhsWkZKbFkyOXlaSE1nS1R0Y2NseHVJQ0FnSUd4dllXUlNaV052Y21SektDQnphSFZtWm14bFpGSmxZMjl5WkhNZ0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQlNSVU5QVWtSVElGTkZURVZEVkVsUFRpQk5SVlJJVDBSVElDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibHh5WEc1bWRXNWpkR2x2YmlCelpXeGxZM1JTWldOdmNtUWdLQ0JwWkNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5iM0JsYm1Wa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabXhwY0VKaFkydFRaV3hsWTNSbFpGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJQ0U5UFNBbmIzQmxibWx1WnljZ0ppWWdhVzVtYjFCaGJtVnNVM1JoZEdVZ0lUMDlJQ2RqYkc5emFXNW5KeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJWc1pXTjBaV1JTWldOdmNtUWdQU0JwWkR0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCbWJHbHdVMlZzWldOMFpXUlNaV052Y21RZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2djbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhVzVtYjFCaGJtVnNVM1JoZEdVZ1BTQW5iM0JsYm1sdVp5YzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxZMjl5WkhOYklITmxiR1ZqZEdWa1VtVmpiM0prSUYwdVpteHBjRkpsWTI5eVpDZ2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNBbmIzQmxibVZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCRGIyNXpkR0Z1ZEhNdWIyNUpibVp2VUdGdVpXeFBjR1Z1WldRb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptRmtaVWx1S0NCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWFXNW1iME52Ym5SaGFXNWxjaUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENBek1EQWdLVHRjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHWnNhWEJDWVdOclUyVnNaV04wWldSU1pXTnZjbVFnS0dadmNtTmxLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjI5d1pXNWxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaaFpHVlBkWFFvSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1cGJtWnZRMjl1ZEdGcGJtVnlJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNBblkyeHZjMmx1WnljN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjB1Wm14cGNFSmhZMnRTWldOdmNtUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwZ0oyTnNiM05sWkNjN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUVOdmJuTjBZVzUwY3k1dmJrbHVabTlRWVc1bGJFTnNiM05sWkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUxDQm1iM0pqWlNBcE8xeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnZFhCa1lYUmxVMmh2ZDI1U1pXTnZjbVFnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZGpiRzl6WldRbklDWW1JSE5vYjNkdVVtVmpiM0prSUNFOUlITmxiR1ZqZEdWa1VtVmpiM0prSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCemFHOTNibEpsWTI5eVpDQTlJSE5sYkdWamRHVmtVbVZqYjNKa08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLQ0IyWVhJZ2NtVmpiM0prU1dRZ1BTQXdPeUJ5WldOdmNtUkpaQ0E4SUd4dllXUmxaRkpsWTI5eVpITTdJSEpsWTI5eVpFbGtLeXNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUhObGJHVmpkR1ZrVW1WamIzSmtJRDA5SUMweElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjSFZ6YUZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2djbVZqYjNKa1NXUWdQaUJ6Wld4bFkzUmxaRkpsWTI5eVpDQW1KbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtTV1FnUGlCeVpXTnZjbVJ6V3lCelpXeGxZM1JsWkZKbFkyOXlaQ0JkTG1OeVlYUmxTV1FnS2lCRGIyNXpkR0Z1ZEhNdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNZbVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21SSlpDQThJQ2dnY21WamIzSmtjMXNnYzJWc1pXTjBaV1JTWldOdmNtUWdYUzVqY21GMFpVbGtJQ29nUTI5dWMzUmhiblJ6TG5KbFkyOXlaSE5RWlhKRGNtRjBaU0FwSUNzZ1EyOXVjM1JoYm5SekxuSmxZMjl5WkhOUVpYSkRjbUYwWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCeVpXTnZjbVJKWkNCZExuQjFiR3hTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lISmxZMjl5WkVsa0lEMDlJSE5sYkdWamRHVmtVbVZqYjNKa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjMmh2ZDFKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJ5WldOdmNtUkpaQ0JkTG5CMWMyaFNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ5WlhObGRGTm9iM2R1VW1WamIzSmtJQ2dnWm05eVkyVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjI5d1pXNWxaQ2NnSmlZZ0lXWnZjbU5sSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ0lUMDlJQ2R2Y0dWdWFXNW5KeUFtSmlCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyTnNiM05wYm1jbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBbmIzQmxibVZrSnlBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pteHBjRUpoWTJ0VFpXeGxZM1JsWkZKbFkyOXlaQ2gwY25WbEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sYkdWamRHVmtVbVZqYjNKa0lEMGdMVEU3WEhKY2JpQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2k1eVpYTmxkRU5oYldWeVlTZ3BPMXh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyVnNaV04wVUhKbGRsSmxZMjl5WkNBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYzJWc1pXTjBVbVZqYjNKa0tHZGxkRkJ5WlhaQmRtRnBiR0ZpYkdWU1pXTnZjbVFvYzJWc1pXTjBaV1JTWldOdmNtUXBLVHRjY2x4dUlDQWdJRnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyVnNaV04wVG1WNGRGSmxZMjl5WkNBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYzJWc1pXTjBVbVZqYjNKa0tHZGxkRTVsZUhSQmRtRnBiR0ZpYkdWU1pXTnZjbVFvYzJWc1pXTjBaV1JTWldOdmNtUXBLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJuWlhSUWNtVjJRWFpoYVd4aFlteGxVbVZqYjNKa0lDaG1jbTl0VW1WamIzSmtLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JtY205dFVtVmpiM0prSUQwOUlDMHhJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtY205dFVtVmpiM0prSUQwZ2JHOWhaR1ZrVW1WamIzSmtjeUF0SURFN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnWm5KdmJWSmxZMjl5WkNBOElHeHZZV1JsWkZKbFkyOXlaSE1nTFNBeElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnWm5KdmJWSmxZMjl5WkNBcklERTdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabkp2YlZKbFkyOXlaQ0E5SURBN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUJ5WldOdmNtUnpXeUJtY205dFVtVmpiM0prSUYwdVlXTjBhWFpsSUQ4Z1puSnZiVkpsWTI5eVpDQTZJR2RsZEZCeVpYWkJkbUZwYkdGaWJHVlNaV052Y21Rb1puSnZiVkpsWTI5eVpDazdYSEpjYmlBZ0lDQmNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdkbGRFNWxlSFJCZG1GcGJHRmliR1ZTWldOdmNtUWdLR1p5YjIxU1pXTnZjbVFwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdaeWIyMVNaV052Y21RZ1BUMGdMVEVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaeWIyMVNaV052Y21RZ1BTQnNiMkZrWldSU1pXTnZjbVJ6SUMwZ01UdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCbWNtOXRVbVZqYjNKa0lENGdNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm5KdmJWSmxZMjl5WkNBOUlHWnliMjFTWldOdmNtUWdMU0F4TzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaeWIyMVNaV052Y21RZ1BTQnNiMkZrWldSU1pXTnZjbVJ6SUMwZ01UdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbFkyOXlaSE5iSUdaeWIyMVNaV052Y21RZ1hTNWhZM1JwZG1VZ1B5Qm1jbTl0VW1WamIzSmtJRG9nWjJWMFRtVjRkRUYyWVdsc1lXSnNaVkpsWTI5eVpDaG1jbTl0VW1WamIzSmtLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ1WVhacFoyRjBaVkpsWTI5eVpITWdLQ0JrYVhKbFkzUnBiMjRnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyTnNiM05sWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnWkdseVpXTjBhVzl1SUQwOVBTQW5jSEpsZGljZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUlFjbVYyVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUk9aWGgwVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dKaVlnUTI5dWMzUmhiblJ6TG1Oc2IzTmxTVzVtYjFCaGJtVnNUMjVUWTNKdmJHd2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYzJOeWIyeHNVbVZqYjNKa2N5QW9JR0poYzJWWkxDQnZiR1JFWld4MFlTQXBJSHRjY2x4dVhISmNiaUFnSUNCdmJHUkVaV3gwWVNBOUlDRnZiR1JFWld4MFlTQjhmQ0JOWVhSb0xtRmljeWdnYjJ4a1JHVnNkR0VnS1NBK0lEQXVOU0EvSURBdU5TQTZJRTFoZEdndVlXSnpLQ0J2YkdSRVpXeDBZU0FwTzF4eVhHNGdJQ0FnZG1GeUlHbHVkbVZ5YzJWRVpXeDBZU0E5SURFZ0xTQnZiR1JFWld4MFlUdGNjbHh1SUNBZ0lIWmhjaUJ6WTNKdmJHeFRjR1ZsWkNBOUlHbHVkbVZ5YzJWRVpXeDBZU0FxSUdsdWRtVnljMlZFWld4MFlTQXFJR2x1ZG1WeWMyVkVaV3gwWVNBcUlETXdNRHRjY2x4dVhISmNiaUFnSUNCelkzSnZiR3hTWldOdmNtUnpWR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5WVdJbktUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1pHVnNkR0VnUFNBb0lHSmhjMlZaSUMwZ2JXOTFjMlV1ZVNBcElDOGdZMkZ1ZG1GelNHVnBaMmgwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHUmxiSFJoSUQ0Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkRTVsZUhSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnZ1pHVnNkR0VnUENBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1pXTjBVSEpsZGxKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5qY205c2JGSmxZMjl5WkhNb0lHSmhjMlZaTENCa1pXeDBZU0FwTzF4eVhHNWNjbHh1SUNBZ0lIMHNJSE5qY205c2JGTndaV1ZrSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCRlZrVk9WRk1nU0VGT1JFeEpUa2NnSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1bWRXNWpkR2x2YmlCaWFXNWtSWFpsYm5SektDa2dlMXh5WEc1Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1eWIyOTBRMjl1ZEdGcGJtVnlMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2RFVDAxTmIzVnpaVk5qY205c2JDY3NJRzl1VTJOeWIyeHNSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWNtOXZkRU52Ym5SaGFXNWxjaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuYlc5MWMyVjNhR1ZsYkNjc0lHOXVVMk55YjJ4c1JYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11Y205dmRFTnZiblJoYVc1bGNpNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDQW5iVzkxYzJWdGIzWmxKeXdnYjI1TmIzVnpaVTF2ZG1WRmRtVnVkQ3dnWm1Gc2MyVWdLVHRjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeUxtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZHRiM1Z6WldSdmQyNG5MQ0J2YmsxdmRYTmxSRzkzYmtWMlpXNTBMQ0JtWVd4elpTQXBPMXh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbkp2YjNSRGIyNTBZV2x1WlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0oyMXZkWE5sZFhBbkxDQnZiazF2ZFhObFZYQkZkbVZ1ZEN3Z1ptRnNjMlVnS1R0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1eWIyOTBRMjl1ZEdGcGJtVnlMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2RqYjI1MFpYaDBiV1Z1ZFNjc0lHOXVVbWxuYUhSRGJHbGphMFYyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzVjY2x4dUlDQWdJSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDQW5hMlY1Wkc5M2JpY3NJRzl1UzJWNVJHOTNia1YyWlc1MExDQm1ZV3h6WlNBcE95QmNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lFTnZibk4wWVc1MGN5NTFjR1JoZEdWRFlXNTJZWE5UYVhwbFQyNVhhVzVrYjNkU1pYTnBlbVVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuY21WemFYcGxKeXdnYjI1WGFXNWtiM2RTWlhOcGVtVkZkbVZ1ZEN3Z1ptRnNjMlVnS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnZiazF2ZFhObFRXOTJaVVYyWlc1MElDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYlY5d2IzTjRJRDBnTUN4Y2NseHVJQ0FnSUNBZ0lDQnRYM0J2YzNrZ1BTQXdMRnh5WEc0Z0lDQWdJQ0FnSUdWZmNHOXplQ0E5SURBc1hISmNiaUFnSUNBZ0lDQWdaVjl3YjNONUlEMGdNQ3hjY2x4dUlDQWdJQ0FnSUNCdlltb2dQU0IwYUdsek8xeHlYRzVjY2x4dUlDQWdJQzh2WjJWMElHMXZkWE5sSUhCdmMybDBhVzl1SUc5dUlHUnZZM1Z0Wlc1MElHTnliM056WW5KdmQzTmxjbHh5WEc0Z0lDQWdhV1lnS0NBaFpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaU0E5SUhkcGJtUnZkeTVsZG1WdWREdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JsTG5CaFoyVllJSHg4SUdVdWNHRm5aVmtnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplQ0E5SUdVdWNHRm5aVmc3WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ1pTNXdZV2RsV1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHVXVZMnhwWlc1MFdDQjhmQ0JsTG1Oc2FXVnVkRmtnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplQ0E5SUdVdVkyeHBaVzUwV0NBcklHUnZZM1Z0Wlc1MExtSnZaSGt1YzJOeWIyeHNUR1ZtZENBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6WTNKdmJHeE1aV1owTzF4eVhHNGdJQ0FnSUNBZ0lHMWZjRzl6ZVNBOUlHVXVZMnhwWlc1MFdTQXJJR1J2WTNWdFpXNTBMbUp2WkhrdWMyTnliMnhzVkc5d0lDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRlJ2Y0R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHk5blpYUWdjR0Z5Wlc1MElHVnNaVzFsYm5RZ2NHOXphWFJwYjI0Z2FXNGdaRzlqZFcxbGJuUmNjbHh1SUNBZ0lHbG1JQ2dnYjJKcUxtOW1abk5sZEZCaGNtVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaVjl3YjNONElDczlJRzlpYWk1dlptWnpaWFJNWldaME8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbFgzQnZjM2tnS3owZ2IySnFMbTltWm5ObGRGUnZjRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0IzYUdsc1pTQW9JRzlpYWlBOUlHOWlhaTV2Wm1aelpYUlFZWEpsYm5RZ0tUc2dMeThnYW5Ob2FXNTBJR2xuYm05eVpUcHNhVzVsWEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzh2SUcxdmRYTmxJSEJ2YzJsMGFXOXVJRzFwYm5WeklHVnNiU0J3YjNOcGRHbHZiaUJwY3lCdGIzVnpaWEJ2YzJsMGFXOXVJSEpsYkdGMGFYWmxJSFJ2SUdWc1pXMWxiblE2WEhKY2JpQWdJQ0J0YjNWelpTNTRJRDBnYlY5d2IzTjRJQzBnWlY5d2IzTjRPMXh5WEc0Z0lDQWdiVzkxYzJVdWVTQTlJRzFmY0c5emVTQXRJR1ZmY0c5emVUdGNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUc5dVUyTnliMnhzUlhabGJuUWdLQ0JsSUNrZ2UxeHlYRzVjY2x4dVhISmNiaUFnSUNCcFppQW9JSGRvWldWc1JHbHlaV04wYVc5dUtDQmxJQ2tnUENBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVZWFpwWjJGMFpWSmxZMjl5WkhNb0lDZHdjbVYySnlBcE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWhkbWxuWVhSbFVtVmpiM0prY3lnZ0oyNWxlSFFuSUNrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUc5dVEyeHBZMnRGZG1WdWRDQW9JRzF2ZFhObFJHOTNibEJ2Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5ZMnh2YzJWa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUhabFkzUnZjbEJ2Y3lBOUlIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dLQ0FvSUNnZ2JXOTFjMlZFYjNkdVVHOXpMbmdnTFNCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1MExtOW1abk5sZEV4bFpuUWdLU0F2SUNnZ2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWRDNTNhV1IwYUNBcElDa2dLaUF5SUMwZ01TQXBMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUFvSUMwb0lDZ2diVzkxYzJWRWIzZHVVRzl6TG5rZ0xTQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbTltWm5ObGRGUnZjQ0FwSUM4Z0tDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbWhsYVdkb2RDQXBJQ2tnS2lBeUlDc2dNU0FwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I2T2lBd0xqVmNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2RtVmpkRzl5SUQwZ2JtVjNJRlJJVWtWRkxsWmxZM1J2Y2pNb0lIWmxZM1J2Y2xCdmN5NTRMQ0IyWldOMGIzSlFiM011ZVN3Z2RtVmpkRzl5VUc5ekxub2dLVHRjY2x4dUlDQWdJQ0FnSUNCMlpXTjBiM0l1ZFc1d2NtOXFaV04wS0NCallXMWxjbUVnS1R0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnY21GNVkyRnpkR1Z5SUQwZ2JtVjNJRlJJVWtWRkxsSmhlV05oYzNSbGNpZ2dZMkZ0WlhKaExuQnZjMmwwYVc5dUxDQjJaV04wYjNJdWMzVmlLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNGdLUzV1YjNKdFlXeHBlbVVvS1NBcE8xeHlYRzRnSUNBZ0lDQWdJSFpoY2lCcGJuUmxjbk5sWTNSeklEMGdjbUY1WTJGemRHVnlMbWx1ZEdWeWMyVmpkRTlpYW1WamRITW9JR055WVhSbGMwTnZiblJoYVc1bGNpNWphR2xzWkhKbGJpd2dkSEoxWlNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBdkx5QkpaaUJwYm5SbGNuTmxZM1FnYzI5dFpYUm9hVzVuWEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JwYm5SbGNuTmxZM1J6TG14bGJtZDBhQ0ErSURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1kyeHBZMnRsWkZKbFkyOXlaRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFZGxkQ0IwYUdVZ1ptbHljM1FnZG1semFXSnNaU0J5WldOdmNtUWdhVzUwWlhKelpXTjBaV1JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNnZ2RtRnlJR2tnUFNBd095QnBJRHdnYVc1MFpYSnpaV04wY3k1c1pXNW5kR2c3SUdrckt5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCcGJuUmxjbU5sY0hRZ1lTQnRaWE5vSUhkb2FXTm9JR2x6SUc1dmRDQmhJSEpsWTI5eVpDd2dZbkpsWVd0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnZEhsd1pXOW1LR2x1ZEdWeWMyVmpkSE5iSUdrZ1hTNXZZbXBsWTNRdWNtVmpiM0prU1dRcElEMDlQU0FuZFc1a1pXWnBibVZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnZ2FXNTBaWEp6WldOMGMxc2dhU0JkTG05aWFtVmpkQzUyYVhOcFlteGxJQ1ltSUdsdWRHVnljMlZqZEhOYklHa2dYUzV2WW1wbFkzUXVjbVZqYjNKa1NXUWdQajBnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhwWTJ0bFpGSmxZMjl5WkNBOUlISmxZMjl5WkhOYklHbHVkR1Z5YzJWamRITmJJR2tnWFM1dlltcGxZM1F1Y21WamIzSmtTV1FnWFR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdobGNtVWdhWE1nYjI1bFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2dZMnhwWTJ0bFpGSmxZMjl5WkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JSE5sYkdWamRHVmtVbVZqYjNKa0lEMDlQU0JqYkdsamEyVmtVbVZqYjNKa0xtbGtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWJHbHdVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpXeGxZM1JTWldOdmNtUW9JR05zYVdOclpXUlNaV052Y21RdWFXUWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJiR3dnYVc1MFpYSnpaV04wWldRZ2NtVmpiM0prY3lCaGNtVWdibTkwSUhacGMybGliR1Z6WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMyVjBVMmh2ZDI1U1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUU1dklISmxZMjl5WkNCb1lYTWdZbVZsYmlCcGJuUmxjbk5sWTNSbFpGeHlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ1EyOXVjM1JoYm5SekxtTnNiM05sU1c1bWIxQmhibVZzVDI1RGJHbGpheUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJRzl1VFc5MWMyVkViM2R1UlhabGJuUWdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1pTNWlkWFIwYjI0Z0lUMDlJREVnSmlZZ1pTNWlkWFIwYjI0Z0lUMDlJRElnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29JSE5qY205c2JGSmxZMjl5WkhOVWFXMWxiM1YwSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ1BUMDlJQ2RqYkc5elpXUW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyTnliMnhzVW1WamIzSmtjeWdnYlc5MWMyVXVlU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J0YjNWelpVUnZkMjVRYjNNZ1BTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJRzF2ZFhObExuZ3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRzF2ZFhObExubGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUc5dVRXOTFjMlZWY0VWMlpXNTBJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHVXVZblYwZEc5dUlDRTlQU0F4SUNZbUlHVXVZblYwZEc5dUlDRTlQU0F5SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamJHVmhja2x1ZEdWeWRtRnNLQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBcE8xeHlYRzRnSUNBZ0lDQWdJSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWjNKaFlpY3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZMeUJVY21sbloyVnlJSE5qWlc1bElHTnNhV05ySUdWMlpXNTBJRzl1YkhrZ2FXWWdiVzkxYzJWMWNDQmxkbVZ1ZENCcGN5QnViM1FnWVNCa2NtRm5JR1Z1WkNCbGRtVnVkQ0FtSUc1dmRDQmhJR05zYVdOcklHOXVJR0VnYkdsdWExeHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ1kyOXZjbVJ6UlhGMVlXeHpRWEJ3Y205NEtDQnRiM1Z6WlVSdmQyNVFiM01zSUcxdmRYTmxMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVaM0poWWxObGJuTnBkR2wyYVhSNUlDa2dKaVlnSVNnZ1pTNTBZWEpuWlhRZ0ppWWdaUzUwWVhKblpYUXVhR0Z6UVhSMGNtbGlkWFJsS0Nkb2NtVm1KeWtnS1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRzl1UTJ4cFkydEZkbVZ1ZENnZ2JXOTFjMlZFYjNkdVVHOXpJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHOXVVbWxuYUhSRGJHbGphMFYyWlc1MElDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCQ1lXTnJVMlZzWldOMFpXUlNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2IyNUxaWGxFYjNkdVJYWmxiblFnS0NCbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2daUzVyWlhsRGIyUmxJRDA5UFNBek55QjhmQ0JsTG10bGVVTnZaR1VnUFQwOUlETTRJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WVhacFoyRjBaVkpsWTI5eVpITW9JQ2R1WlhoMEp5QXBPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHVXVhMlY1UTI5a1pTQTlQVDBnTXprZ2ZId2daUzVyWlhsRGIyUmxJRDA5UFNBME1DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibUYyYVdkaGRHVlNaV052Y21SektDQW5jSEpsZGljZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyTnNiM05sWkNjZ0ppWWdaUzVyWlhsRGIyUmxJRDA5UFNBeE15QjhmQ0JsTG10bGVVTnZaR1VnUFQwOUlETXlLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1pzYVhCVFpXeGxZM1JsWkZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR1V1YTJWNVEyOWtaU0E5UFQwZ01qY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdiMjVYYVc1a2IzZFNaWE5wZW1WRmRtVnVkQ0FvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTJGc1kzVnNZWFJsUTJGdWRtRnpVMmw2WlNncE8xeHlYRzRnSUNBZ2MyVjBRMkZ1ZG1GelJHbHRaVzV6YVc5dWN5Z3BPMXh5WEc1Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG5ObGRGTnBlbVVvSUdOaGJuWmhjMWRwWkhSb0xDQmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVJQ0FnSUVOaGJXVnlZVTFoYm1GblpYSXVkWEJrWVhSbFEyRnRaWEpoUVhOd1pXTjBLQ0JqWVc1MllYTlhhV1IwYUNBdklHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTUwUkdWd2RHZ3VkbUZzZFdVZ1BTQmtaWEIwYUZSaGNtZGxkRHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1emFYcGxMblpoYkhWbExuTmxkQ2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuUmxlSFJsYkM1MllXeDFaUzV6WlhRb0lERXVNQ0F2SUdOaGJuWmhjMWRwWkhSb0xDQXhMakFnTHlCallXNTJZWE5JWldsbmFIUWdLVHRjY2x4dUlDQWdJRVpZUVVFdWRXNXBabTl5YlhNdWNtVnpiMngxZEdsdmJpNTJZV3gxWlM1elpYUW9JREVnTHlCallXNTJZWE5YYVdSMGFDd2dNU0F2SUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQWdJRlZKSUUxRlZFaFBSRk1nSUNBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5vYjNkTWIyRmthVzVuSUNnZ1pHOXVaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQm1ZV1JsU1c0b0lFTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NXNiMkZrYVc1blEyOXVkR0ZwYm1WeUlDazdYSEpjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLR1J2Ym1Vc0lERXdNREFwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdocFpHVk1iMkZrYVc1bklDZ2daRzl1WlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JtWVdSbFQzVjBLQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11Ykc5aFpHbHVaME52Ym5SaGFXNWxjaUFwTzF4eVhHNGdJQ0FnYzJWMFZHbHRaVzkxZENoa2IyNWxMQ0F4TURBd0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCSlRrbFVTVUZNU1ZOQlZFbFBUaUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHVhWFJUWTJWdVpTQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0x5OGdjMk5sYm1Vc0lISmxibVJsY21WeUxDQmpZVzFsY21Fc0xpNHVYSEpjYmlBZ0lDQnpZMlZ1WlNBOUlHNWxkeUJVU0ZKRlJTNVRZMlZ1WlNncE8xeHlYRzVjY2x4dUlDQWdJSEpsYm1SbGNtVnlJRDBnYm1WM0lGUklVa1ZGTGxkbFlrZE1VbVZ1WkdWeVpYSW9JSHRjY2x4dUlDQWdJQ0FnSUNCaGJuUnBZV3hwWVhNNklIUnlkV1ZjY2x4dUlDQWdJSDBnS1R0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG5ObGRGTnBlbVVvSUdOaGJuWmhjMWRwWkhSb0xDQmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVYSEpjYmlBZ0lDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVZMkZ1ZG1GelEyOXVkR0ZwYm1WeUxtRndjR1Z1WkVOb2FXeGtLQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwSUNrN1hISmNiaUFnSUNCeVpXNWtaWEpsY2k1a2IyMUZiR1Z0Wlc1MExtbGtJRDBnWENKamIyNTBaWGgwWENJN1hISmNiaUFnSUNCeVpXNWtaWEpsY2k1elpYUkRiR1ZoY2tOdmJHOXlLQ0JEYjI1emRHRnVkSE11WW1GamEyZHliM1Z1WkVOdmJHOXlMQ0F4SUNrN1hISmNibHh5WEc0Z0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2k1cGJtbDBLR05oYm5aaGMxZHBaSFJvSUM4Z1kyRnVkbUZ6U0dWcFoyaDBLVHRjY2x4dUlDQWdJR05oYldWeVlTQTlJRU5oYldWeVlVMWhibUZuWlhJdVoyVjBRMkZ0WlhKaEtDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlIZHZiMlJmZEdWNGRIVnlaU0E5SUZSSVVrVkZMa2x0WVdkbFZYUnBiSE11Ykc5aFpGUmxlSFIxY21Vb0lFTnZibk4wWVc1MGN5NWpjbUYwWlZSbGVIUjFjbVVnS1R0Y2NseHVJQ0FnSUhkdmIyUmZkR1Y0ZEhWeVpTNWhibWx6YjNSeWIzQjVJRDBnY21WdVpHVnlaWEl1WjJWMFRXRjRRVzVwYzI5MGNtOXdlU2dwTzF4eVhHNGdJQ0FnZDI5dlpGOXRZWFJsY21saGJDQTlJRzVsZHlCVVNGSkZSUzVOWlhOb1RHRnRZbVZ5ZEUxaGRHVnlhV0ZzS0NCN1hISmNiaUFnSUNBZ0lDQWdiV0Z3T2lCM2IyOWtYM1JsZUhSMWNtVmNjbHh1SUNBZ0lIMGdLVHRjY2x4dVhISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlJRDBnYm1WM0lGUklVa1ZGTGs5aWFtVmpkRE5FS0NrN1hISmNiaUFnSUNCamNtRjBaWE5EYjI1MFlXbHVaWElnUFNCdVpYY2dWRWhTUlVVdVQySnFaV04wTTBRb0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2djbTl2ZEVOdmJuUmhhVzVsY2lBcE8xeHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxjaTVoWkdRb0lHTnlZWFJsYzBOdmJuUmhhVzVsY2lBcE8xeHlYRzVjY2x4dUlDQWdJR2x1YVhSRGNtRjBaWE1vS1R0Y2NseHVJQ0FnSUdsdWFYUlNaV052Y21SektDazdYSEpjYmx4eVhHNGdJQ0FnYkdsbmFIUWdQU0J1WlhjZ1ZFaFNSVVV1VUc5cGJuUk1hV2RvZENnZ01IaEdSa1pHUmtZc0lFTnZibk4wWVc1MGN5NXNhV2RvZEVsdWRHVnVjMmwwZVNBcUlERXVNU0FwTzF4eVhHNGdJQ0FnYkdsbmFIUXVjRzl6YVhScGIyNHVjMlYwS0NBek1EQXNJRGd3TENBd0lDazdYSEpjYmlBZ0lDQnpZMlZ1WlM1aFpHUW9JR3hwWjJoMElDazdYSEpjYmx4eVhHNGdJQ0FnYkdWbWRFeHBaMmgwSUQwZ2JtVjNJRlJJVWtWRkxsQnZhVzUwVEdsbmFIUW9JREI0UmtaR1JrWkdMQ0JEYjI1emRHRnVkSE11YkdsbmFIUkpiblJsYm5OcGRIa2dLaUF3TGpZZ0tUdGNjbHh1SUNBZ0lHeGxablJNYVdkb2RDNXdiM05wZEdsdmJpNXpaWFFvSUMweE1EQXNJRE13TUN3Z01UQXdNQ0FwTzF4eVhHNGdJQ0FnYzJObGJtVXVZV1JrS0NCc1pXWjBUR2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0J5YVdkb2RFeHBaMmgwSUQwZ2JtVjNJRlJJVWtWRkxsQnZhVzUwVEdsbmFIUW9JREI0UmtaR1JrWkdMQ0JEYjI1emRHRnVkSE11YkdsbmFIUkpiblJsYm5OcGRIa2dLaUF3TGpZZ0tUdGNjbHh1SUNBZ0lISnBaMmgwVEdsbmFIUXVjRzl6YVhScGIyNHVjMlYwS0NBdE1UQXdMQ0F6TURBc0lDMHhNREF3SUNrN1hISmNiaUFnSUNCelkyVnVaUzVoWkdRb0lISnBaMmgwVEdsbmFIUWdLVHRjY2x4dVhISmNiaUFnSUNCcGJtbDBVRzl6ZEZCeWIyTmxjM05wYm1jb0tUdGNjbHh1WEhKY2JpQWdJQ0JpYVc1a1JYWmxiblJ6S0NrN1hISmNibHh5WEc0Z0lDQWdMeThnUkU5TklITmxkSFZ3WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11Y205dmRFTnZiblJoYVc1bGNpNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZHlaV3hoZEdsMlpTYzdYSEpjYmlBZ0lDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVZMkZ1ZG1GelEyOXVkR0ZwYm1WeUxuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ0oyRmljMjlzZFhSbEp6dGNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NXBibVp2UTI5dWRHRnBibVZ5TG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnSjJGaWMyOXNkWFJsSnp0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1c2IyRmthVzVuUTI5dWRHRnBibVZ5TG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnSjJGaWMyOXNkWFJsSnp0Y2NseHVYSEpjYmlBZ0lDQnpaWFJEWVc1MllYTkVhVzFsYm5OcGIyNXpLQ2s3WEhKY2JseHlYRzRnSUNBZ2FHbGtaVVZzWlcxbGJuUW9RMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbWx1Wm05RGIyNTBZV2x1WlhJcE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1EyOXVjM1JoYm5SekxtUmxZblZuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcGJtbDBSR1ZpZFdjb0tUdGNjbHh1SUNBZ0lDQWdJQ0JwYm1sMFIxVkpLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsYzJWMFUyaHZkMjVTWldOdmNtUW9LVHRjY2x4dUlDQWdJR0Z1YVcxaGRHVW9LVHRjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHVhWFJRYjNOMFVISnZZMlZ6YzJsdVp5QW9LU0I3WEhKY2JseHlYRzRnSUNBZ1pHVndkR2hUYUdGa1pYSWdQU0JVU0ZKRlJTNVRhR0ZrWlhKTWFXSXVaR1Z3ZEdoU1IwSkJPMXh5WEc0Z0lDQWdaR1Z3ZEdoVmJtbG1iM0p0Y3lBOUlGUklVa1ZGTGxWdWFXWnZjbTF6VlhScGJITXVZMnh2Ym1Vb0lHUmxjSFJvVTJoaFpHVnlMblZ1YVdadmNtMXpJQ2s3WEhKY2JseHlYRzRnSUNBZ1pHVndkR2hOWVhSbGNtbGhiQ0E5SUc1bGR5QlVTRkpGUlM1VGFHRmtaWEpOWVhSbGNtbGhiQ2dnZTF4eVhHNGdJQ0FnSUNBZ0lHWnlZV2R0Wlc1MFUyaGhaR1Z5T2lCa1pYQjBhRk5vWVdSbGNpNW1jbUZuYldWdWRGTm9ZV1JsY2l4Y2NseHVJQ0FnSUNBZ0lDQjJaWEowWlhoVGFHRmtaWEk2SUdSbGNIUm9VMmhoWkdWeUxuWmxjblJsZUZOb1lXUmxjaXhjY2x4dUlDQWdJQ0FnSUNCMWJtbG1iM0p0Y3pvZ1pHVndkR2hWYm1sbWIzSnRjMXh5WEc0Z0lDQWdmU0FwTzF4eVhHNGdJQ0FnWkdWd2RHaE5ZWFJsY21saGJDNWliR1Z1WkdsdVp5QTlJRlJJVWtWRkxrNXZRbXhsYm1ScGJtYzdYSEpjYmx4eVhHNGdJQ0FnWkdWd2RHaFVZWEpuWlhRZ1BTQnVaWGNnVkVoU1JVVXVWMlZpUjB4U1pXNWtaWEpVWVhKblpYUW9JR05oYm5aaGMxZHBaSFJvTENCallXNTJZWE5JWldsbmFIUXNJSHRjY2x4dUlDQWdJQ0FnSUNCdGFXNUdhV3gwWlhJNklGUklVa1ZGTGs1bFlYSmxjM1JHYVd4MFpYSXNYSEpjYmlBZ0lDQWdJQ0FnYldGblJtbHNkR1Z5T2lCVVNGSkZSUzVPWldGeVpYTjBSbWxzZEdWeUxGeHlYRzRnSUNBZ0lDQWdJR1p2Y20xaGREb2dWRWhTUlVVdVVrZENRVVp2Y20xaGRGeHlYRzRnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUdOdmJYQnZjMlZ5SUQwZ2JtVjNJRlJJVWtWRkxrVm1abVZqZEVOdmJYQnZjMlZ5S0NCeVpXNWtaWEpsY2lBcE8xeHlYRzRnSUNBZ1kyOXRjRzl6WlhJdVlXUmtVR0Z6Y3lnZ2JtVjNJRlJJVWtWRkxsSmxibVJsY2xCaGMzTW9JSE5qWlc1bExDQmpZVzFsY21FZ0tTQXBPMXh5WEc1Y2NseHVYSEpjYmlBZ0lDQXZLajA5UFQwOVBUMDlQVDBnSUVSbGNIUm9JRzltSUdacFpXeGtJSE5vWVdSbGNpQWdQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzRnSUNBZ1pHOW1JRDBnYm1WM0lGUklVa1ZGTGxOb1lXUmxjbEJoYzNNb0lGUklVa1ZGTGtSdlJsTm9ZV1JsY2lBcE8xeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMblJFWlhCMGFDNTJZV3gxWlNBOUlHUmxjSFJvVkdGeVoyVjBPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5OcGVtVXVkbUZzZFdVdWMyVjBLQ0JqWVc1MllYTlhhV1IwYUN3Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWRHVjRkR1ZzTG5aaGJIVmxMbk5sZENnZ01TNHdJQzhnWTJGdWRtRnpWMmxrZEdnc0lERXVNQ0F2SUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUM4dmJXRnJaU0J6ZFhKbElIUm9ZWFFnZEdobGMyVWdkSGR2SUhaaGJIVmxjeUJoY21VZ2RHaGxJSE5oYldVZ1ptOXlJSGx2ZFhJZ1kyRnRaWEpoTENCdmRHaGxjbmRwYzJVZ1pHbHpkR0Z1WTJWeklIZHBiR3dnWW1VZ2QzSnZibWN1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWVtNWxZWEl1ZG1Gc2RXVWdQU0JqWVcxbGNtRXVibVZoY2pzZ0x5OWpZVzFsY21FZ1kyeHBjSEJwYm1jZ2MzUmhjblJjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1NlptRnlMblpoYkhWbElEMGdZMkZ0WlhKaExtWmhjanNnTHk5allXMWxjbUVnWTJ4cGNIQnBibWNnWlc1a1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1adlkyRnNSR1Z3ZEdndWRtRnNkV1VnUFNBMU95QXZMMlp2WTJGc0lHUnBjM1JoYm1ObElIWmhiSFZsSUdsdUlHMWxkR1Z5Y3l3Z1luVjBJSGx2ZFNCdFlYa2dkWE5sSUdGMWRHOW1iMk4xY3lCdmNIUnBiMjRnWW1Wc2IzZGNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtYjJOaGJFeGxibWQwYUM1MllXeDFaU0E5SUdOaGJXVnlZUzVtYjJOaGJFeGxibWQwYURzZ0x5OW1iMk5oYkNCc1pXNW5kR2dnYVc0Z2JXMWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtYzNSdmNDNTJZV3gxWlNBOUlEZ3VNRHNnTHk5bUxYTjBiM0FnZG1Gc2RXVmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTV6YUc5M1JtOWpkWE11ZG1Gc2RXVWdQU0JtWVd4elpUc2dMeTl6YUc5M0lHUmxZblZuSUdadlkzVnpJSEJ2YVc1MElHRnVaQ0JtYjJOaGJDQnlZVzVuWlNBb2IzSmhibWRsSUQwZ1ptOWpZV3dnY0c5cGJuUXNJR0pzZFdVZ1BTQm1iMk5oYkNCeVlXNW5aU2xjY2x4dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXViV0Z1ZFdGc1pHOW1MblpoYkhWbElEMGdkSEoxWlRzZ0x5OXRZVzUxWVd3Z1pHOW1JR05oYkdOMWJHRjBhVzl1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWJtUnZabk4wWVhKMExuWmhiSFZsSUQwZ01URTdJQzh2Ym1WaGNpQmtiMllnWW14MWNpQnpkR0Z5ZEZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtNWtiMlprYVhOMExuWmhiSFZsSUQwZ09EQTdJQzh2Ym1WaGNpQmtiMllnWW14MWNpQm1ZV3hzYjJabUlHUnBjM1JoYm1ObElDQWdJRnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1aa2IyWnpkR0Z5ZEM1MllXeDFaU0E5SURBN0lDOHZabUZ5SUdSdlppQmliSFZ5SUhOMFlYSjBYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm1SdlptUnBjM1F1ZG1Gc2RXVWdQU0F4TURBN0lDOHZabUZ5SUdSdlppQmliSFZ5SUdaaGJHeHZabVlnWkdsemRHRnVZMlVnWEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMa052UXk1MllXeDFaU0E5SURBdU1ETTdJQzh2WTJseVkyeGxJRzltSUdOdmJtWjFjMmx2YmlCemFYcGxJR2x1SUcxdElDZ3pOVzF0SUdacGJHMGdQU0F3TGpBemJXMHBJQ0FnSUZ4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTUyYVdkdVpYUjBhVzVuTG5aaGJIVmxJRDBnWm1Gc2MyVTdJQzh2ZFhObElHOXdkR2xqWVd3Z2JHVnVjeUIyYVdkdVpYUjBhVzVuUDF4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVoZFhSdlptOWpkWE11ZG1Gc2RXVWdQU0IwY25WbE95QXZMM1Z6WlNCaGRYUnZabTlqZFhNZ2FXNGdjMmhoWkdWeVB5QmthWE5oWW14bElHbG1JSGx2ZFNCMWMyVWdaWGgwWlhKdVlXd2dabTlqWVd4RVpYQjBhQ0IyWVd4MVpWeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTNWekxuWmhiSFZsTG5ObGRDZ2dNQzR6TlN3Z01DNHpOU0FwT3lBdkx5QmhkWFJ2Wm05amRYTWdjRzlwYm5RZ2IyNGdjMk55WldWdUlDZ3dMakFzTUM0d0lDMGdiR1ZtZENCc2IzZGxjaUJqYjNKdVpYSXNJREV1TUN3eExqQWdMU0IxY0hCbGNpQnlhV2RvZENrZ1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXViV0Y0WW14MWNpNTJZV3gxWlNBOUlFTnZibk4wWVc1MGN5NWliSFZ5UVcxdmRXNTBPeUF2TDJOc1lXMXdJSFpoYkhWbElHOW1JRzFoZUNCaWJIVnlJQ2d3TGpBZ1BTQnVieUJpYkhWeUxERXVNQ0JrWldaaGRXeDBLU0FnSUNCY2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZEdoeVpYTm9iMnhrTG5aaGJIVmxJRDBnTURzZ0x5OW9hV2RvYkdsbmFIUWdkR2h5WlhOb2IyeGtPMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1kaGFXNHVkbUZzZFdVZ1BTQXdPeUF2TDJocFoyaHNhV2RvZENCbllXbHVPMXh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NWlhV0Z6TG5aaGJIVmxJRDBnTURzZ0x5OWliMnRsYUNCbFpHZGxJR0pwWVhNZ0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtWnlhVzVuWlM1MllXeDFaU0E5SURBN0lDOHZZbTlyWldnZ1kyaHliMjFoZEdsaklHRmlaWEp5WVhScGIyNHZabkpwYm1kcGJtZGNjbHh1WEhKY2JpQWdJQ0JHV0VGQklEMGdibVYzSUZSSVVrVkZMbE5vWVdSbGNsQmhjM01vSUZSSVVrVkZMa1pZUVVGVGFHRmtaWElnS1R0Y2NseHVYSEpjYmlBZ0lDQkdXRUZCTG5WdWFXWnZjbTF6TG5KbGMyOXNkWFJwYjI0dWRtRnNkV1V1YzJWMEtDQXhJQzhnWTJGdWRtRnpWMmxrZEdnc0lERWdMeUJqWVc1MllYTklaV2xuYUhRZ0tUdGNjbHh1SUNBZ0lFWllRVUV1Y21WdVpHVnlWRzlUWTNKbFpXNGdQU0IwY25WbE8xeHlYRzVjY2x4dUlDQWdJR052YlhCdmMyVnlMbUZrWkZCaGMzTW9JR1J2WmlBcE8xeHlYRzRnSUNBZ1kyOXRjRzl6WlhJdVlXUmtVR0Z6Y3lnZ1JsaEJRU0FwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdsdWFYUkVaV0oxWnlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYzNSaGRITWdQU0J1WlhjZ1UzUmhkSE1vS1R0Y2NseHVJQ0FnSUhOMFlYUnpMbVJ2YlVWc1pXMWxiblF1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWVdKemIyeDFkR1VuTzF4eVhHNGdJQ0FnYzNSaGRITXVaRzl0Uld4bGJXVnVkQzV6ZEhsc1pTNXNaV1owSUQwZ1hDSXdYQ0k3WEhKY2JpQWdJQ0J6ZEdGMGN5NWtiMjFGYkdWdFpXNTBMbk4wZVd4bExuUnZjQ0E5SUZ3aU1Gd2lPMXh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbkp2YjNSRGIyNTBZV2x1WlhJdVlYQndaVzVrUTJocGJHUW9JSE4wWVhSekxtUnZiVVZzWlcxbGJuUWdLVHRjY2x4dVhISmNiaUFnSUNCMllYSWdaR1ZpZFdjZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0F5TUN3Z01qQXNJREl3TENBeExDQXhMQ0F4SUNrZ0tUdGNjbHh1SUNBZ0lHUmxZblZuTG5CdmMybDBhVzl1TG5ObGRDaGNjbHh1SUNBZ0lDQWdJQ0JzYVdkb2RDNXdiM05wZEdsdmJpNTRMRnh5WEc0Z0lDQWdJQ0FnSUd4cFoyaDBMbkJ2YzJsMGFXOXVMbmtzWEhKY2JpQWdJQ0FnSUNBZ2JHbG5hSFF1Y0c5emFYUnBiMjR1ZWx4eVhHNGdJQ0FnS1R0Y2NseHVJQ0FnSUhOalpXNWxMbUZrWkNnZ1pHVmlkV2NnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCcGJtbDBSMVZKSUNncElIdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1kyRnRaWEpoUm05c1pHVnlMRnh5WEc0Z0lDQWdJQ0FnSUdOaGJXVnlZVVp2WTJGc1RHVnVaM1JvTEZ4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpeGNjbHh1SUNBZ0lDQWdJQ0JmYkdGemREdGNjbHh1WEhKY2JpQWdJQ0JuZFdrZ1BTQnVaWGNnWkdGMExrZFZTU2dwTzF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0JqWVcxbGNtRkdiMnhrWlhJZ1BTQm5kV2t1WVdSa1JtOXNaR1Z5S0NBblEyRnRaWEpoSnlBcE8xeHlYRzRnSUNBZ1kyRnRaWEpoUm05allXeE1aVzVuZEdnZ1BTQmpZVzFsY21GR2IyeGtaWEl1WVdSa0tDQmpZVzFsY21Fc0lDZG1iMk5oYkV4bGJtZDBhQ2NzSURJNExDQXlNREFnS1M1dVlXMWxLQ0FuUm05allXd2dUR1Z1WjNSb0p5QXBPMXh5WEc0Z0lDQWdZMkZ0WlhKaFJtOWpZV3hNWlc1bmRHZ3ViMjVEYUdGdVoyVW9JSFZ3WkdGMFpVTmhiV1Z5WVNBcE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1EyOXVjM1JoYm5SekxuQnZjM1J3Y205alpYTnphVzVuSUNrZ2UxeHlYRzVjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlJRDBnWjNWcExtRmtaRVp2YkdSbGNpZ2dKMFJsY0hSb0lHOW1JRVpwWld4a0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTmhiRVJsY0hSb0xDQW5kbUZzZFdVbkxDQXdMQ0F4TUNBcExtNWhiV1VvSUNkR2IyTmhiQ0JFWlhCMGFDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVpuTjBiM0FzSUNkMllXeDFaU2NzSURBc0lESXlJQ2t1Ym1GdFpTZ2dKMFlnVTNSdmNDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWJXRjRZbXgxY2l3Z0ozWmhiSFZsSnl3Z01Dd2dNeUFwTG01aGJXVW9JQ2R0WVhnZ1lteDFjaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5Ob2IzZEdiMk4xY3l3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkVGFHOTNJRVp2WTJGc0lGSmhibWRsSnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWJXRnVkV0ZzWkc5bUxDQW5kbUZzZFdVbklDa3VibUZ0WlNnZ0owMWhiblZoYkNCRWIwWW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtNWtiMlp6ZEdGeWRDd2dKM1poYkhWbEp5d2dNQ3dnTWpBd0lDa3VibUZ0WlNnZ0oyNWxZWElnYzNSaGNuUW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtNWtiMlprYVhOMExDQW5kbUZzZFdVbkxDQXdMQ0F5TURBZ0tTNXVZVzFsS0NBbmJtVmhjaUJtWVd4c2IyWm1KeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW1aRzltYzNSaGNuUXNJQ2QyWVd4MVpTY3NJREFzSURJd01DQXBMbTVoYldVb0lDZG1ZWElnYzNSaGNuUW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWmtiMlprYVhOMExDQW5kbUZzZFdVbkxDQXdMQ0F5TURBZ0tTNXVZVzFsS0NBblptRnlJR1poYkd4dlptWW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVEYjBNc0lDZDJZV3gxWlNjc0lEQXNJREF1TVNBcExuTjBaWEFvSURBdU1EQXhJQ2t1Ym1GdFpTZ2dKMk5wY21Oc1pTQnZaaUJqYjI1bWRYTnBiMjRuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1MmFXZHVaWFIwYVc1bkxDQW5kbUZzZFdVbklDa3VibUZ0WlNnZ0oxWnBaMjVsZEhScGJtY25JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxuWnBaMjV2ZFhRc0lDZDJZV3gxWlNjc0lEQXNJRElnS1M1dVlXMWxLQ0FuYjNWMFpYSWdZbTl5WkdWeUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1MmFXZHVhVzRzSUNkMllXeDFaU2NzSURBc0lERWdLUzV6ZEdWd0tDQXdMakF4SUNrdWJtRnRaU2dnSjJsdWJtVnlJR0p2Y21SbGNpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWRtbG5ibVpoWkdVc0lDZDJZV3gxWlNjc0lEQXNJREl5SUNrdWJtRnRaU2dnSjJaaFpHVWdZWFFuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1aGRYUnZabTlqZFhNc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblFYVjBiMlp2WTNWekp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTjFjeTUyWVd4MVpTd2dKM2duTENBd0xDQXhJQ2t1Ym1GdFpTZ2dKMlp2WTNWeklIZ25JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWnZZM1Z6TG5aaGJIVmxMQ0FuZVNjc0lEQXNJREVnS1M1dVlXMWxLQ0FuWm05amRYTWdlU2NnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5Sb2NtVnphRzlzWkN3Z0ozWmhiSFZsSnl3Z01Dd2dNU0FwTG5OMFpYQW9JREF1TURFZ0tTNXVZVzFsS0NBbmRHaHlaWE5vYjJ4a0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bllXbHVMQ0FuZG1Gc2RXVW5MQ0F3TENBeE1EQWdLUzV1WVcxbEtDQW5aMkZwYmljZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtSnBZWE1zSUNkMllXeDFaU2NzSURBc0lEUWdLUzV6ZEdWd0tDQXdMakF4SUNrdWJtRnRaU2dnSjJKcFlYTW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWnlhVzVuWlN3Z0ozWmhiSFZsSnl3Z01Dd2dOU0FwTG5OMFpYQW9JREF1TURFZ0tTNXVZVzFsS0NBblpuSnBibWRsSnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWJtOXBjMlVzSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuVlhObElFNXZhWE5sSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV1WVcxdmRXNTBMQ0FuZG1Gc2RXVW5MQ0F3TENBd0xqQXdNU0FwTG5OMFpYQW9JREF1TURBd01TQXBMbTVoYldVb0lDZGthWFJvWlhJbklDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NWtaWEIwYUdKc2RYSXNJQ2QyWVd4MVpTY2dLUzV1WVcxbEtDQW5RbXgxY2lCRVpYQjBhQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVaR0p6YVhwbExDQW5kbUZzZFdVbkxDQXdMQ0ExSUNrdWJtRnRaU2dnSjJKc2RYSWdjMmw2WlNjZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1ozVnBMbU5zYjNObEtDazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdkWEJrWVhSbFEyRnRaWEpoSUNncElIdGNjbHh1WEhKY2JpQWdJQ0JqWVcxbGNtRXVjMlYwVEdWdWN5Z2dZMkZ0WlhKaExtWnZZMkZzVEdWdVozUm9MQ0JqWVcxbGNtRXVabkpoYldWVGFYcGxJQ2s3WEhKY2JpQWdJQ0JqWVcxbGNtRXVkWEJrWVhSbFVISnZhbVZqZEdsdmJrMWhkSEpwZUNncE8xeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTJGc1RHVnVaM1JvTG5aaGJIVmxJRDBnWTJGdFpYSmhMbVp2WTJGc1RHVnVaM1JvTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdsdWFYUkRjbUYwWlhNZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdadmNpQW9JSFpoY2lCamNtRjBaVWxrSUQwZ01Ec2dZM0poZEdWSlpDQThJRU52Ym5OMFlXNTBjeTV1WWtOeVlYUmxjenNnWTNKaGRHVkpaQ3NySUNrZ2UxeHlYRzRnSUNBZ0lDQWdJSFpoY2lCamNtRjBaU0E5SUdOeVpXRjBaVU55WVhSbEtDQmpjbUYwWlVsa0lDazdYSEpjYmlBZ0lDQWdJQ0FnWTNKaGRHVnpRMjl1ZEdGcGJtVnlMbUZrWkNnZ1kzSmhkR1VnS1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdOeVlYUmxjME52Ym5SaGFXNWxjaTV3YjNOcGRHbHZiaTU2SUQwZ0xTZ2dNVEV3SUMwZ0tDQXhNVEFnS2lCRGIyNXpkR0Z1ZEhNdWJtSkRjbUYwWlhNZ0tTQXBJQzhnTWp0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZEY21GMFpTQW9JR2xrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR055WVhSbGMxc2dhV1FnWFNBOUlHNWxkeUJVU0ZKRlJTNVBZbXBsWTNRelJDZ3BPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmliM2hmWW05MGRHOXRJRDBnYm1WM0lGUklVa1ZGTGsxbGMyZ29JRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNnZ01qQXdMQ0F4TUN3Z01UQXdJQ2tzSUhkdmIyUmZiV0YwWlhKcFlXd2dLVHRjY2x4dUlDQWdJR055WVhSbGMxc2dhV1FnWFM1aFpHUW9JR0p2ZUY5aWIzUjBiMjBnS1R0Y2NseHVYSEpjYmlBZ0lDQjJZWElnWW05NFgyeGxablFnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXlNREFzSURFd0xDQTRNQ0FwTENCM2IyOWtYMjFoZEdWeWFXRnNJQ2s3WEhKY2JpQWdJQ0JpYjNoZmJHVm1kQzV3YjNOcGRHbHZiaTV6WlhRb0lEQXNJRE0xTENBdE5UVWdLVHRjY2x4dUlDQWdJR0p2ZUY5c1pXWjBMbkp2ZEdGMGFXOXVMbmdnUFNCTllYUm9MbEJKSUM4Z01qdGNjbHh1SUNBZ0lHTnlZWFJsYzFzZ2FXUWdYUzVoWkdRb0lHSnZlRjlzWldaMElDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBaQ0E5UFQwZ01DQXBJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdZbTk0WDNKcFoyaDBJRDBnYm1WM0lGUklVa1ZGTGsxbGMyZ29JRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNnZ01qQXdMQ0F4TUN3Z09EQWdLU3dnZDI5dlpGOXRZWFJsY21saGJDQXBPMXh5WEc0Z0lDQWdJQ0FnSUdKdmVGOXlhV2RvZEM1d2IzTnBkR2x2Ymk1elpYUW9JREFzSURNMUxDQTFOU0FwTzF4eVhHNGdJQ0FnSUNBZ0lHSnZlRjl5YVdkb2RDNXliM1JoZEdsdmJpNTRJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNBZ0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDNKcFoyaDBJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2RtRnlJR0p2ZUY5aVlXTnJJRDBnYm1WM0lGUklVa1ZGTGsxbGMyZ29JRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNnZ09EQXNJREV3TENBeE1qQWdLU3dnZDI5dlpGOXRZWFJsY21saGJDQXBPMXh5WEc0Z0lDQWdZbTk0WDJKaFkyc3VjRzl6YVhScGIyNHVjMlYwS0NBdE1UQTFMQ0F6TlN3Z01DQXBPMXh5WEc0Z0lDQWdZbTk0WDJKaFkyc3VjbTkwWVhScGIyNHVlaUE5SUUxaGRHZ3VVRWtnTHlBeU8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbUZrWkNnZ1ltOTRYMkpoWTJzZ0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1ltOTRYMlp5YjI1MElEMGdibVYzSUZSSVVrVkZMazFsYzJnb0lHNWxkeUJVU0ZKRlJTNUNiM2hIWlc5dFpYUnllU2dnTkRBc0lERXdMQ0F4TURBZ0tTd2dkMjl2WkY5dFlYUmxjbWxoYkNBcE8xeHlYRzRnSUNBZ1ltOTRYMlp5YjI1MExuQnZjMmwwYVc5dUxuTmxkQ2dnT1RVc0lESTFMQ0F3SUNrN1hISmNiaUFnSUNCaWIzaGZabkp2Ym5RdWNtOTBZWFJwYjI0dWVpQTlJRTFoZEdndVVFa2dMeUF5TzF4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZExtRmtaQ2dnWW05NFgyWnliMjUwSUNrN1hISmNibHh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG5CdmMybDBhVzl1TG5vZ1BTQXRNVEV3SUNvZ2FXUTdYSEpjYmlBZ0lDQnlaWFIxY200Z1kzSmhkR1Z6V3lCcFpDQmRPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJR2x1YVhSU1pXTnZjbVJ6SUNncElIdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1kzVnljbVZ1ZEZKbFkyOXlaRWxrSUQwZ01EdGNjbHh1SUNBZ0lHWnZjaUFvSUhaaGNpQmpjbUYwWlVsa0lEMGdNRHNnWTNKaGRHVkpaQ0E4SUdOeVlYUmxjeTVzWlc1bmRHZzdJR055WVhSbFNXUXJLeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDZ2dkbUZ5SUhCdmN5QTlJREE3SUhCdmN5QThJRU52Ym5OMFlXNTBjeTV5WldOdmNtUnpVR1Z5UTNKaGRHVTdJSEJ2Y3lzcklDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpjbVZoZEdWU1pXTnZjbVFvSUdOMWNuSmxiblJTWldOdmNtUkpaQ3dnWTNKaGRHVkpaQ3dnY0c5eklDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SU1pXTnZjbVJKWkNzck8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTnlaV0YwWlZKbFkyOXlaQ0FvSUdsa0xDQmpjbUYwWlVsa0xDQndiM01nS1NCN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhKbFkyOXlaQ0E5SUc1bGR5QlNaV052Y21Rb0lHbGtMQ0JqY21GMFpVbGtMQ0J3YjNNZ0tUdGNjbHh1SUNBZ0lHTnlZWFJsYzFzZ1kzSmhkR1ZKWkNCZExtRmtaQ2dnY21WamIzSmtMbTFsYzJnZ0tUdGNjbHh1SUNBZ0lISmxZMjl5WkhNdWNIVnphQ2dnY21WamIzSmtJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWjJWMFVtVmpiM0prVFdGMFpYSnBZV3dnS0NCemNtTXNJR2hoYzFOc1pXVjJaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYVcxbklEMGdibVYzSUVsdFlXZGxLQ2s3WEhKY2JpQWdJQ0JwYldjdVkzSnZjM05QY21sbmFXNGdQU0JjSWtGdWIyNTViVzkxYzF3aU8xeHlYRzRnSUNBZ2FXMW5Mbk55WXlBOUlITnlZeUEvSUhOeVl5QTZJQ2NuTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJwYldkWGFXUjBhQ0E5SURRd01DeGNjbHh1SUNBZ0lDQWdJQ0JwYldkSVpXbG5hSFFnUFNBME1EQXNYSEpjYmlBZ0lDQWdJQ0FnYldGd1EyRnVkbUZ6SUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2dnSjJOaGJuWmhjeWNnS1R0Y2NseHVYSEpjYmlBZ0lDQnRZWEJEWVc1MllYTXVkMmxrZEdnZ1BTQnRZWEJEWVc1MllYTXVhR1ZwWjJoMElEMGdOREF3TzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUIwWlhoMGRYSmxJRDBnYm1WM0lGUklVa1ZGTGxSbGVIUjFjbVVvSUcxaGNFTmhiblpoY3lBcE8xeHlYRzRnSUNBZ2RHVjRkSFZ5WlM1dGFXNUdhV3gwWlhJZ1BTQlVTRkpGUlM1TWFXNWxZWEpHYVd4MFpYSTdYSEpjYmx4eVhHNGdJQ0FnYVcxbkxtOXViRzloWkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCb1lYTlRiR1ZsZG1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2MyeGxaWFpsSUQwZ2JtVjNJRWx0WVdkbEtDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITnNaV1YyWlM1emNtTWdQU0JEYjI1emRHRnVkSE11YzJ4bFpYWmxUV0Z6YTFSbGVIUjFjbVU3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCemJHVmxkbVV1YjI1c2IyRmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmpkSGdnUFNCdFlYQkRZVzUyWVhNdVoyVjBRMjl1ZEdWNGRDZ2dKekprSnlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1I0TG5SeVlXNXpiR0YwWlNnZ2FXMW5WMmxrZEdnZ0x5QXlMQ0JwYldkSVpXbG5hSFFnTHlBeUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWNtOTBZWFJsS0NCTllYUm9MbEJKSUM4Z01pQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExuUnlZVzV6YkdGMFpTZ2dMV2x0WjFkcFpIUm9JQzhnTWl3Z0xXbHRaMGhsYVdkb2RDQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzVrY21GM1NXMWhaMlVvSUdsdFp5d2dNVE13TENBeE16QXNJREV6TlN3Z01UTTFJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VaSEpoZDBsdFlXZGxLQ0J6YkdWbGRtVXNJREFzSURBc0lEUXdNQ3dnTkRBd0lDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMGRYSmxMbTVsWldSelZYQmtZWFJsSUQwZ2RISjFaVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZM1I0SUQwZ2JXRndRMkZ1ZG1GekxtZGxkRU52Ym5SbGVIUW9JQ2N5WkNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMblJ5WVc1emJHRjBaU2dnYVcxblYybGtkR2dnTHlBeUxDQnBiV2RJWldsbmFIUWdMeUF5SUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOMGVDNXliM1JoZEdVb0lFMWhkR2d1VUVrZ0x5QXlJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR04wZUM1MGNtRnVjMnhoZEdVb0lDMXBiV2RYYVdSMGFDQXZJRElzSUMxcGJXZElaV2xuYUhRZ0x5QXlJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR04wZUM1a2NtRjNTVzFoWjJVb0lHbHRaeXdnTUN3Z01Dd2dOREF3TENBME1EQWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR1Y0ZEhWeVpTNXVaV1ZrYzFWd1pHRjBaU0E5SUhSeWRXVTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMDdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlITnNaV1YyWlUxaGRHVnlhV0ZzSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmhNWVcxaVpYSjBUV0YwWlhKcFlXd29JSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjlzYjNJNklFTnZibk4wWVc1MGN5NXpiR1ZsZG1WRGIyeHZjbHh5WEc1Y2NseHVJQ0FnSUgwZ0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2JXRjBaWEpwWVd4eklEMGdXMXh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUM4dklIUmxlSFIxY21WY2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkVoU1JVVXVUV1Z6YUV4aGJXSmxjblJOWVhSbGNtbGhiQ2dnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dNSGhtWm1abVptWXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhjRG9nZEdWNGRIVnlaVnh5WEc0Z0lDQWdJQ0FnSUgwZ0tTeGNjbHh1SUNBZ0lDQWdJQ0J6YkdWbGRtVk5ZWFJsY21saGJDeGNjbHh1SUNBZ0lDQWdJQ0J6YkdWbGRtVk5ZWFJsY21saGJGeHlYRzRnSUNBZ1hUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCdFlYUmxjbWxoYkhNN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUZWVVNVeFRJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2QyaGxaV3hFYVhOMFlXNWpaU0FvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQWhaU0FwSUdVZ1BTQmxkbVZ1ZER0Y2NseHVJQ0FnSUhaaGNpQjNJRDBnWlM1M2FHVmxiRVJsYkhSaExGeHlYRzRnSUNBZ0lDQWdJR1FnUFNCbExtUmxkR0ZwYkR0Y2NseHVJQ0FnSUdsbUlDZ2daQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQjNJQ2tnY21WMGRYSnVJSGNnTHlCa0lDOGdOREFnS2lCa0lENGdNQ0EvSURFZ09pQXRNVHNnTHk4Z1QzQmxjbUZjY2x4dUlDQWdJQ0FnSUNCbGJITmxJSEpsZEhWeWJpQXRaQ0F2SURNN0lDOHZJRVpwY21WbWIzZzdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSEpsZEhWeWJpQjNJQzhnTVRJd095QXZMeUJKUlM5VFlXWmhjbWt2UTJoeWIyMWxYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCM2FHVmxiRVJwY21WamRHbHZiaUFvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQWhaU0FwSUdVZ1BTQmxkbVZ1ZER0Y2NseHVJQ0FnSUhKbGRIVnliaUFvSUdVdVpHVjBZV2xzSUR3Z01DQXBJRDhnTVNBNklDZ2daUzUzYUdWbGJFUmxiSFJoSUQ0Z01DQXBJRDhnTVNBNklDMHhPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJR052YjNKa2MwVnhkV0ZzYzBGd2NISnZlQ0FvSUdOdmIzSmtNU3dnWTI5dmNtUXlMQ0J5WVc1blpTQXBJSHRjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnS0NCTllYUm9MbUZpY3lnZ1kyOXZjbVF4TG5nZ0xTQmpiMjl5WkRJdWVDQXBJRHc5SUhKaGJtZGxJQ2tnSmlZZ0tDQk5ZWFJvTG1GaWN5Z2dZMjl2Y21ReExua2dMU0JqYjI5eVpESXVlU0FwSUR3OUlISmhibWRsSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1ptRmtaVTkxZENBb0lHVnNaVzFsYm5RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0E5UFQwZ01Da2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbmJtOXVaU2M3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIUnlZVzV6YVhScGIyNUZkbVZ1ZENBOUlHZGxkRlJ5WVc1emFYUnBiMjVGZG1WdWRDaGxiR1Z0Wlc1MEtUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1emFYUnBiMjVGZG1WdWRDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLSFJ5WVc1emFYUnBiMjVGZG1WdWRDd2diMjVHWVdSbFEyOXRjR3hsZEdVcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUQwZ01EdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQWdJQ0FnSUNBZ1hISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJtWVdSbFNXNGdLQ0JsYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2hsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BUMDlJQ2NuSUh4OElHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0E5UFQwZ0p6RW5LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZGliRzlqYXljN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCMllYSWdkSEpoYm5OcGRHbHZia1YyWlc1MElEMGdaMlYwVkhKaGJuTnBkR2x2YmtWMlpXNTBLR1ZzWlcxbGJuUXBPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkaWJHOWpheWM3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMmwwYVc5dVJYWmxiblFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2loMGNtRnVjMmwwYVc5dVJYWmxiblFzSUc5dVJtRmtaVU52YlhCc1pYUmxLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNVHRjY2x4dUlDQWdJQ0FnSUNCOUxDQXhOU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYjI1R1lXUmxRMjl0Y0d4bGRHVW9JR1VnTENCbE1pQXBJSHRjY2x4dVhISmNiaUFnSUNCbExtTjFjbkpsYm5SVVlYSm5aWFF1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lobExuUjVjR1VzSUc5dVJtRmtaVU52YlhCc1pYUmxLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1V1WTNWeWNtVnVkRlJoY21kbGRDNXpkSGxzWlM1dmNHRmphWFI1SUQwOVBTQW5NQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdVdVkzVnljbVZ1ZEZSaGNtZGxkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMjV2Ym1Vbk8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHVXVZM1Z5Y21WdWRGUmhjbWRsZEM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjJKc2IyTnJKenRjY2x4dVhISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNibHh5WEc1bWRXNWpkR2x2YmlCb2FXUmxSV3hsYldWdWRDZ2daV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F3TzF4eVhHNGdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMjV2Ym1Vbk8xeHlYRzVjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyaHZkMFZzWlcxbGJuUW9JR1ZzWlcxbGJuUWdLU0I3WEhKY2JseHlYRzRnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVrYVhOd2JHRjVJRDBnSjJKc2IyTnJKenRjY2x4dUlDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNBOUlERTdYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm5aWFJVY21GdWMybDBhVzl1UlhabGJuUWdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUIwTEZ4eVhHNGdJQ0FnSUNBZ0lIUnlZVzV6YVhScGIyNXpJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuZEhKaGJuTnBkR2x2YmljNkozUnlZVzV6YVhScGIyNWxibVFuTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FuVDFSeVlXNXphWFJwYjI0bk9pZHZWSEpoYm5OcGRHbHZia1Z1WkNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNkTmIzcFVjbUZ1YzJsMGFXOXVKem9uZEhKaGJuTnBkR2x2Ym1WdVpDY3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDZFhaV0pyYVhSVWNtRnVjMmwwYVc5dUp6b25kMlZpYTJsMFZISmhibk5wZEdsdmJrVnVaQ2RjY2x4dUlDQWdJQ0FnSUNCOU8xeHlYRzVjY2x4dUlDQWdJR1p2Y2loMElHbHVJSFJ5WVc1emFYUnBiMjV6S1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUtDQmtiMk4xYldWdWRDNWliMlI1TG5OMGVXeGxXM1JkSUNFOVBTQjFibVJsWm1sdVpXUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKaGJuTnBkR2x2Ym5OYmRGMDdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWTJGc1kzVnNZWFJsUTJGdWRtRnpVMmw2WlNBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTJGdWRtRnpWMmxrZEdnZ1BTQkRiMjV6ZEdGdWRITXVZMkZ1ZG1GelYybGtkR2dnUHlCRGIyNXpkR0Z1ZEhNdVkyRnVkbUZ6VjJsa2RHZ2dPaUJEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11Y205dmRFTnZiblJoYVc1bGNpNWpiR2xsYm5SWGFXUjBhRHRjY2x4dUlDQWdJR05oYm5aaGMwaGxhV2RvZENBOUlFTnZibk4wWVc1MGN5NWpZVzUyWVhOSVpXbG5hSFFnUHlCRGIyNXpkR0Z1ZEhNdVkyRnVkbUZ6U0dWcFoyaDBJRG9nUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSXVZMnhwWlc1MFNHVnBaMmgwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUhObGRFTmhiblpoYzBScGJXVnVjMmx2Ym5NZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUM4dlEyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxuSnZiM1JEYjI1MFlXbHVaWEl1YzNSNWJHVXVhR1ZwWjJoMElDQWdJQ0E5SUdOaGJuWmhjMGhsYVdkb2RDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdVkyRnVkbUZ6UTI5dWRHRnBibVZ5TG5OMGVXeGxMbWhsYVdkb2RDQTlJR05oYm5aaGMwaGxhV2RvZENBcklDZHdlQ2M3WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11YVc1bWIwTnZiblJoYVc1bGNpNXpkSGxzWlM1b1pXbG5hSFFnUFNCallXNTJZWE5JWldsbmFIUWdLeUFuY0hnbk8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxteHZZV1JwYm1kRGIyNTBZV2x1WlhJdWMzUjViR1V1YUdWcFoyaDBJRDBnWTJGdWRtRnpTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVYSEpjYmlBZ0lDQXZMME52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeUxuTjBlV3hsTG5kcFpIUm9JQ0FnSUNBOUlHTmhiblpoYzFkcFpIUm9JQ3NnSjNCNEp6dGNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NWpZVzUyWVhORGIyNTBZV2x1WlhJdWMzUjViR1V1ZDJsa2RHZ2dQU0JqWVc1MllYTlhhV1IwYUNBcklDZHdlQ2M3WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11YVc1bWIwTnZiblJoYVc1bGNpNXpkSGxzWlM1M2FXUjBhQ0E5SUdOaGJuWmhjMWRwWkhSb0lDc2dKM0I0Snp0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1c2IyRmthVzVuUTI5dWRHRnBibVZ5TG5OMGVXeGxMbmRwWkhSb0lEMGdZMkZ1ZG1GelYybGtkR2dnS3lBbmNIZ25PMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5vZFdabWJHVW9JSFlnS1NCN0lDOHZJRXB2Ym1GeklGSmhiMjVwSUZOdllYSmxjeUJUYVd4MllTQXRJR2gwZEhBNkx5OXFjMlp5YjIxb1pXeHNMbU52YlM5aGNuSmhlUzl6YUhWbVpteGxJRnR5WlhZdUlDTXhYVnh5WEc1Y2NseHVJQ0FnSUdadmNpQW9JSFpoY2lCcUxDQjRMQ0JwSUQwZ2RpNXNaVzVuZEdnN0lHazdJR29nUFNCd1lYSnpaVWx1ZENnZ1RXRjBhQzV5WVc1a2IyMG9LU0FxSUdrZ0tTd2dlQ0E5SUhaYklDMHRhU0JkTENCMld5QnBJRjBnUFNCMld5QnFJRjBzSUhaYklHb2dYU0E5SUhnZ0tUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMk8xeHlYRzVjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FYTkdkVzVqZEdsdmJpZ2diMkpxSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQjBlWEJsYjJZZ2IySnFJRDA5SUNkbWRXNWpkR2x2YmljZ2ZId2dabUZzYzJVN1hISmNibHh5WEc1OVhISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCRldGQlBVbFJUSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwZ0lGQjFZbXhwWXlCTlpYUm9iMlJ6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JtVjRjRzl5ZEhNdWFXNXBkQ0E5SUdaMWJtTjBhVzl1SUNnZ2NHRnlZVzF6SUNrZ2UxeHlYRzVjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsZUhSbGJtUW9jR0Z5WVcxektUdGNjbHh1WEhKY2JpQWdJQ0F2THlCbVpXRjBkWEpsSUhSbGMzUmNjbHh1SUNBZ0lHbG1JQ2dnSVUxdlpHVnlibWw2Y2k1M1pXSm5iQ0FwSUhKbGRIVnlianRjY2x4dVhISmNiaUFnSUNCcFppQW9JSGRwYm1SdmR5NWtaWFpwWTJWUWFYaGxiRkpoZEdsdklDRTlQU0IxYm1SbFptbHVaV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSd2NpQTlJSGRwYm1SdmR5NWtaWFpwWTJWUWFYaGxiRkpoZEdsdk8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUndjaUE5SURFN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dJVU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTV5YjI5MFEyOXVkR0ZwYm1WeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCeWIyOTBJR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dJVU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVqWVc1MllYTkRiMjUwWVdsdVpYSWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0lDZGpjbUYwWldScFoyZGxjaTVxY3lBdElFbHVhWFFnWm1GcGJHVmtJRG9nWTJGdUlHNXZkQ0JtYVc1a0lHTmhiblpoY3lCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSUNGRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWJHOWhaR2x1WjBOdmJuUmhhVzVsY2lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWdnSjJOeVlYUmxaR2xuWjJWeUxtcHpJQzBnU1c1cGRDQm1ZV2xzWldRZ09pQmpZVzRnYm05MElHWnBibVFnYkc5aFpHbHVaeUJqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCcFppQW9JQ0ZEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11YVc1bWIwTnZiblJoYVc1bGNpQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ2FXNW1ieUJqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCallXeGpkV3hoZEdWRFlXNTJZWE5UYVhwbEtDazdYSEpjYmx4eVhHNGdJQ0FnYVc1cGRGTmpaVzVsS0NrN1hISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUnpMbk5sYkdWamRGSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ2dhV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcFpDQThJREFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbGMyVjBVMmh2ZDI1U1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JwWkNBK0lHeHZZV1JsWkZKbFkyOXlaSE1nS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhObGJHVmpkR1ZrVW1WamIzSmtJRDBnYkc5aFpHVmtVbVZqYjNKa2N5QXRJREU3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJWc1pXTjBaV1JTWldOdmNtUWdQU0JwWkR0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG5OMFlYSjBVbVZ1WkdWeUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHUnZVbVZ1WkdWeUlEMGdkSEoxWlR0Y2NseHVJQ0FnSUdGdWFXMWhkR1VvS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG5OMGIzQlNaVzVrWlhJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1pHOVNaVzVrWlhJZ1BTQm1ZV3h6WlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG1WdVlXSnNaVkJ2YzNSd2NtOWpaWE56YVc1bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5NXdiM04wY0hKdlkyVnpjMmx1WnlBOUlIUnlkV1U3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVrYVhOaFlteGxVRzl6ZEhCeWIyTmxjM05wYm1jZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxuQnZjM1J3Y205alpYTnphVzVuSUQwZ1ptRnNjMlU3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOUlDQlFkV0pzYVdNZ1oyVjBkR1Z5Y3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWxlSEJ2Y25SekxtZGxkRU5oYm5aaGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWREdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWxlSEJ2Y25SekxtZGxkRkpsWTI5eVpITkVZWFJoVEdsemRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z2NtVmpiM0prYzBSaGRHRk1hWE4wTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11WjJWMFRHOWhaR1ZrVW1WamIzSmtjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdiRzloWkdWa1VtVmpiM0prY3p0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG1kbGRGTmxiR1ZqZEdWa1VtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUJ5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMGdJRTFsZEdodlpITWdZV05qWlhOemIzSnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm1WNGNHOXlkSE11Ykc5aFpGSmxZMjl5WkhNZ1BTQnNiMkZrVW1WamIzSmtjenRjY2x4dVpYaHdiM0owY3k1MWJteHZZV1JTWldOdmNtUnpJRDBnZFc1c2IyRmtVbVZqYjNKa2N6dGNjbHh1Wlhod2IzSjBjeTV5WlhObGRGTm9iM2R1VW1WamIzSmtJRDBnY21WelpYUlRhRzkzYmxKbFkyOXlaRHRjY2x4dVpYaHdiM0owY3k1emFIVm1abXhsVW1WamIzSmtjeUE5SUhOb2RXWm1iR1ZTWldOdmNtUnpPMXh5WEc1bGVIQnZjblJ6TG1ac2FYQlRaV3hsWTNSbFpGSmxZMjl5WkNBOUlHWnNhWEJUWld4bFkzUmxaRkpsWTI5eVpEdGNjbHh1Wlhod2IzSjBjeTVtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0lEMGdabXhwY0VKaFkydFRaV3hsWTNSbFpGSmxZMjl5WkR0Y2NseHVaWGh3YjNKMGN5NXpaV3hsWTNSUWNtVjJVbVZqYjNKa0lEMGdjMlZzWldOMFVISmxkbEpsWTI5eVpEdGNjbHh1Wlhod2IzSjBjeTV6Wld4bFkzUk9aWGgwVW1WamIzSmtJRDBnYzJWc1pXTjBUbVY0ZEZKbFkyOXlaRHRjY2x4dVpYaHdiM0owY3k1emFHOTNURzloWkdsdVp5QTlJSE5vYjNkTWIyRmthVzVuTzF4eVhHNWxlSEJ2Y25SekxtaHBaR1ZNYjJGa2FXNW5JRDBnYUdsa1pVeHZZV1JwYm1jN1hISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUZCVlFreEpReUJCVUVrZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JsZUhCdmNuUnpPeUpkZlE9PSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKlxyXG4gKiBGdWxsLXNjcmVlbiB0ZXh0dXJlZCBxdWFkIHNoYWRlclxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkNvcHlTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJvcGFjaXR5XCI6ICB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG9wYWNpdHk7XCIsXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCB0ZXhlbCA9IHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiApO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbmRyZXdiZXJnIC8gaHR0cDovL2FuZHJld2JlcmcuY29tL1xyXG4gKlxyXG4gKiBEZXB0aCBvZiBGaWVsZFxyXG4gKiAtIHBvcnRlZCBmcm9tXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5Eb0ZTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwidERlcHRoXCI6ICAgICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwiem5lYXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInpmYXJcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMTAwMC4wIH0sXHJcblx0XHRcdFwic2l6ZVwiOiAgICAgICAgIHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDUxMiwgNTEyICkgfSxcclxuXHRcdFx0XCJ0ZXh0ZWxcIjpcdFx0eyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMS81MTIsIDEvNTEyKX0sXHJcblx0XHRcdFwiZm9jYWxEZXB0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIwMC4wIH0sXHJcblx0XHRcdFwiZm9jYWxMZW5ndGhcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyOC4wIH0sXHJcblx0XHRcdFwiZnN0b3BcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuOCB9LFxyXG5cdFx0XHRcInNob3dGb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJtYW51YWxkb2ZcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwibmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwibmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuMCB9LFxyXG5cdFx0XHRcImZkb2ZzdGFydFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcImZkb2ZkaXN0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAzLjAgfSxcclxuXHRcdFx0XCJDb0NcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMyB9LFxyXG5cdFx0XHRcInZpZ25ldHRpbmdcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwidmlnbm91dFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4zIH0sXHJcblx0XHRcdFwidmlnbmluXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAgfSxcclxuXHRcdFx0XCJ2aWduZmFkZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjIuMCB9LFxyXG5cdFx0XHRcImF1dG9mb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJmb2N1c1wiOiAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMC41LCAwLjUgKSB9LFxyXG5cdFx0XHRcIm1heGJsdXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInRocmVzaG9sZFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuOCB9LFxyXG5cdFx0XHRcImdhaW5cIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS43IH0sXHJcblx0XHRcdFwiYmlhc1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjUgfSxcclxuXHRcdFx0XCJmcmluZ2VcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNyB9LFxyXG5cdFx0XHRcIm5vaXNlXCI6XHRcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwibmFtb3VudFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMDAxIH0sXHJcblx0XHRcdFwiZGVwdGhibHVyXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcImRic2l6ZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4yNX1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHRcdFx0XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIixcclxuXHRcdFx0XCIjZGVmaW5lIFBJICAzLjE0MTU5MjY1XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHQvL3VuaWZvcm0gdmFyaWFibGVzIGZyb20gZXh0ZXJuYWwgc2NyaXB0XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgc2l6ZTtcIiwgLy8gdGV4dHVyZSB3aWR0aCBhbmQgaGVpZ2h0XHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHRleGVsO1wiLCAvLyB0ZXh0ZWwgc2l6ZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsRGVwdGg7XCIsICAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnN0b3A7XCIsIC8vZi1zdG9wIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHNob3dGb2N1cztcIiwgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcblx0XHRcdC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB6bmVhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpmYXI7XCIsIC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly91c2VyIHZhcmlhYmxlcyBub3cgcGFzc2VkIGFzIHVuaWZvcm1zXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBtYW51YWxkb2Y7XCIsIC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZnN0YXJ0O1wiLCAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5kb2ZkaXN0O1wiLCAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZnN0YXJ0O1wiLCAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZmRpc3Q7XCIsIC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2VcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBDb0M7XCIsLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSlcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHZpZ25ldHRpbmc7XCIsIC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbm91dDtcIiwgLy92aWduZXR0aW5nIG91dGVyIGJvcmRlclxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbmluO1wiLCAvL3ZpZ25ldHRpbmcgaW5uZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduZmFkZTtcIiwgLy9mLXN0b3BzIHRpbGwgdmlnbmV0ZSBmYWRlc1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgYXV0b2ZvY3VzO1wiLCAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBmb2N1cztcIiwgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBtYXhibHVyO1wiLCAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHRocmVzaG9sZDtcIiwgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZ2FpbjtcIiwgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBiaWFzO1wiLCAvL2Jva2VoIGVkZ2UgYmlhc1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnJpbmdlO1wiLCAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBub2lzZTtcIiwgLy91c2Ugbm9pc2UgaW5zdGVhZCBvZiBwYXR0ZXJuIGZvciBzYW1wbGUgZGl0aGVyaW5nXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuYW1vdW50O1wiLCAvL2RpdGhlciBhbW91bnRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIGRlcHRoYmx1cjtcIiwgLy9ibHVyIHRoZSBkZXB0aCBidWZmZXI/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBkYnNpemU7XCIsIC8vZGVwdGhibHVyc2l6ZVxyXG5cclxuXHRcdFx0Ly8gc2FtcGxlcyBhbmQgcmluZ3MgbmVlZCB0byBiZSBjb25zdGFudHMuIG5vIGR5bmFtaWMgbG9vcCBjb3VudGVycyBpbiBPcGVuR0wgRVNcclxuXHRcdFx0Ly8gQ2FuIHNoYWRlciBiZSBicm9rZW4gaW50byAyIHBhc3M/IC4uLiBcclxuXHRcdFx0XCJpbnQgc2FtcGxlcyA9IDM7XCIsIC8vc2FtcGxlcyBvbiB0aGUgZmlyc3QgcmluZ1xyXG5cdFx0XHRcImNvbnN0IGludCByaW5ncyA9IDM7XCIsIC8vcmluZyBjb3VudFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0bmV4dCBwYXJ0IGlzIGV4cGVyaW1lbnRhbFxyXG5cdFx0XHRub3QgbG9va2luZyBnb29kIHdpdGggc21hbGwgc2FtcGxlIGFuZCByaW5nIGNvdW50XHJcblx0XHRcdGxvb2tzIG9rYXkgc3RhcnRpbmcgZnJvbSBzYW1wbGVzID0gNCwgcmluZ3MgPSA0XHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHRcImJvb2wgcGVudGFnb24gPSBmYWxzZTtcIiwgLy91c2UgcGVudGFnb24gYXMgYm9rZWggc2hhcGU/XHJcblx0XHRcdFwiZmxvYXQgZmVhdGhlciA9IDAuNDtcIiwgLy9wZW50YWdvbiBzaGFwZSBmZWF0aGVyXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0Ly8gUkdCQSBkZXB0aFxyXG5cclxuXHRcdFx0XCJmbG9hdCB1bnBhY2tEZXB0aCggY29uc3QgaW4gdmVjNCByZ2JhX2RlcHRoICkge1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbnN0IHZlYzQgYml0X3NoaWZ0ID0gdmVjNCggMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICksIDEuMCAvIDI1Ni4wLCAxLjAgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGRlcHRoID0gZG90KCByZ2JhX2RlcHRoLCBiaXRfc2hpZnQgKTtcIixcclxuXHRcdFx0XHRcInJldHVybiBkZXB0aDtcIixcclxuXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHJcblx0XHRcdFwiZmxvYXQgcGVudGEodmVjMiBjb29yZHMpXCIsIC8vcGVudGFnb25hbCBzaGFwZVxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IHNjYWxlID0gZmxvYXQocmluZ3MpIC0gMS4zO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMwID0gdmVjNCggMS4wLCAgICAgICAgIDAuMCwgICAgICAgICAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMxID0gdmVjNCggMC4zMDkwMTY5OTQsIDAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMyID0gdmVjNCgtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMzID0gdmVjNCgtMC44MDkwMTY5OTQsLTAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM0ID0gdmVjNCggMC4zMDkwMTY5OTQsLTAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM1ID0gdmVjNCggMC4wICAgICAgICAsMC4wICAgICAgICAgLCAxLjAsICAxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgIG9uZSA9IHZlYzQoIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgUCA9IHZlYzQoKGNvb3JkcyksdmVjMihzY2FsZSwgc2NhbGUpKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IGRpc3QgPSB2ZWM0KDAuMCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBpbm9yb3V0ID0gLTQuMDtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTMCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gZG90KCBQLCBIUzEgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueiA9IGRvdCggUCwgSFMyICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LncgPSBkb3QoIFAsIEhTMyApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlub3JvdXQgKz0gZG90KCBkaXN0LCBvbmUgKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTNCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gSFM1LncgLSBhYnMoIFAueiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkaXN0Lng7XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKCBpbm9yb3V0LCAwLjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgYmRlcHRoKHZlYzIgY29vcmRzKSAvL2JsdXJyaW5nIGRlcHRoXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZCA9IDAuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IGtlcm5lbFs5XTtcIixcclxuXHRcdFx0XHRcInZlYzIgb2Zmc2V0WzldO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzIgd2ggPSB2ZWMyKHRleGVsLngsIHRleGVsLnkpICogZGJzaXplO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFswXSA9IHZlYzIoLXdoLngsLXdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzFdID0gdmVjMiggMC4wLCAtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMl0gPSB2ZWMyKCB3aC54IC13aC55KTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbM10gPSB2ZWMyKC13aC54LCAgMC4wKTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs0XSA9IHZlYzIoIDAuMCwgICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzVdID0gdmVjMiggd2gueCwgIDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzZdID0gdmVjMigtd2gueCwgd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbN10gPSB2ZWMyKCAwLjAsICB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs4XSA9IHZlYzIoIHdoLngsIHdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImtlcm5lbFswXSA9IDEuMC8xNi4wOyAgIGtlcm5lbFsxXSA9IDIuMC8xNi4wOyAgIGtlcm5lbFsyXSA9IDEuMC8xNi4wO1wiLFxyXG5cdFx0XHRcdFwia2VybmVsWzNdID0gMi4wLzE2LjA7ICAga2VybmVsWzRdID0gNC4wLzE2LjA7ICAga2VybmVsWzVdID0gMi4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbNl0gPSAxLjAvMTYuMDsgICBrZXJuZWxbN10gPSAyLjAvMTYuMDsgICBrZXJuZWxbOF0gPSAxLjAvMTYuMDtcIixcclxuXHJcblxyXG5cdFx0XHRcdFwiZm9yKCBpbnQgaT0wOyBpPDk7IGkrKyApXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IHRtcCA9IHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsIGNvb3JkcyArIG9mZnNldFtpXSkpO1wiLFxyXG5cdFx0XHRcdFx0XCJkICs9IHRtcCAqIGtlcm5lbFtpXTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gZDtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJ2ZWMzIGNvbG9yKHZlYzIgY29vcmRzLGZsb2F0IGJsdXIpXCIsIC8vcHJvY2Vzc2luZyB0aGUgc2FtcGxlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwidmVjMyBjb2wgPSB2ZWMzKDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29sLnIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjAsMS4wKSp0ZXhlbCpmcmluZ2UqYmx1cikucjtcIixcclxuXHRcdFx0XHRcImNvbC5nID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoLTAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5nO1wiLFxyXG5cdFx0XHRcdFwiY29sLmIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjg2NiwtMC41KSp0ZXhlbCpmcmluZ2UqYmx1cikuYjtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGx1bWNvZWZmID0gdmVjMygwLjI5OSwwLjU4NywwLjExNCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW0gPSBkb3QoY29sLnJnYiwgbHVtY29lZmYpO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgdGhyZXNoID0gbWF4KChsdW0tdGhyZXNob2xkKSpnYWluLCAwLjApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNvbCttaXgodmVjMygwLjApLGNvbCx0aHJlc2gqYmx1cik7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2ZWMyIHJhbmQodmVjMiBjb29yZCkgLy9nZW5lcmF0aW5nIG5vaXNlL3BhdHRlcm4gdGV4dHVyZSBmb3IgZGl0aGVyaW5nXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbm9pc2VYID0gKChmcmFjdCgxLjAtY29vcmQucyooc2l6ZS54LzIuMCkpKjAuMjUpKyhmcmFjdChjb29yZC50KihzaXplLnkvMi4wKSkqMC43NSkpKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVkgPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC43NSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjI1KSkqMi4wLTEuMDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAobm9pc2UpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWCA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKSwwLjAsMS4wKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFx0XCJub2lzZVkgPSBjbGFtcChmcmFjdChzaW4oZG90KGNvb3JkICx2ZWMyKDEyLjk4OTgsNzguMjMzKSoyLjApKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gdmVjMihub2lzZVgsbm9pc2VZKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzMgZGVidWdGb2N1cyh2ZWMzIGNvbCwgZmxvYXQgYmx1ciwgZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZWRnZSA9IDAuMDAyKmRlcHRoOyAvL2Rpc3RhbmNlIGJhc2VkIGVkZ2Ugc21vb3RoaW5nXCIsXHJcblx0XHRcdFx0XCJmbG9hdCBtID0gY2xhbXAoc21vb3Roc3RlcCgwLjAsZWRnZSxibHVyKSwwLjAsMS4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGUgPSBjbGFtcChzbW9vdGhzdGVwKDEuMC1lZGdlLDEuMCxibHVyKSwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wgPSBtaXgoY29sLHZlYzMoMS4wLDAuNSwwLjApLCgxLjAtbSkqMC42KTtcIixcclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygwLjAsMC41LDEuMCksKCgxLjAtZSktKDEuMC1tKSkqMC4yKTtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgbGluZWFyaXplKGZsb2F0IGRlcHRoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcInJldHVybiAtemZhciAqIHpuZWFyIC8gKGRlcHRoICogKHpmYXIgLSB6bmVhcikgLSB6ZmFyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IHZpZ25ldHRlKClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkaXN0ID0gZGlzdGFuY2UodlV2LCB2ZWMyKDAuNSwwLjUpKTtcIixcclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKHZpZ25vdXQrKGZzdG9wL3ZpZ25mYWRlKSwgdmlnbmluKyhmc3RvcC92aWduZmFkZSksIGRpc3QpO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKGRpc3QsMC4wLDEuMCk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHQvL3NjZW5lIGRlcHRoIGNhbGN1bGF0aW9uXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCx2VXYpKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKGRlcHRoYmx1cilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZGVwdGggPSBsaW5lYXJpemUoYmRlcHRoKHZVdikpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2ZvY2FsIHBsYW5lIGNhbGN1bGF0aW9uXCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZkRlcHRoID0gZm9jYWxEZXB0aDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoYXV0b2ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmRGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCxmb2N1cykpKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0Ly9kb2YgYmx1ciBmYWN0b3IgY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBibHVyID0gMC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChtYW51YWxkb2YpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSBkZXB0aC1mRGVwdGg7XCIsIC8vZm9jYWwgcGxhbmVcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChhLWZkb2ZzdGFydCkvZmRvZmRpc3Q7XCIsIC8vZmFyIERvRlxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKC1hLW5kb2ZzdGFydCkvbmRvZmRpc3Q7XCIsIC8vbmVhciBEb2ZcclxuXHRcdFx0XHRcdFwiYmx1ciA9IChhPjAuMCk/YjpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgZiA9IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBkID0gZkRlcHRoKjEwMDAuMDtcIiwgLy9mb2NhbCBwbGFuZSBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBvID0gZGVwdGgqMTAwMC4wO1wiLCAvL2RlcHRoIGluIG1tXHJcblxyXG5cdFx0XHRcdFx0XCJmbG9hdCBhID0gKG8qZikvKG8tZik7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGIgPSAoZCpmKS8oZC1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYyA9IChkLWYpLyhkKmZzdG9wKkNvQyk7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJibHVyID0gYWJzKGEtYikqYztcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJibHVyID0gY2xhbXAoYmx1ciwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgcGF0dGVybiBmb3IgZGl0ZXJpbmdcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIG5vaXNlID0gcmFuZCh2VXYpKm5hbW91bnQqYmx1cjtcIixcclxuXHJcblx0XHRcdFx0Ly8gZ2V0dGluZyBibHVyIHggYW5kIHkgc3RlcCBmYWN0b3JcclxuXHJcblx0XHRcdFx0XCJmbG9hdCB3ID0gKDEuMC9zaXplLngpKmJsdXIqbWF4Ymx1citub2lzZS54O1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgaCA9ICgxLjAvc2l6ZS55KSpibHVyKm1heGJsdXIrbm9pc2UueTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgZmluYWwgY29sb3JcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZihibHVyIDwgMC4wNSlcIiwgLy9zb21lIG9wdGltaXphdGlvbiB0aGluZ3lcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgcyA9IDEuMDtcIixcclxuXHJcblx0XHRcdFx0XHRcImZvciAoaW50IGkgPSAxOyBpIDw9IHJpbmdzOyBpICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XCJmbG9hdCByaW5nc2FtcGxlcyA9IGZsb2F0KGkgKiBzYW1wbGVzKTtcIixcclxuXHJcblx0XHRcdFx0XHRcdFwiaWYoaSA9PSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDMgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAyKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDYgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAzKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDkgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcImNvbCAvPSBzO1wiLCAvL2RpdmlkZSBieSBzYW1wbGUgY291bnRcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJpZiAoc2hvd0ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSBkZWJ1Z0ZvY3VzKGNvbCwgYmx1ciwgZGVwdGgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmICh2aWduZXR0aW5nKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgKj0gdmlnbmV0dGUoKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IucmdiID0gY29sO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XCIsXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkVmZmVjdENvbXBvc2VyID0gZnVuY3Rpb24gKCByZW5kZXJlciwgcmVuZGVyVGFyZ2V0ICkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcblx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMTtcclxuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xyXG5cdFx0XHR2YXIgcGFyYW1ldGVycyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgc3RlbmNpbEJ1ZmZlcjogZmFsc2UgfTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggd2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdHRoaXMucGFzc2VzID0gW107XHJcblxyXG5cdFx0aWYgKCBUSFJFRS5Db3B5U2hhZGVyID09PSB1bmRlZmluZWQgKVxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBcIlRIUkVFLkVmZmVjdENvbXBvc2VyIHJlbGllcyBvbiBUSFJFRS5Db3B5U2hhZGVyXCIgKTtcclxuXHJcblx0XHR0aGlzLmNvcHlQYXNzID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkNvcHlTaGFkZXIgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHN3YXBCdWZmZXJzOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciB0bXAgPSB0aGlzLnJlYWRCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMud3JpdGVCdWZmZXI7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0bXA7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRQYXNzOiBmdW5jdGlvbiAoIHBhc3MgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5wdXNoKCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRpbnNlcnRQYXNzOiBmdW5jdGlvbiAoIHBhc3MsIGluZGV4ICkge1xyXG5cclxuXHRcdFx0dGhpcy5wYXNzZXMuc3BsaWNlKCBpbmRleCwgMCwgcGFzcyApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdFx0dmFyIG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHZhciBwYXNzLCBpLCBpbCA9IHRoaXMucGFzc2VzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHBhc3MgPSB0aGlzLnBhc3Nlc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoICFwYXNzLmVuYWJsZWQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0cGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBwYXNzLm5lZWRzU3dhcCApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1hc2tBY3RpdmUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuY29weVBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc3dhcEJ1ZmZlcnMoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MgaW5zdGFuY2VvZiBUSFJFRS5NYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLkNsZWFyTWFza1Bhc3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZXNldDogZnVuY3Rpb24gKCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRTaXplOiBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XHJcblxyXG5cdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aWR0aDtcclxuXHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcclxuXHJcblx0XHRcdHRoaXMucmVzZXQoIHJlbmRlclRhcmdldCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqIEBhdXRob3IgZGF2aWRlZGMgLyBodHRwOi8vd3d3LnNrZXRjaHBhdGNoLm5ldC9cclxuICpcclxuICogTlZJRElBIEZYQUEgYnkgVGltb3RoeSBMb3R0ZXNcclxuICogaHR0cDovL3RpbW90aHlsb3R0ZXMuYmxvZ3Nwb3QuY29tLzIwMTEvMDYvZnhhYTMtc291cmNlLXJlbGVhc2VkLmh0bWxcclxuICogLSBXZWJHTCBwb3J0IGJ5IEBzdXBlcmVnZ2JlcnRcclxuICogaHR0cDovL3d3dy5nbGdlLm9yZy9kZW1vcy9meGFhL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuRlhBQVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwicmVzb2x1dGlvblwiOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxIC8gMTAyNCwgMSAvIDUxMiApICB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1wiLFxyXG5cclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvMTI4LjApXCIsXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wLzguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMyByZ2JOVyA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggLTEuMCwgLTEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JORSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYlNXID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIDEuMCwgMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0IHJnYmFNICA9IHRleHR1cmUyRCggdERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiApO1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JNICA9IHJnYmFNLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgbHVtYSA9IHZlYzMoIDAuMjk5LCAwLjU4NywgMC4xMTQgKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTlcgPSBkb3QoIHJnYk5XLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTkUgPSBkb3QoIHJnYk5FLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU1cgPSBkb3QoIHJnYlNXLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU0UgPSBkb3QoIHJnYlNFLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTSAgPSBkb3QoIHJnYk0sICBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWluID0gbWluKCBsdW1hTSwgbWluKCBtaW4oIGx1bWFOVywgbHVtYU5FICksIG1pbiggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWF4ID0gbWF4KCBsdW1hTSwgbWF4KCBtYXgoIGx1bWFOVywgbHVtYU5FKSAsIG1heCggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiBkaXI7XCIsXHJcblx0XHRcdFx0XCJkaXIueCA9IC0oKGx1bWFOVyArIGx1bWFORSkgLSAobHVtYVNXICsgbHVtYVNFKSk7XCIsXHJcblx0XHRcdFx0XCJkaXIueSA9ICAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGlyUmVkdWNlID0gbWF4KCAoIGx1bWFOVyArIGx1bWFORSArIGx1bWFTVyArIGx1bWFTRSApICogKCAwLjI1ICogRlhBQV9SRURVQ0VfTVVMICksIEZYQUFfUkVEVUNFX01JTiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHJjcERpck1pbiA9IDEuMCAvICggbWluKCBhYnMoIGRpci54ICksIGFicyggZGlyLnkgKSApICsgZGlyUmVkdWNlICk7XCIsXHJcblx0XHRcdFx0XCJkaXIgPSBtaW4oIHZlYzIoIEZYQUFfU1BBTl9NQVgsICBGWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdCAgXCJtYXgoIHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdFx0XHRcImRpciAqIHJjcERpck1pbikpICogcmVzb2x1dGlvbjtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiQSA9ICgxLjAvMi4wKSAqIChcIixcclxuXHQgICAgICAgIFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgxLjAvMy4wIC0gMC41KSkgK1wiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMi4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwidmVjNCByZ2JCID0gcmdiQSAqICgxLjAvMi4wKSArICgxLjAvNC4wKSAqIChcIixcclxuXHRcdFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDAuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0ICAgICAgXHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMy4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwiZmxvYXQgbHVtYUIgPSBkb3QocmdiQiwgdmVjNChsdW1hLCAwLjApKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoICggbHVtYUIgPCBsdW1hTWluICkgfHwgKCBsdW1hQiA+IGx1bWFNYXggKSApIHtcIixcclxuXHJcblx0XHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IHJnYkE7XCIsXHJcblxyXG5cdFx0XHRcdFwifSBlbHNlIHtcIixcclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQjtcIixcclxuXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG5cclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuTWFza1Bhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmludmVyc2UgPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Ly8gZG9uJ3QgdXBkYXRlIGNvbG9yIG9yIGRlcHRoXHJcblxyXG5cdFx0XHRjb250ZXh0LmNvbG9yTWFzayggZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIGZhbHNlICk7XHJcblxyXG5cdFx0XHQvLyBzZXQgdXAgc3RlbmNpbFxyXG5cclxuXHRcdFx0dmFyIHdyaXRlVmFsdWUsIGNsZWFyVmFsdWU7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuaW52ZXJzZSApIHtcclxuXHJcblx0XHRcdFx0d3JpdGVWYWx1ZSA9IDA7XHJcblx0XHRcdFx0Y2xlYXJWYWx1ZSA9IDE7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMTtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRleHQuZW5hYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkFMV0FZUywgd3JpdGVWYWx1ZSwgMHhmZmZmZmZmZiApO1xyXG5cdFx0XHRjb250ZXh0LmNsZWFyU3RlbmNpbCggY2xlYXJWYWx1ZSApO1xyXG5cclxuXHRcdFx0Ly8gZHJhdyBpbnRvIHRoZSBzdGVuY2lsIGJ1ZmZlclxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0Ly8gcmUtZW5hYmxlIHVwZGF0ZSBvZiBjb2xvciBhbmQgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlICk7XHJcblx0XHRcdGNvbnRleHQuZGVwdGhNYXNrKCB0cnVlICk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHJlbmRlciB3aGVyZSBzdGVuY2lsIGlzIHNldCB0byAxXHJcblxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7ICAvLyBkcmF3IGlmID09IDFcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRUSFJFRS5DbGVhck1hc2tQYXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Y29udGV4dC5kaXNhYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbn07IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5vdmVycmlkZU1hdGVyaWFsID0gb3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHR0aGlzLmNsZWFyQ29sb3IgPSBjbGVhckNvbG9yO1xyXG5cdFx0dGhpcy5jbGVhckFscGhhID0gKCBjbGVhckFscGhhICE9PSB1bmRlZmluZWQgKSA/IGNsZWFyQWxwaGEgOiAxO1xyXG5cclxuXHRcdHRoaXMub2xkQ2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xyXG5cdFx0dGhpcy5vbGRDbGVhckFscGhhID0gMTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5SZW5kZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMub3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5jbGVhckNvbG9yICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQ29sb3IuY29weSggcmVuZGVyZXIuZ2V0Q2xlYXJDb2xvcigpICk7XHJcblx0XHRcdFx0dGhpcy5vbGRDbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLmNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMub2xkQ2xlYXJDb2xvciwgdGhpcy5vbGRDbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHRcclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzID0gZnVuY3Rpb24gKCBzaGFkZXIsIHRleHR1cmVJRCApIHtcclxuXHJcblx0XHR0aGlzLnRleHR1cmVJRCA9ICggdGV4dHVyZUlEICE9PSB1bmRlZmluZWQgKSA/IHRleHR1cmVJRCA6IFwidERpZmZ1c2VcIjtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlclxyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtMSwgMSwgMSwgLTEsIDAsIDEgKTtcclxuXHRcdHRoaXMuc2NlbmUgID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAyLCAyICksIG51bGwgKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLnF1YWQgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuU2hhZGVyUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0gKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0udmFsdWUgPSByZWFkQnVmZmVyO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5yZW5kZXJUb1NjcmVlbiApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcbn07XHJcbiJdfQ==
