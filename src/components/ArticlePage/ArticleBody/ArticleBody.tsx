import React, {FC} from 'react'
import {ArticleBodyRoot, Body} from "./ArticleBodyStyles";
import {Divider} from "@material-ui/core";
import {IArticleBodyProps} from "./ArticleBodyTypes";

const ArticleBody: FC<IArticleBodyProps> = ({body}) => {
    return (
        <ArticleBodyRoot>
            <Body>
                {body}
            </Body>
            <Divider/>
        </ArticleBodyRoot>
    )
}

export default ArticleBody
