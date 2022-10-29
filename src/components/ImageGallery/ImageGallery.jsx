import { Component } from 'react';
import { ImageGalleryBox } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { LoadMore } from '../Button/Button';
import { newsApiService } from 'API/AxiosCreate';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    isLoader: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const {
      state: { page },
      props: { searchQuery },
      hideLoader,
      showLoader,
    } = this;
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ page: 1, data: [] });
      newsApiService(searchQuery, page, hideLoader, showLoader).then(res => {
        this.setState({ data: res });
      });
    }

    if (prevPage !== nextPage) {
      newsApiService(searchQuery, page, hideLoader, showLoader).then(res => {
        this.setState(({ data }) => ({
          data: [...data, ...res],
        }));
      });
    }
  }

  hideLoader = () => {
    this.setState({ isLoader: false });
  };

  showLoader = () => {
    this.setState({ isLoader: true });
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <>
        {this.state.isLoader && <Loader />}
        <ImageGalleryBox onClick={this.onGalleryListClick}>
          {this.state.data.map(img => {
            return <ImageGalleryItem data={img} key={img.id} />;
          })}
        </ImageGalleryBox>
        {this.state.data.length > 11 && (
          <LoadMore onClickLoadMore={this.onClickLoadMore} />
        )}
      </>
    );
  }
}

LoadMore.propTypes = {
  ImageGallery: PropTypes.string,
};
