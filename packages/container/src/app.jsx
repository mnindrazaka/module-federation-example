import React from 'react'

const SayHelloFromA = React.lazy(() => import('application_a/SayHelloFromA'))
const SayHelloFromB = React.lazy(() => import('application_b/SayHelloFromB'))

export default function App() {
    return (
        <div>
            <h1>Welcome to my web</h1>
            <React.Suspense fallback={<p>loading...</p>}>
                <SayHelloFromA />
            </React.Suspense>
            <React.Suspense fallback={<p>loading...</p>}>
                <SayHelloFromB />
            </React.Suspense>
        </div>
    )
}