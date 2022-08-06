<template>
  <div>
    <h2>Table</h2>
    <v-data-table :headers="headers" :items="siswa">
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
        { text: "Nama", value: "nama" },
        { text: "NIS", value: "nis" },
        // { text: "Password", value: "password" },
        { text: "edit", value: "edit" },
        { text: "delete", value: "delete" },
      ],
    };
  },
  computed: {
    siswa() {
      return this.$store.state.datasiswa.data;
    },
  },
  async fetch() {
    this.$store.commit(
      "datasiswa/storeData",
      (await this.$axios.get("http://localhost:4000/siswa")).data
    );
  },
  methods: {
    async deleteItem(id) {
      await this.$axios.delete("http://localhost:4000/siswa/" + id);
      this.$store.commit(
        "datasiswa/storeData",
        (await this.$axios.get("http://localhost:4000/siswa")).data
      );
    },
    async editItem(siswa) {
      this.$store.commit("siswa/setId", siswa._id);
      this.$store.commit("siswa/setNama", siswa.nama);
      this.$store.commit("siswa/setNis", siswa.nis);
    },
  },
};
</script>

<style>
</style>