<template>
    <form class="form" @submit.prevent="handleSubmit">
        <CustomSelect v-model="city" :items="cities" class="form__select" />
        <CustomInput v-model="price" />
        <SubmitButton type='submit' class="form__submit"> Підбір житла </SubmitButton>
    </form>
</template>

<script>

import CustomInput from '../shared/CustomInput.vue';
import CustomSelect from '../shared/CustomSelect.vue';
import SubmitButton from '../shared/ButtonEl.vue';

export default {
    name: 'ApartmentFilterForm',
    components: {
        CustomInput,
        CustomSelect,
        SubmitButton,
    },
    data()
    {
        return {
            city: '',
            price: '',
        }
    },
    computed: {
        cities()
        {
            return [
                { value: '', label: 'Місто', selected: true },
                'Kyiv',
                'Odesa',
                'Poltava',
                'Kharkiv',
                'Dnipro',
                'Lviv',
                'Kherson',
                'Mariupol',
            ];
        }
    },
    methods: {
        handleSubmit()
        {
            this.$emit('submit', {
                city: this.city,
                price: this.price,
            })
            console.log(this.city, this.price, 'handleSubmit')
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    display: flex;

    &__select {
        margin-right: 30px;
    }

    &__submit {
        margin-left: auto;
    }
}
</style>