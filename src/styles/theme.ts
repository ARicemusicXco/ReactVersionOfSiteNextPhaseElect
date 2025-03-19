// Define theme type
export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    darkGray: string;
    lightGray: string;
    error: string;
    success: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
  };
  transitions: {
    fast: string;
    medium: string;
    slow: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
}

// Define the theme
export const theme: ThemeType = {
  colors: {
    primary: '#e31b23',   // Next Phase Electric red
    secondary: '#1a232e', // Dark blue
    text: '#333333',
    background: '#ffffff',
    darkGray: '#555555',
    lightGray: '#f5f5f5',
    error: '#d32f2f',
    success: '#388e3c',
  },
  fonts: {
    body: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    heading: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease',
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1440px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme; 