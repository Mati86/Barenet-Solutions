import { SERVICES } from "../../assests/data/services"

function ServiceItem({ title, desc, imgUrl }) {
  return (
    <div className="services__item">
      <div className="services__item__icon">
        <img src={imgUrl} alt="" width="36"></img>
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}


export default function ServicesSection({ displayHeading }) {
  const services = SERVICES.map((service) => {
    return (
      <div key={"service" + service.id} className="col-lg-4 col-md-6 col-sm-6" >
        <ServiceItem title={service.title} desc={service.desc} imgUrl={service.iconUrl} />
      </div>
    );
  });

  return (
    <section className="services-page spad">
      <div className="container">
        {displayHeading &&
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title team__title">
                <span>Solutions for Your Needs</span>
                <h2>Service Offerings</h2>
              </div>
            </div>
          </div>}

        <div className="row">
          {services}
        </div>
      </div>
    </section>
  )
}

ServicesSection.defaultProps = {
  displayHeading: true
}
