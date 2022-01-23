// nav bar view
const navbar = document.querySelector('nav ul');
const navbarButton = document.querySelector('nav button');
const cover = document.querySelector('.cover');

const hideNavbar = () => {
    navbar.classList.add('hideNavbar');
    cover.classList.add('hideCover');
}

navbarButton.addEventListener('click', () => {
    navbar.classList.toggle('hideNavbar');
    cover.classList.toggle('hideCover');
});

cover.addEventListener('click', hideNavbar);
window.addEventListener('hashchange', hideNavbar);

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
    })
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// scroll up bar

const scrollline = document.querySelector('.scroll-line');

      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        scrollline.style.width = percentScrolled + '%';
      };

      window.addEventListener('scroll', fillscrollline);

// progress bar animation
      $(".animated-progress span").each(function () {
        $(this).animate(
          {
            width: $(this).attr("data-progress") + "%",
          },
          1000
        );
        $(this).text($(this).attr("data-progress") + "%");
      });

// // burger wrapper
//       $(".burger").click(function() {
//         $(this).toggleClass("activated");
//       });


//       <link rel="stylesheet/less" type="text/css" href="css/styles.less"></link>