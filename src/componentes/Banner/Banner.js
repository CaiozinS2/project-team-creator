import './Banner.css'

const Banner = () => {
    return(
        <>
            <header className='banner'>
                <img src="/imagens/banner.svg" alt="O banner principal da página"/>
            </header>
            <header className='mobile'>
                <img src='/imagens/bannermob.svg' alt='O banner principal da página mobile'/>
            </header>
        </>
    )
}

export default Banner