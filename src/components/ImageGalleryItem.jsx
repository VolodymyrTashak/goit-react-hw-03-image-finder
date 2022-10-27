import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';

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
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          src={data.webformatURL}
          alt={data.tags}
          className="ImageGalleryItem-image"
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={data.largeImageURL} alt={data.tags} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  data: PropTypes.object,
};
