import styled from 'styled-components';
import { darkTheme, lightTheme } from '../themes';
import { CustomContainer } from '../components/Container';

export const Container = styled(CustomContainer)`
  width: 100%;
  margin-top: 100px;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Gilroy-SemiBold;

  .heading {
    padding: 5px;
    z-index: 3;
  }

  @media screen and (max-width: 900px) {
    margin-top: 70px;
    /* padding: 30px 20px ; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroText = styled.div`
  padding-left: 30px;
  .but-div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    a {
      text-decoration: none;
    }

    @media screen and (max-width: 900px) {
      justify-content: center;
    }
  }
  .brief {
    width: 80%;
  }

  @media screen and (max-width: 900px) {
    .brief {
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 0;
    margin-bottom: 30px;
  }

  .welcome {
    font-size: 97px;
    letter-spacing: -0.015em;
    font-family: Gilroy-ExtraBold;

    color: ${(props) => props.theme.headerTextColor};

    @media screen and (max-width: 900px) {
      font-size: 35px;
      line-height: 41px;
      justify-content: center;
      text-align: center;
    }
  }
  .ecosystem {
    letter-spacing: -0.015em;
    font-family: 'Gilroy-Heavy';
    background: linear-gradient(160.06deg, #105dcf 41.12%, #6f87df 50.6%, #6fdfee 75.89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media screen and (max-width: 900px) {
      font-size: 35px;
      line-height: 41px;
      justify-content: center;
    }
  }

  p {
    margin-top: 20px;
    font-size: 27px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;

    color: ${(props) => props.theme.regularTextColor};

    br {
      display: block;

      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    @media screen and (max-width: 900px) {
      font-size: 15px;
      line-height: 18px;
      justify-content: center;
      text-align: center;
    }
  }
`;

export const ImageCon = styled.div``;
// export const ButCon= styled.div`
// display: flex;
// align-items: center;
// text-align: center;
// `

export const Button = styled.button`
  margin-top: 30px;
  background: #105dcf;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 21px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.015em;
  cursor: pointer;
  color: #ffffff;
  font-family: Gilroy-ExtraBold;
  .icon {
    color: #ffffff;
    margin-left: 5px;
  }
`;
