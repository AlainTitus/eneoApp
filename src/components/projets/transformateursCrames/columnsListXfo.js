import {format} from 'date-fns'
export const COLUMNS = [
    {
        Header: 'Exploitation',
        accessor: 'Exploitation'
    },
    {
        Header: 'Depart',
        accessor: 'Depart'
    },
    {
        Header: 'Nom Poste',
        accessor: 'Nom_Poste'
    },
    {
        Header: 'Puissance',
        accessor: 'Puis_Xfo_Avarie'
    },
    {
        Header: 'Date Avarie',
        accessor: 'Date_Info_Avarie',
        Cell: ({value})=>{return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header: 'Cause Avarie',
        accessor: 'Cause_Avarie'
    }
];