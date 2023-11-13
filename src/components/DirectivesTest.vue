<template>
    <div v-if="isVisible">
        <h1>Directives</h1>
        <ul>
            <template v-for="fruit in fruits">
                <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
            </template> 
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'DirectivesTest',
        data(){
            return {
                isVisible: true,
                fruits:['kiwi', 'banana', 'apple']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

