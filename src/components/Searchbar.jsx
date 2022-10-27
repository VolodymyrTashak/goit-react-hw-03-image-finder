import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import './styles.css';
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
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <BsSearch size={25} />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
