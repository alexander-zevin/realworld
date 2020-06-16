import {EditActionType, IEditorState} from "./EditorTypes";
import {SET_BODY, SET_DESCRIPTION, SET_TITLE} from "./EditorConstants";

export const initialState: IEditorState = {
		article: {
				title: '',
				description: '',
				body: '',
				tagList: []
		}
};

export const editorReducer = (state: IEditorState, action: EditActionType): IEditorState => {
		switch (action.type) {
				case SET_TITLE:
						return {...state, article: {...state.article, title: action.title}}
				case SET_DESCRIPTION:
						return {...state, article: {...state.article, description: action.description}}
				case SET_BODY:
						return {...state, article: {...state.article, body: action.body}}
				default: return state
		}
}