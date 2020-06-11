import React, {FC} from 'react'
import {ArticleListRoot} from "./ArticleListStyles";
import {List} from "@material-ui/core";
import Article from "./Article/Article";
import {IArticlesListProps} from "./ArticlesListTypes";
import {convertDate} from "../../../../lib/convertDate";

const ArticleList: FC<IArticlesListProps> = ({articlesState}) => {
    return (
        <ArticleListRoot>
            <List dense>
                {articlesState.articles.map(i =>
                    <Article
                        username = {i.author.username}
                        createdAt = {convertDate(i.createdAt)}
                        key = {i.slug}
                    />
                )}
            </List>
        </ArticleListRoot>
    )
}

export default ArticleList
