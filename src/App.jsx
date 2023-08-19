import "./App.css";
import ProfilePicture from "./components/ProfilePicture";
import UserFile from "./components/UserFile";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <UserFile />
      <Footer />
    </div>
  );
}

export default App;
