/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "24px",
    "--borderRadius": "8px",
    "--padding": "4px",
  }
}

const ProgressBar = ({ value, size }) => {
  let styles = SIZES[size]

  if (!styles) {
    throw new Error(`Invalid size passed: ${size}`)
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={styles}
    >
      <VisuallyHidden>{`${value}%`}</VisuallyHidden>
      <TrimmWrapper>
        <Bar style={{ '--width': `${value}%` }}/>
      </TrimmWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
`

const TrimmWrapper = styled.div`
  border-radius: var(--borderRadius);

  /* Trim off corners when progress bar is near-full */
  overflow: hidden;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;

// Progress bar can be created with a div, only that this div must be assigned the progressbar role

/*

Components needed for this problem:
Wrapper - Main wrapper of the progress bar. Would require progressbar role.
VisuallyHidden - Will receive the value accompanied with a percentage sign.
TrimmerWrapper - Wrapper which would encapsulate the progress bar in order to allow the use of overflow hidden
Bar - The bar itself.

First solution:

const Container = styled.div`
  display: inline;

  progress {
    width: 370px;
    height: var(--height);
  }

  progress[value] {
    --webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--borderRadius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
  }

  progress[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--borderRadius);
    border-top-right-radius: ${props => props.value >= 99 ? 'var(--borderRadius)' : '0'};
    border-bottom-right-radius: ${props => props.value >= 99 ? 'var(--borderRadius)' : '0'};
  }
`

const ProgressBar = ({ value, size }) => {
  let styles = SIZES[size]

  return (
    <Container style={styles} value={value}>
      <VisuallyHidden>Progress bar</VisuallyHidden>
      <progress id="progresslabel" min="0" max="100" value={value}></progress>
    </Container>
  );
};

*/