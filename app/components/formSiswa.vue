<template>
  <div>
    <br />
    <h2>Form Siswa</h2>
    <v-form>
      <v-text-field v-model="nama" label="Nama"></v-text-field>
      <v-text-field v-model="nis" label="NIS"></v-text-field>
      <v-btn color="info" @click="submit({ id, nama, nis })">{{
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
        return this.$store.state.siswa.id;
      },
      set(value) {
        this.$store.commit("siswa/setId", value);
      },
    },
    nama: {
      get() {
        return this.$store.state.siswa.nama;
      },
      set(value) {
        this.$store.commit("siswa/setNama", value);
      },
    },
    nis: {
      get() {
        return this.$store.state.siswa.nis;
      },
      set(value) {
        this.$store.commit("siswa/setNis", value);
      },
    }
  },
  methods: {
    async submit(siswa) {
      if (siswa.id) {
        await this.$axios.put("http://localhost:4000/siswa/" + siswa.id, {
          nama: siswa.nama,
          nis: siswa.nis,
        });
      } else {
        await this.$axios.post("http://localhost:4000/siswa/signup", {
          nama: siswa.nama,
          nis: siswa.nis
        });
      }
      this.resetSiswa({ id: 0, nama: "", nis: "" });
      this.$store.commit(
        "datasiswa/storeData",
        (await this.$axios.get("http://localhost:4000/siswa")).data
      );
    },
    resetSiswa(siswa) {
      this.$store.commit("siswa/setId", siswa.id);
      this.$store.commit("siswa/setNama", siswa.nama);
      this.$store.commit("siswa/setNis", siswa.nis);
    },
  },
};
</script>

<style>
</style>