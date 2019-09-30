<template>
  <div class="container">
    <div class="slogan">
      <img src="../assets/glass.png" alt />
      <h2 class="word">真理流离于历史，历史并不总是真理！</h2>
    </div>
    <div class="article-list" @click="handleItemClick">
      <div class="article" v-for="(item,index) in articles" :key="index">
        <div class="left">
          <img :src="item.coverImg" alt="封面缺失" />
        </div>
        <div class="right">
          <div class="date">发布于: {{new Date(item.createDate).toLocaleDateString()}}</div>
          <div class="title" :data-id="item.id" v-text="item.title"></div>
          <div class="desc" v-text="item.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from "@/api.js";
export default {
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.getArticleList();
  },
  methods: {
    handleItemClick(ev) {
      let className = ev.target.className;
      let id = ev.target.dataset.id;
      if (className === "title") {
        console.log(id);
        this.$router.push({
          path: "/detail",
          query: {
            id
          }
        });
      }
      ev.stopPropagation();
    },
    genTypeParams(){
      var type = this.$store.state.articleType;
      if(type === 'all'){
        //如果是所有类型，则传空字符。
        type = '';
      }
      return  type ? {type}:{};
    },
    getArticleList(type) {
      var url = "/article-list";
      var params = this.genTypeParams();
      ajax({
        url,
        params,
        callback: res => {
          this.articles = res;
        }
      });
    }
  },
  watch:{
    type(newVal,oldVal){
      //重新获取文章列表。
      this.getArticleList();
    }
  },
  computed:{
    type(){
      return this.$store.state.articleType;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 8px;
}
</style>
