import React from 'react';
import PropTypes from 'prop-types';


// Styles
import '../../uikit/sass/body.scss';
import '../../uikit/sass/grid-12.scss';
import './container.scss';


// Component
const Container = (props) => (
	<div className="uikit-body uikit-grid">
		{ props.children }
	</div>
);

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
