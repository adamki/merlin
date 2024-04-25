import { useForm } from "react-hook-form";
import { useAppState } from "../appContextProvider";
import { Button, Form, Section } from "../Components";

export const Confirmation = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1>Confirmation</h1>
      <Section title="Account Information" url="/">
        <div>
          <div>First name: </div>
          <div>{state.firstName}</div>
        </div>
        <div>
          <div>Last name: </div>
          <div>{state.lastName}</div>
        </div>
        <div>
          <div>Email address: </div>
          <div>{state.email}</div>
        </div>
      </Section>
      <Section title="Contact Inforation" url="/contact">
        <div>
          <div>Street Address:</div>
          <div>{state.streetAddress}</div>
        </div>
        <div>
          <div>City: </div>
          <div>{state.cityName}</div>
        </div>
        <div>
          <div>State: </div>
          <div>{state.state}</div>
        </div>
        <div>
          <div>Zip Code: </div>
          <div>{state.postalCode}</div>
        </div>
      </Section>
      <div>
        <Button>Submit</Button>
      </div>
    </Form>
  );
};
