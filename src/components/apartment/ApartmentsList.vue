<template>
    <ContainerMain>
        <slot name="title">Добірка згідно вибору</slot>
        <div class="apartments-list">
            <!-- <ApartmentsItem v-for="{ id, descr, rating, imgUrl, price } in items" :key="id" :descr="descr" :rating="rating"
                :imgSrc="imgUrl" :price="price" class="apartments-list__item" /> -->

            <template v-for="apartment in items">
                <slot name='apartment' v-bind="apartment"></slot>
            </template>

        </div>
    </ContainerMain>
</template>

<script>

// import ApartmentsItem from './ApartmentsItem.vue';
import ContainerMain from '../shared/ContainerMain.vue'

export default {
    name: 'ApartmentsList',
    components: {
        // ApartmentsItem,
        ContainerMain,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

}
</style>