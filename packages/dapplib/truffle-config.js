require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan radar office come grace ghost army giant'; 
let testAccounts = [
"0x3db43aadff1e2ddfa07ba5ac500a3ffb107b5b824dea074c35ed460491284507",
"0x288f8b3a8947d257e57cf052b6f9210da7b1fac33ce8b4dd979b888ab3756b6c",
"0x0ef278360d70fb51602a1d09e133c74b76d8af7a0c6f0ab25400e677e150c793",
"0xfe68a0a4d10d12517deaf1199764dae7016a66cddfdf3372ec93dab2c3ee580f",
"0xbefae2c2bb094811c613d6f97b0fc02a7819e7df3c524b632f814ae191ab633b",
"0xf10b37826be95d6d68228637c29fd47d07da46da031e69a484ea93665dd10309",
"0x75a7f178dcb98aeeec38f9d712827f35dd43ab254afa825017914dd4bf2d7e86",
"0xb0c9605b8bf99e5d6f290a6a14efb7749efe7f74588cf58cc8d7d1c220bfbbf9",
"0x83389b10060392da4e9d8375cf307da703220f2e40e070ac6734c51555eb694a",
"0xc41581c3fe68b286da13451a4f685f2776935589bf7bf73f3fa7fc9ba2db1f4a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


