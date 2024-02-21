import styled from "styled-components";
export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FAFAFA;
`

export const ContainerHome = styled(Container)`
background-color: transparent;
`



export const BoxNumeric = styled.SafeAreaView`
width: 320px;
height: 62px;
border-radius: 5px;
flex-direction: row;
justify-content: space-evenly;
margin-top: 20px;
`
export const ScrollView = styled.ScrollView`
background-color: #EDEDED;
height: 100%;
width: 100%;
`

export const ContainerInput = styled.SafeAreaView`
flex-direction: row;
justify-content: space-evenly;
`

export const BoxHome = styled.SafeAreaView`
    width: 200px;
    height: 100%;
    flex-direction: row;
  
    margin-bottom: 60%;
    margin-right: 33%;
`
export const BoxDataHome = styled.SafeAreaView`

    flex-direction: column;
    width: 120px;
    height: 55px;
    align-items: center;
    margin-top: 13%; 
    
`

export const MoveIconBell = styled.SafeAreaView`

    width: 35px; 
    height: 35px;
    margin-top:0%;
    margin-bottom: 30%;
    margin-right: 5%;
   align-items: center;
   
`

export const FilterAppointment = styled.View`
    
    width:90%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 18px;
    margin-left: 20px;
`

export const CardBox =  styled.SafeAreaView`
width: 90%;
background-color: white;
height: 102px;
border-radius: 5px;
margin-left: 20px;
margin-top: 30px;
flex-direction: row;

`


export const BoxTextPaciente = styled.Text`
width: 155px;
height:30px;
text-align: center;
flex-direction: row;

align-items: center;
justify-content: center;
justify-content: space-evenly;

`


// export const BoxTextDescricao = styled.Text`
// flex-direction: row;
// justify-content: space-evenly;
// border: 1px solid black;
// gap: 10px;
// `

export const BoxDateCancel = styled.SafeAreaView`
align-items: center;
flex-direction: row;
justify-content: space-between;
width: 240px;
height: 28px;
margin-top: 5px;
margin-left: 20px;
`
export const DateHome = styled.SafeAreaView`
border-radius: 5px;
background-color: #E8FCFD;
justify-content: space-evenly;
flex-direction: row;
width: 100px;
height: 26px;
align-items: center;
`

export const ConsultDateGrey = styled(DateHome)`
    background-color: #F1F0F5;
`

export const BoxFlexCard = styled.SafeAreaView`
flex-direction: column;
`



export const FlatContainer = styled.FlatList`
width: 100%;
`   

export const CardContainer = styled.SafeAreaView`
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-top: 18px;
    width: 90%;
    height: 105px;
    flex-direction: row;
    align-self: center;
    align-items: center;

`

export const BoxCard = styled.SafeAreaView`
    flex-direction: row;
    width: 100%;
    /* border: 1px solid black; */
    align-items: flex-start;

`
export const BoxTextCard = styled.SafeAreaView`
    flex-direction: column;
    width: 100%;
    height: 100%;

`
