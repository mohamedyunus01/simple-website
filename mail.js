const firebaseConfig = {
  apiKey: "AIzaSyDRDPEZi8Zego_dLfHKz6O0fy2Nc68QZnY",
  authDomain: "website-52bc0.firebaseapp.com",
  databaseURL: "https://website-52bc0-default-rtdb.firebaseio.com",
  projectId: "website-52bc0",
  storageBucket: "website-52bc0.appspot.com",
  messagingSenderId: "1003974056200",
  appId: "1:1003974056200:web:9d7b1f394db542ec0cf4bd",
  measurementId: "G-CZNM1V6VXB"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var contactFormDB=firebase.database().ref("contactForm");


document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name=getElementVal('name');
    var emailid=getElementVal('emailId');
    var msgContent=getElementVal('msgContent');
    saveMessages(name,emailid,msgContent);
    
}


const saveMessages=(name,emailid,msgContent) =>{
    var newContactForm=contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid:emailid,
        msgContent:msgContent,
    });
}

const getElementVal=(id)=>{
    return document.getElementById(id).value;
};