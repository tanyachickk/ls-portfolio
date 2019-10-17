const parallax = document.querySelector(".mountains-parallax");
const layers = parallax.children;

function moveLayersDependsOnScroll(wscroll) {
  Array.from(layers).forEach((layer, layerIndex) => {
    const speed = layer.dataset.speed;
    if (speed) {
      const strafe = wscroll / speed;
      layer.style.transform = `translateY(-${strafe}px)`;
    }
  });
}

const windowWidth = document.body.clientWidth;

if (windowWidth > 768) {
  window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  });
}
