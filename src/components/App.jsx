import { Component } from 'react';
import { AppBox } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    cardName: '',
  };
  handleFormSubmit = searchQuery => {
    this.setState({ cardName: searchQuery });
  };

  render() {
    return (
      <AppBox>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.cardName} />
      </AppBox>
    );
  }
}
