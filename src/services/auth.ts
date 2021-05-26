import { API } from '@/apis';
import { http } from '@utils';

/**
 * 用户登录
 * @param username 用户名
 * @param password 密码
 * @returns
 */
function signIn(username: string, password: string) {
  return http.post(API.SIGN_IN, {
    username,
    password
  });
}

export { signIn };
