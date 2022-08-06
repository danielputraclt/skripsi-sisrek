<template>
  <div>
    <br />
    <h2>Form Kriteria</h2>
    <v-form>
      <v-text-field v-model="nama_kriteria" label="Nama Kriteria"></v-text-field>
      <v-text-field v-model="skor" label="Skor"></v-text-field>
      <v-btn color="info" @click="submit({ id, nama_kriteria, skor })">{{
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
        return this.$store.state.kriteria.id;
      },
      set(value) {
        this.$store.commit("kriteria/setId", value);
      },
    },
    nama_kriteria: {
      get() {
        return this.$store.state.kriteria.nama_kriteria;
      },
      set(value) {
        this.$store.commit("kriteria/setNama_kriteria", value);
      },
    },
    skor: {
      get() {
        return this.$store.state.kriteria.skor;
      },
      set(value) {
        this.$store.commit("kriteria/setSkor", value);
      },
    }
  },
  methods: {
    async submit(kriteria) {
      if (kriteria.id) {
        await this.$axios.put("http://localhost:4000/kriteria/" + kriteria.id, {
          nama_kriteria: kriteria.nama_kriteria,
          skor: kriteria.skor
        });
      } else {
        await this.$axios.post("http://localhost:4000/kriteria/signup", {
          nama_kriteria: kriteria.nama_kriteria,
          skor: kriteria.skor
        });
      }
      this.resetKriteria({ id: 0, nama_kriteria: "", skor: "" });
      this.$store.commit(
        "datakriteria/storeData",
        (await this.$axios.get("http://localhost:4000/kriteria")).data
      );
    },
    resetKriteria(kriteria) {
      this.$store.commit("kriteria/setId", kriteria.id);
      this.$store.commit("kriteria/setNama_kriteria", kriteria.nama_kriteria);
      this.$store.commit("kriteria/setSkor", kriteria.skor);
    },
  },
};
</script>

<style>
</style>