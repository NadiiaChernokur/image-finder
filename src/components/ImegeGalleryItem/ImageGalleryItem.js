import {
  ImageGalleryItemImage,
  ImageGalleryItemLi,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({
          modalIsOpen: false,
        });
      }
    });
  }
  onShowModal = e => {
    this.setState(prevState => {
      return {
        modalIsOpen: !prevState.modalIsOpen,
      };
    });
  };

  render() {
    const { id, smallPhoto, largePhoto } = this.props;
    return (
      <ImageGalleryItemLi key={id} onClick={this.onShowModal}>
        <ImageGalleryItemImage src={smallPhoto} alt="" />

        {this.state.modalIsOpen && (
          <Modal showModal={this.onShowModal} largePhoto={largePhoto} />
        )}
      </ImageGalleryItemLi>
    );
  }
}
