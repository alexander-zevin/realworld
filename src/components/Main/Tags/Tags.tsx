import React, {useEffect} from 'react'
import Chip from '@material-ui/core/Chip';
import {TagsBox, TagsRoot, TagsTitle} from "./TagsStyles";
import {useDispatch, useSelector} from "react-redux";
import {getTagsThunkCreator} from "../../../store/actions/tagsActions";
import {RootStateType} from "../../../store/store";
import {articlesAPI} from "../../../api/api";

const Tags = () => {

    const dispatch = useDispatch()

    const tags: Array<string> = useSelector((state: RootStateType) => state.tags.tags);

    const getGlobalArticlesByTag = (tag: string) => {
        articlesAPI.getGlobalArticlesByTag(tag)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        dispatch(getTagsThunkCreator())
    }, [dispatch])

    return (
        <TagsRoot>
            <TagsTitle>Popular Tags</TagsTitle>
            <TagsBox>
                { tags.map((tag, index) =>
                    <Chip label={tag} size="small" key={tag + index} onClick={() => getGlobalArticlesByTag(tag)}/>) }
            </TagsBox>
        </TagsRoot>
    )
}

export default Tags
