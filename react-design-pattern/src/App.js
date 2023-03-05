import SplitScreen from "./components/SplitScreen";

const LeftHandComponent = ()=>{
  return (<h1>Left</h1>)
}

const  RightHandComponent = () =>{
  return (<h1>Right </h1>)
}

function App() {
  return (
    <div>
      <SplitScreen>
        <LeftHandComponent />
        <RightHandComponent />
        </SplitScreen>
    </div>
  );
}

export default App;
