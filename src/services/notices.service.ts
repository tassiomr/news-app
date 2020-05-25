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
      picture: e.multimedia[2].url,
      isFavorite: false,
      link: e.short_url,
    });
  });

  return response;
};

async function getTechnologyNotices() {
  const response: any = await api.get(
    technology.replace('{api-key}', constants.apiKey),
  );

  if (response) {
    return {data: rawNotice(response.results), copyright: response.copyright};
  }

  return {data: [], copyright: ''};
}
async function getScienceNotices() {
  const response: any = await api.get(
    science.replace('{api-key}', constants.apiKey),
  );

  if (response) {
    return {data: rawNotice(response.results), copyright: response.copyright};
  }

  return {data: [], copyright: ''};
}

export default {
  getTechnologyNotices,
  getScienceNotices,
};
