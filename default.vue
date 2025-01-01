<!-- This file should be inside the layout folder at the root level regarding Nuxt3's structure. -->

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between items-center">
          <p>Welcome to 
            <span :class="`text-${color}-500 font-bold`">N</span>uxt<span :class="`text-${color}-500 font-bold`">UI</span>
            Starter
          </p>
          <div class="flex gap-2">
            <USelect
              v-model="color"
              :options="colorOptions"
              placeholder="Select color"
              class="w-40"
            />
            <ColorScheme>
              <USelect 
                v-model="$colorMode.preference" 
                :options="['system', 'light', 'dark']" 
              />
            </ColorScheme>
          </div>
        </div>
      </template>
      <slot />
    </UCard>
  </UContainer>
</template>

<script setup>
const { color, colorOptions } = useColor()
</script>
