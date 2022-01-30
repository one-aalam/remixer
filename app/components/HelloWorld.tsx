import { ReactElement } from "react";

function HelloWorld(): ReactElement {
    return (
            <article className="text-center mb-8">
                <h2 className="text-4xl font-semibold app__title">Hello, World!</h2>
                <small className="inline-block border-1 bg-yellow-300 px-2">Build modern full-stack apps, joyfully!</small>
            </article>
        )
}

export default HelloWorld
