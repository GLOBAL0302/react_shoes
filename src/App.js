import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>

        <Header/>

      <div className="content p-40">
     <div className="mb-40 d-flex align-center justify-between">
         <h1>
             All shoes
         </h1>
         <div className='search-block'>
             <img src="/img/search_icon.svg" alt="search"/>
             <input placeholder="search" type="text"/>
         </div>
     </div>
          <div className="d-flex">
            <Card/>
          </div>
      </div>
    </div>
  );
}

export default App;
