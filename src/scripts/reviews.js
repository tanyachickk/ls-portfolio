import Vue from 'vue';
import flickity from 'vue-flickity';
import constants from '../styles/variables';
import reviews from '../data/reviews';

new Vue({
  el: '#reviews',
  components: {
    flickity,
  },
  data: {
    reviews: [],
    currentSlideIndex: 0,
    flickityOptions: {
      prevNextButtons: false,
      pageDots: false,
      groupCells: window.innerWidth > 768 ? 2 : 1,
      cellAlign: 'left',
    },
  },
  computed: {
    slidesLength() {
      return Math.ceil(this.reviews.length / this.flickityOptions.groupCells);
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    },
    onResize() {
      this.flickityOptions.groupCells = window.innerWidth > 768 ? 2 : 1;

      const slides = this.$refs.flickity.getCellElements();
      slides.forEach((slide) => (slide.style.height = ''));

      const heights = slides.map((slide) => slide.offsetHeight);
      const max = Math.max(...heights);

      slides.forEach((slide) => (slide.style.height = max + 'px'));
    },
  },
  created() {
    this.reviews = reviews.map((review) => ({
      ...review,
      photo: require(`images/${review.photo}`),
    }));
  },
  mounted() {
    this.$refs.flickity.on('change', (index) => {
      this.currentSlideIndex = this.$refs.flickity.selectedIndex();
    });
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
});
