import React from 'react';
import styled from 'styled-components';
import { CustomComponentProps } from '../props';

type Props = {
  title: string;
  click?: (ev: Event) => void;
  disabled?: boolean;
};

const CustomButton = styled('button')<CustomComponentProps>`
  width: ${(props) => props.width || '231px'};
  height: ${(props) => props.height || '43px'};
  background: ${(props) => props.background || '#105DCF'};
  border-radius: ${(props) => props.borderRadius || '5px'};
  color: ${(props) => props.color || '#fff'};
  border: ${(props) => props.border || 'none'};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '8px'};
  text-align: ${(props) => props.textAlign || 'left'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
`;

const Button = (props: Props & CustomComponentProps) => (
  <CustomButton
    {...(props as CustomComponentProps)}
    onClick={(props as Props).click}
    background={props.disabled ? '#808080' : props.background}
    disabled={props.disabled}
  >
    {(props as Props).title}
  </CustomButton>
);

export default Button;
