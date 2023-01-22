import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage';
import ErrorPage from '../containers/ErrorPage';
import PersonPage from '../containers/PersonPage/PersonPage';
import FavoritePage from '../containers/FavoritePage/FavoritePage';
import SearchPage from '../containers/SearchPage/SearchPage';
import ErrorMessage from '../components/ErrorMessage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    },
    {
        path: '/favorites',
        element: <FavoritePage/>
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
    {
        path: '*',
        element: <ErrorPage/>
    },
    {
        path: '/fail',
        element: <ErrorMessage/>
    },
    {
        path: '/not-found',
        element: <ErrorPage/>
    },

]

export default routesConfig;