import logo from "../images/Group 8.png"
import styled from "styled-components"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { ColorRing } from  'react-loader-spinner'
import Context from "./Context";

export default function FirstPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disableButton, setDisableButton] = useState(false)
    const [loading, setLoading] = useState("Entrar")
    const {token,setToken} = useContext(Context)
    const navigate = useNavigate()
    function login(event) {
        event.preventDefault();
        setDisableButton(true)
        setLoading(ColorRing)
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email: email, password: password })
        request.then((response) =>{
            setToken(response.data.token);
            console.log(response.data.token);
            saveToken(response); 
            navigate("/habitos")})
        request.catch((err) => alert(err.response.data.message), setDisableButton(false))
    }
    function saveToken(response){
        localStorage.setItem('token',response.data.token)
        console.log(token)
    }

    return (
        <>
            <Logo src={logo} />
            <Form1 onSubmit={login} >
                <Input1 disabled={disableButton} placeholder="email" type="email" onChange={e => setEmail(e.target.value)} required />
                <Input1 disabled={disableButton} placeholder="senha" type="password" onChange={e => setPassword(e.target.value)} required />
                <Button1 disabled={disableButton} type="submit"  >{loading}  </Button1>
            </Form1>
            <Link to="/cadastro">
                <P1 >Não tem uma conta? Cadastre-se!</P1>
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