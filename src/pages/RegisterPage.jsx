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
    // marginBottom: 15,
  },
};

function RegisterPage() {
  const dispath = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        return setName(value);

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
    dispath(authOperations.register({name, email, password}))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form style={styles.form} autoComplete='off' onSubmit={handleSubmit}>
        <label style={styles.label}>
          Имя
          <input type='text' name='name' autoComplete='off' value={name} onChange={handleChange}/>
        </label>

        <label style={styles.label}>
          Почта
          <input type='email' name='email' value={email} onChange={handleChange}/>
        </label>

        <label style={styles.label}>
          Пароль
          <input type='password' name='password' value={password} onChange={handleChange}/>
        </label>

        <button type='submit'>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegisterPage;
