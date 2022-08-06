<template>
  <div>
    <h2>Tabel Ekstra</h2>
    <v-data-table :headers="headers" :items="ekstra">
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
        { text: "Nama Ekstra", value: "nama_ekstra" },
        { text: "", value: "edit" },
        { text: "", value: "delete" },
      ],
    };
  },
  computed: {
    ekstra() {
      return this.$store.state.dataekstra.data;
    },
  },
  
  async fetch() {
    this.$store.commit(
      "dataekstra/storeData",
      (await this.$axios.get("http://localhost:4000/data-ekstra")).data
    );
  },

  methods: {
    async deleteItem(id) {
      await this.$axios.delete("http://localhost:4000/data-ekstra/" + id);
      this.$store.commit(
        "dataekstra/storeData",
        (await this.$axios.get("http://localhost:4000/data-ekstra")).data
      );
    },
    async editItem(ekstra) {
      this.$store.commit("ekstra/setId", ekstra._id);
      this.$store.commit("ekstra/setNama_ekstra", ekstra.nama_ekstra);
    },
  },
};
</script>

<style>
</style>