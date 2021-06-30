import ApiService from 'services/ApiService'

interface PlayloadGetActress {
  height: any
  bust: any
  waist: any
  hips: any
}
export const ApiDataSet = (payload: PlayloadGetActress) => {
  return ApiService.post('/actress', payload)
    .then((res: any) => {
      return Promise.resolve(res?.data)
    })
    .catch((err: any) => {
      return Promise.reject(err)
    })
}

export const ApiAnalysis = () => {
  return ApiService.get('/analysis')
    .then((res: any) => {
      return Promise.resolve(res?.data)
    })
    .catch((err: any) => {
      return Promise.reject(err)
    })
}

export const ApiSearchActress = (search_key: string) => {
  return ApiService.get(`/actress_search/${search_key}`)
    .then((res: any) => {
      return Promise.resolve(res?.data)
    })
    .catch((err: any) => {
      return Promise.reject(err)
    })
}
