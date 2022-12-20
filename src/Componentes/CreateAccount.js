import logo from "../images/Group 8.png"
import styled from "styled-components"
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Context from "./Context";

export default function CreateAccount() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
    const [disableButton, setDisableButton] = useState(false)
    const {picture,setPicture }= useContext(Context)
    const navigate = useNavigate()
    function register(event){
        event.preventDefault();
        setDisableButton(true)
        localStorage.setItem('picture',picture)
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{email:email,name:nome,image:picture,password:password} );
        request.then(() => navigate("/"))
        request.catch((err)=> alert("Ocorreu um erro, tente novamente",setDisableButton(false)))
    }

    return (
        <>
            <Logo src={logo} />
            <Form1 onSubmit={register} >
                <Input1 data-test="email-input" disabled={disableButton} placeholder="email" type="email" onChange={e => setEmail(e.target.value)} required />
                <Input1 data-test="password-input" disabled={disableButton} placeholder="senha" type="password" onChange={e => setPassword(e.target.value)} required />
                <Input1 data-test="user-name-input" disabled={disableButton} placeholder="nome" type="text" onChange={e => setNome(e.target.value)} required />
                <Input1 data-test="user-image-input" disabled={disableButton} placeholder="foto" type="url" onChange={e => setPicture(e.target.value)} required />
                <Button1  data-test="signup-btn"  disabled={disableButton} type="submit"  >Cadastrar  </Button1>
            </Form1>
            <Link  data-test="login-link" to="/cadastro">
                <P1 >Já tem uma conta? Faça login!</P1>
            </Link>
        </>

    )
}


const Logo = styled.img`
margin-top:68PX;
margin-left: 97px;
margin-right: 98px;
`
const Form1 = styled.form`
display:flex;
flex-direction:column;
`
const Input1 = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 10px;
margin-left: 36px;
margin-right: 36px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
`
const Button1 = styled.button`
width: 309px;
height: 49px;
background: #52B6FF;
border-radius: 5 px;
margin-top: 10px;
margin-left: 36px;
margin-right: 36px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`
const P1 = styled.p`
width: 232px;
height: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
margin-top: 19px;
margin-left: 74px;
color: #52B6FF;
`
