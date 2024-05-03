import { onMounted, ref } from 'vue';

const useFetch = (url) => {
  const data = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchData = async () => {
    loading.value = true;
    error.value = null; // Reset errors

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
      const json = await res.json();
      data.value = json; // Inspect the structure of this
      console.log('Fetched Data:', json); // For debugging
    } catch (err) {
      error.value = err.message;
      console.error('Fetch Error:', err); // Log error for debugging
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });

  return { data, loading, error };
};

export default useFetch;
