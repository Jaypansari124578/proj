
 var firebaseConfig = {
      apiKey: "AIzaSyDqSxHiJUpZpVZGp167xGkntWoY7DZy3rY",
      authDomain: "nnjnnj-859d3.firebaseapp.com",
      databaseURL: "https://nnjnnj-859d3-default-rtdb.firebaseio.com",
      projectId: "nnjnnj-859d3",
      storageBucket: "nnjnnj-859d3.appspot.com",
      messagingSenderId: "183759882637",
      appId: "1:183759882637:web:be3904f2ca3befc23d15c4",
      measurementId: "G-Y7JV3YWK43"
    };
   
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names)
       row = "<div class='room_name' id="+Room_names+"onclick 'redirect to room name(this.id)' >//#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML +=row;

        

     
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room"
  });
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

