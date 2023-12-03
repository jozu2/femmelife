import { useDispatch } from "react-redux";
import useUserDetails from "../../hooks/useUserDetails";
export const dispatchAction = ({
  action,
  selectedChoice,
  setSelectedChoice,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(putUserLastPeriod(selectedChoice));
  }, [selectedChoice]);

  const handleChoiceSelect = (number, isSelected) => {
    if (isSelected) {
      setSelectedChoice(number);
    } else {
      setSelectedChoice(null);
    }
  };

  return {
    handleChoiceSelect,
  };
};
