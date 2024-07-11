/* eslint-disable no-unused-vars */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Name, Department, Contactno, Adno, year) {
  return { Name, Department, Contactno, Adno, year};
}

const rows = [
  createData('Paul Antony', 'EC', 9874562589, 5466, 2021),
  createData('Afnas MP', 'CS', 9965823658, 5689, 2021),
  createData('Sharjith A', 'CS', 9965823652, 5459, 2021),
  createData('Govind Raj', 'EC', 9965845658, 6645, 2021),
  createData('Adarsh Kumar', 'ME', 9964893658, 9875, 2021),
];

const Records = () => {
    
  return (
    <div>
      <TableContainer component={Paper} sx={{'& td, & th':{border:2}}}>
      <Table sx={{ minWidth: 650 , backgroundColor:'brown'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Department</b></TableCell>
            <TableCell align="right"><b>Contact no.&nbsp;</b></TableCell>
            <TableCell align="right"><b>Admission no.&nbsp;</b></TableCell>
            <TableCell align="right"><b>Year&nbsp;</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Department}</TableCell>
              <TableCell align="right">{row.Contactno}</TableCell>
              <TableCell align="right">{row.Adno}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <form>
      <label>
        Enter your name : 
        <input type = "text" />
      </label>
    </form>
    <form>
      <label>
        Enter your department : 
        <input type = "text" />
      </label>
    </form> */}

    </div>
    
  );
}

export default Records

// eslint-disable-next-line no-unused-vars
// import React from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


// const Records = () => {
//   return (
//     <div>
//       <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   )
// }

// export default Records





