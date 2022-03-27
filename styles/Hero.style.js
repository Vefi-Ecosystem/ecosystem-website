import styled from "styled-components";
import { CustomContainer } from "../components/Container";

export const Container = styled(CustomContainer)`
margin-top: 70px;
padding: 90px 0 0 70px;
display: flex;
/* align-items:center ; */



@media screen and (max-width: 900px){
    margin-top:70px ;
padding: 30px 20px ;
flex-direction: column;
align-items: center;
}

`

export const HeroText = styled.div`
font-family: poppins ;

@media screen and (max-width: 900px){
 
margin-bottom: 30px;
 }

.welcome{
    font-size: 97px;
line-height: 114px;
display: flex;
align-items: center;
letter-spacing: -0.015em;
color: #000000;

@media screen and (max-width: 900px){
    font-size: 35px;
line-height: 41px;
justify-content:center ;
}



}
.ecosystem{
    font-size: 97px;
line-height: 114px;
display: flex;
align-items: center;
letter-spacing: -0.015em;

background: linear-gradient(160.06deg, #105DCF 41.12%, #6F87DF 50.6%, #6FDFEE 75.89%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;


@media screen and (max-width: 900px){
    font-size: 35px;
line-height: 41px;
justify-content:center ;
}
}

p{
    margin-top:30px ;
    font-size: 27px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.015em;

color: #333333;

br{
display: block;

@media screen and (max-width: 900px){
 
display: none;
 }
}


@media screen and (max-width: 900px){
 
font-size: 15px;
line-height: 18px;
justify-content:center ;
text-align: center;
}

}

`

export const ImageCon = styled.div` `
