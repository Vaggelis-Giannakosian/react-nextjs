import React from 'react'
import Link from 'next/link'

const Index: React.FC = () => {

    return (
        <div style={ {fontSize:'20px', color:'blue'} }>
            Hello from Contact!

            <a href="/">Index</a>
            <p>
                <Link href="/">
                    <a>Index</a>
                </Link>
            </p>
        </div>
    );

}


export default Index