<template>
    
    <div>
         <ul>
    <h1>Ekstrakurikuler</h1>
    <li v-for="ekstrak in ekstra" :key="ekstrak" @click="addToCart(ekstrak.id)">
      {{ ekstrak.nama_ekstra }}
    </li>
    <br />

    <h1>Kriteria</h1>
    <li v-for="krit in kriteria" :key="krit">
      {{ krit.nama_kriteria }}
    </li>

    <br />

    <h1>Parameter</h1>
    <li v-for="param in parameter" :key="param">
      {{ param.nama_parameter }}
    </li>
 </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
     computed: {
    headers() {
      return this.$store.state.datakriteria.data;
    },
    ekstra() {
      return this.$store.state.dataekstra.data;
    },
    kriteria() {
      return this.$store.state.datakriteria.data;
    },
    parameter() {
      return this.$store.state.dataparameter.data;
    },

    ...mapState("ekstra", {
      ekstra: "ekstra",
    }),

    ...mapGetters("carts", {
      cartEkstra: "cartEkstra",
    }),
  },

  
  methods: {
    ...mapActions({
      addToCart: "carts/addToCart",
    }),
  },

  async fetch() {
    this.$store.commit(
      "dataekstra/storeData",
      (await this.$axios.get("http://localhost:4000/data-ekstra")).data
    );
    this.$store.commit(
      "datakriteria/storeData",
      (await this.$axios.get("http://localhost:4000/kriteria")).data
    );
    this.$store.commit(
      "dataparameter/storeData",
      (await this.$axios.get("http://localhost:4000/parameter")).data
    );
  },
};

</script>