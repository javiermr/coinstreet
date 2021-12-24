// Define your request
var key = "api-key";
var secret = "secret-key";
var http_method="GET";  // Change to POST if endpoint requires data
var request_path="/v3/balance/"
var json_payload={};    // Needed for POST endpoints requiring data

const bitso = require("./BitsoAPI");
const chalk = require("chalk");
const BITSO_URL = "https://api.bitso.com/";
const BITSO_API_KEY = key;
const BITSO_API_SECRET = secret;

const bitsoAPI = new bitso(
    BITSO_API_KEY,
    BITSO_API_SECRET,
    BITSO_URL,
    "/api/v3"
);

function displayError(Exception) {
    console.log(chalk.red("[FAILED]"));
    if (Exception.response !== undefined) {
        console.log(
            chalk.red(
                `${Exception.response.status} : ${
                    Exception.response.statusText
                } ${JSON.stringify(Exception.response.data)}`
            )
        );
    } else {
        console.log(Exception);
    }
}
function checkIfSuccessful(test, data) {
    if (data !== undefined && data.success) {
        console.log(chalk.green(`${test} TEST ✓`));
    } else {
        console.log(chalk.red(`${test} TEST X`));
        console.log(chalk.red(JSON.stringify(data)));
    }
    return data.success;
}
async function testBalances() {
    preTestingMessage("BALANCES");
    try {
        let response = await bitsoAPI.getBalances();
        if (checkIfSuccessful("BALANCES", response)) return response.payload;
    } catch (Exception) {
        displayError(Exception);
    }
}
async function testWithdrawals(currency, amount, address) {
    preTestingMessage("WITHDRAWALS", currency, amount, address);
    try {
        let response = await bitsoAPI.withdrawCrypto(currency, amount, address);
        if (checkIfSuccessful("WITHDRAWALS", response)) return response.payload;
    } catch (Exception) {
        displayError(Exception);
    }
}
async function testOrders(book, side, amount, type) {
    preTestingMessage("ORDERS", book, side, amount, type);
    try {
        let response = await bitsoAPI.placeOrder(book, side, amount, type);
        console.log(response);

        if (checkIfSuccessful("ORDERS", response)) return response.payload;
    } catch (Exception) {
        displayError(Exception);
    }
}
async function testAvailableBooks() {
    preTestingMessage("AVAILABLE BOOKS");
    try {
        let response = await bitsoAPI.getAvailableBooks();
        if (checkIfSuccessful("AVAILABLE BOOKS", response))
            return response.payload;
    } catch (Exception) {
        displayError(Exception);
    }
}

async function testTicker(book) {
    preTestingMessage("TICKER", book);
    try {
        let response = await bitsoAPI.getCurrentTicker(book);
        if (checkIfSuccessful("TICKER", response)) return response.payload;
    } catch (Exception) {
        displayError(Exception);
    }
}

async function testGetTrades(book) {
    preTestingMessage("GET TRADES", book);
    try {
        let response = await bitsoAPI.getTrades(book);
        if (checkIfSuccessful("GET TRADES", response)) return response.payload;
    } catch (Exception) {
        displayError(Exception);
    }
}

function preTestingMessage(test, ...rest) {
    console.log(chalk.blue(`TESTING ${test} ENDPOINT`));
    console.log(chalk.blue(`USING PARAMETERS: ${rest}`));
}

async function requestOrdes(book, side, amount, type) {
    preTestingMessage("ORDERS-BUY", book, side, amount, type,price,timeForce);
    try {
        let response = await bitsoAPI.requestOrdesBuy(book, side, amount, type,price,timeForce);
        console.log(response);

        if (checkIfSuccessful("ORDERS-BUY", response)) return response.payload;
    } catch (Exception) {
        displayError(Exception);
    }
}


//await testWithdrawals("btc", "0.001", "15YB8xZ4GhHCHRZXvgmSFAzEiDosbkDyoo");
//función para solicitar una compra, el precio se encuentra en los miles. El 83000 es 83 mxn.
//En este ejemplo se solicita una órden de compra cuando 0.001 etherium cueste 83 mxn, y con opción a cancelar en cualquier momento
requestOrdes("eth_mxn", "buy", "0.001", "limit","83000","goodtillcancelled");
