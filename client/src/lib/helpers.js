import { API_URL } from '$lib/constants';
import axios from 'axios';

export async function getImages(collection) {
  try {
    const response = await axios.get(`${API_URL}/${collection}`);
    return response.data.map((photo) => {
      return {
        src: `${API_URL}${photo.Media[0].url}`,
        alt: photo.AltText,
        desc: photo.Description,
        id: photo.id
      };
    });
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getText(collection) {
  try {
    const innerName = 
      collection
      .split('-')
      .map(([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`)
      .join('')
      
    const response = await axios.get(`${API_URL}/${collection}`);

    return response.data[innerName][0]

  } catch (err) {
    console.error(err);
    return {};
  }
}