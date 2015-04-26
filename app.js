window.addEventListener("load", function() {
  console.log("Hello World!");
});

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
}; 

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

function getContact() {
  var allContacts = navigator.mozContacts.getAll({sortBy: "familyName", sortOrder: "descending"});
  
  allContacts.onsuccess = function(event) {
  var cursor = event.target;
  if (cursor.result) {
    console.log("Found: " + cursor.result.givenName[0] + " " + cursor.result.familyName[0]);
    cursor.continue();
  } else {
    console.log("No more contacts");
  }
};

  allContacts.onerror = function() {
  console.warn("Something went terribly wrong! :(");
  }
}

document.getElementById('contacts-button').addEventListener('click', getContact);
document.getElementById('geoloc-button').addEventListener('click', getGeoloc);