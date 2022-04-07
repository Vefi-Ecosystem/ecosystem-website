import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    .border {
      width: 100%;
      margin-top: 15px;
      border-bottom: 1px solid;
      border-image: linear-gradient(90deg, #105dcf45, #105dcf, #105dcf45) 1 stretch;
      border-image-slice: 1;
    }
  }

  .title-desc {
    @media screen and (max-width: 900px) {
      position: absolute;
      z-index: 2;
      bottom: 20px;
      height: 100%;
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      background: linear-gradient(
        180deg,
        rgba(29, 29, 29, 0) 24.81%,
        rgba(29, 29, 29, 0.636364) 46.07%,
        #1d1d1d 71.64%
      );
    }
  }

  @media screen and (max-width: 900px) {
    position: relative;
    overflow: hidden;
    flex-direction: column-reverse;
    padding: 20px;
    justify-content: center;
  }
`;
const Title = styled.div`
  font-size: 46px;
  line-height: 54px;
  text-transform: capitalize;
  font-family: Gilroy-Bold;
  color: ${(props: any) => props.theme.blockTextHead};

  @media screen and (max-width: 900px) {
    color: #fff;
    margin-top: 20px;
    font-size: 25px;
    line-height: 23px;
    text-align: center;
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

  color: ${(props: any) => props.theme.blockTextBody};

  br {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    color: #fff;
    margin-bottom: 60px;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
  }
`;

function About4() {
  return (
    <Container id="change_section">
      <div className="border"></div>
      <div className="title-desc">
        <Title>
          Changing the world’s future <br /> through blockchain technology
        </Title>
        <Desc>To build and deploy innovative, cutting-edge and scalable blockchain solutions.</Desc>
      </div>
      <div>
        <Image src="/images/chang.png" width={589} height={510} alt="Explanatory image" />
      </div>
    </Container>
  );
}

export default About4;
