function billetkjøp(){
    let billetter=[]
}

function sjekkAntall(){
    var Antall = document.getElementById("Antall")
    const streng = Antall.value;
    const tall = Number(streng);
    if (isNaN(tall)) {
        Antall.setCustomValidity("Ikke et tall");
    } else {
        Antall.setCustomValidity("")
    }

    Antall.reportValidity()

}
function sjekkFornavn(){
    var Fornavn = document.getElementById("Fornavn")
    const streng = Fornavn.value;
    if (typeof streng ==="string")
    {
        Fornavn.setCustomValidity("Ikke et navn");
    }
else
    {
        Fornavn.setCustomValidity("")
    }

    Fornavn.reportValidity()
}

