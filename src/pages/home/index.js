import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card";
import TableJob from "../../components/table";

const Home = () => {
  return (
    <div className="max-w-screen-2xl w-full md:w-full">
      <Navbar />
      <Card />

      <TableJob />
    </div>
  );
};

export default Home;
