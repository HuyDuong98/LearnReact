
export default function ListFilterProduct({dataFilter, textDisplay, active}) {
    return (
    <li><span className= {`filter ${active}`} data-filter={dataFilter}>{textDisplay}</span></li>
    )
}