import styled from 'styled-components';

export const ContactForm = styled.form`
    border: 1px solid #1976d2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 30px;

`
export const ContactLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
  padding-top: 10px;
  
`

export const ContactInput = styled.input`
    outline: none;
    border: 1px solid #1976d2;
    border-radius: 4px;
    padding: 10px;
    margin-top: 4px;
    font-size: 14px;
    background-color: transparent;
`

export const ContactButton = styled.button`
    cursor: pointer;
    padding: 6px 22px;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
    background-color: rgb(79, 68, 60);
    color: rgb(244, 234, 225);
    border: none;
    height: 30px;
    margin: 0 auto;
    width: 150px;
    margin-top: 20px;
`

export const Wrapper = styled.div`
     padding: 10px;
 
   @media(min-width: 768px) {
  margin: 0 auto;
     padding: 30px;
   }
`