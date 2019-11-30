// Working 24.03.2019 
// Missing: Class for Character Class / Improve the code

HitDieBarbarian = 12;
HitDieBard = 8;
HitDieCleric = 8;
HitDieDruid = 8;
HitDieFighter = 10;
HitDieMonk = 8;
HitDiePaladin = 10;
HitDieRanger = 10;
HitDieRogue = 8;
HitDieSorcerer = 6;
HitDieWarlock = 8;
HitDieWizard = 6;

MaxHitPoints = 0;

document.getElementById('CharacterClass').addEventListener('input', getHitPoints);
document.getElementById('AbilityScoreConstitution').addEventListener('input', getHitPoints);

function getHitPoints() {
    const CharacterClass = document.getElementById('CharacterClass');
    
    // Hit Points Maximum
    function getMaxHitPoints() {
        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Barbarian') {
            //            MaxHitPoints = CharacterClasses.Barbarian.HitDie;
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieBarbarian + AbilityScoreModifierConstitution + ((HitDieBarbarian / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieBarbarian + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        } 
        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Bard') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieBard + AbilityScoreModifierConstitution + ((HitDieBard / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieBard + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }
        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Cleric') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieCleric + AbilityScoreModifierConstitution + ((HitDieCleric / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieCleric + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Druid') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieDruid + AbilityScoreModifierConstitution + ((HitDieDruid / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieDruid + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Fighter') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieFighter + AbilityScoreModifierConstitution + ((HitDieFighter / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieFighter + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Monk') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieMonk + AbilityScoreModifierConstitution + ((HitDieMonk / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieMonk + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Paladin') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDiePaladin + AbilityScoreModifierConstitution + ((HitDiePaladin / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDiePaladin + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Ranger') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieRanger + AbilityScoreModifierConstitution + ((HitDieRanger / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieRanger + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Rogue') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieRogue + AbilityScoreModifierConstitution + ((HitDieRogue / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieRogue + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Sorcerer') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieSorcerer + AbilityScoreModifierConstitution + ((HitDieSorcerer / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieSorcerer + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Warlock') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieWarlock + AbilityScoreModifierConstitution + ((HitDieWarlock / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieWarlock + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }

        if (CharacterClass.options[CharacterClass.selectedIndex].value === 'Wizard') {
            if (CharacterLevel > 1) {
                MaxHitPoints = HitDieWizard + AbilityScoreModifierConstitution + ((HitDieWizard / 2 + 1) * (CharacterLevel - 1) + AbilityScoreModifierConstitution * (CharacterLevel - 1));
            } else if (CharacterLevel = 1) {
                MaxHitPoints = HitDieWizard + AbilityScoreModifierConstitution;
            } else {
                MaxHitPoints = 0;
            }
        }
        if (CharacterClass.options[CharacterClass.selectedIndex].value === '---') {
            MaxHitPoints = 0;   
        }

        return MaxHitPoints;
        
    }
    document.getElementById('MaxHitPoints').innerHTML = getMaxHitPoints();
}
