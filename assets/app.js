var app = new Vue({
  el: '#app',
  data: {
    message: 'Contador - Valeria Manríquez',
    numValue: 0,
    numQuantity: 1,
    listHistory: [],
    question: 'Ingrese la cantidad deseada para contar',
    historyFinal: 'Últimos 5 resultados'
  },
  methods: {
    lastFiveValue(value) {
      this.listHistory.push(value);
      if (this.listHistory.length > 5) {
        this.listHistory.shift();
      }
    },
    countPlus() {
      this.numValue = (+this.numValue) + (+this.numQuantity);
      this.lastFiveValue(this.numValue);
      return this.numValue;
    },
    countMinus() {
      this.numValue = (+this.numValue) - (+this.numQuantity);
      this.lastFiveValue(this.numValue);
      return this.numValue;
    },
    resetAll() {
      this.numValue = 0,
        this.numQuantity = 1,
        this.listHistory = [];
    },
    reset() {
      this.numQuantity = 1;
    },
  },
  computed: {
    historyText() {
      const newListHistory = [... this.listHistory].reverse().join(`\n`)
      return newListHistory
    },
  }
})