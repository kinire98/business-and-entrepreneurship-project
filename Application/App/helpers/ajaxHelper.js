

export async function ajaxHelper (options) {
    let { URL, method, headers, body, success, error } = options;
    fetch(URL, { method, headers, body })
    .then(res => res.ok? res.json(): Promise.reject(res))
    .then(json => success(json))
    .catch(err => error(err))
}