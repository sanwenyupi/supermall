<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        
    }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 2px 1px rgba(100, 100, 100, 0.1);
  }
  .left, .right{
    width: 50px;
  }
  .center{
    flex: 1;
  }
</style>
