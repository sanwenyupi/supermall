<template>
    <div class="tab-bar-item" @click='itemClick'> 
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
          path: String,
          activeColor: {
              type: String,
              default: 'red'
          }
        },
        data() {
            return {
                // isActive: true
            }
        },
        computed: {
            isActive(){
                return this.$route.path == this.path
            },
            activeStyle(){
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick(){
                this.$router.push('/location').catch(err => { console.log(err)})
                this.$router.replace(this.path)
            }
        },
    }
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px; 
    font-size: 14px;
}
.tab-bar-item img{
    width: 20px;
    margin-top: 3px;
} 
</style>
