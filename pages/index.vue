<!-- Your list component -->
<template>
  <div>
    <h1>Data List</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li v-for="item in data.data" :key="item.id">
        <h3>{{ item.attributes.title }}</h3>
        <p>Rating: {{ item.attributes.rating }}</p>
        <p>
          Body: {{ item.attributes.body[0]?.children[0]?.text || 'No Description' }}
        </p>
        <NuxtLink :to="`/details/${item.id}`">details</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  async setup() {
    const { data} = await useFetch('http://localhost:1337/api/reviews' );

    return { data };
  }
};
</script>
