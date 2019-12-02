# Vue \<drupal-entity />

Render Drupal Entities and fields with Drupal JSON:API Entities schema support.

_This is a proof of concept, documentation is incomplete._

## Installation

`$ npm install vue-drupal-entity

## Usage

```jsx
<template>
  <drupal-entity :entity="entity" :schema="schema" />
</template>

<script>
import Vue from 'vue'
import VueDrupalEntity from 'vue-drupal-entity'

Vue.use(VueDrupalEntity)

export default {
  data: () => ({
    entity: {
      ...
    },
    schema: {
      ...
    }
  })
}
</script>
```
