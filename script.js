const cryptoList = [
    "bitcoin", "ethereum", "binancecoin", "tether", "usd-coin", "ripple", "cardano", "solana", "polkadot", "dogecoin",
    "shiba-inu", "terra-luna", "avalanche-2", "uniswap", "litecoin", "chainlink", "stellar", "vechain", "tron", "monero",
    "algorand", "cosmos", "tezos", "neo", "eos", "qtum", "ontology", "nervos-network", "iotex", "syscoin", "wanchain",
    "aion", "ark", "nuls", "gochain", "zcoin", "komodo", "ergo", "constellation-labs", "radix", "oasis-network", "mina-protocol",
    "conflux-token", "hydra", "ultra", "reef", "sora", "mixin", "nimiq", "proton", "telos", "steem", "hive", "bitshares",
    "lisk", "ardor", "nxt", "stratis", "factom", "emercoin", "reddcoin", "gamecredits", "peercoin", "namecoin", "feathercoin",
    "novacoin", "primecoin", "clam", "gridcoin", "burst", "potcoin", "curecoin", "vericoin", "monacoin", "rubycoin",
    
    // EVM-based projects
    "polygon", "arbitrum", "optimism", "avalanche-2", "fantom", "moonbeam", "moonriver", "celo", "kava", "harmony",
    "boba-network", "zkSync", "loopring", "skale", "starknet", "base", "mantlenetwork", "scroll", "metis-andromeda",

    // Layer 1 solutions
    "near", "elrond", "solana", "cardano", "polkadot", "cosmos", "algorand", "tezos", "harmony", "flow", "vechain",
    "sui", "aptos", "zkSync", "optimism", "phantom", "terra",

    // DeFi
    "maker", "aave", "compound-governance-token", "sushi", "curve-dao-token", "pancakeswap-token", "yearn-finance",
    "balancer", "convex-finance", "synthetix", "uniswap", "1inch", "venus", "alpha-finance-lab", "badger-dao", "renbtc",

    // Meme Coins
    "dogecoin", "shiba-inu", "floki-inu", "baby-doge-coin", "dogelon-mars", "safemoon", "kishu-inu", "elon-doge-token",

    // Metaverse & Web3 projects
    "decentraland", "the-sandbox", "axie-infinity", "gala", "render-token", "highstreet", "somnium-space-cubes", "blokkia",
    "alien-worlds", "my-neighbor-alice", "illuvium", "treeverse", "realm", "ufo-gaming", "nft-worlds", "voxels", "cryptovoxels", 
    "superworld", "netvrk", "metahero", "boson-protocol", "wilder-world", "tcgcoin", "monaverse", "oncyber", "ovr", "earth2",

    // AI-based tokens
    "fetch-ai", "numeraire", "singularitynet", "matrix-ai-network", "syntropy", "velas", "ocean-protocol", "openai-token",

    // Additional tokens requested
    "jupiter", "bitget-token", "vana", "manta-network"
];

// Remove duplicates
const uniqueCryptoList = [...new Set(cryptoList)];
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
