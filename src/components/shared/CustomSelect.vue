<template>
    <select v-model="city" @change="handleChange" class="custom-select">
        <option disabled value="">Місто</option>
        <option v-for="item in formattedItems" :key="item.value" :value="item.value">{{ item.label }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        items: {
            type: Array,
            required: true,
        },
        modelValue: {
            type: String,
            required: true
        },
    },
    emits: ['update:modelValue'],
    computed: {
        formattedItems()
        {
            return this.items.map(item =>
            {
                return typeof item === 'object'
                    ? item
                    : { value: item, label: item }
            })
        },
        city: {
            get()
            {
                return this.modelValue;
            },
            set(value)
            {
                this.$emit('update:modelValue', value)
            },
        }
    },
    methods: {
        handleChange()
        {
            this.city = event.target.value;
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.custom-select {
    display: inline-block;
    padding: 8px 15px;

    height: 44px;
    max-width: 220px;
    width: 100%;

    font-size: 18px;
    outline: none;
    line-height: 1.16;

    cursor: pointer;
    border: 2px solid $main-color;
    color: $text-color;
}
</style>