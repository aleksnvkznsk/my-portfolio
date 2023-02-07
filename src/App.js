
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Home></Home>
      <Contacts></Contacts>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
