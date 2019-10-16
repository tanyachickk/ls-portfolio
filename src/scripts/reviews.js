import Vue from 'vue';
import flickity from 'vue-flickity';
import reviews from '../data/reviews';

new Vue({
  el: '#reviews',
  components: {
    flickity,
  },
  data: {
    reviews: [],
    currentReviewIndex: 0,
    flickityOptions: {
      prevNextButtons: false,
      pageDots: false,
      cellAlign: 'left',
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
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
      this.currentReviewIndex = index;
    });
  },
});
