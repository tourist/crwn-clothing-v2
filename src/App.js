import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { setCurrentUser } from './store/user/user.action';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component.jsx';
import Checkout from './routes/checkout/checkout.component';
import { useAppDispatch } from './store/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        user = {
          accessToken: user.accessToken,
          email: user.email,
          displayName: user.displayName,
        };
      }
      dispatch(setCurrentUser(user));
    });
    return unsubsribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
