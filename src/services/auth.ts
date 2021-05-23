import { API } from '@/apis';
import { http } from '@utils';

class AuthService {
  /**
   * signIn
   */
  public signIn(username: string, password: string) {
    return http.post(API.SIGN_IN, {
      username,
      password
    });
  }
}

export const authService = new AuthService();
