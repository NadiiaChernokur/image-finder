import { Component } from "react";
import axios from 'axios';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Container } from "./App.styled";
import { Hearts } from  'react-loader-spinner'


 const BASE_URL = 'https://pixabay.com/api/';
   const API_Key = "39759844-290e4bcc18caed67d7b5a281b";
   const searchParams = new URLSearchParams({
         image_type: "photo",
         orientation: "horizontal",
         safesearch: true,
         per_page: 12
          
   });
    
const STATUS = {
  IDEL: 'idel',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVD: 'resolved'
   }



export class App extends Component {
  state = {
    search: "", 
    page: 1,
    image: [],
    status: STATUS.IDEL,
    total: 0
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.search !== prevState.search) {
      this.setState({
     status: STATUS.PENDING
   })
 const response = await axios.get(`${BASE_URL}?key=${API_Key}&q=${this.state.search}&page=${this.state.page}&${searchParams.toString()}`);
      console.log(response.data.totalHits)
      console.log(this.state.image.length)
    this.setState(prevState => {
     return {
       image: [
         ...prevState.image,
         ...response.data.hits 
       ],
       status: STATUS.IDEL
     }  
   }  
      )
      const v = (response.data.totalHits - this.state.image.length) + 12;
      console.log(v)
      this.setState({
        total: v
      })
 }
  };

//   totalImages = () => {
//     const v = (response.data.totalHits - this.state.image.length) + 12;
//   return v
// }

onSubmitSearchbar = (event) => {
  event.preventDefault();
  const value = event.target[1].value;
  this.setState({
    search: value
  })
   
  };
  
  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1
        
      }
      
    })
  }

render() {
return (
  <Container>
    
    <Searchbar onSubmit={this.onSubmitSearchbar } />
    <ImageGallery image={this.state.image} />
    {
      this.state.status === STATUS.PENDING && 

       <Hearts 
     height="80"
     width="80"
      color="#ea1699"
     ariaLabel="hearts-loading"
    wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    }
        
    {
      this.state.image.length > 12 && this.state.total > 12 &&
<Button loadMore={ this.onLoadMore} />
     }       
    
                {/* <Modal/> */}
    </Container>
  );
}
 

};


