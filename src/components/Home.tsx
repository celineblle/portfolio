import Column from "./Column";
import Interests from "./Interests";

function Home() {



  return (
    <div>
      <h1>CELINE BAILLE</h1>
      <Column arrayKeyId={"stack"}/> 
      <Column arrayKeyId={"cv"}/>
      <Interests />
    </div>
  );
}

export default Home;
