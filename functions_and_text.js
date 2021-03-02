

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


//This slideshow was found in the "how-to" from W3Schools. The only thing that I needed to add was the automatic transition.
//This is created by using a timer function. Keep track of the current slide with var slideIndex.
var slideshowContainer
var slideIndex = 1


//Use a timer for changing the slides. 
var myTimer


//start to load the function.
window.addEventListener("load",function() 
   {
    showSlides(slideIndex)
    //add that timer as the default when the website starts.
    //attach the timer to the plusSlides function to move
    //the slide forward after 3 seconds.
    myTimer = setInterval(function(){plusSlides(1)}, 3000)
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0]
    //here, use event listener for when the user puts the mouse
    //over the pictures, so that the carousel stops and the user 
    //can look at the picture without it moving to the next picture.
    slideshowContainer.addEventListener('mouseenter', pause)
    //when the mouse is taken off the slide, the auto scroll resumes.
    slideshowContainer.addEventListener('mouseleave', resume)})

// Here, we create a function that will move the slides 
//forwards and backwards.
function plusSlides(n)
      {
      //First, reset the timer.
      clearInterval(myTimer)
      //then make it to where the slides move forward. 
      //if there is no picture at that index, move it back.
      if (n < 0)
            {showSlides(slideIndex -= 1)} 
      else 
            {showSlides(slideIndex += 1)}
      //if the slide is moved back, it will set the timer again
      //and keep autoscrolling.
      if (n === -1)
            {myTimer = setInterval(function(){plusSlides(n + 2)}, 3000)} 
      else 
            {myTimer = setInterval(function(){plusSlides(n + 1)}, 3000)}}


function currentSlide(n)
      //resets the timer on the current slide.
      {
      clearInterval(myTimer)
      myTimer = setInterval(function(){plusSlides(n + 1)}, 3000)
      showSlides(slideIndex = n)}

function showSlides(n)
      //function to incorporate the dots, slides, and active
      //dots.
      {
      var i;
      //create variables for the dots and the slides
      //to connect the dots to the slides. No pun intended.
      var slides = document.getElementsByClassName("mySlides")
      var dots = document.getElementsByClassName("dot")
      //set the index to the length of each slide found in the HTML.
      if (n > slides.length) 
            {slideIndex = 1}
      if (n < 1) 
            {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) 
            //make sure to keep the display from showing all the slides
            //at the same time.
            {slides[i].style.display = "none"}
      for (i = 0; i < dots.length; i++)
            //make sure to take the "active" color off the previous
            //slide.
            {dots[i].className = dots[i].className.replace(" active", "")}
      slides[slideIndex-1].style.display = "block"
      //change the active dot so that it changes to active coloring.
      dots[slideIndex-1].className += " active"}
      //clear the timer for each times the user hovers 
      //over the slides with the mouse.
      pause = () => {clearInterval(myTimer)}
      resume = () =>{clearInterval(myTimer)
      //set the timer to 3 sections in changing the slides with the 
      //plusSlides function.
      myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000)}




//---------------------------------------------Scrollbox JavaScript -------------------------------------------------

      
      
//For the required scroll box, it was hard to find information on how to manually make one. Most cites just explained that 
//you can "force" the scroll box to keep the scroller showing by making the area always 200% (larger than the actual window
//so that the text box will keep the scroll bar even if there isn't enough text to make it overflow). But I found an idea     
//that uses just JavaScript without any other additional help: https://stackoverflow.com/questions/27322881/how-can-i-create
//-a-simple-page-vertical-scroll-bar-without-using-jquery. Below is the function explained.

(function () 
      { 
      //grabbing the first elements for each, the scrollable class, the content-wrapper class.
      var scrollContainer = document.querySelector('.scrollable'),
            scrollContentWrapper = document.querySelector('.scrollable .content-wrapper'),
            scrollContent = document.querySelector('.scrollable .content'),
            //set the postion for the text content.
            contentPosition = 0,
            //set the scroll bar.
            scrollerBeingDragged = false, scroller, topPosition, scrollerHeight

function calculateScrollerHeight() 
      {
      //Set the dementions of the scroll bar.
      var visibleRatio = scrollContainer.offsetHeight / scrollContentWrapper.scrollHeight
      return visibleRatio * scrollContainer.offsetHeight}

function moveScroller(evt) 
      {
      // Move Scroll bar to top offset
      var scrollPercentage = evt.target.scrollTop / scrollContentWrapper.scrollHeight
      topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5) 
      // 5px arbitrary offset so scroll bar doesn't move too far beyond content wrapper bounding box
      //DO NOT CHANGE. I tried changes this and it makes it offset.
      scroller.style.top = topPosition + 'px'}
      //align it with the top postion.

function startDrag(evt) 
      {
      normalizedPosition = evt.pageY
      contentPosition = scrollContentWrapper.scrollTop
      scrollerBeingDragged = true}

function stopDrag(evt) 
      {
      //set the scroller to false when user 
      //stops dragger the scroll bar.
      scrollerBeingDragged = false}

function scrollBarScroll(evt) 
      {
      //set the scroll bar when user drags it.
      if (scrollerBeingDragged === true) 
            {
            var mouseDifferential = evt.pageY - normalizedPosition
            var scrollEquivalent = mouseDifferential * (scrollContentWrapper.scrollHeight / scrollContainer.offsetHeight)
            scrollContentWrapper.scrollTop = contentPosition + scrollEquivalent}}

function createScroller() 
      {
      // Creates the scroller bar and places it in the scrollable HTML div
      // create scroller element
      scroller = document.createElement("div")
      scroller.className = 'scroller'
      // determine how big scroller should be based on content
      scrollerHeight = calculateScrollerHeight()
      if (scrollerHeight / scrollContainer.offsetHeight < 1)
            {
            //If there is a need to have scroll bar based on content size
            scroller.style.height = scrollerHeight + 'px'
            //append scroller to scrollContainer div
            scrollContainer.appendChild(scroller)
            //show scroll path divot
            scrollContainer.className += ' showScroll'
            //attach related draggable listeners
            scroller.addEventListener('mousedown', startDrag)
            window.addEventListener('mouseup', stopDrag)
            window.addEventListener('mousemove', scrollBarScroll)}}
            createScroller()
            //Set the event listener.
            scrollContentWrapper.addEventListener('scroll', moveScroller)}())














