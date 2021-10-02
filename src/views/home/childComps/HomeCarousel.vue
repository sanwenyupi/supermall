<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banners: Array
  },
  methods: {
    imageLoad(){
      if(!this.isLoad){
        this.$emit('carouselImageLoaded')
        this.isLoad = true
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
}
</script>

<style>
  .block img{
    width: 100%;
  }
</style>