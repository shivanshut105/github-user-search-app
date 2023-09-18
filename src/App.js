import { useState } from 'react';
import './App.css';
import Layout from './Layout/Layout';

function App() {
  const [userData, setUserData] = useState();
  const [flag, setFlag] = useState(true);

  const getUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error('something went wrong!');
    }

    const data = await response.json();
    return data;
  }

  const fetchData = async (username) => {
    try{
      const data = await getUser(username);
      setUserData(data);
      setFlag(false);
    }
    catch(error){
      console.log(error);
    }
  }

  if (flag) {
      fetchData("octocat");
  }

  return (
    <div className="App">
      <Layout userData={userData} fetchData={fetchData} />
    </div>
  );
}

export default App;
