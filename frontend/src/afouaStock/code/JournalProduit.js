import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Table, TableBody, TableContainer, TableCell, TableHead, 
    TablePagination, TableRow, Grid} from '@material-ui/core';
import ToggleForm from './ToggleForm'

const columns = [
    {
        id: 'ref',
        label: 'ref',
        minWidth: 40
    }, {
        id: 'name',
        label: 'Designation',
        minWidth: 100
    }, {
        id: 'entree',
        label: 'Entree',
        minWidth: 80,
        align: 'right',
        format: (value) => value.toFixed(2)
    }, {
        id: 'sortie',
        label: 'Sortie',
        minWidth: 80,
        align: 'right',
        format: (value) => value.toFixed(2)
    },
    
    {
        id: 'date',
        label: 'Date',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toFixed(2)
    },
];

function createData(ref, name, entree, sortie, date) {
    //const density = population / size;
    return {
        ref,
        name,
        entree,
        sortie,
        date
    };
}

const rows = [
    createData('0001', 'Table', '40' ,'54', '05/03/2020'),
    createData('0002', 'Serum','500', '65', '05/03/2020'),
    createData('0003', 'Chaise', '60', '0','05/03/2020'),
    createData('0004', 'Bic','20', '10', '05/03/2020'),
    createData('0005', 'Blouse','30', '30', '05/03/2020'),
    createData('0006', 'Gants','555', '400', '05/03/2020'),
    createData('0007', 'Betadine','90', '80','05/03/2020'),
    createData('0008', 'Sering','72', '60', '05/03/2020'),
    createData('0009', 'Matelas','85', '21', '05/03/2020'),
    createData('0010', 'Paracetamol','861', '755', '05/03/2020'),
    createData('0011', 'Radio','761', '78', '05/03/2020'),
    createData('0012', 'Scanner','01', '0', '05/03/2020'),
    createData('0013', 'Tampon','06', '06', '05/03/2020'),
    createData('0014', 'Alcool','55', '50', '05/03/2020'),
    createData('0015', 'Draps','300', '300', '05/03/2020'),
];

const useStyles = makeStyles({
   
    container: {
        maxHeight: 440,
        width : 800
    },
    number: {
        width : 700
    },
    tete : {
        backgroundColor: 'blue',
        color : 'green'
    }
});

export default function TableEntre() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+ event.target.value);
        setPage(0);
    };

    return (
    
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <h1>JOURNAL DES ENTREES ET SORTIES</h1>
            <TableContainer className={
                classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead className={classes.tete} >
                        <TableRow> {
                            columns.map((column) => (
                                <TableCell key={
                                        column.id
                                    }
                                    align={
                                        column.align
                                    }
                                    style={
                                        {minWidth: column.minWidth}
                                }>
                                    {
                                    column.label
                                } </TableCell>
                            ))
                        } </TableRow>
                    </TableHead>
                    <TableBody> {
                        rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox"
                                    tabIndex={-1}
                                    key={
                                        row.code
                                }>
                                    {
                                    columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={
                                                    column.id
                                                }
                                                align={
                                                    column.align
                                            }>
                                                {
                                                column.format && typeof value === 'number' ? column.format(value) : value
                                            } </TableCell>
                                        );
                                    })
                                } </TableRow>
                            );
                        })
                    } </TableBody>
                </Table>
            </TableContainer>
            <TablePagination rowsPerPageOptions={
                    [10, 25, 100]
                }
                component="div"
                count={
                    rows.length
                }
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                className={classes.number} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <ToggleForm />
            </Grid>
        </Grid>        
    );
}
