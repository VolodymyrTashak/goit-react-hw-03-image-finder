import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
// import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      Notify.failure('Please write what to look for');
      // toast.error('Please write what to look for', {
      //   position: 'top-right',
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BsSearch size={25} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
