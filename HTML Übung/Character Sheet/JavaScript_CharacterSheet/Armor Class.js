// Working 24.03.2019
// Missing: Armor & Shield Calculation
// Missing: Other effects on AC

document.getElementById('ArmorClass').addEventListener('input', ArmorClass);
document.getElementById('AbilityScoreDexterity').addEventListener('input', ArmorClass);
document.getElementById('AbilityScoreConstitution').addEventListener('input', ArmorClass);
document.getElementById('CharacterRace').addEventListener('input', ArmorClass);

baseArmorClass = 10;

function ArmorClass() {
    const Race = document.getElementById('CharacterRace');

    function getArmorClass() {
        if (Race.options[Race.selectedIndex].value === 'Dragonborn') {
            ArmorClass = baseArmorClass + AbilityScoreModifierDexterity + AbilityScoreModifierConstitution;
        } else {
            ArmorClass = baseArmorClass + AbilityScoreModifierDexterity;
        }
        return ArmorClass;
    }

    document.getElementById('ArmorClass').innerHTML = getArmorClass();
}

