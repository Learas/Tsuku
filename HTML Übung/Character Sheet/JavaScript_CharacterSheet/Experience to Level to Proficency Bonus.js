// working 23.01.2019

document.getElementById('ExperiencePoints').addEventListener('input', ChangeExperience);



// Experience to Level
CharacterLevel = 1;
ProficencyBonus = 2;

document.getElementById('CharacterExperience').innerHTML = CharacterLevel;

function ChangeExperience() {
    ExperiencePoints = document.getElementById('ExperiencePoints').value;

    function ExperienceToLevel() {
        if (ExperiencePoints < 300) {
            CharacterLevel = 1;

            return CharacterLevel;
        } else if (ExperiencePoints < 900 && ExperiencePoints >= 300) {
            CharacterLevel = 2;
            TestFunction = CharacterLevel;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 2700 && ExperiencePoints >= 900) {
            CharacterLevel = 3;
            return CharacterLevel;
        } else if (ExperiencePoints < 6500 && ExperiencePoints >= 2700) {
            CharacterLevel = 4;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 14000 && ExperiencePoints >= 6500) {
            CharacterLevel = 5;
            return CharacterLevel;
        } else if (ExperiencePoints < 23000 && ExperiencePoints >= 14000) {
            CharacterLevel = 6;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 34000 && ExperiencePoints >= 23000) {
            CharacterLevel = 7;
            return CharacterLevel;
        } else if (ExperiencePoints < 48000 && ExperiencePoints >= 34000) {
            CharacterLevel = 8;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 64000 && ExperiencePoints >= 48000) {
            CharacterLevel = 9;
            return CharacterLevel;
        } else if (ExperiencePoints < 85000 && ExperiencePoints >= 64000) {
            CharacterLevel = 10;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 100000 && ExperiencePoints >= 85000) {
            CharacterLevel = 11;
            return CharacterLevel;
        } else if (ExperiencePoints < 120000 && ExperiencePoints >= 100000) {
            CharacterLevel = 12;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 140000 && ExperiencePoints >= 120000) {
            CharacterLevel = 13;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 165000 && ExperiencePoints >= 140000) {
            CharacterLevel = 14;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 195000 && ExperiencePoints >= 165000) {
            CharacterLevel = 15;
            return CharacterLevel;
        } else if (ExperiencePoints < 225000 && ExperiencePoints >= 195000) {
            CharacterLevel = 16;
            return CharacterLevel;
        } else if (ExperiencePoints < 265000 && ExperiencePoints >= 225000) {
            CharacterLevel = 17;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 305000 && ExperiencePoints >= 265000) {
            CharacterLevel = 18;
            return CharacterLevel;
        } else if (ExperiencePoints < 355000 && ExperiencePoints >= 305000) {
            CharacterLevel = 19;
            return CharacterLevel;
        } else if (ExperiencePoints >= 355000) {
            CharacterLevel = 20;
            return CharacterLevel;
        } else {
            CharacterLevel = 'Error';
        }

    }
    document.getElementById('CharacterLevel').innerHTML = ExperienceToLevel();
    
    function LevelToProficencyBonus() {
        if (CharacterLevel < 5) {
            ProficencyBonus = 2;
            return ProficencyBonus;
        } else if (CharacterLevel < 9) {
            ProficencyBonus = 3;
            return ProficencyBonus;
        } else if (CharacterLevel < 13) {
            ProficencyBonus = 4;
            return ProficencyBonus;
        } else if (CharacterLevel < 17) {
            ProficencyBonus = 5;
            return ProficencyBonus;
        } else {
            ProficencyBonus = 6;
            return ProficencyBonus;
        }
    }
    document.getElementById('ProficencyBonus').innerHTML = LevelToProficencyBonus();

    // other JavaScript / Java Script functions
    getSavingThrow.apply(ProficencyBonus);
    getSkills.apply(ProficencyBonus);
    getHitPoints.apply(CharacterLevel);
}



