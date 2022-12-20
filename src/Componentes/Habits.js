import logo from "../images/TrackIt.png"
import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react"
import axios from "axios";
import Tops from "./Tops";
import { BsTrash } from "react-icons/bs";
import Bottom from "./Bottom";
import Days from "./Days";
import Context from "./Context";
import { icons } from "react-icons";
export default function Habits() {
    const [noHabit, setNoHabit] = useState("")
    const [infs, setInfs] = useState("")
    const { day, setDay, clicado, setClicado, token, setToken, reload, setReload, myHabits, setMyHabits } = useContext(Context)
    const [nomeHabito, setNomeHabito] = useState({});
    const weekdays = "DSTQQSS".split("");


    if (!token) {
        const tokenLocal = localStorage.getItem('token');
        setToken(tokenLocal);
    }
    let header = { headers: { 'Authorization': `Bearer ${token}` } }
    useEffect(() => {
        const tokenEffect = token;
        if (!tokenEffect) {
            tokenEffect = localStorage.getItem('token');
        }
        header = { headers: { 'Authorization': `Bearer ${tokenEffect}` } }
        const request2 = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", header);
        request2.then((r) => setMyHabits(r.data));
        request2.catch(() => setNoHabit(<Text>"Você não tem nenhum hábito cadastrado ainda.
            Adicione um hábito para começar a trackear!"</Text>))
    }
        , [reload])

    function cancel() {
        setInfs("")
    }


    function funcName(e) {
        setNomeHabito({ name: e.target.value })
    }
    function settingDays(e) {
        setReload(!reload)
        e.preventDefault();
        console.log(header, 'header insid')
        const body = { name: nomeHabito.name, days: day }
        console.log(body, 'body inside')
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            body, header)
        console.log(request)
        request.then(() => setInfs(""), setReload(!reload));
        request.catch((err) => alert(err.response.data.message), setReload(!reload))
        console.log(request)
        console.log(day)
        setDay([])
        setClicado([false, false, false, false, false, false, false])
        setReload(!reload)
        setNoHabit("")

    }

    function delet(id) {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, header)
            .then(() => alert('Delete successful'), setReload(!reload));

        setReload(!reload)

    }

    function openHabit() {
        setInfs(true)
    }

    setTimeout(() => {
        setReload(!reload)

    }, 50);

    return (
        <>
            <BackColor>
                <Tops />
                <Create><Titulo>Meus hábitos</Titulo> <Button data-test="habit-create-btn" onClick={openHabit}>+</Button>
                </Create>
                <Mark>
                    {infs ? <CreateHabit data-test="habit-create-container" onSubmit={settingDays} >
                        <Input1 data-test="habit-name-input" placeholder="nome do habito" type="text" onChange={funcName} required />
                        <FixLayout>
                            <Days />
                        </FixLayout>
                        <FixLayout1><P data-test="habit-create-cancel-btn" onClick={cancel}>cancelar</P><Button1 data-test="habit-create-save-btn" type="submit" >Salvar</Button1></FixLayout1>
                    </CreateHabit> : <></>}
                </Mark>
                {myHabits.map((h) =>
                    <Box data-test="habit-container" key={h.id} >
                        <Div2>
                            <p data-test="habit-name" >{h.name}</p>  <BsTrash data-test="habit-delete-btn" onClick={() => delet(h.id)} ></BsTrash> </Div2>
                        <Div1>
                            {weekdays.map((day, index) =>
                                <Dia data-test="habit-day" key={index} clicado={h.days.includes(index)}>
                                    {day}
                                </Dia>
                            )}
                        </Div1>
                    </Box>)}
                {noHabit}
            </BackColor>
            <Bottom />
        </>

    )
}
const Titulo = styled.p`
width: 148px;
height: 29px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;`


const Mark = styled.div`
width:527px;
box-sizing:border-box;`

const Div2 = styled.div`
display:flex;
justify-content: space-between;
align-items:flex-start;
margin-left: 10px;
svg{
    margin-top:10px;
    margin-right: 10px;
    
}
`
const Div1 = styled.div`
display:flex;
margin-left: 5px;
`

const Dia = styled.div`
    width: 30px;
    height: 30px;
    left: 36px;
    background: ${props => props.clicado ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right:4px;
    margin-top: 0px;
    margin-left: 4px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.clicado ? "#FFFFFF" : "#DBDBDB"};`


const Box = styled.div`
width: 330px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-left:17px;
margin-right:15px;
margin-top:22px; `

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
margin-top:20px;`

const Button = styled.div`
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
text-align: center;
color: white;
margin-top: 18px;
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
height:527px;
margin-top:70px;`

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