import { getApiResource } from '@utils/network'
import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import routesConfig from '../../routes/routesConfig';

import styles from './App.module.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';

const App = () => {


  return (
    <div className={styles.wrapper}>
      <Header/>
      <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              />
          ))}
      </Routes>
      
    </div>
  )
}

export default App;
