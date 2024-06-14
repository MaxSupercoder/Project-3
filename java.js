var images = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
var currentImg = 0;
var currentImgR = 0;
var nextImg = 1;
var nextImgR = 3;
var way = "for";

window.onload = function(){
        //scrollAnimation();
        
}

var access = 1;

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

