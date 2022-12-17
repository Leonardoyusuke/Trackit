import logo from "../images/TrackIt.png"
import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext,useEffect } from "react"
import axios from "axios";
import Tops from "./Tops";
import Bottom from "./Bottom";
import Days from "./Days";
import Context from "./Context";
export default function Habits() {
    const [noHabit, setNoHabit] = useState("")
    const [infs, setInfs] = useState("")
    const { day, setDay, clicado, setClicado, token, } = useContext(Context)
    const [myHabits,setMyHabits] = useState([])
    const header = { headers: { 'Authorization': `Bearer ${token}` }}
    const [nomeHabito, setNomeHabito] = useState({})
    console.log(nomeHabito)
    useEffect(() => {
        const request2 = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",header);
    request2.then((r)=> setMyHabits(r.data));
    request2.catch(()=> setNoHabit(<Text>"Você não tem nenhum hábito cadastrado ainda.
    Adicione um hábito para começar a trackear!"</Text>)  )}
     , [])

    function cancel() {
        setInfs("")
        setNomeHabito("")
        setDay("")
    }
    function funcName (e){
        setNomeHabito({name: e.target.value})
    }
    console.log(day)
    console.log(token)
    function SettingDays(e) {
        e.preventDefault();
        setNomeHabito(e.target.value)
        console.log(day)
        console.log(token)
        const body ={name:nomeHabito.name,days:day}
        console.log(nomeHabito, 'nome')
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        body,header)
        console.log(request)
        request.then(() => setInfs(""));
        request.catch((err) => alert(err.response.data.message))
        console.log(request)
    }

    function openHabit() {
        setInfs(true)
    }
    return (
        <>
            <BackColor>
                <Tops />
                <Create>Meus hábitos <Button onClick={openHabit}>+</Button>
                </Create>
                <mark>
                {infs?<CreateHabit onSubmit={(() => SettingDays)} >
            <Input1 placeholder="nome do habito" type="text" onChange={funcName} required />
            <FixLayout>
                <Days />
            </FixLayout>
            <FixLayout1><P onClick={cancel}>cancelar</P><Button1 type="submit" >Salvar</Button1></FixLayout1>
        </CreateHabit>:<></>}
                </mark>
                {myHabits.map((h)=><Box key={h.id} >
                <p>{h.name}</p><div>{h.day}</div>
                </Box> ) }
                {noHabit}
            </BackColor>
            <Bottom />
        </>

    )
}
const Box = styled.div`
width: 330px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-left:17px;
margin-right:15px;
margin-top:22px `

const P = styled.p`
margin-right:10px;
width: 69px;
height: 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
color: #52B6FF;
`
const Button1 = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
`


const FixLayout = styled.div`
display:flex;
margin-left:15px;
`
const FixLayout1 = styled.div`
display: flex;
position:absolute;
justify-content: center;
align-items: center;
right:16px;
bottom:15px;`

const CreateHabit = styled.form`
position: relative;
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-left:17px;
margin-top:20px`

const Button = styled.div`
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

const BackColor = styled.div`
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


const Input1 = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 10px;
margin-left: 15px;
margin-right: 36px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
`