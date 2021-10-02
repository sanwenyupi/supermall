<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background: #f6f6f6;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);

    z-index: 11;
  }
  
</style>
