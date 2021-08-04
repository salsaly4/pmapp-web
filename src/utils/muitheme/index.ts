/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { createTheme } from '@material-ui/core/styles';

const muitheme = createTheme({
  typography: {
    h1: {
      fontFamily: ['Jost', 'sans-serif'].join(','),
      fontWeight: 200,
    },
    h2: {
      fontFamily: ['Jost', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Jost', 'sans-serif'].join(','),
    },
    h4: {
      fontFamily: ['Jost', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Jost', 'sans-serif'].join(','),
    },
    h6: {
      fontFamily: ['Jost', 'sans-serif'].join(','),
    },
    allVariants: {
      color: 'lightgray',
    },
  },
});

export { muitheme };
