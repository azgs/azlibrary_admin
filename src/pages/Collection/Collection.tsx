import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container, Button, LinearProgress  } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import {SensibleTextField} from '@/components/SensibleTextField/SensibleTextField'

interface Values {
  name: string;
}

const Collection = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Collection administration
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          create-replace-edit-delete
        </Typography>
      </Stack>
    <Formik
      initialValues={{
        name: '',
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.name) {
          errors.name  = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >

      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={SensibleTextField}
            name="name"
            type="text"
            label="Name"
          />
          <br />
      
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>

    
    </Container>
  );
};

export default Collection;
