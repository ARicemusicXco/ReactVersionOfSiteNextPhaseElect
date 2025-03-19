import { describe, it, expect } from 'vitest';
import { 
  sanitizeString, 
  sanitizeUrl, 
  sanitizeCssValue, 
  sanitizeTheme, 
  validateFormField,
  escapeHtml 
} from './securityUtils';

describe('Security Utils', () => {
  describe('sanitizeTheme', () => {
    it('should handle null or undefined theme input', () => {
      const nullResult = sanitizeTheme(null);
      const undefinedResult = sanitizeTheme(undefined);
      
      expect(nullResult).toEqual({});
      expect(undefinedResult).toEqual({});
    });
    
    it('should handle empty theme object', () => {
      const result = sanitizeTheme({});
      expect(result).toEqual({});
    });
    
    it('should handle nested theme properties', () => {
      const theme = {
        colors: {
          primary: '#123456',
          secondary: '#789abc',
          error: 'rgb(255, 0, 0)'
        },
        spacing: {
          sm: '4px',
          md: '8px',
          lg: '16px'
        },
        breakpoints: {
          xs: '320px',
          sm: '480px',
          md: '768px',
          lg: '1024px',
          xl: '1200px'
        }
      };
      
      const result = sanitizeTheme(theme);
      
      // Theme should remain the same structure
      expect(result).toEqual(theme);
      expect(result.colors.primary).toBe('#123456');
      expect(result.spacing.md).toBe('8px');
      expect(result.breakpoints.lg).toBe('1024px');
    });
    
    it('should sanitize malicious CSS values', () => {
      const theme = {
        colors: {
          danger: 'red; behavior: url(malicious.htc)',
          text: 'black; expression(alert("XSS"))'
        },
        fonts: {
          main: 'Arial; @import url("evil.css")'
        },
        backgrounds: {
          banner: 'url("javascript:alert(1)")'
        }
      };
      
      const result = sanitizeTheme(theme);
      
      // Malicious parts should be removed
      expect(result.colors.danger).not.toContain('behavior');
      expect(result.colors.text).not.toContain('expression');
      expect(result.fonts.main).not.toContain('@import');
      expect(result.backgrounds.banner).not.toContain('javascript:');
    });
    
    it('should sanitize array values', () => {
      const theme = {
        fontSizes: ['12px', '14px; expression(alert("XSS"))', '16px'],
        gradients: ['linear-gradient(red, blue)', 'url("javascript:alert(1)")']
      };
      
      const result = sanitizeTheme(theme);
      
      expect(result.fontSizes[1]).not.toContain('expression');
      expect(result.gradients[1]).not.toContain('javascript:');
    });
    
    it('should preserve non-string primitive values', () => {
      const theme = {
        zIndices: {
          dropdown: 100,
          modal: 1000,
          tooltip: 1500
        },
        opacities: {
          transparent: 0,
          translucent: 0.5,
          solid: 1
        },
        enabled: true,
        nullValue: null,
        undefinedValue: undefined
      };
      
      const result = sanitizeTheme(theme);
      
      expect(result.zIndices.modal).toBe(1000);
      expect(result.opacities.translucent).toBe(0.5);
      expect(result.enabled).toBe(true);
      expect(result.nullValue).toBeNull();
      expect(result.undefinedValue).toBeUndefined();
    });
    
    it('should handle complex nested objects with mixed types', () => {
      const theme = {
        components: {
          button: {
            variants: [
              {
                name: 'primary',
                styles: {
                  background: 'blue',
                  color: 'white',
                  padding: '10px 15px',
                  borderRadius: '4px'
                },
                sizes: {
                  small: {
                    fontSize: '12px',
                    padding: '5px 10px'
                  },
                  medium: {
                    fontSize: '14px',
                    padding: '10px 15px'
                  },
                  large: {
                    fontSize: '16px; expression(alert("XSS"))',
                    padding: '15px 20px'
                  }
                },
                active: true,
                priority: 1
              }
            ]
          }
        }
      };
      
      const result = sanitizeTheme(theme);
      
      // Check deep nested values
      expect(result.components.button.variants[0].name).toBe('primary');
      expect(result.components.button.variants[0].styles.background).toBe('blue');
      expect(result.components.button.variants[0].sizes.large.fontSize).not.toContain('expression');
      expect(result.components.button.variants[0].priority).toBe(1);
      expect(result.components.button.variants[0].active).toBe(true);
    });
  });
}); 