import React from 'react';
import Button from '@atlaskit/button';
import { DatePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form';

const WeeklySearchForm = function () {
  return (
    <Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
      {({ formProps }) => (
        <form {...formProps}>
          <Field name={'startDate'} label={'시작 날짜'} isRequired={true} defaultValue={''}>
            {({ fieldProps }) => (
              <>
                <DatePicker {...fieldProps} />
                <HelperMessage>Help or instruction text goes here</HelperMessage>
              </>
            )}
          </Field>
          <FormFooter>
            <Button type="submit" appearance={'primary'}>
              조회
            </Button>
          </FormFooter>
        </form>
      )}
    </Form>
  );
};

export default WeeklySearchForm;
