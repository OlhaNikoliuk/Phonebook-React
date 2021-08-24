import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";
import {getUserName} from '../../redux/auth/auth-selectors'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

 function UserMenu() {
const dispatch = useDispatch()
 const userName = useSelector(getUserName)
  return (
    <div style={styles.container}>
      <img src='' alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {userName}</span>
      <button type="button" onClick={()=>dispatch(logout())}>
        Выйти
      </button>
    </div>
  );
}

export default UserMenu;