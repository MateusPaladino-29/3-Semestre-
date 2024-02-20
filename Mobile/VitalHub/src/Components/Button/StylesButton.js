import styled from "styled-components";

export const Botao = styled.TouchableOpacity`
width: 320px;
height: 44px;
background-color: #496BBA;
border-radius: 5px;
align-items:center;
justify-content: center;
margin-top: 30px;
`

export const ButtonGoogle = styled.TouchableOpacity`
width: 320px;
height: 44px;
border: solid 2px #496BBA;
border-radius: 5px;
background-color: white;
margin-top: 20px;
flex-direction: row;
justify-content: center;
gap:27px;
align-items: center;
`

export const BotaoProfile = styled(Botao)`
margin-bottom:50px ;
`

export const ButtonHome = styled.TouchableOpacity`
    width: 110px;
    justify-content: center;
    height: 40px;
    background-color: #496BBA;
    border: 1px solid #496BBA;
    border-radius: 5px;
    margin-top: 35px;
    margin-bottom: 10px;
`

export const WhiteButtonHome = styled(ButtonHome)`
    background-color: #FBFBFB;
    border: 2px solid #607EC5;
`

