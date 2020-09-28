let isMobile = false;
let isShowingMNav=false;

if (window.innerWidth < 601) {
  // isMobile=true;
}

// CALL THE FUNCTION TO SHOW THE CONTACT FORM
const ele = document.getElementById("myDropdown");
const wrapper = document.getElementById("wrapper");
document.getElementById("contact-caller").addEventListener("click", function(e) {
  if (e.target.id === 'wrapper') {
    hideWrapper();
  } else { 
    showWrapper();
  }
})

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showWrapper() {
  ele.classList.remove("hide")
  wrapper.classList.remove("hide")
  const rl = document.getElementById("resources-caller") 
  const pl = document.getElementById("product-caller") 
  rl.classList.add("hide");
  pl.classList.add("hide");
}

function hideWrapper() {
  ele.classList.add("hide")
  wrapper.classList.add("hide")
}





window.onscroll = function() {myscrollfunction2()};

function myscrollfunction2() {
  const pos = document.body.scrollTop;
  const pos_2 = document.documentElement.scrollTop;

  // check whether we can hide the small nav at the top.
  if (pos > 50 || pos_2 > 50) {
    document.getElementById("myscroll2").className = "test2";
  
    // check whether we can show the nav background color
    if (pos > 100 || pos_2 > 100) {
      if (!isMobile) {
        myscrollfunction()
      }
    }
  } else {
    // show the small nav bar
    document.getElementById("myscroll2").className = "sec-nav-bar";
  
    // hide the background color of the big nav
    if (!isMobile) {
      document.getElementById("myscroll").className = "wrapper";
    }
  }
}


function myscrollfunction() {
  if (isMobile) {
    document.getElementById("myscroll").className = "test";
  } else {
    document.getElementById("myscroll").className = "test";
  }
}


function myFunction() {
  console.log('showing the product')
  var x = document.getElementById("product-caller");
  x.classList.toggle("hide")

  // others elements
  const rl = document.getElementById("resources-caller") 
  rl.classList.add("hide")

  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  //   x.classList.remove("hide")
  //   const rl = document.getElementById("resources-caller")
  //   const cl = document.getElementById("contact-caller")
  //   rl.classList.add("hide")
  // }
  // x.classList.remove("hide")


}




function myresources() {
  var x = document.getElementById("resources-caller");
  x.classList.toggle("hide")

  // other elements
  const pl = document.getElementById("product-caller");
  pl.classList.add("hide")

  // x.classList.remove("hide")
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  //   x.classList.remove("hide")

  //   const pl = document.getElementById("product-caller")
  //   const cl = document.getElementById("contact-caller")
  //   pl.classList.add("hide")
  // }
}



var label = document.getElementById('collapse-menu');

label.onclick = function() {
  console.log('dropdown-menu')
    var div = document.getElementById('mymenu');
    if (div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

const mobileNavHandler = document.getElementById("collapse-menu")
mobileNavHandler.addEventListener('click', function(){
  // check if it is already visible
  isMobile=!isMobile;
  document.getElementById("mymenu").classList.toggle('mobile-toggle')
  myscrollfunction();
  // document.getElementById("myscroll").classList.toggle("test")
})

