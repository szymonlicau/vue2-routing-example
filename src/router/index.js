import VueRouter from 'vue-router';

import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },

  {
    path: '/posts',
    component: () => import('@/views/PostsPage.vue'),
    children: [
      {
        path: '',
        name: 'Posts',
        component: () => import('@/views/PostsListPage.vue')
      },
      {
        path: ':postId',
        name: 'Post',
        component: () => import('@/views/PostPage.vue'),
        props: true
      }
    ]
  },

  {
    path: '/about',
    name: 'About',
    component: () => import ('@/views/AboutPage.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import ('@/views/ContactPage.vue')
  },

  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
