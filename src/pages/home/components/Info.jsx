export default function Info() {
    return (
        <section className="section-space">
            <div className="container">
                <div className="row">
                    <div className="col-md-2" />
                    <div className="section-title text-center col-md-8 mb-0" id="about">
                        <h4>Thông tin</h4>
                        <h1 className="title mb-50">Lorem Ipsum has standard</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2" />
                    <div className="about-info col-md-8 mb-100">
                        <div className="media about-thumb media-middle">
                            <a href="#"><img className="media-object lazy-js" data-src="img/IMG_UPLOAD_20180414_005302.webp" /></a>
                        </div>
                        <div className="content">
                            <p> dolor sit amet, consectetur adipisicing elit. Accusantium alias beatae deserunt facilis
                            fuga inventore iure laborum magnam, nam nostrum nulla odio placeat possimus quae quaerat
                            quos reiciendis sapiente soluta? Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium alias. Psum dolor sit amet, consectetur adipisicing elit. Accusantium
                            alias beatae deserunt facilis fuga inventore iure laborum magnam, nam nostrum nulla odio
                            placeat possimus quae quaerat quos reiciendis sapiente soluta? Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Accusantium alias.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2" />
                    <div className="about-info col-md-8">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h4 className="text-uppercase font-weight-bold">Hồ sơ</h4>
                                <p> Nam nostrum nulla odio placeat possimus quae quaerat quos reiciendis sapiente soluta?
                      Lorem ipsum dolor sit amet.</p>
                                <ul className="info-list list-unstyled">
                                    <li>
                                        <label>Họ tên:</label>
                                        <span>Dương Ngọc Huy</span>
                                    </li>
                                    <li>
                                        <label>Ngày sinh:</label>
                                        <span>02/09/1998</span>
                                    </li>
                                    <li>
                                        <label>Số điện thoại:</label>
                                        <span><a href="tel:0353033933">0353033933</a></span>
                                    </li>
                                    <li>
                                        <label>Website:</label>
                                        <span><a href="https://huyduong98.github.io/info/">https://huyduong98.github.io/info/</a></span>
                                    </li>
                                    <li>
                                        <label>Facebook:</label>
                                        <span><a href="https://www.facebook.com/huyduong020998/">Huy Dương</a></span>
                                    </li>
                                    <li>
                                        <label>Email:</label>
                                        <span><a href="mailto:huyduong020998@gmail.com">huyduong020998@gmail.com</a></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-12">
                                <h4 className="text-uppercase font-weight-bold">Kỹ năng</h4>
                                <p> Accusantium alias beatae deserunt facilis fuga inventore iure laborum magnam, nam
                                nostrum nulla odio placeat possimus quae quaerat quos reiciendis sapiente soluta? Lorem
                      ipsum dolor sit amet.</p>
                                <div className="progress mild-progress-style">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <div className="skills-info">Tin học văn phòng <span>90%</span></div>
                                    </div>
                                </div>
                                <div className="progress mild-progress-style">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                                        <div className="skills-info">Tiếng anh<span>66%</span></div>
                                    </div>
                                </div>
                                <div className="progress mild-progress-style">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <div className="skills-info">HTML<span>90%</span></div>
                                    </div>
                                </div>
                                <div className="progress mild-progress-style">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <div className="skills-info">CSS<span>90%</span></div>
                                    </div>
                                </div>
                                <div className="progress mild-progress-style">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>
                                        <div className="skills-info">Javascript/Jquery<span>90%</span></div>
                                    </div>
                                </div>
                                <div className="progress mild-progress-style">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>
                                        <div className="skills-info">C#<span>80%</span></div>
                                    </div>
                                </div>
                                <div className="progress mild-progress-style">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{ width: '70%' }}>
                                        <div className="skills-info">SQL/SQL Server<span>70%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}