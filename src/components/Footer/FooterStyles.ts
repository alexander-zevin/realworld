import styled from "styled-components";

export const FooterRoot = styled.footer`
    ${({theme}) => `
        background-color: ${theme.palette.primary.main};
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        color: white;
    `}
`;