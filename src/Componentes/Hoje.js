import Bottom from "./Bottom";
import Tops from "./Tops";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import Context from "./Context";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BsCheckSquareFill } from "react-icons/bs";



export default function Hoje() {
    const today = dayjs().locale("pt-br").format("dddd, DD/MM");
    const { day, setDay, clicado, setClicado, token, setToken, reload, setReload, myHabits, setMyHabits } = useContext(Context)
    const [todayHabits,setTodayHabits] = useState([])
    if (!token) {
        const tokenLocal = localStorage.getItem('token');
        setToken(tokenLocal);}
    let header = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        const tokenEffect = token;
        if (!tokenEffect) {
            tokenEffect = localStorage.getItem('token');
        }
        header = { headers: { 'Authorization': `Bearer ${tokenEffect}` } }
        const request3 = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", header);
        request3.then((r) => setTodayHabits(r.data),console.log(todayHabits.done),console.log(request3));
        request3.catch((r) => alert(r.data) ) 
    }
        , [reload])

    function feito(t){
        const request4 = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${t.id}/check`,{}, header)
        request4.then(() => setReload(!reload));
        request4.catch((r) => console.log(r.data))

    
    }

    return (<>
        <BackColor>
            <Tops />
            <P1>{today}</P1>
            <P2>Nenhum hábito concluído ainda</P2>
            {todayHabits.map((t)=>{
            return(
            <Habit key={t.id}>
                <HabitTittle>{t.name} </HabitTittle>
                <HabitText color={t.done ? "#8FC549" : "#E7E7E7"} >Sequência atual: {t.currentSequence} dias</HabitText>
                <HabitText>Seu recorde: {t.highestSequence} dias</HabitText>
                <BsCheckSquareFill color={t.done ? "#8FC549" : "#E7E7E7"} onClick={() => feito(t)} ></BsCheckSquareFill>
            </Habit>)})}

            <Bottom />
        </BackColor>
    </>)
}


const HabitText = styled.p`
width: 146px;
height: 32px;
font-family: 'Lexend Deca';
font-style: normal;
margin-top: 0px;
margin-left: 20px;
margin-bottom: 0px;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: ${props => props.done};`

const HabitTittle = styled.p`
width: 208px;
height: 25px;
margin-left: 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;`

const Habit = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 0px;
margin-top: 0px;
position: relative;
margin-left:17px;
svg{      
        position: absolute;
        right: 13px;
        top:13px;
        width: 69px;
        height: 69px;
}
    .react-icons{
        color:${props => props.done};
        background: #FFFFFF;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
}`

const P2 = styled.p`
width: 278px;
height: 22px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #BABABA;
margin-left:17px;
margin-top:-15px;`

const P1 = styled.p`
margin-left: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;`


const BackColor = styled.div`
background-color:#F2F2F2;
width: 375px;
height:527px;
margin-top:70px;
`