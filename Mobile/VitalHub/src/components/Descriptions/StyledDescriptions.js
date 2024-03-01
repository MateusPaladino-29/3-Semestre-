import styled from "styled-components"


export const DescripritionForgot = styled.Text`
    width: 80%;
    font-family: Quicksand_500Medium;
    font-size: 16px;
    color: #5F5C6B;
    text-align: center;
    margin-top: 2px;
    margin-bottom: 15px;
    align-self: center;
`

export const DescripritionEmail = styled.Text`
    width: 80%;
    font-family: Quicksand_500Medium;
    font-size: 16px;
    color: #4E4B59;
    text-align: center; 
`

export const EmailText = styled.Text`
    width: 80%;
    font-family: Quicksand_500Medium;
    font-size: 16px;
    color: #496BBA;
    margin-right: auto;


`

export const ResendCode = styled(EmailText)`
    text-decoration: underline;
    color: #344F8F;
    font-family: MontserratAlternates_600SemiBold;
    margin-top: 33px;
    margin-left: 33%;
`

export const CancelButton = styled(ResendCode)`
    text-decoration: underline;
    color: #344F8F;
    font-family: MontserratAlternates_600SemiBold;
    margin-top: 40px;
    margin-left: 40%;
    margin-bottom: 15px;
`

export const CancelLessMargin = styled(CancelButton)`
    margin-top: 1px;
    margin-left: 42%;
    align-items: center;
    justify-content: center;
    margin-right: -80px;
   
`

export const CancelLessMarginModal = styled(CancelButton)`
margin-right: -50px;
margin-bottom: 10px;
`

export const CancelLessMarginPrescription = styled(CancelButton)`
margin-right: -110px;

margin-bottom: 30px;
`

export const PhotoCancel = styled.Text`
 font-family: MontserratAlternates_500Medium;
 font-size: 12px;
 color: #C81D25;
`


export const CancelButtonRecords = styled(CancelButton)`
    margin-top:25px;
    margin-bottom: 40px;
    `

export const AgeTextCard = styled(DescripritionForgot)`
    color: #8C8A97;
    font-size: 14px;
    height: 18px;

`

export const DoctorArea = styled(DescripritionForgot)`
    color: #8C8A97;
    font-size: 14px;
    height: 20px;   
    width: 49%;
    align-self: flex-start; 
    text-align: flex-start; 
    /* border: 1px solid black; */
`

export const RoutineTextCard = styled(AgeTextCard)`
    height: 20px;
    color: #8C8A97;
`

export const HourText = styled.Text`
    margin-top: 8px; 
    height: 30px;
    color: #49B3BA;
    font-size: 14px;
    font-family: Quicksand_600SemiBold;
`

export const HourTextClinic = styled(HourText)`

`
export const HourTextGray = styled(HourText)`
    color: #4E4B59;
`

export const CancelCard = styled.Text`
    margin-top: 3%;
    /* margin-left: 32%; */
    font-family: MontserratAlternates_500Medium;
    color: #C81D25;
    font-size: 14px;
`

export const SeeMedicalRecord = styled(CancelCard)`
    color: #344F8F;
`
export const DescriptionCancel = styled.Text`
    margin-top: 15px;
    width: 90%;
    font-size: 16px;
    font-family: Quicksand_500Medium;
    color: #4E4B59;
    text-align: center;
    margin-bottom: 90px;
`

export const NameClinicText = styled.Text`   
font-family: MontserratAlternates_600SemiBold;
font-size: 16px;
color: #33303E;
`

export const LocationText = styled(NameClinicText)`
font-size: 14px;
`
export const RateText = styled.Text`
    font-size: 14px;
    font-family: QuickSand_600SemiBold;
    color: #F9A620;
`

export const DescriptionConfirmModal = styled(DescripritionForgot)`
    width: 90%;
    margin-top: 0px;
    font-size: 17px;
    margin-bottom: 0px;
    color: #000000;
`

export const SmallDescriptionModal = styled(DescripritionForgot)`
    font-size: 13px;
    align-self: flex-start;
    color: #5F5C6B;
    width: 100%;
    text-align: none;
    margin-bottom: 20px;
`

export const SmallDescriptionModal2 = styled(DescripritionForgot)`
    font-size: 13px;
    align-self: flex-start;
    color: #5F5C6B;
    width: 100%;
    text-align: none;
    margin-bottom: 0px;
`

export const DescriptionModalRecord = styled(DescripritionForgot)`
    font-size: 14px;
`