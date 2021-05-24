import { useRouter } from 'vue-router';
import { authService } from '@services';

export default function useUserSignIn(username: string, password: string) {
  const router = useRouter();
  const handleSignIn = async () => {
    const result: any = await authService.signIn(username, password);
    if (!result.errorCode) {
      router.push('/dashboard/analysis');
    }
  };

  return {
    handleSignIn
  };
}
