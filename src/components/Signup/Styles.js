import styled from 'styled-components';

// Kelly Code

export const Test = styled.div`display: none;`;

export const Sign = styled.div`
	margin-top: 115px;
	border: 2px solid #e3e1e1;
	border-radius: 5px;
	box-shadow: 5px 5px 8px #bfbfbf;
	width: 400px;
	align-items: center;
	height: auto;
	display: flex;
	justify-content: center;
	background: #3d4d41;
`;

export const Context = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	margin-bottom: 2px;
	width: 100%;
	.form-group {
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		width: 100%;
		height: 35px;
		border-radius: 5px;
		font-family: $header;
	}

	color: white;
`;

export const SignupBtn = styled.button`
	background-color: white;
	color: #3d4d41;
	font-size: 14px;
	border-radius: 5px;
	padding: 8px 8px;
	width: 100%;
	margin: 0 auto;
	margin-top: 5px;
	margin-bottom: 20px;
	&:hover {
		background: black;
		color: white;

		 {
			cursor: pointer;
		}
	}
`;

export const Header = styled.h2`
	font-size: 22px;
	color: white;
	text-align: center;
	padding-top: 2rem;
	padding-bottom: 1.5rem;
`;
