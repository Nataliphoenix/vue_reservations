<template>
   <article class="apartment-main-info">
      <div class="apartment-main-info__heading">
         <h1 class="apartment-main-info__title">{{ apartment.title }}</h1>
         <StarRating :rating="apartment.rating" />
      </div>
      <img :src="apartment.imgUrl" alt="{{apartment.title}}" class="apartment-main-info__photo">
      <p class="apartment-main-info__description">{{ apartment.descr }}</p>
   </article>
</template>

<script>

import StarRating from '../StarRating.vue'

export default {
   name: 'ApartmentsMainInfo',
   props: {
      apartment: {
         type: Object,
         required: true,
      }
   },
   components: {
      StarRating,
   }
}
</script>

<style lang="scss" scoped>
.apartment-main-info {
   &__heading {
      display: flex;
   }

   &__title {
      margin-right: 20px;
      margin-bottom: 20px;

      font-size: 20px;
      font-weight: 700;
      text-transform: capitalize;

   }

   &__photo {
      width: 100%;
      margin-bottom: 30px;
   }

   &__description {
      margin-bottom: 24px;

      font-size: 16px;
      font-weight: 500;
      line-height: 1.3;
   }
}
</style>