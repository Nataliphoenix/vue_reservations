<template>
    <div class="wrapper-input">
        <input type="number" min="0" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="custom-input" placeholder="Вартість, від" />

        <!-- <input v-on="listeners" class="custom-input"> -->
    </div>
</template>


<script>
export default {
    name: 'CustomInput',
    props: ['modelValue'],
    emits: ['update:modelValue'],

    // computed: {
    //     listeners()
    //     {
    //         return {
    //             ...this.$attrs,
    //             input: event => this.$emit('input', event.target.value)
    //         }
    //     }
    // }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.wrapper-input {
    position: relative;
    display: inline-flex;
}

.custom-input {
    display: inline-block;
    min-height: 44px;
    width: 349px;
    border: 2px solid $main-color;
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;

    color: $text-color;

    &::placeholder {
        color: inherit;
    }

    &--error {
        border-color: $error;
    }

    &__error {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        font-size: 12px;
        line-height: 1.3;

        color: $error;
    }
}
</style>