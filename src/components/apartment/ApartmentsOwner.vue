<template>
   <section class="apartments-owner">
      <h2 class="apartments-owner__title">Информация о владельце:</h2>
      <p class="apartments-owner__name">{{ owner.name }}</p>
      <p class="apartments-owner__tell">tel: {{ owner.phone }}</p>
      <p class="apartments-owner__email">e-mail: {{ owner.email }}</p>
   </section>
</template>

<script>
export default {
   name: 'ApartmentsOwner',
   props: {
      owner: {
         type: Object,
         required: true,
      }
   }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/variables.scss';

.apartments-owner {
   padding: 19px 20px 30px 20px;
   background-color: $card-bg;

   &__title {
      margin-bottom: 19px;

      font-size: 20px;
      font-weight: 700;
   }

   &__name,
   &__tell,
   &__email {
      margin-bottom: 8px;

      font-size: 16px;
      font-weight: 400;
   }
}
</style>