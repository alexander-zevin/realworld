import React, {useEffect} from 'react'
import Chip from '@material-ui/core/Chip';
import {TagsBox, TagsRoot, TagsTitle} from "./TagsStyles";
import {useDispatch, useSelector} from "react-redux";
import {getTags} from "../../../store/actions/tagsActions";
import {RootState} from "../../../store/store";
import {TagsState} from "../../../store/types/tagsTypes";
import {getGlobalArticlesByTag} from "../../../store/actions/articlesActions";

const Tags = () => {

    const dispatch = useDispatch()

    const tagsState: TagsState = useSelector((state: RootState) => state.tags);

    useEffect(() => {
        dispatch(getTags())
    }, [dispatch])

    return (
        <TagsRoot>
            <TagsTitle>Popular Tags</TagsTitle>
            <TagsBox>
                { tagsState.tags.map((tag, index) =>
                    <Chip
                        label={tag}
                        size="small"
                        key={tag + index}
                        onClick={() => dispatch(getGlobalArticlesByTag(tag))}
                    />
                )}
            </TagsBox>
        </TagsRoot>
    )
}

export default Tags
