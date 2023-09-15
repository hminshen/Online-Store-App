import { useEffect } from 'react';
import { useRouter } from 'next/router';

function UseRouteLogin() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the "/login" route when accessing the root "/"
    router.push('/login');
  }, []); 

  return;
};

export default UseRouteLogin;





