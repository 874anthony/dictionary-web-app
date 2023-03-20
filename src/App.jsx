import Header from './shared/Header'
import Layout from './shared/Layout'

import './App.css'

export default function App () {
  return <Layout>
    <Header />

    <div className='search-box'>
      <input className='input-search' type='text' placeholder='Search for any word...' />
      <img className="input-search__icon" src='images/icon-search.svg' alt='Search Icon' />
    </div>
  </Layout>
}
