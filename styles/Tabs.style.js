import styled from "styled-components";

export const Container = styled.div`
margin: 60px 0;
display: flex;
flex-direction:column ;
align-items:center ;

.tab-block{
    padding:0 100px ;

    .tab-seg{
        margin: 20px 0;
        display:flex ;

        .tabs{
        display:flex ;
        align-items:center ;
        padding:5px 20px ;
        border: 0.5px solid #1D1D1D;
        box-sizing: border-box;
        border-radius: 3px;
        margin:0 20px ;

       

    }
    .tabs.active-tab{
            background: rgba(16, 93, 207, 1);
            border:none ;
            color:#fff ;
        }

     
    }
   
}

.tab-content{
    .content{
            display:none ;
        }

        .content.active-content{
            display:block ;
        }
}

`