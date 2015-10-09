function getContact() {
  console.log("Clicked getContacts");
  var allContacts = navigator.mozContacts.getAll({sortBy: "familyName", sortOrder: "descending"});
  
//   allContacts.onsuccess = function(event) {
//     var cursor = event.target;
//     if (cursor.result) {
//       console.log("Found: " + cursor.result.givenName[0] + " " + cursor.result.familyName[0]);
//       cursor.continue();
//     } else {
//       console.log("No more contacts");
//     }
//   };

//   allContacts.onerror = function() {
//     console.warn("Something went terribly wrong! :(");
//   }
}

function getGeoloc() {
  var options = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

function getAudio() {
  console.log("Clicked getAudio");
  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
}

function getCamera() {
  console.log("Clicked getCamera");
  navigator.mozCamera.getCamera();
}

function getMusic() {
  console.log("Clicked getMusic");
  navigator.getDeviceStorage('music').freeSpace();
}

function getPictures() {
  console.log("Clicked getPictures");
  navigator.getDeviceStorage('pictures').freeSpace();
}

function getSdcard() {
  console.log("Clicked getSdcard");
  navigator.getDeviceStorage('sdcard').freeSpace();
}

function getVideos() {
  console.log("Clicked getVideos");
  navigator.getDeviceStorage('videos').freeSpace();
}

function getVideoCap() {
  console.log("Clicked getVideoCap");
  navigator.mediaDevices.getUserMedia({ audio: false, video: true });
}

function showIndexedDB() {
  var db = navigator.privacyMonitor.readIndexedDB();
  var data = db.transaction(["entries"], "readwrite").objectStore("entries").getAll();
  data.onsuccess = function(event) {
    console.log(data);
  };
}

document.getElementById('contactsButton').addEventListener('click', getContact);
document.getElementById('geolocButton').addEventListener('click', getGeoloc);
document.getElementById('audioCapButton').addEventListener('click', getAudio);
document.getElementById('cameraButton').addEventListener('click', getCamera);
document.getElementById('musicButton').addEventListener('click', getMusic);
document.getElementById('picturesButton').addEventListener('click', getPictures);
document.getElementById('sdcardButton').addEventListener('click', getSdcard);
document.getElementById('videosButton').addEventListener('click', getVideos);
document.getElementById('videoCapButton').addEventListener('click', getVideoCap);
document.getElementById('indexedDBButton').addEventListener('click', showIndexedDB);