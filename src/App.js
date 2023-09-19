import { useState } from 'react';
import classes from './App.module.css';
import Layout from './Layout/Layout';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';

function App() {
  const [userData, setUserData] = useState();
  const [flag, setFlag] = useState(true);

  const theme = useSelector(state=>state.ui.mode);

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

  let appClasses = classes.App;
  if(theme) appClasses = appClasses + ' ' + classes.Light;
  else appClasses = appClasses + ' ' + classes.Dark;

  return (
    <div className={appClasses}>
      <Layout userData={userData} fetchData={fetchData} />
      <Footer />
    </div>
  );
}

export default App;
