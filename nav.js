// When the user scrolls down 80px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const bannerHeight = document.querySelector('.banner').clientHeight + document.querySelector('#nav').clientHeight -90
    const lien = document.getElementsByClassName('link');
    console.log(lien);


  if (document.body.scrollTop > bannerHeight || document.documentElement.scrollTop > bannerHeight) {
    document.getElementById("nav").style.backgroundColor = "rgba(255, 255, 255)";
    document.getElementById("link").style.color = "#000000";
    document.getElementById("link2").style.color = "#000000";
    document.getElementById("link3").style.color = "#000000";
    document.getElementById("burger").style.color = "#000000";


  } else {
    document.getElementById("nav").style.backgroundColor="rgba(255, 255, 255, 0)";
    document.getElementById("link").style.color = "#ffffff";
    document.getElementById("link2").style.color = "#ffffff";
    document.getElementById("link3").style.color = "#ffffff";
    document.getElementById("burger").style.color = "#ffffff";

  }
}