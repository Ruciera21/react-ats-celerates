import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card";
import Applied from "../../assets/icon_applied.png";
import AllJobs from "../../assets/icon_all.png";
import { Table } from "flowbite-react";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
const Home = () => {
  return (
    <>
      <Navbar />
      <Card />
      <section className="md:container container box-border">
        <div className="flex relative flex-row gap-32 justify-center text-center items-center font-[Poppins]">
          <div className="bg-gray-300 border-solid box-border flex flex-col items-center  md:box-content rounded-2xl w-1/3 h-1/2">
            <img src={AllJobs} alt="" className="w-32" />
            <h1 className="my-2 text-6xl font-semibold">420</h1>
            <h1 className="mb-2 text-l">All jobs</h1>
          </div>
          <div className="bg-gray-300 border-solid flex flex-col box-border items-center md:box-content rounded-2xl w-1/3 h-1/3 ">
            <img src={Applied} alt="" className="w-32" />
            <h1 className="my-2 text-6xl font-semibold">69</h1>
            <h2 className="mb-2 text-l">Applied</h2>
          </div>
        </div>
      </section>
      <section
        className="container-2xl border-solid rounded-3xl my-12 mx-12 h-96 
    font-[Poppins] md:bg-top bg-center"
      >
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
      </section>
    </>
  );
};

export default Home;
