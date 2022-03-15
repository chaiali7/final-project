import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {LocationOn} from '@mui/icons-material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';


function createData(name, State,  City, Zipcode, Native_American_Entity, latitude, longitude) {
  return {
    name, 
    State, 
    City, 
    Zipcode, 
    Native_American_Entity, 
    latitude, 
    longitude
  };
}


// creates the rows with the necessary data "name, state, city, zipcode, native american tribes, latitude, and longitude"
const rows = [

  createData('ADAK NAVAL AIR STATION', 'AK','ADAK',	99546, 'None', 51.877500,	-176.652500),
  createData('EIELSON AIR FORCE BASE',	'AK',	'FAIRBANKS',	99702, 'None', 64.671450, -147.049200),
  createData('SALT CHUCK MINE',	'AK',	'THORNE BAY',	99919, 	'Organized Village of Kasaan (Current)', 55.626442, -132.558853), 
  createData("BUNKER HILL MINING & METALLURGICAL COMPLEX", 'ID', 'SMELTERVILLE', 83837, "Coeur D'Alene Tribe (Current) & Spokane Tribe of the Spokane Reservation (Current)", 47.543061, -116.161700),
  createData("EASTERN MICHAUD FLATS CONTAMINATION", "ID",	"POCATELLO",	83201,	"Shoshone-Bannock Tribes of the Fort Hall Reservation (Current)",	42.901111, -112.522500),
  createData("MONSANTO CHEMICAL CO. (SODA SPRINGS PLANT)",	"ID",	"SODA SPRINGS",	'None', 83276, 42.687031, -111.587800),
  createData("BLACK BUTTE MINE",	"OR",	"COTTAGE GROVE", 97424, "Confederated Tribes of the Grand Ronde Community of Oregon (Current) & Cow Creek Band of Umpqua Tribe of Indians (Current)",	43.579516, -123.066808),
  createData('FORMOSA MINE',	'OR',	'RIDDLE',	97442, "Cow Creek Band of Umpqua Tribe of Indians (Current)",	42.854472, -123.382611),
  createData('MCCORMICK & BAXTER CREOSOTING CO. (PORTLAND PLANT)', 'OR', 'PORTLAND',	97203,	'Confederated Tribes and Bands of the Yakama Nation, Confederated Tribes of the Grand Ronde Community of Oregon, Confederated Tribes of the Umatilla Indian Reservation, Confederated Tribes of the Warm Springs Reservation of Oregon & Nez Perce Tribe (Current)', 45.579443, -122.739440), 
  createData('NORTH RIDGE ESTATES',	'OR',	'KLAMATH FALLS',	97601,	'Klamath Tribes (Current)', 42.264800, -121.746500), 
  createData('AMERICAN LAKE GARDENS/MCCHORD AFB',	'WA',	'TACOMA',	98438,	'Puyallup Tribe of the Puyallup Reservation (Current)', 47.125000, -122.526700),
  createData('HARBOR ISLAND (LEAD)',	'WA',	'SEATTLE',	98134,	'Muckleshoot Indian Tribe, Duwamish Tribe & Suquamish Indian Tribe of the Port Madison Reservation (Current)', 47.579400, -122.352200),
  createData('LOCKHEED WEST SEATTLE',	'WA',	'SEATTLE',	98106,	"Muckleshoot Indian Tribe, Duwamish Tribe Suquamish Indian Tribe of the Port Madison Reservation (Current)", 47.583889, -122.362500), 
  createData('LOWER DUWAMISH WATERWAY',	'WA',	'SEATTLE',	98168,	"Muckleshoot Indian Tribe, Duwamish Tribe, Suquamish Indian Tribe of the Port Madison Reservation (Current)",	47.510081, -122.292850),
  createData('MIDWAY LANDFILL',	'WA',	'KENT',	98031	,'Muckleshoot Indian Tribe (Current)',	47.380000, -122.293300),
  createData('QUEEN CITY FARMS',	'WA',	'MAPLE VALLEY',	98038,	'Muckleshoot Indian Tribe (Current)',	47.450000, -122.041700),
  createData('QUENDALL TERMINALS', 'WA',	'RENTON',	98055,	'Muckleshoot Indian Tribe (Current)',	47.533333, -122.200000),
  createData('SEATTLE MUNICIPAL LANDFILL (KENT HIGHLANDS)',	'WA',	'KENT',	98031,	'Muckleshoot Indian Tribe (Current)',	47.391669, -122.279200),
  createData('WESTERN PROCESSING CO., INC.',	'WA',	'KENT',	98031,	'Muckleshoot Indian Tribe (Current)',	47.425000, -122.241700)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Superfund Site Name',
  },
  {
    id: 'State',
    numeric: true,
    disablePadding: false,
    label: 'State',
  },
  {
    id: 'city',
    numeric: true,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'zipcode',
    numeric: true,
    disablePadding: false,
    label: 'Zipcode',
  },
  {
    id: 'Native_American_Entity',
    numeric: true,
    disablePadding: false,
    label: 'Tribes Affected',
  },
  {
    id: 'latitude',
    numeric: true,
    disablePadding: false,
    label: 'Latitude',
  },
  {
    id: 'longtitude',
    numeric: true,
    disablePadding: false,
    label: 'Longitude',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="success"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all sites',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.success.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Superfund Sites in the Pacific Northwest
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Save Location(s)">
          <IconButton>
            <LocationOn />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('State');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%', margin: 3}}>
      <Paper sx={{ width: '95%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 700 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="success"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                      {row.name}
                      </TableCell>
                      <TableCell align="left">{row.State}</TableCell>
                      <TableCell align="left">{row.City}</TableCell>
                      <TableCell align="left">{row.Zipcode}</TableCell>
                      <TableCell align="left">{row.Native_American_Entity}</TableCell>
                      <TableCell align="left">{row.latitude}</TableCell>
                      <TableCell align="left">{row.longitude}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[4, 8, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}