import Nav from '../components/Nav'
import Main from './Main'

export const Layout = () => {
  return (
    <div className='flex flex-row relative'>
        <Nav />
        <Main />
    </div>
  )
}
