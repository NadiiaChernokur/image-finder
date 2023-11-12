import { ImageGalleryItem } from '../ImegeGalleryItem/ImageGalleryItem';
import { GalleryUl } from './ImageGallery.styled';

export const ImageGallery = ({ image }) => {
  return (
    <GalleryUl className="gallery">
      <ImageGalleryItem images={image} />
    </GalleryUl>
  );
};
