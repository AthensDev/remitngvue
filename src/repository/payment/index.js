import request from '../axios.js'
import config from '~/config'

export default {
  async createPaymentLink (data) {
    return await request().post(`${config.baseUrl}/paymentlinks`, data)
  },
  
}