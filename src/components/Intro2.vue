<template>
  <div class="page">
      <b-col class="myWrap px-0" md="4" offset-md="4">
        <b-container fluid>
          <b-row style="height: 50%">
            <b-col>
              <b-img class="pt-3" center fluid src="/static/img/fff.png" />
            </b-col>
          </b-row>
        </b-container>
        <b-col class="px-0"><hr></b-col>
        <b-container fluid>
          <b-row>
            <b-col class="p-3">
              <h4>Antrian</h4>
              <p>Alophatic, Ayuverdic, and all of type medicine can bought here</p>
              <b-button to="/" variant="secondary">back</b-button>
              <b-button to="/intro2" variant="success">Next</b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
  </div>
</template>

<script>
export default {
  name: 'Intro1',
  data () {
    return {
    }
  },
  beforeCreate: function () {
    document.body.className = 'Intro2'
  }
}
</script>

<style scoped>
  .myWrap {
    border-radius: 5px;
    height: 80vh;
    background-color: #ffffff;
  }

  hr {
    height: 12px;
    border: 0;
    box-shadow: inset 0 -12px 12px -12px rgba(0, 0, 0, 0.5);
  }

   @media only screen and (max-width: 778px) {
    .myWrap {
      height: 85vh;
    }
  }
</style>
