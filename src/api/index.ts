import requests from './requests'
import {Pagination, App} from './entity'

const baseUrl = 'http://127.0.0.1:10086'

function urlOf(path: string): string {
  return baseUrl + path
}

export default {
  getApps: async (page: number = 1, size: number = 20): Promise<Pagination<App>> => {
    return requests.get(urlOf('/app/'), {page, size})
  },
  addApp: async (app: App): Promise<any> => {
    return requests.post(urlOf('/app/'), app)
  }
}
