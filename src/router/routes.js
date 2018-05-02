import lazyLoading from './lazyLoading'

export default [
  {
    path: '/',
    component: lazyLoading('index'),
    name: 'home'
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
