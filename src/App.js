import Button from "./components/Button";
import Link from "./components/Link/Link";

function App() {
  return (
    <div className="App">
      <section>
        <p>Primary</p>
        <Button label="Primary standard" />
        <Button label="Primary standard" disabled />
      </section>
      <section>
        <p>Secondary</p>
        <Button label="Secondary" variant="secondary" />
        <Button label="Secondary small" variant="secondary" disabled />
      </section>
      <section>
        <p>Error</p>
        <Button label="Error" variant="error" />
        <Button label="Error" variant="error" size={"large"} />
        <Button label="Error small" variant="error" disabled size={"small"} />
      </section>
      <section>
        <p>Success</p>
        <Button label="Success" variant="success" />
        <Button label="Success" variant="success" size={"large"} />
        <Button
          label="Success small"
          variant="success"
          disabled
          size={"small"}
        />
      </section>
      <Link children="I am span" href="#" />
    </div>
  );
}

export default App;
