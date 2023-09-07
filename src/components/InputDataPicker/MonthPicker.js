import React from "react";
import propTypes from "prop-types";
import { buildMonths } from "./generator";
import styled from "styled-components";
import { neutral, spacing } from "../../utils";
import { TertiaryButton } from "../Button";
import { selectedStyle } from "./minins";

const MonthTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: ${spacing.padding.normal};
`;

const MonthCell = styled.td`
  width: 33.3%;
  border: 0.1rem solid ${neutral[300]};
`;

const MonthButton = styled(TertiaryButton)`
  height: 5.7rem;
  width: 100%;
  padding: 0;
  font-size: 1.2rem;
  ${selectedStyle}
`;

function MonthPicker(props) {
  const { selectedMonthIndex, onSelectMonth } = props;
  const months = buildMonths();
  return (
    <MonthTable>
      <tbody>
        {months.map((row, i) => (
          <tr key={i}>
            {row.map((month, j) => {
              const isSelected = month.index === selectedMonthIndex;
              return (
                <MonthCell key={j}>
                  <MonthButton
                    isSelected={isSelected}
                    onClick={() => {
                      onSelectMonth(month.index);
                    }}
                  >
                    {month.name}
                  </MonthButton>
                </MonthCell>
              );
            })}
          </tr>
        ))}
      </tbody>
    </MonthTable>
  );
}

MonthPicker.propTypes = {
  selectedMonthIndex: propTypes.number,
  onSelectMonth: propTypes.func,
};

export default MonthPicker;
