
//ScrollAnimation------------------------------------------------------------------------------------
var images = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
var currentImg = 0;
var currentImgR = 0;
var nextImg = 1;
var nextImgR = 3;
var way = "for";
var access = 1;
var cartOpen = 0;

function scrollAnimation(){
    console.log("current: ", currentImg ,"\nnext: ", nextImg);
    if (access == 1){
        access = 0;

        var imgOne = document.getElementById("mainImage");
        var imgTwo = document.getElementById("animateImage");
    
        if (way == "rev"){
            //glitch
            if (currentImg == 3){
                imgTwo.src = images[0];
            } else {
                imgTwo.src = images[currentImg + 1];
            }
            console.log("yay");
        }

        //imgOne.src = images[0];
    
        imgTwo.style.visibility = "visible";
        imgTwo.style.animation = "pictureScrollin 1s";
        imgOne.style.animation = "pictureScrollout 1s";

        setTimeout(function(){
            imgTwo.style.visibility = "hidden";
            if(currentImg == 3){
                currentImg = 0;
                nextImg = currentImg + 1;
            } else if (currentImg == 2){
                currentImg++;
                nextImg = 0;
            } else {
                currentImg++;
                nextImg = currentImg + 1;
            }
        
            imgOne.src = images[currentImg];
            imgTwo.src = images[nextImg];
            imgOne.style.animation = "none 0s"
            imgTwo.style.animation = "none 0s"
            access = 1;
        }, 1000);
    }
    console.log("current: ", currentImg ,"\nnext: ", nextImg);
    way = "for";
}

function scrollAnimationReverse(){
    if (access == 1){
        access = 0;

        var imgOne = document.getElementById("mainImage");
        var imgTwo = document.getElementById("animateImage");

        if (way == "for"){
            //glitch
            if (currentImg == 0){
                imgTwo.src = images[3];
            } else {
                imgTwo.src = images[currentImg - 1];
            }
            console.log("yay");
        }

        //imgOne.src = images[0];
    
        imgTwo.style.visibility = "visible";
        imgTwo.style.animation = "pictureScrollinII 1s";
        imgOne.style.animation = "pictureScrolloutII 1s";
        
        setTimeout(function(){
            imgTwo.style.visibility = "hidden";
            if(currentImg == 0){
                currentImg = 3;
                nextImg = currentImg - 1;
            } else if (currentImg == 1){
                currentImg--;
                nextImg = 3;
            } else {
                currentImg--;
                nextImg = currentImg - 1;
            }
        
            imgOne.src = images[currentImg];
            imgTwo.src = images[nextImg];
            imgOne.style.animation = "none 0s"
            imgTwo.style.animation = "none 0s"
            access = 1;
        }, 1000);
    }
    console.log("current: ", currentImg ,"\nnext: ", nextImg);
    way = "rev";
}

function get(input){
    return document.getElementById(input);
}

//Cart-----------------------------------------------------------------------------------------------
var quantity = 0;

window.onload = function() {

    var quantityLabel = document.getElementById("quantity");
    
    //choosing quantity
    document.getElementById("minus").addEventListener("click", function(){
        if(quantity > 0){
            quantity--;
            quantityLabel.innerHTML = quantity;
        }
    })
    document.getElementById("plus").addEventListener("click", function(){
        if(quantity < 8){
            quantity++;
            quantityLabel.innerHTML = quantity;
        }
    })
    
    //closing menu
    document.getElementById("closeMenu").addEventListener("click", function(){
        var menu = document.getElementById("menu");
        var background = document.getElementById("background");
        background.style.animation = "fadeR 0.5s"
        menu.style.animation = "menuR 0.5s";
        setTimeout(function(){
            menu.style.display = "none";
            background.style.display = "none";
        }, 480);
    });
    
    //opening menu
    document.getElementById("menuButt").addEventListener("click", function(){
        var menu = document.getElementById("menu");
        var background = document.getElementById("background");

        menu.style.animation = "menu 0.5s";
        menu.style.display = "block"
        background.style.display = "block"
        background.style.animation = "fade 0.5s"
    });

    document.getElementById("cartImg").addEventListener("click", function(){
        var element = document.getElementById("cartImg");
        var cart = document.getElementById("cart");

        if (cartOpen == 0){
            cart.style.display = "block"
            cartOpen = 1;
        } else if (cartOpen == 1){
           cart.style.display = "none";
           cartOpen = 0;
        }
    });

    document.getElementById("addToCart").addEventListener("click", function(){
        
        var cartList = get("cartList");
        var cartEmptyList = get("cartEmptyText");
        var price = get("priceFinal");
        
        if (quantity > 0){
            document.getElementById("cartPop").style.display = "block";
            document.getElementById("cartPop").innerHTML = quantity;

            cartList.style.display = "block";
            cartEmptyList.style.display = "none";

            price.innerHTML = "<br>$125.00 x " + quantity + "  <b style='color: black'>$" + (125 * quantity) + ".00</b>"
        } else {
            document.getElementById("cartPop").style.display = "none";
            document.getElementById("cartPop").innerHTML = 0;

            cartList.style.display = "none";
            cartEmptyList.style.display = "block";
        }
    });



    //checkout ?  ?
    get("checkout").addEventListener("click", function(){
        get("cart").style.display = "none";
        var tardis = get("tardis");
        tardis.style.display = "block";
        tardis.style.animation = "tardis 3s";

        setTimeout(function(){
            tardis.style.animation = "tardisR 2s";
        }, 6000);
        setTimeout(function(){
            tardis.style.display = "none";
        }, 7900);
        setTimeout(function(){
            document.write("checkout :D");
        }, 10000);
    })
}
