let page1 = document.querySelector("#page1")
let cursor = document.querySelector(".cursor")

page1.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        y: dets.y,
        x: dets.x,
    })
})

page1.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
        opacity:0,
        scale:0,
    })
})
page1.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
        opacity:1,
        scale:1,
    })
})