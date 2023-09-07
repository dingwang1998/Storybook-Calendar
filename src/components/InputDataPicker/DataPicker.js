import React, { useMemo } from "react";
import propTypes from "prop-types";
import { tint } from "polished";
import { buildDayName, buildweeks } from "./generator";
import { getDate, getMonth, isSameDay } from "date-fns";
import dateFnsIsToday from "date-fns/isToday";
import { TertiaryButton } from "../Button";
import styled, { css } from "styled-components";
import { defaultTheme, neutral, spacing } from "../../utils";
import { selectedStyle } from "./minins";

const CanlendarRow = styled.tr`
  height: 3.6rem;
  text-align: center;
`;

const CalendarTable = styled.table`
  position: relative;
  width: 100%;
`;

const CanlendarHeight = styled.tr`
  &:after {
    content: "";
    width: 100%;
    border-bottom: 0.1rem solid ${neutral[300]};
    position: absolute;
    left: 0;
    top: 2.3rem;
  }
  th {
    padding-bottom: ${spacing.padding.small};
  }
`;

const CalendarDay = styled(TertiaryButton)`
    height:2.4rem;
    width:2.4rem;
    line-height:2.4rem;
    padding:0;
    border:none;
    border-radius:50%;

    ${(props) =>
      props.isToday &&
      css`
        background-color: ${tint(0.9, defaultTheme.primaryColor)};
        border: 0.1rem solid ${defaultTheme.primaryColor};
      `}

    ${(props) =>
      !props.isCurrentMonth &&
      css`
        opacity: 0.5;
      `}
    ${selectedStyle}
`;

function DataPicker(props) {
  const { selectedDate, calendar, onSelectDate } = props;
  console.log(selectedDate);
  const { year, monthIndex } = calendar;
  const weeks = useMemo(() => buildweeks(year, monthIndex), [year, monthIndex]);
  const dayNames = useMemo(() => buildDayName(0), []);
  return (
    <CalendarTable>
      <thead>
        <CanlendarHeight>
          {dayNames.map((dayname, i) => (
            <th key={i}>{dayname}</th>
          ))}
        </CanlendarHeight>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <CanlendarRow key={i}>
            {week.map((day, j) => {
              const isToday = dateFnsIsToday(day);
              const isCurrentMonth = getMonth(day) === monthIndex;
              const isSelected = isSameDay(day, selectedDate);
              return (
                <td key={j}>
                  <CalendarDay
                    isToday={isToday}
                    isCurrentMonth={isCurrentMonth}
                    isSelected={isSelected}
                    onClick={(e) => onSelectDate(e, day)}
                  >
                    {getDate(day)}
                  </CalendarDay>
                </td>
              );
            })}
          </CanlendarRow>
        ))}
      </tbody>
    </CalendarTable>
  );
}

DataPicker.propTypes = {
  calendar: propTypes.shape({
    yaer: propTypes.number,
    monthIndex: propTypes.number,
  }),
  selectedDate: propTypes.instanceOf(Date),
  onSelectDate: propTypes.func,
};

export default DataPicker;
