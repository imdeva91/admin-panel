import React from 'react'
import "./DataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../DataTableSource';
import { Link } from 'react-router-dom';



const DataTable = () => {

    const actionColumn=[{
        field:"action",
        headerName: "Action",
        width:200,
        renderCell: ()=>{
            return(
                <div className="cellAction">
                  <Link to="/users/single" style={{textDecoration:"none"}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]
  return (
    <div className='dataTable'>
      <div className="dataTableTitle">
        Add New User 
        <Link to="/users/new" style={{textDecoration:"none"}} className='link'>
          Add New
        </Link>
      </div>
         <DataGrid
         className='dataGrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable