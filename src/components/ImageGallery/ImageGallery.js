import { ImageGalleryItem } from '../ImegeGalleryItem/ImageGalleryItem';
import { GalleryUl } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryUl>
      {images.map(image => {
        return (
          <ImageGalleryItem
            id={image.webformatURL}
            smallPhoto={image.webformatURL}
            largePhoto={image.largeImageURL}
          />
        );
      })}
    </GalleryUl>
  );
};
// return (
//   <GalleryUl>
//     <ImageGalleryItem images={image} />
//   </GalleryUl>
// );
