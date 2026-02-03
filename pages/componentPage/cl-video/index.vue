<template>
  <cl-video
    :src="src"
    posterType="path"
    object-fit="contain"
    style="width: 400px; height: 300px"
    @getPoster="getPoster"
    @play="play"
  ></cl-video>
</template>

<script setup>
const src =
  'https://code-life-1302946402.cos.ap-chongqing.myqcloud.com/other/video/strawberry.mp4'

const getPoster = (poster) => {
  console.log(poster, 'poster')
}
const play = () => {
  console.log('play')
}
</script>

<style lang="scss" scoped></style>
