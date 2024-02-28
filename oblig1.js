let billetter = []

function billettkjøp() {

    if (sjekkAntall() && sjekkFornavn() && sjekkEtternavn() && sjekkTelefonnr() && sjekkEpost()) {


        billetter.push(
            {
                film: document.getElementById("Film").value,
                antall: document.getElementById("Antall").value,
                fornavn: document.getElementById("Fornavn").value,
                etternavn: document.getElementById("Etternavn").value,
                tlfnr: document.getElementById("Telefonnr").value,
                epost: document.getElementById("Epost").value,


            })
        document.getElementById("Antall").value = ""
        document.getElementById("Fornavn").value = ""
        document.getElementById("Etternavn").value = ""
        document.getElementById("Telefonnr").value = ""
        document.getElementById("Epost").value = ""
        visBillett()

    }
}

function sjekkAntall() {
    var Antall = document.getElementById("Antall")
    const streng = Antall.value;
    const tall = Number(streng);
    if (isNaN(tall)) {
        Antall.setCustomValidity("Ikke et tall");
        Antall.reportValidity()
        return false;
    } else {
        Antall.setCustomValidity("")
        Antall.reportValidity()
        return true;
    }

}

function sjekkFornavn() {
    var Fornavn = document.getElementById("Fornavn")
    const streng = Fornavn.value;
    console.log(typeof streng)
    if (isNumeric(streng)) {
        Fornavn.setCustomValidity("Ikke et navn");
        Fornavn.reportValidity()
        return false;
    } else {
        Fornavn.setCustomValidity("")
        Fornavn.reportValidity()
        return true;
    }

}

function sjekkEtternavn() {
    var Etternavn = document.getElementById("Etternavn")
    const streng = Etternavn.value;
    if (isNumeric(streng)) {
        Etternavn.setCustomValidity("Ikke et navn");
        Etternavn.reportValidity()
        return true;
    } else {
        Etternavn.setCustomValidity("")
        Etternavn.reportValidity()
        return true;
    }

}

function sjekkTelefonnr() {
    var Telefonnr = document.getElementById("Telefonnr")
    var regex = /^[0-9]{8}$/
    const streng = Telefonnr.value;
    if (!regex.test(streng)) {
        Telefonnr.setCustomValidity("Ikke et telefonnummer");
        Telefonnr.reportValidity()
        return false;
    } else {
        Telefonnr.setCustomValidity("")
        Telefonnr.reportValidity()
        return true;
    }

}

function sjekkEpost() {
    var Epost = document.getElementById("Epost")
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-z]{2,3}$/
    const epost = Epost.value;
    if (!regex.test(epost)) {
        console.log("jeg er ikke en epost")
        Epost.setCustomValidity("Ikke gyldig e-post")
        Epost.reportValidity()
        return false;
    } else {
        Epost.setCustomValidity("")
        Epost.reportValidity();
        return true;
    }
}

function visBillett() {
    let ut = ""
    for (let film in billetter) {
        console.log(billetter[film])
        let filmer_ut = "<tr>" + "<td>" + billetter[film].film + "</td>" + "<br/>" + "<td>" + billetter[film].antall + "</td>" + "<br/>" + "<td> " + billetter[film].fornavn + "<br/>" + "<td/>" + billetter[film].etternavn +
            "<br/>" + "<td>" + billetter[film].tlfnr + "<br/>" + "</td>" + "<td>" + billetter[film].epost + "</td>"
        ut += filmer_ut


    }
    document.getElementById("Billettkjøp").innerHTML = ut

}

function slettbillett() {
    billetter = []
    visBillett()

}


//fant dette på stack overflow
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}