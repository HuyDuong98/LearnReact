
export default function Banner() {
    return (
        <div className="main">
            <div className="banner-main lazy-js" data-src="/img/hitman_minion_silverballer_mignon_minimalism_4000x2500.webp">
                <div className="banner-overlay" />
                <div className="banner-content text-center text-white">
                    <div className="container">
                        <h5>Chào bạn, tôi là</h5>
                        <h1 className="text-uppercase">Dương Ngọc Huy</h1>
                        <div className="subtext">
                            <span id="demo">
                            </span></div>
                    </div>
                    <div className="social-link">
                        <a href="https://www.facebook.com/huyduong020998/" target="_blank"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="mailto:huyduong020998@gmail.com"><i className="fab fa-google" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                    </div>
                </div>
                <div id="large-header" className="large-header">
                    <canvas id="demo-canvas" />
                </div>
            </div>
        </div>
    )
}