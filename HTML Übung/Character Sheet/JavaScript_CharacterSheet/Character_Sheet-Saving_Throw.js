// working 23.01.2019

document.getElementById('ExperiencePoints').addEventListener('input', ChangeExperience);

document.getElementById('AbilityScoreStrength').addEventListener('input', getSavingThrow);
document.getElementById('AbilityScoreDexterity').addEventListener('input', getSavingThrow);
document.getElementById('AbilityScoreConstitution').addEventListener('input', getSavingThrow);
document.getElementById('AbilityScoreIntelligence').addEventListener('input', getSavingThrow);
document.getElementById('AbilityScoreWisdom').addEventListener('input', getSavingThrow);
document.getElementById('AbilityScoreCharisma').addEventListener('input', getSavingThrow);

document.getElementById('CheckboxSavingThrowStrength').addEventListener('input', getSavingThrow);
document.getElementById('CheckboxSavingThrowDexterity').addEventListener('input', getSavingThrow);
document.getElementById('CheckboxSavingThrowConstitution').addEventListener('input', getSavingThrow);
document.getElementById('CheckboxSavingThrowIntelligence').addEventListener('input', getSavingThrow);
document.getElementById('CheckboxSavingThrowWisdom').addEventListener('input', getSavingThrow);
document.getElementById('CheckboxSavingThrowCharisma').addEventListener('input', getSavingThrow);

function getSavingThrow() {
    
    function getSavingThrowStrength() {
        let SavingThrowStrength = 0;
        let StrengthCheckbox = document.getElementById('CheckboxSavingThrowStrength');
        if (StrengthCheckbox.checked == true) {
            SavingThrowStrength = ProficencyBonus + AbilityScoreModifierStrength;
        } else {
            SavingThrowStrength = AbilityScoreModifierStrength;
        }
        return SavingThrowStrength;
    }
    function getSavingThrowDexterity() {
        let SavingThrowDexterity = 0;
        let DexterityCheckbox = document.getElementById('CheckboxSavingThrowDexterity');
        if (DexterityCheckbox.checked == true) {
            SavingThrowDexterity = ProficencyBonus + AbilityScoreModifierDexterity;
        } else {
            SavingThrowDexterity = AbilityScoreModifierDexterity;
        }
        return SavingThrowDexterity;
    }
    function getSavingThrowConstitution() {
        let SavingThrowConstitution = 0;
        let ConstitutionCheckbox = document.getElementById('CheckboxSavingThrowConstitution');
        if (ConstitutionCheckbox.checked == true) {
            SavingThrowConstitution = ProficencyBonus + AbilityScoreModifierConstitution;
        } else {
            SavingThrowConstitution = AbilityScoreModifierConstitution;
        }
        return SavingThrowConstitution;
    }
    function getSavingThrowIntelligence() {
        let SavingThrowIntelligence = 0;
        let IntelligenceCheckbox = document.getElementById('CheckboxSavingThrowIntelligence');
        if (IntelligenceCheckbox.checked == true) {
            SavingThrowIntelligence = ProficencyBonus + AbilityScoreModifierIntelligence;
        } else {
            SavingThrowIntelligence = AbilityScoreModifierIntelligence;
        }
        return SavingThrowIntelligence;
    }
    function getSavingThrowWisdom() {
        let SavingThrowWisdom = 0;
        let WisdomCheckbox = document.getElementById('CheckboxSavingThrowWisdom');
        if (WisdomCheckbox.checked == true) {
            SavingThrowWisdom = ProficencyBonus + AbilityScoreModifierWisdom;
        } else {
            SavingThrowWisdom = AbilityScoreModifierWisdom;
        }
        return SavingThrowWisdom;
    }
    function getSavingThrowCharisma() {
        let SavingThrowCharisma = 0;
        let CharismaCheckbox = document.getElementById('CheckboxSavingThrowCharisma');
        if (CharismaCheckbox.checked == true) {
            SavingThrowCharisma = ProficencyBonus + AbilityScoreModifierCharisma;
        } else {
            SavingThrowCharisma = AbilityScoreModifierCharisma;
        }
        return SavingThrowCharisma;
    }
    
    document.getElementById('SavingThrowStrength').innerHTML = getSavingThrowStrength();
    document.getElementById('SavingThrowDexterity').innerHTML = getSavingThrowDexterity();
    document.getElementById('SavingThrowConstitution').innerHTML = getSavingThrowConstitution();
    document.getElementById('SavingThrowIntelligence').innerHTML = getSavingThrowIntelligence();
    document.getElementById('SavingThrowWisdom').innerHTML = getSavingThrowWisdom();
    document.getElementById('SavingThrowCharisma').innerHTML = getSavingThrowCharisma();

}
