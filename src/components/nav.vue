<template>
  <div class="container">
    <div class="nav-horizon" @click="handleNavClick">
      <div class="item" tag="tech">技术博客</div>
      <div class="item" tag="travel">旅行日记</div>
      <div class="item" tag="contact">联系</div>
    </div>
    <div class="nav-verticle" @click="handleNavClick">
      <div class="item" tag="tech">技术博客</div>
      <br>
      <div class="item" tag="travel">旅行日记</div>
      <br>
      <div class="item" tag="contact">联系</div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      articleList:[

      ],
    }
  },
  methods:{
    handleNavClick(ev){
      let tag = ev.target.getAttribute('tag');
      switch(tag){
        case 'tech':
        if(this.$route.path != '/'){
          this.$router.push('/')
        };
        break;
        case 'travel':
        if(this.$route.path != '/travel'){
          this.$router.push('/travel')
        };
        break;
        default:

      }
      
    },
    filterArticle(tag){

    }
  }

}
</script>

<style scoped lang="scss">


.container{
  padding: 10px 0;
  border-bottom:1px solid #ccc;
  font-size: 16px;
  line-height: 1.6;
}
.nav-verticle{
  display: none;
  .item{
      display: inline-block;
      border-bottom:2px solid transparent;
      cursor: pointer;
  }
  .item:hover{
    transition: 1.6s;
    border-color:rgb(24, 127, 223);
  }
}
.nav-horizon{
  display: block;
  text-align: right;
  .item{
    display: inline-block;
    margin: 0 10px;
    border-bottom:2px solid transparent;
    cursor: pointer;
  }
  .item:hover{
    transition: 1.6s;
    border-color:rgb(24, 127, 223);
  }
}


@media screen and (max-width: 420px){
  .nav-horizon{
    display: none ;
  }
  .nav-verticle{
    display: block ;
    
  }
  .container{
    padding:0.5rem 0;
    border-bottom:1px solid #ccc;
    font-size: 0.8rem;
  }
}
</style>
