import styled from "styled-components";

export const Container = styled.div `

    background-color:  #999999;
    padding: 30px;
    margin-top: 50px;
    border-radius: 10px;



    h1{
        padding-bottom: 30px;
    }

    input{
        height: 30px;
        margin-right: 20px;
        border-radius: 5px;
        border: none;
        outline: none;
        
    }

`
export const AddButton = styled.button `
    background-color: #222299;
    color: #eeeeee;
    height: 30px;
    margin-left: 20px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    &:hover{
        opacity: 0.7;
    }

`

export const Task = styled.div `

    display: flex;
    justify-content: space-between;
    height: 30px;
    margin-top: 20px;
    align-items: center;
    background-color: #eeeeee;
    padding: 0px 10px;

    p{
        text-transform: capitalize;
        font-weight: bold;
    }
   
`

export const TrashButton = styled.button `
    background-color : transparent;
    height: 30px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    &:hover{
        opacity: 0.7;
    }
` 
