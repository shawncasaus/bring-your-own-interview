
import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext({});

function HomePageProvider({
    children,
  }) {
    return (
      <Context.Provider
        value={{
        }}
      >
        {children}
      </Context.Provider>
    );
  }

  HomePageProvider.defaultProps = {
    url: '',
  }

  HomePageProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  export default HomePageProvider