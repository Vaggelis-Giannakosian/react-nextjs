import React from 'react'
import Link from 'next/link';
import { NextPage } from 'next'

interface Props{
    robots:Robot[]
}

interface Robot{
    id:string,
    name:string,
    email:string
}

const Robots: NextPage<Props> = ({robots}) => {
    
    return (
        <div>
            <h1>Robots</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div>
                Robots data
            </div>
            <div>
                <ul>
                    {
                        robots.map(robot=>(
                            <li key={robot.id}>
                                <Link href={`/robots/${robot.id}`}>
                                    <a> {robot.name}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {
            robots: data
        },
    }
}


export default Robots
