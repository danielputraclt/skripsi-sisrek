<template>
  <div>
    <h2>Tabel Parameter</h2>
    <v-data-table :headers="headers" :items="parameter">
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
        { text: "Nama Parameter", value: "nama_parameter" },
        { text: "Skor Parameter", value: "skor_parameter" },
        { text: "", value: "edit" },
        { text: "", value: "delete" },
      ],
    };
  },
  computed: {
    parameter() {
      return this.$store.state.dataparameter.data;
    },
  },
  async fetch() {
    this.$store.commit(
      "dataparameter/storeData",
      (await this.$axios.get("http://localhost:4000/parameter")).data
    );
  },
  methods: {
    async deleteItem(id) {
      await this.$axios.delete("http://localhost:4000/parameter/" + id);
      this.$store.commit(
        "dataparameter/storeData",
        (await this.$axios.get("http://localhost:4000/parameter")).data
      );
    },
    async editItem(parameter) {
      this.$store.commit("parameter/setId", parameter._id);
      this.$store.commit("parameter/setNama_parameter", parameter.nama_parameter);
      this.$store.commit("parameter/setSkor_parameter", parameter.skor_parameter);
    },
  },
};
</script>

<style>
</style>