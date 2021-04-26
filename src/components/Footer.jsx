import React from 'react'

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <section className="mb-5">
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 text-center mt-100">
                                © Copyright 2021 : <a href="/info/index.html">Huy Dương</a>. All Rights Reserved.
                  <div className="social-link mt-3">
                                    <a href="https://www.facebook.com/huyduong020998/" target="_blank"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-instagram" /></a>
                                    <a href="mailto:huyduong020998@gmail.com"><i className="fab fa-google" /></a>
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </React.Fragment>
    )
}