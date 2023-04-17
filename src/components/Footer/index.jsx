import "./style.css";
import FooterHeader from './../Common/FooterHeader';
import FooterLinks from './../Common/FooterLinks';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 py-4">
                        <img className="logo" src="./assets/imgs/footer/Logo.png" alt="Logo"/>
                        <div className="media">
                            <img src="./assets/imgs/footer/facebook.png" alt="facebook"/>
                            <img src="./assets/imgs/footer/twitter.png" alt="twitter"/>
                            <img src="./assets/imgs/footer/youtube.png" alt="youtube"/>
                            <img src="./assets/imgs/footer/instagram.png" alt="instagram"/>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12 py-4">
                        <FooterHeader title='Our Destinations'/>
                        <FooterLinks text='Canada'/>
                        <FooterLinks text='Alaska'/>
                        <FooterLinks text='France'/>
                        <FooterLinks text='Iceland'/>
                    </div>
                    <div className="col-md-2 col-sm-12 py-4">
                        <FooterHeader title='Our Activities'/>
                        <FooterLinks text='Northern Lights'/>
                        <FooterLinks text='Cruising & sailing'/>
                        <FooterLinks text='Multi-activities'/>
                        <FooterLinks text='Kayaing'/>
                    </div>
                    <div className="col-md-2 col-sm-12 py-4">
                        <FooterHeader title='Travel Blogs'/>
                        <FooterLinks text='Bali Travel Guide'/>
                        <FooterLinks text='Sri Lanks Travel Guide'/>
                        <FooterLinks text='Peru Travel Guide'/>
                        <FooterLinks text='Bali Travel Guide'/>
                    </div>
                    <div className="col-md-2 col-sm-12 py-4">
                        <FooterHeader title='About Us'/>
                        <FooterLinks text='Our Story'/>
                        <FooterLinks text='Work with us'/>
                    </div>
                    <div className="col-md-2 col-sm-12 py-4">
                        <FooterHeader title='Contact Us'/>
                        <FooterLinks text='Our Story'/>
                        <FooterLinks text='Work with us'/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
