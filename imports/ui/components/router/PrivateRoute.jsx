import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { PropTypes } from "prop-types";
import { Route, Redirect } from "react-router-dom";

import Navigation from "../../layouts/navigation/NavigationLayout";

const PublicRoute = ({ component, content, exact, name, path, title }) => {
  if (!Meteor.userId()) return <Redirect to="/" />;
  return (
    <Route
      exact={exact}
      path={path}
      render={props => (
        <Fragment>
          <Helmet>
            <title>{`${Meteor.settings.public.name} | ${title}`}</title>
            <meta name={name} content={content} />
          </Helmet>
          <Navigation />
          <main id="main">{React.createElement(component)}</main>
        </Fragment>
      )}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default PublicRoute;
