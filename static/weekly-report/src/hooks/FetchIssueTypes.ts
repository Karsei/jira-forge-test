import { useEffect, useState } from 'react';
// import { requestJira } from './Api';
import { requestJira } from '@forge/bridge';
import { IssueTypeDetails } from '../types/IssueTypes';

export const FetchIssueTypes = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const [types, setTypes] = useState<IssueTypeDetails[]>([]);

  useEffect(() => {
    setLoading(true);
    setErrors([]);

    const fetchTypes = async () => {
      try {
        const response = await requestJira(`/rest/api/3/issuetype`);
        const data = await response.json();

        if (response.status >= 400) {
          if (data.errorMessages && data.errorMessages.length > 0) {
            setTypes([]);
            setErrors(data.errorMessages.map((message: string) => ({ message })));
          } else {
            throw new Error(`알 수 없는 오류: ${response.status}`);
          }
        } else {
          setTypes(data);
        }
      } catch (e) {
        console.error('이슈 타입을 조회하는 과정에서 오류가 발생했습니다.', e);
        setTypes([]);
        setErrors([{ message: '이슈 타입 조회 오류' }]);
      } finally {
        setLoading(false);
      }
    };
    fetchTypes();
  }, [setLoading, setErrors, setTypes]);

  return {
    loading,
    errors,
    types,
  };
};
