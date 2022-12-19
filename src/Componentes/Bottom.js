import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { useEffect } from "react";
import Context from "./Context";
export default function Bottom() {
    const {todayHabits,setPercentage,listacheck,setListaCheck,reload } = useContext(Context)
   
    let percentage;
	if(todayHabits === undefined || todayHabits.length === 0){
		percentage = 0;
	} else{
		const done = todayHabits.filter((h) => h.done);
		percentage = (done.length / todayHabits.length) * 100;
	}


    return (
        <>
            <BottomLayout>
                <Link to="/habitos">
                    <ButtonsBot>Hábitos</ButtonsBot>
                </Link>
                <Link to="/hoje">
                    <div style={{ width: 90, height: 90 }}>
                        <CircularProgressbar text="Hoje" value={percentage} />
                    </div>            
                </Link>
                <Link to="/historico">
                    <ButtonsBot>Histórico</ButtonsBot></Link>
            </BottomLayout>
        </>
    )
}

const ButtonsBot = styled.div`
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