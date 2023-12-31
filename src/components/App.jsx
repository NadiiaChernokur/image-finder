import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Container } from './App.styled';
import { Hearts } from 'react-loader-spinner';
import { getImages } from './Appy';

const STATUS = {
  IDEL: 'idel',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVD: 'resolved',
};

export class App extends Component {
  state = {
    search: '',
    page: 1,
    image: [],
    status: STATUS.IDEL,
    total: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (
        this.state.page !== prevState.page ||
        this.state.search !== prevState.search
      ) {
        this.setState({
          status: STATUS.PENDING,
        });

        const response = await getImages(
          this.state.search.slice(14),
          this.state.page
        );
        this.setState(prevState => {
          return {
            image: [...prevState.image, ...response.hits],
            status: STATUS.IDEL,
          };
        });
        const numberOfPhotos = response.totalHits - this.state.image.length;
        this.setState({
          total: numberOfPhotos,
        });
      }
    } catch (e) {
      this.setState({
        status: STATUS.REJECTED,
      });
    }
  }

  onSubmitSearchbar = event => {
    event.preventDefault();
    const value = event.target[1].value;
    this.setState({
      search: `${Date.now()}/${value}`,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  onChange = () => {
    this.setState({
      page: 1,
      image: [],
      total: 0,
    });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmitSearchbar} onChange={this.onChange} />
        <ImageGallery images={this.state.image} />
        {this.state.status === STATUS.PENDING && (
          <Hearts
            height="80"
            width="80"
            color="#ea1699"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}

        {this.state.total > 12 && <Button loadMore={this.onLoadMore} />}

        {this.state.status === STATUS.REJECTED && (
          <div>Something went wrong... Please try again</div>
        )}
      </Container>
    );
  }
}
