<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h2>Desafio feito por: Bruna Andrade</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click.stop="getAdimplentes"
        text
      >
        <span class="mr-2">Adimplentes</span>
      </v-btn>
      <v-btn
        @click.stop="getInadimplentes"
        text
      >
        <span class="mr-2">Inadimplentes</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Customers/>
    </v-main>
  </v-app>
</template>

<script>
import Customers from './components/Customers';

export default {
  name: 'App',

  components: {
    Customers,
  },
  methods: {
    getAdimplentes: function() {
      this.$store.dispatch("getAdimplentesCustomers");
    },
    getInadimplentes: function() {
      this.$store.dispatch("getInadimplentesCustomers");
    }
  }
};
</script>
