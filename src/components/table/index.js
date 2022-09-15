import React from "react";
import { Table } from "flowbite-react";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";

const TableJob = () => {
  return (
    <>
      <section
        className="container-2xl border-solid rounded-3xl my-12 mx-12 h-96 
    font-[Poppins] md:bg-top bg-center"
      >
        <div class="-z-50">
          <Table>
            <TableHead>
              <TableHeadCell>No.</TableHeadCell>
              <TableHeadCell>Nama Pekerjaan</TableHeadCell>
              <TableHeadCell>Perusahaan</TableHeadCell>
              <TableHeadCell>Gaji</TableHeadCell>
            </TableHead>
            <TableBody>
              <TableCell>1</TableCell>
              <TableCell>Software Developer</TableCell>
              <TableCell>CELERATES</TableCell>
              <TableCell>10.000.000</TableCell>
            </TableBody>
            <TableBody>
              <TableCell>2</TableCell>
              <TableCell>Software Developer</TableCell>
              <TableCell>CELERATES</TableCell>
              <TableCell>10.000.000</TableCell>
            </TableBody>
            <TableBody>
              <TableCell>3</TableCell>
              <TableCell>Software Developer</TableCell>
              <TableCell>CELERATES</TableCell>
              <TableCell>10.000.000</TableCell>
            </TableBody>
            <TableBody>
              <TableCell>4</TableCell>
              <TableCell>Software Developer</TableCell>
              <TableCell>CELERATES</TableCell>
              <TableCell>10.000.000</TableCell>
            </TableBody>

            <TableBody>
              <TableCell>5</TableCell>
              <TableCell>Software Developer</TableCell>
              <TableCell>CELERATES</TableCell>
              <TableCell>10.000.000</TableCell>
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default TableJob;
