/**
 * Stub the `nuxt-link` component for testing to avoid problems where vue3 does not
 * understand what `nuxt-link` / `NuxtLink` is:
[Vue warn]: Failed to resolve component: nuxt-link
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
  at <TheComponent modelValue="Thomas" ref="VTU_COMPONENT" >
  at <VTUROOT>
*/
import { config } from '@vue/test-utils'

config.global.stubs = {
  NuxtLink: {
    template: '<a style="cursor:pointer;"><slot>NuxtLink Test Fake</slot></a>',
  },
}
