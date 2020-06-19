import styled from "styled-components";

export const HeaderRoot = styled.header`
    ${({ theme }) => `
        display: flex;
        justify-content: space-between;
        background-color: ${theme.palette.primary.main};
        align-self: stretch;
        padding: 10px 20%;
        position: static;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 1);
    `}
`;

export const Title = styled.span`
	font-size: 1.4em;
	font-weight: bold;
	color: white;
	align-self: center;
`;

export const Navigation = styled.nav`
	
`;

