import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number must be in format 123-45-67')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label htmlFor="number">Number</label>
      <input
        id="number"
        name="number"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
      />
      {formik.touched.number && formik.errors.number ? (
        <div>{formik.errors.number}</div>
      ) : null}

      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
