import React from 'react'

const MemberCard = (props) => (
    <div className=' bg-white shadow-lg text-black rounded-2xl w-100 text-center p-6 '>
        <img src={`/image/${props.avatar}`} alt={props.name} className='w-50 mx-auto my-auto'/>
        <p className='text-xl font-bold'>{props.name}</p>
        <span className='text-gray-500'>{props.role}</span>
    </div>
)

export default MemberCard
