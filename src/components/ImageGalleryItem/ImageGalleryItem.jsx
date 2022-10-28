import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemBox,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { data } = this.props;
    const { showModal } = this.state;

    return (
      <ImageGalleryItemBox>
        <ImageGalleryItemImage
          onClick={this.toggleModal}
          src={data.webformatURL}
          alt={data.tags}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={data.largeImageURL} alt={data.tags} />
          </Modal>
        )}
      </ImageGalleryItemBox>
    );
  }
}

ImageGalleryItem.propTypes = {
  data: PropTypes.object,
};
