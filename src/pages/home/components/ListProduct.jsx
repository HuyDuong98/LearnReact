
export default function ListProduct({ dataFilter, img, alt, titleProduct, type }) {
    return (
        <div className={`portfolio ${dataFilter}`} data-cat="web">
            <div className="portfolio-wrapper">
                <img className="lazy-js" data-src={img} alt={alt} />
                <div className="label">
                    <div className="label-text">
                        <a className="text-title">{titleProduct}</a>
                        <span className="text-category">{type}</span>
                    </div>
                    <div className="label-bg" />
                </div>
            </div>
        </div>
    )
}