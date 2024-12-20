import Card from "./components/Card";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import GraphSection from "./components/GraphSection";
import Table from './components/Order';
import { mockData } from "./constants/index";

const App = () => {
  return (
    <div >
      <div className="flex">
        <Sidebar />

        <div className="flex flex-col w-screen bg-gray-100">
          <Navbar />
          <div className="px-6 bg-white rounded-lg shadow-md ">
            <Card />

            <GraphSection />

            <Table data={mockData} />
          </div>
        </div>
      </div>


    </div>
  );
};

export default App;