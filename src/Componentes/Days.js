import { useContext } from "react"
import Context from "./Context"
import styled from "styled-components"
export default function Days(){
    const {day,setDay,clicado,setClicado } = useContext(Context)
    function clicked(days){
        const newClicado = clicado;
        const newItem = !newClicado[days-1];
        newClicado[days-1]= newItem;
        setClicado(newClicado);
        setDay([...day,days])
    }
    return(<>
    <Dia clicado={clicado[0]} onClick={() => clicked(1)}>D</Dia>
    <Dia clicado={clicado[1]} onClick={() => clicked(2)}>S</Dia>
    <Dia clicado={clicado[2]} onClick={() => clicked(3)}>T</Dia>
    <Dia clicado={clicado[3]} onClick={() => clicked(4)}>Q</Dia>
    <Dia clicado={clicado[4]} onClick={() => clicked(5)}>Q</Dia>
    <Dia clicado={clicado[5]} onClick={() => clicked(6)}>S</Dia>
    <Dia clicado={clicado[6]} onClick={() => clicked(7)}>S</Dia>
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

