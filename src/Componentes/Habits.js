import logo from "../images/TrackIt.png" 
import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Tops from "./Tops";
import Bottom from "./Bottom";
export default function Habits(){
    const [noHabit,setNoHabit] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!")
    const [nomeHabito,setNomeHabito] = useState("")
    const [infs,setInfs] = useState("")

function cancel(){
    setInfs("")
}

function openHabit(){
    setInfs(<CreateHabit>
        <input  placeholder="nome do habito" type="text" onChange={e => setNomeHabito(e.target.value)} required />
        <FixLayout><Dia>D</Dia><Dia>S</Dia><Dia>T</Dia><Dia>Q</Dia><Dia>Q</Dia><Dia>S</Dia><Dia>S</Dia></FixLayout>
        <FixLayout><p onClick={cancel}>cancelar</p><button>Salvar</button></FixLayout>
    </CreateHabit>)

}
    return(
        <>
        <BackColor>
        <Tops />
        <Create>Meus hábitos <Button onClick={openHabit}>+</Button>
        </Create>
        <mark>
        {infs}
        </mark>
        <Text>{noHabit}</Text>
        </BackColor>
        <Bottom/>
        </>
        
    )
}
const FixLayout= styled.div`
display:flex`

const Dia = styled.div`
width: 30px;
height: 30px;
left: 36px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;`

const CreateHabit = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-left:17px;
margin-top:20px`

const Button= styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
text-align: center;
color: white;
`

const Create = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
display: flex;
padding-right: 30px;
padding-left: 17px;
justify-content: space-between;
width: 375px;
box-sizing: border-box;
margin-top: 21px;
background-color: #F2F2F2;

`

const BackColor= styled.div`
background-color:#F2F2F2;
width: 375px;
height:527px;`

const Text = styled.p`
width: 338px;
height: 74px;
margin-left:17px;
margin-right:20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
background-color:#F2F2F2`