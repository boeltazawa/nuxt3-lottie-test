<script setup lang="ts">
import { Projects } from "~/types/projects";
import axios from 'axios'
definePageMeta({
    layout: 'page',
})


const { data } = await useMicroCMSGetListDetail<Projects>({
    endpoint: 'projects',
    contentId: 'tomamu-wedding',
    queries: {
        fields: 'subject',
    },
});

// const detail = data._value

// const { data: details, error }: any = await useFetch(`/api/detail`, {
//     params: { slug: 'tomamu-wedding' },
// });
// const detail = details._value

// let defaultOptions = { animationData: '' }
// if(detail.subjects.isTitleAnimation) {
//     defaultOptions = {animationData: detail.subject.animationData.url}
// }
// let defaultOptions = { animationData: '' }
// if(data.subject.isTitleAnimation) {
//     defaultOptions = {animationData: data.subject.animationData.url}
// }

const animation = ref(null)
const handleAnimation = (anim: any) => {
    animation.value = anim
    anim.goToAndPlay(0.,true)
}

</script>
<template>
    <div class="content">
        <LazyHeaderLogo />
            <p>animationLink</p>
            <ul>
                <li v-for="project in data?.subject" :key="project">
                    {{ project }}
            </li>
        </ul>
            
            <!-- <LazyLottie :options="{animationData: data.subject.animationData.url}" :project="true" @animCreated="handleAnimation" class="projects__ttl-anim" /> -->
        <!-- <template v-if="detail.subject.isTitleAnimation">
            <p>animationLink</p>
            <LazyLottie :options="defaultOptions" :project="true" @animCreated="handleAnimation" class="projects__ttl-anim" />
        </template> -->
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