exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			var tier = '';
			var adjustment = 0;
			if (this.data.FormatsData[i]) tier = this.data.FormatsData[i].tier;
			switch (tier) {
			case 'OU':
				adjustment = -15;
				break;				
			case 'BL':
			case 'UU':
				adjustment = -10;
				break;
			case 'BL2':
			case 'RU':
				adjustment = -5;
			}

			if (adjustment) {
				this.data.Pokedex[i].baseStats.hp += adjustment;
				this.data.Pokedex[i].baseStats.atk += adjustment;
				this.data.Pokedex[i].baseStats.def += adjustment;
				this.data.Pokedex[i].baseStats.spa += adjustment;
				this.data.Pokedex[i].baseStats.spd += adjustment;
				this.data.Pokedex[i].baseStats.spe += adjustment;
			}
		}
	}
};
