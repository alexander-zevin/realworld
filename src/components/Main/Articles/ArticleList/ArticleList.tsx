import React, {FC, Fragment} from 'react'
import {ArticleListRoot} from "./ArticleListStyles";
import {Divider, List} from "@material-ui/core";
import Article from "./Article/Article";
import {IArticlesListProps} from "./ArticlesListTypes";
import {convertDate} from "../../../../lib/convertDate";

const ArticleList: FC<IArticlesListProps> = ({articlesState}) => {
    return (
        <ArticleListRoot>
            <List dense>
                {articlesState.articles.map((item, index, array) =>
                    <Fragment key = {item.slug}>
                        <Article
                            username = {item.author.username}
                            createdAt = {convertDate(item.createdAt)}
                            title = {item.title}
                            description = {item.description}
                            favorited = {item.favorited}
                            favoritesCount = {item.favoritesCount}
                            tagList = {item.tagList}
                            slug={item.slug}

                        />
                        { articlesState.articles.length - 1 !== index && <Divider/> }
                    </Fragment>
                )}
            </List>
        </ArticleListRoot>
    )
}

export default ArticleList
