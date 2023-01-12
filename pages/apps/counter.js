import Head from 'next/head'
import Layout from '../../components/layout'
import { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Head>
        <title>redux-counter</title>
      </Head>
      <h1>Redux-counter</h1>
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
    </div>
    </Layout>
  )
}