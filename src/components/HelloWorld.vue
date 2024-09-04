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
       <li v-for="result in theData.results" :key="result.title"> 
        {{ result.title }} 
        {{ result.name }} 
      </li> 
    </ul> 
  </div> 
</template>