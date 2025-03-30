
import Navebar from './Navebar'
import { Outlet } from 'react-router-dom'




const Layout = () => {

 




  return (
    <div >
      <Navebar />
      <main >

       <Outlet/>

      </main>
    </div>
  )
}

export default Layout
