import React, { Fragment, useCallback } from 'react';
import Select from '@atlaskit/select';
import { LoadingButton } from '@atlaskit/button';
import { DatePicker } from '@atlaskit/datetime-picker';
import UserPicker from '@atlaskit/user-picker';
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';
import { FetchIssueTypes } from '../hooks/FetchIssueTypes';
import { Meta } from '@atlaskit/form/dist/types/field';

const WeeklySearchForm = function () {
  // const { loading, errors, types } = FetchIssueTypes();

  const onSubmitHandler = useCallback((formState: unknown) => {
    console.log(formState);
    // console.info(types, formState);
  }, []);

  const validateDate = (value: string | undefined, formState: any, fieldState: Meta) => {
    //console.log(value, formState, fieldState);
    if (!value) {
      return 'REQUIRED';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Form onSubmit={(formState: unknown) => onSubmitHandler(formState)}>
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <FormHeader title="주간 보고 출력" />
            <FormSection>
              <Field name={'baseDate'} label={'기준 날짜'} isRequired validate={validateDate}>
                {({ fieldProps, error, valid, meta }) => (
                  <Fragment>
                    <DatePicker {...fieldProps} />
                    {valid && <ValidMessage>올바르게 입력되었습니다.</ValidMessage>}
                    {!error && <HelperMessage>이슈가 포함될 기준 날짜를 선택하세요.</HelperMessage>}
                    {error === 'REQUIRED' && <ErrorMessage>이 항목을 입력해주세요.</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
            </FormSection>
            <FormFooter>
              <LoadingButton type="submit" appearance="primary" isLoading={submitting}>
                조회
              </LoadingButton>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
};

export default WeeklySearchForm;
