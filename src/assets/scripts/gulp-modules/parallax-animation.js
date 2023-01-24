const parallaxAnim = document.querySelectorAll('.section-1 .section-1__main-img img, .section-3 .section-3__main-img img, .js-about-block-1 .about-block__main-img img, .js-about-block-2 .about-block__main-img img');
parallaxAnim.forEach(section => {
  const wrap = document.createElement('div');
  wrap.style.overflow = 'hidden';
  wrap.style.height = '100%';
  section.parentElement.prepend(wrap);
  gsap.set(section, { willChange: 'transform', scale: 1.2 });
  wrap.prepend(section);
  if (document.documentElement.clientWidth > 1023) {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        triggerHook: 1,
        trigger: wrap,
        scrub: true,
        // start: '-100% top',
        // end: '100% bottom',
      },
    });
    tl.fromTo(
      section,
      { y: -100},
      { y: 100, duration: 0.2},
    );
  }
  if (document.documentElement.clientWidth < 1024) {
    gsap.set(section, { willChange: 'transform', scale: 1 });
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        triggerHook: 1,
        trigger: wrap,
        scrub: true,
        // start: '-100% top',
        // end: '100% bottom',
      },
    });
    tl.fromTo(
      section,
      { y: 0},
      { y: 0, duration: 0.2},
    );
  }
});
