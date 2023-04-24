import Footer from '../../Footer'
import './style.css'


export const LoginLayout = (props) => {
    return (
        <div className='login-wrapper'>
            <div className='left-content'>
                <span className='left-content__brand'>Bk</span>
                <span className='left-content__brand'>Coffee</span>

            </div>
            <div className='right-content'>
                {props.children}
            </div>
        </div>
    )
}