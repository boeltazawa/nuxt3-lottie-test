<script setup lang="ts">
import * as logoAnimationData from '~/assets/anim/boel.json'

const defaultOptions = { animationData: logoAnimationData }

const animation = ref(null)
const handleAnimation = (anim: any) => {
    animation.value = anim
    anim.goToAndPlay(0.,true)
}
</script>

<template>
    <span class="gheader__logo">
        <p>animationData</p>
        <LazyLottie :options="defaultOptions" :project="false" @animCreated="handleAnimation" class="logo" />
    </span>
</template>

<style lang="scss">
.gheader{
    width: 100%;
    &__logo{
        display: block;
        margin: 10px auto;
        transition: transform 0.4s ease-out;
        z-index:300;
    }
}
.logo{
    height: 36px;
    display: block;
}
</style>
