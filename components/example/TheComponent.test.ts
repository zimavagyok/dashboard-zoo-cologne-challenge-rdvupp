import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TheComponent from './TheComponent.vue'

describe('TheComponent', () => {
  test('mounts and is still the same', () => {
    expect(TheComponent).toBeTruthy()
    const wrapper = mount(TheComponent, {
      props: {
        modelValue: '',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('gets its starting input value from a prop', async () => {
    const modelValue = 'Thomas'
    const wrapper = mount(TheComponent, {
      props: {
        modelValue,
      },
    })

    const input = wrapper.get('input')
    expect(input.element.value).toBe(modelValue)
  })
})
