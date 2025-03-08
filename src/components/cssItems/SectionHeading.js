import breadcrumbImg from "../../assests/img/breadcrumb-bg.jpg"
import { Link } from 'react-router-dom'


export default function SectionHeading({ title, prevPage, prevUrl, currPage}) {
  return (
    <div className="breadcrumb-option spad set-bg" style={{ backgroundImage: `url(${breadcrumbImg})` }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>{title}</h2>
                        {/* <div className="breadcrumb__links">
                            <Link to={prevUrl}>{prevPage}</Link>
                            <span>{currPage}</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
