<template>
    <div>
        <p v-hc-hidden="true">Hide me</p>
        <p v-hc-if="false">Custom:Hide me</p>
    </div>
</template>

<script>
export default {
  name: 'Model',
  data() {
    return {
      datePicker: {},
      check: false,
    };
  },
};
</script>

<style scoped>
</style>
