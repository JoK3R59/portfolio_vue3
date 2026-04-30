<script setup lang="ts">

  const props = withDefaults(defineProps<{
    typeAos?: string;
    classStyle?: string;
  }>(), {
    typeAos: '',
    classStyle: '',
  });

</script>

<template>
  <div class="shadow_content bg-[#3B424C] rounded-md my-4 card" 
    :data-aos="props.typeAos"
    :class="props.classStyle"
  >
    <slot></slot>
  </div>
</template>
