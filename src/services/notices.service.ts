import api from '../network/api';
import endpoints from '../../src/network/endpoints';
import {constants} from '../../src/configs/constants';
import {INotice} from 'src/typescript/interfaces';

const {technology, science} = endpoints;

const rawNotice = (data: any): [INotice?] => {
  const response: [INotice?] = [];
  data.forEach((e: any) => {
    response.push({
      id: e.title,
      title: e.title,
      resume: e.abstract,
      picture: e.multimedia[0].url,
      isFavorite: false,
      link: e.short_url,
    });
  });

  return response;
};

async function getTechnologyNotices() {
  try {
    const response = await api.get(
      technology.replace('{api-key}', constants.apiKey),
    );

    if (response) {
      return rawNotice(response);
    }

    return [];
  } catch (error) {
    return [];
  }
}
async function getScienceNotices() {
  try {
    const response = await api.get(
      science.replace('{api-key}', constants.apiKey),
    );

    if (response) {
      return rawNotice(response);
    }

    return [];
  } catch (error) {
    return [];
  }
}

export default {
  getTechnologyNotices,
  getScienceNotices,
};
