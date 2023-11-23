<template>
   <main class="homepage">

      <ContainerMain>
         <ApartmentFilterForm @submit="filter" class="apartments-filter" />
      </ContainerMain>

      <ContainerMain>
         <p v-if="!filteredApartments.length"> Нічого не знайдено ! </p>

         <ApartmentsList v-else :items="filteredApartments">
            <template #apartment="{ id, descr, rating, imgUrl, price }">
               <ApartmentsItem :key="id" :id="id" :descr="descr" :rating="rating" :imgSrc="imgUrl" :price="price" />
            </template>
         </ApartmentsList>
      </ContainerMain>
   </main>
</template>

<script>

import ApartmentFilterForm from '../components/apartment/ApartmentFilterForm.vue';
import ApartmentsList from '../components/apartment/ApartmentsList.vue';
import ApartmentsItem from '../components/apartment/ApartmentsItem.vue';
import ContainerMain from '../components/shared/ContainerMain.vue';
import apartments from '../components/apartment/apartmentJs.js';

export default {
   name: "App",
   components: {
      ContainerMain,
      ApartmentFilterForm,
      ApartmentsList,
      ApartmentsItem,
   },
   data()
   {
      return {
         text: '',
         apartments,
         filters: {
            city: '',
            price: 0,
         }
      };
   },
   computed: {
      filteredApartments()
      {
         console.log(apartments, 'filteredApartments')
         return this.filterByCityName(this.filterByPrice(this.apartments))
      }
   },
   methods: {
      // logger({ city, price })
      // {
      //   console.log(city, price, 'form value')
      // }
      // ,
      filter({ city, price })
      {
         this.filters.city = city;
         this.filters.price = price;

         console.log(city, price, 'form value')
         console.log(this.filters.city, this.filters.price, 'filter')
      },

      filterByCityName(apartments)
      {
         if (!this.filters.city) return apartments

         return apartments.filter(apartment =>
         {
            return apartment.location.city === this.filters.city
         })
      },

      filterByPrice(apartments)
      {
         if (!this.filters.price) return apartments
         return apartments.filter(apartment =>
         {
            return apartment.price >= this.filters.price
         })

      },
   }
};
</script>

<style lang="scss" scoped>
.homepage {
   padding: 0;
}


.apartments-filter {
   /* display: flex;
  flex-wrap: wrap; */
   margin-bottom: 40px;
}
</style>