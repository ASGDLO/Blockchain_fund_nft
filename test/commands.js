const instance = await NftMarket.deployed();

instance.mintToken(
  "https://gateway.pinata.cloud/ipfs/QmRxJC8DhjMhgskKc2QWcbmAdNqTsXDyyuCXLwXjdJiyR3",
  "1000000000000000000",
  { value: "25000000000000000", from: accounts[0] }
);
instance.mintToken(
  "https://gateway.pinata.cloud/ipfs/QmXreNMKPfQi4EoHeTn6nRkfEs6ZFQC3cZeFBDE5o3iZb9",
  "1000000000000000000",
  { value: "25000000000000000", from: accounts[0] }
);
