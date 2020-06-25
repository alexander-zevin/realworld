import React, {FC} from 'react'
import {ArticleBodyRoot, Body} from "./ArticleBodyStyles";
import {Divider} from "@material-ui/core";
import {IArticleBodyProps} from "./ArticleBodyTypes";
import Chip from "@material-ui/core/Chip";
import {getGlobalArticlesByTag} from "../../../store/actions/articlesActions";
import {TagsBox} from "../../common/Tags/TagsStyles";
import {ArticlesState} from "../../../store/types/articlesType";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

const ArticleBody: FC<IArticleBodyProps> = ({body, tagList}) => {
    return (
        <ArticleBodyRoot>
            <Body>
                {body}
            </Body>
            <TagsBox>
                { tagList.map((tag, index) =>
                    <Chip
                        label={tag}
                        size="small"
                        key={tag + index}
                    />
                )}
            </TagsBox>
            <Divider/>
        </ArticleBodyRoot>
    )
}

export default ArticleBody
