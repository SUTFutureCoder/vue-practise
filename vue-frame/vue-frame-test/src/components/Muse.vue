<template>
  <mu-card>
    <mu-card-media>
      <mu-date-picker hintText="竖屏模式选择"/> <br/>
      <mu-date-picker mode="landscape" hintText="横屏模式选择"/> <br/>
      <mu-time-picker hintText="12小时制"/><br/>
      <mu-time-picker hintText="24小时制" format="24hr"/><br/>
      <mu-time-picker hintText="横屏显示" mode="landscape"/><br/>
      <mu-date-picker hintText="不可用" disabled/> <br/>
    </mu-card-media>
    <mu-card-actions>
      <mu-raised-button label="屠龙宝刀，点击就送" primary/>
    </mu-card-actions>
  </mu-card>
</template>

<script>
export default {
  name: 'muse',
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  test () {
    return this.$store.state.count
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  .mu-card{
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2px;
  }
</style>
