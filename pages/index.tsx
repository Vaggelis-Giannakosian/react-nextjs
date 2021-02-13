import React from 'react'
import {addFunction} from "../services/utils";
import Link from "next/link";
import Image from "../components/Image"
const App: React.FC = () => {

    return (
        <div>
            Hello World!
            <p>
                {addFunction(1,2)}

                <a href="./contact">Contact</a>
                <p>
                    <Link href="/contact">
                        <a>Contact</a>
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