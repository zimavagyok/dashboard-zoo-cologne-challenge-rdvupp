import { describe, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import TheAnimalTable from './TheAnimalTable.vue'

describe('TheAnimalTable', () => {
  test('mounts and is still the same', () => {
    expect(TheAnimalTable).toBeTruthy()
    const wrapper = mount(TheAnimalTable, {
      props: {
        animals: [],
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
