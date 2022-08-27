import React, { useState } from 'react';
import ExcelResult from './components/ExcelResult';
import WeeklySearchForm from './components/WeeklySearchForm';

function App() {
  // const [data, setData] = useState(null);
  //
  // useEffect(() => {
  //     invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  // }, []);
  return (
    <div>
      <WeeklySearchForm />
      <ExcelResult />
    </div>
  );
}

export default App;
