<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on: $route.path === '/msite'}" @click="on_isAcitve('/msite')">
      <span class="icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span
      class="guide-item"
      :class="{on: $route.path === '/search'}"
      @click="on_isAcitve('/search')"
    >
      <span class="icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on: $route.path === '/order'}" @click="on_isAcitve('/order')">
      <span class="icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span
      class="guide-item"
      :class="{on: $route.path === '/profile'}"
      @click="on_isAcitve('/profile')"
    >
      <span class="icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "FooterGuide",
  methods: {
    on_isAcitve(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.footer-guide 
  // top-border-1px(#f40);
  border-top 1px solid #cccccc
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;

  .guide-item 
    display: flex;
    flex: 1;
    flex-direction: column; // 纵向排列
    text-align: center;
    width: 25%;

    &.on 
      color: $green;

    span 
      margin-top: 5px;

      i 
        font-size: 22px;

</style>

