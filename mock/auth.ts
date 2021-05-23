import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/signIn',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      if (username === 'admin' && password === '888888') {
        return {
          username: 'admin'
        };
      } else {
        return {
          errorCode: '000001',
          message: 'sign in error'
        };
      }
    }
  }
] as MockMethod[];
