            // LOADER

window.addEventListener("load", function() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

 
 
              // THEME TOGGLE
$(document).ready(function () {
  $("#theme-toggle").click(function () {
    $("body").toggleClass("dark-theme");
  });
});

                // MOUSE TRAILER



            // THE RESPONSIVE NAV MENU FOR MOBILE
$(document).ready(function(){
    $(".toggle-btn").click(function(){
      $(".menu").addClass("active").toggle();
    });
});

            // TO MAKE THE H1 TAG "TAM_DEV" ACHEIVE THE EFFECT OF CHANGING FROM RANDOM TO IT'S CONTENT
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
const randoText = selector => {
document.querySelector(selector).onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
}

randoText("h1");
randoText("#home1");
randoText("#about1");
randoText("#contact1");
// randoText(".lclh11");
// randoText(".lch1h111");
// randoText(".lclh12");


        // GENERATE RANDOME TEXT ON PAGE LOAD THEN REVERT BACK TO DATA-VALUE

const letters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const randomizeText = selector => {
  let iteration = 0;
  let interval = null;
  
  const target = document.querySelector(selector);
  
  const value = target.dataset.value;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
  target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
      if(index < iteration) {
          return value[index];
      }
      
      return letters1[Math.floor(Math.random() * 36)];
      })
      .join("");
  
  if(iteration >= value.length) {
      clearInterval(interval);
  }
  
  iteration += 1 / 3;
  }, 30);
};
        
randomizeText("h1");
randomizeText("#home1");
randomizeText("#about1");
randomizeText("#contact1");
randomizeText(".lclh11");
randomizeText(".lch1h111");
randomizeText(".lclh12");

const burgerMenu = $(".menu");

const runFunctionWhenVisible = () => {
  if (burgerMenu.is(":visible")) {
    randomizeText("#home");
    randomizeText("#about");
    randomizeText("#contact");
  }
};

const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === "style") {
      runFunctionWhenVisible();
    }
  });
});

observer.observe(burgerMenu[0], {
  attributes: true
});

          // THEMES
$(document).ready(function () {
  $("#switch").change(function () {
    $("body").toggleClass("light-theme");
    $("a").toggleClass("light-themea");
    $(".nestedatheme").toggleClass("light-themea");
  });
});          

        // WEB TOOL KIT OF THE SCROLL BAR

$(document).ready(function(){
  $("body").niceScroll();
});

        // JAVASCRIPT FOR THE SCROLL EFFECT WHEN A USER CLICKS ON THAT DOWN ARROW IN THE LANDING CONTENT 

$("#scrol").click(function() {
  document.querySelector('#About').scrollIntoView({ 
    behavior: 'smooth' 
  });
});


            // EMAIL

// $(document).ready(function() {
//   $("#contact-form").submit(function(e) {
//     e.preventDefault();

//     var formData = {
//       name: $("#name").val(),
//       email: $("#email").val(),
//       message: $("#message").val()
//     };

//     $.ajax({
//       type: "POST",
//       url: "index.php",
//       data: formData,
//       success: function() {
//         $("#form-response").html("<p class='alert alert-success'>Your message has been sent!</p>").show();
//         $("#contact-form").trigger("reset");
//       },
//       error: function() {
//         $("#form-response").html("<p class='alert alert-danger'>There was an error sending your message. Please try again later.</p>").show();
//       }
//     });
//   });
// });
            


          // MUSIC

const backgroundMusic = document.getElementById("background-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggle.innerHTML = "Turn music off";
  } else {
    backgroundMusic.pause();
    musicToggle.innerHTML = "Turn music on";
  }
});
          