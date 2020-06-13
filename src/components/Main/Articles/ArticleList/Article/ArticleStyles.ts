import styled from "styled-components";
import {green} from "@material-ui/core/colors";
import Favorite from '@material-ui/icons/Favorite';

export const ListBasis = styled.div`
	padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
`;

export const ListBasisLeft = styled.div``;

export const ListBasisRight = styled.div`
    align-self: flex-end;
`;

export const ListTitle = styled.span`
    font-size: 1.5em;
`;

export const ListDescription = styled.div``;

export const FavoriteButton = styled.button`
    outline: none;
    border: 1px solid ${green[500]};
    border-radius: 3px;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding: 4px;
`;

export const FavoriteCount = styled.span`
    margin-left: 4px;
    color: ${green[500]};
`;

export const FavoriteIcon = styled(Favorite).attrs(props => ({
    color: 'primary',
    style: {
        fontSize: 14
    }
}))`
    
`;

export const ArticleRoot = styled.div`
    margin-bottom: 16px;
`;