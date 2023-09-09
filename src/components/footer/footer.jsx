import sty from './footer.module.css'

const Footer = () => {
    return ( 
        <div>
            <footer>
                <ul>
                    <p>Edyoda</p>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Privacy policy</li>
                </ul>
                <ul>
                    <p>Resources</p>
                    <li>Jobs</li>
                    <li>Learning path</li>
                    <li>Courses</li>
                    <li>Educators</li>
                </ul>
                <ul>
                    <p>Connect</p>
                    <span>1st Floor,<br/>
                    Gopalan Millennium Tower,
                    ITPL Main Road, Brookefield,
                    Bengaluru, Karnataka-560037,
                    India</span>
                    <br/><br />
                    <div className={sty.address}>
                        <img src='https://www.edyoda.com/static/media/email-white.e7d51381.svg' width={20} height={20} />
                        <span>hello@edyoda.com</span>
                    </div>
                </ul>
            </footer>
            <p className={sty.owner}>&copy; Created by Vishal kumar</p>
        </div>
     );
}
 
export default Footer;