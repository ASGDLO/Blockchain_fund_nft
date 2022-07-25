export declare const timestampContractSource = "\n  pragma solidity ^0.8.0;\n\n  contract TimestampContract {\n    function getTimestamp(uint size) public view returns (uint[] memory) {\n      uint[] memory arr = new uint[](size);\n      for(uint i = 0; i < size; i++) {\n          arr[i] = block.timestamp;\n      }\n      return arr;\n    }\n  }\n";
export declare const timestampContractABI: {
    contractName: string;
    abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    bytecode: string;
};
//# sourceMappingURL=timestamp.d.ts.map