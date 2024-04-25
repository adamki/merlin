import { useForm } from "react-hook-form";
import { useAppState } from "../appContextProvider";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input, Select } from "../Components";

const STATES = [
	["WA", "Washington"],
	["LA", "Louisiana"],
]

export const ContactInformation = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <div className="card">
      <Form onSubmit={handleSubmit(saveData)}>
        <fieldset>
          <legend>Contact Information</legend>
          <Field label="Street Address" error={errors?.streetAddress}>
            <Input
              {...register("streetAddress", {
                required: "A Valid Street Address is Required",
              })}
              id="street-address"
            />
          </Field>
          <Field label="City Name" error={errors?.cityName}>
            <Input
              {...register("cityName", {
                required: "A Valid City is Required",
              })}
              id="city-name"
            />
          </Field>
          <Select label="State" {...register("state")} options={STATES} />
          <Field label="Postal Code" error={errors?.postalCode}>
            <Input
              {...register("postalCode", {
                required: "A Valid Postal Code is Required",
              })}
              id="postal-code"
            />
          </Field>
          <Button>Next</Button>
        </fieldset>
      </Form>
    </div>
  );
};
