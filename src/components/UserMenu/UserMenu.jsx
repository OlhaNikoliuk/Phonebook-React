import { useSelector, useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import { UserInfoWrap, Welcome, OutBtn } from './UserMenu.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <UserInfoWrap>
      <Welcome> {userName}</Welcome>
      <OutBtn type='button' onClick={() => dispatch(logout())}>
        <FiLogOut size='18' />
      </OutBtn>
    </UserInfoWrap>
  );
}

export default UserMenu;
