import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/redux/actions'; // Adjust the import as needed

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem('persist:root');

    dispatch(logoutUser());

    navigate('/auth');
  };

  return logout;
};

export default useLogout;
