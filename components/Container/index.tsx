import React from 'react'
import styled from 'styled-components'
import { CustomComponentProps } from '../props';


type Props = {
  
};

export const CustomContainer = styled.div<CustomComponentProps>`  

width:100% ;

`

const Container = (props: Props & CustomComponentProps) => (
    <CustomContainer
      {...(props as CustomComponentProps)}
      
    >
    
    </CustomContainer>
  );
  
  export default Container;