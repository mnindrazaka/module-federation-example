import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
const SayHelloFromB = React.lazy(() => import('application_b/SayHelloFromB'))

ReactDOM.render(
    <>
        <App />
        <React.Suspense fallback={<p>loading...</p>}>
            <SayHelloFromB />
        </React.Suspense>
    </>,
    document.getElementById('root')
)