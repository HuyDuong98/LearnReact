import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Info from "./components/Info";
import Parallax from "./components/Parallax";
import Product from "./components/Product";
import University from "./components/University";

export default function Home() {
    return (
        <>
            <Banner />
            <Info />
            <University />
            <Experience />
            <Product />
            <Parallax />
        </>
    );
}