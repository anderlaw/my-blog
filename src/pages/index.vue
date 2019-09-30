<template>
<div>
    <div class="slogan">
      <img src="../assets/glass.png" alt="">
      <h2 class="word">真理流离于历史，历史并不总是真理！</h2>
    </div>
    <div class="article-box" @click="handleItemClick">
        <div class="article" v-for="(item,index) in articles" :key="index">
        <div class="left">
          <img :src="item.coverImg" alt="封面缺失">
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
import ajax from '@/api.js'
export default {
  data(){
    return{
      articles:[]
    }
  },
  mounted(){
    this.getArticleList(this.$route.query.type);
  },
  methods:{
      handleItemClick(ev){
          let className = ev.target.className;
          let id = ev.target.dataset.id;
          if(className === 'title'){
              console.log(id);
              this.$router.push({
                  path:'/detail',
                  query:{
                      id
                  }
              })
          }
          ev.stopPropagation();
      },
      getArticleList(type){
        var url = '/article-list';
        var params = {};
        if(type){
          params.type = type;
        }
        ajax({
          url,
          params,
          callback:(res)=>{
            this.articles = res;
          }
        })
      }
  }

}
</script>

<style scoped lang="scss">
    .slogan{
      margin:50px 0;
      text-align: center;
      font-family: cursive;
      .word{
        margin-top: 30px;
        font-size: 22px;
      }
      img{
        width: 66%;
      }
    }
    .article-box{
      color: #464a4d;
      .article{
        margin-bottom:10px;
        box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
        border-radius: 8px;
        padding: 12px 16px;

        overflow: hidden;
        line-height: 20px;
        .left{
          float: left;
          font-size: 13px;
          width:20%; 
          img{
            width: 100%;
            vertical-align: middle;
          }
        }
        .right{
          overflow: hidden;
          font-size: 14px;
          color: #3C4043;
          padding-left: 16px;
          line-height: 1.6;
          .title{
            color: #1967D2;
            font-size: 16px;
            display: inline-block;
            cursor: pointer;
            padding: 4px 0;
          }
        }
      }
    }
    @media screen and (max-width:420px) {
      .slogan{
          margin:1rem 0;
          .word{
            margin-top: 0.8rem;
            font-size: 1.1rem;
          }
      }
      .article-box{
        .article{
          .right{
            font-size: 0.8rem;
          }
        }
        
      }
    }
</style>
