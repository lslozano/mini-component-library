import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const ICON = {
  small: 16,
  large: 20,
};

const INPUT = {
  small: {
    padding: 25,
    borderThickness: 1,
  },
  large: {
    padding: 30,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (size !== 'small' || size !== 'large') {
    throw new Error(`${size} not recognized as size. Use small or large only`);
  }

  return (
    <Wrapper style={{ '--size': width + 'px' }}>
      <VisuallyHidden>
        <label htmlFor="input">{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{ '--size': ICON[size] + 'px' }}>
        <Icon id={icon} strokeWidth={1} size={ICON[size]} />
      </IconWrapper>
      <TextInput
        type="text"
        name="input"
        placeholder={placeholder}
        style={{
          '--size': width + 'px',
          '--leftPadding': INPUT[size].padding + 'px',
          '--borderThickness': INPUT[size].borderThickness + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--size);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--size);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding: 4px;
  padding-inline-start: var(--leftPadding);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto #4374cb;
    outline-offset: 4px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
`;

export default IconInput;
