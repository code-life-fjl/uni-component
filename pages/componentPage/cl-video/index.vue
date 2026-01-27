<template>
  <cl-video
    :src="src"
    :posterQuality="1"
    posterType="path"
    object-fit="contain"
    style="width: 400px; height: 300px"
  ></cl-video>
</template>

<script setup>
const src =
  'https://code-life-1302946402.cos.ap-chongqing.myqcloud.com/other/video/strawberry.mp4'
</script>

<style lang="scss" scoped></style>
