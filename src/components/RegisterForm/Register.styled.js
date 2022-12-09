import styled from "styled-components";


export const Form = styled.form`
  border: 1px solid #1976d2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  padding: 30px;

`
export const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 10px;
  padding-top: 10px;
 
`

export const Input = styled.input`
    height: 40px;
    outline: none;
    border: 1px solid #1976d2;
    border-radius: 4px;
    padding-left: 22px;
    margin-top: 4px;
    font-size: 16px;
    background-color: transparent;
   ` 

export const Button = styled.button`
    cursor: pointer;
    padding: 6px 22px;
    font-weight: 500;
    font-size: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    background-color: rgb(79, 68, 60);
    color: rgb(244, 234, 225);
    border: none;
    margin: 0 auto;
    height: 40px;
    width: 150px;
    margin-top: 20px;
`
