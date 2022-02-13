import axios from 'axios';

export const fetchCharacter = async (offset) => {

   return await axios.get(`${process.env.REACT_APP_BASE_API_URL}characters?limit=30&offset=${offset}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${process.env.REACT_APP_HASH}`).then((res) => { return res.data.data; }).catch(err => err)
}

export const fetchComicsById = async (char_id) => {

   return await axios.get(`${process.env.REACT_APP_BASE_API_URL}characters/${char_id}/comics?orderBy=-focDate&limit=10&offset=0&ts=1&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${process.env.REACT_APP_HASH}`).then((res) => { return res.data.data; }).catch(err => err)
}
export const fetchCharacterById = async (char_id) => {
   return await axios.get(`${process.env.REACT_APP_BASE_API_URL}characters/${char_id}?ts=1&apikey=${process.env.REACT_APP_PUBLIC_API_KEY}&hash=${process.env.REACT_APP_HASH}`).then((res) => { return res.data.data; }).catch(err => err)
}
