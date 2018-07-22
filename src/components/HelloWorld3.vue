<template>
<div>
    <h1>{{ msg }}</h1>
</div>
</template>

<script>
// import ApiSepvice from '../core/api/api'
export default {
  name: 'HelloWorld3',
  data() {
     return {
       msg : 'HelloWorld3'
     }
  },
   methods: {
    // getSrmColor: ApiSepvice('dsfgf')
  },
  created: function() {
  this.$http.get('https://jsonplaceholder.typicode.com/posts/1f')
  .then(data => this.msg = data.body)

  }
  }

</script>
