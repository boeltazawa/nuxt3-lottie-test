<script setup lang="ts">
import axios from 'axios'
definePageMeta({
    layout: 'page',
})

const { data: details, error }: any = await useLazyFetch(`/api/detail`, {
    params: { slug: 'tomamu-wedding' },
});
const detail = details._value

let defaultOptions = { animationData: '' }
if(detail.subject.isTitleAnimation) {
    defaultOptions = {animationData: detail.subject.animationData.url}
}

const animation = ref(null)
const handleAnimation = (anim: any) => {
    animation.value = anim
    anim.goToAndPlay(0.,true)
}

</script>
<template>
    <div class="content">
        <LazyHeaderLogo />
        <template v-if="detail.subject.isTitleAnimation">
            <p>animationLink</p>
            <LazyLottie :options="defaultOptions" :project="true" @animCreated="handleAnimation" class="projects__ttl-anim" />
        </template>
    </div>
</template>
<style>
.content{
    margin: 0 auto;
}
.projects__ttl-anim{
    display: block;
    height: 36px;
    margin-top: 8px;
}
</style>