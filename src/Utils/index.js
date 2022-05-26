async function fetchData(url, options) {
    options = options || {};
    const response = await fetch(url, options);
    try {
        const json = response ? await response.json() : '';
        return json;
    } catch (ex) {
        return ex;
    }
}

function getRequestOptions(payload = null, method = 'GET', options = [], loginAPI) {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    if (!loginAPI) {
        myHeaders.append('Authorization', `Token ${localStorage.getItem('token')}`);
    }
    myHeaders.append('Content-Type', 'application/json');

    options.forEach(option => {
        myHeaders.set(option.type, option.value);
    });

    var requestOptions = {
        method: method,
        headers: myHeaders,
        // body: raw,
    };
    if (payload) {
        requestOptions['body'] = JSON.stringify(payload);
    }

    return requestOptions;
}
// Execute after {delay} ms
const debounce = (func, delay) => {
    let timer;
    return function(...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, 1000);
    };
};
export { getRequestOptions, fetchData, debounce };
