import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Ether from '../../assets/images/ethe.png';
import Scroll from '../ScrollTo/ScrollTo';

const Container = styled.div`
  padding: 100px 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 20px;
  }
`;
const Title = styled.div`
  font-size: 46px;
  line-height: 54px;
  text-transform: capitalize;
  font-family: Gilroy-Bold;

  color: ${(props: any) => props.theme.headerTextColor};

  @media screen and (max-width: 900px) {
    margin-top: 15px;
    font-size: 20px;
    line-height: 23px;
  }
`;
const Desc = styled.div`
  margin-top: 30px;
  font-size: 27px;
  line-height: 32px;
  /* or 119% */
  font-family: 'Gilroy-Medium';
  display: flex;
  align-items: center;

  color: ${(props: any) => props.theme.regularTextColor};

  br {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

function DescSec() {
  return (
    <>
      <Container id="about1">
        <div>
          <Title>
            We are building one of the <br /> largest blockchain ecosystems <br /> in the industry
          </Title>
          <Desc>
            Our mission is to improve the freedom of money <br /> globally through the integration of institutions,{' '}
            <br /> people, groups and businesses into the <br />
            blockchain economy.
          </Desc>
        </div>
        <div>
          <Image src={Ether} alt="Explanatory image" height={546} width={550} />
        </div>
      </Container>
      <Scroll url="#about2" />
    </>
  );
}

export default DescSec;
