import React, {useEffect, useState} from 'react'
import Button from '@atlaskit/button'
import './App.css'
import WeeklySearchForm from './components/WeeklySearchForm'

function App() {
    // const [data, setData] = useState(null);
    //
    // useEffect(() => {
    //     invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    // }, []);
    return (
        <div className="App">
            <WeeklySearchForm />
        </div>
    )
}

export default App
