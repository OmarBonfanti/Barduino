import "./MainDrink.css"
import jagerbomb from '/public/jagerbomb.png'; // adjust the path and file extension as needed

const MainDrink = () => {
  return (
    <div className="square">
      <img className="drink" src={jagerbomb} alt="Jagerbomb" />
    </div>
  );
};

export default MainDrink;