window.addEventListener("DOMContentLoaded", () => {
  gsap.from("h1", {
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: 0.3,
  });

  gsap.from(".image-container img", {
    duration: 1,
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".imgbackground img", {
    duration: 1,
    opacity: 0,
    y: 0,
  });

  gsap.from(".rectangle1", {
    duration: 1,
    opacity: 0,
    y: 10,
  });

  gsap.from(".rectangle1 li", {
    duration: 1,
    opacity: 0,
    y: 10,
    stagger: 0.3,
  });
});
