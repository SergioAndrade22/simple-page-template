import axios from 'axios'

export default class FixerIOAPI {
  public async getCurrencies (): Promise<any> {
    const res = await axios.get('http://data.fixer.io/api/latest?access_key=e5302df52b328e44c952c456e3c406eb&symbols=EUR,USD,AUD,GBP,CAD,PLN')
    return res.data
  }
}
