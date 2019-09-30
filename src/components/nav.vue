<template>
  <div class="nav-wrapper">
    <div class="nav-list" @click="handleNavClick">
      <div :class="`item ${isActive('all')}`" tag="all">全部文章</div>
      <div :class="`item ${isActive('tech')}`" tag="tech">技术博客</div>
      <div :class="`item ${isActive('travel')}`" tag="travel">旅行日记</div>
      <div class="item" tag="contact">联系</div>
    </div>
    <div class="contact-me" v-show="contactVisible">
      <span class="close" @click="contactVisible = false;">&times;</span>
      <div class="title">联系博主:</div>
      <div>
        <span>Email:</span>
        <span>hajerbin@foxmail.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
      contactVisible: false
    };
  },
  methods: {
    handleNavClick(ev) {
      let tag = ev.target.getAttribute("tag");
      if (tag === "contact") {
        this.contactVisible = true;
      } else {
        this.$store.commit("update_articleType", tag);
        this.$router.push({
          path: "/",
          query: {
            type: tag
          }
        });
      }
    },
    isActive(tag) {
      return this.$store.state.articleType === tag ? "active" : "";
    }
  },
  mounted() {
    //update store base on path.query
    var path = this.$route.path;
    var type = this.$route.query.type || "all";
    if (path === "/") {
      this.$store.commit("update_articleType", type);
    }

    //设置导航固定栏高度
    var height = document.querySelector(".nav-wrapper").clientHeight;
    document.body.style.paddingTop = height + "px";
  }
};
</script>

<style scoped lang="scss">
.nav-wrapper {
  position: fixed;
  top: 0;
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  line-height: 1.6;
  width: 700px;
}
.contact-me {
  .close {
    font-size: 20px;
    padding: 4px;
    cursor: pointer;
    float: right;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin: 4px 0;
  }
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.3);
  box-sizing: border-box;
  width: 50%;
  position: fixed;
  top: 10vw;
  left: 50%;
  transform: translateX(-50%);
  padding: 18px 16px;
  
  
}
</style>
