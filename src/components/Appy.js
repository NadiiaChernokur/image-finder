
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_Key = "39759844-290e4bcc18caed67d7b5a281b";
const searchParams = new URLSearchParams({
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 12
       
});
export const getImeges = async ()=>  {
   const respons =  await axios.get(`${BASE_URL}?key=${API_Key}&q=${this.state.search.slice(14)}&page=${this.state.page}&${searchParams.toString()}`);
   return respons.data
}



