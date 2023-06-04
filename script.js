let obj = 
[
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 10,
      "imgSrc": "https://th.bing.com/th/id/OIP.tZOCvBp5VX3sx8_bbCkUSAHaE_?pid=ImgDet&rs=1"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 15,
      "imgSrc": "https://th.bing.com/th?q=Best+Homemade+Pizza&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price":5,
      "imgSrc": "https://th.bing.com/th/id/OIP.CDBL-1FOwm8G9kBHcKjZ1QHaE8?pid=ImgDet&rs=1"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 4,
      "imgSrc": "https://th.bing.com/th/id/OIP.f5fz8tJCa5gJQ4oy-5UhvgHaE6?pid=ImgDet&rs=1"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 5,
      "imgSrc": "https://th.bing.com/th/id/OIP.K8PBJxgBQ8HpNL935FUAmAHaLH?pid=ImgDet&rs=1"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 20,
      "imgSrc": "https://th.bing.com/th/id/R.bd27318773dde2dc90ecff338ba935e5?rik=b8M3ZjaIMIMTlA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-ATcjEs8EZmM%2fT3xxFVoeCTI%2fAAAAAAAAAgk%2fVWACW3GyaPg%2fs1600%2fparkfriedchicken3.jpg&ehk=DzpvW8Um6BEwa7rmNqWG3D9o5RCzVNhJ%2bieg8ydaAkA%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 18,
      "imgSrc": "https://th.bing.com/th/id/OIP.HGmRspQVlKdtSUR1JqZL9QHaFX?pid=ImgDet&rs=1"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 12,
      "imgSrc": "https://th.bing.com/th/id/OIP.Mb8rPaQMo7yYZ2n8S0ICKQHaE8?pid=ImgDet&rs=1"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 25,
      "imgSrc": "https://th.bing.com/th/id/OIP.PTd2tBUrapj2yi_gzm38GQHaLH?pid=ImgDet&rs=1"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 10,
      "imgSrc": "https://th.bing.com/th/id/OIP.qduUg0raGqzVBvyNDmrL0AHaFF?pid=ImgDet&rs=1"
    },
   
  ]


const header = document.querySelector("header");

window.addEventListener("scroll" , function(){
header.classList.toggle("sticky" , window.scrollY > 0);
});


function getMenu(obj){

const container = document.getElementsByClassName("container-box")[0];

for(let i = 0; i < obj.length; i++){
  let item = obj[i];

  let elements = `
  <div class="c-mainbx">
  <div class="container-img">
      <img src="${item.imgSrc}" alt="api image">
  </div>
  <div class="container-text">
      <p>${item.name}</p>
       <b>${item.price}$</b>
  </div>
  `
  container.innerHTML += elements;
}

}

window.addEventListener("load",getMenu(obj) );

//  take order function

function takeOrder(obj) {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    
    const selectedBurgers = [];
    for (let i = 0; i < obj.length; i++) {
      let item = obj[i];
       
      if(item.name.includes("urger")){ // selecting the burgers from the list
      selectedBurgers.push(obj[i]);
      console.log(obj[i]);
    }
  }
 
    resolve(selectedBurgers);
  }, 2500);
});
}




function randomBurgers() {
let randomBurgers = [];

takeOrder(obj)
.then(selectedBurgers => {
  console.log("Order received:");
  
  if (selectedBurgers.length > 3) {
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * selectedBurgers.length);
      randomBurgers.push(selectedBurgers[randomIndex]);
    }
  } else {
    randomBurgers = selectedBurgers;
  }

  renderBurgers(randomBurgers);
})
.catch(error => {
  console.error("Error occurred while taking the order:", error);
});
}

function renderBurgers(randomBurgers) {
const container = document.getElementsByClassName("container-box")[0];
container.innerHTML = "";

for (let i = 0; i < randomBurgers.length; i++) {
let item = randomBurgers[i];

let elements = `
  <div class="c-mainbx">
    <div class="container-img">
      <img src="${item.imgSrc}" alt="api image">
    </div>
    <div class="container-text">
      <p>${item.name}</p>
      <b>${item.price}$</b>
    </div>
  </div>
`;

container.innerHTML += elements;
}
}

// orderPrep
function orderPrep() {
return new Promise((resolve, reject) => {
setTimeout(() => {
  resolve({ order_status: true, paid: false });
}, 1500);
});
}

function placeOrder(){
orderPrep()
.then(orderStatus => {
console.log("Order status:", orderStatus);
// Handle the order status as needed
})
.catch(error => {
console.error("Error occurred during order preparation:", error);
});

let popup = document.getElementsByClassName("model-container")[0];
popup.style.transform = 'scale(1)';

let status = document.getElementById("status");
const message = `Your order is placed. To pay please click the pay button`;

status.innerText = message;

document.getElementById("pay-button").innerText = "Pay Now"
}


// payment

function payOrder() {
return new Promise((resolve, reject) => {
setTimeout(() => {
  resolve({ order_status: true, paid: true });
}, 1000);
});
}

function payment(){
payOrder()
.then(orderStatus => {
console.log("Payment status:", orderStatus);

let status = document.getElementById("status");
const message = `Payment Successfull`;
status.innerText = message;

document.getElementById("pay-button").style.display = "none";
document.getElementById("cancel").innerText = "close";
})
.catch(error => {
console.error("Error occurred during payment:", error);
});

}



const payButton = document.getElementById("pay-button");

payButton.addEventListener("click", function() {

payOrder()
.then(orderStatus => {
  if (orderStatus.paid) {
    orderStatus.paid = true;
    console.log("Payment completed. Order status:", orderStatus);
    alert("Thank you for eating with us today!");
  } else {
    console.log("Payment not completed.");
  }
})
.catch(error => {
  console.error("Error occurred during payment:", error);
});
});

//  thank you function
function thankyouFnc() {
payOrder()
.then(orderStatus => {
  if (orderStatus.paid) {
    alert("Thank you for eating with us today!");
  } else {
    console.log("Payment not completed.");
  }
})
.catch(error => {
  console.error("Error occurred during payment:", error);
});
}

function closePopup(){

document.getElementsByClassName("model-container")[0].style.transform = "scale(0)"
}