import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="p-4" style={{ backgroundColor: "pink" }}>
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-black" target="_blank">
                    FIREBASE
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-black" target="_blank">
                    SEDES
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://github.com/rossvel-hub"
                    className="text-black"
                    target="_blank"
                  >
                    REPOSITORIO
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-black" target="_blank">
                    ABOUT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "pink" }}>
        <a
          className="text-black"
          target="_blank"
          href="https://github.com/rossvel-hubhttps://github.com/rossvel-hub?tab=repositories/juguete"
        >
          [ AV ] Alma Velazquez
        </a>
      </div>
    </footer>
  );
};

export default Footer;
