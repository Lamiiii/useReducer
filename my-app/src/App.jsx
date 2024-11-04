import { useReducer } from "react";
import "./App.css";
import { NameInput } from "./Components/NameInput";
import { EmailInput } from "./Components/Emailnput";
import { PasswordInput } from "./Components/PasswordInput";
import { SurnameInput } from "./Components/SurnameInput";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  isVisible: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "surname":
      return { ...state, surname: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "isVisible":
      return { ...state, isVisible: action.payload };
    default:
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleName = (e) => {
    dispatch({ type: "name", payload: e.target.value });
  };

  const handleSurname = (e) => {
    dispatch({ type: "surname", payload: e.target.value });
  };

  const handleEmail = (e) => {
    dispatch({ type: "email", payload: e.target.value });
  };

  const handlePassword = (e) => {
    dispatch({ type: "password", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.name.length < 4) {
      alert("Ad yanlisdir");
      dispatch({ type: "isVisible", payload: false });
    } else {
      dispatch({ type: "isVisible", payload: true });
    }
  };
  return (
    <div className="App">
      <p className="login">Login:</p>
      <form className="about-login" onSubmit={handleSubmit}>
      <NameInput value={state.name} handleName={handleName}/>
      <SurnameInput value={state.surname} handlesurname={handleSurname} />
        <EmailInput value={state.email} handleemail={handleEmail} />
        <PasswordInput value={state.password} handlepassword={handlePassword} />
        {state.isVisible && <p>{state.name}{state.surname}{state.email}{state.password}</p>}
        <button className="submit" type="submit">
          Click me
        </button>
      </form>
    </div>
  );
}

export default App;
