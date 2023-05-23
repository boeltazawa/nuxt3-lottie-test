<template>
  <div>
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
.page, .layout, .tips {
    &-leave-active {
        transition: all .3s ease;
    }
    &-leave-to {
      transform: translateY(-15px);
      opacity: 0;
    }
    &-enter-from, &-enter {
      transform: translateY(15px);
      opacity: 0;
    }
    &-enter-active {
      transition: all .3s ease;
    }
  }
</style>