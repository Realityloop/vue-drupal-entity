<template>
  <div>
    <drupal-entity-field v-for="field of fields" :key="field.id" :data="entity[field.id]" :schema="field" />
  </div>
</template>

<script>
import DrupalEntityField from '../DrupalEntityField'

export default {
  name: 'DrupalEntity',

  components: {
    DrupalEntityField
  },

  props: {
    entity: {
      type: Object,
      default: () => ({})
    },
    schema: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    fields() {
      const fields = []

      for (const item in this.schema.fields) {
        if (typeof this.schema.fields[item].type === 'undefined') continue
        fields.push(this.schema.fields[item])
      }

      return fields.sort((a, b) => {
        return a.weight - b.weight
      })
    }
  }
}
</script>
