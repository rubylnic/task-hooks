import List from "./List";
import { useState, useEffect } from 'react';
import Details from "./Details";
export default function UseEffectList() {
  const [users, setUsers] = useState([]);
  const [chosenUser, setChosenUser] = useState();
  const [userInfo, setUserInfo] = useState();

  const fetchApi = (url, setter) => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setter ? setter(result) : console.log('g')
        },
        (error) => {
          console.error('loading error')
        }
      )
  }

  const getDetails = (props) => {
    setChosenUser(props);
  }

  useEffect(() => {
    fetchApi(process.env.REACT_APP_USERS_URL, setUsers)
  }, [])

  useEffect(() => {
    chosenUser ? fetchApi(process.env.REACT_APP_USER_URL + chosenUser.id + '.json', setUserInfo) : console.log('first load');
    console.log('fetched')
  }, [chosenUser?.id])

  return (
    <div>
      <List items={users} getDetails={getDetails} />
      <Details userInfo={userInfo} />
    </div>
  );
}