// @flow
import { withFormik } from 'formik';
import InnerLoginForm from './Login.form';

export type FormValues = {
  email: string,
  password: string,
};

export type StateProps = {
  loginError?: ?string,
};

export type DispatchProps = {
  login: (values: FormValues) => Dispatch<LoginUserRequestAction>,
};

type Props = StateProps & DispatchProps;

const LoginFormContainer = withFormik({
  mapPropsToValues: () =>
    ({
      email: '',
      password: '',
    }: FormValues),
  validate: (values: FormValues) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }
    return errors;
  },
  handleSubmit: (values: FormValues, { props }: { props: Props }) => {
    props.login(values);
  },
})(InnerLoginForm);

export default LoginFormContainer;
