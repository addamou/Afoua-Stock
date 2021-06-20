import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Liste from './Liste';
import FormAdd from './FormAdd';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const Produit = () => {
    const classes = useStyles();

    return (
        <div className={
            classes.root
        }>
            <Grid container
                spacing={3}>

                <Grid item
                    xs={12}
                    sm={6}>
                    <h3>Liste déroulantes des produits & matériels enregistrés</h3>
                    <Liste/>
                </Grid>

                <Grid item
                    xs={12}
                    sm={6}>
                    <FormAdd/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Produit;
