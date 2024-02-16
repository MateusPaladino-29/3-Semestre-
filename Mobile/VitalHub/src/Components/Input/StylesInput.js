import styled from "styled-components";
import { InputProfile } from "./IndexInput";

export const InputBox = styled.TextInput`
width:320; 
border-radius: 5px;
border:2px solid #49B3BA ;
border-width: 2px;
font-size: 16px;
font-family:  MontserratAlternates_600SemiBold;
padding: 16px;
margin-top: 30px;
color: #34898F;
`

export const InputNumeric  = styled.TextInput`
width:65px;
height: 62;
border-radius: 5px;
border: 2px solid #77CACF;
font-family: Quicksand_600SemiBold;
font-size: 40px;
color: #34898F;
align-items: center;
justify-content: center;
text-align: center;
`

export const RedefinirInput = styled(InputBox)`
margin-bottom: 20px;
margin-top: 15;
`

export const CreateInput = styled(InputBox)`
margin-top: 20px;
`

export const InputTextProfile = styled(InputBox)`
    border: none;
    background-color: #F5F3F3;
    width: 90%;
    margin-top: 0;
`

export const InputTextProntuario = styled(InputBox)`
border: 2px solid #49B3BA;
width: 90%;
height: 120PX;
margin-top: 10px;
`

export const InpuTextDiagnostico = styled(InputTextProfile)`
border: 2px solid #49B3BA;
background-color: #FAFAFA;
margin-top: 10px;
`




 