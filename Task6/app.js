function shopByCategory(){
    let category = document.querySelector(".shopByCategory");
    category.style.display="block";
    category.style.backgroundColor="rgb(241, 240, 240)";
    // category.style.width="15vw";
    category.style.padding="12px";
    category.style.marginLeft="90px";
}

function navigation(){
    let nav = document.querySelector(".navbar2");
    nav.style.display="flex";
    nav.style.flexDirection="column";
    nav.style.justifyContent="flex-start";
    nav.style.alignItems="start";
    nav.style.marginTop="70px";
    nav.style.fontSize="23px";
    nav.style.backdropFilter="blur(20px)";
}


let arr=[
    "./image1/whatsapp.jpg",
    "./image1/banner1.webp",
    "./image1/banner2.webp",
    "./image1/banner3.webp",
    "./image1/banner4.webp",
    "./image1/banner5.webp",

];

let img = document.querySelector('.crawsel');
let num =0;
setInterval(()=>{
    img.setAttribute('src',arr[num]);
    num = (num+1)%arr.length;
},5000);


function shopCategory(){
  let category = document.querySelector(".shopCategory");
  category.style.display="block";
  category.style.position="absolute";
  category.style.backgroundColor="rgb(241, 240, 240)";
  // category.style.width="15vw";
  category.style.padding="12px";
  category.style.marginLeft="50px";
}









function animateCounter(id, start, end, duration, suffix = "") {
    const element = document.getElementById(id);
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    let current = start;

    const timer = setInterval(() => {
      current++;
      element.textContent = `${current}${suffix}`;
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Trigger counting animation when the section is in view
  function initCounters() {
    animateCounter("medication", 0, 90, 2000, "%");
    animateCounter("customers", 0, 1000, 2500, "K+");
    animateCounter("products", 0, 800, 3000, "K+");
  }

  // Detect when the section is in view
  function onScroll() {
    const section = document.getElementById("counters-section");
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop <= windowHeight && sectionTop >= 0) {
      initCounters();
      window.removeEventListener("scroll", onScroll); // Run animation once
    }
  }

  window.addEventListener("scroll", onScroll);





  let nums=[
    "./image1/cus1.png",
    "./image1/cus2.png",
    "./image1/cus3.png",
    "./image1/cus4.png"
  ]
  let cust = document.querySelector('.slider');
  let cnt=0;
  setInterval(()=>{
    cust.setAttribute("src",nums[cnt]);
    cnt=(cnt+1)%nums.length;
  },4000);