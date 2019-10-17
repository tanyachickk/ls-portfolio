import constants from '../styles/variables.json';

const mountainsParallax = document.querySelector('.mountains-parallax');
const mountainsLayers = mountainsParallax.children;

const buddaParallax = document.querySelector('.budda-parallax');
const buddaLayers = buddaParallax.children;

function moveLayersDependsOnScroll(layers, wScroll) {
  Array.from(layers).forEach((layer) => {
    const divider = layer.dataset.speed;
    const offset = -wScroll / divider;
    layer.style.transform = `translate3d(0, ${offset}px, 0)`;
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth < parseInt(constants['bp-tablets'])) {
    return;
  }
  const wScroll = window.pageYOffset;

  const isMountainsParallax = window.innerHeight > wScroll;
  if (isMountainsParallax) {
    moveLayersDependsOnScroll(mountainsLayers, wScroll);
    return;
  }

  const { top } = buddaParallax.getBoundingClientRect();
  const buddaParallaxOffset = window.innerHeight - top;
  if (buddaParallaxOffset > 0) {
    moveLayersDependsOnScroll(buddaLayers, buddaParallaxOffset);
    return;
  }
});