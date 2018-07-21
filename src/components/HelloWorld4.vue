<template>
<div>
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.name }}</h1>
</div>
</template>

<script>
export default {
  name: 'HelloWorld4',
  data() {
     return {
       msg : 'HelloWorld4'
     }
  },

}
</script>
