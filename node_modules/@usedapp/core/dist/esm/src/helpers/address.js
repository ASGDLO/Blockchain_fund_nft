import { utils } from 'ethers';
import { BigNumber } from 'ethers';
import { shortenString } from './common';
/**
 * @public
 */
export function shortenAddress(address) {
    try {
        const formattedAddress = utils.getAddress(address);
        return shortenString(formattedAddress);
    }
    catch (_a) {
        throw new TypeError("Invalid input, address can't be parsed");
    }
}
/**
 * @public
 */
export function shortenIfAddress(address) {
    if (typeof address === 'string' && address.length > 0) {
        return shortenAddress(address);
    }
    return '';
}
/**
 * @public
 */
export function compareAddress(firstAddress, secondAddress) {
    try {
        const parsedFirstAddress = BigNumber.from(firstAddress);
        const parsedSecondAddress = BigNumber.from(secondAddress);
        if (parsedFirstAddress.gt(parsedSecondAddress)) {
            return 1;
        }
        if (parsedFirstAddress.lt(parsedSecondAddress)) {
            return -1;
        }
        return 0;
    }
    catch (_a) {
        throw new TypeError("Invalid input, address can't be parsed");
    }
}
/**
 * @public
 */
export function addressEqual(firstAddress, secondAddress) {
    try {
        return utils.getAddress(firstAddress) === utils.getAddress(secondAddress);
    }
    catch (_a) {
        throw new TypeError("Invalid input, address can't be parsed");
    }
}
//# sourceMappingURL=address.js.map