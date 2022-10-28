import PropTypes from 'prop-types';
import { Button } from './Button.styled';

export const LoadMore = ({ onClickLoadMore }) => {
  return <Button onClick={onClickLoadMore}>Load More</Button>;
};

LoadMore.propTypes = {
  onClickLoadMore: PropTypes.func,
};
