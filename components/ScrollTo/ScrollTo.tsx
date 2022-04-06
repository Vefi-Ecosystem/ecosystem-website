import React from 'react';
import styled from 'styled-components';
import { FiArrowDown } from 'react-icons/fi';
import { lightTheme, darkTheme } from '../../themes';
import { CustomComponentProps } from '../props';

const Container = styled.div<CustomComponentProps>`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'center'};
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${(props: any) => props.theme.jumpArrowbgColor};
    box-shadow: ${(props: any) => props.theme.jumpArrowShadow};
    font-size: 25px;
    color: rgba(16, 93, 207, 1);

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Scroll(props: any & CustomComponentProps) {
  return (
    <Container justifyContent={props.justifyContent}>
      <div>
        <a href={props.url}>
          <FiArrowDown />
        </a>
      </div>
    </Container>
  );
}

export default Scroll;
