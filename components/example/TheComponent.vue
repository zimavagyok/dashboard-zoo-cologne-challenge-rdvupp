<script setup lang="ts">
interface ComponentFormSubmission {
  name: string
}

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Your name...',
  },
})

defineEmits<{
  (e: 'submit', value: ComponentFormSubmission): void
}>()

const localModelValue = props.modelValue
</script>

<template>
  <div class="m-1 text-xs">
    <label class="block">Super cool input:</label>
    <form @submit.prevent="$emit('submit', { name: localModelValue })">
      <span class="relative">
        <input
          v-model="localModelValue"
          type="text"
          class="border rounded p-1 outline-none"
          :placeholder="placeholder"
          autofocus
        >
      </span>
      <button type="submit" class="bg-blue-200 rounded p-1">
        Submit
      </button>
    </form>
    <div class="mt-2">
      <nuxt-link to="/">
        Example link
      </nuxt-link>
    </div>
  </div>
</template>
