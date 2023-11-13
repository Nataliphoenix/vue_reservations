<template>
    <button v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ButtonEl",
    props: {
        type: {
            type: String,
            default: "button",
        },
        outlined: {
            type: Boolean,
            default: false,
        }
    }
} 
</script>

<style lang="scss" scoped> @import '../../assets/scss/variables.scss';

 .btn {
     position: relative;
     display: inline-block;
     padding: 8px 15px;
     min-width: 220px;
     height: 44px;
     line-height: 21px;
     text-align: center;
     font-size: 18px;
     font-family: Montserrat, sans-serif;

     cursor: pointer;
     border: 1px solid transparent;
     color: $secondary-text-color;
     background: $main-color;

     transition: background-color 0.4s, color 0.4s;

     &:hover {
         background: $secondary-text-color;
         color: $main-color;
         border: 1px solid $main-color;
     }

     &--outlined {
         background: none;
         border: 1px solid $main-color;
         color: $main-color;
     }

     &__content {
         &--hidden {
             opacity: 0;
         }
     }

     &__loader {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
     }
 }
</style>