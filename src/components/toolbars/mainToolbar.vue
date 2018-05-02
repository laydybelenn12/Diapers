<template>
  <q-layout-header>
    <q-tabs>
      <!-- Tabs - notice slot="title" -->
      <q-route-tab default count="5" slot="title"  icon="message" to="/" />
    </q-tabs>
  </q-layout-header>
</template>

<script>
//  import { } from 'quasar';

import {
  QTabs,
  QTab,
  QTabPane,
  QRouteTab
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
    QTabs,
    QTab,
    QTabPane,
    QRouteTab
  },
  created () {
    this.userName = localStorage.getItem('userName')
  }
}
</script>

<style lang="stylus">
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom : 5px;
  margin-top:5px;
}
.qitemMenu:hover{
  color :red
  background:"#DCDCDC"
  cursor :pointer
}
</style>
