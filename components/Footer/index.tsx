import styled from 'styled-components';


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
        }
        div.bottom_footer{
            font-family:'Gilroy-medium';
            color:${(props: any) => props.theme.footerTextColor};
        }
`


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
            </div>
        </Container>
    )
}

export default Footer;