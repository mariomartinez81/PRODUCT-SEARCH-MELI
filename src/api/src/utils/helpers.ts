import axios from 'axios';
import { config } from './constants';

const { API_URL } = config;

export const fetchExternalApi = async (url: string, operationName?: string) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(`Error fetch ${operationName}: ${error}`);
  }
};

export const getItemsFromExternalApi = async (search?: string) =>
  await fetchExternalApi(
    `${API_URL}/sites/MLA/search?q=${search}`,
    'getItemsFromExternalApi',
  );

export const getItemByIdExternalApi = async (id: string) =>
  await fetchExternalApi(`${API_URL}/items/${id}`, 'getItemByIdExternalApi');

export const getDescriptionItemByIdExternalApi = async (id: string) =>
  await fetchExternalApi(
    `${API_URL}/items/${id}/description`,
    'getDescriptionItemByIdExternalApi',
  );
