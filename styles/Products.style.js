import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .prod {
    margin: 20px 0;
    font-size: 62px;
    line-height: 74px;
    text-transform: capitalize;
    color: rgba(29, 29, 29, 1);

    @media screen and (max-width: 900px) {
      font-size: 22px;
      line-height: 20px;
    }
  }

  .tab-block {
    padding: 0 100px;

    @media screen and (max-width: 900px) {
      padding: 10px;
    }

    .tab-seg {
      margin: 20px 0;
      display: flex;
      align-items: center;

      .tabs {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border: 0.5px solid ${(props) => props.theme.productBorder};
        box-sizing: border-box;
        border-radius: 3px;
        margin: 0 20px;
        cursor: pointer;
        background: ${(props) => props.theme.productBackground};
        text-transform: uppercase;

        .svg {
          fill: ${(props) => props.theme.svgColor};
          margin-right: 10px;
          stroke: ${(props) => props.theme.svgColor};
        }

        .prod-tab {
          color: ${(props) => props.theme.productText};
          margin: 0;
          padding: 0;
        }

        @media screen and (max-width: 900px) {
          display: none;
        }
      }
      .tabs.active-tab {
        background: ${(props) => props.theme.productBackgroundActive};
        border: none;
      }

      .svg.active-tab {
        stroke: ${(props) => props.theme.svgColorActive};
        fill: ${(props) => props.theme.svgColorActive};
        margin-right: 10px;
      }

      .prod-tab.active-tab {
        color: ${(props) => props.theme.productTextActive};
        margin: 0;
        padding: 0;
      }
    }
  }

  .tab-content {
    .content {
      display: none;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;

      @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        background: #161616;
        /* margin-bottom:30px ; */
        min-width: 200px;
        padding: 20px;
        margin: 10px;
      }

      .content-img {
        width: 350px;
        height: 300px;
        border: 1px solid black;
        background: ${(props) => props.theme.contImg};

        @media screen and (max-width: 900px) {
          width: auto;
          height: 100px;
          background: transparent;
        }
      }

      .content-text {
        margin-left: 35px;

        @media screen and (max-width: 900px) {
          margin: 0;
          padding: 10px 0;
        }
        .product-con {
          .prod-log-con {
            display: flex;
            align-items: center;
            .prod-log {
              margin-right: 20px;

              .svg-active {
                fill: ${(props) => props.theme.svgColor};
              }
            }
            .prod-title {
              font-size: 50px;
              line-height: 16px;
              display: flex;
              align-items: center;
              color: ${(props) => props.theme.prodTitle};

              @media screen and (max-width: 900px) {
                font-size: 15px;
                line-height: 16px;
              }
            }
          }
          .prod-desc {
            margin-top: 30px;
            width: 551px;
            font-size: 27px;
            line-height: 32px;
            display: flex;
            align-items: center;
            text-align: justify;
            color: ${(props) => props.theme.regularTextColor};

            @media screen and (max-width: 1200px) {
              width: 300px;
              font-size: 18px;
              line-height: 20px;
            }
            @media screen and (max-width: 900px) {
              width: auto;
              font-size: 10px;
              line-height: 16px;
              margin: 0;
            }
          }
          .prod-btn {
            margin-top: 30px;
            @media screen and (max-width: 900px) {
              margin: 0;
            }

            button {
              padding: 10px 30px;
              outline: none;
              border: none;
              background: #105dcf;
              border-radius: 5px;
              font-size: 20px;
              line-height: 16px;
              display: flex;
              align-items: center;
              color: #ffffff;
              cursor: pointer;

              .icon {
                font-size: 25px;
                margin-left: 10px;
              }

              @media screen and (max-width: 900px) {
                background: none;
                font-size: 10px;
                line-height: 16px;
                margin: 0;
                padding: 0;
                color: #105dcf;
              }
            }
          }
        }
      }
    }

    .content.active-content {
      display: flex;
    }

    @media screen and (max-width: 900px) {
      padding: 10px;
      margin: 0;
      width: 100%;
      display: flex;
      align-items: center;
      overflow-x: scroll;
      justify-content: space-between;

      &::-webkit-scrollbar {
        display: none;
        appearance: none;
      }
    }
  }
`;
