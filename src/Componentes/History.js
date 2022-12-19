import Tops from "./Tops"
import Bottom from "./Bottom"
import styled from "styled-components"
export default function History(){
    return (
        <>
        <Tops/>
        <H1>Histórico</H1>
        <P1>Em breve você poderá ver o histórico dos seus hábitos aqui!</P1>
        <Bottom/>
        </>
    )
}

const H1 = styled.p `
width: 100px;
height: 29px;
margin-top: 100px;
margin-left:20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`
const P1 = styled.p`
margin-left: 20px;
width: 338px;
height: 74px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`