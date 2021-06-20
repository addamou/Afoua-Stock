import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

/**sytle document */
const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    container: {
        maxHeight: 440
        
    }
});

/**donnees tableaux */

const columns = [
    {
        id: 'ref',
        label: 'REF',
        minWidth: 60
    },
    {
        id: 'name',
        label: 'DESCRIPTION',
        minWidth: 200
    },
    {
        id: 'fournisseur',
        label: 'FOURNISSEUR',
        minWidth: 170,
        align: 'right'
    },
    {
        id: 'prix',
        label: 'PRIX UNITAIRE',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    }, {
        id: 'entree',
        label: 'STOCK ENTRANT',
        minWidth: 100,
        align: 'right'
    }, {
        id: 'sortie',
        label: 'STOCK SORTANT',
        minWidth: 100,
        align: 'right'
    }, {
        id: 'totalReste',
        label: 'STOCK ACTUEL',
        minWidth: 100,
        align: 'right'
    },
     
];

function createData(ref, name, fournisseur, prix, entree, sortie) {
    const totalReste = entree - sortie;
    return {
        ref,
        name,
        fournisseur,
        prix,
        entree,
        sortie,
        totalReste
    };
};

const rows = [
    createData('0001', 'Table','TNRH','500', 40 , 54),
    createData('0002', 'Serum','Niger Imo','200',500, 65),
    createData('0003', 'Chaise','TOTIC','760',60, 0),
    createData('0004', 'Bic','STB','20',800 ,10),
    createData('0005', 'Blouse','TN','30', 100,30),
    createData('0006', 'Gants','TRH','555',50 ,400),
    createData('0007', 'Betadine','NRH','90' , 1000,80),
    createData('0008', 'Sering','TN','72', 300 , 60 ),
];


const TableRecap = () => {
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
        <Paper className={
            classes.root
        }>
            <TableContainer className={
                classes.container
            }>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
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
                onChangeRowsPerPage={handleChangeRowsPerPage}/>
        </Paper>
    );
};

export default TableRecap;
