<template>
  <div>
    <b-container fluid>
      <b-row style="height: 50%">
        <b-col md="4" offset-md="4">
          <b-img center fluid src="/static/img/fff.png" />
        </b-col>
      </b-row>
    </b-container>
    <b-col md="4" offset-md="4" class="px-0"><hr></b-col>
    <b-container fluid>
      <b-row class="mt-5">
        <b-col md="4" offset-md="4">
          <h4>Informasi Layanan Masyarakat</h4>
          <p>Alophatic, Ayuverdic, and all of type medicine can bought here</p>
          <b-button to="/intro2" variant="success">Next</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Intro1',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  hr {
    height: 12px;
    border: 0;
    box-shadow: inset 0 -12px 12px -12px rgba(0, 0, 0, 0.5);
  }
</style>
