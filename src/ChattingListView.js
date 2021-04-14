import React, { useState } from "react";
import ChattingProfile from "./ChattingProfile";
import ChattingListTopBar from "./ChattingListTopBar";
import userProfileSet from "./User";

function ChattingList() {
  const [matchUserSet, setMatchUserSet] = useState(userProfileSet);

  function searchUser(searchUserInput) {
    setMatchUserSet([]);
    for (let userProfile of userProfileSet) {
      if (userProfile.name.includes(searchUserInput)) {
        setMatchUserSet((matchUser) => [...matchUser, userProfile]);
      }
    }
  }

  return (
    <div>
      <ChattingListTopBar searchUser={searchUser} viewTitle={"채팅"} />
      <ChattingProfile userProfileSet={matchUserSet} />
    </div>
  );
}

export default ChattingList;
