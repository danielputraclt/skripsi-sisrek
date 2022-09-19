<template>
 
    <v-list>
      <v-list-item v-for="(ekstrak, index) in cartEkstra" :key="index">
        <v-list-item-content>
          <v-list-item-title>
            {{ ekstrak.nama_ekstra }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
 
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

    ...mapState("carts", {
      items: "items",
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

