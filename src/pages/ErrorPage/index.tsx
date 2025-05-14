import { Navigate } from 'react-router-dom';

const ErrorPage = () => {
  return <Navigate to="/auth" replace />;
};

export default ErrorPage;
