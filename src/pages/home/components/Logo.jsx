
export default function Logo({ link, img, alt}) {
    return (
        <a href={link} className="client-item"  alt={alt}><img className="lazy-js" data-src={img}/></a>
    )
}