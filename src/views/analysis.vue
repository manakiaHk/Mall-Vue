<template>
  <div>
    <div>
      <h2>{{msg}}</h2>
      <hr/>
      <h3>{{cont_get}}</h3>
    </div>

    <div>
      <button @click="add(10)">+</button>
      <button @click="reduce(2)">-</button>
    </div>
  </div>
</template>

<script>

  import { mapState,mapMutations,mapGetters } from 'vuex';
  export default  {
    data() {
      return{
        msg :"hello vuex"
      }
    },

    //访问状态
    computed: {
      ...mapState(["msg","count"]),
      ...mapGetters(["cont_get"])
    },
    ///操作状态
    methods:mapMutations([
      'add',
      'reduce'
    ]),

  }
</script>

<style scoped>

  #table{
    background-color: white;
  }
  #carousel-item {
    background-color: darkgreen;
  }


</style>
