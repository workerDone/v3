<template>
<div>
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.name }}</h1>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data() {
     return {
       msg : 'HelloWorld2'
     }
  },

}
</script>
