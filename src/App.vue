<template>
  <div id="app">
    <DrupalEntity :entity="entity" :schema="schema" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    entity: {
      title: 'HelloWorld'
    },
    schema: {
      fields: {
        test: {
          id: 'title',
          type: 'string',
          weight: 0
        }
      }
    }
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
