import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(authOperations.login({email, password}))
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h1>Страница логина</h1>

      <form style={styles.form} autoComplete='off' onSubmit={handleSubmit}>
        <label style={styles.label}>
          Почта
          <input type='email' name='email' value={email} onChange={handleChange}/>
        </label>

        <label style={styles.label}>
          Пароль
          <input type='password' name='password' value={password} onChange={handleChange}/>
        </label>

        <button type='submit'>Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
