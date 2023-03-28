const RNA = (dnaStrand) => {
    let rnaStrand = '';

    for (let i = 0; i < dnaStrand.length; i++) {
        switch (dnaStrand[i]) {
            case 'G':
                rnaStrand += 'C';
                break;
            case 'C':
                rnaStrand += 'G';
                break;
            case 'T':
                rnaStrand += 'A';
                break;
            case 'A':
                rnaStrand += 'U';
                break;
        }
    }

    return rnaStrand;
}

const DNA = (rnaStrand) => {
    let dnaStrand = '';

    for (let i = 0; i < rnaStrand.length; i++) {
        switch (rnaStrand[i]) {
            case 'C':
                dnaStrand += 'G';
                break;
            case 'G':
                dnaStrand += 'C';
                break;
            case 'A':
                dnaStrand += 'T';
                break;
            case 'U':
                dnaStrand += 'A';
                break;
        }
    }

    return dnaStrand;
}
