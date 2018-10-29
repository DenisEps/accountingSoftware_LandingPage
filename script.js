let hero = document.getElementById('hero');
let pricing = document.getElementById('pricing');
let whyUs = document.getElementById('whyUs')

let heroBtn1 = document.getElementById('hero-btn1');
let pricingBtn1 = document.getElementById('pricing-btn1');
let whyUsBtn1 = document.getElementById('whyUs-btn1');

let arrow = document.getElementById('down-arrow');

heroBtn1.addEventListener('click', scrollHero);
pricingBtn1.addEventListener('click', scrollPricing);
whyUsBtn1.addEventListener('click', scrollWhyUs)

arrow.addEventListener('click', scrollPricing);

function scrollHero() {
  hero.scrollIntoView({behavior: "smooth", block: "start"});
};

function scrollPricing() {
  pricing.scrollIntoView({behavior: "smooth", block: "start"});
};

function scrollWhyUs() {
  whyUs.scrollIntoView({behavior: "smooth", block: "start"});
};
