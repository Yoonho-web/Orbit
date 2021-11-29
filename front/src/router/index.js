import Vue from "vue";
import VueRouter from "vue-router";
import MainView from '@/views/MainView.vue';
import IntroduceView from '@/views/IntroduceView.vue';
import MusicView from '@/views/MusicView.vue';
import PhotoView from '@/views/PhotoView.vue';


Vue.use(VueRouter);

const routes = [
  //MainPageView
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  //IntroduceView
  {
    path: '/introduce',
    name: 'IntroduceView',
    component: IntroduceView
  },
  {
    path: '/music',
    name: 'MusicView',
    component: MusicView
  },
  {
    path: '/photo',
    name: 'PhotoView',
    component: PhotoView
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
