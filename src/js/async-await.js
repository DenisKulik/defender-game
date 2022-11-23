import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const data = await json(response);

    return data;
  }
}
