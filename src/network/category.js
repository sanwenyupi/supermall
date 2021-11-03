import {request} from './request'

export function getCategory(){
  return request({
    url: '/category'
  })
}
export function getCategoryDetail(){
  return request({
    url: '/'
  })
}