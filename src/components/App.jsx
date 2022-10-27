import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
export class App extends Component {
  state = {
    cardName: '',
  };
  handleFormSubmit = searchQuery => {
    this.setState({ cardName: searchQuery });
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.cardName} />
      </div>
    );
  }
}
