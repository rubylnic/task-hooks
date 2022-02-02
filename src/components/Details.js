export default function Details({ userInfo }) {
  if (userInfo) {
    return (
      <div className="details" id={userInfo.id}>
        <img src={userInfo.avatar}></img>
        <div>{userInfo.name}</div>
        <div>City: {userInfo.details.city}</div>
        <div>Company: {userInfo.details.company}</div>
        <div>Position: {userInfo.details.position}</div>
      </div>
    )
  } else {
    return (<></>)
  }

}