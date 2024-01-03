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
import apartments from '../components/apartment/apartments'

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

         console.log(this.apartments, '-----this.apartments')

         return this.filterByCityName(this.filterByPrice(this.apartments))
      }
   },
   methods: {
      // logger(value)
      // {
      //    console.log(value, '---form value')
      // },
      filter({ city, price })
      {
         this.filters.city = city
         this.filters.price = price

         console.log(city, price, 'filter__form value')
         console.log(this.filters.city, this.filters.price, 'filter__filter')
      },
      filterByCityName(apartments)
      {
         // console.log(this.filters.city, '----filterByCityName')
         if (!this.filters.city)
         {
            console.log(this.filters.city, '----filterByCityName')
            return apartments
         }

         return apartments.filter(apartment =>
         {
            console.log(this.filters.city, '+++++filterByCityName')
            return apartment.location.city.toLowerCase() === this.filters.city.toLowerCase()
         })
      },
      filterByPrice(apartments)
      {
         console.log(this.filters.price, '-----filterByPrice')

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