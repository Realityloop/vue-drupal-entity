<template>
  <component :is="component" :data="data" :schema="schema">
    <strong>Component missing: <code>{{ field }}</code></strong>
  </component>
</template>

<script>
export default {
  name: 'DrupalEntityField',

  props: {
    data: {
      type: [Object, String],
      required: true
    },
    schema: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    component() {
      if (!this.field || typeof this.$options.components[this.field] !== 'undefined') {
        return this.field
      }
      return 'div'
    },

    field() {
      if (typeof this.schema.type === 'undefined') return false

      const prefix = 'DrupalEntityField'
      const field = this.schema.type.replace(/((\b|_)[a-z])/gi, (string) =>
        string.toUpperCase().replace('_', '')
      )
      return prefix + field
    }
  }
}
</script>
