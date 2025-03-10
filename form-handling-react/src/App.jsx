import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // This fails due to .js

function App() {
  return (
    <div>
      <h1>Form Handling Demo</h1>
      <RegistrationForm />
      <hr />
      <FormikForm />
    </div>
  );
}

export default App;