import { useContext } from "react"
import Context from "./Context"
import styled from "styled-components"
export default function Days(){
    const {day,setDay,clicado,setClicado } = useContext(Context)
    function clicked(days){
        const newClicado = clicado;
        const newItem = !newClicado[days];
        newClicado[days]= newItem;
        setClicado(newClicado);
        setDay([...day,days])
    }
    return(<>
    <Dia data-test="habit-day" clicado={clicado[0]} onClick={() => clicked(0)}>D</Dia>
    <Dia data-test="habit-day" clicado={clicado[1]} onClick={() => clicked(1)}>S</Dia>
    <Dia data-test="habit-day" clicado={clicado[2]} onClick={() => clicked(2)}>T</Dia>
    <Dia data-test="habit-day" clicado={clicado[3]} onClick={() => clicked(3)}>Q</Dia>
    <Dia data-test="habit-day" clicado={clicado[4]} onClick={() => clicked(4)}>Q</Dia>
    <Dia data-test="habit-day" clicado={clicado[5]} onClick={() => clicked(5)}>S</Dia>
    <Dia data-test="habit-day" clicado={clicado[6]} onClick={() => clicked(6)}>S</Dia>
    </>
)
    }


    const Dia = styled.div`
    width: 30px;
    height: 30px;
    left: 36px;
    background: ${props => props.clicado?"#CFCFCF":"#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right:4px;
    margin-top: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.clicado?"#FFFFFF":"#DBDBDB"};`

