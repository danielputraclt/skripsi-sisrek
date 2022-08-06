<template>
  <div>
    <h2>Tabel Kriteria</h2>
    <v-data-table :headers="headers" :items="kriteria">
      <template v-slot:[`item.edit`]="{ item }">
        <v-btn color="success" @click="editItem(item)"> Edit </v-btn>
      </template>
      <template v-slot:[`item.delete`]="{ item }">
        <v-btn color="danger" @click="deleteItem(item._id)"> Delete </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Nama Kriteria", value: "nama_kriteria" },
        { text: "Skor", value: "skor" },
        { text: "", value: "edit" },
        { text: "", value: "delete" },
      ],
    };
  },
  computed: {
    kriteria() {
      return this.$store.state.datakriteria.data;
    },
  },
  async fetch() {
    this.$store.commit(
      "datakriteria/storeData",
      (await this.$axios.get("http://localhost:4000/kriteria")).data
    );
  },
  methods: {
    async deleteItem(id) {
      await this.$axios.delete("http://localhost:4000/kriteria/" + id);
      this.$store.commit(
        "datakriteria/storeData",
        (await this.$axios.get("http://localhost:4000/kriteria")).data
      );
    },
    async editItem(kriteria) {
      this.$store.commit("kriteria/setId", kriteria._id);
      this.$store.commit("kriteria/setNama_kriteria", kriteria.nama_kriteria);
      this.$store.commit("kriteria/setSkor", kriteria.skor);
    },
  },
};
</script>

<style>
</style>