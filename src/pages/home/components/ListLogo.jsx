import Logo from "./Logo";

export default function ListFilterProduct({ dataFilter, textDisplay, active }) {
    return (
        <section className="client-section section-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="clients-logo">
                            <Logo link="#" img="/img/HTML5.webp" alt="HTML5" />
                            <Logo link="#" img="/img/javascript.webp" alt="Javascript" />
                            <Logo link="#" img="/img/Github.webp" alt="Github" />
                            <Logo link="#" img="/img/jquery.webp" alt="Jquery" />
                            <Logo link="#" img="/img/sass.webp" alt="SASS" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}