import React from 'react';

function User({ user }) {
    
    return (
        <div>
            <ol>
                <li>{user[0].name}</li>
                <ul>
                    <li>학년: {user[0].grade}</li>
                    <li>사용 OS: {user[0].devOs}</li>
                    <li>성별: {user[0].gender}</li>
                </ul>
                <li>{user[1].name}</li>
                <ul>
                    <li>학년: {user[1].grade}</li>
                    <li>사용 OS: {user[1].devOs}</li>
                    <li>성별: {user[1].gender}</li>
                </ul>
                <li>{user[2].name}</li>
                <ul>
                    <li>학년: {user[2].grade}</li>
                    <li>사용 OS: {user[2].devOs}</li>
                    <li>성별: {user[2].gender}</li>
                </ul>
            </ol>
        </div>
    )
}

function List() {
    const memberData = [
        {
          pk: 1,
          name: "김민지",
          grade: 1,
          devOs: "window",
          gender: "female"
        },
        {
          pk: 2,
          name: "한우혁",
          grade: 2,
          devOs: "window",
          gender: "male"
        },
        {
          pk: 1,
          name: "황태우",
          grade: 1,
          devOs: "macOS",
          gender: "male"
        }
      ];

      return(
          <div>
              <User user={memberData} />
          </div>
      )
}
export default List;