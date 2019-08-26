import {broadcast, data, waitForTx} from "@waves/waves-transactions";

const images = require('./test.json');

const
    fee = 0.01 * 1e8,
    nodeUrl = 'https://testnodes.wavesnodes.com',
    seed = 'spider wave harvest explain absent recycle fantasy cactus evidence casino soft neglect';
//3NCNz7KVkq8yu2DzuRyGwHVdhfoZ4aqptm7

const test = async(array, i = 0) => {
    if(!array[i]) return 'done';
    const value = array[i];

    const key = `chunk_${i}_from_${images[0].hash}`;

    console.log('[{key, value}]:', [{key, value}]);

    const tx = data({fee: fee, data: [{key, value}]}, seed);

    const ans = await broadcast(tx, nodeUrl).catch(error => console.log(error));

    console.log('ans:', ans, tx);

    await waitForTx(tx.id).catch(error => console.log(error));

    await new Promise(resolve => setTimeout(resolve, 20000));

    return await test(array, i);
};

(async() => {
    console.log(await test(images[0].content));
})();


// images.forEach(({hash, content}: { hash: string, content: string[] }) => {
// images[0].content.forEach(async (value, i) => {
//     const key = `chunk_${i}_from_${images[0].hash}`;
//     const tx = data({fee: fee, data: [{key, value}]}, seed);
//     const ans = await broadcast(tx, nodeUrl).catch(error => console.log(error));
//     await waitForTx(tx.id).catch(error => console.log(error));
// })
// });

setInterval(() => {

}, 1000000);