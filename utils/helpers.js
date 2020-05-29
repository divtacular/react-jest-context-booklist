/**
 * @Desc format a dispatch event in the require format
 * @param type {string} - The action to perform
 * @param value {object} - The new values
 * @returns {{type: *, value: *}}
 */
export const dispatchFormatter = (type, value) => {
    return {
        type,
        value
    };
}