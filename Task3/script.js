// Custom Cursor

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function (dets) {
  // Using requestAnimationFrame for smoother performance
  window.requestAnimationFrame(function () {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
  });
});

// GSAP Animations

// Navbar Animation: Smooth color change and height reduction on scroll
gsap.to("#nav", {
  backgroundColor: "black",
  height: "110px",  // Navbar height shrinks slightly
  duration: 0.5,    // Duration for a smoother transition
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// Main Section Background Color Change on Scroll
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// About Us Section Scroll Animation
gsap.to("#about-us", {
  transform: "translateY(-50px)",  // Moves the section up by 50px
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});

// Remove "Click" Text Below Alexa (h2 and p elements) After Clicking the Button
document.querySelector("#start").addEventListener("click", function () {
  document.querySelector("#page1 h2").style.display = "none";  // Hides the text below Alexa
  document.querySelector("#page1 p").style.display = "none";   // Hides the paragraph text
});

// Alexa Header Animation (New GSAP Animation for Alexa text)
gsap.to("#alexa", {
  x: -50, // Move Alexa text slightly to the left for dynamic effect
  duration: 2,
  ease: "power2.out",  // Smooth easing
  scrollTrigger: {
    trigger: "#nav",
    start: "top 80%",
    end: "top 30%",
    scrub: true,  // Smoothly moves during scrolling
  },
});
 
let isListening = false;
let promptBox;

let isrecording = false;
document.querySelector("#start").addEventListener("click", function () {
  if (!isListening) {
    // 1. Make Alexa text smaller and move it to top right corner of navbar using GSAP animation
    gsap.to("#page1 h1", {
      fontSize: "30px",
      x: "calc(100% - 50px)",
      y: "10px",
      duration: 0.5,
      ease: "power2.out"
    });
    
    // Move Alexa text to top right corner of navbar
    document.querySelector("#page1 h1").style.position = "absolute";
    document.querySelector("#page1 h1").style.top = "0";
    document.querySelector("#page1 h1").style.right = "0";
    document.querySelector("#page1 h1").style.margin = "10px";
    
    // 2. Remove text written below Alexa
    document.querySelector("#page1 h2").style.display = "none";
    document.querySelector("#page1 p").style.display = "none";
    
    // 3. Make a large prompt box in the center above the start listening button using GSAP animation
    promptBox = document.createElement("div");
    promptBox.innerHTML = ` <div class="chat-container">
    <div class="ai-chat-box">
    <img src="ai.png" alt="" id="aiImage" width="10%">
    <div class="ai-chat-area">
    Hello ! How Can I Help you Today?
    </div>
    
          </div>
          </div>
          <div class="prompt-area">
      <input type="text" id="prompt" placeholder="Message...">
      <button id="image"><img src="img.svg" alt="">
      <input type="file" accept="images/*" hidden></button>
      <button id="submit"><img src="submit.svg" alt=""></button>
      
      </div>
      <script src="scriptpromptbox.js"></script>
      `;
      

      
      promptBox.style.position = "absolute";

      promptBox.style.top = "40%";
      promptBox.style.left = "50%";
      promptBox.style.zIndex=999;
      promptBox.style.transform = "translate(-50%, -50%)";

    promptBox.style.borderRadius = "40px";
    promptBox.style.overflow='hidden';
    promptBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
   
    promptBox.style.marginTop = "80px";
    promptBox.style.width = "1000px";
    promptBox.style.height = "550px";
    document.body.appendChild(promptBox);
    
    gsap.from(promptBox, {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      ease: "power2.out"
    });
    
    // Move the button below the prompt box
    document.querySelector(".alexa-btn").style.top = "60%";
    document.querySelector(".alexa-btn").style.left = "50%";
    document.querySelector(".alexa-btn").style.transform = "translate(-50%, -50%)";
    document.querySelector(".alexa-btn").style.position = "absolute";
    document.querySelector(".alexa-btn").style.marginTop = "230px";
    
    // Change button text and color
    document.querySelector("#start").innerHTML = "Stop Conversation";
    document.querySelector("#start").style.background = "red";
    document.querySelector("#start").style.color = "white";
    
    isListening = true;
  } else {
    // Reset the Alexa text to its original state
    gsap.to("#page1 h1", {
      fontSize: "140px",
      x: "0",
      y: "0",
      duration: 0.5,
      ease: "power2.out"
    });
    
    document.querySelector("#page1 h1").style.position = "relative";
    document.querySelector("#page1 h1").style.margin = "0";
    
    // Show the text written below Alexa again
    document.querySelector("#page1 h2").style.display = "block";
    document.querySelector("#page1 p").style.display = "block";
    
    // Remove the prompt box
    if (promptBox) {
      gsap.to(promptBox, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power2.out",
        onComplete: function () {
          promptBox.remove();
        }
      });
    }
    
    // Reset button text and color
    document.querySelector("#start").innerHTML = "Start Listening";
    document.querySelector("#start").style.background = "linear-gradient(90deg, blue, skyblue)";
    document.querySelector("#start").style.color = "white";
    
    isListening = false;
  }
});

document.querySelector("#start").addEventListener('click',()=>{
  console.log("fdsf")




let prompt=document.querySelector("#prompt")
let submitbtn=document.querySelector("#submit")
let chatContainer=document.querySelector(".chat-container")
let imagebtn=document.querySelector("#image")
let image=document.querySelector("#image img")
let imageinput=document.querySelector("#image input")

const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBpDvqGgy9RSDOPBk3OFo3mGZ4vAYo29u8"

let user={
    message:null,
    // file:{
    //     mime_type:null,
    //     data: null
    // }
}

async function generateResponse(aiChatBox) {
    
let text=aiChatBox.querySelector(".ai-chat-area")

    let RequestOption={
        method:"POST",
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
            "contents":[
                {"parts":[{text:user.message},(user.file?.data?[{inline_data:user.file}]:[])]}
              ]
        })
      }
try{
    let response= await fetch(Api_Url,RequestOption)
    let data=await response.json()
    let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
    handleSpeak(apiResponse)

    text.innerHTML=apiResponse    
}
catch(error){
    console.log(error);
    
}
    finally{
        chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})
        image.src=`img.svg`
        image.classList.remove("choose")
        user.file={}
    }
}


function createChatBox(html,classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div
}

console.log("dfhsfs")

function handlechatResponse(userMessage){
  console.log("handle chat respnse")
    user.message=userMessage
    let html=`<img src="user.png" alt="" id="userImage" width="8%">
    <div class="user-chat-area">
    ${user.message}
    ${user.file?.data?`<img src="data:${user.file.mime_type};base64,${user.file?.data}" class="chooseimg" />` : ""}
    
    </div>`
    prompt.value=""
    let userChatBox=createChatBox(html,"user-chat-box")
    chatContainer.appendChild(userChatBox)
    
    chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})
    
    setTimeout(()=>{
let html=`<img src="ai.png" alt="" id="aiImage" width="10%">
    <div class="ai-chat-area">
    <img src="loading.webp" alt="" class="load" width="50px">
    </div>`
    let aiChatBox=createChatBox(html,"ai-chat-box")
    chatContainer.appendChild(aiChatBox)
    generateResponse(aiChatBox)

},600)

}


prompt.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
       handlechatResponse(prompt.value)

    }
})


submitbtn.addEventListener("click",()=>{
    console.log('clicke button')
    handlechatResponse(prompt.value)
})
console.log(submitbtn)
imageinput.addEventListener("change",()=>{
    const file=imageinput.files[0]
    if(!file) return
    let reader=new FileReader()
    reader.onload=(e)=>{
       let base64string=e.target.result.split(",")[1]
       user.file={
        mime_type:file.type,
        data: base64string
    }
    image.src=`data:${user.file.mime_type};base64,${user.file.data}`
    image.classList.add("choose")
    }
    
    reader.readAsDataURL(file)
})


imagebtn.addEventListener("click",()=>{
    imagebtn.querySelector("input").click()
})
let utterance;
function handleSpeak(text){
   utterance = new SpeechSynthesisUtterance(text);

  
  utterance.rate = 1.8; // Speed (default: 1)
  utterance.pitch = 1; // Pitch (default: 1)
  utterance.volume = 1; // Volume (default: 1)

 
  window.speechSynthesis.speak(utterance);
  utterance.onend = function() {
    handleListen();
  };
}
function stopSpeaking() {

  console.log("speaking stopped")
  window.speechSynthesis.cancel();
}

function handleListen(){
  let recognition;
  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition(); // For Chrome
  } else if ('SpeechRecognition' in window) {
    recognition = new SpeechRecognition();
  } else {
    alert('Speech recognition not supported in this browser.');
  }
  
  recognition.lang = 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();
  
  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    console.log(speechResult)
    if(speechResult!='Stop.'){
    handlechatResponse(speechResult) 
    }
    else{
      recognition.stop();
      stopSpeaking();
    }
   
  };
  recognition.onspeechend = () => {
    recognition.stop(); 
  
    console.log("ended")
   
  };
  
  recognition.onerror = (event) => {
    console.error('Speech recognition error: ' + event.error);
   
  };
  return ()=>{
    console.log("listening stopped")
    recognition.stop()
  }
}

if(!isrecording){
 handleSpeak("Hello how can i help you today")
  isrecording=true;
}
else{
  handleListen()();
  stopSpeaking();
  isrecording=false;
}
})
