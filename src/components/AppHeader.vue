<template>
   <header class="header">
      <ContainerMain>
         <Logo />
      </ContainerMain>
   </header>
</template>

<script>

import ContainerMain from './shared/ContainerMain.vue';
import Logo from './LogoEl.vue'

export default {
   name: 'AppHeader',
   components: {
      ContainerMain,
      Logo,
   }

}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/variables.scss';

.header {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;

   padding: 16px 0;
   background: $secondary-color;
}
</style>