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

function scrollRecords ( touch, baseY, oldDelta ) {

    var scrollSpeed;

    oldDelta = !oldDelta || Math.abs( oldDelta ) > 0.5 ? 0.5 : Math.abs( oldDelta );
    scrollSpeed = touch ? Math.pow(1 - oldDelta, 3) * 200 : Math.pow(1 - oldDelta, 3) * 300;

    scrollRecordsTimeout = setTimeout( function () {

        var delta = ( baseY - mouse.y ) / canvasHeight;
        renderer.domElement.classList.add('grab');

        if ( delta > 0 ) {

            selectNextRecord();

        } else if ( delta < 0 ) {

            selectPrevRecord();

        }

        scrollRecords( touch, baseY, delta );

    }, scrollSpeed );

};

/*=======================================
=            EVENTS HANDLING            =
=======================================*/

function bindEvents() {

    Constants.elements.rootContainer.addEventListener( 'DOMMouseScroll', onScrollEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousewheel', onScrollEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousemove', onMouseMoveEvent, false );
    Constants.elements.rootContainer.addEventListener( 'touchmove', onTouchMoveEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mousedown', onMouseDownEvent, false );
    Constants.elements.rootContainer.addEventListener( 'touchstart', onTouchStartEvent, false );
    Constants.elements.rootContainer.addEventListener( 'mouseup', onMouseUpEvent, false );
    Constants.elements.rootContainer.addEventListener( 'touchend', onTouchStopEvent, false );
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

function onTouchMoveEvent ( e ) {

    var m_posx = 0,
        m_posy = 0,
        e_posx = 0,
        e_posy = 0,
        obj = this;

    if (e.changedTouches && e.changedTouches[0]) {

        if ( e.changedTouches[0].pageX || e.changedTouches[0].pageY ) {

            m_posx = e.changedTouches[0].pageX;
            m_posy = e.changedTouches[0].pageY;
        } else if ( e.changedTouches[0].clientX || e.changedTouches[0].clientY ) {

            m_posx = e.changedTouches[0].clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            m_posy = e.changedTouches[0].clientY + document.body.scrollTop +
                document.documentElement.scrollTop;

        }
    }

    //get parent element position in document
    if ( obj && obj.offsetParent ) {

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

            scrollRecords( false, mouse.y );

        } 

        mouseDownPos = {
            x: mouse.x,
            y: mouse.y
        };

    }
};

function onTouchStartEvent ( e ) {

    mouseDownPos = {
        x: mouse.x,
        y: mouse.y
    };

    onTouchMoveEvent( e );

    clearInterval( scrollRecordsTimeout );

    if ( infoPanelState === 'closed' ) {

        scrollRecords( true, mouse.y );

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

function onTouchStopEvent ( e ) {

    clearInterval( scrollRecordsTimeout );
    renderer.domElement.classList.remove('grab');

    // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
    if ( coordsEqualsApprox( mouseDownPos, mouse, Constants.scene.grabSensitivity ) && !( e.target && e.target.hasAttribute('href') ) ) {

        onClickEvent( mouseDownPos );

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAoVmFsZW50aW4gTGVkcmFwaWVyKSAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG4gICAgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy1qcycpLFxyXG4gICAgTW9kZXJuaXpyID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ01vZGVybml6ciddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnTW9kZXJuaXpyJ10gOiBudWxsKSxcclxuICAgIGRhdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydkYXQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RhdCddIDogbnVsbCksXHJcblxyXG4gICAgUmVjb3JkID0gcmVxdWlyZSgnLi9SZWNvcmQnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKSxcclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsO1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5mdW5jdGlvbiBhbmltYXRlICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5sb29rQXRUYXJnZXQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxuZnVuY3Rpb24gdW5sb2FkUmVjb3JkcyAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkUmVjb3JkcyAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyhkb25lKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICB9LCAzMDAwICk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlUmVjb3JkcyAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFJlY29yZCAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZsaXBTZWxlY3RlZFJlY29yZCAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuZWQnO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbE9wZW5lZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICk7XHJcblxyXG4gICAgICAgIH0sIDMwMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmxpcEJhY2tTZWxlY3RlZFJlY29yZCAoZm9yY2UpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmFkZU91dCggQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIgKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwQmFja1JlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uSW5mb1BhbmVsQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIH0sIGZvcmNlICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTaG93blJlY29yZCAoKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgc2hvd25SZWNvcmQgIT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkIDwgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkgKyBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc2V0U2hvd25SZWNvcmQgKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBcclxuICAgICAgICBDYW1lcmFNYW5hZ2VyLnJlc2V0Q2FtZXJhKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcmV2UmVjb3JkICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3ROZXh0UmVjb3JkICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFByZXZBdmFpbGFibGVSZWNvcmQgKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dEF2YWlsYWJsZVJlY29yZCAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIG5hdmlnYXRlUmVjb3JkcyAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBDb25zdGFudHMuY2xvc2VJbmZvUGFuZWxPblNjcm9sbCApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxSZWNvcmRzICggdG91Y2gsIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICB2YXIgc2Nyb2xsU3BlZWQ7XHJcblxyXG4gICAgb2xkRGVsdGEgPSAhb2xkRGVsdGEgfHwgTWF0aC5hYnMoIG9sZERlbHRhICkgPiAwLjUgPyAwLjUgOiBNYXRoLmFicyggb2xkRGVsdGEgKTtcclxuICAgIHNjcm9sbFNwZWVkID0gdG91Y2ggPyBNYXRoLnBvdygxIC0gb2xkRGVsdGEsIDMpICogMjAwIDogTWF0aC5wb3coMSAtIG9sZERlbHRhLCAzKSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRlbHRhID0gKCBiYXNlWSAtIG1vdXNlLnkgKSAvIGNhbnZhc0hlaWdodDtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuXHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCB0b3VjaCwgYmFzZVksIGRlbHRhICk7XHJcblxyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuXHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnRFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoU3RvcEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25SaWdodENsaWNrRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duRXZlbnQsIGZhbHNlICk7IFxyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZSApIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VNb3ZlRXZlbnQgKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaE1vdmVFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSB7XHJcblxyXG4gICAgICAgIGlmICggZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZICkge1xyXG5cclxuICAgICAgICAgICAgbV9wb3N4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICAgICAgbV9wb3N5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggfHwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICAgICAgbV9wb3N4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBtX3Bvc3kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqICYmIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblNjcm9sbEV2ZW50ICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQgKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIENvbnN0YW50cy5jbG9zZUluZm9QYW5lbE9uQ2xpY2sgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlRG93bkV2ZW50ICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUuYnV0dG9uICE9PSAxICYmIGUuYnV0dG9uICE9PSAyICkge1xyXG5cclxuICAgICAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgICAgIHNjcm9sbFJlY29yZHMoIGZhbHNlLCBtb3VzZS55ICk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgICAgeTogbW91c2UueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0RXZlbnQgKCBlICkge1xyXG5cclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgIHk6IG1vdXNlLnlcclxuICAgIH07XHJcblxyXG4gICAgb25Ub3VjaE1vdmVFdmVudCggZSApO1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIHRydWUsIG1vdXNlLnkgKTtcclxuXHJcbiAgICB9IFxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Nb3VzZVVwRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5idXR0b24gIT09IDEgJiYgZS5idXR0b24gIT09IDIgKSB7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXIgc2NlbmUgY2xpY2sgZXZlbnQgb25seSBpZiBtb3VzZXVwIGV2ZW50IGlzIG5vdCBhIGRyYWcgZW5kIGV2ZW50ICYgbm90IGEgY2xpY2sgb24gYSBsaW5rXHJcbiAgICAgICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIENvbnN0YW50cy5zY2VuZS5ncmFiU2Vuc2l0aXZpdHkgKSAmJiAhKCBlLnRhcmdldCAmJiBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSApICkge1xyXG5cclxuICAgICAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaFN0b3BFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG5cclxuICAgIC8vIFRyaWdnZXIgc2NlbmUgY2xpY2sgZXZlbnQgb25seSBpZiBtb3VzZXVwIGV2ZW50IGlzIG5vdCBhIGRyYWcgZW5kIGV2ZW50ICYgbm90IGEgY2xpY2sgb24gYSBsaW5rXHJcbiAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgQ29uc3RhbnRzLnNjZW5lLmdyYWJTZW5zaXRpdml0eSApICYmICEoIGUudGFyZ2V0ICYmIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICkgKSB7XHJcblxyXG4gICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25SaWdodENsaWNrRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbktleURvd25FdmVudCAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcclxuXHJcbiAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAyNyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZUV2ZW50ICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgQ2FtZXJhTWFuYWdlci51cGRhdGVDYW1lcmFBc3BlY3QoIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRpbmcgKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaGlkZUxvYWRpbmcgKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdFNjZW5lICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIENvbnN0YW50cy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmluaXQoY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQpO1xyXG4gICAgY2FtZXJhID0gQ2FtZXJhTWFuYWdlci5nZXRDYW1lcmEoKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggQ29uc3RhbnRzLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAvLyBET00gc2V0dXBcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBoaWRlRWxlbWVudChDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgIGluaXREZWJ1ZygpO1xyXG4gICAgICAgIGluaXRHVUkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdFBvc3RQcm9jZXNzaW5nICgpIHtcclxuXHJcbiAgICBkZXB0aFNoYWRlciA9IFRIUkVFLlNoYWRlckxpYi5kZXB0aFJHQkE7XHJcbiAgICBkZXB0aFVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggZGVwdGhTaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcbiAgICBkZXB0aE1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGRlcHRoU2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZGVwdGhTaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgIHVuaWZvcm1zOiBkZXB0aFVuaWZvcm1zXHJcbiAgICB9ICk7XHJcbiAgICBkZXB0aE1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTm9CbGVuZGluZztcclxuXHJcbiAgICBkZXB0aFRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwge1xyXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0XHJcbiAgICB9ICk7XHJcblxyXG4gICAgY29tcG9zZXIgPSBuZXcgVEhSRUUuRWZmZWN0Q29tcG9zZXIoIHJlbmRlcmVyICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBuZXcgVEhSRUUuUmVuZGVyUGFzcyggc2NlbmUsIGNhbWVyYSApICk7XHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVwdGggb2YgZmllbGQgc2hhZGVyICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkb2YgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRG9GU2hhZGVyICk7XHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgLy9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuICAgIGRvZi51bmlmb3Jtcy56bmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyOyAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLnpmYXIudmFsdWUgPSBjYW1lcmEuZmFyOyAvL2NhbWVyYSBjbGlwcGluZyBlbmRcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aC52YWx1ZSA9IDU7IC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoOyAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG4gICAgZG9mLnVuaWZvcm1zLmZzdG9wLnZhbHVlID0gOC4wOyAvL2Ytc3RvcCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLnNob3dGb2N1cy52YWx1ZSA9IGZhbHNlOyAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YudmFsdWUgPSB0cnVlOyAvL21hbnVhbCBkb2YgY2FsY3VsYXRpb25cclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQudmFsdWUgPSAxMTsgLy9uZWFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMubmRvZmRpc3QudmFsdWUgPSA4MDsgLy9uZWFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LnZhbHVlID0gMDsgLy9mYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mZGlzdC52YWx1ZSA9IDEwMDsgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuQ29DLnZhbHVlID0gMC4wMzsgLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcudmFsdWUgPSBmYWxzZTsgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmF1dG9mb2N1cy52YWx1ZSA9IHRydWU7IC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUuc2V0KCAwLjM1LCAwLjM1ICk7IC8vIGF1dG9mb2N1cyBwb2ludCBvbiBzY3JlZW4gKDAuMCwwLjAgLSBsZWZ0IGxvd2VyIGNvcm5lciwgMS4wLDEuMCAtIHVwcGVyIHJpZ2h0KSBcclxuICAgIGRvZi51bmlmb3Jtcy5tYXhibHVyLnZhbHVlID0gQ29uc3RhbnRzLmJsdXJBbW91bnQ7IC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQudmFsdWUgPSAwOyAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcbiAgICBkb2YudW5pZm9ybXMuZ2Fpbi52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmJpYXMudmFsdWUgPSAwOyAvL2Jva2VoIGVkZ2UgYmlhcyAgICAgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZnJpbmdlLnZhbHVlID0gMDsgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuICAgIEZYQUEgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRlhBQVNoYWRlciApO1xyXG5cclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS5yZW5kZXJUb1NjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggZG9mICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBGWEFBICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdERlYnVnICgpIHtcclxuXHJcbiAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCggc3RhdHMuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIHZhciBkZWJ1ZyA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwLCAyMCwgMjAsIDEsIDEsIDEgKSApO1xyXG4gICAgZGVidWcucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgc2NlbmUuYWRkKCBkZWJ1ZyApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRHVUkgKCkge1xyXG5cclxuICAgIHZhciBjYW1lcmFGb2xkZXIsXHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgsXHJcbiAgICAgICAgZG9mRm9sZGVyLFxyXG4gICAgICAgIF9sYXN0O1xyXG5cclxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcbiAgICBcclxuICAgIGNhbWVyYUZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdDYW1lcmEnICk7XHJcbiAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW1lcmEgKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdENyYXRlcyAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgQ29uc3RhbnRzLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIENvbnN0YW50cy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNyYXRlICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdFJlY29yZHMgKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVjb3JkICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZWNvcmRNYXRlcmlhbCAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IENvbnN0YW50cy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG5mdW5jdGlvbiB3aGVlbERpc3RhbmNlICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHdoZWVsRGlyZWN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29vcmRzRXF1YWxzQXBwcm94ICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBmYWRlT3V0ICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZhZGVJbiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH0sIDE1KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkZhZGVDb21wbGV0ZSggZSAsIGUyICkge1xyXG5cclxuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LnN0eWxlLm9wYWNpdHkgPT09ICcwJyApIHtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVFbGVtZW50KCBlbGVtZW50ICkge1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RWxlbWVudCggZWxlbWVudCApIHtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25FdmVudCAoKSB7XHJcblxyXG4gICAgdmFyIHQsXHJcbiAgICAgICAgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICAgICAgJ01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOid3ZWJraXRUcmFuc2l0aW9uRW5kJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgZm9yKHQgaW4gdHJhbnNpdGlvbnMpIHtcclxuXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LmJvZHkuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVDYW52YXNTaXplICgpIHtcclxuXHJcbiAgICBjYW52YXNXaWR0aCA9IENvbnN0YW50cy5jYW52YXNXaWR0aCA/IENvbnN0YW50cy5jYW52YXNXaWR0aCA6IENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gQ29uc3RhbnRzLmNhbnZhc0hlaWdodCA/IENvbnN0YW50cy5jYW52YXNIZWlnaHQgOiBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0Q2FudmFzRGltZW5zaW9ucyAoKSB7XHJcblxyXG4gICAgLy9Db25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLmV4dGVuZChwYXJhbXMpO1xyXG5cclxuICAgIC8vIGZlYXR1cmUgdGVzdFxyXG4gICAgaWYgKCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG5cclxuICAgIGlmICggd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZHByID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY2FudmFzIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBpbmZvIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuXHJcbiAgICBpbml0U2NlbmUoKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGlkIDwgMCApIHtcclxuXHJcbiAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGlkID4gbG9hZGVkUmVjb3JkcyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuc3RhcnRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSB0cnVlO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuc3RvcFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZW5hYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmRpc2FibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLmZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgPSBmbGlwQmFja1NlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7Il19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9zdGF0cy1qcy9idWlsZC9zdGF0cy5taW4uanMiLCJub2RlX21vZHVsZXMvdHdlZW4uanMvaW5kZXguanMiLCJzcmMvY3JhdGVkaWdnZXIvQ2FtZXJhTWFuYWdlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci9Db25zdGFudHMuanMiLCJzcmMvY3JhdGVkaWdnZXIvUmVjb3JkLmpzIiwic3JjL2NyYXRlZGlnZ2VyL2luZGV4LmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXIuanMiLCJzcmMvY3JhdGVkaWdnZXIvdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcy5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcy5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3B2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3I4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBjcmF0ZWRpZ2dlciA9IHJlcXVpcmUoJy4vY3JhdGVkaWdnZXInKTtcclxuXHJcbnZhciBkYXRhID0gSlNPTi5wYXJzZSgnW3tcInRpdGxlXCI6XCJTbyBXaGF0XCIsXCJhcnRpc3RcIjpcIk1pbGVzIERhdmlzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjNiZjVmZTVmMTVmNjliZmViMDk3MTM5ZmMzNGYzZDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPQllCTlYxNDYwNzcwM0FDQVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTdG9sZW4gTW9tZW50c1wiLFwiYXJ0aXN0XCI6XCJPbGl2ZXIgTmVsc29uXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOTkyMzVhNWZiZTU1NzU5MGNjZDYyYTJhMTUyZTRkYmUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk2MVwiLFwiaWRcIjpcIlNPQ05NUEgxMkIwQjgwNjRBQVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGVtZSBmb3IgTWF4aW5lXCIsXCJhcnRpc3RcIjpcIldvb2R5IFNoYXdcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iYjkzN2YxZTFkNTdmNzU0MmE2NGM3NGIxM2M0NzkwMC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09NTFNHVzEzMTM0Mzg0MUE3XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk1vYW5pblxcJyBNYW1ib1wiLFwiYXJ0aXN0XCI6XCJNaW5ndXMgQmlnIEJhbmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kY2QxNTY1Y2YzZGQ2NjNmN2I3NDkyZTRkYTM3ODg1NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk2XCIsXCJpZFwiOlwiU09WUUxWWDEzMTM0Mzg2QUY5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlN1bW1lcnRpbWVcIixcImFydGlzdFwiOlwiT3NjYXIgUGV0ZXJzb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kNmFjZGY0YTk3NWVkZjk1NTYxODJkN2M2YTMxZTU5Ni80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09GTldUVjEzNzcxMjczOUJDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRlYSBmb3IgVHdvXCIsXCJhcnRpc3RcIjpcIkxlc3RlciBZb3VuZ1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzhlZmZiZDhkYzdhOTVmMDZjNWFjYThlNmVjZjNhNzhlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTdcIixcImlkXCI6XCJTT0FQQk1RMTQ0QzRBMThDRDRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGluZSBVcFwiLFwiYXJ0aXN0XCI6XCJMZW5uaWUgVHJpc3Rhbm9cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yM2IyNzY2YzI0NTdiZTUwMmUzYjc5ZjA4OGNiOGJhOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU1XCIsXCJpZFwiOlwiU09CUERSUTEzMTM0MzlCQTUxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkkgUmVtZW1iZXIgQ2xpZmZvcmRcIixcImFydGlzdFwiOlwiTGVlIE1vcmdhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2VmYTcwNmUxZDNmYzEzNjNjN2E1ZjA3ZjkwODhhNmNiLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0NSVVdPMTJBQjAxODQ4NDZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWxsIFRoZSBUaGluZ3MgWW91IEFyZVwiLFwiYXJ0aXN0XCI6XCJPc2NhciBQZXR0aWZvcmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci84Y2U5ZmNmMGVjMzMzYjA2YzM4YWQ5OTljOGRjY2IyOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09CSEtWRzEzMTVDRDQxQzQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkVhc3kgTGl2aW5nXCIsXCJhcnRpc3RcIjpcIkNsaWZmb3JkIEJyb3duXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZTg0NjM2MzA4MTNiNmMyNTUzNmNkYmVmMDMxMzRhZTMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NVwiLFwiaWRcIjpcIlNPRVZMUloxMzEzNDNBMjhENlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGlwbGFzaFwiLFwiYXJ0aXN0XCI6XCJEb24gRWxsaXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zNGQ4N2NmMDYzMTkzN2JkYjc5Njc1NDAyMDU0ZDNiMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTczXCIsXCJpZFwiOlwiU09PVlpIUjEyQThDMTMyRkE4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJ1bXBpblxcJyBPbiBTdW5zZXRcIixcImFydGlzdFwiOlwiV2VzIE1vbnRnb21lcnlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NWY0MzUyM2ZjZDAxYjMwNDY0ODY2NzRlMDlkMzcwMC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTY2XCIsXCJpZFwiOlwiU09LWEhaVDE0NzhCNjM4ODdBXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkZvb3RwcmludHNcIixcImFydGlzdFwiOlwiV2F5bmUgU2hvcnRlclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQwYzQ3NjhkNmVlMjVkNTM1NmI1ZWZiZDBmNjljMzI0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDdcIixcImlkXCI6XCJTT1pMRkpBMTQ0RDEzRDA3NjhcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQmx1ZSBUcmFpblwiLFwiYXJ0aXN0XCI6XCJKb2huIENvbHRyYW5lXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMWQwMTlkODFmOTljNTIxMzM5ODc5MWM4YTBkNmEyZDEvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1N1wiLFwiaWRcIjpcIlNPQUNZU1MxNDVGRUJBRDhDNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJBbGwgQmx1ZXNcIixcImFydGlzdFwiOlwiUm9uIENhcnRlclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzJkMjBhZTRjNDEyN2NlNmI4YWE1OGYwOGJlY2M5YzA1LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDFcIixcImlkXCI6XCJTT0JKUUJNMTQ0RTVDQTREODlcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgRnVubnkgVmFsZW50aW5lXCIsXCJhcnRpc3RcIjpcIkNoZXQgQmFrZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kMmY4YjRkMTVhNjI0MzMzOTAzYzU3YjdkNGFhNWFiNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU0XCIsXCJpZFwiOlwiU09BQVFJWjE0NEM0ODZBOTMyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxvdmUgZm9yIFNhbGVcIixcImFydGlzdFwiOlwiQ2Fubm9uYmFsbCBBZGRlcmxleVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2I3ZGY0NDBmMmU3NDY0NzY4MTBiOGZjMzZlMTk3MGRmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTlcIixcImlkXCI6XCJTT1BKUUVVMTQ0QUQ3MDU1ODRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGFkeSBTaW5ncyB0aGUgQmx1ZXNcIixcImFydGlzdFwiOlwiSGVyYmllIE5pY2hvbHNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xN2VhNGEwNTI2MDk2ZTVhOGZiMjA3MTczODZlOTllOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDEwXCIsXCJpZFwiOlwiU09BT1lUSDEzNzZGNzhBNEJBXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNsZW9wYXRyYVxcJ3MgRHJlYW1cIixcImFydGlzdFwiOlwiQnVkIFBvd2VsbFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzAxM2VhMGNlY2MzZThiMzcwYmQyMWI0NDVjZTViOGM1LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NThcIixcImlkXCI6XCJTT0tQQVRUMTJBNkQ0RjQxMkJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQmVybmllXFwncyBUdW5lXCIsXCJhcnRpc3RcIjpcIkdlcnJ5IE11bGxpZ2FuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvN2JjZTViMjFhZDI5ZGYxMzAzNjgxMjFhNWM0YmNmMzYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5MFwiLFwiaWRcIjpcIlNPQkpIT1MxMzc2MThCRTRGRFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMZXQgVGhlIEdvb2QgVGltZXMgUm9sbFwiLFwiYXJ0aXN0XCI6XCJMZXN0ZXIgQm93aWVcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wOGUxOGQ2ZTRmODQ5OTAwM2VkOGM5ZWJiYzdjZTczYS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09CUlBTRDEzMTM0Mzg2QjE2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkdyb292ZXlhcmRcIixcImFydGlzdFwiOlwiSGFyb2xkIExhbmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wY2FjNjAzYWM3ODI4OTgzZWRiNjNjNTlmNGIyZmY5OS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09IQU5SRjEzMTFBRkVDQTJGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkZhciBXZXN0XCIsXCJhcnRpc3RcIjpcIlRpbSBIYWdhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mMWQ5NjQ1OTA0ZWEzNDQxZmU1YzdkMDI1YzQ1MGQwYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09HRllFTDEyQTU4QTdDMEIyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IElkZWFsXCIsXCJhcnRpc3RcIjpcIktlbm55IERvcmhhbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzIyOGIwNTMyZThlZjg0YTZjZmE0OWJlYmZlYzI0Mjc4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTlcIixcImlkXCI6XCJTT0ZRS0xIMTMxMzQzOUM5RDBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiWWVhcm5pblxcJ1wiLFwiYXJ0aXN0XCI6XCJPbGl2ZXIgTmVsc29uXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOTkyMzVhNWZiZTU1NzU5MGNjZDYyYTJhMTUyZTRkYmUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk2MVwiLFwiaWRcIjpcIlNPRUlHVE0xMkE2RDRGOTJFMVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNb2FuaW5cXCdcIixcImFydGlzdFwiOlwiQXJ0IEJsYWtleVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzNlODQ5OGQ0OWJjM2QwMzBhMzY3MzBhYWRhM2M1NTNiLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NThcIixcImlkXCI6XCJTT0JXTlJYMTQ1RkQ2QjU1RTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGlrZSBTb21lb25lIGluIExvdmVcIixcImFydGlzdFwiOlwiQXJ0IEZhcm1lclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2M4NWFlZDBjNGNiOTZiY2M2NzUzZDYxNDBkZTljZjc1LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDRcIixcImlkXCI6XCJTT0JGR0tQMTJBNkQ0Rjg4MzRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQ2hlZXNlIENha2VcIixcImFydGlzdFwiOlwiRGV4dGVyIEdvcmRvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzc2NzM1NGFiMDdkMWZkY2M2OTI0YmJjZTBhNDMxZTYwLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5ODhcIixcImlkXCI6XCJTT0tQUlhFMTM3NzA0MkIwN0VcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUGVhY2UgUGllY2VcIixcImFydGlzdFwiOlwiQmlsbCBFdmFuc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzEyYTQ3MmMxNDIxMDVlMDQ5NmU4NDJlNDg2YjI1MmNjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OThcIixcImlkXCI6XCJTT0FZQkhHMTQ0Qzc0QzVDNTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWluXFwndCBJdCBGdW5reSBOb3dcIixcImFydGlzdFwiOlwiR3JhbnQgR3JlZW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kZmUyYjI0YjA3NTQzNWY2MjkwN2QzNjM3Y2Q4MTJiNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTcwXCIsXCJpZFwiOlwiU09CQUdKUTEzMTY3NzE0NzQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkRyaXZhXFwnIE1hblwiLFwiYXJ0aXN0XCI6XCJNYXggUm9hY2hcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83YWVlNTJmYmYxNWE2YjlhMDM0YTNhOTE1ZmJlMGQ2MC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDExXCIsXCJpZFwiOlwiU09FUk5IUDEzNzY3OTQ2Q0ZGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldoYXQgQXJlIFlvdSBEb2luZyBUaGUgUmVzdCBPZiBZb3VyIExpZmU/XCIsXCJhcnRpc3RcIjpcIk1pbHQgSmFja3NvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2ExMTMzZTY1ZWI3Y2JlZTllNWUzMmQ4ZjMxZjUwNDc1LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NzNcIixcImlkXCI6XCJTT0hYV1dOMTM3Nzc1NTc3NTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiVGhlIEdpcmwgRnJvbSBJcGFuZW1hXCIsXCJhcnRpc3RcIjpcIlN0YW4gR2V0elwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzBiMDcyZWRjMTY5N2I1NTg3MjBjNjQwOTQ4MzcxZDdhLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT0NOQlROMTQ3OEM0NjAzRURcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWxvbmUgVG9nZXRoZXJcIixcImFydGlzdFwiOlwiS2VubnkgRG9yaGFtXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMjI4YjA1MzJlOGVmODRhNmNmYTQ5YmViZmVjMjQyNzgvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1OVwiLFwiaWRcIjpcIlNPQUJST0kxMkFCMDE3QzNFNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTZXB0ZW1iZXIgSW4gVGhlIFJhaW5cIixcImFydGlzdFwiOlwiUm95IEhhcmdyb3ZlXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOThhNDgyZDhjY2NhN2IyMjE1MmQ1NzE0YzIyYWE0NjQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NFwiLFwiaWRcIjpcIlNPUFdUSUwxMkE4QzEzQkJERlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMb3ZlIFRoZW1lIGZyb20gXFwnU3BhcnRhY3VzXFwnXCIsXCJhcnRpc3RcIjpcIll1c2VmIExhdGVlZlwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2JiNTA1MTZiNTA3YWM4NzQ4MmE0NDZjZTQ0YjA2MjllLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0lGQkFRMTMxMUFGRTMxNDhcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWxtb3N0IExpa2UgQmVpbmcgaW4gTG92ZVwiLFwiYXJ0aXN0XCI6XCJSZWQgR2FybGFuZFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2IzY2Y2OTk1ZGUyNGQ0M2M3MTdlNDEzMDBlNzhmNjA3LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDZcIixcImlkXCI6XCJTT0FUSERaMTJBQjAxODVCNUZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTmlnaHQgQW5kIERheVwiLFwiYXJ0aXN0XCI6XCJKb2UgUGFzc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzE3ZWNkMTVjMjQxYmYzNzhlNjg0ZDU1M2I0ZTdiOGJjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDVcIixcImlkXCI6XCJTT0JZT0FDMTNFNkNCMDE5MjZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU291cyBMZSBDaWVsIERlIFBhcmlzXCIsXCJhcnRpc3RcIjpcIlRvb3RzIFRoaWVsZW1hbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci84MWY4NzM0NTdhMzQ2YjI2Yjg1YTgxMjI1NDFhOGYwNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09NVVdRUzEyQThDMTNCMkQzXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNjcmFtYmxlZCBFZ2dzXCIsXCJhcnRpc3RcIjpcIk5hdCBBZGRlcmxleVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2EyMTU0ZWJkNzVjMjQ3MDk1ZmVmNTAwYzZkNWYxNjNjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjBcIixcImlkXCI6XCJTT0RKQVlaMTMxMUFGREExM0ZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGFuc2FuYVxcJ3MgUHJpZXN0ZXNzXCIsXCJhcnRpc3RcIjpcIkRvbmFsZCBCeXJkXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzAwYmE1YzQ3ZjU4MjUyZTRlZjgxMjc5ZTZmZWIxYTAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3M1wiLFwiaWRcIjpcIlNPRFVKSVIxMkE2RDRGODVBMFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNeSBMaXR0bGUgQnJvd24gQm9va1wiLFwiYXJ0aXN0XCI6XCJEdWtlIEVsbGluZ3RvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2FjMDVlZGQzODY4NDE3N2UzNTU2YjFjZGJkZTQ3NjRhLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjNcIixcImlkXCI6XCJTT0dUVEhWMTM2RjI0MDUyREVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUGF0cmljaWFcIixcImFydGlzdFwiOlwiQXJ0IFBlcHBlclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQ5MjhhMjIxMTAwMGE4NWJiZTAyY2QyOTliNWQ2MjkxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDdcIixcImlkXCI6XCJTT05WVVBHMTM3NzIyNzQzNzVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiVGhlIFNpZGV3aW5kZXJcIixcImFydGlzdFwiOlwiTGVlIE1vcmdhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzM4ZWJlZGQ3YzRhNzdjMzUwMmIyY2M1ZDgwZGIzMTA5LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OThcIixcImlkXCI6XCJTT0dUWEVYMTJCMEI4MDY4NjZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiWW91IERvblxcJ3QgS25vdyBXaGF0IExvdmUgSXNcIixcImFydGlzdFwiOlwiU29ubnkgUm9sbGluc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQ5ZDcyNTM3ZjkxNmE5MGMyN2U2MjlhODczMDhiYzUzLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTZcIixcImlkXCI6XCJTT0VEVE5OMTM3NzJBMzlEOTRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQmx1ZSBNb25rXCIsXCJhcnRpc3RcIjpcIlRoZWxvbmlvdXMgTW9ua1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzAyMzcyN2RiNjhmNGVkYmI3OGViMTE4MDhmZDk1NTc0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0FUVUNFMTQ0QUQwRTg5RDFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGFzIFZlZ2FzIFRhbmdvXCIsXCJhcnRpc3RcIjpcIkdpbCBFdmFuc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzMxNmYwOTExYTU2MDYwNjc4YzIyNDEyMDM4N2NkN2E4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjRcIixcImlkXCI6XCJTT0ZET0NZMTM3NzVDMzYxMDlcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU2FuZHVcIixcImFydGlzdFwiOlwiQ2xpZmZvcmQgQnJvd25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hY2Q2MWM0MmUyOGRmN2ZiZDMzN2ZmZDNlNjM4MzkwOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU1XCIsXCJpZFwiOlwiU09BQUNFRjEzMTUyQTcxRTlEXCIsXCJoYXNTbGVldmVcIjpmYWxzZX1dJyk7XHJcbnZhciBkYXRhMiA9IEpTT04ucGFyc2UoJ1t7XCJ0aXRsZVwiOlwiWW91IEdvdCBNZVwiLFwiYXJ0aXN0XCI6XCJUaGUgUm9vdHNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci84MDc2OGUwYzdmMjY2MmQ3NDI3MzQwNGY4Nzk2NTBiYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09KQU5CTzE0NEJBMDhFQzYwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldoYXRcXCdzIEdvbGRlblwiLFwiYXJ0aXN0XCI6XCJKdXJhc3NpYyA1XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzQxYzZjMzc2NzcwMjUzZjg4MDVmNTQxMDMwODU2MGMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMlwiLFwiaWRcIjpcIlNPTVlVQlQxNDRDMjg3N0Q4OFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGYXplcnNcIixcImFydGlzdFwiOlwiS2luZyBHZWVkb3JhaFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQ5OGQxOWE3YmQ4ZWZjYWJmZTE5YTljZmYyMDAzNmM0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDNcIixcImlkXCI6XCJTT0NURkxFMTM3Njg2RDQ0RDBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUGVhY2hmdXp6XCIsXCJhcnRpc3RcIjpcIktNRFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2ZiMzRkMDNhNDUxOGYyOTIwYWJiM2M5ZjE0OTY2M2MxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTFcIixcImlkXCI6XCJTT1JKRUdFMTM3MTlCOEMzNThcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTm9uZSBTaGFsbCBQYXNzXCIsXCJhcnRpc3RcIjpcIkFlc29wIFJvY2tcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mZDAxMzBiYjQ3OGVkN2ZmZjZjYThjYzI4NjkzYWVmMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09LSklaVDEzMTFBRkU3REFFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk1DXFwncyBBY3QgTGlrZSBUaGV5IERvblxcJ3QgS25vd1wiLFwiYXJ0aXN0XCI6XCJLUlMtT25lXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNTdmMmY4YzI5NDIxZjZmZTJjOGUwNGJiMmYxMjVhNjYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMFwiLFwiaWRcIjpcIlNPUklOQU4xMzExQUZEODhDQlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJdFxcJ3MgVHJpY2t5XCIsXCJhcnRpc3RcIjpcIlJ1bi1ELk0uQy5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci82NzM4OTQ2YzVjNDg3ODBhMDYwODg0MjQ0N2NjMGI0Ny80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg2XCIsXCJpZFwiOlwiU09ESlRRWDE0NEJEOTg2RkQ2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkdldCBCeVwiLFwiYXJ0aXN0XCI6XCJUYWxpYiBLd2VsaVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2Y4MWVjNjhkMzcxYzZjOGM2YjM0OTlkNWQ4OTM0NGYyLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0VHT1lPMTM3MzBEQURFNDJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQSBMaXR0bGUgU291bFwiLFwiYXJ0aXN0XCI6XCJQZXRlIFJvY2tcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci85YjFjZjhkZTFmOTMwODg1MzFlMDVmNmQzNjc3MTRmOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAxXCIsXCJpZFwiOlwiU09DRVJPSzEyQTZENEZBNUZDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTaG93IEdvZXMgT25cIixcImFydGlzdFwiOlwiTHVwZSBGaWFzY29cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80ZjFlMDk3ODYxNWZmYTVmZDc0MzNkN2MzYTcyZDBkNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDEwXCIsXCJpZFwiOlwiU09DTVBZQTEyQzU2NDEzQjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldhdmluXFwnIEZsYWdcIixcImFydGlzdFwiOlwiS1xcJ25hYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9jMjIxZTgyZTQ5YzY1N2ZmMmRkZjQyYWIzMDAzODAwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDEwXCIsXCJpZFwiOlwiU09UQklDTjEzNzU5Mjk1NDUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIllvdSBHb3RzIFRvIENoaWxsXCIsXCJhcnRpc3RcIjpcIkVQTURcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9jMWMyMjVjYTlhY2NiMGMxM2ZiOTdmNjg0YjQ0OTM3Zi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09ITlhEUTE0MTkxN0UzRTg4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkV2ZXJ5dGhpbmcgQ2hhbmdlc1wiLFwiYXJ0aXN0XCI6XCJBY2V5YWxvbmVcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wNTI4MWRlYTZlYmMxNTBjYzg0NTI0MmVmMDZmODY3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA1XCIsXCJpZFwiOlwiU09EWVVRWDEzMTM0M0E1NkI1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkMuUi5FLkEuTS5cIixcImFydGlzdFwiOlwiV3UtVGFuZyBDbGFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjY2OGIxNzkzNjZiYjNlZDYyM2RkOGJjY2QyZjM4ZWIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5M1wiLFwiaWRcIjpcIlNPSFlKSVoxNDYwMzc5NjFBOVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTd2VldGVzdCBHaXJsIChEb2xsYXIgQmlsbClcIixcImFydGlzdFwiOlwiV3ljbGVmIEplYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iOTg2YjJmMWQzZmE1MGE1YThhOTQwMmNkMjczYWYwZC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09EVUFMSTEzMTM0MzhCNTNFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJyZWF0aGUgQW5kIFN0b3BcIixcImFydGlzdFwiOlwiUS1UaXBcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zMjQzMTU4NDY1MzlhZTlhNDMwNjM4YmQ3ODUzOGYyYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09FVVZFSDEyQjBCODA4NkY1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk1zLiBKYWNrc29uXCIsXCJhcnRpc3RcIjpcIk91dEthc3RcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci82NTMzMTY5OTNhNzlmOTM2ZGNkZWM3NTczZTI2MjU2Zi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAxXCIsXCJpZFwiOlwiU09TUkRQUzE0NEIyOEVDRUI1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNoaWxkcmVuXFwncyBTdG9yeVwiLFwiYXJ0aXN0XCI6XCJTbGljayBSaWNrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNWVmODVhNzM4ZDZmZDMyMTIwZDBlMmI1Y2JjMDIyMmYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPRFFIT0wxNDRCRDk0QzRGRFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJQYWlkIEluIEZ1bGxcIixcImFydGlzdFwiOlwiRXJpYyBCLiAmIFJha2ltXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOWJhZGYwZTU0ZGZmOWRlNjkyMTFhNzUxNzk3NTBkODgvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMlwiLFwiaWRcIjpcIlNPQlRZRkYxNDYwMDlEMjMxMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXYXRjaCBPdXQgTm93XCIsXCJhcnRpc3RcIjpcIlRoZSBCZWF0bnV0c1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU4Nzc1OGE1YjU1YmQ0YzA3ZWQyYjIyNmJjMzUyZmEyLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT05KQk9JMTMxNUNENDg5RUNcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU2hhZG93Ym94aW5cXCcgKEFsYnVtIFZlcnNpb24gKEV4cGxpY2l0KSlcIixcImFydGlzdFwiOlwiR1pBXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNDhhOWUzMWZmMzNiYTNmNzU1MDFkZDdhMzY2YjljZDEvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NVwiLFwiaWRcIjpcIlNPQ01TVkIxMkIwQjgwODIzMFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMdWNoaW5pIEFrYSBUaGlzIElzIEl0XCIsXCJhcnRpc3RcIjpcIkNhbXAgTG9cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iMjI0NGZiY2YzODQxZjBjYTljZTdjZDMxNjZlNWNlOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk3XCIsXCJpZFwiOlwiU09DTFNBRDEzMTM0Mzk5OTQ3XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlVrbm93aG93d2VkdVwiLFwiYXJ0aXN0XCI6XCJCYWhhbWFkaWFcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83MTRkMTgxMGNkZTlkZmM5NDAxZjhlODljZDIxODUyYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk2XCIsXCJpZFwiOlwiU09LSUxBVDEyQTZENEY3RkM3XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldvblxcJ3QgRG9cIixcImFydGlzdFwiOlwiSiBEaWxsYVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzA4OGYxNjMwODdkN2FmNzI4ODFkYjU3NGViYTQwNjc0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDZcIixcImlkXCI6XCJTT0dIQVJLMTJBNThBN0QxMjhcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQ3JhenlcIixcImFydGlzdFwiOlwiR25hcmxzIEJhcmtsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kNmM5YWJiMzk3MmRlZTdiNmI4YjYyNGJlYjA4YjY3Yy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09CS01LUDE0NTA5QTdGMzZFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkZ1bGwgQ2xpcFwiLFwiYXJ0aXN0XCI6XCJHYW5nIFN0YXJyXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMTY5Zjk5NGQ3YWIyYThkODY4Y2RlNzdmZDU2NmNiYmYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPQUtBWEcxNDU2QjA3QjlEQVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDb2FzdGluXFwnIGZlYXQuIEsuIEZsYXlcIixcImFydGlzdFwiOlwiWmlvbiBJXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDNlYTFjNDY1NWI0NGM1ODZlOTBkZDRkNWY5ZTFhYWMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwOVwiLFwiaWRcIjpcIlNPVlhaWVkxMkFCMDE4NERBNFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJPbmVcIixcImFydGlzdFwiOlwiR2hvc3RmYWNlIEtpbGxhaFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzNhNWRhNmI1MzVmNWY3MzA3Y2JhNjJkNDIwMTFjYjVmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT1BEREJLMTMxMkE4QThGRDVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSGlwIEhvcFwiLFwiYXJ0aXN0XCI6XCJNb3MgRGVmXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODllMjhhMGE5M2VmZjlkYzU3NDQ3NjcxMGI1YzA5ZTIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPR1dHU0oxMkFGNzJBOEFDMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNeSBQaGlsb3NvcGh5XCIsXCJhcnRpc3RcIjpcIkJvb2dpZSBEb3duIFByb2R1Y3Rpb25zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNTdmMmY4YzI5NDIxZjZmZTJjOGUwNGJiMmYxMjVhNjYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMFwiLFwiaWRcIjpcIlNPRExWRVQxMkE1OEE3N0EzMVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXb3JzdCBDb21lcyBUbyBXb3JzdFwiLFwiYXJ0aXN0XCI6XCJEaWxhdGVkIFBlb3BsZXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iZWYyMmI4OGQ3NGM5ZmM3OWEwOTIxZDVmNDc5NTE4Zi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAxXCIsXCJpZFwiOlwiU09ERUtRSzEzMTY3NzE0NkM2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIklmIFlvdSBNdXN0XCIsXCJhcnRpc3RcIjpcIkRlbCB0aGUgRnVua3kgSG9tb3NhcGllblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2RmMWIwYTI4ZWU2NWVmYzU0YTU5NjA5OTFhOTZiODcyLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT1JFR1FGMTJCMEI4MDY1OEVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2hlbiBJIEIgT24gVGhhIE1pY1wiLFwiYXJ0aXN0XCI6XCJSYWtpbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzRkZGNmYTVlNjlhMWI3OWFjYmUyMGY0Y2UyODI0NzVjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT09DTVNGMTM2Q0EyRTlCQzFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTHlyaWNhbCBTd29yZHNcIixcImFydGlzdFwiOlwiUmFzIEthc3NcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mMjRmZTczZmZhMzRiOWY5OTdiYTRhMjYzMWMwMzM0ZC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA1XCIsXCJpZFwiOlwiU09ERVhHTzEyQThDMTNDMDFEXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNoaW1teSBTaGltbXkgWWFcIixcImFydGlzdFwiOlwiT2xcXCcgRGlydHkgQmFzdGFyZFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzc4NjM4OGQzNjg5MDBmNjZmMDViZDM4MzFiZGE0ZmY4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT1lWTlhOMTQ0QjI2QjcxQTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiVGhlIFNlZWQgKDIuMClcIixcImFydGlzdFwiOlwiVGhlIFJvb3RzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNDExZmZkODkxMWYxZmMwNWMyMDVlODY1MDlmNmVjYTEvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMlwiLFwiaWRcIjpcIlNPQ1paVVUxNDRGNTAwRjE2RlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJY2UgQ3JlYW1cIixcImFydGlzdFwiOlwiUmFla3dvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzc1YzlmODRiMTg5YzJiYzMxMDY0N2U2MWI3YTZkNWU4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT1dUUUZZMTM1QzM5NUU5OENcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTWlsayBUaGUgQ293XCIsXCJhcnRpc3RcIjpcIkNhcHBhZG9ubmFcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci81OTUzYjQ1ZDY3MTZmY2IzYjJmZDIyMjA3MmFjNDAyOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09DRUdDRjEzMTFBRkU1RDUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlJ1bm5pblxcJ1wiLFwiYXJ0aXN0XCI6XCJUaGUgUGhhcmN5ZGVcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83MWRlN2NhMWFlYTA2M2E4N2RjYTA4OTA3ZDdkOWQxMS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDEzXCIsXCJpZFwiOlwiU09MRllBRDEzN0FENzYzM0IyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBDaG9pY2UgSXMgWW91cnNcIixcImFydGlzdFwiOlwiQmxhY2sgU2hlZXBcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kOGFjNGZhZTU1OWZiMDA1ZGRmN2YwZWQ1YWRiZjJmOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09FVkVQWTEyQTYzMTBFQUQzXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRlbm5lc3NlZVwiLFwiYXJ0aXN0XCI6XCJBcnJlc3RlZCBEZXZlbG9wbWVudFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzJjNzAzOWU2MTg4YmU0NGE4NjAwYThmODdlZGI1ZWM3LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTJcIixcImlkXCI6XCJTT0lYQVlYMTJBOEMxMzkwMzJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3VnYXIgSGlsbFwiLFwiYXJ0aXN0XCI6XCJBWlwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2IyZWFjMTIzNWM1ZWM2NzYxMmQyZmEwY2NlM2M3OTA1LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0VDSlhWMTM2QTVCNUVCNUVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTG91bmdpblxcJ1wiLFwiYXJ0aXN0XCI6XCJHdXJ1XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOWFmMDQ3MTcxYzUxNGQ3ZDU1OGJlNGQyZWIwYTYzN2QvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwOFwiLFwiaWRcIjpcIlNPSExDQ1MxMzEyQThBRDJDNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMYSBSaHVtYmFcIixcImFydGlzdFwiOlwiQm9iYnkgRGlnaXRhbFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2FjOThhMTFjNDM0Y2E3NmI1NTU1M2VhYTE3MjJhNGFkLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0ZYTkVKMTJCMEI4MEJEMzVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTi5ZLiBTdGF0ZSBPZiBNaW5kXCIsXCJhcnRpc3RcIjpcIk5hc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2U3ZjVhY2RmYmMxYzQ5YmM0NTIwOTM4YjRkNzc1ZWM2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTRcIixcImlkXCI6XCJTT0ZRS1FPMTMxMkZFMDA2NUZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQXdhcmQgVG91clwiLFwiYXJ0aXN0XCI6XCJBIFRyaWJlIENhbGxlZCBRdWVzdFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2FhY2I1NzY5MWY5NzQ1NmU2NTk0ZDhlOTkxYmI4MWJiLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTNcIixcImlkXCI6XCJTT0RHUUJGMTQ0QkQ4RjRGRDFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgRGVmaW5pdGlvbiBPZiBBIEJvb21iYXN0aWMgSmF6eiBTdHlsZVwiLFwiYXJ0aXN0XCI6XCJEcmVhbSBXYXJyaW9yc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzFmOWJmYTRjNzY2NWUwN2ZjN2RmYzdhYjRlNTllYzQ5LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTFcIixcImlkXCI6XCJTT0VISFpFMTQ0RTYwNEMyOUJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUmVhZHkgb3IgTm90XCIsXCJhcnRpc3RcIjpcIkZ1Z2Vlc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzA0YTU1MjZiN2I5NGM2ZTJkNjE3YWRlNzYyZGRmNWRjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTZcIixcImlkXCI6XCJTT0NHUUFKMTM2MDc3RTg5NDVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfV0nKTtcclxuXHJcbnZhciBib3R0b21CYXIgIFx0XHQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3R0b20tYmFyJyksXHJcblx0YnV0dG9uUHJldiBcdFx0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXByZXYnKSxcclxuXHRidXR0b25TaG93IFx0XHQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tc2hvdycpLFxyXG5cdGJ1dHRvbk5leHQgXHRcdD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXh0JyksXHJcblx0dGl0bGVDb250YWluZXIgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyYXRlZGlnZ2VyLXJlY29yZC10aXRsZScpLFxyXG5cdGFydGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmF0ZWRpZ2dlci1yZWNvcmQtYXJ0aXN0JyksXHJcblx0Y292ZXJDb250YWluZXIgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyYXRlZGlnZ2VyLXJlY29yZC1jb3ZlcicpO1xyXG5cclxuY3JhdGVkaWdnZXIuaW5pdCh7XHJcblxyXG5cdGRlYnVnOiB0cnVlLFxyXG5cclxuICAgIGVsZW1lbnRzOiB7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lciAgICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JhdGVkaWdnZXInKSxcclxuICAgICAgICBjYW52YXNDb250YWluZXIgICA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmF0ZWRpZ2dlci1jYW52YXMnKSxcclxuICAgICAgICBsb2FkaW5nQ29udGFpbmVyICA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmF0ZWRpZ2dlci1sb2FkaW5nJyksXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lciAgICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JhdGVkaWdnZXItaW5mbycpXHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbigpIHtcclxuICAgIFx0Ym90dG9tQmFyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xyXG4gICAgXHRmaWxsSW5mb1BhbmVsKGNyYXRlZGlnZ2VyLmdldFNlbGVjdGVkUmVjb3JkKCkpO1xyXG4gICAgfSxcclxuXHJcblx0b25JbmZvUGFuZWxDbG9zZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ym90dG9tQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpO1xyXG5cdH1cclxufSk7XHJcblxyXG5jcmF0ZWRpZ2dlci5sb2FkUmVjb3JkcyhkYXRhLCB0cnVlLCBmdW5jdGlvbigpIHtcclxuXHJcblx0YmluZEV2ZW50cygpO1xyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG5cclxuXHRidXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdGNyYXRlZGlnZ2VyLnNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHR9LCBmYWxzZSk7XHJcblxyXG5cdGJ1dHRvblNob3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0aWYgKGNyYXRlZGlnZ2VyLmdldFNlbGVjdGVkUmVjb3JkKCkpIHtcclxuXHJcblx0XHRcdGNyYXRlZGlnZ2VyLmZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRjcmF0ZWRpZ2dlci5zZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHR9LCBmYWxzZSk7XHJcblxyXG5cdGJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0Y3JhdGVkaWdnZXIuc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cdCAgICByZXR1cm4gZmFsc2U7XHJcblxyXG5cdH0sIGZhbHNlKTtcclxuXHRcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbGxJbmZvUGFuZWwgKCByZWNvcmQgKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS50aXRsZSApIHtcclxuXHJcbiAgICAgICAgdGl0bGVDb250YWluZXIuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEudGl0bGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuYXJ0aXN0ICkge1xyXG5cclxuICAgICAgICBhcnRpc3RDb250YWluZXIuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEuYXJ0aXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmNvdmVyICkge1xyXG5cclxuICAgICAgICBjb3ZlckNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyByZWNvcmQuZGF0YS5jb3ZlciArICcpJztcclxuXHJcbiAgICB9XHJcbn07IiwiLy8gc3RhdHMuanMgLSBodHRwOi8vZ2l0aHViLmNvbS9tcmRvb2Ivc3RhdHMuanNcbnZhciBTdGF0cz1mdW5jdGlvbigpe3ZhciBsPURhdGUubm93KCksbT1sLGc9MCxuPUluZmluaXR5LG89MCxoPTAscD1JbmZpbml0eSxxPTAscj0wLHM9MCxmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zi5pZD1cInN0YXRzXCI7Zi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oYil7Yi5wcmV2ZW50RGVmYXVsdCgpO3QoKytzJTIpfSwhMSk7Zi5zdHlsZS5jc3NUZXh0PVwid2lkdGg6ODBweDtvcGFjaXR5OjAuOTtjdXJzb3I6cG9pbnRlclwiO3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5pZD1cImZwc1wiO2Euc3R5bGUuY3NzVGV4dD1cInBhZGRpbmc6MCAwIDNweCAzcHg7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzAwMlwiO2YuYXBwZW5kQ2hpbGQoYSk7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLmlkPVwiZnBzVGV4dFwiO2kuc3R5bGUuY3NzVGV4dD1cImNvbG9yOiMwZmY7Zm9udC1mYW1pbHk6SGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OjE1cHhcIjtcbmkuaW5uZXJIVE1MPVwiRlBTXCI7YS5hcHBlbmRDaGlsZChpKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2MuaWQ9XCJmcHNHcmFwaFwiO2Muc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjc0cHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojMGZmXCI7Zm9yKGEuYXBwZW5kQ2hpbGQoYyk7NzQ+Yy5jaGlsZHJlbi5sZW5ndGg7KXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtqLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDoxcHg7aGVpZ2h0OjMwcHg7ZmxvYXQ6bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMxMTNcIjtjLmFwcGVuZENoaWxkKGopfXZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZC5pZD1cIm1zXCI7ZC5zdHlsZS5jc3NUZXh0PVwicGFkZGluZzowIDAgM3B4IDNweDt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMDIwO2Rpc3BsYXk6bm9uZVwiO2YuYXBwZW5kQ2hpbGQoZCk7dmFyIGs9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmsuaWQ9XCJtc1RleHRcIjtrLnN0eWxlLmNzc1RleHQ9XCJjb2xvcjojMGYwO2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxNXB4XCI7ay5pbm5lckhUTUw9XCJNU1wiO2QuYXBwZW5kQ2hpbGQoayk7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPVwibXNHcmFwaFwiO2Uuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjc0cHg7aGVpZ2h0OjMwcHg7YmFja2dyb3VuZC1jb2xvcjojMGYwXCI7Zm9yKGQuYXBwZW5kQ2hpbGQoZSk7NzQ+ZS5jaGlsZHJlbi5sZW5ndGg7KWo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksai5zdHlsZS5jc3NUZXh0PVwid2lkdGg6MXB4O2hlaWdodDozMHB4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMTMxXCIsZS5hcHBlbmRDaGlsZChqKTt2YXIgdD1mdW5jdGlvbihiKXtzPWI7c3dpdGNoKHMpe2Nhc2UgMDphLnN0eWxlLmRpc3BsYXk9XG5cImJsb2NrXCI7ZC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2JyZWFrO2Nhc2UgMTphLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIn19O3JldHVybntSRVZJU0lPTjoxMixkb21FbGVtZW50OmYsc2V0TW9kZTp0LGJlZ2luOmZ1bmN0aW9uKCl7bD1EYXRlLm5vdygpfSxlbmQ6ZnVuY3Rpb24oKXt2YXIgYj1EYXRlLm5vdygpO2c9Yi1sO249TWF0aC5taW4obixnKTtvPU1hdGgubWF4KG8sZyk7ay50ZXh0Q29udGVudD1nK1wiIE1TIChcIituK1wiLVwiK28rXCIpXCI7dmFyIGE9TWF0aC5taW4oMzAsMzAtMzAqKGcvMjAwKSk7ZS5hcHBlbmRDaGlsZChlLmZpcnN0Q2hpbGQpLnN0eWxlLmhlaWdodD1hK1wicHhcIjtyKys7Yj5tKzFFMyYmKGg9TWF0aC5yb3VuZCgxRTMqci8oYi1tKSkscD1NYXRoLm1pbihwLGgpLHE9TWF0aC5tYXgocSxoKSxpLnRleHRDb250ZW50PWgrXCIgRlBTIChcIitwK1wiLVwiK3ErXCIpXCIsYT1NYXRoLm1pbigzMCwzMC0zMCooaC8xMDApKSxjLmFwcGVuZENoaWxkKGMuZmlyc3RDaGlsZCkuc3R5bGUuaGVpZ2h0PVxuYStcInB4XCIsbT1iLHI9MCk7cmV0dXJuIGJ9LHVwZGF0ZTpmdW5jdGlvbigpe2w9dGhpcy5lbmQoKX19fTtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPVN0YXRzKTtcbiIsIi8qKlxuICogVHdlZW4uanMgLSBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2xlL3R3ZWVuLmpzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zb2xlL3R3ZWVuLmpzL2dyYXBocy9jb250cmlidXRvcnMgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgY29udHJpYnV0b3JzLlxuICogVGhhbmsgeW91IGFsbCwgeW91J3JlIGF3ZXNvbWUhXG4gKi9cblxuLy8gRGF0ZS5ub3cgc2hpbSBmb3IgKGFoZW0pIEludGVybmV0IEV4cGxvKGR8cillclxuaWYgKCBEYXRlLm5vdyA9PT0gdW5kZWZpbmVkICkge1xuXG5cdERhdGUubm93ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIG5ldyBEYXRlKCkudmFsdWVPZigpO1xuXG5cdH07XG5cbn1cblxudmFyIFRXRUVOID0gVFdFRU4gfHwgKCBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIF90d2VlbnMgPSBbXTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0UkVWSVNJT046ICcxNCcsXG5cblx0XHRnZXRBbGw6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIF90d2VlbnM7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlQWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdF90d2VlbnMgPSBbXTtcblxuXHRcdH0sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uICggdHdlZW4gKSB7XG5cblx0XHRcdF90d2VlbnMucHVzaCggdHdlZW4gKTtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmU6IGZ1bmN0aW9uICggdHdlZW4gKSB7XG5cblx0XHRcdHZhciBpID0gX3R3ZWVucy5pbmRleE9mKCB0d2VlbiApO1xuXG5cdFx0XHRpZiAoIGkgIT09IC0xICkge1xuXG5cdFx0XHRcdF90d2VlbnMuc3BsaWNlKCBpLCAxICk7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggdGltZSApIHtcblxuXHRcdFx0aWYgKCBfdHdlZW5zLmxlbmd0aCA9PT0gMCApIHJldHVybiBmYWxzZTtcblxuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHR0aW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBlcmZvcm1hbmNlICE9PSB1bmRlZmluZWQgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogRGF0ZS5ub3coKSApO1xuXG5cdFx0XHR3aGlsZSAoIGkgPCBfdHdlZW5zLmxlbmd0aCApIHtcblxuXHRcdFx0XHRpZiAoIF90d2VlbnNbIGkgXS51cGRhdGUoIHRpbWUgKSApIHtcblxuXHRcdFx0XHRcdGkrKztcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0X3R3ZWVucy5zcGxpY2UoIGksIDEgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHR9XG5cdH07XG5cbn0gKSgpO1xuXG5UV0VFTi5Ud2VlbiA9IGZ1bmN0aW9uICggb2JqZWN0ICkge1xuXG5cdHZhciBfb2JqZWN0ID0gb2JqZWN0O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0ID0ge307XG5cdHZhciBfdmFsdWVzRW5kID0ge307XG5cdHZhciBfdmFsdWVzU3RhcnRSZXBlYXQgPSB7fTtcblx0dmFyIF9kdXJhdGlvbiA9IDEwMDA7XG5cdHZhciBfcmVwZWF0ID0gMDtcblx0dmFyIF95b3lvID0gZmFsc2U7XG5cdHZhciBfaXNQbGF5aW5nID0gZmFsc2U7XG5cdHZhciBfcmV2ZXJzZWQgPSBmYWxzZTtcblx0dmFyIF9kZWxheVRpbWUgPSAwO1xuXHR2YXIgX3N0YXJ0VGltZSA9IG51bGw7XG5cdHZhciBfZWFzaW5nRnVuY3Rpb24gPSBUV0VFTi5FYXNpbmcuTGluZWFyLk5vbmU7XG5cdHZhciBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5MaW5lYXI7XG5cdHZhciBfY2hhaW5lZFR3ZWVucyA9IFtdO1xuXHR2YXIgX29uU3RhcnRDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25TdGFydENhbGxiYWNrRmlyZWQgPSBmYWxzZTtcblx0dmFyIF9vblVwZGF0ZUNhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uU3RvcENhbGxiYWNrID0gbnVsbDtcblxuXHQvLyBTZXQgYWxsIHN0YXJ0aW5nIHZhbHVlcyBwcmVzZW50IG9uIHRoZSB0YXJnZXQgb2JqZWN0XG5cdGZvciAoIHZhciBmaWVsZCBpbiBvYmplY3QgKSB7XG5cblx0XHRfdmFsdWVzU3RhcnRbIGZpZWxkIF0gPSBwYXJzZUZsb2F0KG9iamVjdFtmaWVsZF0sIDEwKTtcblxuXHR9XG5cblx0dGhpcy50byA9IGZ1bmN0aW9uICggcHJvcGVydGllcywgZHVyYXRpb24gKSB7XG5cblx0XHRpZiAoIGR1cmF0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdF9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXG5cdFx0fVxuXG5cdFx0X3ZhbHVlc0VuZCA9IHByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RhcnQgPSBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHRUV0VFTi5hZGQoIHRoaXMgKTtcblxuXHRcdF9pc1BsYXlpbmcgPSB0cnVlO1xuXG5cdFx0X29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cblx0XHRfc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6ICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBlcmZvcm1hbmNlICE9PSB1bmRlZmluZWQgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdyAhPT0gdW5kZWZpbmVkID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogRGF0ZS5ub3coKSApO1xuXHRcdF9zdGFydFRpbWUgKz0gX2RlbGF5VGltZTtcblxuXHRcdGZvciAoIHZhciBwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kICkge1xuXG5cdFx0XHQvLyBjaGVjayBpZiBhbiBBcnJheSB3YXMgcHJvdmlkZWQgYXMgcHJvcGVydHkgdmFsdWVcblx0XHRcdGlmICggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXSBpbnN0YW5jZW9mIEFycmF5ICkge1xuXG5cdFx0XHRcdGlmICggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXS5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gY3JlYXRlIGEgbG9jYWwgY29weSBvZiB0aGUgQXJyYXkgd2l0aCB0aGUgc3RhcnQgdmFsdWUgYXQgdGhlIGZyb250XG5cdFx0XHRcdF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gPSBbIF9vYmplY3RbIHByb3BlcnR5IF0gXS5jb25jYXQoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gPSBfb2JqZWN0WyBwcm9wZXJ0eSBdO1xuXG5cdFx0XHRpZiggKCBfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gaW5zdGFuY2VvZiBBcnJheSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdICo9IDEuMDsgLy8gRW5zdXJlcyB3ZSdyZSB1c2luZyBudW1iZXJzLCBub3Qgc3RyaW5nc1xuXHRcdFx0fVxuXG5cdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gPSBfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gfHwgMDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKCAhX2lzUGxheWluZyApIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdFRXRUVOLnJlbW92ZSggdGhpcyApO1xuXHRcdF9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmICggX29uU3RvcENhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRfb25TdG9wQ2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucygpO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5zdG9wQ2hhaW5lZFR3ZWVucyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGZvciAoIHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IF9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKyApIHtcblxuXHRcdFx0X2NoYWluZWRUd2VlbnNbIGkgXS5zdG9wKCk7XG5cblx0XHR9XG5cblx0fTtcblxuXHR0aGlzLmRlbGF5ID0gZnVuY3Rpb24gKCBhbW91bnQgKSB7XG5cblx0XHRfZGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5yZXBlYXQgPSBmdW5jdGlvbiAoIHRpbWVzICkge1xuXG5cdFx0X3JlcGVhdCA9IHRpbWVzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy55b3lvID0gZnVuY3Rpb24oIHlveW8gKSB7XG5cblx0XHRfeW95byA9IHlveW87XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXG5cdHRoaXMuZWFzaW5nID0gZnVuY3Rpb24gKCBlYXNpbmcgKSB7XG5cblx0XHRfZWFzaW5nRnVuY3Rpb24gPSBlYXNpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLmludGVycG9sYXRpb24gPSBmdW5jdGlvbiAoIGludGVycG9sYXRpb24gKSB7XG5cblx0XHRfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uID0gaW50ZXJwb2xhdGlvbjtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuY2hhaW4gPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRfY2hhaW5lZFR3ZWVucyA9IGFyZ3VtZW50cztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25TdGFydCA9IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cblx0XHRfb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vblVwZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uQ29tcGxldGUgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uQ29tcGxldGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblN0b3AgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICggdGltZSApIHtcblxuXHRcdHZhciBwcm9wZXJ0eTtcblxuXHRcdGlmICggdGltZSA8IF9zdGFydFRpbWUgKSB7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBfb25TdGFydENhbGxiYWNrRmlyZWQgPT09IGZhbHNlICkge1xuXG5cdFx0XHRpZiAoIF9vblN0YXJ0Q2FsbGJhY2sgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0X29uU3RhcnRDYWxsYmFjay5jYWxsKCBfb2JqZWN0ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0X29uU3RhcnRDYWxsYmFja0ZpcmVkID0gdHJ1ZTtcblxuXHRcdH1cblxuXHRcdHZhciBlbGFwc2VkID0gKCB0aW1lIC0gX3N0YXJ0VGltZSApIC8gX2R1cmF0aW9uO1xuXHRcdGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xuXG5cdFx0dmFyIHZhbHVlID0gX2Vhc2luZ0Z1bmN0aW9uKCBlbGFwc2VkICk7XG5cblx0XHRmb3IgKCBwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kICkge1xuXG5cdFx0XHR2YXIgc3RhcnQgPSBfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gfHwgMDtcblx0XHRcdHZhciBlbmQgPSBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdO1xuXG5cdFx0XHRpZiAoIGVuZCBpbnN0YW5jZW9mIEFycmF5ICkge1xuXG5cdFx0XHRcdF9vYmplY3RbIHByb3BlcnR5IF0gPSBfaW50ZXJwb2xhdGlvbkZ1bmN0aW9uKCBlbmQsIHZhbHVlICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUGFyc2VzIHJlbGF0aXZlIGVuZCB2YWx1ZXMgd2l0aCBzdGFydCBhcyBiYXNlIChlLmcuOiArMTAsIC0zKVxuXHRcdFx0XHRpZiAoIHR5cGVvZihlbmQpID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdGVuZCA9IHN0YXJ0ICsgcGFyc2VGbG9hdChlbmQsIDEwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHByb3RlY3QgYWdhaW5zdCBub24gbnVtZXJpYyBwcm9wZXJ0aWVzLlxuXHRcdFx0XHRpZiAoIHR5cGVvZihlbmQpID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHRcdF9vYmplY3RbIHByb3BlcnR5IF0gPSBzdGFydCArICggZW5kIC0gc3RhcnQgKSAqIHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwgKSB7XG5cblx0XHRcdF9vblVwZGF0ZUNhbGxiYWNrLmNhbGwoIF9vYmplY3QsIHZhbHVlICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGVsYXBzZWQgPT0gMSApIHtcblxuXHRcdFx0aWYgKCBfcmVwZWF0ID4gMCApIHtcblxuXHRcdFx0XHRpZiggaXNGaW5pdGUoIF9yZXBlYXQgKSApIHtcblx0XHRcdFx0XHRfcmVwZWF0LS07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyByZWFzc2lnbiBzdGFydGluZyB2YWx1ZXMsIHJlc3RhcnQgYnkgbWFraW5nIHN0YXJ0VGltZSA9IG5vd1xuXHRcdFx0XHRmb3IoIHByb3BlcnR5IGluIF92YWx1ZXNTdGFydFJlcGVhdCApIHtcblxuXHRcdFx0XHRcdGlmICggdHlwZW9mKCBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdICkgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gKyBwYXJzZUZsb2F0KF92YWx1ZXNFbmRbIHByb3BlcnR5IF0sIDEwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRcdHZhciB0bXAgPSBfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF07XG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF0gPSBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdO1xuXHRcdFx0XHRcdFx0X3ZhbHVlc0VuZFsgcHJvcGVydHkgXSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRfdmFsdWVzU3RhcnRbIHByb3BlcnR5IF0gPSBfdmFsdWVzU3RhcnRSZXBlYXRbIHByb3BlcnR5IF07XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChfeW95bykge1xuXHRcdFx0XHRcdF9yZXZlcnNlZCA9ICFfcmV2ZXJzZWQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfc3RhcnRUaW1lID0gdGltZSArIF9kZWxheVRpbWU7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aWYgKCBfb25Db21wbGV0ZUNhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRcdFx0X29uQ29tcGxldGVDYWxsYmFjay5jYWxsKCBfb2JqZWN0ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IF9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKyApIHtcblxuXHRcdFx0XHRcdF9jaGFpbmVkVHdlZW5zWyBpIF0uc3RhcnQoIHRpbWUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHR9O1xuXG59O1xuXG5cblRXRUVOLkVhc2luZyA9IHtcblxuXHRMaW5lYXI6IHtcblxuXHRcdE5vbmU6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGs7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFkcmF0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiAoIDIgLSBrICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogaztcblx0XHRcdHJldHVybiAtIDAuNSAqICggLS1rICogKCBrIC0gMiApIC0gMSApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Q3ViaWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAtLWsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogayAqIGs7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqIGsgKyAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWFydGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSAoIC0tayAqIGsgKiBrICogayApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEpIHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrO1xuXHRcdFx0cmV0dXJuIC0gMC41ICogKCAoIGsgLT0gMiApICogayAqIGsgKiBrIC0gMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVpbnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKiBrICogayArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrICogaztcblx0XHRcdHJldHVybiAwLjUgKiAoICggayAtPSAyICkgKiBrICogayAqIGsgKiBrICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0U2ludXNvaWRhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLmNvcyggayAqIE1hdGguUEkgLyAyICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNpbiggayAqIE1hdGguUEkgLyAyICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDAuNSAqICggMSAtIE1hdGguY29zKCBNYXRoLlBJICogayApICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFeHBvbmVudGlhbDoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDAgPyAwIDogTWF0aC5wb3coIDEwMjQsIGsgLSAxICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAxID8gMSA6IDEgLSBNYXRoLnBvdyggMiwgLSAxMCAqIGsgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiBNYXRoLnBvdyggMTAyNCwgayAtIDEgKTtcblx0XHRcdHJldHVybiAwLjUgKiAoIC0gTWF0aC5wb3coIDIsIC0gMTAgKiAoIGsgLSAxICkgKSArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdENpcmN1bGFyOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguc3FydCggMSAtIGsgKiBrICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNxcnQoIDEgLSAoIC0tayAqIGsgKSApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEpIHJldHVybiAtIDAuNSAqICggTWF0aC5zcXJ0KCAxIC0gayAqIGspIC0gMSk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCBNYXRoLnNxcnQoIDEgLSAoIGsgLT0gMikgKiBrKSArIDEpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RWxhc3RpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdHJldHVybiAtICggYSAqIE1hdGgucG93KCAyLCAxMCAqICggayAtPSAxICkgKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdHJldHVybiAoIGEgKiBNYXRoLnBvdyggMiwgLSAxMCAqIGspICogTWF0aC5zaW4oICggayAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSArIDEgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcywgYSA9IDAuMSwgcCA9IDAuNDtcblx0XHRcdGlmICggayA9PT0gMCApIHJldHVybiAwO1xuXHRcdFx0aWYgKCBrID09PSAxICkgcmV0dXJuIDE7XG5cdFx0XHRpZiAoICFhIHx8IGEgPCAxICkgeyBhID0gMTsgcyA9IHAgLyA0OyB9XG5cdFx0XHRlbHNlIHMgPSBwICogTWF0aC5hc2luKCAxIC8gYSApIC8gKCAyICogTWF0aC5QSSApO1xuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAtIDAuNSAqICggYSAqIE1hdGgucG93KCAyLCAxMCAqICggayAtPSAxICkgKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKTtcblx0XHRcdHJldHVybiBhICogTWF0aC5wb3coIDIsIC0xMCAqICggayAtPSAxICkgKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKiAwLjUgKyAxO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0QmFjazoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXHRcdFx0cmV0dXJuIGsgKiBrICogKCAoIHMgKyAxICkgKiBrIC0gcyApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cdFx0XHRyZXR1cm4gLS1rICogayAqICggKCBzICsgMSApICogayArIHMgKSArIDE7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxICkgcmV0dXJuIDAuNSAqICggayAqIGsgKiAoICggcyArIDEgKSAqIGsgLSBzICkgKTtcblx0XHRcdHJldHVybiAwLjUgKiAoICggayAtPSAyICkgKiBrICogKCAoIHMgKyAxICkgKiBrICsgcyApICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Qm91bmNlOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gMSAtIFRXRUVOLkVhc2luZy5Cb3VuY2UuT3V0KCAxIC0gayApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoIGsgPCAoIDEgLyAyLjc1ICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBrIDwgKCAyIC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAxLjUgLyAyLjc1ICkgKSAqIGsgKyAwLjc1O1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBrIDwgKCAyLjUgLyAyLjc1ICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDIuMjUgLyAyLjc1ICkgKSAqIGsgKyAwLjkzNzU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqICggayAtPSAoIDIuNjI1IC8gMi43NSApICkgKiBrICsgMC45ODQzNzU7XG5cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoIGsgPCAwLjUgKSByZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5JbiggayAqIDIgKSAqIDAuNTtcblx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCggayAqIDIgLSAxICkgKiAwLjUgKyAwLjU7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5UV0VFTi5JbnRlcnBvbGF0aW9uID0ge1xuXG5cdExpbmVhcjogZnVuY3Rpb24gKCB2LCBrICkge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDEsIGYgPSBtICogaywgaSA9IE1hdGguZmxvb3IoIGYgKSwgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcblxuXHRcdGlmICggayA8IDAgKSByZXR1cm4gZm4oIHZbIDAgXSwgdlsgMSBdLCBmICk7XG5cdFx0aWYgKCBrID4gMSApIHJldHVybiBmbiggdlsgbSBdLCB2WyBtIC0gMSBdLCBtIC0gZiApO1xuXG5cdFx0cmV0dXJuIGZuKCB2WyBpIF0sIHZbIGkgKyAxID4gbSA/IG0gOiBpICsgMSBdLCBmIC0gaSApO1xuXG5cdH0sXG5cblx0QmV6aWVyOiBmdW5jdGlvbiAoIHYsIGsgKSB7XG5cblx0XHR2YXIgYiA9IDAsIG4gPSB2Lmxlbmd0aCAtIDEsIHB3ID0gTWF0aC5wb3csIGJuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5CZXJuc3RlaW4sIGk7XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8PSBuOyBpKysgKSB7XG5cdFx0XHRiICs9IHB3KCAxIC0gaywgbiAtIGkgKSAqIHB3KCBrLCBpICkgKiB2WyBpIF0gKiBibiggbiwgaSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBiO1xuXG5cdH0sXG5cblx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKCB2LCBrICkge1xuXG5cdFx0dmFyIG0gPSB2Lmxlbmd0aCAtIDEsIGYgPSBtICogaywgaSA9IE1hdGguZmxvb3IoIGYgKSwgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XG5cblx0XHRpZiAoIHZbIDAgXSA9PT0gdlsgbSBdICkge1xuXG5cdFx0XHRpZiAoIGsgPCAwICkgaSA9IE1hdGguZmxvb3IoIGYgPSBtICogKCAxICsgayApICk7XG5cblx0XHRcdHJldHVybiBmbiggdlsgKCBpIC0gMSArIG0gKSAlIG0gXSwgdlsgaSBdLCB2WyAoIGkgKyAxICkgJSBtIF0sIHZbICggaSArIDIgKSAlIG0gXSwgZiAtIGkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGlmICggayA8IDAgKSByZXR1cm4gdlsgMCBdIC0gKCBmbiggdlsgMCBdLCB2WyAwIF0sIHZbIDEgXSwgdlsgMSBdLCAtZiApIC0gdlsgMCBdICk7XG5cdFx0XHRpZiAoIGsgPiAxICkgcmV0dXJuIHZbIG0gXSAtICggZm4oIHZbIG0gXSwgdlsgbSBdLCB2WyBtIC0gMSBdLCB2WyBtIC0gMSBdLCBmIC0gbSApIC0gdlsgbSBdICk7XG5cblx0XHRcdHJldHVybiBmbiggdlsgaSA/IGkgLSAxIDogMCBdLCB2WyBpIF0sIHZbIG0gPCBpICsgMSA/IG0gOiBpICsgMSBdLCB2WyBtIDwgaSArIDIgPyBtIDogaSArIDIgXSwgZiAtIGkgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFV0aWxzOiB7XG5cblx0XHRMaW5lYXI6IGZ1bmN0aW9uICggcDAsIHAxLCB0ICkge1xuXG5cdFx0XHRyZXR1cm4gKCBwMSAtIHAwICkgKiB0ICsgcDA7XG5cblx0XHR9LFxuXG5cdFx0QmVybnN0ZWluOiBmdW5jdGlvbiAoIG4gLCBpICkge1xuXG5cdFx0XHR2YXIgZmMgPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkZhY3RvcmlhbDtcblx0XHRcdHJldHVybiBmYyggbiApIC8gZmMoIGkgKSAvIGZjKCBuIC0gaSApO1xuXG5cdFx0fSxcblxuXHRcdEZhY3RvcmlhbDogKCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHZhciBhID0gWyAxIF07XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAoIG4gKSB7XG5cblx0XHRcdFx0dmFyIHMgPSAxLCBpO1xuXHRcdFx0XHRpZiAoIGFbIG4gXSApIHJldHVybiBhWyBuIF07XG5cdFx0XHRcdGZvciAoIGkgPSBuOyBpID4gMTsgaS0tICkgcyAqPSBpO1xuXHRcdFx0XHRyZXR1cm4gYVsgbiBdID0gcztcblxuXHRcdFx0fTtcblxuXHRcdH0gKSgpLFxuXG5cdFx0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKCBwMCwgcDEsIHAyLCBwMywgdCApIHtcblxuXHRcdFx0dmFyIHYwID0gKCBwMiAtIHAwICkgKiAwLjUsIHYxID0gKCBwMyAtIHAxICkgKiAwLjUsIHQyID0gdCAqIHQsIHQzID0gdCAqIHQyO1xuXHRcdFx0cmV0dXJuICggMiAqIHAxIC0gMiAqIHAyICsgdjAgKyB2MSApICogdDMgKyAoIC0gMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEgKSAqIHQyICsgdjAgKiB0ICsgcDE7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cz1UV0VFTjsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuXHRUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcblxyXG5cdENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG52YXIgY2FtZXJhLFxyXG5cdHRhcmdldCxcclxuICAgIGNhbWVyYVR3ZWVuLFxyXG4gICAgdGFyZ2V0VHdlZW47XHJcblxyXG5mdW5jdGlvbiBpbml0KHJhdGlvKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIHJhdGlvLCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZm9jdXNSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuICAgIFxyXG4gICAgY2FtZXJhVHdlZW4uc3RvcCgpO1xyXG4gICAgdGFyZ2V0VHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcblx0ICAgICAgICB5OiA1MCArIENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93blksXHJcblx0ICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG5cdGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG5cdCAgICAudG8oIHtcclxuXHQgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG5cdCAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuXHQgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnogKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcblx0ICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcblx0ICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21JblJlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG4gICAgdGFyZ2V0VHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRGbGlwcGVkWSArIDUwLFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55IC0gNTAsXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6b29tT3V0UmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcbiAgICBcclxuICAgIGNhbWVyYVR3ZWVuLnN0b3AoKTtcclxuICAgIHRhcmdldFR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICB0YXJnZXRUd2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogcmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogNzUsXHJcbiAgICAgICAgICAgIHo6IHJlY29yZEFic29sdXRlUG9zLnpcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zICsgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2FtZXJhKCkge1xyXG4gICAgXHJcbiAgICBjYW1lcmFUd2Vlbi5zdG9wKCk7XHJcbiAgICB0YXJnZXRUd2Vlbi5zdG9wKCk7XHJcblxyXG5cdHRhcmdldFR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIGNhbWVyYVR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW1lcmFBc3BlY3QocmF0aW8pIHtcclxuXHRjYW1lcmEuYXNwZWN0ID0gcmF0aW87XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb29rQXRUYXJnZXQoKSB7XHJcblx0Y2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluaXQ6IGluaXQsXHJcblx0Zm9jdXNSZWNvcmQ6IGZvY3VzUmVjb3JkLFxyXG5cdHpvb21JblJlY29yZDogem9vbUluUmVjb3JkLFxyXG5cdHpvb21PdXRSZWNvcmQ6IHpvb21PdXRSZWNvcmQsXHJcblx0cmVzZXRDYW1lcmE6IHJlc2V0Q2FtZXJhLFxyXG5cdHVwZGF0ZUNhbWVyYUFzcGVjdDogdXBkYXRlQ2FtZXJhQXNwZWN0LFxyXG5cdGxvb2tBdFRhcmdldDogbG9va0F0VGFyZ2V0LFxyXG5cdFxyXG5cdGdldENhbWVyYTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gY2FtZXJhO1xyXG5cdH0sXHJcblx0Z2V0VGFyZ2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0YXJnZXQ7XHJcblx0fVxyXG59XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqY21GMFpXUnBaMmRsY2k5RFlXMWxjbUZOWVc1aFoyVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SjJZWElnVkVoU1JVVWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JSGRwYm1SdmQxc25WRWhTUlVVblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4YkoxUklVa1ZGSjEwZ09pQnVkV3hzS1N4Y2NseHVYSFJVVjBWRlRpQTlJSEpsY1hWcGNtVW9KM1IzWldWdUxtcHpKeWtzWEhKY2JseHlYRzVjZEVOdmJuTjBZVzUwY3lBOUlISmxjWFZwY21Vb0p5NHZRMjl1YzNSaGJuUnpKeWs3WEhKY2JseHlYRzUyWVhJZ1kyRnRaWEpoTEZ4eVhHNWNkSFJoY21kbGRDeGNjbHh1SUNBZ0lHTmhiV1Z5WVZSM1pXVnVMRnh5WEc0Z0lDQWdkR0Z5WjJWMFZIZGxaVzQ3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYm1sMEtISmhkR2x2S1NCN1hISmNibHh5WEc1Y2RHTmhiV1Z5WVNBOUlHNWxkeUJVU0ZKRlJTNVFaWEp6Y0dWamRHbDJaVU5oYldWeVlTZ2dORFVzSUhKaGRHbHZMQ0F3TGpFc0lESXdNREF3SUNrN1hISmNiaUFnSUNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnZ1BTQTBOVHRjY2x4dUlDQWdJR05oYldWeVlTNW1jbUZ0WlZOcGVtVWdQU0F6TWp0Y2NseHVJQ0FnSUdOaGJXVnlZUzV6WlhSTVpXNXpLQ0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2dzSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnS1R0Y2NseHVYSEpjYmlBZ0lDQjBZWEpuWlhRZ1BTQnVaWGNnVkVoU1JVVXVUMkpxWldOME0wUW9LVHRjY2x4dUlDQWdJR05oYldWeVlTNXNiMjlyUVhRb0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcE8xeHlYRzVjY2x4dUlDQWdJR05oYldWeVlWUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NrN1hISmNiaUFnSUNCMFlYSm5aWFJVZDJWbGJpQTlJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ3BPMXh5WEc1Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdabTlqZFhOU1pXTnZjbVFvY21WamIzSmtXRkJ2Y3l3Z2NtVmpiM0prUVdKemIyeDFkR1ZRYjNNcElIdGNjbHh1SUNBZ0lGeHlYRzRnSUNBZ1kyRnRaWEpoVkhkbFpXNHVjM1J2Y0NncE8xeHlYRzRnSUNBZ2RHRnlaMlYwVkhkbFpXNHVjM1J2Y0NncE8xeHlYRzVjY2x4dUlDQWdJSFJoY21kbGRGUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1Z4eVhHNWNkQ0FnSUNBdWRHOG9JSHRjY2x4dVhIUWdJQ0FnSUNBZ0lIZzZJSEpsWTI5eVpGaFFiM01zWEhKY2JseDBJQ0FnSUNBZ0lDQjVPaUExTUNBcklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJUYUc5M2Jsa3NYSEpjYmx4MElDQWdJQ0FnSUNCNk9pQnlaV052Y21SQlluTnZiSFYwWlZCdmN5NTZYSEpjYmx4MElDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmx4MElDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNWNkR05oYldWeVlWUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNWNkQ0FnSUNBdWRHOG9JSHRjY2x4dVhIUWdJQ0FnSUNBZ0lIZzZJSEpsWTI5eVpGaFFiM01nS3lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NExGeHlYRzVjZENBZ0lDQWdJQ0FnZVRvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVTeGNjbHh1WEhRZ0lDQWdJQ0FnSUhvNklISmxZMjl5WkVGaWMyOXNkWFJsVUc5ekxub2dLeUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU2WEhKY2JseDBJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZOYjNabFZHbHRaU0FwWEhKY2JseDBJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JuMWNjbHh1WEhKY2JtWjFibU4wYVc5dUlIcHZiMjFKYmxKbFkyOXlaQ2h5WldOdmNtUllVRzl6TENCeVpXTnZjbVJCWW5OdmJIVjBaVkJ2Y3lrZ2UxeHlYRzRnSUNBZ1hISmNiaUFnSUNCallXMWxjbUZVZDJWbGJpNXpkRzl3S0NrN1hISmNiaUFnSUNCMFlYSm5aWFJVZDJWbGJpNXpkRzl3S0NrN1hISmNibHh5WEc0Z0lDQWdkR0Z5WjJWMFZIZGxaVzRnUFNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSaGNtZGxkQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhKbFkyOXlaRmhRYjNNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJHYkdsd2NHVmtXU0FySURVd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNk9pQnlaV052Y21SQlluTnZiSFYwWlZCdmN5NTZYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1sdVptOVBjR1Z1VkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVnh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZVlIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQmpZVzFsY21FdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQnlaV052Y21SWVVHOXpJQ3NnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZUNBcklEZ3dMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU1SUMwZ05UQXNYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjZiMjl0VDNWMFVtVmpiM0prS0hKbFkyOXlaRmhRYjNNc0lISmxZMjl5WkVGaWMyOXNkWFJsVUc5ektTQjdYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lHTmhiV1Z5WVZSM1pXVnVMbk4wYjNBb0tUdGNjbHh1SUNBZ0lIUmhjbWRsZEZSM1pXVnVMbk4wYjNBb0tUdGNjbHh1WEhKY2JpQWdJQ0IwWVhKblpYUlVkMlZsYmlBOUlHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQXVaR1ZzWVhrb0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1cGJtWnZUM0JsYmxScGJXVWdMeUF5SUNsY2NseHVJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2NtVmpiM0prV0ZCdmN5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dOelVzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSG82SUhKbFkyOXlaRUZpYzI5c2RYUmxVRzl6TG5wY2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJR05oYldWeVlWUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCeVpXTnZjbVJZVUc5eklDc2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVVadlkzVnpVRzl6YVhScGIyNHVlQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYm4xY2NseHVYSEpjYm1aMWJtTjBhVzl1SUhKbGMyVjBRMkZ0WlhKaEtDa2dlMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQmpZVzFsY21GVWQyVmxiaTV6ZEc5d0tDazdYSEpjYmlBZ0lDQjBZWEpuWlhSVWQyVmxiaTV6ZEc5d0tDazdYSEpjYmx4eVhHNWNkSFJoY21kbGRGUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1ZEdGeVoyVjBRbUZ6WlZCdmMybDBhVzl1TG5nc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1MFlYSm5aWFJDWVhObFVHOXphWFJwYjI0dWVTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuUmhjbWRsZEVKaGMyVlFiM05wZEdsdmJpNTZYSEpjYmlBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lHTmhiV1Z5WVZSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0JqWVcxbGNtRXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFFtRnpaVkJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRkNZWE5sVUc5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVUpoYzJWUWIzTnBkR2x2Ymk1NlhISmNiaUFnSUNBZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVMXZkbVZVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0F1WldGemFXNW5LQ0JVVjBWRlRpNUZZWE5wYm1jdVVYVmhjblJwWXk1UGRYUWdLUzV6ZEdGeWRDZ3BPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCMWNHUmhkR1ZEWVcxbGNtRkJjM0JsWTNRb2NtRjBhVzhwSUh0Y2NseHVYSFJqWVcxbGNtRXVZWE53WldOMElEMGdjbUYwYVc4N1hISmNiaUFnSUNCallXMWxjbUV1ZFhCa1lYUmxVSEp2YW1WamRHbHZiazFoZEhKcGVDZ3BPMXh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCc2IyOXJRWFJVWVhKblpYUW9LU0I3WEhKY2JseDBZMkZ0WlhKaExteHZiMnRCZENnZ2RHRnlaMlYwTG5CdmMybDBhVzl1SUNrN1hISmNibjFjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc1Y2RHbHVhWFE2SUdsdWFYUXNYSEpjYmx4MFptOWpkWE5TWldOdmNtUTZJR1p2WTNWelVtVmpiM0prTEZ4eVhHNWNkSHB2YjIxSmJsSmxZMjl5WkRvZ2VtOXZiVWx1VW1WamIzSmtMRnh5WEc1Y2RIcHZiMjFQZFhSU1pXTnZjbVE2SUhwdmIyMVBkWFJTWldOdmNtUXNYSEpjYmx4MGNtVnpaWFJEWVcxbGNtRTZJSEpsYzJWMFEyRnRaWEpoTEZ4eVhHNWNkSFZ3WkdGMFpVTmhiV1Z5WVVGemNHVmpkRG9nZFhCa1lYUmxRMkZ0WlhKaFFYTndaV04wTEZ4eVhHNWNkR3h2YjJ0QmRGUmhjbWRsZERvZ2JHOXZhMEYwVkdGeVoyVjBMRnh5WEc1Y2RGeHlYRzVjZEdkbGRFTmhiV1Z5WVRvZ1puVnVZM1JwYjI0b0tTQjdYSEpjYmx4MFhIUnlaWFIxY200Z1kyRnRaWEpoTzF4eVhHNWNkSDBzWEhKY2JseDBaMlYwVkdGeVoyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2NseHVYSFJjZEhKbGRIVnliaUIwWVhKblpYUTdYSEpjYmx4MGZWeHlYRzU5SWwxOSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGRlYnVnOiBmYWxzZSxcclxuICAgIGNhbnZhc1dpZHRoOiBudWxsLFxyXG4gICAgY2FudmFzSGVpZ2h0OiBudWxsLFxyXG4gICAgbmJDcmF0ZXM6IDIsXHJcbiAgICByZWNvcmRzUGVyQ3JhdGU6IDI0LFxyXG4gICAgbGlnaHRJbnRlbnNpdHk6IDEsXHJcbiAgICBjYW1lcmFNb3VzZU1vdmU6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MTExMTExLFxyXG4gICAgc2xlZXZlQ29sb3I6IDB4MGQwNzAyLFxyXG4gICAgc2xlZXZlTWFza1RleHR1cmU6ICdpbWcvc2xlZXZlLnBuZycsXHJcbiAgICBjcmF0ZVRleHR1cmU6ICdpbWcvd29vZC5qcGcnLFxyXG4gICAgY2xvc2VJbmZvUGFuZWxPbkNsaWNrOiB0cnVlLFxyXG4gICAgY2xvc2VJbmZvUGFuZWxPblNjcm9sbDogdHJ1ZSxcclxuICAgIHBvc3Rwcm9jZXNzaW5nOiBmYWxzZSxcclxuICAgIGJsdXJBbW91bnQ6IDAuNCxcclxuICAgIHVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcclxuICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgIG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgIG9uTG9hZGluZ0VuZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHJvb3RDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgY2FudmFzQ29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGxvYWRpbmdDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICB0aXRsZUNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICBhcnRpc3RDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgY292ZXJDb250YWluZXI6IG51bGxcclxuICAgIH0sXHJcbiAgICBzY2VuZToge1xyXG4gICAgICAgIHJlY29yZE1vdmVUaW1lOiAxMDAwLFxyXG4gICAgICAgIGNhbWVyYU1vdmVUaW1lOiA4MDAsXHJcbiAgICAgICAgaW5mb09wZW5UaW1lOiA3MDAsXHJcbiAgICAgICAgcmVjb3JkQmFzZVk6IDUsXHJcbiAgICAgICAgcmVjb3JkU2hvd25ZOiAyNSxcclxuICAgICAgICByZWNvcmRGbGlwcGVkWTogMTEwLFxyXG4gICAgICAgIHRhcmdldEJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiAtMjAsXHJcbiAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgICAgICB6OiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgeDogMjgwLFxyXG4gICAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICAgIHo6IDE4MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhRm9jdXNQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiAxOTAsXHJcbiAgICAgICAgICAgIHk6IDE5NSxcclxuICAgICAgICAgICAgejogOTNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWTogMC4wNyxcclxuICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFo6IDAuMDQsXHJcbiAgICAgICAgZ3JhYlNlbnNpdGl2aXR5OiA2XHJcbiAgICB9LFxyXG5cclxuICAgIGV4dGVuZDogZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIga2V5IGluIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggb3B0aW9ucywga2V5ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpc1sga2V5IF0gPSBvcHRpb25zWyBrZXkgXTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59OyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG5cclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyksXHJcbiAgICBDYW1lcmFNYW5hZ2VyID0gcmVxdWlyZSgnLi9DYW1lcmFNYW5hZ2VyJyk7XHJcblxyXG52YXIgUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3JhdGVJZCA9IGNyYXRlSWQ7XHJcbiAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIHRoaXMuc3RhdGUgPSAnb3V0JztcclxuICAgIHRoaXMucmVjb3JkWFBvcyA9IC02MiArICggMTM1IC8gQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICogcG9zO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIFxyXG4gICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMTAwLCAxLjUsIDEwMCwgMSwgMSwgMSApLCBcclxuICAgICAgICBuZXcgVEhSRUUuTWVzaEZhY2VNYXRlcmlhbCggbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgY29sb3I6IENvbnN0YW50cy5zbGVldmVDb2xvclxyXG4gICAgICAgIH0pKVxyXG4gICAgKTtcclxuICAgIHRoaXMubWVzaC5nZW9tZXRyeS5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oIDUwLCAwLCAwICkgKTtcclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi5zZXQoIHRoaXMucmVjb3JkWFBvcywgQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZLCAwICk7XHJcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xyXG4gICAgdGhpcy5tZXNoLnJlY29yZElkID0gaWQ7XHJcbiAgICB0aGlzLmFic29sdXRlUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbigpO1xyXG4gICAgdGhpcy5yb3RhdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCk7XHJcblxyXG4gICAgdGhpcy5zZXRVbmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5wdXNoUmVjb3JkKCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coIFwiUmVjb3JkIG7CsFwiLCB0aGlzLmlkLFxyXG4gICAgICAgIFwiY3JhdGVJZCA9XCIsIHRoaXMuY3JhdGVJZCxcclxuICAgICAgICBcInBvcyA9XCIsIHRoaXMucG9zICk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0VW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zaG93UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3Nob3duJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzaG93bic7XHJcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5tZXNoLm1hdHJpeFdvcmxkICk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkU2hvd25ZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMlxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBDYW1lcmFNYW5hZ2VyLmZvY3VzUmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1c2hSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9ICdwdXNoZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1c2hlZCc7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgLSBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcFJlY29yZCA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gJ2ZsaXBwZWQnO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4uc3RvcCgpO1xyXG5cclxuICAgIHRoaXMucG9zaXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEZsaXBwZWRZXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB0aGlzLnJvdGF0aW9uVHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gNCApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IE1hdGguUEksXHJcbiAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci56b29tSW5SZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Ud2Vlbi5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvblR3ZWVuLnN0b3AoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb25Ud2VlbiA9IG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgICAgICBpZiAoIW5vQ2FtZXJhVHdlZW4pIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIENhbWVyYU1hbmFnZXIuem9vbU91dFJlY29yZCh0aGlzLnJlY29yZFhQb3MsIHRoaXMuYWJzb2x1dGVQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVjb3JkO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amNtRjBaV1JwWjJkbGNpOVNaV052Y21RdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWRtRnlJRlJJVWtWRklEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkoxUklVa1ZGSjEwZ09pQjBlWEJsYjJZZ1oyeHZZbUZzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z1oyeHZZbUZzV3lkVVNGSkZSU2RkSURvZ2JuVnNiQ2tzWEhKY2JpQWdJQ0JVVjBWRlRpQTlJSEpsY1hWcGNtVW9KM1IzWldWdUxtcHpKeWtzWEhKY2JseHlYRzRnSUNBZ1EyOXVjM1JoYm5SeklEMGdjbVZ4ZFdseVpTZ25MaTlEYjI1emRHRnVkSE1uS1N4Y2NseHVJQ0FnSUVOaGJXVnlZVTFoYm1GblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDBOaGJXVnlZVTFoYm1GblpYSW5LVHRjY2x4dVhISmNiblpoY2lCU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHbGtMQ0JqY21GMFpVbGtMQ0J3YjNNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnZEdocGN5NXBaQ0E5SUdsa08xeHlYRzRnSUNBZ2RHaHBjeTVqY21GMFpVbGtJRDBnWTNKaGRHVkpaRHRjY2x4dUlDQWdJSFJvYVhNdWNHOXpJRDBnY0c5ek8xeHlYRzRnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJQ2R2ZFhRbk8xeHlYRzRnSUNBZ2RHaHBjeTV5WldOdmNtUllVRzl6SUQwZ0xUWXlJQ3NnS0NBeE16VWdMeUJEYjI1emRHRnVkSE11Y21WamIzSmtjMUJsY2tOeVlYUmxJQ2tnS2lCd2IzTTdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXhNREFzSURFdU5Td2dNVEF3TENBeExDQXhMQ0F4SUNrc0lGeHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVNGSkZSUzVOWlhOb1JtRmpaVTFoZEdWeWFXRnNLQ0J1WlhjZ1ZFaFNSVVV1VFdWemFFeGhiV0psY25STllYUmxjbWxoYkNnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nUTI5dWMzUmhiblJ6TG5Oc1pXVjJaVU52Ykc5eVhISmNiaUFnSUNBZ0lDQWdmU2twWEhKY2JpQWdJQ0FwTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG1kbGIyMWxkSEo1TG1Gd2NHeDVUV0YwY21sNEtDQnVaWGNnVkVoU1JVVXVUV0YwY21sNE5DZ3BMbTFoYTJWVWNtRnVjMnhoZEdsdmJpZ2dOVEFzSURBc0lEQWdLU0FwTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG5CdmMybDBhVzl1TG5ObGRDZ2dkR2hwY3k1eVpXTnZjbVJZVUc5ekxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWNtVmpiM0prUW1GelpWa3NJREFnS1R0Y2NseHVJQ0FnSUhSb2FYTXViV1Z6YUM1eWIzUmhkR2x2Ymk1NklEMGdUV0YwYUM1UVNTQXZJREk3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1Y21WamIzSmtTV1FnUFNCcFpEdGNjbHh1SUNBZ0lIUm9hWE11WVdKemIyeDFkR1ZRYjNOcGRHbHZiaUE5SUc1bGR5QlVTRkpGUlM1V1pXTjBiM0l6S0NrN1hISmNibHh5WEc0Z0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ2s3WEhKY2JpQWdJQ0IwYUdsekxuSnZkR0YwYVc5dVZIZGxaVzRnUFNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvS1R0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG5ObGRGVnVZV04wYVhabEtDazdYSEpjYmlBZ0lDQjBhR2x6TG5CMWMyaFNaV052Y21Rb0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExteHZaeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JqYjI1emIyeGxMbXh2WnlnZ1hDSlNaV052Y21RZ2JzS3dYQ0lzSUhSb2FYTXVhV1FzWEhKY2JpQWdJQ0FnSUNBZ1hDSmpjbUYwWlVsa0lEMWNJaXdnZEdocGN5NWpjbUYwWlVsa0xGeHlYRzRnSUNBZ0lDQWdJRndpY0c5eklEMWNJaXdnZEdocGN5NXdiM01nS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG5ObGRFRmpkR2wyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbUZqZEdsMlpTQTlJSFJ5ZFdVN1hISmNiaUFnSUNCMGFHbHpMbTFsYzJndWRtbHphV0pzWlNBOUlIUnlkV1U3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzV6WlhSVmJtRmpkR2wyWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbUZqZEdsMlpTQTlJR1poYkhObE8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xuWnBjMmxpYkdVZ1BTQm1ZV3h6WlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG5Ob2IzZFNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUxuTjBiM0FvS1R0Y2NseHVJQ0FnSUhSb2FYTXVjbTkwWVhScGIyNVVkMlZsYmk1emRHOXdLQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0IwYUdsekxuTjBZWFJsSUNFOVBTQW5jMmh2ZDI0bklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnSjNOb2IzZHVKenRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHVjMlYwUm5KdmJVMWhkSEpwZUZCdmMybDBhVzl1S0NCMGFHbHpMbTFsYzJndWJXRjBjbWw0VjI5eWJHUWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVJRDBnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUlRhRzkzYmxsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV5YjNSaGRHbHZibFIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRTFoZEdndVVFa2dMeUF5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUVOaGJXVnlZVTFoYm1GblpYSXVabTlqZFhOU1pXTnZjbVFvZEdocGN5NXlaV052Y21SWVVHOXpMQ0IwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0cE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWNIVnphRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhSb2FYTXVjM1JoZEdVZ0lUMGdKM0IxYzJobFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBbmNIVnphR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiM05wZEdsdmJsUjNaV1Z1TG5OMGIzQW9LVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkp2ZEdGMGFXOXVWSGRsWlc0dWMzUnZjQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZjMmwwYVc5dVZIZGxaVzRnUFNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRUpoYzJWWlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y205MFlYUnBiMjVVZDJWbGJpQTlJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9Mbkp2ZEdGMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUJOWVhSb0xsQkpJQzhnTWlBcklFMWhkR2d1VUVrZ0x5QTNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNXlaV052Y21STmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1VW1WamIzSmtMbkJ5YjNSdmRIbHdaUzV3ZFd4c1VtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dkR2hwY3k1emRHRjBaU0FoUFQwZ0ozQjFiR3hsWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0FuY0hWc2JHVmtKenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IzTnBkR2x2YmxSM1pXVnVMbk4wYjNBb0tUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuSnZkR0YwYVc5dVZIZGxaVzR1YzNSdmNDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CdmMybDBhVzl1VkhkbFpXNGdQU0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlVG9nUTI5dWMzUmhiblJ6TG5OalpXNWxMbkpsWTI5eVpFSmhjMlZaWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbTkwWVhScGIyNVVkMlZsYmlBOUlHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuSnZkR0YwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNk9pQk5ZWFJvTGxCSklDOGdNaUF0SUUxaGRHZ3VVRWtnTHlBM1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNW1iR2x3VW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NCa2IyNWxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIUm9hWE11YzNSaGRHVWdQU0FuWm14cGNIQmxaQ2M3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUxuTjBiM0FvS1R0Y2NseHVJQ0FnSUhSb2FYTXVjbTkwWVhScGIyNVVkMlZsYmk1emRHOXdLQ2s3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUlEMGdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJEYjI1emRHRnVkSE11YzJObGJtVXVjbVZqYjNKa1JteHBjSEJsWkZsY2NseHVJQ0FnSUNBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJSFJvYVhNdWNtOTBZWFJwYjI1VWQyVmxiaUE5SUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQXVaR1ZzWVhrb0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1cGJtWnZUM0JsYmxScGJXVWdMeUEwSUNsY2NseHVJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ01DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VUb2dUV0YwYUM1UVNTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dUV0YwYUM1UVNTQXZJREpjY2x4dUlDQWdJQ0FnSUNCOUxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWFXNW1iMDl3Wlc1VWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwWEhKY2JpQWdJQ0FnSUNBZ0xtOXVRMjl0Y0d4bGRHVW9JR1J2Ym1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0JEWVcxbGNtRk5ZVzVoWjJWeUxucHZiMjFKYmxKbFkyOXlaQ2gwYUdsekxuSmxZMjl5WkZoUWIzTXNJSFJvYVhNdVlXSnpiMngxZEdWUWIzTnBkR2x2YmlrN1hISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbVpzYVhCQ1lXTnJVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDd2dibTlEWVcxbGNtRlVkMlZsYmlBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIUm9hWE11YzNSaGRHVWdQVDA5SUNkbWJHbHdjR1ZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjNOcGRHbHZibFIzWldWdUxuTjBiM0FvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5KdmRHRjBhVzl1VkhkbFpXNHVjM1J2Y0NncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2YzJsMGFXOXVWSGRsWlc0Z1BTQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWtaV3hoZVNnZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1sdVptOVBjR1Z1VkdsdFpTQXZJRElnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUkNZWE5sV1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1YVc1bWIwOXdaVzVVYVcxbElDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXliM1JoZEdsdmJsUjNaV1Z1SUQwZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklEQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtbHVabTlQY0dWdVZHbHRaU0F2SURJZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzV2YmtOdmJYQnNaWFJsS0NCa2IyNWxJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnaGJtOURZVzFsY21GVWQyVmxiaWtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2k1NmIyOXRUM1YwVW1WamIzSmtLSFJvYVhNdWNtVmpiM0prV0ZCdmN5d2dkR2hwY3k1aFluTnZiSFYwWlZCdmMybDBhVzl1S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JTWldOdmNtUTdJbDE5IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAoVmFsZW50aW4gTGVkcmFwaWVyKSAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG4gICAgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy1qcycpLFxyXG4gICAgTW9kZXJuaXpyID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ01vZGVybml6ciddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnTW9kZXJuaXpyJ10gOiBudWxsKSxcclxuICAgIGRhdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydkYXQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RhdCddIDogbnVsbCksXHJcblxyXG4gICAgUmVjb3JkID0gcmVxdWlyZSgnLi9SZWNvcmQnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKSxcclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsO1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5mdW5jdGlvbiBhbmltYXRlICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5sb29rQXRUYXJnZXQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxuZnVuY3Rpb24gdW5sb2FkUmVjb3JkcyAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkUmVjb3JkcyAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyhkb25lKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICB9LCAzMDAwICk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlUmVjb3JkcyAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFJlY29yZCAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZsaXBTZWxlY3RlZFJlY29yZCAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuZWQnO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbE9wZW5lZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICk7XHJcblxyXG4gICAgICAgIH0sIDMwMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZmxpcEJhY2tTZWxlY3RlZFJlY29yZCAoZm9yY2UpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmFkZU91dCggQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIgKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwQmFja1JlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uSW5mb1BhbmVsQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIH0sIGZvcmNlICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTaG93blJlY29yZCAoKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgc2hvd25SZWNvcmQgIT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgIHNob3duUmVjb3JkID0gc2VsZWN0ZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciByZWNvcmRJZCA9IDA7IHJlY29yZElkIDwgbG9hZGVkUmVjb3JkczsgcmVjb3JkSWQrKyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA+IHNlbGVjdGVkUmVjb3JkICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA+IHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkIDwgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkgKyBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVsbFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5zaG93UmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc2V0U2hvd25SZWNvcmQgKCBmb3JjZSApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiAhZm9yY2UgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSAtMTtcclxuICAgICAgICBcclxuICAgICAgICBDYW1lcmFNYW5hZ2VyLnJlc2V0Q2FtZXJhKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcmV2UmVjb3JkICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0UHJldkF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG4gICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3ROZXh0UmVjb3JkICgpIHtcclxuXHJcbiAgICBzZWxlY3RSZWNvcmQoZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChzZWxlY3RlZFJlY29yZCkpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFByZXZBdmFpbGFibGVSZWNvcmQgKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkIDwgbG9hZGVkUmVjb3JkcyAtIDEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkICsgMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0UHJldkF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuICAgIFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV4dEF2YWlsYWJsZVJlY29yZCAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPiAwICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXROZXh0QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIG5hdmlnYXRlUmVjb3JkcyAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBkaXJlY3Rpb24gPT09ICdwcmV2JyApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyAmJiBDb25zdGFudHMuY2xvc2VJbmZvUGFuZWxPblNjcm9sbCApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxSZWNvcmRzICggdG91Y2gsIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICB2YXIgc2Nyb2xsU3BlZWQ7XHJcblxyXG4gICAgb2xkRGVsdGEgPSAhb2xkRGVsdGEgfHwgTWF0aC5hYnMoIG9sZERlbHRhICkgPiAwLjUgPyAwLjUgOiBNYXRoLmFicyggb2xkRGVsdGEgKTtcclxuICAgIHNjcm9sbFNwZWVkID0gdG91Y2ggPyBNYXRoLnBvdygxIC0gb2xkRGVsdGEsIDMpICogMjAwIDogTWF0aC5wb3coMSAtIG9sZERlbHRhLCAzKSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRlbHRhID0gKCBiYXNlWSAtIG1vdXNlLnkgKSAvIGNhbnZhc0hlaWdodDtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuXHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdFByZXZSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCB0b3VjaCwgYmFzZVksIGRlbHRhICk7XHJcblxyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcclxuXHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnRFdmVudCwgZmFsc2UgKTtcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwRXZlbnQsIGZhbHNlICk7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoU3RvcEV2ZW50LCBmYWxzZSApO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25SaWdodENsaWNrRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duRXZlbnQsIGZhbHNlICk7IFxyXG5cclxuICAgIGlmICggQ29uc3RhbnRzLnVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZSApIHtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZUV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VNb3ZlRXZlbnQgKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaE1vdmVFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSB7XHJcblxyXG4gICAgICAgIGlmICggZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZICkge1xyXG5cclxuICAgICAgICAgICAgbV9wb3N4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICAgICAgbV9wb3N5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcclxuICAgICAgICB9IGVsc2UgaWYgKCBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggfHwgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICAgICAgbV9wb3N4ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgICAgICBtX3Bvc3kgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqICYmIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblNjcm9sbEV2ZW50ICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkNsaWNrRXZlbnQgKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoIENvbnN0YW50cy5jbG9zZUluZm9QYW5lbE9uQ2xpY2sgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbk1vdXNlRG93bkV2ZW50ICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUuYnV0dG9uICE9PSAxICYmIGUuYnV0dG9uICE9PSAyICkge1xyXG5cclxuICAgICAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgICAgIHNjcm9sbFJlY29yZHMoIGZhbHNlLCBtb3VzZS55ICk7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgICAgeTogbW91c2UueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0RXZlbnQgKCBlICkge1xyXG5cclxuICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgIHk6IG1vdXNlLnlcclxuICAgIH07XHJcblxyXG4gICAgb25Ub3VjaE1vdmVFdmVudCggZSApO1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIHRydWUsIG1vdXNlLnkgKTtcclxuXHJcbiAgICB9IFxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Nb3VzZVVwRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGlmICggZS5idXR0b24gIT09IDEgJiYgZS5idXR0b24gIT09IDIgKSB7XHJcblxyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXIgc2NlbmUgY2xpY2sgZXZlbnQgb25seSBpZiBtb3VzZXVwIGV2ZW50IGlzIG5vdCBhIGRyYWcgZW5kIGV2ZW50ICYgbm90IGEgY2xpY2sgb24gYSBsaW5rXHJcbiAgICAgICAgaWYgKCBjb29yZHNFcXVhbHNBcHByb3goIG1vdXNlRG93blBvcywgbW91c2UsIENvbnN0YW50cy5zY2VuZS5ncmFiU2Vuc2l0aXZpdHkgKSAmJiAhKCBlLnRhcmdldCAmJiBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSApICkge1xyXG5cclxuICAgICAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Ub3VjaFN0b3BFdmVudCAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG5cclxuICAgIC8vIFRyaWdnZXIgc2NlbmUgY2xpY2sgZXZlbnQgb25seSBpZiBtb3VzZXVwIGV2ZW50IGlzIG5vdCBhIGRyYWcgZW5kIGV2ZW50ICYgbm90IGEgY2xpY2sgb24gYSBsaW5rXHJcbiAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgQ29uc3RhbnRzLnNjZW5lLmdyYWJTZW5zaXRpdml0eSApICYmICEoIGUudGFyZ2V0ICYmIGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICkgKSB7XHJcblxyXG4gICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25SaWdodENsaWNrRXZlbnQgKCBlICkge1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbktleURvd25FdmVudCAoIGUgKSB7XHJcblxyXG4gICAgaWYgKCBlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzggKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDQwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyAmJiBlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcclxuXHJcbiAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZS5rZXlDb2RlID09PSAyNyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZUV2ZW50ICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgQ2FtZXJhTWFuYWdlci51cGRhdGVDYW1lcmFBc3BlY3QoIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRpbmcgKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaGlkZUxvYWRpbmcgKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdFNjZW5lICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIENvbnN0YW50cy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmluaXQoY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQpO1xyXG4gICAgY2FtZXJhID0gQ2FtZXJhTWFuYWdlci5nZXRDYW1lcmEoKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggQ29uc3RhbnRzLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIGJpbmRFdmVudHMoKTtcclxuXHJcbiAgICAvLyBET00gc2V0dXBcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5cclxuICAgIHNldENhbnZhc0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBoaWRlRWxlbWVudChDb25zdGFudHMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgIGluaXREZWJ1ZygpO1xyXG4gICAgICAgIGluaXRHVUkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdFBvc3RQcm9jZXNzaW5nICgpIHtcclxuXHJcbiAgICBkZXB0aFNoYWRlciA9IFRIUkVFLlNoYWRlckxpYi5kZXB0aFJHQkE7XHJcbiAgICBkZXB0aFVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggZGVwdGhTaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcbiAgICBkZXB0aE1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGRlcHRoU2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZGVwdGhTaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgIHVuaWZvcm1zOiBkZXB0aFVuaWZvcm1zXHJcbiAgICB9ICk7XHJcbiAgICBkZXB0aE1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTm9CbGVuZGluZztcclxuXHJcbiAgICBkZXB0aFRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwge1xyXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0XHJcbiAgICB9ICk7XHJcblxyXG4gICAgY29tcG9zZXIgPSBuZXcgVEhSRUUuRWZmZWN0Q29tcG9zZXIoIHJlbmRlcmVyICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBuZXcgVEhSRUUuUmVuZGVyUGFzcyggc2NlbmUsIGNhbWVyYSApICk7XHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVwdGggb2YgZmllbGQgc2hhZGVyICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkb2YgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRG9GU2hhZGVyICk7XHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgLy9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuICAgIGRvZi51bmlmb3Jtcy56bmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyOyAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLnpmYXIudmFsdWUgPSBjYW1lcmEuZmFyOyAvL2NhbWVyYSBjbGlwcGluZyBlbmRcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aC52YWx1ZSA9IDU7IC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoOyAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG4gICAgZG9mLnVuaWZvcm1zLmZzdG9wLnZhbHVlID0gOC4wOyAvL2Ytc3RvcCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLnNob3dGb2N1cy52YWx1ZSA9IGZhbHNlOyAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YudmFsdWUgPSB0cnVlOyAvL21hbnVhbCBkb2YgY2FsY3VsYXRpb25cclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQudmFsdWUgPSAxMTsgLy9uZWFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMubmRvZmRpc3QudmFsdWUgPSA4MDsgLy9uZWFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LnZhbHVlID0gMDsgLy9mYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mZGlzdC52YWx1ZSA9IDEwMDsgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuQ29DLnZhbHVlID0gMC4wMzsgLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcudmFsdWUgPSBmYWxzZTsgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmF1dG9mb2N1cy52YWx1ZSA9IHRydWU7IC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUuc2V0KCAwLjM1LCAwLjM1ICk7IC8vIGF1dG9mb2N1cyBwb2ludCBvbiBzY3JlZW4gKDAuMCwwLjAgLSBsZWZ0IGxvd2VyIGNvcm5lciwgMS4wLDEuMCAtIHVwcGVyIHJpZ2h0KSBcclxuICAgIGRvZi51bmlmb3Jtcy5tYXhibHVyLnZhbHVlID0gQ29uc3RhbnRzLmJsdXJBbW91bnQ7IC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy50aHJlc2hvbGQudmFsdWUgPSAwOyAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcbiAgICBkb2YudW5pZm9ybXMuZ2Fpbi52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmJpYXMudmFsdWUgPSAwOyAvL2Jva2VoIGVkZ2UgYmlhcyAgICAgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZnJpbmdlLnZhbHVlID0gMDsgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuICAgIEZYQUEgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRlhBQVNoYWRlciApO1xyXG5cclxuICAgIEZYQUEudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoIDEgLyBjYW52YXNXaWR0aCwgMSAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS5yZW5kZXJUb1NjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggZG9mICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBGWEFBICk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdERlYnVnICgpIHtcclxuXHJcbiAgICBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZCggc3RhdHMuZG9tRWxlbWVudCApO1xyXG5cclxuICAgIHZhciBkZWJ1ZyA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwLCAyMCwgMjAsIDEsIDEsIDEgKSApO1xyXG4gICAgZGVidWcucG9zaXRpb24uc2V0KFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLngsXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgc2NlbmUuYWRkKCBkZWJ1ZyApO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRHVUkgKCkge1xyXG5cclxuICAgIHZhciBjYW1lcmFGb2xkZXIsXHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgsXHJcbiAgICAgICAgZG9mRm9sZGVyLFxyXG4gICAgICAgIF9sYXN0O1xyXG5cclxuICAgIGd1aSA9IG5ldyBkYXQuR1VJKCk7XHJcbiAgICBcclxuICAgIGNhbWVyYUZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdDYW1lcmEnICk7XHJcbiAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICBjYW1lcmFGb2NhbExlbmd0aC5vbkNoYW5nZSggdXBkYXRlQ2FtZXJhICk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDYW1lcmEgKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdENyYXRlcyAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgQ29uc3RhbnRzLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIENvbnN0YW50cy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNyYXRlICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdFJlY29yZHMgKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVjb3JkICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZWNvcmRNYXRlcmlhbCAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IENvbnN0YW50cy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG5mdW5jdGlvbiB3aGVlbERpc3RhbmNlICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbmZ1bmN0aW9uIHdoZWVsRGlyZWN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY29vcmRzRXF1YWxzQXBwcm94ICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBmYWRlT3V0ICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZhZGVJbiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH0sIDE1KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkZhZGVDb21wbGV0ZSggZSAsIGUyICkge1xyXG5cclxuICAgIGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgIGlmICggZS5jdXJyZW50VGFyZ2V0LnN0eWxlLm9wYWNpdHkgPT09ICcwJyApIHtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVFbGVtZW50KCBlbGVtZW50ICkge1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RWxlbWVudCggZWxlbWVudCApIHtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25FdmVudCAoKSB7XHJcblxyXG4gICAgdmFyIHQsXHJcbiAgICAgICAgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdPVHJhbnNpdGlvbic6J29UcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICAgICAgJ01velRyYW5zaXRpb24nOid0cmFuc2l0aW9uZW5kJyxcclxuICAgICAgICAgICAgJ1dlYmtpdFRyYW5zaXRpb24nOid3ZWJraXRUcmFuc2l0aW9uRW5kJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgZm9yKHQgaW4gdHJhbnNpdGlvbnMpIHtcclxuXHJcbiAgICAgICAgaWYoIGRvY3VtZW50LmJvZHkuc3R5bGVbdF0gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVDYW52YXNTaXplICgpIHtcclxuXHJcbiAgICBjYW52YXNXaWR0aCA9IENvbnN0YW50cy5jYW52YXNXaWR0aCA/IENvbnN0YW50cy5jYW52YXNXaWR0aCA6IENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gQ29uc3RhbnRzLmNhbnZhc0hlaWdodCA/IENvbnN0YW50cy5jYW52YXNIZWlnaHQgOiBDb25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5jbGllbnRIZWlnaHQ7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0Q2FudmFzRGltZW5zaW9ucyAoKSB7XHJcblxyXG4gICAgLy9Db25zdGFudHMuZWxlbWVudHMucm9vdENvbnRhaW5lci5zdHlsZS5oZWlnaHQgICAgID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5jYW52YXNDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBDb25zdGFudHMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIC8vQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIuc3R5bGUud2lkdGggICAgID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIENvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyLnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgQ29uc3RhbnRzLmVsZW1lbnRzLmxvYWRpbmdDb250YWluZXIuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSggdiApIHsgLy8gSm9uYXMgUmFvbmkgU29hcmVzIFNpbHZhIC0gaHR0cDovL2pzZnJvbWhlbGwuY29tL2FycmF5L3NodWZmbGUgW3Jldi4gIzFdXHJcblxyXG4gICAgZm9yICggdmFyIGosIHgsIGkgPSB2Lmxlbmd0aDsgaTsgaiA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpICogaSApLCB4ID0gdlsgLS1pIF0sIHZbIGkgXSA9IHZbIGogXSwgdlsgaiBdID0geCApO1xyXG4gICAgcmV0dXJuIHY7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XHJcblxyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVYUE9SVFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIE1ldGhvZHMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKCBwYXJhbXMgKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLmV4dGVuZChwYXJhbXMpO1xyXG5cclxuICAgIC8vIGZlYXR1cmUgdGVzdFxyXG4gICAgaWYgKCAhTW9kZXJuaXpyLndlYmdsICkgcmV0dXJuO1xyXG5cclxuICAgIGlmICggd2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHVuZGVmaW5lZCApIHtcclxuXHJcbiAgICAgICAgZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZHByID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLnJvb3RDb250YWluZXIgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCAhQ29uc3RhbnRzLmVsZW1lbnRzLmNhbnZhc0NvbnRhaW5lciApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY2FudmFzIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggIUNvbnN0YW50cy5lbGVtZW50cy5pbmZvQ29udGFpbmVyICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBpbmZvIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuXHJcbiAgICBpbml0U2NlbmUoKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGlkIDwgMCApIHtcclxuXHJcbiAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGlkID4gbG9hZGVkUmVjb3JkcyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuc3RhcnRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSB0cnVlO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuc3RvcFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZW5hYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ29uc3RhbnRzLnBvc3Rwcm9jZXNzaW5nID0gdHJ1ZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmRpc2FibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLmZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgPSBmbGlwQmFja1NlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqY21GMFpXUnBaMmRsY2k5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYMTlmWDE4Z0lDQWdJQ0FnSUNBZ0lDQWdJRjlmWDE5ZklDQWdJQ0FnSUNBZ0lDQWdJQ0JmWDE5Zlh5QWdJQ0FnSUNBZ0lDQWdJQ0JmWDE5ZlgxOWZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTDF4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUNBZ0wxeGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0lDQWdMMXhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQ0F2T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x6bzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQWdMem82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0FnTHpvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNBdk9qbzZPbHhjSUNBZ0lGeGNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzg2T2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQzg2T2pvNk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDODZPam82T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBdk9qbzZPam82WEZ3Z0lDQWdYRndnSUNBZ0lDODZPam82T2pvNk9seGNJQ0FnSUZ4Y1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUM4Nk9qb3ZYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDODZPam92Zm41Y1hEbzZPbHhjSUNBZ0lGeGNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDODZPam92WDE5Y1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0x6bzZPaTlmWDF4Y09qbzZYRndnSUNBZ1hGd2dMem82T2k4Z0lDQWdYRnc2T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQzg2T2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBdk9qbzZPbHhjSUNBZ0lGeGNJRnhjT2pvNlhGd2dJQ0JjWERvNk9seGNJQ0FnSUZ4Y09qbzZMeUFnSUNBdklGeGNPam82WEZ3Z0lDQWdYRnhjY2x4dUlDQWdJQ0FnSUNBZ0lDODZPam82T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ4Zlh5QWdJQ0F2T2pvNk9qbzZYRndnSUNBZ1hGeGZYRnc2T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3NkwxOWZYMTh2SUNBZ1hGdzZPanBjWEY5ZlgxOWNYRnh5WEc0Z0lDQWdJQ0FnSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0JjWERvNk9seGNYMTlmWDF4Y0lGeGNJQ0F2T2pvNkwxeGNPam82WEZ3Z0lDQWdYRndnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnZkNBZ0lDQWdmRG82T253Z0lDQWdmRnh5WEc0Z0lDQWdJQ0FnSUM4Nk9qb3ZJQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcDhJQ0FnSUh3Z1hGd3ZPam82THlBZ1hGdzZPanBjWEY5ZlgxOWNYQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hGOWZYM3dnSUNBZ0lIdzZPanA4WDE5ZlgzeGNjbHh1SUNBZ0lDQWdJQ0JjWERvNkx5QWdJSHc2T2pvNlhGd2dJQzg2T2pwOFgxOWZYM3dnTHpvNk9pOGdJQ0FnWEZ3Nk9pOGdJQ0FnTHlBZ1hGdzZPanBjWENBZ0lGeGNPam92SUNBZ0lDOGdJQ0JmWEZ4ZlgxOHZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUZ4Y0wxOWZYMTk4T2pvNk9qcGNYQzg2T2pvdklDQWdJQzljWEM4Nk9qb3ZJQ0FnSUM4Z1hGd3ZYMTlmWHk5Y1hDQWdJRnhjT2pvNlhGd2dJQ0JjWEM5ZlgxOWZMenBjWENCOE9qcDhJQzg2T2pvdklDQWdJQzljY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnZkRvNk9qbzZPam82T2k4Z0lDQWdMem82T2pvNkx5QWdJQ0F2SUNBZ0lDQWdYRnc2T2pwY1hDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lGeGNPam82WEZ4OE9qcDhMem82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pwOFhGdzZPam82THlBZ0lDQXZYRnc2T2pvNkwxOWZYMTh2SUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0FnWEZ3Nk9qcGNYRjlmWDE5Y1hDQWdYRnc2T2pvNk9qbzZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHc2T253Z1hGdzZPaTlmWDE5Zkx5QWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUM4Nk9qb3ZJQ0FnSUM4Z0lDQmNYRG82T2pvNk9qbzZMeUFnSUNBdlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lIdzZPbndnSUg1OElDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd3ZPam82THlBZ0lDQXZJQ0FnSUNCY1hEbzZPam82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pwOElDQWdmQ0FnSUNBZ0lDQWdJQ0JjWERvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ1hGdzZPam82T2pvdklDQWdJQzhnSUNBZ0lDQWdYRnc2T2pvNkwxOWZYMTh2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4Y09qcDhJQ0FnZkNBZ0lDQWdJQ0FnSUNBZ1hGdzZPanBjWEY5ZlgxOWNYQ0FnSUNBZ0lDQWdJRnhjT2pvNk9pOGdJQ0FnTHlBZ0lDQWdJQ0FnSUh3Nk9ud2dJQ0FnZkZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGdzZmQ0FnSUh3Z0lDQWdJQ0FnSUNBZ0lDQmNYRG82THlBZ0lDQXZJQ0FnSUNBZ0lDQWdJRnhjT2pvdklDQWdJQzhnSUNBZ0lDQWdJQ0FnZkRvNmZGOWZYMTk4WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hGeDhYMTlmZkNBZ0lDQWdJQ0FnSUNBZ0lDQmNYQzlmWDE5Zkx5QWdJQ0FnSUNBZ0lDQWdJRnhjTDE5ZlgxOHZJQ0FnSUNBZ0lDQWdJQ0FnZm41Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDE4Z0lDQWdJQ0FnSUNBZ0lDQWdMbDlmWHk1Zlh5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gxOWNjbHh1SUNBZ0lDQWdJRjlmWDE5ZlgxOWZYMTlmWDE5ZlgxOGdYeThnSUh4ZklDQmZYMTlmSUNBZ1gxOThJRjh2ZkY5ZmZDQmZYMTlmSUNBZ1gxOWZYeUFnSUY5ZlgxOWZYMTlmWDE5ZklDQWdJQ0FnSUh4Zlgzd2dYMTlmWDE5ZlhISmNiaUFnSUNBZ1h5OGdYMTlmWEZ4ZklDQmZYeUJjWEY5ZklDQmNYRnhjSUNBZ1gxOWNYQzhnWDE4Z1hGd2dMeUJmWHlCOElId2dJSHd2SUY5ZlgxeGNJQzhnWDE5ZlhGeGZMeUJmWHlCY1hGOGdJRjlmSUZ4Y0lDQWdJQ0FnZkNBZ2ZDOGdJRjlmWHk5Y2NseHVJQ0FnSUNCY1hDQWdYRnhmWDE5OElDQjhJRnhjTHk4Z1gxOGdYRng4SUNCOElGeGNJQ0JmWDE4dkx5QXZYeThnZkNCOElDQXZJQzlmTHlBZ1BpQXZYeThnSUQ0Z0lGOWZYeTk4SUNCOElGeGNMeUFnSUNBZ0lId2dJSHhjWEY5Zlh5QmNYRnh5WEc0Z0lDQWdJQ0JjWEY5Zlh5QWdQbDlmZkNBZ0tGOWZYMThnSUM5Zlgzd2dJRnhjWDE5ZklDQStYMTlmWHlCOElIeGZYMXhjWDE5ZklDQXZYRnhmWDE4Z0lDOGdYRnhmWDE4Z0lENWZYM3dnSUM5Y1hDQXZYRnhmWDN3Z0lDOWZYMTlmSUNBK1hISmNiaUFnSUNBZ0lDQWdJQ0JjWEM4Z0lDQWdJQ0FnSUNBZ0lGeGNMeUFnSUNBZ0lDQWdJQ0JjWEM4Z0lDQWdJRnhjTHlBZ0lDOWZYMTlmWHk4dlgxOWZYMTh2SUNBZ0lDQWdYRnd2SUNBZ0lDQWdYRnd2SUZ4Y1gxOWZYMTlmZkNBZ0lDQmNYQzljY2x4dVhISmNibHh5WEc0cUwxeHlYRzVjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdZM0poZEdWa2FXZG5aWEl1YW5NZ2RqQXVNQzR4SUMwZ1lua2djbWx6Y1NBb1ZtRnNaVzUwYVc0Z1RHVmtjbUZ3YVdWeUtTQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYmlkMWMyVWdjM1J5YVdOMEp6dGNjbHh1WEhKY2JuWmhjaUJVU0ZKRlJTQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlEOGdkMmx1Wkc5M1d5ZFVTRkpGUlNkZElEb2dkSGx3Wlc5bUlHZHNiMkpoYkNBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lHZHNiMkpoYkZzblZFaFNSVVVuWFNBNklHNTFiR3dwTEZ4eVhHNGdJQ0FnVkZkRlJVNGdQU0J5WlhGMWFYSmxLQ2QwZDJWbGJpNXFjeWNwTEZ4eVhHNGdJQ0FnVTNSaGRITWdQU0J5WlhGMWFYSmxLQ2R6ZEdGMGN5MXFjeWNwTEZ4eVhHNGdJQ0FnVFc5a1pYSnVhWHB5SUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCM2FXNWtiM2RiSjAxdlpHVnlibWw2Y2lkZElEb2dkSGx3Wlc5bUlHZHNiMkpoYkNBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBL0lHZHNiMkpoYkZzblRXOWtaWEp1YVhweUoxMGdPaUJ1ZFd4c0tTeGNjbHh1SUNBZ0lHUmhkQ0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWRrWVhRblhTQTZJSFI1Y0dWdlppQm5iRzlpWVd3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5Qm5iRzlpWVd4YkoyUmhkQ2RkSURvZ2JuVnNiQ2tzWEhKY2JseHlYRzRnSUNBZ1VtVmpiM0prSUQwZ2NtVnhkV2x5WlNnbkxpOVNaV052Y21RbktTeGNjbHh1SUNBZ0lFTmhiV1Z5WVUxaGJtRm5aWElnUFNCeVpYRjFhWEpsS0NjdUwwTmhiV1Z5WVUxaGJtRm5aWEluS1N4Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3lBOUlISmxjWFZwY21Vb0p5NHZRMjl1YzNSaGJuUnpKeWs3WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwZ0lFbHVhbVZqZENCaGJHd2daWGgwWlhKdVlXd2diVzlrZFd4bGN5QjBieUJVU0ZKRlJTNXFjeUE5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDFOb1lXUmxjbEJoYzNNbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMME52Y0hsVGFHRmtaWEluS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwxSmxibVJsY2xCaGMzTW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBSdlJsTm9ZV1JsY2ljcEtGUklVa1ZGS1R0Y2NseHVjbVZ4ZFdseVpTZ25MaTkwYUhKbFpXcHpYMjF2WkhWc1pYTXZSbGhCUVZOb1lXUmxjaWNwS0ZSSVVrVkZLVHRjY2x4dWNtVnhkV2x5WlNnbkxpOTBhSEpsWldwelgyMXZaSFZzWlhNdlRXRnphMUJoYzNNbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMFZtWm1WamRFTnZiWEJ2YzJWeUp5a29WRWhTUlVVcE8xeHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUZaQlVrbEJRa3hGVXlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiblpoY2lCbGVIQnZjblJ6SUQwZ2UzMHNJQzh2SUU5aWFtVmpkQ0JtYjNJZ2NIVmliR2xqSUVGUVNYTmNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JVYUhKbFpTNXFjeUJ2WW1wbFkzUnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQnpkR0YwY3l4Y2NseHVJQ0FnSUhOalpXNWxMRnh5WEc0Z0lDQWdZMkZ0WlhKaExGeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJc1hISmNiaUFnSUNCc2FXZG9kQ3hjY2x4dUlDQWdJR3hsWm5STWFXZG9kQ3hjY2x4dUlDQWdJSEpwWjJoMFRHbG5hSFFzWEhKY2JpQWdJQ0JqYjIxd2IzTmxjaXhjY2x4dUlDQWdJRVpZUVVFc1hISmNiaUFnSUNCa2IyWXNYSEpjYmlBZ0lDQm5kV2tzWEhKY2JpQWdJQ0JrWlhCMGFGUmhjbWRsZEN4Y2NseHVJQ0FnSUdSbGNIUm9VMmhoWkdWeUxGeHlYRzRnSUNBZ1pHVndkR2hWYm1sbWIzSnRjeXhjY2x4dUlDQWdJR1JsY0hSb1RXRjBaWEpwWVd3c1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdUMkpxWldOMGN5QW1JR1JoZEdFZ1lYSnlZWGx6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0JqY21GMFpYTWdQU0JiWFN4Y2NseHVJQ0FnSUhKbFkyOXlaSE1nUFNCYlhTeGNjbHh1SUNBZ0lISmxZMjl5WkhORVlYUmhUR2x6ZENBOUlGdGRMRnh5WEc1Y2NseHVYSEpjYmlBZ0lDQXZLajA5UFQwOVBUMDlQVDBnSUZSb2NtVmxMbXB6SUc5aWFtVmpkSE1nWTI5dWRHRnBibVZ5Y3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnY205dmRFTnZiblJoYVc1bGNpeGNjbHh1SUNBZ0lHTnlZWFJsYzBOdmJuUmhhVzVsY2l4Y2NseHVJQ0FnSUhKbFkyOXlaSE5EYjI1MFlXbHVaWElzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1UzUmhkR1Z6TENCMWRHbHNJSFpoY25NZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVJQ0FnSUdOaGJuWmhjMWRwWkhSb0xGeHlYRzRnSUNBZ1kyRnVkbUZ6U0dWcFoyaDBMRnh5WEc0Z0lDQWdaSEJ5TEZ4eVhHNGdJQ0FnYzJOeWIyeHNVbVZqYjNKa2MxUnBiV1Z2ZFhRc1hISmNiaUFnSUNCcGMweHZZV1JwYm1jZ1BTQm1ZV3h6WlN4Y2NseHVJQ0FnSUdsdVptOVFZVzVsYkZOMFlYUmxJRDBnWENKamJHOXpaV1JjSWl4Y2NseHVJQ0FnSUdselUyTnliMnhzYVc1bklEMGdabUZzYzJVc1hISmNiaUFnSUNCa2IxSmxibVJsY2lBOUlIUnlkV1VzWEhKY2JpQWdJQ0J0YjNWelpTQTlJSHRjY2x4dUlDQWdJQ0FnSUNCNE9pQXdMRnh5WEc0Z0lDQWdJQ0FnSUhrNklEQmNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQnRiM1Z6WlVSdmQyNVFiM01nUFNCN1hISmNiaUFnSUNBZ0lDQWdlRG9nTUN4Y2NseHVJQ0FnSUNBZ0lDQjVPaUF3WEhKY2JpQWdJQ0I5TEZ4eVhHNGdJQ0FnZEdGeVoyVjBRMkZ0WlhKaFVHOXpJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lIZzZJREFzWEhKY2JpQWdJQ0FnSUNBZ2VUb2dNRnh5WEc0Z0lDQWdmU3hjY2x4dUlDQWdJSE5sYkdWamRHVmtVbVZqYjNKa0lEMGdMVEVzWEhKY2JpQWdJQ0J6YUc5M2JsSmxZMjl5WkNBOUlDMHhMRnh5WEc0Z0lDQWdiRzloWkdWa1VtVmpiM0prY3lBOUlEQXNYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnVFdGMFpYSnBZV3h6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0IzYjI5a1gyMWhkR1Z5YVdGc08xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0JDUVZORklFMUZWRWhQUkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1bWRXNWpkR2x2YmlCaGJtbHRZWFJsSUNncElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHUnZVbVZ1WkdWeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvSUdGdWFXMWhkR1VnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaVzVrWlhJb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JEYjI1emRHRnVkSE11WkdWaWRXY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHRjBjeTUxY0dSaGRHVW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NtVnVaR1Z5SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JVVjBWRlRpNTFjR1JoZEdVb0tUdGNjbHh1SUNBZ0lIVndaR0YwWlZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTFjMlZOYjNabElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjBZWEpuWlhSRFlXMWxjbUZRYjNNdWVDQTlJQ2dnYlc5MWMyVXVlQ0F2SUdOaGJuWmhjMWRwWkhSb0lDMGdNQzQxSUNrZ0tpQXdMakkxT3lBdkx5QnBiblpsY25ObElHRjRhWE0vWEhKY2JpQWdJQ0FnSUNBZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5rZ1BTQW9JRzF2ZFhObExua2dMeUJqWVc1MllYTlhhV1IwYUNBdElEQXVOU0FwSUNvZ01DNHlOVHRjY2x4dUlDQWdJQ0FnSUNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbmtnS3owZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG1OaGJXVnlZVTF2ZFhObFRXOTJaVk53WldWa1dTQXFJQ2dnZEdGeVoyVjBRMkZ0WlhKaFVHOXpMbmdnTFNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbmtnS1R0Y2NseHVJQ0FnSUNBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5vZ0t6MGdRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVUxdmRYTmxUVzkyWlZOd1pXVmtXaUFxSUNnZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5rZ0xTQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5vZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ1EyRnRaWEpoVFdGdVlXZGxjaTVzYjI5clFYUlVZWEpuWlhRb0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lFTnZibk4wWVc1MGN5NXdiM04wY0hKdlkyVnpjMmx1WnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyTmxibVV1YjNabGNuSnBaR1ZOWVhSbGNtbGhiQ0E5SUdSbGNIUm9UV0YwWlhKcFlXdzdYSEpjYmlBZ0lDQWdJQ0FnY21WdVpHVnlaWEl1Y21WdVpHVnlLQ0J6WTJWdVpTd2dZMkZ0WlhKaExDQmtaWEIwYUZSaGNtZGxkQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lITmpaVzVsTG05MlpYSnlhV1JsVFdGMFpYSnBZV3dnUFNCdWRXeHNPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJYQnZjMlZ5TG5KbGJtUmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbGJtUmxjbVZ5TG5KbGJtUmxjaWdnYzJObGJtVXNJR05oYldWeVlTQXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiaThxWEhKY2JpQXFJRXh2WVdScGJtY2diV1YwYUc5a2MxeHlYRzRnS2k5Y2NseHVablZ1WTNScGIyNGdkVzVzYjJGa1VtVmpiM0prY3lBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NtVmpiM0prY3k1c1pXNW5kR2c3SUdrckt5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZqYjNKa2Mxc2dhU0JkTG1SaGRHRWdQU0J1ZFd4c08xeHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1elpYUlZibUZqZEdsMlpTZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnNiMkZrWldSU1pXTnZjbVJ6SUQwZ01EdGNjbHh1SUNBZ0lISmxZMjl5WkhORVlYUmhUR2x6ZENBOUlGdGRPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1bWRXNWpkR2x2YmlCc2IyRmtVbVZqYjNKa2N5QW9JSEpsWTI5eVpITkVZWFJoTENCemFIVm1abXhsUW1WbWIzSmxURzloWkdsdVp5d2daRzl1WlNBcElIdGNjbHh1WEhKY2JpQWdJQ0J5WlhObGRGTm9iM2R1VW1WamIzSmtLQ0IwY25WbElDazdYSEpjYmx4eVhHNGdJQ0FnYzJodmQweHZZV1JwYm1jb0lHWjFibU4wYVc5dUtDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUd4dllXUmxaRkpsWTI5eVpITWdQaUF3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkVzVzYjJGa1VtVmpiM0prY3lncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2djMmgxWm1ac1pVSmxabTl5WlV4dllXUnBibWNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21SelJHRjBZU0E5SUhOb2RXWm1iR1VvSUhKbFkyOXlaSE5FWVhSaElDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2dnZG1GeUlHa2dQU0F3T3lCcElEd2djbVZqYjNKa2N5NXNaVzVuZEdnZ0ppWWdhU0E4SUhKbFkyOXlaSE5FWVhSaExteGxibWQwYURzZ2FTc3JJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2Mxc2dhU0JkTG1SaGRHRWdQU0J5WldOdmNtUnpSR0YwWVZzZ2FTQmRPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21Seld5QnBJRjB1YzJWMFFXTjBhWFpsS0NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUdrZ1hTNXRaWE5vTG0xaGRHVnlhV0ZzTG0xaGRHVnlhV0ZzY3lBOUlHZGxkRkpsWTI5eVpFMWhkR1Z5YVdGc0tDQnlaV052Y21SelJHRjBZVnNnYVNCZExtTnZkbVZ5TENCeVpXTnZjbVJ6UkdGMFlWc2dhU0JkTG1oaGMxTnNaV1YyWlNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklIZG9lU0EvUDF4eVhHNGdJQ0FnSUNBZ0lDOHZJR3h2WVdSbFpGSmxZMjl5WkhNZ1BTQnlaV052Y21SelJHRjBZUzVzWlc1bmRHZ2dQQ0J5WldOdmNtUnpMbXhsYm1kMGFDQS9JSEpsWTI5eVpITkVZWFJoTG14bGJtZDBhQ0E2SUhKbFkyOXlaSE11YkdWdVozUm9PMXh5WEc0Z0lDQWdJQ0FnSUd4dllXUmxaRkpsWTI5eVpITWdQU0J5WldOdmNtUnpMbXhsYm1kMGFEdGNjbHh1SUNBZ0lDQWdJQ0J5WldOdmNtUnpSR0YwWVV4cGMzUWdQU0J5WldOdmNtUnpSR0YwWVR0Y2NseHVJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JvYVdSbFRHOWhaR2x1Wnloa2IyNWxLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdRMjl1YzNSaGJuUnpMbTl1VEc5aFpHbHVaMFZ1WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUxDQXpNREF3SUNrN1hISmNiaUFnSUNCOUtUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnphSFZtWm14bFVtVmpiM0prY3lBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlITm9kV1ptYkdWa1VtVmpiM0prY3lBOUlISmxZMjl5WkhORVlYUmhUR2x6ZER0Y2NseHVJQ0FnSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUE5SUhOb2RXWm1iR1VvSUhOb2RXWm1iR1ZrVW1WamIzSmtjeUFwTzF4eVhHNGdJQ0FnYkc5aFpGSmxZMjl5WkhNb0lITm9kV1ptYkdWa1VtVmpiM0prY3lBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lGSkZRMDlTUkZNZ1UwVk1SVU5VU1U5T0lFMUZWRWhQUkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUhObGJHVmpkRkpsWTI5eVpDQW9JR2xrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdJVDA5SUNkdmNHVnVhVzVuSnlBbUppQnBibVp2VUdGdVpXeFRkR0YwWlNBaFBUMGdKMk5zYjNOcGJtY25JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlJR2xrTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdac2FYQlRaV3hsWTNSbFpGSmxZMjl5WkNBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnlaV052Y21Seld5QnpaV3hsWTNSbFpGSmxZMjl5WkNCZElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBibVp2VUdGdVpXeFRkR0YwWlNBOUlDZHZjR1Z1YVc1bkp6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2MyVnNaV04wWldSU1pXTnZjbVFnWFM1bWJHbHdVbVZqYjNKa0tDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5SUNkdmNHVnVaV1FuTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUVOdmJuTjBZVzUwY3k1dmJrbHVabTlRWVc1bGJFOXdaVzVsWkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCelpYUlVhVzFsYjNWMEtDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbVlXUmxTVzRvSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1cGJtWnZRMjl1ZEdGcGJtVnlJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBzSURNd01DQXBPMXh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1pteHBjRUpoWTJ0VFpXeGxZM1JsWkZKbFkyOXlaQ0FvWm05eVkyVXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm1Ga1pVOTFkQ2dnUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG1sdVptOURiMjUwWVdsdVpYSWdLVHRjY2x4dUlDQWdJQ0FnSUNCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5SUNkamJHOXphVzVuSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnY21WamIzSmtjMXNnYzJWc1pXTjBaV1JTWldOdmNtUWdYUzVtYkdsd1FtRmphMUpsWTI5eVpDZ2dablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNBblkyeHZjMlZrSnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnUTI5dWMzUmhiblJ6TG05dVNXNW1iMUJoYm1Wc1EyeHZjMlZrS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwc0lHWnZjbU5sSUNrN1hISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUIxY0dSaGRHVlRhRzkzYmxKbFkyOXlaQ0FvS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyTnNiM05sWkNjZ0ppWWdjMmh2ZDI1U1pXTnZjbVFnSVQwZ2MyVnNaV04wWldSU1pXTnZjbVFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhOb2IzZHVVbVZqYjNKa0lEMGdjMlZzWldOMFpXUlNaV052Y21RN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9JSFpoY2lCeVpXTnZjbVJKWkNBOUlEQTdJSEpsWTI5eVpFbGtJRHdnYkc5aFpHVmtVbVZqYjNKa2N6c2djbVZqYjNKa1NXUXJLeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnYzJWc1pXTjBaV1JTWldOdmNtUWdQVDBnTFRFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2NtVmpiM0prU1dRZ1hTNXdkWE5vVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDQnlaV052Y21SSlpDQStJSE5sYkdWamRHVmtVbVZqYjNKa0lDWW1YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUkpaQ0ErSUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjB1WTNKaGRHVkpaQ0FxSUVOdmJuTjBZVzUwY3k1eVpXTnZjbVJ6VUdWeVEzSmhkR1VnSmlaY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkVsa0lEd2dLQ0J5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRMbU55WVhSbFNXUWdLaUJEYjI1emRHRnVkSE11Y21WamIzSmtjMUJsY2tOeVlYUmxJQ2tnS3lCRGIyNXpkR0Z1ZEhNdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhKbFkyOXlaRWxrSUYwdWNIVnNiRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnZ2NtVmpiM0prU1dRZ1BUMGdjMlZzWldOMFpXUlNaV052Y21RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2NtVmpiM0prU1dRZ1hTNXphRzkzVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSEpsWTI5eVpFbGtJRjB1Y0hWemFGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJSEpsYzJWMFUyaHZkMjVTWldOdmNtUWdLQ0JtYjNKalpTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFtSmlBaFptOXlZMlVnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBaFBUMGdKMjl3Wlc1cGJtY25JQ1ltSUdsdVptOVFZVzVsYkZOMFlYUmxJQ0U5UFNBblkyeHZjMmx1WnljZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkdmNHVnVaV1FuSUNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLSFJ5ZFdVcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMlZzWldOMFpXUlNaV052Y21RZ1BTQXRNVHRjY2x4dUlDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQkRZVzFsY21GTllXNWhaMlZ5TG5KbGMyVjBRMkZ0WlhKaEtDazdYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCelpXeGxZM1JRY21WMlVtVmpiM0prSUNncElIdGNjbHh1WEhKY2JpQWdJQ0J6Wld4bFkzUlNaV052Y21Rb1oyVjBVSEpsZGtGMllXbHNZV0pzWlZKbFkyOXlaQ2h6Wld4bFkzUmxaRkpsWTI5eVpDa3BPMXh5WEc0Z0lDQWdYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCelpXeGxZM1JPWlhoMFVtVmpiM0prSUNncElIdGNjbHh1WEhKY2JpQWdJQ0J6Wld4bFkzUlNaV052Y21Rb1oyVjBUbVY0ZEVGMllXbHNZV0pzWlZKbFkyOXlaQ2h6Wld4bFkzUmxaRkpsWTI5eVpDa3BPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RsZEZCeVpYWkJkbUZwYkdGaWJHVlNaV052Y21RZ0tHWnliMjFTWldOdmNtUXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1p5YjIxU1pXTnZjbVFnUFQwZ0xURWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p5YjIxU1pXTnZjbVFnUFNCc2IyRmtaV1JTWldOdmNtUnpJQzBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JtY205dFVtVmpiM0prSUR3Z2JHOWhaR1ZrVW1WamIzSmtjeUF0SURFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JtY205dFVtVmpiM0prSUNzZ01UdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnTUR0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsWTI5eVpITmJJR1p5YjIxU1pXTnZjbVFnWFM1aFkzUnBkbVVnUHlCbWNtOXRVbVZqYjNKa0lEb2daMlYwVUhKbGRrRjJZV2xzWVdKc1pWSmxZMjl5WkNobWNtOXRVbVZqYjNKa0tUdGNjbHh1SUNBZ0lGeHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWjJWMFRtVjRkRUYyWVdsc1lXSnNaVkpsWTI5eVpDQW9abkp2YlZKbFkyOXlaQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnWm5KdmJWSmxZMjl5WkNBOVBTQXRNU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm5KdmJWSmxZMjl5WkNBOUlHeHZZV1JsWkZKbFkyOXlaSE1nTFNBeE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdaeWIyMVNaV052Y21RZ1BpQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtY205dFVtVmpiM0prSUQwZ1puSnZiVkpsWTI5eVpDQXRJREU3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm5KdmJWSmxZMjl5WkNBOUlHeHZZV1JsWkZKbFkyOXlaSE1nTFNBeE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnY21WamIzSmtjMXNnWm5KdmJWSmxZMjl5WkNCZExtRmpkR2wyWlNBL0lHWnliMjFTWldOdmNtUWdPaUJuWlhST1pYaDBRWFpoYVd4aFlteGxVbVZqYjNKa0tHWnliMjFTWldOdmNtUXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJRzVoZG1sbllYUmxVbVZqYjNKa2N5QW9JR1JwY21WamRHbHZiaUFwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBblkyeHZjMlZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0JrYVhKbFkzUnBiMjRnUFQwOUlDZHdjbVYySnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRGQnlaWFpTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRFNWxlSFJTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5iM0JsYm1Wa0p5QW1KaUJEYjI1emRHRnVkSE11WTJ4dmMyVkpibVp2VUdGdVpXeFBibE5qY205c2JDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabXhwY0VKaFkydFRaV3hsWTNSbFpGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ6WTNKdmJHeFNaV052Y21SeklDZ2dkRzkxWTJnc0lHSmhjMlZaTENCdmJHUkVaV3gwWVNBcElIdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2MyTnliMnhzVTNCbFpXUTdYSEpjYmx4eVhHNGdJQ0FnYjJ4a1JHVnNkR0VnUFNBaGIyeGtSR1ZzZEdFZ2ZId2dUV0YwYUM1aFluTW9JRzlzWkVSbGJIUmhJQ2tnUGlBd0xqVWdQeUF3TGpVZ09pQk5ZWFJvTG1GaWN5Z2diMnhrUkdWc2RHRWdLVHRjY2x4dUlDQWdJSE5qY205c2JGTndaV1ZrSUQwZ2RHOTFZMmdnUHlCTllYUm9MbkJ2ZHlneElDMGdiMnhrUkdWc2RHRXNJRE1wSUNvZ01qQXdJRG9nVFdGMGFDNXdiM2NvTVNBdElHOXNaRVJsYkhSaExDQXpLU0FxSURNd01EdGNjbHh1WEhKY2JpQWdJQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHUmxiSFJoSUQwZ0tDQmlZWE5sV1NBdElHMXZkWE5sTG5rZ0tTQXZJR05oYm5aaGMwaGxhV2RvZER0Y2NseHVJQ0FnSUNBZ0lDQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0oyZHlZV0luS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQmtaV3gwWVNBK0lEQWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCelpXeGxZM1JPWlhoMFVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHUmxiSFJoSUR3Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkRkJ5WlhaU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J6WTNKdmJHeFNaV052Y21SektDQjBiM1ZqYUN3Z1ltRnpaVmtzSUdSbGJIUmhJQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTd2djMk55YjJ4c1UzQmxaV1FnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdSVlpGVGxSVElFaEJUa1JNU1U1SElDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVablZ1WTNScGIyNGdZbWx1WkVWMlpXNTBjeWdwSUh0Y2NseHVYSEpjYmlBZ0lDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVjbTl2ZEVOdmJuUmhhVzVsY2k1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBblJFOU5UVzkxYzJWVFkzSnZiR3duTENCdmJsTmpjbTlzYkVWMlpXNTBMQ0JtWVd4elpTQXBPMXh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbkp2YjNSRGIyNTBZV2x1WlhJdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnZ0oyMXZkWE5sZDJobFpXd25MQ0J2YmxOamNtOXNiRVYyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxuSnZiM1JEYjI1MFlXbHVaWEl1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnSjIxdmRYTmxiVzkyWlNjc0lHOXVUVzkxYzJWTmIzWmxSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWNtOXZkRU52Ym5SaGFXNWxjaTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuZEc5MVkyaHRiM1psSnl3Z2IyNVViM1ZqYUUxdmRtVkZkbVZ1ZEN3Z1ptRnNjMlVnS1R0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1eWIyOTBRMjl1ZEdGcGJtVnlMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R0YjNWelpXUnZkMjRuTENCdmJrMXZkWE5sUkc5M2JrVjJaVzUwTENCbVlXeHpaU0FwTzF4eVhHNGdJQ0FnUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKM1J2ZFdOb2MzUmhjblFuTENCdmJsUnZkV05vVTNSaGNuUkZkbVZ1ZEN3Z1ptRnNjMlVnS1R0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1eWIyOTBRMjl1ZEdGcGJtVnlMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2R0YjNWelpYVndKeXdnYjI1TmIzVnpaVlZ3UlhabGJuUXNJR1poYkhObElDazdYSEpjYmlBZ0lDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVjbTl2ZEVOdmJuUmhhVzVsY2k1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmRHOTFZMmhsYm1RbkxDQnZibFJ2ZFdOb1UzUnZjRVYyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxuSnZiM1JEYjI1MFlXbHVaWEl1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnSjJOdmJuUmxlSFJ0Wlc1MUp5d2diMjVTYVdkb2RFTnNhV05yUlhabGJuUXNJR1poYkhObElDazdYSEpjYmx4eVhHNGdJQ0FnZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9JQ2RyWlhsa2IzZHVKeXdnYjI1TFpYbEViM2R1UlhabGJuUXNJR1poYkhObElDazdJRnh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dRMjl1YzNSaGJuUnpMblZ3WkdGMFpVTmhiblpoYzFOcGVtVlBibGRwYm1SdmQxSmxjMmw2WlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkeVpYTnBlbVVuTENCdmJsZHBibVJ2ZDFKbGMybDZaVVYyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dVhISmNibVoxYm1OMGFXOXVJRzl1VFc5MWMyVk5iM1psUlhabGJuUWdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCdFgzQnZjM2dnUFNBd0xGeHlYRzRnSUNBZ0lDQWdJRzFmY0c5emVTQTlJREFzWEhKY2JpQWdJQ0FnSUNBZ1pWOXdiM040SUQwZ01DeGNjbHh1SUNBZ0lDQWdJQ0JsWDNCdmMza2dQU0F3TEZ4eVhHNGdJQ0FnSUNBZ0lHOWlhaUE5SUhSb2FYTTdYSEpjYmx4eVhHNGdJQ0FnTHk5blpYUWdiVzkxYzJVZ2NHOXphWFJwYjI0Z2IyNGdaRzlqZFcxbGJuUWdZM0p2YzNOaWNtOTNjMlZ5WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JsSUQwZ2QybHVaRzkzTG1WMlpXNTBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdVdWNHRm5aVmdnZkh3Z1pTNXdZV2RsV1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM040SUQwZ1pTNXdZV2RsV0R0Y2NseHVJQ0FnSUNBZ0lDQnRYM0J2YzNrZ1BTQmxMbkJoWjJWWk8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2daUzVqYkdsbGJuUllJSHg4SUdVdVkyeHBaVzUwV1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM040SUQwZ1pTNWpiR2xsYm5SWUlDc2daRzlqZFcxbGJuUXVZbTlrZVM1elkzSnZiR3hNWldaMElDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRXhsWm5RN1hISmNiaUFnSUNBZ0lDQWdiVjl3YjNONUlEMGdaUzVqYkdsbGJuUlpJQ3NnWkc5amRXMWxiblF1WW05a2VTNXpZM0p2Ykd4VWIzQWdLMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d08xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdkwyZGxkQ0J3WVhKbGJuUWdaV3hsYldWdWRDQndiM05wZEdsdmJpQnBiaUJrYjJOMWJXVnVkRnh5WEc0Z0lDQWdhV1lnS0NCdlltb3ViMlptYzJWMFVHRnlaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2J5QjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsWDNCdmMzZ2dLejBnYjJKcUxtOW1abk5sZEV4bFpuUTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVmZjRzl6ZVNBclBTQnZZbW91YjJabWMyVjBWRzl3TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUhkb2FXeGxJQ2dnYjJKcUlEMGdiMkpxTG05bVpuTmxkRkJoY21WdWRDQXBPeUF2THlCcWMyaHBiblFnYVdkdWIzSmxPbXhwYm1WY2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHk4Z2JXOTFjMlVnY0c5emFYUnBiMjRnYldsdWRYTWdaV3h0SUhCdmMybDBhVzl1SUdseklHMXZkWE5sY0c5emFYUnBiMjRnY21Wc1lYUnBkbVVnZEc4Z1pXeGxiV1Z1ZERwY2NseHVJQ0FnSUcxdmRYTmxMbmdnUFNCdFgzQnZjM2dnTFNCbFgzQnZjM2c3WEhKY2JpQWdJQ0J0YjNWelpTNTVJRDBnYlY5d2IzTjVJQzBnWlY5d2IzTjVPMXh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2IyNVViM1ZqYUUxdmRtVkZkbVZ1ZENBb0lHVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2RtRnlJRzFmY0c5emVDQTlJREFzWEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ01DeGNjbHh1SUNBZ0lDQWdJQ0JsWDNCdmMzZ2dQU0F3TEZ4eVhHNGdJQ0FnSUNBZ0lHVmZjRzl6ZVNBOUlEQXNYSEpjYmlBZ0lDQWdJQ0FnYjJKcUlEMGdkR2hwY3p0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvWlM1amFHRnVaMlZrVkc5MVkyaGxjeUFtSmlCbExtTm9ZVzVuWldSVWIzVmphR1Z6V3pCZEtTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnWlM1amFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1d1lXZGxXQ0I4ZkNCbExtTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExuQmhaMlZaSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiVjl3YjNONElEMGdaUzVqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzV3WVdkbFdEdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ1pTNWphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNXdZV2RsV1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JsTG1Ob1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdnZkh3Z1pTNWphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYlY5d2IzTjRJRDBnWlM1amFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1amJHbGxiblJZSUNzZ1pHOWpkVzFsYm5RdVltOWtlUzV6WTNKdmJHeE1aV1owSUN0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1elkzSnZiR3hNWldaME8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdFgzQnZjM2tnUFNCbExtTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZrZ0t5QmtiMk4xYldWdWRDNWliMlI1TG5OamNtOXNiRlJ2Y0NBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeTluWlhRZ2NHRnlaVzUwSUdWc1pXMWxiblFnY0c5emFYUnBiMjRnYVc0Z1pHOWpkVzFsYm5SY2NseHVJQ0FnSUdsbUlDZ2diMkpxSUNZbUlHOWlhaTV2Wm1aelpYUlFZWEpsYm5RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWZmNHOXplQ0FyUFNCdlltb3ViMlptYzJWMFRHVm1kRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaVjl3YjNONUlDczlJRzlpYWk1dlptWnpaWFJVYjNBN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwZ2QyaHBiR1VnS0NCdlltb2dQU0J2WW1vdWIyWm1jMlYwVUdGeVpXNTBJQ2s3SUM4dklHcHphR2x1ZENCcFoyNXZjbVU2YkdsdVpWeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdkx5QnRiM1Z6WlNCd2IzTnBkR2x2YmlCdGFXNTFjeUJsYkcwZ2NHOXphWFJwYjI0Z2FYTWdiVzkxYzJWd2IzTnBkR2x2YmlCeVpXeGhkR2wyWlNCMGJ5QmxiR1Z0Wlc1ME9seHlYRzRnSUNBZ2JXOTFjMlV1ZUNBOUlHMWZjRzl6ZUNBdElHVmZjRzl6ZUR0Y2NseHVJQ0FnSUcxdmRYTmxMbmtnUFNCdFgzQnZjM2tnTFNCbFgzQnZjM2s3WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnZibE5qY205c2JFVjJaVzUwSUNnZ1pTQXBJSHRjY2x4dVhISmNibHh5WEc0Z0lDQWdhV1lnS0NCM2FHVmxiRVJwY21WamRHbHZiaWdnWlNBcElEd2dNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1GMmFXZGhkR1ZTWldOdmNtUnpLQ0FuY0hKbGRpY2dLVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WVhacFoyRjBaVkpsWTI5eVpITW9JQ2R1WlhoMEp5QXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnZia05zYVdOclJYWmxiblFnS0NCdGIzVnpaVVJ2ZDI1UWIzTWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjJOc2IzTmxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQjJaV04wYjNKUWIzTWdQU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUNnZ0tDQW9JRzF2ZFhObFJHOTNibEJ2Y3k1NElDMGdjbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzV2Wm1aelpYUk1aV1owSUNrZ0x5QW9JSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1ZDJsa2RHZ2dLU0FwSUNvZ01pQXRJREVnS1N4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ0tDQXRLQ0FvSUcxdmRYTmxSRzkzYmxCdmN5NTVJQzBnY21WdVpHVnlaWEl1Wkc5dFJXeGxiV1Z1ZEM1dlptWnpaWFJVYjNBZ0tTQXZJQ2dnY21WdVpHVnlaWEl1Wkc5dFJXeGxiV1Z1ZEM1b1pXbG5hSFFnS1NBcElDb2dNaUFySURFZ0tTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dNQzQxWEhKY2JpQWdJQ0FnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSFpsWTNSdmNpQTlJRzVsZHlCVVNGSkZSUzVXWldOMGIzSXpLQ0IyWldOMGIzSlFiM011ZUN3Z2RtVmpkRzl5VUc5ekxua3NJSFpsWTNSdmNsQnZjeTU2SUNrN1hISmNiaUFnSUNBZ0lDQWdkbVZqZEc5eUxuVnVjSEp2YW1WamRDZ2dZMkZ0WlhKaElDazdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlISmhlV05oYzNSbGNpQTlJRzVsZHlCVVNGSkZSUzVTWVhsallYTjBaWElvSUdOaGJXVnlZUzV3YjNOcGRHbHZiaXdnZG1WamRHOXlMbk4xWWlnZ1kyRnRaWEpoTG5CdmMybDBhVzl1SUNrdWJtOXliV0ZzYVhwbEtDa2dLVHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdhVzUwWlhKelpXTjBjeUE5SUhKaGVXTmhjM1JsY2k1cGJuUmxjbk5sWTNSUFltcGxZM1J6S0NCamNtRjBaWE5EYjI1MFlXbHVaWEl1WTJocGJHUnlaVzRzSUhSeWRXVWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2FXNTBaWEp6WldOMElITnZiV1YwYUdsdVoxeHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2FXNTBaWEp6WldOMGN5NXNaVzVuZEdnZ1BpQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR05zYVdOclpXUlNaV052Y21RN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJIWlhRZ2RHaGxJR1pwY25OMElIWnBjMmxpYkdVZ2NtVmpiM0prSUdsdWRHVnljMlZqZEdWa1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9JSFpoY2lCcElEMGdNRHNnYVNBOElHbHVkR1Z5YzJWamRITXViR1Z1WjNSb095QnBLeXNnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdhVzUwWlhKalpYQjBJR0VnYldWemFDQjNhR2xqYUNCcGN5QnViM1FnWVNCeVpXTnZjbVFzSUdKeVpXRnJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lIUjVjR1Z2WmlocGJuUmxjbk5sWTNSeld5QnBJRjB1YjJKcVpXTjBMbkpsWTI5eVpFbGtLU0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9JR2x1ZEdWeWMyVmpkSE5iSUdrZ1hTNXZZbXBsWTNRdWRtbHphV0pzWlNBbUppQnBiblJsY25ObFkzUnpXeUJwSUYwdWIySnFaV04wTG5KbFkyOXlaRWxrSUQ0OUlEQWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc2FXTnJaV1JTWldOdmNtUWdQU0J5WldOdmNtUnpXeUJwYm5SbGNuTmxZM1J6V3lCcElGMHViMkpxWldOMExuSmxZMjl5WkVsa0lGMDdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIUm9aWEpsSUdseklHOXVaVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUdOc2FXTnJaV1JTWldOdmNtUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NCelpXeGxZM1JsWkZKbFkyOXlaQ0E5UFQwZ1kyeHBZMnRsWkZKbFkyOXlaQzVwWkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabXhwY0ZObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFVtVmpiM0prS0NCamJHbGphMlZrVW1WamIzSmtMbWxrSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVd4c0lHbHVkR1Z5YzJWamRHVmtJSEpsWTI5eVpITWdZWEpsSUc1dmRDQjJhWE5wWW14bGMxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBdkx5Qk9ieUJ5WldOdmNtUWdhR0Z6SUdKbFpXNGdhVzUwWlhKelpXTjBaV1JjY2x4dUlDQWdJQ0FnSUNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMyVjBVMmh2ZDI1U1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JRU52Ym5OMFlXNTBjeTVqYkc5elpVbHVabTlRWVc1bGJFOXVRMnhwWTJzZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnNhWEJDWVdOclUyVnNaV04wWldSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCdmJrMXZkWE5sUkc5M2JrVjJaVzUwSUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1V1WW5WMGRHOXVJQ0U5UFNBeElDWW1JR1V1WW5WMGRHOXVJQ0U5UFNBeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiR1ZoY2tsdWRHVnlkbUZzS0NCelkzSnZiR3hTWldOdmNtUnpWR2x0Wlc5MWRDQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBblkyeHZjMlZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSE5qY205c2JGSmxZMjl5WkhNb0lHWmhiSE5sTENCdGIzVnpaUzU1SUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwZ1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxdmRYTmxSRzkzYmxCdmN5QTlJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nYlc5MWMyVXVlQ3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nYlc5MWMyVXVlVnh5WEc0Z0lDQWdJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2IyNVViM1ZqYUZOMFlYSjBSWFpsYm5RZ0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHMXZkWE5sUkc5M2JsQnZjeUE5SUh0Y2NseHVJQ0FnSUNBZ0lDQjRPaUJ0YjNWelpTNTRMRnh5WEc0Z0lDQWdJQ0FnSUhrNklHMXZkWE5sTG5sY2NseHVJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdiMjVVYjNWamFFMXZkbVZGZG1WdWRDZ2daU0FwTzF4eVhHNWNjbHh1SUNBZ0lHTnNaV0Z5U1c1MFpYSjJZV3dvSUhOamNtOXNiRkpsWTI5eVpITlVhVzFsYjNWMElDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMk5zYjNObFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5qY205c2JGSmxZMjl5WkhNb0lIUnlkV1VzSUcxdmRYTmxMbmtnS1R0Y2NseHVYSEpjYmlBZ0lDQjlJRnh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2IyNU5iM1Z6WlZWd1JYWmxiblFnS0NCbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2daUzVpZFhSMGIyNGdJVDA5SURFZ0ppWWdaUzVpZFhSMGIyNGdJVDA5SURJZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTnNaV0Z5U1c1MFpYSjJZV3dvSUhOamNtOXNiRkpsWTI5eVpITlVhVzFsYjNWMElDazdYSEpjYmlBZ0lDQWdJQ0FnY21WdVpHVnlaWEl1Wkc5dFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkbmNtRmlKeWs3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUZSeWFXZG5aWElnYzJObGJtVWdZMnhwWTJzZ1pYWmxiblFnYjI1c2VTQnBaaUJ0YjNWelpYVndJR1YyWlc1MElHbHpJRzV2ZENCaElHUnlZV2NnWlc1a0lHVjJaVzUwSUNZZ2JtOTBJR0VnWTJ4cFkyc2diMjRnWVNCc2FXNXJYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQmpiMjl5WkhORmNYVmhiSE5CY0hCeWIzZ29JRzF2ZFhObFJHOTNibEJ2Y3l3Z2JXOTFjMlVzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzVuY21GaVUyVnVjMmwwYVhacGRIa2dLU0FtSmlBaEtDQmxMblJoY21kbGRDQW1KaUJsTG5SaGNtZGxkQzVvWVhOQmRIUnlhV0oxZEdVb0oyaHlaV1luS1NBcElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYjI1RGJHbGphMFYyWlc1MEtDQnRiM1Z6WlVSdmQyNVFiM01nS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdiMjVVYjNWamFGTjBiM0JGZG1WdWRDQW9JR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdZMnhsWVhKSmJuUmxjblpoYkNnZ2MyTnliMnhzVW1WamIzSmtjMVJwYldWdmRYUWdLVHRjY2x4dUlDQWdJSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWjNKaFlpY3BPMXh5WEc1Y2NseHVJQ0FnSUM4dklGUnlhV2RuWlhJZ2MyTmxibVVnWTJ4cFkyc2daWFpsYm5RZ2IyNXNlU0JwWmlCdGIzVnpaWFZ3SUdWMlpXNTBJR2x6SUc1dmRDQmhJR1J5WVdjZ1pXNWtJR1YyWlc1MElDWWdibTkwSUdFZ1kyeHBZMnNnYjI0Z1lTQnNhVzVyWEhKY2JpQWdJQ0JwWmlBb0lHTnZiM0prYzBWeGRXRnNjMEZ3Y0hKdmVDZ2diVzkxYzJWRWIzZHVVRzl6TENCdGIzVnpaU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbWR5WVdKVFpXNXphWFJwZG1sMGVTQXBJQ1ltSUNFb0lHVXVkR0Z5WjJWMElDWW1JR1V1ZEdGeVoyVjBMbWhoYzBGMGRISnBZblYwWlNnbmFISmxaaWNwSUNrZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHOXVRMnhwWTJ0RmRtVnVkQ2dnYlc5MWMyVkViM2R1VUc5eklDazdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdiMjVTYVdkb2RFTnNhV05yUlhabGJuUWdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsYzJWMFUyaHZkMjVTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnZia3RsZVVSdmQyNUZkbVZ1ZENBb0lHVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JsTG10bGVVTnZaR1VnUFQwOUlETTNJSHg4SUdVdWEyVjVRMjlrWlNBOVBUMGdNemdnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1aGRtbG5ZWFJsVW1WamIzSmtjeWdnSjI1bGVIUW5JQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2daUzVyWlhsRGIyUmxJRDA5UFNBek9TQjhmQ0JsTG10bGVVTnZaR1VnUFQwOUlEUXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WVhacFoyRjBaVkpsWTI5eVpITW9JQ2R3Y21WMkp5QXBPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwOVBTQW5ZMnh2YzJWa0p5QW1KaUJsTG10bGVVTnZaR1VnUFQwOUlERXpJSHg4SUdVdWEyVjVRMjlrWlNBOVBUMGdNeklwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm14cGNGTmxiR1ZqZEdWa1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnWlM1clpYbERiMlJsSUQwOVBTQXlOeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhObGRGTm9iM2R1VW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJ2YmxkcGJtUnZkMUpsYzJsNlpVVjJaVzUwSUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCallXeGpkV3hoZEdWRFlXNTJZWE5UYVhwbEtDazdYSEpjYmlBZ0lDQnpaWFJEWVc1MllYTkVhVzFsYm5OcGIyNXpLQ2s3WEhKY2JseHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdWMyVjBVMmw2WlNnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzRnSUNBZ1EyRnRaWEpoVFdGdVlXZGxjaTUxY0dSaGRHVkRZVzFsY21GQmMzQmxZM1FvSUdOaGJuWmhjMWRwWkhSb0lDOGdZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5SRVpYQjBhQzUyWVd4MVpTQTlJR1JsY0hSb1ZHRnlaMlYwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuTnBlbVV1ZG1Gc2RXVXVjMlYwS0NCallXNTJZWE5YYVdSMGFDd2dZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVkR1Y0ZEdWc0xuWmhiSFZsTG5ObGRDZ2dNUzR3SUM4Z1kyRnVkbUZ6VjJsa2RHZ3NJREV1TUNBdklHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnUmxoQlFTNTFibWxtYjNKdGN5NXlaWE52YkhWMGFXOXVMblpoYkhWbExuTmxkQ2dnTVNBdklHTmhiblpoYzFkcFpIUm9MQ0F4SUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJQ0FnVlVrZ1RVVlVTRTlFVXlBZ0lDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYzJodmQweHZZV1JwYm1jZ0tDQmtiMjVsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR1poWkdWSmJpZ2dRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbXh2WVdScGJtZERiMjUwWVdsdVpYSWdLVHRjY2x4dUlDQWdJSE5sZEZScGJXVnZkWFFvWkc5dVpTd2dNVEF3TUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FHbGtaVXh2WVdScGJtY2dLQ0JrYjI1bElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdaaFpHVlBkWFFvSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1c2IyRmthVzVuUTI5dWRHRnBibVZ5SUNrN1hISmNiaUFnSUNCelpYUlVhVzFsYjNWMEtHUnZibVVzSURFd01EQXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lFbE9TVlJKUVV4SlUwRlVTVTlPSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVablZ1WTNScGIyNGdhVzVwZEZOalpXNWxJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQXZMeUJ6WTJWdVpTd2djbVZ1WkdWeVpYSXNJR05oYldWeVlTd3VMaTVjY2x4dUlDQWdJSE5qWlc1bElEMGdibVYzSUZSSVVrVkZMbE5qWlc1bEtDazdYSEpjYmx4eVhHNGdJQ0FnY21WdVpHVnlaWElnUFNCdVpYY2dWRWhTUlVVdVYyVmlSMHhTWlc1a1pYSmxjaWdnZTF4eVhHNGdJQ0FnSUNBZ0lHRnVkR2xoYkdsaGN6b2dkSEoxWlZ4eVhHNGdJQ0FnZlNBcE8xeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdWMyVjBVMmw2WlNnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzVjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVqWVc1MllYTkRiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RZ0tUdGNjbHh1SUNBZ0lISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXVhV1FnUFNCY0ltTnZiblJsZUhSY0lqdGNjbHh1SUNBZ0lISmxibVJsY21WeUxuTmxkRU5zWldGeVEyOXNiM0lvSUVOdmJuTjBZVzUwY3k1aVlXTnJaM0p2ZFc1a1EyOXNiM0lzSURFZ0tUdGNjbHh1WEhKY2JpQWdJQ0JEWVcxbGNtRk5ZVzVoWjJWeUxtbHVhWFFvWTJGdWRtRnpWMmxrZEdnZ0x5QmpZVzUyWVhOSVpXbG5hSFFwTzF4eVhHNGdJQ0FnWTJGdFpYSmhJRDBnUTJGdFpYSmhUV0Z1WVdkbGNpNW5aWFJEWVcxbGNtRW9LVHRjY2x4dVhISmNiaUFnSUNCMllYSWdkMjl2WkY5MFpYaDBkWEpsSUQwZ1ZFaFNSVVV1U1cxaFoyVlZkR2xzY3k1c2IyRmtWR1Y0ZEhWeVpTZ2dRMjl1YzNSaGJuUnpMbU55WVhSbFZHVjRkSFZ5WlNBcE8xeHlYRzRnSUNBZ2QyOXZaRjkwWlhoMGRYSmxMbUZ1YVhOdmRISnZjSGtnUFNCeVpXNWtaWEpsY2k1blpYUk5ZWGhCYm1semIzUnliM0I1S0NrN1hISmNiaUFnSUNCM2IyOWtYMjFoZEdWeWFXRnNJRDBnYm1WM0lGUklVa1ZGTGsxbGMyaE1ZVzFpWlhKMFRXRjBaWEpwWVd3b0lIdGNjbHh1SUNBZ0lDQWdJQ0J0WVhBNklIZHZiMlJmZEdWNGRIVnlaVnh5WEc0Z0lDQWdmU0FwTzF4eVhHNWNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWElnUFNCdVpYY2dWRWhTUlVVdVQySnFaV04wTTBRb0tUdGNjbHh1SUNBZ0lHTnlZWFJsYzBOdmJuUmhhVzVsY2lBOUlHNWxkeUJVU0ZKRlJTNVBZbXBsWTNRelJDZ3BPMXh5WEc0Z0lDQWdjMk5sYm1VdVlXUmtLQ0J5YjI5MFEyOXVkR0ZwYm1WeUlDazdYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TG1Ga1pDZ2dZM0poZEdWelEyOXVkR0ZwYm1WeUlDazdYSEpjYmx4eVhHNGdJQ0FnYVc1cGRFTnlZWFJsY3lncE8xeHlYRzRnSUNBZ2FXNXBkRkpsWTI5eVpITW9LVHRjY2x4dVhISmNiaUFnSUNCc2FXZG9kQ0E5SUc1bGR5QlVTRkpGUlM1UWIybHVkRXhwWjJoMEtDQXdlRVpHUmtaR1Jpd2dRMjl1YzNSaGJuUnpMbXhwWjJoMFNXNTBaVzV6YVhSNUlDb2dNUzR4SUNrN1hISmNiaUFnSUNCc2FXZG9kQzV3YjNOcGRHbHZiaTV6WlhRb0lETXdNQ3dnT0RBc0lEQWdLVHRjY2x4dUlDQWdJSE5qWlc1bExtRmtaQ2dnYkdsbmFIUWdLVHRjY2x4dVhISmNiaUFnSUNCc1pXWjBUR2xuYUhRZ1BTQnVaWGNnVkVoU1JVVXVVRzlwYm5STWFXZG9kQ2dnTUhoR1JrWkdSa1lzSUVOdmJuTjBZVzUwY3k1c2FXZG9kRWx1ZEdWdWMybDBlU0FxSURBdU5pQXBPMXh5WEc0Z0lDQWdiR1ZtZEV4cFoyaDBMbkJ2YzJsMGFXOXVMbk5sZENnZ0xURXdNQ3dnTXpBd0xDQXhNREF3SUNrN1hISmNiaUFnSUNCelkyVnVaUzVoWkdRb0lHeGxablJNYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUhKcFoyaDBUR2xuYUhRZ1BTQnVaWGNnVkVoU1JVVXVVRzlwYm5STWFXZG9kQ2dnTUhoR1JrWkdSa1lzSUVOdmJuTjBZVzUwY3k1c2FXZG9kRWx1ZEdWdWMybDBlU0FxSURBdU5pQXBPMXh5WEc0Z0lDQWdjbWxuYUhSTWFXZG9kQzV3YjNOcGRHbHZiaTV6WlhRb0lDMHhNREFzSURNd01Dd2dMVEV3TURBZ0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2djbWxuYUhSTWFXZG9kQ0FwTzF4eVhHNWNjbHh1SUNBZ0lHbHVhWFJRYjNOMFVISnZZMlZ6YzJsdVp5Z3BPMXh5WEc1Y2NseHVJQ0FnSUdKcGJtUkZkbVZ1ZEhNb0tUdGNjbHh1WEhKY2JpQWdJQ0F2THlCRVQwMGdjMlYwZFhCY2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1eWIyOTBRMjl1ZEdGcGJtVnlMbk4wZVd4bExuQnZjMmwwYVc5dUlEMGdKM0psYkdGMGFYWmxKenRjY2x4dUlDQWdJRU52Ym5OMFlXNTBjeTVsYkdWdFpXNTBjeTVqWVc1MllYTkRiMjUwWVdsdVpYSXVjM1I1YkdVdWNHOXphWFJwYjI0Z1BTQW5ZV0p6YjJ4MWRHVW5PMXh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbWx1Wm05RGIyNTBZV2x1WlhJdWMzUjViR1V1Y0c5emFYUnBiMjRnUFNBbllXSnpiMngxZEdVbk8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxteHZZV1JwYm1kRGIyNTBZV2x1WlhJdWMzUjViR1V1Y0c5emFYUnBiMjRnUFNBbllXSnpiMngxZEdVbk8xeHlYRzVjY2x4dUlDQWdJSE5sZEVOaGJuWmhjMFJwYldWdWMybHZibk1vS1R0Y2NseHVYSEpjYmlBZ0lDQm9hV1JsUld4bGJXVnVkQ2hEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11YVc1bWIwTnZiblJoYVc1bGNpazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVaR1ZpZFdjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbHVhWFJFWldKMVp5Z3BPMXh5WEc0Z0lDQWdJQ0FnSUdsdWFYUkhWVWtvS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WelpYUlRhRzkzYmxKbFkyOXlaQ2dwTzF4eVhHNGdJQ0FnWVc1cGJXRjBaU2dwTzF4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdhVzVwZEZCdmMzUlFjbTlqWlhOemFXNW5JQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQmtaWEIwYUZOb1lXUmxjaUE5SUZSSVVrVkZMbE5vWVdSbGNreHBZaTVrWlhCMGFGSkhRa0U3WEhKY2JpQWdJQ0JrWlhCMGFGVnVhV1p2Y20xeklEMGdWRWhTUlVVdVZXNXBabTl5YlhOVmRHbHNjeTVqYkc5dVpTZ2daR1Z3ZEdoVGFHRmtaWEl1ZFc1cFptOXliWE1nS1R0Y2NseHVYSEpjYmlBZ0lDQmtaWEIwYUUxaGRHVnlhV0ZzSUQwZ2JtVjNJRlJJVWtWRkxsTm9ZV1JsY2sxaGRHVnlhV0ZzS0NCN1hISmNiaUFnSUNBZ0lDQWdabkpoWjIxbGJuUlRhR0ZrWlhJNklHUmxjSFJvVTJoaFpHVnlMbVp5WVdkdFpXNTBVMmhoWkdWeUxGeHlYRzRnSUNBZ0lDQWdJSFpsY25SbGVGTm9ZV1JsY2pvZ1pHVndkR2hUYUdGa1pYSXVkbVZ5ZEdWNFUyaGhaR1Z5TEZ4eVhHNGdJQ0FnSUNBZ0lIVnVhV1p2Y20xek9pQmtaWEIwYUZWdWFXWnZjbTF6WEhKY2JpQWdJQ0I5SUNrN1hISmNiaUFnSUNCa1pYQjBhRTFoZEdWeWFXRnNMbUpzWlc1a2FXNW5JRDBnVkVoU1JVVXVUbTlDYkdWdVpHbHVaenRjY2x4dVhISmNiaUFnSUNCa1pYQjBhRlJoY21kbGRDQTlJRzVsZHlCVVNGSkZSUzVYWldKSFRGSmxibVJsY2xSaGNtZGxkQ2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ3dnZTF4eVhHNGdJQ0FnSUNBZ0lHMXBia1pwYkhSbGNqb2dWRWhTUlVVdVRtVmhjbVZ6ZEVacGJIUmxjaXhjY2x4dUlDQWdJQ0FnSUNCdFlXZEdhV3gwWlhJNklGUklVa1ZGTGs1bFlYSmxjM1JHYVd4MFpYSXNYSEpjYmlBZ0lDQWdJQ0FnWm05eWJXRjBPaUJVU0ZKRlJTNVNSMEpCUm05eWJXRjBYSEpjYmlBZ0lDQjlJQ2s3WEhKY2JseHlYRzRnSUNBZ1kyOXRjRzl6WlhJZ1BTQnVaWGNnVkVoU1JVVXVSV1ptWldOMFEyOXRjRzl6WlhJb0lISmxibVJsY21WeUlDazdYSEpjYmlBZ0lDQmpiMjF3YjNObGNpNWhaR1JRWVhOektDQnVaWGNnVkVoU1JVVXVVbVZ1WkdWeVVHRnpjeWdnYzJObGJtVXNJR05oYldWeVlTQXBJQ2s3WEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1JHVndkR2dnYjJZZ1ptbGxiR1FnYzJoaFpHVnlJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQmtiMllnUFNCdVpYY2dWRWhTUlVVdVUyaGhaR1Z5VUdGemN5Z2dWRWhTUlVVdVJHOUdVMmhoWkdWeUlDazdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZEVSbGNIUm9MblpoYkhWbElEMGdaR1Z3ZEdoVVlYSm5aWFE3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWMybDZaUzUyWVd4MVpTNXpaWFFvSUdOaGJuWmhjMWRwWkhSb0xDQmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTBaWGgwWld3dWRtRnNkV1V1YzJWMEtDQXhMakFnTHlCallXNTJZWE5YYVdSMGFDd2dNUzR3SUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JseHlYRzRnSUNBZ0x5OXRZV3RsSUhOMWNtVWdkR2hoZENCMGFHVnpaU0IwZDI4Z2RtRnNkV1Z6SUdGeVpTQjBhR1VnYzJGdFpTQm1iM0lnZVc5MWNpQmpZVzFsY21Fc0lHOTBhR1Z5ZDJselpTQmthWE4wWVc1alpYTWdkMmxzYkNCaVpTQjNjbTl1Wnk1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTZibVZoY2k1MllXeDFaU0E5SUdOaGJXVnlZUzV1WldGeU95QXZMMk5oYldWeVlTQmpiR2x3Y0dsdVp5QnpkR0Z5ZEZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxucG1ZWEl1ZG1Gc2RXVWdQU0JqWVcxbGNtRXVabUZ5T3lBdkwyTmhiV1Z5WVNCamJHbHdjR2x1WnlCbGJtUmNjbHh1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpZV3hFWlhCMGFDNTJZV3gxWlNBOUlEVTdJQzh2Wm05allXd2daR2x6ZEdGdVkyVWdkbUZzZFdVZ2FXNGdiV1YwWlhKekxDQmlkWFFnZVc5MUlHMWhlU0IxYzJVZ1lYVjBiMlp2WTNWeklHOXdkR2x2YmlCaVpXeHZkMXh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1adlkyRnNUR1Z1WjNSb0xuWmhiSFZsSUQwZ1kyRnRaWEpoTG1adlkyRnNUR1Z1WjNSb095QXZMMlp2WTJGc0lHeGxibWQwYUNCcGJpQnRiVnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1aemRHOXdMblpoYkhWbElEMGdPQzR3T3lBdkwyWXRjM1J2Y0NCMllXeDFaVnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5Ob2IzZEdiMk4xY3k1MllXeDFaU0E5SUdaaGJITmxPeUF2TDNOb2IzY2daR1ZpZFdjZ1ptOWpkWE1nY0c5cGJuUWdZVzVrSUdadlkyRnNJSEpoYm1kbElDaHZjbUZ1WjJVZ1BTQm1iMk5oYkNCd2IybHVkQ3dnWW14MVpTQTlJR1p2WTJGc0lISmhibWRsS1Z4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTV0WVc1MVlXeGtiMll1ZG1Gc2RXVWdQU0IwY25WbE95QXZMMjFoYm5WaGJDQmtiMllnWTJGc1kzVnNZWFJwYjI1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXVaRzltYzNSaGNuUXVkbUZzZFdVZ1BTQXhNVHNnTHk5dVpXRnlJR1J2WmlCaWJIVnlJSE4wWVhKMFhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVibVJ2Wm1ScGMzUXVkbUZzZFdVZ1BTQTRNRHNnTHk5dVpXRnlJR1J2WmlCaWJIVnlJR1poYkd4dlptWWdaR2x6ZEdGdVkyVWdJQ0FnWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVptUnZabk4wWVhKMExuWmhiSFZsSUQwZ01Ec2dMeTltWVhJZ1pHOW1JR0pzZFhJZ2MzUmhjblJjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bVpHOW1aR2x6ZEM1MllXeDFaU0E5SURFd01Ec2dMeTltWVhJZ1pHOW1JR0pzZFhJZ1ptRnNiRzltWmlCa2FYTjBZVzVqWlNCY2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11UTI5RExuWmhiSFZsSUQwZ01DNHdNenNnTHk5amFYSmpiR1VnYjJZZ1kyOXVablZ6YVc5dUlITnBlbVVnYVc0Z2JXMGdLRE0xYlcwZ1ptbHNiU0E5SURBdU1ETnRiU2tnSUNBZ1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5acFoyNWxkSFJwYm1jdWRtRnNkV1VnUFNCbVlXeHpaVHNnTHk5MWMyVWdiM0IwYVdOaGJDQnNaVzV6SUhacFoyNWxkSFJwYm1jL1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG1GMWRHOW1iMk4xY3k1MllXeDFaU0E5SUhSeWRXVTdJQzh2ZFhObElHRjFkRzltYjJOMWN5QnBiaUJ6YUdGa1pYSS9JR1JwYzJGaWJHVWdhV1lnZVc5MUlIVnpaU0JsZUhSbGNtNWhiQ0JtYjJOaGJFUmxjSFJvSUhaaGJIVmxYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm05amRYTXVkbUZzZFdVdWMyVjBLQ0F3TGpNMUxDQXdMak0xSUNrN0lDOHZJR0YxZEc5bWIyTjFjeUJ3YjJsdWRDQnZiaUJ6WTNKbFpXNGdLREF1TUN3d0xqQWdMU0JzWldaMElHeHZkMlZ5SUdOdmNtNWxjaXdnTVM0d0xERXVNQ0F0SUhWd2NHVnlJSEpwWjJoMEtTQmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTV0WVhoaWJIVnlMblpoYkhWbElEMGdRMjl1YzNSaGJuUnpMbUpzZFhKQmJXOTFiblE3SUM4dlkyeGhiWEFnZG1Gc2RXVWdiMllnYldGNElHSnNkWElnS0RBdU1DQTlJRzV2SUdKc2RYSXNNUzR3SUdSbFptRjFiSFFwSUNBZ0lGeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1MGFISmxjMmh2YkdRdWRtRnNkV1VnUFNBd095QXZMMmhwWjJoc2FXZG9kQ0IwYUhKbGMyaHZiR1E3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVoyRnBiaTUyWVd4MVpTQTlJREE3SUM4dmFHbG5hR3hwWjJoMElHZGhhVzQ3WEhKY2JseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbUpwWVhNdWRtRnNkV1VnUFNBd095QXZMMkp2YTJWb0lHVmtaMlVnWW1saGN5QWdJQ0FnSUNBZ1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabkpwYm1kbExuWmhiSFZsSUQwZ01Ec2dMeTlpYjJ0bGFDQmphSEp2YldGMGFXTWdZV0psY25KaGRHbHZiaTltY21sdVoybHVaMXh5WEc1Y2NseHVJQ0FnSUVaWVFVRWdQU0J1WlhjZ1ZFaFNSVVV1VTJoaFpHVnlVR0Z6Y3lnZ1ZFaFNSVVV1UmxoQlFWTm9ZV1JsY2lBcE8xeHlYRzVjY2x4dUlDQWdJRVpZUVVFdWRXNXBabTl5YlhNdWNtVnpiMngxZEdsdmJpNTJZV3gxWlM1elpYUW9JREVnTHlCallXNTJZWE5YYVdSMGFDd2dNU0F2SUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc0Z0lDQWdSbGhCUVM1eVpXNWtaWEpVYjFOamNtVmxiaUE5SUhSeWRXVTdYSEpjYmx4eVhHNGdJQ0FnWTI5dGNHOXpaWEl1WVdSa1VHRnpjeWdnWkc5bUlDazdYSEpjYmlBZ0lDQmpiMjF3YjNObGNpNWhaR1JRWVhOektDQkdXRUZCSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FXNXBkRVJsWW5WbklDZ3BJSHRjY2x4dVhISmNiaUFnSUNCemRHRjBjeUE5SUc1bGR5QlRkR0YwY3lncE8xeHlYRzRnSUNBZ2MzUmhkSE11Wkc5dFJXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkaFluTnZiSFYwWlNjN1hISmNiaUFnSUNCemRHRjBjeTVrYjIxRmJHVnRaVzUwTG5OMGVXeGxMbXhsWm5RZ1BTQmNJakJjSWp0Y2NseHVJQ0FnSUhOMFlYUnpMbVJ2YlVWc1pXMWxiblF1YzNSNWJHVXVkRzl3SUQwZ1hDSXdYQ0k3WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11Y205dmRFTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2dnYzNSaGRITXVaRzl0Uld4bGJXVnVkQ0FwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJrWldKMVp5QTlJRzVsZHlCVVNGSkZSUzVOWlhOb0tDQnVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvSURJd0xDQXlNQ3dnTWpBc0lERXNJREVzSURFZ0tTQXBPMXh5WEc0Z0lDQWdaR1ZpZFdjdWNHOXphWFJwYjI0dWMyVjBLRnh5WEc0Z0lDQWdJQ0FnSUd4cFoyaDBMbkJ2YzJsMGFXOXVMbmdzWEhKY2JpQWdJQ0FnSUNBZ2JHbG5hSFF1Y0c5emFYUnBiMjR1ZVN4Y2NseHVJQ0FnSUNBZ0lDQnNhV2RvZEM1d2IzTnBkR2x2Ymk1NlhISmNiaUFnSUNBcE8xeHlYRzRnSUNBZ2MyTmxibVV1WVdSa0tDQmtaV0oxWnlBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHbHVhWFJIVlVrZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmpZVzFsY21GR2IyeGtaWElzWEhKY2JpQWdJQ0FnSUNBZ1kyRnRaWEpoUm05allXeE1aVzVuZEdnc1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMRnh5WEc0Z0lDQWdJQ0FnSUY5c1lYTjBPMXh5WEc1Y2NseHVJQ0FnSUdkMWFTQTlJRzVsZHlCa1lYUXVSMVZKS0NrN1hISmNiaUFnSUNCY2NseHVJQ0FnSUdOaGJXVnlZVVp2YkdSbGNpQTlJR2QxYVM1aFpHUkdiMnhrWlhJb0lDZERZVzFsY21FbklDazdYSEpjYmlBZ0lDQmpZVzFsY21GR2IyTmhiRXhsYm1kMGFDQTlJR05oYldWeVlVWnZiR1JsY2k1aFpHUW9JR05oYldWeVlTd2dKMlp2WTJGc1RHVnVaM1JvSnl3Z01qZ3NJREl3TUNBcExtNWhiV1VvSUNkR2IyTmhiQ0JNWlc1bmRHZ25JQ2s3WEhKY2JpQWdJQ0JqWVcxbGNtRkdiMk5oYkV4bGJtZDBhQzV2YmtOb1lXNW5aU2dnZFhCa1lYUmxRMkZ0WlhKaElDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVjRzl6ZEhCeWIyTmxjM05wYm1jZ0tTQjdYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWElnUFNCbmRXa3VZV1JrUm05c1pHVnlLQ0FuUkdWd2RHZ2diMllnUm1sbGJHUW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWnZZMkZzUkdWd2RHZ3NJQ2QyWVd4MVpTY3NJREFzSURFd0lDa3VibUZ0WlNnZ0owWnZZMkZzSUVSbGNIUm9KeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NW1jM1J2Y0N3Z0ozWmhiSFZsSnl3Z01Dd2dNaklnS1M1dVlXMWxLQ0FuUmlCVGRHOXdKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NXRZWGhpYkhWeUxDQW5kbUZzZFdVbkxDQXdMQ0F6SUNrdWJtRnRaU2dnSjIxaGVDQmliSFZ5SnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWMyaHZkMFp2WTNWekxDQW5kbUZzZFdVbklDa3VibUZ0WlNnZ0oxTm9iM2NnUm05allXd2dVbUZ1WjJVbklDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NXRZVzUxWVd4a2IyWXNJQ2QyWVd4MVpTY2dLUzV1WVcxbEtDQW5UV0Z1ZFdGc0lFUnZSaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVibVJ2Wm5OMFlYSjBMQ0FuZG1Gc2RXVW5MQ0F3TENBeU1EQWdLUzV1WVcxbEtDQW5ibVZoY2lCemRHRnlkQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVibVJ2Wm1ScGMzUXNJQ2QyWVd4MVpTY3NJREFzSURJd01DQXBMbTVoYldVb0lDZHVaV0Z5SUdaaGJHeHZabVluSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVprYjJaemRHRnlkQ3dnSjNaaGJIVmxKeXdnTUN3Z01qQXdJQ2t1Ym1GdFpTZ2dKMlpoY2lCemRHRnlkQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVabVJ2Wm1ScGMzUXNJQ2QyWVd4MVpTY3NJREFzSURJd01DQXBMbTVoYldVb0lDZG1ZWElnWm1Gc2JHOW1aaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TGtOdlF5d2dKM1poYkhWbEp5d2dNQ3dnTUM0eElDa3VjM1JsY0NnZ01DNHdNREVnS1M1dVlXMWxLQ0FuWTJseVkyeGxJRzltSUdOdmJtWjFjMmx2YmljZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxuWnBaMjVsZEhScGJtY3NJQ2QyWVd4MVpTY2dLUzV1WVcxbEtDQW5WbWxuYm1WMGRHbHVaeWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVkbWxuYm05MWRDd2dKM1poYkhWbEp5d2dNQ3dnTWlBcExtNWhiV1VvSUNkdmRYUmxjaUJpYjNKa1pYSW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxuWnBaMjVwYml3Z0ozWmhiSFZsSnl3Z01Dd2dNU0FwTG5OMFpYQW9JREF1TURFZ0tTNXVZVzFsS0NBbmFXNXVaWElnWW05eVpHVnlKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NTJhV2R1Wm1Ga1pTd2dKM1poYkhWbEp5d2dNQ3dnTWpJZ0tTNXVZVzFsS0NBblptRmtaU0JoZENjZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtRjFkRzltYjJOMWN5d2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZEJkWFJ2Wm05amRYTW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWnZZM1Z6TG5aaGJIVmxMQ0FuZUNjc0lEQXNJREVnS1M1dVlXMWxLQ0FuWm05amRYTWdlQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVabTlqZFhNdWRtRnNkV1VzSUNkNUp5d2dNQ3dnTVNBcExtNWhiV1VvSUNkbWIyTjFjeUI1SnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWRHaHlaWE5vYjJ4a0xDQW5kbUZzZFdVbkxDQXdMQ0F4SUNrdWMzUmxjQ2dnTUM0d01TQXBMbTVoYldVb0lDZDBhSEpsYzJodmJHUW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtZGhhVzRzSUNkMllXeDFaU2NzSURBc0lERXdNQ0FwTG01aGJXVW9JQ2RuWVdsdUp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVZbWxoY3l3Z0ozWmhiSFZsSnl3Z01Dd2dOQ0FwTG5OMFpYQW9JREF1TURFZ0tTNXVZVzFsS0NBblltbGhjeWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVabkpwYm1kbExDQW5kbUZzZFdVbkxDQXdMQ0ExSUNrdWMzUmxjQ2dnTUM0d01TQXBMbTVoYldVb0lDZG1jbWx1WjJVbklDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NXViMmx6WlN3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkVmMyVWdUbTlwYzJVbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG01aGJXOTFiblFzSUNkMllXeDFaU2NzSURBc0lEQXVNREF4SUNrdWMzUmxjQ2dnTUM0d01EQXhJQ2t1Ym1GdFpTZ2dKMlJwZEdobGNpY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVJsY0hSb1lteDFjaXdnSjNaaGJIVmxKeUFwTG01aGJXVW9JQ2RDYkhWeUlFUmxjSFJvSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVrWW5OcGVtVXNJQ2QyWVd4MVpTY3NJREFzSURVZ0tTNXVZVzFsS0NBbllteDFjaUJ6YVhwbEp5QXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQm5kV2t1WTJ4dmMyVW9LVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVtZFc1amRHbHZiaUIxY0dSaGRHVkRZVzFsY21FZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZUzV6WlhSTVpXNXpLQ0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2dzSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnS1R0Y2NseHVJQ0FnSUdOaGJXVnlZUzUxY0dSaGRHVlFjbTlxWldOMGFXOXVUV0YwY21sNEtDazdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm05allXeE1aVzVuZEdndWRtRnNkV1VnUFNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FXNXBkRU55WVhSbGN5QW9LU0I3WEhKY2JseHlYRzRnSUNBZ1ptOXlJQ2dnZG1GeUlHTnlZWFJsU1dRZ1BTQXdPeUJqY21GMFpVbGtJRHdnUTI5dWMzUmhiblJ6TG01aVEzSmhkR1Z6T3lCamNtRjBaVWxrS3lzZ0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHTnlZWFJsSUQwZ1kzSmxZWFJsUTNKaGRHVW9JR055WVhSbFNXUWdLVHRjY2x4dUlDQWdJQ0FnSUNCamNtRjBaWE5EYjI1MFlXbHVaWEl1WVdSa0tDQmpjbUYwWlNBcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5TG5CdmMybDBhVzl1TG5vZ1BTQXRLQ0F4TVRBZ0xTQW9JREV4TUNBcUlFTnZibk4wWVc1MGN5NXVZa055WVhSbGN5QXBJQ2tnTHlBeU8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlHTnlaV0YwWlVOeVlYUmxJQ2dnYVdRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZElEMGdibVYzSUZSSVVrVkZMazlpYW1WamRETkVLQ2s3WEhKY2JseHlYRzRnSUNBZ2RtRnlJR0p2ZUY5aWIzUjBiMjBnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXlNREFzSURFd0xDQXhNREFnS1N3Z2QyOXZaRjl0WVhSbGNtbGhiQ0FwTzF4eVhHNGdJQ0FnWTNKaGRHVnpXeUJwWkNCZExtRmtaQ2dnWW05NFgySnZkSFJ2YlNBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCaWIzaGZiR1ZtZENBOUlHNWxkeUJVU0ZKRlJTNU5aWE5vS0NCdVpYY2dWRWhTUlVVdVFtOTRSMlZ2YldWMGNua29JREl3TUN3Z01UQXNJRGd3SUNrc0lIZHZiMlJmYldGMFpYSnBZV3dnS1R0Y2NseHVJQ0FnSUdKdmVGOXNaV1owTG5CdmMybDBhVzl1TG5ObGRDZ2dNQ3dnTXpVc0lDMDFOU0FwTzF4eVhHNGdJQ0FnWW05NFgyeGxablF1Y205MFlYUnBiMjR1ZUNBOUlFMWhkR2d1VUVrZ0x5QXlPMXh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDJ4bFpuUWdLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2xrSUQwOVBTQXdJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJpYjNoZmNtbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXlNREFzSURFd0xDQTRNQ0FwTENCM2IyOWtYMjFoZEdWeWFXRnNJQ2s3WEhKY2JpQWdJQ0FnSUNBZ1ltOTRYM0pwWjJoMExuQnZjMmwwYVc5dUxuTmxkQ2dnTUN3Z016VXNJRFUxSUNrN1hISmNiaUFnSUNBZ0lDQWdZbTk0WDNKcFoyaDBMbkp2ZEdGMGFXOXVMbmdnUFNCTllYUm9MbEJKSUM4Z01qdGNjbHh1SUNBZ0lDQWdJQ0JqY21GMFpYTmJJR2xrSUYwdVlXUmtLQ0JpYjNoZmNtbG5hSFFnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjJZWElnWW05NFgySmhZMnNnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQTRNQ3dnTVRBc0lERXlNQ0FwTENCM2IyOWtYMjFoZEdWeWFXRnNJQ2s3WEhKY2JpQWdJQ0JpYjNoZlltRmpheTV3YjNOcGRHbHZiaTV6WlhRb0lDMHhNRFVzSURNMUxDQXdJQ2s3WEhKY2JpQWdJQ0JpYjNoZlltRmpheTV5YjNSaGRHbHZiaTU2SUQwZ1RXRjBhQzVRU1NBdklESTdYSEpjYmlBZ0lDQmpjbUYwWlhOYklHbGtJRjB1WVdSa0tDQmliM2hmWW1GamF5QXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmliM2hmWm5KdmJuUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBME1Dd2dNVEFzSURFd01DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQmliM2hmWm5KdmJuUXVjRzl6YVhScGIyNHVjMlYwS0NBNU5Td2dNalVzSURBZ0tUdGNjbHh1SUNBZ0lHSnZlRjltY205dWRDNXliM1JoZEdsdmJpNTZJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNCamNtRjBaWE5iSUdsa0lGMHVZV1JrS0NCaWIzaGZabkp2Ym5RZ0tUdGNjbHh1WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwdWNHOXphWFJwYjI0dWVpQTlJQzB4TVRBZ0tpQnBaRHRjY2x4dUlDQWdJSEpsZEhWeWJpQmpjbUYwWlhOYklHbGtJRjA3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVc1cGRGSmxZMjl5WkhNZ0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQmpkWEp5Wlc1MFVtVmpiM0prU1dRZ1BTQXdPMXh5WEc0Z0lDQWdabTl5SUNnZ2RtRnlJR055WVhSbFNXUWdQU0F3T3lCamNtRjBaVWxrSUR3Z1kzSmhkR1Z6TG14bGJtZDBhRHNnWTNKaGRHVkpaQ3NySUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLQ0IyWVhJZ2NHOXpJRDBnTURzZ2NHOXpJRHdnUTI5dWMzUmhiblJ6TG5KbFkyOXlaSE5RWlhKRGNtRjBaVHNnY0c5ekt5c2dLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR055WldGMFpWSmxZMjl5WkNnZ1kzVnljbVZ1ZEZKbFkyOXlaRWxrTENCamNtRjBaVWxrTENCd2IzTWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGSmxZMjl5WkVsa0t5czdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVablZ1WTNScGIyNGdZM0psWVhSbFVtVmpiM0prSUNnZ2FXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2NtVmpiM0prSUQwZ2JtVjNJRkpsWTI5eVpDZ2dhV1FzSUdOeVlYUmxTV1FzSUhCdmN5QXBPMXh5WEc0Z0lDQWdZM0poZEdWeld5QmpjbUYwWlVsa0lGMHVZV1JrS0NCeVpXTnZjbVF1YldWemFDQXBPMXh5WEc0Z0lDQWdjbVZqYjNKa2N5NXdkWE5vS0NCeVpXTnZjbVFnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCblpYUlNaV052Y21STllYUmxjbWxoYkNBb0lITnlZeXdnYUdGelUyeGxaWFpsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCcGJXY2dQU0J1WlhjZ1NXMWhaMlVvS1R0Y2NseHVJQ0FnSUdsdFp5NWpjbTl6YzA5eWFXZHBiaUE5SUZ3aVFXNXZibmx0YjNWelhDSTdYSEpjYmlBZ0lDQnBiV2N1YzNKaklEMGdjM0pqSUQ4Z2MzSmpJRG9nSnljN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUdsdFoxZHBaSFJvSUQwZ05EQXdMRnh5WEc0Z0lDQWdJQ0FnSUdsdFowaGxhV2RvZENBOUlEUXdNQ3hjY2x4dUlDQWdJQ0FnSUNCdFlYQkRZVzUyWVhNZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0NBblkyRnVkbUZ6SnlBcE8xeHlYRzVjY2x4dUlDQWdJRzFoY0VOaGJuWmhjeTUzYVdSMGFDQTlJRzFoY0VOaGJuWmhjeTVvWldsbmFIUWdQU0EwTURBN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhSbGVIUjFjbVVnUFNCdVpYY2dWRWhTUlVVdVZHVjRkSFZ5WlNnZ2JXRndRMkZ1ZG1GeklDazdYSEpjYmlBZ0lDQjBaWGgwZFhKbExtMXBia1pwYkhSbGNpQTlJRlJJVWtWRkxreHBibVZoY2tacGJIUmxjanRjY2x4dVhISmNiaUFnSUNCcGJXY3ViMjVzYjJGa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHaGhjMU5zWldWMlpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnpiR1ZsZG1VZ1BTQnVaWGNnU1cxaFoyVW9LVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMnhsWlhabExuTnlZeUE5SUVOdmJuTjBZVzUwY3k1emJHVmxkbVZOWVhOclZHVjRkSFZ5WlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITnNaV1YyWlM1dmJteHZZV1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR04wZUNBOUlHMWhjRU5oYm5aaGN5NW5aWFJEYjI1MFpYaDBLQ0FuTW1RbklDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWRISmhibk5zWVhSbEtDQnBiV2RYYVdSMGFDQXZJRElzSUdsdFowaGxhV2RvZENBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMGVDNXliM1JoZEdVb0lFMWhkR2d1VUVrZ0x5QXlJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VkSEpoYm5Oc1lYUmxLQ0F0YVcxblYybGtkR2dnTHlBeUxDQXRhVzFuU0dWcFoyaDBJQzhnTWlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1I0TG1SeVlYZEpiV0ZuWlNnZ2FXMW5MQ0F4TXpBc0lERXpNQ3dnTVRNMUxDQXhNelVnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzVrY21GM1NXMWhaMlVvSUhOc1pXVjJaU3dnTUN3Z01Dd2dOREF3TENBME1EQWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSbGVIUjFjbVV1Ym1WbFpITlZjR1JoZEdVZ1BTQjBjblZsTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJqZEhnZ1BTQnRZWEJEWVc1MllYTXVaMlYwUTI5dWRHVjRkQ2dnSnpKa0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTnNZWFJsS0NCcGJXZFhhV1IwYUNBdklESXNJR2x0WjBobGFXZG9kQ0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMbkp2ZEdGMFpTZ2dUV0YwYUM1UVNTQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExuUnlZVzV6YkdGMFpTZ2dMV2x0WjFkcFpIUm9JQzhnTWl3Z0xXbHRaMGhsYVdkb2RDQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExtUnlZWGRKYldGblpTZ2dhVzFuTENBd0xDQXdMQ0EwTURBc0lEUXdNQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMGRYSmxMbTVsWldSelZYQmtZWFJsSUQwZ2RISjFaVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVHRjY2x4dVhISmNiaUFnSUNCMllYSWdjMnhsWlhabFRXRjBaWEpwWVd3Z1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUV4aGJXSmxjblJOWVhSbGNtbGhiQ2dnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dRMjl1YzNSaGJuUnpMbk5zWldWMlpVTnZiRzl5WEhKY2JseHlYRzRnSUNBZ2ZTQXBPMXh5WEc1Y2NseHVJQ0FnSUhaaGNpQnRZWFJsY21saGJITWdQU0JiWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3dzWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3dzWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3dzWEhKY2JpQWdJQ0FnSUNBZ0x5OGdkR1Y0ZEhWeVpWeHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVNGSkZSUzVOWlhOb1RHRnRZbVZ5ZEUxaGRHVnlhV0ZzS0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUF3ZUdabVptWm1aaXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Z3T2lCMFpYaDBkWEpsWEhKY2JpQWdJQ0FnSUNBZ2ZTQXBMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNMRnh5WEc0Z0lDQWdJQ0FnSUhOc1pXVjJaVTFoZEdWeWFXRnNYSEpjYmlBZ0lDQmRPMXh5WEc0Z0lDQWdjbVYwZFhKdUlHMWhkR1Z5YVdGc2N6dGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1ZWUkpURk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQjNhR1ZsYkVScGMzUmhibU5sSUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JQ0ZsSUNrZ1pTQTlJR1YyWlc1ME8xeHlYRzRnSUNBZ2RtRnlJSGNnUFNCbExuZG9aV1ZzUkdWc2RHRXNYSEpjYmlBZ0lDQWdJQ0FnWkNBOUlHVXVaR1YwWVdsc08xeHlYRzRnSUNBZ2FXWWdLQ0JrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JSGNnS1NCeVpYUjFjbTRnZHlBdklHUWdMeUEwTUNBcUlHUWdQaUF3SUQ4Z01TQTZJQzB4T3lBdkx5QlBjR1Z5WVZ4eVhHNGdJQ0FnSUNBZ0lHVnNjMlVnY21WMGRYSnVJQzFrSUM4Z016c2dMeThnUm1seVpXWnZlRHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnY21WMGRYSnVJSGNnTHlBeE1qQTdJQzh2SUVsRkwxTmhabUZ5YVM5RGFISnZiV1ZjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlIZG9aV1ZzUkdseVpXTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JQ0ZsSUNrZ1pTQTlJR1YyWlc1ME8xeHlYRzRnSUNBZ2NtVjBkWEp1SUNnZ1pTNWtaWFJoYVd3Z1BDQXdJQ2tnUHlBeElEb2dLQ0JsTG5kb1pXVnNSR1ZzZEdFZ1BpQXdJQ2tnUHlBeElEb2dMVEU3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnWTI5dmNtUnpSWEYxWVd4elFYQndjbTk0SUNnZ1kyOXZjbVF4TENCamIyOXlaRElzSUhKaGJtZGxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlBb0lFMWhkR2d1WVdKektDQmpiMjl5WkRFdWVDQXRJR052YjNKa01pNTRJQ2tnUEQwZ2NtRnVaMlVnS1NBbUppQW9JRTFoZEdndVlXSnpLQ0JqYjI5eVpERXVlU0F0SUdOdmIzSmtNaTU1SUNrZ1BEMGdjbUZ1WjJVZ0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQm1ZV1JsVDNWMElDZ2daV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9aV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUQwOVBTQXdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdkSEpoYm5OcGRHbHZia1YyWlc1MElEMGdaMlYwVkhKaGJuTnBkR2x2YmtWMlpXNTBLR1ZzWlcxbGJuUXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvZEhKaGJuTnBkR2x2YmtWMlpXNTBLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvZEhKaGJuTnBkR2x2YmtWMlpXNTBMQ0J2YmtaaFpHVkRiMjF3YkdWMFpTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ1BTQXdPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm1aMWJtTjBhVzl1SUdaaFpHVkpiaUFvSUdWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0dWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQTlQVDBnSnljZ2ZId2daV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUQwOVBTQW5NU2NwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMkpzYjJOckp6dGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lIWmhjaUIwY21GdWMybDBhVzl1UlhabGJuUWdQU0JuWlhSVWNtRnVjMmwwYVc5dVJYWmxiblFvWld4bGJXVnVkQ2s3WEhKY2JpQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oySnNiMk5ySnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6YVhScGIyNUZkbVZ1ZENrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtIUnlZVzV6YVhScGIyNUZkbVZ1ZEN3Z2IyNUdZV1JsUTI5dGNHeGxkR1VwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F4TzF4eVhHNGdJQ0FnSUNBZ0lIMHNJREUxS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCdmJrWmhaR1ZEYjIxd2JHVjBaU2dnWlNBc0lHVXlJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHVXVZM1Z5Y21WdWRGUmhjbWRsZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtHVXVkSGx3WlN3Z2IyNUdZV1JsUTI5dGNHeGxkR1VwTzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnWlM1amRYSnlaVzUwVkdGeVoyVjBMbk4wZVd4bExtOXdZV05wZEhrZ1BUMDlJQ2N3SnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pTNWpkWEp5Wlc1MFZHRnlaMlYwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaUzVqZFhKeVpXNTBWR0Z5WjJWMExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbllteHZZMnNuTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1WEhKY2JtWjFibU4wYVc5dUlHaHBaR1ZGYkdWdFpXNTBLQ0JsYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0E5SURBN1hISmNiaUFnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnphRzkzUld4bGJXVnVkQ2dnWld4bGJXVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQmxiR1Z0Wlc1MExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBbllteHZZMnNuTzF4eVhHNGdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNVHRjY2x4dVhISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJR2RsZEZSeVlXNXphWFJwYjI1RmRtVnVkQ0FvS1NCN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhRc1hISmNiaUFnSUNBZ0lDQWdkSEpoYm5OcGRHbHZibk1nUFNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNkMGNtRnVjMmwwYVc5dUp6b25kSEpoYm5OcGRHbHZibVZ1WkNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNkUFZISmhibk5wZEdsdmJpYzZKMjlVY21GdWMybDBhVzl1Ulc1a0p5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0owMXZlbFJ5WVc1emFYUnBiMjRuT2lkMGNtRnVjMmwwYVc5dVpXNWtKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdKMWRsWW10cGRGUnlZVzV6YVhScGIyNG5PaWQzWldKcmFYUlVjbUZ1YzJsMGFXOXVSVzVrSjF4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmx4eVhHNGdJQ0FnWm05eUtIUWdhVzRnZEhKaGJuTnBkR2x2Ym5NcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWW9JR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1ZiZEYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNtRnVjMmwwYVc5dWMxdDBYVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bWRXNWpkR2x2YmlCallXeGpkV3hoZEdWRFlXNTJZWE5UYVhwbElDZ3BJSHRjY2x4dVhISmNiaUFnSUNCallXNTJZWE5YYVdSMGFDQTlJRU52Ym5OMFlXNTBjeTVqWVc1MllYTlhhV1IwYUNBL0lFTnZibk4wWVc1MGN5NWpZVzUyWVhOWGFXUjBhQ0E2SUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1eWIyOTBRMjl1ZEdGcGJtVnlMbU5zYVdWdWRGZHBaSFJvTzF4eVhHNGdJQ0FnWTJGdWRtRnpTR1ZwWjJoMElEMGdRMjl1YzNSaGJuUnpMbU5oYm5aaGMwaGxhV2RvZENBL0lFTnZibk4wWVc1MGN5NWpZVzUyWVhOSVpXbG5hSFFnT2lCRGIyNXpkR0Z1ZEhNdVpXeGxiV1Z1ZEhNdWNtOXZkRU52Ym5SaGFXNWxjaTVqYkdsbGJuUklaV2xuYUhRN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2MyVjBRMkZ1ZG1GelJHbHRaVzV6YVc5dWN5QW9LU0I3WEhKY2JseHlYRzRnSUNBZ0x5OURiMjV6ZEdGdWRITXVaV3hsYldWdWRITXVjbTl2ZEVOdmJuUmhhVzVsY2k1emRIbHNaUzVvWldsbmFIUWdJQ0FnSUQwZ1kyRnVkbUZ6U0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NWpZVzUyWVhORGIyNTBZV2x1WlhJdWMzUjViR1V1YUdWcFoyaDBJRDBnWTJGdWRtRnpTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1cGJtWnZRMjl1ZEdGcGJtVnlMbk4wZVd4bExtaGxhV2RvZENBOUlHTmhiblpoYzBobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmlBZ0lDQkRiMjV6ZEdGdWRITXVaV3hsYldWdWRITXViRzloWkdsdVowTnZiblJoYVc1bGNpNXpkSGxzWlM1b1pXbG5hSFFnUFNCallXNTJZWE5JWldsbmFIUWdLeUFuY0hnbk8xeHlYRzVjY2x4dUlDQWdJQzh2UTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSXVjM1I1YkdVdWQybGtkR2dnSUNBZ0lEMGdZMkZ1ZG1GelYybGtkR2dnS3lBbmNIZ25PMXh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbVZzWlcxbGJuUnpMbU5oYm5aaGMwTnZiblJoYVc1bGNpNXpkSGxzWlM1M2FXUjBhQ0E5SUdOaGJuWmhjMWRwWkhSb0lDc2dKM0I0Snp0Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1cGJtWnZRMjl1ZEdGcGJtVnlMbk4wZVd4bExuZHBaSFJvSUQwZ1kyRnVkbUZ6VjJsa2RHZ2dLeUFuY0hnbk8xeHlYRzRnSUNBZ1EyOXVjM1JoYm5SekxtVnNaVzFsYm5SekxteHZZV1JwYm1kRGIyNTBZV2x1WlhJdWMzUjViR1V1ZDJsa2RHZ2dQU0JqWVc1MllYTlhhV1IwYUNBcklDZHdlQ2M3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYzJoMVptWnNaU2dnZGlBcElIc2dMeThnU205dVlYTWdVbUZ2Ym1rZ1UyOWhjbVZ6SUZOcGJIWmhJQzBnYUhSMGNEb3ZMMnB6Wm5KdmJXaGxiR3d1WTI5dEwyRnljbUY1TDNOb2RXWm1iR1VnVzNKbGRpNGdJekZkWEhKY2JseHlYRzRnSUNBZ1ptOXlJQ2dnZG1GeUlHb3NJSGdzSUdrZ1BTQjJMbXhsYm1kMGFEc2dhVHNnYWlBOUlIQmhjbk5sU1c1MEtDQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ2FTQXBMQ0I0SUQwZ2Rsc2dMUzFwSUYwc0lIWmJJR2tnWFNBOUlIWmJJR29nWFN3Z2Rsc2dhaUJkSUQwZ2VDQXBPMXh5WEc0Z0lDQWdjbVYwZFhKdUlIWTdYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNW1kVzVqZEdsdmJpQnBjMFoxYm1OMGFXOXVLQ0J2WW1vZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQnZZbW9nUFQwZ0oyWjFibU4wYVc5dUp5QjhmQ0JtWVd4elpUdGNjbHh1WEhKY2JuMWNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lFVllVRTlTVkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBTQWdVSFZpYkdsaklFMWxkR2h2WkhNZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVaWGh3YjNKMGN5NXBibWwwSUQwZ1puVnVZM1JwYjI0Z0tDQndZWEpoYlhNZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnUTI5dWMzUmhiblJ6TG1WNGRHVnVaQ2h3WVhKaGJYTXBPMXh5WEc1Y2NseHVJQ0FnSUM4dklHWmxZWFIxY21VZ2RHVnpkRnh5WEc0Z0lDQWdhV1lnS0NBaFRXOWtaWEp1YVhweUxuZGxZbWRzSUNrZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnZDJsdVpHOTNMbVJsZG1salpWQnBlR1ZzVW1GMGFXOGdJVDA5SUhWdVpHVm1hVzVsWkNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pIQnlJRDBnZDJsdVpHOTNMbVJsZG1salpWQnBlR1ZzVW1GMGFXODdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaSEJ5SUQwZ01UdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0FoUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG5KdmIzUkRiMjUwWVdsdVpYSWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb0lDZGpjbUYwWldScFoyZGxjaTVxY3lBdElFbHVhWFFnWm1GcGJHVmtJRG9nWTJGdUlHNXZkQ0JtYVc1a0lISnZiM1FnWTI5dWRHRnBibVZ5SUdWc1pXMWxiblF1SnlBcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0FoUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG1OaGJuWmhjME52Ym5SaGFXNWxjaUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVsY25KdmNpZ2dKMk55WVhSbFpHbG5aMlZ5TG1weklDMGdTVzVwZENCbVlXbHNaV1FnT2lCallXNGdibTkwSUdacGJtUWdZMkZ1ZG1GeklHTnZiblJoYVc1bGNpQmxiR1Z0Wlc1MExpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ0lVTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NXNiMkZrYVc1blEyOXVkR0ZwYm1WeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCc2IyRmthVzVuSUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnSVVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1cGJtWnZRMjl1ZEdGcGJtVnlJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnBibVp2SUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHTmhiR04xYkdGMFpVTmhiblpoYzFOcGVtVW9LVHRjY2x4dVhISmNiaUFnSUNCcGJtbDBVMk5sYm1Vb0tUdGNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkSE11YzJWc1pXTjBVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JwWkNBcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbGtJRHdnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2NtVnpaWFJUYUc5M2JsSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdsa0lENGdiRzloWkdWa1VtVmpiM0prY3lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNCc2IyRmtaV1JTWldOdmNtUnpJQzBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCelpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdsa08xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdWMzUmhjblJTWlc1a1pYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdaRzlTWlc1a1pYSWdQU0IwY25WbE8xeHlYRzRnSUNBZ1lXNXBiV0YwWlNncE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdWMzUnZjRkpsYm1SbGNpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQmtiMUpsYm1SbGNpQTlJR1poYkhObE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVpXNWhZbXhsVUc5emRIQnliMk5sYzNOcGJtY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdRMjl1YzNSaGJuUnpMbkJ2YzNSd2NtOWpaWE56YVc1bklEMGdkSEoxWlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG1ScGMyRmliR1ZRYjNOMGNISnZZMlZ6YzJsdVp5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQkRiMjV6ZEdGdWRITXVjRzl6ZEhCeWIyTmxjM05wYm1jZ1BTQm1ZV3h6WlR0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMGdJRkIxWW14cFl5Qm5aWFIwWlhKeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibVY0Y0c5eWRITXVaMlYwUTJGdWRtRnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRITXVaMlYwVW1WamIzSmtjMFJoZEdGTWFYTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnlaV052Y21SelJHRjBZVXhwYzNRN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owY3k1blpYUk1iMkZrWldSU1pXTnZjbVJ6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUJzYjJGa1pXUlNaV052Y21Sek8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdVoyVjBVMlZzWldOMFpXUlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjA3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQU0FnVFdWMGFHOWtjeUJoWTJObGMzTnZjbk1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVpYaHdiM0owY3k1c2IyRmtVbVZqYjNKa2N5QTlJR3h2WVdSU1pXTnZjbVJ6TzF4eVhHNWxlSEJ2Y25SekxuVnViRzloWkZKbFkyOXlaSE1nUFNCMWJteHZZV1JTWldOdmNtUnpPMXh5WEc1bGVIQnZjblJ6TG5KbGMyVjBVMmh2ZDI1U1pXTnZjbVFnUFNCeVpYTmxkRk5vYjNkdVVtVmpiM0prTzF4eVhHNWxlSEJ2Y25SekxuTm9kV1ptYkdWU1pXTnZjbVJ6SUQwZ2MyaDFabVpzWlZKbFkyOXlaSE03WEhKY2JtVjRjRzl5ZEhNdVpteHBjRk5sYkdWamRHVmtVbVZqYjNKa0lEMGdabXhwY0ZObGJHVmpkR1ZrVW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG1ac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUWdQU0JtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa08xeHlYRzVsZUhCdmNuUnpMbk5sYkdWamRGQnlaWFpTWldOdmNtUWdQU0J6Wld4bFkzUlFjbVYyVW1WamIzSmtPMXh5WEc1bGVIQnZjblJ6TG5ObGJHVmpkRTVsZUhSU1pXTnZjbVFnUFNCelpXeGxZM1JPWlhoMFVtVmpiM0prTzF4eVhHNWxlSEJ2Y25SekxuTm9iM2RNYjJGa2FXNW5JRDBnYzJodmQweHZZV1JwYm1jN1hISmNibVY0Y0c5eWRITXVhR2xrWlV4dllXUnBibWNnUFNCb2FXUmxURzloWkdsdVp6dGNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHlYRzQ5SUNBZ0lDQWdJQ0FnSUNBZ1VGVkNURWxESUVGUVNTQWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdWNGNHOXlkSE03SWwxOSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKlxyXG4gKiBGdWxsLXNjcmVlbiB0ZXh0dXJlZCBxdWFkIHNoYWRlclxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkNvcHlTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJvcGFjaXR5XCI6ICB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG9wYWNpdHk7XCIsXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCB0ZXhlbCA9IHRleHR1cmUyRCggdERpZmZ1c2UsIHZVdiApO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbmRyZXdiZXJnIC8gaHR0cDovL2FuZHJld2JlcmcuY29tL1xyXG4gKlxyXG4gKiBEZXB0aCBvZiBGaWVsZFxyXG4gKiAtIHBvcnRlZCBmcm9tXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5Eb0ZTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwidERlcHRoXCI6ICAgICAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwiem5lYXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInpmYXJcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMTAwMC4wIH0sXHJcblx0XHRcdFwic2l6ZVwiOiAgICAgICAgIHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDUxMiwgNTEyICkgfSxcclxuXHRcdFx0XCJ0ZXh0ZWxcIjpcdFx0eyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMS81MTIsIDEvNTEyKX0sXHJcblx0XHRcdFwiZm9jYWxEZXB0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIwMC4wIH0sXHJcblx0XHRcdFwiZm9jYWxMZW5ndGhcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyOC4wIH0sXHJcblx0XHRcdFwiZnN0b3BcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuOCB9LFxyXG5cdFx0XHRcInNob3dGb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJtYW51YWxkb2ZcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwibmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwibmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIuMCB9LFxyXG5cdFx0XHRcImZkb2ZzdGFydFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcImZkb2ZkaXN0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAzLjAgfSxcclxuXHRcdFx0XCJDb0NcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMyB9LFxyXG5cdFx0XHRcInZpZ25ldHRpbmdcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwidmlnbm91dFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4zIH0sXHJcblx0XHRcdFwidmlnbmluXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAgfSxcclxuXHRcdFx0XCJ2aWduZmFkZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjIuMCB9LFxyXG5cdFx0XHRcImF1dG9mb2N1c1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJmb2N1c1wiOiAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMC41LCAwLjUgKSB9LFxyXG5cdFx0XHRcIm1heGJsdXJcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcInRocmVzaG9sZFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuOCB9LFxyXG5cdFx0XHRcImdhaW5cIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS43IH0sXHJcblx0XHRcdFwiYmlhc1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjUgfSxcclxuXHRcdFx0XCJmcmluZ2VcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNyB9LFxyXG5cdFx0XHRcIm5vaXNlXCI6XHRcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwibmFtb3VudFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wMDAxIH0sXHJcblx0XHRcdFwiZGVwdGhibHVyXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcImRic2l6ZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4yNX1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidlV2ID0gdXY7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHRcdFx0XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIixcclxuXHRcdFx0XCIjZGVmaW5lIFBJICAzLjE0MTU5MjY1XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHQvL3VuaWZvcm0gdmFyaWFibGVzIGZyb20gZXh0ZXJuYWwgc2NyaXB0XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREZXB0aDtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgc2l6ZTtcIiwgLy8gdGV4dHVyZSB3aWR0aCBhbmQgaGVpZ2h0XHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHRleGVsO1wiLCAvLyB0ZXh0ZWwgc2l6ZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsRGVwdGg7XCIsICAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnN0b3A7XCIsIC8vZi1zdG9wIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHNob3dGb2N1cztcIiwgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcblx0XHRcdC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB6bmVhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpmYXI7XCIsIC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0Ly91c2VyIHZhcmlhYmxlcyBub3cgcGFzc2VkIGFzIHVuaWZvcm1zXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBtYW51YWxkb2Y7XCIsIC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZnN0YXJ0O1wiLCAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5kb2ZkaXN0O1wiLCAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZnN0YXJ0O1wiLCAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZmRvZmRpc3Q7XCIsIC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2VcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBDb0M7XCIsLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSlcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIHZpZ25ldHRpbmc7XCIsIC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbm91dDtcIiwgLy92aWduZXR0aW5nIG91dGVyIGJvcmRlclxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbmluO1wiLCAvL3ZpZ25ldHRpbmcgaW5uZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduZmFkZTtcIiwgLy9mLXN0b3BzIHRpbGwgdmlnbmV0ZSBmYWRlc1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgYXV0b2ZvY3VzO1wiLCAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBmb2N1cztcIiwgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBtYXhibHVyO1wiLCAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHRocmVzaG9sZDtcIiwgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZ2FpbjtcIiwgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBiaWFzO1wiLCAvL2Jva2VoIGVkZ2UgYmlhc1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZnJpbmdlO1wiLCAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBub2lzZTtcIiwgLy91c2Ugbm9pc2UgaW5zdGVhZCBvZiBwYXR0ZXJuIGZvciBzYW1wbGUgZGl0aGVyaW5nXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuYW1vdW50O1wiLCAvL2RpdGhlciBhbW91bnRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIGRlcHRoYmx1cjtcIiwgLy9ibHVyIHRoZSBkZXB0aCBidWZmZXI/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBkYnNpemU7XCIsIC8vZGVwdGhibHVyc2l6ZVxyXG5cclxuXHRcdFx0Ly8gc2FtcGxlcyBhbmQgcmluZ3MgbmVlZCB0byBiZSBjb25zdGFudHMuIG5vIGR5bmFtaWMgbG9vcCBjb3VudGVycyBpbiBPcGVuR0wgRVNcclxuXHRcdFx0Ly8gQ2FuIHNoYWRlciBiZSBicm9rZW4gaW50byAyIHBhc3M/IC4uLiBcclxuXHRcdFx0XCJpbnQgc2FtcGxlcyA9IDM7XCIsIC8vc2FtcGxlcyBvbiB0aGUgZmlyc3QgcmluZ1xyXG5cdFx0XHRcImNvbnN0IGludCByaW5ncyA9IDM7XCIsIC8vcmluZyBjb3VudFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0bmV4dCBwYXJ0IGlzIGV4cGVyaW1lbnRhbFxyXG5cdFx0XHRub3QgbG9va2luZyBnb29kIHdpdGggc21hbGwgc2FtcGxlIGFuZCByaW5nIGNvdW50XHJcblx0XHRcdGxvb2tzIG9rYXkgc3RhcnRpbmcgZnJvbSBzYW1wbGVzID0gNCwgcmluZ3MgPSA0XHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHRcImJvb2wgcGVudGFnb24gPSBmYWxzZTtcIiwgLy91c2UgcGVudGFnb24gYXMgYm9rZWggc2hhcGU/XHJcblx0XHRcdFwiZmxvYXQgZmVhdGhlciA9IDAuNDtcIiwgLy9wZW50YWdvbiBzaGFwZSBmZWF0aGVyXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0Ly8gUkdCQSBkZXB0aFxyXG5cclxuXHRcdFx0XCJmbG9hdCB1bnBhY2tEZXB0aCggY29uc3QgaW4gdmVjNCByZ2JhX2RlcHRoICkge1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbnN0IHZlYzQgYml0X3NoaWZ0ID0gdmVjNCggMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gKCAyNTYuMCAqIDI1Ni4wICksIDEuMCAvIDI1Ni4wLCAxLjAgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGRlcHRoID0gZG90KCByZ2JhX2RlcHRoLCBiaXRfc2hpZnQgKTtcIixcclxuXHRcdFx0XHRcInJldHVybiBkZXB0aDtcIixcclxuXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHJcblx0XHRcdFwiZmxvYXQgcGVudGEodmVjMiBjb29yZHMpXCIsIC8vcGVudGFnb25hbCBzaGFwZVxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IHNjYWxlID0gZmxvYXQocmluZ3MpIC0gMS4zO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMwID0gdmVjNCggMS4wLCAgICAgICAgIDAuMCwgICAgICAgICAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMxID0gdmVjNCggMC4zMDkwMTY5OTQsIDAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMyID0gdmVjNCgtMC44MDkwMTY5OTQsIDAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFMzID0gdmVjNCgtMC44MDkwMTY5OTQsLTAuNTg3Nzg1MjUyLCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM0ID0gdmVjNCggMC4zMDkwMTY5OTQsLTAuOTUxMDU2NTE2LCAwLjAsICAxLjApO1wiLFxyXG5cdFx0XHRcdFwidmVjNCAgSFM1ID0gdmVjNCggMC4wICAgICAgICAsMC4wICAgICAgICAgLCAxLjAsICAxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgIG9uZSA9IHZlYzQoIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgUCA9IHZlYzQoKGNvb3JkcyksdmVjMihzY2FsZSwgc2NhbGUpKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IGRpc3QgPSB2ZWM0KDAuMCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBpbm9yb3V0ID0gLTQuMDtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTMCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gZG90KCBQLCBIUzEgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueiA9IGRvdCggUCwgSFMyICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LncgPSBkb3QoIFAsIEhTMyApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlub3JvdXQgKz0gZG90KCBkaXN0LCBvbmUgKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0LnggPSBkb3QoIFAsIEhTNCApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC55ID0gSFM1LncgLSBhYnMoIFAueiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKCAtZmVhdGhlciwgZmVhdGhlciwgZGlzdCApO1wiLFxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkaXN0Lng7XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKCBpbm9yb3V0LCAwLjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgYmRlcHRoKHZlYzIgY29vcmRzKSAvL2JsdXJyaW5nIGRlcHRoXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZCA9IDAuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IGtlcm5lbFs5XTtcIixcclxuXHRcdFx0XHRcInZlYzIgb2Zmc2V0WzldO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzIgd2ggPSB2ZWMyKHRleGVsLngsIHRleGVsLnkpICogZGJzaXplO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFswXSA9IHZlYzIoLXdoLngsLXdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzFdID0gdmVjMiggMC4wLCAtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMl0gPSB2ZWMyKCB3aC54IC13aC55KTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbM10gPSB2ZWMyKC13aC54LCAgMC4wKTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs0XSA9IHZlYzIoIDAuMCwgICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzVdID0gdmVjMiggd2gueCwgIDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzZdID0gdmVjMigtd2gueCwgd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbN10gPSB2ZWMyKCAwLjAsICB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs4XSA9IHZlYzIoIHdoLngsIHdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImtlcm5lbFswXSA9IDEuMC8xNi4wOyAgIGtlcm5lbFsxXSA9IDIuMC8xNi4wOyAgIGtlcm5lbFsyXSA9IDEuMC8xNi4wO1wiLFxyXG5cdFx0XHRcdFwia2VybmVsWzNdID0gMi4wLzE2LjA7ICAga2VybmVsWzRdID0gNC4wLzE2LjA7ICAga2VybmVsWzVdID0gMi4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbNl0gPSAxLjAvMTYuMDsgICBrZXJuZWxbN10gPSAyLjAvMTYuMDsgICBrZXJuZWxbOF0gPSAxLjAvMTYuMDtcIixcclxuXHJcblxyXG5cdFx0XHRcdFwiZm9yKCBpbnQgaT0wOyBpPDk7IGkrKyApXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IHRtcCA9IHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsIGNvb3JkcyArIG9mZnNldFtpXSkpO1wiLFxyXG5cdFx0XHRcdFx0XCJkICs9IHRtcCAqIGtlcm5lbFtpXTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gZDtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJ2ZWMzIGNvbG9yKHZlYzIgY29vcmRzLGZsb2F0IGJsdXIpXCIsIC8vcHJvY2Vzc2luZyB0aGUgc2FtcGxlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwidmVjMyBjb2wgPSB2ZWMzKDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29sLnIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjAsMS4wKSp0ZXhlbCpmcmluZ2UqYmx1cikucjtcIixcclxuXHRcdFx0XHRcImNvbC5nID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoLTAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5nO1wiLFxyXG5cdFx0XHRcdFwiY29sLmIgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigwLjg2NiwtMC41KSp0ZXhlbCpmcmluZ2UqYmx1cikuYjtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGx1bWNvZWZmID0gdmVjMygwLjI5OSwwLjU4NywwLjExNCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW0gPSBkb3QoY29sLnJnYiwgbHVtY29lZmYpO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgdGhyZXNoID0gbWF4KChsdW0tdGhyZXNob2xkKSpnYWluLCAwLjApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNvbCttaXgodmVjMygwLjApLGNvbCx0aHJlc2gqYmx1cik7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2ZWMyIHJhbmQodmVjMiBjb29yZCkgLy9nZW5lcmF0aW5nIG5vaXNlL3BhdHRlcm4gdGV4dHVyZSBmb3IgZGl0aGVyaW5nXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbm9pc2VYID0gKChmcmFjdCgxLjAtY29vcmQucyooc2l6ZS54LzIuMCkpKjAuMjUpKyhmcmFjdChjb29yZC50KihzaXplLnkvMi4wKSkqMC43NSkpKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVkgPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC43NSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjI1KSkqMi4wLTEuMDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAobm9pc2UpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWCA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKSkgKiA0Mzc1OC41NDUzKSwwLjAsMS4wKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFx0XCJub2lzZVkgPSBjbGFtcChmcmFjdChzaW4oZG90KGNvb3JkICx2ZWMyKDEyLjk4OTgsNzguMjMzKSoyLjApKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gdmVjMihub2lzZVgsbm9pc2VZKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzMgZGVidWdGb2N1cyh2ZWMzIGNvbCwgZmxvYXQgYmx1ciwgZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZWRnZSA9IDAuMDAyKmRlcHRoOyAvL2Rpc3RhbmNlIGJhc2VkIGVkZ2Ugc21vb3RoaW5nXCIsXHJcblx0XHRcdFx0XCJmbG9hdCBtID0gY2xhbXAoc21vb3Roc3RlcCgwLjAsZWRnZSxibHVyKSwwLjAsMS4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGUgPSBjbGFtcChzbW9vdGhzdGVwKDEuMC1lZGdlLDEuMCxibHVyKSwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wgPSBtaXgoY29sLHZlYzMoMS4wLDAuNSwwLjApLCgxLjAtbSkqMC42KTtcIixcclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygwLjAsMC41LDEuMCksKCgxLjAtZSktKDEuMC1tKSkqMC4yKTtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgbGluZWFyaXplKGZsb2F0IGRlcHRoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcInJldHVybiAtemZhciAqIHpuZWFyIC8gKGRlcHRoICogKHpmYXIgLSB6bmVhcikgLSB6ZmFyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IHZpZ25ldHRlKClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkaXN0ID0gZGlzdGFuY2UodlV2LCB2ZWMyKDAuNSwwLjUpKTtcIixcclxuXHRcdFx0XHRcImRpc3QgPSBzbW9vdGhzdGVwKHZpZ25vdXQrKGZzdG9wL3ZpZ25mYWRlKSwgdmlnbmluKyhmc3RvcC92aWduZmFkZSksIGRpc3QpO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGNsYW1wKGRpc3QsMC4wLDEuMCk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHQvL3NjZW5lIGRlcHRoIGNhbGN1bGF0aW9uXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCx2VXYpKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKGRlcHRoYmx1cilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZGVwdGggPSBsaW5lYXJpemUoYmRlcHRoKHZVdikpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2ZvY2FsIHBsYW5lIGNhbGN1bGF0aW9uXCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZkRlcHRoID0gZm9jYWxEZXB0aDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoYXV0b2ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmRGVwdGggPSBsaW5lYXJpemUodW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCxmb2N1cykpKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0Ly9kb2YgYmx1ciBmYWN0b3IgY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBibHVyID0gMC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChtYW51YWxkb2YpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSBkZXB0aC1mRGVwdGg7XCIsIC8vZm9jYWwgcGxhbmVcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChhLWZkb2ZzdGFydCkvZmRvZmRpc3Q7XCIsIC8vZmFyIERvRlxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKC1hLW5kb2ZzdGFydCkvbmRvZmRpc3Q7XCIsIC8vbmVhciBEb2ZcclxuXHRcdFx0XHRcdFwiYmx1ciA9IChhPjAuMCk/YjpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgZiA9IGZvY2FsTGVuZ3RoO1wiLCAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBkID0gZkRlcHRoKjEwMDAuMDtcIiwgLy9mb2NhbCBwbGFuZSBpbiBtbVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBvID0gZGVwdGgqMTAwMC4wO1wiLCAvL2RlcHRoIGluIG1tXHJcblxyXG5cdFx0XHRcdFx0XCJmbG9hdCBhID0gKG8qZikvKG8tZik7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGIgPSAoZCpmKS8oZC1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYyA9IChkLWYpLyhkKmZzdG9wKkNvQyk7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJibHVyID0gYWJzKGEtYikqYztcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJibHVyID0gY2xhbXAoYmx1ciwwLjAsMS4wKTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgcGF0dGVybiBmb3IgZGl0ZXJpbmdcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIG5vaXNlID0gcmFuZCh2VXYpKm5hbW91bnQqYmx1cjtcIixcclxuXHJcblx0XHRcdFx0Ly8gZ2V0dGluZyBibHVyIHggYW5kIHkgc3RlcCBmYWN0b3JcclxuXHJcblx0XHRcdFx0XCJmbG9hdCB3ID0gKDEuMC9zaXplLngpKmJsdXIqbWF4Ymx1citub2lzZS54O1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgaCA9ICgxLjAvc2l6ZS55KSpibHVyKm1heGJsdXIrbm9pc2UueTtcIixcclxuXHJcblx0XHRcdFx0Ly8gY2FsY3VsYXRpb24gb2YgZmluYWwgY29sb3JcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZihibHVyIDwgMC4wNSlcIiwgLy9zb21lIG9wdGltaXphdGlvbiB0aGluZ3lcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcImVsc2VcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgcyA9IDEuMDtcIixcclxuXHJcblx0XHRcdFx0XHRcImZvciAoaW50IGkgPSAxOyBpIDw9IHJpbmdzOyBpICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XCJmbG9hdCByaW5nc2FtcGxlcyA9IGZsb2F0KGkgKiBzYW1wbGVzKTtcIixcclxuXHJcblx0XHRcdFx0XHRcdFwiaWYoaSA9PSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDMgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAyKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDYgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcImVsc2UgaWYoaSA9PSAzKVwiLFxyXG5cdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcImZvciAoaW50IGogPSAwIDsgaiA8IDkgOyBqICs9IDEpXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHN0ZXAgPSBQSSoyLjAgLyBmbG9hdChyaW5nc2FtcGxlcyk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHB3ID0gKGNvcyhmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHBoID0gKHNpbihmbG9hdChqKSpzdGVwKSpmbG9hdChpKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImZsb2F0IHAgPSAxLjA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImlmIChwZW50YWdvbilcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInAgPSBwZW50YSh2ZWMyKHB3LHBoKSk7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiY29sICs9IGNvbG9yKHZVdiArIHZlYzIocHcqdyxwaCpoKSxibHVyKSptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwicyArPSAxLjAqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcImNvbCAvPSBzO1wiLCAvL2RpdmlkZSBieSBzYW1wbGUgY291bnRcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJpZiAoc2hvd0ZvY3VzKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSBkZWJ1Z0ZvY3VzKGNvbCwgYmx1ciwgZGVwdGgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmICh2aWduZXR0aW5nKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgKj0gdmlnbmV0dGUoKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IucmdiID0gY29sO1wiLFxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XCIsXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFxyXG5cdFRIUkVFLkVmZmVjdENvbXBvc2VyID0gZnVuY3Rpb24gKCByZW5kZXJlciwgcmVuZGVyVGFyZ2V0ICkge1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHJcblx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0dmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMTtcclxuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xyXG5cdFx0XHR2YXIgcGFyYW1ldGVycyA9IHsgbWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgc3RlbmNpbEJ1ZmZlcjogZmFsc2UgfTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggd2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdHRoaXMucGFzc2VzID0gW107XHJcblxyXG5cdFx0aWYgKCBUSFJFRS5Db3B5U2hhZGVyID09PSB1bmRlZmluZWQgKVxyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBcIlRIUkVFLkVmZmVjdENvbXBvc2VyIHJlbGllcyBvbiBUSFJFRS5Db3B5U2hhZGVyXCIgKTtcclxuXHJcblx0XHR0aGlzLmNvcHlQYXNzID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkNvcHlTaGFkZXIgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHN3YXBCdWZmZXJzOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciB0bXAgPSB0aGlzLnJlYWRCdWZmZXI7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMud3JpdGVCdWZmZXI7XHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0bXA7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRQYXNzOiBmdW5jdGlvbiAoIHBhc3MgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5wdXNoKCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRpbnNlcnRQYXNzOiBmdW5jdGlvbiAoIHBhc3MsIGluZGV4ICkge1xyXG5cclxuXHRcdFx0dGhpcy5wYXNzZXMuc3BsaWNlKCBpbmRleCwgMCwgcGFzcyApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdFx0dmFyIG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdHZhciBwYXNzLCBpLCBpbCA9IHRoaXMucGFzc2VzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaWw7IGkgKysgKSB7XHJcblxyXG5cdFx0XHRcdHBhc3MgPSB0aGlzLnBhc3Nlc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRpZiAoICFwYXNzLmVuYWJsZWQgKSBjb250aW51ZTtcclxuXHJcblx0XHRcdFx0cGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBwYXNzLm5lZWRzU3dhcCApIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1hc2tBY3RpdmUgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuY29weVBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMuc3dhcEJ1ZmZlcnMoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MgaW5zdGFuY2VvZiBUSFJFRS5NYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLkNsZWFyTWFza1Bhc3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZXNldDogZnVuY3Rpb24gKCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRTaXplOiBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XHJcblxyXG5cdFx0XHR2YXIgcmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XHJcblxyXG5cdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aWR0aDtcclxuXHRcdFx0cmVuZGVyVGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcclxuXHJcblx0XHRcdHRoaXMucmVzZXQoIHJlbmRlclRhcmdldCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqIEBhdXRob3IgZGF2aWRlZGMgLyBodHRwOi8vd3d3LnNrZXRjaHBhdGNoLm5ldC9cclxuICpcclxuICogTlZJRElBIEZYQUEgYnkgVGltb3RoeSBMb3R0ZXNcclxuICogaHR0cDovL3RpbW90aHlsb3R0ZXMuYmxvZ3Nwb3QuY29tLzIwMTEvMDYvZnhhYTMtc291cmNlLXJlbGVhc2VkLmh0bWxcclxuICogLSBXZWJHTCBwb3J0IGJ5IEBzdXBlcmVnZ2JlcnRcclxuICogaHR0cDovL3d3dy5nbGdlLm9yZy9kZW1vcy9meGFhL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuRlhBQVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgIHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwicmVzb2x1dGlvblwiOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxIC8gMTAyNCwgMSAvIDUxMiApICB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1wiLFxyXG5cclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvMTI4LjApXCIsXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wLzguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFwiLFxyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMyByZ2JOVyA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggLTEuMCwgLTEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JORSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYlNXID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIDEuMCwgMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0IHJnYmFNICA9IHRleHR1cmUyRCggdERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiApO1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JNICA9IHJnYmFNLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgbHVtYSA9IHZlYzMoIDAuMjk5LCAwLjU4NywgMC4xMTQgKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTlcgPSBkb3QoIHJnYk5XLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTkUgPSBkb3QoIHJnYk5FLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU1cgPSBkb3QoIHJnYlNXLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hU0UgPSBkb3QoIHJnYlNFLCBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTSAgPSBkb3QoIHJnYk0sICBsdW1hICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWluID0gbWluKCBsdW1hTSwgbWluKCBtaW4oIGx1bWFOVywgbHVtYU5FICksIG1pbiggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBsdW1hTWF4ID0gbWF4KCBsdW1hTSwgbWF4KCBtYXgoIGx1bWFOVywgbHVtYU5FKSAsIG1heCggbHVtYVNXLCBsdW1hU0UgKSApICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiBkaXI7XCIsXHJcblx0XHRcdFx0XCJkaXIueCA9IC0oKGx1bWFOVyArIGx1bWFORSkgLSAobHVtYVNXICsgbHVtYVNFKSk7XCIsXHJcblx0XHRcdFx0XCJkaXIueSA9ICAoKGx1bWFOVyArIGx1bWFTVykgLSAobHVtYU5FICsgbHVtYVNFKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgZGlyUmVkdWNlID0gbWF4KCAoIGx1bWFOVyArIGx1bWFORSArIGx1bWFTVyArIGx1bWFTRSApICogKCAwLjI1ICogRlhBQV9SRURVQ0VfTVVMICksIEZYQUFfUkVEVUNFX01JTiApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHJjcERpck1pbiA9IDEuMCAvICggbWluKCBhYnMoIGRpci54ICksIGFicyggZGlyLnkgKSApICsgZGlyUmVkdWNlICk7XCIsXHJcblx0XHRcdFx0XCJkaXIgPSBtaW4oIHZlYzIoIEZYQUFfU1BBTl9NQVgsICBGWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdCAgXCJtYXgoIHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSxcIixcclxuXHRcdFx0XHRcdFx0XHRcImRpciAqIHJjcERpck1pbikpICogcmVzb2x1dGlvbjtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiQSA9ICgxLjAvMi4wKSAqIChcIixcclxuXHQgICAgICAgIFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgxLjAvMy4wIC0gMC41KSkgK1wiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMi4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwidmVjNCByZ2JCID0gcmdiQSAqICgxLjAvMi4wKSArICgxLjAvNC4wKSAqIChcIixcclxuXHRcdFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDAuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0ICAgICAgXHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMy4wLzMuMCAtIDAuNSkpKTtcIixcclxuXHQgICAgXHRcdFwiZmxvYXQgbHVtYUIgPSBkb3QocmdiQiwgdmVjNChsdW1hLCAwLjApKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoICggbHVtYUIgPCBsdW1hTWluICkgfHwgKCBsdW1hQiA+IGx1bWFNYXggKSApIHtcIixcclxuXHJcblx0XHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IHJnYkE7XCIsXHJcblxyXG5cdFx0XHRcdFwifSBlbHNlIHtcIixcclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQjtcIixcclxuXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG5cclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuTWFza1Bhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmludmVyc2UgPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Ly8gZG9uJ3QgdXBkYXRlIGNvbG9yIG9yIGRlcHRoXHJcblxyXG5cdFx0XHRjb250ZXh0LmNvbG9yTWFzayggZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIGZhbHNlICk7XHJcblxyXG5cdFx0XHQvLyBzZXQgdXAgc3RlbmNpbFxyXG5cclxuXHRcdFx0dmFyIHdyaXRlVmFsdWUsIGNsZWFyVmFsdWU7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuaW52ZXJzZSApIHtcclxuXHJcblx0XHRcdFx0d3JpdGVWYWx1ZSA9IDA7XHJcblx0XHRcdFx0Y2xlYXJWYWx1ZSA9IDE7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMTtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnRleHQuZW5hYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSApO1xyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkFMV0FZUywgd3JpdGVWYWx1ZSwgMHhmZmZmZmZmZiApO1xyXG5cdFx0XHRjb250ZXh0LmNsZWFyU3RlbmNpbCggY2xlYXJWYWx1ZSApO1xyXG5cclxuXHRcdFx0Ly8gZHJhdyBpbnRvIHRoZSBzdGVuY2lsIGJ1ZmZlclxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0Ly8gcmUtZW5hYmxlIHVwZGF0ZSBvZiBjb2xvciBhbmQgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlICk7XHJcblx0XHRcdGNvbnRleHQuZGVwdGhNYXNrKCB0cnVlICk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHJlbmRlciB3aGVyZSBzdGVuY2lsIGlzIHNldCB0byAxXHJcblxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7ICAvLyBkcmF3IGlmID09IDFcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cclxuXHRUSFJFRS5DbGVhck1hc2tQYXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0Y29udGV4dC5kaXNhYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcbn07IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MgPSBmdW5jdGlvbiAoIHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEgKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblxyXG5cdFx0dGhpcy5vdmVycmlkZU1hdGVyaWFsID0gb3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHR0aGlzLmNsZWFyQ29sb3IgPSBjbGVhckNvbG9yO1xyXG5cdFx0dGhpcy5jbGVhckFscGhhID0gKCBjbGVhckFscGhhICE9PSB1bmRlZmluZWQgKSA/IGNsZWFyQWxwaGEgOiAxO1xyXG5cclxuXHRcdHRoaXMub2xkQ2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xyXG5cdFx0dGhpcy5vbGRDbGVhckFscGhhID0gMTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5SZW5kZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IHRoaXMub3ZlcnJpZGVNYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5jbGVhckNvbG9yICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQ29sb3IuY29weSggcmVuZGVyZXIuZ2V0Q2xlYXJDb2xvcigpICk7XHJcblx0XHRcdFx0dGhpcy5vbGRDbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLmNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMub2xkQ2xlYXJDb2xvciwgdGhpcy5vbGRDbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHRcclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzID0gZnVuY3Rpb24gKCBzaGFkZXIsIHRleHR1cmVJRCApIHtcclxuXHJcblx0XHR0aGlzLnRleHR1cmVJRCA9ICggdGV4dHVyZUlEICE9PSB1bmRlZmluZWQgKSA/IHRleHR1cmVJRCA6IFwidERpZmZ1c2VcIjtcclxuXHJcblx0XHR0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG5cdFx0dGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG5cclxuXHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlclxyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtMSwgMSwgMSwgLTEsIDAsIDEgKTtcclxuXHRcdHRoaXMuc2NlbmUgID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG5cdFx0dGhpcy5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAyLCAyICksIG51bGwgKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLnF1YWQgKTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuU2hhZGVyUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0gKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0udmFsdWUgPSByZWFkQnVmZmVyO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5yZW5kZXJUb1NjcmVlbiApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcbn07XHJcbiJdfQ==
