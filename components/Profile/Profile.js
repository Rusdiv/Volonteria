import React from "react";
import _get from "lodash/get";

function Profile(props) {
  const { userData } = props;
  return (
    <div>
      <h2>{userData.name}</h2>
      <img src={_get(userData, "avatar_urls[96]")} alt="avatar" />
      <div>id: {userData.id}</div>
    </div>
  );
}

export default Profile;
