import { useEffect, useState } from "react"
import styles from "./style.module.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SHEET_ID
const SHEET_NAME = "test"
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY


const CustomerList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

      const res = await fetch(url);
      const json = await res.json();

      if (json.values) {
        const mapped = json.values.map((row, index) => ({
          id: Number(row[0]),
          title: row[1],
          date: row[2],
          tel: row[3],
          name: row[4],
        }))
        setData(mapped)
      }
      console.log(json, "json");
    }
    fetchData()
  }, [])
  console.log(data, "data");
  return (
    <>
      <div className={styles.chartBar}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">エリア</TableCell>
                <TableCell align="right">登録日</TableCell>
                <TableCell align="right">電話番号</TableCell>
                <TableCell align="right">名前</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.tel}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CustomerList;