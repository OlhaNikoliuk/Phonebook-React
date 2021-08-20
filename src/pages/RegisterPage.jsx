import { useState } from 'react';
import { useDispatch } from 'react-redux';


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
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form  style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name}  />
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}


export default RegisterPage