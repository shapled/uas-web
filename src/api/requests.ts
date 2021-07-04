import axios from 'axios'
import {ResponseWrapper} from './entity'

async function handleResponse<T>(resp: ResponseWrapper<T>): Promise<T> {
  if (resp.error !== 0) {
    return Promise.reject(resp.message)
  }
  return resp.data
}

async function get<T>(url: string, params?: {[key: string]: any}): Promise<T>{
  const resp =  await axios.get<ResponseWrapper<T>>(url, {
    params,
  })
  return handleResponse(resp.data)
}

async function post<T>(url: string, data?: {[key: string]: any}): Promise<T>{
  const resp =  await axios.post<ResponseWrapper<T>>(url, data)
  return handleResponse(resp.data)
}

async function put<T>(url: string, data?: {[key: string]: any}): Promise<T>{
  const resp =  await axios.put<ResponseWrapper<T>>(url, data)
  return handleResponse(resp.data)
}

async function del<T>(url: string, params?: {[key: string]: any}): Promise<T>{
  const resp =  await axios.delete<ResponseWrapper<T>>(url, {
    params,
  })
  return handleResponse(resp.data)
}

export default {get, post, put, del}
