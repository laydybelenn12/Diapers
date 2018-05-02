<template>
  <q-layout view="lHh Lpr lFf">
    <main-toolbar />
    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script>
import MainToolbar from '../components/toolbars/mainToolbar'

export default {
  name: 'LayoutMain',
  components: {
    MainToolbar
  }
}
</script>

<style>
</style>
