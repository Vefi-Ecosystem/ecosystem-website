import styled from "styled-components";

export const Container = styled.div`
margin: 60px 0;
display: flex;
flex-direction:column ;
align-items:center ;


.prod{
    margin:20px 0 ;
    font-size: 62px;
line-height: 74px;

/* identical to box height, or 119% */

text-transform: capitalize;

color: rgba(29, 29, 29, 1);
}

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
        cursor: pointer;
        color:${(props) => props.theme.tabButtonText} ;
        background: ${(props) => props.theme.tabButtonBackground};
        text-transform: uppercase ;

       

    }
    .tabs.active-tab{
        background: ${(props) => props.theme.tabButtonBackgroundActive};
            border:none ;
            color:${(props) => props.theme.tabButtonTextActive} ;
        }

     
    }
   
}

.tab-content{
    .content{
            display:none ;
            align-items: center;        
            justify-content: space-between;
            padding: 30px 0;
            

            .content-img{
                width :350px;
                height :300px;
                border: 1px solid black;
                background: #DDDDDD;
            }

            .content-text{
                margin-left:35px ;
                .product-con{
                 
                    
                    .prod-log-con{
                        display: flex;
                        .prod-log{
                        margin-right: 20px;

                    }
                    .prod-title{
                        font-size: 50px;
                        line-height: 16px;
                        display: flex;
                        align-items: center;
                        color:${(props) => props.theme.prodText} ;

                    }
                    }
                    .prod-desc{
                        margin-top:30px ;
                        width: 551px;
                        font-size: 27px;
                        line-height: 32px;
                        display: flex;
                        align-items: center;
                        text-align: justify;
                        color:${(props) => props.theme.regularTextColor} ;
                    }
                    .prod-btn{
                        margin-top:30px ;

                    
                    button{
                        padding:10px 30px ;
                        outline:none ;
                        border:none ;
                        background: #105DCF;
                        border-radius: 5px;
                        font-size: 20px;
                        line-height: 16px;
                        display: flex;
                        align-items: center;
                        color: #FFFFFF;
                        cursor: pointer;

                        .icon{
                            font-size: 25px;  
                            margin-left:10px ;
                        }
                    }
                }
                }
            }
        }

        .content.active-content{
            display:flex ;
        }
}

`