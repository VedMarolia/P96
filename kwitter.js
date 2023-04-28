var firebaseConfig = {
   apiKey: "AIzaSyBAqRdZsBSe0YHRGyWK7gH25czpjfSJLls",
   authDomain: "kwitter-b5a9d.firebaseapp.com",
   databaseURL: "https://kwitter-b5a9d-default-rtdb.firebaseio.com",
   projectId: "kwitter-b5a9d",
   storageBucket: "kwitter-b5a9d.appspot.com",
   messagingSenderId: "385909744313",
   appId: "1:385909744313:web:b36d1d742f031cb5e17168"
 };
 
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
   user_name= document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
   })
   localStorage.setItem("user_name",user_name);
   window.location="kwitter_room.html"
}

