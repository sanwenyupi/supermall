<template>
  <div class="block">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in topImages">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    topImages: {
      type: Array,
      default(){
        return []
      }
    },

  },
  methods: {

  },
  data() {
    return {

    }
  },
}
</script>

<style>
  .block img{
    width: 100%;
  }
</style>