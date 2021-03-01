//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% JAVASCRIPT FOR CAROUSEL, SCROLL BOX, and FOOTER TEXT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%





//-----------------------------------------------Footer Text JavaScript ------------------------------------------------



//To be used as the footer of each page. Each repeating section in javascript is coded to match it's section. For example, 
//"F1" stands for "Footer" and "1st" text string. This allows for easier changes and finding where text goes to each section. 
document.getElementById("F1").innerHTML = "Disclaimer & Fair Use Statement"

document.getElementById("F2").innerHTML = "This website may contain copyrighted material,\
      the use of which may not have been specifically authorized by the copyright owner.\
      This material is used to illustrate the use of website development as part of\
      a class project and is strictly for educational purposes only. The material contained\
      in this website is distributed without profit and cites all origination of material \
      accordingly. This constitutes ‘fair use’ of any such copyrighted material referenced \
      and provided for in 17 U.S. Code § 107. If you wish to use any \
      copyrighted material from this site for purposes of your own that go beyond ‘fair use’,\
      you must obtain expressed permission from the copyright owner."






//-----------------------------------------------Carousel JavaScript --------------------------------------------------




var slideshowContainer;
var slideIndex = 1;
var myTimer;



window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}




//---------------------------------------------Scrollbox JavaScript -------------------------------------------------


(function () {

var scrollContainer = document.querySelector('.scrollable'),
    scrollContentWrapper = document.querySelector('.scrollable .content-wrapper'),
    scrollContent = document.querySelector('.scrollable .content'),
    contentPosition = 0,
    scrollerBeingDragged = false,
    scroller,
    topPosition,
    scrollerHeight;

function calculateScrollerHeight() {
    // *Calculation of how tall scroller should be
    var visibleRatio = scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight;
    return visibleRatio * scrollContainer.offsetHeight;
}

function moveScroller(evt) {
    // Move Scroll bar to top offset
    var scrollPercentage = evt.target.scrollTop / scrollContentWrapper.scrollHeight;
    topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5); // 5px arbitrary offset so scroll bar doesn't move too far beyond content wrapper bounding box
    scroller.style.top = topPosition + 'px';
}

function startDrag(evt) {
    normalizedPosition = evt.pageY;
    contentPosition = scrollContentWrapper.scrollTop;
    scrollerBeingDragged = true;
}

function stopDrag(evt) {
    scrollerBeingDragged = false;
}

function scrollBarScroll(evt) {
    if (scrollerBeingDragged === true) {
        var mouseDifferential = evt.pageY - normalizedPosition;
        var scrollEquivalent = mouseDifferential * (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight);
        scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent;
    }
}

function createScroller() {
    // *Creates scroller element and appends to '.scrollable' div
    // create scroller element
    scroller = document.createElement("div");
    scroller.className = 'scroller';

    // determine how big scroller should be based on content
    scrollerHeight = calculateScrollerHeight();

    if (scrollerHeight / scrollContainer.offsetHeight < 1){
        // *If there is a need to have scroll bar based on content size
        scroller.style.height = scrollerHeight + 'px';

        // append scroller to scrollContainer div
        scrollContainer.appendChild(scroller);

        // show scroll path divot
        scrollContainer.className += ' showScroll';

        // attach related draggable listeners
        scroller.addEventListener('mousedown', startDrag);
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('mousemove', scrollBarScroll)
    }

}

createScroller();


// *** Listeners ***
scrollContentWrapper.addEventListener('scroll', moveScroller);
}());














