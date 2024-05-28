import { useRoutes } from 'react-router-dom';
import routes from './routes.routes';

const Router = () => {
  const renderRoutes = useRoutes(routes);
  return renderRoutes;
};

export default Router;
