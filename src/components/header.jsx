import './Header.css'


function Header(){
return ( <div className="header">
            <header>
                <img id="headerbg" src="images/bg3.webp" alt=""/>
                <div className="navbaby">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" id="logo" href="index.html">Mardi <br/> Gras</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav" id="ulHeader"></ul>
                            <li className="nav-item nav-item1"> <a href="index.html" className="nav-link"> Home </a></li>
                            <li className="nav-item nav-item2"> <a href="about.html" className="nav-link"> About </a>
                            </li>
                            <li className="nav-item nav-item3"> <a href="media.html" className="nav-link"> Media </a></li>
                            <li className="nav-item nav-item4"> <a href="FAQ.html" className="nav-link"> FAQ
                             </a></li>
                            <li className="nav-item nav-item5"> <a href="contact.html" className="nav-link"> Contact </a></li>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
);
};

export default Header;