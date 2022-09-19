<template>
  <v-row>
    <v-col cols="8" class="frame-content px-6">
      <isi-kriteria></isi-kriteria>
    </v-col>

    <v-col cols="4" class="frame-content white"> 
     <hasil-sementara></hasil-sementara>
    </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>

<style scoped>
    .frame-content {
      height: 90vh;
      overflow-y:auto ;
}
</style>