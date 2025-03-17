/**
 * Utility functions for the Growmates application
 */

/**
 * Format a date to a readable string
 * @param {Date|string} date - The date to format
 * @param {string} format - The format to use (default: 'DD MMM YYYY')
 * @returns {string} The formatted date
 */
export const formatDate = (date, format = 'DD MMM YYYY') => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const year = d.getFullYear();
  
  return format
    .replace('DD', day)
    .replace('MMM', month)
    .replace('YYYY', year);
};

/**
 * Truncate a string to a specified length
 * @param {string} str - The string to truncate
 * @param {number} length - The maximum length
 * @returns {string} The truncated string
 */
export const truncateString = (str, length = 100) => {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + '...';
};

/**
 * Generate a random ID
 * @returns {string} A random ID
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

/**
 * Debounce a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce wait time in milliseconds
 * @returns {Function} The debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Get a value from localStorage with JSON parsing
 * @param {string} key - The key to get from localStorage
 * @param {any} defaultValue - The default value if the key doesn't exist
 * @returns {any} The value from localStorage
 */
export const getFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return defaultValue;
  }
};

/**
 * Set a value in localStorage with JSON stringification
 * @param {string} key - The key to set in localStorage
 * @param {any} value - The value to set
 */
export const setToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting to localStorage:', error);
  }
}; 