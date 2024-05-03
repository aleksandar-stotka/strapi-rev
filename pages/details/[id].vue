<!-- pages/details/_id.vue -->
<template>
    <div>
      <h1>Details Page</h1>
      <p>ID: {{ id }}</p>
      <!-- Display additional details fetched based on the ID -->
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      const id = params.id;
      // Use the ID to fetch data or process it further
      // Example: const details = await fetch(`/api/details/${id}`).then(res => res.json());
  
      // Return the data needed in the template
      return { id };
    }
  };
  </script>
  