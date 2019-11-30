// Working 31.07.2019 - Not finished

document.getElementById('CharacterBackground').addEventListener('input', getTraits);
document.getElementById('CharacterBackground').addEventListener('input', getIdeal);
document.getElementById('CharacterBackground').addEventListener('input', getBond);
document.getElementById('CharacterBackground').addEventListener('input', getFlaw);



function getTraits() {
    const Background = document.getElementById('CharacterBackground');
    const Acolyte = document.getElementById('PersonalityTrait_Acolyte');
    const None = document.getElementById('PersonalityTraitNone');

    if (Background.options[Background.selectedIndex].value === 'Acolyte' && Acolyte.style.display === 'none') {
        Acolyte.style.display = 'block';
        None.style.display = 'none';
    } else {
        Acolyte.style.display = 'none';
        None.style.display = 'block';
    }

}

function getIdeal() {
    const Background = document.getElementById('CharacterBackground');
    const Acolyte = document.getElementById('Ideal_Acolyte');
    const None = document.getElementById('IdealNone');

    if (Background.options[Background.selectedIndex].value === 'Acolyte' && Acolyte.style.display === 'none') {
        Acolyte.style.display = 'block';
        None.style.display = 'none';
    } else {
        Acolyte.style.display = 'none';
        None.style.display = 'block';
    }
}

function getBond() {
    const Background = document.getElementById('CharacterBackground');
    const Acolyte = document.getElementById('Bond_Acolyte');
    const None = document.getElementById('BondNone');
    
    if (Background.options[Background.selectedIndex].value === 'Acolyte' && Acolyte.style.display === 'none') {
        Acolyte.style.display = 'block';
        None.style.display = 'none';
    } else {
        Acolyte.style.display = 'none';
        None.style.display = 'block';
    }
}

function getFlaw() {
    const Background = document.getElementById('CharacterBackground');
    const Acolyte = document.getElementById('Flaw_Acolyte');
    const None = document.getElementById('FlawNone');

    if (Background.options[Background.selectedIndex].value === 'Acolyte' && Acolyte.style.display === 'none') {
        Acolyte.style.display = 'block';
        None.style.display = 'none';
    } else {
        Acolyte.style.display = 'none';
        None.style.display = 'block';
    }
}

