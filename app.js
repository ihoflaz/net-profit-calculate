function hesapla() {


    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("program");
    var abf = ss.getRange(1, 2).getValue()
    var sbf = ss.getRange(2, 2).getValue()
    var ktx = ss.getRange(3, 3).getValue()
    var kmx = ss.getRange(4, 3).getValue()
    var kox = ss.getRange(5, 3).getValue()
    var kargo = ss.getRange(6, 2).getValue()
    var kdv = sbf * (ss.getRange(10, 3).getValue())
    var vergi
    var komisyon = sbf * (ss.getRange(7, 3).getValue())
    var matrah
    var gider
    var ekstra = ss.getRange(8, 2).getValue()
    var kt
    var km
    var ko
    var ca
    var time1 = new Date().getTime()




    ss.getRange(14, 3).setValue(sbf)
    matrah = sbf - abf - kargo - komisyon - ekstra
    if (matrah > 0) {
        vergi = matrah * (ss.getRange(11, 3).getValue())
    } else {
        vergi = 0
    }
    gider = kdv + vergi + komisyon + ekstra + kargo + abf
    kt = sbf - gider
    km = (kt / sbf) * 100
    ko = (kt / abf) * 100




    if (ktx > 0) {
        sbf = abf + ktx + kargo + ekstra
        ss.getRange(15, 3).setValue(sbf)
        sbf = sbf + (sbf * (ss.getRange(7, 3).getValue())) + (sbf * (ss.getRange(10, 3).getValue()))
        ss.getRange(16, 3).setValue(sbf)

        while (ktx < kt && (Math.abs(kt)) - (Math.abs(ktx) > 0, 01)) {

            ss.getRange(17, 3).setValue(sbf)
            sbf--;
            ss.getRange(18, 3).setValue(sbf)
            kdv = sbf * (ss.getRange(10, 3).getValue())
            komisyon = sbf * (ss.getRange(7, 3).getValue())
            matrah = sbf - abf - kargo - komisyon - ekstra
            if (matrah > 0) {
                vergi = matrah * (ss.getRange(11, 3).getValue())
            } else {
                vergi = 0
            }
            gider = kdv + vergi + komisyon + ekstra + kargo + abf
            kt = sbf - gider
            km = (kt / sbf) * 100
            ko = (kt / abf) * 100
            ss.getRange(19, 3).setValue(sbf)

        }
        while (ktx > kt && (Math.abs(ktx) - Math.abs(kt) > 0, 01)) {

            sbf++;
            kdv = sbf * (ss.getRange(10, 3).getValue())
            komisyon = sbf * (ss.getRange(7, 3).getValue())
            matrah = sbf - abf - kargo - komisyon - ekstra
            if (matrah > 0) {
                vergi = matrah * (ss.getRange(11, 3).getValue())
            } else {
                vergi = 0
            }
            gider = kdv + vergi + komisyon + ekstra + kargo + abf
            kt = sbf - gider
            km = (kt / sbf) * 100
            ko = (kt / abf) * 100

        }
        ss.getRange(20, 3).setValue(sbf)
    }

    if (kmx > 0) {

        while (kmx < km && (Math.abs(km)) - (Math.abs(kmx) > 1)) {

            sbf--;
            kdv = sbf * (ss.getRange(10, 3).getValue())
            komisyon = sbf * (ss.getRange(7, 3).getValue())
            matrah = sbf - abf - kargo - komisyon - ekstra
            if (matrah > 0) {
                vergi = matrah * (ss.getRange(11, 3).getValue())
            } else {
                vergi = 0
            }
            gider = kdv + vergi + komisyon + ekstra + kargo + abf
            kt = sbf - gider
            km = (kt / sbf) * 100
            ko = (kt / abf) * 100
        }
        while (kmx > km && (Math.abs(kmx) - Math.abs(km) > 1)) {


            sbf++;
            kdv = sbf * (ss.getRange(10, 3).getValue())
            komisyon = sbf * (ss.getRange(7, 3).getValue())
            matrah = sbf - abf - kargo - komisyon - ekstra
            if (matrah > 0) {
                vergi = matrah * (ss.getRange(11, 3).getValue())
            } else {
                vergi = 0
            }
            gider = kdv + vergi + komisyon + ekstra + kargo + abf
            kt = sbf - gider
            km = (kt / sbf) * 100
            ko = (kt / abf) * 100

        }
    }
    if (kox > 0) {


        while (kox < ko && (Math.abs(ko)) - (Math.abs(kox) > 1)) {


            sbf--;
            kdv = sbf * (ss.getRange(10, 3).getValue())
            komisyon = sbf * (ss.getRange(7, 3).getValue())
            matrah = sbf - abf - kargo - komisyon - ekstra
            if (matrah > 0) {
                vergi = matrah * (ss.getRange(11, 3).getValue())
            } else {
                vergi = 0
            }
            gider = kdv + vergi + komisyon + ekstra + kargo + abf
            kt = sbf - gider
            km = (kt / sbf) * 100
            ko = (kt / abf) * 100

        }
        while (kox > ko && (Math.abs(kox) - Math.abs(ko) > 1)) {

            sbf++;
            kdv = sbf * (ss.getRange(10, 3).getValue())
            komisyon = sbf * (ss.getRange(7, 3).getValue())
            matrah = sbf - abf - kargo - komisyon - ekstra
            if (matrah > 0) {
                vergi = matrah * (ss.getRange(11, 3).getValue())
            } else {
                vergi = 0
            }
            gider = kdv + vergi + komisyon + ekstra + kargo + abf
            kt = sbf - gider
            km = (kt / sbf) * 100
            ko = (kt / abf) * 100

        }
    }

    ss.getRange(2, 2).setValue(sbf)
    ss.getRange(3, 2).setValue(kt)
    ss.getRange(4, 2).setValue(km)
    ss.getRange(5, 2).setValue(ko)
    ss.getRange(7, 2).setValue(komisyon)
    ss.getRange(8, 2).setValue(ekstra)
    ss.getRange(9, 2).setValue(matrah)
    ss.getRange(10, 2).setValue(kdv)
    ss.getRange(11, 2).setValue(vergi)
    ss.getRange(12, 2).setValue(gider)
    var time2 = new Date().getTime()
    ca = ss.getRange(1, 4).setValue((time2) - (time1))
}