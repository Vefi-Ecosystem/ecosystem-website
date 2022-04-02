import styled from 'styled-components'

type DivProps= {
    click : any
 }

export const Nav = styled.div` 
font-family:Gilror-semibold ;
position:fixed ;
top: 0;
right: 0;
left:0;
z-index:1 ;
display:flex ;
align-items:center ;
justify-content: space-between ;
background:${(props: any) => props.theme.backgroundColor};
margin: 0;
padding: 20px 40px;
box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.09);



@media screen and (max-width: 1000px){
    flex-direction:column ;
    padding:0px ;
   
}
`
export const Div = styled.div<DivProps>` 
transition: all  0.5s ease-out;
@media screen and (max-width: 1000px){
  
    position:fixed ;
    top: 0;
    /* left: ${({ click }) => (click ? 0 : '-100%')}; */
    left: ${({click}) => (click? 0: '-100%')};

display:flex ;
    flex-direction:column ;
    z-index:1 ;
    background: #EDEDED;
box-shadow: 5px 5px 7px 4px rgba(0, 0, 0, 0.06);
height:90vh ;
width:174px ;
padding: 20px;

}


`
export const NavLinks = styled.div`
display:flex ;
justify-content: space-between ;
display: flex;
.icon-pack{
    width:100% ;
    display:none ;
    align-items:flex-end ;
    justify-content:flex-end ;
    font-size: 25px;
    cursor: pointer;

    @media screen and (max-width:900px){
        display:flex ;
    }


   
}


.link{
    font-family:Gilror-semibold ;
    margin-right: 20px;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center ;
    letter-spacing: -0.015em;

    @media screen and (max-width: 1000px){
margin:20px 0 ;
align-items:  flex-start;
justify-content:flex-start ;

   
}
}

@media screen and (max-width: 1000px){
   flex-direction:column ;
   align-items:none ;

    /* justify-content:flex-end ; */
   
}
`
export const Sec = styled.div`

    width:100% ;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;



    @media screen and (max-width: 1000px){
        padding:20px ;
        justify-content:space-between ;
        flex:none ;
   

}
    
    
`
export const Div1 = styled.div`
    display: none;
    cursor: pointer;


    @media screen and (max-width: 1000px){
        display:flex ;


        .icon{
            font-size: 34px;
            color: ${(props: any) => props.theme.svgIconColor};
        }
    }
`
export const Div2 = styled.div` 
margin-left: 300px;

@media screen and (max-width: 1024px){
    margin-left:10px ;
}
@media screen and (max-width: 1020px){
    margin-left:100px ;
}
@media screen and (max-width: 800px){
    margin:0 ;
}

`
export const Div3 = styled.div` 
/* flex:2 ; */


display:flex ;
align-self:center ;

@media screen and (max-width: 1000px){
     
   
}



.join{
    font-size: 16px;
line-height: 19px;
display: flex;
flex-direction:column ;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
margin-right:40px ;

color: ${(props: any) => props.theme.linkColor};

@media screen and (max-width: 1000px){
       display:none ;
   
}

.slash{
}
}
`

