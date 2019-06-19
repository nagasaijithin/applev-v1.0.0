window.addEventListener("scroll", (e) => {
    let bodyTop = document.body.scrollTop,
    htmlTop =document.documentElement.scrollTop,
    nav = document.querySelector(".fixed-nav nav"),
    mobiles = document.querySelector(".mobiles-hero"),
    srMobile = document.querySelector(".sr-m-container"),
    blackMode = document.querySelector(".tran-c"),
    xrMobile = document.querySelector(".xr-img"),
    xrcontant = document.querySelector(".xr-grid"),
    animobile = document.querySelector(".ani-img"),
    sideStyleImg = document.querySelector(".side-two-img"),
    sidePartsImg = document.querySelectorAll(".side-parts"),
    subcontentphone = document.querySelectorAll(".sub-p-c");
    //document.body.scrollTop  its a body scrolling property
    //document.documentElement.scrollTop its propety of the documentElement(html tag)

    if(bodyTop < 100 || htmlTop < 100){
        nav.style.position = "absolute";
        nav.style.borderBottom = "none";
        nav.style.backgroundColor = "transparent"
    }
    
    if (bodyTop > 400 || htmlTop > 400) {
        nav.style.position = "fixed";
        nav.style.borderBottom = "0.4px solid white";
        nav.style.backgroundColor = "#191A1A";
    }

    if(bodyTop > 450 || htmlTop > 450){
        mobiles.style.opacity = "1";
        mobiles.style.top = "40%";
    }
    if(bodyTop > 1100 || htmlTop > 1100){
        srMobile.style.opacity = "1";
        srMobile.style.top = "58%";
    }
    if(bodyTop > 1586 || htmlTop > 1586){
        blackMode.style.top = "0%";
        xrMobile.style.top = " 50%";
        xrMobile.style.opacity = "1";

    }else{
        blackMode.style.top ="20%";
        xrMobile.style.top = " 60%";
        xrMobile.style.opacity = "0";
    }
    if(bodyTop > 2314 || htmlTop > 2314){
    xrcontant.style.top = "25%";
    xrcontant.style.opacity = "1";
    }else{
        xrcontant.style.top = "60%";
    xrcontant.style.opacity = "0";
    }
    if(bodyTop  > 2800 || htmlTop > 2800){
        animobile.style.top = "55%";
        animobile.style.opacity = "1";
    }else{
        animobile.style.opacity = "0";
        animobile.style.position = "absolute";
        animobile.style.top = "70%";
    }
    if(bodyTop > 3330 || htmlTop > 3330){
        animobile.style.position = "fixed";
        animobile.style.top = "55%";
    }else{
        animobile.style.position = "absolute";
        animobile.style.top = "55%";
    }
    if(bodyTop > 3488 || htmlTop > 3488){
         animobile.style.transform = "translate(-50%, -50%) scale(2)";
    }else{
         animobile.style.transform = "translate(-50%, -50%) scale(1)";
    }

    if(bodyTop > 3648 || htmlTop > 3648){
        animobile.style.transform = "translate(-50%, -50%) scale(4)";
        animobile.style.height = "10%";
        animobile.style.transition = "all .4s ease-in";
    } else if(bodyTop < 3648 || htmlTop < 3648 && bodyTop > 3488 || htmlTop > 3488){
        animobile.style.height = "585px";
        animobile.style.transform = "translate(-50%, -50%) scale(1)";
        animobile.style.transition = "all 0.5s ease-in";
    }

    if(bodyTop > 3716 || htmlTop > 3716){
        animobile.style.transform = "translate(-50%, -50%) scale(5)";
        animobile.style.height = "1%";
    }
    if(bodyTop > 3900 || htmlTop > 3900){
        animobile.style.transform = "translate(-50%, -60%) scale(6)";
        animobile.style.height = "0.2%";
        animobile.style.transition = "all .2s ease-in";

    } else if(bodyTop < 3864 || htmlTop < 3864){
        animobile.style.backgroundImage = "url(img/16.jpg)";
        animobile.style.backgroundPosition = "center";
    }

    if(bodyTop > 3989 || htmlTop > 3989){
        animobile.style.height = "0.1%";
        animobile.style.backgroundImage = "url(img/15.jpg)";
        animobile.style.backgroundPosition = "50% 70%";
    }
    if(bodyTop > 4104 || htmlTop > 4104){
        animobile.style.backgroundPosition ="80% 80%";
    }
    if(bodyTop > 4120 || htmlTop > 4120){
        animobile.style.backgroundPosition ="80% 90%";
    }
    if(bodyTop > 4130 || htmlTop > 4130){
        animobile.style.backgroundPosition ="80% 92%";
    }
    if(bodyTop > 4217 || htmlTop > 4217){
        animobile.style.backgroundPosition ="80% 85%";
    }
    if(bodyTop > 4332 || htmlTop > 4332){
        animobile.style.backgroundPosition ="80% 75%";
    }
    if(bodyTop > 4514 || htmlTop > 4514){
        animobile.style.backgroundPosition ="80% 60%";
    }
    if(bodyTop > 4970 || htmlTop > 4970){
        animobile.style.backgroundPosition ="80% 70%";
    }
    if(bodyTop > 5198 || htmlTop > 5198){
        animobile.style.backgroundPosition ="80% 80%";
    }
    if(bodyTop > 5350 || htmlTop > 5350){
        animobile.style.opacity = "0";
        sidePartsImg.forEach( (parts) => {
            if(bodyTop < 5634 || htmlTop < 5634){
                parts.style.opacity = "0";
                parts.style.transitionDelay = "0.2s";
            }   
       });
    }
    if(bodyTop > 5634 || htmlTop > 5634){
        sideStyleImg.style.left = "70%";
        sideStyleImg.style.opacity = "0.5";

        sidePartsImg.forEach( (parts) => {
            if(bodyTop > 5634 || htmlTop > 5634){
                parts.style.opacity = "1";
                parts.style.transitionDelay = "0.2s";
            }
       });

    }else{
        sideStyleImg.style.left = "75%";
        sideStyleImg.style.opacity = "0";
    }
    if(bodyTop > 5947 || htmlTop > 5947){
        sideStyleImg.style.left = "69%";
        sideStyleImg.style.opacity = "0.7";
    }
   
    if(bodyTop >  6064 || htmlTop >  6064){
        sideStyleImg.style.left = "62%";
        sideStyleImg.style.opacity = "1";
    }
   if(bodyTop > 7000 || htmlTop > 7000){
       subcontentphone.forEach((subC) => {
            subC.style.opacity = "1";
            subC.style.marginBottom = "0";
       });
   }else{
    subcontentphone.forEach((subC) => {
        subC.style.opacity = "0";
        subC.style.marginBottom = "40px";
   });
   }
  
console.log(htmlTop)
});