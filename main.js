const animatedSection = document.querySelector('.animated-area');

function createMeteors(){
    const meteor = document.createElement('span');
    meteor.style.left = Math.random() * innerWidth + 'px';
    animatedSection.append(meteor);

    setTimeout(()=>{
        meteor.remove();
    },2000);
}

setInterval(createMeteors,100);

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
