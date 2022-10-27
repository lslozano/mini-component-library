import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        <Text>{displayedValue}</Text>
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationalSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  padding-inline-end: 10px;

  /* Single source of style. Only styles that affect this component are declared here */
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-inline-end: 12px;
`;

export default Select;
