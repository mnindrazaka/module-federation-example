import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
const SayHelloFromA = React.lazy(() => import('application_a/SayHelloFromA'))

ReactDOM.render(
    <>
        <App />
        <React.Suspense fallback={<p>loading...</p>}>
            <SayHelloFromA />
        </React.Suspense>
    </>,
    document.getElementById('root')
)