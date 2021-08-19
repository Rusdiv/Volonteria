import { useContext } from 'react';
import appRoutes from '../constants/appRoutes';
import AuthContext from '../store/auth-context';

export default function ProtectedRoute({ children, router }) {
  const { isLoggedIn } = useContext(AuthContext);
  const isBrowser = () => typeof window !== 'undefined';

  const unprotectedRoutes = [
    appRoutes.LOGIN_PAGE,
  ];

  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isLoggedIn && pathIsProtected) {
    router.push(appRoutes.LOGIN_PAGE);
  }

  return children;
}
