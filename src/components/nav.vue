<template>
<!-- 需要让绝对定位元素继承相对元素的宽度：100%，fixed会继承body的宽。 -->
  <div style="position:relative;">
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

    //设置固定
    var height = document.querySelector(".nav-wrapper").clientHeight;
    document.querySelector("#app").style.paddingTop = height + "px";
  }
};
</script>

<style scoped lang="scss">
.nav-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  line-height: 1.6;
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
  color: rgb(155, 78, 78);
  width: 60%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(202, 202, 202, 0.9);
  padding: 10px;
  border-radius: 5px;
  position: fixed;
  top: 20vw;
}
</style>
