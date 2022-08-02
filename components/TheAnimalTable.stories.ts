import type { Story } from '@storybook/vue3'
import { fakeAnimal } from '../helpers/fakeAnimal'
import TheAnimalTable from './TheAnimalTable.vue'

export default {
  title: 'TheAnimalTable',
  component: TheAnimalTable,
}

const Template: Story = args => ({
  components: { TheAnimalTable },
  setup() {
    return { ...args }
  },
  template: '<the-animal-table :animals="animals" />',
})

export const Empty = Template.bind({})
Empty.args = {
  animals: [],
}

export const SomeAnimals = Template.bind({})
SomeAnimals.args = {
  animals: Array.from({ length: 10 }, () => fakeAnimal()),
}

export const ManyAnimals = Template.bind({})
ManyAnimals.args = {
  animals: Array.from({ length: 100 }, () => fakeAnimal()),
}
