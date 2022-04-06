import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  padding: 30px 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 0 20px;
  }

  .mother-con {
    display: flex;
    border-right: 1.5px solid;
    border-image: linear-gradient(45deg, #105dcf45, #105dcf, #60dbd4, #105dcf45);
    border-image-slice: 3;

    @media screen and (max-width: 900px) {
      border: none;
    }

    .img-card1 {
      margin: 50px 20px 0 0;
      .mind-con {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px 0;

        .mind-name {
          font-size: 26px;
          line-height: 24px;
          display: flex;
          align-items: center;
          text-align: center;
          text-transform: capitalize;
          margin-bottom: 5px;
          font-family: Gilroy-Bold;
          color: ${(props) => props.theme.themeMemberName} !important;
        }
        .post {
          font-size: 16px;
          line-height: 14px;
          display: flex;
          align-items: center;
          text-align: center;
          text-transform: capitalize;
          font-family: Gilroy-Medium;
          color: ${(props) => props.theme.teamMemberTitle};
        }
      }

      @media screen and (max-width: 900px) {
        border: none;
      }
    }
    .img-card2 {
      margin: 0 20px 60px 0;

      .mind-con {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px 0;

        .mind-name {
          font-size: 26px;
          line-height: 24px;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          text-align: center;
          text-transform: capitalize;
          font-family: Gilroy-Bold;
          color: ${(props) => props.theme.themeMemberName} !important;
        }
        .post {
          font-size: 16px;
          line-height: 14px;
          display: flex;
          align-items: center;
          text-align: center;
          text-transform: capitalize;
          font-family: Gilroy-Medium;
          color: ${(props) => props.theme.teamMemberTitle};
        }
      }
    }
  }

  .gen-card {
    background: ${(props) => props.theme.themeMemberCard};
    padding: 80px 40px;
    width: 600px;
    margin: 0 40px;

    @media screen and (max-width: 900px) {
      padding: 10px;
      width: auto;
      margin-bottom: 30px;
      background: none;
    }

    .big-text {
      font-size: 62px;
      line-height: 74px;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      color: ${(props) => props.theme.teamHeading};
      font-family: Gilroy-ExtraBold;
      br {
        @media screen and (max-width: 900px) {
          display: none;
        }
      }

      @media screen and (max-width: 900px) {
        font-size: 30px;
        line-height: 35px;
      }
    }

    .small-text {
      margin-top: 20px;
      font-size: 27px;
      line-height: 32px;
      display: flex;
      font-family: Gilroy-Medium;
      color: ${(props) => props.theme.teamBody};
      align-items: center;
      color: #333333;
      @media screen and (max-width: 900px) {
        font-size: 15px;
        line-height: 23px;
      }
    }
  }
`;
