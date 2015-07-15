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
    	bottomBar.classList.add('closed');
    },

	onInfoPanelClosed: function() {
		bottomBar.classList.remove('closed');
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



/*===========================================================================
=            cratedigger.js v0.0.1 - by risq (Valentin Ledrapier)           =
===========================================================================*/


'use strict';

var THREE = (typeof window !== "undefined" ? window['THREE'] : typeof global !== "undefined" ? global['THREE'] : null);//,
    //Modernizr = require('modernizr');

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
    if ( !Modernizr.webgl ) return;

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3JpcHRzL2NyYXRlZGlnZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICAgICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgX19fX19fX1xyXG4gICAgICAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgIC9cXCAgICBcXCAgICAgICAgICAgLzo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgIC86OlxcICAgIFxcICAgICAgICAgLzo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgICAvOjo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAvOjo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAvOjo6Ojo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAvOjo6Ojo6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAvOjo6L1xcOjo6XFwgICAgXFwgICAvOjo6L35+XFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgICAvOjo6L19fXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgIC86OjovX19cXDo6OlxcICAgIFxcIC86OjovICAgIFxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAvOjo6OlxcICAgXFw6OjpcXCAgICBcXCAgICAgICAgLzo6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXDo6Oi8gICAgLyBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAvOjo6Ojo6XFwgICBcXDo6OlxcICAgIFxcX18gICAgLzo6Ojo6OlxcICAgIFxcX1xcOjo6XFwgICBcXDo6OlxcICAgIFxcOi9fX19fLyAgIFxcOjo6XFxfX19fXFxcclxuICAgICAgICAgLzo6Oi9cXDo6OlxcICAgXFw6OjpcXF9fX19cXCBcXCAgLzo6Oi9cXDo6OlxcICAgIFxcIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICAgIHwgICAgIHw6Ojp8ICAgIHxcclxuICAgICAgICAvOjo6LyAgXFw6OjpcXCAgIFxcOjo6fCAgICB8IFxcLzo6Oi8gIFxcOjo6XFxfX19fXFwgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFxfX198ICAgICB8Ojo6fF9fX198XHJcbiAgICAgICAgXFw6Oi8gICB8Ojo6OlxcICAvOjo6fF9fX198IC86OjovICAgIFxcOjovICAgIC8gIFxcOjo6XFwgICBcXDo6LyAgICAvICAgX1xcX19fLzo6Oi8gICAgL1xyXG4gICAgICAgICBcXC9fX19ffDo6Ojo6XFwvOjo6LyAgICAvXFwvOjo6LyAgICAvIFxcL19fX18vXFwgICBcXDo6OlxcICAgXFwvX19fXy86XFwgfDo6fCAvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6Ojo6Ojo6OjovICAgIC86Ojo6Oi8gICAgLyAgICAgIFxcOjo6XFwgICBcXDo6OlxcICAgIFxcICBcXDo6OlxcfDo6fC86OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fFxcOjo6Oi8gICAgL1xcOjo6Oi9fX19fLyAgICAgICAgXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgIFxcOjo6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8IFxcOjovX19fXy8gIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAvOjo6LyAgICAvICAgXFw6Ojo6Ojo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojp8ICB+fCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcLzo6Oi8gICAgLyAgICAgXFw6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgIHwgICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6Ojo6LyAgICAvICAgICAgIFxcOjo6Oi9fX19fL1xyXG4gICAgICAgICAgICAgICBcXDo6fCAgIHwgICAgICAgICAgIFxcOjo6XFxfX19fXFwgICAgICAgICBcXDo6OjovICAgIC8gICAgICAgICB8Ojp8ICAgIHxcclxuICAgICAgICAgICAgICAgIFxcOnwgICB8ICAgICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICBcXDo6LyAgICAvICAgICAgICAgIHw6OnxfX19ffFxyXG4gICAgICAgICAgICAgICAgIFxcfF9fX3wgICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICBcXC9fX19fLyAgICAgICAgICAgIH5+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9fICAgICAgICAgICAgIC5fX18uX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fXHJcbiAgICAgICBfX19fX19fX19fX19fX19fIF8vICB8XyAgX19fXyAgIF9ffCBfL3xfX3wgX19fXyAgIF9fX18gICBfX19fX19fX19fXyAgICAgICB8X198IF9fX19fX1xyXG4gICAgIF8vIF9fX1xcXyAgX18gXFxfXyAgXFxcXCAgIF9fXFwvIF9fIFxcIC8gX18gfCB8ICB8LyBfX19cXCAvIF9fX1xcXy8gX18gXFxfICBfXyBcXCAgICAgIHwgIHwvICBfX18vXHJcbiAgICAgXFwgIFxcX19ffCAgfCBcXC8vIF9fIFxcfCAgfCBcXCAgX19fLy8gL18vIHwgfCAgLyAvXy8gID4gL18vICA+ICBfX18vfCAgfCBcXC8gICAgICB8ICB8XFxfX18gXFxcclxuICAgICAgXFxfX18gID5fX3wgIChfX19fICAvX198ICBcXF9fXyAgPl9fX18gfCB8X19cXF9fXyAgL1xcX19fICAvIFxcX19fICA+X198ICAvXFwgL1xcX198ICAvX19fXyAgPlxyXG4gICAgICAgICAgXFwvICAgICAgICAgICBcXC8gICAgICAgICAgXFwvICAgICBcXC8gICAvX19fX18vL19fX19fLyAgICAgIFxcLyAgICAgIFxcLyBcXF9fX19fX3wgICAgXFwvXHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIGNyYXRlZGlnZ2VyLmpzIHYwLjAuMSAtIGJ5IHJpc3EgKFZhbGVudGluIExlZHJhcGllcikgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1snVEhSRUUnXSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxbJ1RIUkVFJ10gOiBudWxsKTsvLyxcclxuICAgIC8vTW9kZXJuaXpyID0gcmVxdWlyZSgnbW9kZXJuaXpyJyk7XHJcblxyXG4vKj09PT09PT09PT0gIEluamVjdCBhbGwgZXh0ZXJuYWwgbW9kdWxlcyB0byBUSFJFRS5qcyA9PT09PT09PT09Ki9cclxuXHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0NvcHlTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL1JlbmRlclBhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0RvRlNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlcicpKFRIUkVFKTtcclxucmVxdWlyZSgnLi90aHJlZWpzX21vZHVsZXMvTWFza1Bhc3MnKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0VmZmVjdENvbXBvc2VyJykoVEhSRUUpO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIFZBUklBQkxFUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbnZhciBvcHRpb25zID0ge30sXHJcbiAgICBleHBvcnRzID0ge30sIC8vIE9iamVjdCBmb3IgcHVibGljIEFQSXNcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBET00gY29udGFpbmVyIGVsZW1lbnRzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCxcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCxcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LFxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCxcclxuICAgIGFydGlzdEluZm9FbGVtZW50LFxyXG4gICAgY292ZXJJbmZvRWxlbWVudCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBzdGF0cyxcclxuICAgIHNjZW5lLFxyXG4gICAgY2FtZXJhLFxyXG4gICAgdGFyZ2V0LFxyXG4gICAgcmVuZGVyZXIsXHJcbiAgICBsaWdodCxcclxuICAgIGxlZnRMaWdodCxcclxuICAgIHJpZ2h0TGlnaHQsXHJcbiAgICBjb21wb3NlcixcclxuICAgIEZYQUEsXHJcbiAgICBkb2YsXHJcbiAgICBndWksXHJcbiAgICBkZXB0aFRhcmdldCxcclxuICAgIGRlcHRoU2hhZGVyLFxyXG4gICAgZGVwdGhVbmlmb3JtcyxcclxuICAgIGRlcHRoTWF0ZXJpYWwsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgT2JqZWN0cyAmIGRhdGEgYXJyYXlzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjcmF0ZXMgPSBbXSxcclxuICAgIHJlY29yZHMgPSBbXSxcclxuICAgIHJlY29yZHNEYXRhTGlzdCA9IFtdLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFRocmVlLmpzIG9iamVjdHMgY29udGFpbmVycyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lcixcclxuICAgIGNyYXRlc0NvbnRhaW5lcixcclxuICAgIHJlY29yZHNDb250YWluZXIsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgU3RhdGVzLCB1dGlsIHZhcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgZHByLFxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQsXHJcbiAgICBpc0xvYWRpbmcgPSBmYWxzZSxcclxuICAgIGluZm9QYW5lbFN0YXRlID0gXCJjbG9zZWRcIixcclxuICAgIGlzU2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICBkb1JlbmRlciA9IHRydWUsXHJcbiAgICBtb3VzZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBtb3VzZURvd25Qb3MgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0Q2FtZXJhUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkUmVjb3JkID0gLTEsXHJcbiAgICBzaG93blJlY29yZCA9IC0xLFxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDAsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgTWF0ZXJpYWxzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICB3b29kX21hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlZmF1bHQgc2V0dGluZ3MgID09PT09PT09PT0qL1xyXG5cclxuICAgIGRlZmF1bHRzID0ge1xyXG4gICAgICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgICAgIGNhbnZhc1dpZHRoOiBudWxsLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodDogbnVsbCxcclxuICAgICAgICBuYkNyYXRlczogMixcclxuICAgICAgICByZWNvcmRzUGVyQ3JhdGU6IDI0LFxyXG4gICAgICAgIGxpZ2h0SW50ZW5zaXR5OiAxLFxyXG4gICAgICAgIGNhbWVyYU1vdXNlTW92ZTogdHJ1ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IDB4MTExMTExLFxyXG4gICAgICAgIHNsZWV2ZUNvbG9yOiAweDBkMDcwMixcclxuICAgICAgICBzbGVldmVNYXNrVGV4dHVyZTogJ2ltZy9zbGVldmUucG5nJyxcclxuICAgICAgICBjcmF0ZVRleHR1cmU6ICdpbWcvd29vZC5qcGcnLFxyXG4gICAgICAgIGNsb3NlSW5mb1BhbmVsT25DbGljazogdHJ1ZSxcclxuICAgICAgICBjbG9zZUluZm9QYW5lbE9uU2Nyb2xsOiB0cnVlLFxyXG4gICAgICAgIGluZm9QYW5lbE9wYWNpdHk6IDAuOSxcclxuICAgICAgICBwb3N0cHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBibHVyQW1vdW50OiAwLjQsXHJcbiAgICAgICAgdXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplOiB0cnVlLFxyXG4gICAgICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBvbkluZm9QYW5lbENsb3NlZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgb25Mb2FkaW5nRW5kOiBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICByb290Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlcicsXHJcbiAgICAgICAgICAgIGNhbnZhc0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItY2FudmFzJyxcclxuICAgICAgICAgICAgbG9hZGluZ0NvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItbG9hZGluZycsXHJcbiAgICAgICAgICAgIGluZm9Db250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWluZm8nLFxyXG4gICAgICAgICAgICB0aXRsZUNvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLXRpdGxlJyxcclxuICAgICAgICAgICAgYXJ0aXN0Q29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtYXJ0aXN0JyxcclxuICAgICAgICAgICAgY292ZXJDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC1jb3ZlcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnN0YW50czoge1xyXG4gICAgICAgICAgICByZWNvcmRNb3ZlVGltZTogMTAwMCxcclxuICAgICAgICAgICAgY2FtZXJhTW92ZVRpbWU6IDgwMCxcclxuICAgICAgICAgICAgaW5mb09wZW5UaW1lOiA4MDAsXHJcbiAgICAgICAgICAgIHJlY29yZEJhc2VZOiA1LFxyXG4gICAgICAgICAgICByZWNvcmRTaG93blk6IDI1LFxyXG4gICAgICAgICAgICByZWNvcmRGbGlwcGVkWTogMTEwLFxyXG4gICAgICAgICAgICB0YXJnZXRCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IC0yMCxcclxuICAgICAgICAgICAgICAgIHk6IDEwLFxyXG4gICAgICAgICAgICAgICAgejogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFCYXNlUG9zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIHg6IDI4MCxcclxuICAgICAgICAgICAgICAgIHk6IDIwMCxcclxuICAgICAgICAgICAgICAgIHo6IDE4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFGb2N1c1Bvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAxNjAsXHJcbiAgICAgICAgICAgICAgICB5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB6OiA4NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFk6IDAuMDcsXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdXNlTW92ZVNwZWVkWjogMC4wMyxcclxuICAgICAgICAgICAgZ3JhYlNlbnNpdGl2aXR5OiA2XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIENMQVNTRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgUmVjb3JkIENsYXNzICA9PT09PT09PT09Ki9cclxuXHJcbnZhciBSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jcmF0ZUlkID0gY3JhdGVJZDtcclxuICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdvdXQnO1xyXG4gICAgdGhpcy5yZWNvcmRYUG9zID0gLTYyICsgKCAxMzUgLyBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApICogcG9zO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMTAwLCAxLjUsIDEwMCwgMSwgMSwgMSApLCBuZXcgVEhSRUUuTWVzaEZhY2VNYXRlcmlhbCggZ2V0UmVjb3JkTWF0ZXJpYWwoIG51bGwsIGZhbHNlICkgKSApO1xyXG4gICAgdGhpcy5tZXNoLmdlb21ldHJ5LmFwcGx5TWF0cml4KCBuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VUcmFuc2xhdGlvbiggNTAsIDAsIDAgKSApO1xyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnNldCggdGhpcy5yZWNvcmRYUG9zLCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWSwgMCApO1xyXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIHRoaXMubWVzaC5yZWNvcmRJZCA9IGlkO1xyXG4gICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICB0aGlzLnNldFVuYWN0aXZlKCk7XHJcbiAgICB0aGlzLnB1c2hSZWNvcmQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggXCJSZWNvcmQgbsKwXCIsIHRoaXMuaWQsXHJcbiAgICAgICAgXCJjcmF0ZUlkID1cIiwgdGhpcy5jcmF0ZUlkLFxyXG4gICAgICAgIFwicG9zID1cIiwgdGhpcy5wb3MgKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLm1lc2gudmlzaWJsZSA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRVbmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnNob3dSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAnc2hvd24nICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3Nob3duJztcclxuICAgICAgICB0aGlzLmFic29sdXRlUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKCB0aGlzLm1lc2gubWF0cml4V29ybGQgKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZFNob3duWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMlxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgICAgICB5OiA1MCArIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZFNob3duWSxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCBjYW1lcmEucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56ICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1c2hSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9ICdwdXNoZWQnICkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3B1c2hlZCc7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRCYXNlWVxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB6OiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyA3XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLnB1bGxSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCB0aGlzLnN0YXRlICE9PSAncHVsbGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdWxsZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgLSBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5mbGlwUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSAnZmxpcHBlZCc7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRGbGlwcGVkWVxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyA0IClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogTWF0aC5QSVxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkRmxpcHBlZFkgKyA1MCxcclxuICAgICAgICAgICAgejogdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnpcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAub25Db21wbGV0ZSggZG9uZSApO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zICsgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi54ICsgODAsXHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueSAtIDUwLFxyXG4gICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcEJhY2tSZWNvcmQgPSBmdW5jdGlvbiAoIGRvbmUgLCBub0NhbWVyYVR3ZWVuICkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSA9PT0gJ2ZsaXBwZWQnICkge1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gMiApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KClcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICAgICAgaWYgKCFub0NhbWVyYVR3ZWVuKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBCQVNFIE1FVEhPRFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGV4dGVuZCA9IGZ1bmN0aW9uICggZGVmYXVsdHMsIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGtleSBpbiBvcHRpb25zICkge1xyXG5cclxuICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggb3B0aW9ucywga2V5ICkgKSB7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0c1sga2V5IF0gPSBvcHRpb25zWyBrZXkgXTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWZhdWx0cztcclxufTtcclxuXHJcbnZhciBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggZG9SZW5kZXIgKSB7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG5cclxuICAgICAgICBpZiAoIG9wdGlvbnMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBUV0VFTi51cGRhdGUoKTtcclxuICAgIHVwZGF0ZVNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLmNhbWVyYU1vdXNlTW92ZSApIHtcclxuXHJcbiAgICAgICAgdGFyZ2V0Q2FtZXJhUG9zLnggPSAoIG1vdXNlLnggLyBjYW52YXNXaWR0aCAtIDAuNSApICogMC4yNTsgLy8gaW52ZXJzZSBheGlzP1xyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy55ID0gKCBtb3VzZS55IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICs9IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZVNwZWVkWSAqICggdGFyZ2V0Q2FtZXJhUG9zLnggLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnkgKTtcclxuICAgICAgICByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKz0gb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW91c2VNb3ZlU3BlZWRaICogKCB0YXJnZXRDYW1lcmFQb3MueSAtIHJvb3RDb250YWluZXIucm90YXRpb24ueiApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW1lcmEubG9va0F0KCB0YXJnZXQucG9zaXRpb24gKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIHNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBkZXB0aE1hdGVyaWFsO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSwgZGVwdGhUYXJnZXQgKTtcclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuICAgICAgICBjb21wb3Nlci5yZW5kZXIoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4gKiBMb2FkaW5nIG1ldGhvZHNcclxuICovXHJcbnZhciB1bmxvYWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIHJlY29yZHNbIGkgXS5kYXRhID0gbnVsbDtcclxuICAgICAgICByZWNvcmRzWyBpIF0uc2V0VW5hY3RpdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZGVkUmVjb3JkcyA9IDA7XHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXTtcclxuXHJcbn07XHJcblxyXG5cclxudmFyIGxvYWRSZWNvcmRzID0gZnVuY3Rpb24gKCByZWNvcmRzRGF0YSwgc2h1ZmZsZUJlZm9yZUxvYWRpbmcsIGRvbmUgKSB7XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCggdHJ1ZSApO1xyXG5cclxuICAgIHNob3dMb2FkaW5nKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICggbG9hZGVkUmVjb3JkcyA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB1bmxvYWRSZWNvcmRzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBzaHVmZmxlQmVmb3JlTG9hZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHJlY29yZHNEYXRhID0gc2h1ZmZsZSggcmVjb3Jkc0RhdGEgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aCAmJiBpIDwgcmVjb3Jkc0RhdGEubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IHJlY29yZHNEYXRhWyBpIF07XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5zZXRBY3RpdmUoKTtcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLm1lc2gubWF0ZXJpYWwubWF0ZXJpYWxzID0gZ2V0UmVjb3JkTWF0ZXJpYWwoIHJlY29yZHNEYXRhWyBpIF0uY292ZXIsIHJlY29yZHNEYXRhWyBpIF0uaGFzU2xlZXZlICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2h5ID8/XHJcbiAgICAgICAgLy8gbG9hZGVkUmVjb3JkcyA9IHJlY29yZHNEYXRhLmxlbmd0aCA8IHJlY29yZHMubGVuZ3RoID8gcmVjb3Jkc0RhdGEubGVuZ3RoIDogcmVjb3Jkcy5sZW5ndGg7XHJcbiAgICAgICAgbG9hZGVkUmVjb3JkcyA9IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIHJlY29yZHNEYXRhTGlzdCA9IHJlY29yZHNEYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGhpZGVMb2FkaW5nKCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApO1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uTG9hZGluZ0VuZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb25lICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgMjAwMCApO1xyXG4gICAgfSApO1xyXG59O1xyXG5cclxudmFyIHNodWZmbGVSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzaHVmZmxlZFJlY29yZHMgPSByZWNvcmRzRGF0YUxpc3Q7XHJcbiAgICBzaHVmZmxlZFJlY29yZHMgPSBzaHVmZmxlKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuICAgIGxvYWRSZWNvcmRzKCBzaHVmZmxlZFJlY29yZHMgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBSRUNPUkRTIFNFTEVDVElPTiBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmxpcFNlbGVjdGVkUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApIHtcclxuXHJcbiAgICAgICAgZmlsbEluZm9QYW5lbCggcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXSApO1xyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5pbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBSZWNvcmQoIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ29wZW5lZCc7XHJcblxyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5vbkluZm9QYW5lbE9wZW5lZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIGluZm9Db250YWluZXJFbGVtZW50LCBvcHRpb25zLmluZm9QYW5lbE9wYWNpdHkgKTtcclxuXHJcbiAgICAgICAgfSwgMzAwICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uIChmb3JjZSkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICkge1xyXG5cclxuICAgICAgICBmYWRlT3V0KCBpbmZvQ29udGFpbmVyRWxlbWVudCApO1xyXG4gICAgICAgIGluZm9QYW5lbFN0YXRlID0gJ2Nsb3NpbmcnO1xyXG5cclxuICAgICAgICByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmZsaXBCYWNrUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zZWQnO1xyXG4gICAgICAgICAgICBvcHRpb25zLm9uSW5mb1BhbmVsQ2xvc2VkKCk7XHJcblxyXG4gICAgICAgIH0sIGZvcmNlICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgdXBkYXRlU2hvd25SZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgJiYgc2hvd25SZWNvcmQgIT0gc2VsZWN0ZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZVNob3duUmVjb3JkLi4nKTtcclxuICAgICAgICBzaG93blJlY29yZCA9IHNlbGVjdGVkUmVjb3JkO1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcmVjb3JkSWQgPSAwOyByZWNvcmRJZCA8IGxvYWRlZFJlY29yZHM7IHJlY29yZElkKysgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0ucHVzaFJlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggcmVjb3JkSWQgPiBzZWxlY3RlZFJlY29yZCAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPiByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQgPCAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0uY3JhdGVJZCAqIG9wdGlvbnMucmVjb3Jkc1BlckNyYXRlICkgKyBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1bGxSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID09IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY29yZHNbIHJlY29yZElkIF0uc2hvd1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcmVzZXRTaG93blJlY29yZCA9IGZ1bmN0aW9uICggZm9yY2UgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgIWZvcmNlICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgIT09ICdvcGVuaW5nJyAmJiBpbmZvUGFuZWxTdGF0ZSAhPT0gJ2Nsb3NpbmcnICkge1xyXG5cclxuICAgICAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuICAgICAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gLTE7XHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHg6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHNlbGVjdFByZXZSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldFByZXZBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuICAgIFxyXG59O1xyXG5cclxudmFyIHNlbGVjdE5leHRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2VsZWN0UmVjb3JkKGdldE5leHRBdmFpbGFibGVSZWNvcmQoc2VsZWN0ZWRSZWNvcmQpKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UHJldkF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA8IGxvYWRlZFJlY29yZHMgLSAxICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gZnJvbVJlY29yZCArIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldFByZXZBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBnZXROZXh0QXZhaWxhYmxlUmVjb3JkID0gZnVuY3Rpb24gKGZyb21SZWNvcmQpIHtcclxuXHJcbiAgICBpZiAoIGZyb21SZWNvcmQgPT0gLTEgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBmcm9tUmVjb3JkID4gMCApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgLSAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIGZyb21SZWNvcmQgXS5hY3RpdmUgPyBmcm9tUmVjb3JkIDogZ2V0TmV4dEF2YWlsYWJsZVJlY29yZChmcm9tUmVjb3JkKTtcclxuXHJcbn07XHJcblxyXG52YXIgbmF2aWdhdGVSZWNvcmRzID0gZnVuY3Rpb24gKCBkaXJlY3Rpb24gKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIGlmICggZGlyZWN0aW9uID09PSAncHJldicgKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBzZWxlY3ROZXh0UmVjb3JkKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgb3B0aW9ucy5jbG9zZUluZm9QYW5lbE9uU2Nyb2xsICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBzY3JvbGxSZWNvcmRzID0gZnVuY3Rpb24gKCBiYXNlWSwgb2xkRGVsdGEgKSB7XHJcblxyXG4gICAgb2xkRGVsdGEgPSAhb2xkRGVsdGEgfHwgTWF0aC5hYnMoIG9sZERlbHRhICkgPiAwLjUgPyAwLjUgOiBNYXRoLmFicyggb2xkRGVsdGEgKTtcclxuICAgIHZhciBpbnZlcnNlRGVsdGEgPSAxIC0gb2xkRGVsdGE7XHJcbiAgICB2YXIgc2Nyb2xsU3BlZWQgPSBpbnZlcnNlRGVsdGEgKiBpbnZlcnNlRGVsdGEgKiBpbnZlcnNlRGVsdGEgKiAzMDA7XHJcblxyXG4gICAgc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdncmFiJyk7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gKCBiYXNlWSAtIG1vdXNlLnkgKSAvIGNhbnZhc0hlaWdodDtcclxuICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTkVYVCBSRUNPUkQgXCIgKyBkZWx0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xyXG4gICAgICAgICAgICBzZWxlY3RQcmV2UmVjb3JkKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJQUkVWIFJFQ09SRCBcIiArIGRlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggYmFzZVksIGRlbHRhICk7XHJcbiAgICB9LCBzY3JvbGxTcGVlZCApO1xyXG5cclxufTtcclxuXHJcbnZhciBmaWxsSW5mb1BhbmVsID0gZnVuY3Rpb24gKCByZWNvcmQgKSB7XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS50aXRsZSApIHtcclxuXHJcbiAgICAgICAgdGl0bGVJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS50aXRsZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS5hcnRpc3QgKSB7XHJcblxyXG4gICAgICAgIGFydGlzdEluZm9FbGVtZW50LmlubmVySFRNTCA9IHJlY29yZC5kYXRhLmFydGlzdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCByZWNvcmQuZGF0YS5jb3ZlciApIHtcclxuXHJcbiAgICAgICAgY292ZXJJbmZvRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyByZWNvcmQuZGF0YS5jb3ZlciArICcpJztcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIEVWRU5UUyBIQU5ETElORyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgb25Nb3VzZU1vdmVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICB2YXIgbV9wb3N4ID0gMCxcclxuICAgICAgICBtX3Bvc3kgPSAwLFxyXG4gICAgICAgIGVfcG9zeCA9IDAsXHJcbiAgICAgICAgZV9wb3N5ID0gMCxcclxuICAgICAgICBvYmogPSB0aGlzO1xyXG5cclxuICAgIC8vZ2V0IG1vdXNlIHBvc2l0aW9uIG9uIGRvY3VtZW50IGNyb3NzYnJvd3NlclxyXG4gICAgaWYgKCAhZSApIHtcclxuXHJcbiAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBlLnBhZ2VYIHx8IGUucGFnZVkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUucGFnZVg7XHJcbiAgICAgICAgbV9wb3N5ID0gZS5wYWdlWTtcclxuICAgIH0gZWxzZSBpZiAoIGUuY2xpZW50WCB8fCBlLmNsaWVudFkgKSB7XHJcblxyXG4gICAgICAgIG1fcG9zeCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIG1fcG9zeSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgcGFyZW50IGVsZW1lbnQgcG9zaXRpb24gaW4gZG9jdW1lbnRcclxuICAgIGlmICggb2JqLm9mZnNldFBhcmVudCApIHtcclxuXHJcbiAgICAgICAgZG8ge1xyXG5cclxuICAgICAgICAgICAgZV9wb3N4ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICBlX3Bvc3kgKz0gb2JqLm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIG9iaiA9IG9iai5vZmZzZXRQYXJlbnQgKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vdXNlIHBvc2l0aW9uIG1pbnVzIGVsbSBwb3NpdGlvbiBpcyBtb3VzZXBvc2l0aW9uIHJlbGF0aXZlIHRvIGVsZW1lbnQ6XHJcbiAgICBtb3VzZS54ID0gbV9wb3N4IC0gZV9wb3N4O1xyXG4gICAgbW91c2UueSA9IG1fcG9zeSAtIGVfcG9zeTtcclxufTtcclxuXHJcbnZhciBvblNjcm9sbEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuXHJcbiAgICBpZiAoIHdoZWVsRGlyZWN0aW9uKCBlICkgPCAwICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICdwcmV2JyApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ25leHQnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbnZhciBvbkNsaWNrRXZlbnQgPSBmdW5jdGlvbiAoIG1vdXNlRG93blBvcyApIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvclBvcyA9IHtcclxuICAgICAgICAgICAgeDogKCAoICggbW91c2VEb3duUG9zLnggLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldExlZnQgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC53aWR0aCApICkgKiAyIC0gMSApLFxyXG4gICAgICAgICAgICB5OiAoIC0oICggbW91c2VEb3duUG9zLnkgLSByZW5kZXJlci5kb21FbGVtZW50Lm9mZnNldFRvcCApIC8gKCByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodCApICkgKiAyICsgMSApLFxyXG4gICAgICAgICAgICB6OiAwLjVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoIHZlY3RvclBvcy54LCB2ZWN0b3JQb3MueSwgdmVjdG9yUG9zLnogKTtcclxuICAgICAgICB2ZWN0b3IudW5wcm9qZWN0KCBjYW1lcmEgKTtcclxuICAgICAgICB2YXIgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlciggY2FtZXJhLnBvc2l0aW9uLCB2ZWN0b3Iuc3ViKCBjYW1lcmEucG9zaXRpb24gKS5ub3JtYWxpemUoKSApO1xyXG4gICAgICAgIHZhciBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoIGNyYXRlc0NvbnRhaW5lci5jaGlsZHJlbiwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBJZiBpbnRlcnNlY3Qgc29tZXRoaW5nXHJcbiAgICAgICAgaWYgKCBpbnRlcnNlY3RzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpY2tlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3QgdmlzaWJsZSByZWNvcmQgaW50ZXJzZWN0ZWRcclxuICAgICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgaW50ZXJzZWN0cy5sZW5ndGg7IGkrKyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBpbnRlcmNlcHQgYSBtZXNoIHdoaWNoIGlzIG5vdCBhIHJlY29yZCwgYnJlYWtcclxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mKGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQpID09PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggaW50ZXJzZWN0c1sgaSBdLm9iamVjdC52aXNpYmxlICYmIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFJlY29yZCA9IHJlY29yZHNbIGludGVyc2VjdHNbIGkgXS5vYmplY3QucmVjb3JkSWQgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgIGlmICggY2xpY2tlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdGVkUmVjb3JkID09PSBjbGlja2VkUmVjb3JkLmlkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RSZWNvcmQoIGNsaWNrZWRSZWNvcmQuaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbGwgaW50ZXJzZWN0ZWQgcmVjb3JkcyBhcmUgbm90IHZpc2libGVzXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5vIHJlY29yZCBoYXMgYmVlbiBpbnRlcnNlY3RlZFxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25Nb3VzZURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjbGVhckludGVydmFsKCBzY3JvbGxSZWNvcmRzVGltZW91dCApO1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBzY3JvbGxSZWNvcmRzKCBtb3VzZS55ICk7XHJcbiAgICAgICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgICAgICB4OiBtb3VzZS54LFxyXG4gICAgICAgICAgICB5OiBtb3VzZS55XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgJiYgb3B0aW9ucy5jbG9zZUluZm9QYW5lbE9uQ2xpY2sgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25Nb3VzZVVwRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ3JhYicpO1xyXG5cclxuICAgIGlmICggY29vcmRzRXF1YWxzQXBwcm94KCBtb3VzZURvd25Qb3MsIG1vdXNlLCBvcHRpb25zLmNvbnN0YW50cy5ncmFiU2Vuc2l0aXZpdHkgKSApIHtcclxuXHJcbiAgICAgICAgb25DbGlja0V2ZW50KCBtb3VzZURvd25Qb3MgKTtcclxuXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIG9uS2V5RG93bkV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ICkge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSA0MCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb25XaW5kb3dSZXNpemVFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG4gICAgY2FtZXJhLmFzcGVjdCA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgICBVSSBNRVRIT0RTICAgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZUluKCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCwgMSwgZG9uZSApO1xyXG5cclxufTtcclxuXHJcbnZhciBoaWRlTG9hZGluZyA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICBmYWRlT3V0KCBsb2FkaW5nQ29udGFpbmVyRWxlbWVudCwgZG9uZSApO1xyXG5cclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgIElOSVRJQUxJU0FUSU9OICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIGluaXRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBzY2VuZSwgcmVuZGVyZXIsIGNhbWVyYSwuLi5cclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigge1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZVxyXG4gICAgfSApO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcImNvbnRleHRcIjtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIG9wdGlvbnMuYmFja2dyb3VuZENvbG9yLCAxICk7XHJcblxyXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA0NSwgY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQsIDAuMSwgMjAwMDAgKTtcclxuICAgIGNhbWVyYS5mb2NhbExlbmd0aCA9IDQ1O1xyXG4gICAgY2FtZXJhLmZyYW1lU2l6ZSA9IDMyO1xyXG4gICAgY2FtZXJhLnNldExlbnMoIGNhbWVyYS5mb2NhbExlbmd0aCwgY2FtZXJhLmZyYW1lU2l6ZSApO1xyXG5cclxuICAgIHRhcmdldCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgLy8gICAgICAgIHRhcmdldCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMTAsIDEwLCAxLCAxLCAxKSk7XHJcbiAgICAvLyAgICAgICAgc2NlbmUuYWRkKHRhcmdldCk7XHJcbiAgICBjYW1lcmEubG9va0F0KCB0YXJnZXQucG9zaXRpb24gKTtcclxuXHJcbiAgICB2YXIgd29vZF90ZXh0dXJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSggb3B0aW9ucy5jcmF0ZVRleHR1cmUgKTtcclxuICAgIHdvb2RfdGV4dHVyZS5hbmlzb3Ryb3B5ID0gcmVuZGVyZXIuZ2V0TWF4QW5pc290cm9weSgpO1xyXG4gICAgd29vZF9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgbWFwOiB3b29kX3RleHR1cmVcclxuICAgIH0gKTtcclxuXHJcbiAgICByb290Q29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBjcmF0ZXNDb250YWluZXIgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIHNjZW5lLmFkZCggcm9vdENvbnRhaW5lciApO1xyXG4gICAgcm9vdENvbnRhaW5lci5hZGQoIGNyYXRlc0NvbnRhaW5lciApO1xyXG5cclxuICAgIGluaXRDcmF0ZXMoKTtcclxuICAgIGluaXRSZWNvcmRzKCk7XHJcblxyXG4gICAgbGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAxLjEgKTtcclxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCggMzAwLCA4MCwgMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsaWdodCApO1xyXG5cclxuICAgIGxlZnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KCAweEZGRkZGRiwgb3B0aW9ucy5saWdodEludGVuc2l0eSAqIDAuNiApO1xyXG4gICAgbGVmdExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAxMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIGxlZnRMaWdodCApO1xyXG5cclxuICAgIHJpZ2h0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIHJpZ2h0TGlnaHQucG9zaXRpb24uc2V0KCAtMTAwLCAzMDAsIC0xMDAwICk7XHJcbiAgICBzY2VuZS5hZGQoIHJpZ2h0TGlnaHQgKTtcclxuXHJcbiAgICBpbml0UG9zdFByb2Nlc3NpbmcoKTtcclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvblNjcm9sbEV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd25FdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duRXZlbnQsIGZhbHNlICk7IFxyXG5cclxuICAgIGlmICggb3B0aW9ucy51cGRhdGVDYW52YXNTaXplT25XaW5kb3dSZXNpemUgKSB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemVFdmVudCwgZmFsc2UgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gRE9NIHNldHVwXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuXHJcbiAgICBzZXRDYW52YXNEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMuZGVidWcgKSB7XHJcblxyXG4gICAgICAgIGluaXREZWJ1ZygpO1xyXG4gICAgICAgIGluaXRHVUkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG59O1xyXG5cclxudmFyIGluaXRQb3N0UHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkZXB0aFNoYWRlciA9IFRIUkVFLlNoYWRlckxpYi5kZXB0aFJHQkE7XHJcbiAgICBkZXB0aFVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggZGVwdGhTaGFkZXIudW5pZm9ybXMgKTtcclxuXHJcbiAgICBkZXB0aE1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGRlcHRoU2hhZGVyLmZyYWdtZW50U2hhZGVyLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZGVwdGhTaGFkZXIudmVydGV4U2hhZGVyLFxyXG4gICAgICAgIHVuaWZvcm1zOiBkZXB0aFVuaWZvcm1zXHJcbiAgICB9ICk7XHJcbiAgICBkZXB0aE1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTm9CbGVuZGluZztcclxuXHJcbiAgICBkZXB0aFRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwge1xyXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTmVhcmVzdEZpbHRlcixcclxuICAgICAgICBtYWdGaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgZm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0XHJcbiAgICB9ICk7XHJcblxyXG4gICAgY29tcG9zZXIgPSBuZXcgVEhSRUUuRWZmZWN0Q29tcG9zZXIoIHJlbmRlcmVyICk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBuZXcgVEhSRUUuUmVuZGVyUGFzcyggc2NlbmUsIGNhbWVyYSApICk7XHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRGVwdGggb2YgZmllbGQgc2hhZGVyICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkb2YgPSBuZXcgVEhSRUUuU2hhZGVyUGFzcyggVEhSRUUuRG9GU2hhZGVyICk7XHJcbiAgICBkb2YudW5pZm9ybXMudERlcHRoLnZhbHVlID0gZGVwdGhUYXJnZXQ7XHJcbiAgICBkb2YudW5pZm9ybXMuc2l6ZS52YWx1ZS5zZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGRvZi51bmlmb3Jtcy50ZXh0ZWwudmFsdWUuc2V0KCAxLjAgLyBjYW52YXNXaWR0aCwgMS4wIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG4gICAgLy9tYWtlIHN1cmUgdGhhdCB0aGVzZSB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSBmb3IgeW91ciBjYW1lcmEsIG90aGVyd2lzZSBkaXN0YW5jZXMgd2lsbCBiZSB3cm9uZy5cclxuICAgIGRvZi51bmlmb3Jtcy56bmVhci52YWx1ZSA9IGNhbWVyYS5uZWFyOyAvL2NhbWVyYSBjbGlwcGluZyBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLnpmYXIudmFsdWUgPSBjYW1lcmEuZmFyOyAvL2NhbWVyYSBjbGlwcGluZyBlbmRcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxEZXB0aC52YWx1ZSA9IDU7IC8vZm9jYWwgZGlzdGFuY2UgdmFsdWUgaW4gbWV0ZXJzLCBidXQgeW91IG1heSB1c2UgYXV0b2ZvY3VzIG9wdGlvbiBiZWxvd1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoOyAvL2ZvY2FsIGxlbmd0aCBpbiBtbVxyXG4gICAgZG9mLnVuaWZvcm1zLmZzdG9wLnZhbHVlID0gOC4wOyAvL2Ytc3RvcCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLnNob3dGb2N1cy52YWx1ZSA9IGZhbHNlOyAvL3Nob3cgZGVidWcgZm9jdXMgcG9pbnQgYW5kIGZvY2FsIHJhbmdlIChvcmFuZ2UgPSBmb2NhbCBwb2ludCwgYmx1ZSA9IGZvY2FsIHJhbmdlKVxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YudmFsdWUgPSB0cnVlOyAvL21hbnVhbCBkb2YgY2FsY3VsYXRpb25cclxuICAgIGRvZi51bmlmb3Jtcy5uZG9mc3RhcnQudmFsdWUgPSAxMTsgLy9uZWFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMubmRvZmRpc3QudmFsdWUgPSA4MDsgLy9uZWFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgICAgXHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZnN0YXJ0LnZhbHVlID0gMDsgLy9mYXIgZG9mIGJsdXIgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy5mZG9mZGlzdC52YWx1ZSA9IDEwMDsgLy9mYXIgZG9mIGJsdXIgZmFsbG9mZiBkaXN0YW5jZSBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuQ29DLnZhbHVlID0gMC4wMzsgLy9jaXJjbGUgb2YgY29uZnVzaW9uIHNpemUgaW4gbW0gKDM1bW0gZmlsbSA9IDAuMDNtbSkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcudmFsdWUgPSBmYWxzZTsgLy91c2Ugb3B0aWNhbCBsZW5zIHZpZ25ldHRpbmc/XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmF1dG9mb2N1cy52YWx1ZSA9IHRydWU7IC8vdXNlIGF1dG9mb2N1cyBpbiBzaGFkZXI/IGRpc2FibGUgaWYgeW91IHVzZSBleHRlcm5hbCBmb2NhbERlcHRoIHZhbHVlXHJcbiAgICBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUuc2V0KCAwLjM1LCAwLjM1ICk7IC8vIGF1dG9mb2N1cyBwb2ludCBvbiBzY3JlZW4gKDAuMCwwLjAgLSBsZWZ0IGxvd2VyIGNvcm5lciwgMS4wLDEuMCAtIHVwcGVyIHJpZ2h0KSBcclxuICAgIGRvZi51bmlmb3Jtcy5tYXhibHVyLnZhbHVlID0gb3B0aW9ucy5ibHVyQW1vdW50OyAvL2NsYW1wIHZhbHVlIG9mIG1heCBibHVyICgwLjAgPSBubyBibHVyLDEuMCBkZWZhdWx0KSAgICBcclxuXHJcbiAgICBkb2YudW5pZm9ybXMudGhyZXNob2xkLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgdGhyZXNob2xkO1xyXG4gICAgZG9mLnVuaWZvcm1zLmdhaW4udmFsdWUgPSAwOyAvL2hpZ2hsaWdodCBnYWluO1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5iaWFzLnZhbHVlID0gMDsgLy9ib2tlaCBlZGdlIGJpYXMgICAgICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZyaW5nZS52YWx1ZSA9IDA7IC8vYm9rZWggY2hyb21hdGljIGFiZXJyYXRpb24vZnJpbmdpbmdcclxuXHJcbiAgICBGWEFBID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkZYQUFTaGFkZXIgKTtcclxuXHJcbiAgICBGWEFBLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KCAxIC8gY2FudmFzV2lkdGgsIDEgLyBjYW52YXNIZWlnaHQgKTtcclxuICAgIEZYQUEucmVuZGVyVG9TY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIGRvZiApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggRlhBQSApO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0RGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbUVsZW1lbnQgKTtcclxuXHJcbiAgICB2YXIgZGVidWcgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMCwgMjAsIDIwLCAxLCAxLCAxICkgKTtcclxuICAgIGRlYnVnLnBvc2l0aW9uLnNldChcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi54LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnksXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24uelxyXG4gICAgKTtcclxuICAgIHNjZW5lLmFkZCggZGVidWcgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdEdVSSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgY2FtZXJhRm9sZGVyLFxyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLFxyXG4gICAgICAgIGRvZkZvbGRlcixcclxuICAgICAgICBfbGFzdDtcclxuXHJcbiAgICBndWkgPSBuZXcgZGF0LkdVSSgpO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyApIHtcclxuXHJcbiAgICAgICAgY2FtZXJhRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0NhbWVyYScgKTtcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCA9IGNhbWVyYUZvbGRlci5hZGQoIGNhbWVyYSwgJ2ZvY2FsTGVuZ3RoJywgMjgsIDIwMCApLm5hbWUoICdGb2NhbCBMZW5ndGgnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGgub25DaGFuZ2UoIHVwZGF0ZUNhbWVyYSApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIgPSBndWkuYWRkRm9sZGVyKCAnRGVwdGggb2YgRmllbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgsICd2YWx1ZScsIDAsIDEwICkubmFtZSggJ0ZvY2FsIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mc3RvcCwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnRiBTdG9wJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYXhibHVyLCAndmFsdWUnLCAwLCAzICkubmFtZSggJ21heCBibHVyJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuc2hvd0ZvY3VzLCAndmFsdWUnICkubmFtZSggJ1Nob3cgRm9jYWwgUmFuZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5tYW51YWxkb2YsICd2YWx1ZScgKS5uYW1lKCAnTWFudWFsIERvRicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICduZWFyIGZhbGxvZmYnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ2ZhciBzdGFydCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZmRvZmRpc3QsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgZmFsbG9mZicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLkNvQywgJ3ZhbHVlJywgMCwgMC4xICkuc3RlcCggMC4wMDEgKS5uYW1lKCAnY2lyY2xlIG9mIGNvbmZ1c2lvbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25ldHRpbmcsICd2YWx1ZScgKS5uYW1lKCAnVmlnbmV0dGluZycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbm91dCwgJ3ZhbHVlJywgMCwgMiApLm5hbWUoICdvdXRlciBib3JkZXInICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25pbiwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnaW5uZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZmFkZSwgJ3ZhbHVlJywgMCwgMjIgKS5uYW1lKCAnZmFkZSBhdCcgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmF1dG9mb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdBdXRvZm9jdXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneCcsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZm9jdXMudmFsdWUsICd5JywgMCwgMSApLm5hbWUoICdmb2N1cyB5JyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudGhyZXNob2xkLCAndmFsdWUnLCAwLCAxICkuc3RlcCggMC4wMSApLm5hbWUoICd0aHJlc2hvbGQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmdhaW4sICd2YWx1ZScsIDAsIDEwMCApLm5hbWUoICdnYWluJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuYmlhcywgJ3ZhbHVlJywgMCwgNCApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnYmlhcycgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnJpbmdlLCAndmFsdWUnLCAwLCA1ICkuc3RlcCggMC4wMSApLm5hbWUoICdmcmluZ2UnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5ub2lzZSwgJ3ZhbHVlJyApLm5hbWUoICdVc2UgTm9pc2UnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5hbW91bnQsICd2YWx1ZScsIDAsIDAuMDAxICkuc3RlcCggMC4wMDAxICkubmFtZSggJ2RpdGhlcicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmRlcHRoYmx1ciwgJ3ZhbHVlJyApLm5hbWUoICdCbHVyIERlcHRoJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kYnNpemUsICd2YWx1ZScsIDAsIDUgKS5uYW1lKCAnYmx1ciBzaXplJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBndWkuY2xvc2UoKTtcclxuXHJcbn07XHJcblxyXG52YXIgdXBkYXRlQ2FtZXJhID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICBkb2YudW5pZm9ybXMuZm9jYWxMZW5ndGgudmFsdWUgPSBjYW1lcmEuZm9jYWxMZW5ndGg7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRDcmF0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgb3B0aW9ucy5uYkNyYXRlczsgY3JhdGVJZCsrICkge1xyXG4gICAgICAgIHZhciBjcmF0ZSA9IGNyZWF0ZUNyYXRlKCBjcmF0ZUlkICk7XHJcbiAgICAgICAgY3JhdGVzQ29udGFpbmVyLmFkZCggY3JhdGUgKTtcclxuICAgIH1cclxuICAgIGNyYXRlc0NvbnRhaW5lci5wb3NpdGlvbi56ID0gLSggMTEwIC0gKCAxMTAgKiBvcHRpb25zLm5iQ3JhdGVzICkgKSAvIDI7XHJcblxyXG59O1xyXG5cclxudmFyIGNyZWF0ZUNyYXRlID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcbiAgICB2YXIgYm94X2JvdHRvbSA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYm90dG9tICk7XHJcblxyXG4gICAgdmFyIGJveF9sZWZ0ID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAwLCAxMCwgODAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgYm94X2xlZnQucG9zaXRpb24uc2V0KCAwLCAzNSwgLTU1ICk7XHJcbiAgICBib3hfbGVmdC5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfbGVmdCApO1xyXG5cclxuICAgIGlmICggaWQgPT09IDAgKSB7XHJcbiAgICAgICAgdmFyIGJveF9yaWdodCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgICAgICBib3hfcmlnaHQucG9zaXRpb24uc2V0KCAwLCAzNSwgNTUgKTtcclxuICAgICAgICBib3hfcmlnaHQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9yaWdodCApO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBib3hfYmFjayA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDgwLCAxMCwgMTIwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9iYWNrLnBvc2l0aW9uLnNldCggLTEwNSwgMzUsIDAgKTtcclxuICAgIGJveF9iYWNrLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9iYWNrICk7XHJcblxyXG4gICAgdmFyIGJveF9mcm9udCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDQwLCAxMCwgMTAwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9mcm9udC5wb3NpdGlvbi5zZXQoIDk1LCAyNSwgMCApO1xyXG4gICAgYm94X2Zyb250LnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcclxuICAgIGNyYXRlc1sgaWQgXS5hZGQoIGJveF9mcm9udCApO1xyXG5cclxuICAgIGNyYXRlc1sgaWQgXS5wb3NpdGlvbi56ID0gLTExMCAqIGlkO1xyXG4gICAgcmV0dXJuIGNyYXRlc1sgaWQgXTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRSZWNvcmRJZCA9IDA7XHJcbiAgICBmb3IgKCB2YXIgY3JhdGVJZCA9IDA7IGNyYXRlSWQgPCBjcmF0ZXMubGVuZ3RoOyBjcmF0ZUlkKysgKSB7XHJcblxyXG4gICAgICAgIGZvciAoIHZhciBwb3MgPSAwOyBwb3MgPCBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZTsgcG9zKysgKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlY29yZCggY3VycmVudFJlY29yZElkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgICAgICAgICAgY3VycmVudFJlY29yZElkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uICggaWQsIGNyYXRlSWQsIHBvcyApIHtcclxuXHJcbiAgICB2YXIgcmVjb3JkID0gbmV3IFJlY29yZCggaWQsIGNyYXRlSWQsIHBvcyApO1xyXG4gICAgY3JhdGVzWyBjcmF0ZUlkIF0uYWRkKCByZWNvcmQubWVzaCApO1xyXG4gICAgcmVjb3Jkcy5wdXNoKCByZWNvcmQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZ2V0UmVjb3JkTWF0ZXJpYWwgPSBmdW5jdGlvbiAoIHNyYywgaGFzU2xlZXZlICkge1xyXG5cclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XHJcbiAgICBpbWcuc3JjID0gc3JjID8gc3JjIDogJyc7XHJcblxyXG4gICAgdmFyIGltZ1dpZHRoID0gNDAwLFxyXG4gICAgICAgIGltZ0hlaWdodCA9IDQwMCxcclxuICAgICAgICBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xyXG5cclxuICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcENhbnZhcy5oZWlnaHQgPSA0MDA7XHJcblxyXG4gICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSggbWFwQ2FudmFzICk7XHJcbiAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGVldmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgc2xlZXZlLnNyYyA9IG9wdGlvbnMuc2xlZXZlTWFza1RleHR1cmU7XHJcblxyXG4gICAgICAgICAgICBzbGVldmUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdHggPSBtYXBDYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggLWltZ1dpZHRoIC8gMiwgLWltZ0hlaWdodCAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMTMwLCAxMzAsIDEzNSwgMTM1ICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBzbGVldmUsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSggaW1nV2lkdGggLyAyLCBpbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5yb3RhdGUoIE1hdGguUEkgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoIGltZywgMCwgMCwgNDAwLCA0MDAgKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHNsZWV2ZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuXHJcbiAgICAgICAgY29sb3I6IG9wdGlvbnMuc2xlZXZlQ29sb3JcclxuXHJcbiAgICB9ICk7XHJcblxyXG4gICAgdmFyIG1hdGVyaWFscyA9IFtcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICBzbGVldmVNYXRlcmlhbCxcclxuICAgICAgICAvLyB0ZXh0dXJlXHJcbiAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHtcclxuICAgICAgICAgICAgY29sb3I6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBtYXA6IHRleHR1cmVcclxuICAgICAgICB9ICksXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWxcclxuICAgIF07XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxzO1xyXG5cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBVVElMUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciB3aGVlbERpc3RhbmNlID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICB2YXIgdyA9IGUud2hlZWxEZWx0YSxcclxuICAgICAgICBkID0gZS5kZXRhaWw7XHJcbiAgICBpZiAoIGQgKSB7XHJcblxyXG4gICAgICAgIGlmICggdyApIHJldHVybiB3IC8gZCAvIDQwICogZCA+IDAgPyAxIDogLTE7IC8vIE9wZXJhXHJcbiAgICAgICAgZWxzZSByZXR1cm4gLWQgLyAzOyAvLyBGaXJlZm94O1xyXG5cclxuICAgIH0gZWxzZSByZXR1cm4gdyAvIDEyMDsgLy8gSUUvU2FmYXJpL0Nocm9tZVxyXG59O1xyXG5cclxudmFyIHdoZWVsRGlyZWN0aW9uID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGlmICggIWUgKSBlID0gZXZlbnQ7XHJcbiAgICByZXR1cm4gKCBlLmRldGFpbCA8IDAgKSA/IDEgOiAoIGUud2hlZWxEZWx0YSA+IDAgKSA/IDEgOiAtMTtcclxuXHJcbn07XHJcblxyXG52YXIgY29vcmRzRXF1YWxzQXBwcm94ID0gZnVuY3Rpb24gKCBjb29yZDEsIGNvb3JkMiwgcmFuZ2UgKSB7XHJcblxyXG4gICAgcmV0dXJuICggTWF0aC5hYnMoIGNvb3JkMS54IC0gY29vcmQyLnggKSA8PSByYW5nZSApICYmICggTWF0aC5hYnMoIGNvb3JkMS55IC0gY29vcmQyLnkgKSA8PSByYW5nZSApO1xyXG5cclxufTtcclxuXHJcbnZhciBmYWRlT3V0ID0gZnVuY3Rpb24gKCBlbGVtZW50LCBkb25lICkge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5zdHlsZS5vcGFjaXR5IDw9IDAuMSApIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBpZiAoIGlzRnVuY3Rpb24oIGRvbmUgKSApIHtcclxuICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5IC09IDAuMTtcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZhZGVPdXQoIGVsZW1lbnQsIGRvbmUgKTtcclxuICAgICAgICB9LCAxMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZhZGVJbiA9IGZ1bmN0aW9uICggZWxlbWVudCwgZmFkZVRvLCBkb25lLCBvcCApIHtcclxuXHJcbiAgICBpZiAoICFlbGVtZW50LnN0eWxlLm9wYWNpdHkgfHwgZWxlbWVudC5zdHlsZS5vcGFjaXR5ICYmIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA8IGZhZGVUbyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgb3AgPSAwO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCAhZWxlbWVudC5zdHlsZS5kaXNwbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgb3AgPSBlbGVtZW50LnN0eWxlLm9wYWNpdHkgfHwgMTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcCArPSAwLjAzO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBmYWRlSW4oIGVsZW1lbnQsIGZhZGVUbywgZG9uZSwgb3AgKTtcclxuXHJcbiAgICAgICAgfSwgMTAgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBmYWRlVG87XHJcblxyXG4gICAgICAgIGlmICggaXNGdW5jdGlvbiggZG9uZSApICkge1xyXG5cclxuICAgICAgICAgICAgZG9uZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY2FsY3VsYXRlQ2FudmFzU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjYW52YXNXaWR0aCA9IG9wdGlvbnMuY2FudmFzV2lkdGggPyBvcHRpb25zLmNhbnZhc1dpZHRoIDogcm9vdENvbnRhaW5lckVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICBjYW52YXNIZWlnaHQgPSBvcHRpb25zLmNhbnZhc0hlaWdodCA/IG9wdGlvbnMuY2FudmFzSGVpZ2h0IDogcm9vdENvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxufTtcclxuXHJcbnZhciBzZXRDYW52YXNEaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ICAgICA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoICAgICA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoIHYgKSB7IC8vIEpvbmFzIFJhb25pIFNvYXJlcyBTaWx2YSAtIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlIFtyZXYuICMxXVxyXG5cclxuICAgIGZvciAoIHZhciBqLCB4LCBpID0gdi5sZW5ndGg7IGk7IGogPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSAqIGkgKSwgeCA9IHZbIC0taSBdLCB2WyBpIF0gPSB2WyBqIF0sIHZbIGogXSA9IHggKTtcclxuICAgIHJldHVybiB2O1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFWFBPUlRTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBNZXRob2RzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICggcGFyYW1zICkge1xyXG5cclxuICAgIG9wdGlvbnMgPSBleHRlbmQoIGRlZmF1bHRzLCBwYXJhbXMgKTtcclxuXHJcbiAgICAvLyBmZWF0dXJlIHRlc3RcclxuICAgIGlmICggIU1vZGVybml6ci53ZWJnbCApIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyggJ0luaXRpYWxpemluZyBjcmF0ZWRpZ2dlci5qcy4uLicgKTtcclxuXHJcbiAgICBpZiAoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgICAgIGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGRwciA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMucm9vdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFyb290Q29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcm9vdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jYW52YXNDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhY2FudmFzQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgY2FudmFzIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5sb2FkaW5nQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWxvYWRpbmdDb250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBsb2FkaW5nIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5pbmZvQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWluZm9Db250YWluZXJFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBpbmZvIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgdGl0bGVJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnRpdGxlQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIXRpdGxlSW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJlY29yZCB0aXRsZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGFydGlzdEluZm9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuYXJ0aXN0Q29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWFydGlzdEluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgYXJ0aXN0IGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG4gICAgY292ZXJJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmNvdmVyQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNvdmVySW5mb0VsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNvdmVyIGltYWdlIGNvbnRhaW5lciBlbGVtZW50LicgKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhbnZhc1NpemUoKTtcclxuXHJcbiAgICBpbml0U2NlbmUoKTtcclxufTtcclxuXHJcbmV4cG9ydHMuc2VsZWN0UmVjb3JkID0gZnVuY3Rpb24gKCBpZCApIHtcclxuXHJcbiAgICBpZiAoIGlkIDwgMCApIHtcclxuXHJcbiAgICAgICAgcmVzZXRTaG93blJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGlkID4gbG9hZGVkUmVjb3JkcyApIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBsb2FkZWRSZWNvcmRzIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IGlkO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuc3RhcnRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSB0cnVlO1xyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuc3RvcFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBkb1JlbmRlciA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZW5hYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyA9IHRydWU7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5kaXNhYmxlUG9zdHByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgb3B0aW9ucy5wb3N0cHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cclxufTtcclxuXHJcbi8qPT09PT09PT09PSAgUHVibGljIGdldHRlcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5nZXRDYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRSZWNvcmRzRGF0YUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNEYXRhTGlzdDtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmdldExvYWRlZFJlY29yZHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIGxvYWRlZFJlY29yZHM7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXTtcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09ICBNZXRob2RzIGFjY2Vzc29ycyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmxvYWRSZWNvcmRzID0gbG9hZFJlY29yZHM7XHJcbmV4cG9ydHMudW5sb2FkUmVjb3JkcyA9IHVubG9hZFJlY29yZHM7XHJcbmV4cG9ydHMucmVzZXRTaG93blJlY29yZCA9IHJlc2V0U2hvd25SZWNvcmQ7XHJcbmV4cG9ydHMuc2h1ZmZsZVJlY29yZHMgPSBzaHVmZmxlUmVjb3JkcztcclxuZXhwb3J0cy5mbGlwU2VsZWN0ZWRSZWNvcmQgPSBmbGlwU2VsZWN0ZWRSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0UHJldlJlY29yZCA9IHNlbGVjdFByZXZSZWNvcmQ7XHJcbmV4cG9ydHMuc2VsZWN0TmV4dFJlY29yZCA9IHNlbGVjdE5leHRSZWNvcmQ7XHJcbmV4cG9ydHMuc2hvd0xvYWRpbmcgPSBzaG93TG9hZGluZztcclxuZXhwb3J0cy5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBQVUJMSUMgQVBJICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0czsiXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9tYWluLmpzIiwic3JjL3NjcmlwdHMvY3JhdGVkaWdnZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvQ29weVNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvRWZmZWN0Q29tcG9zZXIuanMiLCJzcmMvc2NyaXB0cy90aHJlZWpzX21vZHVsZXMvRlhBQVNoYWRlci5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9NYXNrUGFzcy5qcyIsInNyYy9zY3JpcHRzL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzLmpzIiwic3JjL3NjcmlwdHMvdGhyZWVqc19tb2R1bGVzL1NoYWRlclBhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3bkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY3JhdGVkaWdnZXIgPSByZXF1aXJlKCcuL2NyYXRlZGlnZ2VyJyk7XHJcblxyXG52YXIgZGF0YSA9IEpTT04ucGFyc2UoJ1t7XCJ0aXRsZVwiOlwiU28gV2hhdFwiLFwiYXJ0aXN0XCI6XCJNaWxlcyBEYXZpc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzYzYmY1ZmU1ZjE1ZjY5YmZlYjA5NzEzOWZjMzRmM2Q3LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDFcIixcImlkXCI6XCJTT0JZQk5WMTQ2MDc3MDNBQ0FcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3RvbGVuIE1vbWVudHNcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0NOTVBIMTJCMEI4MDY0QUFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiVGhlbWUgZm9yIE1heGluZVwiLFwiYXJ0aXN0XCI6XCJXb29keSBTaGF3XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmI5MzdmMWUxZDU3Zjc1NDJhNjRjNzRiMTNjNDc5MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTUxTR1cxMzEzNDM4NDFBN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNb2FuaW5cXCcgTWFtYm9cIixcImFydGlzdFwiOlwiTWluZ3VzIEJpZyBCYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGNkMTU2NWNmM2RkNjYzZjdiNzQ5MmU0ZGEzNzg4NTUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPVlFMVlgxMzEzNDM4NkFGOVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTdW1tZXJ0aW1lXCIsXCJhcnRpc3RcIjpcIk9zY2FyIFBldGVyc29uXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZhY2RmNGE5NzVlZGY5NTU2MTgyZDdjNmEzMWU1OTYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1OVwiLFwiaWRcIjpcIlNPRk5XVFYxMzc3MTI3MzlCQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZWEgZm9yIFR3b1wiLFwiYXJ0aXN0XCI6XCJMZXN0ZXIgWW91bmdcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci84ZWZmYmQ4ZGM3YTk1ZjA2YzVhY2E4ZTZlY2YzYTc4ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk3XCIsXCJpZFwiOlwiU09BUEJNUTE0NEM0QTE4Q0Q0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpbmUgVXBcIixcImFydGlzdFwiOlwiTGVubmllIFRyaXN0YW5vXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMjNiMjc2NmMyNDU3YmU1MDJlM2I3OWYwODhjYjhiYTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQlBEUlExMzEzNDM5QkE1MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJIFJlbWVtYmVyIENsaWZmb3JkXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lZmE3MDZlMWQzZmMxMzYzYzdhNWYwN2Y5MDg4YTZjYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09DUlVXTzEyQUIwMTg0ODQ2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbCBUaGUgVGhpbmdzIFlvdSBBcmVcIixcImFydGlzdFwiOlwiT3NjYXIgUGV0dGlmb3JkXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOGNlOWZjZjBlYzMzM2IwNmMzOGFkOTk5YzhkY2NiMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQkhLVkcxMzE1Q0Q0MUM0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFYXN5IExpdmluZ1wiLFwiYXJ0aXN0XCI6XCJDbGlmZm9yZCBCcm93blwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2U4NDYzNjMwODEzYjZjMjU1MzZjZGJlZjAzMTM0YWUzLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0VWTFJaMTMxMzQzQTI4RDZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2hpcGxhc2hcIixcImFydGlzdFwiOlwiRG9uIEVsbGlzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzRkODdjZjA2MzE5MzdiZGI3OTY3NTQwMjA1NGQzYjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3M1wiLFwiaWRcIjpcIlNPT1ZaSFIxMkE4QzEzMkZBOFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCdW1waW5cXCcgT24gU3Vuc2V0XCIsXCJhcnRpc3RcIjpcIldlcyBNb250Z29tZXJ5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzVmNDM1MjNmY2QwMWIzMDQ2NDg2Njc0ZTA5ZDM3MDAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk2NlwiLFwiaWRcIjpcIlNPS1hIWlQxNDc4QjYzODg3QVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGb290cHJpbnRzXCIsXCJhcnRpc3RcIjpcIldheW5lIFNob3J0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80MGM0NzY4ZDZlZTI1ZDUzNTZiNWVmYmQwZjY5YzMyNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09aTEZKQTE0NEQxM0QwNzY4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgVHJhaW5cIixcImFydGlzdFwiOlwiSm9obiBDb2x0cmFuZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzFkMDE5ZDgxZjk5YzUyMTMzOTg3OTFjOGEwZDZhMmQxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTdcIixcImlkXCI6XCJTT0FDWVNTMTQ1RkVCQUQ4QzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQWxsIEJsdWVzXCIsXCJhcnRpc3RcIjpcIlJvbiBDYXJ0ZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yZDIwYWU0YzQxMjdjZTZiOGFhNThmMDhiZWNjOWMwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAxXCIsXCJpZFwiOlwiU09CSlFCTTE0NEU1Q0E0RDg5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IEZ1bm55IFZhbGVudGluZVwiLFwiYXJ0aXN0XCI6XCJDaGV0IEJha2VyXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDJmOGI0ZDE1YTYyNDMzMzkwM2M1N2I3ZDRhYTVhYjUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NFwiLFwiaWRcIjpcIlNPQUFRSVoxNDRDNDg2QTkzMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJMb3ZlIGZvciBTYWxlXCIsXCJhcnRpc3RcIjpcIkNhbm5vbmJhbGwgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iN2RmNDQwZjJlNzQ2NDc2ODEwYjhmYzM2ZTE5NzBkZi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09QSlFFVTE0NEFENzA1NTg0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhZHkgU2luZ3MgdGhlIEJsdWVzXCIsXCJhcnRpc3RcIjpcIkhlcmJpZSBOaWNob2xzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMTdlYTRhMDUyNjA5NmU1YThmYjIwNzE3Mzg2ZTk5ZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQU9ZVEgxMzc2Rjc4QTRCQVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDbGVvcGF0cmFcXCdzIERyZWFtXCIsXCJhcnRpc3RcIjpcIkJ1ZCBQb3dlbGxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMTNlYTBjZWNjM2U4YjM3MGJkMjFiNDQ1Y2U1YjhjNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09LUEFUVDEyQTZENEY0MTJCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJlcm5pZVxcJ3MgVHVuZVwiLFwiYXJ0aXN0XCI6XCJHZXJyeSBNdWxsaWdhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzdiY2U1YjIxYWQyOWRmMTMwMzY4MTIxYTVjNGJjZjM2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTBcIixcImlkXCI6XCJTT0JKSE9TMTM3NjE4QkU0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGV0IFRoZSBHb29kIFRpbWVzIFJvbGxcIixcImFydGlzdFwiOlwiTGVzdGVyIEJvd2llXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDhlMThkNmU0Zjg0OTkwMDNlZDhjOWViYmM3Y2U3M2EvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPQlJQU0QxMzEzNDM4NkIxNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHcm9vdmV5YXJkXCIsXCJhcnRpc3RcIjpcIkhhcm9sZCBMYW5kXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMGNhYzYwM2FjNzgyODk4M2VkYjYzYzU5ZjRiMmZmOTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSEFOUkYxMzExQUZFQ0EyRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGYXIgV2VzdFwiLFwiYXJ0aXN0XCI6XCJUaW0gSGFnYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjFkOTY0NTkwNGVhMzQ0MWZlNWM3ZDAyNWM0NTBkMGMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPR0ZZRUwxMkE1OEE3QzBCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNeSBJZGVhbFwiLFwiYXJ0aXN0XCI6XCJLZW5ueSBEb3JoYW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yMjhiMDUzMmU4ZWY4NGE2Y2ZhNDliZWJmZWMyNDI3OC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU5XCIsXCJpZFwiOlwiU09GUUtMSDEzMTM0MzlDOUQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlllYXJuaW5cXCdcIixcImFydGlzdFwiOlwiT2xpdmVyIE5lbHNvblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk5MjM1YTVmYmU1NTc1OTBjY2Q2MmEyYTE1MmU0ZGJlLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NjFcIixcImlkXCI6XCJTT0VJR1RNMTJBNkQ0RjkyRTFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTW9hbmluXFwnXCIsXCJhcnRpc3RcIjpcIkFydCBCbGFrZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zZTg0OThkNDliYzNkMDMwYTM2NzMwYWFkYTNjNTUzYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU4XCIsXCJpZFwiOlwiU09CV05SWDE0NUZENkI1NUUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxpa2UgU29tZW9uZSBpbiBMb3ZlXCIsXCJhcnRpc3RcIjpcIkFydCBGYXJtZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9jODVhZWQwYzRjYjk2YmNjNjc1M2Q2MTQwZGU5Y2Y3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA0XCIsXCJpZFwiOlwiU09CRkdLUDEyQTZENEY4ODM0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNoZWVzZSBDYWtlXCIsXCJhcnRpc3RcIjpcIkRleHRlciBHb3Jkb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NjczNTRhYjA3ZDFmZGNjNjkyNGJiY2UwYTQzMWU2MC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTg4XCIsXCJpZFwiOlwiU09LUFJYRTEzNzcwNDJCMDdFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNlIFBpZWNlXCIsXCJhcnRpc3RcIjpcIkJpbGwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xMmE0NzJjMTQyMTA1ZTA0OTZlODQyZTQ4NmIyNTJjYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09BWUJIRzE0NEM3NEM1QzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFpblxcJ3QgSXQgRnVua3kgTm93XCIsXCJhcnRpc3RcIjpcIkdyYW50IEdyZWVuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZGZlMmIyNGIwNzU0MzVmNjI5MDdkMzYzN2NkODEyYjQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk3MFwiLFwiaWRcIjpcIlNPQkFHSlExMzE2NzcxNDc0MVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJEcml2YVxcJyBNYW5cIixcImFydGlzdFwiOlwiTWF4IFJvYWNoXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvN2FlZTUyZmJmMTVhNmI5YTAzNGEzYTkxNWZiZTBkNjAvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMVwiLFwiaWRcIjpcIlNPRVJOSFAxMzc2Nzk0NkNGRlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0IEFyZSBZb3UgRG9pbmcgVGhlIFJlc3QgT2YgWW91ciBMaWZlP1wiLFwiYXJ0aXN0XCI6XCJNaWx0IEphY2tzb25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMTEzM2U2NWViN2NiZWU5ZTVlMzJkOGYzMWY1MDQ3NS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTczXCIsXCJpZFwiOlwiU09IWFdXTjEzNzc3NTU3NzUyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBHaXJsIEZyb20gSXBhbmVtYVwiLFwiYXJ0aXN0XCI6XCJTdGFuIEdldHpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wYjA3MmVkYzE2OTdiNTU4NzIwYzY0MDk0ODM3MWQ3YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09DTkJUTjE0NzhDNDYwM0VEXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsb25lIFRvZ2V0aGVyXCIsXCJhcnRpc3RcIjpcIktlbm55IERvcmhhbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzIyOGIwNTMyZThlZjg0YTZjZmE0OWJlYmZlYzI0Mjc4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NTlcIixcImlkXCI6XCJTT0FCUk9JMTJBQjAxN0MzRTVcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU2VwdGVtYmVyIEluIFRoZSBSYWluXCIsXCJhcnRpc3RcIjpcIlJveSBIYXJncm92ZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzk4YTQ4MmQ4Y2NjYTdiMjIxNTJkNTcxNGMyMmFhNDY0LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTRcIixcImlkXCI6XCJTT1BXVElMMTJBOEMxM0JCREZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTG92ZSBUaGVtZSBmcm9tIFxcJ1NwYXJ0YWN1c1xcJ1wiLFwiYXJ0aXN0XCI6XCJZdXNlZiBMYXRlZWZcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iYjUwNTE2YjUwN2FjODc0ODJhNDQ2Y2U0NGIwNjI5ZS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYxXCIsXCJpZFwiOlwiU09JRkJBUTEzMTFBRkUzMTQ4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkFsbW9zdCBMaWtlIEJlaW5nIGluIExvdmVcIixcImFydGlzdFwiOlwiUmVkIEdhcmxhbmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iM2NmNjk5NWRlMjRkNDNjNzE3ZTQxMzAwZTc4ZjYwNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09BVEhEWjEyQUIwMTg1QjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5pZ2h0IEFuZCBEYXlcIixcImFydGlzdFwiOlwiSm9lIFBhc3NcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xN2VjZDE1YzI0MWJmMzc4ZTY4NGQ1NTNiNGU3YjhiYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA1XCIsXCJpZFwiOlwiU09CWU9BQzEzRTZDQjAxOTI2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNvdXMgTGUgQ2llbCBEZSBQYXJpc1wiLFwiYXJ0aXN0XCI6XCJUb290cyBUaGllbGVtYW5zXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODFmODczNDU3YTM0NmIyNmI4NWE4MTIyNTQxYThmMDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPTVVXUVMxMkE4QzEzQjJEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTY3JhbWJsZWQgRWdnc1wiLFwiYXJ0aXN0XCI6XCJOYXQgQWRkZXJsZXlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hMjE1NGViZDc1YzI0NzA5NWZlZjUwMGM2ZDVmMTYzYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYwXCIsXCJpZFwiOlwiU09ESkFZWjEzMTFBRkRBMTNGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhbnNhbmFcXCdzIFByaWVzdGVzc1wiLFwiYXJ0aXN0XCI6XCJEb25hbGQgQnlyZFwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2MwMGJhNWM0N2Y1ODI1MmU0ZWY4MTI3OWU2ZmViMWEwLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5NzNcIixcImlkXCI6XCJTT0RVSklSMTJBNkQ0Rjg1QTBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgTGl0dGxlIEJyb3duIEJvb2tcIixcImFydGlzdFwiOlwiRHVrZSBFbGxpbmd0b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzA1ZWRkMzg2ODQxNzdlMzU1NmIxY2RiZGU0NzY0YS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTYzXCIsXCJpZFwiOlwiU09HVFRIVjEzNkYyNDA1MkRFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBhdHJpY2lhXCIsXCJhcnRpc3RcIjpcIkFydCBQZXBwZXJcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OTI4YTIyMTEwMDBhODViYmUwMmNkMjk5YjVkNjI5MS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA3XCIsXCJpZFwiOlwiU09OVlVQRzEzNzcyMjc0Mzc1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTaWRld2luZGVyXCIsXCJhcnRpc3RcIjpcIkxlZSBNb3JnYW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zOGViZWRkN2M0YTc3YzM1MDJiMmNjNWQ4MGRiMzEwOS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk4XCIsXCJpZFwiOlwiU09HVFhFWDEyQjBCODA2ODY2XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIllvdSBEb25cXCd0IEtub3cgV2hhdCBMb3ZlIElzXCIsXCJhcnRpc3RcIjpcIlNvbm55IFJvbGxpbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OWQ3MjUzN2Y5MTZhOTBjMjdlNjI5YTg3MzA4YmM1My80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTU2XCIsXCJpZFwiOlwiU09FRFROTjEzNzcyQTM5RDk0XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkJsdWUgTW9ua1wiLFwiYXJ0aXN0XCI6XCJUaGVsb25pb3VzIE1vbmtcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wMjM3MjdkYjY4ZjRlZGJiNzhlYjExODA4ZmQ5NTU3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09BVFVDRTE0NEFEMEU4OUQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxhcyBWZWdhcyBUYW5nb1wiLFwiYXJ0aXN0XCI6XCJHaWwgRXZhbnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zMTZmMDkxMWE1NjA2MDY3OGMyMjQxMjAzODdjZDdhOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTY0XCIsXCJpZFwiOlwiU09GRE9DWTEzNzc1QzM2MTA5XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNhbmR1XCIsXCJhcnRpc3RcIjpcIkNsaWZmb3JkIEJyb3duXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYWNkNjFjNDJlMjhkZjdmYmQzMzdmZmQzZTYzODM5MDgvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk1NVwiLFwiaWRcIjpcIlNPQUFDRUYxMzE1MkE3MUU5RFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9XScpO1xyXG52YXIgZGF0YTIgPSBKU09OLnBhcnNlKCdbe1widGl0bGVcIjpcIllvdSBHb3QgTWVcIixcImFydGlzdFwiOlwiVGhlIFJvb3RzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvODA3NjhlMGM3ZjI2NjJkNzQyNzM0MDRmODc5NjUwYmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPSkFOQk8xNDRCQTA4RUM2MFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXaGF0XFwncyBHb2xkZW5cIixcImFydGlzdFwiOlwiSnVyYXNzaWMgNVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2M0MWM2YzM3Njc3MDI1M2Y4ODA1ZjU0MTAzMDg1NjBjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT01ZVUJUMTQ0QzI4NzdEODhcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiRmF6ZXJzXCIsXCJhcnRpc3RcIjpcIktpbmcgR2VlZG9yYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80OThkMTlhN2JkOGVmY2FiZmUxOWE5Y2ZmMjAwMzZjNC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAzXCIsXCJpZFwiOlwiU09DVEZMRTEzNzY4NkQ0NEQwXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlBlYWNoZnV6elwiLFwiYXJ0aXN0XCI6XCJLTURcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mYjM0ZDAzYTQ1MThmMjkyMGFiYjNjOWYxNDk2NjNjMS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09SSkVHRTEzNzE5QjhDMzU4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk5vbmUgU2hhbGwgUGFzc1wiLFwiYXJ0aXN0XCI6XCJBZXNvcCBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZmQwMTMwYmI0NzhlZDdmZmY2Y2E4Y2MyODY5M2FlZjIvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPS0pJWlQxMzExQUZFN0RBRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNQ1xcJ3MgQWN0IExpa2UgVGhleSBEb25cXCd0IEtub3dcIixcImFydGlzdFwiOlwiS1JTLU9uZVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT1JJTkFOMTMxMUFGRDg4Q0JcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSXRcXCdzIFRyaWNreVwiLFwiYXJ0aXN0XCI6XCJSdW4tRC5NLkMuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjczODk0NmM1YzQ4NzgwYTA2MDg4NDI0NDdjYzBiNDcvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4NlwiLFwiaWRcIjpcIlNPREpUUVgxNDRCRDk4NkZENlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJHZXQgQnlcIixcImFydGlzdFwiOlwiVGFsaWIgS3dlbGlcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9mODFlYzY4ZDM3MWM2YzhjNmIzNDk5ZDVkODkzNDRmMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09FR09ZTzEzNzMwREFERTQyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkEgTGl0dGxlIFNvdWxcIixcImFydGlzdFwiOlwiUGV0ZSBSb2NrXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvOWIxY2Y4ZGUxZjkzMDg4NTMxZTA1ZjZkMzY3NzE0ZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPQ0VST0sxMkE2RDRGQTVGQ1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgU2hvdyBHb2VzIE9uXCIsXCJhcnRpc3RcIjpcIkx1cGUgRmlhc2NvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNGYxZTA5Nzg2MTVmZmE1ZmQ3NDMzZDdjM2E3MmQwZDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPQ01QWUExMkM1NjQxM0I1RlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXYXZpblxcJyBGbGFnXCIsXCJhcnRpc3RcIjpcIktcXCduYWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzIyMWU4MmU0OWM2NTdmZjJkZGY0MmFiMzAwMzgwMDUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxMFwiLFwiaWRcIjpcIlNPVEJJQ04xMzc1OTI5NTQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJZb3UgR290cyBUbyBDaGlsbFwiLFwiYXJ0aXN0XCI6XCJFUE1EXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYzFjMjI1Y2E5YWNjYjBjMTNmYjk3ZjY4NGI0NDkzN2YvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk4OFwiLFwiaWRcIjpcIlNPSE5YRFExNDE5MTdFM0U4OFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJFdmVyeXRoaW5nIENoYW5nZXNcIixcImFydGlzdFwiOlwiQWNleWFsb25lXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMDUyODFkZWE2ZWJjMTUwY2M4NDUyNDJlZjA2Zjg2NzUvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPRFlVUVgxMzEzNDNBNTZCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDLlIuRS5BLk0uXCIsXCJhcnRpc3RcIjpcIld1LVRhbmcgQ2xhblwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyL2Y2NjhiMTc5MzY2YmIzZWQ2MjNkZDhiY2NkMmYzOGViLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTNcIixcImlkXCI6XCJTT0hZSklaMTQ2MDM3OTYxQTlcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiU3dlZXRlc3QgR2lybCAoRG9sbGFyIEJpbGwpXCIsXCJhcnRpc3RcIjpcIld5Y2xlZiBKZWFuXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjk4NmIyZjFkM2ZhNTBhNWE4YTk0MDJjZDI3M2FmMGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwN1wiLFwiaWRcIjpcIlNPRFVBTEkxMzEzNDM4QjUzRVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJCcmVhdGhlIEFuZCBTdG9wXCIsXCJhcnRpc3RcIjpcIlEtVGlwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvMzI0MzE1ODQ2NTM5YWU5YTQzMDYzOGJkNzg1MzhmMmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OVwiLFwiaWRcIjpcIlNPRVVWRUgxMkIwQjgwODZGNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJNcy4gSmFja3NvblwiLFwiYXJ0aXN0XCI6XCJPdXRLYXN0XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNjUzMzE2OTkzYTc5ZjkzNmRjZGVjNzU3M2UyNjI1NmYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPU1JEUFMxNDRCMjhFQ0VCNVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJDaGlsZHJlblxcJ3MgU3RvcnlcIixcImFydGlzdFwiOlwiU2xpY2sgUmlja1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzVlZjg1YTczOGQ2ZmQzMjEyMGQwZTJiNWNiYzAyMjJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5ODhcIixcImlkXCI6XCJTT0RRSE9MMTQ0QkQ5NEM0RkRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiUGFpZCBJbiBGdWxsXCIsXCJhcnRpc3RcIjpcIkVyaWMgQi4gJiBSYWtpbVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzliYWRmMGU1NGRmZjlkZTY5MjExYTc1MTc5NzUwZDg4LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0JUWUZGMTQ2MDA5RDIzMTJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV2F0Y2ggT3V0IE5vd1wiLFwiYXJ0aXN0XCI6XCJUaGUgQmVhdG51dHNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci81ODc3NThhNWI1NWJkNGMwN2VkMmIyMjZiYzM1MmZhMi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09OSkJPSTEzMTVDRDQ4OUVDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlNoYWRvd2JveGluXFwnIChBbGJ1bSBWZXJzaW9uIChFeHBsaWNpdCkpXCIsXCJhcnRpc3RcIjpcIkdaQVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQ4YTllMzFmZjMzYmEzZjc1NTAxZGQ3YTM2NmI5Y2QxLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTVcIixcImlkXCI6XCJTT0NNU1ZCMTJCMEI4MDgyMzBcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTHVjaGluaSBBa2EgVGhpcyBJcyBJdFwiLFwiYXJ0aXN0XCI6XCJDYW1wIExvXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYjIyNDRmYmNmMzg0MWYwY2E5Y2U3Y2QzMTY2ZTVjZTkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5N1wiLFwiaWRcIjpcIlNPQ0xTQUQxMzEzNDM5OTk0N1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJVa25vd2hvd3dlZHVcIixcImFydGlzdFwiOlwiQmFoYW1hZGlhXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzE0ZDE4MTBjZGU5ZGZjOTQwMWY4ZTg5Y2QyMTg1MmMvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5NlwiLFwiaWRcIjpcIlNPS0lMQVQxMkE2RDRGN0ZDN1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJXb25cXCd0IERvXCIsXCJhcnRpc3RcIjpcIkogRGlsbGFcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wODhmMTYzMDg3ZDdhZjcyODgxZGI1NzRlYmE0MDY3NC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDA2XCIsXCJpZFwiOlwiU09HSEFSSzEyQTU4QTdEMTI4XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkNyYXp5XCIsXCJhcnRpc3RcIjpcIkduYXJscyBCYXJrbGV5XCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDZjOWFiYjM5NzJkZWU3YjZiOGI2MjRiZWIwOGI2N2MvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNlwiLFwiaWRcIjpcIlNPQktNS1AxNDUwOUE3RjM2RVwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJGdWxsIENsaXBcIixcImFydGlzdFwiOlwiR2FuZyBTdGFyclwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzE2OWY5OTRkN2FiMmE4ZDg2OGNkZTc3ZmQ1NjZjYmJmLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0FLQVhHMTQ1NkIwN0I5REFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiQ29hc3RpblxcJyBmZWF0LiBLLiBGbGF5XCIsXCJhcnRpc3RcIjpcIlppb24gSVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzAzZWExYzQ2NTViNDRjNTg2ZTkwZGQ0ZDVmOWUxYWFjLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDlcIixcImlkXCI6XCJTT1ZYWllZMTJBQjAxODREQTRcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiT25lXCIsXCJhcnRpc3RcIjpcIkdob3N0ZmFjZSBLaWxsYWhcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8zYTVkYTZiNTM1ZjVmNzMwN2NiYTYyZDQyMDExY2I1Zi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09QRERCSzEzMTJBOEE4RkQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkhpcCBIb3BcIixcImFydGlzdFwiOlwiTW9zIERlZlwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzg5ZTI4YTBhOTNlZmY5ZGM1NzQ0NzY3MTBiNWMwOWUyLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjE5OTlcIixcImlkXCI6XCJTT0dXR1NKMTJBRjcyQThBQzJcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTXkgUGhpbG9zb3BoeVwiLFwiYXJ0aXN0XCI6XCJCb29naWUgRG93biBQcm9kdWN0aW9uc1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzU3ZjJmOGMyOTQyMWY2ZmUyYzhlMDRiYjJmMTI1YTY2LzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDBcIixcImlkXCI6XCJTT0RMVkVUMTJBNThBNzdBMzFcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiV29yc3QgQ29tZXMgVG8gV29yc3RcIixcImFydGlzdFwiOlwiRGlsYXRlZCBQZW9wbGVzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvYmVmMjJiODhkNzRjOWZjNzlhMDkyMWQ1ZjQ3OTUxOGYvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwMVwiLFwiaWRcIjpcIlNPREVLUUsxMzE2NzcxNDZDNlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJJZiBZb3UgTXVzdFwiLFwiYXJ0aXN0XCI6XCJEZWwgdGhlIEZ1bmt5IEhvbW9zYXBpZW5cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9kZjFiMGEyOGVlNjVlZmM1NGE1OTYwOTkxYTk2Yjg3Mi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAwXCIsXCJpZFwiOlwiU09SRUdRRjEyQjBCODA2NThFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIldoZW4gSSBCIE9uIFRoYSBNaWNcIixcImFydGlzdFwiOlwiUmFraW1cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci80ZGRjZmE1ZTY5YTFiNzlhY2JlMjBmNGNlMjgyNDc1Yy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk5XCIsXCJpZFwiOlwiU09PQ01TRjEzNkNBMkU5QkMxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkx5cmljYWwgU3dvcmRzXCIsXCJhcnRpc3RcIjpcIlJhcyBLYXNzXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZjI0ZmU3M2ZmYTM0YjlmOTk3YmE0YTI2MzFjMDMzNGQvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAwNVwiLFwiaWRcIjpcIlNPREVYR08xMkE4QzEzQzAxRFwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJTaGltbXkgU2hpbW15IFlhXCIsXCJhcnRpc3RcIjpcIk9sXFwnIERpcnR5IEJhc3RhcmRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83ODYzODhkMzY4OTAwZjY2ZjA1YmQzODMxYmRhNGZmOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09ZVk5YTjE0NEIyNkI3MUEyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlRoZSBTZWVkICgyLjApXCIsXCJhcnRpc3RcIjpcIlRoZSBSb290c1wiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzQxMWZmZDg5MTFmMWZjMDVjMjA1ZTg2NTA5ZjZlY2ExLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDJcIixcImlkXCI6XCJTT0NaWlVVMTQ0RjUwMEYxNkZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiSWNlIENyZWFtXCIsXCJhcnRpc3RcIjpcIlJhZWt3b25cIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci83NWM5Zjg0YjE4OWMyYmMzMTA2NDdlNjFiN2E2ZDVlOC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09XVFFGWTEzNUMzOTVFOThDXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk1pbGsgVGhlIENvd1wiLFwiYXJ0aXN0XCI6XCJDYXBwYWRvbm5hXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNTk1M2I0NWQ2NzE2ZmNiM2IyZmQyMjIwNzJhYzQwMjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5OFwiLFwiaWRcIjpcIlNPQ0VHQ0YxMzExQUZFNUQ1MlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJSdW5uaW5cXCdcIixcImFydGlzdFwiOlwiVGhlIFBoYXJjeWRlXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvNzFkZTdjYTFhZWEwNjNhODdkY2EwODkwN2Q3ZDlkMTEvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMjAxM1wiLFwiaWRcIjpcIlNPTEZZQUQxMzdBRDc2MzNCMlwiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUaGUgQ2hvaWNlIElzIFlvdXJzXCIsXCJhcnRpc3RcIjpcIkJsYWNrIFNoZWVwXCIsXCJjb3ZlclwiOlwiaHR0cDovL2Nkbi1pbWFnZXMuZGVlemVyLmNvbS9pbWFnZXMvY292ZXIvZDhhYzRmYWU1NTlmYjAwNWRkZjdmMGVkNWFkYmYyZjkvNDAweDQwMC0wMDAwMDAtODAtMC0wLmpwZ1wiLFwieWVhclwiOlwiMTk5MVwiLFwiaWRcIjpcIlNPRVZFUFkxMkE2MzEwRUFEM1wiLFwiaGFzU2xlZXZlXCI6ZmFsc2V9LHtcInRpdGxlXCI6XCJUZW5uZXNzZWVcIixcImFydGlzdFwiOlwiQXJyZXN0ZWQgRGV2ZWxvcG1lbnRcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8yYzcwMzllNjE4OGJlNDRhODYwMGE4Zjg3ZWRiNWVjNy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkyXCIsXCJpZFwiOlwiU09JWEFZWDEyQThDMTM5MDMyXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlN1Z2FyIEhpbGxcIixcImFydGlzdFwiOlwiQVpcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9iMmVhYzEyMzVjNWVjNjc2MTJkMmZhMGNjZTNjNzkwNS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk1XCIsXCJpZFwiOlwiU09FQ0pYVjEzNkE1QjVFQjVFXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkxvdW5naW5cXCdcIixcImFydGlzdFwiOlwiR3VydVwiLFwiY292ZXJcIjpcImh0dHA6Ly9jZG4taW1hZ2VzLmRlZXplci5jb20vaW1hZ2VzL2NvdmVyLzlhZjA0NzE3MWM1MTRkN2Q1NThiZTRkMmViMGE2MzdkLzQwMHg0MDAtMDAwMDAwLTgwLTAtMC5qcGdcIixcInllYXJcIjpcIjIwMDhcIixcImlkXCI6XCJTT0hMQ0NTMTMxMkE4QUQyQzZcIixcImhhc1NsZWV2ZVwiOmZhbHNlfSx7XCJ0aXRsZVwiOlwiTGEgUmh1bWJhXCIsXCJhcnRpc3RcIjpcIkJvYmJ5IERpZ2l0YWxcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYzk4YTExYzQzNGNhNzZiNTU1NTNlYWExNzIyYTRhZC80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIyMDAyXCIsXCJpZFwiOlwiU09GWE5FSjEyQjBCODBCRDM1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk4uWS4gU3RhdGUgT2YgTWluZFwiLFwiYXJ0aXN0XCI6XCJOYXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9lN2Y1YWNkZmJjMWM0OWJjNDUyMDkzOGI0ZDc3NWVjNi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk0XCIsXCJpZFwiOlwiU09GUUtRTzEzMTJGRTAwNjVGXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIkF3YXJkIFRvdXJcIixcImFydGlzdFwiOlwiQSBUcmliZSBDYWxsZWQgUXVlc3RcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci9hYWNiNTc2OTFmOTc0NTZlNjU5NGQ4ZTk5MWJiODFiYi80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkzXCIsXCJpZFwiOlwiU09ER1FCRjE0NEJEOEY0RkQxXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIk15IERlZmluaXRpb24gT2YgQSBCb29tYmFzdGljIEphenogU3R5bGVcIixcImFydGlzdFwiOlwiRHJlYW0gV2FycmlvcnNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8xZjliZmE0Yzc2NjVlMDdmYzdkZmM3YWI0ZTU5ZWM0OS80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTkxXCIsXCJpZFwiOlwiU09FSEhaRTE0NEU2MDRDMjlCXCIsXCJoYXNTbGVldmVcIjpmYWxzZX0se1widGl0bGVcIjpcIlJlYWR5IG9yIE5vdFwiLFwiYXJ0aXN0XCI6XCJGdWdlZXNcIixcImNvdmVyXCI6XCJodHRwOi8vY2RuLWltYWdlcy5kZWV6ZXIuY29tL2ltYWdlcy9jb3Zlci8wNGE1NTI2YjdiOTRjNmUyZDYxN2FkZTc2MmRkZjVkYy80MDB4NDAwLTAwMDAwMC04MC0wLTAuanBnXCIsXCJ5ZWFyXCI6XCIxOTk2XCIsXCJpZFwiOlwiU09DR1FBSjEzNjA3N0U4OTQ1XCIsXCJoYXNTbGVldmVcIjpmYWxzZX1dJyk7XHJcblxyXG52YXIgYm90dG9tQmFyICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3R0b20tYmFyJyk7XHJcbnZhciBidXR0b25QcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1wcmV2Jyk7XHJcbnZhciBidXR0b25TaG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1zaG93Jyk7XHJcbnZhciBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1uZXh0Jyk7XHJcblxyXG5jcmF0ZWRpZ2dlci5pbml0KHtcclxuXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICAgIHJvb3RDb250YWluZXJJZCAgICAgOiAnY3JhdGVkaWdnZXInLFxyXG4gICAgICAgIGNhbnZhc0NvbnRhaW5lcklkICAgOiAnY3JhdGVkaWdnZXItY2FudmFzJyxcclxuICAgICAgICBsb2FkaW5nQ29udGFpbmVySWQgIDogJ2NyYXRlZGlnZ2VyLWxvYWRpbmcnLFxyXG4gICAgICAgIGluZm9Db250YWluZXJJZCAgICAgOiAnY3JhdGVkaWdnZXItaW5mbycsXHJcbiAgICAgICAgdGl0bGVDb250YWluZXJJZCAgICA6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtdGl0bGUnLFxyXG4gICAgICAgIGFydGlzdENvbnRhaW5lcklkICAgOiAnY3JhdGVkaWdnZXItcmVjb3JkLWFydGlzdCcsXHJcbiAgICAgICAgY292ZXJDb250YWluZXJJZCAgICA6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtY292ZXInXHJcbiAgICB9LFxyXG5cclxuICAgIG9uSW5mb1BhbmVsT3BlbmVkOiBmdW5jdGlvbigpIHtcclxuICAgIFx0Ym90dG9tQmFyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xyXG4gICAgfSxcclxuXHJcblx0b25JbmZvUGFuZWxDbG9zZWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ym90dG9tQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpO1xyXG5cdH1cclxufSk7XHJcblxyXG5jcmF0ZWRpZ2dlci5sb2FkUmVjb3JkcyhkYXRhLCB0cnVlKTtcclxuXHJcbmJ1dHRvblByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0Y3JhdGVkaWdnZXIuc2VsZWN0UHJldlJlY29yZCgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59LCBmYWxzZSk7XHJcblxyXG5idXR0b25TaG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdGlmIChjcmF0ZWRpZ2dlci5nZXRTZWxlY3RlZFJlY29yZCgpKSB7XHJcblx0XHRjcmF0ZWRpZ2dlci5mbGlwU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y3JhdGVkaWdnZXIuc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cdH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSwgZmFsc2UpO1xyXG5cclxuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRjcmF0ZWRpZ2dlci5zZWxlY3ROZXh0UmVjb3JkKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0sIGZhbHNlKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKlxyXG4gICAgICAgICAgICAgICAgICBfX19fXyAgICAgICAgICAgICAgX19fX18gICAgICAgICAgICAgIF9fX19fICAgICAgICAgICAgIF9fX19fX19cclxuICAgICAgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgICAvXFwgICAgXFwgICAgICAgICAgIC86OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgICAvOjpcXCAgICBcXCAgICAgICAgIC86Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgICAgLzo6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgICAgICAgLzo6Ojo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgICAgLzo6Ojo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgICBcXCAgICAgIC86Ojo6OjpcXCAgICBcXCAgICAgLzo6Ojo6Ojo6XFwgICAgXFxcclxuICAgICAgICAgICAgIC86OjovXFw6OjpcXCAgICBcXCAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgLzo6Oi9cXDo6OlxcICAgIFxcICAgLzo6Oi9+flxcOjo6XFwgICAgXFxcclxuICAgICAgICAgICAgLzo6Oi9fX1xcOjo6XFwgICAgXFwgICAgICAgICBcXDo6OlxcICAgIFxcICAvOjo6L19fXFw6OjpcXCAgICBcXCAvOjo6LyAgICBcXDo6OlxcICAgIFxcXHJcbiAgICAgICAgICAgLzo6OjpcXCAgIFxcOjo6XFwgICAgXFwgICAgICAgIC86Ojo6XFwgICAgXFwgXFw6OjpcXCAgIFxcOjo6XFwgICAgXFw6OjovICAgIC8gXFw6OjpcXCAgICBcXFxyXG4gICAgICAgICAgLzo6Ojo6OlxcICAgXFw6OjpcXCAgICBcXF9fICAgIC86Ojo6OjpcXCAgICBcXF9cXDo6OlxcICAgXFw6OjpcXCAgICBcXDovX19fXy8gICBcXDo6OlxcX19fX1xcXHJcbiAgICAgICAgIC86OjovXFw6OjpcXCAgIFxcOjo6XFxfX19fXFwgXFwgIC86OjovXFw6OjpcXCAgICBcXCBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgICB8ICAgICB8Ojo6fCAgICB8XHJcbiAgICAgICAgLzo6Oi8gIFxcOjo6XFwgICBcXDo6OnwgICAgfCBcXC86OjovICBcXDo6OlxcX19fX1xcIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcX19ffCAgICAgfDo6OnxfX19ffFxyXG4gICAgICAgIFxcOjovICAgfDo6OjpcXCAgLzo6OnxfX19ffCAvOjo6LyAgICBcXDo6LyAgICAvICBcXDo6OlxcICAgXFw6Oi8gICAgLyAgIF9cXF9fXy86OjovICAgIC9cclxuICAgICAgICAgXFwvX19fX3w6Ojo6OlxcLzo6Oi8gICAgL1xcLzo6Oi8gICAgLyBcXC9fX19fL1xcICAgXFw6OjpcXCAgIFxcL19fX18vOlxcIHw6OnwgLzo6Oi8gICAgL1xyXG4gICAgICAgICAgICAgICB8Ojo6Ojo6Ojo6LyAgICAvOjo6OjovICAgIC8gICAgICBcXDo6OlxcICAgXFw6OjpcXCAgICBcXCAgXFw6OjpcXHw6OnwvOjo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnxcXDo6OjovICAgIC9cXDo6OjovX19fXy8gICAgICAgIFxcOjo6XFwgICBcXDo6OlxcX19fX1xcICBcXDo6Ojo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCBcXDo6L19fX18vICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXCAgLzo6Oi8gICAgLyAgIFxcOjo6Ojo6OjovICAgIC9cclxuICAgICAgICAgICAgICAgfDo6fCAgfnwgICAgICAgICBcXDo6OlxcICAgIFxcICAgICAgICAgXFw6OjpcXC86OjovICAgIC8gICAgIFxcOjo6Ojo6LyAgICAvXHJcbiAgICAgICAgICAgICAgIHw6OnwgICB8ICAgICAgICAgIFxcOjo6XFwgICAgXFwgICAgICAgICBcXDo6Ojo6Oi8gICAgLyAgICAgICBcXDo6OjovX19fXy9cclxuICAgICAgICAgICAgICAgXFw6OnwgICB8ICAgICAgICAgICBcXDo6OlxcX19fX1xcICAgICAgICAgXFw6Ojo6LyAgICAvICAgICAgICAgfDo6fCAgICB8XHJcbiAgICAgICAgICAgICAgICBcXDp8ICAgfCAgICAgICAgICAgIFxcOjovICAgIC8gICAgICAgICAgXFw6Oi8gICAgLyAgICAgICAgICB8Ojp8X19fX3xcclxuICAgICAgICAgICAgICAgICBcXHxfX198ICAgICAgICAgICAgIFxcL19fX18vICAgICAgICAgICAgXFwvX19fXy8gICAgICAgICAgICB+flxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBfXyAgICAgICAgICAgICAuX19fLl9fICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX1xyXG4gICAgICAgX19fX19fX19fX19fX19fXyBfLyAgfF8gIF9fX18gICBfX3wgXy98X198IF9fX18gICBfX19fICAgX19fX19fX19fX18gICAgICAgfF9ffCBfX19fX19cclxuICAgICBfLyBfX19cXF8gIF9fIFxcX18gIFxcXFwgICBfX1xcLyBfXyBcXCAvIF9fIHwgfCAgfC8gX19fXFwgLyBfX19cXF8vIF9fIFxcXyAgX18gXFwgICAgICB8ICB8LyAgX19fL1xyXG4gICAgIFxcICBcXF9fX3wgIHwgXFwvLyBfXyBcXHwgIHwgXFwgIF9fXy8vIC9fLyB8IHwgIC8gL18vICA+IC9fLyAgPiAgX19fL3wgIHwgXFwvICAgICAgfCAgfFxcX19fIFxcXHJcbiAgICAgIFxcX19fICA+X198ICAoX19fXyAgL19ffCAgXFxfX18gID5fX19fIHwgfF9fXFxfX18gIC9cXF9fXyAgLyBcXF9fXyAgPl9ffCAgL1xcIC9cXF9ffCAgL19fX18gID5cclxuICAgICAgICAgIFxcLyAgICAgICAgICAgXFwvICAgICAgICAgIFxcLyAgICAgXFwvICAgL19fX19fLy9fX19fXy8gICAgICBcXC8gICAgICBcXC8gXFxfX19fX198ICAgIFxcL1xyXG5cclxuXHJcbiovXHJcblxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBjcmF0ZWRpZ2dlci5qcyB2MC4wLjEgLSBieSByaXNxIChWYWxlbnRpbiBMZWRyYXBpZXIpICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbJ1RIUkVFJ10gOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsWydUSFJFRSddIDogbnVsbCk7Ly8sXHJcbiAgICAvL01vZGVybml6ciA9IHJlcXVpcmUoJ21vZGVybml6cicpO1xyXG5cclxuLyo9PT09PT09PT09ICBJbmplY3QgYWxsIGV4dGVybmFsIG1vZHVsZXMgdG8gVEhSRUUuanMgPT09PT09PT09PSovXHJcblxyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9TaGFkZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Db3B5U2hhZGVyJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9SZW5kZXJQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9Eb0ZTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL0ZYQUFTaGFkZXInKShUSFJFRSk7XHJcbnJlcXVpcmUoJy4vdGhyZWVqc19tb2R1bGVzL01hc2tQYXNzJykoVEhSRUUpO1xyXG5yZXF1aXJlKCcuL3RocmVlanNfbW9kdWxlcy9FZmZlY3RDb21wb3NlcicpKFRIUkVFKTtcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBWQVJJQUJMRVMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG52YXIgb3B0aW9ucyA9IHt9LFxyXG4gICAgZXhwb3J0cyA9IHt9LCAvLyBPYmplY3QgZm9yIHB1YmxpYyBBUElzXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgRE9NIGNvbnRhaW5lciBlbGVtZW50cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LFxyXG4gICAgbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsXHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudCxcclxuICAgIHRpdGxlSW5mb0VsZW1lbnQsXHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCxcclxuICAgIGNvdmVySW5mb0VsZW1lbnQsXHJcblxyXG5cclxuICAgIC8qPT09PT09PT09PSAgVGhyZWUuanMgb2JqZWN0cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgc3RhdHMsXHJcbiAgICBzY2VuZSxcclxuICAgIGNhbWVyYSxcclxuICAgIHRhcmdldCxcclxuICAgIHJlbmRlcmVyLFxyXG4gICAgbGlnaHQsXHJcbiAgICBsZWZ0TGlnaHQsXHJcbiAgICByaWdodExpZ2h0LFxyXG4gICAgY29tcG9zZXIsXHJcbiAgICBGWEFBLFxyXG4gICAgZG9mLFxyXG4gICAgZ3VpLFxyXG4gICAgZGVwdGhUYXJnZXQsXHJcbiAgICBkZXB0aFNoYWRlcixcclxuICAgIGRlcHRoVW5pZm9ybXMsXHJcbiAgICBkZXB0aE1hdGVyaWFsLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE9iamVjdHMgJiBkYXRhIGFycmF5cyAgPT09PT09PT09PSovXHJcblxyXG4gICAgY3JhdGVzID0gW10sXHJcbiAgICByZWNvcmRzID0gW10sXHJcbiAgICByZWNvcmRzRGF0YUxpc3QgPSBbXSxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBUaHJlZS5qcyBvYmplY3RzIGNvbnRhaW5lcnMgID09PT09PT09PT0qL1xyXG5cclxuICAgIHJvb3RDb250YWluZXIsXHJcbiAgICBjcmF0ZXNDb250YWluZXIsXHJcbiAgICByZWNvcmRzQ29udGFpbmVyLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIFN0YXRlcywgdXRpbCB2YXJzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBjYW52YXNXaWR0aCxcclxuICAgIGNhbnZhc0hlaWdodCxcclxuICAgIGRwcixcclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0LFxyXG4gICAgaXNMb2FkaW5nID0gZmFsc2UsXHJcbiAgICBpbmZvUGFuZWxTdGF0ZSA9IFwiY2xvc2VkXCIsXHJcbiAgICBpc1Njcm9sbGluZyA9IGZhbHNlLFxyXG4gICAgZG9SZW5kZXIgPSB0cnVlLFxyXG4gICAgbW91c2UgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duUG9zID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfSxcclxuICAgIHRhcmdldENhbWVyYVBvcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZFJlY29yZCA9IC0xLFxyXG4gICAgc2hvd25SZWNvcmQgPSAtMSxcclxuICAgIGxvYWRlZFJlY29yZHMgPSAwLFxyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIE1hdGVyaWFscyAgPT09PT09PT09PSovXHJcblxyXG4gICAgd29vZF9tYXRlcmlhbCxcclxuXHJcblxyXG4gICAgLyo9PT09PT09PT09ICBEZWZhdWx0IHNldHRpbmdzICA9PT09PT09PT09Ki9cclxuXHJcbiAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgICAgICBjYW52YXNXaWR0aDogbnVsbCxcclxuICAgICAgICBjYW52YXNIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgbmJDcmF0ZXM6IDIsXHJcbiAgICAgICAgcmVjb3Jkc1BlckNyYXRlOiAyNCxcclxuICAgICAgICBsaWdodEludGVuc2l0eTogMSxcclxuICAgICAgICBjYW1lcmFNb3VzZU1vdmU6IHRydWUsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAweDExMTExMSxcclxuICAgICAgICBzbGVldmVDb2xvcjogMHgwZDA3MDIsXHJcbiAgICAgICAgc2xlZXZlTWFza1RleHR1cmU6ICdpbWcvc2xlZXZlLnBuZycsXHJcbiAgICAgICAgY3JhdGVUZXh0dXJlOiAnaW1nL3dvb2QuanBnJyxcclxuICAgICAgICBjbG9zZUluZm9QYW5lbE9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgY2xvc2VJbmZvUGFuZWxPblNjcm9sbDogdHJ1ZSxcclxuICAgICAgICBpbmZvUGFuZWxPcGFjaXR5OiAwLjksXHJcbiAgICAgICAgcG9zdHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgYmx1ckFtb3VudDogMC40LFxyXG4gICAgICAgIHVwZGF0ZUNhbnZhc1NpemVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcclxuICAgICAgICBvbkluZm9QYW5lbE9wZW5lZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgb25JbmZvUGFuZWxDbG9zZWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIG9uTG9hZGluZ0VuZDogZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICAgICAgcm9vdENvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXInLFxyXG4gICAgICAgICAgICBjYW52YXNDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWNhbnZhcycsXHJcbiAgICAgICAgICAgIGxvYWRpbmdDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLWxvYWRpbmcnLFxyXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1pbmZvJyxcclxuICAgICAgICAgICAgdGl0bGVDb250YWluZXJJZDogJ2NyYXRlZGlnZ2VyLXJlY29yZC10aXRsZScsXHJcbiAgICAgICAgICAgIGFydGlzdENvbnRhaW5lcklkOiAnY3JhdGVkaWdnZXItcmVjb3JkLWFydGlzdCcsXHJcbiAgICAgICAgICAgIGNvdmVyQ29udGFpbmVySWQ6ICdjcmF0ZWRpZ2dlci1yZWNvcmQtY292ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25zdGFudHM6IHtcclxuICAgICAgICAgICAgcmVjb3JkTW92ZVRpbWU6IDEwMDAsXHJcbiAgICAgICAgICAgIGNhbWVyYU1vdmVUaW1lOiA4MDAsXHJcbiAgICAgICAgICAgIGluZm9PcGVuVGltZTogODAwLFxyXG4gICAgICAgICAgICByZWNvcmRCYXNlWTogNSxcclxuICAgICAgICAgICAgcmVjb3JkU2hvd25ZOiAyNSxcclxuICAgICAgICAgICAgcmVjb3JkRmxpcHBlZFk6IDExMCxcclxuICAgICAgICAgICAgdGFyZ2V0QmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAtMjAsXHJcbiAgICAgICAgICAgICAgICB5OiAxMCxcclxuICAgICAgICAgICAgICAgIHo6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhQmFzZVBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAyODAsXHJcbiAgICAgICAgICAgICAgICB5OiAyMDAsXHJcbiAgICAgICAgICAgICAgICB6OiAxODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhRm9jdXNQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeDogMTYwLFxyXG4gICAgICAgICAgICAgICAgeTogMTkwLFxyXG4gICAgICAgICAgICAgICAgejogODVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FtZXJhTW91c2VNb3ZlU3BlZWRZOiAwLjA3LFxyXG4gICAgICAgICAgICBjYW1lcmFNb3VzZU1vdmVTcGVlZFo6IDAuMDMsXHJcbiAgICAgICAgICAgIGdyYWJTZW5zaXRpdml0eTogNlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBDTEFTU0VTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG4vKj09PT09PT09PT0gIFJlY29yZCBDbGFzcyAgPT09PT09PT09PSovXHJcblxyXG52YXIgUmVjb3JkID0gZnVuY3Rpb24gKCBpZCwgY3JhdGVJZCwgcG9zICkge1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3JhdGVJZCA9IGNyYXRlSWQ7XHJcbiAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIHRoaXMuc3RhdGUgPSAnb3V0JztcclxuICAgIHRoaXMucmVjb3JkWFBvcyA9IC02MiArICggMTM1IC8gb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSAqIHBvcztcclxuICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEwMCwgMS41LCAxMDAsIDEsIDEsIDEgKSwgbmV3IFRIUkVFLk1lc2hGYWNlTWF0ZXJpYWwoIGdldFJlY29yZE1hdGVyaWFsKCBudWxsLCBmYWxzZSApICkgKTtcclxuICAgIHRoaXMubWVzaC5nZW9tZXRyeS5hcHBseU1hdHJpeCggbmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlVHJhbnNsYXRpb24oIDUwLCAwLCAwICkgKTtcclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi5zZXQoIHRoaXMucmVjb3JkWFBvcywgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVksIDAgKTtcclxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICB0aGlzLm1lc2gucmVjb3JkSWQgPSBpZDtcclxuICAgIHRoaXMuYWJzb2x1dGVQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgdGhpcy5zZXRVbmFjdGl2ZSgpO1xyXG4gICAgdGhpcy5wdXNoUmVjb3JkKCk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coIFwiUmVjb3JkIG7CsFwiLCB0aGlzLmlkLFxyXG4gICAgICAgIFwiY3JhdGVJZCA9XCIsIHRoaXMuY3JhdGVJZCxcclxuICAgICAgICBcInBvcyA9XCIsIHRoaXMucG9zICk7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5tZXNoLnZpc2libGUgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuc2V0VW5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzaC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5zaG93UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3Nob3duJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdzaG93bic7XHJcbiAgICAgICAgdGhpcy5hYnNvbHV0ZVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbiggdGhpcy5tZXNoLm1hdHJpeFdvcmxkICk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRTaG93bllcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDJcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRhcmdldC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy5yZWNvcmRYUG9zLFxyXG4gICAgICAgICAgICAgICAgeTogNTAgKyBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRTaG93blksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggY2FtZXJhLnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24ueiArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24uelxyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdXNoUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPSAncHVzaGVkJyApIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdwdXNoZWQnO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkQmFzZVlcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIHRoaXMubWVzaC5yb3RhdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgejogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gN1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5yZWNvcmRNb3ZlVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuUmVjb3JkLnByb3RvdHlwZS5wdWxsUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggdGhpcy5zdGF0ZSAhPT0gJ3B1bGxlZCcgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncHVsbGVkJztcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZE1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHo6IE1hdGguUEkgLyAyIC0gTWF0aC5QSSAvIDdcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMucmVjb3JkTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgIH1cclxufTtcclxuXHJcblJlY29yZC5wcm90b3R5cGUuZmxpcFJlY29yZCA9IGZ1bmN0aW9uICggZG9uZSApIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gJ2ZsaXBwZWQnO1xyXG5cclxuICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMucmVjb3JkRmxpcHBlZFlcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucm90YXRpb24gKVxyXG4gICAgICAgIC5kZWxheSggb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIC8gNCApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHk6IE1hdGguUElcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgKVxyXG4gICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgIC50bygge1xyXG4gICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MsXHJcbiAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEZsaXBwZWRZICsgNTAsXHJcbiAgICAgICAgICAgIHo6IHRoaXMuYWJzb2x1dGVQb3NpdGlvbi56XHJcbiAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgLm9uQ29tcGxldGUoIGRvbmUgKTtcclxuXHJcbiAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyArIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUZvY3VzUG9zaXRpb24ueCArIDgwLFxyXG4gICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLnkgLSA1MCxcclxuICAgICAgICB9LCBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3ZlVGltZSApXHJcbiAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuXHJcbn07XHJcblxyXG5SZWNvcmQucHJvdG90eXBlLmZsaXBCYWNrUmVjb3JkID0gZnVuY3Rpb24gKCBkb25lICwgbm9DYW1lcmFUd2VlbiApIHtcclxuXHJcbiAgICBpZiAoIHRoaXMuc3RhdGUgPT09ICdmbGlwcGVkJyApIHtcclxuXHJcbiAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0aGlzLm1lc2gucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAuZGVsYXkoIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnJlY29yZEJhc2VZXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGhpcy5tZXNoLnJvdGF0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmluZm9PcGVuVGltZSAvIDIgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCBkb25lICk7XHJcblxyXG4gICAgICAgIGlmICghbm9DYW1lcmFUd2Vlbikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKCB0YXJnZXQucG9zaXRpb24gKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KCBvcHRpb25zLmNvbnN0YW50cy5pbmZvT3BlblRpbWUgLyAyIClcclxuICAgICAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMucmVjb3JkWFBvcyxcclxuICAgICAgICAgICAgICAgICAgICB5OiA3NSxcclxuICAgICAgICAgICAgICAgICAgICB6OiB0aGlzLmFic29sdXRlUG9zaXRpb24uelxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuaW5mb09wZW5UaW1lIClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoIFRXRUVOLkVhc2luZy5RdWFydGljLk91dCApLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgICAgICAudG8oIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLnJlY29yZFhQb3MgKyBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFGb2N1c1Bvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhRm9jdXNQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgQkFTRSBNRVRIT0RTICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBleHRlbmQgPSBmdW5jdGlvbiAoIGRlZmF1bHRzLCBvcHRpb25zICkge1xyXG5cclxuICAgIGZvciAoIHZhciBrZXkgaW4gb3B0aW9ucyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG9wdGlvbnMsIGtleSApICkge1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdHNbIGtleSBdID0gb3B0aW9uc1sga2V5IF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGVmYXVsdHM7XHJcbn07XHJcblxyXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIGRvUmVuZGVyICkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBvcHRpb25zLmRlYnVnICkge1xyXG5cclxuICAgICAgICAgICAgc3RhdHMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgVFdFRU4udXBkYXRlKCk7XHJcbiAgICB1cGRhdGVTaG93blJlY29yZCgpO1xyXG5cclxuICAgIGlmICggb3B0aW9ucy5jYW1lcmFNb3VzZU1vdmUgKSB7XHJcblxyXG4gICAgICAgIHRhcmdldENhbWVyYVBvcy54ID0gKCBtb3VzZS54IC8gY2FudmFzV2lkdGggLSAwLjUgKSAqIDAuMjU7IC8vIGludmVyc2UgYXhpcz9cclxuICAgICAgICB0YXJnZXRDYW1lcmFQb3MueSA9ICggbW91c2UueSAvIGNhbnZhc1dpZHRoIC0gMC41ICkgKiAwLjI1O1xyXG4gICAgICAgIHJvb3RDb250YWluZXIucm90YXRpb24ueSArPSBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFNb3VzZU1vdmVTcGVlZFkgKiAoIHRhcmdldENhbWVyYVBvcy54IC0gcm9vdENvbnRhaW5lci5yb3RhdGlvbi55ICk7XHJcbiAgICAgICAgcm9vdENvbnRhaW5lci5yb3RhdGlvbi56ICs9IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdXNlTW92ZVNwZWVkWiAqICggdGFyZ2V0Q2FtZXJhUG9zLnkgLSByb290Q29udGFpbmVyLnJvdGF0aW9uLnogKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLnBvc3Rwcm9jZXNzaW5nICkge1xyXG5cclxuICAgICAgICBzY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gZGVwdGhNYXRlcmlhbDtcclxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEsIGRlcHRoVGFyZ2V0ICk7XHJcbiAgICAgICAgc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XHJcbiAgICAgICAgY29tcG9zZXIucmVuZGVyKCk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxuICogTG9hZGluZyBtZXRob2RzXHJcbiAqL1xyXG52YXIgdW5sb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICByZWNvcmRzWyBpIF0uZGF0YSA9IG51bGw7XHJcbiAgICAgICAgcmVjb3Jkc1sgaSBdLnNldFVuYWN0aXZlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRlZFJlY29yZHMgPSAwO1xyXG4gICAgcmVjb3Jkc0RhdGFMaXN0ID0gW107XHJcblxyXG59O1xyXG5cclxuXHJcbnZhciBsb2FkUmVjb3JkcyA9IGZ1bmN0aW9uICggcmVjb3Jkc0RhdGEsIHNodWZmbGVCZWZvcmVMb2FkaW5nLCBkb25lICkge1xyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoIHRydWUgKTtcclxuXHJcbiAgICBzaG93TG9hZGluZyggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIGxvYWRlZFJlY29yZHMgPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdW5sb2FkUmVjb3JkcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggc2h1ZmZsZUJlZm9yZUxvYWRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICByZWNvcmRzRGF0YSA9IHNodWZmbGUoIHJlY29yZHNEYXRhICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGggJiYgaSA8IHJlY29yZHNEYXRhLmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVjb3Jkc1sgaSBdLmRhdGEgPSByZWNvcmRzRGF0YVsgaSBdO1xyXG4gICAgICAgICAgICByZWNvcmRzWyBpIF0uc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIHJlY29yZHNbIGkgXS5tZXNoLm1hdGVyaWFsLm1hdGVyaWFscyA9IGdldFJlY29yZE1hdGVyaWFsKCByZWNvcmRzRGF0YVsgaSBdLmNvdmVyLCByZWNvcmRzRGF0YVsgaSBdLmhhc1NsZWV2ZSApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoeSA/P1xyXG4gICAgICAgIC8vIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzRGF0YS5sZW5ndGggPCByZWNvcmRzLmxlbmd0aCA/IHJlY29yZHNEYXRhLmxlbmd0aCA6IHJlY29yZHMubGVuZ3RoO1xyXG4gICAgICAgIGxvYWRlZFJlY29yZHMgPSByZWNvcmRzLmxlbmd0aDtcclxuICAgICAgICByZWNvcmRzRGF0YUxpc3QgPSByZWNvcmRzRGF0YTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBoaWRlTG9hZGluZyggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5vbkxvYWRpbmdFbmQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggZG9uZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIDIwMDAgKTtcclxuICAgIH0gKTtcclxufTtcclxuXHJcbnZhciBzaHVmZmxlUmVjb3JkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2h1ZmZsZWRSZWNvcmRzID0gcmVjb3Jkc0RhdGFMaXN0O1xyXG4gICAgc2h1ZmZsZWRSZWNvcmRzID0gc2h1ZmZsZSggc2h1ZmZsZWRSZWNvcmRzICk7XHJcbiAgICBsb2FkUmVjb3Jkcyggc2h1ZmZsZWRSZWNvcmRzICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUkVDT1JEUyBTRUxFQ1RJT04gTUVUSE9EUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcblxyXG4gICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpbmZvUGFuZWxTdGF0ZSAhPT0gJ29wZW5pbmcnICYmIGluZm9QYW5lbFN0YXRlICE9PSAnY2xvc2luZycgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gaWQ7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBTZWxlY3RlZFJlY29yZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKSB7XHJcblxyXG4gICAgICAgIGZpbGxJbmZvUGFuZWwoIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF0gKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwUmVjb3JkKCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdvcGVuZWQnO1xyXG5cclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIG9wdGlvbnMub25JbmZvUGFuZWxPcGVuZWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBpbmZvQ29udGFpbmVyRWxlbWVudCwgb3B0aW9ucy5pbmZvUGFuZWxPcGFjaXR5ICk7XHJcblxyXG4gICAgICAgIH0sIDMwMCApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnb3BlbmVkJyApIHtcclxuXHJcbiAgICAgICAgZmFkZU91dCggaW5mb0NvbnRhaW5lckVsZW1lbnQgKTtcclxuICAgICAgICBpbmZvUGFuZWxTdGF0ZSA9ICdjbG9zaW5nJztcclxuXHJcbiAgICAgICAgcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5mbGlwQmFja1JlY29yZCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaW5mb1BhbmVsU3RhdGUgPSAnY2xvc2VkJztcclxuICAgICAgICAgICAgb3B0aW9ucy5vbkluZm9QYW5lbENsb3NlZCgpO1xyXG5cclxuICAgICAgICB9LCBmb3JjZSApO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHVwZGF0ZVNob3duUmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICYmIHNob3duUmVjb3JkICE9IHNlbGVjdGVkUmVjb3JkICkge1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGVTaG93blJlY29yZC4uJyk7XHJcbiAgICAgICAgc2hvd25SZWNvcmQgPSBzZWxlY3RlZFJlY29yZDtcclxuXHJcbiAgICAgICAgZm9yICggdmFyIHJlY29yZElkID0gMDsgcmVjb3JkSWQgPCBsb2FkZWRSZWNvcmRzOyByZWNvcmRJZCsrICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnB1c2hSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHJlY29yZElkID4gc2VsZWN0ZWRSZWNvcmQgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkID4gcmVjb3Jkc1sgc2VsZWN0ZWRSZWNvcmQgXS5jcmF0ZUlkICogb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgJiZcclxuICAgICAgICAgICAgICAgIHJlY29yZElkIDwgKCByZWNvcmRzWyBzZWxlY3RlZFJlY29yZCBdLmNyYXRlSWQgKiBvcHRpb25zLnJlY29yZHNQZXJDcmF0ZSApICsgb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdWxsUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCByZWNvcmRJZCA9PSBzZWxlY3RlZFJlY29yZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzWyByZWNvcmRJZCBdLnNob3dSZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1sgcmVjb3JkSWQgXS5wdXNoUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlc2V0U2hvd25SZWNvcmQgPSBmdW5jdGlvbiAoIGZvcmNlICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmICFmb3JjZSApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGluZm9QYW5lbFN0YXRlICE9PSAnb3BlbmluZycgJiYgaW5mb1BhbmVsU3RhdGUgIT09ICdjbG9zaW5nJyApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ29wZW5lZCcgKSB7XHJcbiAgICAgICAgICAgIGZsaXBCYWNrU2VsZWN0ZWRSZWNvcmQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3RlZFJlY29yZCA9IC0xO1xyXG4gICAgICAgIG5ldyBUV0VFTi5Ud2VlbiggdGFyZ2V0LnBvc2l0aW9uIClcclxuICAgICAgICAgICAgLnRvKCB7XHJcbiAgICAgICAgICAgICAgICB4OiBvcHRpb25zLmNvbnN0YW50cy50YXJnZXRCYXNlUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIHk6IG9wdGlvbnMuY29uc3RhbnRzLnRhcmdldEJhc2VQb3NpdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgejogb3B0aW9ucy5jb25zdGFudHMudGFyZ2V0QmFzZVBvc2l0aW9uLnpcclxuICAgICAgICAgICAgfSwgb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhTW92ZVRpbWUgKVxyXG4gICAgICAgICAgICAuZWFzaW5nKCBUV0VFTi5FYXNpbmcuUXVhcnRpYy5PdXQgKS5zdGFydCgpO1xyXG5cclxuICAgICAgICBuZXcgVFdFRU4uVHdlZW4oIGNhbWVyYS5wb3NpdGlvbiApXHJcbiAgICAgICAgICAgIC50bygge1xyXG4gICAgICAgICAgICAgICAgeDogb3B0aW9ucy5jb25zdGFudHMuY2FtZXJhQmFzZVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICB5OiBvcHRpb25zLmNvbnN0YW50cy5jYW1lcmFCYXNlUG9zaXRpb24ueSxcclxuICAgICAgICAgICAgICAgIHo6IG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYUJhc2VQb3NpdGlvbi56XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuY29uc3RhbnRzLmNhbWVyYU1vdmVUaW1lIClcclxuICAgICAgICAgICAgLmVhc2luZyggVFdFRU4uRWFzaW5nLlF1YXJ0aWMuT3V0ICkuc3RhcnQoKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBzZWxlY3RQcmV2UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcbiAgICBcclxufTtcclxuXHJcbnZhciBzZWxlY3ROZXh0UmVjb3JkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNlbGVjdFJlY29yZChnZXROZXh0QXZhaWxhYmxlUmVjb3JkKHNlbGVjdGVkUmVjb3JkKSk7XHJcblxyXG59O1xyXG5cclxudmFyIGdldFByZXZBdmFpbGFibGVSZWNvcmQgPSBmdW5jdGlvbiAoZnJvbVJlY29yZCkge1xyXG5cclxuICAgIGlmICggZnJvbVJlY29yZCA9PSAtMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGxvYWRlZFJlY29yZHMgLSAxO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGZyb21SZWNvcmQgPCBsb2FkZWRSZWNvcmRzIC0gMSApIHtcclxuXHJcbiAgICAgICAgZnJvbVJlY29yZCA9IGZyb21SZWNvcmQgKyAxO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVjb3Jkc1sgZnJvbVJlY29yZCBdLmFjdGl2ZSA/IGZyb21SZWNvcmQgOiBnZXRQcmV2QXZhaWxhYmxlUmVjb3JkKGZyb21SZWNvcmQpO1xyXG4gICAgXHJcbn07XHJcblxyXG52YXIgZ2V0TmV4dEF2YWlsYWJsZVJlY29yZCA9IGZ1bmN0aW9uIChmcm9tUmVjb3JkKSB7XHJcblxyXG4gICAgaWYgKCBmcm9tUmVjb3JkID09IC0xICkge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIGlmICggZnJvbVJlY29yZCA+IDAgKSB7XHJcblxyXG4gICAgICAgIGZyb21SZWNvcmQgPSBmcm9tUmVjb3JkIC0gMTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBmcm9tUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWNvcmRzWyBmcm9tUmVjb3JkIF0uYWN0aXZlID8gZnJvbVJlY29yZCA6IGdldE5leHRBdmFpbGFibGVSZWNvcmQoZnJvbVJlY29yZCk7XHJcblxyXG59O1xyXG5cclxudmFyIG5hdmlnYXRlUmVjb3JkcyA9IGZ1bmN0aW9uICggZGlyZWN0aW9uICkge1xyXG5cclxuICAgIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdjbG9zZWQnICkge1xyXG5cclxuICAgICAgICBpZiAoIGRpcmVjdGlvbiA9PT0gJ3ByZXYnICkge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0TmV4dFJlY29yZCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIG9wdGlvbnMuY2xvc2VJbmZvUGFuZWxPblNjcm9sbCApIHtcclxuXHJcbiAgICAgICAgZmxpcEJhY2tTZWxlY3RlZFJlY29yZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG52YXIgc2Nyb2xsUmVjb3JkcyA9IGZ1bmN0aW9uICggYmFzZVksIG9sZERlbHRhICkge1xyXG5cclxuICAgIG9sZERlbHRhID0gIW9sZERlbHRhIHx8IE1hdGguYWJzKCBvbGREZWx0YSApID4gMC41ID8gMC41IDogTWF0aC5hYnMoIG9sZERlbHRhICk7XHJcbiAgICB2YXIgaW52ZXJzZURlbHRhID0gMSAtIG9sZERlbHRhO1xyXG4gICAgdmFyIHNjcm9sbFNwZWVkID0gaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogaW52ZXJzZURlbHRhICogMzAwO1xyXG5cclxuICAgIHNjcm9sbFJlY29yZHNUaW1lb3V0ID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JhYicpO1xyXG4gICAgICAgIHZhciBkZWx0YSA9ICggYmFzZVkgLSBtb3VzZS55ICkgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICAgICAgaWYgKCBkZWx0YSA+IDAgKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdE5leHRSZWNvcmQoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5FWFQgUkVDT1JEIFwiICsgZGVsdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIGRlbHRhIDwgMCApIHtcclxuICAgICAgICAgICAgc2VsZWN0UHJldlJlY29yZCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUFJFViBSRUNPUkQgXCIgKyBkZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbFJlY29yZHMoIGJhc2VZLCBkZWx0YSApO1xyXG4gICAgfSwgc2Nyb2xsU3BlZWQgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmlsbEluZm9QYW5lbCA9IGZ1bmN0aW9uICggcmVjb3JkICkge1xyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEudGl0bGUgKSB7XHJcblxyXG4gICAgICAgIHRpdGxlSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gcmVjb3JkLmRhdGEudGl0bGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuYXJ0aXN0ICkge1xyXG5cclxuICAgICAgICBhcnRpc3RJbmZvRWxlbWVudC5pbm5lckhUTUwgPSByZWNvcmQuZGF0YS5hcnRpc3Q7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggcmVjb3JkLmRhdGEuY292ZXIgKSB7XHJcblxyXG4gICAgICAgIGNvdmVySW5mb0VsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcmVjb3JkLmRhdGEuY292ZXIgKyAnKSc7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBFVkVOVFMgSEFORExJTkcgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIG9uTW91c2VNb3ZlRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgdmFyIG1fcG9zeCA9IDAsXHJcbiAgICAgICAgbV9wb3N5ID0gMCxcclxuICAgICAgICBlX3Bvc3ggPSAwLFxyXG4gICAgICAgIGVfcG9zeSA9IDAsXHJcbiAgICAgICAgb2JqID0gdGhpcztcclxuXHJcbiAgICAvL2dldCBtb3VzZSBwb3NpdGlvbiBvbiBkb2N1bWVudCBjcm9zc2Jyb3dzZXJcclxuICAgIGlmICggIWUgKSB7XHJcblxyXG4gICAgICAgIGUgPSB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICggZS5wYWdlWCB8fCBlLnBhZ2VZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLnBhZ2VYO1xyXG4gICAgICAgIG1fcG9zeSA9IGUucGFnZVk7XHJcbiAgICB9IGVsc2UgaWYgKCBlLmNsaWVudFggfHwgZS5jbGllbnRZICkge1xyXG5cclxuICAgICAgICBtX3Bvc3ggPSBlLmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgK1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBtX3Bvc3kgPSBlLmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0IHBhcmVudCBlbGVtZW50IHBvc2l0aW9uIGluIGRvY3VtZW50XHJcbiAgICBpZiAoIG9iai5vZmZzZXRQYXJlbnQgKSB7XHJcblxyXG4gICAgICAgIGRvIHtcclxuXHJcbiAgICAgICAgICAgIGVfcG9zeCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgZV9wb3N5ICs9IG9iai5vZmZzZXRUb3A7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCBvYmogPSBvYmoub2Zmc2V0UGFyZW50ICk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3VzZSBwb3NpdGlvbiBtaW51cyBlbG0gcG9zaXRpb24gaXMgbW91c2Vwb3NpdGlvbiByZWxhdGl2ZSB0byBlbGVtZW50OlxyXG4gICAgbW91c2UueCA9IG1fcG9zeCAtIGVfcG9zeDtcclxuICAgIG1vdXNlLnkgPSBtX3Bvc3kgLSBlX3Bvc3k7XHJcbn07XHJcblxyXG52YXIgb25TY3JvbGxFdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcblxyXG4gICAgaWYgKCB3aGVlbERpcmVjdGlvbiggZSApIDwgMCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAncHJldicgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBuYXZpZ2F0ZVJlY29yZHMoICduZXh0JyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgb25DbGlja0V2ZW50ID0gZnVuY3Rpb24gKCBtb3VzZURvd25Qb3MgKSB7XHJcblxyXG4gICAgaWYgKCBpbmZvUGFuZWxTdGF0ZSA9PT0gJ2Nsb3NlZCcgKSB7XHJcblxyXG4gICAgICAgIHZhciB2ZWN0b3JQb3MgPSB7XHJcbiAgICAgICAgICAgIHg6ICggKCAoIG1vdXNlRG93blBvcy54IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRMZWZ0ICkgLyAoIHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggKSApICogMiAtIDEgKSxcclxuICAgICAgICAgICAgeTogKCAtKCAoIG1vdXNlRG93blBvcy55IC0gcmVuZGVyZXIuZG9tRWxlbWVudC5vZmZzZXRUb3AgKSAvICggcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQgKSApICogMiArIDEgKSxcclxuICAgICAgICAgICAgejogMC41XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCB2ZWN0b3JQb3MueCwgdmVjdG9yUG9zLnksIHZlY3RvclBvcy56ICk7XHJcbiAgICAgICAgdmVjdG9yLnVucHJvamVjdCggY2FtZXJhICk7XHJcbiAgICAgICAgdmFyIHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoIGNhbWVyYS5wb3NpdGlvbiwgdmVjdG9yLnN1YiggY2FtZXJhLnBvc2l0aW9uICkubm9ybWFsaXplKCkgKTtcclxuICAgICAgICB2YXIgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKCBjcmF0ZXNDb250YWluZXIuY2hpbGRyZW4sIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gSWYgaW50ZXJzZWN0IHNvbWV0aGluZ1xyXG4gICAgICAgIGlmICggaW50ZXJzZWN0cy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsaWNrZWRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGZpcnN0IHZpc2libGUgcmVjb3JkIGludGVyc2VjdGVkXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGludGVyc2VjdHMubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaW50ZXJjZXB0IGEgbWVzaCB3aGljaCBpcyBub3QgYSByZWNvcmQsIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZihpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkKSA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGludGVyc2VjdHNbIGkgXS5vYmplY3QudmlzaWJsZSAmJiBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkID49IDAgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrZWRSZWNvcmQgPSByZWNvcmRzWyBpbnRlcnNlY3RzWyBpIF0ub2JqZWN0LnJlY29yZElkIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBpZiAoIGNsaWNrZWRSZWNvcmQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RlZFJlY29yZCA9PT0gY2xpY2tlZFJlY29yZC5pZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZmxpcFNlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UmVjb3JkKCBjbGlja2VkUmVjb3JkLmlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWxsIGludGVyc2VjdGVkIHJlY29yZHMgYXJlIG5vdCB2aXNpYmxlc1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNldFNob3duUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBObyByZWNvcmQgaGFzIGJlZW4gaW50ZXJzZWN0ZWRcclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VEb3duRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2xlYXJJbnRlcnZhbCggc2Nyb2xsUmVjb3Jkc1RpbWVvdXQgKTtcclxuXHJcbiAgICBpZiAoIGluZm9QYW5lbFN0YXRlID09PSAnY2xvc2VkJyApIHtcclxuXHJcbiAgICAgICAgc2Nyb2xsUmVjb3JkcyggbW91c2UueSApO1xyXG4gICAgICAgIG1vdXNlRG93blBvcyA9IHtcclxuICAgICAgICAgICAgeDogbW91c2UueCxcclxuICAgICAgICAgICAgeTogbW91c2UueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmICggaW5mb1BhbmVsU3RhdGUgPT09ICdvcGVuZWQnICYmIG9wdGlvbnMuY2xvc2VJbmZvUGFuZWxPbkNsaWNrICkge1xyXG5cclxuICAgICAgICBmbGlwQmFja1NlbGVjdGVkUmVjb3JkKCk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uTW91c2VVcEV2ZW50ID0gZnVuY3Rpb24gKCBlICkge1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoIHNjcm9sbFJlY29yZHNUaW1lb3V0ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyYWInKTtcclxuXHJcbiAgICBpZiAoIGNvb3Jkc0VxdWFsc0FwcHJveCggbW91c2VEb3duUG9zLCBtb3VzZSwgb3B0aW9ucy5jb25zdGFudHMuZ3JhYlNlbnNpdGl2aXR5ICkgKSB7XHJcblxyXG4gICAgICAgIG9uQ2xpY2tFdmVudCggbW91c2VEb3duUG9zICk7XHJcblxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnZhciBvbktleURvd25FdmVudCA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoIGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOCApIHtcclxuXHJcbiAgICAgICAgbmF2aWdhdGVSZWNvcmRzKCAnbmV4dCcgKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gNDAgKSB7XHJcblxyXG4gICAgICAgIG5hdmlnYXRlUmVjb3JkcyggJ3ByZXYnICk7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9uV2luZG93UmVzaXplRXZlbnQgPSBmdW5jdGlvbiAoIGUgKSB7XHJcblxyXG4gICAgY2FsY3VsYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPSAgICAgICAgICAgICAgVUkgTUVUSE9EUyAgICAgICAgICAgICAgPVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gKCBkb25lICkge1xyXG5cclxuICAgIGZhZGVJbiggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIDEsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaGlkZUxvYWRpbmcgPSBmdW5jdGlvbiAoIGRvbmUgKSB7XHJcblxyXG4gICAgZmFkZU91dCggbG9hZGluZ0NvbnRhaW5lckVsZW1lbnQsIGRvbmUgKTtcclxuXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj0gICAgICAgICAgICBJTklUSUFMSVNBVElPTiAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuXHJcbnZhciBpbml0U2NlbmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gc2NlbmUsIHJlbmRlcmVyLCBjYW1lcmEsLi4uXHJcbiAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoIHtcclxuICAgICAgICBhbnRpYWxpYXM6IHRydWVcclxuICAgIH0gKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQgKTtcclxuXHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XHJcbiAgICByZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJjb250ZXh0XCI7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCBvcHRpb25zLmJhY2tncm91bmRDb2xvciwgMSApO1xyXG5cclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNDUsIGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0LCAwLjEsIDIwMDAwICk7XHJcbiAgICBjYW1lcmEuZm9jYWxMZW5ndGggPSA0NTtcclxuICAgIGNhbWVyYS5mcmFtZVNpemUgPSAzMjtcclxuICAgIGNhbWVyYS5zZXRMZW5zKCBjYW1lcmEuZm9jYWxMZW5ndGgsIGNhbWVyYS5mcmFtZVNpemUgKTtcclxuXHJcbiAgICB0YXJnZXQgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuICAgIC8vICAgICAgICB0YXJnZXQgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCwgMSwgMSwgMSkpO1xyXG4gICAgLy8gICAgICAgIHNjZW5lLmFkZCh0YXJnZXQpO1xyXG4gICAgY2FtZXJhLmxvb2tBdCggdGFyZ2V0LnBvc2l0aW9uICk7XHJcblxyXG4gICAgdmFyIHdvb2RfdGV4dHVyZSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoIG9wdGlvbnMuY3JhdGVUZXh0dXJlICk7XHJcbiAgICB3b29kX3RleHR1cmUuYW5pc290cm9weSA9IHJlbmRlcmVyLmdldE1heEFuaXNvdHJvcHkoKTtcclxuICAgIHdvb2RfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgge1xyXG4gICAgICAgIG1hcDogd29vZF90ZXh0dXJlXHJcbiAgICB9ICk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG4gICAgY3JhdGVzQ29udGFpbmVyID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcbiAgICBzY2VuZS5hZGQoIHJvb3RDb250YWluZXIgKTtcclxuICAgIHJvb3RDb250YWluZXIuYWRkKCBjcmF0ZXNDb250YWluZXIgKTtcclxuXHJcbiAgICBpbml0Q3JhdGVzKCk7XHJcbiAgICBpbml0UmVjb3JkcygpO1xyXG5cclxuICAgIGxpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMS4xICk7XHJcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoIDMwMCwgODAsIDAgKTtcclxuICAgIHNjZW5lLmFkZCggbGlnaHQgKTtcclxuXHJcbiAgICBsZWZ0TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCggMHhGRkZGRkYsIG9wdGlvbnMubGlnaHRJbnRlbnNpdHkgKiAwLjYgKTtcclxuICAgIGxlZnRMaWdodC5wb3NpdGlvbi5zZXQoIC0xMDAsIDMwMCwgMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCBsZWZ0TGlnaHQgKTtcclxuXHJcbiAgICByaWdodExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoIDB4RkZGRkZGLCBvcHRpb25zLmxpZ2h0SW50ZW5zaXR5ICogMC42ICk7XHJcbiAgICByaWdodExpZ2h0LnBvc2l0aW9uLnNldCggLTEwMCwgMzAwLCAtMTAwMCApO1xyXG4gICAgc2NlbmUuYWRkKCByaWdodExpZ2h0ICk7XHJcblxyXG4gICAgaW5pdFBvc3RQcm9jZXNzaW5nKCk7XHJcblxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25TY3JvbGxFdmVudCwgZmFsc2UgKTtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZUV2ZW50LCBmYWxzZSApO1xyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duRXZlbnQsIGZhbHNlICk7XHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcEV2ZW50LCBmYWxzZSApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93bkV2ZW50LCBmYWxzZSApOyBcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMudXBkYXRlQ2FudmFzU2l6ZU9uV2luZG93UmVzaXplICkge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplRXZlbnQsIGZhbHNlICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIERPTSBzZXR1cFxyXG4gICAgcm9vdENvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpbmZvQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblxyXG4gICAgc2V0Q2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgaWYgKCBvcHRpb25zLmRlYnVnICkge1xyXG5cclxuICAgICAgICBpbml0RGVidWcoKTtcclxuICAgICAgICBpbml0R1VJKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxufTtcclxuXHJcbnZhciBpbml0UG9zdFByb2Nlc3NpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZGVwdGhTaGFkZXIgPSBUSFJFRS5TaGFkZXJMaWIuZGVwdGhSR0JBO1xyXG4gICAgZGVwdGhVbmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIGRlcHRoU2hhZGVyLnVuaWZvcm1zICk7XHJcblxyXG4gICAgZGVwdGhNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCgge1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBkZXB0aFNoYWRlci5mcmFnbWVudFNoYWRlcixcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGRlcHRoU2hhZGVyLnZlcnRleFNoYWRlcixcclxuICAgICAgICB1bmlmb3JtczogZGVwdGhVbmlmb3Jtc1xyXG4gICAgfSApO1xyXG4gICAgZGVwdGhNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk5vQmxlbmRpbmc7XHJcblxyXG4gICAgZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHtcclxuICAgICAgICBtaW5GaWx0ZXI6IFRIUkVFLk5lYXJlc3RGaWx0ZXIsXHJcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICAgIGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdFxyXG4gICAgfSApO1xyXG5cclxuICAgIGNvbXBvc2VyID0gbmV3IFRIUkVFLkVmZmVjdENvbXBvc2VyKCByZW5kZXJlciApO1xyXG4gICAgY29tcG9zZXIuYWRkUGFzcyggbmV3IFRIUkVFLlJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEgKSApO1xyXG5cclxuXHJcbiAgICAvKj09PT09PT09PT0gIERlcHRoIG9mIGZpZWxkIHNoYWRlciAgPT09PT09PT09PSovXHJcblxyXG4gICAgZG9mID0gbmV3IFRIUkVFLlNoYWRlclBhc3MoIFRIUkVFLkRvRlNoYWRlciApO1xyXG4gICAgZG9mLnVuaWZvcm1zLnREZXB0aC52YWx1ZSA9IGRlcHRoVGFyZ2V0O1xyXG4gICAgZG9mLnVuaWZvcm1zLnNpemUudmFsdWUuc2V0KCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBkb2YudW5pZm9ybXMudGV4dGVsLnZhbHVlLnNldCggMS4wIC8gY2FudmFzV2lkdGgsIDEuMCAvIGNhbnZhc0hlaWdodCApO1xyXG5cclxuICAgIC8vbWFrZSBzdXJlIHRoYXQgdGhlc2UgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgZm9yIHlvdXIgY2FtZXJhLCBvdGhlcndpc2UgZGlzdGFuY2VzIHdpbGwgYmUgd3JvbmcuXHJcbiAgICBkb2YudW5pZm9ybXMuem5lYXIudmFsdWUgPSBjYW1lcmEubmVhcjsgLy9jYW1lcmEgY2xpcHBpbmcgc3RhcnRcclxuICAgIGRvZi51bmlmb3Jtcy56ZmFyLnZhbHVlID0gY2FtZXJhLmZhcjsgLy9jYW1lcmEgY2xpcHBpbmcgZW5kXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsRGVwdGgudmFsdWUgPSA1OyAvL2ZvY2FsIGRpc3RhbmNlIHZhbHVlIGluIG1ldGVycywgYnV0IHlvdSBtYXkgdXNlIGF1dG9mb2N1cyBvcHRpb24gYmVsb3dcclxuICAgIGRvZi51bmlmb3Jtcy5mb2NhbExlbmd0aC52YWx1ZSA9IGNhbWVyYS5mb2NhbExlbmd0aDsgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuICAgIGRvZi51bmlmb3Jtcy5mc3RvcC52YWx1ZSA9IDguMDsgLy9mLXN0b3AgdmFsdWVcclxuICAgIGRvZi51bmlmb3Jtcy5zaG93Rm9jdXMudmFsdWUgPSBmYWxzZTsgLy9zaG93IGRlYnVnIGZvY3VzIHBvaW50IGFuZCBmb2NhbCByYW5nZSAob3JhbmdlID0gZm9jYWwgcG9pbnQsIGJsdWUgPSBmb2NhbCByYW5nZSlcclxuXHJcbiAgICBkb2YudW5pZm9ybXMubWFudWFsZG9mLnZhbHVlID0gdHJ1ZTsgLy9tYW51YWwgZG9mIGNhbGN1bGF0aW9uXHJcbiAgICBkb2YudW5pZm9ybXMubmRvZnN0YXJ0LnZhbHVlID0gMTE7IC8vbmVhciBkb2YgYmx1ciBzdGFydFxyXG4gICAgZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LnZhbHVlID0gODA7IC8vbmVhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlICAgIFxyXG4gICAgZG9mLnVuaWZvcm1zLmZkb2ZzdGFydC52YWx1ZSA9IDA7IC8vZmFyIGRvZiBibHVyIHN0YXJ0XHJcbiAgICBkb2YudW5pZm9ybXMuZmRvZmRpc3QudmFsdWUgPSAxMDA7IC8vZmFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2UgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLkNvQy52YWx1ZSA9IDAuMDM7IC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pICAgIFxyXG5cclxuICAgIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLnZhbHVlID0gZmFsc2U7IC8vdXNlIG9wdGljYWwgbGVucyB2aWduZXR0aW5nP1xyXG5cclxuICAgIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMudmFsdWUgPSB0cnVlOyAvL3VzZSBhdXRvZm9jdXMgaW4gc2hhZGVyPyBkaXNhYmxlIGlmIHlvdSB1c2UgZXh0ZXJuYWwgZm9jYWxEZXB0aCB2YWx1ZVxyXG4gICAgZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLnNldCggMC4zNSwgMC4zNSApOyAvLyBhdXRvZm9jdXMgcG9pbnQgb24gc2NyZWVuICgwLjAsMC4wIC0gbGVmdCBsb3dlciBjb3JuZXIsIDEuMCwxLjAgLSB1cHBlciByaWdodCkgXHJcbiAgICBkb2YudW5pZm9ybXMubWF4Ymx1ci52YWx1ZSA9IG9wdGlvbnMuYmx1ckFtb3VudDsgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdCkgICAgXHJcblxyXG4gICAgZG9mLnVuaWZvcm1zLnRocmVzaG9sZC52YWx1ZSA9IDA7IC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuICAgIGRvZi51bmlmb3Jtcy5nYWluLnZhbHVlID0gMDsgLy9oaWdobGlnaHQgZ2FpbjtcclxuXHJcbiAgICBkb2YudW5pZm9ybXMuYmlhcy52YWx1ZSA9IDA7IC8vYm9rZWggZWRnZSBiaWFzICAgICAgICBcclxuICAgIGRvZi51bmlmb3Jtcy5mcmluZ2UudmFsdWUgPSAwOyAvL2Jva2VoIGNocm9tYXRpYyBhYmVycmF0aW9uL2ZyaW5naW5nXHJcblxyXG4gICAgRlhBQSA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5GWEFBU2hhZGVyICk7XHJcblxyXG4gICAgRlhBQS51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldCggMSAvIGNhbnZhc1dpZHRoLCAxIC8gY2FudmFzSGVpZ2h0ICk7XHJcbiAgICBGWEFBLnJlbmRlclRvU2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKCBkb2YgKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoIEZYQUEgKTtcclxuXHJcbn07XHJcblxyXG52YXIgaW5pdERlYnVnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbiAgICBzdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgIHJvb3RDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKCBzdGF0cy5kb21FbGVtZW50ICk7XHJcblxyXG4gICAgdmFyIGRlYnVnID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMjAsIDIwLCAyMCwgMSwgMSwgMSApICk7XHJcbiAgICBkZWJ1Zy5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCxcclxuICAgICAgICBsaWdodC5wb3NpdGlvbi55LFxyXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnpcclxuICAgICk7XHJcbiAgICBzY2VuZS5hZGQoIGRlYnVnICk7XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRHVUkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGNhbWVyYUZvbGRlcixcclxuICAgICAgICBjYW1lcmFGb2NhbExlbmd0aCxcclxuICAgICAgICBkb2ZGb2xkZXIsXHJcbiAgICAgICAgX2xhc3Q7XHJcblxyXG4gICAgZ3VpID0gbmV3IGRhdC5HVUkoKTtcclxuXHJcbiAgICBpZiAoIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgKSB7XHJcblxyXG4gICAgICAgIGNhbWVyYUZvbGRlciA9IGd1aS5hZGRGb2xkZXIoICdDYW1lcmEnICk7XHJcbiAgICAgICAgY2FtZXJhRm9jYWxMZW5ndGggPSBjYW1lcmFGb2xkZXIuYWRkKCBjYW1lcmEsICdmb2NhbExlbmd0aCcsIDI4LCAyMDAgKS5uYW1lKCAnRm9jYWwgTGVuZ3RoJyApO1xyXG4gICAgICAgIGNhbWVyYUZvY2FsTGVuZ3RoLm9uQ2hhbmdlKCB1cGRhdGVDYW1lcmEgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyID0gZ3VpLmFkZEZvbGRlciggJ0RlcHRoIG9mIEZpZWxkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2NhbERlcHRoLCAndmFsdWUnLCAwLCAxMCApLm5hbWUoICdGb2NhbCBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZnN0b3AsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ0YgU3RvcCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWF4Ymx1ciwgJ3ZhbHVlJywgMCwgMyApLm5hbWUoICdtYXggYmx1cicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnNob3dGb2N1cywgJ3ZhbHVlJyApLm5hbWUoICdTaG93IEZvY2FsIFJhbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubWFudWFsZG9mLCAndmFsdWUnICkubmFtZSggJ01hbnVhbCBEb0YnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZzdGFydCwgJ3ZhbHVlJywgMCwgMjAwICkubmFtZSggJ25lYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLm5kb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnbmVhciBmYWxsb2ZmJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mZG9mc3RhcnQsICd2YWx1ZScsIDAsIDIwMCApLm5hbWUoICdmYXIgc3RhcnQnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZkb2ZkaXN0LCAndmFsdWUnLCAwLCAyMDAgKS5uYW1lKCAnZmFyIGZhbGxvZmYnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5Db0MsICd2YWx1ZScsIDAsIDAuMSApLnN0ZXAoIDAuMDAxICkubmFtZSggJ2NpcmNsZSBvZiBjb25mdXNpb24nICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduZXR0aW5nLCAndmFsdWUnICkubmFtZSggJ1ZpZ25ldHRpbmcnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnZpZ25vdXQsICd2YWx1ZScsIDAsIDIgKS5uYW1lKCAnb3V0ZXIgYm9yZGVyJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy52aWduaW4sICd2YWx1ZScsIDAsIDEgKS5zdGVwKCAwLjAxICkubmFtZSggJ2lubmVyIGJvcmRlcicgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMudmlnbmZhZGUsICd2YWx1ZScsIDAsIDIyICkubmFtZSggJ2ZhZGUgYXQnICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5hdXRvZm9jdXMsICd2YWx1ZScgKS5uYW1lKCAnQXV0b2ZvY3VzJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5mb2N1cy52YWx1ZSwgJ3gnLCAwLCAxICkubmFtZSggJ2ZvY3VzIHgnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZvY3VzLnZhbHVlLCAneScsIDAsIDEgKS5uYW1lKCAnZm9jdXMgeScgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLnRocmVzaG9sZCwgJ3ZhbHVlJywgMCwgMSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAndGhyZXNob2xkJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5nYWluLCAndmFsdWUnLCAwLCAxMDAgKS5uYW1lKCAnZ2FpbicgKTtcclxuXHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmJpYXMsICd2YWx1ZScsIDAsIDQgKS5zdGVwKCAwLjAxICkubmFtZSggJ2JpYXMnICk7XHJcbiAgICAgICAgZG9mRm9sZGVyLmFkZCggZG9mLnVuaWZvcm1zLmZyaW5nZSwgJ3ZhbHVlJywgMCwgNSApLnN0ZXAoIDAuMDEgKS5uYW1lKCAnZnJpbmdlJyApO1xyXG5cclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMubm9pc2UsICd2YWx1ZScgKS5uYW1lKCAnVXNlIE5vaXNlJyApO1xyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5uYW1vdW50LCAndmFsdWUnLCAwLCAwLjAwMSApLnN0ZXAoIDAuMDAwMSApLm5hbWUoICdkaXRoZXInICk7XHJcblxyXG4gICAgICAgIGRvZkZvbGRlci5hZGQoIGRvZi51bmlmb3Jtcy5kZXB0aGJsdXIsICd2YWx1ZScgKS5uYW1lKCAnQmx1ciBEZXB0aCcgKTtcclxuICAgICAgICBkb2ZGb2xkZXIuYWRkKCBkb2YudW5pZm9ybXMuZGJzaXplLCAndmFsdWUnLCAwLCA1ICkubmFtZSggJ2JsdXIgc2l6ZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3VpLmNsb3NlKCk7XHJcblxyXG59O1xyXG5cclxudmFyIHVwZGF0ZUNhbWVyYSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjYW1lcmEuc2V0TGVucyggY2FtZXJhLmZvY2FsTGVuZ3RoLCBjYW1lcmEuZnJhbWVTaXplICk7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgZG9mLnVuaWZvcm1zLmZvY2FsTGVuZ3RoLnZhbHVlID0gY2FtZXJhLmZvY2FsTGVuZ3RoO1xyXG5cclxufTtcclxuXHJcbnZhciBpbml0Q3JhdGVzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZvciAoIHZhciBjcmF0ZUlkID0gMDsgY3JhdGVJZCA8IG9wdGlvbnMubmJDcmF0ZXM7IGNyYXRlSWQrKyApIHtcclxuICAgICAgICB2YXIgY3JhdGUgPSBjcmVhdGVDcmF0ZSggY3JhdGVJZCApO1xyXG4gICAgICAgIGNyYXRlc0NvbnRhaW5lci5hZGQoIGNyYXRlICk7XHJcbiAgICB9XHJcbiAgICBjcmF0ZXNDb250YWluZXIucG9zaXRpb24ueiA9IC0oIDExMCAtICggMTEwICogb3B0aW9ucy5uYkNyYXRlcyApICkgLyAyO1xyXG5cclxufTtcclxuXHJcbnZhciBjcmVhdGVDcmF0ZSA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgY3JhdGVzWyBpZCBdID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XHJcblxyXG4gICAgdmFyIGJveF9ib3R0b20gPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCAxMDAgKSwgd29vZF9tYXRlcmlhbCApO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2JvdHRvbSApO1xyXG5cclxuICAgIHZhciBib3hfbGVmdCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDIwMCwgMTAsIDgwICksIHdvb2RfbWF0ZXJpYWwgKTtcclxuICAgIGJveF9sZWZ0LnBvc2l0aW9uLnNldCggMCwgMzUsIC01NSApO1xyXG4gICAgYm94X2xlZnQucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG4gICAgY3JhdGVzWyBpZCBdLmFkZCggYm94X2xlZnQgKTtcclxuXHJcbiAgICBpZiAoIGlkID09PSAwICkge1xyXG4gICAgICAgIHZhciBib3hfcmlnaHQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAyMDAsIDEwLCA4MCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnBvc2l0aW9uLnNldCggMCwgMzUsIDU1ICk7XHJcbiAgICAgICAgYm94X3JpZ2h0LnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfcmlnaHQgKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYm94X2JhY2sgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA4MCwgMTAsIDEyMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfYmFjay5wb3NpdGlvbi5zZXQoIC0xMDUsIDM1LCAwICk7XHJcbiAgICBib3hfYmFjay5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfYmFjayApO1xyXG5cclxuICAgIHZhciBib3hfZnJvbnQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLkJveEdlb21ldHJ5KCA0MCwgMTAsIDEwMCApLCB3b29kX21hdGVyaWFsICk7XHJcbiAgICBib3hfZnJvbnQucG9zaXRpb24uc2V0KCA5NSwgMjUsIDAgKTtcclxuICAgIGJveF9mcm9udC5yb3RhdGlvbi56ID0gTWF0aC5QSSAvIDI7XHJcbiAgICBjcmF0ZXNbIGlkIF0uYWRkKCBib3hfZnJvbnQgKTtcclxuXHJcbiAgICBjcmF0ZXNbIGlkIF0ucG9zaXRpb24ueiA9IC0xMTAgKiBpZDtcclxuICAgIHJldHVybiBjcmF0ZXNbIGlkIF07XHJcblxyXG59O1xyXG5cclxudmFyIGluaXRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjb3JkSWQgPSAwO1xyXG4gICAgZm9yICggdmFyIGNyYXRlSWQgPSAwOyBjcmF0ZUlkIDwgY3JhdGVzLmxlbmd0aDsgY3JhdGVJZCsrICkge1xyXG5cclxuICAgICAgICBmb3IgKCB2YXIgcG9zID0gMDsgcG9zIDwgb3B0aW9ucy5yZWNvcmRzUGVyQ3JhdGU7IHBvcysrICkge1xyXG4gICAgICAgICAgICBjcmVhdGVSZWNvcmQoIGN1cnJlbnRSZWNvcmRJZCwgY3JhdGVJZCwgcG9zICk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZWNvcmRJZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoIGlkLCBjcmF0ZUlkLCBwb3MgKSB7XHJcblxyXG4gICAgdmFyIHJlY29yZCA9IG5ldyBSZWNvcmQoIGlkLCBjcmF0ZUlkLCBwb3MgKTtcclxuICAgIGNyYXRlc1sgY3JhdGVJZCBdLmFkZCggcmVjb3JkLm1lc2ggKTtcclxuICAgIHJlY29yZHMucHVzaCggcmVjb3JkICk7XHJcblxyXG59O1xyXG5cclxudmFyIGdldFJlY29yZE1hdGVyaWFsID0gZnVuY3Rpb24gKCBzcmMsIGhhc1NsZWV2ZSApIHtcclxuXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuY3Jvc3NPcmlnaW4gPSBcIkFub255bW91c1wiO1xyXG4gICAgaW1nLnNyYyA9IHNyYyA/IHNyYyA6ICcnO1xyXG5cclxuICAgIHZhciBpbWdXaWR0aCA9IDQwMCxcclxuICAgICAgICBpbWdIZWlnaHQgPSA0MDAsXHJcbiAgICAgICAgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcclxuXHJcbiAgICBtYXBDYW52YXMud2lkdGggPSBtYXBDYW52YXMuaGVpZ2h0ID0gNDAwO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoIG1hcENhbnZhcyApO1xyXG4gICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJGaWx0ZXI7XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCBoYXNTbGVldmUgKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xlZXZlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIHNsZWV2ZS5zcmMgPSBvcHRpb25zLnNsZWV2ZU1hc2tUZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgc2xlZXZlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3R4ID0gbWFwQ2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSggTWF0aC5QSSAvIDIgKTtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIC1pbWdXaWR0aCAvIDIsIC1pbWdIZWlnaHQgLyAyICk7XHJcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDEzMCwgMTMwLCAxMzUsIDEzNSApO1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSggc2xlZXZlLCAwLCAwLCA0MDAsIDQwMCApO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdmFyIGN0eCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoIGltZ1dpZHRoIC8gMiwgaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHgucm90YXRlKCBNYXRoLlBJIC8gMiApO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKCAtaW1nV2lkdGggLyAyLCAtaW1nSGVpZ2h0IC8gMiApO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKCBpbWcsIDAsIDAsIDQwMCwgNDAwICk7XHJcbiAgICAgICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzbGVldmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcblxyXG4gICAgICAgIGNvbG9yOiBvcHRpb25zLnNsZWV2ZUNvbG9yXHJcblxyXG4gICAgfSApO1xyXG5cclxuICAgIHZhciBtYXRlcmlhbHMgPSBbXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgc2xlZXZlTWF0ZXJpYWwsXHJcbiAgICAgICAgLy8gdGV4dHVyZVxyXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlXHJcbiAgICAgICAgfSApLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsLFxyXG4gICAgICAgIHNsZWV2ZU1hdGVyaWFsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIG1hdGVyaWFscztcclxuXHJcbn07XHJcblxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgVVRJTFMgICAgICAgICAgICA9XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblxyXG52YXIgd2hlZWxEaXN0YW5jZSA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgdmFyIHcgPSBlLndoZWVsRGVsdGEsXHJcbiAgICAgICAgZCA9IGUuZGV0YWlsO1xyXG4gICAgaWYgKCBkICkge1xyXG5cclxuICAgICAgICBpZiAoIHcgKSByZXR1cm4gdyAvIGQgLyA0MCAqIGQgPiAwID8gMSA6IC0xOyAvLyBPcGVyYVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIC1kIC8gMzsgLy8gRmlyZWZveDtcclxuXHJcbiAgICB9IGVsc2UgcmV0dXJuIHcgLyAxMjA7IC8vIElFL1NhZmFyaS9DaHJvbWVcclxufTtcclxuXHJcbnZhciB3aGVlbERpcmVjdGlvbiA9IGZ1bmN0aW9uICggZSApIHtcclxuXHJcbiAgICBpZiAoICFlICkgZSA9IGV2ZW50O1xyXG4gICAgcmV0dXJuICggZS5kZXRhaWwgPCAwICkgPyAxIDogKCBlLndoZWVsRGVsdGEgPiAwICkgPyAxIDogLTE7XHJcblxyXG59O1xyXG5cclxudmFyIGNvb3Jkc0VxdWFsc0FwcHJveCA9IGZ1bmN0aW9uICggY29vcmQxLCBjb29yZDIsIHJhbmdlICkge1xyXG5cclxuICAgIHJldHVybiAoIE1hdGguYWJzKCBjb29yZDEueCAtIGNvb3JkMi54ICkgPD0gcmFuZ2UgKSAmJiAoIE1hdGguYWJzKCBjb29yZDEueSAtIGNvb3JkMi55ICkgPD0gcmFuZ2UgKTtcclxuXHJcbn07XHJcblxyXG52YXIgZmFkZU91dCA9IGZ1bmN0aW9uICggZWxlbWVudCwgZG9uZSApIHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA8PSAwLjEgKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uKCBkb25lICkgKSB7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSAtPSAwLjE7XHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmYWRlT3V0KCBlbGVtZW50LCBkb25lICk7XHJcbiAgICAgICAgfSwgMTAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWRlSW4gPSBmdW5jdGlvbiAoIGVsZW1lbnQsIGZhZGVUbywgZG9uZSwgb3AgKSB7XHJcblxyXG4gICAgaWYgKCAhZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IGVsZW1lbnQuc3R5bGUub3BhY2l0eSAmJiBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPCBmYWRlVG8gKSB7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdub25lJyApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIG9wID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICggIWVsZW1lbnQuc3R5bGUuZGlzcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIG9wID0gZWxlbWVudC5zdHlsZS5vcGFjaXR5IHx8IDE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3AgKz0gMC4wMztcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgZmFkZUluKCBlbGVtZW50LCBmYWRlVG8sIGRvbmUsIG9wICk7XHJcblxyXG4gICAgICAgIH0sIDEwICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gZmFkZVRvO1xyXG5cclxuICAgICAgICBpZiAoIGlzRnVuY3Rpb24oIGRvbmUgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNhbGN1bGF0ZUNhbnZhc1NpemUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2FudmFzV2lkdGggPSBvcHRpb25zLmNhbnZhc1dpZHRoID8gb3B0aW9ucy5jYW52YXNXaWR0aCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY2FudmFzSGVpZ2h0ID0gb3B0aW9ucy5jYW52YXNIZWlnaHQgPyBvcHRpb25zLmNhbnZhc0hlaWdodCA6IHJvb3RDb250YWluZXJFbGVtZW50LmNsaWVudEhlaWdodDtcclxuXHJcbn07XHJcblxyXG52YXIgc2V0Q2FudmFzRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvL3Jvb3RDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCAgICAgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBjYW52YXNIZWlnaHQgKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0ICsgJ3B4JztcclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhbnZhc0hlaWdodCArICdweCc7XHJcblxyXG4gICAgLy9yb290Q29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCAgICAgPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gY2FudmFzV2lkdGggKyAncHgnO1xyXG4gICAgaW5mb0NvbnRhaW5lckVsZW1lbnQuc3R5bGUud2lkdGggPSBjYW52YXNXaWR0aCArICdweCc7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IGNhbnZhc1dpZHRoICsgJ3B4JztcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaHVmZmxlKCB2ICkgeyAvLyBKb25hcyBSYW9uaSBTb2FyZXMgU2lsdmEgLSBodHRwOi8vanNmcm9taGVsbC5jb20vYXJyYXkvc2h1ZmZsZSBbcmV2LiAjMV1cclxuXHJcbiAgICBmb3IgKCB2YXIgaiwgeCwgaSA9IHYubGVuZ3RoOyBpOyBqID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkgKiBpICksIHggPSB2WyAtLWkgXSwgdlsgaSBdID0gdlsgaiBdLCB2WyBqIF0gPSB4ICk7XHJcbiAgICByZXR1cm4gdjtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oIG9iaiApIHtcclxuXHJcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nIHx8IGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgRVhQT1JUUyAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cclxuLyo9PT09PT09PT09ICBQdWJsaWMgTWV0aG9kcyAgPT09PT09PT09PSovXHJcblxyXG5leHBvcnRzLmluaXQgPSBmdW5jdGlvbiAoIHBhcmFtcyApIHtcclxuXHJcbiAgICBvcHRpb25zID0gZXh0ZW5kKCBkZWZhdWx0cywgcGFyYW1zICk7XHJcblxyXG4gICAgLy8gZmVhdHVyZSB0ZXN0XHJcbiAgICBpZiAoICFNb2Rlcm5penIud2ViZ2wgKSByZXR1cm47XHJcblxyXG4gICAgY29uc29sZS5sb2coICdJbml0aWFsaXppbmcgY3JhdGVkaWdnZXIuanMuLi4nICk7XHJcblxyXG4gICAgaWYgKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkICkge1xyXG5cclxuICAgICAgICBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBkcHIgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByb290Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLnJvb3RDb250YWluZXJJZCApO1xyXG4gICAgaWYgKCAhcm9vdENvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuY2FudmFzQ29udGFpbmVySWQgKTtcclxuICAgIGlmICggIWNhbnZhc0NvbnRhaW5lckVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoICdjcmF0ZWRpZ2dlci5qcyAtIEluaXQgZmFpbGVkIDogY2FuIG5vdCBmaW5kIGNhbnZhcyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGxvYWRpbmdDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMubG9hZGluZ0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFsb2FkaW5nQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgbG9hZGluZyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGluZm9Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG9wdGlvbnMuZWxlbWVudHMuaW5mb0NvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFpbmZvQ29udGFpbmVyRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgaW5mbyBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIHRpdGxlSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy50aXRsZUNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICF0aXRsZUluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCByZWNvcmQgdGl0bGUgY29udGFpbmVyIGVsZW1lbnQuJyApO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICB9XHJcbiAgICBhcnRpc3RJbmZvRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBvcHRpb25zLmVsZW1lbnRzLmFydGlzdENvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFhcnRpc3RJbmZvRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvciggJ2NyYXRlZGlnZ2VyLmpzIC0gSW5pdCBmYWlsZWQgOiBjYW4gbm90IGZpbmQgcmVjb3JkIGFydGlzdCBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuICAgIGNvdmVySW5mb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggb3B0aW9ucy5lbGVtZW50cy5jb3ZlckNvbnRhaW5lcklkICk7XHJcbiAgICBpZiAoICFjb3ZlckluZm9FbGVtZW50ICkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKCAnY3JhdGVkaWdnZXIuanMgLSBJbml0IGZhaWxlZCA6IGNhbiBub3QgZmluZCBjb3ZlciBpbWFnZSBjb250YWluZXIgZWxlbWVudC4nICk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDYW52YXNTaXplKCk7XHJcblxyXG4gICAgaW5pdFNjZW5lKCk7XHJcbn07XHJcblxyXG5leHBvcnRzLnNlbGVjdFJlY29yZCA9IGZ1bmN0aW9uICggaWQgKSB7XHJcblxyXG4gICAgaWYgKCBpZCA8IDAgKSB7XHJcblxyXG4gICAgICAgIHJlc2V0U2hvd25SZWNvcmQoKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBpZCA+IGxvYWRlZFJlY29yZHMgKSB7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3JkID0gbG9hZGVkUmVjb3JkcyAtIDE7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmQgPSBpZDtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLnN0YXJ0UmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGRvUmVuZGVyID0gdHJ1ZTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLnN0b3BSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZG9SZW5kZXIgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG5leHBvcnRzLmVuYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSB0cnVlO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZGlzYWJsZVBvc3Rwcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIG9wdGlvbnMucG9zdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcbn07XHJcblxyXG4vKj09PT09PT09PT0gIFB1YmxpYyBnZXR0ZXJzICA9PT09PT09PT09Ki9cclxuXHJcbmV4cG9ydHMuZ2V0Q2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0UmVjb3Jkc0RhdGFMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiByZWNvcmRzRGF0YUxpc3Q7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0cy5nZXRMb2FkZWRSZWNvcmRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiBsb2FkZWRSZWNvcmRzO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0U2VsZWN0ZWRSZWNvcmQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHJlY29yZHNbIHNlbGVjdGVkUmVjb3JkIF07XHJcblxyXG59O1xyXG5cclxuXHJcbi8qPT09PT09PT09PSAgTWV0aG9kcyBhY2Nlc3NvcnMgID09PT09PT09PT0qL1xyXG5cclxuZXhwb3J0cy5sb2FkUmVjb3JkcyA9IGxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnVubG9hZFJlY29yZHMgPSB1bmxvYWRSZWNvcmRzO1xyXG5leHBvcnRzLnJlc2V0U2hvd25SZWNvcmQgPSByZXNldFNob3duUmVjb3JkO1xyXG5leHBvcnRzLnNodWZmbGVSZWNvcmRzID0gc2h1ZmZsZVJlY29yZHM7XHJcbmV4cG9ydHMuZmxpcFNlbGVjdGVkUmVjb3JkID0gZmxpcFNlbGVjdGVkUmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdFByZXZSZWNvcmQgPSBzZWxlY3RQcmV2UmVjb3JkO1xyXG5leHBvcnRzLnNlbGVjdE5leHRSZWNvcmQgPSBzZWxlY3ROZXh0UmVjb3JkO1xyXG5leHBvcnRzLnNob3dMb2FkaW5nID0gc2hvd0xvYWRpbmc7XHJcbmV4cG9ydHMuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49ICAgICAgICAgICAgUFVCTElDIEFQSSAgICAgICAgICAgID1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl6WTNKcGNIUnpMMk55WVhSbFpHbG5aMlZ5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUY5ZlgxOWZJQ0FnSUNBZ0lDQWdJQ0FnSUNCZlgxOWZYeUFnSUNBZ0lDQWdJQ0FnSUNBZ1gxOWZYMThnSUNBZ0lDQWdJQ0FnSUNBZ1gxOWZYMTlmWDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOWNYQ0FnSUNCY1hDQWdJQ0FnSUNBZ0lDQWdJQzljWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJQ0FnSUM5Y1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUNBZ0x6bzZYRndnSUNBZ1hGeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzg2T2x4Y0lDQWdJRnhjSUNBZ0lDQWdJQ0FnSUM4Nk9seGNJQ0FnSUZ4Y0lDQWdJQ0FnSUNBZ0lDODZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdMem82T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdk9qbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnTHpvNk9qcGNYQ0FnSUNCY1hDQWdJQ0FnSUNBdk9qbzZPam82WEZ3Z0lDQWdYRnhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2T2pvNk9qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lDQWdMem82T2pvNk9seGNJQ0FnSUZ4Y0lDQWdJQ0F2T2pvNk9qbzZPanBjWENBZ0lDQmNYRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdMem82T2k5Y1hEbzZPbHhjSUNBZ0lGeGNJQ0FnSUNBZ0lDQWdYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQXZPam82TDF4Y09qbzZYRndnSUNBZ1hGd2dJQ0F2T2pvNkwzNStYRnc2T2pwY1hDQWdJQ0JjWEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2T2pvNkwxOWZYRnc2T2pwY1hDQWdJQ0JjWENBZ0lDQWdJQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQzg2T2pvdlgxOWNYRG82T2x4Y0lDQWdJRnhjSUM4Nk9qb3ZJQ0FnSUZ4Y09qbzZYRndnSUNBZ1hGeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBdk9qbzZPbHhjSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdMem82T2pwY1hDQWdJQ0JjWENCY1hEbzZPbHhjSUNBZ1hGdzZPanBjWENBZ0lDQmNYRG82T2k4Z0lDQWdMeUJjWERvNk9seGNJQ0FnSUZ4Y1hISmNiaUFnSUNBZ0lDQWdJQ0F2T2pvNk9qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNYMThnSUNBZ0x6bzZPam82T2x4Y0lDQWdJRnhjWDF4Y09qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNPaTlmWDE5Zkx5QWdJRnhjT2pvNlhGeGZYMTlmWEZ4Y2NseHVJQ0FnSUNBZ0lDQWdMem82T2k5Y1hEbzZPbHhjSUNBZ1hGdzZPanBjWEY5ZlgxOWNYQ0JjWENBZ0x6bzZPaTljWERvNk9seGNJQ0FnSUZ4Y0lGeGNPam82WEZ3Z0lDQmNYRG82T2x4Y0lDQWdJRnhjSUNBZ0lId2dJQ0FnSUh3Nk9qcDhJQ0FnSUh4Y2NseHVJQ0FnSUNBZ0lDQXZPam82THlBZ1hGdzZPanBjWENBZ0lGeGNPam82ZkNBZ0lDQjhJRnhjTHpvNk9pOGdJRnhjT2pvNlhGeGZYMTlmWEZ3Z1hGdzZPanBjWENBZ0lGeGNPam82WEZ4ZlgxOWZYRnhmWDE5OElDQWdJQ0I4T2pvNmZGOWZYMTk4WEhKY2JpQWdJQ0FnSUNBZ1hGdzZPaThnSUNCOE9qbzZPbHhjSUNBdk9qbzZmRjlmWDE5OElDODZPam92SUNBZ0lGeGNPam92SUNBZ0lDOGdJRnhjT2pvNlhGd2dJQ0JjWERvNkx5QWdJQ0F2SUNBZ1gxeGNYMTlmTHpvNk9pOGdJQ0FnTDF4eVhHNGdJQ0FnSUNBZ0lDQmNYQzlmWDE5ZmZEbzZPam82WEZ3dk9qbzZMeUFnSUNBdlhGd3ZPam82THlBZ0lDQXZJRnhjTDE5ZlgxOHZYRndnSUNCY1hEbzZPbHhjSUNBZ1hGd3ZYMTlmWHk4NlhGd2dmRG82ZkNBdk9qbzZMeUFnSUNBdlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lIdzZPam82T2pvNk9qb3ZJQ0FnSUM4Nk9qbzZPaThnSUNBZ0x5QWdJQ0FnSUZ4Y09qbzZYRndnSUNCY1hEbzZPbHhjSUNBZ0lGeGNJQ0JjWERvNk9seGNmRG82ZkM4Nk9qb3ZJQ0FnSUM5Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZEbzZmRnhjT2pvNk9pOGdJQ0FnTDF4Y09qbzZPaTlmWDE5Zkx5QWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lGeGNPam82WEZ4ZlgxOWZYRndnSUZ4Y09qbzZPam82T2pvNk9pOGdJQ0FnTDF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOE9qcDhJRnhjT2pvdlgxOWZYeThnSUZ4Y09qbzZYRndnSUNBZ1hGd2dJQ0FnSUNBZ0lDQmNYRG82T2x4Y0lDQXZPam82THlBZ0lDQXZJQ0FnWEZ3Nk9qbzZPam82T2k4Z0lDQWdMMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0I4T2pwOElDQitmQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGd2dJQ0FnWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPbHhjTHpvNk9pOGdJQ0FnTHlBZ0lDQWdYRnc2T2pvNk9qb3ZJQ0FnSUM5Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZEbzZmQ0FnSUh3Z0lDQWdJQ0FnSUNBZ1hGdzZPanBjWENBZ0lDQmNYQ0FnSUNBZ0lDQWdJRnhjT2pvNk9qbzZMeUFnSUNBdklDQWdJQ0FnSUZ4Y09qbzZPaTlmWDE5ZkwxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNYRG82ZkNBZ0lId2dJQ0FnSUNBZ0lDQWdJRnhjT2pvNlhGeGZYMTlmWEZ3Z0lDQWdJQ0FnSUNCY1hEbzZPam92SUNBZ0lDOGdJQ0FnSUNBZ0lDQjhPanA4SUNBZ0lIeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnhjT253Z0lDQjhJQ0FnSUNBZ0lDQWdJQ0FnWEZ3Nk9pOGdJQ0FnTHlBZ0lDQWdJQ0FnSUNCY1hEbzZMeUFnSUNBdklDQWdJQ0FnSUNBZ0lIdzZPbnhmWDE5ZmZGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnhjZkY5Zlgzd2dJQ0FnSUNBZ0lDQWdJQ0FnWEZ3dlgxOWZYeThnSUNBZ0lDQWdJQ0FnSUNCY1hDOWZYMTlmTHlBZ0lDQWdJQ0FnSUNBZ0lINStYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGOWZJQ0FnSUNBZ0lDQWdJQ0FnSUM1ZlgxOHVYMThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRjlmWEhKY2JpQWdJQ0FnSUNCZlgxOWZYMTlmWDE5ZlgxOWZYMTlmSUY4dklDQjhYeUFnWDE5Zlh5QWdJRjlmZkNCZkwzeGZYM3dnWDE5Zlh5QWdJRjlmWDE4Z0lDQmZYMTlmWDE5ZlgxOWZYeUFnSUNBZ0lDQjhYMTk4SUY5ZlgxOWZYMXh5WEc0Z0lDQWdJRjh2SUY5ZlgxeGNYeUFnWDE4Z1hGeGZYeUFnWEZ4Y1hDQWdJRjlmWEZ3dklGOWZJRnhjSUM4Z1gxOGdmQ0I4SUNCOEx5QmZYMTljWENBdklGOWZYMXhjWHk4Z1gxOGdYRnhmSUNCZlh5QmNYQ0FnSUNBZ0lId2dJSHd2SUNCZlgxOHZYSEpjYmlBZ0lDQWdYRndnSUZ4Y1gxOWZmQ0FnZkNCY1hDOHZJRjlmSUZ4Y2ZDQWdmQ0JjWENBZ1gxOWZMeThnTDE4dklId2dmQ0FnTHlBdlh5OGdJRDRnTDE4dklDQStJQ0JmWDE4dmZDQWdmQ0JjWEM4Z0lDQWdJQ0I4SUNCOFhGeGZYMThnWEZ4Y2NseHVJQ0FnSUNBZ1hGeGZYMThnSUQ1Zlgzd2dJQ2hmWDE5ZklDQXZYMTk4SUNCY1hGOWZYeUFnUGw5ZlgxOGdmQ0I4WDE5Y1hGOWZYeUFnTDF4Y1gxOWZJQ0F2SUZ4Y1gxOWZJQ0ErWDE5OElDQXZYRndnTDF4Y1gxOThJQ0F2WDE5Zlh5QWdQbHh5WEc0Z0lDQWdJQ0FnSUNBZ1hGd3ZJQ0FnSUNBZ0lDQWdJQ0JjWEM4Z0lDQWdJQ0FnSUNBZ1hGd3ZJQ0FnSUNCY1hDOGdJQ0F2WDE5ZlgxOHZMMTlmWDE5Zkx5QWdJQ0FnSUZ4Y0x5QWdJQ0FnSUZ4Y0x5QmNYRjlmWDE5Zlgzd2dJQ0FnWEZ3dlhISmNibHh5WEc1Y2NseHVLaTljY2x4dVhISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUdOeVlYUmxaR2xuWjJWeUxtcHpJSFl3TGpBdU1TQXRJR0o1SUhKcGMzRWdLRlpoYkdWdWRHbHVJRXhsWkhKaGNHbGxjaWtnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYmx4eVhHNG5kWE5sSUhOMGNtbGpkQ2M3WEhKY2JseHlYRzUyWVhJZ1ZFaFNSVVVnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUEvSUhkcGJtUnZkMXNuVkVoU1JVVW5YU0E2SUhSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUJuYkc5aVlXeGJKMVJJVWtWRkoxMGdPaUJ1ZFd4c0tUc3ZMeXhjY2x4dUlDQWdJQzh2VFc5a1pYSnVhWHB5SUQwZ2NtVnhkV2x5WlNnbmJXOWtaWEp1YVhweUp5azdYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDBnSUVsdWFtVmpkQ0JoYkd3Z1pYaDBaWEp1WVd3Z2JXOWtkV3hsY3lCMGJ5QlVTRkpGUlM1cWN5QTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMU5vWVdSbGNsQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwTnZjSGxUYUdGa1pYSW5LU2hVU0ZKRlJTazdYSEpjYm5KbGNYVnBjbVVvSnk0dmRHaHlaV1ZxYzE5dGIyUjFiR1Z6TDFKbGJtUmxjbEJoYzNNbktTaFVTRkpGUlNrN1hISmNibkpsY1hWcGNtVW9KeTR2ZEdoeVpXVnFjMTl0YjJSMWJHVnpMMFJ2UmxOb1lXUmxjaWNwS0ZSSVVrVkZLVHRjY2x4dWNtVnhkV2x5WlNnbkxpOTBhSEpsWldwelgyMXZaSFZzWlhNdlJsaEJRVk5vWVdSbGNpY3BLRlJJVWtWRktUdGNjbHh1Y21WeGRXbHlaU2duTGk5MGFISmxaV3B6WDIxdlpIVnNaWE12VFdGemExQmhjM01uS1NoVVNGSkZSU2s3WEhKY2JuSmxjWFZwY21Vb0p5NHZkR2h5WldWcWMxOXRiMlIxYkdWekwwVm1abVZqZEVOdmJYQnZjMlZ5Snlrb1ZFaFNSVVVwTzF4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRlpCVWtsQlFreEZVeUFnSUNBZ0lDQWdJQ0FnSUQxY2NseHVQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JuWmhjaUJ2Y0hScGIyNXpJRDBnZTMwc1hISmNiaUFnSUNCbGVIQnZjblJ6SUQwZ2UzMHNJQzh2SUU5aWFtVmpkQ0JtYjNJZ2NIVmliR2xqSUVGUVNYTmNjbHh1WEhKY2JseHlYRzRnSUNBZ0x5bzlQVDA5UFQwOVBUMDlJQ0JFVDAwZ1kyOXVkR0ZwYm1WeUlHVnNaVzFsYm5SeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDeGNjbHh1SUNBZ0lHTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblFzWEhKY2JpQWdJQ0JzYjJGa2FXNW5RMjl1ZEdGcGJtVnlSV3hsYldWdWRDeGNjbHh1SUNBZ0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBMRnh5WEc0Z0lDQWdkR2wwYkdWSmJtWnZSV3hsYldWdWRDeGNjbHh1SUNBZ0lHRnlkR2x6ZEVsdVptOUZiR1Z0Wlc1MExGeHlYRzRnSUNBZ1kyOTJaWEpKYm1adlJXeGxiV1Z1ZEN4Y2NseHVYSEpjYmx4eVhHNGdJQ0FnTHlvOVBUMDlQVDA5UFQwOUlDQlVhSEpsWlM1cWN5QnZZbXBsWTNSeklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCemRHRjBjeXhjY2x4dUlDQWdJSE5qWlc1bExGeHlYRzRnSUNBZ1kyRnRaWEpoTEZ4eVhHNGdJQ0FnZEdGeVoyVjBMRnh5WEc0Z0lDQWdjbVZ1WkdWeVpYSXNYSEpjYmlBZ0lDQnNhV2RvZEN4Y2NseHVJQ0FnSUd4bFpuUk1hV2RvZEN4Y2NseHVJQ0FnSUhKcFoyaDBUR2xuYUhRc1hISmNiaUFnSUNCamIyMXdiM05sY2l4Y2NseHVJQ0FnSUVaWVFVRXNYSEpjYmlBZ0lDQmtiMllzWEhKY2JpQWdJQ0JuZFdrc1hISmNiaUFnSUNCa1pYQjBhRlJoY21kbGRDeGNjbHh1SUNBZ0lHUmxjSFJvVTJoaFpHVnlMRnh5WEc0Z0lDQWdaR1Z3ZEdoVmJtbG1iM0p0Y3l4Y2NseHVJQ0FnSUdSbGNIUm9UV0YwWlhKcFlXd3NYSEpjYmx4eVhHNWNjbHh1SUNBZ0lDOHFQVDA5UFQwOVBUMDlQU0FnVDJKcVpXTjBjeUFtSUdSaGRHRWdZWEp5WVhseklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCamNtRjBaWE1nUFNCYlhTeGNjbHh1SUNBZ0lISmxZMjl5WkhNZ1BTQmJYU3hjY2x4dUlDQWdJSEpsWTI5eVpITkVZWFJoVEdsemRDQTlJRnRkTEZ4eVhHNWNjbHh1WEhKY2JpQWdJQ0F2S2owOVBUMDlQVDA5UFQwZ0lGUm9jbVZsTG1weklHOWlhbVZqZEhNZ1kyOXVkR0ZwYm1WeWN5QWdQVDA5UFQwOVBUMDlQU292WEhKY2JseHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxjaXhjY2x4dUlDQWdJR055WVhSbGMwTnZiblJoYVc1bGNpeGNjbHh1SUNBZ0lISmxZMjl5WkhORGIyNTBZV2x1WlhJc1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdVM1JoZEdWekxDQjFkR2xzSUhaaGNuTWdJRDA5UFQwOVBUMDlQVDBxTDF4eVhHNWNjbHh1SUNBZ0lHTmhiblpoYzFkcFpIUm9MRnh5WEc0Z0lDQWdZMkZ1ZG1GelNHVnBaMmgwTEZ4eVhHNGdJQ0FnWkhCeUxGeHlYRzRnSUNBZ2MyTnliMnhzVW1WamIzSmtjMVJwYldWdmRYUXNYSEpjYmlBZ0lDQnBjMHh2WVdScGJtY2dQU0JtWVd4elpTeGNjbHh1SUNBZ0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwZ1hDSmpiRzl6WldSY0lpeGNjbHh1SUNBZ0lHbHpVMk55YjJ4c2FXNW5JRDBnWm1Gc2MyVXNYSEpjYmlBZ0lDQmtiMUpsYm1SbGNpQTlJSFJ5ZFdVc1hISmNiaUFnSUNCdGIzVnpaU0E5SUh0Y2NseHVJQ0FnSUNBZ0lDQjRPaUF3TEZ4eVhHNGdJQ0FnSUNBZ0lIazZJREJjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0J0YjNWelpVUnZkMjVRYjNNZ1BTQjdYSEpjYmlBZ0lDQWdJQ0FnZURvZ01DeGNjbHh1SUNBZ0lDQWdJQ0I1T2lBd1hISmNiaUFnSUNCOUxGeHlYRzRnSUNBZ2RHRnlaMlYwUTJGdFpYSmhVRzl6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJSGc2SURBc1hISmNiaUFnSUNBZ0lDQWdlVG9nTUZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0FnSUhObGJHVmpkR1ZrVW1WamIzSmtJRDBnTFRFc1hISmNiaUFnSUNCemFHOTNibEpsWTI5eVpDQTlJQzB4TEZ4eVhHNGdJQ0FnYkc5aFpHVmtVbVZqYjNKa2N5QTlJREFzWEhKY2JseHlYRzVjY2x4dUlDQWdJQzhxUFQwOVBUMDlQVDA5UFNBZ1RXRjBaWEpwWVd4eklDQTlQVDA5UFQwOVBUMDlLaTljY2x4dVhISmNiaUFnSUNCM2IyOWtYMjFoZEdWeWFXRnNMRnh5WEc1Y2NseHVYSEpjYmlBZ0lDQXZLajA5UFQwOVBUMDlQVDBnSUVSbFptRjFiSFFnYzJWMGRHbHVaM01nSUQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dUlDQWdJR1JsWm1GMWJIUnpJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lHUmxZblZuT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUdOaGJuWmhjMWRwWkhSb09pQnVkV3hzTEZ4eVhHNGdJQ0FnSUNBZ0lHTmhiblpoYzBobGFXZG9kRG9nYm5Wc2JDeGNjbHh1SUNBZ0lDQWdJQ0J1WWtOeVlYUmxjem9nTWl4Y2NseHVJQ0FnSUNBZ0lDQnlaV052Y21SelVHVnlRM0poZEdVNklESTBMRnh5WEc0Z0lDQWdJQ0FnSUd4cFoyaDBTVzUwWlc1emFYUjVPaUF4TEZ4eVhHNGdJQ0FnSUNBZ0lHTmhiV1Z5WVUxdmRYTmxUVzkyWlRvZ2RISjFaU3hjY2x4dUlDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SURCNE1URXhNVEV4TEZ4eVhHNGdJQ0FnSUNBZ0lITnNaV1YyWlVOdmJHOXlPaUF3ZURCa01EY3dNaXhjY2x4dUlDQWdJQ0FnSUNCemJHVmxkbVZOWVhOclZHVjRkSFZ5WlRvZ0oybHRaeTl6YkdWbGRtVXVjRzVuSnl4Y2NseHVJQ0FnSUNBZ0lDQmpjbUYwWlZSbGVIUjFjbVU2SUNkcGJXY3ZkMjl2WkM1cWNHY25MRnh5WEc0Z0lDQWdJQ0FnSUdOc2IzTmxTVzVtYjFCaGJtVnNUMjVEYkdsamF6b2dkSEoxWlN4Y2NseHVJQ0FnSUNBZ0lDQmpiRzl6WlVsdVptOVFZVzVsYkU5dVUyTnliMnhzT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUdsdVptOVFZVzVsYkU5d1lXTnBkSGs2SURBdU9TeGNjbHh1SUNBZ0lDQWdJQ0J3YjNOMGNISnZZMlZ6YzJsdVp6b2dkSEoxWlN4Y2NseHVJQ0FnSUNBZ0lDQmliSFZ5UVcxdmRXNTBPaUF3TGpRc1hISmNiaUFnSUNBZ0lDQWdkWEJrWVhSbFEyRnVkbUZ6VTJsNlpVOXVWMmx1Wkc5M1VtVnphWHBsT2lCMGNuVmxMRnh5WEc0Z0lDQWdJQ0FnSUc5dVNXNW1iMUJoYm1Wc1QzQmxibVZrT2lCbWRXNWpkR2x2YmlBb0tTQjdmU3hjY2x4dUlDQWdJQ0FnSUNCdmJrbHVabTlRWVc1bGJFTnNiM05sWkRvZ1puVnVZM1JwYjI0Z0tDa2dlMzBzWEhKY2JpQWdJQ0FnSUNBZ2IyNU1iMkZrYVc1blJXNWtPaUJtZFc1amRHbHZiaUFvS1NCN2ZTeGNjbHh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBjem9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5YjI5MFEyOXVkR0ZwYm1WeVNXUTZJQ2RqY21GMFpXUnBaMmRsY2ljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJuWmhjME52Ym5SaGFXNWxja2xrT2lBblkzSmhkR1ZrYVdkblpYSXRZMkZ1ZG1Gekp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOWhaR2x1WjBOdmJuUmhhVzVsY2tsa09pQW5ZM0poZEdWa2FXZG5aWEl0Ykc5aFpHbHVaeWNzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2x1Wm05RGIyNTBZV2x1WlhKSlpEb2dKMk55WVhSbFpHbG5aMlZ5TFdsdVptOG5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhWFJzWlVOdmJuUmhhVzVsY2tsa09pQW5ZM0poZEdWa2FXZG5aWEl0Y21WamIzSmtMWFJwZEd4bEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSjBhWE4wUTI5dWRHRnBibVZ5U1dRNklDZGpjbUYwWldScFoyZGxjaTF5WldOdmNtUXRZWEowYVhOMEp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOTJaWEpEYjI1MFlXbHVaWEpKWkRvZ0oyTnlZWFJsWkdsbloyVnlMWEpsWTI5eVpDMWpiM1psY2lkY2NseHVJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUdOdmJuTjBZVzUwY3pvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJOYjNabFZHbHRaVG9nTVRBd01DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnRaWEpoVFc5MlpWUnBiV1U2SURnd01DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNW1iMDl3Wlc1VWFXMWxPaUE0TURBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaRUpoYzJWWk9pQTFMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21SVGFHOTNibGs2SURJMUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJHYkdsd2NHVmtXVG9nTVRFd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlYSm5aWFJDWVhObFVHOXphWFJwYjI0NklIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUMweU1DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SURFd0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nTUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVcxbGNtRkNZWE5sVUc5emFYUnBiMjQ2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJREk0TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJREl3TUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIbzZJREU0TUZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVcxbGNtRkdiMk4xYzFCdmMybDBhVzl1T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUF4TmpBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUF4T1RBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjZPaUE0TlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVcxbGNtRk5iM1Z6WlUxdmRtVlRjR1ZsWkZrNklEQXVNRGNzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oYldWeVlVMXZkWE5sVFc5MlpWTndaV1ZrV2pvZ01DNHdNeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaM0poWWxObGJuTnBkR2wyYVhSNU9pQTJYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlR0Y2NseHVYSEpjYmx4eVhHNHZLajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2NseHVQU0FnSUNBZ0lDQWdJQ0FnSUVOTVFWTlRSVk1nSUNBZ0lDQWdJQ0FnSUNBOVhISmNiajA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFNBZ1VtVmpiM0prSUVOc1lYTnpJQ0E5UFQwOVBUMDlQVDA5S2k5Y2NseHVYSEpjYm5aaGNpQlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9JR2xrTENCamNtRjBaVWxrTENCd2IzTWdLU0I3WEhKY2JseHlYRzRnSUNBZ2RHaHBjeTVwWkNBOUlHbGtPMXh5WEc0Z0lDQWdkR2hwY3k1amNtRjBaVWxrSUQwZ1kzSmhkR1ZKWkR0Y2NseHVJQ0FnSUhSb2FYTXVjRzl6SUQwZ2NHOXpPMXh5WEc0Z0lDQWdkR2hwY3k1emRHRjBaU0E5SUNkdmRYUW5PMXh5WEc0Z0lDQWdkR2hwY3k1eVpXTnZjbVJZVUc5eklEMGdMVFl5SUNzZ0tDQXhNelVnTHlCdmNIUnBiMjV6TG5KbFkyOXlaSE5RWlhKRGNtRjBaU0FwSUNvZ2NHOXpPMXh5WEc0Z0lDQWdkR2hwY3k1dFpYTm9JRDBnYm1WM0lGUklVa1ZGTGsxbGMyZ29JRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNnZ01UQXdMQ0F4TGpVc0lERXdNQ3dnTVN3Z01Td2dNU0FwTENCdVpYY2dWRWhTUlVVdVRXVnphRVpoWTJWTllYUmxjbWxoYkNnZ1oyVjBVbVZqYjNKa1RXRjBaWEpwWVd3b0lHNTFiR3dzSUdaaGJITmxJQ2tnS1NBcE8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xtZGxiMjFsZEhKNUxtRndjR3g1VFdGMGNtbDRLQ0J1WlhjZ1ZFaFNSVVV1VFdGMGNtbDROQ2dwTG0xaGEyVlVjbUZ1YzJ4aGRHbHZiaWdnTlRBc0lEQXNJREFnS1NBcE8xeHlYRzRnSUNBZ2RHaHBjeTV0WlhOb0xuQnZjMmwwYVc5dUxuTmxkQ2dnZEdocGN5NXlaV052Y21SWVVHOXpMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUkNZWE5sV1N3Z01DQXBPMXh5WEc0Z0lDQWdkR2hwY3k1dFpYTm9Mbkp2ZEdGMGFXOXVMbm9nUFNCTllYUm9MbEJKSUM4Z01qdGNjbHh1SUNBZ0lIUm9hWE11YldWemFDNXlaV052Y21SSlpDQTlJR2xrTzF4eVhHNGdJQ0FnZEdocGN5NWhZbk52YkhWMFpWQnZjMmwwYVc5dUlEMGdibVYzSUZSSVVrVkZMbFpsWTNSdmNqTW9LVHRjY2x4dVhISmNiaUFnSUNCMGFHbHpMbk5sZEZWdVlXTjBhWFpsS0NrN1hISmNiaUFnSUNCMGFHbHpMbkIxYzJoU1pXTnZjbVFvS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1U1pXTnZjbVF1Y0hKdmRHOTBlWEJsTG14dlp5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWdnWENKU1pXTnZjbVFnYnNLd1hDSXNJSFJvYVhNdWFXUXNYSEpjYmlBZ0lDQWdJQ0FnWENKamNtRjBaVWxrSUQxY0lpd2dkR2hwY3k1amNtRjBaVWxrTEZ4eVhHNGdJQ0FnSUNBZ0lGd2ljRzl6SUQxY0lpd2dkR2hwY3k1d2IzTWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbk5sZEVGamRHbDJaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxtRmpkR2wyWlNBOUlIUnlkV1U3WEhKY2JpQWdJQ0IwYUdsekxtMWxjMmd1ZG1semFXSnNaU0E5SUhSeWRXVTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVVbVZqYjNKa0xuQnliM1J2ZEhsd1pTNXpaWFJWYm1GamRHbDJaU0E5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0IwYUdsekxtRmpkR2wyWlNBOUlHWmhiSE5sTzF4eVhHNGdJQ0FnZEdocGN5NXRaWE5vTG5acGMybGliR1VnUFNCbVlXeHpaVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbk5vYjNkU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQjBhR2x6TG5OMFlYUmxJQ0U5UFNBbmMyaHZkMjRuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdKM05vYjNkdUp6dGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtRmljMjlzZFhSbFVHOXphWFJwYjI0dWMyVjBSbkp2YlUxaGRISnBlRkJ2YzJsMGFXOXVLQ0IwYUdsekxtMWxjMmd1YldGMGNtbDRWMjl5YkdRZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCMGFHbHpMbTFsYzJndWNHOXphWFJwYjI0Z0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhrNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkZOb2IzZHVXVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I2T2lCTllYUm9MbEJKSUM4Z01seHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxDQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXlaV052Y21STmIzWmxWR2x0WlNBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1bFlYTnBibWNvSUZSWFJVVk9Ma1ZoYzJsdVp5NVJkV0Z5ZEdsakxrOTFkQ0FwTG5OMFlYSjBLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJRzVsZHlCVVYwVkZUaTVVZDJWbGJpZ2dkR0Z5WjJWMExuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNE9pQjBhR2x6TG5KbFkyOXlaRmhRYjNNc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjVPaUExTUNBcklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxuSmxZMjl5WkZOb2IzZHVXU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhvNklIUm9hWE11WVdKemIyeDFkR1ZRYjNOcGRHbHZiaTU2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2JtVjNJRlJYUlVWT0xsUjNaV1Z1S0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEc4b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGc2SUhSb2FYTXVjbVZqYjNKa1dGQnZjeUFySUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVDeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGs2SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVVp2WTNWelVHOXphWFJwYjI0dWVTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SUhSb2FYTXVZV0p6YjJ4MWRHVlFiM05wZEdsdmJpNTZJQ3NnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhSbTlqZFhOUWIzTnBkR2x2Ymk1NlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVUxdmRtVlVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzVTWldOdmNtUXVjSEp2ZEc5MGVYQmxMbkIxYzJoU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQjBhR2x6TG5OMFlYUmxJQ0U5SUNkd2RYTm9aV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdKM0IxYzJobFpDYzdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ2RHaHBjeTV0WlhOb0xuQnZjMmwwYVc5dUlDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNU9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NXlaV052Y21SQ1lYTmxXVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnZEdocGN5NXRaWE5vTG5KdmRHRjBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5SdktDQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I2T2lCTllYUm9MbEJKSUM4Z01pQXJJRTFoZEdndVVFa2dMeUEzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG5KbFkyOXlaRTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbVZoYzJsdVp5Z2dWRmRGUlU0dVJXRnphVzVuTGxGMVlYSjBhV011VDNWMElDa3VjM1JoY25Rb0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNVNaV052Y21RdWNISnZkRzkwZVhCbExuQjFiR3hTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCMGFHbHpMbk4wWVhSbElDRTlQU0FuY0hWc2JHVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlDZHdkV3hzWldRbk8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSb2FYTXViV1Z6YUM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prUW1GelpWbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVjbVZqYjNKa1RXOTJaVlJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J1WlhjZ1ZGZEZSVTR1VkhkbFpXNG9JSFJvYVhNdWJXVnphQzV5YjNSaGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYnlnZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlam9nVFdGMGFDNVFTU0F2SURJZ0xTQk5ZWFJvTGxCSklDOGdOMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTV5WldOdmNtUk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVVtVmpiM0prTG5CeWIzUnZkSGx3WlM1bWJHbHdVbVZqYjNKa0lEMGdablZ1WTNScGIyNGdLQ0JrYjI1bElDa2dlMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQW5abXhwY0hCbFpDYzdYSEpjYmx4eVhHNGdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwYUdsekxtMWxjMmd1Y0c5emFYUnBiMjRnS1Z4eVhHNGdJQ0FnSUNBZ0lDNTBieWdnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1eVpXTnZjbVJHYkdsd2NHVmtXVnh5WEc0Z0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtbHVabTlQY0dWdVZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXliM1JoZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnTG1SbGJHRjVLQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVwYm1adlQzQmxibFJwYldVZ0x5QTBJQ2xjY2x4dUlDQWdJQ0FnSUNBdWRHOG9JSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlVG9nVFdGMGFDNVFTVnh5WEc0Z0lDQWdJQ0FnSUgwc0lHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtbHVabTlQY0dWdVZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0xtVmhjMmx1WnlnZ1ZGZEZSVTR1UldGemFXNW5MbEYxWVhKMGFXTXVUM1YwSUNrdWMzUmhjblFvS1R0Y2NseHVYSEpjYmlBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUmhjbWRsZEM1d2IzTnBkR2x2YmlBcFhISmNiaUFnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhnNklIUm9hWE11Y21WamIzSmtXRkJ2Y3l4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prUm14cGNIQmxaRmtnS3lBMU1DeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2Vqb2dkR2hwY3k1aFluTnZiSFYwWlZCdmMybDBhVzl1TG5wY2NseHVJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVwYm1adlQzQmxibFJwYldVZ0tWeHlYRzRnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDbGNjbHh1SUNBZ0lDQWdJQ0F1YjI1RGIyMXdiR1YwWlNnZ1pHOXVaU0FwTzF4eVhHNWNjbHh1SUNBZ0lHNWxkeUJVVjBWRlRpNVVkMlZsYmlnZ1kyRnRaWEpoTG5CdmMybDBhVzl1SUNsY2NseHVJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZURvZ2RHaHBjeTV5WldOdmNtUllVRzl6SUNzZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdVkyRnRaWEpoUm05amRYTlFiM05wZEdsdmJpNTRJQ3NnT0RBc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhrNklHOXdkR2x2Ym5NdVkyOXVjM1JoYm5SekxtTmhiV1Z5WVVadlkzVnpVRzl6YVhScGIyNHVlU0F0SURVd0xGeHlYRzRnSUNBZ0lDQWdJSDBzSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVTF2ZG1WVWFXMWxJQ2xjY2x4dUlDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmxKbFkyOXlaQzV3Y205MGIzUjVjR1V1Wm14cGNFSmhZMnRTWldOdmNtUWdQU0JtZFc1amRHbHZiaUFvSUdSdmJtVWdMQ0J1YjBOaGJXVnlZVlIzWldWdUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dkR2hwY3k1emRHRjBaU0E5UFQwZ0oyWnNhWEJ3WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnVaWGNnVkZkRlJVNHVWSGRsWlc0b0lIUm9hWE11YldWemFDNXdiM05wZEdsdmJpQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWtaV3hoZVNnZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWFXNW1iMDl3Wlc1VWFXMWxJQzhnTWlBcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZVRvZ2IzQjBhVzl1Y3k1amIyNXpkR0Z1ZEhNdWNtVmpiM0prUW1GelpWbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTd2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVhVzVtYjA5d1pXNVVhVzFsSUNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdibVYzSUZSWFJVVk9MbFIzWldWdUtDQjBhR2x6TG0xbGMyZ3VjbTkwWVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJREJjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11YVc1bWIwOXdaVzVVYVcxbElDOGdNaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzVsWVhOcGJtY29JRlJYUlVWT0xrVmhjMmx1Wnk1UmRXRnlkR2xqTGs5MWRDQXBMbk4wWVhKMEtDbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0xtOXVRMjl0Y0d4bGRHVW9JR1J2Ym1VZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z1YjBOaGJXVnlZVlIzWldWdUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dWRmRGUlU0dVZIZGxaVzRvSUhSaGNtZGxkQzV3YjNOcGRHbHZiaUFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdVpHVnNZWGtvSUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1sdVptOVBjR1Z1VkdsdFpTQXZJRElnS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xuUnZLQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlRG9nZEdocGN5NXlaV052Y21SWVVHOXpMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJRGMxTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSG82SUhSb2FYTXVZV0p6YjJ4MWRHVlFiM05wZEdsdmJpNTZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1cGJtWnZUM0JsYmxScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTG1WaGMybHVaeWdnVkZkRlJVNHVSV0Z6YVc1bkxsRjFZWEowYVdNdVQzVjBJQ2t1YzNSaGNuUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1MGJ5Z2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJSFJvYVhNdWNtVmpiM0prV0ZCdmN5QXJJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVWnZZM1Z6VUc5emFYUnBiMjR1ZUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I1T2lCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZHYjJOMWMxQnZjMmwwYVc5dUxua3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1allXMWxjbUZOYjNabFZHbHRaU0FwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdVpXRnphVzVuS0NCVVYwVkZUaTVGWVhOcGJtY3VVWFZoY25ScFl5NVBkWFFnS1M1emRHRnlkQ2dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVhISmNiaThxUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEhKY2JqMGdJQ0FnSUNBZ0lDQWdJQ0JDUVZORklFMUZWRWhQUkZNZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1Y2NseHVkbUZ5SUdWNGRHVnVaQ0E5SUdaMWJtTjBhVzl1SUNnZ1pHVm1ZWFZzZEhNc0lHOXdkR2x2Ym5NZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUd0bGVTQnBiaUJ2Y0hScGIyNXpJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDZ2diM0IwYVc5dWN5d2dhMlY1SUNrZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBjMXNnYTJWNUlGMGdQU0J2Y0hScGIyNXpXeUJyWlhrZ1hUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQmtaV1poZFd4MGN6dGNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQmhibWx0WVhSbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnWkc5U1pXNWtaWElnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTZ2dZVzVwYldGMFpTQXBPMXh5WEc0Z0lDQWdJQ0FnSUhKbGJtUmxjaWdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHOXdkR2x2Ym5NdVpHVmlkV2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR0YwY3k1MWNHUmhkR1VvS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhKbGJtUmxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JVVjBWRlRpNTFjR1JoZEdVb0tUdGNjbHh1SUNBZ0lIVndaR0YwWlZOb2IzZHVVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnZjSFJwYjI1ekxtTmhiV1Z5WVUxdmRYTmxUVzkyWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2RHRnlaMlYwUTJGdFpYSmhVRzl6TG5nZ1BTQW9JRzF2ZFhObExuZ2dMeUJqWVc1MllYTlhhV1IwYUNBdElEQXVOU0FwSUNvZ01DNHlOVHNnTHk4Z2FXNTJaWEp6WlNCaGVHbHpQMXh5WEc0Z0lDQWdJQ0FnSUhSaGNtZGxkRU5oYldWeVlWQnZjeTU1SUQwZ0tDQnRiM1Z6WlM1NUlDOGdZMkZ1ZG1GelYybGtkR2dnTFNBd0xqVWdLU0FxSURBdU1qVTdYSEpjYmlBZ0lDQWdJQ0FnY205dmRFTnZiblJoYVc1bGNpNXliM1JoZEdsdmJpNTVJQ3M5SUc5d2RHbHZibk11WTI5dWMzUmhiblJ6TG1OaGJXVnlZVTF2ZFhObFRXOTJaVk53WldWa1dTQXFJQ2dnZEdGeVoyVjBRMkZ0WlhKaFVHOXpMbmdnTFNCeWIyOTBRMjl1ZEdGcGJtVnlMbkp2ZEdGMGFXOXVMbmtnS1R0Y2NseHVJQ0FnSUNBZ0lDQnliMjkwUTI5dWRHRnBibVZ5TG5KdmRHRjBhVzl1TG5vZ0t6MGdiM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFRXOTFjMlZOYjNabFUzQmxaV1JhSUNvZ0tDQjBZWEpuWlhSRFlXMWxjbUZRYjNNdWVTQXRJSEp2YjNSRGIyNTBZV2x1WlhJdWNtOTBZWFJwYjI0dWVpQXBPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQmpZVzFsY21FdWJHOXZhMEYwS0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1R0Y2NseHVYSEpjYmlBZ0lDQnBaaUFvSUc5d2RHbHZibk11Y0c5emRIQnliMk5sYzNOcGJtY2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSE5qWlc1bExtOTJaWEp5YVdSbFRXRjBaWEpwWVd3Z1BTQmtaWEIwYUUxaGRHVnlhV0ZzTzF4eVhHNGdJQ0FnSUNBZ0lISmxibVJsY21WeUxuSmxibVJsY2lnZ2MyTmxibVVzSUdOaGJXVnlZU3dnWkdWd2RHaFVZWEpuWlhRZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J6WTJWdVpTNXZkbVZ5Y21sa1pVMWhkR1Z5YVdGc0lEMGdiblZzYkR0Y2NseHVJQ0FnSUNBZ0lDQmpiMjF3YjNObGNpNXlaVzVrWlhJb0tUdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaVzVrWlhKbGNpNXlaVzVrWlhJb0lITmpaVzVsTENCallXMWxjbUVnS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc0dktseHlYRzRnS2lCTWIyRmthVzVuSUcxbGRHaHZaSE5jY2x4dUlDb3ZYSEpjYm5aaGNpQjFibXh2WVdSU1pXTnZjbVJ6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdadmNpQW9JSFpoY2lCcElEMGdNRHNnYVNBOElISmxZMjl5WkhNdWJHVnVaM1JvT3lCcEt5c2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITmJJR2tnWFM1a1lYUmhJRDBnYm5Wc2JEdGNjbHh1SUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJwSUYwdWMyVjBWVzVoWTNScGRtVW9LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdiRzloWkdWa1VtVmpiM0prY3lBOUlEQTdYSEpjYmlBZ0lDQnlaV052Y21SelJHRjBZVXhwYzNRZ1BTQmJYVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVjY2x4dWRtRnlJR3h2WVdSU1pXTnZjbVJ6SUQwZ1puVnVZM1JwYjI0Z0tDQnlaV052Y21SelJHRjBZU3dnYzJoMVptWnNaVUpsWm05eVpVeHZZV1JwYm1jc0lHUnZibVVnS1NCN1hISmNibHh5WEc0Z0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ2dkSEoxWlNBcE8xeHlYRzVjY2x4dUlDQWdJSE5vYjNkTWIyRmthVzVuS0NCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYkc5aFpHVmtVbVZqYjNKa2N5QStJREFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjFibXh2WVdSU1pXTnZjbVJ6S0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQnphSFZtWm14bFFtVm1iM0psVEc5aFpHbHVaeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhORVlYUmhJRDBnYzJoMVptWnNaU2dnY21WamIzSmtjMFJoZEdFZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWIzSWdLQ0IyWVhJZ2FTQTlJREE3SUdrZ1BDQnlaV052Y21SekxteGxibWQwYUNBbUppQnBJRHdnY21WamIzSmtjMFJoZEdFdWJHVnVaM1JvT3lCcEt5c2dLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaV052Y21Seld5QnBJRjB1WkdGMFlTQTlJSEpsWTI5eVpITkVZWFJoV3lCcElGMDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklHa2dYUzV6WlhSQlkzUnBkbVVvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtjMXNnYVNCZExtMWxjMmd1YldGMFpYSnBZV3d1YldGMFpYSnBZV3h6SUQwZ1oyVjBVbVZqYjNKa1RXRjBaWEpwWVd3b0lISmxZMjl5WkhORVlYUmhXeUJwSUYwdVkyOTJaWElzSUhKbFkyOXlaSE5FWVhSaFd5QnBJRjB1YUdGelUyeGxaWFpsSUNrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnTHk4Z2QyaDVJRDgvWEhKY2JpQWdJQ0FnSUNBZ0x5OGdiRzloWkdWa1VtVmpiM0prY3lBOUlISmxZMjl5WkhORVlYUmhMbXhsYm1kMGFDQThJSEpsWTI5eVpITXViR1Z1WjNSb0lEOGdjbVZqYjNKa2MwUmhkR0V1YkdWdVozUm9JRG9nY21WamIzSmtjeTVzWlc1bmRHZzdYSEpjYmlBZ0lDQWdJQ0FnYkc5aFpHVmtVbVZqYjNKa2N5QTlJSEpsWTI5eVpITXViR1Z1WjNSb08xeHlYRzRnSUNBZ0lDQWdJSEpsWTI5eVpITkVZWFJoVEdsemRDQTlJSEpsWTI5eVpITkVZWFJoTzF4eVhHNGdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvSUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2hwWkdWTWIyRmthVzVuS0NCc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0FwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbTl1VEc5aFpHbHVaMFZ1WkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NCa2IyNWxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1J2Ym1Vb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU3dnTWpBd01DQXBPMXh5WEc0Z0lDQWdmU0FwTzF4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhOb2RXWm1iR1ZTWldOdmNtUnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJSFpoY2lCemFIVm1abXhsWkZKbFkyOXlaSE1nUFNCeVpXTnZjbVJ6UkdGMFlVeHBjM1E3WEhKY2JpQWdJQ0J6YUhWbVpteGxaRkpsWTI5eVpITWdQU0J6YUhWbVpteGxLQ0J6YUhWbVpteGxaRkpsWTI5eVpITWdLVHRjY2x4dUlDQWdJR3h2WVdSU1pXTnZjbVJ6S0NCemFIVm1abXhsWkZKbFkyOXlaSE1nS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCU1JVTlBVa1JUSUZORlRFVkRWRWxQVGlCTlJWUklUMFJUSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzUyWVhJZ2MyVnNaV04wVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NCcFpDQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHbHVabTlRWVc1bGJGTjBZWFJsSUNFOVBTQW5iM0JsYm1sdVp5Y2dKaVlnYVc1bWIxQmhibVZzVTNSaGRHVWdJVDA5SUNkamJHOXphVzVuSnlBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2MyVnNaV04wWldSU1pXTnZjbVFnUFNCcFpEdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWm14cGNGTmxiR1ZqZEdWa1VtVmpiM0prSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2djbVZqYjNKa2Mxc2djMlZzWldOMFpXUlNaV052Y21RZ1hTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdabWxzYkVsdVptOVFZVzVsYkNnZ2NtVmpiM0prYzFzZ2MyVnNaV04wWldSU1pXTnZjbVFnWFNBcE8xeHlYRzRnSUNBZ0lDQWdJR2x1Wm05UVlXNWxiRk4wWVhSbElEMGdKMjl3Wlc1cGJtY25PMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnlaV052Y21Seld5QnpaV3hsWTNSbFpGSmxZMjl5WkNCZExtWnNhWEJTWldOdmNtUW9JR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHVabTlRWVc1bGJGTjBZWFJsSUQwZ0oyOXdaVzVsWkNjN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgwZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2IzQjBhVzl1Y3k1dmJrbHVabTlRWVc1bGJFOXdaVzVsWkNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCelpYUlVhVzFsYjNWMEtDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbVlXUmxTVzRvSUdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MExDQnZjSFJwYjI1ekxtbHVabTlRWVc1bGJFOXdZV05wZEhrZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dNekF3SUNrN1hISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1pteHBjRUpoWTJ0VFpXeGxZM1JsWkZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNobWIzSmpaU2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYVc1bWIxQmhibVZzVTNSaGRHVWdQVDA5SUNkdmNHVnVaV1FuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbVlXUmxUM1YwS0NCcGJtWnZRMjl1ZEdGcGJtVnlSV3hsYldWdWRDQXBPMXh5WEc0Z0lDQWdJQ0FnSUdsdVptOVFZVzVsYkZOMFlYUmxJRDBnSjJOc2IzTnBibWNuTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRMbVpzYVhCQ1lXTnJVbVZqYjNKa0tDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5SUNkamJHOXpaV1FuTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J2Y0hScGIyNXpMbTl1U1c1bWIxQmhibVZzUTJ4dmMyVmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBzSUdadmNtTmxJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnZFhCa1lYUmxVMmh2ZDI1U1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMk5zYjNObFpDY2dKaVlnYzJodmQyNVNaV052Y21RZ0lUMGdjMlZzWldOMFpXUlNaV052Y21RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvSjNWd1pHRjBaVk5vYjNkdVVtVmpiM0prTGk0bktUdGNjbHh1SUNBZ0lDQWdJQ0J6YUc5M2JsSmxZMjl5WkNBOUlITmxiR1ZqZEdWa1VtVmpiM0prTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYjNJZ0tDQjJZWElnY21WamIzSmtTV1FnUFNBd095QnlaV052Y21SSlpDQThJR3h2WVdSbFpGSmxZMjl5WkhNN0lISmxZMjl5WkVsa0t5c2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JSE5sYkdWamRHVmtVbVZqYjNKa0lEMDlJQzB4SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaSE5iSUhKbFkyOXlaRWxrSUYwdWNIVnphRkpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnZ2NtVmpiM0prU1dRZ1BpQnpaV3hsWTNSbFpGSmxZMjl5WkNBbUpseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa1NXUWdQaUJ5WldOdmNtUnpXeUJ6Wld4bFkzUmxaRkpsWTI5eVpDQmRMbU55WVhSbFNXUWdLaUJ2Y0hScGIyNXpMbkpsWTI5eVpITlFaWEpEY21GMFpTQW1KbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtTV1FnUENBb0lISmxZMjl5WkhOYklITmxiR1ZqZEdWa1VtVmpiM0prSUYwdVkzSmhkR1ZKWkNBcUlHOXdkR2x2Ym5NdWNtVmpiM0prYzFCbGNrTnlZWFJsSUNrZ0t5QnZjSFJwYjI1ekxuSmxZMjl5WkhOUVpYSkRjbUYwWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVJ6V3lCeVpXTnZjbVJKWkNCZExuQjFiR3hTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lISmxZMjl5WkVsa0lEMDlJSE5sYkdWamRHVmtVbVZqYjNKa0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkhOYklISmxZMjl5WkVsa0lGMHVjMmh2ZDFKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUnpXeUJ5WldOdmNtUkpaQ0JkTG5CMWMyaFNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2NtVnpaWFJUYUc5M2JsSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ2dabTl5WTJVZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dKaVlnSVdadmNtTmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtYkdsd1FtRmphMU5sYkdWamRHVmtVbVZqYjNKa0tDazdYSEpjYmx4eVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnSVQwOUlDZHZjR1Z1YVc1bkp5QW1KaUJwYm1adlVHRnVaV3hUZEdGMFpTQWhQVDBnSjJOc2IzTnBibWNuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuYjNCbGJtVmtKeUFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm14cGNFSmhZMnRUWld4bFkzUmxaRkpsWTI5eVpDaDBjblZsS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lITmxiR1ZqZEdWa1VtVmpiM0prSUQwZ0xURTdYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUlhSVVZPTGxSM1pXVnVLQ0IwWVhKblpYUXVjRzl6YVhScGIyNGdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkRzhvSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZzZJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMblJoY21kbGRFSmhjMlZRYjNOcGRHbHZiaTU0TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2VUb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVkR0Z5WjJWMFFtRnpaVkJ2YzJsMGFXOXVMbmtzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCNk9pQnZjSFJwYjI1ekxtTnZibk4wWVc1MGN5NTBZWEpuWlhSQ1lYTmxVRzl6YVhScGIyNHVlbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMQ0J2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRk5iM1psVkdsdFpTQXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDNWxZWE5wYm1jb0lGUlhSVVZPTGtWaGMybHVaeTVSZFdGeWRHbGpMazkxZENBcExuTjBZWEowS0NrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1bGR5QlVWMFZGVGk1VWQyVmxiaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVJQ2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMblJ2S0NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjRPaUJ2Y0hScGIyNXpMbU52Ym5OMFlXNTBjeTVqWVcxbGNtRkNZWE5sVUc5emFYUnBiMjR1ZUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIazZJRzl3ZEdsdmJuTXVZMjl1YzNSaGJuUnpMbU5oYldWeVlVSmhjMlZRYjNOcGRHbHZiaTU1TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2Vqb2diM0IwYVc5dWN5NWpiMjV6ZEdGdWRITXVZMkZ0WlhKaFFtRnpaVkJ2YzJsMGFXOXVMbnBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3dnYjNCMGFXOXVjeTVqYjI1emRHRnVkSE11WTJGdFpYSmhUVzkyWlZScGJXVWdLVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVaV0Z6YVc1bktDQlVWMFZGVGk1RllYTnBibWN1VVhWaGNuUnBZeTVQZFhRZ0tTNXpkR0Z5ZENncE8xeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlITmxiR1ZqZEZCeVpYWlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JseHlYRzRnSUNBZ2MyVnNaV04wVW1WamIzSmtLR2RsZEZCeVpYWkJkbUZwYkdGaWJHVlNaV052Y21Rb2MyVnNaV04wWldSU1pXTnZjbVFwS1R0Y2NseHVJQ0FnSUZ4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUhObGJHVmpkRTVsZUhSU1pXTnZjbVFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYzJWc1pXTjBVbVZqYjNKa0tHZGxkRTVsZUhSQmRtRnBiR0ZpYkdWU1pXTnZjbVFvYzJWc1pXTjBaV1JTWldOdmNtUXBLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1oyVjBVSEpsZGtGMllXbHNZV0pzWlZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNobWNtOXRVbVZqYjNKa0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQm1jbTl0VW1WamIzSmtJRDA5SUMweElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1jbTl0VW1WamIzSmtJRDBnYkc5aFpHVmtVbVZqYjNKa2N5QXRJREU3WEhKY2JseHlYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dabkp2YlZKbFkyOXlaQ0E4SUd4dllXUmxaRkpsWTI5eVpITWdMU0F4SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbWNtOXRVbVZqYjNKa0lEMGdabkp2YlZKbFkyOXlaQ0FySURFN1hISmNibHh5WEc0Z0lDQWdmU0JsYkhObElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puSnZiVkpsWTI5eVpDQTlJREE3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQnlaV052Y21Seld5Qm1jbTl0VW1WamIzSmtJRjB1WVdOMGFYWmxJRDhnWm5KdmJWSmxZMjl5WkNBNklHZGxkRkJ5WlhaQmRtRnBiR0ZpYkdWU1pXTnZjbVFvWm5KdmJWSmxZMjl5WkNrN1hISmNiaUFnSUNCY2NseHVmVHRjY2x4dVhISmNiblpoY2lCblpYUk9aWGgwUVhaaGFXeGhZbXhsVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0daeWIyMVNaV052Y21RcElIdGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHWnliMjFTWldOdmNtUWdQVDBnTFRFZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JzYjJGa1pXUlNaV052Y21SeklDMGdNVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQm1jbTl0VW1WamIzSmtJRDRnTUNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1puSnZiVkpsWTI5eVpDQTlJR1p5YjIxU1pXTnZjbVFnTFNBeE8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnliMjFTWldOdmNtUWdQU0JzYjJGa1pXUlNaV052Y21SeklDMGdNVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlISmxZMjl5WkhOYklHWnliMjFTWldOdmNtUWdYUzVoWTNScGRtVWdQeUJtY205dFVtVmpiM0prSURvZ1oyVjBUbVY0ZEVGMllXbHNZV0pzWlZKbFkyOXlaQ2htY205dFVtVmpiM0prS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdibUYyYVdkaGRHVlNaV052Y21SeklEMGdablZ1WTNScGIyNGdLQ0JrYVhKbFkzUnBiMjRnS1NCN1hISmNibHh5WEc0Z0lDQWdhV1lnS0NCcGJtWnZVR0Z1Wld4VGRHRjBaU0E5UFQwZ0oyTnNiM05sWkNjZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnWkdseVpXTjBhVzl1SUQwOVBTQW5jSEpsZGljZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUlFjbVYyVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUk9aWGgwVW1WamIzSmtLQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDFjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dKaVlnYjNCMGFXOXVjeTVqYkc5elpVbHVabTlRWVc1bGJFOXVVMk55YjJ4c0lDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQm1iR2x3UW1GamExTmxiR1ZqZEdWa1VtVmpiM0prS0NrN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCelkzSnZiR3hTWldOdmNtUnpJRDBnWm5WdVkzUnBiMjRnS0NCaVlYTmxXU3dnYjJ4a1JHVnNkR0VnS1NCN1hISmNibHh5WEc0Z0lDQWdiMnhrUkdWc2RHRWdQU0FoYjJ4a1JHVnNkR0VnZkh3Z1RXRjBhQzVoWW5Nb0lHOXNaRVJsYkhSaElDa2dQaUF3TGpVZ1B5QXdMalVnT2lCTllYUm9MbUZpY3lnZ2IyeGtSR1ZzZEdFZ0tUdGNjbHh1SUNBZ0lIWmhjaUJwYm5abGNuTmxSR1ZzZEdFZ1BTQXhJQzBnYjJ4a1JHVnNkR0U3WEhKY2JpQWdJQ0IyWVhJZ2MyTnliMnhzVTNCbFpXUWdQU0JwYm5abGNuTmxSR1ZzZEdFZ0tpQnBiblpsY25ObFJHVnNkR0VnS2lCcGJuWmxjbk5sUkdWc2RHRWdLaUF6TURBN1hISmNibHh5WEc0Z0lDQWdjMk55YjJ4c1VtVmpiM0prYzFScGJXVnZkWFFnUFNCelpYUlVhVzFsYjNWMEtDQm1kVzVqZEdsdmJpQW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5WlhJdVpHOXRSV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVZV1JrS0NkbmNtRmlKeWs3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR1JsYkhSaElEMGdLQ0JpWVhObFdTQXRJRzF2ZFhObExua2dLU0F2SUdOaGJuWmhjMGhsYVdkb2REdGNjbHh1SUNBZ0lDQWdJQ0JwWmlBb0lHUmxiSFJoSUQ0Z01DQXBJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjMlZzWldOMFRtVjRkRkpsWTI5eVpDZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVRrVllWQ0JTUlVOUFVrUWdYQ0lnS3lCa1pXeDBZU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2daR1ZzZEdFZ1BDQXdJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bFkzUlFjbVYyVW1WamIzSmtLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSlFVa1ZXSUZKRlEwOVNSQ0JjSWlBcklHUmxiSFJoS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnYzJOeWIyeHNVbVZqYjNKa2N5Z2dZbUZ6WlZrc0lHUmxiSFJoSUNrN1hISmNiaUFnSUNCOUxDQnpZM0p2Ykd4VGNHVmxaQ0FwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm1hV3hzU1c1bWIxQmhibVZzSUQwZ1puVnVZM1JwYjI0Z0tDQnlaV052Y21RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnYVdZZ0tDQnlaV052Y21RdVpHRjBZUzUwYVhSc1pTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkR2wwYkdWSmJtWnZSV3hsYldWdWRDNXBibTVsY2toVVRVd2dQU0J5WldOdmNtUXVaR0YwWVM1MGFYUnNaVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0NCeVpXTnZjbVF1WkdGMFlTNWhjblJwYzNRZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHRnlkR2x6ZEVsdVptOUZiR1Z0Wlc1MExtbHVibVZ5U0ZSTlRDQTlJSEpsWTI5eVpDNWtZWFJoTG1GeWRHbHpkRHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdhV1lnS0NCeVpXTnZjbVF1WkdGMFlTNWpiM1psY2lBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOTJaWEpKYm1adlJXeGxiV1Z1ZEM1emRIbHNaUzVpWVdOclozSnZkVzVrU1cxaFoyVWdQU0FuZFhKc0tDY2dLeUJ5WldOdmNtUXVaR0YwWVM1amIzWmxjaUFySUNjcEp6dGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNWNjbHh1THlvOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNjbHh1UFNBZ0lDQWdJQ0FnSUNBZ0lFVldSVTVVVXlCSVFVNUVURWxPUnlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzUyWVhJZ2IyNU5iM1Z6WlUxdmRtVkZkbVZ1ZENBOUlHWjFibU4wYVc5dUlDZ2daU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQjJZWElnYlY5d2IzTjRJRDBnTUN4Y2NseHVJQ0FnSUNBZ0lDQnRYM0J2YzNrZ1BTQXdMRnh5WEc0Z0lDQWdJQ0FnSUdWZmNHOXplQ0E5SURBc1hISmNiaUFnSUNBZ0lDQWdaVjl3YjNONUlEMGdNQ3hjY2x4dUlDQWdJQ0FnSUNCdlltb2dQU0IwYUdsek8xeHlYRzVjY2x4dUlDQWdJQzh2WjJWMElHMXZkWE5sSUhCdmMybDBhVzl1SUc5dUlHUnZZM1Z0Wlc1MElHTnliM056WW5KdmQzTmxjbHh5WEc0Z0lDQWdhV1lnS0NBaFpTQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaU0E5SUhkcGJtUnZkeTVsZG1WdWREdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0JsTG5CaFoyVllJSHg4SUdVdWNHRm5aVmtnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplQ0E5SUdVdWNHRm5aVmc3WEhKY2JpQWdJQ0FnSUNBZ2JWOXdiM041SUQwZ1pTNXdZV2RsV1R0Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHVXVZMnhwWlc1MFdDQjhmQ0JsTG1Oc2FXVnVkRmtnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUcxZmNHOXplQ0E5SUdVdVkyeHBaVzUwV0NBcklHUnZZM1Z0Wlc1MExtSnZaSGt1YzJOeWIyeHNUR1ZtZENBclhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6WTNKdmJHeE1aV1owTzF4eVhHNGdJQ0FnSUNBZ0lHMWZjRzl6ZVNBOUlHVXVZMnhwWlc1MFdTQXJJR1J2WTNWdFpXNTBMbUp2WkhrdWMyTnliMnhzVkc5d0lDdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OamNtOXNiRlJ2Y0R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHk5blpYUWdjR0Z5Wlc1MElHVnNaVzFsYm5RZ2NHOXphWFJwYjI0Z2FXNGdaRzlqZFcxbGJuUmNjbHh1SUNBZ0lHbG1JQ2dnYjJKcUxtOW1abk5sZEZCaGNtVnVkQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaVjl3YjNONElDczlJRzlpYWk1dlptWnpaWFJNWldaME8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCbFgzQnZjM2tnS3owZ2IySnFMbTltWm5ObGRGUnZjRHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdmU0IzYUdsc1pTQW9JRzlpYWlBOUlHOWlhaTV2Wm1aelpYUlFZWEpsYm5RZ0tUc2dMeThnYW5Ob2FXNTBJR2xuYm05eVpUcHNhVzVsWEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzh2SUcxdmRYTmxJSEJ2YzJsMGFXOXVJRzFwYm5WeklHVnNiU0J3YjNOcGRHbHZiaUJwY3lCdGIzVnpaWEJ2YzJsMGFXOXVJSEpsYkdGMGFYWmxJSFJ2SUdWc1pXMWxiblE2WEhKY2JpQWdJQ0J0YjNWelpTNTRJRDBnYlY5d2IzTjRJQzBnWlY5d2IzTjRPMXh5WEc0Z0lDQWdiVzkxYzJVdWVTQTlJRzFmY0c5emVTQXRJR1ZmY0c5emVUdGNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnZibE5qY205c2JFVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lIZG9aV1ZzUkdseVpXTjBhVzl1S0NCbElDa2dQQ0F3SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVlYWnBaMkYwWlZKbFkyOXlaSE1vSUNkd2NtVjJKeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc1aGRtbG5ZWFJsVW1WamIzSmtjeWdnSjI1bGVIUW5JQ2s3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCdmJrTnNhV05yUlhabGJuUWdQU0JtZFc1amRHbHZiaUFvSUcxdmRYTmxSRzkzYmxCdmN5QXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2x1Wm05UVlXNWxiRk4wWVhSbElEMDlQU0FuWTJ4dmMyVmtKeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlIWmxZM1J2Y2xCdmN5QTlJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nS0NBb0lDZ2diVzkxYzJWRWIzZHVVRzl6TG5nZ0xTQnlaVzVrWlhKbGNpNWtiMjFGYkdWdFpXNTBMbTltWm5ObGRFeGxablFnS1NBdklDZ2djbVZ1WkdWeVpYSXVaRzl0Uld4bGJXVnVkQzUzYVdSMGFDQXBJQ2tnS2lBeUlDMGdNU0FwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I1T2lBb0lDMG9JQ2dnYlc5MWMyVkViM2R1VUc5ekxua2dMU0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG05bVpuTmxkRlJ2Y0NBcElDOGdLQ0J5Wlc1a1pYSmxjaTVrYjIxRmJHVnRaVzUwTG1obGFXZG9kQ0FwSUNrZ0tpQXlJQ3NnTVNBcExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNk9pQXdMalZjY2x4dUlDQWdJQ0FnSUNCOU8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCMllYSWdkbVZqZEc5eUlEMGdibVYzSUZSSVVrVkZMbFpsWTNSdmNqTW9JSFpsWTNSdmNsQnZjeTU0TENCMlpXTjBiM0pRYjNNdWVTd2dkbVZqZEc5eVVHOXpMbm9nS1R0Y2NseHVJQ0FnSUNBZ0lDQjJaV04wYjNJdWRXNXdjbTlxWldOMEtDQmpZVzFsY21FZ0tUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2NtRjVZMkZ6ZEdWeUlEMGdibVYzSUZSSVVrVkZMbEpoZVdOaGMzUmxjaWdnWTJGdFpYSmhMbkJ2YzJsMGFXOXVMQ0IyWldOMGIzSXVjM1ZpS0NCallXMWxjbUV1Y0c5emFYUnBiMjRnS1M1dWIzSnRZV3hwZW1Vb0tTQXBPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnBiblJsY25ObFkzUnpJRDBnY21GNVkyRnpkR1Z5TG1sdWRHVnljMlZqZEU5aWFtVmpkSE1vSUdOeVlYUmxjME52Ym5SaGFXNWxjaTVqYUdsc1pISmxiaXdnZEhKMVpTQXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCcGJuUmxjbk5sWTNRZ2MyOXRaWFJvYVc1blhISmNiaUFnSUNBZ0lDQWdhV1lnS0NCcGJuUmxjbk5sWTNSekxteGxibWQwYUNBK0lEQWdLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZMnhwWTJ0bFpGSmxZMjl5WkR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWRsZENCMGFHVWdabWx5YzNRZ2RtbHphV0pzWlNCeVpXTnZjbVFnYVc1MFpYSnpaV04wWldSY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDZ2dkbUZ5SUdrZ1BTQXdPeUJwSUR3Z2FXNTBaWEp6WldOMGN5NXNaVzVuZEdnN0lHa3JLeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQnBiblJsY21ObGNIUWdZU0J0WlhOb0lIZG9hV05vSUdseklHNXZkQ0JoSUhKbFkyOXlaQ3dnWW5KbFlXdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnZ2RIbHdaVzltS0dsdWRHVnljMlZqZEhOYklHa2dYUzV2WW1wbFkzUXVjbVZqYjNKa1NXUXBJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2dhVzUwWlhKelpXTjBjMXNnYVNCZExtOWlhbVZqZEM1MmFYTnBZbXhsSUNZbUlHbHVkR1Z5YzJWamRITmJJR2tnWFM1dlltcGxZM1F1Y21WamIzSmtTV1FnUGowZ01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4cFkydGxaRkpsWTI5eVpDQTlJSEpsWTI5eVpITmJJR2x1ZEdWeWMyVmpkSE5iSUdrZ1hTNXZZbXBsWTNRdWNtVmpiM0prU1dRZ1hUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHaGxjbVVnYVhNZ2IyNWxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2dnWTJ4cFkydGxaRkpsWTI5eVpDQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSUhObGJHVmpkR1ZrVW1WamIzSmtJRDA5UFNCamJHbGphMlZrVW1WamIzSmtMbWxrSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iR2x3VTJWc1pXTjBaV1JTWldOdmNtUW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaV3hsWTNSU1pXTnZjbVFvSUdOc2FXTnJaV1JTWldOdmNtUXVhV1FnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCYkd3Z2FXNTBaWEp6WldOMFpXUWdjbVZqYjNKa2N5QmhjbVVnYm05MElIWnBjMmxpYkdWelhISmNiaUFnSUNBZ0lDQWdJQ0FnSUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMlYwVTJodmQyNVNaV052Y21Rb0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUM4dklFNXZJSEpsWTI5eVpDQm9ZWE1nWW1WbGJpQnBiblJsY25ObFkzUmxaRnh5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WelpYUlRhRzkzYmxKbFkyOXlaQ2dwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnYjI1TmIzVnpaVVJ2ZDI1RmRtVnVkQ0E5SUdaMWJtTjBhVzl1SUNnZ1pTQXBJSHRjY2x4dVhISmNiaUFnSUNCamJHVmhja2x1ZEdWeWRtRnNLQ0J6WTNKdmJHeFNaV052Y21SelZHbHRaVzkxZENBcE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2FXNW1iMUJoYm1Wc1UzUmhkR1VnUFQwOUlDZGpiRzl6WldRbklDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpZM0p2Ykd4U1pXTnZjbVJ6S0NCdGIzVnpaUzU1SUNrN1hISmNiaUFnSUNBZ0lDQWdiVzkxYzJWRWIzZHVVRzl6SUQwZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNE9pQnRiM1Z6WlM1NExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNU9pQnRiM1Z6WlM1NVhISmNiaUFnSUNBZ0lDQWdmVHRjY2x4dVhISmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tDQnBibVp2VUdGdVpXeFRkR0YwWlNBOVBUMGdKMjl3Wlc1bFpDY2dKaVlnYjNCMGFXOXVjeTVqYkc5elpVbHVabTlRWVc1bGJFOXVRMnhwWTJzZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHWnNhWEJDWVdOclUyVnNaV04wWldSU1pXTnZjbVFvS1R0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4wN1hISmNibHh5WEc1MllYSWdiMjVOYjNWelpWVndSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9JR1VnS1NCN1hISmNibHh5WEc0Z0lDQWdZMnhsWVhKSmJuUmxjblpoYkNnZ2MyTnliMnhzVW1WamIzSmtjMVJwYldWdmRYUWdLVHRjY2x4dUlDQWdJSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2duWjNKaFlpY3BPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dZMjl2Y21SelJYRjFZV3h6UVhCd2NtOTRLQ0J0YjNWelpVUnZkMjVRYjNNc0lHMXZkWE5sTENCdmNIUnBiMjV6TG1OdmJuTjBZVzUwY3k1bmNtRmlVMlZ1YzJsMGFYWnBkSGtnS1NBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2IyNURiR2xqYTBWMlpXNTBLQ0J0YjNWelpVUnZkMjVRYjNNZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHOXVTMlY1Ukc5M2JrVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tDQmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnWlM1clpYbERiMlJsSUQwOVBTQXpOeUI4ZkNCbExtdGxlVU52WkdVZ1BUMDlJRE00SUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdVlYWnBaMkYwWlZKbFkyOXlaSE1vSUNkdVpYaDBKeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JR1V1YTJWNVEyOWtaU0E5UFQwZ016a2dmSHdnWlM1clpYbERiMlJsSUQwOVBTQTBNQ0FwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYm1GMmFXZGhkR1ZTWldOdmNtUnpLQ0FuY0hKbGRpY2dLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2IyNVhhVzVrYjNkU1pYTnBlbVZGZG1WdWRDQTlJR1oxYm1OMGFXOXVJQ2dnWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0JqWVd4amRXeGhkR1ZEWVc1MllYTlRhWHBsS0NrN1hISmNiaUFnSUNCelpYUkRZVzUyWVhORWFXMWxibk5wYjI1ektDazdYSEpjYmx4eVhHNGdJQ0FnY21WdVpHVnlaWEl1YzJWMFUybDZaU2dnWTJGdWRtRnpWMmxrZEdnc0lHTmhiblpoYzBobGFXZG9kQ0FwTzF4eVhHNGdJQ0FnWTJGdFpYSmhMbUZ6Y0dWamRDQTlJR05oYm5aaGMxZHBaSFJvSUM4Z1kyRnVkbUZ6U0dWcFoyaDBPMXh5WEc0Z0lDQWdZMkZ0WlhKaExuVndaR0YwWlZCeWIycGxZM1JwYjI1TllYUnlhWGdvS1R0Y2NseHVYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11ZEVSbGNIUm9MblpoYkhWbElEMGdaR1Z3ZEdoVVlYSm5aWFE3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWMybDZaUzUyWVd4MVpTNXpaWFFvSUdOaGJuWmhjMWRwWkhSb0xDQmpZVzUyWVhOSVpXbG5hSFFnS1R0Y2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NTBaWGgwWld3dWRtRnNkV1V1YzJWMEtDQXhMakFnTHlCallXNTJZWE5YYVdSMGFDd2dNUzR3SUM4Z1kyRnVkbUZ6U0dWcFoyaDBJQ2s3WEhKY2JpQWdJQ0JHV0VGQkxuVnVhV1p2Y20xekxuSmxjMjlzZFhScGIyNHVkbUZzZFdVdWMyVjBLQ0F4SUM4Z1kyRnVkbUZ6VjJsa2RHZ3NJREVnTHlCallXNTJZWE5JWldsbmFIUWdLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh5WEc0OUlDQWdJQ0FnSUNBZ0lDQWdJQ0JWU1NCTlJWUklUMFJUSUNBZ0lDQWdJQ0FnSUNBZ0lDQTlYSEpjYmowOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzUyWVhJZ2MyaHZkMHh2WVdScGJtY2dQU0JtZFc1amRHbHZiaUFvSUdSdmJtVWdLU0I3WEhKY2JseHlYRzRnSUNBZ1ptRmtaVWx1S0NCc2IyRmthVzVuUTI5dWRHRnBibVZ5Uld4bGJXVnVkQ3dnTVN3Z1pHOXVaU0FwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQm9hV1JsVEc5aFpHbHVaeUE5SUdaMWJtTjBhVzl1SUNnZ1pHOXVaU0FwSUh0Y2NseHVYSEpjYmlBZ0lDQm1ZV1JsVDNWMEtDQnNiMkZrYVc1blEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEN3Z1pHOXVaU0FwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmx4eVhHNWNjbHh1WEhKY2JpOHFQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjY2x4dVBTQWdJQ0FnSUNBZ0lDQWdJRWxPU1ZSSlFVeEpVMEZVU1U5T0lDQWdJQ0FnSUNBZ0lDQWdQVnh5WEc0OVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBTb3ZYSEpjYmx4eVhHNWNjbHh1ZG1GeUlHbHVhWFJUWTJWdVpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQXZMeUJ6WTJWdVpTd2djbVZ1WkdWeVpYSXNJR05oYldWeVlTd3VMaTVjY2x4dUlDQWdJSE5qWlc1bElEMGdibVYzSUZSSVVrVkZMbE5qWlc1bEtDazdYSEpjYmx4eVhHNGdJQ0FnY21WdVpHVnlaWElnUFNCdVpYY2dWRWhTUlVVdVYyVmlSMHhTWlc1a1pYSmxjaWdnZTF4eVhHNGdJQ0FnSUNBZ0lHRnVkR2xoYkdsaGN6b2dkSEoxWlZ4eVhHNGdJQ0FnZlNBcE8xeHlYRzRnSUNBZ2NtVnVaR1Z5WlhJdWMyVjBVMmw2WlNnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZENBcE8xeHlYRzVjY2x4dUlDQWdJR05oYm5aaGMwTnZiblJoYVc1bGNrVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9JSEpsYm1SbGNtVnlMbVJ2YlVWc1pXMWxiblFnS1R0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG1SdmJVVnNaVzFsYm5RdWFXUWdQU0JjSW1OdmJuUmxlSFJjSWp0Y2NseHVJQ0FnSUhKbGJtUmxjbVZ5TG5ObGRFTnNaV0Z5UTI5c2IzSW9JRzl3ZEdsdmJuTXVZbUZqYTJkeWIzVnVaRU52Ykc5eUxDQXhJQ2s3WEhKY2JseHlYRzRnSUNBZ1kyRnRaWEpoSUQwZ2JtVjNJRlJJVWtWRkxsQmxjbk53WldOMGFYWmxRMkZ0WlhKaEtDQTBOU3dnWTJGdWRtRnpWMmxrZEdnZ0x5QmpZVzUyWVhOSVpXbG5hSFFzSURBdU1Td2dNakF3TURBZ0tUdGNjbHh1SUNBZ0lHTmhiV1Z5WVM1bWIyTmhiRXhsYm1kMGFDQTlJRFExTzF4eVhHNGdJQ0FnWTJGdFpYSmhMbVp5WVcxbFUybDZaU0E5SURNeU8xeHlYRzRnSUNBZ1kyRnRaWEpoTG5ObGRFeGxibk1vSUdOaGJXVnlZUzVtYjJOaGJFeGxibWQwYUN3Z1kyRnRaWEpoTG1aeVlXMWxVMmw2WlNBcE8xeHlYRzVjY2x4dUlDQWdJSFJoY21kbGRDQTlJRzVsZHlCVVNGSkZSUzVQWW1wbFkzUXpSQ2dwTzF4eVhHNGdJQ0FnTHk4Z0lDQWdJQ0FnSUhSaGNtZGxkQ0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9LRzVsZHlCVVNGSkZSUzVDYjNoSFpXOXRaWFJ5ZVNneE1Dd2dNVEFzSURFd0xDQXhMQ0F4TENBeEtTazdYSEpjYmlBZ0lDQXZMeUFnSUNBZ0lDQWdjMk5sYm1VdVlXUmtLSFJoY21kbGRDazdYSEpjYmlBZ0lDQmpZVzFsY21FdWJHOXZhMEYwS0NCMFlYSm5aWFF1Y0c5emFYUnBiMjRnS1R0Y2NseHVYSEpjYmlBZ0lDQjJZWElnZDI5dlpGOTBaWGgwZFhKbElEMGdWRWhTUlVVdVNXMWhaMlZWZEdsc2N5NXNiMkZrVkdWNGRIVnlaU2dnYjNCMGFXOXVjeTVqY21GMFpWUmxlSFIxY21VZ0tUdGNjbHh1SUNBZ0lIZHZiMlJmZEdWNGRIVnlaUzVoYm1semIzUnliM0I1SUQwZ2NtVnVaR1Z5WlhJdVoyVjBUV0Y0UVc1cGMyOTBjbTl3ZVNncE8xeHlYRzRnSUNBZ2QyOXZaRjl0WVhSbGNtbGhiQ0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9UR0Z0WW1WeWRFMWhkR1Z5YVdGc0tDQjdYSEpjYmlBZ0lDQWdJQ0FnYldGd09pQjNiMjlrWDNSbGVIUjFjbVZjY2x4dUlDQWdJSDBnS1R0Y2NseHVYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5SUQwZ2JtVjNJRlJJVWtWRkxrOWlhbVZqZERORUtDazdYSEpjYmlBZ0lDQmpjbUYwWlhORGIyNTBZV2x1WlhJZ1BTQnVaWGNnVkVoU1JVVXVUMkpxWldOME0wUW9LVHRjY2x4dUlDQWdJSE5qWlc1bExtRmtaQ2dnY205dmRFTnZiblJoYVc1bGNpQXBPMXh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2k1aFpHUW9JR055WVhSbGMwTnZiblJoYVc1bGNpQXBPMXh5WEc1Y2NseHVJQ0FnSUdsdWFYUkRjbUYwWlhNb0tUdGNjbHh1SUNBZ0lHbHVhWFJTWldOdmNtUnpLQ2s3WEhKY2JseHlYRzRnSUNBZ2JHbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVVHOXBiblJNYVdkb2RDZ2dNSGhHUmtaR1JrWXNJRzl3ZEdsdmJuTXViR2xuYUhSSmJuUmxibk5wZEhrZ0tpQXhMakVnS1R0Y2NseHVJQ0FnSUd4cFoyaDBMbkJ2YzJsMGFXOXVMbk5sZENnZ016QXdMQ0E0TUN3Z01DQXBPMXh5WEc0Z0lDQWdjMk5sYm1VdVlXUmtLQ0JzYVdkb2RDQXBPMXh5WEc1Y2NseHVJQ0FnSUd4bFpuUk1hV2RvZENBOUlHNWxkeUJVU0ZKRlJTNVFiMmx1ZEV4cFoyaDBLQ0F3ZUVaR1JrWkdSaXdnYjNCMGFXOXVjeTVzYVdkb2RFbHVkR1Z1YzJsMGVTQXFJREF1TmlBcE8xeHlYRzRnSUNBZ2JHVm1kRXhwWjJoMExuQnZjMmwwYVc5dUxuTmxkQ2dnTFRFd01Dd2dNekF3TENBeE1EQXdJQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUd4bFpuUk1hV2RvZENBcE8xeHlYRzVjY2x4dUlDQWdJSEpwWjJoMFRHbG5hSFFnUFNCdVpYY2dWRWhTUlVVdVVHOXBiblJNYVdkb2RDZ2dNSGhHUmtaR1JrWXNJRzl3ZEdsdmJuTXViR2xuYUhSSmJuUmxibk5wZEhrZ0tpQXdMallnS1R0Y2NseHVJQ0FnSUhKcFoyaDBUR2xuYUhRdWNHOXphWFJwYjI0dWMyVjBLQ0F0TVRBd0xDQXpNREFzSUMweE1EQXdJQ2s3WEhKY2JpQWdJQ0J6WTJWdVpTNWhaR1FvSUhKcFoyaDBUR2xuYUhRZ0tUdGNjbHh1WEhKY2JpQWdJQ0JwYm1sMFVHOXpkRkJ5YjJObGMzTnBibWNvS1R0Y2NseHVYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ0FuUkU5TlRXOTFjMlZUWTNKdmJHd25MQ0J2YmxOamNtOXNiRVYyWlc1MExDQm1ZV3h6WlNBcE8xeHlYRzRnSUNBZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ2dKMjF2ZFhObGQyaGxaV3duTENCdmJsTmpjbTlzYkVWMlpXNTBMQ0JtWVd4elpTQXBPMXh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWdnSjIxdmRYTmxiVzkyWlNjc0lHOXVUVzkxYzJWTmIzWmxSWFpsYm5Rc0lHWmhiSE5sSUNrN1hISmNiaUFnSUNCeWIyOTBRMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDQW5iVzkxYzJWa2IzZHVKeXdnYjI1TmIzVnpaVVJ2ZDI1RmRtVnVkQ3dnWm1Gc2MyVWdLVHRjY2x4dUlDQWdJSEp2YjNSRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkdGIzVnpaWFZ3Snl3Z2IyNU5iM1Z6WlZWd1JYWmxiblFzSUdaaGJITmxJQ2s3WEhKY2JseHlYRzRnSUNBZ2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSUNkclpYbGtiM2R1Snl3Z2IyNUxaWGxFYjNkdVJYWmxiblFzSUdaaGJITmxJQ2s3SUZ4eVhHNWNjbHh1SUNBZ0lHbG1JQ2dnYjNCMGFXOXVjeTUxY0dSaGRHVkRZVzUyWVhOVGFYcGxUMjVYYVc1a2IzZFNaWE5wZW1VZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NBbmNtVnphWHBsSnl3Z2IyNVhhVzVrYjNkU1pYTnBlbVZGZG1WdWRDd2dabUZzYzJVZ0tUdGNjbHh1WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5OGdSRTlOSUhObGRIVndYSEpjYmlBZ0lDQnliMjkwUTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNXdiM05wZEdsdmJpQTlJQ2R5Wld4aGRHbDJaU2M3WEhKY2JpQWdJQ0JqWVc1MllYTkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ0oyRmljMjlzZFhSbEp6dGNjbHh1SUNBZ0lHbHVabTlEYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExuQnZjMmwwYVc5dUlEMGdKMkZpYzI5c2RYUmxKenRjY2x4dUlDQWdJR3h2WVdScGJtZERiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG5CdmMybDBhVzl1SUQwZ0oyRmljMjlzZFhSbEp6dGNjbHh1WEhKY2JpQWdJQ0J6WlhSRFlXNTJZWE5FYVcxbGJuTnBiMjV6S0NrN1hISmNibHh5WEc0Z0lDQWdhVzVtYjBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2R1YjI1bEp6dGNjbHh1WEhKY2JpQWdJQ0JwWmlBb0lHOXdkR2x2Ym5NdVpHVmlkV2NnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsdWFYUkVaV0oxWnlncE8xeHlYRzRnSUNBZ0lDQWdJR2x1YVhSSFZVa29LVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc0Z0lDQWdZVzVwYldGMFpTZ3BPMXh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2x1YVhSUWIzTjBVSEp2WTJWemMybHVaeUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JrWlhCMGFGTm9ZV1JsY2lBOUlGUklVa1ZGTGxOb1lXUmxja3hwWWk1a1pYQjBhRkpIUWtFN1hISmNiaUFnSUNCa1pYQjBhRlZ1YVdadmNtMXpJRDBnVkVoU1JVVXVWVzVwWm05eWJYTlZkR2xzY3k1amJHOXVaU2dnWkdWd2RHaFRhR0ZrWlhJdWRXNXBabTl5YlhNZ0tUdGNjbHh1WEhKY2JpQWdJQ0JrWlhCMGFFMWhkR1Z5YVdGc0lEMGdibVYzSUZSSVVrVkZMbE5vWVdSbGNrMWhkR1Z5YVdGc0tDQjdYSEpjYmlBZ0lDQWdJQ0FnWm5KaFoyMWxiblJUYUdGa1pYSTZJR1JsY0hSb1UyaGhaR1Z5TG1aeVlXZHRaVzUwVTJoaFpHVnlMRnh5WEc0Z0lDQWdJQ0FnSUhabGNuUmxlRk5vWVdSbGNqb2daR1Z3ZEdoVGFHRmtaWEl1ZG1WeWRHVjRVMmhoWkdWeUxGeHlYRzRnSUNBZ0lDQWdJSFZ1YVdadmNtMXpPaUJrWlhCMGFGVnVhV1p2Y20xelhISmNiaUFnSUNCOUlDazdYSEpjYmlBZ0lDQmtaWEIwYUUxaGRHVnlhV0ZzTG1Kc1pXNWthVzVuSUQwZ1ZFaFNSVVV1VG05Q2JHVnVaR2x1Wnp0Y2NseHVYSEpjYmlBZ0lDQmtaWEIwYUZSaGNtZGxkQ0E5SUc1bGR5QlVTRkpGUlM1WFpXSkhURkpsYm1SbGNsUmhjbWRsZENnZ1kyRnVkbUZ6VjJsa2RHZ3NJR05oYm5aaGMwaGxhV2RvZEN3Z2UxeHlYRzRnSUNBZ0lDQWdJRzFwYmtacGJIUmxjam9nVkVoU1JVVXVUbVZoY21WemRFWnBiSFJsY2l4Y2NseHVJQ0FnSUNBZ0lDQnRZV2RHYVd4MFpYSTZJRlJJVWtWRkxrNWxZWEpsYzNSR2FXeDBaWElzWEhKY2JpQWdJQ0FnSUNBZ1ptOXliV0YwT2lCVVNGSkZSUzVTUjBKQlJtOXliV0YwWEhKY2JpQWdJQ0I5SUNrN1hISmNibHh5WEc0Z0lDQWdZMjl0Y0c5elpYSWdQU0J1WlhjZ1ZFaFNSVVV1UldabVpXTjBRMjl0Y0c5elpYSW9JSEpsYm1SbGNtVnlJQ2s3WEhKY2JpQWdJQ0JqYjIxd2IzTmxjaTVoWkdSUVlYTnpLQ0J1WlhjZ1ZFaFNSVVV1VW1WdVpHVnlVR0Z6Y3lnZ2MyTmxibVVzSUdOaGJXVnlZU0FwSUNrN1hISmNibHh5WEc1Y2NseHVJQ0FnSUM4cVBUMDlQVDA5UFQwOVBTQWdSR1Z3ZEdnZ2IyWWdabWxsYkdRZ2MyaGhaR1Z5SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JpQWdJQ0JrYjJZZ1BTQnVaWGNnVkVoU1JVVXVVMmhoWkdWeVVHRnpjeWdnVkVoU1JVVXVSRzlHVTJoaFpHVnlJQ2s3WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWRFUmxjSFJvTG5aaGJIVmxJRDBnWkdWd2RHaFVZWEpuWlhRN1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVjMmw2WlM1MllXeDFaUzV6WlhRb0lHTmhiblpoYzFkcFpIUm9MQ0JqWVc1MllYTklaV2xuYUhRZ0tUdGNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTUwWlhoMFpXd3VkbUZzZFdVdWMyVjBLQ0F4TGpBZ0x5QmpZVzUyWVhOWGFXUjBhQ3dnTVM0d0lDOGdZMkZ1ZG1GelNHVnBaMmgwSUNrN1hISmNibHh5WEc0Z0lDQWdMeTl0WVd0bElITjFjbVVnZEdoaGRDQjBhR1Z6WlNCMGQyOGdkbUZzZFdWeklHRnlaU0IwYUdVZ2MyRnRaU0JtYjNJZ2VXOTFjaUJqWVcxbGNtRXNJRzkwYUdWeWQybHpaU0JrYVhOMFlXNWpaWE1nZDJsc2JDQmlaU0IzY205dVp5NWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTU2Ym1WaGNpNTJZV3gxWlNBOUlHTmhiV1Z5WVM1dVpXRnlPeUF2TDJOaGJXVnlZU0JqYkdsd2NHbHVaeUJ6ZEdGeWRGeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbnBtWVhJdWRtRnNkV1VnUFNCallXMWxjbUV1Wm1GeU95QXZMMk5oYldWeVlTQmpiR2x3Y0dsdVp5QmxibVJjY2x4dVhISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabTlqWVd4RVpYQjBhQzUyWVd4MVpTQTlJRFU3SUM4dlptOWpZV3dnWkdsemRHRnVZMlVnZG1Gc2RXVWdhVzRnYldWMFpYSnpMQ0JpZFhRZ2VXOTFJRzFoZVNCMWMyVWdZWFYwYjJadlkzVnpJRzl3ZEdsdmJpQmlaV3h2ZDF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtWnZZMkZzVEdWdVozUm9MblpoYkhWbElEMGdZMkZ0WlhKaExtWnZZMkZzVEdWdVozUm9PeUF2TDJadlkyRnNJR3hsYm1kMGFDQnBiaUJ0YlZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtWnpkRzl3TG5aaGJIVmxJRDBnT0M0d095QXZMMll0YzNSdmNDQjJZV3gxWlZ4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuTm9iM2RHYjJOMWN5NTJZV3gxWlNBOUlHWmhiSE5sT3lBdkwzTm9iM2NnWkdWaWRXY2dabTlqZFhNZ2NHOXBiblFnWVc1a0lHWnZZMkZzSUhKaGJtZGxJQ2h2Y21GdVoyVWdQU0JtYjJOaGJDQndiMmx1ZEN3Z1lteDFaU0E5SUdadlkyRnNJSEpoYm1kbEtWeHlYRzVjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1dFlXNTFZV3hrYjJZdWRtRnNkV1VnUFNCMGNuVmxPeUF2TDIxaGJuVmhiQ0JrYjJZZ1kyRnNZM1ZzWVhScGIyNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTV1Wkc5bWMzUmhjblF1ZG1Gc2RXVWdQU0F4TVRzZ0x5OXVaV0Z5SUdSdlppQmliSFZ5SUhOMFlYSjBYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Ym1SdlptUnBjM1F1ZG1Gc2RXVWdQU0E0TURzZ0x5OXVaV0Z5SUdSdlppQmliSFZ5SUdaaGJHeHZabVlnWkdsemRHRnVZMlVnSUNBZ1hISmNiaUFnSUNCa2IyWXVkVzVwWm05eWJYTXVabVJ2Wm5OMFlYSjBMblpoYkhWbElEMGdNRHNnTHk5bVlYSWdaRzltSUdKc2RYSWdjM1JoY25SY2NseHVJQ0FnSUdSdlppNTFibWxtYjNKdGN5NW1aRzltWkdsemRDNTJZV3gxWlNBOUlERXdNRHNnTHk5bVlYSWdaRzltSUdKc2RYSWdabUZzYkc5bVppQmthWE4wWVc1alpTQmNjbHh1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVEyOURMblpoYkhWbElEMGdNQzR3TXpzZ0x5OWphWEpqYkdVZ2IyWWdZMjl1Wm5WemFXOXVJSE5wZW1VZ2FXNGdiVzBnS0RNMWJXMGdabWxzYlNBOUlEQXVNRE50YlNrZ0lDQWdYSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxuWnBaMjVsZEhScGJtY3VkbUZzZFdVZ1BTQm1ZV3h6WlRzZ0x5OTFjMlVnYjNCMGFXTmhiQ0JzWlc1eklIWnBaMjVsZEhScGJtYy9YSEpjYmx4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtRjFkRzltYjJOMWN5NTJZV3gxWlNBOUlIUnlkV1U3SUM4dmRYTmxJR0YxZEc5bWIyTjFjeUJwYmlCemFHRmtaWEkvSUdScGMyRmliR1VnYVdZZ2VXOTFJSFZ6WlNCbGVIUmxjbTVoYkNCbWIyTmhiRVJsY0hSb0lIWmhiSFZsWEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdVptOWpkWE11ZG1Gc2RXVXVjMlYwS0NBd0xqTTFMQ0F3TGpNMUlDazdJQzh2SUdGMWRHOW1iMk4xY3lCd2IybHVkQ0J2YmlCelkzSmxaVzRnS0RBdU1Dd3dMakFnTFNCc1pXWjBJR3h2ZDJWeUlHTnZjbTVsY2l3Z01TNHdMREV1TUNBdElIVndjR1Z5SUhKcFoyaDBLU0JjY2x4dUlDQWdJR1J2Wmk1MWJtbG1iM0p0Y3k1dFlYaGliSFZ5TG5aaGJIVmxJRDBnYjNCMGFXOXVjeTVpYkhWeVFXMXZkVzUwT3lBdkwyTnNZVzF3SUhaaGJIVmxJRzltSUcxaGVDQmliSFZ5SUNnd0xqQWdQU0J1YnlCaWJIVnlMREV1TUNCa1pXWmhkV3gwS1NBZ0lDQmNjbHh1WEhKY2JpQWdJQ0JrYjJZdWRXNXBabTl5YlhNdWRHaHlaWE5vYjJ4a0xuWmhiSFZsSUQwZ01Ec2dMeTlvYVdkb2JHbG5hSFFnZEdoeVpYTm9iMnhrTzF4eVhHNGdJQ0FnWkc5bUxuVnVhV1p2Y20xekxtZGhhVzR1ZG1Gc2RXVWdQU0F3T3lBdkwyaHBaMmhzYVdkb2RDQm5ZV2x1TzF4eVhHNWNjbHh1SUNBZ0lHUnZaaTUxYm1sbWIzSnRjeTVpYVdGekxuWmhiSFZsSUQwZ01Ec2dMeTlpYjJ0bGFDQmxaR2RsSUdKcFlYTWdJQ0FnSUNBZ0lGeHlYRzRnSUNBZ1pHOW1MblZ1YVdadmNtMXpMbVp5YVc1blpTNTJZV3gxWlNBOUlEQTdJQzh2WW05clpXZ2dZMmh5YjIxaGRHbGpJR0ZpWlhKeVlYUnBiMjR2Wm5KcGJtZHBibWRjY2x4dVhISmNiaUFnSUNCR1dFRkJJRDBnYm1WM0lGUklVa1ZGTGxOb1lXUmxjbEJoYzNNb0lGUklVa1ZGTGtaWVFVRlRhR0ZrWlhJZ0tUdGNjbHh1WEhKY2JpQWdJQ0JHV0VGQkxuVnVhV1p2Y20xekxuSmxjMjlzZFhScGIyNHVkbUZzZFdVdWMyVjBLQ0F4SUM4Z1kyRnVkbUZ6VjJsa2RHZ3NJREVnTHlCallXNTJZWE5JWldsbmFIUWdLVHRjY2x4dUlDQWdJRVpZUVVFdWNtVnVaR1Z5Vkc5VFkzSmxaVzRnUFNCMGNuVmxPMXh5WEc1Y2NseHVJQ0FnSUdOdmJYQnZjMlZ5TG1Ga1pGQmhjM01vSUdSdlppQXBPMXh5WEc0Z0lDQWdZMjl0Y0c5elpYSXVZV1JrVUdGemN5Z2dSbGhCUVNBcE8xeHlYRzVjY2x4dWZUdGNjbHh1WEhKY2JuWmhjaUJwYm1sMFJHVmlkV2NnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYzNSaGRITWdQU0J1WlhjZ1UzUmhkSE1vS1R0Y2NseHVJQ0FnSUhOMFlYUnpMbVJ2YlVWc1pXMWxiblF1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWVdKemIyeDFkR1VuTzF4eVhHNGdJQ0FnYzNSaGRITXVaRzl0Uld4bGJXVnVkQzV6ZEhsc1pTNXNaV1owSUQwZ1hDSXdYQ0k3WEhKY2JpQWdJQ0J6ZEdGMGN5NWtiMjFGYkdWdFpXNTBMbk4wZVd4bExuUnZjQ0E5SUZ3aU1Gd2lPMXh5WEc0Z0lDQWdjbTl2ZEVOdmJuUmhhVzVsY2tWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb0lITjBZWFJ6TG1SdmJVVnNaVzFsYm5RZ0tUdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ1pHVmlkV2NnUFNCdVpYY2dWRWhTUlVVdVRXVnphQ2dnYm1WM0lGUklVa1ZGTGtKdmVFZGxiMjFsZEhKNUtDQXlNQ3dnTWpBc0lESXdMQ0F4TENBeExDQXhJQ2tnS1R0Y2NseHVJQ0FnSUdSbFluVm5MbkJ2YzJsMGFXOXVMbk5sZENoY2NseHVJQ0FnSUNBZ0lDQnNhV2RvZEM1d2IzTnBkR2x2Ymk1NExGeHlYRzRnSUNBZ0lDQWdJR3hwWjJoMExuQnZjMmwwYVc5dUxua3NYSEpjYmlBZ0lDQWdJQ0FnYkdsbmFIUXVjRzl6YVhScGIyNHVlbHh5WEc0Z0lDQWdLVHRjY2x4dUlDQWdJSE5qWlc1bExtRmtaQ2dnWkdWaWRXY2dLVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2FXNXBkRWRWU1NBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCMllYSWdZMkZ0WlhKaFJtOXNaR1Z5TEZ4eVhHNGdJQ0FnSUNBZ0lHTmhiV1Z5WVVadlkyRnNUR1Z1WjNSb0xGeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaXhjY2x4dUlDQWdJQ0FnSUNCZmJHRnpkRHRjY2x4dVhISmNiaUFnSUNCbmRXa2dQU0J1WlhjZ1pHRjBMa2RWU1NncE8xeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ2IzQjBhVzl1Y3k1d2IzTjBjSEp2WTJWemMybHVaeUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTJGdFpYSmhSbTlzWkdWeUlEMGdaM1ZwTG1Ga1pFWnZiR1JsY2lnZ0owTmhiV1Z5WVNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JqWVcxbGNtRkdiMk5oYkV4bGJtZDBhQ0E5SUdOaGJXVnlZVVp2YkdSbGNpNWhaR1FvSUdOaGJXVnlZU3dnSjJadlkyRnNUR1Z1WjNSb0p5d2dNamdzSURJd01DQXBMbTVoYldVb0lDZEdiMk5oYkNCTVpXNW5kR2duSUNrN1hISmNiaUFnSUNBZ0lDQWdZMkZ0WlhKaFJtOWpZV3hNWlc1bmRHZ3ViMjVEYUdGdVoyVW9JSFZ3WkdGMFpVTmhiV1Z5WVNBcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCa2IyWkdiMnhrWlhJZ1BTQm5kV2t1WVdSa1JtOXNaR1Z5S0NBblJHVndkR2dnYjJZZ1JtbGxiR1FuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTJGc1JHVndkR2dzSUNkMllXeDFaU2NzSURBc0lERXdJQ2t1Ym1GdFpTZ2dKMFp2WTJGc0lFUmxjSFJvSnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTVtYzNSdmNDd2dKM1poYkhWbEp5d2dNQ3dnTWpJZ0tTNXVZVzFsS0NBblJpQlRkRzl3SnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV0WVhoaWJIVnlMQ0FuZG1Gc2RXVW5MQ0F3TENBeklDa3VibUZ0WlNnZ0oyMWhlQ0JpYkhWeUp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVjMmh2ZDBadlkzVnpMQ0FuZG1Gc2RXVW5JQ2t1Ym1GdFpTZ2dKMU5vYjNjZ1JtOWpZV3dnVW1GdVoyVW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV0WVc1MVlXeGtiMllzSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuVFdGdWRXRnNJRVJ2UmljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Ym1SdlpuTjBZWEowTENBbmRtRnNkV1VuTENBd0xDQXlNREFnS1M1dVlXMWxLQ0FuYm1WaGNpQnpkR0Z5ZENjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Ym1SdlptUnBjM1FzSUNkMllXeDFaU2NzSURBc0lESXdNQ0FwTG01aGJXVW9JQ2R1WldGeUlHWmhiR3h2Wm1ZbklDazdYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1aa2IyWnpkR0Z5ZEN3Z0ozWmhiSFZsSnl3Z01Dd2dNakF3SUNrdWJtRnRaU2dnSjJaaGNpQnpkR0Z5ZENjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm1SdlptUnBjM1FzSUNkMllXeDFaU2NzSURBc0lESXdNQ0FwTG01aGJXVW9JQ2RtWVhJZ1ptRnNiRzltWmljZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxrTnZReXdnSjNaaGJIVmxKeXdnTUN3Z01DNHhJQ2t1YzNSbGNDZ2dNQzR3TURFZ0tTNXVZVzFsS0NBblkybHlZMnhsSUc5bUlHTnZibVoxYzJsdmJpY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMblpwWjI1bGRIUnBibWNzSUNkMllXeDFaU2NnS1M1dVlXMWxLQ0FuVm1sbmJtVjBkR2x1WnljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11ZG1sbmJtOTFkQ3dnSjNaaGJIVmxKeXdnTUN3Z01pQXBMbTVoYldVb0lDZHZkWFJsY2lCaWIzSmtaWEluSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMblpwWjI1cGJpd2dKM1poYkhWbEp5d2dNQ3dnTVNBcExuTjBaWEFvSURBdU1ERWdLUzV1WVcxbEtDQW5hVzV1WlhJZ1ltOXlaR1Z5SnlBcE8xeHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTUyYVdkdVptRmtaU3dnSjNaaGJIVmxKeXdnTUN3Z01qSWdLUzV1WVcxbEtDQW5abUZrWlNCaGRDY2dLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbUYxZEc5bWIyTjFjeXdnSjNaaGJIVmxKeUFwTG01aGJXVW9JQ2RCZFhSdlptOWpkWE1uSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbVp2WTNWekxuWmhiSFZsTENBbmVDY3NJREFzSURFZ0tTNXVZVzFsS0NBblptOWpkWE1nZUNjZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm05amRYTXVkbUZzZFdVc0lDZDVKeXdnTUN3Z01TQXBMbTVoYldVb0lDZG1iMk4xY3lCNUp5QXBPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmtiMlpHYjJ4a1pYSXVZV1JrS0NCa2IyWXVkVzVwWm05eWJYTXVkR2h5WlhOb2IyeGtMQ0FuZG1Gc2RXVW5MQ0F3TENBeElDa3VjM1JsY0NnZ01DNHdNU0FwTG01aGJXVW9JQ2QwYUhKbGMyaHZiR1FuSUNrN1hISmNiaUFnSUNBZ0lDQWdaRzltUm05c1pHVnlMbUZrWkNnZ1pHOW1MblZ1YVdadmNtMXpMbWRoYVc0c0lDZDJZV3gxWlNjc0lEQXNJREV3TUNBcExtNWhiV1VvSUNkbllXbHVKeUFwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11WW1saGN5d2dKM1poYkhWbEp5d2dNQ3dnTkNBcExuTjBaWEFvSURBdU1ERWdLUzV1WVcxbEtDQW5ZbWxoY3ljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0JrYjJaR2IyeGtaWEl1WVdSa0tDQmtiMll1ZFc1cFptOXliWE11Wm5KcGJtZGxMQ0FuZG1Gc2RXVW5MQ0F3TENBMUlDa3VjM1JsY0NnZ01DNHdNU0FwTG01aGJXVW9JQ2RtY21sdVoyVW5JQ2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1J2WmtadmJHUmxjaTVoWkdRb0lHUnZaaTUxYm1sbWIzSnRjeTV1YjJselpTd2dKM1poYkhWbEp5QXBMbTVoYldVb0lDZFZjMlVnVG05cGMyVW5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ1pHOW1SbTlzWkdWeUxtRmtaQ2dnWkc5bUxuVnVhV1p2Y20xekxtNWhiVzkxYm5Rc0lDZDJZV3gxWlNjc0lEQXNJREF1TURBeElDa3VjM1JsY0NnZ01DNHdNREF4SUNrdWJtRnRaU2dnSjJScGRHaGxjaWNnS1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWkc5bVJtOXNaR1Z5TG1Ga1pDZ2daRzltTG5WdWFXWnZjbTF6TG1SbGNIUm9ZbXgxY2l3Z0ozWmhiSFZsSnlBcExtNWhiV1VvSUNkQ2JIVnlJRVJsY0hSb0p5QXBPMXh5WEc0Z0lDQWdJQ0FnSUdSdlprWnZiR1JsY2k1aFpHUW9JR1J2Wmk1MWJtbG1iM0p0Y3k1a1luTnBlbVVzSUNkMllXeDFaU2NzSURBc0lEVWdLUzV1WVcxbEtDQW5ZbXgxY2lCemFYcGxKeUFwTzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0JuZFdrdVkyeHZjMlVvS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdkWEJrWVhSbFEyRnRaWEpoSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUdOaGJXVnlZUzV6WlhSTVpXNXpLQ0JqWVcxbGNtRXVabTlqWVd4TVpXNW5kR2dzSUdOaGJXVnlZUzVtY21GdFpWTnBlbVVnS1R0Y2NseHVJQ0FnSUdOaGJXVnlZUzUxY0dSaGRHVlFjbTlxWldOMGFXOXVUV0YwY21sNEtDazdYSEpjYmlBZ0lDQmtiMll1ZFc1cFptOXliWE11Wm05allXeE1aVzVuZEdndWRtRnNkV1VnUFNCallXMWxjbUV1Wm05allXeE1aVzVuZEdnN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJR2x1YVhSRGNtRjBaWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWm05eUlDZ2dkbUZ5SUdOeVlYUmxTV1FnUFNBd095QmpjbUYwWlVsa0lEd2diM0IwYVc5dWN5NXVZa055WVhSbGN6c2dZM0poZEdWSlpDc3JJQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJqY21GMFpTQTlJR055WldGMFpVTnlZWFJsS0NCamNtRjBaVWxrSUNrN1hISmNiaUFnSUNBZ0lDQWdZM0poZEdWelEyOXVkR0ZwYm1WeUxtRmtaQ2dnWTNKaGRHVWdLVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJR055WVhSbGMwTnZiblJoYVc1bGNpNXdiM05wZEdsdmJpNTZJRDBnTFNnZ01URXdJQzBnS0NBeE1UQWdLaUJ2Y0hScGIyNXpMbTVpUTNKaGRHVnpJQ2tnS1NBdklESTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVkbUZ5SUdOeVpXRjBaVU55WVhSbElEMGdablZ1WTNScGIyNGdLQ0JwWkNBcElIdGNjbHh1WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwZ1BTQnVaWGNnVkVoU1JVVXVUMkpxWldOME0wUW9LVHRjY2x4dVhISmNiaUFnSUNCMllYSWdZbTk0WDJKdmRIUnZiU0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9LQ0J1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb0lESXdNQ3dnTVRBc0lERXdNQ0FwTENCM2IyOWtYMjFoZEdWeWFXRnNJQ2s3WEhKY2JpQWdJQ0JqY21GMFpYTmJJR2xrSUYwdVlXUmtLQ0JpYjNoZlltOTBkRzl0SUNrN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUdKdmVGOXNaV1owSUQwZ2JtVjNJRlJJVWtWRkxrMWxjMmdvSUc1bGR5QlVTRkpGUlM1Q2IzaEhaVzl0WlhSeWVTZ2dNakF3TENBeE1Dd2dPREFnS1N3Z2QyOXZaRjl0WVhSbGNtbGhiQ0FwTzF4eVhHNGdJQ0FnWW05NFgyeGxablF1Y0c5emFYUnBiMjR1YzJWMEtDQXdMQ0F6TlN3Z0xUVTFJQ2s3WEhKY2JpQWdJQ0JpYjNoZmJHVm1kQzV5YjNSaGRHbHZiaTU0SUQwZ1RXRjBhQzVRU1NBdklESTdYSEpjYmlBZ0lDQmpjbUYwWlhOYklHbGtJRjB1WVdSa0tDQmliM2hmYkdWbWRDQXBPMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dhV1FnUFQwOUlEQWdLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR0p2ZUY5eWFXZG9kQ0E5SUc1bGR5QlVTRkpGUlM1TlpYTm9LQ0J1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb0lESXdNQ3dnTVRBc0lEZ3dJQ2tzSUhkdmIyUmZiV0YwWlhKcFlXd2dLVHRjY2x4dUlDQWdJQ0FnSUNCaWIzaGZjbWxuYUhRdWNHOXphWFJwYjI0dWMyVjBLQ0F3TENBek5Td2dOVFVnS1R0Y2NseHVJQ0FnSUNBZ0lDQmliM2hmY21sbmFIUXVjbTkwWVhScGIyNHVlQ0E5SUUxaGRHZ3VVRWtnTHlBeU8xeHlYRzRnSUNBZ0lDQWdJR055WVhSbGMxc2dhV1FnWFM1aFpHUW9JR0p2ZUY5eWFXZG9kQ0FwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIWmhjaUJpYjNoZlltRmpheUE5SUc1bGR5QlVTRkpGUlM1TlpYTm9LQ0J1WlhjZ1ZFaFNSVVV1UW05NFIyVnZiV1YwY25rb0lEZ3dMQ0F4TUN3Z01USXdJQ2tzSUhkdmIyUmZiV0YwWlhKcFlXd2dLVHRjY2x4dUlDQWdJR0p2ZUY5aVlXTnJMbkJ2YzJsMGFXOXVMbk5sZENnZ0xURXdOU3dnTXpVc0lEQWdLVHRjY2x4dUlDQWdJR0p2ZUY5aVlXTnJMbkp2ZEdGMGFXOXVMbm9nUFNCTllYUm9MbEJKSUM4Z01qdGNjbHh1SUNBZ0lHTnlZWFJsYzFzZ2FXUWdYUzVoWkdRb0lHSnZlRjlpWVdOcklDazdYSEpjYmx4eVhHNGdJQ0FnZG1GeUlHSnZlRjltY205dWRDQTlJRzVsZHlCVVNGSkZSUzVOWlhOb0tDQnVaWGNnVkVoU1JVVXVRbTk0UjJWdmJXVjBjbmtvSURRd0xDQXhNQ3dnTVRBd0lDa3NJSGR2YjJSZmJXRjBaWEpwWVd3Z0tUdGNjbHh1SUNBZ0lHSnZlRjltY205dWRDNXdiM05wZEdsdmJpNXpaWFFvSURrMUxDQXlOU3dnTUNBcE8xeHlYRzRnSUNBZ1ltOTRYMlp5YjI1MExuSnZkR0YwYVc5dUxub2dQU0JOWVhSb0xsQkpJQzhnTWp0Y2NseHVJQ0FnSUdOeVlYUmxjMXNnYVdRZ1hTNWhaR1FvSUdKdmVGOW1jbTl1ZENBcE8xeHlYRzVjY2x4dUlDQWdJR055WVhSbGMxc2dhV1FnWFM1d2IzTnBkR2x2Ymk1NklEMGdMVEV4TUNBcUlHbGtPMXh5WEc0Z0lDQWdjbVYwZFhKdUlHTnlZWFJsYzFzZ2FXUWdYVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ2FXNXBkRkpsWTI5eVpITWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUdOMWNuSmxiblJTWldOdmNtUkpaQ0E5SURBN1hISmNiaUFnSUNCbWIzSWdLQ0IyWVhJZ1kzSmhkR1ZKWkNBOUlEQTdJR055WVhSbFNXUWdQQ0JqY21GMFpYTXViR1Z1WjNSb095QmpjbUYwWlVsa0t5c2dLU0I3WEhKY2JseHlYRzRnSUNBZ0lDQWdJR1p2Y2lBb0lIWmhjaUJ3YjNNZ1BTQXdPeUJ3YjNNZ1BDQnZjSFJwYjI1ekxuSmxZMjl5WkhOUVpYSkRjbUYwWlRzZ2NHOXpLeXNnS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdOeVpXRjBaVkpsWTI5eVpDZ2dZM1Z5Y21WdWRGSmxZMjl5WkVsa0xDQmpjbUYwWlVsa0xDQndiM01nS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRkpsWTI5eVpFbGtLeXM3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHTnlaV0YwWlZKbFkyOXlaQ0E5SUdaMWJtTjBhVzl1SUNnZ2FXUXNJR055WVhSbFNXUXNJSEJ2Y3lBcElIdGNjbHh1WEhKY2JpQWdJQ0IyWVhJZ2NtVmpiM0prSUQwZ2JtVjNJRkpsWTI5eVpDZ2dhV1FzSUdOeVlYUmxTV1FzSUhCdmN5QXBPMXh5WEc0Z0lDQWdZM0poZEdWeld5QmpjbUYwWlVsa0lGMHVZV1JrS0NCeVpXTnZjbVF1YldWemFDQXBPMXh5WEc0Z0lDQWdjbVZqYjNKa2N5NXdkWE5vS0NCeVpXTnZjbVFnS1R0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1MllYSWdaMlYwVW1WamIzSmtUV0YwWlhKcFlXd2dQU0JtZFc1amRHbHZiaUFvSUhOeVl5d2dhR0Z6VTJ4bFpYWmxJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lIWmhjaUJwYldjZ1BTQnVaWGNnU1cxaFoyVW9LVHRjY2x4dUlDQWdJR2x0Wnk1amNtOXpjMDl5YVdkcGJpQTlJRndpUVc1dmJubHRiM1Z6WENJN1hISmNiaUFnSUNCcGJXY3VjM0pqSUQwZ2MzSmpJRDhnYzNKaklEb2dKeWM3WEhKY2JseHlYRzRnSUNBZ2RtRnlJR2x0WjFkcFpIUm9JRDBnTkRBd0xGeHlYRzRnSUNBZ0lDQWdJR2x0WjBobGFXZG9kQ0E5SURRd01DeGNjbHh1SUNBZ0lDQWdJQ0J0WVhCRFlXNTJZWE1nUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ0FuWTJGdWRtRnpKeUFwTzF4eVhHNWNjbHh1SUNBZ0lHMWhjRU5oYm5aaGN5NTNhV1IwYUNBOUlHMWhjRU5oYm5aaGN5NW9aV2xuYUhRZ1BTQTBNREE3WEhKY2JseHlYRzRnSUNBZ2RtRnlJSFJsZUhSMWNtVWdQU0J1WlhjZ1ZFaFNSVVV1VkdWNGRIVnlaU2dnYldGd1EyRnVkbUZ6SUNrN1hISmNiaUFnSUNCMFpYaDBkWEpsTG0xcGJrWnBiSFJsY2lBOUlGUklVa1ZGTGt4cGJtVmhja1pwYkhSbGNqdGNjbHh1WEhKY2JpQWdJQ0JwYldjdWIyNXNiMkZrSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnBaaUFvSUdoaGMxTnNaV1YyWlNBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCemJHVmxkbVVnUFNCdVpYY2dTVzFoWjJVb0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyeGxaWFpsTG5OeVl5QTlJRzl3ZEdsdmJuTXVjMnhsWlhabFRXRnphMVJsZUhSMWNtVTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6YkdWbGRtVXViMjVzYjJGa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCamRIZ2dQU0J0WVhCRFlXNTJZWE11WjJWMFEyOXVkR1Y0ZENnZ0p6SmtKeUFwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzUjRMblJ5WVc1emJHRjBaU2dnYVcxblYybGtkR2dnTHlBeUxDQnBiV2RJWldsbmFIUWdMeUF5SUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkSGd1Y205MFlYUmxLQ0JOWVhSb0xsQkpJQzhnTWlBcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1I0TG5SeVlXNXpiR0YwWlNnZ0xXbHRaMWRwWkhSb0lDOGdNaXdnTFdsdFowaGxhV2RvZENBdklESWdLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMGVDNWtjbUYzU1cxaFoyVW9JR2x0Wnl3Z01UTXdMQ0F4TXpBc0lERXpOU3dnTVRNMUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZEhndVpISmhkMGx0WVdkbEtDQnpiR1ZsZG1Vc0lEQXNJREFzSURRd01Dd2dOREF3SUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBaWGgwZFhKbExtNWxaV1J6VlhCa1lYUmxJRDBnZEhKMVpUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDA3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1kzUjRJRDBnYldGd1EyRnVkbUZ6TG1kbGRFTnZiblJsZUhRb0lDY3laQ2NnS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTNSNExuUnlZVzV6YkdGMFpTZ2dhVzFuVjJsa2RHZ2dMeUF5TENCcGJXZElaV2xuYUhRZ0x5QXlJQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR04wZUM1eWIzUmhkR1VvSUUxaGRHZ3VVRWtnTHlBeUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzUwY21GdWMyeGhkR1VvSUMxcGJXZFhhV1IwYUNBdklESXNJQzFwYldkSVpXbG5hSFFnTHlBeUlDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjBlQzVrY21GM1NXMWhaMlVvSUdsdFp5d2dNQ3dnTUN3Z05EQXdMQ0EwTURBZ0tUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkSFZ5WlM1dVpXVmtjMVZ3WkdGMFpTQTlJSFJ5ZFdVN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgwN1hISmNibHh5WEc0Z0lDQWdkbUZ5SUhOc1pXVjJaVTFoZEdWeWFXRnNJRDBnYm1WM0lGUklVa1ZGTGsxbGMyaE1ZVzFpWlhKMFRXRjBaWEpwWVd3b0lIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUc5d2RHbHZibk11YzJ4bFpYWmxRMjlzYjNKY2NseHVYSEpjYmlBZ0lDQjlJQ2s3WEhKY2JseHlYRzRnSUNBZ2RtRnlJRzFoZEdWeWFXRnNjeUE5SUZ0Y2NseHVJQ0FnSUNBZ0lDQnpiR1ZsZG1WTllYUmxjbWxoYkN4Y2NseHVJQ0FnSUNBZ0lDQnpiR1ZsZG1WTllYUmxjbWxoYkN4Y2NseHVJQ0FnSUNBZ0lDQnpiR1ZsZG1WTllYUmxjbWxoYkN4Y2NseHVJQ0FnSUNBZ0lDQXZMeUIwWlhoMGRYSmxYSEpjYmlBZ0lDQWdJQ0FnYm1WM0lGUklVa1ZGTGsxbGMyaE1ZVzFpWlhKMFRXRjBaWEpwWVd3b0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SURCNFptWm1abVptTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhBNklIUmxlSFIxY21WY2NseHVJQ0FnSUNBZ0lDQjlJQ2tzWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3dzWEhKY2JpQWdJQ0FnSUNBZ2MyeGxaWFpsVFdGMFpYSnBZV3hjY2x4dUlDQWdJRjA3WEhKY2JpQWdJQ0J5WlhSMWNtNGdiV0YwWlhKcFlXeHpPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibHh5WEc0dktqMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQlZWRWxNVXlBZ0lDQWdJQ0FnSUNBZ0lEMWNjbHh1UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwcUwxeHlYRzVjY2x4dVhISmNiblpoY2lCM2FHVmxiRVJwYzNSaGJtTmxJRDBnWm5WdVkzUnBiMjRnS0NCbElDa2dlMXh5WEc1Y2NseHVJQ0FnSUdsbUlDZ2dJV1VnS1NCbElEMGdaWFpsYm5RN1hISmNiaUFnSUNCMllYSWdkeUE5SUdVdWQyaGxaV3hFWld4MFlTeGNjbHh1SUNBZ0lDQWdJQ0JrSUQwZ1pTNWtaWFJoYVd3N1hISmNiaUFnSUNCcFppQW9JR1FnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdsbUlDZ2dkeUFwSUhKbGRIVnliaUIzSUM4Z1pDQXZJRFF3SUNvZ1pDQStJREFnUHlBeElEb2dMVEU3SUM4dklFOXdaWEpoWEhKY2JpQWdJQ0FnSUNBZ1pXeHpaU0J5WlhSMWNtNGdMV1FnTHlBek95QXZMeUJHYVhKbFptOTRPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0J5WlhSMWNtNGdkeUF2SURFeU1Ec2dMeThnU1VVdlUyRm1ZWEpwTDBOb2NtOXRaVnh5WEc1OU8xeHlYRzVjY2x4dWRtRnlJSGRvWldWc1JHbHlaV04wYVc5dUlEMGdablZ1WTNScGIyNGdLQ0JsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ0lXVWdLU0JsSUQwZ1pYWmxiblE3WEhKY2JpQWdJQ0J5WlhSMWNtNGdLQ0JsTG1SbGRHRnBiQ0E4SURBZ0tTQS9JREVnT2lBb0lHVXVkMmhsWld4RVpXeDBZU0ErSURBZ0tTQS9JREVnT2lBdE1UdGNjbHh1WEhKY2JuMDdYSEpjYmx4eVhHNTJZWElnWTI5dmNtUnpSWEYxWVd4elFYQndjbTk0SUQwZ1puVnVZM1JwYjI0Z0tDQmpiMjl5WkRFc0lHTnZiM0prTWl3Z2NtRnVaMlVnS1NCN1hISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlDZ2dUV0YwYUM1aFluTW9JR052YjNKa01TNTRJQzBnWTI5dmNtUXlMbmdnS1NBOFBTQnlZVzVuWlNBcElDWW1JQ2dnVFdGMGFDNWhZbk1vSUdOdmIzSmtNUzU1SUMwZ1kyOXZjbVF5TG5rZ0tTQThQU0J5WVc1blpTQXBPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNiblpoY2lCbVlXUmxUM1YwSUQwZ1puVnVZM1JwYjI0Z0tDQmxiR1Z0Wlc1MExDQmtiMjVsSUNrZ2UxeHlYRzVjY2x4dUlDQWdJR2xtSUNnZ1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJRHc5SURBdU1TQXBJSHRjY2x4dUlDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYSEpjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNXZjR0ZqYVhSNUlEMGdNRHRjY2x4dUlDQWdJQ0FnSUNCcFppQW9JR2x6Um5WdVkzUnBiMjRvSUdSdmJtVWdLU0FwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5dVpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzV2Y0dGamFYUjVJQzA5SURBdU1UdGNjbHh1SUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0NCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHWmhaR1ZQZFhRb0lHVnNaVzFsYm5Rc0lHUnZibVVnS1R0Y2NseHVJQ0FnSUNBZ0lDQjlMQ0F4TUNBcE8xeHlYRzRnSUNBZ2ZWeHlYRzU5TzF4eVhHNWNjbHh1ZG1GeUlHWmhaR1ZKYmlBOUlHWjFibU4wYVc5dUlDZ2daV3hsYldWdWRDd2dabUZrWlZSdkxDQmtiMjVsTENCdmNDQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JQ0ZsYkdWdFpXNTBMbk4wZVd4bExtOXdZV05wZEhrZ2ZId2daV3hsYldWdWRDNXpkSGxzWlM1dmNHRmphWFI1SUNZbUlHVnNaVzFsYm5RdWMzUjViR1V1YjNCaFkybDBlU0E4SUdaaFpHVlVieUFwSUh0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnYVdZZ0tDQmxiR1Z0Wlc1MExuTjBlV3hsTG1ScGMzQnNZWGtnUFQwZ0oyNXZibVVuSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oySnNiMk5ySnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYjNBZ1BTQXdPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLQ0FoWld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYjNBZ1BTQmxiR1Z0Wlc1MExuTjBlV3hsTG05d1lXTnBkSGtnZkh3Z01UdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQ0FnSUNCdmNDQXJQU0F3TGpBek8xeHlYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjM1I1YkdVdWIzQmhZMmwwZVNBOUlHOXdPMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLQ0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1ZV1JsU1c0b0lHVnNaVzFsYm5Rc0lHWmhaR1ZVYnl3Z1pHOXVaU3dnYjNBZ0tUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ2ZTd2dNVEFnS1R0Y2NseHVYSEpjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0JtWVdSbFZHODdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHbG1JQ2dnYVhOR2RXNWpkR2x2YmlnZ1pHOXVaU0FwSUNrZ2UxeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaRzl1WlNncE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjA3WEhKY2JseHlYRzUyWVhJZ1kyRnNZM1ZzWVhSbFEyRnVkbUZ6VTJsNlpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVYSEpjYmlBZ0lDQmpZVzUyWVhOWGFXUjBhQ0E5SUc5d2RHbHZibk11WTJGdWRtRnpWMmxrZEdnZ1B5QnZjSFJwYjI1ekxtTmhiblpoYzFkcFpIUm9JRG9nY205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RdVkyeHBaVzUwVjJsa2RHZzdYSEpjYmlBZ0lDQmpZVzUyWVhOSVpXbG5hSFFnUFNCdmNIUnBiMjV6TG1OaGJuWmhjMGhsYVdkb2RDQS9JRzl3ZEdsdmJuTXVZMkZ1ZG1GelNHVnBaMmgwSURvZ2NtOXZkRU52Ym5SaGFXNWxja1ZzWlcxbGJuUXVZMnhwWlc1MFNHVnBaMmgwTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYm5aaGNpQnpaWFJEWVc1MllYTkVhVzFsYm5OcGIyNXpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHlYRzVjY2x4dUlDQWdJQzh2Y205dmRFTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1YUdWcFoyaDBJQ0FnSUNBOUlHTmhiblpoYzBobGFXZG9kQ0FySUNkd2VDYzdYSEpjYmlBZ0lDQmpZVzUyWVhORGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbWhsYVdkb2RDQTlJR05oYm5aaGMwaGxhV2RvZENBcklDZHdlQ2M3WEhKY2JpQWdJQ0JwYm1adlEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzVvWldsbmFIUWdQU0JqWVc1MllYTklaV2xuYUhRZ0t5QW5jSGduTzF4eVhHNGdJQ0FnYkc5aFpHbHVaME52Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdWFHVnBaMmgwSUQwZ1kyRnVkbUZ6U0dWcFoyaDBJQ3NnSjNCNEp6dGNjbHh1WEhKY2JpQWdJQ0F2TDNKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG5kcFpIUm9JQ0FnSUNBOUlHTmhiblpoYzFkcFpIUm9JQ3NnSjNCNEp6dGNjbHh1SUNBZ0lHTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVkMmxrZEdnZ1BTQmpZVzUyWVhOWGFXUjBhQ0FySUNkd2VDYzdYSEpjYmlBZ0lDQnBibVp2UTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNTNhV1IwYUNBOUlHTmhiblpoYzFkcFpIUm9JQ3NnSjNCNEp6dGNjbHh1SUNBZ0lHeHZZV1JwYm1kRGIyNTBZV2x1WlhKRmJHVnRaVzUwTG5OMGVXeGxMbmRwWkhSb0lEMGdZMkZ1ZG1GelYybGtkR2dnS3lBbmNIZ25PMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVoxYm1OMGFXOXVJSE5vZFdabWJHVW9JSFlnS1NCN0lDOHZJRXB2Ym1GeklGSmhiMjVwSUZOdllYSmxjeUJUYVd4MllTQXRJR2gwZEhBNkx5OXFjMlp5YjIxb1pXeHNMbU52YlM5aGNuSmhlUzl6YUhWbVpteGxJRnR5WlhZdUlDTXhYVnh5WEc1Y2NseHVJQ0FnSUdadmNpQW9JSFpoY2lCcUxDQjRMQ0JwSUQwZ2RpNXNaVzVuZEdnN0lHazdJR29nUFNCd1lYSnpaVWx1ZENnZ1RXRjBhQzV5WVc1a2IyMG9LU0FxSUdrZ0tTd2dlQ0E5SUhaYklDMHRhU0JkTENCMld5QnBJRjBnUFNCMld5QnFJRjBzSUhaYklHb2dYU0E5SUhnZ0tUdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMk8xeHlYRzVjY2x4dWZWeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z2FYTkdkVzVqZEdsdmJpZ2diMkpxSUNrZ2UxeHlYRzVjY2x4dUlDQWdJSEpsZEhWeWJpQjBlWEJsYjJZZ2IySnFJRDA5SUNkbWRXNWpkR2x2YmljZ2ZId2dabUZzYzJVN1hISmNibHh5WEc1OVhISmNibHh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhISmNiajBnSUNBZ0lDQWdJQ0FnSUNCRldGQlBVbFJUSUNBZ0lDQWdJQ0FnSUNBZ1BWeHlYRzQ5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JseHlYRzR2S2owOVBUMDlQVDA5UFQwZ0lGQjFZbXhwWXlCTlpYUm9iMlJ6SUNBOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JtVjRjRzl5ZEhNdWFXNXBkQ0E5SUdaMWJtTjBhVzl1SUNnZ2NHRnlZVzF6SUNrZ2UxeHlYRzVjY2x4dUlDQWdJRzl3ZEdsdmJuTWdQU0JsZUhSbGJtUW9JR1JsWm1GMWJIUnpMQ0J3WVhKaGJYTWdLVHRjY2x4dVhISmNiaUFnSUNBdkx5Qm1aV0YwZFhKbElIUmxjM1JjY2x4dUlDQWdJR2xtSUNnZ0lVMXZaR1Z5Ym1sNmNpNTNaV0puYkNBcElISmxkSFZ5Ymp0Y2NseHVYSEpjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWdnSjBsdWFYUnBZV3hwZW1sdVp5QmpjbUYwWldScFoyZGxjaTVxY3k0dUxpY2dLVHRjY2x4dVhISmNiaUFnSUNCcFppQW9JSGRwYm1SdmR5NWtaWFpwWTJWUWFYaGxiRkpoZEdsdklDRTlQU0IxYm1SbFptbHVaV1FnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdSd2NpQTlJSGRwYm1SdmR5NWtaWFpwWTJWUWFYaGxiRkpoZEdsdk8xeHlYRzVjY2x4dUlDQWdJSDBnWld4elpTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHUndjaUE5SURFN1hISmNibHh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhKdmIzUkRiMjUwWVdsdVpYSkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb0lHOXdkR2x2Ym5NdVpXeGxiV1Z1ZEhNdWNtOXZkRU52Ym5SaGFXNWxja2xrSUNrN1hISmNiaUFnSUNCcFppQW9JQ0Z5YjI5MFEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWdnSjJOeVlYUmxaR2xuWjJWeUxtcHpJQzBnU1c1cGRDQm1ZV2xzWldRZ09pQmpZVzRnYm05MElHWnBibVFnY205dmRDQmpiMjUwWVdsdVpYSWdaV3hsYldWdWRDNG5JQ2s3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4eVhHNWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lHTmhiblpoYzBOdmJuUmhhVzVsY2tWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2dnYjNCMGFXOXVjeTVsYkdWdFpXNTBjeTVqWVc1MllYTkRiMjUwWVdsdVpYSkpaQ0FwTzF4eVhHNGdJQ0FnYVdZZ0tDQWhZMkZ1ZG1GelEyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBcElIdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWdnSjJOeVlYUmxaR2xuWjJWeUxtcHpJQzBnU1c1cGRDQm1ZV2xzWldRZ09pQmpZVzRnYm05MElHWnBibVFnWTJGdWRtRnpJR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdiRzloWkdsdVowTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnZ2IzQjBhVzl1Y3k1bGJHVnRaVzUwY3k1c2IyRmthVzVuUTI5dWRHRnBibVZ5U1dRZ0tUdGNjbHh1SUNBZ0lHbG1JQ2dnSVd4dllXUnBibWREYjI1MFlXbHVaWEpGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnNiMkZrYVc1bklHTnZiblJoYVc1bGNpQmxiR1Z0Wlc1MExpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2FXNW1iME52Ym5SaGFXNWxja1ZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDZ2diM0IwYVc5dWN5NWxiR1Z0Wlc1MGN5NXBibVp2UTI5dWRHRnBibVZ5U1dRZ0tUdGNjbHh1SUNBZ0lHbG1JQ2dnSVdsdVptOURiMjUwWVdsdVpYSkZiR1Z0Wlc1MElDa2dlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NBblkzSmhkR1ZrYVdkblpYSXVhbk1nTFNCSmJtbDBJR1poYVd4bFpDQTZJR05oYmlCdWIzUWdabWx1WkNCcGJtWnZJR052Ym5SaGFXNWxjaUJsYkdWdFpXNTBMaWNnS1R0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hISmNibHh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdkR2wwYkdWSmJtWnZSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDQnZjSFJwYjI1ekxtVnNaVzFsYm5SekxuUnBkR3hsUTI5dWRHRnBibVZ5U1dRZ0tUdGNjbHh1SUNBZ0lHbG1JQ2dnSVhScGRHeGxTVzVtYjBWc1pXMWxiblFnS1NCN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WlhKeWIzSW9JQ2RqY21GMFpXUnBaMmRsY2k1cWN5QXRJRWx1YVhRZ1ptRnBiR1ZrSURvZ1kyRnVJRzV2ZENCbWFXNWtJSEpsWTI5eVpDQjBhWFJzWlNCamIyNTBZV2x1WlhJZ1pXeGxiV1Z1ZEM0bklDazdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUdGeWRHbHpkRWx1Wm05RmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSUc5d2RHbHZibk11Wld4bGJXVnVkSE11WVhKMGFYTjBRMjl1ZEdGcGJtVnlTV1FnS1R0Y2NseHVJQ0FnSUdsbUlDZ2dJV0Z5ZEdsemRFbHVabTlGYkdWdFpXNTBJQ2tnZTF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDQW5ZM0poZEdWa2FXZG5aWEl1YW5NZ0xTQkpibWwwSUdaaGFXeGxaQ0E2SUdOaGJpQnViM1FnWm1sdVpDQnlaV052Y21RZ1lYSjBhWE4wSUdOdmJuUmhhVzVsY2lCbGJHVnRaVzUwTGljZ0tUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYSEpjYmx4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnWTI5MlpYSkpibVp2Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ0J2Y0hScGIyNXpMbVZzWlcxbGJuUnpMbU52ZG1WeVEyOXVkR0ZwYm1WeVNXUWdLVHRjY2x4dUlDQWdJR2xtSUNnZ0lXTnZkbVZ5U1c1bWIwVnNaVzFsYm5RZ0tTQjdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpYSnliM0lvSUNkamNtRjBaV1JwWjJkbGNpNXFjeUF0SUVsdWFYUWdabUZwYkdWa0lEb2dZMkZ1SUc1dmRDQm1hVzVrSUdOdmRtVnlJR2x0WVdkbElHTnZiblJoYVc1bGNpQmxiR1Z0Wlc1MExpY2dLVHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJR05oYkdOMWJHRjBaVU5oYm5aaGMxTnBlbVVvS1R0Y2NseHVYSEpjYmlBZ0lDQnBibWwwVTJObGJtVW9LVHRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZEhNdWMyVnNaV04wVW1WamIzSmtJRDBnWm5WdVkzUnBiMjRnS0NCcFpDQXBJSHRjY2x4dVhISmNiaUFnSUNCcFppQW9JR2xrSUR3Z01DQXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjbVZ6WlhSVGFHOTNibEpsWTI5eVpDZ3BPMXh5WEc1Y2NseHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lHbGtJRDRnYkc5aFpHVmtVbVZqYjNKa2N5QXBJSHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdjMlZzWldOMFpXUlNaV052Y21RZ1BTQnNiMkZrWldSU1pXTnZjbVJ6SUMwZ01UdGNjbHh1WEhKY2JpQWdJQ0I5SUdWc2MyVWdlMXh5WEc1Y2NseHVJQ0FnSUNBZ0lDQnpaV3hsWTNSbFpGSmxZMjl5WkNBOUlHbGtPMXh5WEc1Y2NseHVJQ0FnSUgxY2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRITXVjM1JoY25SU1pXNWtaWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnWkc5U1pXNWtaWElnUFNCMGNuVmxPMXh5WEc0Z0lDQWdZVzVwYldGMFpTZ3BPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRITXVjM1J2Y0ZKbGJtUmxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1WEhKY2JpQWdJQ0JrYjFKbGJtUmxjaUE5SUdaaGJITmxPMXh5WEc1Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRITXVaVzVoWW14bFVHOXpkSEJ5YjJObGMzTnBibWNnUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnYjNCMGFXOXVjeTV3YjNOMGNISnZZMlZ6YzJsdVp5QTlJSFJ5ZFdVN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owY3k1a2FYTmhZbXhsVUc5emRIQnliMk5sYzNOcGJtY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdiM0IwYVc5dWN5NXdiM04wY0hKdlkyVnpjMmx1WnlBOUlHWmhiSE5sTzF4eVhHNWNjbHh1ZlR0Y2NseHVYSEpjYmk4cVBUMDlQVDA5UFQwOVBTQWdVSFZpYkdsaklHZGxkSFJsY25NZ0lEMDlQVDA5UFQwOVBUMHFMMXh5WEc1Y2NseHVaWGh3YjNKMGN5NW5aWFJEWVc1MllYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlISmxibVJsY21WeUxtUnZiVVZzWlcxbGJuUTdYSEpjYmx4eVhHNTlPMXh5WEc1Y2NseHVaWGh3YjNKMGN5NW5aWFJTWldOdmNtUnpSR0YwWVV4cGMzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlISmxZMjl5WkhORVlYUmhUR2x6ZER0Y2NseHVYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblJ6TG1kbGRFeHZZV1JsWkZKbFkyOXlaSE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmx4eVhHNGdJQ0FnY21WMGRYSnVJR3h2WVdSbFpGSmxZMjl5WkhNN1hISmNibHh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owY3k1blpYUlRaV3hsWTNSbFpGSmxZMjl5WkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnY21WamIzSmtjMXNnYzJWc1pXTjBaV1JTWldOdmNtUWdYVHRjY2x4dVhISmNibjA3WEhKY2JseHlYRzVjY2x4dUx5bzlQVDA5UFQwOVBUMDlJQ0JOWlhSb2IyUnpJR0ZqWTJWemMyOXljeUFnUFQwOVBUMDlQVDA5UFNvdlhISmNibHh5WEc1bGVIQnZjblJ6TG14dllXUlNaV052Y21SeklEMGdiRzloWkZKbFkyOXlaSE03WEhKY2JtVjRjRzl5ZEhNdWRXNXNiMkZrVW1WamIzSmtjeUE5SUhWdWJHOWhaRkpsWTI5eVpITTdYSEpjYm1WNGNHOXlkSE11Y21WelpYUlRhRzkzYmxKbFkyOXlaQ0E5SUhKbGMyVjBVMmh2ZDI1U1pXTnZjbVE3WEhKY2JtVjRjRzl5ZEhNdWMyaDFabVpzWlZKbFkyOXlaSE1nUFNCemFIVm1abXhsVW1WamIzSmtjenRjY2x4dVpYaHdiM0owY3k1bWJHbHdVMlZzWldOMFpXUlNaV052Y21RZ1BTQm1iR2x3VTJWc1pXTjBaV1JTWldOdmNtUTdYSEpjYm1WNGNHOXlkSE11YzJWc1pXTjBVSEpsZGxKbFkyOXlaQ0E5SUhObGJHVmpkRkJ5WlhaU1pXTnZjbVE3WEhKY2JtVjRjRzl5ZEhNdWMyVnNaV04wVG1WNGRGSmxZMjl5WkNBOUlITmxiR1ZqZEU1bGVIUlNaV052Y21RN1hISmNibVY0Y0c5eWRITXVjMmh2ZDB4dllXUnBibWNnUFNCemFHOTNURzloWkdsdVp6dGNjbHh1Wlhod2IzSjBjeTVvYVdSbFRHOWhaR2x1WnlBOUlHaHBaR1ZNYjJGa2FXNW5PMXh5WEc1Y2NseHVMeW85UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYSEpjYmowZ0lDQWdJQ0FnSUNBZ0lDQlFWVUpNU1VNZ1FWQkpJQ0FnSUNBZ0lDQWdJQ0FnUFZ4eVhHNDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOUtpOWNjbHh1WEhKY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1pYaHdiM0owY3pzaVhYMD0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICpcclxuICogRnVsbC1zY3JlZW4gdGV4dHVyZWQgcXVhZCBzaGFkZXJcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcclxuXHRUSFJFRS5Db3B5U2hhZGVyID0ge1xyXG5cclxuXHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcInREaWZmdXNlXCI6IHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXHJcblx0XHRcdFwib3BhY2l0eVwiOiAgeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZVdiA9IHV2O1wiLFxyXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIiksXHJcblxyXG5cdFx0ZnJhZ21lbnRTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBvcGFjaXR5O1wiLFxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCB2VXYgKTtcIixcclxuXHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IG9wYWNpdHkgKiB0ZXhlbDtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpXHJcblxyXG5cdH07XHJcbn07IiwiLyoqXHJcbiAqIEBhdXRob3IgYW5kcmV3YmVyZyAvIGh0dHA6Ly9hbmRyZXdiZXJnLmNvbS9cclxuICpcclxuICogRGVwdGggb2YgRmllbGRcclxuICogLSBwb3J0ZWQgZnJvbVxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cdFx0XHJcblx0VEhSRUUuRG9GU2hhZGVyID0ge1xyXG5cclxuXHRcdHVuaWZvcm1zOiB7XHJcblxyXG5cdFx0XHRcInREaWZmdXNlXCI6ICAgICB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcInREZXB0aFwiOiAgICAgICB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcInpuZWFyXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJ6ZmFyXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEwMDAuMCB9LFxyXG5cdFx0XHRcInNpemVcIjogICAgICAgICB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCA1MTIsIDUxMiApIH0sXHJcblx0XHRcdFwidGV4dGVsXCI6XHRcdHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDEvNTEyLCAxLzUxMil9LFxyXG5cdFx0XHRcImZvY2FsRGVwdGhcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyMDAuMCB9LFxyXG5cdFx0XHRcImZvY2FsTGVuZ3RoXCI6XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMjguMCB9LFxyXG5cdFx0XHRcImZzdG9wXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyLjggfSxcclxuXHRcdFx0XCJzaG93Rm9jdXNcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAwIH0sXHJcblx0XHRcdFwibWFudWFsZG9mXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMCB9LFxyXG5cdFx0XHRcIm5kb2ZzdGFydFwiOlx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxyXG5cdFx0XHRcIm5kb2ZkaXN0XCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAyLjAgfSxcclxuXHRcdFx0XCJmZG9mc3RhcnRcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJmZG9mZGlzdFwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMy4wIH0sXHJcblx0XHRcdFwiQ29DXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuMDMgfSxcclxuXHRcdFx0XCJ2aWduZXR0aW5nXCI6XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMSB9LFxyXG5cdFx0XHRcInZpZ25vdXRcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMyB9LFxyXG5cdFx0XHRcInZpZ25pblwiOlx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wIH0sXHJcblx0XHRcdFwidmlnbmZhZGVcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDIyLjAgfSxcclxuXHRcdFx0XCJhdXRvZm9jdXNcIjpcdHsgdHlwZTogXCJpXCIsIHZhbHVlOiAxIH0sXHJcblx0XHRcdFwiZm9jdXNcIjogICAgICAgIHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoIDAuNSwgMC41ICkgfSxcclxuXHRcdFx0XCJtYXhibHVyXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuXHRcdFx0XCJ0aHJlc2hvbGRcIjpcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjggfSxcclxuXHRcdFx0XCJnYWluXCI6XHRcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuNyB9LFxyXG5cdFx0XHRcImJpYXNcIjpcdFx0XHR7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC41IH0sXHJcblx0XHRcdFwiZnJpbmdlXCI6XHRcdHsgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjcgfSxcclxuXHRcdFx0XCJub2lzZVwiOlx0XHR7IHR5cGU6IFwiaVwiLCB2YWx1ZTogMSB9LFxyXG5cdFx0XHRcIm5hbW91bnRcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDAuMDAwMSB9LFxyXG5cdFx0XHRcImRlcHRoYmx1clwiOlx0eyB0eXBlOiBcImlcIiwgdmFsdWU6IDAgfSxcclxuXHRcdFx0XCJkYnNpemVcIjpcdFx0eyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMjV9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHR2ZXJ0ZXhTaGFkZXI6IFtcclxuXHJcblx0XHRcdFwidmFyeWluZyB2ZWMyIHZVdjtcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZVdiA9IHV2O1wiLFxyXG5cclxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFwifVwiXHJcblxyXG5cdFx0XS5qb2luKFwiXFxuXCIpLFxyXG5cclxuXHRcdGZyYWdtZW50U2hhZGVyOiBbXHJcblx0XHRcdFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIsXHJcblx0XHRcdFwiI2RlZmluZSBQSSAgMy4xNDE1OTI2NVwiLFxyXG5cclxuXHRcdFx0XCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxyXG5cclxuXHRcdFx0Ly91bmlmb3JtIHZhcmlhYmxlcyBmcm9tIGV4dGVybmFsIHNjcmlwdFxyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGVwdGg7XCIsXHJcblx0XHRcdFwidW5pZm9ybSB2ZWMyIHNpemU7XCIsIC8vIHRleHR1cmUgd2lkdGggYW5kIGhlaWdodFxyXG5cdFx0XHRcInVuaWZvcm0gdmVjMiB0ZXhlbDtcIiwgLy8gdGV4dGVsIHNpemVcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmb2NhbERlcHRoO1wiLCAgLy9mb2NhbCBkaXN0YW5jZSB2YWx1ZSBpbiBtZXRlcnMsIGJ1dCB5b3UgbWF5IHVzZSBhdXRvZm9jdXMgb3B0aW9uIGJlbG93XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBmb2NhbExlbmd0aDtcIiwgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZzdG9wO1wiLCAvL2Ytc3RvcCB2YWx1ZVxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBzaG93Rm9jdXM7XCIsIC8vc2hvdyBkZWJ1ZyBmb2N1cyBwb2ludCBhbmQgZm9jYWwgcmFuZ2UgKG9yYW5nZSA9IGZvY2FsIHBvaW50LCBibHVlID0gZm9jYWwgcmFuZ2UpXHJcblxyXG5cdFx0XHQvL21ha2Ugc3VyZSB0aGF0IHRoZXNlIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIGZvciB5b3VyIGNhbWVyYSwgb3RoZXJ3aXNlIGRpc3RhbmNlcyB3aWxsIGJlIHdyb25nLlxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgem5lYXI7XCIsIC8vY2FtZXJhIGNsaXBwaW5nIHN0YXJ0XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB6ZmFyO1wiLCAvL2NhbWVyYSBjbGlwcGluZyBlbmRcclxuXHJcblx0XHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdC8vdXNlciB2YXJpYWJsZXMgbm93IHBhc3NlZCBhcyB1bmlmb3Jtc1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgbWFudWFsZG9mO1wiLCAvL21hbnVhbCBkb2YgY2FsY3VsYXRpb25cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IG5kb2ZzdGFydDtcIiwgLy9uZWFyIGRvZiBibHVyIHN0YXJ0XHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCBuZG9mZGlzdDtcIiwgLy9uZWFyIGRvZiBibHVyIGZhbGxvZmYgZGlzdGFuY2VcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZkb2ZzdGFydDtcIiwgLy9mYXIgZG9mIGJsdXIgc3RhcnRcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZkb2ZkaXN0O1wiLCAvL2ZhciBkb2YgYmx1ciBmYWxsb2ZmIGRpc3RhbmNlXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgQ29DO1wiLC8vY2lyY2xlIG9mIGNvbmZ1c2lvbiBzaXplIGluIG1tICgzNW1tIGZpbG0gPSAwLjAzbW0pXHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCB2aWduZXR0aW5nO1wiLCAvL3VzZSBvcHRpY2FsIGxlbnMgdmlnbmV0dGluZz9cclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHZpZ25vdXQ7XCIsIC8vdmlnbmV0dGluZyBvdXRlciBib3JkZXJcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IHZpZ25pbjtcIiwgLy92aWduZXR0aW5nIGlubmVyIGJvcmRlclxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgdmlnbmZhZGU7XCIsIC8vZi1zdG9wcyB0aWxsIHZpZ25ldGUgZmFkZXNcclxuXHJcblx0XHRcdFwidW5pZm9ybSBib29sIGF1dG9mb2N1cztcIiwgLy91c2UgYXV0b2ZvY3VzIGluIHNoYWRlcj8gZGlzYWJsZSBpZiB5b3UgdXNlIGV4dGVybmFsIGZvY2FsRGVwdGggdmFsdWVcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgZm9jdXM7XCIsIC8vIGF1dG9mb2N1cyBwb2ludCBvbiBzY3JlZW4gKDAuMCwwLjAgLSBsZWZ0IGxvd2VyIGNvcm5lciwgMS4wLDEuMCAtIHVwcGVyIHJpZ2h0KVxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbWF4Ymx1cjtcIiwgLy9jbGFtcCB2YWx1ZSBvZiBtYXggYmx1ciAoMC4wID0gbm8gYmx1ciwxLjAgZGVmYXVsdClcclxuXHJcblx0XHRcdFwidW5pZm9ybSBmbG9hdCB0aHJlc2hvbGQ7XCIsIC8vaGlnaGxpZ2h0IHRocmVzaG9sZDtcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGdhaW47XCIsIC8vaGlnaGxpZ2h0IGdhaW47XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgYmlhcztcIiwgLy9ib2tlaCBlZGdlIGJpYXNcclxuXHRcdFx0XCJ1bmlmb3JtIGZsb2F0IGZyaW5nZTtcIiwgLy9ib2tlaCBjaHJvbWF0aWMgYWJlcnJhdGlvbi9mcmluZ2luZ1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIGJvb2wgbm9pc2U7XCIsIC8vdXNlIG5vaXNlIGluc3RlYWQgb2YgcGF0dGVybiBmb3Igc2FtcGxlIGRpdGhlcmluZ1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgbmFtb3VudDtcIiwgLy9kaXRoZXIgYW1vdW50XHJcblxyXG5cdFx0XHRcInVuaWZvcm0gYm9vbCBkZXB0aGJsdXI7XCIsIC8vYmx1ciB0aGUgZGVwdGggYnVmZmVyP1xyXG5cdFx0XHRcInVuaWZvcm0gZmxvYXQgZGJzaXplO1wiLCAvL2RlcHRoYmx1cnNpemVcclxuXHJcblx0XHRcdC8vIHNhbXBsZXMgYW5kIHJpbmdzIG5lZWQgdG8gYmUgY29uc3RhbnRzLiBubyBkeW5hbWljIGxvb3AgY291bnRlcnMgaW4gT3BlbkdMIEVTXHJcblx0XHRcdC8vIENhbiBzaGFkZXIgYmUgYnJva2VuIGludG8gMiBwYXNzPyAuLi4gXHJcblx0XHRcdFwiaW50IHNhbXBsZXMgPSAzO1wiLCAvL3NhbXBsZXMgb24gdGhlIGZpcnN0IHJpbmdcclxuXHRcdFx0XCJjb25zdCBpbnQgcmluZ3MgPSAzO1wiLCAvL3JpbmcgY291bnRcclxuXHJcblx0XHRcdC8qXHJcblx0XHRcdG5leHQgcGFydCBpcyBleHBlcmltZW50YWxcclxuXHRcdFx0bm90IGxvb2tpbmcgZ29vZCB3aXRoIHNtYWxsIHNhbXBsZSBhbmQgcmluZyBjb3VudFxyXG5cdFx0XHRsb29rcyBva2F5IHN0YXJ0aW5nIGZyb20gc2FtcGxlcyA9IDQsIHJpbmdzID0gNFxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0XCJib29sIHBlbnRhZ29uID0gZmFsc2U7XCIsIC8vdXNlIHBlbnRhZ29uIGFzIGJva2VoIHNoYXBlP1xyXG5cdFx0XHRcImZsb2F0IGZlYXRoZXIgPSAwLjQ7XCIsIC8vcGVudGFnb24gc2hhcGUgZmVhdGhlclxyXG5cclxuXHRcdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdC8vIFJHQkEgZGVwdGhcclxuXHJcblx0XHRcdFwiZmxvYXQgdW5wYWNrRGVwdGgoIGNvbnN0IGluIHZlYzQgcmdiYV9kZXB0aCApIHtcIixcclxuXHJcblx0XHRcdFx0XCJjb25zdCB2ZWM0IGJpdF9zaGlmdCA9IHZlYzQoIDEuMCAvICggMjU2LjAgKiAyNTYuMCAqIDI1Ni4wICksIDEuMCAvICggMjU2LjAgKiAyNTYuMCApLCAxLjAgLyAyNTYuMCwgMS4wICk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBkZXB0aCA9IGRvdCggcmdiYV9kZXB0aCwgYml0X3NoaWZ0ICk7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gZGVwdGg7XCIsXHJcblxyXG5cdFx0XHRcIn1cIixcclxuXHJcblxyXG5cdFx0XHRcImZsb2F0IHBlbnRhKHZlYzIgY29vcmRzKVwiLCAvL3BlbnRhZ29uYWwgc2hhcGVcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBzY2FsZSA9IGZsb2F0KHJpbmdzKSAtIDEuMztcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMCA9IHZlYzQoIDEuMCwgICAgICAgICAwLjAsICAgICAgICAgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMSA9IHZlYzQoIDAuMzA5MDE2OTk0LCAwLjk1MTA1NjUxNiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMiA9IHZlYzQoLTAuODA5MDE2OTk0LCAwLjU4Nzc4NTI1MiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTMyA9IHZlYzQoLTAuODA5MDE2OTk0LC0wLjU4Nzc4NTI1MiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTNCA9IHZlYzQoIDAuMzA5MDE2OTk0LC0wLjk1MTA1NjUxNiwgMC4wLCAgMS4wKTtcIixcclxuXHRcdFx0XHRcInZlYzQgIEhTNSA9IHZlYzQoIDAuMCAgICAgICAgLDAuMCAgICAgICAgICwgMS4wLCAgMS4wKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0ICBvbmUgPSB2ZWM0KCAxLjAgKTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWM0IFAgPSB2ZWM0KChjb29yZHMpLHZlYzIoc2NhbGUsIHNjYWxlKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjNCBkaXN0ID0gdmVjNCgwLjApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgaW5vcm91dCA9IC00LjA7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdC54ID0gZG90KCBQLCBIUzAgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueSA9IGRvdCggUCwgSFMxICk7XCIsXHJcblx0XHRcdFx0XCJkaXN0LnogPSBkb3QoIFAsIEhTMiApO1wiLFxyXG5cdFx0XHRcdFwiZGlzdC53ID0gZG90KCBQLCBIUzMgKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0ID0gc21vb3Roc3RlcCggLWZlYXRoZXIsIGZlYXRoZXIsIGRpc3QgKTtcIixcclxuXHJcblx0XHRcdFx0XCJpbm9yb3V0ICs9IGRvdCggZGlzdCwgb25lICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZGlzdC54ID0gZG90KCBQLCBIUzQgKTtcIixcclxuXHRcdFx0XHRcImRpc3QueSA9IEhTNS53IC0gYWJzKCBQLnogKTtcIixcclxuXHJcblx0XHRcdFx0XCJkaXN0ID0gc21vb3Roc3RlcCggLWZlYXRoZXIsIGZlYXRoZXIsIGRpc3QgKTtcIixcclxuXHRcdFx0XHRcImlub3JvdXQgKz0gZGlzdC54O1wiLFxyXG5cclxuXHRcdFx0XHRcInJldHVybiBjbGFtcCggaW5vcm91dCwgMC4wLCAxLjAgKTtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IGJkZXB0aCh2ZWMyIGNvb3JkcykgLy9ibHVycmluZyBkZXB0aFwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IGQgPSAwLjA7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBrZXJuZWxbOV07XCIsXHJcblx0XHRcdFx0XCJ2ZWMyIG9mZnNldFs5XTtcIixcclxuXHJcblx0XHRcdFx0XCJ2ZWMyIHdoID0gdmVjMih0ZXhlbC54LCB0ZXhlbC55KSAqIGRic2l6ZTtcIixcclxuXHJcblx0XHRcdFx0XCJvZmZzZXRbMF0gPSB2ZWMyKC13aC54LC13aC55KTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFsxXSA9IHZlYzIoIDAuMCwgLXdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzJdID0gdmVjMiggd2gueCAtd2gueSk7XCIsXHJcblxyXG5cdFx0XHRcdFwib2Zmc2V0WzNdID0gdmVjMigtd2gueCwgIDAuMCk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbNF0gPSB2ZWMyKCAwLjAsICAgMC4wKTtcIixcclxuXHRcdFx0XHRcIm9mZnNldFs1XSA9IHZlYzIoIHdoLngsICAwLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcIm9mZnNldFs2XSA9IHZlYzIoLXdoLngsIHdoLnkpO1wiLFxyXG5cdFx0XHRcdFwib2Zmc2V0WzddID0gdmVjMiggMC4wLCAgd2gueSk7XCIsXHJcblx0XHRcdFx0XCJvZmZzZXRbOF0gPSB2ZWMyKCB3aC54LCB3aC55KTtcIixcclxuXHJcblx0XHRcdFx0XCJrZXJuZWxbMF0gPSAxLjAvMTYuMDsgICBrZXJuZWxbMV0gPSAyLjAvMTYuMDsgICBrZXJuZWxbMl0gPSAxLjAvMTYuMDtcIixcclxuXHRcdFx0XHRcImtlcm5lbFszXSA9IDIuMC8xNi4wOyAgIGtlcm5lbFs0XSA9IDQuMC8xNi4wOyAgIGtlcm5lbFs1XSA9IDIuMC8xNi4wO1wiLFxyXG5cdFx0XHRcdFwia2VybmVsWzZdID0gMS4wLzE2LjA7ICAga2VybmVsWzddID0gMi4wLzE2LjA7ICAga2VybmVsWzhdID0gMS4wLzE2LjA7XCIsXHJcblxyXG5cclxuXHRcdFx0XHRcImZvciggaW50IGk9MDsgaTw5OyBpKysgKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCB0bXAgPSB1bnBhY2tEZXB0aCh0ZXh0dXJlMkQodERlcHRoLCBjb29yZHMgKyBvZmZzZXRbaV0pKTtcIixcclxuXHRcdFx0XHRcdFwiZCArPSB0bXAgKiBrZXJuZWxbaV07XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGQ7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHJcblx0XHRcdFwidmVjMyBjb2xvcih2ZWMyIGNvb3JkcyxmbG9hdCBibHVyKVwiLCAvL3Byb2Nlc3NpbmcgdGhlIHNhbXBsZVxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcInZlYzMgY29sID0gdmVjMygwLjApO1wiLFxyXG5cclxuXHRcdFx0XHRcImNvbC5yID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoMC4wLDEuMCkqdGV4ZWwqZnJpbmdlKmJsdXIpLnI7XCIsXHJcblx0XHRcdFx0XCJjb2wuZyA9IHRleHR1cmUyRCh0RGlmZnVzZSxjb29yZHMgKyB2ZWMyKC0wLjg2NiwtMC41KSp0ZXhlbCpmcmluZ2UqYmx1cikuZztcIixcclxuXHRcdFx0XHRcImNvbC5iID0gdGV4dHVyZTJEKHREaWZmdXNlLGNvb3JkcyArIHZlYzIoMC44NjYsLTAuNSkqdGV4ZWwqZnJpbmdlKmJsdXIpLmI7XCIsXHJcblxyXG5cdFx0XHRcdFwidmVjMyBsdW1jb2VmZiA9IHZlYzMoMC4yOTksMC41ODcsMC4xMTQpO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtID0gZG90KGNvbC5yZ2IsIGx1bWNvZWZmKTtcIixcclxuXHRcdFx0XHRcImZsb2F0IHRocmVzaCA9IG1heCgobHVtLXRocmVzaG9sZCkqZ2FpbiwgMC4wKTtcIixcclxuXHRcdFx0XHRcInJldHVybiBjb2wrbWl4KHZlYzMoMC4wKSxjb2wsdGhyZXNoKmJsdXIpO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwidmVjMiByYW5kKHZlYzIgY29vcmQpIC8vZ2VuZXJhdGluZyBub2lzZS9wYXR0ZXJuIHRleHR1cmUgZm9yIGRpdGhlcmluZ1wiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IG5vaXNlWCA9ICgoZnJhY3QoMS4wLWNvb3JkLnMqKHNpemUueC8yLjApKSowLjI1KSsoZnJhY3QoY29vcmQudCooc2l6ZS55LzIuMCkpKjAuNzUpKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbm9pc2VZID0gKChmcmFjdCgxLjAtY29vcmQucyooc2l6ZS54LzIuMCkpKjAuNzUpKyhmcmFjdChjb29yZC50KihzaXplLnkvMi4wKSkqMC4yNSkpKjIuMC0xLjA7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKG5vaXNlKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJub2lzZVggPSBjbGFtcChmcmFjdChzaW4oZG90KGNvb3JkICx2ZWMyKDEyLjk4OTgsNzguMjMzKSkpICogNDM3NTguNTQ1MyksMC4wLDEuMCkqMi4wLTEuMDtcIixcclxuXHRcdFx0XHRcdFwibm9pc2VZID0gY2xhbXAoZnJhY3Qoc2luKGRvdChjb29yZCAsdmVjMigxMi45ODk4LDc4LjIzMykqMi4wKSkgKiA0Mzc1OC41NDUzKSwwLjAsMS4wKSoyLjAtMS4wO1wiLFxyXG5cdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFwicmV0dXJuIHZlYzIobm9pc2VYLG5vaXNlWSk7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ2ZWMzIGRlYnVnRm9jdXModmVjMyBjb2wsIGZsb2F0IGJsdXIsIGZsb2F0IGRlcHRoKVwiLFxyXG5cdFx0XHRcIntcIixcclxuXHRcdFx0XHRcImZsb2F0IGVkZ2UgPSAwLjAwMipkZXB0aDsgLy9kaXN0YW5jZSBiYXNlZCBlZGdlIHNtb290aGluZ1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbSA9IGNsYW1wKHNtb290aHN0ZXAoMC4wLGVkZ2UsYmx1ciksMC4wLDEuMCk7XCIsXHJcblx0XHRcdFx0XCJmbG9hdCBlID0gY2xhbXAoc21vb3Roc3RlcCgxLjAtZWRnZSwxLjAsYmx1ciksMC4wLDEuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiY29sID0gbWl4KGNvbCx2ZWMzKDEuMCwwLjUsMC4wKSwoMS4wLW0pKjAuNik7XCIsXHJcblx0XHRcdFx0XCJjb2wgPSBtaXgoY29sLHZlYzMoMC4wLDAuNSwxLjApLCgoMS4wLWUpLSgxLjAtbSkpKjAuMik7XCIsXHJcblxyXG5cdFx0XHRcdFwicmV0dXJuIGNvbDtcIixcclxuXHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcImZsb2F0IGxpbmVhcml6ZShmbG9hdCBkZXB0aClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XCJyZXR1cm4gLXpmYXIgKiB6bmVhciAvIChkZXB0aCAqICh6ZmFyIC0gem5lYXIpIC0gemZhcik7XCIsXHJcblx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJmbG9hdCB2aWduZXR0ZSgpXCIsXHJcblx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgZGlzdCA9IGRpc3RhbmNlKHZVdiwgdmVjMigwLjUsMC41KSk7XCIsXHJcblx0XHRcdFx0XCJkaXN0ID0gc21vb3Roc3RlcCh2aWdub3V0Kyhmc3RvcC92aWduZmFkZSksIHZpZ25pbisoZnN0b3AvdmlnbmZhZGUpLCBkaXN0KTtcIixcclxuXHRcdFx0XHRcInJldHVybiBjbGFtcChkaXN0LDAuMCwxLjApO1wiLFxyXG5cdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKClcIixcclxuXHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0Ly9zY2VuZSBkZXB0aCBjYWxjdWxhdGlvblxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGRlcHRoID0gbGluZWFyaXplKHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsdlV2KSkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImlmIChkZXB0aGJsdXIpXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImRlcHRoID0gbGluZWFyaXplKGJkZXB0aCh2VXYpKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0Ly9mb2NhbCBwbGFuZSBjYWxjdWxhdGlvblwiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGZEZXB0aCA9IGZvY2FsRGVwdGg7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKGF1dG9mb2N1cylcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiZkRlcHRoID0gbGluZWFyaXplKHVucGFja0RlcHRoKHRleHR1cmUyRCh0RGVwdGgsZm9jdXMpKSk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdC8vZG9mIGJsdXIgZmFjdG9yIGNhbGN1bGF0aW9uXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgYmx1ciA9IDAuMDtcIixcclxuXHJcblx0XHRcdFx0XCJpZiAobWFudWFsZG9mKVwiLFxyXG5cdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBhID0gZGVwdGgtZkRlcHRoO1wiLCAvL2ZvY2FsIHBsYW5lXHJcblx0XHRcdFx0XHRcImZsb2F0IGIgPSAoYS1mZG9mc3RhcnQpL2Zkb2ZkaXN0O1wiLCAvL2ZhciBEb0ZcclxuXHRcdFx0XHRcdFwiZmxvYXQgYyA9ICgtYS1uZG9mc3RhcnQpL25kb2ZkaXN0O1wiLCAvL25lYXIgRG9mXHJcblx0XHRcdFx0XHRcImJsdXIgPSAoYT4wLjApP2I6YztcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJlbHNlXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGYgPSBmb2NhbExlbmd0aDtcIiwgLy9mb2NhbCBsZW5ndGggaW4gbW1cclxuXHRcdFx0XHRcdFwiZmxvYXQgZCA9IGZEZXB0aCoxMDAwLjA7XCIsIC8vZm9jYWwgcGxhbmUgaW4gbW1cclxuXHRcdFx0XHRcdFwiZmxvYXQgbyA9IGRlcHRoKjEwMDAuMDtcIiwgLy9kZXB0aCBpbiBtbVxyXG5cclxuXHRcdFx0XHRcdFwiZmxvYXQgYSA9IChvKmYpLyhvLWYpO1wiLFxyXG5cdFx0XHRcdFx0XCJmbG9hdCBiID0gKGQqZikvKGQtZik7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IGMgPSAoZC1mKS8oZCpmc3RvcCpDb0MpO1wiLFxyXG5cclxuXHRcdFx0XHRcdFwiYmx1ciA9IGFicyhhLWIpKmM7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiYmx1ciA9IGNsYW1wKGJsdXIsMC4wLDEuMCk7XCIsXHJcblxyXG5cdFx0XHRcdC8vIGNhbGN1bGF0aW9uIG9mIHBhdHRlcm4gZm9yIGRpdGVyaW5nXHJcblxyXG5cdFx0XHRcdFwidmVjMiBub2lzZSA9IHJhbmQodlV2KSpuYW1vdW50KmJsdXI7XCIsXHJcblxyXG5cdFx0XHRcdC8vIGdldHRpbmcgYmx1ciB4IGFuZCB5IHN0ZXAgZmFjdG9yXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgdyA9ICgxLjAvc2l6ZS54KSpibHVyKm1heGJsdXIrbm9pc2UueDtcIixcclxuXHRcdFx0XHRcImZsb2F0IGggPSAoMS4wL3NpemUueSkqYmx1ciptYXhibHVyK25vaXNlLnk7XCIsXHJcblxyXG5cdFx0XHRcdC8vIGNhbGN1bGF0aW9uIG9mIGZpbmFsIGNvbG9yXHJcblxyXG5cdFx0XHRcdFwidmVjMyBjb2wgPSB2ZWMzKDAuMCk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYoYmx1ciA8IDAuMDUpXCIsIC8vc29tZSBvcHRpbWl6YXRpb24gdGhpbmd5XHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XCJlbHNlXCIsXHJcblx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcImNvbCA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XCIsXHJcblx0XHRcdFx0XHRcImZsb2F0IHMgPSAxLjA7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJmb3IgKGludCBpID0gMTsgaSA8PSByaW5nczsgaSArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFwiZmxvYXQgcmluZ3NhbXBsZXMgPSBmbG9hdChpICogc2FtcGxlcyk7XCIsXHJcblxyXG5cdFx0XHRcdFx0XHRcImlmKGkgPT0gMSlcIixcclxuXHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJmb3IgKGludCBqID0gMCA7IGogPCAzIDsgaiArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBzdGVwID0gUEkqMi4wIC8gZmxvYXQocmluZ3NhbXBsZXMpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwdyA9IChjb3MoZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwaCA9IChzaW4oZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwID0gMS4wO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJpZiAocGVudGFnb24pXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwID0gcGVudGEodmVjMihwdyxwaCkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImNvbCArPSBjb2xvcih2VXYgKyB2ZWMyKHB3KncscGgqaCksYmx1cikqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcInMgKz0gMS4wKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJlbHNlIGlmKGkgPT0gMilcIixcclxuXHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJmb3IgKGludCBqID0gMCA7IGogPCA2IDsgaiArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBzdGVwID0gUEkqMi4wIC8gZmxvYXQocmluZ3NhbXBsZXMpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwdyA9IChjb3MoZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwaCA9IChzaW4oZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwID0gMS4wO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJpZiAocGVudGFnb24pXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwID0gcGVudGEodmVjMihwdyxwaCkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImNvbCArPSBjb2xvcih2VXYgKyB2ZWMyKHB3KncscGgqaCksYmx1cikqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcInMgKz0gMS4wKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFx0XCJlbHNlIGlmKGkgPT0gMylcIixcclxuXHRcdFx0XHRcdFx0XCJ7XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJmb3IgKGludCBqID0gMCA7IGogPCA5IDsgaiArPSAxKVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwie1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBzdGVwID0gUEkqMi4wIC8gZmxvYXQocmluZ3NhbXBsZXMpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwdyA9IChjb3MoZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwaCA9IChzaW4oZmxvYXQoaikqc3RlcCkqZmxvYXQoaSkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJmbG9hdCBwID0gMS4wO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJpZiAocGVudGFnb24pXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJwID0gcGVudGEodmVjMihwdyxwaCkpO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJ9XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcImNvbCArPSBjb2xvcih2VXYgKyB2ZWMyKHB3KncscGgqaCksYmx1cikqbWl4KDEuMCwoZmxvYXQoaSkpLyhmbG9hdChyaW5ncykpLGJpYXMpKnA7XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcInMgKz0gMS4wKm1peCgxLjAsKGZsb2F0KGkpKS8oZmxvYXQocmluZ3MpKSxiaWFzKSpwO1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XHRcIn1cIixcclxuXHRcdFx0XHRcdFwifVwiLFxyXG5cdFx0XHRcdFx0XCJjb2wgLz0gcztcIiwgLy9kaXZpZGUgYnkgc2FtcGxlIGNvdW50XHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKHNob3dGb2N1cylcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sID0gZGVidWdGb2N1cyhjb2wsIGJsdXIsIGRlcHRoKTtcIixcclxuXHRcdFx0XHRcIn1cIixcclxuXHJcblx0XHRcdFx0XCJpZiAodmlnbmV0dGluZylcIixcclxuXHRcdFx0XHRcIntcIixcclxuXHRcdFx0XHRcdFwiY29sICo9IHZpZ25ldHRlKCk7XCIsXHJcblx0XHRcdFx0XCJ9XCIsXHJcblxyXG5cdFx0XHRcdFwiZ2xfRnJhZ0NvbG9yLnJnYiA9IGNvbDtcIixcclxuXHRcdFx0XHRcImdsX0ZyYWdDb2xvci5hID0gMS4wO1wiLFxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKVxyXG5cclxuXHR9O1xyXG5cclxufSIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcclxuXHRUSFJFRS5FZmZlY3RDb21wb3NlciA9IGZ1bmN0aW9uICggcmVuZGVyZXIsIHJlbmRlclRhcmdldCApIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcblxyXG5cdFx0aWYgKCByZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IDE7XHJcblx0XHRcdHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMTtcclxuXHRcdFx0dmFyIHBhcmFtZXRlcnMgPSB7IG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgZm9ybWF0OiBUSFJFRS5SR0JGb3JtYXQsIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIH07XHJcblxyXG5cdFx0XHRyZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHdpZHRoLCBoZWlnaHQsIHBhcmFtZXRlcnMgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQxID0gcmVuZGVyVGFyZ2V0O1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XHJcblxyXG5cdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcclxuXHJcblx0XHR0aGlzLnBhc3NlcyA9IFtdO1xyXG5cclxuXHRcdGlmICggVEhSRUUuQ29weVNoYWRlciA9PT0gdW5kZWZpbmVkIClcclxuXHRcdFx0Y29uc29sZS5lcnJvciggXCJUSFJFRS5FZmZlY3RDb21wb3NlciByZWxpZXMgb24gVEhSRUUuQ29weVNoYWRlclwiICk7XHJcblxyXG5cdFx0dGhpcy5jb3B5UGFzcyA9IG5ldyBUSFJFRS5TaGFkZXJQYXNzKCBUSFJFRS5Db3B5U2hhZGVyICk7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLkVmZmVjdENvbXBvc2VyLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRzd2FwQnVmZmVyczogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR2YXIgdG1wID0gdGhpcy5yZWFkQnVmZmVyO1xyXG5cdFx0XHR0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLndyaXRlQnVmZmVyO1xyXG5cdFx0XHR0aGlzLndyaXRlQnVmZmVyID0gdG1wO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkUGFzczogZnVuY3Rpb24gKCBwYXNzICkge1xyXG5cclxuXHRcdFx0dGhpcy5wYXNzZXMucHVzaCggcGFzcyApO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0aW5zZXJ0UGFzczogZnVuY3Rpb24gKCBwYXNzLCBpbmRleCApIHtcclxuXHJcblx0XHRcdHRoaXMucGFzc2VzLnNwbGljZSggaW5kZXgsIDAsIHBhc3MgKTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XHJcblx0XHRcdHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcclxuXHJcblx0XHRcdHZhciBtYXNrQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHR2YXIgcGFzcywgaSwgaWwgPSB0aGlzLnBhc3Nlcy5sZW5ndGg7XHJcblxyXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IGlsOyBpICsrICkge1xyXG5cclxuXHRcdFx0XHRwYXNzID0gdGhpcy5wYXNzZXNbIGkgXTtcclxuXHJcblx0XHRcdFx0aWYgKCAhcGFzcy5lbmFibGVkICkgY29udGludWU7XHJcblxyXG5cdFx0XHRcdHBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhLCBtYXNrQWN0aXZlICk7XHJcblxyXG5cdFx0XHRcdGlmICggcGFzcy5uZWVkc1N3YXAgKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtYXNrQWN0aXZlICkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQ7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0Lk5PVEVRVUFMLCAxLCAweGZmZmZmZmZmICk7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvcHlQYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSApO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnN3YXBCdWZmZXJzKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBwYXNzIGluc3RhbmNlb2YgVEhSRUUuTWFza1Bhc3MgKSB7XHJcblxyXG5cdFx0XHRcdFx0bWFza0FjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHBhc3MgaW5zdGFuY2VvZiBUSFJFRS5DbGVhck1hc2tQYXNzICkge1xyXG5cclxuXHRcdFx0XHRcdG1hc2tBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0cmVzZXQ6IGZ1bmN0aW9uICggcmVuZGVyVGFyZ2V0ICkge1xyXG5cclxuXHRcdFx0aWYgKCByZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCApIHtcclxuXHJcblx0XHRcdFx0cmVuZGVyVGFyZ2V0ID0gdGhpcy5yZW5kZXJUYXJnZXQxLmNsb25lKCk7XHJcblxyXG5cdFx0XHRcdHJlbmRlclRhcmdldC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRcdHJlbmRlclRhcmdldC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XHJcblx0XHRcdHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xyXG5cclxuXHRcdFx0dGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcclxuXHRcdFx0dGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0U2l6ZTogZnVuY3Rpb24gKCB3aWR0aCwgaGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0dmFyIHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0cmVuZGVyVGFyZ2V0LndpZHRoID0gd2lkdGg7XHJcblx0XHRcdHJlbmRlclRhcmdldC5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG5cdFx0XHR0aGlzLnJlc2V0KCByZW5kZXJUYXJnZXQgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKiBAYXV0aG9yIGRhdmlkZWRjIC8gaHR0cDovL3d3dy5za2V0Y2hwYXRjaC5uZXQvXHJcbiAqXHJcbiAqIE5WSURJQSBGWEFBIGJ5IFRpbW90aHkgTG90dGVzXHJcbiAqIGh0dHA6Ly90aW1vdGh5bG90dGVzLmJsb2dzcG90LmNvbS8yMDExLzA2L2Z4YWEzLXNvdXJjZS1yZWxlYXNlZC5odG1sXHJcbiAqIC0gV2ViR0wgcG9ydCBieSBAc3VwZXJlZ2diZXJ0XHJcbiAqIGh0dHA6Ly93d3cuZ2xnZS5vcmcvZGVtb3MvZnhhYS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcdFxyXG5cdFRIUkVFLkZYQUFTaGFkZXIgPSB7XHJcblxyXG5cdFx0dW5pZm9ybXM6IHtcclxuXHJcblx0XHRcdFwidERpZmZ1c2VcIjogICB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxyXG5cdFx0XHRcInJlc29sdXRpb25cIjogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMiggMSAvIDEwMjQsIDEgLyA1MTIgKSAgfVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0dmVydGV4U2hhZGVyOiBbXHJcblxyXG5cdFx0XHRcInZvaWQgbWFpbigpIHtcIixcclxuXHJcblx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXHJcblxyXG5cdFx0XHRcIn1cIlxyXG5cclxuXHRcdF0uam9pbihcIlxcblwiKSxcclxuXHJcblx0XHRmcmFnbWVudFNoYWRlcjogW1xyXG5cclxuXHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcclxuXHRcdFx0XCJ1bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcIixcclxuXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1JFRFVDRV9NSU4gICAoMS4wLzEyOC4wKVwiLFxyXG5cdFx0XHRcIiNkZWZpbmUgRlhBQV9SRURVQ0VfTVVMICAgKDEuMC84LjApXCIsXHJcblx0XHRcdFwiI2RlZmluZSBGWEFBX1NQQU5fTUFYICAgICA4LjBcIixcclxuXHJcblx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzMgcmdiTlcgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIC0xLjAsIC0xLjAgKSApICogcmVzb2x1dGlvbiApLnh5ejtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiTkUgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAoIGdsX0ZyYWdDb29yZC54eSArIHZlYzIoIDEuMCwgLTEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjMyByZ2JTVyA9IHRleHR1cmUyRCggdERpZmZ1c2UsICggZ2xfRnJhZ0Nvb3JkLnh5ICsgdmVjMiggLTEuMCwgMS4wICkgKSAqIHJlc29sdXRpb24gKS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIHJnYlNFID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgKCBnbF9GcmFnQ29vcmQueHkgKyB2ZWMyKCAxLjAsIDEuMCApICkgKiByZXNvbHV0aW9uICkueHl6O1wiLFxyXG5cdFx0XHRcdFwidmVjNCByZ2JhTSAgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKTtcIixcclxuXHRcdFx0XHRcInZlYzMgcmdiTSAgPSByZ2JhTS54eXo7XCIsXHJcblx0XHRcdFx0XCJ2ZWMzIGx1bWEgPSB2ZWMzKCAwLjI5OSwgMC41ODcsIDAuMTE0ICk7XCIsXHJcblxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU5XID0gZG90KCByZ2JOVywgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU5FID0gZG90KCByZ2JORSwgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYVNXID0gZG90KCByZ2JTVywgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYVNFID0gZG90KCByZ2JTRSwgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU0gID0gZG90KCByZ2JNLCAgbHVtYSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU1pbiA9IG1pbiggbHVtYU0sIG1pbiggbWluKCBsdW1hTlcsIGx1bWFORSApLCBtaW4oIGx1bWFTVywgbHVtYVNFICkgKSApO1wiLFxyXG5cdFx0XHRcdFwiZmxvYXQgbHVtYU1heCA9IG1heCggbHVtYU0sIG1heCggbWF4KCBsdW1hTlcsIGx1bWFORSkgLCBtYXgoIGx1bWFTVywgbHVtYVNFICkgKSApO1wiLFxyXG5cclxuXHRcdFx0XHRcInZlYzIgZGlyO1wiLFxyXG5cdFx0XHRcdFwiZGlyLnggPSAtKChsdW1hTlcgKyBsdW1hTkUpIC0gKGx1bWFTVyArIGx1bWFTRSkpO1wiLFxyXG5cdFx0XHRcdFwiZGlyLnkgPSAgKChsdW1hTlcgKyBsdW1hU1cpIC0gKGx1bWFORSArIGx1bWFTRSkpO1wiLFxyXG5cclxuXHRcdFx0XHRcImZsb2F0IGRpclJlZHVjZSA9IG1heCggKCBsdW1hTlcgKyBsdW1hTkUgKyBsdW1hU1cgKyBsdW1hU0UgKSAqICggMC4yNSAqIEZYQUFfUkVEVUNFX01VTCApLCBGWEFBX1JFRFVDRV9NSU4gKTtcIixcclxuXHJcblx0XHRcdFx0XCJmbG9hdCByY3BEaXJNaW4gPSAxLjAgLyAoIG1pbiggYWJzKCBkaXIueCApLCBhYnMoIGRpci55ICkgKSArIGRpclJlZHVjZSApO1wiLFxyXG5cdFx0XHRcdFwiZGlyID0gbWluKCB2ZWMyKCBGWEFBX1NQQU5fTUFYLCAgRlhBQV9TUEFOX01BWCksXCIsXHJcblx0XHRcdFx0XHQgIFwibWF4KCB2ZWMyKC1GWEFBX1NQQU5fTUFYLCAtRlhBQV9TUEFOX01BWCksXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJkaXIgKiByY3BEaXJNaW4pKSAqIHJlc29sdXRpb247XCIsXHJcblx0XHRcdFx0XCJ2ZWM0IHJnYkEgPSAoMS4wLzIuMCkgKiAoXCIsXHJcblx0ICAgICAgICBcdFwidGV4dHVyZTJEKHREaWZmdXNlLCAgZ2xfRnJhZ0Nvb3JkLnh5ICAqIHJlc29sdXRpb24gKyBkaXIgKiAoMS4wLzMuMCAtIDAuNSkpICtcIixcclxuXHRcdFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDIuMC8zLjAgLSAwLjUpKSk7XCIsXHJcblx0ICAgIFx0XHRcInZlYzQgcmdiQiA9IHJnYkEgKiAoMS4wLzIuMCkgKyAoMS4wLzQuMCkgKiAoXCIsXHJcblx0XHRcdFx0XCJ0ZXh0dXJlMkQodERpZmZ1c2UsICBnbF9GcmFnQ29vcmQueHkgICogcmVzb2x1dGlvbiArIGRpciAqICgwLjAvMy4wIC0gMC41KSkgK1wiLFxyXG5cdCAgICAgIFx0XHRcInRleHR1cmUyRCh0RGlmZnVzZSwgIGdsX0ZyYWdDb29yZC54eSAgKiByZXNvbHV0aW9uICsgZGlyICogKDMuMC8zLjAgLSAwLjUpKSk7XCIsXHJcblx0ICAgIFx0XHRcImZsb2F0IGx1bWFCID0gZG90KHJnYkIsIHZlYzQobHVtYSwgMC4wKSk7XCIsXHJcblxyXG5cdFx0XHRcdFwiaWYgKCAoIGx1bWFCIDwgbHVtYU1pbiApIHx8ICggbHVtYUIgPiBsdW1hTWF4ICkgKSB7XCIsXHJcblxyXG5cdFx0XHRcdFx0XCJnbF9GcmFnQ29sb3IgPSByZ2JBO1wiLFxyXG5cclxuXHRcdFx0XHRcIn0gZWxzZSB7XCIsXHJcblx0XHRcdFx0XHRcImdsX0ZyYWdDb2xvciA9IHJnYkI7XCIsXHJcblxyXG5cdFx0XHRcdFwifVwiLFxyXG5cclxuXHRcdFx0XCJ9XCJcclxuXHJcblx0XHRdLmpvaW4oXCJcXG5cIilcclxuXHJcblx0fTtcclxuXHJcbn0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHRcdFxyXG5cdFRIUkVFLk1hc2tQYXNzID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhICkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcclxuXHRcdHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5pbnZlcnNlID0gZmFsc2U7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLk1hc2tQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdC8vIGRvbid0IHVwZGF0ZSBjb2xvciBvciBkZXB0aFxyXG5cclxuXHRcdFx0Y29udGV4dC5jb2xvck1hc2soIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlICk7XHJcblx0XHRcdGNvbnRleHQuZGVwdGhNYXNrKCBmYWxzZSApO1xyXG5cclxuXHRcdFx0Ly8gc2V0IHVwIHN0ZW5jaWxcclxuXHJcblx0XHRcdHZhciB3cml0ZVZhbHVlLCBjbGVhclZhbHVlO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmludmVyc2UgKSB7XHJcblxyXG5cdFx0XHRcdHdyaXRlVmFsdWUgPSAwO1xyXG5cdFx0XHRcdGNsZWFyVmFsdWUgPSAxO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0d3JpdGVWYWx1ZSA9IDE7XHJcblx0XHRcdFx0Y2xlYXJWYWx1ZSA9IDA7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb250ZXh0LmVuYWJsZSggY29udGV4dC5TVEVOQ0lMX1RFU1QgKTtcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UgKTtcclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5BTFdBWVMsIHdyaXRlVmFsdWUsIDB4ZmZmZmZmZmYgKTtcclxuXHRcdFx0Y29udGV4dC5jbGVhclN0ZW5jaWwoIGNsZWFyVmFsdWUgKTtcclxuXHJcblx0XHRcdC8vIGRyYXcgaW50byB0aGUgc3RlbmNpbCBidWZmZXJcclxuXHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHRcdFx0cmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdC8vIHJlLWVuYWJsZSB1cGRhdGUgb2YgY29sb3IgYW5kIGRlcHRoXHJcblxyXG5cdFx0XHRjb250ZXh0LmNvbG9yTWFzayggdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSApO1xyXG5cdFx0XHRjb250ZXh0LmRlcHRoTWFzayggdHJ1ZSApO1xyXG5cclxuXHRcdFx0Ly8gb25seSByZW5kZXIgd2hlcmUgc3RlbmNpbCBpcyBzZXQgdG8gMVxyXG5cclxuXHRcdFx0Y29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApOyAgLy8gZHJhdyBpZiA9PSAxXHJcblx0XHRcdGNvbnRleHQuc3RlbmNpbE9wKCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHJcblx0VEhSRUUuQ2xlYXJNYXNrUGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRUSFJFRS5DbGVhck1hc2tQYXNzLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRyZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcclxuXHJcblx0XHRcdHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcclxuXHJcblx0XHRcdGNvbnRleHQuZGlzYWJsZSggY29udGV4dC5TVEVOQ0lMX1RFU1QgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG59OyIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xyXG5cclxuXHRUSFJFRS5SZW5kZXJQYXNzID0gZnVuY3Rpb24gKCBzY2VuZSwgY2FtZXJhLCBvdmVycmlkZU1hdGVyaWFsLCBjbGVhckNvbG9yLCBjbGVhckFscGhhICkge1xyXG5cclxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHRcdHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG5cclxuXHRcdHRoaXMub3ZlcnJpZGVNYXRlcmlhbCA9IG92ZXJyaWRlTWF0ZXJpYWw7XHJcblxyXG5cdFx0dGhpcy5jbGVhckNvbG9yID0gY2xlYXJDb2xvcjtcclxuXHRcdHRoaXMuY2xlYXJBbHBoYSA9ICggY2xlYXJBbHBoYSAhPT0gdW5kZWZpbmVkICkgPyBjbGVhckFscGhhIDogMTtcclxuXHJcblx0XHR0aGlzLm9sZENsZWFyQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcclxuXHRcdHRoaXMub2xkQ2xlYXJBbHBoYSA9IDE7XHJcblxyXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5uZWVkc1N3YXAgPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0VEhSRUUuUmVuZGVyUGFzcy5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0cmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XHJcblxyXG5cdFx0XHR0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm92ZXJyaWRlTWF0ZXJpYWw7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcclxuXHJcblx0XHRcdFx0dGhpcy5vbGRDbGVhckNvbG9yLmNvcHkoIHJlbmRlcmVyLmdldENsZWFyQ29sb3IoKSApO1xyXG5cdFx0XHRcdHRoaXMub2xkQ2xlYXJBbHBoYSA9IHJlbmRlcmVyLmdldENsZWFyQWxwaGEoKTtcclxuXHJcblx0XHRcdFx0cmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5jbGVhckNvbG9yLCB0aGlzLmNsZWFyQWxwaGEgKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcclxuXHJcblx0XHRcdGlmICggdGhpcy5jbGVhckNvbG9yICkge1xyXG5cclxuXHRcdFx0XHRyZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLm9sZENsZWFyQ29sb3IsIHRoaXMub2xkQ2xlYXJBbHBoYSApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gbnVsbDtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblx0XHJcbn0iLCIvKipcclxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcclxuXHJcblx0VEhSRUUuU2hhZGVyUGFzcyA9IGZ1bmN0aW9uICggc2hhZGVyLCB0ZXh0dXJlSUQgKSB7XHJcblxyXG5cdFx0dGhpcy50ZXh0dXJlSUQgPSAoIHRleHR1cmVJRCAhPT0gdW5kZWZpbmVkICkgPyB0ZXh0dXJlSUQgOiBcInREaWZmdXNlXCI7XHJcblxyXG5cdFx0dGhpcy51bmlmb3JtcyA9IFRIUkVFLlVuaWZvcm1zVXRpbHMuY2xvbmUoIHNoYWRlci51bmlmb3JtcyApO1xyXG5cclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuXHJcblx0XHRcdHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXJcclxuXHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJUb1NjcmVlbiA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblx0XHR0aGlzLm5lZWRzU3dhcCA9IHRydWU7XHJcblx0XHR0aGlzLmNsZWFyID0gZmFsc2U7XHJcblxyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLTEsIDEsIDEsIC0xLCAwLCAxICk7XHJcblx0XHR0aGlzLnNjZW5lICA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdHRoaXMucXVhZCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMiwgMiApLCBudWxsICk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZCggdGhpcy5xdWFkICk7XHJcblxyXG5cdH07XHJcblxyXG5cdFRIUkVFLlNoYWRlclBhc3MucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLnVuaWZvcm1zWyB0aGlzLnRleHR1cmVJRCBdICkge1xyXG5cclxuXHRcdFx0XHR0aGlzLnVuaWZvcm1zWyB0aGlzLnRleHR1cmVJRCBdLnZhbHVlID0gcmVhZEJ1ZmZlcjtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMucmVuZGVyVG9TY3JlZW4gKSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG59O1xyXG4iXX0=
