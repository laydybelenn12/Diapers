<template>
  <section class="section">
    <section-title>{{ title }}</section-title>
    <div class="row">
      <slot />
    </div>
  </section>
</template>

<script>
import SectionTitle from '../sectionTitle'

export default {
  name: 'generalSection',
  components: {
    SectionTitle
  },
  props: {
    title: String
  }
}
</script>

<style>
</style>
