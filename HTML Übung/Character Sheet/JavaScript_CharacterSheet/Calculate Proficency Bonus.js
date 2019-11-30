function ChangeProficencyBonus() {

    let ProficencyBonus = 2;

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

}


