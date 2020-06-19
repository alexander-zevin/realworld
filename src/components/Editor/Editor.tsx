import React, {useReducer} from 'react'
import {ButtonContainer, EditorForm, EditorRoot} from "./EdtorStyles";
import {StyledButton} from "../common/styled/rest";
import {editorReducer, initialState} from "./EditorReducer";
import {setBody, setDescription, setEditTitle, setError, setTags} from "./EditorActions";
import {TextField} from "@material-ui/core";
import {articlesAPI} from "../../api/api";
import {setArticle} from "../../store/actions/articlesActions";
import {useDispatch} from "react-redux";
import {splitTags} from "../../lib/splitString";
import { useHistory } from "react-router-dom";

const Editor = () => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(editorReducer, initialState);

    const history = useHistory()

    const postArticle = () => {
        if (state.article.title && state.article.description && state.article.body) {

            let modifiedState

            if(state.article.tagList) {
                modifiedState = {...state, article: {...state.article, tagList: splitTags(state.article.tagList)}}
            } else modifiedState = {...state, article: {...state.article, tagList: []}}

            articlesAPI.postArticle(modifiedState)
                .then(res => {
                    dispatchRedux(setArticle(res.data.article))
                    history.push("/");
                })
                .catch(err => dispatch(setError(err.message)))
        }
    }

    return (
        <EditorRoot>
            <EditorForm>
                <TextField
                    label='Article Title'
                    value={state.article.title}
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    onChange={event => dispatch(setEditTitle(event.target.value))}
                />
                <TextField
                    label='Whats this article about?'
                    value={state.article.description}
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    onChange={event => dispatch(setDescription(event.target.value))}
                />
                <TextField
                    label='Write your article (in markdown)'
                    multiline
                    value={state.article.body}
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    onChange={event => dispatch(setBody(event.target.value))}
                />
                <TextField
                    label='Enter tags'
                    value={state.article.tagList}
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    onChange={event => dispatch(setTags(event.target.value))}
                />
                <ButtonContainer>
                    <StyledButton
                        variant='contained'
                        color='primary'
                        size='large'
                        onClick={postArticle}
                    >
                        Publish Article
                    </StyledButton>
                </ButtonContainer>
            </EditorForm>
        </EditorRoot>
    )
}

export default Editor
