import { NewLifecycle, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { setCurrentUser } from './store/user/user.action';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import { useAppDispatch } from './store/hooks';
import { User } from './store/user/user.types';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      let localUser: User | null = null;

      if (user) {
        createUserDocumentFromAuth(user);
        if (user.email && user.displayName) {
          localUser = {
            email: user.email,
            displayName: user.displayName,
          };
        }
      }
      dispatch(setCurrentUser(localUser));
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
