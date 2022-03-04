/**
 * @description Custom Hook to get stringified custom error object
 * @param {string} message - message of error
 * @param {string} userMessage - message to be displayed to user
 * @param {string} cause - possible cause of error
 * @returns {string} stringified error object
 */
export const getErrorInString = (message, userMessage, cause) => {
  let errorObj = {
    message: message,
    userMessage: userMessage,
    cause: cause
  };
  return JSON.stringify(errorObj);
};
