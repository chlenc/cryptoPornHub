import fetch from "node-fetch";
import { sha256 } from 'js-sha256';

const parseKey = (key: string) => {
    const match = key.match(/chunk_(\d+)_from_(.*)$/);
    return {
        chunk: match[1],
        hash: match[2]
    }
};


const getData = async () => {
    let response = await fetch('https://testnode1.wavesnodes.com/addresses/data/3NCoM7mcr2Y574DNHP74owQXMGKkX3CLB9y');
    const out = {};
    const test = {};
    if (response.ok) {
        let json = await response.json();
        json.forEach(({key, value}) => {
            const {chunk ,hash} = parseKey(key);
            out[hash] = out[hash] ? out[hash] : {};
            const content = out[hash].content || {};
            content[chunk] = value;
            out[hash] = {hash, content}
        })
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    Object.entries(out).map(([key, value]) => {

        console.log(key === sha256(Object.values((value as {hash: string, content: string[]}).content).map(v => v).join('')))

    })
}



getData()
