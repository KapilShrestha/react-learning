import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/kapilShrestha')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    // })
    // }, [])
  return (
    <div className='text-center
     m-4 bg-gray-600 text-white text-3xl flex flex-center'>Github followers: {data.followers}
         <img className='w-48' src={data.avatar_url} alt="git avatar" />
 
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/kapilShrestha')
    return response.json()
}
