<template>
  <div class="apartments-item">
    <div class="apartments-item__inner">
      <img :src="imgSrc" alt="" class="apartments-item__photo" />
      <div class="apartments-item__content">
        <p class="apartments-item__description">{{ descr }}</p>
        <div class="apartments-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="apartments-item__price">UAH {{ price }} <span class="apartments-item__info">за ночь</span></div>
      </div>
    </div>
  </div>
</template>
<script>

import StarRating from "../StarRating.vue";

export default {
  name: "ApartmentsItem",
  components: {
    StarRating,
  },
  props: {
    // id: {
    //   type: String,
    //   required: true,
    // },
    descr: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-item {
  position: relative;
  width: 33.333%;
  /* max-width: 350px; */
  padding: 0 15px;
  margin-bottom: 30px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0F1D2D, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.25;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    font-size: 16px;
    margin-bottom: 20px;
    max-height: calc(1em * 1.25 * 4);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    font-weight: 400;
  }
}
</style>
