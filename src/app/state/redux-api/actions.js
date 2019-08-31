import { RSAA } from 'redux-api-middleware';
// getJSON, ApiError
import PropTypes from 'prop-types';

export const invoke = ({ endpoint, method, headers, types, body }) => {
  const formData = JSON.stringify(body);
  return {
    [RSAA]: {
      endpoint,
      method,
      headers,
      types,
      body: formData
    }
  };
};

invoke.defaultProps = {
  method: 'GET',
  body: {},
  header: {}
};

invoke.propTypes = {
  endpoint: PropTypes.string.isRequired,
  method: PropTypes.string,
  headers: PropTypes.shape,
  types: PropTypes.arrayOf().isRequired
};
