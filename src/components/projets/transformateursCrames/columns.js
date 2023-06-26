import {format} from 'date-fns';
import ColumnFilter from './ColumnFilter';

export const COLUMNS = [
    {
        Header: 'Id',
        accessor : 'Id',
        Filter : ColumnFilter,
        disableFilters : true
    },
    {
        Header: 'Depart',
        accessor: 'Depart',
        Filter : ColumnFilter
    },
    {
        Header: 'Exploitation',
        accessor: 'Exploitation',
        Filter : ColumnFilter
    },
    {
        Header: 'Nom Poste',
        accessor: 'Nom_Poste',
        
        Filter : ColumnFilter
    },
    {
        Header: 'Date avarie',
        accessor: 'Date_Info_Avarie',
        Cell: ({value})=>{return format(new Date(value), 'dd/MM/yyyy')},
        Filter : ColumnFilter
    },
    {
        Header: 'Puissance sortie',
        accessor: 'Puis_Xfo_Sorti',
        Filter : ColumnFilter
    }
]