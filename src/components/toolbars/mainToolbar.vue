<template>
  <q-layout-header>
    <q-toolbar
      color="primary"
    >
    <q-toolbar-title>
        <img height="150px" src="statics/logo_baby.png">
      </q-toolbar-title>
    </q-toolbar>
    <section class="col-100 text-center">
      <q-btn-group
        flat
        class="center"
      >
      <q-btn
        text-color ="pink-4"
        label="Home"
        @click="clickHandler1"
      />
      <q-btn
        text-color ="pink-4"
        label="Nosotros"
        @click="clickHandler2"/>
      <q-btn
        text-color ="pink-4"
        label="Productos"
        @click="clickHandler3"/>
      <q-btn
        text-color ="pink-4"
        label="Pañales"
        @click="clickHandler3"/>
      <q-btn
        text-color ="pink-4"
        label="Ayuda"
        @click="clickHandler3"/>
      <q-btn
        text-color ="pink-4"
        label="Contacto"
        @click="clickHandler3"/>
    </q-btn-group>
    </section>
  </q-layout-header>
</template>

<script>
//  import { } from 'quasar';

import {
  QBtnGroup,
  QBtn,
  QPopover,
  QBtnDropdown,
  QItem,
  QItemMain,
  QItemTile,
  QItemSeparator,
  QItemSide
} from 'quasar'

export default {
  name: 'mainToolbar',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    toggleSidebar () {
      global.eventHub.$emit('toggleSidebar')
    },
    logout () {
      localStorage.clear('isLogin')
      localStorage.clear('userName')
      window.location.reload()
    },
    go (to) {
      this.$router.push(to)
    }
  },
  components: {
    QBtnGroup,
    QBtn,
    QPopover,
    QBtnDropdown,
    QItem,
    QItemMain,
    QItemTile,
    QItemSeparator,
    QItemSide
  },
  created () {
    this.userName = localStorage.getItem('userName')
  }
}
</script>

<style lang="stylus">
.col-100 {
    width: 100%;
}

.q-layout-header {
  box-shadow: none
}

.qitemMenu:hover{
  color :red
  background:"#DCDCDC"
  cursor :pointer
}
</style>
