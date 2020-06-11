import React, {useEffect} from 'react'
import Chip from '@material-ui/core/Chip';
import {TagsBox, TagsRoot, TagsTitle} from "./TagsStyles";
import {useDispatch, useSelector} from "react-redux";
import {getTagsThunkCreator} from "../../../store/actions/tagsActions";
import {IArticlesState} from "../../../store/types/articlesType";
import {RootStateType} from "../../../store/store";

const Tags = () => {

    const dispatch = useDispatch()

    const tags: Array<string> = useSelector((state: RootStateType) => state.tags.tags);

    useEffect(() => {
        dispatch(getTagsThunkCreator())
    }, [])

    return (
        <TagsRoot>
            <TagsTitle>Popular Tags</TagsTitle>
            <TagsBox>
                { tags.map(tag => <Chip label={tag} size="small"/>) }
            </TagsBox>
        </TagsRoot>
    )
}

export default Tags
