// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import IAuthService from '@interface/IAuthService';
import axios, { AxiosError } from 'axios';

export default class AuthService implements IAuthService {
  async login(email: string, password: string): Promise<string> {
    return await axios
      .get(`http://localhost:2000/${email}`)
      .then((res) => {
        return res.data;
      })
      .catch((error: AxiosError) => {
        if (error.response) throw new Error(`${error.response.data}`);
        else if (error.request) throw new Error(error.request);
        else throw new Error(error.message);
      });
  }
  logout(email: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
  register(email: string, password: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}