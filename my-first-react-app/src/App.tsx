import Welcome from "./components/Welcome.tsx";
import Header from "./components/Header.tsx";
import Info from "./components/Info.tsx";

const App = () =>{
  return(
    <>
<Welcome message="Hello!" />
<Header logoText="My First React App" />
<Info firstName="John" lastName="Doe" age={30} isStudent={true} />
</>
)}

export default App