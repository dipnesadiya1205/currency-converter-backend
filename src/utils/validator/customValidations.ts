/**
 * @description Check if constiable is undefined or not
 * @param {*} str
 */
export const isEmpty = (value: any) => {
	if (value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0)) {
		return true
	} else {
		return false
	}
}

/**
 * @description Custom RegEx
 * @param {String} str
 * @param {String} regEx
 */
export const customRegex = (str: string, regEx: RegExp) => {
	if (typeof str !== 'string') {
		return false
	} else if (!regEx.test(str)) {
		return false
	} else {
		return true
	}
}

/**
 * @description Check if valid string
 * @param {String} value
 */
export const isString = (value: string | object) => {
	return typeof value === 'string' || value instanceof String
}

/**
 * @desc Checks if given value is Decimal Number
 * @param {*} value // Accepts string
 */
export const isDecimalNumber = (value: any) => {
	const number = value
	const myRegEx = /^\d+(\.\d+)?$/
	const isValid = myRegEx.test(number)
	if (isValid) {
		return true
	} else {
		return false
	}
}

/**
 * @desc Checks if given value is Number
 * @param {*} value // Accepts string
 */
export const isNumber = (value: any) => {
	const number = value
	const myRegEx = /^(\s*[0-9]+\s*)+$/
	const isValid = myRegEx.test(number)
	if (isValid) {
		return true
	} else {
		return false
	}
}
