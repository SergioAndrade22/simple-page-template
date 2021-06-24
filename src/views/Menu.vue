<template>
    <div>
        <h1>MENU</h1>

        <div>
            <label for="currency-selector">
                Currency:

                <template v-if="currencies.length === 0">
                    <b-spinner variant="primary" label="Spinning"></b-spinner>
                </template>

                <template v-else>
                    <select name="currency-selector" id="currency-selector" v-model="selectedCurrency">
                        <option v-for="currency in currencies" :key="currency[0]" :value="currency" :selected="currency[0] === EUR">{{currency[0]}}</option>
                    </select>
                </template>
            </label>

            <div>
                {{selectedCurrency}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FamilySizeAPI from '../services/FamilySizeAPI'
import FixerIOAPI from '../services/FixerIOAPI'

@Component
export default class Menu extends Vue {
    familySizeService: FamilySizeAPI
    fixerIOService: FixerIOAPI
    currencies: any[] = []
    selectedCurrency = ['EUR', 1]
    loadingCurrencies = true

    constructor () {
      super()
      this.familySizeService = new FamilySizeAPI()
      this.fixerIOService = new FixerIOAPI()
      this.fixerIOService.getCurrencies().then((res) => {
        this.loadingCurrencies = false
        for (const rate of Object.entries(res.rates)) {
          this.currencies.push(rate)
        }
      })
    }
}
</script>

<style>

</style>
