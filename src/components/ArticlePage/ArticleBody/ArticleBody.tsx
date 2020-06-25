import React, {FC} from 'react'
import {ArticleBodyRoot, Body, TagsBox} from "./ArticleBodyStyles";
import {Divider} from "@material-ui/core";
import {IArticleBodyProps} from "./ArticleBodyTypes";
import Chip from "@material-ui/core/Chip";

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
