var csr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    console.log(dets.y)
    csr.style.left = dets.x+30+"px"
    csr.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y - 200 +"px"
})
 var h4 = document.querySelectorAll("#nav h4")
 h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        csr.style.scale = 3
        csr.style.border = "1px solid #fff"
        csr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        csr.style.scale = 1
        csr.style.border = "0px solid #95C11E"
        csr.style.backgroundColor = "#95C11E"
    })
 })
 
 

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11px",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.from("#about img,#aboutus",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 55%",
        scrub:2,
    }
})
gsap.from(".card ",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:4,
    }
    
})