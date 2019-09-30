<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'
export default {
  components:{Nav},
  methods:{
    adapScreen(){
      document.documentElement.style.fontSize = window.innerWidth/750*32+'px';
    }
  },
  mounted(){
    window.onresize = ()=>{
      this.adapScreen();
    }
    this.adapScreen();
  }
}
</script>

<style lang="scss">
  #app{
    font-family: "museo-sans","Helvetica Neue",Helvetica,Arial,sans-serif,sans-serif;
    max-width: 700px;
    margin: 0 auto;
  }
</style>
