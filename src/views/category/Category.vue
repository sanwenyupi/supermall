<template>
    <div id="category">
        <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
        <div class="content">
          <category-left :categories="categories" @selectItem="selectItem"/>
          <scroll id="tab-content" :data="[categoryData]">
            <div>
              <category-content :subCategories="showSubcategory" />
              <tab-control :titles="['综合', '新品', '销量']"
                       @tabClick="tabClick" />
              <category-detail :category-detail="showCategoryDetail" />
            </div>
          </scroll>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar.vue'
import CategoryLeft from './childComps/CategoryLeft.vue'
import {getCategory, getCategoryDetail, getSubcategory} from '../../network/category'

import Scroll from '../../components/common/scroll/Scroll.vue'
import CategoryContent from './childComps/CategoryContent.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import CategoryDetail from './childComps/CategoryDetail.vue'

  export default {
		name: "Category",
    components: {
		  NavBar,
      TabControl,
      Scroll,
      CategoryLeft,
      CategoryContent,
      CategoryDetail
    },
    data() {
		  return {
		    categories: [],
        categoryData: {},
        currentIndex: -1,
        currentType: 'pop'
      }
    },
    created() {
		  // 1.请求分类数据
      this._getCategory()
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		    if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods: {
		  _getCategory() {
		    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },
      _getCategoryDetail(type) {
		    // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
		    getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          console.log(res);
		      this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      /**
       * 事件响应相关的方法
       */
      selectItem(index) {
        this._getSubcategories(index)
      },
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        console.log(this.currentType);
      }
    }
	}
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: relative;
    z-index: 10;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
  }
</style>
