import { useForm } from "react-hook-form";
import { useAppState } from "../appContextProvider";
import { useNavigate } from "react-router-dom";
import { Button, Field, Form, Input } from "../Components";

export const AccountInformation = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");
  const navigate = useNavigate();
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/contact");
  };

  return (
    <div className="card">
      <Form onSubmit={handleSubmit(saveData)}>
        <fieldset>
          <legend>Account Information</legend>
          <Field label="First name" error={errors?.firstName}>
            <Input
              {...register("firstName", { required: "First name is required" })}
              id="first-name"
            />
          </Field>
          <Field label="Last name" error={errors?.lastName}>
            <Input {...register("lastName")} id="last-name" />
          </Field>
          <Field label="Email" error={errors?.email}>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
            />
          </Field>
          <Field label="Password" error={errors?.password}>
            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
            />
          </Field>
          <Field label="Confirm password" error={errors?.confirmPassword}>
            <Input
              {...register("confirmPassword", {
                required: "Confirm the password",
                validate: (value) =>
                  value === watchPassword || "The passwords do not match",
              })}
              type="password"
              id="password-confirm"
            />
          </Field>
          <Button>Next</Button>
        </fieldset>
      </Form>
    </div>
  );
};
