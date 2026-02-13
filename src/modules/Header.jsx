import { Logo } from '../assets/images'
import { Button, Navitem } from '../components'

const Header = () => {
    const navList = [
        { id: 1, path: "#", name: "Home", badge: null },
        { id: 2, path: "#", name: "About", badge: null },
        { id: 3, path: "#", name: "Promotions", badge: "HOT" },
        { id: 4, path: "#", name: "Blogs", badge: null },
        { id: 5, path: "#", name: "Contact Us", badge: null }
    ]


    return (
        <header className="py-5.75">
            <div className='containers flex items-center justify-between'>
                <a href="/">
                    <img src={Logo} alt="Site Logo" width={207} height={50} />
                </a>
                <nav className='flex items-center gap-8'>
                    {navList.map(item => <Navitem key={item.id} item={item}/>)}
                </nav>
                <div className='flex items-center gap-6'>
                    <p>Masuk</p>
                    <Button title={"Daftar Sekarang"}/>
                </div>
            </div>
        </header>
    )
}

export default Header