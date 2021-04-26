import ListFilterProduct from "./ListFilterProduct";
import ListProduct from "./ListProduct";

export default function Product() {
    return (
        <section className="section-space">
            <div className="container">
                <div className="section-title text-center" id="product">
                    <h1 className="title">Sản phẩm</h1>
                    <p className="color-gray">Pellentesque eu quam sem, ac malesuada leo sem quam pellente.</p>
                </div>
                <div id="fh5co-portfolio-section">
                    <div className="container">
                        <ul id="filters" className="clearfix animate-box">
                            <ListFilterProduct dataFilter=".all" textDisplay="All" active="active" />
                            <ListFilterProduct dataFilter=".app" textDisplay="App" />
                            <ListFilterProduct dataFilter=".icon" textDisplay="Icon" />
                            <ListFilterProduct dataFilter=".logo" textDisplay="Logo" />
                            <ListFilterProduct dataFilter=".web" textDisplay="Web" />
                        </ul>
                        <div id="portfoliolist" className="animate-box">
                            <div className="row">
                                <ListProduct dataFilter="all web" img="/img/2021-03-30_15-19-27.webp" alt="" titleProduct="Thư viện ảnh" type="Website" />
                                <ListProduct dataFilter="all web" img="/img/2021-04-01_11-34-47.webp" alt="" titleProduct="Shop dán tường" type="Website" />
                                <ListProduct dataFilter="all web" img="/img/2021-03-30_15-44-31.webp" alt="" titleProduct="Website nhà sách" type="Website" />
                                <ListProduct dataFilter="all web" img="/img/2021-04-01_11-20-36.webp" alt="" titleProduct="Card tín dụng" type="Business card" />
                                <ListProduct dataFilter="all web" img="/img/smartmockups_kmyibc1c.webp" alt="" titleProduct="Quản lý công việc" type="Card" />
                                <ListProduct dataFilter="all web" img="/img/smartmockups_kmzy5yxy.png" alt="" titleProduct="Tiệm bánh" type="Web design" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}