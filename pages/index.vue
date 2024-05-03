<template>
  <div>
    <h1>Data List</h1>
    <!-- Loading and error messages -->
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <!-- Loop through the data -->
    <ul v-else>
      <li v-for="item in data.data" :key="item.id">
        <h3>{{ item.attributes.title }}</h3>
        <p>Rating: {{ item.attributes.rating }}</p>
        <p>Body: {{ item.attributes.body[0]?.children[0]?.text || 'No Description' }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import useFetch from '~/hooks/useFetch';
export default {
  setup() {
    const { data, loading, error } = useFetch('http://localhost:1337/api/reviews');

    return { data, loading, error };
  }
};
</script>
