import Button from "./components/Button";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <section>
        <p>Primary</p>
        <Button text="Primary standard" />
        <Button text="Primary standard" disabled />
      </section>
      <section>
        <p>Secondary</p>
        <Button text="Secondary" variant="secondary" />
        <Button text="Secondary small" variant="secondary" disabled />
      </section>
      <section>
        <p>Error</p>
        <Button text="Error" variant="error" />
        <Button text="Error" variant="error" size={"large"} />
        <Button text="Error small" variant="error" disabled size={"small"} />
      </section>
      <Box />
    </div>
  );
}

export default App;
