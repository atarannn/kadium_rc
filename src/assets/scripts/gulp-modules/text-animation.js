window.addEventListener('load', () => {
  function splitToLinesAndFadeUp(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: document.body,
            trigger: text,
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 0.5, stagger: 0.05, duration: 1.3, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp('.section-2 .dark-title, .section-3 .light-title, .section-4 .dark-title, .section-5 .dark-title, .breadcrumbs-wrapper .dark-title, .about-block-2 .block-right .block-right__text .js-about-tile, .contact-block .block-right .dark-title');
  function splitToLinesAndFadeUp2(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: document.body,
            trigger: text,
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 1, stagger: 0.05, duration: 1.3, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp2('.section-1__text .light-title');

  const blockAnim = document.querySelectorAll('.section-2 .block-right .dark-text, .section-3 .section-3__text .light-text');
  blockAnim.forEach(section => {
    gsap.set(section, { overflow: 'visible' });
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        scroller: document.body,
        triggerHook: 1,
        trigger: section,
        // start: '0% top',
        // end: '100% bottom',
        once: true,
      },
    });
    tl.fromTo(
      section,
      { autoAlpha: 0},
      { delay: 0.5, duration: 0.6, autoAlpha: 1},
    );
  });
})


