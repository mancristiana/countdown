import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: 'Client-ID 042454a26c390216eda97edd0c96560ecb88b5753a79bb740dc8283b7a7d665b' }
});

export async function getRandomPhoto(query) {
  try {
    const response = await api.get(`/photos/random?query=${query}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      color: '#CACEE3',
      urls: {
        full: 'https://images.unsplash.com/photo-1468869977640-b71ff134f40d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU4MTUwfQ'
      }
    };
  }
}
