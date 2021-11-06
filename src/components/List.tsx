import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios'
import '../styles/List.css'

//###############################
interface typeData {
    _id: string
    name: string,
    email: string,
    occupation: string,
    description: string
}

interface IRes {
    users: typeData[]
}
//##############################

function List() {

    const [data, setData] = useState<IRes>()

    useEffect(() => {
        axios.get('http://localhost:3030/users')
            .then((res) => setData(res.data))

        console.log(data?.users)

    }, [])

    return (
        <div className='box'>
            {data?.users.map(({ _id, name, occupation }) => (
                <Card key={_id} name={name} occupation={occupation} />
            ))}

        </div>
    )
}

export default List
