import "./home.scss";
import MapsComponentDash from "../../components/map/dasboardMap";
import MiniDrawer from "../../components/sidebar/sidebar2coll2";
import { useParams } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <MiniDrawer />
      <div className="homeContainer">
        <div className="widgets">{/* <Widget type="order" /> */}</div>
        <div className="listContainer">
          <div>
            <div className="listTitle">All Asset Location</div>
            <MapsComponentDash></MapsComponentDash>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
