/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Scroll from '../ScrollTo/ScrollTo';

const Container = styled.div`
  padding: 100px 50px 0 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const Title = styled.div`
  font-size: 46px;
  text-transform: capitalize;
  font-family: Gilroy-Bold;

  color: ${(props: any) => props.theme.headerTextColor};

  @media screen and (max-width: 900px) {
    margin: 15px 0;
    font-size: 25px;
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
    display: none;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;
const Desc1 = styled.div`
  display: none;
  margin-top: 30px;
  font-size: 27px;
  line-height: 32px;
  align-items: center;

  color: ${(props: any) => props.theme.regularTextColor};

  br {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    font-size: 25px;
    margin-bottom: 20px;
    font-family: Gilroy-Medium;
  }
`;

function About3() {
  const [flexSetting, setFlexSetting] = useState('flex-start');

  useEffect(() => {
    if (window.innerWidth < 900) {
      setFlexSetting('center');
    } else {
      setFlexSetting('flex-start');
    }
  }, [window.innerWidth]);

  return (
    <Container>
      <div>
        <Title>
          revolutionizing Innovation <br />
          in the Blockchain Technology <br /> Globally
        </Title>
        <Desc>
          Our vision is to be the global leader for <br /> institutional and mass adoption by providing <br />{' '}
          blockchain infrastructure and solutions.{' '}
        </Desc>

        <Scroll justifyContent={flexSetting} url="#change_section" />
      </div>
      <div className="img-con">
        <Image
          src="/images/revo.png"
          alt="Explanatory image"
          layout="fill"
          // height= {546}
          // width = {480}
        />
      </div>
      <Desc1>
        Our Vision is to be the global leader for <br /> institutional and mass adoption by providing <br /> blockchain
        infrastructure and solutions.
      </Desc1>
    </Container>
  );
}

export default About3;
