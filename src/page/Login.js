import { LoginForm } from 'components/LoginForm/LoginForm';

const { Helmet } = require('react-helmet');

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm/>
    </div>
  );
};

export default Login;
