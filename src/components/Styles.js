import styled from "styled-components";



export const Sign = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 20%;
    align-items: center;
    height: 400px;
    display: flex;
    justify-content: center;
`;

export const Context = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 25px;
    .form-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        margin-left: 10px;
        label {
            
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }
    }
`;

export const SignupBtn = styled.button`
    background-color: #0A235C;
    color: #FFCC00;
    font-size: 14px;
    border-radius: 8px;
    padding: 8px 8px;
    width: 40%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
`;

export const Header = styled.h2`
    font-size: 18px;
    color: #0A235C;
    text-align: center;
`;

