<template>
<v-data-table
    :headers="headers"
    :items="getCustomers"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: 'Customers',
  data () {
    return {
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Nome',
          value: 'name',
        },
        {
          text: 'Status',
          value: 'status',
        }
      ]
    }
  },
  computed: {
    getCustomers() {
      return this.$store.getters.allCustomers
    }
  },
  mounted() {
    this.$store.dispatch("getCustomers");
  },
}
</script>