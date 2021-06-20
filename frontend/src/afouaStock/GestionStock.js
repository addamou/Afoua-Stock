import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {
    Paper,
    Tabs,
    Tab,
    Box,
    Container,
    Typography,
} from '@material-ui/core';
import Produit from './code/Produits';
import JournalProduit from './code/JournalProduit';
import TableRecap from './code/TableRecap';
import Manuelle from './code/Manuelle';


const TabPanel = (props) => {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div role="tabpanel"
            hidden={
                value !== index
            }
            id={
                `simple-tabpanel-${index}`
            }
            aria-labelledby={
                `simple-tab-${index}`
            }
            {...other}>
            {
            value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )
        } </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function tabProps(index) {
    return {id: `navTab ${index}`, 'aria-controls': `navTab-${index}`};
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
}));


export default function GestionStock () {
    const classes = useStyles();
    const [nav, setNav] = React.useState(0);

    const handleChange = (event, newNav) => {
        setNav(newNav);
    };

    return (
        <div className={
            classes.root
        }>
            <Paper >
                <Container>
                    <Tabs value={nav}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="primary"
                        centered
                        >
                        <Tab label="Produit & Materiels" {...tabProps(0)}/>
                        <Tab label="Journal Entrée & Sortie" {...tabProps(1)}/>
                        <Tab label="Les Tableau Recapitulatf" {...tabProps(2)}/>
                        <Tab label="Manuel d'utilisation" {...tabProps(3)}/>
                    </Tabs>
                </Container>
            </Paper>
            <TabPanel value={nav}
                index={0}>
                <Produit/>
            </TabPanel>
            <TabPanel value={nav}
                index={1}>
                <JournalProduit/>
            </TabPanel>
            <TabPanel value={nav}
                index={2}>
                <TableRecap/>
            </TabPanel>
            <TabPanel value={nav}
                index={3}>
                <Manuelle/>
            </TabPanel>
        </div>
    );
}
