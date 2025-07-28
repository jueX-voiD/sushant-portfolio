gsap.registerPlugin(ScrollTrigger);

gsap.from(".open-to-work", {
  y: 400,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".open-to-work",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});
