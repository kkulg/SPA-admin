import { useRouter } from 'vue-router';
import { signIn } from '@services/auth';

export default function useUserSignIn(username: string, password: string) {
  const router = useRouter();
  const handleSignIn = async () => {
    const result: any = await signIn(username, password);
    if (!result.errorCode) {
      router.push('/dashboard/analysis');
    }
  };

  return {
    handleSignIn
  };
}
