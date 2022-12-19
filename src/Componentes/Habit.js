import { useContext,useEffect } from "react"
import Context from "./Context";
import styled from "styled-components"


export default function Habit(){
const { day, setDay, clicado, setClicado, token, setToken,reload,setReload,myHabits,setMyHabits } = useContext(Context)
console.log(myHabits)

}