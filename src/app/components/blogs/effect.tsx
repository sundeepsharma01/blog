"use client"
import {useEffect} from "react"
import hljs from 'highlight.js';
export default function Hlt(){
    useEffect(()=>{
        hljs.highlightAll();
    },[])
    return (
        <></>
    )
}