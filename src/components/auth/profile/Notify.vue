<script lang="ts" setup>
    import {ref} from 'vue'

    const message = ref()

    const toogle = async() => {
        message.value = alert('sdasdasa')
    }


</script>

<template>
    <section class="bg-red-800 flex justify-center items-center">
        <button class="bg-white px-1" @click="toogle">click me</button>
    </section>
</template>