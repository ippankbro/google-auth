import Logo from "./components/logo";
import SignForm from "./components/signForm";
import "./App.css";

function App() {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <Logo />
        <SignForm formSubmitHandler={formSubmitHandler} />
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/IXUM4cJynP0"
        />
      </div>
    </div>
  );
}

function formSubmitHandler() {}

export default App;
