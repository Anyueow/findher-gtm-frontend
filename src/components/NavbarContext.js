// NavbarContext.js
import React from 'react';

const NavbarContext = React.createContext(0);

export const NavbarProvider = NavbarContext.Provider;
export const NavbarConsumer = NavbarContext.Consumer;
export default NavbarContext;
