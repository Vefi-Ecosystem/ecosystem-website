import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi'


const Container = styled.footer`
    max-width:100%;
    display:flex;
    flex-direction:column;
    text-align:center;
    margin:50px 0;
    gap:15px;
        div.top_footer{
            color:${(props: any) => props.theme.topFooterTextColor};
            font-family: Gilroy-semibold;
            display:flex;
            flex-direction:row;
            justify-content:center;
            text-transform:uppercase;
            gap:10px;
            flex-wrap:wrap;
            border-bottom: 1px solid linear-gradient:rgba(128, 147, 255, 0.25), rgba(125, 155, 250, 1), rgba(96, 219, 212, 1), rgba(92, 228, 207, 0.25);
        }
        div.bottom_footer{
            display:flex;
            justify-content:center;
            font-family:'Gilroy-medium';
            color:${(props: any) => props.theme.footerTextColor};
        }
        .scroll-top{
            display: flex;
            align-items:center ;
            justify-content:center ;
            align-self:center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: ${(props: any) => props.theme.jumpArrowbgColor};
            box-shadow: ${(props: any) => props.theme.jumpArrowShadow};
            font-size:25px ;
            color:rgba(16, 93, 207, 1) ;
            /* transform: rotate(-90deg) */
        }
`

function ScrollTop(props: any) {
    return (
        <a href="#hero" className="scroll-top">
            <FiArrowUp />
        </a>
    )
}

const Footer = () => {
    return (
        <Container id="footer">
            <div className='top_footer'>
                <div><a href="#">LinkedIn</a></div>
                <div><a href="#">Instagram</a></div>
                <div><a href="#">Facebook</a></div>
                <div><a href="#">Twitter</a></div>
                <div><a href="#">Telegram</a></div>
                <div><a href="#">Privacy & Policy</a></div>
                <div><a href="#">Cookies Policy</a></div>
            </div>
            <div className='bottom_footer'>
                <span>COPYRIGHT 2022 VEFI ECOSYSTEM</span>
                {/* <ScrollTop /> */}
            </div>
        </Container>
    )
}

export default Footer;