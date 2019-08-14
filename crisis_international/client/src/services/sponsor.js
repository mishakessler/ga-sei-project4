const axios = require('axios');

const baseURL = 'http://localhost:3000/sponsors'
const api = axios.create({
  baseURL: baseURL
})

// CREATE

export const createSponsor = async (data) => {
  const resp = await api.post('/', data)
  return resp.data
}

// INDEX

export const indexSponsors = async () => {
  const resp = await api.get('/')
  return resp.data
}

// SHOW

export const showSponsor = async (id) => {
  const resp = await api.get(`/${id}`)
  return resp.data
}

// UPDATE

export const updateSponsor = async (id, data) => {
  const resp = await api.put(`/${id}`, data)
  return resp.data
}


// DESTROY

export const destroySponsor = async (id) => {
  await api.delete(`/${id}`)
}
