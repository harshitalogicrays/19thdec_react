import styled from "styled-components";

export const MyButton =  styled.button({
    color:'white',
    backgroundColor:'olivedrab',
    borderRadius:"10px",
    padding:"10px",
    fontWeight:"bold"
})

export const TextBox = styled.input({
    backgroundColor:'lightgreen',
    borderRadius:"10px",
    
})

export const MyButton1 =  styled(MyButton)({  margin:"20px" ,
    backgroundColor:'red',
    fontSize:'30px'
})