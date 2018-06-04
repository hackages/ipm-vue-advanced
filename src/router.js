import Vue from 'vue';
import Router from 'vue-router';
import Model from './v-model/Model';
import CustomDirective from './CustomDirective/CustomDirective';
import RenderProps from './RenderProps/RenderProps';
import Plugin from './Plugin/Plugin.vue';
import Mixins from './Mixins/Mixins.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'v-model',
      component: Model,
    },
    {
      path: '/custom-directive',
      name: 'custom-directive',
      component: CustomDirective,
    },
    {
      path: '/render-props',
      name: 'render-props',
      component: RenderProps,
    },
    {
      path: '/plugin',
      name: 'plugin',
      component: Plugin,
    },
    {
      path: '/mixins',
      name: 'mixins',
      component: Mixins,
    },
  ],
});
