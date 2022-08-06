<template>
  <div>
    <br />
    <h2>Form Ekstra</h2>
    <v-form>
      <v-text-field v-model="nama_ekstra" label="Nama Ekstra"></v-text-field>
      <v-btn color="info" @click="submit({ id, nama_ekstra })">{{
        id ? "Edit" : "Submit"
      }}</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  computed: {
    id: {
      get() {
        return this.$store.state.ekstra.id;
      },
      set(value) {
        this.$store.commit("ekstra/setId", value);
      },
    },
    nama_ekstra: {
      get() {
        return this.$store.state.ekstra.nama_ekstra;
      },
      set(value) {
        this.$store.commit("ekstra/setNama_ekstra", value);
      },
    },
  },

  methods: {
    async submit(ekstra) {
      if (ekstra.id) {
        await this.$axios.put(
          "http://localhost:4000/data-ekstra/" + ekstra.id,
          {
            nama_ekstra: ekstra.nama_ekstra,
          }
        );
      } else {
        await this.$axios.post("http://localhost:4000/data-ekstra/signup", {
          nama_ekstra: ekstra.nama_ekstra,
        });
      }
      this.resetEkstra({ id: 0, nama_ekstra: "" });
      this.$store.commit(
        "dataekstra/storeData",
        (await this.$axios.get("http://localhost:4000/data-ekstra")).data
      );
    },
    resetEkstra(ekstra) {
      this.$store.commit("ekstra/setId", ekstra.id);
      this.$store.commit("ekstra/setNama_ekstra", ekstra.nama_ekstra);
    },
  },
};
</script>

<style>
</style>