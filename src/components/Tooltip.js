import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import withHover from './withHover';
import Hover from './Hover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    position: 'absolute',
    width: '160px',
    left: '50%',
    bottom: '100%',
    boxSizing: 'border-box',
    marginLeft: '-80px',
    marginBottom: '5px',
    padding: '7px',
    borderRadius: '3px',
    backgroundColor: 'hsl(0, 0%, 20%, 0.9)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
};

/*// functional Component*/
export default function Tooltip({ text, children }) {
  return (
    <Hover>
      {(hovering) => (
        <div style={styles.container}>
          {hovering === true && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};
