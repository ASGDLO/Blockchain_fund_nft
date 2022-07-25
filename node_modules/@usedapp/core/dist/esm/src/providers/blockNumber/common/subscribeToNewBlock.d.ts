import { providers } from 'ethers';
import { ChainId } from '../../../constants';
import { Dispatch } from 'react';
import { BlockNumberChanged } from './reducer';
export declare function subscribeToNewBlock(provider: providers.BaseProvider | undefined, chainId: ChainId | undefined, dispatch: Dispatch<BlockNumberChanged>, isActive: boolean): () => void;
//# sourceMappingURL=subscribeToNewBlock.d.ts.map