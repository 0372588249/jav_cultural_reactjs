import axios from 'axios'
import { BASE_URL } from '../common/config'
import swal from 'sweetalert'
import R from '../assets'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 20000
})

axiosInstance.interceptors.response.use((response: any) => {
  const data: any = response.data
  if (!data) {
    swal({
      title: R.strings().fail_request,
      text: data?.msg || R.strings().error_network,
      icon: 'error',
    })  
  }
  return response
})
export default axiosInstance
