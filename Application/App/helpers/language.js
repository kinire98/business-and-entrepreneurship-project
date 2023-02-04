

export function language(options) {
    let { get, set, language, reload } = options
    if (get === set) {return null;}
    if (get) {return localStorage.getItem("language")}
    if (set && reload) {
        localStorage.setItem("language", language);
        location.reload();
    }
    if (set && !reload) {
        localStorage.setItem("language", language);
    }
}
