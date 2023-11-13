<template>
    <select v-model="selected" class="custom-select">
        <!-- <select v-on="listeners" class="custom-select"> -->
        <option v-for="item in formatedItems" :key="item.value" :value="item.value" :selected="item.selected">{{
            item.label }}
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
        }
    },
    // emits: ["update:selected"],
    computed: {
        // listeners()
        // {
        //     return {
        //         ...this.$attrs,
        //         input: event => this.$emit('input', event.target.value)
        //     }
        // },
        formatedItems()
        {
            return this.items.map(item =>
            {
                return typeof item === 'object' ? item : { value: item, label: item }
            })
        }
    }
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