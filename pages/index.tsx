import { Form, Text, useFormApi, useFormState } from "informed";

const validate = (value) =>
  value === null ? "This field is required" : undefined;

const FirstName = ({ next }) => {
  return (
    <div>
      <label htmlFor="first">
        Please enter your first name:
        <Text field="first" validate={validate} keepState />
      </label>
      <button type="button" onClick={next}>
        Next
      </button>
    </div>
  );
};

const Allergic = ({ next, back }) => {
  return (
    <div>
      <label htmlFor="allergic">
        Are you alergic to penut butter?:
        <Text field="allergic" keepState />
      </label>
      <button type="button" onClick={next}>
        Next
      </button>
      <button type="button" onClick={back}>
        Back
      </button>
    </div>
  );
};

const Color = ({ back }) => {
  return (
    <div>
      <label htmlFor="color">
        Please enter your favorite color:
        <Text field="color" validate={validate} keepState />
      </label>
      <button type="button" onClick={back}>
        Back
      </button>
      <button type="submit">Submit</button>
    </div>
  );
};

const Steps = () => {
  const { next, back } = useFormApi();
  const { step } = useFormState();

  if (step === 0) return <FirstName next={next} />;
  if (step === 1) return <Allergic next={next} back={back} />;
  if (step === 2) return <Color back={back} />;
};

const Buttons = () => {
  const buttonNames = ["Jump2 FirstName", "Jump2 Allergic", "Jump2 Colors"];
  const { setStep } = useFormApi();
  const { step } = useFormState();

  return (
    <div>
      {buttonNames.map((button, index) => (
        <button
          key={index}
          type="button"
          aria-current={step === index}
          disabled={index >= step}
          onClick={() => setStep(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

const One = () => {
  return (
    <Form>
      <h1>*.tsx</h1>
      <div
        style={{
          border: "solid 1px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <Steps />
      </div>
      <Buttons />
    </Form>
  );
};

export default One;
