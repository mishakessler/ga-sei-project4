// AXIOS
const axios = require('axios');

const baseURL = 'http://localhost:3000/listings'
const api = axios.create({
  baseURL: baseURL
})

// CREATE

export const createListing = async (data) => {
  const resp = await api.post('/', data)
  return resp.data
}

// INDEX

export const indexListings = async () => {
  const resp = await api.get('/')
  return resp.data
}

// SHOW

export const showListing = async (id) => {
  const resp = await api.get(`/${id}`)
  return resp.data
}

// UPDATE

export const updateListing = async (id, data) => {
  const resp = await api.put(`/${id}`, data)
  return resp.data
}


// DESTROY

export const destroyListing = async (id) => {
  await api.delete(`/${id}`)
}
