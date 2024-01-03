<template>
   <main class="apartment-page">
      <ContainerMain>
         <div class="apartment-page__content">
            <ApartmentsMainInfo :apartment="apartment" />
            <div class="apartment-page__editional-info">
               <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
               <Reviews :reviews="reviewsList" class="apartment-page__reviews" />
            </div>
         </div>
      </ContainerMain>
   </main>
</template>

<script>

import ContainerMain from '../components/shared/ContainerMain.vue'
import apartments from '../components/apartment/apartments'
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue'
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue'
import Reviews from '../components/reviews/index.vue'
import reviewsList from '../components/reviews/reviews.json'


export default {
   name: "ApartmentPage",
   components: {
      ContainerMain,
      ApartmentsMainInfo,
      ApartmentsOwner,
      Reviews,
   },
   computed: {
      reviewsList()
      {
         return reviewsList
      },
      apartment()
      {
         return apartments.find(apartment => apartment.id === this.$route.params.id)
      }
   },
   // mounted()
   // {
   //    console.log(this.apartment)

   // },

}
</script>

<style lang="scss" scoped>
.apartment-page {
   padding-bottom: 72px;

   &__content {
      display: flex;
      align-items: flex-start;
   }

   &__editional-info {
      margin-left: 30px;
      max-width: 350px;
      flex-grow: 0;
      flex-shrink: 1;
   }

}
</style>