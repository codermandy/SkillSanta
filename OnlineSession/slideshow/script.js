let slideInd=1;
function plusSlides(n){
    showSlides(slideInd+=n);
}

function currentSlide(n){
    showSlides(slideInd=n)
}
function showSlides(n){
    let i;
    let slides=document.getElementsByClassName("myslides");
    if(n>slides.length){
        slideInd=1;
    }
    if(n<1){
        slideInd=slides.length;
    }
        for(i-0;i<slides.length;i++){
            slides[i].style.display="none";
        }
    slides[slideInd-1].style.display="block";
    
    

}