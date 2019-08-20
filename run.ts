import {broadcast, data, waitForTx} from "@waves/waves-transactions";

const images = require('./test.json');

const
    fee = 0.014 * 1e8,
    nodeUrl = 'https://testnodes.wavesnodes.com',
    seed = 'staff private mother valve salute shoulder decline solar scout buddy climb trial';

images.forEach(({hash, content}: { hash: string, content: string[] }) => {
    content.forEach(async (value, i) => {
        const key = `chunk_${i}_from_${hash}`;
        const tx = data({fee: fee, data: [{key, value}]}, seed);
        const ans = await broadcast(tx, nodeUrl).catch(error => console.log(error));
        console.log('ans', ans);
        await waitForTx(tx.id).catch(error => console.log(error));
    })
});

setInterval(() => {

}, 1000000);