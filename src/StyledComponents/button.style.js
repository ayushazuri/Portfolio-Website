import styled from "styled-components";

const Button = styled.button`
	background-color: ${({ theme }) => theme.text};
	color: white;
	font-family: "Baloo Bhai 2", cursive;
	font-weight: 500;
	line-height: 1.1;
	width: max-content;
	padding: 13px 22px;
	margin: 10px 10px 10px 0;
	border-radius: 8px;
	outline: none;
	border: 1px solid ${({ theme }) => theme.text};
	font-size: 15px;
	cursor: pointer;
	letter-spacing: 2px;
	text-align: center;
	text-decoration: none;
	transition: background 0.2s ease-in;
	transition: box-shadow 0.2s ease-in;
	&:hover {
		background-color: ${({ theme }) => theme.jacketColor};
		border: 1px solid ${({ theme }) => theme.jacketColor};
		box-shadow: 5px 8px 8px lightgray;
	}
`;

export default Button;
// background-color: #2a2a72;
// background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
