import React from 'react'
import styled from 'styled-components'
import { CustomComponentProps } from '../props';


type Props = {
  title: string;
  click?: (ev: Event) => void;
  disabled?: boolean;
};

export const CustomContainer = styled.div<CustomComponentProps>`  

width:100% ;

`

const Container = (props: Props & CustomComponentProps) => (
    <CustomContainer
      {...(props as CustomComponentProps)}
      
    >
      {(props as Props).title}
    </CustomContainer>
  );
  
  export default Container;