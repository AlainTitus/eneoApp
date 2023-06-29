const unikExploitation = (tableau)=>{
    const allExploitation = [];
    tableau.forEach(element => {
        allExploitation.push(element.exploitation)
    });
    const unikExploit = [...new Set(allExploitation)];
    return unikExploit;
};

const statDepart = (database, critere)=>{
    const resultat = [];
    const exploitations = unikExploitation(database);
    exploitations.forEach(exploitation => {
        const test = database.some(data => data.exploitation === exploitation && data.type === critere);
        if(test){
            const base = database.filter(data => data.exploitation == exploitation && data.type == critere);
            //Nombre de exploitation pour le critere (mono ou tri)
            const nbrCritere = base.filter(data => data.exploitation === exploitation).length;
            //Longueur totale selon le critère
            const longCritere = base.reduce((acc, data) => acc + data.longueur, 0);
            //Puissance installée selon le critère
            const puissCritere = base.reduce((acc, data)=> acc + data.puistotale, 0);
            //Nombre de poste selon le critère
            const nbrPosteCritere = base.reduce((acc, data) => acc + data.nbrPoste, 0);
            resultat.push({exploitation, nbrCritere, longCritere, puissCritere, nbrPosteCritere});
        }
    })

    return resultat;
}

module.exports = {unikExploitation, statDepart}