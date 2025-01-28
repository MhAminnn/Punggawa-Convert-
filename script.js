const cryptoList = [
    "dogecoin", "shiba-inu", "pepe", "floki-inu", "baby-doge-coin",
"dogelon-mars", "safemoon", "kishu-inu", "elon-doge-token", "hoge-finance",
"akita-inu", "shiba-predator", "shibacock", "shibapup", "tether", "usd-coin", "binance-usd", "dai", "true-usd",
"paxos-standard", "frax", "tether-gold", "pax-gold", "liquity-usd",
"fei-usd", "rai", "reserve-rights-token", "husd", "usdk",
"usdx", "tusd", "gusd", "usdp", "usdd",
"eurs", "stasis-euro", "terrausd", "neutrino", "nusd",
"mimatic", "alusd", "flex-usd", "chainlink", "filecoin", "the-graph", "arweave", "livepeer",
"helium", "audius", "storj", "akash-network", "theta-token",
"basic-attention-token", "siacoin", "ocean-protocol", "numeraire", "dock",
"orchid", "keep-network", "nucypher", "api3", "band-protocol",
"tellor", "dia-data", "uma", "nest-protocol", "decentraland", "the-sandbox", "axie-infinity", "gala", "render-token",
"highstreet", "somnium-space-cubes", "bloktopia", "star-atlas", "alien-worlds",
"my-neighbor-alice", "illuvium", "treeverse", "cradles", "realm",
"ufo-gaming", "guildfi", "nft-worlds", "voxels", "cryptovoxels",
"superworld", "netvrk", "metahero", "sipher", "boson-protocol",
"wilder-world", "tcgcoin", "monaverse", "oncyber", "ovr",
"earth2", "matrix-ai-network", "hifi-finance", "hunt-token", "mobox",
"radio-caca", "calo-app", "virtua", "revv", "racefi",
"playcent", "playdapp", "wizarre-scroll", "polychain-monsters", "my-defi-pet", "enjincoin", "flow", "immutable-x", "chiliz", "theta-token",
"decentraland", "the-sandbox", "axie-infinity", "gala", "render-token",
"wax", "superrare", "rarible", "bloktopia", "starlink",
"my-neighbor-alice", "illuvium", "alien-worlds", "star-atlas", "somnium-space-cubes",
"highstreet", "ufo-gaming", "guildfi", "treeverse", "cradles",
"realm", "nftx", "fractionalized-smb", "fractionalized-bored-ape", "fractionalized-crypto-punks",
"async-art", "nifty-gateway", "foundation", "zora", "mintable",
"opensea", "looksrare", "x2y2", "sudoswap", "blur",
"art-blocks", "crypto-kitties", "crypto-punks", "bored-ape-yacht-club", "meebits",
"cool-cats", "world-of-women", "doodles", "clonex", "azuki",
"mfers", "loot", "parallel-alpha", "veefriends", "cryptovoxels",
"decentral-games", "nftfi", "nft20", "nft21", "nft22", "uniswap", "aave", "maker", "compound-governance-token", "sushi",
"curve-dao-token", "pancakeswap-token", "yearn-finance", "balancer", "convex-finance",
"synthetix-network-token", "compound-ether", "instadapp", "badger-dao", "renbtc",
"uma", "kyber-network", "bancor", "0x", "dforce-token",
"harvest-finance", "cream-2", "alpha-finance-lab", "inverse-finance", "alchemix",
"spell-token", "abracadabra-money", "anchor-protocol", "lido-dao", "stake-dao",
"frax-share", "olympus", "tokemak", "ribbon-finance", "index-cooperative",
"barnbridge", "enzyme-finance", "reflexer-ungovernance-token", "ampleforth", "keep-network",
"nucypher", "api3", "dopex", "opyn", "hegic",
"perpetual-protocol", "dhedge-dao", "powerpool", "pickle-finance", "akropolis",
"bzx-protocol", "kleros", "augur", "gnosis", "airswap",
"request-network", "idex", "deversifi", "paraswap", "1inch",
"matcha", "dodo", "apeswap-finance", "autofarm", "beefy-finance",
"pancakebunny", "venus", "alpaca-finance", "valas-finance", "acryptos",
"belt-finance", "ellipsis", "wault-finance", "kava-lend", "arbitrum", "optimism", "matic-network", "loopring", "immutable-x",
"skale", "boba-network", "metis-andromeda", "dydx", "starknet",
"zksync", "aztec", "hermez", "omg-network", "celer-network",
"moonbeam", "moonriver", "astar", "shiden", "plasm",
"cartesi", "matter-labs", "fuel-network", "bitcoin", "ethereum", "solana", "cardano", "avalanche-2",
"polkadot", "cosmos", "binancecoin", "tron", "algorand",
"near", "tezos", "flow", "elrond-erd-2", "harmony",
"icon", "zilliqa", "waves", "kadena", "thorchain",
"fantom", "celo", "kava", "neo", "eos",
"qtum", "ontology", "nervos-network", "vechain", "iotex",
"syscoin", "wanchain", "aion", "ark", "nuls",
"gochain", "zcoin", "komodo", "ergo", "constellation-labs",
"radix", "oasis-network", "mina-protocol", "conflux-token", "hydra",
"ultra", "reef", "sora", "mixin", "nimiq",
"proton", "telos", "wax", "steem", "hive",
"bitshares", "lisk", "ardor", "nxt", "stratis",
"factom", "emercoin", "reddcoin", "gamecredits", "peercoin",
"namecoin", "feathercoin", "novacoin", "primecoin", "clam",
"gridcoin", "burst", "potcoin", "curecoin", "vericoin",
"monacoin", "rubycoin", "bitcoin-sv", "bitcoin-gold", "bitcoin-diamond",
"bitcoin-private", "bitcoin-cash-abc", "bitcoin-cash-sv", "bitcoin-atom", "bitcoin-zero",
"bitcoin-interest", "bitcoin-true", "bitcoin-god", "bitcoin-file", "bitcoin-scrypt",
"bitcoin-2", "bitcoin-fast", "bitcoin-lite", "bitcoin-ultra", "bitcoin-x",
"bitcoin-y", "bitcoin-z", "bitcoin-alpha", "bitcoin-beta", "bitcoin-gamma",
"bitcoin-delta", "bitcoin-epsilon", "bitcoin-zeta", "bitcoin-eta", "bitcoin-theta",
"bitcoin-iota", "bitcoin-kappa", "bitcoin-lambda", "bitcoin-mu", "bitcoin-nu",
"bitcoin-xi", "bitcoin-omicron", "bitcoin-pi", "bitcoin-rho", "bitcoin-sigma",
"bitcoin-tau", "bitcoin-upsilon", "bitcoin-phi", "bitcoin-chi", "bitcoin-psi",
"bitcoin-omega"
];

let selectedCrypto = null;
let history = JSON.parse(localStorage.getItem('conversionHistory')) || [];

const specialCases = {
    "usd-coin": "USD Coin",
    "binancecoin": "Binance Coin",
    "avalanche-2": "Avalanche",
    "hedera-hashgraph": "Hedera",
    "internet-computer": "Internet Computer",
    "multi-collateral-dai": "Dai",
    "terra-luna": "Terra Luna",
    "1inch": "1inch Network"
};

// Format nama kripto dengan penanganan kasus khusus
function formatCryptoName(cryptoId) {
    return specialCases[cryptoId] || cryptoId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Tampilkan daftar kripto dengan fitur pencarian
function showCryptoList(searchTerm = '') {
    const cryptoListDiv = document.getElementById('cryptoList');
    cryptoListDiv.innerHTML = '';

    const filteredCrypto = cryptoList.filter(crypto =>
        formatCryptoName(crypto).toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredCrypto.forEach(crypto => {
        const cryptoItem = document.createElement('div');
        cryptoItem.className = 'crypto-item';
        cryptoItem.textContent = formatCryptoName(crypto);
        cryptoItem.addEventListener('click', () => {
            selectedCrypto = crypto;
            document.getElementById('cryptoSearch').value = formatCryptoName(crypto);
            cryptoListDiv.style.display = 'none';
        });
        cryptoListDiv.appendChild(cryptoItem);
    });

    cryptoListDiv.style.display = filteredCrypto.length ? 'block' : 'none';
}

// Konversi angka ke teks dalam Bahasa Indonesia
function numberToWords(num) {
    const units = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
    const teens = ["sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", 
                  "enam belas", "tujuh belas", "delapan belas", "sembilan belas"];
    const tens = ["", "sepuluh", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", 
                "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
    const scales = ["", "ribu", "juta", "miliar", "triliun"];

    if (num === 0) return "nol";

    let words = "";

    function convertChunk(chunk) {
        let chunkWords = "";
        if (chunk >= 100) {
            const hundred = Math.floor(chunk / 100);
            chunkWords += (hundred === 1 ? "seratus" : units[hundred] + " ratus") + " ";
            chunk %= 100;
        }
        if (chunk >= 20) {
            chunkWords += tens[Math.floor(chunk / 10)] + " ";
            chunk %= 10;
        } else if (chunk >= 10) {
            chunkWords += teens[chunk - 10] + " ";
            chunk = 0;
        }
        if (chunk > 0) {
            chunkWords += units[chunk] + " ";
        }
        return chunkWords.trim();
    }

    let scaleIndex = 0;
    while (num > 0) {
        const chunk = num % 1000;
        if (chunk !== 0) {
            let chunkWords = convertChunk(chunk);
            if (scaleIndex > 0) {
                chunkWords += " " + scales[scaleIndex];
            }
            words = chunkWords + " " + words;
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }

    return words.trim().replace(/\s+/g, ' ');
}

// Handle form submission
document.getElementById('converterForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!selectedCrypto) {
        alert('Pilih kripto terlebih dahulu!');
        return;
    }

    const cryptoAmount = parseFloat(document.getElementById('cryptoAmount').value);
    const currency = document.getElementById('currency').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(cryptoAmount) || cryptoAmount <= 0 || cryptoAmount > 1000000) {
        resultDiv.innerHTML = `<div class="error">⚠️ Masukkan jumlah kripto yang valid (maksimal 1.000.000)!</div>`;
        return;
    }

    resultDiv.innerHTML = `<div class="loading">Memproses...</div>`;

    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto}&vs_currencies=usd,idr`
        );
        if (!response.ok) {
            if (response.status === 429) {
                throw new Error('Terlalu banyak permintaan. Silakan coba lagi nanti.');
            } else {
                throw new Error('Gagal mengambil data dari API. Periksa koneksi internet Anda.');
            }
        }

        const data = await response.json();
        if (!data[selectedCrypto]) {
            throw new Error('Kripto tidak ditemukan di API.');
        }

        const price = currency === 'IDR' ? data[selectedCrypto].idr : data[selectedCrypto].usd;
        const total = price * cryptoAmount;

        // Simpan riwayat konversi
        saveToHistory(cryptoAmount, formatCryptoName(selectedCrypto), total, currency);

        // Tampilkan hasil
        resultDiv.innerHTML = `
            <div class="conversion-result">
                <strong>${cryptoAmount} ${formatCryptoName(selectedCrypto)}</strong><br>
                = ${currency === 'IDR' ? 'Rp' : '$'}${total.toLocaleString(currency === 'IDR' ? 'id-ID' : 'en-US')}
                ${currency === 'IDR' ? `<div class="text-muted">(${numberToWords(Math.floor(total))} rupiah)</div>` : ''}
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<div class="error">⚠️ Error: ${error.message}</div>`;
    }
});

// Simpan riwayat konversi
function saveToHistory(cryptoAmount, cryptoName, total, currency) {
    history.push({ cryptoAmount, cryptoName, total, currency, date: new Date().toLocaleString() });
    localStorage.setItem('conversionHistory', JSON.stringify(history));
    displayHistory();
}

// Tampilkan riwayat konversi
function displayHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = history.map(item => `
        <li>
            ${item.cryptoAmount} ${item.cryptoName} = ${item.currency === 'IDR' ? 'Rp' : '$'}${item.total.toLocaleString()} (${item.date})
        </li>
    `).join('');
}

// Hapus riwayat konversi
document.getElementById('clearHistory').addEventListener('click', () => {
    history = [];
    localStorage.removeItem('conversionHistory');
    displayHistory();
});

// Event listeners
document.getElementById('cryptoSearch').addEventListener('input', (e) => {
    showCryptoList(e.target.value);
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        document.getElementById('cryptoList').style.display = 'none';
    }
});

// Inisialisasi awal
showCryptoList();
displayHistory();