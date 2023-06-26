import React, { useState, useMemo } from 'react';
import { Paper, Typography } from '@mui/material';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { COLUMNS } from './columnsListXfo';
import '../../../public/stylesheet/table.css'
import GlobalFilter from './GlobalFilter';

const ListXfoCrames = ({ listXfoCrames }) => {
    const [listXfos, setListXfos] = useState(listXfoCrames);
    const columns = useMemo(() => COLUMNS, []);
    const data = listXfoCrames;

    const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = tableInstance;

    const {globalFilter} = state;

    return (
        <div style={{marginTop:'20px'}}>
            <Typography variant='h6' component='h6' style={{marginBottom:'10px'}}>Tableau des transformateurs cramés :</Typography>
            {listXfoCrames.lenght === 0 ?
                <p>Aucune données enregistrée à date</p> :
                <Paper style={{padding:'8px'}} elevation={10}>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    <table {...getTableProps()}>
                        <thead>
                            {
                                headerGroups.map(headerGroup => {
                                    return <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map(column => {
                                                return  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                                    {column.render('Header')}
                                                    <span>
                                                        {column.isSorted ? (column.isSortedDesc ? '🔽': '🔼'):''}
                                                    </span>
                                                </th> 
                                            })}
                                            </tr>
                                })}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                rows.map(row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {
                                                row.cells.map((cell) => {
                                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                })}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Paper>

            }
        </div>
    )
}

export default ListXfoCrames
