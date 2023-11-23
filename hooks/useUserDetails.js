import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

const useUserDetails = () => {
  const user = useSelector((state) => state.user);

  return {
    user,
  };
};

export default useUserDetails;