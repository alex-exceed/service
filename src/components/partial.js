import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 */
const Partial = ( page ) => (
	<div className="uikit-body uikit-grid">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="textwrapper">{ page._body }</div>
				</div>
			</div>
		</div>
	</div>
);


Partial.propTypes = {
	/**
	 * partials: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};


Partial.defaultProps = {};


export default Partial;
