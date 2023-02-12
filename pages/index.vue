<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const { data: message } = await $client.exemple.hello.useQuery({
  message: 'from tRPC',
});
</script>
