$(".responsive").slick({
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

let select = document.getElementById("select");
let btnGo = document.getElementById("btnGo");

btnGo.onclick = function(){
  if(select.value==="1"){
      window.open("index2.html", "_blank")
  }
  else if(select.value==="2"){
     window.open("index3.html", "_blank")
  }
}
