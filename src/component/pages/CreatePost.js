import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../component/Header";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
const category = [
  { label: "I" },
  { label: "III" },
  { label: "IV" },
  { label: "VI" },
  { label: "VII" },
];
const CreatePost = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    console.log(values);
    navigate("/list");
  };

  return (
    <Box
     borderRadius="12px"
      component="main"
      sx={{
        p: 3,
        pt: 5,
        width: 500,
        boxShadow: "1px 1px 8px #90caf9",
      }}
      m="auto"
    >
      <Header title="Add New Post" subtitle="" />

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
                fullWidth
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                size="small"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <Autocomplete
                size="small"
                variant="outlined"
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
              <Stack alignItems="center" spacing={2}>
                <Button variant="contained" component="label" color="primary">
                  Select
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Stack>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="primary" variant="contained">
                Add Post
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
  description: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  description: "",
  contact: "",
};

export default CreatePost;
