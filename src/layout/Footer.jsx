function Footer() {
    return(
        <footer className="pageFooter green lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear()} Copyright Text
                    <a href="#!" className="grey-text text-lighten-4 right">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
