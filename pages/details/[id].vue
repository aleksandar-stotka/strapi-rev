<template>
    <div>
      <h3 v-if="data">{{ data.attributes.title }}</h3>
      <p v-if="data">{{ data.attributes.body[0]?.children[0]?.text || 'No Description' }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const id = route.params.id;
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);
  
  onMounted(async () => {
    try {
      const response = await fetch(`http://localhost:1337/api/reviews/${id}`);
      const result = await response.json();
      data.value = result.data;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  