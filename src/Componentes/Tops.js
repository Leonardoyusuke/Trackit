import styled from "styled-components"
import React, { useContext } from "react";
import Context from "./Context";


export default function Tops(){

    const foto = localStorage.getItem('picture');
    return(
        <>
        <Top data-test="header">
        <Logo>TrackIt</Logo>
        <Foto src={foto} />
        </Top>
      
        </>
    )
}



const Foto = styled.img`
position: absolute;
width: 51px;
height: 51px;
left: 306px;
top: 9px;
border-radius: 98.5px;
` 

const Logo = styled.p`
position: absolute;
width: 97px;
height: 49px;
left: 18px;
top: 10px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
margin:0px;`

const Top = styled.div`
position: relative;
width: 375px;
height: 70px;
left: 0px;
top: 0px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position:fixed;
margin-left:8px`