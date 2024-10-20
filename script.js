const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger)
document.querySelectorAll(".elem").forEach(elem => {
  let image =elem.querySelector("img") 
  let tl = gsap.timeline()
  let xtransform= gsap.utils.random(-100,100)
  tl
  .set(image, {
    transformOrigin:`${xtransform < 0 ? 0 :'100%' }% `,
  
  },"start")
    .to(image, {
      scale:0,
      ease:"none",
      scrollTrigger:{
        trigger:elem,
        start:"top top",
        end:"bottom top",
        scrub:true
      }
    },"start")
    .to(elem,{
      xPercent: xtransform,
      ease:"power5.easeInOut",
      scrollTrigger:{
        trigger:elem,
        start:"top bottom",
        end:"bottom top",
        scrub:true
      }
    })
   
})
