import {broadcast, data, waitForTx} from "@waves/waves-transactions";

const images = require('./test.json');

const
    fee = 0.01 * 1e8,
    nodeUrl = 'https://testnodes.wavesnodes.com',
    seed = 'hazard truth upon stamp deal average shoe woman liar stick joke youth';
//3NCoM7mcr2Y574DNHP74owQXMGKkX3CLB9y

images.forEach(({hash, content}: { hash: string, content: string[] }) => {
    content.forEach(async (value, i) => {
        const key = `chunk_${i}_from_${hash}`;
        const tx = data({fee: fee, data: [{key, value}]}, seed);
        await broadcast(tx, nodeUrl).catch(error => console.log(error));
        await waitForTx(tx.id, {timeout: 500000}).catch(error => console.log(error));
    })
});
