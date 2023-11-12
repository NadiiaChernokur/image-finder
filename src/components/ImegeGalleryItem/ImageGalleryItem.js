import {
  ImageGalleryItemImage,
  ImageGalleryItemLi,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  return images.map(image => {
    return (
      <ImageGalleryItemLi className="gallery-item" key={image.webformatURL}>
        <ImageGalleryItemImage src={image.webformatURL} alt="" />
      </ImageGalleryItemLi>
    );
  });
};
