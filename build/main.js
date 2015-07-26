(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cratedigger = require('./cratedigger');

var data = JSON.parse('[{"title":"So What","artist":"Miles Davis","cover":"http://cdn-images.deezer.com/images/cover/63bf5fe5f15f69bfeb097139fc34f3d7/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBYBNV14607703ACA","hasSleeve":false},{"title":"Stolen Moments","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOCNMPH12B0B8064AA","hasSleeve":false},{"title":"Theme for Maxine","artist":"Woody Shaw","cover":"http://cdn-images.deezer.com/images/cover/bb937f1e1d57f7542a64c74b13c47900/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMLSGW131343841A7","hasSleeve":false},{"title":"Moanin\' Mambo","artist":"Mingus Big Band","cover":"http://cdn-images.deezer.com/images/cover/dcd1565cf3dd663f7b7492e4da378855/400x400-000000-80-0-0.jpg","year":"1996","id":"SOVQLVX13134386AF9","hasSleeve":false},{"title":"Summertime","artist":"Oscar Peterson","cover":"http://cdn-images.deezer.com/images/cover/d6acdf4a975edf9556182d7c6a31e596/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFNWTV137712739BC","hasSleeve":false},{"title":"Tea for Two","artist":"Lester Young","cover":"http://cdn-images.deezer.com/images/cover/8effbd8dc7a95f06c5aca8e6ecf3a78e/400x400-000000-80-0-0.jpg","year":"1997","id":"SOAPBMQ144C4A18CD4","hasSleeve":false},{"title":"Line Up","artist":"Lennie Tristano","cover":"http://cdn-images.deezer.com/images/cover/23b2766c2457be502e3b79f088cb8ba9/400x400-000000-80-0-0.jpg","year":"1955","id":"SOBPDRQ1313439BA51","hasSleeve":false},{"title":"I Remember Clifford","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/efa706e1d3fc1363c7a5f07f9088a6cb/400x400-000000-80-0-0.jpg","year":"1999","id":"SOCRUWO12AB0184846","hasSleeve":false},{"title":"All The Things You Are","artist":"Oscar Pettiford","cover":"http://cdn-images.deezer.com/images/cover/8ce9fcf0ec333b06c38ad999c8dccb29/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBHKVG1315CD41C41","hasSleeve":false},{"title":"Easy Living","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/e8463630813b6c25536cdbef03134ae3/400x400-000000-80-0-0.jpg","year":"1995","id":"SOEVLRZ131343A28D6","hasSleeve":false},{"title":"Whiplash","artist":"Don Ellis","cover":"http://cdn-images.deezer.com/images/cover/34d87cf0631937bdb79675402054d3b2/400x400-000000-80-0-0.jpg","year":"1973","id":"SOOVZHR12A8C132FA8","hasSleeve":false},{"title":"Bumpin\' On Sunset","artist":"Wes Montgomery","cover":"http://cdn-images.deezer.com/images/cover/75f43523fcd01b3046486674e09d3700/400x400-000000-80-0-0.jpg","year":"1966","id":"SOKXHZT1478B63887A","hasSleeve":false},{"title":"Footprints","artist":"Wayne Shorter","cover":"http://cdn-images.deezer.com/images/cover/40c4768d6ee25d5356b5efbd0f69c324/400x400-000000-80-0-0.jpg","year":"2007","id":"SOZLFJA144D13D0768","hasSleeve":false},{"title":"Blue Train","artist":"John Coltrane","cover":"http://cdn-images.deezer.com/images/cover/1d019d81f99c5213398791c8a0d6a2d1/400x400-000000-80-0-0.jpg","year":"1957","id":"SOACYSS145FEBAD8C6","hasSleeve":false},{"title":"All Blues","artist":"Ron Carter","cover":"http://cdn-images.deezer.com/images/cover/2d20ae4c4127ce6b8aa58f08becc9c05/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBJQBM144E5CA4D89","hasSleeve":false},{"title":"My Funny Valentine","artist":"Chet Baker","cover":"http://cdn-images.deezer.com/images/cover/d2f8b4d15a624333903c57b7d4aa5ab5/400x400-000000-80-0-0.jpg","year":"1954","id":"SOAAQIZ144C486A932","hasSleeve":false},{"title":"Love for Sale","artist":"Cannonball Adderley","cover":"http://cdn-images.deezer.com/images/cover/b7df440f2e746476810b8fc36e1970df/400x400-000000-80-0-0.jpg","year":"1959","id":"SOPJQEU144AD705584","hasSleeve":false},{"title":"Lady Sings the Blues","artist":"Herbie Nichols","cover":"http://cdn-images.deezer.com/images/cover/17ea4a0526096e5a8fb20717386e99e9/400x400-000000-80-0-0.jpg","year":"2010","id":"SOAOYTH1376F78A4BA","hasSleeve":false},{"title":"Cleopatra\'s Dream","artist":"Bud Powell","cover":"http://cdn-images.deezer.com/images/cover/013ea0cecc3e8b370bd21b445ce5b8c5/400x400-000000-80-0-0.jpg","year":"1958","id":"SOKPATT12A6D4F412B","hasSleeve":false},{"title":"Bernie\'s Tune","artist":"Gerry Mulligan","cover":"http://cdn-images.deezer.com/images/cover/7bce5b21ad29df130368121a5c4bcf36/400x400-000000-80-0-0.jpg","year":"1990","id":"SOBJHOS137618BE4FD","hasSleeve":false},{"title":"Let The Good Times Roll","artist":"Lester Bowie","cover":"http://cdn-images.deezer.com/images/cover/08e18d6e4f8499003ed8c9ebbc7ce73a/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBRPSD13134386B16","hasSleeve":false},{"title":"Grooveyard","artist":"Harold Land","cover":"http://cdn-images.deezer.com/images/cover/0cac603ac7828983edb63c59f4b2ff99/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHANRF1311AFECA2F","hasSleeve":false},{"title":"Far West","artist":"Tim Hagans","cover":"http://cdn-images.deezer.com/images/cover/f1d9645904ea3441fe5c7d025c450d0c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGFYEL12A58A7C0B2","hasSleeve":false},{"title":"My Ideal","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFQKLH1313439C9D0","hasSleeve":false},{"title":"Yearnin\'","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOEIGTM12A6D4F92E1","hasSleeve":false},{"title":"Moanin\'","artist":"Art Blakey","cover":"http://cdn-images.deezer.com/images/cover/3e8498d49bc3d030a36730aada3c553b/400x400-000000-80-0-0.jpg","year":"1958","id":"SOBWNRX145FD6B55E2","hasSleeve":false},{"title":"Like Someone in Love","artist":"Art Farmer","cover":"http://cdn-images.deezer.com/images/cover/c85aed0c4cb96bcc6753d6140de9cf75/400x400-000000-80-0-0.jpg","year":"2004","id":"SOBFGKP12A6D4F8834","hasSleeve":false},{"title":"Cheese Cake","artist":"Dexter Gordon","cover":"http://cdn-images.deezer.com/images/cover/767354ab07d1fdcc6924bbce0a431e60/400x400-000000-80-0-0.jpg","year":"1988","id":"SOKPRXE1377042B07E","hasSleeve":false},{"title":"Peace Piece","artist":"Bill Evans","cover":"http://cdn-images.deezer.com/images/cover/12a472c142105e0496e842e486b252cc/400x400-000000-80-0-0.jpg","year":"1998","id":"SOAYBHG144C74C5C52","hasSleeve":false},{"title":"Ain\'t It Funky Now","artist":"Grant Green","cover":"http://cdn-images.deezer.com/images/cover/dfe2b24b075435f62907d3637cd812b4/400x400-000000-80-0-0.jpg","year":"1970","id":"SOBAGJQ13167714741","hasSleeve":false},{"title":"Driva\' Man","artist":"Max Roach","cover":"http://cdn-images.deezer.com/images/cover/7aee52fbf15a6b9a034a3a915fbe0d60/400x400-000000-80-0-0.jpg","year":"2011","id":"SOERNHP13767946CFF","hasSleeve":false},{"title":"What Are You Doing The Rest Of Your Life?","artist":"Milt Jackson","cover":"http://cdn-images.deezer.com/images/cover/a1133e65eb7cbee9e5e32d8f31f50475/400x400-000000-80-0-0.jpg","year":"1973","id":"SOHXWWN13777557752","hasSleeve":false},{"title":"The Girl From Ipanema","artist":"Stan Getz","cover":"http://cdn-images.deezer.com/images/cover/0b072edc1697b558720c640948371d7a/400x400-000000-80-0-0.jpg","year":"2000","id":"SOCNBTN1478C4603ED","hasSleeve":false},{"title":"Alone Together","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOABROI12AB017C3E5","hasSleeve":false},{"title":"September In The Rain","artist":"Roy Hargrove","cover":"http://cdn-images.deezer.com/images/cover/98a482d8ccca7b22152d5714c22aa464/400x400-000000-80-0-0.jpg","year":"1994","id":"SOPWTIL12A8C13BBDF","hasSleeve":false},{"title":"Love Theme from \'Spartacus\'","artist":"Yusef Lateef","cover":"http://cdn-images.deezer.com/images/cover/bb50516b507ac87482a446ce44b0629e/400x400-000000-80-0-0.jpg","year":"1961","id":"SOIFBAQ1311AFE3148","hasSleeve":false},{"title":"Almost Like Being in Love","artist":"Red Garland","cover":"http://cdn-images.deezer.com/images/cover/b3cf6995de24d43c717e41300e78f607/400x400-000000-80-0-0.jpg","year":"2006","id":"SOATHDZ12AB0185B5F","hasSleeve":false},{"title":"Night And Day","artist":"Joe Pass","cover":"http://cdn-images.deezer.com/images/cover/17ecd15c241bf378e684d553b4e7b8bc/400x400-000000-80-0-0.jpg","year":"2005","id":"SOBYOAC13E6CB01926","hasSleeve":false},{"title":"Sous Le Ciel De Paris","artist":"Toots Thielemans","cover":"http://cdn-images.deezer.com/images/cover/81f873457a346b26b85a8122541a8f07/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMUWQS12A8C13B2D3","hasSleeve":false},{"title":"Scrambled Eggs","artist":"Nat Adderley","cover":"http://cdn-images.deezer.com/images/cover/a2154ebd75c247095fef500c6d5f163c/400x400-000000-80-0-0.jpg","year":"1960","id":"SODJAYZ1311AFDA13F","hasSleeve":false},{"title":"Lansana\'s Priestess","artist":"Donald Byrd","cover":"http://cdn-images.deezer.com/images/cover/c00ba5c47f58252e4ef81279e6feb1a0/400x400-000000-80-0-0.jpg","year":"1973","id":"SODUJIR12A6D4F85A0","hasSleeve":false},{"title":"My Little Brown Book","artist":"Duke Ellington","cover":"http://cdn-images.deezer.com/images/cover/ac05edd38684177e3556b1cdbde4764a/400x400-000000-80-0-0.jpg","year":"1963","id":"SOGTTHV136F24052DE","hasSleeve":false},{"title":"Patricia","artist":"Art Pepper","cover":"http://cdn-images.deezer.com/images/cover/4928a2211000a85bbe02cd299b5d6291/400x400-000000-80-0-0.jpg","year":"2007","id":"SONVUPG13772274375","hasSleeve":false},{"title":"The Sidewinder","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/38ebedd7c4a77c3502b2cc5d80db3109/400x400-000000-80-0-0.jpg","year":"1998","id":"SOGTXEX12B0B806866","hasSleeve":false},{"title":"You Don\'t Know What Love Is","artist":"Sonny Rollins","cover":"http://cdn-images.deezer.com/images/cover/49d72537f916a90c27e629a87308bc53/400x400-000000-80-0-0.jpg","year":"1956","id":"SOEDTNN13772A39D94","hasSleeve":false},{"title":"Blue Monk","artist":"Thelonious Monk","cover":"http://cdn-images.deezer.com/images/cover/023727db68f4edbb78eb11808fd95574/400x400-000000-80-0-0.jpg","year":"1999","id":"SOATUCE144AD0E89D1","hasSleeve":false},{"title":"Las Vegas Tango","artist":"Gil Evans","cover":"http://cdn-images.deezer.com/images/cover/316f0911a56060678c224120387cd7a8/400x400-000000-80-0-0.jpg","year":"1964","id":"SOFDOCY13775C36109","hasSleeve":false},{"title":"Sandu","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/acd61c42e28df7fbd337ffd3e6383908/400x400-000000-80-0-0.jpg","year":"1955","id":"SOAACEF13152A71E9D","hasSleeve":false}]');
var data2 = JSON.parse('[{"title":"You Got Me","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/80768e0c7f2662d74273404f879650bc/400x400-000000-80-0-0.jpg","year":"1999","id":"SOJANBO144BA08EC60","hasSleeve":false},{"title":"What\'s Golden","artist":"Jurassic 5","cover":"http://cdn-images.deezer.com/images/cover/c41c6c376770253f8805f5410308560c/400x400-000000-80-0-0.jpg","year":"2002","id":"SOMYUBT144C2877D88","hasSleeve":false},{"title":"Fazers","artist":"King Geedorah","cover":"http://cdn-images.deezer.com/images/cover/498d19a7bd8efcabfe19a9cff20036c4/400x400-000000-80-0-0.jpg","year":"2003","id":"SOCTFLE137686D44D0","hasSleeve":false},{"title":"Peachfuzz","artist":"KMD","cover":"http://cdn-images.deezer.com/images/cover/fb34d03a4518f2920abb3c9f149663c1/400x400-000000-80-0-0.jpg","year":"1991","id":"SORJEGE13719B8C358","hasSleeve":false},{"title":"None Shall Pass","artist":"Aesop Rock","cover":"http://cdn-images.deezer.com/images/cover/fd0130bb478ed7fff6ca8cc28693aef2/400x400-000000-80-0-0.jpg","year":"2007","id":"SOKJIZT1311AFE7DAE","hasSleeve":false},{"title":"MC\'s Act Like They Don\'t Know","artist":"KRS-One","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SORINAN1311AFD88CB","hasSleeve":false},{"title":"It\'s Tricky","artist":"Run-D.M.C.","cover":"http://cdn-images.deezer.com/images/cover/6738946c5c48780a0608842447cc0b47/400x400-000000-80-0-0.jpg","year":"1986","id":"SODJTQX144BD986FD6","hasSleeve":false},{"title":"Get By","artist":"Talib Kweli","cover":"http://cdn-images.deezer.com/images/cover/f81ec68d371c6c8c6b3499d5d89344f2/400x400-000000-80-0-0.jpg","year":"2002","id":"SOEGOYO13730DADE42","hasSleeve":false},{"title":"A Little Soul","artist":"Pete Rock","cover":"http://cdn-images.deezer.com/images/cover/9b1cf8de1f93088531e05f6d367714f9/400x400-000000-80-0-0.jpg","year":"2001","id":"SOCEROK12A6D4FA5FC","hasSleeve":false},{"title":"The Show Goes On","artist":"Lupe Fiasco","cover":"http://cdn-images.deezer.com/images/cover/4f1e0978615ffa5fd7433d7c3a72d0d5/400x400-000000-80-0-0.jpg","year":"2010","id":"SOCMPYA12C56413B5F","hasSleeve":false},{"title":"Wavin\' Flag","artist":"K\'naan","cover":"http://cdn-images.deezer.com/images/cover/c221e82e49c657ff2ddf42ab30038005/400x400-000000-80-0-0.jpg","year":"2010","id":"SOTBICN13759295452","hasSleeve":false},{"title":"You Gots To Chill","artist":"EPMD","cover":"http://cdn-images.deezer.com/images/cover/c1c225ca9accb0c13fb97f684b44937f/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHNXDQ141917E3E88","hasSleeve":false},{"title":"Everything Changes","artist":"Aceyalone","cover":"http://cdn-images.deezer.com/images/cover/05281dea6ebc150cc845242ef06f8675/400x400-000000-80-0-0.jpg","year":"2005","id":"SODYUQX131343A56B5","hasSleeve":false},{"title":"C.R.E.A.M.","artist":"Wu-Tang Clan","cover":"http://cdn-images.deezer.com/images/cover/f668b179366bb3ed623dd8bccd2f38eb/400x400-000000-80-0-0.jpg","year":"1993","id":"SOHYJIZ146037961A9","hasSleeve":false},{"title":"Sweetest Girl (Dollar Bill)","artist":"Wyclef Jean","cover":"http://cdn-images.deezer.com/images/cover/b986b2f1d3fa50a5a8a9402cd273af0d/400x400-000000-80-0-0.jpg","year":"2007","id":"SODUALI1313438B53E","hasSleeve":false},{"title":"Breathe And Stop","artist":"Q-Tip","cover":"http://cdn-images.deezer.com/images/cover/324315846539ae9a430638bd78538f2c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOEUVEH12B0B8086F5","hasSleeve":false},{"title":"Ms. Jackson","artist":"OutKast","cover":"http://cdn-images.deezer.com/images/cover/653316993a79f936dcdec7573e26256f/400x400-000000-80-0-0.jpg","year":"2001","id":"SOSRDPS144B28ECEB5","hasSleeve":false},{"title":"Children\'s Story","artist":"Slick Rick","cover":"http://cdn-images.deezer.com/images/cover/5ef85a738d6fd32120d0e2b5cbc0222f/400x400-000000-80-0-0.jpg","year":"1988","id":"SODQHOL144BD94C4FD","hasSleeve":false},{"title":"Paid In Full","artist":"Eric B. & Rakim","cover":"http://cdn-images.deezer.com/images/cover/9badf0e54dff9de69211a75179750d88/400x400-000000-80-0-0.jpg","year":"2002","id":"SOBTYFF146009D2312","hasSleeve":false},{"title":"Watch Out Now","artist":"The Beatnuts","cover":"http://cdn-images.deezer.com/images/cover/587758a5b55bd4c07ed2b226bc352fa2/400x400-000000-80-0-0.jpg","year":"1999","id":"SONJBOI1315CD489EC","hasSleeve":false},{"title":"Shadowboxin\' (Album Version (Explicit))","artist":"GZA","cover":"http://cdn-images.deezer.com/images/cover/48a9e31ff33ba3f75501dd7a366b9cd1/400x400-000000-80-0-0.jpg","year":"1995","id":"SOCMSVB12B0B808230","hasSleeve":false},{"title":"Luchini Aka This Is It","artist":"Camp Lo","cover":"http://cdn-images.deezer.com/images/cover/b2244fbcf3841f0ca9ce7cd3166e5ce9/400x400-000000-80-0-0.jpg","year":"1997","id":"SOCLSAD13134399947","hasSleeve":false},{"title":"Uknowhowwedu","artist":"Bahamadia","cover":"http://cdn-images.deezer.com/images/cover/714d1810cde9dfc9401f8e89cd21852c/400x400-000000-80-0-0.jpg","year":"1996","id":"SOKILAT12A6D4F7FC7","hasSleeve":false},{"title":"Won\'t Do","artist":"J Dilla","cover":"http://cdn-images.deezer.com/images/cover/088f163087d7af72881db574eba40674/400x400-000000-80-0-0.jpg","year":"2006","id":"SOGHARK12A58A7D128","hasSleeve":false},{"title":"Crazy","artist":"Gnarls Barkley","cover":"http://cdn-images.deezer.com/images/cover/d6c9abb3972dee7b6b8b624beb08b67c/400x400-000000-80-0-0.jpg","year":"2006","id":"SOBKMKP14509A7F36E","hasSleeve":false},{"title":"Full Clip","artist":"Gang Starr","cover":"http://cdn-images.deezer.com/images/cover/169f994d7ab2a8d868cde77fd566cbbf/400x400-000000-80-0-0.jpg","year":"1999","id":"SOAKAXG1456B07B9DA","hasSleeve":false},{"title":"Coastin\' feat. K. Flay","artist":"Zion I","cover":"http://cdn-images.deezer.com/images/cover/03ea1c4655b44c586e90dd4d5f9e1aac/400x400-000000-80-0-0.jpg","year":"2009","id":"SOVXZYY12AB0184DA4","hasSleeve":false},{"title":"One","artist":"Ghostface Killah","cover":"http://cdn-images.deezer.com/images/cover/3a5da6b535f5f7307cba62d42011cb5f/400x400-000000-80-0-0.jpg","year":"2000","id":"SOPDDBK1312A8A8FD5","hasSleeve":false},{"title":"Hip Hop","artist":"Mos Def","cover":"http://cdn-images.deezer.com/images/cover/89e28a0a93eff9dc574476710b5c09e2/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGWGSJ12AF72A8AC2","hasSleeve":false},{"title":"My Philosophy","artist":"Boogie Down Productions","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SODLVET12A58A77A31","hasSleeve":false},{"title":"Worst Comes To Worst","artist":"Dilated Peoples","cover":"http://cdn-images.deezer.com/images/cover/bef22b88d74c9fc79a0921d5f479518f/400x400-000000-80-0-0.jpg","year":"2001","id":"SODEKQK131677146C6","hasSleeve":false},{"title":"If You Must","artist":"Del the Funky Homosapien","cover":"http://cdn-images.deezer.com/images/cover/df1b0a28ee65efc54a5960991a96b872/400x400-000000-80-0-0.jpg","year":"2000","id":"SOREGQF12B0B80658E","hasSleeve":false},{"title":"When I B On Tha Mic","artist":"Rakim","cover":"http://cdn-images.deezer.com/images/cover/4ddcfa5e69a1b79acbe20f4ce282475c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOOCMSF136CA2E9BC1","hasSleeve":false},{"title":"Lyrical Swords","artist":"Ras Kass","cover":"http://cdn-images.deezer.com/images/cover/f24fe73ffa34b9f997ba4a2631c0334d/400x400-000000-80-0-0.jpg","year":"2005","id":"SODEXGO12A8C13C01D","hasSleeve":false},{"title":"Shimmy Shimmy Ya","artist":"Ol\' Dirty Bastard","cover":"http://cdn-images.deezer.com/images/cover/786388d368900f66f05bd3831bda4ff8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOYVNXN144B26B71A2","hasSleeve":false},{"title":"The Seed (2.0)","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/411ffd8911f1fc05c205e86509f6eca1/400x400-000000-80-0-0.jpg","year":"2002","id":"SOCZZUU144F500F16F","hasSleeve":false},{"title":"Ice Cream","artist":"Raekwon","cover":"http://cdn-images.deezer.com/images/cover/75c9f84b189c2bc310647e61b7a6d5e8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOWTQFY135C395E98C","hasSleeve":false},{"title":"Milk The Cow","artist":"Cappadonna","cover":"http://cdn-images.deezer.com/images/cover/5953b45d6716fcb3b2fd222072ac4029/400x400-000000-80-0-0.jpg","year":"1998","id":"SOCEGCF1311AFE5D52","hasSleeve":false},{"title":"Runnin\'","artist":"The Pharcyde","cover":"http://cdn-images.deezer.com/images/cover/71de7ca1aea063a87dca08907d7d9d11/400x400-000000-80-0-0.jpg","year":"2013","id":"SOLFYAD137AD7633B2","hasSleeve":false},{"title":"The Choice Is Yours","artist":"Black Sheep","cover":"http://cdn-images.deezer.com/images/cover/d8ac4fae559fb005ddf7f0ed5adbf2f9/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEVEPY12A6310EAD3","hasSleeve":false},{"title":"Tennessee","artist":"Arrested Development","cover":"http://cdn-images.deezer.com/images/cover/2c7039e6188be44a8600a8f87edb5ec7/400x400-000000-80-0-0.jpg","year":"1992","id":"SOIXAYX12A8C139032","hasSleeve":false},{"title":"Sugar Hill","artist":"AZ","cover":"http://cdn-images.deezer.com/images/cover/b2eac1235c5ec67612d2fa0cce3c7905/400x400-000000-80-0-0.jpg","year":"1995","id":"SOECJXV136A5B5EB5E","hasSleeve":false},{"title":"Loungin\'","artist":"Guru","cover":"http://cdn-images.deezer.com/images/cover/9af047171c514d7d558be4d2eb0a637d/400x400-000000-80-0-0.jpg","year":"2008","id":"SOHLCCS1312A8AD2C6","hasSleeve":false},{"title":"La Rhumba","artist":"Bobby Digital","cover":"http://cdn-images.deezer.com/images/cover/ac98a11c434ca76b55553eaa1722a4ad/400x400-000000-80-0-0.jpg","year":"2002","id":"SOFXNEJ12B0B80BD35","hasSleeve":false},{"title":"N.Y. State Of Mind","artist":"Nas","cover":"http://cdn-images.deezer.com/images/cover/e7f5acdfbc1c49bc4520938b4d775ec6/400x400-000000-80-0-0.jpg","year":"1994","id":"SOFQKQO1312FE0065F","hasSleeve":false},{"title":"Award Tour","artist":"A Tribe Called Quest","cover":"http://cdn-images.deezer.com/images/cover/aacb57691f97456e6594d8e991bb81bb/400x400-000000-80-0-0.jpg","year":"1993","id":"SODGQBF144BD8F4FD1","hasSleeve":false},{"title":"My Definition Of A Boombastic Jazz Style","artist":"Dream Warriors","cover":"http://cdn-images.deezer.com/images/cover/1f9bfa4c7665e07fc7dfc7ab4e59ec49/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEHHZE144E604C29B","hasSleeve":false},{"title":"Ready or Not","artist":"Fugees","cover":"http://cdn-images.deezer.com/images/cover/04a5526b7b94c6e2d617ade762ddf5dc/400x400-000000-80-0-0.jpg","year":"1996","id":"SOCGQAJ136077E8945","hasSleeve":false}]');

var bottomBar  = document.getElementById('bottom-bar');
var buttonPrev = document.getElementById('button-prev');
var buttonShow = document.getElementById('button-show');
var buttonNext = document.getElementById('button-next');

cratedigger.init({

	debug: true,

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
    	bottomBar.classList.add('closed');
    },

	onInfoPanelClosed: function() {
		bottomBar.classList.remove('closed');
	}
});

cratedigger.loadRecords(data, true, function() {
	console.log('Loaded !');
});

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
	target;

function init(ratio) {

	camera = new THREE.PerspectiveCamera( 45, ratio, 0.1, 20000 );
    camera.focalLength = 45;
    camera.frameSize = 32;
    camera.setLens( camera.focalLength, camera.frameSize );

    target = new THREE.Object3D();
    //        target = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10, 1, 1, 1));
    //        scene.add(target);
    camera.lookAt( target.position );

}

function focusRecord(recordXPos, recordAbsolutePos) {

    new TWEEN.Tween( target.position )
	    .to( {
	        x: recordXPos,
	        y: 50 + Constants.scene.recordShownY,
	        z: recordAbsolutePos.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();

	new TWEEN.Tween( camera.position )
	    .to( {
	        x: recordXPos + Constants.scene.cameraFocusPosition.x,
	        y: Constants.scene.cameraFocusPosition.y,
	        z: recordAbsolutePos.z + Constants.scene.cameraFocusPosition.z
	    }, Constants.scene.cameraMoveTime )
	    .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomInRecord(recordXPos, recordAbsolutePos) {

    new TWEEN.Tween( target.position )
        .to( {
            x: recordXPos,
            y: Constants.scene.recordFlippedY + 50,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()

    new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x + 80,
            y: Constants.scene.cameraFocusPosition.y - 50,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function zoomOutRecord(recordXPos, recordAbsolutePos) {

    new TWEEN.Tween( target.position )
        .delay( Constants.scene.infoOpenTime / 2 )
        .to( {
            x: recordXPos,
            y: 75,
            z: recordAbsolutePos.z
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( camera.position )
        .to( {
            x: recordXPos + Constants.scene.cameraFocusPosition.x,
            y: Constants.scene.cameraFocusPosition.y,
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();
}

function resetCamera() {
	new TWEEN.Tween( target.position )
        .to( {
            x: Constants.scene.targetBasePosition.x,
            y: Constants.scene.targetBasePosition.y,
            z: Constants.scene.targetBasePosition.z
        }, Constants.scene.cameraMoveTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( camera.position )
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9DYW1lcmFNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcblx0VFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG5cclxuXHRDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpO1xyXG5cclxudmFyIGNhbWVyYSxcclxuXHR0YXJnZXQ7XHJcblxyXG5mdW5jdGlvbiBpbml0KHJhdGlvKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIHJhdGlvLCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIC8vICAgICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCwgMSwgMSwgMSkpO1xyXG4gICAgLy8gICAgICAgIHNjZW5lLmFkZCh0YXJnZXQpO1xyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2N1c1JlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuXHQgICAgLnRvKCB7XHJcblx0ICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG5cdCAgICAgICAgeTogNTAgKyBDb25zdGFudHMuc2NlbmUucmVjb3JkU2hvd25ZLFxyXG5cdCAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG5cdCAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG5cdCAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuXHRuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcblx0ICAgIC50bygge1xyXG5cdCAgICAgICAgeDogcmVjb3JkWFBvcyArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcblx0ICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG5cdCAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MueiArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnpcclxuXHQgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuXHQgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gem9vbUluUmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkRmxpcHBlZFkgKyA1MCxcclxuICAgICAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54ICsgODAsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnkgLSA1MCxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21PdXRSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IDc1LFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRDYW1lcmEoKSB7XHJcblx0bmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHo6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FtZXJhQXNwZWN0KHJhdGlvKSB7XHJcblx0Y2FtZXJhLmFzcGVjdCA9IHJhdGlvO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9va0F0VGFyZ2V0KCkge1xyXG5cdGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpbml0OiBpbml0LFxyXG5cdGZvY3VzUmVjb3JkOiBmb2N1c1JlY29yZCxcclxuXHR6b29tSW5SZWNvcmQ6IHpvb21JblJlY29yZCxcclxuXHR6b29tT3V0UmVjb3JkOiB6b29tT3V0UmVjb3JkLFxyXG5cdHJlc2V0Q2FtZXJhOiByZXNldENhbWVyYSxcclxuXHR1cGRhdGVDYW1lcmFBc3BlY3Q6IHVwZGF0ZUNhbWVyYUFzcGVjdCxcclxuXHRsb29rQXRUYXJnZXQ6IGxvb2tBdFRhcmdldCxcclxuXHRcclxuXHRnZXRDYW1lcmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGNhbWVyYTtcclxuXHR9LFxyXG5cdGdldFRhcmdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxufSJdfQ==
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
        rootContainerId: 'cratedigger',
        canvasContainerId: 'cratedigger-canvas',
        loadingContainerId: 'cratedigger-loading',
        infoContainerId: 'cratedigger-info',
        titleContainerId: 'cratedigger-record-title',
        artistContainerId: 'cratedigger-record-artist',
        coverContainerId: 'cratedigger-record-cover'
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
            x: 160,
            y: 190,
            z: 85
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
                y: Constants.scene.recordShownY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
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

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 + Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.pullRecord = function () {

    if ( this.state !== 'pulled' ) {

        this.state = 'pulled';

        new TWEEN.Tween( this.mesh.position )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
            .to( {
                z: Math.PI / 2 - Math.PI / 7
            }, Constants.scene.recordMoveTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

    }
};

Record.prototype.flipRecord = function ( done ) {

    this.state = 'flipped';

    new TWEEN.Tween( this.mesh.position )
        .to( {
            y: Constants.scene.recordFlippedY
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start();

    new TWEEN.Tween( this.mesh.rotation )
        .delay( Constants.scene.infoOpenTime / 4 )
        .to( {
            y: Math.PI
        }, Constants.scene.infoOpenTime )
        .easing( TWEEN.Easing.Quartic.Out ).start()
        .onComplete( done );

    CameraManager.zoomInRecord(this.recordXPos, this.absolutePosition);
};

Record.prototype.flipBackRecord = function ( done , noCameraTween ) {

    if ( this.state === 'flipped' ) {

        new TWEEN.Tween( this.mesh.position )
            .delay( Constants.scene.infoOpenTime / 2 )
            .to( {
                y: Constants.scene.recordBaseY
            }, Constants.scene.infoOpenTime )
            .easing( TWEEN.Easing.Quartic.Out ).start();

        new TWEEN.Tween( this.mesh.rotation )
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9SZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKSxcclxuICAgIFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKSxcclxuXHJcbiAgICBDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpLFxyXG4gICAgQ2FtZXJhTWFuYWdlciA9IHJlcXVpcmUoJy4vQ2FtZXJhTWFuYWdlcicpO1xyXG5cclxudmFyIFJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmNyYXRlSWQgPSBjcmF0ZUlkO1xyXG4gICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB0aGlzLnN0YXRlID0gJ291dCc7XHJcbiAgICB0aGlzLnJlY29yZFhQb3MgPSAtNjIgKyAoIDEzNSAvIENvbnN0YW50cy5yZWNvcmRzUGVyQ3JhdGUgKSAqIHBvcztcclxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBcclxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMS41LCAxMDAsIDEsIDEsIDEgKSwgXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hGYWNlTWF0ZXJpYWwoIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBDb25zdGFudHMuc2xlZXZlQ29sb3JcclxuICAgICAgICB9KSlcclxuICAgICk7XHJcbiAgICB0aGlzLm1lc2guZ2VvbWV0cnkuYXBwbHlNYXRyaXgoIG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZVRyYW5zbGF0aW9uKCA1MCwgMCwgMCApICk7XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24uc2V0KCB0aGlzLnJlY29yZFhQb3MsIENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWSwgMCApO1xyXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIHRoaXMubWVzaC5yZWNvcmRJZCA9IGlkO1xyXG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB0aGlzLnNldFVuYWN0aXZlKCk7XHJcbiAgICB0aGlzLnB1c2hSZWNvcmQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJSZWNvcmQgbsKwXCIsIHRoaXMuaWQsXHJcbiAgICAgICAgXCJjcmF0ZUlkID1cIiwgdGhpcy5jcmF0ZUlkLFxyXG4gICAgICAgIFwicG9zID1cIiwgdGhpcy5wb3MgKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRVbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNob3dSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAnc2hvd24nICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3Nob3duJztcclxuICAgICAgICB0aGlzLmFic29sdXRlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLm1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRTaG93bllcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIENhbWVyYU1hbmFnZXIuZm9jdXNSZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVzaFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT0gJ3B1c2hlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVzaGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUucHVsbFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgIT09ICdwdWxsZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1bGxlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyIC0gTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9ICdmbGlwcGVkJztcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRGbGlwcGVkWVxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgIC5kZWxheSggQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDQgKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBNYXRoLlBJXHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKVxyXG4gICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci56b29tSW5SZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwQmFja1JlY29yZCA9IGZ1bmN0aW9uICggZG9uZSAsIG5vQ2FtZXJhVHdlZW4gKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlID09PSAnZmxpcHBlZCcgKSB7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICAgICAgaWYgKCFub0NhbWVyYVR3ZWVuKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBDYW1lcmFNYW5hZ2VyLnpvb21PdXRSZWNvcmQodGhpcy5yZWNvcmRYUG9zLCB0aGlzLmFic29sdXRlUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlY29yZDsiXX0=
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

var animate = function () {

    if ( doRender ) {

        requestAnimationFrame( animate );
        render();

        if ( Constants.debug ) {

            stats.update();

        }
    }
};

var render = function () {

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

        Constants.onInfoPanelOpened();

        setTimeout( function () {

            fadeIn( infoContainerElement );

        }, 300 );
    }
};

var flipBackSelectedRecord = function (force) {

    if ( infoPanelState === 'opened' ) {

        fadeOut( infoContainerElement );
        infoPanelState = 'closing';

        records[ selectedRecord ].flipBackRecord( function () {

            infoPanelState = 'closed';
            Constants.onInfoPanelClosed();

        }, force );
    }
};

var updateShownRecord = function () {

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

var resetShownRecord = function ( force ) {

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

    } else if ( infoPanelState === 'opened' && Constants.closeInfoPanelOnScroll ) {

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

        } else if ( delta < 0 ) {

            selectPrevRecord();

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

    } else if ( Constants.closeInfoPanelOnClick ) {

        flipBackSelectedRecord();

    }
};

var onMouseDownEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );

    if ( infoPanelState === 'closed' ) {

        scrollRecords( mouse.y );

    } 

    mouseDownPos = {
        x: mouse.x,
        y: mouse.y
    };
};

var onMouseUpEvent = function ( e ) {

    clearInterval( scrollRecordsTimeout );
    renderer.domElement.classList.remove('grab');

    // Trigger scene click event only if mouseup event is not a drag end event & not a click on a link
    if ( coordsEqualsApprox( mouseDownPos, mouse, Constants.scene.grabSensitivity ) && !( e.target && e.target.hasAttribute('href') ) ) {

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
    CameraManager.updateCameraAspect( canvasWidth / canvasHeight );

    dof.uniforms.tDepth.value = depthTarget;
    dof.uniforms.size.value.set( canvasWidth, canvasHeight );
    dof.uniforms.textel.value.set( 1.0 / canvasWidth, 1.0 / canvasHeight );
    FXAA.uniforms.resolution.value.set( 1 / canvasWidth, 1 / canvasHeight );

};


/*======================================
=              UI METHODS              =
======================================*/


var showLoading = function ( done ) {

    fadeIn( loadingContainerElement );
    setTimeout(done, 1000);

};

var hideLoading = function ( done ) {

    fadeOut( loadingContainerElement );
    setTimeout(done, 1000);

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

    rootContainerElement.addEventListener( 'DOMMouseScroll', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousewheel', onScrollEvent, false );
    rootContainerElement.addEventListener( 'mousemove', onMouseMoveEvent, false );
    rootContainerElement.addEventListener( 'mousedown', onMouseDownEvent, false );
    rootContainerElement.addEventListener( 'mouseup', onMouseUpEvent, false );

    window.addEventListener( 'keydown', onKeyDownEvent, false ); 

    if ( Constants.updateCanvasSizeOnWindowResize ) {

        window.addEventListener( 'resize', onWindowResizeEvent, false );

    }

    // DOM setup
    rootContainerElement.style.position = 'relative';
    canvasContainerElement.style.position = 'absolute';
    infoContainerElement.style.position = 'absolute';
    loadingContainerElement.style.position = 'absolute';

    setCanvasDimensions();

    hideElement(infoContainerElement);

    if ( Constants.debug ) {

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

    if ( Constants.postprocessing ) {

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

    for ( var crateId = 0; crateId < Constants.nbCrates; crateId++ ) {
        var crate = createCrate( crateId );
        cratesContainer.add( crate );
    }
    cratesContainer.position.z = -( 110 - ( 110 * Constants.nbCrates ) ) / 2;

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

        for ( var pos = 0; pos < Constants.recordsPerCrate; pos++ ) {
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

var fadeOut = function ( element ) {

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

var fadeIn = function ( element ) {

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

function onFadeComplete( e ) {

    e.target.removeEventListener(e.type, onFadeComplete);
    if ( e.target.style.opacity === '0' ) {

        e.target.style.display = 'none';

    } else {

        e.target.style.display = 'block';

    }
}


var hideElement = function( element ) {

    element.style.opacity = 0;
    element.style.display = 'none';

}

var showElement = function( element ) {

    element.style.display = 'block';
    element.style.opacity = 1;

}

var getTransitionEvent = function () {
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

var calculateCanvasSize = function () {

    canvasWidth = Constants.canvasWidth ? Constants.canvasWidth : rootContainerElement.clientWidth;
    canvasHeight = Constants.canvasHeight ? Constants.canvasHeight : rootContainerElement.clientHeight;

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

    Constants.extend(params);

    // feature test
    if ( !Modernizr.webgl ) return;

    if ( window.devicePixelRatio !== undefined ) {

        dpr = window.devicePixelRatio;

    } else {

        dpr = 1;

    }

    rootContainerElement = document.getElementById( Constants.elements.rootContainerId );
    if ( !rootContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find root container element.' );
        return;

    }
    canvasContainerElement = document.getElementById( Constants.elements.canvasContainerId );
    if ( !canvasContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find canvas container element.' );
        return;

    }
    loadingContainerElement = document.getElementById( Constants.elements.loadingContainerId );
    if ( !loadingContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find loading container element.' );
        return;

    }
    infoContainerElement = document.getElementById( Constants.elements.infoContainerId );
    if ( !infoContainerElement ) {

        console.error( 'cratedigger.js - Init failed : can not find info container element.' );
        return;

    }
    titleInfoElement = document.getElementById( Constants.elements.titleContainerId );
    if ( !titleInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record title container element.' );
        return;

    }
    artistInfoElement = document.getElementById( Constants.elements.artistContainerId );
    if ( !artistInfoElement ) {

        console.error( 'cratedigger.js - Init failed : can not find record artist container element.' );
        return;

    }
    coverInfoElement = document.getElementById( Constants.elements.coverContainerId );
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmF0ZWRpZ2dlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAoVmFsZW50aW4gTGVkcmFwaWVyKSAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG4gICAgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy1qcycpLFxyXG4gICAgTW9kZXJuaXpyID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ01vZGVybml6ciddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnTW9kZXJuaXpyJ10gOiBudWxsKSxcclxuICAgIGRhdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydkYXQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RhdCddIDogbnVsbCksXHJcblxyXG4gICAgUmVjb3JkID0gcmVxdWlyZSgnLi9SZWNvcmQnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKSxcclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBET00gY29udGFpbmVyIGVsZW1lbnRzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCxcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LFxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCxcclxuICAgIGFydGlzdEluZm9FbGVtZW50LFxyXG4gICAgY292ZXJJbmZvRWxlbWVudCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsO1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5sb29rQXRUYXJnZXQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxudmFyIHVubG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG52YXIgbG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyhkb25lKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICB9LCAzMDAwICk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG52YXIgc2h1ZmZsZVJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBmaWxsSW5mb1BhbmVsKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBDb25zdGFudHMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBpbmZvQ29udGFpbmVyRWxlbWVudCApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHVwZGF0ZVNob3duUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICsgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVzZXRTaG93blJlY29yZCA9IGZ1bmN0aW9uICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtZXJhTWFuYWdlci5yZXNldENhbWVyYSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHNlbGVjdFByZXZSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIHNlbGVjdE5leHRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UHJldkF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBnZXROZXh0QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG52YXIgbmF2aWdhdGVSZWNvcmRzID0gZnVuY3Rpb24gKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIHNjcm9sbFJlY29yZHMgPSBmdW5jdGlvbiAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG5cclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZpbGxJbmZvUGFuZWwgPSBmdW5jdGlvbiAoIHJlY29yZCApIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLnRpdGxlICkge1xyXG5cclxuICAgICAgICB0aXRsZUluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLnRpdGxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmFydGlzdCApIHtcclxuXHJcbiAgICAgICAgYXJ0aXN0SW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEuYXJ0aXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmNvdmVyICkge1xyXG5cclxuICAgICAgICBjb3ZlckluZm9FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHJlY29yZC5kYXRhLmNvdmVyICsgJyknO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBvbk1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxudmFyIG9uU2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG5cclxuICAgIGlmICggd2hlZWxEaXJlY3Rpb24oIGUgKSA8IDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxudmFyIG9uQ2xpY2tFdmVudCA9IGZ1bmN0aW9uICggbW91c2VEb3duUG9zICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoICggKCBtb3VzZURvd25Qb3MueCAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LndpZHRoICkgKSAqIDIgLSAxICksXHJcbiAgICAgICAgICAgIHk6ICggLSggKCBtb3VzZURvd25Qb3MueSAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0VG9wICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0ICkgKSAqIDIgKyAxICksXHJcbiAgICAgICAgICAgIHo6IDAuNVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggdmVjdG9yUG9zLngsIHZlY3RvclBvcy55LCB2ZWN0b3JQb3MueiApO1xyXG4gICAgICAgIHZlY3Rvci51bnByb2plY3QoIGNhbWVyYSApO1xyXG4gICAgICAgIHZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCBjYW1lcmEucG9zaXRpb24sIHZlY3Rvci5zdWIoIGNhbWVyYS5wb3NpdGlvbiApLm5vcm1hbGl6ZSgpICk7XHJcbiAgICAgICAgdmFyIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggY3JhdGVzQ29udGFpbmVyLmNoaWxkcmVuLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIElmIGludGVyc2VjdCBzb21ldGhpbmdcclxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCB2aXNpYmxlIHJlY29yZCBpbnRlcnNlY3RlZFxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGludGVyY2VwdCBhIG1lc2ggd2hpY2ggaXMgbm90IGEgcmVjb3JkLCBicmVha1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCkgPT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnZpc2libGUgJiYgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkUmVjb3JkID0gcmVjb3Jkc1sgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmVcclxuICAgICAgICAgICAgaWYgKCBjbGlja2VkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT09IGNsaWNrZWRSZWNvcmQuaWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJlY29yZCggY2xpY2tlZFJlY29yZC5pZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFsbCBpbnRlcnNlY3RlZCByZWNvcmRzIGFyZSBub3QgdmlzaWJsZXNcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm8gcmVjb3JkIGhhcyBiZWVuIGludGVyc2VjdGVkXHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBDb25zdGFudHMuY2xvc2VJbmZvUGFuZWxPbkNsaWNrICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgeTogbW91c2UueVxyXG4gICAgfTtcclxufTtcclxuXHJcbnZhciBvbk1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBzY2VuZSBjbGljayBldmVudCBvbmx5IGlmIG1vdXNldXAgZXZlbnQgaXMgbm90IGEgZHJhZyBlbmQgZXZlbnQgJiBub3QgYSBjbGljayBvbiBhIGxpbmtcclxuICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBDb25zdGFudHMuc2NlbmUuZ3JhYlNlbnNpdGl2aXR5ICkgJiYgISggZS50YXJnZXQgJiYgZS50YXJnZXQuaGFzQXR0cmlidXRlKCdocmVmJykgKSApIHtcclxuXHJcbiAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIG9uS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSA0MCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25XaW5kb3dSZXNpemVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgQ2FtZXJhTWFuYWdlci51cGRhdGVDYW1lcmFBc3BlY3QoIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxudmFyIGhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIGxvYWRpbmdDb250YWluZXJFbGVtZW50ICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGluaXRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIENvbnN0YW50cy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmluaXQoY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQpO1xyXG4gICAgY2FtZXJhID0gQ2FtZXJhTWFuYWdlci5nZXRDYW1lcmEoKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggQ29uc3RhbnRzLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGhpZGVFbGVtZW50KGluZm9Db250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG52YXIgaW5pdFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBDb25zdGFudHMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdERlYnVnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRHVUkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgY2FtZXJhRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0NhbWVyYScgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgub25DaGFuZ2UoIHVwZGF0ZUNhbWVyYSApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG52YXIgdXBkYXRlQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRDcmF0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgQ29uc3RhbnRzLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIENvbnN0YW50cy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbnZhciBjcmVhdGVDcmF0ZSA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UmVjb3JkTWF0ZXJpYWwgPSBmdW5jdGlvbiAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IENvbnN0YW50cy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgd2hlZWxEaXN0YW5jZSA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbnZhciB3aGVlbERpcmVjdGlvbiA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxudmFyIGNvb3Jkc0VxdWFsc0FwcHJveCA9IGZ1bmN0aW9uICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH0sIDE1KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkZhZGVDb21wbGV0ZSggZSApIHtcclxuXHJcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgb25GYWRlQ29tcGxldGUpO1xyXG4gICAgaWYgKCBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID09PSAnMCcgKSB7XHJcblxyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxudmFyIGhpZGVFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbn1cclxuXHJcbnZhciBzaG93RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxufVxyXG5cclxudmFyIGdldFRyYW5zaXRpb25FdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0LFxyXG4gICAgICAgIHRyYW5zaXRpb25zID0ge1xyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKSB7XHJcblxyXG4gICAgICAgIGlmKCBkb2N1bWVudC5ib2R5LnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIGNhbGN1bGF0ZUNhbnZhc1NpemUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBDb25zdGFudHMuY2FudmFzV2lkdGggPyBDb25zdGFudHMuY2FudmFzV2lkdGggOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IENvbnN0YW50cy5jYW52YXNIZWlnaHQgPyBDb25zdGFudHMuY2FudmFzSGVpZ2h0IDogcm9vdENvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxufTtcclxuXHJcbnZhciBzZXRDYW52YXNEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ICAgICA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoICAgICA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoIHYgKSB7IC8vIEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAtIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlIFtyZXYuICMxXVxyXG5cclxuICAgIGZvciAoIHZhciBqLCB4LCBpID0gdi5sZW5ndGg7IGk7IGogPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSAqIGkgKSwgeCA9IHZbIC0taSBdLCB2WyBpIF0gPSB2WyBqIF0sIHZbIGogXSA9IHggKTtcclxuICAgIHJldHVybiB2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFWFBPUlRTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBNZXRob2RzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICggcGFyYW1zICkge1xyXG5cclxuICAgIENvbnN0YW50cy5leHRlbmQocGFyYW1zKTtcclxuXHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIGlmICggIU1vZGVybml6ci53ZWJnbCApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXJvb3RDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByb290IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWxvYWRpbmdDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhaW5mb0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGluZm8gY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICB0aXRsZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuYXJ0aXN0Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWFydGlzdEluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgYXJ0aXN0IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY292ZXJJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuY292ZXJDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY292ZXJJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY292ZXIgaW1hZ2UgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuICAgIGluaXRTY2VuZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaWQgPCAwICkge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaWQgPiBsb2FkZWRSZWNvcmRzICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5zdGFydFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IHRydWU7XHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5zdG9wUmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5lbmFibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIGdldHRlcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRSZWNvcmRzRGF0YUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNEYXRhTGlzdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldExvYWRlZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFJlY29yZHM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09ICBNZXRob2RzIGFjY2Vzc29ycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmxvYWRSZWNvcmRzID0gbG9hZFJlY29yZHM7XHJcbmV4cG9ydHMudW5sb2FkUmVjb3JkcyA9IHVubG9hZFJlY29yZHM7XHJcbmV4cG9ydHMucmVzZXRTaG93blJlY29yZCA9IHJlc2V0U2hvd25SZWNvcmQ7XHJcbmV4cG9ydHMuc2h1ZmZsZVJlY29yZHMgPSBzaHVmZmxlUmVjb3JkcztcclxuZXhwb3J0cy5mbGlwU2VsZWN0ZWRSZWNvcmQgPSBmbGlwU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuZmxpcEJhY2tTZWxlY3RlZFJlY29yZCA9IGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0UHJldlJlY29yZCA9IHNlbGVjdFByZXZSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0TmV4dFJlY29yZCA9IHNlbGVjdE5leHRSZWNvcmQ7XHJcbmV4cG9ydHMuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuZXhwb3J0cy5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBQVUJMSUMgQVBJICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9zdGF0cy1qcy9idWlsZC9zdGF0cy5taW4uanMiLCJub2RlX21vZHVsZXMvdHdlZW4uanMvaW5kZXguanMiLCJzcmMvY3JhdGVkaWdnZXIvQ2FtZXJhTWFuYWdlci5qcyIsInNyYy9jcmF0ZWRpZ2dlci9Db25zdGFudHMuanMiLCJzcmMvY3JhdGVkaWdnZXIvUmVjb3JkLmpzIiwic3JjL2NyYXRlZGlnZ2VyL2luZGV4LmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXIuanMiLCJzcmMvY3JhdGVkaWdnZXIvdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9GWEFBU2hhZGVyLmpzIiwic3JjL2NyYXRlZGlnZ2VyL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcy5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvUmVuZGVyUGFzcy5qcyIsInNyYy9jcmF0ZWRpZ2dlci90aHJlZWpzX21vZHVsZXMvU2hhZGVyUGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY3JhdGVkaWdnZXIgPSByZXF1aXJlKCcuL2NyYXRlZGlnZ2VyJyk7XHJcblxyXG52YXIgZGF0YSA9IEpTT04ucGFyc2UoJ1t7XCJ0aXRsZVwiOlwiU28gV2hhdFwiLFwiYXJ0aXN0XCI6XCJNaWxlcyBEYXZpc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzYzYmY1ZmU1ZjE1ZjY5YmZlYjA5NzEzOWZjMzRmM2Q3LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDFcIixcImlkXCI6XCJTT0JZQk5WMTQ2MDc3MDNBQ0FcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3RvbGVuIE1vbWVudHNcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0NOTVBIMTJCMEI4MDY0QUFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiVGhlbWUgZm9yIE1heGluZVwiLFwiYXJ0aXN0XCI6XCJXb29keSBTaGF3XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmI5MzdmMWUxZDU3Zjc1NDJhNjRjNzRiMTNjNDc5MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTUxTR1cxMzEzNDM4NDFBN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNb2FuaW5cXCcgTWFtYm9cIixcImFydGlzdFwiOlwiTWluZ3VzIEJpZyBCYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGNkMTU2NWNmM2RkNjYzZjdiNzQ5MmU0ZGEzNzg4NTUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPVlFMVlgxMzEzNDM4NkFGOVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTdW1tZXJ0aW1lXCIsXCJhcnRpc3RcIjpcIk9zY2FyIFBldGVyc29uXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZhY2RmNGE5NzVlZGY5NTU2MTgyZDdjNmEzMWU1OTYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1OVwiLFwiaWRcIjpcIlNPRk5XVFYxMzc3MTI3MzlCQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZWEgZm9yIFR3b1wiLFwiYXJ0aXN0XCI6XCJMZXN0ZXIgWW91bmdcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci84ZWZmYmQ4ZGM3YTk1ZjA2YzVhY2E4ZTZlY2YzYTc4ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk3XCIsXCJpZFwiOlwiU09BUEJNUTE0NEM0QTE4Q0Q0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpbmUgVXBcIixcImFydGlzdFwiOlwiTGVubmllIFRyaXN0YW5vXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMjNiMjc2NmMyNDU3YmU1MDJlM2I3OWYwODhjYjhiYTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQlBEUlExMzEzNDM5QkE1MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJIFJlbWVtYmVyIENsaWZmb3JkXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lZmE3MDZlMWQzZmMxMzYzYzdhNWYwN2Y5MDg4YTZjYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09DUlVXTzEyQUIwMTg0ODQ2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbCBUaGUgVGhpbmdzIFlvdSBBcmVcIixcImFydGlzdFwiOlwiT3NjYXIgUGV0dGlmb3JkXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOGNlOWZjZjBlYzMzM2IwNmMzOGFkOTk5YzhkY2NiMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQkhLVkcxMzE1Q0Q0MUM0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFYXN5IExpdmluZ1wiLFwiYXJ0aXN0XCI6XCJDbGlmZm9yZCBCcm93blwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2U4NDYzNjMwODEzYjZjMjU1MzZjZGJlZjAzMTM0YWUzLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0VWTFJaMTMxMzQzQTI4RDZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2hpcGxhc2hcIixcImFydGlzdFwiOlwiRG9uIEVsbGlzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzRkODdjZjA2MzE5MzdiZGI3OTY3NTQwMjA1NGQzYjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3M1wiLFwiaWRcIjpcIlNPT1ZaSFIxMkE4QzEzMkZBOFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCdW1waW5cXCcgT24gU3Vuc2V0XCIsXCJhcnRpc3RcIjpcIldlcyBNb250Z29tZXJ5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzVmNDM1MjNmY2QwMWIzMDQ2NDg2Njc0ZTA5ZDM3MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk2NlwiLFwiaWRcIjpcIlNPS1hIWlQxNDc4QjYzODg3QVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGb290cHJpbnRzXCIsXCJhcnRpc3RcIjpcIldheW5lIFNob3J0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80MGM0NzY4ZDZlZTI1ZDUzNTZiNWVmYmQwZjY5YzMyNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09aTEZKQTE0NEQxM0QwNzY4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgVHJhaW5cIixcImFydGlzdFwiOlwiSm9obiBDb2x0cmFuZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzFkMDE5ZDgxZjk5YzUyMTMzOTg3OTFjOGEwZDZhMmQxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTdcIixcImlkXCI6XCJTT0FDWVNTMTQ1RkVCQUQ4QzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWxsIEJsdWVzXCIsXCJhcnRpc3RcIjpcIlJvbiBDYXJ0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yZDIwYWU0YzQxMjdjZTZiOGFhNThmMDhiZWNjOWMwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAxXCIsXCJpZFwiOlwiU09CSlFCTTE0NEU1Q0E0RDg5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IEZ1bm55IFZhbGVudGluZVwiLFwiYXJ0aXN0XCI6XCJDaGV0IEJha2VyXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDJmOGI0ZDE1YTYyNDMzMzkwM2M1N2I3ZDRhYTVhYjUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NFwiLFwiaWRcIjpcIlNPQUFRSVoxNDRDNDg2QTkzMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMb3ZlIGZvciBTYWxlXCIsXCJhcnRpc3RcIjpcIkNhbm5vbmJhbGwgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iN2RmNDQwZjJlNzQ2NDc2ODEwYjhmYzM2ZTE5NzBkZi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09QSlFFVTE0NEFENzA1NTg0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhZHkgU2luZ3MgdGhlIEJsdWVzXCIsXCJhcnRpc3RcIjpcIkhlcmJpZSBOaWNob2xzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMTdlYTRhMDUyNjA5NmU1YThmYjIwNzE3Mzg2ZTk5ZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQU9ZVEgxMzc2Rjc4QTRCQVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDbGVvcGF0cmFcXCdzIERyZWFtXCIsXCJhcnRpc3RcIjpcIkJ1ZCBQb3dlbGxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMTNlYTBjZWNjM2U4YjM3MGJkMjFiNDQ1Y2U1YjhjNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09LUEFUVDEyQTZENEY0MTJCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJlcm5pZVxcJ3MgVHVuZVwiLFwiYXJ0aXN0XCI6XCJHZXJyeSBNdWxsaWdhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzdiY2U1YjIxYWQyOWRmMTMwMzY4MTIxYTVjNGJjZjM2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTBcIixcImlkXCI6XCJTT0JKSE9TMTM3NjE4QkU0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGV0IFRoZSBHb29kIFRpbWVzIFJvbGxcIixcImFydGlzdFwiOlwiTGVzdGVyIEJvd2llXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDhlMThkNmU0Zjg0OTkwMDNlZDhjOWViYmM3Y2U3M2EvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQlJQU0QxMzEzNDM4NkIxNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHcm9vdmV5YXJkXCIsXCJhcnRpc3RcIjpcIkhhcm9sZCBMYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMGNhYzYwM2FjNzgyODk4M2VkYjYzYzU5ZjRiMmZmOTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSEFOUkYxMzExQUZFQ0EyRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGYXIgV2VzdFwiLFwiYXJ0aXN0XCI6XCJUaW0gSGFnYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjFkOTY0NTkwNGVhMzQ0MWZlNWM3ZDAyNWM0NTBkMGMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPR0ZZRUwxMkE1OEE3QzBCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNeSBJZGVhbFwiLFwiYXJ0aXN0XCI6XCJLZW5ueSBEb3JoYW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yMjhiMDUzMmU4ZWY4NGE2Y2ZhNDliZWJmZWMyNDI3OC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09GUUtMSDEzMTM0MzlDOUQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlllYXJuaW5cXCdcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0VJR1RNMTJBNkQ0RjkyRTFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTW9hbmluXFwnXCIsXCJhcnRpc3RcIjpcIkFydCBCbGFrZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zZTg0OThkNDliYzNkMDMwYTM2NzMwYWFkYTNjNTUzYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09CV05SWDE0NUZENkI1NUUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpa2UgU29tZW9uZSBpbiBMb3ZlXCIsXCJhcnRpc3RcIjpcIkFydCBGYXJtZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9jODVhZWQwYzRjYjk2YmNjNjc1M2Q2MTQwZGU5Y2Y3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA0XCIsXCJpZFwiOlwiU09CRkdLUDEyQTZENEY4ODM0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNoZWVzZSBDYWtlXCIsXCJhcnRpc3RcIjpcIkRleHRlciBHb3Jkb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NjczNTRhYjA3ZDFmZGNjNjkyNGJiY2UwYTQzMWU2MC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09LUFJYRTEzNzcwNDJCMDdFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNlIFBpZWNlXCIsXCJhcnRpc3RcIjpcIkJpbGwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xMmE0NzJjMTQyMTA1ZTA0OTZlODQyZTQ4NmIyNTJjYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09BWUJIRzE0NEM3NEM1QzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFpblxcJ3QgSXQgRnVua3kgTm93XCIsXCJhcnRpc3RcIjpcIkdyYW50IEdyZWVuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGZlMmIyNGIwNzU0MzVmNjI5MDdkMzYzN2NkODEyYjQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3MFwiLFwiaWRcIjpcIlNPQkFHSlExMzE2NzcxNDc0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJEcml2YVxcJyBNYW5cIixcImFydGlzdFwiOlwiTWF4IFJvYWNoXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvN2FlZTUyZmJmMTVhNmI5YTAzNGEzYTkxNWZiZTBkNjAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMVwiLFwiaWRcIjpcIlNPRVJOSFAxMzc2Nzk0NkNGRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0IEFyZSBZb3UgRG9pbmcgVGhlIFJlc3QgT2YgWW91ciBMaWZlP1wiLFwiYXJ0aXN0XCI6XCJNaWx0IEphY2tzb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMTEzM2U2NWViN2NiZWU5ZTVlMzJkOGYzMWY1MDQ3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTczXCIsXCJpZFwiOlwiU09IWFdXTjEzNzc3NTU3NzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBHaXJsIEZyb20gSXBhbmVtYVwiLFwiYXJ0aXN0XCI6XCJTdGFuIEdldHpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wYjA3MmVkYzE2OTdiNTU4NzIwYzY0MDk0ODM3MWQ3YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09DTkJUTjE0NzhDNDYwM0VEXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsb25lIFRvZ2V0aGVyXCIsXCJhcnRpc3RcIjpcIktlbm55IERvcmhhbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzIyOGIwNTMyZThlZjg0YTZjZmE0OWJlYmZlYzI0Mjc4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTlcIixcImlkXCI6XCJTT0FCUk9JMTJBQjAxN0MzRTVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU2VwdGVtYmVyIEluIFRoZSBSYWluXCIsXCJhcnRpc3RcIjpcIlJveSBIYXJncm92ZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk4YTQ4MmQ4Y2NjYTdiMjIxNTJkNTcxNGMyMmFhNDY0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTRcIixcImlkXCI6XCJTT1BXVElMMTJBOEMxM0JCREZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTG92ZSBUaGVtZSBmcm9tIFxcJ1NwYXJ0YWN1c1xcJ1wiLFwiYXJ0aXN0XCI6XCJZdXNlZiBMYXRlZWZcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iYjUwNTE2YjUwN2FjODc0ODJhNDQ2Y2U0NGIwNjI5ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYxXCIsXCJpZFwiOlwiU09JRkJBUTEzMTFBRkUzMTQ4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbW9zdCBMaWtlIEJlaW5nIGluIExvdmVcIixcImFydGlzdFwiOlwiUmVkIEdhcmxhbmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iM2NmNjk5NWRlMjRkNDNjNzE3ZTQxMzAwZTc4ZjYwNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09BVEhEWjEyQUIwMTg1QjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5pZ2h0IEFuZCBEYXlcIixcImFydGlzdFwiOlwiSm9lIFBhc3NcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xN2VjZDE1YzI0MWJmMzc4ZTY4NGQ1NTNiNGU3YjhiYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA1XCIsXCJpZFwiOlwiU09CWU9BQzEzRTZDQjAxOTI2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNvdXMgTGUgQ2llbCBEZSBQYXJpc1wiLFwiYXJ0aXN0XCI6XCJUb290cyBUaGllbGVtYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODFmODczNDU3YTM0NmIyNmI4NWE4MTIyNTQxYThmMDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTVVXUVMxMkE4QzEzQjJEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTY3JhbWJsZWQgRWdnc1wiLFwiYXJ0aXN0XCI6XCJOYXQgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMjE1NGViZDc1YzI0NzA5NWZlZjUwMGM2ZDVmMTYzYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYwXCIsXCJpZFwiOlwiU09ESkFZWjEzMTFBRkRBMTNGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhbnNhbmFcXCdzIFByaWVzdGVzc1wiLFwiYXJ0aXN0XCI6XCJEb25hbGQgQnlyZFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2MwMGJhNWM0N2Y1ODI1MmU0ZWY4MTI3OWU2ZmViMWEwLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NzNcIixcImlkXCI6XCJTT0RVSklSMTJBNkQ0Rjg1QTBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgTGl0dGxlIEJyb3duIEJvb2tcIixcImFydGlzdFwiOlwiRHVrZSBFbGxpbmd0b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzA1ZWRkMzg2ODQxNzdlMzU1NmIxY2RiZGU0NzY0YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYzXCIsXCJpZFwiOlwiU09HVFRIVjEzNkYyNDA1MkRFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBhdHJpY2lhXCIsXCJhcnRpc3RcIjpcIkFydCBQZXBwZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OTI4YTIyMTEwMDBhODViYmUwMmNkMjk5YjVkNjI5MS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09OVlVQRzEzNzcyMjc0Mzc1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTaWRld2luZGVyXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zOGViZWRkN2M0YTc3YzM1MDJiMmNjNWQ4MGRiMzEwOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09HVFhFWDEyQjBCODA2ODY2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIllvdSBEb25cXCd0IEtub3cgV2hhdCBMb3ZlIElzXCIsXCJhcnRpc3RcIjpcIlNvbm55IFJvbGxpbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OWQ3MjUzN2Y5MTZhOTBjMjdlNjI5YTg3MzA4YmM1My80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU2XCIsXCJpZFwiOlwiU09FRFROTjEzNzcyQTM5RDk0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgTW9ua1wiLFwiYXJ0aXN0XCI6XCJUaGVsb25pb3VzIE1vbmtcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMjM3MjdkYjY4ZjRlZGJiNzhlYjExODA4ZmQ5NTU3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09BVFVDRTE0NEFEMEU4OUQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhcyBWZWdhcyBUYW5nb1wiLFwiYXJ0aXN0XCI6XCJHaWwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zMTZmMDkxMWE1NjA2MDY3OGMyMjQxMjAzODdjZDdhOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTY0XCIsXCJpZFwiOlwiU09GRE9DWTEzNzc1QzM2MTA5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNhbmR1XCIsXCJhcnRpc3RcIjpcIkNsaWZmb3JkIEJyb3duXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYWNkNjFjNDJlMjhkZjdmYmQzMzdmZmQzZTYzODM5MDgvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQUFDRUYxMzE1MkE3MUU5RFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9XScpO1xyXG52YXIgZGF0YTIgPSBKU09OLnBhcnNlKCdbe1widGl0bGVcIjpcIllvdSBHb3QgTWVcIixcImFydGlzdFwiOlwiVGhlIFJvb3RzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODA3NjhlMGM3ZjI2NjJkNzQyNzM0MDRmODc5NjUwYmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPSkFOQk8xNDRCQTA4RUM2MFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0XFwncyBHb2xkZW5cIixcImFydGlzdFwiOlwiSnVyYXNzaWMgNVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2M0MWM2YzM3Njc3MDI1M2Y4ODA1ZjU0MTAzMDg1NjBjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT01ZVUJUMTQ0QzI4NzdEODhcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiRmF6ZXJzXCIsXCJhcnRpc3RcIjpcIktpbmcgR2VlZG9yYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OThkMTlhN2JkOGVmY2FiZmUxOWE5Y2ZmMjAwMzZjNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAzXCIsXCJpZFwiOlwiU09DVEZMRTEzNzY4NkQ0NEQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNoZnV6elwiLFwiYXJ0aXN0XCI6XCJLTURcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mYjM0ZDAzYTQ1MThmMjkyMGFiYjNjOWYxNDk2NjNjMS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09SSkVHRTEzNzE5QjhDMzU4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5vbmUgU2hhbGwgUGFzc1wiLFwiYXJ0aXN0XCI6XCJBZXNvcCBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZmQwMTMwYmI0NzhlZDdmZmY2Y2E4Y2MyODY5M2FlZjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPS0pJWlQxMzExQUZFN0RBRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNQ1xcJ3MgQWN0IExpa2UgVGhleSBEb25cXCd0IEtub3dcIixcImFydGlzdFwiOlwiS1JTLU9uZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT1JJTkFOMTMxMUFGRDg4Q0JcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSXRcXCdzIFRyaWNreVwiLFwiYXJ0aXN0XCI6XCJSdW4tRC5NLkMuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjczODk0NmM1YzQ4NzgwYTA2MDg4NDI0NDdjYzBiNDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4NlwiLFwiaWRcIjpcIlNPREpUUVgxNDRCRDk4NkZENlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHZXQgQnlcIixcImFydGlzdFwiOlwiVGFsaWIgS3dlbGlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mODFlYzY4ZDM3MWM2YzhjNmIzNDk5ZDVkODkzNDRmMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09FR09ZTzEzNzMwREFERTQyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkEgTGl0dGxlIFNvdWxcIixcImFydGlzdFwiOlwiUGV0ZSBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOWIxY2Y4ZGUxZjkzMDg4NTMxZTA1ZjZkMzY3NzE0ZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPQ0VST0sxMkE2RDRGQTVGQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgU2hvdyBHb2VzIE9uXCIsXCJhcnRpc3RcIjpcIkx1cGUgRmlhc2NvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNGYxZTA5Nzg2MTVmZmE1ZmQ3NDMzZDdjM2E3MmQwZDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQ01QWUExMkM1NjQxM0I1RlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXYXZpblxcJyBGbGFnXCIsXCJhcnRpc3RcIjpcIktcXCduYWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzIyMWU4MmU0OWM2NTdmZjJkZGY0MmFiMzAwMzgwMDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPVEJJQ04xMzc1OTI5NTQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJZb3UgR290cyBUbyBDaGlsbFwiLFwiYXJ0aXN0XCI6XCJFUE1EXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzFjMjI1Y2E5YWNjYjBjMTNmYjk3ZjY4NGI0NDkzN2YvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSE5YRFExNDE5MTdFM0U4OFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFdmVyeXRoaW5nIENoYW5nZXNcIixcImFydGlzdFwiOlwiQWNleWFsb25lXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDUyODFkZWE2ZWJjMTUwY2M4NDUyNDJlZjA2Zjg2NzUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPRFlVUVgxMzEzNDNBNTZCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDLlIuRS5BLk0uXCIsXCJhcnRpc3RcIjpcIld1LVRhbmcgQ2xhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2Y2NjhiMTc5MzY2YmIzZWQ2MjNkZDhiY2NkMmYzOGViLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTNcIixcImlkXCI6XCJTT0hZSklaMTQ2MDM3OTYxQTlcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3dlZXRlc3QgR2lybCAoRG9sbGFyIEJpbGwpXCIsXCJhcnRpc3RcIjpcIld5Y2xlZiBKZWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjk4NmIyZjFkM2ZhNTBhNWE4YTk0MDJjZDI3M2FmMGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPRFVBTEkxMzEzNDM4QjUzRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCcmVhdGhlIEFuZCBTdG9wXCIsXCJhcnRpc3RcIjpcIlEtVGlwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzI0MzE1ODQ2NTM5YWU5YTQzMDYzOGJkNzg1MzhmMmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPRVVWRUgxMkIwQjgwODZGNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNcy4gSmFja3NvblwiLFwiYXJ0aXN0XCI6XCJPdXRLYXN0XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjUzMzE2OTkzYTc5ZjkzNmRjZGVjNzU3M2UyNjI1NmYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPU1JEUFMxNDRCMjhFQ0VCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDaGlsZHJlblxcJ3MgU3RvcnlcIixcImFydGlzdFwiOlwiU2xpY2sgUmlja1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzVlZjg1YTczOGQ2ZmQzMjEyMGQwZTJiNWNiYzAyMjJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5ODhcIixcImlkXCI6XCJTT0RRSE9MMTQ0QkQ5NEM0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUGFpZCBJbiBGdWxsXCIsXCJhcnRpc3RcIjpcIkVyaWMgQi4gJiBSYWtpbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzliYWRmMGU1NGRmZjlkZTY5MjExYTc1MTc5NzUwZDg4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0JUWUZGMTQ2MDA5RDIzMTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2F0Y2ggT3V0IE5vd1wiLFwiYXJ0aXN0XCI6XCJUaGUgQmVhdG51dHNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci81ODc3NThhNWI1NWJkNGMwN2VkMmIyMjZiYzM1MmZhMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09OSkJPSTEzMTVDRDQ4OUVDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNoYWRvd2JveGluXFwnIChBbGJ1bSBWZXJzaW9uIChFeHBsaWNpdCkpXCIsXCJhcnRpc3RcIjpcIkdaQVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQ4YTllMzFmZjMzYmEzZjc1NTAxZGQ3YTM2NmI5Y2QxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0NNU1ZCMTJCMEI4MDgyMzBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTHVjaGluaSBBa2EgVGhpcyBJcyBJdFwiLFwiYXJ0aXN0XCI6XCJDYW1wIExvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjIyNDRmYmNmMzg0MWYwY2E5Y2U3Y2QzMTY2ZTVjZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5N1wiLFwiaWRcIjpcIlNPQ0xTQUQxMzEzNDM5OTk0N1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJVa25vd2hvd3dlZHVcIixcImFydGlzdFwiOlwiQmFoYW1hZGlhXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzE0ZDE4MTBjZGU5ZGZjOTQwMWY4ZTg5Y2QyMTg1MmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPS0lMQVQxMkE2RDRGN0ZDN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXb25cXCd0IERvXCIsXCJhcnRpc3RcIjpcIkogRGlsbGFcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wODhmMTYzMDg3ZDdhZjcyODgxZGI1NzRlYmE0MDY3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09HSEFSSzEyQTU4QTdEMTI4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNyYXp5XCIsXCJhcnRpc3RcIjpcIkduYXJscyBCYXJrbGV5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZjOWFiYjM5NzJkZWU3YjZiOGI2MjRiZWIwOGI2N2MvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNlwiLFwiaWRcIjpcIlNPQktNS1AxNDUwOUE3RjM2RVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGdWxsIENsaXBcIixcImFydGlzdFwiOlwiR2FuZyBTdGFyclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzE2OWY5OTRkN2FiMmE4ZDg2OGNkZTc3ZmQ1NjZjYmJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0FLQVhHMTQ1NkIwN0I5REFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQ29hc3RpblxcJyBmZWF0LiBLLiBGbGF5XCIsXCJhcnRpc3RcIjpcIlppb24gSVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzAzZWExYzQ2NTViNDRjNTg2ZTkwZGQ0ZDVmOWUxYWFjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDlcIixcImlkXCI6XCJTT1ZYWllZMTJBQjAxODREQTRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiT25lXCIsXCJhcnRpc3RcIjpcIkdob3N0ZmFjZSBLaWxsYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zYTVkYTZiNTM1ZjVmNzMwN2NiYTYyZDQyMDExY2I1Zi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09QRERCSzEzMTJBOEE4RkQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkhpcCBIb3BcIixcImFydGlzdFwiOlwiTW9zIERlZlwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzg5ZTI4YTBhOTNlZmY5ZGM1NzQ0NzY3MTBiNWMwOWUyLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0dXR1NKMTJBRjcyQThBQzJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgUGhpbG9zb3BoeVwiLFwiYXJ0aXN0XCI6XCJCb29naWUgRG93biBQcm9kdWN0aW9uc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT0RMVkVUMTJBNThBNzdBMzFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV29yc3QgQ29tZXMgVG8gV29yc3RcIixcImFydGlzdFwiOlwiRGlsYXRlZCBQZW9wbGVzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmVmMjJiODhkNzRjOWZjNzlhMDkyMWQ1ZjQ3OTUxOGYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPREVLUUsxMzE2NzcxNDZDNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJZiBZb3UgTXVzdFwiLFwiYXJ0aXN0XCI6XCJEZWwgdGhlIEZ1bmt5IEhvbW9zYXBpZW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kZjFiMGEyOGVlNjVlZmM1NGE1OTYwOTkxYTk2Yjg3Mi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09SRUdRRjEyQjBCODA2NThFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldoZW4gSSBCIE9uIFRoYSBNaWNcIixcImFydGlzdFwiOlwiUmFraW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80ZGRjZmE1ZTY5YTFiNzlhY2JlMjBmNGNlMjgyNDc1Yy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09PQ01TRjEzNkNBMkU5QkMxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkx5cmljYWwgU3dvcmRzXCIsXCJhcnRpc3RcIjpcIlJhcyBLYXNzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjI0ZmU3M2ZmYTM0YjlmOTk3YmE0YTI2MzFjMDMzNGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPREVYR08xMkE4QzEzQzAxRFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTaGltbXkgU2hpbW15IFlhXCIsXCJhcnRpc3RcIjpcIk9sXFwnIERpcnR5IEJhc3RhcmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83ODYzODhkMzY4OTAwZjY2ZjA1YmQzODMxYmRhNGZmOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09ZVk5YTjE0NEIyNkI3MUEyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTZWVkICgyLjApXCIsXCJhcnRpc3RcIjpcIlRoZSBSb290c1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQxMWZmZDg5MTFmMWZjMDVjMjA1ZTg2NTA5ZjZlY2ExLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0NaWlVVMTQ0RjUwMEYxNkZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSWNlIENyZWFtXCIsXCJhcnRpc3RcIjpcIlJhZWt3b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NWM5Zjg0YjE4OWMyYmMzMTA2NDdlNjFiN2E2ZDVlOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09XVFFGWTEzNUMzOTVFOThDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk1pbGsgVGhlIENvd1wiLFwiYXJ0aXN0XCI6XCJDYXBwYWRvbm5hXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNTk1M2I0NWQ2NzE2ZmNiM2IyZmQyMjIwNzJhYzQwMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPQ0VHQ0YxMzExQUZFNUQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJSdW5uaW5cXCdcIixcImFydGlzdFwiOlwiVGhlIFBoYXJjeWRlXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzFkZTdjYTFhZWEwNjNhODdkY2EwODkwN2Q3ZDlkMTEvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxM1wiLFwiaWRcIjpcIlNPTEZZQUQxMzdBRDc2MzNCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgQ2hvaWNlIElzIFlvdXJzXCIsXCJhcnRpc3RcIjpcIkJsYWNrIFNoZWVwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDhhYzRmYWU1NTlmYjAwNWRkZjdmMGVkNWFkYmYyZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5MVwiLFwiaWRcIjpcIlNPRVZFUFkxMkE2MzEwRUFEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZW5uZXNzZWVcIixcImFydGlzdFwiOlwiQXJyZXN0ZWQgRGV2ZWxvcG1lbnRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yYzcwMzllNjE4OGJlNDRhODYwMGE4Zjg3ZWRiNWVjNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkyXCIsXCJpZFwiOlwiU09JWEFZWDEyQThDMTM5MDMyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlN1Z2FyIEhpbGxcIixcImFydGlzdFwiOlwiQVpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iMmVhYzEyMzVjNWVjNjc2MTJkMmZhMGNjZTNjNzkwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09FQ0pYVjEzNkE1QjVFQjVFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxvdW5naW5cXCdcIixcImFydGlzdFwiOlwiR3VydVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzlhZjA0NzE3MWM1MTRkN2Q1NThiZTRkMmViMGE2MzdkLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDhcIixcImlkXCI6XCJTT0hMQ0NTMTMxMkE4QUQyQzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGEgUmh1bWJhXCIsXCJhcnRpc3RcIjpcIkJvYmJ5IERpZ2l0YWxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzk4YTExYzQzNGNhNzZiNTU1NTNlYWExNzIyYTRhZC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09GWE5FSjEyQjBCODBCRDM1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk4uWS4gU3RhdGUgT2YgTWluZFwiLFwiYXJ0aXN0XCI6XCJOYXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lN2Y1YWNkZmJjMWM0OWJjNDUyMDkzOGI0ZDc3NWVjNi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk0XCIsXCJpZFwiOlwiU09GUUtRTzEzMTJGRTAwNjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkF3YXJkIFRvdXJcIixcImFydGlzdFwiOlwiQSBUcmliZSBDYWxsZWQgUXVlc3RcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYWNiNTc2OTFmOTc0NTZlNjU5NGQ4ZTk5MWJiODFiYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkzXCIsXCJpZFwiOlwiU09ER1FCRjE0NEJEOEY0RkQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IERlZmluaXRpb24gT2YgQSBCb29tYmFzdGljIEphenogU3R5bGVcIixcImFydGlzdFwiOlwiRHJlYW0gV2FycmlvcnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xZjliZmE0Yzc2NjVlMDdmYzdkZmM3YWI0ZTU5ZWM0OS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09FSEhaRTE0NEU2MDRDMjlCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlJlYWR5IG9yIE5vdFwiLFwiYXJ0aXN0XCI6XCJGdWdlZXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wNGE1NTI2YjdiOTRjNmUyZDYxN2FkZTc2MmRkZjVkYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk2XCIsXCJpZFwiOlwiU09DR1FBSjEzNjA3N0U4OTQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX1dJyk7XHJcblxyXG52YXIgYm90dG9tQmFyICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3R0b20tYmFyJyk7XHJcbnZhciBidXR0b25QcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1wcmV2Jyk7XHJcbnZhciBidXR0b25TaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zaG93Jyk7XHJcbnZhciBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXh0Jyk7XHJcblxyXG5jcmF0ZWRpZ2dlci5pbml0KHtcclxuXHJcblx0ZGVidWc6IHRydWUsXHJcblxyXG4gICAgZWxlbWVudHM6IHtcclxuICAgICAgICByb290Q29udGFpbmVySWQgICAgIDogJ2NyYXRlZGlnZ2VyJyxcclxuICAgICAgICBjYW52YXNDb250YWluZXJJZCAgIDogJ2NyYXRlZGlnZ2VyLWNhbnZhcycsXHJcbiAgICAgICAgbG9hZGluZ0NvbnRhaW5lcklkICA6ICdjcmF0ZWRpZ2dlci1sb2FkaW5nJyxcclxuICAgICAgICBpbmZvQ29udGFpbmVySWQgICAgIDogJ2NyYXRlZGlnZ2VyLWluZm8nLFxyXG4gICAgICAgIHRpdGxlQ29udGFpbmVySWQgICAgOiAnY3JhdGVkaWdnZXItcmVjb3JkLXRpdGxlJyxcclxuICAgICAgICBhcnRpc3RDb250YWluZXJJZCAgIDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1hcnRpc3QnLFxyXG4gICAgICAgIGNvdmVyQ29udGFpbmVySWQgICAgOiAnY3JhdGVkaWdnZXItcmVjb3JkLWNvdmVyJ1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkluZm9QYW5lbE9wZW5lZDogZnVuY3Rpb24oKSB7XHJcbiAgICBcdGJvdHRvbUJhci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcclxuICAgIH0sXHJcblxyXG5cdG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbigpIHtcclxuXHRcdGJvdHRvbUJhci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuY3JhdGVkaWdnZXIubG9hZFJlY29yZHMoZGF0YSwgdHJ1ZSwgZnVuY3Rpb24oKSB7XHJcblx0Y29uc29sZS5sb2coJ0xvYWRlZCAhJyk7XHJcbn0pO1xyXG5cclxuYnV0dG9uUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRjcmF0ZWRpZ2dlci5zZWxlY3RQcmV2UmVjb3JkKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0sIGZhbHNlKTtcclxuXHJcbmJ1dHRvblNob3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0aWYgKGNyYXRlZGlnZ2VyLmdldFNlbGVjdGVkUmVjb3JkKCkpIHtcclxuXHRcdGNyYXRlZGlnZ2VyLmZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjcmF0ZWRpZ2dlci5zZWxlY3ROZXh0UmVjb3JkKCk7XHJcblx0fVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59LCBmYWxzZSk7XHJcblxyXG5idXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdGNyYXRlZGlnZ2VyLnNlbGVjdE5leHRSZWNvcmQoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSwgZmFsc2UpOyIsIi8vIHN0YXRzLmpzIC0gaHR0cDovL2dpdGh1Yi5jb20vbXJkb29iL3N0YXRzLmpzXG52YXIgU3RhdHM9ZnVuY3Rpb24oKXt2YXIgbD1EYXRlLm5vdygpLG09bCxnPTAsbj1JbmZpbml0eSxvPTAsaD0wLHA9SW5maW5pdHkscT0wLHI9MCxzPTAsZj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2YuaWQ9XCJzdGF0c1wiO2YuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGIpe2IucHJldmVudERlZmF1bHQoKTt0KCsrcyUyKX0sITEpO2Yuc3R5bGUuY3NzVGV4dD1cIndpZHRoOjgwcHg7b3BhY2l0eTowLjk7Y3Vyc29yOnBvaW50ZXJcIjt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuaWQ9XCJmcHNcIjthLnN0eWxlLmNzc1RleHQ9XCJwYWRkaW5nOjAgMCAzcHggM3B4O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDJcIjtmLmFwcGVuZENoaWxkKGEpO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5pZD1cImZwc1RleHRcIjtpLnN0eWxlLmNzc1RleHQ9XCJjb2xvcjojMGZmO2ZvbnQtZmFtaWx5OkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxNXB4XCI7XG5pLmlubmVySFRNTD1cIkZQU1wiO2EuYXBwZW5kQ2hpbGQoaSk7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLmlkPVwiZnBzR3JhcGhcIjtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo3NHB4O2hlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzBmZlwiO2ZvcihhLmFwcGVuZENoaWxkKGMpOzc0PmMuY2hpbGRyZW4ubGVuZ3RoOyl7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7ai5zdHlsZS5jc3NUZXh0PVwid2lkdGg6MXB4O2hlaWdodDozMHB4O2Zsb2F0OmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojMTEzXCI7Yy5hcHBlbmRDaGlsZChqKX12YXIgZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2QuaWQ9XCJtc1wiO2Quc3R5bGUuY3NzVGV4dD1cInBhZGRpbmc6MCAwIDNweCAzcHg7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzAyMDtkaXNwbGF5Om5vbmVcIjtmLmFwcGVuZENoaWxkKGQpO3ZhciBrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5rLmlkPVwibXNUZXh0XCI7ay5zdHlsZS5jc3NUZXh0PVwiY29sb3I6IzBmMDtmb250LWZhbWlseTpIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6MTVweFwiO2suaW5uZXJIVE1MPVwiTVNcIjtkLmFwcGVuZENoaWxkKGspO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1cIm1zR3JhcGhcIjtlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDo3NHB4O2hlaWdodDozMHB4O2JhY2tncm91bmQtY29sb3I6IzBmMFwiO2ZvcihkLmFwcGVuZENoaWxkKGUpOzc0PmUuY2hpbGRyZW4ubGVuZ3RoOylqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGouc3R5bGUuY3NzVGV4dD1cIndpZHRoOjFweDtoZWlnaHQ6MzBweDtmbG9hdDpsZWZ0O2JhY2tncm91bmQtY29sb3I6IzEzMVwiLGUuYXBwZW5kQ2hpbGQoaik7dmFyIHQ9ZnVuY3Rpb24oYil7cz1iO3N3aXRjaChzKXtjYXNlIDA6YS5zdHlsZS5kaXNwbGF5PVxuXCJibG9ja1wiO2Quc3R5bGUuZGlzcGxheT1cIm5vbmVcIjticmVhaztjYXNlIDE6YS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJ9fTtyZXR1cm57UkVWSVNJT046MTIsZG9tRWxlbWVudDpmLHNldE1vZGU6dCxiZWdpbjpmdW5jdGlvbigpe2w9RGF0ZS5ub3coKX0sZW5kOmZ1bmN0aW9uKCl7dmFyIGI9RGF0ZS5ub3coKTtnPWItbDtuPU1hdGgubWluKG4sZyk7bz1NYXRoLm1heChvLGcpO2sudGV4dENvbnRlbnQ9ZytcIiBNUyAoXCIrbitcIi1cIitvK1wiKVwiO3ZhciBhPU1hdGgubWluKDMwLDMwLTMwKihnLzIwMCkpO2UuYXBwZW5kQ2hpbGQoZS5maXJzdENoaWxkKS5zdHlsZS5oZWlnaHQ9YStcInB4XCI7cisrO2I+bSsxRTMmJihoPU1hdGgucm91bmQoMUUzKnIvKGItbSkpLHA9TWF0aC5taW4ocCxoKSxxPU1hdGgubWF4KHEsaCksaS50ZXh0Q29udGVudD1oK1wiIEZQUyAoXCIrcCtcIi1cIitxK1wiKVwiLGE9TWF0aC5taW4oMzAsMzAtMzAqKGgvMTAwKSksYy5hcHBlbmRDaGlsZChjLmZpcnN0Q2hpbGQpLnN0eWxlLmhlaWdodD1cbmErXCJweFwiLG09YixyPTApO3JldHVybiBifSx1cGRhdGU6ZnVuY3Rpb24oKXtsPXRoaXMuZW5kKCl9fX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1TdGF0cyk7XG4iLCIvKipcbiAqIFR3ZWVuLmpzIC0gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc29sZS90d2Vlbi5qc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc29sZS90d2Vlbi5qcy9ncmFwaHMvY29udHJpYnV0b3JzIGZvciB0aGUgZnVsbCBsaXN0IG9mIGNvbnRyaWJ1dG9ycy5cbiAqIFRoYW5rIHlvdSBhbGwsIHlvdSdyZSBhd2Vzb21lIVxuICovXG5cbi8vIERhdGUubm93IHNoaW0gZm9yIChhaGVtKSBJbnRlcm5ldCBFeHBsbyhkfHIpZXJcbmlmICggRGF0ZS5ub3cgPT09IHVuZGVmaW5lZCApIHtcblxuXHREYXRlLm5vdyA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcblxuXHR9O1xuXG59XG5cbnZhciBUV0VFTiA9IFRXRUVOIHx8ICggZnVuY3Rpb24gKCkge1xuXG5cdHZhciBfdHdlZW5zID0gW107XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAnMTQnLFxuXG5cdFx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBfdHdlZW5zO1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRfdHdlZW5zID0gW107XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAoIHR3ZWVuICkge1xuXG5cdFx0XHRfdHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cblx0XHR9LFxuXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbiAoIHR3ZWVuICkge1xuXG5cdFx0XHR2YXIgaSA9IF90d2VlbnMuaW5kZXhPZiggdHdlZW4gKTtcblxuXHRcdFx0aWYgKCBpICE9PSAtMSApIHtcblxuXHRcdFx0XHRfdHdlZW5zLnNwbGljZSggaSwgMSApO1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHRcdGlmICggX3R3ZWVucy5sZW5ndGggPT09IDAgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0dGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCkgKTtcblxuXHRcdFx0d2hpbGUgKCBpIDwgX3R3ZWVucy5sZW5ndGggKSB7XG5cblx0XHRcdFx0aWYgKCBfdHdlZW5zWyBpIF0udXBkYXRlKCB0aW1lICkgKSB7XG5cblx0XHRcdFx0XHRpKys7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdF90d2VlbnMuc3BsaWNlKCBpLCAxICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0fVxuXHR9O1xuXG59ICkoKTtcblxuVFdFRU4uVHdlZW4gPSBmdW5jdGlvbiAoIG9iamVjdCApIHtcblxuXHR2YXIgX29iamVjdCA9IG9iamVjdDtcblx0dmFyIF92YWx1ZXNTdGFydCA9IHt9O1xuXHR2YXIgX3ZhbHVlc0VuZCA9IHt9O1xuXHR2YXIgX3ZhbHVlc1N0YXJ0UmVwZWF0ID0ge307XG5cdHZhciBfZHVyYXRpb24gPSAxMDAwO1xuXHR2YXIgX3JlcGVhdCA9IDA7XG5cdHZhciBfeW95byA9IGZhbHNlO1xuXHR2YXIgX2lzUGxheWluZyA9IGZhbHNlO1xuXHR2YXIgX3JldmVyc2VkID0gZmFsc2U7XG5cdHZhciBfZGVsYXlUaW1lID0gMDtcblx0dmFyIF9zdGFydFRpbWUgPSBudWxsO1xuXHR2YXIgX2Vhc2luZ0Z1bmN0aW9uID0gVFdFRU4uRWFzaW5nLkxpbmVhci5Ob25lO1xuXHR2YXIgX2ludGVycG9sYXRpb25GdW5jdGlvbiA9IFRXRUVOLkludGVycG9sYXRpb24uTGluZWFyO1xuXHR2YXIgX2NoYWluZWRUd2VlbnMgPSBbXTtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cdHZhciBfb25VcGRhdGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25Db21wbGV0ZUNhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0b3BDYWxsYmFjayA9IG51bGw7XG5cblx0Ly8gU2V0IGFsbCBzdGFydGluZyB2YWx1ZXMgcHJlc2VudCBvbiB0aGUgdGFyZ2V0IG9iamVjdFxuXHRmb3IgKCB2YXIgZmllbGQgaW4gb2JqZWN0ICkge1xuXG5cdFx0X3ZhbHVlc1N0YXJ0WyBmaWVsZCBdID0gcGFyc2VGbG9hdChvYmplY3RbZmllbGRdLCAxMCk7XG5cblx0fVxuXG5cdHRoaXMudG8gPSBmdW5jdGlvbiAoIHByb3BlcnRpZXMsIGR1cmF0aW9uICkge1xuXG5cdFx0aWYgKCBkdXJhdGlvbiAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRfZHVyYXRpb24gPSBkdXJhdGlvbjtcblxuXHRcdH1cblxuXHRcdF92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKCB0aW1lICkge1xuXG5cdFx0VFdFRU4uYWRkKCB0aGlzICk7XG5cblx0XHRfaXNQbGF5aW5nID0gdHJ1ZTtcblxuXHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXG5cdFx0X3N0YXJ0VGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCkgKTtcblx0XHRfc3RhcnRUaW1lICs9IF9kZWxheVRpbWU7XG5cblx0XHRmb3IgKCB2YXIgcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCApIHtcblxuXHRcdFx0Ly8gY2hlY2sgaWYgYW4gQXJyYXkgd2FzIHByb3ZpZGVkIGFzIHByb3BlcnR5IHZhbHVlXG5cdFx0XHRpZiAoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gaW5zdGFuY2VvZiBBcnJheSApIHtcblxuXHRcdFx0XHRpZiAoIF92YWx1ZXNFbmRbIHByb3BlcnR5IF0ubGVuZ3RoID09PSAwICkge1xuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNyZWF0ZSBhIGxvY2FsIGNvcHkgb2YgdGhlIEFycmF5IHdpdGggdGhlIHN0YXJ0IHZhbHVlIGF0IHRoZSBmcm9udFxuXHRcdFx0XHRfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdID0gWyBfb2JqZWN0WyBwcm9wZXJ0eSBdIF0uY29uY2F0KCBfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdICk7XG5cblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdID0gX29iamVjdFsgcHJvcGVydHkgXTtcblxuXHRcdFx0aWYoICggX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIGluc3RhbmNlb2YgQXJyYXkgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdF92YWx1ZXNTdGFydFsgcHJvcGVydHkgXSAqPSAxLjA7IC8vIEVuc3VyZXMgd2UncmUgdXNpbmcgbnVtYmVycywgbm90IHN0cmluZ3Ncblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICggIV9pc1BsYXlpbmcgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRUV0VFTi5yZW1vdmUoIHRoaXMgKTtcblx0XHRfaXNQbGF5aW5nID0gZmFsc2U7XG5cblx0XHRpZiAoIF9vblN0b3BDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0X29uU3RvcENhbGxiYWNrLmNhbGwoIF9vYmplY3QgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcENoYWluZWRUd2VlbnMgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKCB2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKysgKSB7XG5cblx0XHRcdF9jaGFpbmVkVHdlZW5zWyBpIF0uc3RvcCgpO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0dGhpcy5kZWxheSA9IGZ1bmN0aW9uICggYW1vdW50ICkge1xuXG5cdFx0X2RlbGF5VGltZSA9IGFtb3VudDtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMucmVwZWF0ID0gZnVuY3Rpb24gKCB0aW1lcyApIHtcblxuXHRcdF9yZXBlYXQgPSB0aW1lcztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMueW95byA9IGZ1bmN0aW9uKCB5b3lvICkge1xuXG5cdFx0X3lveW8gPSB5b3lvO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblxuXHR0aGlzLmVhc2luZyA9IGZ1bmN0aW9uICggZWFzaW5nICkge1xuXG5cdFx0X2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5pbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gKCBpbnRlcnBvbGF0aW9uICkge1xuXG5cdFx0X2ludGVycG9sYXRpb25GdW5jdGlvbiA9IGludGVycG9sYXRpb247XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLmNoYWluID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0X2NoYWluZWRUd2VlbnMgPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RhcnQgPSBmdW5jdGlvbiAoIGNhbGxiYWNrICkge1xuXG5cdFx0X29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblVwZGF0ZSA9IGZ1bmN0aW9uICggY2FsbGJhY2sgKSB7XG5cblx0XHRfb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMub25TdG9wID0gZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdF9vblN0b3BDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoIHRpbWUgKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cblx0XHRpZiAoIHRpbWUgPCBfc3RhcnRUaW1lICkge1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdH1cblxuXHRcdGlmICggX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSApIHtcblxuXHRcdFx0aWYgKCBfb25TdGFydENhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRcdF9vblN0YXJ0Q2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cblx0XHR9XG5cblx0XHR2YXIgZWxhcHNlZCA9ICggdGltZSAtIF9zdGFydFRpbWUgKSAvIF9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuXHRcdHZhciB2YWx1ZSA9IF9lYXNpbmdGdW5jdGlvbiggZWxhcHNlZCApO1xuXG5cdFx0Zm9yICggcHJvcGVydHkgaW4gX3ZhbHVlc0VuZCApIHtcblxuXHRcdFx0dmFyIHN0YXJ0ID0gX3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdIHx8IDA7XG5cdFx0XHR2YXIgZW5kID0gX3ZhbHVlc0VuZFsgcHJvcGVydHkgXTtcblxuXHRcdFx0aWYgKCBlbmQgaW5zdGFuY2VvZiBBcnJheSApIHtcblxuXHRcdFx0XHRfb2JqZWN0WyBwcm9wZXJ0eSBdID0gX2ludGVycG9sYXRpb25GdW5jdGlvbiggZW5kLCB2YWx1ZSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIFBhcnNlcyByZWxhdGl2ZSBlbmQgdmFsdWVzIHdpdGggc3RhcnQgYXMgYmFzZSAoZS5nLjogKzEwLCAtMylcblx0XHRcdFx0aWYgKCB0eXBlb2YoZW5kKSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRlbmQgPSBzdGFydCArIHBhcnNlRmxvYXQoZW5kLCAxMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBwcm90ZWN0IGFnYWluc3Qgbm9uIG51bWVyaWMgcHJvcGVydGllcy5cblx0XHRcdFx0aWYgKCB0eXBlb2YoZW5kKSA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0XHRfb2JqZWN0WyBwcm9wZXJ0eSBdID0gc3RhcnQgKyAoIGVuZCAtIHN0YXJ0ICkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoIF9vblVwZGF0ZUNhbGxiYWNrICE9PSBudWxsICkge1xuXG5cdFx0XHRfb25VcGRhdGVDYWxsYmFjay5jYWxsKCBfb2JqZWN0LCB2YWx1ZSApO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBlbGFwc2VkID09IDEgKSB7XG5cblx0XHRcdGlmICggX3JlcGVhdCA+IDAgKSB7XG5cblx0XHRcdFx0aWYoIGlzRmluaXRlKCBfcmVwZWF0ICkgKSB7XG5cdFx0XHRcdFx0X3JlcGVhdC0tO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcmVhc3NpZ24gc3RhcnRpbmcgdmFsdWVzLCByZXN0YXJ0IGJ5IG1ha2luZyBzdGFydFRpbWUgPSBub3dcblx0XHRcdFx0Zm9yKCBwcm9wZXJ0eSBpbiBfdmFsdWVzU3RhcnRSZXBlYXQgKSB7XG5cblx0XHRcdFx0XHRpZiAoIHR5cGVvZiggX3ZhbHVlc0VuZFsgcHJvcGVydHkgXSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdICsgcGFyc2VGbG9hdChfdmFsdWVzRW5kWyBwcm9wZXJ0eSBdLCAxMCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKF95b3lvKSB7XG5cdFx0XHRcdFx0XHR2YXIgdG1wID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdO1xuXHRcdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc0VuZFsgcHJvcGVydHkgXTtcblx0XHRcdFx0XHRcdF92YWx1ZXNFbmRbIHByb3BlcnR5IF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0X3ZhbHVlc1N0YXJ0WyBwcm9wZXJ0eSBdID0gX3ZhbHVlc1N0YXJ0UmVwZWF0WyBwcm9wZXJ0eSBdO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRfcmV2ZXJzZWQgPSAhX3JldmVyc2VkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X3N0YXJ0VGltZSA9IHRpbWUgKyBfZGVsYXlUaW1lO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGlmICggX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2suY2FsbCggX29iamVjdCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDAsIG51bUNoYWluZWRUd2VlbnMgPSBfY2hhaW5lZFR3ZWVucy5sZW5ndGg7IGkgPCBudW1DaGFpbmVkVHdlZW5zOyBpKysgKSB7XG5cblx0XHRcdFx0XHRfY2hhaW5lZFR3ZWVuc1sgaSBdLnN0YXJ0KCB0aW1lICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fTtcblxufTtcblxuXG5UV0VFTi5FYXNpbmcgPSB7XG5cblx0TGluZWFyOiB7XG5cblx0XHROb25lOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhZHJhdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogKCAyIC0gayApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGs7XG5cdFx0XHRyZXR1cm4gLSAwLjUgKiAoIC0tayAqICggayAtIDIgKSAtIDEgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEN1YmljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGsgKiBrO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiBrICsgMiApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhcnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gKCAtLWsgKiBrICogayAqIGsgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcblx0XHRcdHJldHVybiAtIDAuNSAqICggKCBrIC09IDIgKSAqIGsgKiBrICogayAtIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1aW50aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogayAqIGsgKiBrICogayAqIGs7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqIGsgKiBrICogayArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFNpbnVzb2lkYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAxIC0gTWF0aC5jb3MoIGsgKiBNYXRoLlBJIC8gMiApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zaW4oIGsgKiBNYXRoLlBJIC8gMiApO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiAwLjUgKiAoIDEgLSBNYXRoLmNvcyggTWF0aC5QSSAqIGsgKSApO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0RXhwb25lbnRpYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHJldHVybiBrID09PSAwID8gMCA6IE1hdGgucG93KCAxMDI0LCBrIC0gMSApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gayA9PT0gMSA/IDEgOiAxIC0gTWF0aC5wb3coIDIsIC0gMTAgKiBrICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gMC41ICogTWF0aC5wb3coIDEwMjQsIGsgLSAxICk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAtIE1hdGgucG93KCAyLCAtIDEwICogKCBrIC0gMSApICkgKyAyICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDaXJjdWxhcjoge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLnNxcnQoIDEgLSBrICogayApO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zcXJ0KCAxIC0gKCAtLWsgKiBrICkgKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKCBrICkge1xuXG5cdFx0XHRpZiAoICggayAqPSAyICkgPCAxKSByZXR1cm4gLSAwLjUgKiAoIE1hdGguc3FydCggMSAtIGsgKiBrKSAtIDEpO1xuXHRcdFx0cmV0dXJuIDAuNSAqICggTWF0aC5zcXJ0KCAxIC0gKCBrIC09IDIpICogaykgKyAxKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEVsYXN0aWM6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRyZXR1cm4gLSAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzLCBhID0gMC4xLCBwID0gMC40O1xuXHRcdFx0aWYgKCBrID09PSAwICkgcmV0dXJuIDA7XG5cdFx0XHRpZiAoIGsgPT09IDEgKSByZXR1cm4gMTtcblx0XHRcdGlmICggIWEgfHwgYSA8IDEgKSB7IGEgPSAxOyBzID0gcCAvIDQ7IH1cblx0XHRcdGVsc2UgcyA9IHAgKiBNYXRoLmFzaW4oIDEgLyBhICkgLyAoIDIgKiBNYXRoLlBJICk7XG5cdFx0XHRyZXR1cm4gKCBhICogTWF0aC5wb3coIDIsIC0gMTAgKiBrKSAqIE1hdGguc2luKCAoIGsgLSBzICkgKiAoIDIgKiBNYXRoLlBJICkgLyBwICkgKyAxICk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMsIGEgPSAwLjEsIHAgPSAwLjQ7XG5cdFx0XHRpZiAoIGsgPT09IDAgKSByZXR1cm4gMDtcblx0XHRcdGlmICggayA9PT0gMSApIHJldHVybiAxO1xuXHRcdFx0aWYgKCAhYSB8fCBhIDwgMSApIHsgYSA9IDE7IHMgPSBwIC8gNDsgfVxuXHRcdFx0ZWxzZSBzID0gcCAqIE1hdGguYXNpbiggMSAvIGEgKSAvICggMiAqIE1hdGguUEkgKTtcblx0XHRcdGlmICggKCBrICo9IDIgKSA8IDEgKSByZXR1cm4gLSAwLjUgKiAoIGEgKiBNYXRoLnBvdyggMiwgMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICk7XG5cdFx0XHRyZXR1cm4gYSAqIE1hdGgucG93KCAyLCAtMTAgKiAoIGsgLT0gMSApICkgKiBNYXRoLnNpbiggKCBrIC0gcyApICogKCAyICogTWF0aC5QSSApIC8gcCApICogMC41ICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1ODtcblx0XHRcdHJldHVybiBrICogayAqICggKCBzICsgMSApICogayAtIHMgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiAoICggcyArIDEgKSAqIGsgKyBzICkgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoIGsgKSB7XG5cblx0XHRcdHZhciBzID0gMS43MDE1OCAqIDEuNTI1O1xuXHRcdFx0aWYgKCAoIGsgKj0gMiApIDwgMSApIHJldHVybiAwLjUgKiAoIGsgKiBrICogKCAoIHMgKyAxICkgKiBrIC0gcyApICk7XG5cdFx0XHRyZXR1cm4gMC41ICogKCAoIGsgLT0gMiApICogayAqICggKCBzICsgMSApICogayArIHMgKSArIDIgKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJvdW5jZToge1xuXG5cdFx0SW46IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCggMSAtIGsgKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrIDwgKCAxIC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiBrICogaztcblxuXHRcdFx0fSBlbHNlIGlmICggayA8ICggMiAvIDIuNzUgKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKCBrIC09ICggMS41IC8gMi43NSApICkgKiBrICsgMC43NTtcblxuXHRcdFx0fSBlbHNlIGlmICggayA8ICggMi41IC8gMi43NSApICkge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjI1IC8gMi43NSApICkgKiBrICsgMC45Mzc1O1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoIGsgLT0gKCAyLjYyNSAvIDIuNzUgKSApICogayArIDAuOTg0Mzc1O1xuXG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uICggayApIHtcblxuXHRcdFx0aWYgKCBrIDwgMC41ICkgcmV0dXJuIFRXRUVOLkVhc2luZy5Cb3VuY2UuSW4oIGsgKiAyICkgKiAwLjU7XG5cdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5PdXQoIGsgKiAyIC0gMSApICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICggdiwgayApIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxLCBmID0gbSAqIGssIGkgPSBNYXRoLmZsb29yKCBmICksIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5MaW5lYXI7XG5cblx0XHRpZiAoIGsgPCAwICkgcmV0dXJuIGZuKCB2WyAwIF0sIHZbIDEgXSwgZiApO1xuXHRcdGlmICggayA+IDEgKSByZXR1cm4gZm4oIHZbIG0gXSwgdlsgbSAtIDEgXSwgbSAtIGYgKTtcblxuXHRcdHJldHVybiBmbiggdlsgaSBdLCB2WyBpICsgMSA+IG0gPyBtIDogaSArIDEgXSwgZiAtIGkgKTtcblxuXHR9LFxuXG5cdEJlemllcjogZnVuY3Rpb24gKCB2LCBrICkge1xuXG5cdFx0dmFyIGIgPSAwLCBuID0gdi5sZW5ndGggLSAxLCBwdyA9IE1hdGgucG93LCBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluLCBpO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPD0gbjsgaSsrICkge1xuXHRcdFx0YiArPSBwdyggMSAtIGssIG4gLSBpICkgKiBwdyggaywgaSApICogdlsgaSBdICogYm4oIG4sIGkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICggdiwgayApIHtcblxuXHRcdHZhciBtID0gdi5sZW5ndGggLSAxLCBmID0gbSAqIGssIGkgPSBNYXRoLmZsb29yKCBmICksIGZuID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5DYXRtdWxsUm9tO1xuXG5cdFx0aWYgKCB2WyAwIF0gPT09IHZbIG0gXSApIHtcblxuXHRcdFx0aWYgKCBrIDwgMCApIGkgPSBNYXRoLmZsb29yKCBmID0gbSAqICggMSArIGsgKSApO1xuXG5cdFx0XHRyZXR1cm4gZm4oIHZbICggaSAtIDEgKyBtICkgJSBtIF0sIHZbIGkgXSwgdlsgKCBpICsgMSApICUgbSBdLCB2WyAoIGkgKyAyICkgJSBtIF0sIGYgLSBpICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoIGsgPCAwICkgcmV0dXJuIHZbIDAgXSAtICggZm4oIHZbIDAgXSwgdlsgMCBdLCB2WyAxIF0sIHZbIDEgXSwgLWYgKSAtIHZbIDAgXSApO1xuXHRcdFx0aWYgKCBrID4gMSApIHJldHVybiB2WyBtIF0gLSAoIGZuKCB2WyBtIF0sIHZbIG0gXSwgdlsgbSAtIDEgXSwgdlsgbSAtIDEgXSwgZiAtIG0gKSAtIHZbIG0gXSApO1xuXG5cdFx0XHRyZXR1cm4gZm4oIHZbIGkgPyBpIC0gMSA6IDAgXSwgdlsgaSBdLCB2WyBtIDwgaSArIDEgPyBtIDogaSArIDEgXSwgdlsgbSA8IGkgKyAyID8gbSA6IGkgKyAyIF0sIGYgLSBpICk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRVdGlsczoge1xuXG5cdFx0TGluZWFyOiBmdW5jdGlvbiAoIHAwLCBwMSwgdCApIHtcblxuXHRcdFx0cmV0dXJuICggcDEgLSBwMCApICogdCArIHAwO1xuXG5cdFx0fSxcblxuXHRcdEJlcm5zdGVpbjogZnVuY3Rpb24gKCBuICwgaSApIHtcblxuXHRcdFx0dmFyIGZjID0gVFdFRU4uSW50ZXJwb2xhdGlvbi5VdGlscy5GYWN0b3JpYWw7XG5cdFx0XHRyZXR1cm4gZmMoIG4gKSAvIGZjKCBpICkgLyBmYyggbiAtIGkgKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6ICggZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR2YXIgYSA9IFsgMSBdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCBuICkge1xuXG5cdFx0XHRcdHZhciBzID0gMSwgaTtcblx0XHRcdFx0aWYgKCBhWyBuIF0gKSByZXR1cm4gYVsgbiBdO1xuXHRcdFx0XHRmb3IgKCBpID0gbjsgaSA+IDE7IGktLSApIHMgKj0gaTtcblx0XHRcdFx0cmV0dXJuIGFbIG4gXSA9IHM7XG5cblx0XHRcdH07XG5cblx0XHR9ICkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uICggcDAsIHAxLCBwMiwgcDMsIHQgKSB7XG5cblx0XHRcdHZhciB2MCA9ICggcDIgLSBwMCApICogMC41LCB2MSA9ICggcDMgLSBwMSApICogMC41LCB0MiA9IHQgKiB0LCB0MyA9IHQgKiB0Mjtcblx0XHRcdHJldHVybiAoIDIgKiBwMSAtIDIgKiBwMiArIHYwICsgdjEgKSAqIHQzICsgKCAtIDMgKiBwMSArIDMgKiBwMiAtIDIgKiB2MCAtIHYxICkgKiB0MiArIHYwICogdCArIHAxO1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxubW9kdWxlLmV4cG9ydHM9VFdFRU47IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcblx0VFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG5cclxuXHRDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvbnN0YW50cycpO1xyXG5cclxudmFyIGNhbWVyYSxcclxuXHR0YXJnZXQ7XHJcblxyXG5mdW5jdGlvbiBpbml0KHJhdGlvKSB7XHJcblxyXG5cdGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIHJhdGlvLCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIC8vICAgICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCwgMSwgMSwgMSkpO1xyXG4gICAgLy8gICAgICAgIHNjZW5lLmFkZCh0YXJnZXQpO1xyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2N1c1JlY29yZChyZWNvcmRYUG9zLCByZWNvcmRBYnNvbHV0ZVBvcykge1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuXHQgICAgLnRvKCB7XHJcblx0ICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG5cdCAgICAgICAgeTogNTAgKyBDb25zdGFudHMuc2NlbmUucmVjb3JkU2hvd25ZLFxyXG5cdCAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG5cdCAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG5cdCAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuXHRuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcblx0ICAgIC50bygge1xyXG5cdCAgICAgICAgeDogcmVjb3JkWFBvcyArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcblx0ICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG5cdCAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MueiArIENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnpcclxuXHQgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuXHQgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gem9vbUluUmVjb3JkKHJlY29yZFhQb3MsIHJlY29yZEFic29sdXRlUG9zKSB7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiByZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkRmxpcHBlZFkgKyA1MCxcclxuICAgICAgICAgICAgejogcmVjb3JkQWJzb2x1dGVQb3MuelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54ICsgODAsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFGb2N1c1Bvc2l0aW9uLnkgLSA1MCxcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHpvb21PdXRSZWNvcmQocmVjb3JkWFBvcywgcmVjb3JkQWJzb2x1dGVQb3MpIHtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IDc1LFxyXG4gICAgICAgICAgICB6OiByZWNvcmRBYnNvbHV0ZVBvcy56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHJlY29yZFhQb3MgKyBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRDYW1lcmEoKSB7XHJcblx0bmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiBDb25zdGFudHMuc2NlbmUudGFyZ2V0QmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS50YXJnZXRCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgejogQ29uc3RhbnRzLnNjZW5lLnRhcmdldEJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogQ29uc3RhbnRzLnNjZW5lLmNhbWVyYUJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUuY2FtZXJhQmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgIHo6IENvbnN0YW50cy5zY2VuZS5jYW1lcmFCYXNlUG9zaXRpb24uelxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2FtZXJhQXNwZWN0KHJhdGlvKSB7XHJcblx0Y2FtZXJhLmFzcGVjdCA9IHJhdGlvO1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9va0F0VGFyZ2V0KCkge1xyXG5cdGNhbWVyYS5sb29rQXQoIHRhcmdldC5wb3NpdGlvbiApO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpbml0OiBpbml0LFxyXG5cdGZvY3VzUmVjb3JkOiBmb2N1c1JlY29yZCxcclxuXHR6b29tSW5SZWNvcmQ6IHpvb21JblJlY29yZCxcclxuXHR6b29tT3V0UmVjb3JkOiB6b29tT3V0UmVjb3JkLFxyXG5cdHJlc2V0Q2FtZXJhOiByZXNldENhbWVyYSxcclxuXHR1cGRhdGVDYW1lcmFBc3BlY3Q6IHVwZGF0ZUNhbWVyYUFzcGVjdCxcclxuXHRsb29rQXRUYXJnZXQ6IGxvb2tBdFRhcmdldCxcclxuXHRcclxuXHRnZXRDYW1lcmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGNhbWVyYTtcclxuXHR9LFxyXG5cdGdldFRhcmdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gdGFyZ2V0O1xyXG5cdH1cclxufVxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5amNtRjBaV1JwWjJkbGNpOURZVzFsY21GTllXNWhaMlZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpZG1GeUlGUklVa1ZGSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lnUHlCM2FXNWtiM2RiSjFSSVVrVkZKMTBnT2lCMGVYQmxiMllnWjJ4dlltRnNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnWjJ4dlltRnNXeWRVU0ZKRlJTZGRJRG9nYm5Wc2JDa3NYSEpjYmx4MFZGZEZSVTRnUFNCeVpYRjFhWEpsS0NkMGQyVmxiaTVxY3ljcExGeHlYRzVjY2x4dVhIUkRiMjV6ZEdGdWRITWdQU0J5WlhGMWFYSmxLQ2N1TDBOdmJuTjBZVzUwY3ljcE8xeHlYRzVjY2x4dWRtRnlJR05oYldWeVlTeGNjbHh1WEhSMFlYSm5aWFE3WEhKY2JseHlYRzVtZFc1amRHbHZiaUJwYm1sMEtISmhkR2x2S1NCN1hISmNibHh5WEc1Y2RHTmhiV1Z5WVNBOUlHNWxkeUJVU0ZKRlJTNVFaWEp6Y0dWamRHbDJaVU5oYldWeVlTZ2dORFVzSUhKaGRHbHZMQ0F3TGpFc0lESXdNREF3SUNrN1hISmNiaUFnSUNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnZ1BTQTBOVHRjY2x4dUlDQWdJR05oYldWeVlTNW1jbUZ0WlZOcGVtVWdQU0F6TWp0Y2NseHVJQ0FnSUdOaGJXVnlZUzV6WlhSTVpXNXpLQ0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2dzSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnS1R0Y2NseHVYSEpjYmlBZ0lDQjBZWEpuWlhRZ1BTQnVaWGNnVkVoU1JVVXVUMkpxWldOME0wUW9LVHRjY2x4dUlDQWdJQzh2SUNBZ0lDQWdJQ0IwWVhKblpYUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDaHVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvTVRBc0lERXdMQ0F4TUN3Z01Td2dNU3dnTVNrcE8xeHlYRzRnSUNBZ0x5OGdJQ0FnSUNBZ0lITmpaVzVsTG1Ga1pDaDBZWEpuWlhRcE8xeHlYRzRnSUNBZ1kyRnRaWEpoTG14dmIydEJkQ2dnZEdGeVoyVjBMbkJ2YzJsMGFXOXVJQ2s3WEhKY2JseHlYRzU5WEhKY2JseHlYRzVtZFc1amRHbHZiaUJtYjJOMWMxSmxZMjl5WkNoeVpXTnZjbVJZVUc5ekxDQnlaV052Y21SQlluTnZiSFYwWlZCdmN5a2dlMXh5WEc1Y2NseHVJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdGeVoyVjBMbkJ2YzJsMGFXOXVJQ2xjY2x4dVhIUWdJQ0FnTG5SdktDQjdYSEpjYmx4MElDQWdJQ0FnSUNCNE9pQnlaV052Y21SWVVHOXpMRnh5WEc1Y2RDQWdJQ0FnSUNBZ2VUb2dOVEFnS3lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1Y21WamIzSmtVMmh2ZDI1WkxGeHlYRzVjZENBZ0lDQWdJQ0FnZWpvZ2NtVmpiM0prUVdKemIyeDFkR1ZRYjNNdWVseHlYRzVjZENBZ0lDQjlMQ0JEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFRXOTJaVlJwYldVZ0tWeHlYRzVjZENBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dVhIUnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lHTmhiV1Z5WVM1d2IzTnBkR2x2YmlBcFhISmNibHgwSUNBZ0lDNTBieWdnZTF4eVhHNWNkQ0FnSUNBZ0lDQWdlRG9nY21WamIzSmtXRkJ2Y3lBcklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1allXMWxjbUZHYjJOMWMxQnZjMmwwYVc5dUxuZ3NYSEpjYmx4MElDQWdJQ0FnSUNCNU9pQkRiMjV6ZEdGdWRITXVjMk5sYm1VdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTVMRnh5WEc1Y2RDQWdJQ0FnSUNBZ2Vqb2djbVZqYjNKa1FXSnpiMngxZEdWUWIzTXVlaUFySUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRkdiMk4xYzFCdmMybDBhVzl1TG5wY2NseHVYSFFnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVUxdmRtVlVhVzFsSUNsY2NseHVYSFFnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVmVnh5WEc1Y2NseHVablZ1WTNScGIyNGdlbTl2YlVsdVVtVmpiM0prS0hKbFkyOXlaRmhRYjNNc0lISmxZMjl5WkVGaWMyOXNkWFJsVUc5ektTQjdYSEpjYmx4eVhHNGdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwWVhKblpYUXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRPaUJ5WldOdmNtUllVRzl6TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1Y21WamIzSmtSbXhwY0hCbFpGa2dLeUExTUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ2NtVmpiM0prUVdKemIyeDFkR1ZRYjNNdWVseHlYRzRnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzVwYm1adlQzQmxibFJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDbGNjbHh1WEhKY2JpQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JR05oYldWeVlTNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZzZJSEpsWTI5eVpGaFFiM01nS3lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NElDc2dPREFzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRkdiMk4xYzFCdmMybDBhVzl1TG5rZ0xTQTFNQ3hjY2x4dUlDQWdJQ0FnSUNCOUxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdVkyRnRaWEpoVFc5MlpWUnBiV1VnS1Z4eVhHNGdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibjFjY2x4dVhISmNibVoxYm1OMGFXOXVJSHB2YjIxUGRYUlNaV052Y21Rb2NtVmpiM0prV0ZCdmN5d2djbVZqYjNKa1FXSnpiMngxZEdWUWIzTXBJSHRjY2x4dVhISmNiaUFnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSaGNtZGxkQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0xtUmxiR0Y1S0NCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1YVc1bWIwOXdaVzVVYVcxbElDOGdNaUFwWEhKY2JpQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSGc2SUhKbFkyOXlaRmhRYjNNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklEYzFMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjZPaUJ5WldOdmNtUkJZbk52YkhWMFpWQnZjeTU2WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtbHVabTlQY0dWdVZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lHTmhiV1Z5WVM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklISmxZMjl5WkZoUWIzTWdLeUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFJtOWpkWE5RYjNOcGRHbHZiaTU0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NUxGeHlYRzRnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2NtVnpaWFJEWVcxbGNtRW9LU0I3WEhKY2JseDBibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBZWEpuWlhRdWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWRHRnlaMlYwUW1GelpWQnZjMmwwYVc5dUxuZ3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIazZJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNTBZWEpuWlhSQ1lYTmxVRzl6YVhScGIyNHVlU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlam9nUTI5dWMzUmhiblJ6TG5OalpXNWxMblJoY21kbGRFSmhjMlZRYjNOcGRHbHZiaTU2WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dZMkZ0WlhKaExuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2VEb2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVVKaGMyVlFiM05wZEdsdmJpNTRMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJEYjI1emRHRnVkSE11YzJObGJtVXVZMkZ0WlhKaFFtRnpaVkJ2YzJsMGFXOXVMbmtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSG82SUVOdmJuTjBZVzUwY3k1elkyVnVaUzVqWVcxbGNtRkNZWE5sVUc5emFYUnBiMjR1ZWx4eVhHNGdJQ0FnSUNBZ0lIMHNJRU52Ym5OMFlXNTBjeTV6WTJWdVpTNWpZVzFsY21GTmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnZFhCa1lYUmxRMkZ0WlhKaFFYTndaV04wS0hKaGRHbHZLU0I3WEhKY2JseDBZMkZ0WlhKaExtRnpjR1ZqZENBOUlISmhkR2x2TzF4eVhHNGdJQ0FnWTJGdFpYSmhMblZ3WkdGMFpWQnliMnBsWTNScGIyNU5ZWFJ5YVhnb0tUdGNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYkc5dmEwRjBWR0Z5WjJWMEtDa2dlMXh5WEc1Y2RHTmhiV1Z5WVM1c2IyOXJRWFFvSUhSaGNtZGxkQzV3YjNOcGRHbHZiaUFwTzF4eVhHNTlYSEpjYmx4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdGNjbHh1WEhScGJtbDBPaUJwYm1sMExGeHlYRzVjZEdadlkzVnpVbVZqYjNKa09pQm1iMk4xYzFKbFkyOXlaQ3hjY2x4dVhIUjZiMjl0U1c1U1pXTnZjbVE2SUhwdmIyMUpibEpsWTI5eVpDeGNjbHh1WEhSNmIyOXRUM1YwVW1WamIzSmtPaUI2YjI5dFQzVjBVbVZqYjNKa0xGeHlYRzVjZEhKbGMyVjBRMkZ0WlhKaE9pQnlaWE5sZEVOaGJXVnlZU3hjY2x4dVhIUjFjR1JoZEdWRFlXMWxjbUZCYzNCbFkzUTZJSFZ3WkdGMFpVTmhiV1Z5WVVGemNHVmpkQ3hjY2x4dVhIUnNiMjlyUVhSVVlYSm5aWFE2SUd4dmIydEJkRlJoY21kbGRDeGNjbHh1WEhSY2NseHVYSFJuWlhSRFlXMWxjbUU2SUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzVjZEZ4MGNtVjBkWEp1SUdOaGJXVnlZVHRjY2x4dVhIUjlMRnh5WEc1Y2RHZGxkRlJoY21kbGREb2dablZ1WTNScGIyNG9LU0I3WEhKY2JseDBYSFJ5WlhSMWNtNGdkR0Z5WjJWME8xeHlYRzVjZEgxY2NseHVmU0pkZlE9PSIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cclxuICAgIGRlYnVnOiBmYWxzZSxcclxuICAgIGNhbnZhc1dpZHRoOiBudWxsLFxyXG4gICAgY2FudmFzSGVpZ2h0OiBudWxsLFxyXG4gICAgbmJDcmF0ZXM6IDIsXHJcbiAgICByZWNvcmRzUGVyQ3JhdGU6IDI0LFxyXG4gICAgbGlnaHRJbnRlbnNpdHk6IDEsXHJcbiAgICBjYW1lcmFNb3VzZU1vdmU6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MTExMTExLFxyXG4gICAgc2xlZXZlQ29sb3I6IDB4MGQwNzAyLFxyXG4gICAgc2xlZXZlTWFza1RleHR1cmU6ICdpbWcvc2xlZXZlLnBuZycsXHJcbiAgICBjcmF0ZVRleHR1cmU6ICdpbWcvd29vZC5qcGcnLFxyXG4gICAgY2xvc2VJbmZvUGFuZWxPbkNsaWNrOiB0cnVlLFxyXG4gICAgY2xvc2VJbmZvUGFuZWxPblNjcm9sbDogdHJ1ZSxcclxuICAgIHBvc3Rwcm9jZXNzaW5nOiBmYWxzZSxcclxuICAgIGJsdXJBbW91bnQ6IDAuNCxcclxuICAgIHVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcclxuICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgIG9uSW5mb1BhbmVsQ2xvc2VkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgIG9uTG9hZGluZ0VuZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHJvb3RDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyJyxcclxuICAgICAgICBjYW52YXNDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWNhbnZhcycsXHJcbiAgICAgICAgbG9hZGluZ0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItbG9hZGluZycsXHJcbiAgICAgICAgaW5mb0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItaW5mbycsXHJcbiAgICAgICAgdGl0bGVDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC10aXRsZScsXHJcbiAgICAgICAgYXJ0aXN0Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtYXJ0aXN0JyxcclxuICAgICAgICBjb3ZlckNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWNvdmVyJ1xyXG4gICAgfSxcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgcmVjb3JkTW92ZVRpbWU6IDEwMDAsXHJcbiAgICAgICAgY2FtZXJhTW92ZVRpbWU6IDgwMCxcclxuICAgICAgICBpbmZvT3BlblRpbWU6IDcwMCxcclxuICAgICAgICByZWNvcmRCYXNlWTogNSxcclxuICAgICAgICByZWNvcmRTaG93blk6IDI1LFxyXG4gICAgICAgIHJlY29yZEZsaXBwZWRZOiAxMTAsXHJcbiAgICAgICAgdGFyZ2V0QmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IC0yMCxcclxuICAgICAgICAgICAgeTogMTAsXHJcbiAgICAgICAgICAgIHo6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbWVyYUJhc2VQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB4OiAyODAsXHJcbiAgICAgICAgICAgIHk6IDIwMCxcclxuICAgICAgICAgICAgejogMTgwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW1lcmFGb2N1c1Bvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHg6IDE2MCxcclxuICAgICAgICAgICAgeTogMTkwLFxyXG4gICAgICAgICAgICB6OiA4NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRZOiAwLjA3LFxyXG4gICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWjogMC4wNCxcclxuICAgICAgICBncmFiU2Vuc2l0aXZpdHk6IDZcclxuICAgIH0sXHJcblxyXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBrZXkgaW4gb3B0aW9ucyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBvcHRpb25zLCBrZXkgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzWyBrZXkgXSA9IG9wdGlvbnNbIGtleSBdO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn07IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCksXHJcbiAgICBUV0VFTiA9IHJlcXVpcmUoJ3R3ZWVuLmpzJyksXHJcblxyXG4gICAgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db25zdGFudHMnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKTtcclxuXHJcbnZhciBSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jcmF0ZUlkID0gY3JhdGVJZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdvdXQnO1xyXG4gICAgdGhpcy5yZWNvcmRYUG9zID0gLTYyICsgKCAxMzUgLyBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICkgKiBwb3M7XHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCggXHJcbiAgICAgICAgbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxMDAsIDEuNSwgMTAwLCAxLCAxLCAxICksIFxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoRmFjZU1hdGVyaWFsKCBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5tZXNoLmdlb21ldHJ5LmFwcGx5TWF0cml4KCBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbiggNTAsIDAsIDAgKSApO1xyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnNldCggdGhpcy5yZWNvcmRYUG9zLCBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVksIDAgKTtcclxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICB0aGlzLm1lc2gucmVjb3JkSWQgPSBpZDtcclxuICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdGhpcy5zZXRVbmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5wdXNoUmVjb3JkKCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coIFwiUmVjb3JkIG7CsFwiLCB0aGlzLmlkLFxyXG4gICAgICAgIFwiY3JhdGVJZCA9XCIsIHRoaXMuY3JhdGVJZCxcclxuICAgICAgICBcInBvcyA9XCIsIHRoaXMucG9zICk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0VW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zaG93UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3Nob3duJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzaG93bic7XHJcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5tZXNoLm1hdHJpeFdvcmxkICk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkU2hvd25ZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMlxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBDYW1lcmFNYW5hZ2VyLmZvY3VzUmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1c2hSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9ICdwdXNoZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1c2hlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1bGxSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAncHVsbGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdWxsZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogQ29uc3RhbnRzLnNjZW5lLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiAtIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSAnZmxpcHBlZCc7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBDb25zdGFudHMuc2NlbmUucmVjb3JkRmxpcHBlZFlcclxuICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAuZGVsYXkoIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgLyA0IClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogTWF0aC5QSVxyXG4gICAgICAgIH0sIENvbnN0YW50cy5zY2VuZS5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgIENhbWVyYU1hbmFnZXIuem9vbUluUmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcEJhY2tSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgLCBub0NhbWVyYVR3ZWVuICkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gJ2ZsaXBwZWQnICkge1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC5kZWxheSggQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IENvbnN0YW50cy5zY2VuZS5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBDb25zdGFudHMuc2NlbmUuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSwgQ29uc3RhbnRzLnNjZW5lLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgICAgIGlmICghbm9DYW1lcmFUd2Vlbikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQ2FtZXJhTWFuYWdlci56b29tT3V0UmVjb3JkKHRoaXMucmVjb3JkWFBvcywgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWNvcmQ7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlqY21GMFpXUnBaMmRsY2k5U1pXTnZjbVF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUoyWVhJZ1ZFaFNSVVVnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUhkcGJtUnZkMXNuVkVoU1JVVW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKMVJJVWtWRkoxMGdPaUJ1ZFd4c0tTeGNjbHh1SUNBZ0lGUlhSVVZPSUQwZ2NtVnhkV2x5WlNnbmRIZGxaVzR1YW5NbktTeGNjbHh1WEhKY2JpQWdJQ0JEYjI1emRHRnVkSE1nUFNCeVpYRjFhWEpsS0NjdUwwTnZibk4wWVc1MGN5Y3BMRnh5WEc0Z0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2lBOUlISmxjWFZwY21Vb0p5NHZRMkZ0WlhKaFRXRnVZV2RsY2ljcE8xeHlYRzVjY2x4dWRtRnlJRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnYVdRc0lHTnlZWFJsU1dRc0lIQnZjeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQjBhR2x6TG1sa0lEMGdhV1E3WEhKY2JpQWdJQ0IwYUdsekxtTnlZWFJsU1dRZ1BTQmpjbUYwWlVsa08xeHlYRzRnSUNBZ2RHaHBjeTV3YjNNZ1BTQndiM003WEhKY2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ0oyOTFkQ2M3WEhKY2JpQWdJQ0IwYUdsekxuSmxZMjl5WkZoUWIzTWdQU0F0TmpJZ0t5QW9JREV6TlNBdklFTnZibk4wWVc1MGN5NXlaV052Y21SelVHVnlRM0poZEdVZ0tTQXFJSEJ2Y3p0Y2NseHVJQ0FnSUhSb2FYTXViV1Z6YUNBOUlHNWxkeUJVU0ZKRlJTNU5aWE5vS0NCY2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvSURFd01Dd2dNUzQxTENBeE1EQXNJREVzSURFc0lERWdLU3dnWEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJJVWtWRkxrMWxjMmhHWVdObFRXRjBaWEpwWVd3b0lHNWxkeUJVU0ZKRlJTNU5aWE5vVEdGdFltVnlkRTFoZEdWeWFXRnNLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQkRiMjV6ZEdGdWRITXVjMnhsWlhabFEyOXNiM0pjY2x4dUlDQWdJQ0FnSUNCOUtTbGNjbHh1SUNBZ0lDazdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ3VaMlZ2YldWMGNua3VZWEJ3YkhsTllYUnlhWGdvSUc1bGR5QlVTRkpGUlM1TllYUnlhWGcwS0NrdWJXRnJaVlJ5WVc1emJHRjBhVzl1S0NBMU1Dd2dNQ3dnTUNBcElDazdYSEpjYmlBZ0lDQjBhR2x6TG0xbGMyZ3VjRzl6YVhScGIyNHVjMlYwS0NCMGFHbHpMbkpsWTI5eVpGaFFiM01zSUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUkNZWE5sV1N3Z01DQXBPMXh5WEc0Z0lDQWdkR2hwY3k1dFpYTm9Mbkp2ZEdGMGFXOXVMbm9nUFNCTllYUm9MbEJKSUM4Z01qdGNjbHh1SUNBZ0lIUm9hWE11YldWemFDNXlaV052Y21SSlpDQTlJR2xrTzF4eVhHNGdJQ0FnZEdocGN5NWhZbk52YkhWMFpWQnZjMmwwYVc5dUlEMGdibVYzSUZSSVVrVkZMbFpsWTNSdmNqTW9LVHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbk5sZEZWdVlXTjBhWFpsS0NrN1hISmNiaUFnSUNCMGFHbHpMbkIxYzJoU1pXTnZjbVFvS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG14dlp5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWdnWENKU1pXTnZjbVFnYnNLd1hDSXNJSFJvYVhNdWFXUXNYSEpjYmlBZ0lDQWdJQ0FnWENKamNtRjBaVWxrSUQxY0lpd2dkR2hwY3k1amNtRjBaVWxrTEZ4eVhHNGdJQ0FnSUNBZ0lGd2ljRzl6SUQxY0lpd2dkR2hwY3k1d2IzTWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbk5sZEVGamRHbDJaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxtRmpkR2wyWlNBOUlIUnlkV1U3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1ZG1semFXSnNaU0E5SUhSeWRXVTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNXpaWFJWYm1GamRHbDJaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxtRmpkR2wyWlNBOUlHWmhiSE5sTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG5acGMybGliR1VnUFNCbVlXeHpaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbk5vYjNkU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQjBhR2x6TG5OMFlYUmxJQ0U5UFNBbmMyaHZkMjRuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdKM05vYjNkdUp6dGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0dWMyVjBSbkp2YlUxaGRISnBlRkJ2YzJsMGFXOXVLQ0IwYUdsekxtMWxjMmd1YldGMGNtbDRWMjl5YkdRZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJUYUc5M2JsbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2dRMjl1YzNSaGJuUnpMbk5qWlc1bExuSmxZMjl5WkUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJRTFoZEdndVVFa2dMeUF5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUVOaGJXVnlZVTFoYm1GblpYSXVabTlqZFhOU1pXTnZjbVFvZEdocGN5NXlaV052Y21SWVVHOXpMQ0IwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0cE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWNIVnphRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhSb2FYTXVjM1JoZEdVZ0lUMGdKM0IxYzJobFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNBbmNIVnphR1ZrSnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUVOdmJuTjBZVzUwY3k1elkyVnVaUzV5WldOdmNtUkNZWE5sV1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1Y21WamIzSmtUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1eWIzUmhkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZWpvZ1RXRjBhQzVRU1NBdklESWdLeUJOWVhSb0xsQkpJQzhnTjF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1Y21WamIzSmtUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JsSmxZMjl5WkM1d2NtOTBiM1I1Y0dVdWNIVnNiRkpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUhSb2FYTXVjM1JoZEdVZ0lUMDlJQ2R3ZFd4c1pXUW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ0ozQjFiR3hsWkNjN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1Y21WamIzSmtRbUZ6WlZsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhvNklFMWhkR2d1VUVrZ0x5QXlJQzBnVFdGMGFDNVFTU0F2SURkY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlN3Z1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExtWnNhWEJTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvSUdSdmJtVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJQ2RtYkdsd2NHVmtKenRjY2x4dVhISmNiaUFnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklFTnZibk4wWVc1MGN5NXpZMlZ1WlM1eVpXTnZjbVJHYkdsd2NHVmtXVnh5WEc0Z0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1cGJtWnZUM0JsYmxScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNtOTBZWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQzVrWld4aGVTZ2dRMjl1YzNSaGJuUnpMbk5qWlc1bExtbHVabTlQY0dWdVZHbHRaU0F2SURRZ0tWeHlYRzRnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQk5ZWFJvTGxCSlhISmNiaUFnSUNBZ0lDQWdmU3dnUTI5dWMzUmhiblJ6TG5OalpXNWxMbWx1Wm05UGNHVnVWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tWeHlYRzRnSUNBZ0lDQWdJQzV2YmtOdmJYQnNaWFJsS0NCa2IyNWxJQ2s3WEhKY2JseHlYRzRnSUNBZ1EyRnRaWEpoVFdGdVlXZGxjaTU2YjI5dFNXNVNaV052Y21Rb2RHaHBjeTV5WldOdmNtUllVRzl6TENCMGFHbHpMbUZpYzI5c2RYUmxVRzl6YVhScGIyNHBPMXh5WEc1OU8xeHlYRzVjY2x4dVVtVmpiM0prTG5CeWIzUnZkSGx3WlM1bWJHbHdRbUZqYTFKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNnZ1pHOXVaU0FzSUc1dlEyRnRaWEpoVkhkbFpXNGdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0IwYUdsekxuTjBZWFJsSUQwOVBTQW5abXhwY0hCbFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR2hwY3k1dFpYTm9MbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVJsYkdGNUtDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWFXNW1iMDl3Wlc1VWFXMWxJQzhnTWlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ1EyOXVjM1JoYm5SekxuTmpaVzVsTG5KbFkyOXlaRUpoYzJWWlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lFTnZibk4wWVc1MGN5NXpZMlZ1WlM1cGJtWnZUM0JsYmxScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1eWIzUmhkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ01GeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQkRiMjV6ZEdGdWRITXVjMk5sYm1VdWFXNW1iMDl3Wlc1VWFXMWxJQzhnTWlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbTl1UTI5dGNHeGxkR1VvSUdSdmJtVWdLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdhV1lnS0NGdWIwTmhiV1Z5WVZSM1pXVnVLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQkRZVzFsY21GTllXNWhaMlZ5TG5wdmIyMVBkWFJTWldOdmNtUW9kR2hwY3k1eVpXTnZjbVJZVUc5ekxDQjBhR2x6TG1GaWMyOXNkWFJsVUc5emFYUnBiMjRwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRkpsWTI5eVpEc2lYWDA9IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLypcclxuICAgICAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAgL1xcICAgIFxcICAgICAgICAgICAvOjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAgLzo6XFwgICAgXFwgICAgICAgICAvOjo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgIC86Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgIC86Ojo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgIC86OjovXFw6OjpcXCAgICBcXCAgIC86Ojovfn5cXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgIC86OjovX19cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgLzo6Oi8gICAgXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgIC86Ojo6XFwgICBcXDo6OlxcICAgIFxcICAgICAgICAvOjo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcOjo6LyAgICAvIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgIC86Ojo6OjpcXCAgIFxcOjo6XFwgICAgXFxfXyAgICAvOjo6Ojo6XFwgICAgXFxfXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6L19fX18vICAgXFw6OjpcXF9fX19cXFxyXG4gICAgICAgICAvOjo6L1xcOjo6XFwgICBcXDo6OlxcX19fX1xcIFxcICAvOjo6L1xcOjo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgfCAgICAgfDo6OnwgICAgfFxyXG4gICAgICAgIC86OjovICBcXDo6OlxcICAgXFw6Ojp8ICAgIHwgXFwvOjo6LyAgXFw6OjpcXF9fX19cXCBcXDo6OlxcICAgXFw6OjpcXF9fX19cXF9fX3wgICAgIHw6Ojp8X19fX3xcclxuICAgICAgICBcXDo6LyAgIHw6Ojo6XFwgIC86Ojp8X19fX3wgLzo6Oi8gICAgXFw6Oi8gICAgLyAgXFw6OjpcXCAgIFxcOjovICAgIC8gICBfXFxfX18vOjo6LyAgICAvXHJcbiAgICAgICAgIFxcL19fX198Ojo6OjpcXC86OjovICAgIC9cXC86OjovICAgIC8gXFwvX19fXy9cXCAgIFxcOjo6XFwgICBcXC9fX19fLzpcXCB8Ojp8IC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6Ojo6Ojo6Oi8gICAgLzo6Ojo6LyAgICAvICAgICAgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFwgIFxcOjo6XFx8Ojp8Lzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8XFw6Ojo6LyAgICAvXFw6Ojo6L19fX18vICAgICAgICBcXDo6OlxcICAgXFw6OjpcXF9fX19cXCAgXFw6Ojo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgXFw6Oi9fX19fLyAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgIC86OjovICAgIC8gICBcXDo6Ojo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgIH58ICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwvOjo6LyAgICAvICAgICBcXDo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICAgfCAgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6Ojo6OjovICAgIC8gICAgICAgXFw6Ojo6L19fX18vXHJcbiAgICAgICAgICAgICAgIFxcOjp8ICAgfCAgICAgICAgICAgXFw6OjpcXF9fX19cXCAgICAgICAgIFxcOjo6Oi8gICAgLyAgICAgICAgIHw6OnwgICAgfFxyXG4gICAgICAgICAgICAgICAgXFw6fCAgIHwgICAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgfDo6fF9fX198XHJcbiAgICAgICAgICAgICAgICAgXFx8X19ffCAgICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgfn5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX18gICAgICAgICAgICAgLl9fXy5fXyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19cclxuICAgICAgIF9fX19fX19fX19fX19fX18gXy8gIHxfICBfX19fICAgX198IF8vfF9ffCBfX19fICAgX19fXyAgIF9fX19fX19fX19fICAgICAgIHxfX3wgX19fX19fXHJcbiAgICAgXy8gX19fXFxfICBfXyBcXF9fICBcXFxcICAgX19cXC8gX18gXFwgLyBfXyB8IHwgIHwvIF9fX1xcIC8gX19fXFxfLyBfXyBcXF8gIF9fIFxcICAgICAgfCAgfC8gIF9fXy9cclxuICAgICBcXCAgXFxfX198ICB8IFxcLy8gX18gXFx8ICB8IFxcICBfX18vLyAvXy8gfCB8ICAvIC9fLyAgPiAvXy8gID4gIF9fXy98ICB8IFxcLyAgICAgIHwgIHxcXF9fXyBcXFxyXG4gICAgICBcXF9fXyAgPl9ffCAgKF9fX18gIC9fX3wgIFxcX19fICA+X19fXyB8IHxfX1xcX19fICAvXFxfX18gIC8gXFxfX18gID5fX3wgIC9cXCAvXFxfX3wgIC9fX19fICA+XHJcbiAgICAgICAgICBcXC8gICAgICAgICAgIFxcLyAgICAgICAgICBcXC8gICAgIFxcLyAgIC9fX19fXy8vX19fX18vICAgICAgXFwvICAgICAgXFwvIFxcX19fX19ffCAgICBcXC9cclxuXHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgY3JhdGVkaWdnZXIuanMgdjAuMC4xIC0gYnkgcmlzcSAoVmFsZW50aW4gTGVkcmFwaWVyKSAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydUSFJFRSddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnVEhSRUUnXSA6IG51bGwpLFxyXG4gICAgVFdFRU4gPSByZXF1aXJlKCd0d2Vlbi5qcycpLFxyXG4gICAgU3RhdHMgPSByZXF1aXJlKCdzdGF0cy1qcycpLFxyXG4gICAgTW9kZXJuaXpyID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ01vZGVybml6ciddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnTW9kZXJuaXpyJ10gOiBudWxsKSxcclxuICAgIGRhdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydkYXQnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ2RhdCddIDogbnVsbCksXHJcblxyXG4gICAgUmVjb3JkID0gcmVxdWlyZSgnLi9SZWNvcmQnKSxcclxuICAgIENhbWVyYU1hbmFnZXIgPSByZXF1aXJlKCcuL0NhbWVyYU1hbmFnZXInKSxcclxuICAgIENvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29uc3RhbnRzJyk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBET00gY29udGFpbmVyIGVsZW1lbnRzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCxcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LFxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCxcclxuICAgIGFydGlzdEluZm9FbGVtZW50LFxyXG4gICAgY292ZXJJbmZvRWxlbWVudCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsO1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBDb25zdGFudHMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlICkge1xyXG5cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueCA9ICggbW91c2UueCAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1OyAvLyBpbnZlcnNlIGF4aXM/XHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnkgPSAoIG1vdXNlLnkgLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gQ29uc3RhbnRzLnNjZW5lLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgQ2FtZXJhTWFuYWdlci5sb29rQXRUYXJnZXQoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IGRlcHRoTWF0ZXJpYWw7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhLCBkZXB0aFRhcmdldCApO1xyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xyXG4gICAgICAgIGNvbXBvc2VyLnJlbmRlcigpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbiAqIExvYWRpbmcgbWV0aG9kc1xyXG4gKi9cclxudmFyIHVubG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSBudWxsO1xyXG4gICAgICAgIHJlY29yZHNbIGkgXS5zZXRVbmFjdGl2ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkZWRSZWNvcmRzID0gMDtcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdO1xyXG5cclxufTtcclxuXHJcblxyXG52YXIgbG9hZFJlY29yZHMgPSBmdW5jdGlvbiAoIHJlY29yZHNEYXRhLCBzaHVmZmxlQmVmb3JlTG9hZGluZywgZG9uZSApIHtcclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCB0cnVlICk7XHJcblxyXG4gICAgc2hvd0xvYWRpbmcoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyhkb25lKTtcclxuICAgICAgICAgICAgQ29uc3RhbnRzLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICB9LCAzMDAwICk7XHJcbiAgICB9KTtcclxuXHJcbn07XHJcblxyXG52YXIgc2h1ZmZsZVJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNodWZmbGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhTGlzdDtcclxuICAgIHNodWZmbGVkUmVjb3JkcyA9IHNodWZmbGUoIHNodWZmbGVkUmVjb3JkcyApO1xyXG4gICAgbG9hZFJlY29yZHMoIHNodWZmbGVkUmVjb3JkcyApO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFJFQ09SRFMgU0VMRUNUSU9OIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBzZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICkge1xyXG5cclxuICAgICAgICBmaWxsSW5mb1BhbmVsKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmluZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcFJlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnb3BlbmVkJztcclxuXHJcbiAgICAgICAgfSApO1xyXG5cclxuICAgICAgICBDb25zdGFudHMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBpbmZvQ29udGFpbmVyRWxlbWVudCApO1xyXG5cclxuICAgICAgICB9LCAzMDAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmbGlwQmFja1NlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZhZGVPdXQoIGluZm9Db250YWluZXJFbGVtZW50ICk7XHJcbiAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2luZyc7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uZmxpcEJhY2tSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NlZCc7XHJcbiAgICAgICAgICAgIENvbnN0YW50cy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHVwZGF0ZVNob3duUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBDb25zdGFudHMucmVjb3Jkc1BlckNyYXRlICYmXHJcbiAgICAgICAgICAgICAgICByZWNvcmRJZCA8ICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApICsgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVzZXRTaG93blJlY29yZCA9IGZ1bmN0aW9uICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQ2FtZXJhTWFuYWdlci5yZXNldENhbWVyYSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHNlbGVjdFByZXZSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIHNlbGVjdE5leHRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UHJldkF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBnZXROZXh0QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG52YXIgbmF2aWdhdGVSZWNvcmRzID0gZnVuY3Rpb24gKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgQ29uc3RhbnRzLmNsb3NlSW5mb1BhbmVsT25TY3JvbGwgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIHNjcm9sbFJlY29yZHMgPSBmdW5jdGlvbiAoIGJhc2VZLCBvbGREZWx0YSApIHtcclxuXHJcbiAgICBvbGREZWx0YSA9ICFvbGREZWx0YSB8fCBNYXRoLmFicyggb2xkRGVsdGEgKSA+IDAuNSA/IDAuNSA6IE1hdGguYWJzKCBvbGREZWx0YSApO1xyXG4gICAgdmFyIGludmVyc2VEZWx0YSA9IDEgLSBvbGREZWx0YTtcclxuICAgIHZhciBzY3JvbGxTcGVlZCA9IGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIGludmVyc2VEZWx0YSAqIDMwMDtcclxuXHJcbiAgICBzY3JvbGxSZWNvcmRzVGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dyYWInKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAoIGJhc2VZIC0gbW91c2UueSApIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG5cclxuICAgIH0sIHNjcm9sbFNwZWVkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGZpbGxJbmZvUGFuZWwgPSBmdW5jdGlvbiAoIHJlY29yZCApIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLnRpdGxlICkge1xyXG5cclxuICAgICAgICB0aXRsZUluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLnRpdGxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmFydGlzdCApIHtcclxuXHJcbiAgICAgICAgYXJ0aXN0SW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEuYXJ0aXN0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIHJlY29yZC5kYXRhLmNvdmVyICkge1xyXG5cclxuICAgICAgICBjb3ZlckluZm9FbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHJlY29yZC5kYXRhLmNvdmVyICsgJyknO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVZFTlRTIEhBTkRMSU5HICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBvbk1vdXNlTW92ZUV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIHZhciBtX3Bvc3ggPSAwLFxyXG4gICAgICAgIG1fcG9zeSA9IDAsXHJcbiAgICAgICAgZV9wb3N4ID0gMCxcclxuICAgICAgICBlX3Bvc3kgPSAwLFxyXG4gICAgICAgIG9iaiA9IHRoaXM7XHJcblxyXG4gICAgLy9nZXQgbW91c2UgcG9zaXRpb24gb24gZG9jdW1lbnQgY3Jvc3Nicm93c2VyXHJcbiAgICBpZiAoICFlICkge1xyXG5cclxuICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGUucGFnZVggfHwgZS5wYWdlWSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5wYWdlWDtcclxuICAgICAgICBtX3Bvc3kgPSBlLnBhZ2VZO1xyXG4gICAgfSBlbHNlIGlmICggZS5jbGllbnRYIHx8IGUuY2xpZW50WSApIHtcclxuXHJcbiAgICAgICAgbV9wb3N4ID0gZS5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL2dldCBwYXJlbnQgZWxlbWVudCBwb3NpdGlvbiBpbiBkb2N1bWVudFxyXG4gICAgaWYgKCBvYmoub2Zmc2V0UGFyZW50ICkge1xyXG5cclxuICAgICAgICBkbyB7XHJcblxyXG4gICAgICAgICAgICBlX3Bvc3ggKz0gb2JqLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIGVfcG9zeSArPSBvYmoub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICB9IHdoaWxlICggb2JqID0gb2JqLm9mZnNldFBhcmVudCApOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW91c2UgcG9zaXRpb24gbWludXMgZWxtIHBvc2l0aW9uIGlzIG1vdXNlcG9zaXRpb24gcmVsYXRpdmUgdG8gZWxlbWVudDpcclxuICAgIG1vdXNlLnggPSBtX3Bvc3ggLSBlX3Bvc3g7XHJcbiAgICBtb3VzZS55ID0gbV9wb3N5IC0gZV9wb3N5O1xyXG59O1xyXG5cclxudmFyIG9uU2Nyb2xsRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG5cclxuICAgIGlmICggd2hlZWxEaXJlY3Rpb24oIGUgKSA8IDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxudmFyIG9uQ2xpY2tFdmVudCA9IGZ1bmN0aW9uICggbW91c2VEb3duUG9zICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yUG9zID0ge1xyXG4gICAgICAgICAgICB4OiAoICggKCBtb3VzZURvd25Qb3MueCAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LndpZHRoICkgKSAqIDIgLSAxICksXHJcbiAgICAgICAgICAgIHk6ICggLSggKCBtb3VzZURvd25Qb3MueSAtIHJlbmRlcmVyLmRvbUVsZW1lbnQub2Zmc2V0VG9wICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQuaGVpZ2h0ICkgKSAqIDIgKyAxICksXHJcbiAgICAgICAgICAgIHo6IDAuNVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyggdmVjdG9yUG9zLngsIHZlY3RvclBvcy55LCB2ZWN0b3JQb3MueiApO1xyXG4gICAgICAgIHZlY3Rvci51bnByb2plY3QoIGNhbWVyYSApO1xyXG4gICAgICAgIHZhciByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCBjYW1lcmEucG9zaXRpb24sIHZlY3Rvci5zdWIoIGNhbWVyYS5wb3NpdGlvbiApLm5vcm1hbGl6ZSgpICk7XHJcbiAgICAgICAgdmFyIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyggY3JhdGVzQ29udGFpbmVyLmNoaWxkcmVuLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIElmIGludGVyc2VjdCBzb21ldGhpbmdcclxuICAgICAgICBpZiAoIGludGVyc2VjdHMubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCB2aXNpYmxlIHJlY29yZCBpbnRlcnNlY3RlZFxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBpbnRlcnNlY3RzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIGludGVyY2VwdCBhIG1lc2ggd2hpY2ggaXMgbm90IGEgcmVjb3JkLCBicmVha1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YoaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCkgPT09ICd1bmRlZmluZWQnICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnZpc2libGUgJiYgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCA+PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjbGlja2VkUmVjb3JkID0gcmVjb3Jkc1sgaW50ZXJzZWN0c1sgaSBdLm9iamVjdC5yZWNvcmRJZCBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBvbmVcclxuICAgICAgICAgICAgaWYgKCBjbGlja2VkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggc2VsZWN0ZWRSZWNvcmQgPT09IGNsaWNrZWRSZWNvcmQuaWQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZsaXBTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFJlY29yZCggY2xpY2tlZFJlY29yZC5pZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFsbCBpbnRlcnNlY3RlZCByZWNvcmRzIGFyZSBub3QgdmlzaWJsZXNcclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm8gcmVjb3JkIGhhcyBiZWVuIGludGVyc2VjdGVkXHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBDb25zdGFudHMuY2xvc2VJbmZvUGFuZWxPbkNsaWNrICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IG1vdXNlLngsXHJcbiAgICAgICAgeTogbW91c2UueVxyXG4gICAgfTtcclxufTtcclxuXHJcbnZhciBvbk1vdXNlVXBFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmFiJyk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBzY2VuZSBjbGljayBldmVudCBvbmx5IGlmIG1vdXNldXAgZXZlbnQgaXMgbm90IGEgZHJhZyBlbmQgZXZlbnQgJiBub3QgYSBjbGljayBvbiBhIGxpbmtcclxuICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBDb25zdGFudHMuc2NlbmUuZ3JhYlNlbnNpdGl2aXR5ICkgJiYgISggZS50YXJnZXQgJiYgZS50YXJnZXQuaGFzQXR0cmlidXRlKCdocmVmJykgKSApIHtcclxuXHJcbiAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIG9uS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSA0MCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25XaW5kb3dSZXNpemVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgQ2FtZXJhTWFuYWdlci51cGRhdGVDYW1lcmFBc3BlY3QoIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgIHNldFRpbWVvdXQoZG9uZSwgMTAwMCk7XHJcblxyXG59O1xyXG5cclxudmFyIGhpZGVMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVPdXQoIGxvYWRpbmdDb250YWluZXJFbGVtZW50ICk7XHJcbiAgICBzZXRUaW1lb3V0KGRvbmUsIDEwMDApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGluaXRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIENvbnN0YW50cy5iYWNrZ3JvdW5kQ29sb3IsIDEgKTtcclxuXHJcbiAgICBDYW1lcmFNYW5hZ2VyLmluaXQoY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQpO1xyXG4gICAgY2FtZXJhID0gQ2FtZXJhTWFuYWdlci5nZXRDYW1lcmEoKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggQ29uc3RhbnRzLmNyYXRlVGV4dHVyZSApO1xyXG4gICAgd29vZF90ZXh0dXJlLmFuaXNvdHJvcHkgPSByZW5kZXJlci5nZXRNYXhBbmlzb3Ryb3B5KCk7XHJcbiAgICB3b29kX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICBtYXA6IHdvb2RfdGV4dHVyZVxyXG4gICAgfSApO1xyXG5cclxuICAgIHJvb3RDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIGNyYXRlc0NvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgc2NlbmUuYWRkKCByb290Q29udGFpbmVyICk7XHJcbiAgICByb290Q29udGFpbmVyLmFkZCggY3JhdGVzQ29udGFpbmVyICk7XHJcblxyXG4gICAgaW5pdENyYXRlcygpO1xyXG4gICAgaW5pdFJlY29yZHMoKTtcclxuXHJcbiAgICBsaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgQ29uc3RhbnRzLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIENvbnN0YW50cy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgcmlnaHRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgLTEwMDAgKTtcclxuICAgIHNjZW5lLmFkZCggcmlnaHRMaWdodCApO1xyXG5cclxuICAgIGluaXRQb3N0UHJvY2Vzc2luZygpO1xyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uU2Nyb2xsRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmVFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bkV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXBFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd25FdmVudCwgZmFsc2UgKTsgXHJcblxyXG4gICAgaWYgKCBDb25zdGFudHMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGhpZGVFbGVtZW50KGluZm9Db250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5kZWJ1ZyApIHtcclxuXHJcbiAgICAgICAgaW5pdERlYnVnKCk7XHJcbiAgICAgICAgaW5pdEdVSSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldFNob3duUmVjb3JkKCk7XHJcbiAgICBhbmltYXRlKCk7XHJcbn07XHJcblxyXG52YXIgaW5pdFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRlcHRoU2hhZGVyID0gVEhSRUUuU2hhZGVyTGliLmRlcHRoUkdCQTtcclxuICAgIGRlcHRoVW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBkZXB0aFNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuICAgIGRlcHRoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZGVwdGhTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBkZXB0aFNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgICAgdW5pZm9ybXM6IGRlcHRoVW5pZm9ybXNcclxuICAgIH0gKTtcclxuICAgIGRlcHRoTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5Ob0JsZW5kaW5nO1xyXG5cclxuICAgIGRlcHRoVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB7XHJcbiAgICAgICAgbWluRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIG1hZ0ZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXRcclxuICAgIH0gKTtcclxuXHJcbiAgICBjb21wb3NlciA9IG5ldyBUSFJFRS5FZmZlY3RDb21wb3NlciggcmVuZGVyZXIgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIG5ldyBUSFJFRS5SZW5kZXJQYXNzKCBzY2VuZSwgY2FtZXJhICkgKTtcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZXB0aCBvZiBmaWVsZCBzaGFkZXIgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRvZiA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Eb0ZTaGFkZXIgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50RGVwdGgudmFsdWUgPSBkZXB0aFRhcmdldDtcclxuICAgIGRvZi51bmlmb3Jtcy5zaXplLnZhbHVlLnNldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnRleHRlbC52YWx1ZS5zZXQoIDEuMCAvIGNhbnZhc1dpZHRoLCAxLjAgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICAvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG4gICAgZG9mLnVuaWZvcm1zLnpuZWFyLnZhbHVlID0gY2FtZXJhLm5lYXI7IC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuemZhci52YWx1ZSA9IGNhbWVyYS5mYXI7IC8vY2FtZXJhIGNsaXBwaW5nIGVuZFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLnZhbHVlID0gNTsgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7IC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcbiAgICBkb2YudW5pZm9ybXMuZnN0b3AudmFsdWUgPSA4LjA7IC8vZi1zdG9wIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLnZhbHVlID0gZmFsc2U7IC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLm1hbnVhbGRvZi52YWx1ZSA9IHRydWU7IC8vbWFudWFsIGRvZiBjYWxjdWxhdGlvblxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZzdGFydC52YWx1ZSA9IDExOyAvL25lYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mZGlzdC52YWx1ZSA9IDgwOyAvL25lYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQudmFsdWUgPSAwOyAvL2ZhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LnZhbHVlID0gMTAwOyAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5Db0MudmFsdWUgPSAwLjAzOyAvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudmlnbmV0dGluZy52YWx1ZSA9IGZhbHNlOyAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYXV0b2ZvY3VzLnZhbHVlID0gdHJ1ZTsgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZS5zZXQoIDAuMzUsIDAuMzUgKTsgLy8gYXV0b2ZvY3VzIHBvaW50IG9uIHNjcmVlbiAoMC4wLDAuMCAtIGxlZnQgbG93ZXIgY29ybmVyLCAxLjAsMS4wIC0gdXBwZXIgcmlnaHQpIFxyXG4gICAgZG9mLnVuaWZvcm1zLm1heGJsdXIudmFsdWUgPSBDb25zdGFudHMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdERlYnVnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRHVUkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbiAgICBpZiAoIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgY2FtZXJhRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0NhbWVyYScgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgub25DaGFuZ2UoIHVwZGF0ZUNhbWVyYSApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG52YXIgdXBkYXRlQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRDcmF0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgQ29uc3RhbnRzLm5iQ3JhdGVzOyBjcmF0ZUlkKysgKSB7XHJcbiAgICAgICAgdmFyIGNyYXRlID0gY3JlYXRlQ3JhdGUoIGNyYXRlSWQgKTtcclxuICAgICAgICBjcmF0ZXNDb250YWluZXIuYWRkKCBjcmF0ZSApO1xyXG4gICAgfVxyXG4gICAgY3JhdGVzQ29udGFpbmVyLnBvc2l0aW9uLnogPSAtKCAxMTAgLSAoIDExMCAqIENvbnN0YW50cy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbnZhciBjcmVhdGVDcmF0ZSA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgQ29uc3RhbnRzLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UmVjb3JkTWF0ZXJpYWwgPSBmdW5jdGlvbiAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IENvbnN0YW50cy5zbGVldmVNYXNrVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIHNsZWV2ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAxMzAsIDEzMCwgMTM1LCAxMzUgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIHNsZWV2ZSwgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCBpbWdXaWR0aCAvIDIsIGltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggaW1nLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2xlZXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG5cclxuICAgICAgICBjb2xvcjogQ29uc3RhbnRzLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgd2hlZWxEaXN0YW5jZSA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbnZhciB3aGVlbERpcmVjdGlvbiA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxudmFyIGNvb3Jkc0VxdWFsc0FwcHJveCA9IGZ1bmN0aW9uICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB2YXIgdHJhbnNpdGlvbkV2ZW50ID0gZ2V0VHJhbnNpdGlvbkV2ZW50KGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNpdGlvbkV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkV2ZW50LCBvbkZhZGVDb21wbGV0ZSk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID09PSAnMScpIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0cmFuc2l0aW9uRXZlbnQgPSBnZXRUcmFuc2l0aW9uRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zaXRpb25FdmVudCkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FdmVudCwgb25GYWRlQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH0sIDE1KTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvbkZhZGVDb21wbGV0ZSggZSApIHtcclxuXHJcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGUudHlwZSwgb25GYWRlQ29tcGxldGUpO1xyXG4gICAgaWYgKCBlLnRhcmdldC5zdHlsZS5vcGFjaXR5ID09PSAnMCcgKSB7XHJcblxyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxudmFyIGhpZGVFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbn1cclxuXHJcbnZhciBzaG93RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG5cclxufVxyXG5cclxudmFyIGdldFRyYW5zaXRpb25FdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0LFxyXG4gICAgICAgIHRyYW5zaXRpb25zID0ge1xyXG4gICAgICAgICAgICAndHJhbnNpdGlvbic6J3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgICAgICAnT1RyYW5zaXRpb24nOidvVHJhbnNpdGlvbkVuZCcsXHJcbiAgICAgICAgICAgICdNb3pUcmFuc2l0aW9uJzondHJhbnNpdGlvbmVuZCcsXHJcbiAgICAgICAgICAgICdXZWJraXRUcmFuc2l0aW9uJzond2Via2l0VHJhbnNpdGlvbkVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgIGZvcih0IGluIHRyYW5zaXRpb25zKSB7XHJcblxyXG4gICAgICAgIGlmKCBkb2N1bWVudC5ib2R5LnN0eWxlW3RdICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbnNbdF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIGNhbGN1bGF0ZUNhbnZhc1NpemUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBDb25zdGFudHMuY2FudmFzV2lkdGggPyBDb25zdGFudHMuY2FudmFzV2lkdGggOiByb290Q29udGFpbmVyRWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgIGNhbnZhc0hlaWdodCA9IENvbnN0YW50cy5jYW52YXNIZWlnaHQgPyBDb25zdGFudHMuY2FudmFzSGVpZ2h0IDogcm9vdENvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxufTtcclxuXHJcbnZhciBzZXRDYW52YXNEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ICAgICA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoICAgICA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoIHYgKSB7IC8vIEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAtIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlIFtyZXYuICMxXVxyXG5cclxuICAgIGZvciAoIHZhciBqLCB4LCBpID0gdi5sZW5ndGg7IGk7IGogPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSAqIGkgKSwgeCA9IHZbIC0taSBdLCB2WyBpIF0gPSB2WyBqIF0sIHZbIGogXSA9IHggKTtcclxuICAgIHJldHVybiB2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFWFBPUlRTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBNZXRob2RzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICggcGFyYW1zICkge1xyXG5cclxuICAgIENvbnN0YW50cy5leHRlbmQocGFyYW1zKTtcclxuXHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIGlmICggIU1vZGVybml6ci53ZWJnbCApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5yb290Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXJvb3RDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByb290IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWxvYWRpbmdDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggQ29uc3RhbnRzLmVsZW1lbnRzLmluZm9Db250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhaW5mb0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGluZm8gY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICB0aXRsZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIENvbnN0YW50cy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuYXJ0aXN0Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWFydGlzdEluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgYXJ0aXN0IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY292ZXJJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBDb25zdGFudHMuZWxlbWVudHMuY292ZXJDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY292ZXJJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY292ZXIgaW1hZ2UgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuICAgIGluaXRTY2VuZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5zZWxlY3RSZWNvcmQgPSBmdW5jdGlvbiAoIGlkICkge1xyXG5cclxuICAgIGlmICggaWQgPCAwICkge1xyXG5cclxuICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaWQgPiBsb2FkZWRSZWNvcmRzICkge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5zdGFydFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IHRydWU7XHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5zdG9wUmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5lbmFibGVQb3N0cHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDb25zdGFudHMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENvbnN0YW50cy5wb3N0cHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIGdldHRlcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRSZWNvcmRzRGF0YUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNEYXRhTGlzdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldExvYWRlZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFJlY29yZHM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09ICBNZXRob2RzIGFjY2Vzc29ycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmxvYWRSZWNvcmRzID0gbG9hZFJlY29yZHM7XHJcbmV4cG9ydHMudW5sb2FkUmVjb3JkcyA9IHVubG9hZFJlY29yZHM7XHJcbmV4cG9ydHMucmVzZXRTaG93blJlY29yZCA9IHJlc2V0U2hvd25SZWNvcmQ7XHJcbmV4cG9ydHMuc2h1ZmZsZVJlY29yZHMgPSBzaHVmZmxlUmVjb3JkcztcclxuZXhwb3J0cy5mbGlwU2VsZWN0ZWRSZWNvcmQgPSBmbGlwU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuZmxpcEJhY2tTZWxlY3RlZFJlY29yZCA9IGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0UHJldlJlY29yZCA9IHNlbGVjdFByZXZSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0TmV4dFJlY29yZCA9IHNlbGVjdE5leHRSZWNvcmQ7XHJcbmV4cG9ydHMuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuZXhwb3J0cy5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBQVUJMSUMgQVBJICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWpjbUYwWldScFoyZGxjaTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDE5ZlgxOGdJQ0FnSUNBZ0lDQWdJQ0FnSUY5ZlgxOWZJQ0FnSUNBZ0lDQWdJQ0FnSUNCZlgxOWZYeUFnSUNBZ0lDQWdJQ0FnSUNCZlgxOWZYMTlmWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0wxeGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0lDQWdMMXhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdJQ0FnTDF4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUNBdk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMem82WEZ3Z0lDQWdYRndnSUNBZ0lDQWdJQ0FnTHpvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNBZ0x6bzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4Nk9qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0F2T2pvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUM4Nk9qbzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzg2T2pvNk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUNBZ0lDQXZPam82T2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQzg2T2pvNk9qbzZPbHhjSUNBZ0lGeGNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXZPam82TDF4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDODZPam92WEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQzg2T2pvdmZuNWNYRG82T2x4Y0lDQWdJRnhjWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzg2T2pvdlgxOWNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdMem82T2k5ZlgxeGNPam82WEZ3Z0lDQWdYRndnTHpvNk9pOGdJQ0FnWEZ3Nk9qcGNYQ0FnSUNCY1hGeHlYRzRnSUNBZ0lDQWdJQ0FnSUM4Nk9qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQXZPam82T2x4Y0lDQWdJRnhjSUZ4Y09qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNPam82THlBZ0lDQXZJRnhjT2pvNlhGd2dJQ0FnWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdJQzg2T2pvNk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGeGZYeUFnSUNBdk9qbzZPam82WEZ3Z0lDQWdYRnhmWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGdzZMMTlmWDE4dklDQWdYRnc2T2pwY1hGOWZYMTljWEZ4eVhHNGdJQ0FnSUNBZ0lDQXZPam82TDF4Y09qbzZYRndnSUNCY1hEbzZPbHhjWDE5ZlgxeGNJRnhjSUNBdk9qbzZMMXhjT2pvNlhGd2dJQ0FnWEZ3Z1hGdzZPanBjWENBZ0lGeGNPam82WEZ3Z0lDQWdYRndnSUNBZ2ZDQWdJQ0FnZkRvNk9ud2dJQ0FnZkZ4eVhHNGdJQ0FnSUNBZ0lDODZPam92SUNCY1hEbzZPbHhjSUNBZ1hGdzZPanA4SUNBZ0lId2dYRnd2T2pvNkx5QWdYRnc2T2pwY1hGOWZYMTljWENCY1hEbzZPbHhjSUNBZ1hGdzZPanBjWEY5ZlgxOWNYRjlmWDN3Z0lDQWdJSHc2T2pwOFgxOWZYM3hjY2x4dUlDQWdJQ0FnSUNCY1hEbzZMeUFnSUh3Nk9qbzZYRndnSUM4Nk9qcDhYMTlmWDN3Z0x6bzZPaThnSUNBZ1hGdzZPaThnSUNBZ0x5QWdYRnc2T2pwY1hDQWdJRnhjT2pvdklDQWdJQzhnSUNCZlhGeGZYMTh2T2pvNkx5QWdJQ0F2WEhKY2JpQWdJQ0FnSUNBZ0lGeGNMMTlmWDE5OE9qbzZPanBjWEM4Nk9qb3ZJQ0FnSUM5Y1hDODZPam92SUNBZ0lDOGdYRnd2WDE5Zlh5OWNYQ0FnSUZ4Y09qbzZYRndnSUNCY1hDOWZYMTlmTHpwY1hDQjhPanA4SUM4Nk9qb3ZJQ0FnSUM5Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZEbzZPam82T2pvNk9pOGdJQ0FnTHpvNk9qbzZMeUFnSUNBdklDQWdJQ0FnWEZ3Nk9qcGNYQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJRnhjT2pvNlhGeDhPanA4THpvNk9pOGdJQ0FnTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOE9qcDhYRnc2T2pvNkx5QWdJQ0F2WEZ3Nk9qbzZMMTlmWDE4dklDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ1hGdzZPanBjWEY5ZlgxOWNYQ0FnWEZ3Nk9qbzZPam82T2pvNkx5QWdJQ0F2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUh3Nk9ud2dYRnc2T2k5ZlgxOWZMeUFnWEZ3Nk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lGeGNPam82WEZ3Z0lDODZPam92SUNBZ0lDOGdJQ0JjWERvNk9qbzZPam82THlBZ0lDQXZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHc2T253Z0lINThJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRnd2T2pvNkx5QWdJQ0F2SUNBZ0lDQmNYRG82T2pvNk9pOGdJQ0FnTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOE9qcDhJQ0FnZkNBZ0lDQWdJQ0FnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdYRnc2T2pvNk9qb3ZJQ0FnSUM4Z0lDQWdJQ0FnWEZ3Nk9qbzZMMTlmWDE4dlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lGeGNPanA4SUNBZ2ZDQWdJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hGOWZYMTljWENBZ0lDQWdJQ0FnSUZ4Y09qbzZPaThnSUNBZ0x5QWdJQ0FnSUNBZ0lIdzZPbndnSUNBZ2ZGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRnc2ZkNBZ0lId2dJQ0FnSUNBZ0lDQWdJQ0JjWERvNkx5QWdJQ0F2SUNBZ0lDQWdJQ0FnSUZ4Y09qb3ZJQ0FnSUM4Z0lDQWdJQ0FnSUNBZ2ZEbzZmRjlmWDE5OFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRng4WDE5ZmZDQWdJQ0FnSUNBZ0lDQWdJQ0JjWEM5ZlgxOWZMeUFnSUNBZ0lDQWdJQ0FnSUZ4Y0wxOWZYMTh2SUNBZ0lDQWdJQ0FnSUNBZ2ZuNWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gxOGdJQ0FnSUNBZ0lDQWdJQ0FnTGw5Zlh5NWZYeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYMTljY2x4dUlDQWdJQ0FnSUY5ZlgxOWZYMTlmWDE5ZlgxOWZYMThnWHk4Z0lIeGZJQ0JmWDE5ZklDQWdYMTk4SUY4dmZGOWZmQ0JmWDE5ZklDQWdYMTlmWHlBZ0lGOWZYMTlmWDE5ZlgxOWZJQ0FnSUNBZ0lIeGZYM3dnWDE5ZlgxOWZYSEpjYmlBZ0lDQWdYeThnWDE5ZlhGeGZJQ0JmWHlCY1hGOWZJQ0JjWEZ4Y0lDQWdYMTljWEM4Z1gxOGdYRndnTHlCZlh5QjhJSHdnSUh3dklGOWZYMXhjSUM4Z1gxOWZYRnhmTHlCZlh5QmNYRjhnSUY5ZklGeGNJQ0FnSUNBZ2ZDQWdmQzhnSUY5Zlh5OWNjbHh1SUNBZ0lDQmNYQ0FnWEZ4ZlgxOThJQ0I4SUZ4Y0x5OGdYMThnWEZ4OElDQjhJRnhjSUNCZlgxOHZMeUF2WHk4Z2ZDQjhJQ0F2SUM5Zkx5QWdQaUF2WHk4Z0lENGdJRjlmWHk5OElDQjhJRnhjTHlBZ0lDQWdJSHdnSUh4Y1hGOWZYeUJjWEZ4eVhHNGdJQ0FnSUNCY1hGOWZYeUFnUGw5ZmZDQWdLRjlmWDE4Z0lDOWZYM3dnSUZ4Y1gxOWZJQ0ErWDE5Zlh5QjhJSHhmWDF4Y1gxOWZJQ0F2WEZ4ZlgxOGdJQzhnWEZ4ZlgxOGdJRDVmWDN3Z0lDOWNYQ0F2WEZ4Zlgzd2dJQzlmWDE5ZklDQStYSEpjYmlBZ0lDQWdJQ0FnSUNCY1hDOGdJQ0FnSUNBZ0lDQWdJRnhjTHlBZ0lDQWdJQ0FnSUNCY1hDOGdJQ0FnSUZ4Y0x5QWdJQzlmWDE5Zlh5OHZYMTlmWDE4dklDQWdJQ0FnWEZ3dklDQWdJQ0FnWEZ3dklGeGNYMTlmWDE5ZmZDQWdJQ0JjWEM5Y2NseHVYSEpjYmx4eVhHNHFMMXh5WEc1Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnWTNKaGRHVmthV2RuWlhJdWFuTWdkakF1TUM0eElDMGdZbmtnY21semNTQW9WbUZzWlc1MGFXNGdUR1ZrY21Gd2FXVnlLU0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JpZDFjMlVnYzNSeWFXTjBKenRjY2x4dVhISmNiblpoY2lCVVNGSkZSU0E5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lJRDhnZDJsdVpHOTNXeWRVU0ZKRlJTZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25WRWhTUlVVblhTQTZJRzUxYkd3cExGeHlYRzRnSUNBZ1ZGZEZSVTRnUFNCeVpYRjFhWEpsS0NkMGQyVmxiaTVxY3ljcExGeHlYRzRnSUNBZ1UzUmhkSE1nUFNCeVpYRjFhWEpsS0NkemRHRjBjeTFxY3ljcExGeHlYRzRnSUNBZ1RXOWtaWEp1YVhweUlEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ1B5QjNhVzVrYjNkYkowMXZaR1Z5Ym1sNmNpZGRJRG9nZEhsd1pXOW1JR2RzYjJKaGJDQWhQVDBnWENKMWJtUmxabWx1WldSY0lpQS9JR2RzYjJKaGJGc25UVzlrWlhKdWFYcHlKMTBnT2lCdWRXeHNLU3hjY2x4dUlDQWdJR1JoZENBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUQ4Z2QybHVaRzkzV3lka1lYUW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKMlJoZENkZElEb2diblZzYkNrc1hISmNibHh5WEc0Z0lDQWdVbVZqYjNKa0lEMGdjbVZ4ZFdseVpTZ25MaTlTWldOdmNtUW5LU3hjY2x4dUlDQWdJRU5oYldWeVlVMWhibUZuWlhJZ1BTQnlaWEYxYVhKbEtDY3VMME5oYldWeVlVMWhibUZuWlhJbktTeGNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5QTlJSEpsY1hWcGNtVW9KeTR2UTI5dWMzUmhiblJ6SnlrN1hISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMGdJRWx1YW1WamRDQmhiR3dnWlhoMFpYSnVZV3dnYlc5a2RXeGxjeUIwYnlCVVNGSkZSUzVxY3lBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwxTm9ZV1JsY2xCaGMzTW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBOdmNIbFRhR0ZrWlhJbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMUpsYm1SbGNsQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwUnZSbE5vWVdSbGNpY3BLRlJJVWtWRktUdGNjbHh1Y21WeGRXbHlaU2duTGk5MGFISmxaV3B6WDIxdlpIVnNaWE12UmxoQlFWTm9ZV1JsY2ljcEtGUklVa1ZGS1R0Y2NseHVjbVZ4ZFdseVpTZ25MaTkwYUhKbFpXcHpYMjF2WkhWc1pYTXZUV0Z6YTFCaGMzTW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDBWbVptVmpkRU52YlhCdmMyVnlKeWtvVkVoU1JVVXBPMXh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lGWkJVa2xCUWt4RlV5QWdJQ0FnSUNBZ0lDQWdJRDFjY2x4dVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm5aaGNpQmxlSEJ2Y25SeklEMGdlMzBzSUM4dklFOWlhbVZqZENCbWIzSWdjSFZpYkdsaklFRlFTWE5jY2x4dVhISmNibHh5WEc0Z0lDQWdMeW85UFQwOVBUMDlQVDA5SUNCRVQwMGdZMjl1ZEdGcGJtVnlJR1ZzWlcxbGJuUnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ3hjY2x4dUlDQWdJR05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5Rc1hISmNiaUFnSUNCc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ3hjY2x4dUlDQWdJR2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwTEZ4eVhHNGdJQ0FnZEdsMGJHVkpibVp2Uld4bGJXVnVkQ3hjY2x4dUlDQWdJR0Z5ZEdsemRFbHVabTlGYkdWdFpXNTBMRnh5WEc0Z0lDQWdZMjkyWlhKSmJtWnZSV3hsYldWdWRDeGNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JVYUhKbFpTNXFjeUJ2WW1wbFkzUnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmlBZ0lDQnpkR0YwY3l4Y2NseHVJQ0FnSUhOalpXNWxMRnh5WEc0Z0lDQWdZMkZ0WlhKaExGeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJc1hISmNiaUFnSUNCc2FXZG9kQ3hjY2x4dUlDQWdJR3hsWm5STWFXZG9kQ3hjY2x4dUlDQWdJSEpwWjJoMFRHbG5hSFFzWEhKY2JpQWdJQ0JqYjIxd2IzTmxjaXhjY2x4dUlDQWdJRVpZUVVFc1hISmNiaUFnSUNCa2IyWXNYSEpjYmlBZ0lDQm5kV2tzWEhKY2JpQWdJQ0JrWlhCMGFGUmhjbWRsZEN4Y2NseHVJQ0FnSUdSbGNIUm9VMmhoWkdWeUxGeHlYRzRnSUNBZ1pHVndkR2hWYm1sbWIzSnRjeXhjY2x4dUlDQWdJR1JsY0hSb1RXRjBaWEpwWVd3c1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdUMkpxWldOMGN5QW1JR1JoZEdFZ1lYSnlZWGx6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0JqY21GMFpYTWdQU0JiWFN4Y2NseHVJQ0FnSUhKbFkyOXlaSE1nUFNCYlhTeGNjbHh1SUNBZ0lISmxZMjl5WkhORVlYUmhUR2x6ZENBOUlGdGRMRnh5WEc1Y2NseHVYSEpjYmlBZ0lDQXZLajA5UFQwOVBUMDlQVDBnSUZSb2NtVmxMbXB6SUc5aWFtVmpkSE1nWTI5dWRHRnBibVZ5Y3lBZ1BUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNGdJQ0FnY205dmRFTnZiblJoYVc1bGNpeGNjbHh1SUNBZ0lHTnlZWFJsYzBOdmJuUmhhVzVsY2l4Y2NseHVJQ0FnSUhKbFkyOXlaSE5EYjI1MFlXbHVaWElzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1UzUmhkR1Z6TENCMWRHbHNJSFpoY25NZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVJQ0FnSUdOaGJuWmhjMWRwWkhSb0xGeHlYRzRnSUNBZ1kyRnVkbUZ6U0dWcFoyaDBMRnh5WEc0Z0lDQWdaSEJ5TEZ4eVhHNGdJQ0FnYzJOeWIyeHNVbVZqYjNKa2MxUnBiV1Z2ZFhRc1hISmNiaUFnSUNCcGMweHZZV1JwYm1jZ1BTQm1ZV3h6WlN4Y2NseHVJQ0FnSUdsdVptOVFZVzVsYkZOMFlYUmxJRDBnWENKamJHOXpaV1JjSWl4Y2NseHVJQ0FnSUdselUyTnliMnhzYVc1bklEMGdabUZzYzJVc1hISmNiaUFnSUNCa2IxSmxibVJsY2lBOUlIUnlkV1VzWEhKY2JpQWdJQ0J0YjNWelpTQTlJSHRjY2x4dUlDQWdJQ0FnSUNCNE9pQXdMRnh5WEc0Z0lDQWdJQ0FnSUhrNklEQmNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQnRiM1Z6WlVSdmQyNVFiM01nUFNCN1hISmNiaUFnSUNBZ0lDQWdlRG9nTUN4Y2NseHVJQ0FnSUNBZ0lDQjVPaUF3WEhKY2JpQWdJQ0I5TEZ4eVhHNGdJQ0FnZEdGeVoyVjBRMkZ0WlhKaFVHOXpJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lIZzZJREFzWEhKY2JpQWdJQ0FnSUNBZ2VUb2dNRnh5WEc0Z0lDQWdmU3hjY2x4dUlDQWdJSE5sYkdWamRHVmtVbVZqYjNKa0lEMGdMVEVzWEhKY2JpQWdJQ0J6YUc5M2JsSmxZMjl5WkNBOUlDMHhMRnh5WEc0Z0lDQWdiRzloWkdWa1VtVmpiM0prY3lBOUlEQXNYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnVFdGMFpYSnBZV3h6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0IzYjI5a1gyMWhkR1Z5YVdGc08xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0JDUVZORklFMUZWRWhQUkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1MllYSWdZVzVwYldGMFpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdSdlVtVnVaR1Z5SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9JR0Z1YVcxaGRHVWdLVHRjY2x4dUlDQWdJQ0FnSUNCeVpXNWtaWElvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVaR1ZpZFdjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdGMGN5NTFjR1JoZEdVb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlISmxibVJsY2lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCVVYwVkZUaTUxY0dSaGRHVW9LVHRjY2x4dUlDQWdJSFZ3WkdGMFpWTm9iM2R1VW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JEYjI1emRHRnVkSE11WTJGdFpYSmhUVzkxYzJWTmIzWmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwWVhKblpYUkRZVzFsY21GUWIzTXVlQ0E5SUNnZ2JXOTFjMlV1ZUNBdklHTmhiblpoYzFkcFpIUm9JQzBnTUM0MUlDa2dLaUF3TGpJMU95QXZMeUJwYm5abGNuTmxJR0Y0YVhNL1hISmNiaUFnSUNBZ0lDQWdkR0Z5WjJWMFEyRnRaWEpoVUc5ekxua2dQU0FvSUcxdmRYTmxMbmtnTHlCallXNTJZWE5YYVdSMGFDQXRJREF1TlNBcElDb2dNQzR5TlR0Y2NseHVJQ0FnSUNBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5rZ0t6MGdRMjl1YzNSaGJuUnpMbk5qWlc1bExtTmhiV1Z5WVUxdmRYTmxUVzkyWlZOd1pXVmtXU0FxSUNnZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5nZ0xTQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5rZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeUxuSnZkR0YwYVc5dUxub2dLejBnUTI5dWMzUmhiblJ6TG5OalpXNWxMbU5oYldWeVlVMXZkWE5sVFc5MlpWTndaV1ZrV2lBcUlDZ2dkR0Z5WjJWMFEyRnRaWEpoVUc5ekxua2dMU0J5YjI5MFEyOXVkR0ZwYm1WeUxuSnZkR0YwYVc5dUxub2dLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2k1c2IyOXJRWFJVWVhKblpYUW9LVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JRU52Ym5OMFlXNTBjeTV3YjNOMGNISnZZMlZ6YzJsdVp5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMk5sYm1VdWIzWmxjbkpwWkdWTllYUmxjbWxoYkNBOUlHUmxjSFJvVFdGMFpYSnBZV3c3WEhKY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5WlhJdWNtVnVaR1Z5S0NCelkyVnVaU3dnWTJGdFpYSmhMQ0JrWlhCMGFGUmhjbWRsZENBcE8xeHlYRzRnSUNBZ0lDQWdJSE5qWlc1bExtOTJaWEp5YVdSbFRXRjBaWEpwWVd3Z1BTQnVkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lHTnZiWEJ2YzJWeUxuSmxibVJsY2lncE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lISmxibVJsY21WeUxuSmxibVJsY2lnZ2MyTmxibVVzSUdOaGJXVnlZU0FwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYmk4cVhISmNiaUFxSUV4dllXUnBibWNnYldWMGFHOWtjMXh5WEc0Z0tpOWNjbHh1ZG1GeUlIVnViRzloWkZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NtVmpiM0prY3k1c1pXNW5kR2c3SUdrckt5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZqYjNKa2Mxc2dhU0JkTG1SaGRHRWdQU0J1ZFd4c08xeHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1elpYUlZibUZqZEdsMlpTZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnNiMkZrWldSU1pXTnZjbVJ6SUQwZ01EdGNjbHh1SUNBZ0lISmxZMjl5WkhORVlYUmhUR2x6ZENBOUlGdGRPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc1MllYSWdiRzloWkZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0lISmxZMjl5WkhORVlYUmhMQ0J6YUhWbVpteGxRbVZtYjNKbFRHOWhaR2x1Wnl3Z1pHOXVaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDQjBjblZsSUNrN1hISmNibHh5WEc0Z0lDQWdjMmh2ZDB4dllXUnBibWNvSUdaMWJtTjBhVzl1S0NrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR3h2WVdSbFpGSmxZMjl5WkhNZ1BpQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RXNXNiMkZrVW1WamIzSmtjeWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ2MyaDFabVpzWlVKbFptOXlaVXh2WVdScGJtY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6UkdGMFlTQTlJSE5vZFdabWJHVW9JSEpsWTI5eVpITkVZWFJoSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NtVmpiM0prY3k1c1pXNW5kR2dnSmlZZ2FTQThJSEpsWTI5eVpITkVZWFJoTG14bGJtZDBhRHNnYVNzcklDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prYzFzZ2FTQmRMbVJoZEdFZ1BTQnlaV052Y21SelJHRjBZVnNnYVNCZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCcElGMHVjMlYwUVdOMGFYWmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1dFpYTm9MbTFoZEdWeWFXRnNMbTFoZEdWeWFXRnNjeUE5SUdkbGRGSmxZMjl5WkUxaGRHVnlhV0ZzS0NCeVpXTnZjbVJ6UkdGMFlWc2dhU0JkTG1OdmRtVnlMQ0J5WldOdmNtUnpSR0YwWVZzZ2FTQmRMbWhoYzFOc1pXVjJaU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUhkb2VTQS9QMXh5WEc0Z0lDQWdJQ0FnSUM4dklHeHZZV1JsWkZKbFkyOXlaSE1nUFNCeVpXTnZjbVJ6UkdGMFlTNXNaVzVuZEdnZ1BDQnlaV052Y21SekxteGxibWQwYUNBL0lISmxZMjl5WkhORVlYUmhMbXhsYm1kMGFDQTZJSEpsWTI5eVpITXViR1Z1WjNSb08xeHlYRzRnSUNBZ0lDQWdJR3h2WVdSbFpGSmxZMjl5WkhNZ1BTQnlaV052Y21SekxteGxibWQwYUR0Y2NseHVJQ0FnSUNBZ0lDQnlaV052Y21SelJHRjBZVXhwYzNRZ1BTQnlaV052Y21SelJHRjBZVHRjY2x4dUlDQWdJQ0FnSUNCY2NseHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9hV1JsVEc5aFpHbHVaeWhrYjI1bEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1EyOXVjM1JoYm5SekxtOXVURzloWkdsdVowVnVaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENBek1EQXdJQ2s3WEhKY2JpQWdJQ0I5S1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdjMmgxWm1ac1pWSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSE5vZFdabWJHVmtVbVZqYjNKa2N5QTlJSEpsWTI5eVpITkVZWFJoVEdsemREdGNjbHh1SUNBZ0lITm9kV1ptYkdWa1VtVmpiM0prY3lBOUlITm9kV1ptYkdVb0lITm9kV1ptYkdWa1VtVmpiM0prY3lBcE8xeHlYRzRnSUNBZ2JHOWhaRkpsWTI5eVpITW9JSE5vZFdabWJHVmtVbVZqYjNKa2N5QXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRkpGUTA5U1JGTWdVMFZNUlVOVVNVOU9JRTFGVkVoUFJGTWdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1WEhKY2JuWmhjaUJ6Wld4bFkzUlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9JR2xrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZHZjR1Z1WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdJVDA5SUNkdmNHVnVhVzVuSnlBbUppQnBibVp2VUdGdVpXeFRkR0YwWlNBaFBUMGdKMk5zYjNOcGJtY25JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlJR2xrTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm1iR2x3VTJWc1pXTjBaV1JTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCeVpXTnZjbVJ6V3lCelpXeGxZM1JsWkZKbFkyOXlaQ0JkSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWFXeHNTVzVtYjFCaGJtVnNLQ0J5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFNBbmIzQmxibWx1WnljN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhObGJHVmpkR1ZrVW1WamIzSmtJRjB1Wm14cGNGSmxZMjl5WkNnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuYjNCbGJtVmtKenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0FwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JEYjI1emRHRnVkSE11YjI1SmJtWnZVR0Z1Wld4UGNHVnVaV1FvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm1Ga1pVbHVLQ0JwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOUxDQXpNREFnS1R0Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNiblpoY2lCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0dadmNtTmxLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjI5d1pXNWxaQ2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdaaFpHVlBkWFFvSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MElDazdYSEpjYmlBZ0lDQWdJQ0FnYVc1bWIxQmhibVZzVTNSaGRHVWdQU0FuWTJ4dmMybHVaeWM3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSE5sYkdWamRHVmtVbVZqYjNKa0lGMHVabXhwY0VKaFkydFNaV052Y21Rb0lHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsdVptOVFZVzVsYkZOMFlYUmxJRDBnSjJOc2IzTmxaQ2M3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRU52Ym5OMFlXNTBjeTV2YmtsdVptOVFZVzVsYkVOc2IzTmxaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5TENCbWIzSmpaU0FwTzF4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhWd1pHRjBaVk5vYjNkdVVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ1BUMDlJQ2RqYkc5elpXUW5JQ1ltSUhOb2IzZHVVbVZqYjNKa0lDRTlJSE5sYkdWamRHVmtVbVZqYjNKa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnphRzkzYmxKbFkyOXlaQ0E5SUhObGJHVmpkR1ZrVW1WamIzSmtPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0NCMllYSWdjbVZqYjNKa1NXUWdQU0F3T3lCeVpXTnZjbVJKWkNBOElHeHZZV1JsWkZKbFkyOXlaSE03SUhKbFkyOXlaRWxrS3lzZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwOUlDMHhJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSEpsWTI5eVpFbGtJRjB1Y0hWemFGSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2dnY21WamIzSmtTV1FnUGlCelpXeGxZM1JsWkZKbFkyOXlaQ0FtSmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prU1dRZ1BpQnlaV052Y21Seld5QnpaV3hsWTNSbFpGSmxZMjl5WkNCZExtTnlZWFJsU1dRZ0tpQkRiMjV6ZEdGdWRITXVjbVZqYjNKa2MxQmxja055WVhSbElDWW1YSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUkpaQ0E4SUNnZ2NtVmpiM0prYzFzZ2MyVnNaV04wWldSU1pXTnZjbVFnWFM1amNtRjBaVWxrSUNvZ1EyOXVjM1JoYm5SekxuSmxZMjl5WkhOUVpYSkRjbUYwWlNBcElDc2dRMjl1YzNSaGJuUnpMbkpsWTI5eVpITlFaWEpEY21GMFpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21Seld5QnlaV052Y21SSlpDQmRMbkIxYkd4U1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9JSEpsWTI5eVpFbGtJRDA5SUhObGJHVmpkR1ZrVW1WamIzSmtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITmJJSEpsWTI5eVpFbGtJRjB1YzJodmQxSmxZMjl5WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCeVpXTnZjbVJKWkNCZExuQjFjMmhTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDQTlJR1oxYm1OMGFXOXVJQ2dnWm05eVkyVWdLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjI5d1pXNWxaQ2NnSmlZZ0lXWnZjbU5sSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWJHbHdRbUZqYTFObGJHVmpkR1ZrVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhVzVtYjFCaGJtVnNVM1JoZEdVZ0lUMDlJQ2R2Y0dWdWFXNW5KeUFtSmlCcGJtWnZVR0Z1Wld4VGRHRjBaU0FoUFQwZ0oyTnNiM05wYm1jbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBbmIzQmxibVZrSnlBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pteHBjRUpoWTJ0VFpXeGxZM1JsWkZKbFkyOXlaQ2gwY25WbEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sYkdWamRHVmtVbVZqYjNKa0lEMGdMVEU3WEhKY2JpQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdRMkZ0WlhKaFRXRnVZV2RsY2k1eVpYTmxkRU5oYldWeVlTZ3BPMXh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSE5sYkdWamRGQnlaWFpTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdjMlZzWldOMFVtVmpiM0prS0dkbGRGQnlaWFpCZG1GcGJHRmliR1ZTWldOdmNtUW9jMlZzWldOMFpXUlNaV052Y21RcEtUdGNjbHh1SUNBZ0lGeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlITmxiR1ZqZEU1bGVIUlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2MyVnNaV04wVW1WamIzSmtLR2RsZEU1bGVIUkJkbUZwYkdGaWJHVlNaV052Y21Rb2MyVnNaV04wWldSU1pXTnZjbVFwS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdaMlYwVUhKbGRrRjJZV2xzWVdKc1pWSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDaG1jbTl0VW1WamIzSmtLU0I3WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JtY205dFVtVmpiM0prSUQwOUlDMHhJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtY205dFVtVmpiM0prSUQwZ2JHOWhaR1ZrVW1WamIzSmtjeUF0SURFN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2dnWm5KdmJWSmxZMjl5WkNBOElHeHZZV1JsWkZKbFkyOXlaSE1nTFNBeElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnWm5KdmJWSmxZMjl5WkNBcklERTdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabkp2YlZKbFkyOXlaQ0E5SURBN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUJ5WldOdmNtUnpXeUJtY205dFVtVmpiM0prSUYwdVlXTjBhWFpsSUQ4Z1puSnZiVkpsWTI5eVpDQTZJR2RsZEZCeVpYWkJkbUZwYkdGaWJHVlNaV052Y21Rb1puSnZiVkpsWTI5eVpDazdYSEpjYmlBZ0lDQmNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm5aWFJPWlhoMFFYWmhhV3hoWW14bFVtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tHWnliMjFTWldOdmNtUXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR1p5YjIxU1pXTnZjbVFnUFQwZ0xURWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p5YjIxU1pXTnZjbVFnUFNCc2IyRmtaV1JTWldOdmNtUnpJQzBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JtY205dFVtVmpiM0prSUQ0Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabkp2YlZKbFkyOXlaQ0E5SUdaeWIyMVNaV052Y21RZ0xTQXhPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p5YjIxU1pXTnZjbVFnUFNCc2IyRmtaV1JTWldOdmNtUnpJQzBnTVR0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJSEpsWTI5eVpITmJJR1p5YjIxU1pXTnZjbVFnWFM1aFkzUnBkbVVnUHlCbWNtOXRVbVZqYjNKa0lEb2daMlYwVG1WNGRFRjJZV2xzWVdKc1pWSmxZMjl5WkNobWNtOXRVbVZqYjNKa0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYm1GMmFXZGhkR1ZTWldOdmNtUnpJRDBnWm5WdVkzUnBiMjRnS0NCa2FYSmxZM1JwYjI0Z0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMk5zYjNObFpDY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNnZ1pHbHlaV04wYVc5dUlEMDlQU0FuY0hKbGRpY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCelpXeGxZM1JRY21WMlVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCelpXeGxZM1JPWlhoMFVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JwYm1adlVHRnVaV3hUZEdGMFpTQTlQVDBnSjI5d1pXNWxaQ2NnSmlZZ1EyOXVjM1JoYm5SekxtTnNiM05sU1c1bWIxQmhibVZzVDI1VFkzSnZiR3dnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdac2FYQkNZV05yVTJWc1pXTjBaV1JTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSE5qY205c2JGSmxZMjl5WkhNZ1BTQm1kVzVqZEdsdmJpQW9JR0poYzJWWkxDQnZiR1JFWld4MFlTQXBJSHRjY2x4dVhISmNiaUFnSUNCdmJHUkVaV3gwWVNBOUlDRnZiR1JFWld4MFlTQjhmQ0JOWVhSb0xtRmljeWdnYjJ4a1JHVnNkR0VnS1NBK0lEQXVOU0EvSURBdU5TQTZJRTFoZEdndVlXSnpLQ0J2YkdSRVpXeDBZU0FwTzF4eVhHNGdJQ0FnZG1GeUlHbHVkbVZ5YzJWRVpXeDBZU0E5SURFZ0xTQnZiR1JFWld4MFlUdGNjbHh1SUNBZ0lIWmhjaUJ6WTNKdmJHeFRjR1ZsWkNBOUlHbHVkbVZ5YzJWRVpXeDBZU0FxSUdsdWRtVnljMlZFWld4MFlTQXFJR2x1ZG1WeWMyVkVaV3gwWVNBcUlETXdNRHRjY2x4dVhISmNiaUFnSUNCelkzSnZiR3hTWldOdmNtUnpWR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmR5WVdJbktUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1pHVnNkR0VnUFNBb0lHSmhjMlZaSUMwZ2JXOTFjMlV1ZVNBcElDOGdZMkZ1ZG1GelNHVnBaMmgwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHUmxiSFJoSUQ0Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGJHVmpkRTVsZUhSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnZ1pHVnNkR0VnUENBd0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1pXTjBVSEpsZGxKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5qY205c2JGSmxZMjl5WkhNb0lHSmhjMlZaTENCa1pXeDBZU0FwTzF4eVhHNWNjbHh1SUNBZ0lIMHNJSE5qY205c2JGTndaV1ZrSUNrN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR1pwYkd4SmJtWnZVR0Z1Wld3Z1BTQm1kVzVqZEdsdmJpQW9JSEpsWTI5eVpDQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JSEpsWTI5eVpDNWtZWFJoTG5ScGRHeGxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0IwYVhSc1pVbHVabTlGYkdWdFpXNTBMbWx1Ym1WeVNGUk5UQ0E5SUhKbFkyOXlaQzVrWVhSaExuUnBkR3hsTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lISmxZMjl5WkM1a1lYUmhMbUZ5ZEdsemRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZWEowYVhOMFNXNW1iMFZzWlcxbGJuUXVhVzV1WlhKSVZFMU1JRDBnY21WamIzSmtMbVJoZEdFdVlYSjBhWE4wTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lISmxZMjl5WkM1a1lYUmhMbU52ZG1WeUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiM1psY2tsdVptOUZiR1Z0Wlc1MExuTjBlV3hsTG1KaFkydG5jbTkxYm1SSmJXRm5aU0E5SUNkMWNtd29KeUFySUhKbFkyOXlaQzVrWVhSaExtTnZkbVZ5SUNzZ0p5a25PMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdSVlpGVGxSVElFaEJUa1JNU1U1SElDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVYSEpjYm5aaGNpQnZiazF2ZFhObFRXOTJaVVYyWlc1MElEMGdablZ1WTNScGIyNGdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCdFgzQnZjM2dnUFNBd0xGeHlYRzRnSUNBZ0lDQWdJRzFmY0c5emVTQTlJREFzWEhKY2JpQWdJQ0FnSUNBZ1pWOXdiM040SUQwZ01DeGNjbHh1SUNBZ0lDQWdJQ0JsWDNCdmMza2dQU0F3TEZ4eVhHNGdJQ0FnSUNBZ0lHOWlhaUE5SUhSb2FYTTdYSEpjYmx4eVhHNGdJQ0FnTHk5blpYUWdiVzkxYzJVZ2NHOXphWFJwYjI0Z2IyNGdaRzlqZFcxbGJuUWdZM0p2YzNOaWNtOTNjMlZ5WEhKY2JpQWdJQ0JwWmlBb0lDRmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JsSUQwZ2QybHVaRzkzTG1WMlpXNTBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdVdWNHRm5aVmdnZkh3Z1pTNXdZV2RsV1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM040SUQwZ1pTNXdZV2RsV0R0Y2NseHVJQ0FnSUNBZ0lDQnRYM0J2YzNrZ1BTQmxMbkJoWjJWWk8xeHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2daUzVqYkdsbGJuUllJSHg4SUdVdVkyeHBaVzUwV1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM040SUQwZ1pTNWpiR2xsYm5SWUlDc2daRzlqZFcxbGJuUXVZbTlrZVM1elkzSnZiR3hNWldaMElDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRXhsWm5RN1hISmNiaUFnSUNBZ0lDQWdiVjl3YjNONUlEMGdaUzVqYkdsbGJuUlpJQ3NnWkc5amRXMWxiblF1WW05a2VTNXpZM0p2Ykd4VWIzQWdLMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMyTnliMnhzVkc5d08xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdkwyZGxkQ0J3WVhKbGJuUWdaV3hsYldWdWRDQndiM05wZEdsdmJpQnBiaUJrYjJOMWJXVnVkRnh5WEc0Z0lDQWdhV1lnS0NCdlltb3ViMlptYzJWMFVHRnlaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2J5QjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsWDNCdmMzZ2dLejBnYjJKcUxtOW1abk5sZEV4bFpuUTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHVmZjRzl6ZVNBclBTQnZZbW91YjJabWMyVjBWRzl3TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUhkb2FXeGxJQ2dnYjJKcUlEMGdiMkpxTG05bVpuTmxkRkJoY21WdWRDQXBPeUF2THlCcWMyaHBiblFnYVdkdWIzSmxPbXhwYm1WY2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHk4Z2JXOTFjMlVnY0c5emFYUnBiMjRnYldsdWRYTWdaV3h0SUhCdmMybDBhVzl1SUdseklHMXZkWE5sY0c5emFYUnBiMjRnY21Wc1lYUnBkbVVnZEc4Z1pXeGxiV1Z1ZERwY2NseHVJQ0FnSUcxdmRYTmxMbmdnUFNCdFgzQnZjM2dnTFNCbFgzQnZjM2c3WEhKY2JpQWdJQ0J0YjNWelpTNTVJRDBnYlY5d2IzTjVJQzBnWlY5d2IzTjVPMXh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJRzl1VTJOeWIyeHNSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dkMmhsWld4RWFYSmxZM1JwYjI0b0lHVWdLU0E4SURBZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWhkbWxuWVhSbFVtVmpiM0prY3lnZ0ozQnlaWFluSUNrN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtRjJhV2RoZEdWU1pXTnZjbVJ6S0NBbmJtVjRkQ2NnS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVRMnhwWTJ0RmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ2JXOTFjMlZFYjNkdVVHOXpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkamJHOXpaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdkbVZqZEc5eVVHOXpJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I0T2lBb0lDZ2dLQ0J0YjNWelpVUnZkMjVRYjNNdWVDQXRJSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1YjJabWMyVjBUR1ZtZENBcElDOGdLQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG5kcFpIUm9JQ2tnS1NBcUlESWdMU0F4SUNrc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklDZ2dMU2dnS0NCdGIzVnpaVVJ2ZDI1UWIzTXVlU0F0SUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWIyWm1jMlYwVkc5d0lDa2dMeUFvSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWFHVnBaMmgwSUNrZ0tTQXFJRElnS3lBeElDa3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIbzZJREF1TlZ4eVhHNGdJQ0FnSUNBZ0lIMDdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIWmhjaUIyWldOMGIzSWdQU0J1WlhjZ1ZFaFNSVVV1Vm1WamRHOXlNeWdnZG1WamRHOXlVRzl6TG5nc0lIWmxZM1J2Y2xCdmN5NTVMQ0IyWldOMGIzSlFiM011ZWlBcE8xeHlYRzRnSUNBZ0lDQWdJSFpsWTNSdmNpNTFibkJ5YjJwbFkzUW9JR05oYldWeVlTQXBPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnlZWGxqWVhOMFpYSWdQU0J1WlhjZ1ZFaFNSVVV1VW1GNVkyRnpkR1Z5S0NCallXMWxjbUV1Y0c5emFYUnBiMjRzSUhabFkzUnZjaTV6ZFdJb0lHTmhiV1Z5WVM1d2IzTnBkR2x2YmlBcExtNXZjbTFoYkdsNlpTZ3BJQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR2x1ZEdWeWMyVmpkSE1nUFNCeVlYbGpZWE4wWlhJdWFXNTBaWEp6WldOMFQySnFaV04wY3lnZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5TG1Ob2FXeGtjbVZ1TENCMGNuVmxJQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQzh2SUVsbUlHbHVkR1Z5YzJWamRDQnpiMjFsZEdocGJtZGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHbHVkR1Z5YzJWamRITXViR1Z1WjNSb0lENGdNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJqYkdsamEyVmtVbVZqYjNKa08xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUjJWMElIUm9aU0JtYVhKemRDQjJhWE5wWW14bElISmxZMjl5WkNCcGJuUmxjbk5sWTNSbFpGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLQ0IyWVhJZ2FTQTlJREE3SUdrZ1BDQnBiblJsY25ObFkzUnpMbXhsYm1kMGFEc2dhU3NySUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JR2x1ZEdWeVkyVndkQ0JoSUcxbGMyZ2dkMmhwWTJnZ2FYTWdibTkwSUdFZ2NtVmpiM0prTENCaWNtVmhhMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDQjBlWEJsYjJZb2FXNTBaWEp6WldOMGMxc2dhU0JkTG05aWFtVmpkQzV5WldOdmNtUkpaQ2tnUFQwOUlDZDFibVJsWm1sdVpXUW5JQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JwYm5SbGNuTmxZM1J6V3lCcElGMHViMkpxWldOMExuWnBjMmxpYkdVZ0ppWWdhVzUwWlhKelpXTjBjMXNnYVNCZExtOWlhbVZqZEM1eVpXTnZjbVJKWkNBK1BTQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHbGphMlZrVW1WamIzSmtJRDBnY21WamIzSmtjMXNnYVc1MFpYSnpaV04wYzFzZ2FTQmRMbTlpYW1WamRDNXlaV052Y21SSlpDQmRPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR1Z5WlNCcGN5QnZibVZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NCamJHbGphMlZrVW1WamIzSmtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnZ2MyVnNaV04wWldSU1pXTnZjbVFnUFQwOUlHTnNhV05yWldSU1pXTnZjbVF1YVdRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pzYVhCVFpXeGxZM1JsWkZKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdWamRGSmxZMjl5WkNnZ1kyeHBZMnRsWkZKbFkyOXlaQzVwWkNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGc2JDQnBiblJsY25ObFkzUmxaQ0J5WldOdmNtUnpJR0Z5WlNCdWIzUWdkbWx6YVdKc1pYTmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0x5OGdUbThnY21WamIzSmtJR2hoY3lCaVpXVnVJR2x1ZEdWeWMyVmpkR1ZrWEhKY2JpQWdJQ0FnSUNBZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTmxkRk5vYjNkdVVtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0JEYjI1emRHRnVkSE11WTJ4dmMyVkpibVp2VUdGdVpXeFBia05zYVdOcklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJRzl1VFc5MWMyVkViM2R1UlhabGJuUWdQU0JtZFc1amRHbHZiaUFvSUdVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWTJ4bFlYSkpiblJsY25aaGJDZ2djMk55YjJ4c1VtVmpiM0prYzFScGJXVnZkWFFnS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUdsdVptOVFZVzVsYkZOMFlYUmxJRDA5UFNBblkyeHZjMlZrSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyTnliMnhzVW1WamIzSmtjeWdnYlc5MWMyVXVlU0FwTzF4eVhHNWNjbHh1SUNBZ0lIMGdYSEpjYmx4eVhHNGdJQ0FnYlc5MWMyVkViM2R1VUc5eklEMGdlMXh5WEc0Z0lDQWdJQ0FnSUhnNklHMXZkWE5sTG5nc1hISmNiaUFnSUNBZ0lDQWdlVG9nYlc5MWMyVXVlVnh5WEc0Z0lDQWdmVHRjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJ2YmsxdmRYTmxWWEJGZG1WdWRDQTlJR1oxYm1OMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JqYkdWaGNrbHVkR1Z5ZG1Gc0tDQnpZM0p2Ykd4U1pXTnZjbVJ6VkdsdFpXOTFkQ0FwTzF4eVhHNGdJQ0FnY21WdVpHVnlaWEl1Wkc5dFJXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NkbmNtRmlKeWs3WEhKY2JseHlYRzRnSUNBZ0x5OGdWSEpwWjJkbGNpQnpZMlZ1WlNCamJHbGpheUJsZG1WdWRDQnZibXg1SUdsbUlHMXZkWE5sZFhBZ1pYWmxiblFnYVhNZ2JtOTBJR0VnWkhKaFp5QmxibVFnWlhabGJuUWdKaUJ1YjNRZ1lTQmpiR2xqYXlCdmJpQmhJR3hwYm10Y2NseHVJQ0FnSUdsbUlDZ2dZMjl2Y21SelJYRjFZV3h6UVhCd2NtOTRLQ0J0YjNWelpVUnZkMjVRYjNNc0lHMXZkWE5sTENCRGIyNXpkR0Z1ZEhNdWMyTmxibVV1WjNKaFlsTmxibk5wZEdsMmFYUjVJQ2tnSmlZZ0lTZ2daUzUwWVhKblpYUWdKaVlnWlM1MFlYSm5aWFF1YUdGelFYUjBjbWxpZFhSbEtDZG9jbVZtSnlrZ0tTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdiMjVEYkdsamEwVjJaVzUwS0NCdGIzVnpaVVJ2ZDI1UWIzTWdLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJRzl1UzJWNVJHOTNia1YyWlc1MElEMGdablZ1WTNScGIyNGdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1pTNXJaWGxEYjJSbElEMDlQU0F6TnlCOGZDQmxMbXRsZVVOdlpHVWdQVDA5SURNNElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVZWFpwWjJGMFpWSmxZMjl5WkhNb0lDZHVaWGgwSnlBcE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQnBaaUFvSUdVdWEyVjVRMjlrWlNBOVBUMGdNemtnZkh3Z1pTNXJaWGxEYjJSbElEMDlQU0EwTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtRjJhV2RoZEdWU1pXTnZjbVJ6S0NBbmNISmxkaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdiMjVYYVc1a2IzZFNaWE5wZW1WRmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCallXeGpkV3hoZEdWRFlXNTJZWE5UYVhwbEtDazdYSEpjYmlBZ0lDQnpaWFJEWVc1MllYTkVhVzFsYm5OcGIyNXpLQ2s3WEhKY2JseHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdWMyVjBVMmw2WlNnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzRnSUNBZ1EyRnRaWEpoVFdGdVlXZGxjaTUxY0dSaGRHVkRZVzFsY21GQmMzQmxZM1FvSUdOaGJuWmhjMWRwWkhSb0lDOGdZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG5SRVpYQjBhQzUyWVd4MVpTQTlJR1JsY0hSb1ZHRnlaMlYwTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuTnBlbVV1ZG1Gc2RXVXVjMlYwS0NCallXNTJZWE5YYVdSMGFDd2dZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVkR1Y0ZEdWc0xuWmhiSFZsTG5ObGRDZ2dNUzR3SUM4Z1kyRnVkbUZ6VjJsa2RHZ3NJREV1TUNBdklHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnUmxoQlFTNTFibWxtYjNKdGN5NXlaWE52YkhWMGFXOXVMblpoYkhWbExuTmxkQ2dnTVNBdklHTmhiblpoYzFkcFpIUm9MQ0F4SUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJQ0FnVlVrZ1RVVlVTRTlFVXlBZ0lDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1ZG1GeUlITm9iM2RNYjJGa2FXNW5JRDBnWm5WdVkzUnBiMjRnS0NCa2IyNWxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHWmhaR1ZKYmlnZ2JHOWhaR2x1WjBOdmJuUmhhVzVsY2tWc1pXMWxiblFnS1R0Y2NseHVJQ0FnSUhObGRGUnBiV1Z2ZFhRb1pHOXVaU3dnTVRBd01DazdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdocFpHVk1iMkZrYVc1bklEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdaaFpHVlBkWFFvSUd4dllXUnBibWREYjI1MFlXbHVaWEpGYkdWdFpXNTBJQ2s3WEhKY2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0dSdmJtVXNJREV3TURBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JseHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUVsT1NWUkpRVXhKVTBGVVNVOU9JQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVjY2x4dWRtRnlJR2x1YVhSVFkyVnVaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0F2THlCelkyVnVaU3dnY21WdVpHVnlaWElzSUdOaGJXVnlZU3d1TGk1Y2NseHVJQ0FnSUhOalpXNWxJRDBnYm1WM0lGUklVa1ZGTGxOalpXNWxLQ2s3WEhKY2JseHlYRzRnSUNBZ2NtVnVaR1Z5WlhJZ1BTQnVaWGNnVkVoU1JVVXVWMlZpUjB4U1pXNWtaWEpsY2lnZ2UxeHlYRzRnSUNBZ0lDQWdJR0Z1ZEdsaGJHbGhjem9nZEhKMVpWeHlYRzRnSUNBZ2ZTQXBPMXh5WEc0Z0lDQWdjbVZ1WkdWeVpYSXVjMlYwVTJsNlpTZ2dZMkZ1ZG1GelYybGtkR2dzSUdOaGJuWmhjMGhsYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUdOaGJuWmhjME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RZ0tUdGNjbHh1SUNBZ0lISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUXVhV1FnUFNCY0ltTnZiblJsZUhSY0lqdGNjbHh1SUNBZ0lISmxibVJsY21WeUxuTmxkRU5zWldGeVEyOXNiM0lvSUVOdmJuTjBZVzUwY3k1aVlXTnJaM0p2ZFc1a1EyOXNiM0lzSURFZ0tUdGNjbHh1WEhKY2JpQWdJQ0JEWVcxbGNtRk5ZVzVoWjJWeUxtbHVhWFFvWTJGdWRtRnpWMmxrZEdnZ0x5QmpZVzUyWVhOSVpXbG5hSFFwTzF4eVhHNGdJQ0FnWTJGdFpYSmhJRDBnUTJGdFpYSmhUV0Z1WVdkbGNpNW5aWFJEWVcxbGNtRW9LVHRjY2x4dVhISmNiaUFnSUNCMllYSWdkMjl2WkY5MFpYaDBkWEpsSUQwZ1ZFaFNSVVV1U1cxaFoyVlZkR2xzY3k1c2IyRmtWR1Y0ZEhWeVpTZ2dRMjl1YzNSaGJuUnpMbU55WVhSbFZHVjRkSFZ5WlNBcE8xeHlYRzRnSUNBZ2QyOXZaRjkwWlhoMGRYSmxMbUZ1YVhOdmRISnZjSGtnUFNCeVpXNWtaWEpsY2k1blpYUk5ZWGhCYm1semIzUnliM0I1S0NrN1hISmNiaUFnSUNCM2IyOWtYMjFoZEdWeWFXRnNJRDBnYm1WM0lGUklVa1ZGTGsxbGMyaE1ZVzFpWlhKMFRXRjBaWEpwWVd3b0lIdGNjbHh1SUNBZ0lDQWdJQ0J0WVhBNklIZHZiMlJmZEdWNGRIVnlaVnh5WEc0Z0lDQWdmU0FwTzF4eVhHNWNjbHh1SUNBZ0lISnZiM1JEYjI1MFlXbHVaWElnUFNCdVpYY2dWRWhTUlVVdVQySnFaV04wTTBRb0tUdGNjbHh1SUNBZ0lHTnlZWFJsYzBOdmJuUmhhVzVsY2lBOUlHNWxkeUJVU0ZKRlJTNVBZbXBsWTNRelJDZ3BPMXh5WEc0Z0lDQWdjMk5sYm1VdVlXUmtLQ0J5YjI5MFEyOXVkR0ZwYm1WeUlDazdYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TG1Ga1pDZ2dZM0poZEdWelEyOXVkR0ZwYm1WeUlDazdYSEpjYmx4eVhHNGdJQ0FnYVc1cGRFTnlZWFJsY3lncE8xeHlYRzRnSUNBZ2FXNXBkRkpsWTI5eVpITW9LVHRjY2x4dVhISmNiaUFnSUNCc2FXZG9kQ0E5SUc1bGR5QlVTRkpGUlM1UWIybHVkRXhwWjJoMEtDQXdlRVpHUmtaR1Jpd2dRMjl1YzNSaGJuUnpMbXhwWjJoMFNXNTBaVzV6YVhSNUlDb2dNUzR4SUNrN1hISmNiaUFnSUNCc2FXZG9kQzV3YjNOcGRHbHZiaTV6WlhRb0lETXdNQ3dnT0RBc0lEQWdLVHRjY2x4dUlDQWdJSE5qWlc1bExtRmtaQ2dnYkdsbmFIUWdLVHRjY2x4dVhISmNiaUFnSUNCc1pXWjBUR2xuYUhRZ1BTQnVaWGNnVkVoU1JVVXVVRzlwYm5STWFXZG9kQ2dnTUhoR1JrWkdSa1lzSUVOdmJuTjBZVzUwY3k1c2FXZG9kRWx1ZEdWdWMybDBlU0FxSURBdU5pQXBPMXh5WEc0Z0lDQWdiR1ZtZEV4cFoyaDBMbkJ2YzJsMGFXOXVMbk5sZENnZ0xURXdNQ3dnTXpBd0xDQXhNREF3SUNrN1hISmNiaUFnSUNCelkyVnVaUzVoWkdRb0lHeGxablJNYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUhKcFoyaDBUR2xuYUhRZ1BTQnVaWGNnVkVoU1JVVXVVRzlwYm5STWFXZG9kQ2dnTUhoR1JrWkdSa1lzSUVOdmJuTjBZVzUwY3k1c2FXZG9kRWx1ZEdWdWMybDBlU0FxSURBdU5pQXBPMXh5WEc0Z0lDQWdjbWxuYUhSTWFXZG9kQzV3YjNOcGRHbHZiaTV6WlhRb0lDMHhNREFzSURNd01Dd2dMVEV3TURBZ0tUdGNjbHh1SUNBZ0lITmpaVzVsTG1Ga1pDZ2djbWxuYUhSTWFXZG9kQ0FwTzF4eVhHNWNjbHh1SUNBZ0lHbHVhWFJRYjNOMFVISnZZMlZ6YzJsdVp5Z3BPMXh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0lDZEVUMDFOYjNWelpWTmpjbTlzYkNjc0lHOXVVMk55YjJ4c1JYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JpQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmJXOTFjMlYzYUdWbGJDY3NJRzl1VTJOeWIyeHNSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDQW5iVzkxYzJWdGIzWmxKeXdnYjI1TmIzVnpaVTF2ZG1WRmRtVnVkQ3dnWm1Gc2MyVWdLVHRjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkdGIzVnpaV1J2ZDI0bkxDQnZiazF2ZFhObFJHOTNia1YyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMjF2ZFhObGRYQW5MQ0J2YmsxdmRYTmxWWEJGZG1WdWRDd2dabUZzYzJVZ0tUdGNjbHh1WEhKY2JpQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMnRsZVdSdmQyNG5MQ0J2Ymt0bGVVUnZkMjVGZG1WdWRDd2dabUZzYzJVZ0tUc2dYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQkRiMjV6ZEdGdWRITXVkWEJrWVhSbFEyRnVkbUZ6VTJsNlpVOXVWMmx1Wkc5M1VtVnphWHBsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCM2FXNWtiM2N1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnSjNKbGMybDZaU2NzSUc5dVYybHVaRzkzVW1WemFYcGxSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUM4dklFUlBUU0J6WlhSMWNGeHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWNHOXphWFJwYjI0Z1BTQW5jbVZzWVhScGRtVW5PMXh5WEc0Z0lDQWdZMkZ1ZG1GelEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkaFluTnZiSFYwWlNjN1hISmNiaUFnSUNCcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1d2IzTnBkR2x2YmlBOUlDZGhZbk52YkhWMFpTYzdYSEpjYmlBZ0lDQnNiMkZrYVc1blEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNkaFluTnZiSFYwWlNjN1hISmNibHh5WEc0Z0lDQWdjMlYwUTJGdWRtRnpSR2x0Wlc1emFXOXVjeWdwTzF4eVhHNWNjbHh1SUNBZ0lHaHBaR1ZGYkdWdFpXNTBLR2x1Wm05RGIyNTBZV2x1WlhKRmJHVnRaVzUwS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUVOdmJuTjBZVzUwY3k1a1pXSjFaeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVc1cGRFUmxZblZuS0NrN1hISmNiaUFnSUNBZ0lDQWdhVzVwZEVkVlNTZ3BPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnlaWE5sZEZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmlBZ0lDQmhibWx0WVhSbEtDazdYSEpjYm4wN1hISmNibHh5WEc1MllYSWdhVzVwZEZCdmMzUlFjbTlqWlhOemFXNW5JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJR1JsY0hSb1UyaGhaR1Z5SUQwZ1ZFaFNSVVV1VTJoaFpHVnlUR2xpTG1SbGNIUm9Va2RDUVR0Y2NseHVJQ0FnSUdSbGNIUm9WVzVwWm05eWJYTWdQU0JVU0ZKRlJTNVZibWxtYjNKdGMxVjBhV3h6TG1Oc2IyNWxLQ0JrWlhCMGFGTm9ZV1JsY2k1MWJtbG1iM0p0Y3lBcE8xeHlYRzVjY2x4dUlDQWdJR1JsY0hSb1RXRjBaWEpwWVd3Z1BTQnVaWGNnVkVoU1JVVXVVMmhoWkdWeVRXRjBaWEpwWVd3b0lIdGNjbHh1SUNBZ0lDQWdJQ0JtY21GbmJXVnVkRk5vWVdSbGNqb2daR1Z3ZEdoVGFHRmtaWEl1Wm5KaFoyMWxiblJUYUdGa1pYSXNYSEpjYmlBZ0lDQWdJQ0FnZG1WeWRHVjRVMmhoWkdWeU9pQmtaWEIwYUZOb1lXUmxjaTUyWlhKMFpYaFRhR0ZrWlhJc1hISmNiaUFnSUNBZ0lDQWdkVzVwWm05eWJYTTZJR1JsY0hSb1ZXNXBabTl5YlhOY2NseHVJQ0FnSUgwZ0tUdGNjbHh1SUNBZ0lHUmxjSFJvVFdGMFpYSnBZV3d1WW14bGJtUnBibWNnUFNCVVNGSkZSUzVPYjBKc1pXNWthVzVuTzF4eVhHNWNjbHh1SUNBZ0lHUmxjSFJvVkdGeVoyVjBJRDBnYm1WM0lGUklVa1ZGTGxkbFlrZE1VbVZ1WkdWeVZHRnlaMlYwS0NCallXNTJZWE5YYVdSMGFDd2dZMkZ1ZG1GelNHVnBaMmgwTENCN1hISmNiaUFnSUNBZ0lDQWdiV2x1Um1sc2RHVnlPaUJVU0ZKRlJTNU9aV0Z5WlhOMFJtbHNkR1Z5TEZ4eVhHNGdJQ0FnSUNBZ0lHMWhaMFpwYkhSbGNqb2dWRWhTUlVVdVRtVmhjbVZ6ZEVacGJIUmxjaXhjY2x4dUlDQWdJQ0FnSUNCbWIzSnRZWFE2SUZSSVVrVkZMbEpIUWtGR2IzSnRZWFJjY2x4dUlDQWdJSDBnS1R0Y2NseHVYSEpjYmlBZ0lDQmpiMjF3YjNObGNpQTlJRzVsZHlCVVNGSkZSUzVGWm1abFkzUkRiMjF3YjNObGNpZ2djbVZ1WkdWeVpYSWdLVHRjY2x4dUlDQWdJR052YlhCdmMyVnlMbUZrWkZCaGMzTW9JRzVsZHlCVVNGSkZSUzVTWlc1a1pYSlFZWE56S0NCelkyVnVaU3dnWTJGdFpYSmhJQ2tnS1R0Y2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQkVaWEIwYUNCdlppQm1hV1ZzWkNCemFHRmtaWElnSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dUlDQWdJR1J2WmlBOUlHNWxkeUJVU0ZKRlJTNVRhR0ZrWlhKUVlYTnpLQ0JVU0ZKRlJTNUViMFpUYUdGa1pYSWdLVHRjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1MFJHVndkR2d1ZG1Gc2RXVWdQU0JrWlhCMGFGUmhjbWRsZER0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NXphWHBsTG5aaGJIVmxMbk5sZENnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMblJsZUhSbGJDNTJZV3gxWlM1elpYUW9JREV1TUNBdklHTmhiblpoYzFkcFpIUm9MQ0F4TGpBZ0x5QmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVYSEpjYmlBZ0lDQXZMMjFoYTJVZ2MzVnlaU0IwYUdGMElIUm9aWE5sSUhSM2J5QjJZV3gxWlhNZ1lYSmxJSFJvWlNCellXMWxJR1p2Y2lCNWIzVnlJR05oYldWeVlTd2diM1JvWlhKM2FYTmxJR1JwYzNSaGJtTmxjeUIzYVd4c0lHSmxJSGR5YjI1bkxseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbnB1WldGeUxuWmhiSFZsSUQwZ1kyRnRaWEpoTG01bFlYSTdJQzh2WTJGdFpYSmhJR05zYVhCd2FXNW5JSE4wWVhKMFhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVlbVpoY2k1MllXeDFaU0E5SUdOaGJXVnlZUzVtWVhJN0lDOHZZMkZ0WlhKaElHTnNhWEJ3YVc1bklHVnVaRnh5WEc1Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1iMk5oYkVSbGNIUm9MblpoYkhWbElEMGdOVHNnTHk5bWIyTmhiQ0JrYVhOMFlXNWpaU0IyWVd4MVpTQnBiaUJ0WlhSbGNuTXNJR0oxZENCNWIzVWdiV0Y1SUhWelpTQmhkWFJ2Wm05amRYTWdiM0IwYVc5dUlHSmxiRzkzWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpZV3hNWlc1bmRHZ3VkbUZzZFdVZ1BTQmpZVzFsY21FdVptOWpZV3hNWlc1bmRHZzdJQzh2Wm05allXd2diR1Z1WjNSb0lHbHVJRzF0WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVpuTjBiM0F1ZG1Gc2RXVWdQU0E0TGpBN0lDOHZaaTF6ZEc5d0lIWmhiSFZsWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWMyaHZkMFp2WTNWekxuWmhiSFZsSUQwZ1ptRnNjMlU3SUM4dmMyaHZkeUJrWldKMVp5Qm1iMk4xY3lCd2IybHVkQ0JoYm1RZ1ptOWpZV3dnY21GdVoyVWdLRzl5WVc1blpTQTlJR1p2WTJGc0lIQnZhVzUwTENCaWJIVmxJRDBnWm05allXd2djbUZ1WjJVcFhISmNibHh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG0xaGJuVmhiR1J2Wmk1MllXeDFaU0E5SUhSeWRXVTdJQzh2YldGdWRXRnNJR1J2WmlCallXeGpkV3hoZEdsdmJseHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbTVrYjJaemRHRnlkQzUyWVd4MVpTQTlJREV4T3lBdkwyNWxZWElnWkc5bUlHSnNkWElnYzNSaGNuUmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTV1Wkc5bVpHbHpkQzUyWVd4MVpTQTlJRGd3T3lBdkwyNWxZWElnWkc5bUlHSnNkWElnWm1Gc2JHOW1aaUJrYVhOMFlXNWpaU0FnSUNCY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1aRzltYzNSaGNuUXVkbUZzZFdVZ1BTQXdPeUF2TDJaaGNpQmtiMllnWW14MWNpQnpkR0Z5ZEZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtWmtiMlprYVhOMExuWmhiSFZsSUQwZ01UQXdPeUF2TDJaaGNpQmtiMllnWW14MWNpQm1ZV3hzYjJabUlHUnBjM1JoYm1ObElGeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1RGIwTXVkbUZzZFdVZ1BTQXdMakF6T3lBdkwyTnBjbU5zWlNCdlppQmpiMjVtZFhOcGIyNGdjMmw2WlNCcGJpQnRiU0FvTXpWdGJTQm1hV3h0SUQwZ01DNHdNMjF0S1NBZ0lDQmNjbHh1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWRtbG5ibVYwZEdsdVp5NTJZV3gxWlNBOUlHWmhiSE5sT3lBdkwzVnpaU0J2Y0hScFkyRnNJR3hsYm5NZ2RtbG5ibVYwZEdsdVp6OWNjbHh1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVlYVjBiMlp2WTNWekxuWmhiSFZsSUQwZ2RISjFaVHNnTHk5MWMyVWdZWFYwYjJadlkzVnpJR2x1SUhOb1lXUmxjajhnWkdsellXSnNaU0JwWmlCNWIzVWdkWE5sSUdWNGRHVnlibUZzSUdadlkyRnNSR1Z3ZEdnZ2RtRnNkV1ZjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1bWIyTjFjeTUyWVd4MVpTNXpaWFFvSURBdU16VXNJREF1TXpVZ0tUc2dMeThnWVhWMGIyWnZZM1Z6SUhCdmFXNTBJRzl1SUhOamNtVmxiaUFvTUM0d0xEQXVNQ0F0SUd4bFpuUWdiRzkzWlhJZ1kyOXlibVZ5TENBeExqQXNNUzR3SUMwZ2RYQndaWElnY21sbmFIUXBJRnh5WEc0Z0lDQWdaRzltTG5WdWFXWnZjbTF6TG0xaGVHSnNkWEl1ZG1Gc2RXVWdQU0JEYjI1emRHRnVkSE11WW14MWNrRnRiM1Z1ZERzZ0x5OWpiR0Z0Y0NCMllXeDFaU0J2WmlCdFlYZ2dZbXgxY2lBb01DNHdJRDBnYm04Z1lteDFjaXd4TGpBZ1pHVm1ZWFZzZENrZ0lDQWdYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuUm9jbVZ6YUc5c1pDNTJZV3gxWlNBOUlEQTdJQzh2YUdsbmFHeHBaMmgwSUhSb2NtVnphRzlzWkR0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW5ZV2x1TG5aaGJIVmxJRDBnTURzZ0x5OW9hV2RvYkdsbmFIUWdaMkZwYmp0Y2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11WW1saGN5NTJZV3gxWlNBOUlEQTdJQzh2WW05clpXZ2daV1JuWlNCaWFXRnpJQ0FnSUNBZ0lDQmNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVtY21sdVoyVXVkbUZzZFdVZ1BTQXdPeUF2TDJKdmEyVm9JR05vY205dFlYUnBZeUJoWW1WeWNtRjBhVzl1TDJaeWFXNW5hVzVuWEhKY2JseHlYRzRnSUNBZ1JsaEJRU0E5SUc1bGR5QlVTRkpGUlM1VGFHRmtaWEpRWVhOektDQlVTRkpGUlM1R1dFRkJVMmhoWkdWeUlDazdYSEpjYmx4eVhHNGdJQ0FnUmxoQlFTNTFibWxtYjNKdGN5NXlaWE52YkhWMGFXOXVMblpoYkhWbExuTmxkQ2dnTVNBdklHTmhiblpoYzFkcFpIUm9MQ0F4SUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JpQWdJQ0JHV0VGQkxuSmxibVJsY2xSdlUyTnlaV1Z1SUQwZ2RISjFaVHRjY2x4dVhISmNiaUFnSUNCamIyMXdiM05sY2k1aFpHUlFZWE56S0NCa2IyWWdLVHRjY2x4dUlDQWdJR052YlhCdmMyVnlMbUZrWkZCaGMzTW9JRVpZUVVFZ0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYVc1cGRFUmxZblZuSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUhOMFlYUnpJRDBnYm1WM0lGTjBZWFJ6S0NrN1hISmNiaUFnSUNCemRHRjBjeTVrYjIxRmJHVnRaVzUwTG5OMGVXeGxMbkJ2YzJsMGFXOXVJRDBnSjJGaWMyOXNkWFJsSnp0Y2NseHVJQ0FnSUhOMFlYUnpMbVJ2YlVWc1pXMWxiblF1YzNSNWJHVXViR1ZtZENBOUlGd2lNRndpTzF4eVhHNGdJQ0FnYzNSaGRITXVaRzl0Uld4bGJXVnVkQzV6ZEhsc1pTNTBiM0FnUFNCY0lqQmNJanRjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tDQnpkR0YwY3k1a2IyMUZiR1Z0Wlc1MElDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHUmxZblZuSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvSUc1bGR5QlVTRkpGUlM1Q2IzaEhaVzl0WlhSeWVTZ2dNakFzSURJd0xDQXlNQ3dnTVN3Z01Td2dNU0FwSUNrN1hISmNiaUFnSUNCa1pXSjFaeTV3YjNOcGRHbHZiaTV6WlhRb1hISmNiaUFnSUNBZ0lDQWdiR2xuYUhRdWNHOXphWFJwYjI0dWVDeGNjbHh1SUNBZ0lDQWdJQ0JzYVdkb2RDNXdiM05wZEdsdmJpNTVMRnh5WEc0Z0lDQWdJQ0FnSUd4cFoyaDBMbkJ2YzJsMGFXOXVMbnBjY2x4dUlDQWdJQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUdSbFluVm5JQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHbHVhWFJIVlVrZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2RtRnlJR05oYldWeVlVWnZiR1JsY2l4Y2NseHVJQ0FnSUNBZ0lDQmpZVzFsY21GR2IyTmhiRXhsYm1kMGFDeGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWElzWEhKY2JpQWdJQ0FnSUNBZ1gyeGhjM1E3WEhKY2JseHlYRzRnSUNBZ1ozVnBJRDBnYm1WM0lHUmhkQzVIVlVrb0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lFTnZibk4wWVc1MGN5NXdiM04wY0hKdlkyVnpjMmx1WnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyRnRaWEpoUm05c1pHVnlJRDBnWjNWcExtRmtaRVp2YkdSbGNpZ2dKME5oYldWeVlTY2dLVHRjY2x4dUlDQWdJQ0FnSUNCallXMWxjbUZHYjJOaGJFeGxibWQwYUNBOUlHTmhiV1Z5WVVadmJHUmxjaTVoWkdRb0lHTmhiV1Z5WVN3Z0oyWnZZMkZzVEdWdVozUm9KeXdnTWpnc0lESXdNQ0FwTG01aGJXVW9JQ2RHYjJOaGJDQk1aVzVuZEdnbklDazdYSEpjYmlBZ0lDQWdJQ0FnWTJGdFpYSmhSbTlqWVd4TVpXNW5kR2d1YjI1RGFHRnVaMlVvSUhWd1pHRjBaVU5oYldWeVlTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSWdQU0JuZFdrdVlXUmtSbTlzWkdWeUtDQW5SR1Z3ZEdnZ2IyWWdSbWxsYkdRbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1adlkyRnNSR1Z3ZEdnc0lDZDJZV3gxWlNjc0lEQXNJREV3SUNrdWJtRnRaU2dnSjBadlkyRnNJRVJsY0hSb0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1bWMzUnZjQ3dnSjNaaGJIVmxKeXdnTUN3Z01qSWdLUzV1WVcxbEtDQW5SaUJUZEc5d0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dFlYaGliSFZ5TENBbmRtRnNkV1VuTENBd0xDQXpJQ2t1Ym1GdFpTZ2dKMjFoZUNCaWJIVnlKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11YzJodmQwWnZZM1Z6TENBbmRtRnNkV1VuSUNrdWJtRnRaU2dnSjFOb2IzY2dSbTlqWVd3Z1VtRnVaMlVuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dFlXNTFZV3hrYjJZc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblRXRnVkV0ZzSUVSdlJpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWJtUnZabk4wWVhKMExDQW5kbUZzZFdVbkxDQXdMQ0F5TURBZ0tTNXVZVzFsS0NBbmJtVmhjaUJ6ZEdGeWRDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWJtUnZabVJwYzNRc0lDZDJZV3gxWlNjc0lEQXNJREl3TUNBcExtNWhiV1VvSUNkdVpXRnlJR1poYkd4dlptWW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtWmtiMlp6ZEdGeWRDd2dKM1poYkhWbEp5d2dNQ3dnTWpBd0lDa3VibUZ0WlNnZ0oyWmhjaUJ6ZEdGeWRDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVptUnZabVJwYzNRc0lDZDJZV3gxWlNjc0lEQXNJREl3TUNBcExtNWhiV1VvSUNkbVlYSWdabUZzYkc5bVppY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMa052UXl3Z0ozWmhiSFZsSnl3Z01Dd2dNQzR4SUNrdWMzUmxjQ2dnTUM0d01ERWdLUzV1WVcxbEtDQW5ZMmx5WTJ4bElHOW1JR052Ym1aMWMybHZiaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5acFoyNWxkSFJwYm1jc0lDZDJZV3gxWlNjZ0tTNXVZVzFsS0NBblZtbG5ibVYwZEdsdVp5Y2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdWRtbG5ibTkxZEN3Z0ozWmhiSFZsSnl3Z01Dd2dNaUFwTG01aGJXVW9JQ2R2ZFhSbGNpQmliM0prWlhJbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG5acFoyNXBiaXdnSjNaaGJIVmxKeXdnTUN3Z01TQXBMbk4wWlhBb0lEQXVNREVnS1M1dVlXMWxLQ0FuYVc1dVpYSWdZbTl5WkdWeUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1MmFXZHVabUZrWlN3Z0ozWmhiSFZsSnl3Z01Dd2dNaklnS1M1dVlXMWxLQ0FuWm1Ga1pTQmhkQ2NnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1GMWRHOW1iMk4xY3l3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkQmRYUnZabTlqZFhNbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1adlkzVnpMblpoYkhWbExDQW5lQ2NzSURBc0lERWdLUzV1WVcxbEtDQW5abTlqZFhNZ2VDY2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpkWE11ZG1Gc2RXVXNJQ2Q1Snl3Z01Dd2dNU0FwTG01aGJXVW9JQ2RtYjJOMWN5QjVKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11ZEdoeVpYTm9iMnhrTENBbmRtRnNkV1VuTENBd0xDQXhJQ2t1YzNSbGNDZ2dNQzR3TVNBcExtNWhiV1VvSUNkMGFISmxjMmh2YkdRbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1kaGFXNHNJQ2QyWVd4MVpTY3NJREFzSURFd01DQXBMbTVoYldVb0lDZG5ZV2x1SnlBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVltbGhjeXdnSjNaaGJIVmxKeXdnTUN3Z05DQXBMbk4wWlhBb0lEQXVNREVnS1M1dVlXMWxLQ0FuWW1saGN5Y2dLVHRjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJdVlXUmtLQ0JrYjJZdWRXNXBabTl5YlhNdVpuSnBibWRsTENBbmRtRnNkV1VuTENBd0xDQTFJQ2t1YzNSbGNDZ2dNQzR3TVNBcExtNWhiV1VvSUNkbWNtbHVaMlVuSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1dWIybHpaU3dnSjNaaGJIVmxKeUFwTG01aGJXVW9JQ2RWYzJVZ1RtOXBjMlVuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbTVoYlc5MWJuUXNJQ2QyWVd4MVpTY3NJREFzSURBdU1EQXhJQ2t1YzNSbGNDZ2dNQzR3TURBeElDa3VibUZ0WlNnZ0oyUnBkR2hsY2ljZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtUmxjSFJvWW14MWNpd2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZENiSFZ5SUVSbGNIUm9KeUFwTzF4eVhHNGdJQ0FnSUNBZ0lHUnZaa1p2YkdSbGNpNWhaR1FvSUdSdlppNTFibWxtYjNKdGN5NWtZbk5wZW1Vc0lDZDJZV3gxWlNjc0lEQXNJRFVnS1M1dVlXMWxLQ0FuWW14MWNpQnphWHBsSnlBcE8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCbmRXa3VZMnh2YzJVb0tUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnZFhCa1lYUmxRMkZ0WlhKaElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHTmhiV1Z5WVM1elpYUk1aVzV6S0NCallXMWxjbUV1Wm05allXeE1aVzVuZEdnc0lHTmhiV1Z5WVM1bWNtRnRaVk5wZW1VZ0tUdGNjbHh1SUNBZ0lHTmhiV1Z5WVM1MWNHUmhkR1ZRY205cVpXTjBhVzl1VFdGMGNtbDRLQ2s3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpZV3hNWlc1bmRHZ3VkbUZzZFdVZ1BTQmpZVzFsY21FdVptOWpZV3hNWlc1bmRHZzdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdsdWFYUkRjbUYwWlhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1ptOXlJQ2dnZG1GeUlHTnlZWFJsU1dRZ1BTQXdPeUJqY21GMFpVbGtJRHdnUTI5dWMzUmhiblJ6TG01aVEzSmhkR1Z6T3lCamNtRjBaVWxrS3lzZ0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHTnlZWFJsSUQwZ1kzSmxZWFJsUTNKaGRHVW9JR055WVhSbFNXUWdLVHRjY2x4dUlDQWdJQ0FnSUNCamNtRjBaWE5EYjI1MFlXbHVaWEl1WVdSa0tDQmpjbUYwWlNBcE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1kzSmhkR1Z6UTI5dWRHRnBibVZ5TG5CdmMybDBhVzl1TG5vZ1BTQXRLQ0F4TVRBZ0xTQW9JREV4TUNBcUlFTnZibk4wWVc1MGN5NXVZa055WVhSbGN5QXBJQ2tnTHlBeU8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJqY21WaGRHVkRjbUYwWlNBOUlHWjFibU4wYVc5dUlDZ2dhV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkSUQwZ2JtVjNJRlJJVWtWRkxrOWlhbVZqZERORUtDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHSnZlRjlpYjNSMGIyMGdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeU1EQXNJREV3TENBeE1EQWdLU3dnZDI5dlpGOXRZWFJsY21saGJDQXBPMXh5WEc0Z0lDQWdZM0poZEdWeld5QnBaQ0JkTG1Ga1pDZ2dZbTk0WDJKdmRIUnZiU0FwTzF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJpYjNoZmJHVm1kQ0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9LQ0J1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb0lESXdNQ3dnTVRBc0lEZ3dJQ2tzSUhkdmIyUmZiV0YwWlhKcFlXd2dLVHRjY2x4dUlDQWdJR0p2ZUY5c1pXWjBMbkJ2YzJsMGFXOXVMbk5sZENnZ01Dd2dNelVzSUMwMU5TQXBPMXh5WEc0Z0lDQWdZbTk0WDJ4bFpuUXVjbTkwWVhScGIyNHVlQ0E5SUUxaGRHZ3VVRWtnTHlBeU8xeHlYRzRnSUNBZ1kzSmhkR1Z6V3lCcFpDQmRMbUZrWkNnZ1ltOTRYMnhsWm5RZ0tUdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHbGtJRDA5UFNBd0lDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQmliM2hmY21sbmFIUWdQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBeU1EQXNJREV3TENBNE1DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQWdJQ0FnWW05NFgzSnBaMmgwTG5CdmMybDBhVzl1TG5ObGRDZ2dNQ3dnTXpVc0lEVTFJQ2s3WEhKY2JpQWdJQ0FnSUNBZ1ltOTRYM0pwWjJoMExuSnZkR0YwYVc5dUxuZ2dQU0JOWVhSb0xsQkpJQzhnTWp0Y2NseHVJQ0FnSUNBZ0lDQmpjbUYwWlhOYklHbGtJRjB1WVdSa0tDQmliM2hmY21sbmFIUWdLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCMllYSWdZbTk0WDJKaFkyc2dQU0J1WlhjZ1ZFaFNSVVV1VFdWemFDZ2dibVYzSUZSSVVrVkZMa0p2ZUVkbGIyMWxkSEo1S0NBNE1Dd2dNVEFzSURFeU1DQXBMQ0IzYjI5a1gyMWhkR1Z5YVdGc0lDazdYSEpjYmlBZ0lDQmliM2hmWW1GamF5NXdiM05wZEdsdmJpNXpaWFFvSUMweE1EVXNJRE0xTENBd0lDazdYSEpjYmlBZ0lDQmliM2hmWW1GamF5NXliM1JoZEdsdmJpNTZJRDBnVFdGMGFDNVFTU0F2SURJN1hISmNiaUFnSUNCamNtRjBaWE5iSUdsa0lGMHVZV1JrS0NCaWIzaGZZbUZqYXlBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCaWIzaGZabkp2Ym5RZ1BTQnVaWGNnVkVoU1JVVXVUV1Z6YUNnZ2JtVjNJRlJJVWtWRkxrSnZlRWRsYjIxbGRISjVLQ0EwTUN3Z01UQXNJREV3TUNBcExDQjNiMjlrWDIxaGRHVnlhV0ZzSUNrN1hISmNiaUFnSUNCaWIzaGZabkp2Ym5RdWNHOXphWFJwYjI0dWMyVjBLQ0E1TlN3Z01qVXNJREFnS1R0Y2NseHVJQ0FnSUdKdmVGOW1jbTl1ZEM1eWIzUmhkR2x2Ymk1NklEMGdUV0YwYUM1UVNTQXZJREk3WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwdVlXUmtLQ0JpYjNoZlpuSnZiblFnS1R0Y2NseHVYSEpjYmlBZ0lDQmpjbUYwWlhOYklHbGtJRjB1Y0c5emFYUnBiMjR1ZWlBOUlDMHhNVEFnS2lCcFpEdGNjbHh1SUNBZ0lISmxkSFZ5YmlCamNtRjBaWE5iSUdsa0lGMDdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdsdWFYUlNaV052Y21SeklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJqZFhKeVpXNTBVbVZqYjNKa1NXUWdQU0F3TzF4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdOeVlYUmxTV1FnUFNBd095QmpjbUYwWlVsa0lEd2dZM0poZEdWekxteGxibWQwYURzZ1kzSmhkR1ZKWkNzcklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0NCMllYSWdjRzl6SUQwZ01Ec2djRzl6SUR3Z1EyOXVjM1JoYm5SekxuSmxZMjl5WkhOUVpYSkRjbUYwWlRzZ2NHOXpLeXNnS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOeVpXRjBaVkpsWTI5eVpDZ2dZM1Z5Y21WdWRGSmxZMjl5WkVsa0xDQmpjbUYwWlVsa0xDQndiM01nS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRkpsWTI5eVpFbGtLeXM3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHTnlaV0YwWlZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNnZ2FXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2NtVmpiM0prSUQwZ2JtVjNJRkpsWTI5eVpDZ2dhV1FzSUdOeVlYUmxTV1FzSUhCdmN5QXBPMXh5WEc0Z0lDQWdZM0poZEdWeld5QmpjbUYwWlVsa0lGMHVZV1JrS0NCeVpXTnZjbVF1YldWemFDQXBPMXh5WEc0Z0lDQWdjbVZqYjNKa2N5NXdkWE5vS0NCeVpXTnZjbVFnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdaMlYwVW1WamIzSmtUV0YwWlhKcFlXd2dQU0JtZFc1amRHbHZiaUFvSUhOeVl5d2dhR0Z6VTJ4bFpYWmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJwYldjZ1BTQnVaWGNnU1cxaFoyVW9LVHRjY2x4dUlDQWdJR2x0Wnk1amNtOXpjMDl5YVdkcGJpQTlJRndpUVc1dmJubHRiM1Z6WENJN1hISmNiaUFnSUNCcGJXY3VjM0pqSUQwZ2MzSmpJRDhnYzNKaklEb2dKeWM3WEhKY2JseHlYRzRnSUNBZ2RtRnlJR2x0WjFkcFpIUm9JRDBnTkRBd0xGeHlYRzRnSUNBZ0lDQWdJR2x0WjBobGFXZG9kQ0E5SURRd01DeGNjbHh1SUNBZ0lDQWdJQ0J0WVhCRFlXNTJZWE1nUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ0FuWTJGdWRtRnpKeUFwTzF4eVhHNWNjbHh1SUNBZ0lHMWhjRU5oYm5aaGN5NTNhV1IwYUNBOUlHMWhjRU5oYm5aaGN5NW9aV2xuYUhRZ1BTQTBNREE3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSFJsZUhSMWNtVWdQU0J1WlhjZ1ZFaFNSVVV1VkdWNGRIVnlaU2dnYldGd1EyRnVkbUZ6SUNrN1hISmNiaUFnSUNCMFpYaDBkWEpsTG0xcGJrWnBiSFJsY2lBOUlGUklVa1ZGTGt4cGJtVmhja1pwYkhSbGNqdGNjbHh1WEhKY2JpQWdJQ0JwYldjdWIyNXNiMkZrSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdoaGMxTnNaV1YyWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCemJHVmxkbVVnUFNCdVpYY2dTVzFoWjJVb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyeGxaWFpsTG5OeVl5QTlJRU52Ym5OMFlXNTBjeTV6YkdWbGRtVk5ZWE5yVkdWNGRIVnlaVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhOc1pXVjJaUzV2Ym14dllXUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTjBlQ0E5SUcxaGNFTmhiblpoY3k1blpYUkRiMjUwWlhoMEtDQW5NbVFuSUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkSGd1ZEhKaGJuTnNZWFJsS0NCcGJXZFhhV1IwYUNBdklESXNJR2x0WjBobGFXZG9kQ0F2SURJZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04wZUM1eWIzUmhkR1VvSUUxaGRHZ3VVRWtnTHlBeUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndWRISmhibk5zWVhSbEtDQXRhVzFuVjJsa2RHZ2dMeUF5TENBdGFXMW5TR1ZwWjJoMElDOGdNaUFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMbVJ5WVhkSmJXRm5aU2dnYVcxbkxDQXhNekFzSURFek1Dd2dNVE0xTENBeE16VWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMGVDNWtjbUYzU1cxaFoyVW9JSE5zWldWMlpTd2dNQ3dnTUN3Z05EQXdMQ0EwTURBZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJsZUhSMWNtVXVibVZsWkhOVmNHUmhkR1VnUFNCMGNuVmxPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmpkSGdnUFNCdFlYQkRZVzUyWVhNdVoyVjBRMjl1ZEdWNGRDZ2dKekprSnlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamRIZ3VkSEpoYm5Oc1lYUmxLQ0JwYldkWGFXUjBhQ0F2SURJc0lHbHRaMGhsYVdkb2RDQXZJRElnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExuSnZkR0YwWlNnZ1RXRjBhQzVRU1NBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG5SeVlXNXpiR0YwWlNnZ0xXbHRaMWRwWkhSb0lDOGdNaXdnTFdsdFowaGxhV2RvZENBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdZM1I0TG1SeVlYZEpiV0ZuWlNnZ2FXMW5MQ0F3TENBd0xDQTBNREFzSURRd01DQXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaWGgwZFhKbExtNWxaV1J6VlhCa1lYUmxJRDBnZEhKMVpUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2MyeGxaWFpsVFdGMFpYSnBZV3dnUFNCdVpYY2dWRWhTUlVVdVRXVnphRXhoYldKbGNuUk5ZWFJsY21saGJDZ2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ1EyOXVjM1JoYm5SekxuTnNaV1YyWlVOdmJHOXlYSEpjYmx4eVhHNGdJQ0FnZlNBcE8xeHlYRzVjY2x4dUlDQWdJSFpoY2lCdFlYUmxjbWxoYkhNZ1BTQmJYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxUV0YwWlhKcFlXd3NYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxUV0YwWlhKcFlXd3NYSEpjYmlBZ0lDQWdJQ0FnYzJ4bFpYWmxUV0YwWlhKcFlXd3NYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2RHVjRkSFZ5WlZ4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVU0ZKRlJTNU5aWE5vVEdGdFltVnlkRTFoZEdWeWFXRnNLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQXdlR1ptWm1abVppeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRndPaUIwWlhoMGRYSmxYSEpjYmlBZ0lDQWdJQ0FnZlNBcExGeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhkR1Z5YVdGc0xGeHlYRzRnSUNBZ0lDQWdJSE5zWldWMlpVMWhkR1Z5YVdGc1hISmNiaUFnSUNCZE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUcxaGRHVnlhV0ZzY3p0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4eVhHNDlJQ0FnSUNBZ0lDQWdJQ0FnVlZSSlRGTWdJQ0FnSUNBZ0lDQWdJQ0E5WEhKY2JqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibHh5WEc1MllYSWdkMmhsWld4RWFYTjBZVzVqWlNBOUlHWjFibU4wYVc5dUlDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUNGbElDa2daU0E5SUdWMlpXNTBPMXh5WEc0Z0lDQWdkbUZ5SUhjZ1BTQmxMbmRvWldWc1JHVnNkR0VzWEhKY2JpQWdJQ0FnSUNBZ1pDQTlJR1V1WkdWMFlXbHNPMXh5WEc0Z0lDQWdhV1lnS0NCa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUhjZ0tTQnlaWFIxY200Z2R5QXZJR1FnTHlBME1DQXFJR1FnUGlBd0lEOGdNU0E2SUMweE95QXZMeUJQY0dWeVlWeHlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2NtVjBkWEp1SUMxa0lDOGdNenNnTHk4Z1JtbHlaV1p2ZUR0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2NtVjBkWEp1SUhjZ0x5QXhNakE3SUM4dklFbEZMMU5oWm1GeWFTOURhSEp2YldWY2NseHVmVHRjY2x4dVhISmNiblpoY2lCM2FHVmxiRVJwY21WamRHbHZiaUE5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JQ0ZsSUNrZ1pTQTlJR1YyWlc1ME8xeHlYRzRnSUNBZ2NtVjBkWEp1SUNnZ1pTNWtaWFJoYVd3Z1BDQXdJQ2tnUHlBeElEb2dLQ0JsTG5kb1pXVnNSR1ZzZEdFZ1BpQXdJQ2tnUHlBeElEb2dMVEU3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHTnZiM0prYzBWeGRXRnNjMEZ3Y0hKdmVDQTlJR1oxYm1OMGFXOXVJQ2dnWTI5dmNtUXhMQ0JqYjI5eVpESXNJSEpoYm1kbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUFvSUUxaGRHZ3VZV0p6S0NCamIyOXlaREV1ZUNBdElHTnZiM0prTWk1NElDa2dQRDBnY21GdVoyVWdLU0FtSmlBb0lFMWhkR2d1WVdKektDQmpiMjl5WkRFdWVTQXRJR052YjNKa01pNTVJQ2tnUEQwZ2NtRnVaMlVnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdabUZrWlU5MWRDQTlJR1oxYm1OMGFXOXVJQ2dnWld4bGJXVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMDlQU0F3S1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2R1YjI1bEp6dGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjJZWElnZEhKaGJuTnBkR2x2YmtWMlpXNTBJRDBnWjJWMFZISmhibk5wZEdsdmJrVjJaVzUwS0dWc1pXMWxiblFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb2RISmhibk5wZEdsdmJrVjJaVzUwS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2RISmhibk5wZEdsdmJrVjJaVzUwTENCdmJrWmhaR1ZEYjIxd2JHVjBaU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F3TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5SUNBZ0lDQWdJQ0JjY2x4dUlDQWdJSDFjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJtWVdSbFNXNGdQU0JtZFc1amRHbHZiaUFvSUdWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0dWc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQTlQVDBnSnljZ2ZId2daV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUQwOVBTQW5NU2NwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMkpzYjJOckp6dGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lIWmhjaUIwY21GdWMybDBhVzl1UlhabGJuUWdQU0JuWlhSVWNtRnVjMmwwYVc5dVJYWmxiblFvWld4bGJXVnVkQ2s3WEhKY2JpQWdJQ0FnSUNBZ1hISmNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oySnNiMk5ySnp0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6YVhScGIyNUZkbVZ1ZENrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtIUnlZVzV6YVhScGIyNUZkbVZ1ZEN3Z2IyNUdZV1JsUTI5dGNHeGxkR1VwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F4TzF4eVhHNGdJQ0FnSUNBZ0lIMHNJREUxS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYm4wN1hISmNibHh5WEc1bWRXNWpkR2x2YmlCdmJrWmhaR1ZEYjIxd2JHVjBaU2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JsTG5SaGNtZGxkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0dVdWRIbHdaU3dnYjI1R1lXUmxRMjl0Y0d4bGRHVXBPMXh5WEc0Z0lDQWdhV1lnS0NCbExuUmhjbWRsZEM1emRIbHNaUzV2Y0dGamFYUjVJRDA5UFNBbk1DY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1V1ZEdGeVoyVjBMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW5ibTl1WlNjN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pTNTBZWEpuWlhRdWMzUjViR1V1WkdsemNHeGhlU0E5SUNkaWJHOWpheWM3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5WEhKY2JseHlYRzVjY2x4dWRtRnlJR2hwWkdWRmJHVnRaVzUwSUQwZ1puVnVZM1JwYjI0b0lHVnNaVzFsYm5RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNRHRjY2x4dUlDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZHViMjVsSnp0Y2NseHVYSEpjYm4xY2NseHVYSEpjYm5aaGNpQnphRzkzUld4bGJXVnVkQ0E5SUdaMWJtTjBhVzl1S0NCbGJHVnRaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDZGliRzlqYXljN1hISmNiaUFnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0F4TzF4eVhHNWNjbHh1ZlZ4eVhHNWNjbHh1ZG1GeUlHZGxkRlJ5WVc1emFYUnBiMjVGZG1WdWRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUhaaGNpQjBMRnh5WEc0Z0lDQWdJQ0FnSUhSeVlXNXphWFJwYjI1eklEMGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5kSEpoYm5OcGRHbHZiaWM2SjNSeVlXNXphWFJwYjI1bGJtUW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW5UMVJ5WVc1emFYUnBiMjRuT2lkdlZISmhibk5wZEdsdmJrVnVaQ2NzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ2ROYjNwVWNtRnVjMmwwYVc5dUp6b25kSEpoYm5OcGRHbHZibVZ1WkNjc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNkWFpXSnJhWFJVY21GdWMybDBhVzl1SnpvbmQyVmlhMmwwVkhKaGJuTnBkR2x2YmtWdVpDZGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lHWnZjaWgwSUdsdUlIUnlZVzV6YVhScGIyNXpLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtS0NCa2IyTjFiV1Z1ZEM1aWIyUjVMbk4wZVd4bFczUmRJQ0U5UFNCMWJtUmxabWx1WldRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEpoYm5OcGRHbHZibk5iZEYwN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVkbUZ5SUdOaGJHTjFiR0YwWlVOaGJuWmhjMU5wZW1VZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ1kyRnVkbUZ6VjJsa2RHZ2dQU0JEYjI1emRHRnVkSE11WTJGdWRtRnpWMmxrZEdnZ1B5QkRiMjV6ZEdGdWRITXVZMkZ1ZG1GelYybGtkR2dnT2lCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWpiR2xsYm5SWGFXUjBhRHRjY2x4dUlDQWdJR05oYm5aaGMwaGxhV2RvZENBOUlFTnZibk4wWVc1MGN5NWpZVzUyWVhOSVpXbG5hSFFnUHlCRGIyNXpkR0Z1ZEhNdVkyRnVkbUZ6U0dWcFoyaDBJRG9nY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RdVkyeHBaVzUwU0dWcFoyaDBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCelpYUkRZVzUyWVhORWFXMWxibk5wYjI1eklEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDOHZjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVhR1ZwWjJoMElDQWdJQ0E5SUdOaGJuWmhjMGhsYVdkb2RDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCallXNTJZWE5EYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtaGxhV2RvZENBOUlHTmhiblpoYzBobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmlBZ0lDQnBibVp2UTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNW9aV2xuYUhRZ1BTQmpZVzUyWVhOSVpXbG5hSFFnS3lBbmNIZ25PMXh5WEc0Z0lDQWdiRzloWkdsdVowTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1YUdWcFoyaDBJRDBnWTJGdWRtRnpTR1ZwWjJoMElDc2dKM0I0Snp0Y2NseHVYSEpjYmlBZ0lDQXZMM0p2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbmRwWkhSb0lDQWdJQ0E5SUdOaGJuWmhjMWRwWkhSb0lDc2dKM0I0Snp0Y2NseHVJQ0FnSUdOaGJuWmhjME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWQybGtkR2dnUFNCallXNTJZWE5YYVdSMGFDQXJJQ2R3ZUNjN1hISmNiaUFnSUNCcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1M2FXUjBhQ0E5SUdOaGJuWmhjMWRwWkhSb0lDc2dKM0I0Snp0Y2NseHVJQ0FnSUd4dllXUnBibWREYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExuZHBaSFJvSUQwZ1kyRnVkbUZ6VjJsa2RHZ2dLeUFuY0hnbk8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JtWjFibU4wYVc5dUlITm9kV1ptYkdVb0lIWWdLU0I3SUM4dklFcHZibUZ6SUZKaGIyNXBJRk52WVhKbGN5QlRhV3gyWVNBdElHaDBkSEE2THk5cWMyWnliMjFvWld4c0xtTnZiUzloY25KaGVTOXphSFZtWm14bElGdHlaWFl1SUNNeFhWeHlYRzVjY2x4dUlDQWdJR1p2Y2lBb0lIWmhjaUJxTENCNExDQnBJRDBnZGk1c1pXNW5kR2c3SUdrN0lHb2dQU0J3WVhKelpVbHVkQ2dnVFdGMGFDNXlZVzVrYjIwb0tTQXFJR2tnS1N3Z2VDQTlJSFpiSUMwdGFTQmRMQ0IyV3lCcElGMGdQU0IyV3lCcUlGMHNJSFpiSUdvZ1hTQTlJSGdnS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUIyTzF4eVhHNWNjbHh1ZlZ4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnYVhOR2RXNWpkR2x2YmlnZ2IySnFJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lISmxkSFZ5YmlCMGVYQmxiMllnYjJKcUlEMDlJQ2RtZFc1amRHbHZiaWNnZkh3Z1ptRnNjMlU3WEhKY2JseHlYRzU5WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0JGV0ZCUFVsUlRJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDBnSUZCMVlteHBZeUJOWlhSb2IyUnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm1WNGNHOXlkSE11YVc1cGRDQTlJR1oxYm1OMGFXOXVJQ2dnY0dGeVlXMXpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lFTnZibk4wWVc1MGN5NWxlSFJsYm1Rb2NHRnlZVzF6S1R0Y2NseHVYSEpjYmlBZ0lDQXZMeUJtWldGMGRYSmxJSFJsYzNSY2NseHVJQ0FnSUdsbUlDZ2dJVTF2WkdWeWJtbDZjaTUzWldKbmJDQXBJSEpsZEhWeWJqdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIZHBibVJ2ZHk1a1pYWnBZMlZRYVhobGJGSmhkR2x2SUNFOVBTQjFibVJsWm1sdVpXUWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J3Y2lBOUlIZHBibVJ2ZHk1a1pYWnBZMlZRYVhobGJGSmhkR2x2TzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSd2NpQTlJREU3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1eWIyOTBRMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJWEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ0FuWTNKaGRHVmthV2RuWlhJdWFuTWdMU0JKYm1sMElHWmhhV3hsWkNBNklHTmhiaUJ1YjNRZ1ptbHVaQ0J5YjI5MElHTnZiblJoYVc1bGNpQmxiR1Z0Wlc1MExpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1kyRnVkbUZ6UTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11WTJGdWRtRnpRMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJV05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSUNkamNtRjBaV1JwWjJkbGNpNXFjeUF0SUVsdWFYUWdabUZwYkdWa0lEb2dZMkZ1SUc1dmRDQm1hVzVrSUdOaGJuWmhjeUJqYjI1MFlXbHVaWElnWld4bGJXVnVkQzRuSUNrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0lFTnZibk4wWVc1MGN5NWxiR1Z0Wlc1MGN5NXNiMkZrYVc1blEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lXeHZZV1JwYm1kRGIyNTBZV2x1WlhKRmJHVnRaVzUwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ0FuWTNKaGRHVmthV2RuWlhJdWFuTWdMU0JKYm1sMElHWmhhV3hsWkNBNklHTmhiaUJ1YjNRZ1ptbHVaQ0JzYjJGa2FXNW5JR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhVzVtYjBOdmJuUmhhVzVsY2tWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2dnUTI5dWMzUmhiblJ6TG1Wc1pXMWxiblJ6TG1sdVptOURiMjUwWVdsdVpYSkpaQ0FwTzF4eVhHNGdJQ0FnYVdZZ0tDQWhhVzVtYjBOdmJuUmhhVzVsY2tWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJR2x1Wm04Z1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5RdUp5QXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjY2x4dVhISmNiaUFnSUNCOVhISmNiaUFnSUNCMGFYUnNaVWx1Wm05RmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUVOdmJuTjBZVzUwY3k1bGJHVnRaVzUwY3k1MGFYUnNaVU52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0YwYVhSc1pVbHVabTlGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnlaV052Y21RZ2RHbDBiR1VnWTI5dWRHRnBibVZ5SUdWc1pXMWxiblF1SnlBcE8xeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JoY25ScGMzUkpibVp2Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11WVhKMGFYTjBRMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJV0Z5ZEdsemRFbHVabTlGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnlaV052Y21RZ1lYSjBhWE4wSUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWTI5MlpYSkpibVp2Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ0JEYjI1emRHRnVkSE11Wld4bGJXVnVkSE11WTI5MlpYSkRiMjUwWVdsdVpYSkpaQ0FwTzF4eVhHNGdJQ0FnYVdZZ0tDQWhZMjkyWlhKSmJtWnZSV3hsYldWdWRDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWxjbkp2Y2lnZ0oyTnlZWFJsWkdsbloyVnlMbXB6SUMwZ1NXNXBkQ0JtWVdsc1pXUWdPaUJqWVc0Z2JtOTBJR1pwYm1RZ1kyOTJaWElnYVcxaFoyVWdZMjl1ZEdGcGJtVnlJR1ZzWlcxbGJuUXVKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWTJGc1kzVnNZWFJsUTJGdWRtRnpVMmw2WlNncE8xeHlYRzVjY2x4dUlDQWdJR2x1YVhSVFkyVnVaU2dwTzF4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMGN5NXpaV3hsWTNSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0lHbGtJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVdRZ1BDQXdJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J5WlhObGRGTm9iM2R1VW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhV1FnUGlCc2IyRmtaV1JTWldOdmNtUnpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J6Wld4bFkzUmxaRkpsWTI5eVpDQTlJR3h2WVdSbFpGSmxZMjl5WkhNZ0xTQXhPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5sYkdWamRHVmtVbVZqYjNKa0lEMGdhV1E3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTV6ZEdGeWRGSmxibVJsY2lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCa2IxSmxibVJsY2lBOUlIUnlkV1U3WEhKY2JpQWdJQ0JoYm1sdFlYUmxLQ2s3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTV6ZEc5d1VtVnVaR1Z5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdSdlVtVnVaR1Z5SUQwZ1ptRnNjMlU3WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVsYm1GaWJHVlFiM04wY0hKdlkyVnpjMmx1WnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCRGIyNXpkR0Z1ZEhNdWNHOXpkSEJ5YjJObGMzTnBibWNnUFNCMGNuVmxPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRITXVaR2x6WVdKc1pWQnZjM1J3Y205alpYTnphVzVuSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUVOdmJuTjBZVzUwY3k1d2IzTjBjSEp2WTJWemMybHVaeUE5SUdaaGJITmxPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFNBZ1VIVmliR2xqSUdkbGRIUmxjbk1nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVpYaHdiM0owY3k1blpYUkRZVzUyWVhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owY3k1blpYUlNaV052Y21SelJHRjBZVXhwYzNRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2NtVjBkWEp1SUhKbFkyOXlaSE5FWVhSaFRHbHpkRHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVsZUhCdmNuUnpMbWRsZEV4dllXUmxaRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlHeHZZV1JsWkZKbFkyOXlaSE03WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1Wlhod2IzSjBjeTVuWlhSVFpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0J5WlhSMWNtNGdjbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hUdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOUlDQk5aWFJvYjJSeklHRmpZMlZ6YzI5eWN5QWdQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzVsZUhCdmNuUnpMbXh2WVdSU1pXTnZjbVJ6SUQwZ2JHOWhaRkpsWTI5eVpITTdYSEpjYm1WNGNHOXlkSE11ZFc1c2IyRmtVbVZqYjNKa2N5QTlJSFZ1Ykc5aFpGSmxZMjl5WkhNN1hISmNibVY0Y0c5eWRITXVjbVZ6WlhSVGFHOTNibEpsWTI5eVpDQTlJSEpsYzJWMFUyaHZkMjVTWldOdmNtUTdYSEpjYm1WNGNHOXlkSE11YzJoMVptWnNaVkpsWTI5eVpITWdQU0J6YUhWbVpteGxVbVZqYjNKa2N6dGNjbHh1Wlhod2IzSjBjeTVtYkdsd1UyVnNaV04wWldSU1pXTnZjbVFnUFNCbWJHbHdVMlZzWldOMFpXUlNaV052Y21RN1hISmNibVY0Y0c5eWRITXVabXhwY0VKaFkydFRaV3hsWTNSbFpGSmxZMjl5WkNBOUlHWnNhWEJDWVdOclUyVnNaV04wWldSU1pXTnZjbVE3WEhKY2JtVjRjRzl5ZEhNdWMyVnNaV04wVUhKbGRsSmxZMjl5WkNBOUlITmxiR1ZqZEZCeVpYWlNaV052Y21RN1hISmNibVY0Y0c5eWRITXVjMlZzWldOMFRtVjRkRkpsWTI5eVpDQTlJSE5sYkdWamRFNWxlSFJTWldOdmNtUTdYSEpjYm1WNGNHOXlkSE11YzJodmQweHZZV1JwYm1jZ1BTQnphRzkzVEc5aFpHbHVaenRjY2x4dVpYaHdiM0owY3k1b2FXUmxURzloWkdsdVp5QTlJR2hwWkdWTWIyRmthVzVuTzF4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0JRVlVKTVNVTWdRVkJKSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdaWGh3YjNKMGN6c2lYWDA9IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqXHJcbiAqIEZ1bGwtc2NyZWVuIHRleHR1cmVkIHF1YWQgc2hhZGVyXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHJcblx0VEhSRUUuQ29weVNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcIm9wYWNpdHlcIjogIHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2VXYgPSB1djtcIixcclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcIixcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IHRleGVsID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2ICk7XCIsXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSBvcGFjaXR5ICogdGV4ZWw7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG59OyIsIi8qKlxyXG4gKiBAYXV0aG9yIGFuZHJld2JlcmcgLyBodHRwOi8vYW5kcmV3YmVyZy5jb20vXHJcbiAqXHJcbiAqIERlcHRoIG9mIEZpZWxkXHJcbiAqIC0gcG9ydGVkIGZyb21cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcdFxyXG5cdFRIUkVFLkRvRlNoYWRlciA9IHtcclxuXHJcblx0XHR1bmlmb3Jtczoge1xyXG5cclxuXHRcdFx0XCJ0RGlmZnVzZVwiOiAgICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJ0RGVwdGhcIjogICAgICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJ6bmVhclwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwiemZhclwiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxMDAwLjAgfSxcclxuXHRcdFx0XCJzaXplXCI6ICAgICAgICAgeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggNTEyLCA1MTIgKSB9LFxyXG5cdFx0XHRcInRleHRlbFwiOlx0XHR7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAxLzUxMiwgMS81MTIpfSxcclxuXHRcdFx0XCJmb2NhbERlcHRoXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjAwLjAgfSxcclxuXHRcdFx0XCJmb2NhbExlbmd0aFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDI4LjAgfSxcclxuXHRcdFx0XCJmc3RvcFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMi44IH0sXHJcblx0XHRcdFwic2hvd0ZvY3VzXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcIm1hbnVhbGRvZlwiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJuZG9mc3RhcnRcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJuZG9mZGlzdFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMi4wIH0sXHJcblx0XHRcdFwiZmRvZnN0YXJ0XCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwiZmRvZmRpc3RcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDMuMCB9LFxyXG5cdFx0XHRcIkNvQ1wiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAzIH0sXHJcblx0XHRcdFwidmlnbmV0dGluZ1wiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJ2aWdub3V0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjMgfSxcclxuXHRcdFx0XCJ2aWduaW5cIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuMCB9LFxyXG5cdFx0XHRcInZpZ25mYWRlXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyMi4wIH0sXHJcblx0XHRcdFwiYXV0b2ZvY3VzXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMSB9LFxyXG5cdFx0XHRcImZvY3VzXCI6ICAgICAgICB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCAwLjUsIDAuNSApIH0sXHJcblx0XHRcdFwibWF4Ymx1clwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXHJcblx0XHRcdFwidGhyZXNob2xkXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC44IH0sXHJcblx0XHRcdFwiZ2FpblwiOlx0XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjcgfSxcclxuXHRcdFx0XCJiaWFzXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuNSB9LFxyXG5cdFx0XHRcImZyaW5nZVwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC43IH0sXHJcblx0XHRcdFwibm9pc2VcIjpcdFx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDEgfSxcclxuXHRcdFx0XCJuYW1vdW50XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAwMDEgfSxcclxuXHRcdFx0XCJkZXB0aGJsdXJcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwiZGJzaXplXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjI1fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZhcnlpbmcgdmVjMiB2VXY7XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2VXYgPSB1djtcIixcclxuXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cdFx0XHRcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxyXG5cdFx0XHRcIiNkZWZpbmUgUEkgIDMuMTQxNTkyNjVcIixcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdC8vdW5pZm9ybSB2YXJpYWJsZXMgZnJvbSBleHRlcm5hbCBzY3JpcHRcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERlcHRoO1wiLFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiBzaXplO1wiLCAvLyB0ZXh0dXJlIHdpZHRoIGFuZCBoZWlnaHRcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgdGV4ZWw7XCIsIC8vIHRleHRlbCBzaXplXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZm9jYWxEZXB0aDtcIiwgIC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZm9jYWxMZW5ndGg7XCIsIC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmc3RvcDtcIiwgLy9mLXN0b3AgdmFsdWVcclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgc2hvd0ZvY3VzO1wiLCAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuXHRcdFx0Ly9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHpuZWFyO1wiLCAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgemZhcjtcIiwgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHQvL3VzZXIgdmFyaWFibGVzIG5vdyBwYXNzZWQgYXMgdW5pZm9ybXNcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIG1hbnVhbGRvZjtcIiwgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuZG9mc3RhcnQ7XCIsIC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmRvZmRpc3Q7XCIsIC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmZG9mc3RhcnQ7XCIsIC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmZG9mZGlzdDtcIiwgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IENvQztcIiwvL2NpcmNsZSBvZiBjb25mdXNpb24gc2l6ZSBpbiBtbSAoMzVtbSBmaWxtID0gMC4wM21tKVxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgdmlnbmV0dGluZztcIiwgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWdub3V0O1wiLCAvL3ZpZ25ldHRpbmcgb3V0ZXIgYm9yZGVyXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB2aWduaW47XCIsIC8vdmlnbmV0dGluZyBpbm5lciBib3JkZXJcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHZpZ25mYWRlO1wiLCAvL2Ytc3RvcHMgdGlsbCB2aWduZXRlIGZhZGVzXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBhdXRvZm9jdXM7XCIsIC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIGZvY3VzO1wiLCAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodClcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG1heGJsdXI7XCIsIC8vY2xhbXAgdmFsdWUgb2YgbWF4IGJsdXIgKDAuMCA9IG5vIGJsdXIsMS4wIGRlZmF1bHQpXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdGhyZXNob2xkO1wiLCAvL2hpZ2hsaWdodCB0aHJlc2hvbGQ7XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBnYWluO1wiLCAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGJpYXM7XCIsIC8vYm9rZWggZWRnZSBiaWFzXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmcmluZ2U7XCIsIC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIG5vaXNlO1wiLCAvL3VzZSBub2lzZSBpbnN0ZWFkIG9mIHBhdHRlcm4gZm9yIHNhbXBsZSBkaXRoZXJpbmdcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5hbW91bnQ7XCIsIC8vZGl0aGVyIGFtb3VudFxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgZGVwdGhibHVyO1wiLCAvL2JsdXIgdGhlIGRlcHRoIGJ1ZmZlcj9cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGRic2l6ZTtcIiwgLy9kZXB0aGJsdXJzaXplXHJcblxyXG5cdFx0XHQvLyBzYW1wbGVzIGFuZCByaW5ncyBuZWVkIHRvIGJlIGNvbnN0YW50cy4gbm8gZHluYW1pYyBsb29wIGNvdW50ZXJzIGluIE9wZW5HTCBFU1xyXG5cdFx0XHQvLyBDYW4gc2hhZGVyIGJlIGJyb2tlbiBpbnRvIDIgcGFzcz8gLi4uIFxyXG5cdFx0XHRcImludCBzYW1wbGVzID0gMztcIiwgLy9zYW1wbGVzIG9uIHRoZSBmaXJzdCByaW5nXHJcblx0XHRcdFwiY29uc3QgaW50IHJpbmdzID0gMztcIiwgLy9yaW5nIGNvdW50XHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHRuZXh0IHBhcnQgaXMgZXhwZXJpbWVudGFsXHJcblx0XHRcdG5vdCBsb29raW5nIGdvb2Qgd2l0aCBzbWFsbCBzYW1wbGUgYW5kIHJpbmcgY291bnRcclxuXHRcdFx0bG9va3Mgb2theSBzdGFydGluZyBmcm9tIHNhbXBsZXMgPSA0LCByaW5ncyA9IDRcclxuXHRcdFx0Ki9cclxuXHJcblx0XHRcdFwiYm9vbCBwZW50YWdvbiA9IGZhbHNlO1wiLCAvL3VzZSBwZW50YWdvbiBhcyBib2tlaCBzaGFwZT9cclxuXHRcdFx0XCJmbG9hdCBmZWF0aGVyID0gMC40O1wiLCAvL3BlbnRhZ29uIHNoYXBlIGZlYXRoZXJcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHQvLyBSR0JBIGRlcHRoXHJcblxyXG5cdFx0XHRcImZsb2F0IHVucGFja0RlcHRoKCBjb25zdCBpbiB2ZWM0IHJnYmFfZGVwdGggKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29uc3QgdmVjNCBiaXRfc2hpZnQgPSB2ZWM0KCAxLjAgLyAoIDI1Ni4wICogMjU2LjAgKiAyNTYuMCApLCAxLjAgLyAoIDI1Ni4wICogMjU2LjAgKSwgMS4wIC8gMjU2LjAsIDEuMCApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZGVwdGggPSBkb3QoIHJnYmFfZGVwdGgsIGJpdF9zaGlmdCApO1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIGRlcHRoO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cclxuXHRcdFx0XCJmbG9hdCBwZW50YSh2ZWMyIGNvb3JkcylcIiwgLy9wZW50YWdvbmFsIHNoYXBlXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgc2NhbGUgPSBmbG9hdChyaW5ncykgLSAxLjM7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzAgPSB2ZWM0KCAxLjAsICAgICAgICAgMC4wLCAgICAgICAgIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzEgPSB2ZWM0KCAwLjMwOTAxNjk5NCwgMC45NTEwNTY1MTYsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzIgPSB2ZWM0KC0wLjgwOTAxNjk5NCwgMC41ODc3ODUyNTIsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzMgPSB2ZWM0KC0wLjgwOTAxNjk5NCwtMC41ODc3ODUyNTIsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzQgPSB2ZWM0KCAwLjMwOTAxNjk5NCwtMC45NTEwNTY1MTYsIDAuMCwgIDEuMCk7XCIsXHJcblx0XHRcdFx0XCJ2ZWM0ICBIUzUgPSB2ZWM0KCAwLjAgICAgICAgICwwLjAgICAgICAgICAsIDEuMCwgIDEuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCAgb25lID0gdmVjNCggMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCBQID0gdmVjNCgoY29vcmRzKSx2ZWMyKHNjYWxlLCBzY2FsZSkpO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgZGlzdCA9IHZlYzQoMC4wKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGlub3JvdXQgPSAtNC4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QueCA9IGRvdCggUCwgSFMwICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnkgPSBkb3QoIFAsIEhTMSApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC56ID0gZG90KCBQLCBIUzIgKTtcIixcclxuXHRcdFx0XHRcImRpc3QudyA9IGRvdCggUCwgSFMzICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAoIC1mZWF0aGVyLCBmZWF0aGVyLCBkaXN0ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaW5vcm91dCArPSBkb3QoIGRpc3QsIG9uZSApO1wiLFxyXG5cclxuXHRcdFx0XHRcImRpc3QueCA9IGRvdCggUCwgSFM0ICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnkgPSBIUzUudyAtIGFicyggUC56ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAoIC1mZWF0aGVyLCBmZWF0aGVyLCBkaXN0ICk7XCIsXHJcblx0XHRcdFx0XCJpbm9yb3V0ICs9IGRpc3QueDtcIixcclxuXHJcblx0XHRcdFx0XCJyZXR1cm4gY2xhbXAoIGlub3JvdXQsIDAuMCwgMS4wICk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCBiZGVwdGgodmVjMiBjb29yZHMpIC8vYmx1cnJpbmcgZGVwdGhcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkID0gMC4wO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQga2VybmVsWzldO1wiLFxyXG5cdFx0XHRcdFwidmVjMiBvZmZzZXRbOV07XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMiB3aCA9IHZlYzIodGV4ZWwueCwgdGV4ZWwueSkgKiBkYnNpemU7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzBdID0gdmVjMigtd2gueCwtd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbMV0gPSB2ZWMyKCAwLjAsIC13aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFsyXSA9IHZlYzIoIHdoLnggLXdoLnkpO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFszXSA9IHZlYzIoLXdoLngsICAwLjApO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzRdID0gdmVjMiggMC4wLCAgIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbNV0gPSB2ZWMyKCB3aC54LCAgMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbNl0gPSB2ZWMyKC13aC54LCB3aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs3XSA9IHZlYzIoIDAuMCwgIHdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzhdID0gdmVjMiggd2gueCwgd2gueSk7XCIsXHJcblxyXG5cdFx0XHRcdFwia2VybmVsWzBdID0gMS4wLzE2LjA7ICAga2VybmVsWzFdID0gMi4wLzE2LjA7ICAga2VybmVsWzJdID0gMS4wLzE2LjA7XCIsXHJcblx0XHRcdFx0XCJrZXJuZWxbM10gPSAyLjAvMTYuMDsgICBrZXJuZWxbNF0gPSA0LjAvMTYuMDsgICBrZXJuZWxbNV0gPSAyLjAvMTYuMDtcIixcclxuXHRcdFx0XHRcImtlcm5lbFs2XSA9IDEuMC8xNi4wOyAgIGtlcm5lbFs3XSA9IDIuMC8xNi4wOyAgIGtlcm5lbFs4XSA9IDEuMC8xNi4wO1wiLFxyXG5cclxuXHJcblx0XHRcdFx0XCJmb3IoIGludCBpPTA7IGk8OTsgaSsrIClcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgdG1wID0gdW5wYWNrRGVwdGgodGV4dHVyZTJEKHREZXB0aCwgY29vcmRzICsgb2Zmc2V0W2ldKSk7XCIsXHJcblx0XHRcdFx0XHRcImQgKz0gdG1wICoga2VybmVsW2ldO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBkO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblxyXG5cdFx0XHRcInZlYzMgY29sb3IodmVjMiBjb29yZHMsZmxvYXQgYmx1cilcIiwgLy9wcm9jZXNzaW5nIHRoZSBzYW1wbGVcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIGNvbCA9IHZlYzMoMC4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJjb2wuciA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKDAuMCwxLjApKnRleGVsKmZyaW5nZSpibHVyKS5yO1wiLFxyXG5cdFx0XHRcdFwiY29sLmcgPSB0ZXh0dXJlMkQodERpZmZ1c2UsY29vcmRzICsgdmVjMigtMC44NjYsLTAuNSkqdGV4ZWwqZnJpbmdlKmJsdXIpLmc7XCIsXHJcblx0XHRcdFx0XCJjb2wuYiA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKDAuODY2LC0wLjUpKnRleGVsKmZyaW5nZSpibHVyKS5iO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzMgbHVtY29lZmYgPSB2ZWMzKDAuMjk5LDAuNTg3LDAuMTE0KTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bSA9IGRvdChjb2wucmdiLCBsdW1jb2VmZik7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCB0aHJlc2ggPSBtYXgoKGx1bS10aHJlc2hvbGQpKmdhaW4sIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gY29sK21peCh2ZWMzKDAuMCksY29sLHRocmVzaCpibHVyKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZlYzIgcmFuZCh2ZWMyIGNvb3JkKSAvL2dlbmVyYXRpbmcgbm9pc2UvcGF0dGVybiB0ZXh0dXJlIGZvciBkaXRoZXJpbmdcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBub2lzZVggPSAoKGZyYWN0KDEuMC1jb29yZC5zKihzaXplLngvMi4wKSkqMC4yNSkrKGZyYWN0KGNvb3JkLnQqKHNpemUueS8yLjApKSowLjc1KSkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcImZsb2F0IG5vaXNlWSA9ICgoZnJhY3QoMS4wLWNvb3JkLnMqKHNpemUueC8yLjApKSowLjc1KSsoZnJhY3QoY29vcmQudCooc2l6ZS55LzIuMCkpKjAuMjUpKSoyLjAtMS4wO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChub2lzZSlcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwibm9pc2VYID0gY2xhbXAoZnJhY3Qoc2luKGRvdChjb29yZCAsdmVjMigxMi45ODk4LDc4LjIzMykpKSAqIDQzNzU4LjU0NTMpLDAuMCwxLjApKjIuMC0xLjA7XCIsXHJcblx0XHRcdFx0XHRcIm5vaXNlWSA9IGNsYW1wKGZyYWN0KHNpbihkb3QoY29vcmQgLHZlYzIoMTIuOTg5OCw3OC4yMzMpKjIuMCkpICogNDM3NTguNTQ1MyksMC4wLDEuMCkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcInJldHVybiB2ZWMyKG5vaXNlWCxub2lzZVkpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwidmVjMyBkZWJ1Z0ZvY3VzKHZlYzMgY29sLCBmbG9hdCBibHVyLCBmbG9hdCBkZXB0aClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBlZGdlID0gMC4wMDIqZGVwdGg7IC8vZGlzdGFuY2UgYmFzZWQgZWRnZSBzbW9vdGhpbmdcIixcclxuXHRcdFx0XHRcImZsb2F0IG0gPSBjbGFtcChzbW9vdGhzdGVwKDAuMCxlZGdlLGJsdXIpLDAuMCwxLjApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZSA9IGNsYW1wKHNtb290aHN0ZXAoMS4wLWVkZ2UsMS4wLGJsdXIpLDAuMCwxLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbCA9IG1peChjb2wsdmVjMygxLjAsMC41LDAuMCksKDEuMC1tKSowLjYpO1wiLFxyXG5cdFx0XHRcdFwiY29sID0gbWl4KGNvbCx2ZWMzKDAuMCwwLjUsMS4wKSwoKDEuMC1lKS0oMS4wLW0pKSowLjIpO1wiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBjb2w7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCBsaW5lYXJpemUoZmxvYXQgZGVwdGgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwicmV0dXJuIC16ZmFyICogem5lYXIgLyAoZGVwdGggKiAoemZhciAtIHpuZWFyKSAtIHpmYXIpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwiZmxvYXQgdmlnbmV0dGUoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IGRpc3QgPSBkaXN0YW5jZSh2VXYsIHZlYzIoMC41LDAuNSkpO1wiLFxyXG5cdFx0XHRcdFwiZGlzdCA9IHNtb290aHN0ZXAodmlnbm91dCsoZnN0b3AvdmlnbmZhZGUpLCB2aWduaW4rKGZzdG9wL3ZpZ25mYWRlKSwgZGlzdCk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gY2xhbXAoZGlzdCwwLjAsMS4wKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdC8vc2NlbmUgZGVwdGggY2FsY3VsYXRpb25cclxuXHJcblx0XHRcdFx0XCJmbG9hdCBkZXB0aCA9IGxpbmVhcml6ZSh1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLHZVdikpKTtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAoZGVwdGhibHVyKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJkZXB0aCA9IGxpbmVhcml6ZShiZGVwdGgodlV2KSk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdC8vZm9jYWwgcGxhbmUgY2FsY3VsYXRpb25cIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBmRGVwdGggPSBmb2NhbERlcHRoO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChhdXRvZm9jdXMpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZEZXB0aCA9IGxpbmVhcml6ZSh1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLGZvY3VzKSkpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHQvL2RvZiBibHVyIGZhY3RvciBjYWxjdWxhdGlvblxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGJsdXIgPSAwLjA7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKG1hbnVhbGRvZilcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYSA9IGRlcHRoLWZEZXB0aDtcIiwgLy9mb2NhbCBwbGFuZVxyXG5cdFx0XHRcdFx0XCJmbG9hdCBiID0gKGEtZmRvZnN0YXJ0KS9mZG9mZGlzdDtcIiwgLy9mYXIgRG9GXHJcblx0XHRcdFx0XHRcImZsb2F0IGMgPSAoLWEtbmRvZnN0YXJ0KS9uZG9mZGlzdDtcIiwgLy9uZWFyIERvZlxyXG5cdFx0XHRcdFx0XCJibHVyID0gKGE+MC4wKT9iOmM7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiZWxzZVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBmID0gZm9jYWxMZW5ndGg7XCIsIC8vZm9jYWwgbGVuZ3RoIGluIG1tXHJcblx0XHRcdFx0XHRcImZsb2F0IGQgPSBmRGVwdGgqMTAwMC4wO1wiLCAvL2ZvY2FsIHBsYW5lIGluIG1tXHJcblx0XHRcdFx0XHRcImZsb2F0IG8gPSBkZXB0aCoxMDAwLjA7XCIsIC8vZGVwdGggaW4gbW1cclxuXHJcblx0XHRcdFx0XHRcImZsb2F0IGEgPSAobypmKS8oby1mKTtcIixcclxuXHRcdFx0XHRcdFwiZmxvYXQgYiA9IChkKmYpLyhkLWYpO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBjID0gKGQtZikvKGQqZnN0b3AqQ29DKTtcIixcclxuXHJcblx0XHRcdFx0XHRcImJsdXIgPSBhYnMoYS1iKSpjO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImJsdXIgPSBjbGFtcChibHVyLDAuMCwxLjApO1wiLFxyXG5cclxuXHRcdFx0XHQvLyBjYWxjdWxhdGlvbiBvZiBwYXR0ZXJuIGZvciBkaXRlcmluZ1xyXG5cclxuXHRcdFx0XHRcInZlYzIgbm9pc2UgPSByYW5kKHZVdikqbmFtb3VudCpibHVyO1wiLFxyXG5cclxuXHRcdFx0XHQvLyBnZXR0aW5nIGJsdXIgeCBhbmQgeSBzdGVwIGZhY3RvclxyXG5cclxuXHRcdFx0XHRcImZsb2F0IHcgPSAoMS4wL3NpemUueCkqYmx1ciptYXhibHVyK25vaXNlLng7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBoID0gKDEuMC9zaXplLnkpKmJsdXIqbWF4Ymx1citub2lzZS55O1wiLFxyXG5cclxuXHRcdFx0XHQvLyBjYWxjdWxhdGlvbiBvZiBmaW5hbCBjb2xvclxyXG5cclxuXHRcdFx0XHRcInZlYzMgY29sID0gdmVjMygwLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmKGJsdXIgPCAwLjA1KVwiLCAvL3NvbWUgb3B0aW1pemF0aW9uIHRoaW5neVxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFwiZWxzZVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJjb2wgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBzID0gMS4wO1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiZm9yIChpbnQgaSA9IDE7IGkgPD0gcmluZ3M7IGkgKz0gMSlcIixcclxuXHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcImZsb2F0IHJpbmdzYW1wbGVzID0gZmxvYXQoaSAqIHNhbXBsZXMpO1wiLFxyXG5cclxuXHRcdFx0XHRcdFx0XCJpZihpID09IDEpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgMyA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwiZWxzZSBpZihpID09IDIpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgNiA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFwiZWxzZSBpZihpID09IDMpXCIsXHJcblx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZm9yIChpbnQgaiA9IDAgOyBqIDwgOSA7IGogKz0gMSlcIixcclxuXHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgc3RlcCA9IFBJKjIuMCAvIGZsb2F0KHJpbmdzYW1wbGVzKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcHcgPSAoY29zKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcGggPSAoc2luKGZsb2F0KGopKnN0ZXApKmZsb2F0KGkpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiZmxvYXQgcCA9IDEuMDtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwiaWYgKHBlbnRhZ29uKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwicCA9IHBlbnRhKHZlYzIocHcscGgpKTtcIixcclxuXHRcdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJjb2wgKz0gY29sb3IodlV2ICsgdmVjMihwdyp3LHBoKmgpLGJsdXIpKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJzICs9IDEuMCptaXgoMS4wLChmbG9hdChpKSkvKGZsb2F0KHJpbmdzKSksYmlhcykqcDtcIixcclxuXHRcdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFwiY29sIC89IHM7XCIsIC8vZGl2aWRlIGJ5IHNhbXBsZSBjb3VudFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImlmIChzaG93Rm9jdXMpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCA9IGRlYnVnRm9jdXMoY29sLCBibHVyLCBkZXB0aCk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKHZpZ25ldHRpbmcpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCAqPSB2aWduZXR0ZSgpO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XHRcImdsX0ZyYWdDb2xvci5yZ2IgPSBjb2w7XCIsXHJcblx0XHRcdFx0XCJnbF9GcmFnQ29sb3IuYSA9IDEuMDtcIixcclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxuXHJcbn0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHJcblx0VEhSRUUuRWZmZWN0Q29tcG9zZXIgPSBmdW5jdGlvbiAoIHJlbmRlcmVyLCByZW5kZXJUYXJnZXQgKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cclxuXHRcdGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAxO1xyXG5cdFx0XHR2YXIgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IDE7XHJcblx0XHRcdHZhciBwYXJhbWV0ZXJzID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0LCBzdGVuY2lsQnVmZmVyOiBmYWxzZSB9O1xyXG5cclxuXHRcdFx0cmVuZGVyVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB3aWR0aCwgaGVpZ2h0LCBwYXJhbWV0ZXJzICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xyXG5cclxuXHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0dGhpcy5wYXNzZXMgPSBbXTtcclxuXHJcblx0XHRpZiAoIFRIUkVFLkNvcHlTaGFkZXIgPT09IHVuZGVmaW5lZCApXHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiVEhSRUUuRWZmZWN0Q29tcG9zZXIgcmVsaWVzIG9uIFRIUkVFLkNvcHlTaGFkZXJcIiApO1xyXG5cclxuXHRcdHRoaXMuY29weVBhc3MgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuQ29weVNoYWRlciApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5FZmZlY3RDb21wb3Nlci5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0c3dhcEJ1ZmZlcnM6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyIHRtcCA9IHRoaXMucmVhZEJ1ZmZlcjtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy53cml0ZUJ1ZmZlcjtcclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRtcDtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGFkZFBhc3M6IGZ1bmN0aW9uICggcGFzcyApIHtcclxuXHJcblx0XHRcdHRoaXMucGFzc2VzLnB1c2goIHBhc3MgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGluc2VydFBhc3M6IGZ1bmN0aW9uICggcGFzcywgaW5kZXggKSB7XHJcblxyXG5cdFx0XHR0aGlzLnBhc3Nlcy5zcGxpY2UoIGluZGV4LCAwLCBwYXNzICk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDI7XHJcblxyXG5cdFx0XHR2YXIgbWFza0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0dmFyIHBhc3MsIGksIGlsID0gdGhpcy5wYXNzZXMubGVuZ3RoO1xyXG5cclxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBpbDsgaSArKyApIHtcclxuXHJcblx0XHRcdFx0cGFzcyA9IHRoaXMucGFzc2VzWyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggIXBhc3MuZW5hYmxlZCApIGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRwYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSwgbWFza0FjdGl2ZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHBhc3MubmVlZHNTd2FwICkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWFza0FjdGl2ZSApIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBjb250ZXh0ID0gdGhpcy5yZW5kZXJlci5jb250ZXh0O1xyXG5cclxuXHRcdFx0XHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5OT1RFUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5jb3B5UGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEgKTtcclxuXHJcblx0XHRcdFx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5zd2FwQnVmZmVycygpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggcGFzcyBpbnN0YW5jZW9mIFRIUkVFLk1hc2tQYXNzICkge1xyXG5cclxuXHRcdFx0XHRcdG1hc2tBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBwYXNzIGluc3RhbmNlb2YgVEhSRUUuQ2xlYXJNYXNrUGFzcyApIHtcclxuXHJcblx0XHRcdFx0XHRtYXNrQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlc2V0OiBmdW5jdGlvbiAoIHJlbmRlclRhcmdldCApIHtcclxuXHJcblx0XHRcdGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0XHRyZW5kZXJUYXJnZXQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZW5kZXJUYXJnZXQxID0gcmVuZGVyVGFyZ2V0O1xyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcclxuXHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFNpemU6IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcclxuXHJcblx0XHRcdHZhciByZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcclxuXHJcblx0XHRcdHJlbmRlclRhcmdldC53aWR0aCA9IHdpZHRoO1xyXG5cdFx0XHRyZW5kZXJUYXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuXHRcdFx0dGhpcy5yZXNldCggcmVuZGVyVGFyZ2V0ICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG59O1xyXG4iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICogQGF1dGhvciBkYXZpZGVkYyAvIGh0dHA6Ly93d3cuc2tldGNocGF0Y2gubmV0L1xyXG4gKlxyXG4gKiBOVklESUEgRlhBQSBieSBUaW1vdGh5IExvdHRlc1xyXG4gKiBodHRwOi8vdGltb3RoeWxvdHRlcy5ibG9nc3BvdC5jb20vMjAxMS8wNi9meGFhMy1zb3VyY2UtcmVsZWFzZWQuaHRtbFxyXG4gKiAtIFdlYkdMIHBvcnQgYnkgQHN1cGVyZWdnYmVydFxyXG4gKiBodHRwOi8vd3d3LmdsZ2Uub3JnL2RlbW9zL2Z4YWEvXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5GWEFBU2hhZGVyID0ge1xyXG5cclxuXHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcInREaWZmdXNlXCI6ICAgeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcclxuXHRcdFx0XCJyZXNvbHV0aW9uXCI6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDEgLyAxMDI0LCAxIC8gNTEyICkgIH1cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHZlcnRleFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XCIsXHJcblxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9SRURVQ0VfTUlOICAgKDEuMC8xMjguMClcIixcclxuXHRcdFx0XCIjZGVmaW5lIEZYQUFfUkVEVUNFX01VTCAgICgxLjAvOC4wKVwiLFxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9TUEFOX01BWCAgICAgOC4wXCIsXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk5XID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAtMS4wLCAtMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk5FID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAxLjAsIC0xLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiU1cgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIC0xLjAsIDEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JTRSA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggMS4wLCAxLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzQgcmdiYU0gID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICk7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYk0gID0gcmdiYU0ueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyBsdW1hID0gdmVjMyggMC4yOTksIDAuNTg3LCAwLjExNCApO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGx1bWFOVyA9IGRvdCggcmdiTlcsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFORSA9IGRvdCggcmdiTkUsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFTVyA9IGRvdCggcmdiU1csIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFTRSA9IGRvdCggcmdiU0UsIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNICA9IGRvdCggcmdiTSwgIGx1bWEgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNaW4gPSBtaW4oIGx1bWFNLCBtaW4oIG1pbiggbHVtYU5XLCBsdW1hTkUgKSwgbWluKCBsdW1hU1csIGx1bWFTRSApICkgKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IGx1bWFNYXggPSBtYXgoIGx1bWFNLCBtYXgoIG1heCggbHVtYU5XLCBsdW1hTkUpICwgbWF4KCBsdW1hU1csIGx1bWFTRSApICkgKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIGRpcjtcIixcclxuXHRcdFx0XHRcImRpci54ID0gLSgobHVtYU5XICsgbHVtYU5FKSAtIChsdW1hU1cgKyBsdW1hU0UpKTtcIixcclxuXHRcdFx0XHRcImRpci55ID0gICgobHVtYU5XICsgbHVtYVNXKSAtIChsdW1hTkUgKyBsdW1hU0UpKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCBkaXJSZWR1Y2UgPSBtYXgoICggbHVtYU5XICsgbHVtYU5FICsgbHVtYVNXICsgbHVtYVNFICkgKiAoIDAuMjUgKiBGWEFBX1JFRFVDRV9NVUwgKSwgRlhBQV9SRURVQ0VfTUlOICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgcmNwRGlyTWluID0gMS4wIC8gKCBtaW4oIGFicyggZGlyLnggKSwgYWJzKCBkaXIueSApICkgKyBkaXJSZWR1Y2UgKTtcIixcclxuXHRcdFx0XHRcImRpciA9IG1pbiggdmVjMiggRlhBQV9TUEFOX01BWCwgIEZYQUFfU1BBTl9NQVgpLFwiLFxyXG5cdFx0XHRcdFx0ICBcIm1heCggdmVjMigtRlhBQV9TUEFOX01BWCwgLUZYQUFfU1BBTl9NQVgpLFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwiZGlyICogcmNwRGlyTWluKSkgKiByZXNvbHV0aW9uO1wiLFxyXG5cdFx0XHRcdFwidmVjNCByZ2JBID0gKDEuMC8yLjApICogKFwiLFxyXG5cdCAgICAgICAgXHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDEuMC8zLjAgLSAwLjUpKSArXCIsXHJcblx0XHRcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgyLjAvMy4wIC0gMC41KSkpO1wiLFxyXG5cdCAgICBcdFx0XCJ2ZWM0IHJnYkIgPSByZ2JBICogKDEuMC8yLjApICsgKDEuMC80LjApICogKFwiLFxyXG5cdFx0XHRcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMC4wLzMuMCAtIDAuNSkpICtcIixcclxuXHQgICAgICBcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgzLjAvMy4wIC0gMC41KSkpO1wiLFxyXG5cdCAgICBcdFx0XCJmbG9hdCBsdW1hQiA9IGRvdChyZ2JCLCB2ZWM0KGx1bWEsIDAuMCkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmICggKCBsdW1hQiA8IGx1bWFNaW4gKSB8fCAoIGx1bWFCID4gbHVtYU1heCApICkge1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yID0gcmdiQTtcIixcclxuXHJcblx0XHRcdFx0XCJ9IGVsc2Uge1wiLFxyXG5cdFx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSByZ2JCO1wiLFxyXG5cclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcblxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblx0XHRcclxuXHRUSFJFRS5NYXNrUGFzcyA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSApIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuaW52ZXJzZSA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5NYXNrUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHQvLyBkb24ndCB1cGRhdGUgY29sb3Igb3IgZGVwdGhcclxuXHJcblx0XHRcdGNvbnRleHQuY29sb3JNYXNrKCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSApO1xyXG5cdFx0XHRjb250ZXh0LmRlcHRoTWFzayggZmFsc2UgKTtcclxuXHJcblx0XHRcdC8vIHNldCB1cCBzdGVuY2lsXHJcblxyXG5cdFx0XHR2YXIgd3JpdGVWYWx1ZSwgY2xlYXJWYWx1ZTtcclxuXHJcblx0XHRcdGlmICggdGhpcy5pbnZlcnNlICkge1xyXG5cclxuXHRcdFx0XHR3cml0ZVZhbHVlID0gMDtcclxuXHRcdFx0XHRjbGVhclZhbHVlID0gMTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHdyaXRlVmFsdWUgPSAxO1xyXG5cdFx0XHRcdGNsZWFyVmFsdWUgPSAwO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29udGV4dC5lbmFibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbE9wKCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFICk7XHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuQUxXQVlTLCB3cml0ZVZhbHVlLCAweGZmZmZmZmZmICk7XHJcblx0XHRcdGNvbnRleHQuY2xlYXJTdGVuY2lsKCBjbGVhclZhbHVlICk7XHJcblxyXG5cdFx0XHQvLyBkcmF3IGludG8gdGhlIHN0ZW5jaWwgYnVmZmVyXHJcblxyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHQvLyByZS1lbmFibGUgdXBkYXRlIG9mIGNvbG9yIGFuZCBkZXB0aFxyXG5cclxuXHRcdFx0Y29udGV4dC5jb2xvck1hc2soIHRydWUsIHRydWUsIHRydWUsIHRydWUgKTtcclxuXHRcdFx0Y29udGV4dC5kZXB0aE1hc2soIHRydWUgKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgcmVuZGVyIHdoZXJlIHN0ZW5jaWwgaXMgc2V0IHRvIDFcclxuXHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTsgIC8vIGRyYXcgaWYgPT0gMVxyXG5cdFx0XHRjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCApO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblxyXG5cdFRIUkVFLkNsZWFyTWFza1Bhc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuQ2xlYXJNYXNrUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHRjb250ZXh0LmRpc2FibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxufTsiLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHJcblx0VEhSRUUuUmVuZGVyUGFzcyA9IGZ1bmN0aW9uICggc2NlbmUsIGNhbWVyYSwgb3ZlcnJpZGVNYXRlcmlhbCwgY2xlYXJDb2xvciwgY2xlYXJBbHBoYSApIHtcclxuXHJcblx0XHR0aGlzLnNjZW5lID0gc2NlbmU7XHJcblx0XHR0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuXHJcblx0XHR0aGlzLm92ZXJyaWRlTWF0ZXJpYWwgPSBvdmVycmlkZU1hdGVyaWFsO1xyXG5cclxuXHRcdHRoaXMuY2xlYXJDb2xvciA9IGNsZWFyQ29sb3I7XHJcblx0XHR0aGlzLmNsZWFyQWxwaGEgPSAoIGNsZWFyQWxwaGEgIT09IHVuZGVmaW5lZCApID8gY2xlYXJBbHBoYSA6IDE7XHJcblxyXG5cdFx0dGhpcy5vbGRDbGVhckNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCk7XHJcblx0XHR0aGlzLm9sZENsZWFyQWxwaGEgPSAxO1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLlJlbmRlclBhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5vdmVycmlkZU1hdGVyaWFsO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMub2xkQ2xlYXJDb2xvci5jb3B5KCByZW5kZXJlci5nZXRDbGVhckNvbG9yKCkgKTtcclxuXHRcdFx0XHR0aGlzLm9sZENsZWFyQWxwaGEgPSByZW5kZXJlci5nZXRDbGVhckFscGhhKCk7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMuY2xlYXJDb2xvciwgdGhpcy5jbGVhckFscGhhICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCByZWFkQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5vbGRDbGVhckNvbG9yLCB0aGlzLm9sZENsZWFyQWxwaGEgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cdFxyXG59IiwiLyoqXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XHJcblxyXG5cdFRIUkVFLlNoYWRlclBhc3MgPSBmdW5jdGlvbiAoIHNoYWRlciwgdGV4dHVyZUlEICkge1xyXG5cclxuXHRcdHRoaXMudGV4dHVyZUlEID0gKCB0ZXh0dXJlSUQgIT09IHVuZGVmaW5lZCApID8gdGV4dHVyZUlEIDogXCJ0RGlmZnVzZVwiO1xyXG5cclxuXHRcdHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBzaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcblxyXG5cdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyXHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyVG9TY3JlZW4gPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSB0cnVlO1xyXG5cdFx0dGhpcy5jbGVhciA9IGZhbHNlO1xyXG5cclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0xLCAxLCAxLCAtMSwgMCwgMSApO1xyXG5cdFx0dGhpcy5zY2VuZSAgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcblx0XHR0aGlzLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDIsIDIgKSwgbnVsbCApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoIHRoaXMucXVhZCApO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5TaGFkZXJQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdGlmICggdGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXSApIHtcclxuXHJcblx0XHRcdFx0dGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXS52YWx1ZSA9IHJlYWRCdWZmZXI7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnJlbmRlclRvU2NyZWVuICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxufTtcclxuIl19
