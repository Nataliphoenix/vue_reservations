<template>
   <div class="reviews-heading">
      <ReviewsAvatar class="reviews-heading__avatar" />
      <div class="reviews-heading__content">
         <span class="reviews-heading__author">{{ author }}</span>
         <StarRating :rating="rating" />
      </div>
   </div>
</template>

<script>

import ReviewsAvatar from './ReviewsAvatar.vue'
import StarRating from '../../StarRating.vue'

export default {
   name: 'ReviewsHeading',
   components: {
      StarRating,
      ReviewsAvatar
   },
   props: {
      author: {
         type: String,
         required: true,
      },
      rating: {
         type: Number,
         default: 0,
      },
   }
}
</script>

<style lang="scss" scoped>
.reviews-heading {
   display: flex;
   align-items: center;

   &__content {
      display: flex;
      flex-direction: column;
   }

   &__avatar {
      margin-right: 17px;
      /* 
      width: 34px;
      height: 34px; */
   }

   &__author {
      margin-bottom: 2px;

      font-size: 18px;
      font-weight: 700;
   }
}
</style>