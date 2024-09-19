<<<<<<< HEAD
<script lang="ts">
import tempResultSet from '../assets/data.json'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      theData: {},
      // tempData: {},
      resultSet: tempResultSet,
      activeName: '1',
      currentPage: 1,
      total: tempResultSet.length,
      imgURL: 'https://media.nfsacollection.net/',
      query: 'https://api.collection.nfsa.gov.au/search?limit=25&query=',
      searchString: 'lobby',
      flag: false
    }
  },

  methods: {
    fetchData() {
      this.$data.flag = true
    }
  }
}
</script>

<template>
  <div class="search">
    <!-- <div v-if="!flag">
      <h1 class="green">{{ msg }}</h1>

      <input v-model="searchString" placeholder="query" />
      <button @click="fetchData">fetch data</button>

      <p>Total: {{ total }}</p>
    </div> -->

    <ul class="list-v">
      <!-- <el-collapse v-model="activeName" accordion> -->
      <!-- <li   :key="index"> -->
      <template v-for="(result, index) of resultSet" :key="index">
        <template v-if="result['preview'] && result['preview'][0]">
          <div style="margin-top: 2vh;">
            <p class="title">{{ result['title'] }}</p>
            <p class="content">{{ result['name'] }}</p>
            <img class="c-img" v-if="result['preview'] && result['preview'][0]"
              v-bind:src="imgURL + result['preview'][0]['filePath']" v-bind:alt="result['name']"
              v-bind:title="result['name']" />
          </div>
        </template>
      </template>
      <!-- </el-collapse> -->
    </ul>
  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.list-v {
  width: 100%;
  padding: 0;
}

.title {
  font-size: 1.5rem;
  display: block;
  /* padding: 1vh 0 0 0; */
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.content {
  font-size: 0.8rem;
  display: block;
  padding: 0;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.c-img {
  width: 50vw;
  display: block;
  margin: 0 auto;
  margin-left: 23vw;
}
</style>
=======
// <script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
// </script>
<script lang="ts">
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
     data() {
    return {
      theData: {}
    }
  },
    methods: {
        fetchData() {
          // use a piece of dynamic data to modify the API call
          let query = 'https://api.collection.nfsa.gov.au/search?query=' + this.msg;
          console.log(query);
            fetch(query)
            
                .then(response => {
                   // response.json().then(res => console.log(res));
                   response.json().then(res => this.$data.theData = res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
</script>
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <button @click="fetchData">Click Me!</button>

      <ul class="list-v">
       <!--<li v-for="result in theData.results" :key="result.title"> 
        {{ result.title }} 
        {{ result.name }} 
      </li> -->
    </ul> 
  </div> 
</template>
>>>>>>> 1b841f67b4622d2861e6028d5d48f4438f0b666f
