// working

document.getElementById('AbilityScoreStrength').addEventListener('input', getAbilityScoreModifier);
document.getElementById('AbilityScoreDexterity').addEventListener('input', getAbilityScoreModifier);
document.getElementById('AbilityScoreConstitution').addEventListener('input', getAbilityScoreModifier);
document.getElementById('AbilityScoreIntelligence').addEventListener('input', getAbilityScoreModifier);
document.getElementById('AbilityScoreWisdom').addEventListener('input', getAbilityScoreModifier);
document.getElementById('AbilityScoreCharisma').addEventListener('input', getAbilityScoreModifier);

AbilityScoreModifierStrength = 0;
AbilityScoreModifierDexterity = 0;
AbilityScoreModifierConstitution = 0;
AbilityScoreModifierIntelligence = 0;
AbilityScoreModifierWisdom = 0;
AbilityScoreModifierCharisma = 0;

function getAbilityScoreModifier() {
    function getAbilityScoreModifierStrength() {
        CharacterStatsStrength = document.getElementById('AbilityScoreStrength').selectedIndex + 1;
        let i;
 
        for (i = 0; i = CharacterStatsStrength; i++) {
            if (CharacterStatsStrength === i) {
                AbilityScoreModifierStrength = Math.floor((i - 10) / 2);
                return AbilityScoreModifierStrength;      
            }
        }
    }

    function getAbilityScoreModifierDexterity() {
        CharacterStatsDexterity = document.getElementById('AbilityScoreDexterity').selectedIndex + 1;
        let i;
        for (i = 0; i = CharacterStatsDexterity; i++) {
            if (CharacterStatsDexterity === i) {
                AbilityScoreModifierDexterity = Math.floor((i - 10) / 2); 
                return AbilityScoreModifierDexterity; 
            }
        } 
    }

    function getAbilityScoreModifierConstitution() {
        CharacterStatsConstitution = document.getElementById('AbilityScoreConstitution').selectedIndex + 1;
        let i;
        for (i = 0; i = CharacterStatsConstitution; i++) {
            if (CharacterStatsConstitution === i) {
                AbilityScoreModifierConstitution = Math.floor((i - 10) / 2);
                return AbilityScoreModifierConstitution;
            }
        }
    }

    function getAbilityScoreModifierIntelligence() {
        CharacterStatsIntelligence = document.getElementById('AbilityScoreIntelligence').selectedIndex + 1;
        let i;
    
        for (i = 0; i = CharacterStatsIntelligence; i++) {
            if (CharacterStatsIntelligence === i) {
                AbilityScoreModifierIntelligence = Math.floor((i - 10) / 2);
                return AbilityScoreModifierIntelligence;
            }
        }
    }

    function getAbilityScoreModifierWisdom() {
        CharacterStatsWisdom = document.getElementById('AbilityScoreWisdom').selectedIndex + 1;
        let i;
 
        for (i = 0; i = CharacterStatsWisdom; i++) {
            if (CharacterStatsWisdom === i) {
                AbilityScoreModifierWisdom = Math.floor((i - 10) / 2);
                return AbilityScoreModifierWisdom;
            }
        }
    }

    function getAbilityScoreModifierCharisma() {
        CharacterStatsCharisma = document.getElementById('AbilityScoreCharisma').selectedIndex + 1;
        let i;
 
        for (i = 0; i = CharacterStatsCharisma; i++) {
            if (CharacterStatsCharisma === i) {
                AbilityScoreModifierCharisma = Math.floor((i - 10) / 2);
                return AbilityScoreModifierCharisma;
            }
        }
    }

    document.getElementById('AbilityScoreModifierStrength').innerHTML = getAbilityScoreModifierStrength();
    document.getElementById('AbilityScoreModifierDexterity').innerHTML = getAbilityScoreModifierDexterity();
    document.getElementById('AbilityScoreModifierConstitution').innerHTML = getAbilityScoreModifierConstitution();
    document.getElementById('AbilityScoreModifierIntelligence').innerHTML = getAbilityScoreModifierIntelligence();
    document.getElementById('AbilityScoreModifierWisdom').innerHTML = getAbilityScoreModifierWisdom();
    document.getElementById('AbilityScoreModifierCharisma').innerHTML = getAbilityScoreModifierCharisma();

    document.getElementById('Initiative').innerHTML = getAbilityScoreModifierDexterity();

    // other JavaScript / Java Script functions
    getSavingThrow.apply(AbilityScoreModifierStrength, AbilityScoreModifierDexterity, AbilityScoreModifierConstitution, AbilityScoreModifierIntelligence, AbilityScoreModifierWisdom, AbilityScoreModifierCharisma);
    getSkills.apply(AbilityScoreModifierStrength, AbilityScoreModifierDexterity, AbilityScoreModifierConstitution, AbilityScoreModifierIntelligence, AbilityScoreModifierWisdom, AbilityScoreModifierCharisma);
    getArmorClass.apply(AbilityScoreModifierDexterity, AbilityScoreModifierConstitution);
    getInitiative.apply(AbilityScoreModifierDexterity);
}
