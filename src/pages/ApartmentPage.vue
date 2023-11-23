<template>
   <main class="apartment-page">
      <ContainerMain>
         <div class="apartment-page__content">
            <ApartmentsMainInfo :apartment="apartment" />
            <ApartmentsOwner class="apartment-page__owner" :owner="apartment.owner" />
         </div>
      </ContainerMain>
   </main>
</template>

<script>

import ContainerMain from '../components/shared/ContainerMain.vue';
import apartments from '../components/apartment/apartmentJs.js';
import ApartmentsMainInfo from '../components/apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '../components/apartment/ApartmentsOwner.vue';


export default {
   name: "ApartmentPage",
   components: {
      ContainerMain,
      ApartmentsMainInfo,
      ApartmentsOwner,
   },
   computed: {
      apartment()
      {
         return apartments.find(apartment => apartment.id === this.$route.params.id)
      }
   },
   mounted()
   {
      console.log(this.apartment)

   },

}
</script>

<style lang="scss" scoped>
.apartment-page {
   padding-bottom: 72px;

   &__content {
      display: flex;
      align-items: flex-start;
   }

   &__owner {
      margin-left: 30px;
      min-width: 350px;
   }
}
</style>