console.log("fdsf")

let prompt=document.querySelector("#prompt")
let submitbtn=document.querySelector("#submit")
let chatContainer=document.querySelector(".chat-container")
let imagebtn=document.querySelector("#image")
let image=document.querySelector("#image img")
let imageinput=document.querySelector("#image input")

const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=Your-Api-Key"

let user={
    message:null,
    file:{
        mime_type:null,
        data: null
    }
}

async function generateResponse(aiChatBox) {
    
let text=aiChatBox.querySelector(".ai-chat-area")

    let RequestOption={
        method:"POST",
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
            "contents":[
                {"parts":[{text:user.message},(user.file.data?[{inline_data:user.file}]:[])

            ]
        }]
    })
}
try{
    let response= await fetch(Api_Url,RequestOption)
    let data=await response.json()
    let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
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
    user.message=userMessage
    let html=`<img src="user.png" alt="" id="userImage" width="8%">
    <div class="user-chat-area">
    ${user.message}
    ${user.file.data?`<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
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












































// let isListening = false;

// document.querySelector("#start").addEventListener("click", function () {
  //   if (!isListening) {
    //     // 1. Make Alexa text smaller and move it to top right corner of navbar using GSAP animation
//     gsap.to("#page1 h1", {
  //       fontSize: "30px",
  //       x: "calc(100% - 50px)",
  //       y: "10px",
  //       duration: 0.5,
//       ease: "power2.out"
//     });

//     // Move Alexa text to top right corner of navbar
//     document.querySelector("#page1 h1").style.position = "absolute";
//     document.querySelector("#page1 h1").style.top = "0";
//     document.querySelector("#page1 h1").style.right = "0";
//     document.querySelector("#page1 h1").style.margin = "10px";

//     // 2. Remove text written below Alexa
//     document.querySelector("#page1 h2").style.display = "none";
//     document.querySelector("#page1 p").style.display = "none";

//     // 3. Make a large prompt box in the center above the start listening button using GSAP animation
//     const promptBox = document.createElement("div");
//     promptBox.innerHTML = "What can I help you with?";
//     promptBox.style.position = "absolute";
//     promptBox.style.top = "40%";
//     promptBox.style.left = "50%";
//     promptBox.style.transform = "translate(-50%, -50%)";
//     promptBox.style.background = "white";
//     promptBox.style.padding = "60px";
//     promptBox.style.borderRadius = "20px";
//     promptBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
//     promptBox.style.fontSize = "48px";
//     promptBox.style.fontWeight = "bold";
//     promptBox.style.textAlign = "center";
//     promptBox.style.marginTop = "70px";
//     promptBox.style.width = "1000px";
//     promptBox.style.height = "450px";
//     document.body.appendChild(promptBox);

//     gsap.from(promptBox, {
  //       opacity: 0,
  //       scale: 0.5,
  //       duration: 0.5,
  //       ease: "power2.out"
  //     });
  
  //     // Move the button below the prompt box
  //     document.querySelector(".alexa-btn").style.top = "60%";
  //     document.querySelector(".alexa-btn").style.left = "50%";
  //     document.querySelector(".alexa-btn").style.transform = "translate(-50%, -50%)";
  //     document.querySelector(".alexa-btn").style.position = "absolute";
//     document.querySelector(".alexa-btn").style.marginTop = "200px";

//     // Change button text and color
//     document.querySelector("#start").innerHTML = "Stop Conversation";
//     document.querySelector("#start").style.background = "red";
//     document.querySelector("#start").style.color = "white";

//     isListening = true;
//   } else {
  //     // Reset prompt box and button
  //     document.querySelector("#start").innerHTML = "Start Listening";
  //     document.querySelector("#start").style.background = "rgb(29, 165, 228)";
  //     document.querySelector("#start").style.color = "white";
  //     promptBox.remove();
  //     isListening = false;
  //   }
  // });
  
  
  
  
  
  
  
  
  
  // let isListening = false;
  
  // document.querySelector("#start").addEventListener("click", function () {
    //   if (!isListening) {
      //     // 1. Make Alexa text smaller and move it to top right corner of navbar using GSAP animation
//     gsap.to("#page1 h1", {
  //       fontSize: "30px",
  //       x: "calc(100% - 50px)",
  //       y: "10px",
  //       duration: 0.5,
  //       ease: "power2.out"
  //     });
  
  //     // Move Alexa text to top right corner of navbar
  //     document.querySelector("#page1 h1").style.position = "absolute";
  //     document.querySelector("#page1 h1").style.top = "0";
  //     document.querySelector("#page1 h1").style.right = "0";
  //     document.querySelector("#page1 h1").style.margin = "10px";
  
  //     // 2. Remove text written below Alexa
  //     document.querySelector("#page1 h2").style.display = "none";
  //     document.querySelector("#page1 p").style.display = "none";
  
  //     // 3. Make a large prompt box in the center above the start listening button using GSAP animation
//     const promptBox = document.createElement("div");
//     promptBox.innerHTML = "What can I help you with?";
//     promptBox.style.position = "absolute";
//     promptBox.style.top = "40%";
//     promptBox.style.left = "50%";
//     promptBox.style.transform = "translate(-50%, -50%)";
//     promptBox.style.background = "white";
//     promptBox.style.padding = "60px";
//     promptBox.style.borderRadius = "20px";
//     promptBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
//     promptBox.style.fontSize = "48px";
//     promptBox.style.fontWeight = "bold";
//     promptBox.style.textAlign = "center";
//     promptBox.style.marginTop = "70px";
//     promptBox.style.width = "1000px";
//     promptBox.style.height = "450px";
//     document.body.appendChild(promptBox);

//     gsap.from(promptBox, {
  //       opacity: 0,
  //       scale: 0.5,
  //       duration: 0.5,
  //       ease: "power2.out"
  //     });
  
  //     // Move the button below the prompt box
  //     document.querySelector(".alexa-btn").style.top = "60%";
  //     document.querySelector(".alexa-btn").style.left = "50%";
  //     document.querySelector(".alexa-btn").style.transform = "translate(-50%, -50%)";
  //     document.querySelector(".alexa-btn").style.position = "absolute";
  //     document.querySelector(".alexa-btn").style.marginTop = "200px";
  
  //     // Change button text and color
  //     document.querySelector("#start").innerHTML = "Stop Conversation";
  //     document.querySelector("#start").style.background = "red";
  //     document.querySelector("#start").style.color = "white";
  
  //     isListening = true;
  //   } else {
//     // Reset the Alexa text to its original state
//     gsap.to("#page1 h1", {
  //       fontSize: "140px",
  //       x: "0",
  //       y: "0",
  //       duration: 0.5,
  //       ease: "power2.out"
  //     });
  
  //     document.querySelector("#page1 h1").style.position = "relative";
  //     document.querySelector("#page1 h1").style.margin = "0";
  
  //     // Show the text written below Alexa again
  //     document.querySelector("#page1 h2").style.display = "block";
  //     document.querySelector("#page1 p").style.display = "block";
  
  //     // Remove the prompt box
  //     const promptBox = document.querySelector("div[style*='What can I help you with?']");
  //     if (promptBox) promptBox.remove();
  
  //     // Reset button text and color
  //     document.querySelector("#start").innerHTML = "Start Listening";
  //     document.querySelector("#start").style.background = "linear-gradient(90deg, blue, skyblue)";
  //     document.querySelector("#start").style.color = "white";
  
  //     isListening = false;
  //   }
  // });
  
  
  