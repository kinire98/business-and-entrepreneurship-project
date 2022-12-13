import { ajaxHelper } from "../../../helpers/ajaxHelper.js";

export function email(eMail) {


    



    document.addEventListener("submit",  (e) => {
        if (e.target != document.getElementById("email")) return null;
        e.preventDefault();
        e.target.querySelector('[type="hidden"]').value = "Reply to " + e.target.querySelector('[name="subject"]').value + ":"
        ajaxHelper({
            URL: eMail,
            method: "POST",
            options: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: new FormData(e.target),
            success: (json) => {
                console.log(json)
                document.write(json)
            },
            error: (err) => {
                console.log(err)
                document.write(err)
            }
        })
    })
}