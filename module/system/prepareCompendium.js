export class prepareCompendium {
    constructor(options = {}) {
        this.packs = {};
        this.init();
    }

    async init() {
        this.packs = await this.prepareDataFromCompendium();
    }

    async prepareDataFromCompendium() {
        const races = await this.prepareRaces(),
            peuples = await this.preparePeuples(),
            castes = await this.prepareCastes(),
            metiers = await this.prepareMetiers(),
            acquis = await this.prepareAcquis(),
            pouvoirs = await this.preparePouvoirs();
        return { races, peuples, castes, metiers, acquis, pouvoirs };
    }

    async prepareRaces(){
        const compendium = game.packs.get("shaanrenaissance.races")
        const races = await compendium.getDocuments();
        races.sort((a, b) => a.sort - b.sort);
        return races
    }

    async preparePeuples(){
        const compendium = game.packs.get("shaanrenaissance.peuples")
        const peuples = await compendium.getDocuments();
        return peuples
    }

    async prepareCastes(){
        const compendium = game.packs.get("shaanrenaissance.castes")
        const castes = await compendium.getDocuments()
        return castes
    }

    async prepareMetiers(){
        const compendium = game.packs.get("shaanrenaissance.metiers")
        const metiers = await compendium.getDocuments()
        return metiers
    }

    async prepareAcquis() {
        const compendium = game.packs.get("shaanrenaissance.acquis")
        const acquis = await compendium.getDocuments({system:{class:"Classe 1"}})
        return acquis;
    }

    async preparePouvoirs(){
        const compendium = game.packs.get("shaanrenaissance.pouvoirs")
        const pouvoirs = await compendium.getDocuments({system:{rang:{value:"Rang 1"}}})
        return pouvoirs
    }
}