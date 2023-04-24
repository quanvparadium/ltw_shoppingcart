import Footer from '../../Footer'
import {Header} from '../../Header'
import { useState, useEffect } from 'react'


export const DefaultLayout = (props) => {
    const [page, setPage] = useState(1)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    },[page])
    const handleClick = () => {
      if (page === 1) {
        setPage(0)
      }
      else setPage(1)
    }
    return (
        <div> 
            <Header />
                <div>{props.children}</div>
            <Footer/>
            <p className='to-top' onClick={handleClick}>
                <i className="fa-sharp fa-solid fa-chevron-up"></i>
            </p>
        </div>
    )
}