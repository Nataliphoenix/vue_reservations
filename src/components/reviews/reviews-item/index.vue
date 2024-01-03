<template>
   <section class="reviews-item">
      <ReviewsHeading :rating="review.rating" :author="review.author" class="reviews-item__heading" />
      <p class="reviews-item__content">{{ review.content }}</p>
   </section>
</template>

<script>

import ReviewsHeading from './ReviewsHeading.vue'

export default {
   name: 'ReviewsItem',
   components: {
      ReviewsHeading
   },
   props: {
      review: {
         type: Object,
         required: true
      }
   }
}
</script>

<style lang="scss" scoped>
.reviews-item {
   margin-bottom: 2px;
   padding: 17px 20px 18px 20px;

   background: #fff;

   &__heading {
      margin-bottom: 17px;
   }

   &:last-child {
      margin-bottom: 0;
   }

   &__content {
      display: -webkit-box;
      margin-top: 20px;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;

      font-size: 16px;
      font-weight: 500;
      line-height: 1.3;
   }
}
</style>