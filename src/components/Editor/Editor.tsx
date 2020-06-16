import React, {useReducer} from 'react'
import {ButtonContainer, EditorForm, EditorRoot} from "./EdtorStyles";
import {StyledButton} from "../common/styles";
import {editorReducer, initialState} from "./EditorReducer";
import {setBodyActionCreator, setDescriptionActionCreator, setEditTitleActionCreator} from "./EditorActions";
import {TextField} from "@material-ui/core";
import {articlesAPI} from "../../api/api";
import {setArticleActionCreator} from "../../store/actions/articlesActions";
import {useDispatch} from "react-redux";

const Editor = () => {

    const dispatchRedux = useDispatch()

    const [state, dispatch] = useReducer(editorReducer, initialState);

    const postArticle = () => {
        articlesAPI.postArticle(state)
            .then(res => {
                dispatchRedux(setArticleActionCreator(res.data.article))
                console.log(res.data.article)
            })
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
                    onChange={event => dispatch(setEditTitleActionCreator(event.target.value))}
                />
                <TextField
                    label='Whats this article about?'
                    value={state.article.description}
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    onChange={event => dispatch(setDescriptionActionCreator(event.target.value))}
                />
                <TextField
                    label='Write your article (in markdown)'
                    multiline
                    value={state.article.body}
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
                    onChange={event => dispatch(setBodyActionCreator(event.target.value))}
                />
                <TextField
                    label='Enter tags'
                    value={state.article.tagList}
                    fullWidth
                    size='medium'
                    variant="outlined"
                    margin='normal'
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
