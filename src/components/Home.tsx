import Column from "./Column";
import Interests from "./Interests";
import "./style/home.css";

function Home() {
  return (
    <div className="home">
      <div className="titleContainer">
      <h1>CELINE BAILLE</h1>
      </div>
      <div className="pageContent">
        <Column arrayKeyId={"stack"} />
        <Column arrayKeyId={"cv"} />
        <Interests />
      </div>
    </div>
  );
}

export default Home;
