<template>
  <Header/>
  <SiderBar/>
  <Index/>
  <Footer/>
</template>

<script>
import Index from './components/Index.vue'
import Header from './components/Layout/Header.vue'
import Footer from './components/Layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Index,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
