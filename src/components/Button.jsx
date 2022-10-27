import PropTypes from 'prop-types';

export const LoadMore = ({ onClickLoadMore }) => {
  return (
    <button className="Button" onClick={onClickLoadMore}>
      Load More
    </button>
  );
};

LoadMore.propTypes = {
  onClickLoadMore: PropTypes.func,
};
