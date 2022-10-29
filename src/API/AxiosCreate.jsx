import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const Key = 'key=29860210-f6d08db11b6c43066ac2ccb28';
const params =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=12&';

export const newsApiService = async (
  searchQuery,
  page,
  hideLoader,
  showLoader
) => {
  try {
    showLoader();
    const res = await axios.get(
      `${BASE_URL}?${Key}&q=${searchQuery}&${params}&page=${page}`
    );
    hideLoader();
    return res.data.hits;
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};
