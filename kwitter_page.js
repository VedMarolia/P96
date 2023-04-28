var firebaseConfig = {
    apiKey: "AIzaSyBAqRdZsBSe0YHRGyWK7gH25czpjfSJLls",
    authDomain: "kwitter-b5a9d.firebaseapp.com",
    databaseURL: "https://kwitter-b5a9d-default-rtdb.firebaseio.com",
    projectId: "kwitter-b5a9d",
    storageBucket: "kwitter-b5a9d.appspot.com",
    messagingSenderId: "385909744313",
    appId: "1:385909744313:web:b36d1d742f031cb5e17168"
  };

  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];

name_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
message_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"
span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>"

row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();

function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
}

function backToRoomPage(){
  window.location="kwitter_room.html"
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location="index.html";
}