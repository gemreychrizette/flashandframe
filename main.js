function toggle(){
    var blur = document.getElementById('blur');
        blur.classList.toggle('active')
    
    var popup = document.getElementById('popup');
        popup.classList.toggle('active')
}

function toggle1(){
    var blur = document.getElementById('blur');
        blur.classList.toggle('active1')
    
    var popup = document.getElementById('popup1');
        popup.classList.toggle('active1')
}



searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');

}


let searchBox = document.querySelector('.search-form');



window.onscroll = () => {

    
    if (window.scrollY > 100) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    }

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
        fadeOut();
    }


function loader(){
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
    setTimeout(loader, 2000);
}



let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}











var swiper = new Swiper (".books-slider", {
    loop:true,
    centeredSlides: true,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            },  
        768: {
            slidesPerView: 2,
            },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper (".reviews-slider", {
    spaceBetween:10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
        autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            },  
        768: {
            slidesPerView: 2,
            },
        1024: {
            slidesPerView: 3,
        },
    },
});



var swiper = new Swiper (".blogs-slider", {
    spaceBetween:10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
        autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            },  
        768: {
            slidesPerView: 2,
            },
        1024: {
            slidesPerView: 3,
        },
    },
});






let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'CUSTOM BRANDING ADD-ONS',
        image: 'of1.png',
        price: 3000
    },
    {
        id: 2,
        name: 'GUESTBOOK STATIONS',
        image: 'of2.png',
        price: 2000
    },
    {
        id: 3,
        name: 'GREEN SCREEN OPTIONS',
        image: 'of3.png',
        price: 3500
    },
    {
        id: 4,
        name: 'UNLIMITED DIGITAL PACKAGE',
        image: 'of4.png',
        price: 2500
    },
    {
        id: 5,
        name: 'SOFTWARE COPIES VIA GMAIL',
        image: 'of5.png',
        price: 1500
    },
    {
        id: 6,
        name: 'EVENT HIGHLIGHTS REELS',
        image: 'of6.png',
        price: 4000
    },
   
];
let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button id="addButton-${key}" onclick="addToCard(${key})">Add Service</button>`;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key) {
    // Apply button effect
    const button = document.getElementById(`addButton-${key}`);
    button.classList.add('button-effect');

    // Remove the effect after a delay (e.g., 1 second)
    setTimeout(() => {
        button.classList.remove('button-effect');
    }, 1000);

    // Add product to cart logic
    if (listCards[key] == null) {
        // Copy product from list to listCards
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}




