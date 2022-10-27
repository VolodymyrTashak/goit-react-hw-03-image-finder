import { Component } from 'react';
// import { toast } from 'react-toastify';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { LoadMore } from './Button';

const BASE_URL = 'https://pixabay.com/api/';
const Key = 'key=29860210-f6d08db11b6c43066ac2ccb28';
const params =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=12&';

export class ImageGallery extends Component {
  state = {
    data: [],
    page: 1,
    isLoader: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchQuery;
    const nextName = this.props.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ page: 1, data: [] });
      this.newsApiService().then(res => {
        this.setState({ data: res });
      });
    }

    if (prevPage !== nextPage) {
      this.newsApiService().then(res => {
        this.setState(({ data }) => ({
          data: [...data, ...res],
        }));
      });
    }
  }

  newsApiService = async () => {
    try {
      this.toggleLoader();
      const res = await axios.get(
        `${BASE_URL}?${Key}&q=${this.props.searchQuery}&${params}&page=${this.state.page}`
      );
      this.toggleLoader();
      return res.data.hits;
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoader: false });
    }
  };

  toggleLoader = () => {
    this.setState(state => ({ isLoader: !state.isLoader }));
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
        <ul className="ImageGallery" onClick={this.onGalleryListClick}>
          {this.state.data.map(img => {
            return <ImageGalleryItem data={img} key={img.id} />;
          })}
        </ul>
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
