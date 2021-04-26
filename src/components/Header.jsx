import React from 'react'

export default function Header() {
    return (
        <>
            <div className="loader-overlay">
                <div className="loader-content">
                    <span className="animated animatedFadeInUp fadeInUp">S</span>
                    <span className="animated animatedFadeInUp fadeInUp">I</span>
                    <span className="animated animatedFadeInUp fadeInUp">M</span>
                    <span className="animated animatedFadeInUp fadeInUp">P</span>
                    <span className="animated animatedFadeInUp fadeInUp">L</span>
                    <span className="animated animatedFadeInUp fadeInUp">E</span>
                </div>
            </div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top navbar-expanded">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="/img/logo-small.webp" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse ml-auto justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active" data-nav="home">
                                    <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item" data-nav="about">
                                    <a className="nav-link" href="#">Thông tin</a>
                                </li>
                                <li className="nav-item" data-nav="experience">
                                    <a className="nav-link" href="#">Kinh nghiệm</a>
                                </li>
                                <li className="nav-item" data-nav="product">
                                    <a className="nav-link" href="#">Sản phẩm</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}