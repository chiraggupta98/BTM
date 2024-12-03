
let arr=[
    "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhZGlvfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1535045366656-4c59fca1dd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D"
]

let img = document.querySelector('.images');
let n=0;
setInterval(() => {
    img.setAttribute('src',arr[n]);
    n=(n+1)%arr.length;
},3000);





let anp=[
    "https://plus.unsplash.com/premium_photo-1681400648913-ed4da66955dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1721332153370-56d7cc352d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
]

let imag = document.querySelector('.imag');
let p=0;
setInterval(() => {
    imag.setAttribute('src',anp[p]);
    p=(p+1)%arr.length;
},3000);




let ans=[
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a6e3e8335d6e7d9b.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/32e65fd179a19dbe.jpg?q=20"
]

let imae = document.querySelector('.imae');
let q=0;
setInterval(() => {
    imae.setAttribute('src',ans[q]);
    q=(q+1)%arr.length;
},3000);


let tag1 = document.querySelector('.allCategories');

tag1.addEventListener('mouseover', function() {
    
    let div = document.createElement('div');
    if (!tag1.querySelector('.hoverDiv')) {
        div.className = 'hoverDiv'; 
        div.style.width = "fit";
        div.style.padding="20px";
        // div.style.height = "50%";
        div.style.marginBlockStart="20px";
        div.style.position = "absolute";
        div.style.backgroundColor = "white";
        div.style.borderRadius="20px"
        div.style.color = "black";
        div.innerHTML = `<ul>
            <li>Categories</li> 
            <li>Home Decor</li>
            <li>Industrial</li>
            <li>Health & Personal Care</li>
            <li>Fashion & Beauty</li>
            <li>Sports & Events</li>
            <li>Tools & Home Improvement</li>
            <li>Raw Materials</li>
            <li>Maintenance, Repair & Operations</li>
        </ul>`;

        tag1.appendChild(div);

        div.addEventListener('mouseleave', function() {
            let div = tag1.querySelector('.hoverDiv');
            if (div) {
                div.remove(); 
            }
        });
    }
});







let tag2 = document.querySelector('.featuredSelection');

tag2.addEventListener('mouseover', function() {
    
    let div = document.createElement('div');
    if (!tag2.querySelector('.hoverDiv')) {
        div.className = 'hoverDiv'; 
        div.style.width = "fit";
        div.style.padding="20px";
        // div.style.height = "50%";
        div.style.marginBlockStart="20px";
        div.style.position = "absolute";
        div.style.backgroundColor = "white";
        div.style.borderRadius="20px"
        div.style.color = "black";
        div.innerHTML = `<ul>
            <li>Top Ranking</li> 
            <li>New Arrivals</li>
            <li>Top Deals</li>
        </ul>`;

        tag2.appendChild(div);

        div.addEventListener('mouseleave', function() {
            let div = tag2.querySelector('.hoverDiv');
            if (div) {
                div.remove(); 
            }
        });
    }
});




let tag3 = document.querySelector('.TradeAssurance');

tag3.addEventListener('mouseover', function() {
    
    let div = document.createElement('div');
    if (!tag3.querySelector('.hoverDiv')) {
        div.className = 'hoverDiv'; 
        div.style.width = "fit";
        div.style.padding="20px";
        // div.style.height = "50%";
        div.style.marginBlockStart="20px";
        div.style.position = "absolute";
        div.style.backgroundColor = "white";
        div.style.borderRadius="20px"
        div.style.color = "black";
        div.innerHTML = `<ul>
            <li>Safe & Easy Payment</li> 
            <li>Money-back Policy</li>
            <li>Shipping & Logistics Services</li>
            <li>After Sales Protections</li>
        </ul>`;

        tag3.appendChild(div);

        div.addEventListener('mouseleave', function() {
            let div = tag3.querySelector('.hoverDiv');
            if (div) {
                div.remove(); 
            }
        });
    }
});


function loadContent() {
    fetch('product.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('boxes01').innerHTML = data;
      });
  }
