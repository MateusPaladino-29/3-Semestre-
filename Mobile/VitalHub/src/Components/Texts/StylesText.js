import styled from "styled-components";

export const Descricao = styled.Text`
font-family: Quicksand_500Medium;
font-size: 16px;
color: #5F5C6B;
width:320px ;
text-align: center;
margin-top: 15px;

`

export const DescricaoEmail = styled(Descricao)`
color: #496BBA;
margin-top: 20px;
`

export const DescricaoStatus = styled.Text`
font-family: Quicksand_500Medium;
font-size: 14px;
color: #8C8A97;
`
export const DescricaoIdade = styled(DescricaoStatus)`
font-family:  Quicksand_400Regular;
`

export const DescricaoHour = styled.Text`
font-family: Quicksand_600SemiBold;
font-size: 14px;
color: #49B3BA;
`

export const HourTextGrey = styled(DescricaoHour)`
color: #F1F0F5;
`
