import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({onChange}) => {

  return (
    <label className={s.label}>
      Find contacts by name
      <input className={s.input} type="text"
        onChange={ onChange } />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;