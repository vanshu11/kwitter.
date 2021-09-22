
var firebaseConfig = {
      apiKey: "AIzaSyBpqna7l0GZs7dgjZ2pvVBvM7is4te4Fas",
      authDomain: "kwitter-8a963.firebaseapp.com",
      databaseURL: "https://kwitter-8a963-default-rtdb.firebaseio.com",
      projectId: "kwitter-8a963",
      storageBucket: "kwitter-8a963.appspot.com",
      messagingSenderId: "210137074900",
      appId: "1:210137074900:web:28496e8695f46425e0bf41"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
    

    



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML+=row;



      //End code
      });});}

      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name" ,name);
            window.location="kwitter_page_html";
             
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="kwitter.html";
      }



getData();



