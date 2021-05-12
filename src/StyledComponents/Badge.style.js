import { Theme } from "../theme";
import styled from "styled-components";

const Badge = styled.span`
	/* border: 1px solid red; */
	background-color: ${Theme.headerColor};
	font-size: 14px;
	padding: 2px 10px;
	cursor: pointer;
	border-radius: 13px;
`;

export default Badge;
