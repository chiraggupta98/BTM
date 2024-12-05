const firebaseConfig = {
  apiKey: "AIzaSyBHxxO5_dsyyRBpMgeuh3SV-lmX2VHbk2M",
  authDomain: "login-with-firebase-1dadf.firebaseapp.com",
  projectId: "login-with-firebase-1dadf",
  storageBucket: "login-with-firebase-1dadf.appspot.com",
  messagingSenderId: "940858659073",
  appId: "1:940858659073:web:6cd8e56d0ef01626960b00",
  measurementId: "G-PWE4VRKSF1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const auth=firebase.auth();
const database=firebase.database();


function register(){
    name=document.getElementById("name").value
    email=document.getElementById('email').value
    password=document.getElementById('password').value
}

if(validate_email(email) ==false || validata_password(password) ==false){
    alert("Invalid email or password")
    return
}

if(validate_field(name)==false){
    alert("Invalid Name")
    return
}

auth.createUserEmailAndPassword(email,password)
.then(function(){
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
        email:email,
        name:name,
        last_login:Data.now()
    }
    database_ref.child('users/' + user.uid).set(user_data)
})
.catch(function(error){
    var error_code=error.error_code
    var error_message = error.message
    
    alert(error_message)
})

function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(expression.test(email)==true){
        return true;
    }
    else{
        return false;
    }
}

function validata_password(password){
    if(password<6){
        return false;
    }
    else{
        return true;
    }
}

function validate_field(field){
    if(field==null){
        return false;
    }
    else{
        return true;
    }
}