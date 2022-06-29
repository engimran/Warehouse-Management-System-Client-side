import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-2 mt-4 bg-dark text-white ">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 pt-10 d-flex align-items-center justify-content-center">
                        <h5 className="text-uppercase">Grocery Item</h5>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Our Service</h5>
                        <ul className="list-unstyled ">
                            <li><a className='text-white text-decoration-none' href="#!">Online Service</a></li>
                            <li><a className='text-white text-decoration-none' href="#!">Offline Service</a></li>
                            <li><a className='text-white text-decoration-none' href="#!">About Us</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a className='text-white text-decoration-none' href="https://mdbootstrap.com/"> dailyneeds.com</a>
            </div>

        </footer>

    );

};

export default Footer;