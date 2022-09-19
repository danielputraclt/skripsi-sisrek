<template>
  <div>
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
export default{
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
  headers(){
    return this.$store.state.datakriteria.data;
  },
    ekstra() {
      return this.$store.state.dataekstra.data;
    },
  },

    async fetch() {
    this.$store.commit(
      "dataekstra/storeData",
      (await this.$axios.get("http://localhost:4000/data-ekstra")).data
    );
      this.$store.commit(
      "datakriteria/storeData",
      (await this.$axios.get("http://localhost:4000/data-kriteria")).data
    );
  },
};

</script>