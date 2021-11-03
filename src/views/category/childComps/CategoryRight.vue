<template>
    <div class="right">
        3
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
          itemName: {
            type: String,
            default(){
              return ''
            }
          },
          currenIndex: {
            type: Number,
            default(){
              return 0
            }
          }
        }
    }
</script>

<style scoped>
    .right{
      flex: 1;
    }
</style>
