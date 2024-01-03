<template>
   <section class="reviews">
      <div class="reviews__heading">
         <h2 class="reviews__title">Сумарний рейтинг</h2>
         <div class="reviews__rating">
            <span class="reviews__total">{{ amountOfReviews }} відгука(ів)
            </span>
            <StarRating :rating="totalRating" />
         </div>
      </div>
      <ReviewsItem v-for="review in currentReviews" :key="review.author" :review="review" />
      <button @click="toggleReviews" class="reviews__show-more">{{ buttonText }}</button>
   </section>
</template>


<script>
import ReviewsItem from './reviews-item/index.vue'
import StarRating from '../StarRating.vue';

export default {
   name: 'ReviewsCard',
   components: {
      ReviewsItem,
      StarRating
   },
   props: {
      reviews: {
         type: Array,
         required: true,
      }
   },
   data()
   {
      return {
         reviewsLimit: 2,
      }
   },
   computed: {
      totalRating()
      {
         const total = this.reviews.reduce((acc, review) => acc + review.rating, 0)
         return total / this.reviews.length
      },
      amountOfReviews()
      {
         return this.reviews.length
      },
      currentReviews()
      {
         return this.reviews.slice(0, this.reviewsLimit)
      },
      buttonText()
      {
         return this.reviewsLimit === this.reviews.length ? 'Згорнути' : 'Читати ще...'
      }
   },
   methods: {
      toggleReviews()
      {
         if (this.reviewsLimit === this.reviews.length)
         {
            this.reviewsLimit = 2

            return
         }
         return this.reviewsLimit = this.reviews.length

      }
   }

}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/variables.scss';

.reviews {
   padding: 0 2px;
   background: $card-bg;

   &__heading {
      padding: 20px 19px 24px 14px;
   }

   &__title {
      margin-bottom: 7px;

      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
   }

   &__rating {
      display: flex;
      justify-content: space-between;
   }

   &__show-more {
      padding: 10px;
      border: none;
      cursor: pointer;

      width: 100%;
      height: 100%;

      font-size: 16px;
      font-weight: 400;
      font-family: inherit;

      background: none;
   }
}
</style>