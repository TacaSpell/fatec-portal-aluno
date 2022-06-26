import { Routes, Route } from 'react-router-dom';
import Home from './container/Home/Home';
import LoginPage from './container/LoginPage/LoginPage';
import NoRouteFound from './container/NoRouteFound/NoRouteFound';
import './App.css';
import { UserProvider } from './context/UserContext';
import { AuthContextProvider } from './context/AuthContext';
import { AuthenticatedRoutes } from './hoc/AuthenticatedRoutes';
import { UnauthenticatedRoutes } from './hoc/UnauthenticatedRoutes';

function App() {
  return (
    <AuthContextProvider>
      <UserProvider>
        <Routes>
          <Route element={<UnauthenticatedRoutes />}>
            <Route path="/" exact element={<LoginPage />} />
          </Route>

          <Route element={<AuthenticatedRoutes />}>
            <Route path="/home/historic" exact element={<Home main="historic" />} />
            <Route path="/home/actualperiod" exact element={<Home main="actualperiod" />} />
            <Route path="/home/alerts" exact element={<Home main="alerts" />} />
            <Route path="/home/changepassword" exact element={<Home main="changepassword" />} />
            <Route path="/home" exact element={<Home />} />
          </Route>

          {<Route path="*" element={<NoRouteFound />} />}
        </Routes>
      </UserProvider>
    </AuthContextProvider>
  );
}

export default App;
