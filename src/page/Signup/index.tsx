import { useForm } from "../../hooks";

const Signup = () => {
  const { errors, touched, handleChange, handleBlur, handleSubmit } = useForm({
    initialValues: { email: "", password: "" },
    validate: (values: object) => {
      const errors = {
        email: "",
        password: "",
      };

      if (!values.email) {
        errors.email = "이메일을 입력하세요";
      }
      if (!values.password) {
        errors.password = "비밀번호를 입력하세요";
      }

      return errors;
    },
    onSubmit: (values: object) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password && <span>{errors.password}</span>}

      <button type="submit">Login</button>
    </form>
  );
};

export default Signup;
