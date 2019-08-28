import styled from "styled-components";

// Kelly Code

export const Test = styled.div `

display: none;

`;

export const Sign = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    border: 2px solid #E3E1E1;
    border-radius: 12px;
    box-shadow: 5px 5px 8px #BFBFBF;
    width: 30%;
    align-items: center;
    height: 500px;
    display: flex;
    justify-content: center;
    background: #3d4d41;
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
    color: white;
`;

export const SignupBtn = styled.button`
    background-color: white;
    color: #3d4d41;
    font-size: 14px;
    border-radius: 8px;
    padding: 8px 8px;
    width: 40%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    &:hover {
        background: black;
        color: white;
        
        { cursor: pointer; }
    }

    

`;

export const Header = styled.h2`
    font-size: 22px;
    color: white;
    text-align: center;
    padding: 1rem;
    padding-bottom: 4rem;
    
`;

