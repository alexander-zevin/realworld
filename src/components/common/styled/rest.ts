import {Button, TextField} from "@material-ui/core";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledButton = styled(Button).attrs(() => ({

}))`
    & .MuiButton-label {
        fontWeight: normal;
        color: white
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const ProgressRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
`;

export const FullScreenBox = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MultilineTextField = styled(TextField).attrs(() => ({
    fullWidth: true,
    size: 'medium',
    variant: "outlined",
    margin: 'normal',
    multiline: true,
    rows: 6
}))`
    
`;