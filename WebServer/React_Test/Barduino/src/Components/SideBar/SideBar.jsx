import MainDrink from "../MainDrink/MainDrink.jsx";

const SideBar = () => {
  return (
    <div>
      <h1>Table Example</h1>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <MainDrink/>
            <MainDrink/>
          </tr>
          <tr>
            
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
};

export default SideBar;
