import React from 'react'
import {FeedRoot} from "./FeedStyles";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const Feed = () => {
    return (
        <FeedRoot>
            <List dense>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </FeedRoot>
    )
}

export default Feed
