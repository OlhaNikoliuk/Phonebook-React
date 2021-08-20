import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { authOperations } from '../redux/auth';

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
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


 

  return (
    <div>
      <h1>Страница логина</h1>

      <form  style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
           
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
           
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}



export default LoginPage