

export async function ajaxHelper (options) {
    let { URL, method, headers, body, success, error } = options;
    try {
        let res = await fetch(URL, {
            method,
            headers,
            body: JSON.stringify(body)
        }),
        json = await res.json();
        if (!res.ok) throw new Error(res)
        success(json);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        error(err, message)
    }
}