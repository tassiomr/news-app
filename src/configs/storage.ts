import {AsyncStorage} from 'react-native';

export async function getItem(key: Keys) {
  return await AsyncStorage.getItem(key);
}
export function saveItem(key: Keys, data: string) {
  AsyncStorage.setItem(key, data);
}
export async function deleteItem(key: Keys) {
  await AsyncStorage.removeItem(key);
}

export enum Keys {
  NYT_THEME = '@NYT:THEME',
  DARK_MODE = '@NYT:DARK_MODE',
  SYSTEM_DARK_MODE = '@NYT:SYSTEM_DARK_MODE',
}
