import React, {useEffect, useState} from 'react'
import Card from './Card';
import axios, {AxiosResponse} from 'axios'
import '../styles/List.css'

//###############################
interface typeData {
    id: string
    name: string,
    email: string,
    occupation: string,
    description: string
}
//##############################

function List() {

    const [data, setData] = useState<typeData[]>([])

    useEffect(() => {
        axios.get('http://localhost:3030/users')
        .then((res) => setData(res.data))

    console.log(data)
    }, [])
    

    return (
        <div className='box'>
        {data.map(({id, name, occupation}) => (
            <Card key={id} name={name} occupation={occupation}/>
        ))}
            
        </div>
    )
}

export default List
