import styled from 'styled-components'

export const Arealogin = styled.section`    

    display: flex;
    margin-top: 5vh;
    justify-content: center;
   
    `


export const Login1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EDE9E3;
  border-radius: 10px;
  width: 355px;
  height: 380px;
  padding: 35px;
  margin-top: 250px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: -10vh;
  width: 50vh;
  align-items: center;


  input{  margin-top: 9px;
  background-color: #D4B2A7;
  margin: 5px;
  padding-left: 10px;
  width: 88%;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: 'Times New Roman', Times, serif;

  &::placeholder {
    color: black;
    font-size: 14px;}}

    button{
        padding: 20px;
        margin-top: 30px;
        border-radius: 8px;
        background-color: #8b8989;
        cursor: pointer;
        
        }
    `;
