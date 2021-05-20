import { useRouter } from 'vue-router';

export default function useUserSignIn(username: string, password: string) {
  const router = useRouter();
  const handleSignIn = () => {
    if (username === 'admin' && password === '888888') {
      router.push('/dashboard/analysis');
    }
  };

  return {
    handleSignIn
  };
}
