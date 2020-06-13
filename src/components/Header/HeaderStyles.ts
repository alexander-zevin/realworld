import styled from "styled-components";
import {green} from "@material-ui/core/colors";
import {Link} from "react-router-dom";

export const HeaderRoot = styled.header`
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	background-color: ${green[500]};
	align-self: stretch;
	padding: 10px 20%;
	position: static;
	box-shadow: 0 0 7px 0 rgba(0, 0, 0, 1);
	margin-bottom: 16px;
`;

export const Title = styled.span`
	font-size: 1.4em;
	font-weight: bold;
	color: white;
`;

export const Navigation = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-basis: 210px;
`;

