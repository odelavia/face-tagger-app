import { OPEN_NAV, CLOSE_NAV } from './types';

export const openNav = () => {
  return {
    type: OPEN_NAV,
    payload: {
      dropdownOpen: true,
      display: 'block',
    }
  }
}

export const closeNav = () => {
  return {
    type: CLOSE_NAV,
    payload: {
      dropdownOpen: false,
      display: 'none',
    }
  }
}