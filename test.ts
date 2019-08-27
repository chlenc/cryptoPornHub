const data = [
    {
        "type": "string",
        "value": "h",
        "key": "chunk_0_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "e",
        "key": "chunk_1_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "d",
        "key": "chunk_10_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": ";)",
        "key": "chunk_11_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "l",
        "key": "chunk_2_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "l",
        "key": "chunk_3_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "o",
        "key": "chunk_4_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": " ",
        "key": "chunk_5_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "w",
        "key": "chunk_6_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "o",
        "key": "chunk_7_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "r",
        "key": "chunk_8_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    },
    {
        "type": "string",
        "value": "l",
        "key": "chunk_9_from_dCR5MTWMTDMomVcuzmrY63nErcAUH9EZg0_92O5kRfI="
    }
].reverse()

const parseKey = (key: string) => {
    const match = key.match(/chunk_(\d+)_from_(.*)$/);
    return {
        chunk: match[1],
        hash: match[2]
    }
};

const out = {}

data.forEach(({key, value}) => {
    const {chunk ,hash} = parseKey(key);
    out[hash] = out[hash] ? out[hash] : {};
    const chanks = out[hash].chanks || [];
    const content = out[hash].content || {};
    content[chunk] = value;
    chanks.push(chunk)
    out[hash] = {hash, content, chanks}
})

console.log(out)
