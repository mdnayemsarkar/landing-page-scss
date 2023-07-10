var tl = gsap.timeline();

tl.from("header", {
  y: 50,
  delay: 0.5,
  duration: 1,
  opacity: 0,
}),
  tl.from(
    ".lft-content-i,.lft-content-ii,.lft-content-iii,.left-content-iv,.conainer-i-rght",
    {
      delay: 0.5,
      duration: 2,
      opacity: 0,
      x: -30,
      stagger: 1,
    }
  );
