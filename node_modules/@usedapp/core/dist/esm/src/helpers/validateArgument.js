export function validateArguments(args, assertions) {
    for (const key of Object.getOwnPropertyNames(args)) {
        if (typeof args[key] !== assertions[key]) {
            throw new Error(`Expected "${key}" to be of type "${assertions[key]}", got "${args[key]}" instead.`);
        }
    }
}
//# sourceMappingURL=validateArgument.js.map