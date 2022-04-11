import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <div>
        <section>
          <nav>
            <div>
              <h1>
                Keycloak React AUTH.
              </h1>
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/secured">
                    Secured Page
                  </Link>
                </li>
              </ul>
              <div>
                <div>
                  {!keycloak.authenticated && (
                    <button
                      type="button"
                      onClick={() => keycloak.login()}
                    >
                      Login
                    </button>
                  )}

                  {!!keycloak.authenticated && (
                    <button
                      type="button"
                      onClick={() => keycloak.logout()}
                    >
                      Logout ({keycloak.tokenParsed.preferred_username})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Nav;