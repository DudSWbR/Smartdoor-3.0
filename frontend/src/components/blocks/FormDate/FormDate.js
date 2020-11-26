import React from "react";
import { Formik } from "formik";
import { Grid } from "@material-ui/core";
import { Input, Button } from "~/components/elements";
import { GridButton } from "./styles";
import isMobile from "~/hooks/isMobile";

export default function FormDate({
  field1,
  field1label,
  field2,
  field2label,
  action,
  onSubmit,
  schema,
  mask,
}) {
  const mobile = isMobile();

  const initialValues = () => {
    const values = {};
    values[field1] = "";
    values[field2] = "";
    return values;
  };

  const validationForm = (valid, values) => {
    if (Object.values(values).every((val) => val) && valid) {
      return false;
    }
    return true;
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues()}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        onSubmit(values);
        resetForm({});
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              justify={mobile ? "center" : "space-between"}
            >
              <Grid item xs={12} sm={5} lg={5}>
                <Input
                  name={field1}
                  mask={mask}
                  placeholder={field1label}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field1]}
                  errors={errors[field1] && touched[field1] && errors[field1]}
                />
              </Grid>
              <Grid item xs={12} sm={5} lg={5}>
                <Input
                  name={field2}
                  mask={mask}
                  placeholder={field2label}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field2]}
                  errors={errors[field2] && touched[field2] && errors[field2]}
                />
              </Grid>
              <GridButton
                mobile={mobile ? mobile : undefined}
                item
                xs={12}
                sm={2}
                lg={2}
              >
                <Button
                  className={
                    validationForm(isValid, values)
                      ? "button-chat animation-size"
                      : "button-chat"
                  }
                  disabled={validationForm(isValid, values)}
                  type="submit"
                  size="large"
                >
                  {action}
                </Button>
              </GridButton>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
}
