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

