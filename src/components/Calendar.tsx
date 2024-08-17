import React, { ReactNode, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useCalendarContext } from '../CalendarContext';
import type { CalendarViews } from '../enums';
import type { HeaderProps } from '../types';
import Header from './Header';
import YearSelector from './YearSelector';
import MonthSelector from './MonthSelector';
import DaySelector from './DaySelector';
import TimeSelector from './TimeSelector';
import { CALENDAR_HEIGHT, CALENDAR_WIDTH } from '../enums';

const CalendarView: Record<CalendarViews, ReactNode> = {
  year: <YearSelector />,
  month: <MonthSelector />,
  day: <DaySelector />,
  time: <TimeSelector />,
};

interface PropTypes extends HeaderProps {
  height?: number;
  containerHeight?: number|string;
  width?: number|string;
}

const Calendar = ({ buttonPrevIcon, buttonNextIcon, height, containerHeight, width }: PropTypes) => {
  const { calendarView } = useCalendarContext();

  const styles = StyleSheet.create({
    container: {
      width: width || CALENDAR_WIDTH,
      height: containerHeight || CALENDAR_HEIGHT,
      maxHeight: containerHeight || CALENDAR_HEIGHT,
    },
    calendarContainer: {
      height: height || CALENDAR_HEIGHT,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container} testID="calendar">
      {/* {mode !== 'time' ? (
        <Header
          buttonPrevIcon={buttonPrevIcon}
          buttonNextIcon={buttonNextIcon}
        />
      ) : null} */}
      <Header buttonPrevIcon={buttonPrevIcon} buttonNextIcon={buttonNextIcon} />
      <View style={styles.calendarContainer}>{CalendarView[calendarView]}</View>
    </View>
  );
};

export default memo(Calendar);
