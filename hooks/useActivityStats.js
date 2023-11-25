import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

const useActivityStats = () => {
  const activity = useSelector((state) => state.activity);

  return {
    stats: activity.stats,
    activities: activity.activities,
  };
};

export default useActivityStats;
