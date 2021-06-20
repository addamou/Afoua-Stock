import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {baseURL} from "../url";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'auto',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300
    },
    listSection: {
        backgroundColor: 'inherit'
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0
    }
}));



const Liste = () => {
    const classes = useStyles();
    const [stock, setStock] = useState([])
    
    useEffect(() => {
        axios
          .get(`${baseURL}/stocks/`)
          .then(res => {
              console.log(res)
              setStock(res.data)
              console.log(res.data.stock)
          })
          .catch(err => console.error(err));
    }, []);

   
 
    return (
        <List className={
                classes.root
            }
            subheader={<li/>}>
            {
            [
                0,
                1,
                2,
                3,
                4
            ].map((sectionId) => (
                <li key={
                        `section-${sectionId}`
                    }
                    className={
                        classes.listSection
                }>
                    <ul className={
                        classes.ul
                    }>
                        <ListSubheader>{
                            `I'm sticky ${sectionId}`
                        }</ListSubheader>
                        {
                        [0, 1, 2].map((item) => (
                            <ListItem key={
                                `item-${sectionId}-${item}`
                            }>
                                <ListItemText primary={
                                    `Item ${item}`
                                }/>
                            </ListItem>
                        ))
                    } </ul>
                </li>
            ))
        } </List>
    );
}

export default Liste
