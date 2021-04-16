const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("fadeout", "fadein");
    } else {
      entry.target.classList.replace("fadein", "fadeout");
    }
  })
};

const observeOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7
};

const observer = new IntersectionObserver(observerCallback, observeOptions);

const fadeElements = document.getElementsByClassName("item");

[...fadeElements].forEach(e => observer.observe(e));