import React from 'react'
import config from '../../config'

export default function SocialLinks () {
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4" />
                <div className="small text-white">{config.address}</div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-white">
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social
            return (
              <a key={url} href={url} className={'mx-2'} aria-label={`link to ${url}`}>
                <i className={`fab ${icon}`}></i>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/*
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-white">{config.phone}</div>
              </div>
            </div>
          </div>
*/
