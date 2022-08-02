// CSS for tailwind, remainder of configuration happens via vite
import '../assets/css/tailwind.css';
import { action } from '@storybook/addon-actions';
import { app } from '@storybook/vue3';

// Stub the `nuxt-link` / `NuxtLink` component for storybook stories. It will render as an anchor `a` tag
// with a slot for arbitrary content. On click it will log the `action` with the `to` target so that the
// end-user can see what the link would've directed to.
app.component('NuxtLink', {
  props: ['to'],
  methods: {
    log() {
      action('clicked link to target:')(this.to)
    },
  },
  template: '<a @click="log()" style="cursor:pointer;"><slot>NuxtLink Storybook Fake</slot></a>',
});

export const parameters = {
  // automatically display different pickers in the storybook actions menu
  // for some types. See more here: https://storybook.js.org/docs/vue/essentials/controls#custom-control-type-matchers
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
