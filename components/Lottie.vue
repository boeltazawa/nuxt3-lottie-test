<script setup lang="ts">
import 'vue3-lottie/dist/style.css'
interface Props {
    options: any
    project: boolean
    id?: string
}
const Props = defineProps<Props>()
interface Emits {
  (e: "animCreated", value: any): void
}
const emit = defineEmits<Emits>()
const animationSource = Props.project === true ? Props.options.animationData : Props.options.animationData.default
console.log(animationSource)

const lavContainer = ref()
const onAnimLoad =() => {
  console.log('animation Loaded', animationSource)
  lavContainer.value.stop();
  emit('animCreated', lavContainer.value)
}

</script>
<template>
  <span>
    <client-only>
      <Vue3Lottie v-if="Props.project"
      :id="Props.id ? Props.id : ''"
      renderer="svg"
      :loop="0"
      :animationLink="Props.options.animationData"
      :rendererSettings="Props.options.rendererSettings"
      :style="{display: 'inline-block'}"
      ref="lavContainer"
      :pauseAnimation="true"
      @onAnimationLoaded="onAnimLoad"
      @click="onAnimLoad"
      />
      <Vue3Lottie v-else
      :id="Props.id ? Props.id : ''"
      renderer="svg"
      :loop="0"
      :animationData="Props.options.animationData.default"
      :rendererSettings="Props.options.rendererSettings"
      :style="{display: 'inline-block'}"
      ref="lavContainer"
      :pauseAnimation="true"
      @onAnimationLoaded="onAnimLoad"
      @click="onAnimLoad"
      />
    </client-only>
  </span>
</template>
