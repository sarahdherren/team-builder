import React from 'react';

const Member = (props) => {

    const { member, editHandler } = props

    return (
        <div className='TeamCard'>
            <div >
            <h2>{member.firstName} {member.lastName}</h2> 
            <p>{member.position}</p>
            </div>
            <div>
                <p>{member.phone}</p>
                <p>{member.email}</p>
            </div>
            <button onClick={()=>editHandler(member)}>Edit</button>
        </div>
    )
}

export default Member;