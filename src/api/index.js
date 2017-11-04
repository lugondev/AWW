import axios from 'axios'
import store from '../store'

/**
 * Create a new wallet
 * @return {Object} Private/public key pair
 */
export const getEndpoint = () => {
  if (store.getters.networkType.label === 'Main') return 'https://node1.arknet.cloud'
  if (store.getters.networkType.label === 'Test') return 'http://167.114.29.52:4002'
}

/**
 * Get blockchain height
 * @return {Promise<Response>} Block height
 */
export const getBlocksHeight = () => {
  return axios.get(`${getEndpoint()}/api/blocks/getHeight`)
  .then((res) => {
    return res.data.height
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}

/**
 * Get network hash
 * @return {Promise<Response>} Network hash
 */
export const getNetHash = () => {
  return axios.get(`${getEndpoint()}/api/blocks/getNetHash`)
  .then((res) => {
    return res.data.nethash
  })
  .catch((err) => {
    if (err) console.log(err)
  })
}
