<template>
  <div>
    <br />
    <h2>Form Parameter</h2>
    <v-form>
      <v-text-field v-model="nama_parameter" label="Nama Parameter"></v-text-field>
      <v-text-field v-model="skor_parameter" label="Skor"></v-text-field>
      <v-btn color="info" @click="submit({ id, nama_parameter, skor_parameter })">{{
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
        return this.$store.state.parameter.id;
      },
      set(value) {
        this.$store.commit("parameter/setId", value);
      },
    },
    nama_parameter: {
      get() {
        return this.$store.state.parameter.nama_parameter;
      },
      set(value) {
        this.$store.commit("parameter/setNama_parameter", value);
      },
    },
    skor_parameter: {
      get() {
        return this.$store.state.parameter.skor_parameter;
      },
      set(value) {
        this.$store.commit("parameter/setSkor_parameter", value);
      },
    }
  },
  methods: {
    async submit(parameter) {
      if (parameter.id) {
        await this.$axios.put("http://localhost:4000/parameter/" + parameter.id, {
          nama_parameter: parameter.nama_parameter,
          skor_parameter: parameter.skor_parameter
        });
      } else {
        await this.$axios.post("http://localhost:4000/parameter/signup", {
          nama_parameter: parameter.nama_parameter,
          skor_parameter: parameter.skor_parameter
        });
      }
      this.resetParameter({ id: 0, nama_parameter: "", skor_parameter: "" });
      this.$store.commit(
        "dataparameter/storeData",
        (await this.$axios.get("http://localhost:4000/parameter")).data
      );
    },
    resetParameter(parameter) {
      this.$store.commit("parameter/setId", parameter.id);
      this.$store.commit("parameter/setNama_parameter", parameter.nama_parameter);
      this.$store.commit("parameter/setSkor_parameter", parameter.skor_parameter);
    },
  },
};
</script>

<style>
</style>