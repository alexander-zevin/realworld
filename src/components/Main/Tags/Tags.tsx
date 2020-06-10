import React from 'react'
import Chip from '@material-ui/core/Chip';
import {TagsBox, TagsRoot, TagsTitle} from "./TagsStyles";

const Tags = () => {

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <TagsRoot>
            <TagsTitle>Popular Tags</TagsTitle>
            <TagsBox>
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="ClickableClickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="ClickableClickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="ClickableClickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
                <Chip label="Clickable" size="small" onClick={handleClick} />
            </TagsBox>
        </TagsRoot>
    )
}

export default Tags
