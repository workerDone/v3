<template>
<div>
    <h1>{{ msg }}</h1>
    <p>{{hello}}</p>
</div>
</template>

<script >
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Fpp extends Vue {

  msg = 123

  mounted () {
    this.greet()

    setTimeout(() => {
      this.joinPat()
    },3000)
  }

  get hello() {
    return 'dfghjhgfddfgh'
  }

  get computedMsg () {
    return 'computed ' + this.msg
  }

  joinPat() {
    this.msg = 88888888;
  }

  greet () {
    this.msg = 2;
  }
}
</script>
