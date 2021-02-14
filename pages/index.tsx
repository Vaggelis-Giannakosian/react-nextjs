import React from 'react'
import Link from "next/link";
import Image from "../components/Image"
const App: React.FC = () => {

    return (
        <div>
            Hello World!
            <p>
                <a href="./contact">Contact</a>
                <p>
                    <Link href="/contact">
                        <button>Contact</button>
                    </Link>
                </p>
                <p>
                    <Link href="/robots">
                        <button>Robots</button>
                    </Link>
                </p>
            </p>

            <p>
                <Image></Image>
            </p>
        </div>
    );

}


export default App