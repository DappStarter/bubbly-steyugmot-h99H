require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name rifle spice quality install derive forward truly'; 
let testAccounts = [
"0x2fcebfc5dab560c57be7ba3913200249aa047fe08d969a9281b99c2f632c2fbf",
"0x28ff39631f0fe4ba8e67ac6e1d3f7a1bff5890488a007939c1fee3c7b25d4f68",
"0x3428c20b5c20a33589857693cc69d7b0d473264523cb058ff95b6fabffd388e7",
"0xc4d91d0fa4e18d112766e594f97a55896cb38acbdfc2d07f2f5bc61669e10b14",
"0x54fed39c918218168095665648482520e834b8d26eb1512f7b3aaf9163c27f6b",
"0xccd7305cde945e60c1072bea885ac48f642165d12ffb67f3e49698f151ba8851",
"0x5dbd78309b9cbe8bad1febece64be4ca73512195227871702079f01dd41d7e83",
"0x2c3bdc69912cd671864ebf359b8ca3c2e98ded3d55e0710dfed2c75e6657ae5f",
"0x7e7e93cec19a6ea4ab80a6628f773aea642a83535f1a48782970376bc0fda1c9",
"0x5e22ce0d042a60e987e1bd5a9b277c6e6ee57b3110759e7775a8cb054dc023f9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

