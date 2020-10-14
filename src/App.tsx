import React from 'react';

// import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

// import AuthContext from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
