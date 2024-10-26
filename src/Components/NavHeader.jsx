import "../styles/navbar.css"

export const NavHeader = () => {
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokemon API" width="100"/>
                </div>
            </nav>
        </div>
    )
}