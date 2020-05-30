  //Importing Line class from the vue-chartjs wrapper
  import {Bar} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    // extend: Line,
    extends: Bar,
    data () {
      return {
        label: [],
        rows: []
      }
    },
    mounted () {
      axios.get('/getCategories')
              .then((response) => {
                  console.log(response);
                  this.label = response.data.data.lables
                  this.rows = response.data.data.rows
                  this.setGraph()
              })
              .catch((error) => {
                  this.errors = error.response.data.errors
              })

    },
    methods: {
      setGraph() {
      this.renderChart({
        labels: this.label,
        datasets: [
          {
            label: 'Categories',
            backgroundColor: 'hsla(205, 100%, 59%, 0.3)',
            data: this.rows
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    },
      ref() {
          axios.get('/getCategories')
              .then((response) => {
                  console.log(response);
                  this.label = response.data.lables
                  this.data = response.data.rows
              })
              .catch((error) => {
                  this.errors = error.response.data.errors
              })
      }
  },
  created() {
    this.$nuxt.$on('chartEvent', data => {
        this.label = data.lables
        this.data = data.rows
    });
},
  }
