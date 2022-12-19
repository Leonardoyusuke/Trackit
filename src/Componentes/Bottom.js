import styled from "styled-components"
import { Link } from "react-router-dom"
export default function  Bottom(){
    return(
        <>
        <BottomLayout>
        <ButtonsBot>Hábitos</ButtonsBot>
        <Link to="/hoje">
                <p>Hoje</p>
            </Link>
        <ButtonsBot>Histórico</ButtonsBot>
        </BottomLayout>
        </>
    )
}

const ButtonsBot= styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;`

const BottomLayout = styled.div`
width: 375px;
height: 70px;
background: #FFFFFF;
display:flex;
justify-content:space-around;
position:fixed;
bottom: 0px;
z-index:1`