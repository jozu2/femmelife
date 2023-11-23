import React, { useRef, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar } from 'react-native-calendars';
import { MedicineCard } from '../../components';
import { medicineData, getMarkedDates } from './medicineData';
import { COLORS, SIZES } from '../../styles';


const ITEMS = medicineData;

const ExpandableCalendarScreen = (props) => {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  // const theme = useRef(getTheme());
  // const todayBtnTheme = useRef({
  //   todayButtonTextColor: themeColor,
  // });

  const renderItem = useCallback(({ item }) => {
    return <MedicineCard item={item} />;
  }, []);

  return (
    <CalendarProvider
      date={ITEMS[1]?.title}
      showTodayButton
    // theme={todayBtnTheme.current}
    >
      {weekView ? (
        <WeekCalendar testID={testIDs.weekCalendar.CONTAINER} firstDay={1} markedDates={marked.current} />
      ) : (
        <ExpandableCalendar
          // theme={theme.current}
          firstDay={1}
          markedDates={marked.current}
        />
      )}
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        sectionStyle={styles.section}
      />
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;


const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: COLORS.gray3,
  },
  section: {
    backgroundColor: COLORS.lightGray2,
    color: COLORS.gray3,
  },
});
