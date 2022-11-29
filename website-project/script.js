
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 35,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})




$(document).ready(function () {
    $(".ham").click(function () {
        $(".nav-menu").toggleClass("active");
        $(".ham").toggleClass("active");
    })

})



const worksection =document.querySelector(".counter");
 const workObserver= new IntersectionObserver((entries,observer)=>{
    const [entry]=entries;
  if(  entry.isIntersecting==false)return;

  const counters = document.querySelectorAll(".title");
counters.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        const startingCount = + counter.innerHTML;
        const incr = targetCount / 100;
        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10)
        }
        else {
            counter.innerHTML = targetCount;
        }

    }
    updateCounter();
});
observer.unobserve(worksection);
 },{
    root:null,
    threshold:0,

})
workObserver.observe(worksection);
