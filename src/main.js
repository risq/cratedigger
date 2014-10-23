cratedigger.init({
    elements: {
        rootContainerId     : 'cratedigger',
        canvasContainerId   : 'cratedigger-canvas',
        loadingContainerId  : 'cratedigger-loading',
        infosContainerId    : 'cratedigger-infos',
        titleContainerId    : 'cratedigger-record-title',
        artistContainerId   : 'cratedigger-record-artist',
        coverContainerId    : 'cratedigger-record-cover'
    }
});


var recordsData = [];
for (var i = 0; i < 240; i++) {
    recordsData[i] = {
        title: 'Tetra',
        artist: 'C2C',
        cover: 'http://cdn-images.deezer.com/images/cover/fb2b1fbdb9779c146ef7bee3c4d00507/400x400-000000-80-0-0.jpg',
        hasSleeve: false
    };
}
var recordsData2 = [];
for (var i = 0; i < 64; i++) {
    recordsData2[i] = {
        title: 'All Eyez on Me',
        artist: '2Pac',
        cover: 'http://cdn-images.deezer.com/images/cover/90665acc69b221b7cb04e53c7b81f7f4/400x400-000000-80-0-0.jpg',
        hasSleeve: true
    };
}
cratedigger.loadRecords(recordsData);

document.addEventListener('click', function(e) {
    if (e.target != cratedigger.canvas()) {
        cratedigger.resetShownRecord();
    }
}, false);