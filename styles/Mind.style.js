import styled from 'styled-components'

export const Container = styled.div` 
margin-top:70px ;
padding:30px 50px ;
display: flex;
align-items: center;
justify-content:space-between ;
background: linear-gradient(180deg, rgba(221, 221, 221, 0) 0%, #DDDDDD 55.73%, rgba(221, 221, 221, 0) 100%);

@media screen and (max-width: 900px){
    flex-direction:column-reverse ;
    padding:0 20px ;
}



.mother-con{
    display:flex ;
    border-right: 2px solid rgba(16, 93, 207, 0.27);


    @media screen and (max-width: 900px){
    border:none ;
}

    .img-card1{
        margin:50px 20px 0  0;
        .mind-con{
            display:flex ;
            flex-direction:column ;
            align-items:center ;
            justify-content:center ;
            padding:15px 0 ;

            .mind-name{
                font-size: 26px;
line-height: 24px;

display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;
margin-bottom:5px ;
color: #1D1D1D;


}
.post{
 font-size: 16px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;

color: #333333;
            }
        }

        @media screen and (max-width: 900px){
    border:none ;
}
        
    }
    .img-card2{
        margin:0 20px 60px  0;

         .mind-con{
            display:flex ;
            flex-direction:column ;
            align-items:center ;
            justify-content:center ;

            .mind-name{
                font-size: 26px;
line-height: 24px;

display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;

color: #1D1D1D;



            }
            .post{
                font-size: 16px;
line-height: 14px;
/* identical to box height, or 88% */

display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;

color: #333333;
            }
        }
    }

   
}

.gen-card{
        background: #DDDDDD;
        padding:80px 40px ;
        width:600px ;
       

        @media screen and (max-width:900px){
            padding:20px ;
            width:auto ;
            margin-bottom: 30px;
            background:none ;
        }


        .big-text{
            font-size: 62px;
line-height: 74px;
display: flex;
align-items: center;
text-transform: capitalize;

br{
    @media screen and (max-width: 900px){
   display:none ;
}
}

@media screen and (max-width: 900px){
    font-size: 30px;
line-height: 35px;
}
        }

        .small-text{
            margin-top: 20px;
            font-size: 27px;
            line-height: 32px;
            display: flex;
            align-items: center;
            color: #333333;


            @media screen and (max-width: 900px){
                font-size: 15px;
line-height: 23px;
        }

}


    }



`