import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../component/Header";
import Autocomplete from "@mui/material/Autocomplete";
// import Stack from "@mui/material/Stack";
// import { useNavigate } from "react-router-dom";
const category = [
  { label: "I" },
  { label: "III" },
  { label: "IV" },
  { label: "VI" },
  { label: "VII" },
];
const AddTeacher = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    console.log(values);
    // navigate("/list");
  };

  return (
    <Box borderRadius="12px"
      component="main"
      sx={{ p: 3, pt: 5, width: 500, height: 500, boxShadow: "1px 1px 8px #90caf9"}}
      m="auto"
    >
      <Header title="Add New Teacher" subtitle="" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
              size="small"
               variant="outlined"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
              size="small"
                fullWidth
                variant="outlined"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
              size="small"
                fullWidth
                variant="outlined"
                type="date"
                label=""
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dateofbirth}
                name="dateofbirth"
                error={!!touched.dateofbirth && !!errors.dateofbirth}
                helperText={touched.dateofbirth && errors.dateofbirth}
                sx={{ gridColumn: "span 4" }}
              />
              <Autocomplete
              size="small"
                disablePortal
                id="combo-box-demo"
                options={category}
                sx={{ gridColumn: "span 4" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Class"
                    variant="outlined"
                    type="text"
                  />
                )}
              />
              <TextField
              size="small"
                fullWidth
                variant="outlined"
                type="password"
                label="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="primary" variant="contained">
                Add
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  dateofbirth: yup.string().required("required"),
  password: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  dateofbirth: "",
  contact: "",
  password: "",
};

export default AddTeacher;
