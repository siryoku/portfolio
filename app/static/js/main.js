'use strict;'

{
  const introduction = document.getElementById('introduction');
  const background = document.getElementById('background');
  const matter = document.getElementById('matter');
  const skill = document.getElementById('skill');
  const license = document.getElementById('license');
  const product = document.getElementById('product');
  const introduction_close = document.getElementById('introduction_close');
  const introduction_modal = document.getElementById('introduction_modal');
  const background_close = document.getElementById('background_close');
  const background_modal = document.getElementById('background_modal');
  const matter_close = document.getElementById('matter_close');
  const matter_modal = document.getElementById('matter_modal');
  const skill_close = document.getElementById('skill_close');
  const skill_modal = document.getElementById('skill_modal');
  const license_close = document.getElementById('license_close');
  const license_modal = document.getElementById('license_modal');
  const product_close = document.getElementById('product_close');
  const product_modal = document.getElementById('product_modal');
  const mask = document.getElementById('mask');

  introduction.addEventListener("click", ()=> {
    introduction_modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  })

  introduction_close.addEventListener("click", ()=> {
    introduction_modal.classList.add("hidden");
    mask.classList.add("hidden");
  })

  background.addEventListener("click", ()=> {
    background_modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  })

  background_close.addEventListener("click", ()=> {
    background_modal.classList.add("hidden");
    mask.classList.add("hidden");
  })

  matter.addEventListener("click", ()=> {
    matter_modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  })

  matter_close.addEventListener("click", ()=> {
    matter_modal.classList.add("hidden");
    mask.classList.add("hidden");
  })

  skill.addEventListener("click", ()=> {
    skill_modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  })

  skill_close.addEventListener("click", ()=> {
    skill_modal.classList.add("hidden");
    mask.classList.add("hidden");
  })


  license.addEventListener("click", ()=> {
    license_modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  })

  license_close.addEventListener("click", ()=> {
    license_modal.classList.add("hidden");
    mask.classList.add("hidden");
  })

  product.addEventListener("click", ()=> {
    product_modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  })

  product_close.addEventListener("click", ()=> {
    product_modal.classList.add("hidden");
    mask.classList.add("hidden");
  })




  mask.addEventListener("click", ()=> {
    introduction_close.click();
    background_close.click();
    matter_close.click();
    skill_close.click();
    license_close.click();
    product_close.click();
  })

  

}