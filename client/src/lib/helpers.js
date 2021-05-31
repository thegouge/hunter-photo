import { API_URL } from '$lib/constants';
import axios from 'axios';

export async function getImages(collection) {
  try {
    const response = await axios.get(`${API_URL}/${collection}`);
    return response.data.reduce((photoArray, photoGroup) => {
      console.log({photoGroup})
      const photos = photoGroup.Media.map((photo) => {
        return {
          src: `${API_URL}${photo.url}`,
          alt: photo.alternativeText,
          id: photo.id
        };
      })
      return [...photoArray, ...photos]
    },[]);
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