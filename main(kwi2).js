var firebaseConfig = {
  apiKey: "AIzaSyBXMFZBd97CAtuX0zhRFTfXOGd3svt09ZU",
  authDomain: "project34-4c7ca.firebaseapp.com",
  databaseURL: "https://project34-4c7ca-default-rtdb.firebaseio.com",
  projectId: "project34-4c7ca",
  storageBucket: "project34-4c7ca.appspot.com",
  messagingSenderId: "893225689016",
  appId: "1:893225689016:web:158390fc5129930100794d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code   
   console.log("room name " + "= " + room_name);
   row = "<div class='room_name' id="+Room_names+ "onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function add(){
  room_name = document.getElementById("name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding roomname"
  });
  localStorage.setItem("roome name", room_name);
  window.loaction = "kwitter_room.js";
}
function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name", room_name);
  window.loaction("index(kwi3).html");
}
