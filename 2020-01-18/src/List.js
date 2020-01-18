import React from 'react';

function Member({ member }) {
    return (
        <div>
                <li>{member.name}</li>
                <ul>
                    <li>학년: {member.grade}</li>
                    <li>사용 OS: {member.devOs}</li>
                    <li>성별: {member.gender}</li>
                </ul>
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
              { memberData.map((member, index) => (
                  <Member member={member} key={index}/> 
              ))}
          </div>
      )
}
export default List;