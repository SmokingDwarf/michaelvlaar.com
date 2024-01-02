// Dit spelletjes is bedoelt om Javascript te leren. Het gebruikt een spelsysteem dat ik ooit heb bedacht voor een bordspel dat ik toendertijd wilde maken.

// Een aantal variabelen die nodig zijn voor de Conflict Function.
    let aanval;
    let aanvalDobbelsteen;
    let verdedigingsDobbelsteen;
    let tegelMonster;
    let monsterType;

    //Het Avonturier object. Dit Object bewaart info over jouw klasse, wapens en pantser.
const avonturier = {
    Klasse: "",
    Wapen: "",    
    Pantser: "",   
    Locatie: "",
    Levenspunten: 10,
    Scores: {
        Korte_Afstand: 0,
        Lange_Afstand: 0,
        Magie: 0
    },
    Relikwie: {
        Helm: false,
        Kuras: false,
        Polsbeschermers: false,
        Amulet: false,
        Mantel: false,
        Zwaard: false,
        Pijlen:false,
    },
    set klasseKeuze(nieuweKlasse) {
        this.Klasse = nieuweKlasse;
    },
    set wapenKeuze(nieuwWapen) {
        this.Wapen = nieuwWapen;
    },
    set pantserKeuze(nieuwPantser) {
        this.Pantser = nieuwPantser;
    },
    set spelerLocatie (nieuweLocatie) {
        this.Locatie = nieuweLocatie;
    }
};

// Het Monster object. Dit Object bewaart info over verschillende Monsters, maar om te beginnen gebruiken we alleen de Minotaurus.
const monsterArray = [{
        Naam: "Minotaurus",
        Wapen: "Korte Afstand",
        Sterk_Tegen: "Boog",
        Zwak_Tegen: "Spreuk",
        Gevechtscore: 3,
        Levenspunten: 6,
        Locatie: "Stad",
    },
    { 
        Naam: "Centaur",
        Wapen: "Lange Afstand",
        Sterk_Tegen: "Magie",
        Zwak_Tegen: "Schild",
        Gevechtscore: 1,
        Levenspunten: 2,
        Locatie: "Bossen"
    },
    {
        Naam: "Harpij",
        Wapen: "Magie",
        Sterk_Tegen: "Schild",
        Zwak_Tegen: "Boog",
        Gevechtscore: 1,
        Levenspunten: 2,
        Locatie: "Heide"
    },
    {
        Naam: "Chimaera",
        Wapen: "Magie",
        Sterk_Tegen: "Schild",
        Zwak_Tegen: "Boog",
        Gevechtscore: 3,
        Levenspunten: 6,
        Locatie: "Akkers"
    },
    {
        Naam: "Cyclops",
        Wapen: "Korte Afstand",
        Sterk_Tegen: "Boog",
        Zwak_Tegen: "Magie",
        Gevechtscore: 2,
        Levenspunten: 4,
        Locatie: "Heuvels"
    },
    {
        Naam: "Gorgon",
        Wapen: "Lange Afstand",
        Sterk_Tegen: "Spreuk",
        Zwak_Tegen: "Schild",
        Gevechtscore: 2,
        Levenspunten: 4,
        Locatie: "Berg"
    },
    {
        Naam: "Hydra",
        Wapen: "Korte Afstand",
        Sterk_Tegen: "Boog",
        Zwak_Tegen: "Spreuk",
        Gevechtscore: 4,
        Levenspunten: 8,
        Locatie: "Rivier"
    }];

    const gameSetUp = () => {
        //GEEN SELECTIE
        if (!avonturier.Klasse && !avonturier.Wapen && !avonturier.Pantser) {
            document.getElementById("GameTekst").innerHTML =
            "Welkom strijder,<br>" + 
            "jij bent precies de <b>avonturier</b> die we nodig hebben!" +
            " De stadstaat is door een kwade tovenaar vervloekt, en is vol met verschillende <b>monsters</b>!" + 
            " Jij moet ze voor ons verslaan." + 
            " Dit doe je door de verschillende <b>monsters</b> te bevechten, en elke keer een passende strategie toe te passen om het <b>monster</b> te verslaan op basis van hun <em>zwaktes</em> of jouw <em>sterktes</em>.<br/>" +
            "Om te beginnen, hoe ben je getraind?" + 
            " Ben je een <b>krijger</b>, <b>jager</b> of <b>magiër</b>?<br/>" +
            "-   Als <b>krijger</b> ben je <em>sterk</em> in het vechten op <em>korte afstand</em>, maar <em>zwak</em> in het vechten met <em>magie</em>.<br/>" +
            "-   Als <b>jager</b> ben je <em>sterk</em> in het vechten op <em>lange afstand</em>, maar <em>zwak</em> in het vechten op <em>korte afstand</em>.<br/>" +
            "-   Als <b>magiër</b> ben je <em>sterk</em> in het vechten met <em>magie</em>, maar <em>zwak</em> in het vechten op <em>lange afstand</em>.<br/>";
            //STARTKNOP
            document.getElementById("startKnop").innerHTML = "Verder naar Wapen";
            document.getElementById("startKnop").style.display = "inline-block";
            document.getElementById("startKnop").style.color = "grey";
            document.getElementById("overworldKnop").style.display = "none";
            //TERUGKNOP
            document.getElementById("klasseSelectieTerugKnop").style.display = "none";
            document.getElementById("klasseSelectieTerugKnop").style.display = "none";
            document.getElementById("pantserSelectieTerugKnop").style.display = "none";
            //KLASSESELECTIEKNOP AAN
            document.getElementById("krijgerSelectieKnop").style.display = "inline-block";
            document.getElementById("jagerSelectieKnop").style.display = "inline-block";
            document.getElementById("magiërSelectieKnop").style.display = "inline-block";
            document.getElementById("krijgerSelectieKnop").style.color = "darkred";
            document.getElementById("jagerSelectieKnop").style.color = "darkred";
            document.getElementById("magiërSelectieKnop").style.color = "darkred";
            //WAPENSELECTIEKNOP UIT
            document.getElementById("schildSelectieKnop").style.display = "none";
            document.getElementById("boogSelectieKnop").style.display = "none";
            document.getElementById("spreukSelectieKnop").style.display = "none";
            //PANTSERSELECTIEKNOP UIT
            document.getElementById("lichtSelectieKnop").style.display = "none";
            document.getElementById("middelSelectieKnop").style.display = "none";
            document.getElementById("zwaarSelectieKnop").style.display = "none";
    
        } else if (avonturier.Klasse && !avonturier.Wapen && !avonturier.Pantser) {
            //ALLEEN KLASSE
            document.getElementById("GameTekst").innerHTML =
            `Je bent een <b>${avonturier.Klasse}</b>!<br><br>` +
            ` Kies een wapen uit je bewapening om mee te starten! <br>` + 
            ` Je bewapening bestaat uit een <b>Schild</b> en speer, een <b>Boog</b> en pijlen of een <b>Spreuk</b> uit je collectie.` + 
            ` Je draagt deze wapens altijd bij je, en kun je voor aanvang van een conflict uitwisselen.<br>` +
            `-   Een <b>Schild</b> staat je toe om vijandige projectielen met gemak af te slaan, en is dus <em>sterk</em> tegen <b>bogen</b>. Vijandige <b>magie</b> slaat echter recht door of om je <b>Schild</b> heen, en maakt je <em>kwetsbaar</em>.<br>` +
            `-   Een <b>Boog</b> stelt je in staat om een vijand te bestoken met pijlen voordat deze zijn langzame <b>Spreuken</b> kan afvuren, waardoor je hier <em>sterk</em> tegen bent. Een <b>Schild</b> blokkeert echter je projectielen en maakt je <em>kwetsbaar</em>.<br>` +
            `-   Je <b>Spreuken</b> laten je om door of om de verdediging van een <b>Schild</b> heen te vechten waardoor je hier <em>sterk</em> tegen bent, maar je hebt tijd nodig om de <b>Spreuken</b> uit te voeren wat je <em>kwetsbaar</em> maakt voor <b>bogen</b>.`;
            //STARTKNOP
            document.getElementById("startKnop").innerHTML = "Verder naar Pantser";
            document.getElementById("startKnop").style.display = "inline-block";
            document.getElementById("startKnop").style.color = "grey";
            document.getElementById("overworldKnop").style.display = "none";        
            //TERUGKNOP
            document.getElementById("klasseSelectieTerugKnop").style.display = "none";
            document.getElementById("klasseSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("pantserSelectieTerugKnop").style.display = "none";
            //KLASSESELECTIEKNOP UIT
            document.getElementById("krijgerSelectieKnop").style.display = "none";
            document.getElementById("jagerSelectieKnop").style.display = "none";
            document.getElementById("magiërSelectieKnop").style.display = "none";
            //WAPENSELECTIEKNOP AAN
            document.getElementById("schildSelectieKnop").style.display = "inline-block";
            document.getElementById("boogSelectieKnop").style.display = "inline-block";
            document.getElementById("spreukSelectieKnop").style.display = "inline-block";
            document.getElementById("schildSelectieKnop").style.color = "darkred";
            document.getElementById("boogSelectieKnop").style.color = "darkred";
            document.getElementById("spreukSelectieKnop").style.color = "darkred";
            //PANTSERSELECTIEKNOP UIT
            document.getElementById("lichtSelectieKnop").style.display = "none";
            document.getElementById("middelSelectieKnop").style.display = "none";
            document.getElementById("zwaarSelectieKnop").style.display = "none";
    
        } else if (!avonturier.Klasse && avonturier.Wapen && !avonturier.Pantser) {
            //ALLEEN WAPEN
            document.getElementById("GameTekst").innerHTML =
            `Je hebt momenteel een <b>${avonturier.Wapen}</b> geselecteerd!<br><br>` +
            ` Hoe ben je getraind?` +
            " Kies een <b>Klasse</b>!" + 
            " Ben je een <b>krijger</b>, <b>jager</b> of <b>magiër</b>?<br/>" +
            "-   Als <b>krijger</b> ben je <em>sterk</em> in het vechten op <em>korte afstand</em>, maar <em>zwak</em> in het vechten met <em>magie</em>.<br/>" +
            "-   Als <b>jager</b> ben je <em>sterk</em> in het vechten op <em>lange afstand</em>, maar <em>zwak</em> in het vechten op <em>korte afstand</em>.<br/>" +
            "-   Als <b>magiër</b> ben je <em>sterk</em> in het vechten met <em>magie</em>, maar <em>zwak</em> in het vechten op <em>lange afstand</em>.<br/>";
            //STARTKNOP
            document.getElementById("startKnop").innerHTML = "Verder naar Pantser";
            document.getElementById("startKnop").style.display = "inline-block";
            document.getElementById("startKnop").style.color = "grey";
            document.getElementById("overworldKnop").style.display = "none";        
            //TERUGKNOP
            document.getElementById("klasseSelectieTerugKnop").style.display = "none";
            document.getElementById("wapenSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("pantserSelectieTerugKnop").style.display = "none";
            //KLASSESELECTIEKNOP AAN
            document.getElementById("krijgerSelectieKnop").style.display = "inline-block";
            document.getElementById("jagerSelectieKnop").style.display = "inline-block";
            document.getElementById("magiërSelectieKnop").style.display = "inline-block";
            document.getElementById("krijgerSelectieKnop").style.color = "darkred";
            document.getElementById("jagerSelectieKnop").style.color = "darkred";
            document.getElementById("magiërSelectieKnop").style.color = "darkred";
            //WAPENSELECTIEKNOP UIT
            document.getElementById("schildSelectieKnop").style.display = "none";
            document.getElementById("boogSelectieKnop").style.display = "none";
            document.getElementById("spreukSelectieKnop").style.display = "none";
            //PANTSERSELECTIEKNOP UIT
            document.getElementById("lichtSelectieKnop").style.display = "none";
            document.getElementById("middelSelectieKnop").style.display = "none";
            document.getElementById("zwaarSelectieKnop").style.display = "none";
    
        } else if (!avonturier.Klasse && !avonturier.Wapen && avonturier.Pantser) {
            //ALLEEN PANTSER
            document.getElementById("GameTekst").innerHTML =
            `Je draagt momenteel <b>${avonturier.Pantser} pantser</b>!<br><br>` +
            ` Hoe ben je getraind?` +
            " Kies een <b>Klasse</b>!" + 
            " Ben je een <b>krijger</b>, <b>jager</b> of <b>magiër</b>?<br/>" +
            "-   Als <b>krijger</b> ben je <em>sterk</em> in het vechten op <em>korte afstand</em>, maar <em>zwak</em> in het vechten met <em>magie</em>.<br/>" +
            "-   Als <b>jager</b> ben je <em>sterk</em> in het vechten op <em>lange afstand</em>, maar <em>zwak</em> in het vechten op <em>korte afstand</em>.<br/>" +
            "-   Als <b>magiër</b> ben je <em>sterk</em> in het vechten met <em>magie</em>, maar <em>zwak</em> in het vechten op <em>lange afstand</em>.<br/>";
            //STARTKNOP
            document.getElementById("startKnop").innerHTML = "Verder naar wapen";
            document.getElementById("startKnop").style.display = "inline-block";
            document.getElementById("startKnop").style.color = "grey";
            document.getElementById("overworldKnop").style.display = "none";        
            //TERUGKNOP
            document.getElementById("klasseSelectieTerugKnop").style.display = "none";
            document.getElementById("wapenSelectieTerugKnop").style.display = "none";
            document.getElementById("pantserSelectieTerugKnop").style.display = "inline-block";
            //KLASSESELECTIEKNOP AAN
            document.getElementById("krijgerSelectieKnop").style.display = "inline-block";
            document.getElementById("jagerSelectieKnop").style.display = "inline-block";
            document.getElementById("magiërSelectieKnop").style.display = "inline-block";
            document.getElementById("krijgerSelectieKnop").style.color = "darkred";
            document.getElementById("jagerSelectieKnop").style.color = "darkred";
            document.getElementById("magiërSelectieKnop").style.color = "darkred";
            //WAPENSELECTIEKNOP UIT
            document.getElementById("schildSelectieKnop").style.display = "none";
            document.getElementById("boogSelectieKnop").style.display = "none";
            document.getElementById("spreukSelectieKnop").style.display = "none";
            //PANTSERSELECTIEKNOP UIT
            document.getElementById("lichtSelectieKnop").style.display = "none";
            document.getElementById("middelSelectieKnop").style.display = "none";
            document.getElementById("zwaarSelectieKnop").style.display = "none";
    
        } else if (!avonturier.Klasse && avonturier.Wapen && avonturier.Pantser) {
            //WAPEN EN PANTSER
            document.getElementById("GameTekst").innerHTML =
            `Je hebt momenteel een <b>${avonturier.Wapen}</b> geselecteerd en draagt momenteel <b>${avonturier.Pantser} pantser</b>!<br><br>` +
            ` Hoe ben je getraind?` +
            " Kies een <b>Klasse</b>!" + 
            " Ben je een <b>krijger</b>, <b>jager</b> of <b>magiër</b>?<br/>" +
            "-   Als <b>krijger</b> ben je <em>sterk</em> in het vechten op <em>korte afstand</em>, maar <em>zwak</em> in het vechten met <em>magie</em>.<br/>" +
            "-   Als <b>jager</b> ben je <em>sterk</em> in het vechten op <em>lange afstand</em>, maar <em>zwak</em> in het vechten op <em>korte afstand</em>.<br/>" +
            "-   Als <b>magiër</b> ben je <em>sterk</em> in het vechten met <em>magie</em>, maar <em>zwak</em> in het vechten op <em>lange afstand</em>.<br/>";
            //STARTKNOP
            document.getElementById("startKnop").innerHTML = "Verder naar Overzicht";
            document.getElementById("startKnop").style.display = "inline-block";
            document.getElementById("startKnop").style.color = "grey";
            document.getElementById("overworldKnop").style.display = "none";        
            //TERUGKNOP
            document.getElementById("klasseSelectieTerugKnop").style.display = "none";
            document.getElementById("wapenSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("pantserSelectieTerugKnop").style.display = "inline-block";
            //KLASSESELECTIEKNOP AAN
            document.getElementById("krijgerSelectieKnop").style.display = "inline-block";
            document.getElementById("jagerSelectieKnop").style.display = "inline-block";
            document.getElementById("magiërSelectieKnop").style.display = "inline-block";
            document.getElementById("krijgerSelectieKnop").style.color = "darkred";
            document.getElementById("jagerSelectieKnop").style.color = "darkred";
            document.getElementById("magiërSelectieKnop").style.color = "darkred";
            //WAPENSELECTIE UIT
            document.getElementById("schildSelectieKnop").style.display = "none";
            document.getElementById("boogSelectieKnop").style.display = "none";
            document.getElementById("spreukSelectieKnop").style.display = "none";
            //PANTSERSELECTIE UIT
            document.getElementById("lichtSelectieKnop").style.display = "none";
            document.getElementById("middelSelectieKnop").style.display = "none";
            document.getElementById("zwaarSelectieKnop").style.display = "none";
        
        } else if (avonturier.Klasse && !avonturier.Wapen && avonturier.Pantser) {
            //KLASSE EN PANTSER
            document.getElementById("GameTekst").innerHTML =
            `Je bent een <b>${avonturier.Klasse}</b> en draagt momenteel <b>${avonturier.Pantser} pantser</b>!<br><br>` +
            ` Kies een wapen uit je bewapening om mee te starten! <br>` + 
            ` Je bewapening bestaat uit een <b>Schild</b> en speer, een <b>Boog</b> en pijlen of een <b>Spreuk</b> uit je collectie.` + 
            ` Je draagt deze wapens altijd bij je, en kun je voor aanvang van een conflict uitwisselen.<br>` +
            `-   Een <b>Schild</b> staat je toe om vijandige projectielen met gemak af te slaan, en is dus <em>sterk</em> tegen <b>bogen</b>. Vijandige <b>magie</b> slaat echter recht door of om je <b>Schild</b> heen, en maakt je <em>kwetsbaar</em>.<br>` +
            `-   Een <b>Boog</b> stelt je in staat om een vijand te bestoken met pijlen voordat deze zijn langzame <b>Spreuken</b> kan afvuren, waardoor je hier <em>sterk</em> tegen bent. Een <b>Schild</b> blokkeert echter je projectielen en maakt je <em>kwetsbaar</em>.<br>` +
            `-   Je <b>Spreuken</b> laten je om door of om de verdediging van een <b>Schild</b> heen te vechten waardoor je hier <em>sterk</em> tegen bent, maar je hebt tijd nodig om de <b>Spreuken</b> uit te voeren wat je <em>kwetsbaar</em> maakt voor <b>bogen</b>.`;
            //STARTKNOP
            document.getElementById("startKnop").innerHTML = "Verder naar Overzicht";
            document.getElementById("startKnop").style.display = "inline-block";
            document.getElementById("startKnop").style.color = "grey";
            document.getElementById("overworldKnop").style.display = "none";       
            //TERUGKNOP 
            document.getElementById("klasseSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("wapenSelectieTerugKnop").style.display = "none";
            document.getElementById("pantserSelectieTerugKnop").style.display = "inline-block";
            //KLASSESELECTIEKNOP UIT
            document.getElementById("krijgerSelectieKnop").style.display = "none";
            document.getElementById("jagerSelectieKnop").style.display = "none";
            document.getElementById("magiërSelectieKnop").style.display = "none";
            //WAPENSELECTIEKNOP AAN
            document.getElementById("schildSelectieKnop").style.display = "inline-block";
            document.getElementById("boogSelectieKnop").style.display = "inline-block";
            document.getElementById("spreukSelectieKnop").style.display = "inline-block";
            document.getElementById("schildSelectieKnop").style.color = "darkred";
            document.getElementById("boogSelectieKnop").style.color = "darkred";
            document.getElementById("spreukSelectieKnop").style.color = "darkred";
            //PANTSERSELECTIEKNOP UIT
            document.getElementById("lichtSelectieKnop").style.display = "none";
            document.getElementById("middelSelectieKnop").style.display = "none";
            document.getElementById("zwaarSelectieKnop").style.display = "none";
    
        } else if (avonturier.Klasse && avonturier.Wapen && !avonturier.Pantser) {
            //KLASSE EN WAPEN
            document.getElementById("GameTekst").innerHTML =
            `Je bent een <b>${avonturier.Klasse}</b> en je hebt momenteel een <b>${avonturier.Wapen}</b> geselecteerd!<br><br>` +
            `Kies je <b>pantser</b>!` +
            ` Je <b>pantser</b> bestaat uit:<br>` +
            `-   een <b>lichte</b> optie, bestaande uit alleen een borstplaat.<br>` +
            `-   een <b>middelzware</b> optie, bestaande uit een borstplaat en een helm.<br>` +
            `-   een <b>zware</b> optie, bestaande uit een borstplaat, helm, scheenplaten en armbeschermers.<br><br>` +
            `Je kunt voor aanvang van een conflict makkelijk onderdelen van je <b>pantser</b> aan of uit te trekken.<br>` +
            `-   Een <b>lichte</b> variant bied niet genoeg verdediging om je te beschermen tegen aanvallen op <em>korte afstand</em>, dus hier ben je <em>zwak</em> tegen. Het is erg <em>sterk</em> om projectielen over <em>lange afstand</em> te ontwijken.<br>` +
            `-   Met een <b>middelzware</b> variant ben je <em>zwak</em> tegen aanvallen op <em>lange afstand</em> gezien je ze slechter ziet aankomen, maar is <em>sterk</em> om de langzame <em>magische</em> Spreuken af te slaan of efficiënt te ontwijken.<br>` +
            `-   De <b>zware</b> variant maakt je langzaam en is hierdoor <em>zwak</em> tegen <em>magische</em> aanvallen maar is erg <em>sterk</em> tegen aanvallen op <em>korte afstand</em>.`;
            //STARTKNOP
            document.getElementById("startKnop").innerHTML = "Verder naar Overzicht";
            document.getElementById("startKnop").style.display = "inline-block";
            document.getElementById("startKnop").style.color = "grey";
            document.getElementById("overworldKnop").style.display = "none";        
            //TERUGKNOP
            document.getElementById("klasseSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("wapenSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("pantserSelectieTerugKnop").style.display = "none";
            //KLASSESELECTIEKNOP UIT
            document.getElementById("krijgerSelectieKnop").style.display = "none";
            document.getElementById("jagerSelectieKnop").style.display = "none";
            document.getElementById("magiërSelectieKnop").style.display = "none";
            //WAPENSELECTIE UIT
            document.getElementById("schildSelectieKnop").style.display = "none";
            document.getElementById("boogSelectieKnop").style.display = "none";
            document.getElementById("spreukSelectieKnop").style.display = "none";
            //PANTSERSELECTIE AAN
            document.getElementById("lichtSelectieKnop").style.display = "inline-block";
            document.getElementById("middelSelectieKnop").style.display = "inline-block";
            document.getElementById("zwaarSelectieKnop").style.display = "inline-block";
            document.getElementById("lichtSelectieKnop").style.color = "darkred";
            document.getElementById("middelSelectieKnop").style.color = "darkred";
            document.getElementById("zwaarSelectieKnop").style.color = "darkred";
        
        } else if (avonturier.Klasse && avonturier.Wapen && avonturier.Pantser) {
            //OVERZICHT
            document.getElementById("GameTekst").innerHTML = 
            `Je bent een <b>${avonturier.Klasse}</b>, je hebt momenteel een <b>${avonturier.Wapen}</b> geselecteerd en draagt momenteel <b>${avonturier.Pantser} pantser</b>!<br><br>` +
            `Ben je klaar, of wil je nog iets aanpassen? <br>` +
            `Let op! Je kunt je <b>Klasse</b> hierna niet meer aanpassen!`;
            //STARTKNOP
            document.getElementById("startKnop").style.display = "none";
            document.getElementById("overworldKnop").style.display = "inline-block";
            //TERUGKNOP
            document.getElementById("pantserSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("wapenSelectieTerugKnop").style.display = "inline-block";
            document.getElementById("klasseSelectieTerugKnop").style.display = "inline-block";
            //KLASSESELECTIEKNOP UIT
            document.getElementById("krijgerSelectieKnop").style.display = "none";
            document.getElementById("jagerSelectieKnop").style.display = "none";
            document.getElementById("magiërSelectieKnop").style.display = "none";
            //WAPENSELECTIEKNOP UIT
            document.getElementById("schildSelectieKnop").style.display = "none";
            document.getElementById("boogSelectieKnop").style.display = "none";
            document.getElementById("spreukSelectieKnop").style.display = "none";
            //PANTSERSELECTIEKNOP UIT
            document.getElementById("lichtSelectieKnop").style.display = "none";
            document.getElementById("middelSelectieKnop").style.display = "none";
            document.getElementById("zwaarSelectieKnop").style.display = "none";
    
        } else {
            document.getElementById("GameTekst").innerHTML = 
            `Er gaat iets fout!`;
        }
    };

//KLASSESELECTIEKNOPPEN

const krijgerSelectie = () => {
    avonturier.Klasse = "Krijger";
    document.getElementById("krijgerSelectieKnop").style.color = "green";
    document.getElementById("jagerSelectieKnop").style.color = "darkred";
    document.getElementById("magiërSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

const jagerSelectie = () => {
    avonturier.Klasse = "Jager";
    document.getElementById("jagerSelectieKnop").style.color = "green";
    document.getElementById("krijgerSelectieKnop").style.color = "darkred";
    document.getElementById("magiërSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

const magiërSelectie = () => {
    avonturier.Klasse = "Magiër";
    document.getElementById("magiërSelectieKnop").style.color = "green";
    document.getElementById("krijgerSelectieKnop").style.color = "darkred";
    document.getElementById("jagerSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";

};

//WAPENSELECTIEKNOPPEN

const schildSelectie = () => {
    avonturier.Wapen = "Schild";
    document.getElementById("schildSelectieKnop").style.color = "green";
    document.getElementById("boogSelectieKnop").style.color = "darkred";
    document.getElementById("spreukSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

const boogSelectie = () => {
    avonturier.Wapen = "Boog";
    document.getElementById("boogSelectieKnop").style.color = "green";
    document.getElementById("schildSelectieKnop").style.color = "darkred";
    document.getElementById("spreukSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

const spreukSelectie = () => {
    avonturier.Wapen = "Spreuk";
    document.getElementById("spreukSelectieKnop").style.color = "green";
    document.getElementById("schildSelectieKnop").style.color = "darkred";
    document.getElementById("boogSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

//PANTSERSELECTIE

const lichtSelectie = () => {
    avonturier.Pantser = "Licht";
    document.getElementById("lichtSelectieKnop").style.color = "green";
    document.getElementById("middelSelectieKnop").style.color = "darkred";
    document.getElementById("zwaarSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

const middelSelectie = () => {
    avonturier.Pantser = "Middel";
    document.getElementById("middelSelectieKnop").style.color = "green";
    document.getElementById("lichtSelectieKnop").style.color = "darkred";
    document.getElementById("zwaarSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

const zwaarSelectie = () => {
    avonturier.Pantser = "Zwaar";
    document.getElementById("zwaarSelectieKnop").style.color = "green";
    document.getElementById("lichtSelectieKnop").style.color = "darkred";
    document.getElementById("middelSelectieKnop").style.color = "darkred";
    document.getElementById("startKnop").style.color = "green";
};

//TERUGKNOPPEN
const klasseSelectieTerug = () => {
    avonturier.Klasse = "";
    gameSetUp();
};

const wapenSelectieTerug = () => {
    avonturier.Wapen = "";
    gameSetUp();
};

const pantserSelectieTerug = () => {
    avonturier.Pantser = "";
    gameSetUp();
};


//OVERWORLD
const overworldFunction = () => {
    const overworldTegelArray = document.getElementsByClassName("overworldButton");
    let i;
    for (i = 0; i < overworldTegelArray.length; i++) {
        overworldTegelArray[i].style.display = "inline-block";
    };
    const gameButtonArray = document.getElementsByClassName("gameButton");
    let j;
    for (j = 0; j < gameButtonArray.length; j++) {
        gameButtonArray[j].style.display = "none";
    };
    document.getElementById("GameTekst").innerHTML = 
    `Dit is de Stadstaat!` +
    ` Het bestaat uit 7 regio's.` +
    ` Elk van deze regio's bevat een monster dat verslagen moet worden.` +
    ` Waar ga je als eerst naartoe?`;
};

//OVERWORLD TEGELS
const stadSelectie = () => {
    monsterType = monsterArray[0];
    if (monsterType.Levenspunten > 0) {
        avonturier.Locatie = "Stad";
        const overworldTegelArray = document.getElementsByClassName("overworldButton");
        let i;
        for (i = 0; i < overworldTegelArray.length; i++) {
            overworldTegelArray[i].style.display = "none";
        };
        scoreVergelijking();
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Je hebt de ${monsterType.Naam} al verslagen!` +
        ` Kies een andere regio.`
    };
};

const bossenSelectie = () => {
    monsterType = monsterArray[1];
    if (monsterType.Levenspunten > 0) {
    avonturier.Locatie = monsterType.Locatie;
    const overworldTegelArray = document.getElementsByClassName("overworldButton");
    let i;
    for (i = 0; i < overworldTegelArray.length; i++) {
        overworldTegelArray[i].style.display = "none";
    };
    scoreVergelijking();
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Je hebt de ${monsterType.Naam} al verslagen!` +
        ` Kies een andere regio.`
    };
};

const heideSelectie = () => {
    monsterType = monsterArray[2];
    if (monsterType.Levenspunten > 0) {
        avonturier.Locatie = monsterType.Locatie;
        const overworldTegelArray = document.getElementsByClassName("overworldButton");
        let i;
        for (i = 0; i < overworldTegelArray.length; i++) {
            overworldTegelArray[i].style.display = "none";
        };
        scoreVergelijking();
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Je hebt de ${monsterType.Naam} al verslagen!` +
        ` Kies een andere regio.`
    };
};

const akkersSelectie = () => {
    monsterType = monsterArray[3];
    if (monsterType.Levenspunten > 0) {
        avonturier.Locatie = monsterType.Locatie;
        const overworldTegelArray = document.getElementsByClassName("overworldButton");
        let i;
        for (i = 0; i < overworldTegelArray.length; i++) {
            overworldTegelArray[i].style.display = "none";
        };
        scoreVergelijking();
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Je hebt de ${monsterType.Naam} al verslagen!` +
        ` Kies een andere regio.`
    };
};

const heuvelsSelectie = () => {
    monsterType = monsterArray[4];
if (monsterType.Levenspunten > 0) {
        avonturier.Locatie = monsterType.Locatie;
        const overworldTegelArray = document.getElementsByClassName("overworldButton");
        let i;
        for (i = 0; i < overworldTegelArray.length; i++) {
            overworldTegelArray[i].style.display = "none";
        };
        scoreVergelijking();
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Je hebt de ${monsterType.Naam} al verslagen!` +
        ` Kies een andere regio.`
    };
};

const bergSelectie = () => {
    monsterType = monsterArray[5];
    if (monsterType.Levenspunten > 0) {
        avonturier.Locatie = monsterType.Locatie;
        const overworldTegelArray = document.getElementsByClassName("overworldButton");
        let i;
        for (i = 0; i < overworldTegelArray.length; i++) {
            overworldTegelArray[i].style.display = "none";
        };
        scoreVergelijking();
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Je hebt de ${monsterType.Naam} al verslagen!` +
        ` Kies een andere regio.`
    };
};

const rivierSelectie = () => {
    monsterType = monsterArray[6];
    if (monsterType.Levenspunten > 0) {
        avonturier.Locatie = monsterType.Locatie;
        const overworldTegelArray = document.getElementsByClassName("overworldButton");
        let i;
        for (i = 0; i < overworldTegelArray.length; i++) {
            overworldTegelArray[i].style.display = "none";
        };
        scoreVergelijking();
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Je hebt de ${monsterType.Naam} al verslagen!` +
        ` Kies een andere regio.`
    };
};

//WAPENWISSELEN
const wapenWisselen = () => {
    document.getElementById("overworldKnop").style.display = "none";
    document.getElementById("conflictKnop").style.display = "none";
    document.getElementById("wapenWisselenKnop").style.display = "none";
    document.getElementById("pantserWisselenKnop").style.display = "none";
    document.getElementById("schildWisselenKnop").style.display = "inline-block";
    document.getElementById("boogWisselenKnop").style.display = "inline-block";
    document.getElementById("spreukWisselenKnop").style.display = "inline-block";
    document.getElementById("GameTekst").innerHTML =
    `Je bent een <b>${avonturier.Klasse}</b> en draagt momenteel <b>${avonturier.Pantser} pantser</b>!<br><br>` +
    ` Kies je <b>wapen</b>!<br>` + 
    ` Je bewapening bestaat uit een <b>Schild</b> en speer, een <b>Boog</b> en pijlen of een <b>Spreuk</b> uit je collectie.` + 
    ` Je draagt deze wapens altijd bij je, en kun je voor aanvang van een conflict uitwisselen.<br>` +
    `-   Een <b>Schild</b> staat je toe om vijandige projectielen met gemak af te slaan, en is dus <em>sterk</em> tegen <b>bogen</b>. Vijandige <b>magie</b> slaat echter recht door of om je <b>Schild</b> heen, en maakt je <em>kwetsbaar</em>.<br>` +
    `-   Een <b>Boog</b> stelt je in staat om een vijand te bestoken met pijlen voordat deze zijn langzame <b>Spreuken</b> kan afvuren, waardoor je hier <em>sterk</em> tegen bent. Een <b>Schild</b> blokkeert echter je projectielen en maakt je <em>kwetsbaar</em>.<br>` +
    `-   Je <b>Spreuken</b> laten je om door of om de verdediging van een <b>Schild</b> heen te vechten waardoor je hier <em>sterk</em> tegen bent, maar je hebt tijd nodig om de <b>Spreuken</b> uit te voeren wat je <em>kwetsbaar</em> maakt voor <b>bogen</b>.`;
};

const schildWisselen = () => {
    avonturier.Wapen = "Schild";
    document.getElementById("schildWisselenKnop").style.display = "none";
    document.getElementById("boogWisselenKnop").style.display = "none";
    document.getElementById("spreukWisselenKnop").style.display = "none";
    scoreVergelijking();
};

const boogWisselen = () => {
    avonturier.Wapen = "Boog";
    document.getElementById("schildWisselenKnop").style.display = "none";
    document.getElementById("boogWisselenKnop").style.display = "none";
    document.getElementById("spreukWisselenKnop").style.display = "none";
    scoreVergelijking();
};

const spreukWisselen = () => {
    avonturier.Wapen = "Spreuk";
    document.getElementById("schildWisselenKnop").style.display = "none";
    document.getElementById("boogWisselenKnop").style.display = "none";
    document.getElementById("spreukWisselenKnop").style.display = "none";
    scoreVergelijking();
};

//PANTSERWISSELEN
const pantserWisselen = () => {
    document.getElementById("overworldKnop").style.display = "none";
    document.getElementById("conflictKnop").style.display = "none";
    document.getElementById("wapenWisselenKnop").style.display = "none";
    document.getElementById("pantserWisselenKnop").style.display = "none";
    document.getElementById("lichtWisselenKnop").style.display = "inline-block";
    document.getElementById("middelWisselenKnop").style.display = "inline-block";
    document.getElementById("zwaarWisselenKnop").style.display = "inline-block";
    document.getElementById("GameTekst").innerHTML =
    `Je bent een <b>${avonturier.Klasse}</b> en je hebt momenteel een <b>${avonturier.Wapen}</b> geselecteerd!<br><br>` +
    `Kies je <b>pantser</b>!` +
    ` Je <b>pantser</b> bestaat uit:<br>` +
    `-   een <b>lichte</b> optie, bestaande uit alleen een borstplaat.<br>` +
    `-   een <b>middelzware</b> optie, bestaande uit een borstplaat en een helm.<br>` +
    `-   een <b>zware</b> optie, bestaande uit een borstplaat, helm, scheenplaten en armbeschermers.<br><br>` +
    `Je kunt voor aanvang van een conflict makkelijk onderdelen van je <b>pantser</b> aan of uit te trekken.<br>` +
    `-   Een <b>lichte</b> variant bied niet genoeg verdediging om je te beschermen tegen aanvallen op <em>korte afstand</em>, dus hier ben je <em>zwak</em> tegen. Het is erg <em>sterk</em> om projectielen over <em>lange afstand</em> te ontwijken.<br>` +
    `-   Met een <b>middelzware</b> variant ben je <em>zwak</em> tegen aanvallen op <em>lange afstand</em> gezien je ze slechter ziet aankomen, maar is <em>sterk</em> om de langzame <em>magische</em> Spreuken af te slaan of efficiënt te ontwijken.<br>` +
    `-   De <b>zware</b> variant maakt je langzaam en is hierdoor <em>zwak</em> tegen <em>magische</em> aanvallen maar is erg <em>sterk</em> tegen aanvallen op <em>korte afstand</em>.`;
};

const lichtWisselen = () => {
    avonturier.Pantser = "Licht";
    document.getElementById("lichtWisselenKnop").style.display = "none";
    document.getElementById("middelWisselenKnop").style.display = "none";
    document.getElementById("zwaarWisselenKnop").style.display = "none";
    scoreVergelijking();
};

const middelWisselen = () => {
    avonturier.Pantser = "Middel";
    document.getElementById("lichtWisselenKnop").style.display = "none";
    document.getElementById("middelWisselenKnop").style.display = "none";
    document.getElementById("zwaarWisselenKnop").style.display = "none";
    scoreVergelijking();
};

const zwaarWisselen = () => {
    avonturier.Pantser = "Zwaar";
    document.getElementById("lichtWisselenKnop").style.display = "none";
    document.getElementById("middelWisselenKnop").style.display = "none";
    document.getElementById("zwaarWisselenKnop").style.display = "none";
    scoreVergelijking();
};

let scoreVergelijking = () => {
    document.getElementById("wapenWisselenKnop").style.display = "inline-block";
    document.getElementById("pantserWisselenKnop").style.display = "inline-block";
    document.getElementById("overworldKnop").style.display = "inline-block";
    document.getElementById("overworldKnop").innerHTML = "Vluchten";
    document.getElementById("conflictKnop").style.display = "inline-block";
    document.getElementById("scoreVergelijkingKnop").style.display = "none";

    // If statement die op basis van toegewezen Klasse van Avonturier een basisscore toewijst aan Avonturier.
    if (avonturier.Klasse === "Krijger") {                                                                  //Als de Klasse van avonturier Krijger is, verdeel dan scores op onderstaande manier.
        avonturier.Scores.Korte_Afstand = 3;                                                                //Maak van de basisscore van Korte_afstand van Avonturier 3.
        avonturier.Scores.Lange_Afstand = 2;                                                                //Maak van de basisscore van Lange Afstand van Avonturier 2.
        avonturier.Scores.Magie = 1;                                                                        //Maak van de basisscore van Magie van Avonturier 1.
    } else if (avonturier.Klasse === "Jager") {
        avonturier.Scores.Korte_Afstand = 1;
        avonturier.Scores.Lange_Afstand = 3;
        avonturier.Scores.Magie = 2;
    } else if (avonturier.Klasse === "Magiër") {
        avonturier.Scores.Korte_Afstand = 2
        avonturier.Scores.Lange_Afstand = 1;
        avonturier.Scores.Magie = 3;
    } else {
        document.getElementById("GameTekst").innerHTML = 
    `Er is geen klasse keuze bekend.`;
    };
    
    // If statement die op basis van MonsterType een basis gevechtsscore toewijst aan het monster
    switch (monsterType) {
        case monsterArray[0]:
            monsterType.Gevechtscore = 3;
            break;
        case monsterArray[1]:
            monsterType.Gevechtscore = 1;
            break;
        case monsterArray[2]:
            monsterType.Gevechtscore = 1;
            break;
        case monsterArray[3]:
            monsterType.Gevechtscore = 3;
            break;
        case monsterArray[4]:
            monsterType.Gevechtscore = 2;
            break;
        case monsterArray[5]:
            monsterType.Gevechtscore = 2;
            break;
        case monsterArray[6]:
            monsterType.Gevechtscore = 4;
    }

    // If statement die het toegewezen type wapen van Avonturier vergelijkt met zwaktes en sterktes in de verdediging van het Monster.
    if (avonturier.Wapen === "Schild" && monsterType.Zwak_Tegen === "Schild") {                          //Als het wapen van de avonturier een Schild is, en de Minotaurus is hier -Zwak- tegen:
        ++avonturier.Scores.Korte_Afstand;                                                                      //Voeg 1 toe aan de Korte Afstand score van de Avonturier.
    } else if (avonturier.Wapen === "Schild" && monsterType.Sterk_Tegen === "Schild") {                  //Als het wapen van de avonturier een Schild is, en de Minotaurus is hier -Sterk- tegen:
        --avonturier.Scores.Korte_Afstand;                                                                      //Trek 1 af van de Korte Afstand score van de Avonturier.
    } else if (avonturier.Wapen === "Boog" && monsterType.Zwak_Tegen === "Boog") {
        ++avonturier.Scores.Lange_Afstand;
    } else if (avonturier.Wapen === "Boog" && monsterType.Sterk_Tegen === "Boog") {
        --avonturier.Scores.Lange_Afstand;
    } else if (avonturier.Wapen === "Spreuk" && monsterType.Zwak_Tegen === "Spreuk") {
        ++avonturier.Scores.Magie;
    } else if (avonturier.Wapen === "Spreuk" && monsterType.Sterk_Tegen === "Spreuk") {
        --avonturier.Scores.Magie;
    } else {
        document.getElementById("GameTekst").innerHTML = 
        `Er is geen wapen keuze bekend.`;
    };

    if (avonturier.Wapen === monsterType.Zwak_Tegen && avonturier.Pantser === "Licht" && avonturier.Relikwie.Kuras === true) {
        switch (avonturier.Wapen) {
            case "Schild":
                ++avonturier.Scores.Korte_Afstand;
                break;
            case "Boog":
                ++avonturier.Scores.Lange_Afstand;
                break;
            case "Spreuk":
                ++avonturier.Scores.Magie;
        }
    };

    //If statement die bepaalt welke gevechtsscore word gebruikt voor de verdediging van het Monster op basis van een vergelijking tussen het wapen van het monster en het pantser van de avonturier. (licht, middel of zwaar.)
    if (monsterType.Wapen === "Korte Afstand" && avonturier.Pantser === "Zwaar") {                                                                  //Als het wapen van het monster een Schild is, en het Pantser van de avonturier zwaar:
        --monsterType.Gevechtscore;                                                                                                          //Verlaag de gevechtscore van het monster met 1.
    } else if (monsterType.Wapen === "Magie" && avonturier.Pantser === "Zwaar" && avonturier.Relikwie.Polsbeschermers === false) {                                                             //Als het wapen van het monster een Spreuk is, en het Pantser van de avonturier zwaar:
        ++monsterType.Gevechtscore;                                                                                                          //Verhoog de gevechtscore van het monster met 1.
    } else if (monsterType.Wapen === "Magie" && avonturier.Pantser === "Middel") {
        --monsterType.Gevechtscore;
    } else if (monsterType.Wapen === "Lange Afstand" && avonturier.Pantser === "Middel") {
        ++monsterType.Gevechtscore;
    } else if (monsterType.Wapen === "Lange Afstand" && avonturier.Pantser === "Licht") {
        --monsterType.Gevechtscore;
    } else if (monsterType.Wapen === "Korte Afstand" && avonturier.Pantser === "Licht") {
        ++monsterType.Gevechtscore;
    } else if (monsterType.Wapen === "Korte Afstand" && avonturier.Pantser === "Middel" && avonturier.Relikwie.Helm === true) {
        --monsterType.Gevechtscore;
    };

    const DobbelsteenArray = ["4-zijdige Dobbelsteen", "6-zijdige Dobbelsteen", "8-zijdige dobbelsteen", "10-zijdige dobbelsteen", "12-zijdige dobbelsteen", "20-zijdige dobbelsteen"];

    //If statement die bepaalt welke gevechtsscore word gebruikt voor een aanval. 
    if (avonturier.Wapen === "Schild") {                                                                    //Als het wapen van de avonturier een Schild is:
            aanval = avonturier.Scores.Korte_Afstand;                                                       //Zet de variabel 'aanval' gelijk aan de Korte Afstand Score van de Avonturier.
    } else if (avonturier.Wapen === "Boog") {
        aanval = avonturier.Scores.Lange_Afstand;
    } else if (avonturier.Wapen === "Spreuk") {
        aanval = avonturier.Scores.Magie;
    };

    document.getElementById("GameTekst").innerHTML = 
    `In de <b>${avonturier.Locatie}</b> bevind zich een <b>${monsterType.Naam}</b>.` + 
    ` De <b>${monsterType.Naam}</b> is <em>sterk</em> tegen een <b>${monsterType.Sterk_Tegen}</b>, <em>zwak</em> tegen een <b>${monsterType.Zwak_Tegen}</b> en gebruikt <b>${monsterType.Wapen}</b> om te vechten.<br><br>` +
    `Je bent een <b>${avonturier.Klasse}</b> en momenteel gebruik je een <b>${avonturier.Wapen}</b> en <b>${avonturier.Pantser}</b> pantser.<br>` +   
    `Jij hebt momenteel <b>${avonturier.Levenspunten}</b> levenspunten. <br>` +
    `De <b>${monsterType.Naam}</b> heeft momenteel <b>${monsterType.Levenspunten}</b> levenspunten. <br><br>` +
    `Als je het gevecht aangaat met je ${avonturier.Wapen}, dan kun je aanvallen met een ${DobbelsteenArray[aanval * 1]}. <br>` +
    `De ${monsterType.Naam} kan zich verdedigen met een ${DobbelsteenArray[monsterType.Gevechtscore * 1]}. <br><br>`;
    
    if (monsterType === monsterArray[0]) {
        document.getElementById("GameTekst").innerHTML += 
        `Je beloning voor het verslaan van de <b>${monsterType.Naam}</b> is de <b>Gulden Helm</b>.<br>` +
        `De <b>Gulden Helm</b> zorgt ervoor dat je, wanneer je <b>Middelzwaar</b> Pantser draagt, sterk bent tegen zowel aanvallen op <em>Korte Afstand</em> als met <em>Magie</em>.<br>`;
    } else if (monsterType === monsterArray[1]) {
        document.getElementById("GameTekst").innerHTML += 
        `Je beloning voor het verslaan van de <b>${monsterType.Naam}</b> is de <b>Gezegende Kuras</b>.<br>` +
        `De <b>Gezegende Kuras</b> zorgt ervoor dat, wanneer je <b>Licht</b> Pantser draagt, je aanvallen met Wapens waar dat <b>Monster</b> <em>zwak</em> tegen is extra <em>sterk</em> worden.<br>`;
    } else if (monsterType === monsterArray[2]) {
        document.getElementById("GameTekst").innerHTML += 
        `Je beloning voor het verslaan van de <b>${monsterType.Naam}</b> zijn de <b>Meesterlijke Polsbeschermers</b>.<br>` +
        `De <b>Meesterlijke Polsbeschermers</b> zorgen ervoor dat je, wanneer je <b>Zwaar</b> Pantser draagt, niet meer zwak bent tegen aanvallen met <em>Magie</em>.<br>`;
    } else if (monsterType === monsterArray[3]) {
        document.getElementById("GameTekst").innerHTML += 
        `Je beloning voor het verslaan van de <b>${monsterType.Naam}</b> is de <b>Betoverde Mantel</b>.<br>` +
        `De <b>Betoverde Mantel</b> zorgt ervoor dat, wanneer je met een <b>Spreuk</b> aanvalt, je een kleine kans hebt om een extra <b>Levenspunt</b> van het <b>Monster</b> aan schade te doen.<br>`;
    } else if (monsterType === monsterArray[4]) {
        document.getElementById("GameTekst").innerHTML += 
        `Je beloning voor het verslaan van de <b>${monsterType.Naam}</b> is het <b>Zilveren Zwaard</b>.<br>` +
        `Het <b>Zilveren Zwaard</b> zorgt ervoor dat, wanneer je op <b>Korte Afstand</b> aanvalt, het resultaat van je dobbelsteenworp altijd met 2 word verhoogd.<br>`;
    } else if (monsterType === monsterArray[5]) {
        document.getElementById("GameTekst").innerHTML += 
        `Je beloning voor het verslaan van de <b>${monsterType.Naam}</b> zijn de <b>Vergiftigde Pijlen</b>.<br>` +
        `De <b>Vergiftigde Pijlen</b> zorgen ervoor dat je, wanneer op <b>Lange Afstand</b> aanvalt, het <b>Monster</b> ook een <b>Levenspunt</b> verliest bij een gelijkspel.<br>`;
    } else if (monsterType === monsterArray[6]) {
        document.getElementById("GameTekst").innerHTML += 
        `Je beloning voor het verslaan van de <b>${monsterType.Naam}</b> is het <b>Vervloekte Amulet</b>.<br>` +
        `Het <b>Vervloekte Amulet</b> zorgt ervoor dat je wanneer je een gevecht wint een Levenspunt terugkrijgt. Echter is de vloek dat het Monster een Levenspunt terugkrijgt wanneer je een gevecht verliest. Je kunt het Vervloekte Amulet niet afdoen.<br>`;
    };
};

//Een object vergelijking, die het Avonturier object vergelijkt met het Monster object.
const conflict = () => {
    //Alle dobbelstenen. Deze dobbelstenen bepalen hoe goed je bent. Na een vergelijking met je tegenstander word je type dobbelsteen (d4 t/m d20) hoger op basis van de sterktes en zwakheden van je tegenstander en jezelf.
    const AvonturierD4 = Math.ceil(Math.random()*4);
    const AvonturierD6 = Math.ceil(Math.random()*6);
    const AvonturierD8 = Math.ceil(Math.random()*8);
    const AvonturierD10 = Math.ceil(Math.random()*10);
    const AvonturierD12 = Math.ceil(Math.random()*12);
    const AvonturierD20 = Math.ceil(Math.random()*20);
    const AvonturierDiceArray = [AvonturierD4, AvonturierD6, AvonturierD8, AvonturierD10, AvonturierD12, AvonturierD20];

    const MonsterD4 = Math.ceil(Math.random()*4);
    const MonsterD6 = Math.ceil(Math.random()*6);
    const MonsterD8 = Math.ceil(Math.random()*8);
    const MonsterD10 = Math.ceil(Math.random()*10);
    const MonsterD12 = Math.ceil(Math.random()*12);
    const MonsterD20 = Math.ceil(Math.random()*20);
    const MonsterDiceArray = [MonsterD4, MonsterD6, MonsterD8, MonsterD10, MonsterD12, MonsterD20];       

    if (avonturier.Wapen === "Spreuk" && avonturier.Relikwie.Mantel === true) {
        let x = Math.ceil(Math.random()*100);
        if (x <= 25) {
            --monsterType.Levenspunten;
            document.getElementById("gevechtsLog").innerHTML += `De Betoverde Mantel treedt in werking! De <b>${monsterType.Naam}</b> verliest een extra levenspunt! <br>`;
        } else {
            document.getElementById("gevechtsLog").innerHTML += `De Betoverde Mantel activeert deze keer niet.<br> `;
        };
    };
    
    //If statement die de gevechtsscore van een avonturier gelijk zet aan een type dobbelsteen, van d4 t/m d20 op basis van de diceArray.
                                              //Run onderstaande code alleen als de avonturier zowel Klasse, Wapen als Pantser heeft gekozen. 
    if (aanval === avonturier.Scores.Korte_Afstand && avonturier.Relikwie.Zwaard === false) {                                                           //Als de variabel aanval (hierboven gedefinieerd) gelijk staat aan een Korte Afstand Score van de avonturier, voer dan de volgende if-statement uit.
        if (avonturier.Scores.Korte_Afstand <= 0) {                                                             //Als de Korte Afstand Score van de avonturier 0 of minder is:
            aanvalDobbelsteen = AvonturierDiceArray[0];                                                         //Zet deze dan gelijk aan het element van de diceArray met een index van 0.
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 4-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 1) {
            aanvalDobbelsteen = AvonturierDiceArray[1];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 6-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 2) {
            aanvalDobbelsteen = AvonturierDiceArray[2];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 8-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 3) {
            aanvalDobbelsteen = AvonturierDiceArray[3];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 10-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 4) {    
            aanvalDobbelsteen = AvonturierDiceArray[4];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 12-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `;
        } else {                                                                                                //Als de score iets anders is dan eerder genoemd (kan alleen 5 of meer zijn) :
            aanvalDobbelsteen = AvonturierDiceArray[5];                                                                   //Zet deze dan gelijk aan het element van de diceArray met een index van 5.
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 20-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `;
        };
    } else if (aanval === avonturier.Scores.Korte_Afstand && avonturier.Relikwie.Zwaard === true) {
        document.getElementById("gevechtsLog").innerHTML += `Het Zilveren Zwaard maakt je dobbelsteen sterker. <br> `
        if (avonturier.Scores.Korte_Afstand <= 0) {                                                             //Als de Korte Afstand Score van de avonturier 0 of minder is:
            aanvalDobbelsteen = AvonturierDiceArray[0]+2;                                                         //Zet deze dan gelijk aan het element van de diceArray met een index van 0.
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 4-zijdige dobbelsteen <b>+2</b>. Het resultaat is <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 1) {
            aanvalDobbelsteen = AvonturierDiceArray[1]+2;
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 6-zijdige dobbelsteen <b>+2</b>. Het resultaat is <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 2) {
            aanvalDobbelsteen = AvonturierDiceArray[2]+2;
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 8-zijdige dobbelsteen <b>+2</b>. Het resultaat is <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 3) {
            aanvalDobbelsteen = AvonturierDiceArray[3]+2;
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 10-zijdige dobbelsteen <b>+2</b>. Het resultaat is <b>${aanvalDobbelsteen}</b>! `;
        } else if (avonturier.Scores.Korte_Afstand === 4) {    
            aanvalDobbelsteen = AvonturierDiceArray[4]+2;
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 12-zijdige dobbelsteen <b>+2</b>. Het resultaat is <b>${aanvalDobbelsteen}</b>! `;
        } else {                                                                                                //Als de score iets anders is dan eerder genoemd (kan alleen 5 of meer zijn) :
            aanvalDobbelsteen = AvonturierDiceArray[5]+2;                                                                   //Zet deze dan gelijk aan het element van de diceArray met een index van 5.
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op korte afstand met een 20-zijdige dobbelsteen <b>+2</b>. Het resultaat is <b>${aanvalDobbelsteen}</b>! `;
        };
    } else if (aanval === avonturier.Scores.Lange_Afstand) {
        if (avonturier.Scores.Lange_Afstand <= 0) {                                                      
            aanvalDobbelsteen = AvonturierDiceArray[0];                                                               
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op lange afstand met een 4-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `; 
        } else if (avonturier.Scores.Lange_Afstand === 1) {
            aanvalDobbelsteen = AvonturierDiceArray[1];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op lange afstand met een 6-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ; 
        } else if (avonturier.Scores.Lange_Afstand === 2) {
            aanvalDobbelsteen = AvonturierDiceArray[2];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op lange afstand met een 8-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ; 
        } else if (avonturier.Scores.Lange_Afstand === 3) {
            aanvalDobbelsteen = AvonturierDiceArray[3];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op lange afstand met een 10-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ; 
        } else if (avonturier.Scores.Lange_Afstand === 4) {    
            aanvalDobbelsteen = AvonturierDiceArray[4];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op lange afstand met een 12-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ; 
        } else {                                                                                       
            aanvalDobbelsteen = AvonturierDiceArray[5];    
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan op lange afstand met een 20-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ;                              
        };
    } else if (aanval === avonturier.Scores.Magie) {
        if (avonturier.Scores.Magie <= 0) {                                              
            aanvalDobbelsteen = AvonturierDiceArray[0];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan door middel van Magie met een 4-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ;
        } else if (avonturier.Scores.Magie === 1) {
            aanvalDobbelsteen = AvonturierDiceArray[1];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan door middel van Magie met een 6-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ;
        } else if (avonturier.Scores.Magie === 2) {
            aanvalDobbelsteen = AvonturierDiceArray[2];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan door middel van Magie met een 8-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ;
        } else if (avonturier.Scores.Magie === 3) {
            aanvalDobbelsteen = AvonturierDiceArray[3];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan door middel van Magie met een 10-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ;
        } else if (avonturier.Scores.Magie === 4) {    
            aanvalDobbelsteen = AvonturierDiceArray[4];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan door middel van Magie met een 12-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! `;
        } else {                                                                                        
            aanvalDobbelsteen = AvonturierDiceArray[5];
            document.getElementById("gevechtsLog").innerHTML += `De Avonturier valt aan door middel van Magie met een 20-zijdige dobbelsteen en rolt een <b>${aanvalDobbelsteen}</b>! ` ;
        };       
    };

        // Zet de variabel "verdediging" gelijk aan de gevechtscore van het monster.
    if (monsterType.Gevechtscore <= 0) {                                              
        verdedigingsDobbelsteen = MonsterDiceArray[0];
        document.getElementById("gevechtsLog").innerHTML += `De ${monsterType.Naam} verdedigt met een 4-zijdige dobbelsteen en rolt een <b>${verdedigingsDobbelsteen}</b>! ` ;
    } else if (monsterType.Gevechtscore === 1) {
        verdedigingsDobbelsteen = MonsterDiceArray[1];
        document.getElementById("gevechtsLog").innerHTML += `De ${monsterType.Naam} verdedigt met een 6-zijdige dobbelsteen en rolt een <b>${verdedigingsDobbelsteen}</b>! ` ;
    } else if (monsterType.Gevechtscore === 2) {
        verdedigingsDobbelsteen = MonsterDiceArray[2];
        document.getElementById("gevechtsLog").innerHTML += `De ${monsterType.Naam} verdedigt met een 8-zijdige dobbelsteen en rolt een <b>${verdedigingsDobbelsteen}</b>! ` ;
    } else if (monsterType.Gevechtscore === 3) {
        verdedigingsDobbelsteen = MonsterDiceArray[3];
        document.getElementById("gevechtsLog").innerHTML += `De ${monsterType.Naam} verdedigt met een 10-zijdige dobbelsteen en rolt een <b>${verdedigingsDobbelsteen}</b>! ` ;
    } else if (monsterType.Gevechtscore === 4) {    
        verdedigingsDobbelsteen = MonsterDiceArray[4];
        document.getElementById("gevechtsLog").innerHTML += `De ${monsterType.Naam} verdedigt met een 12-zijdige dobbelsteen en rolt een <b>${verdedigingsDobbelsteen}</b>! ` ;
    } else {                                                                                    
        verdedigingsDobbelsteen = MonsterDiceArray[5];
        document.getElementById("gevechtsLog").innerHTML += `De ${monsterType.Naam} verdedigt met een 20-zijdige dobbelsteen en rolt een <b>${verdedigingsDobbelsteen}</b>! ` ;                                                         
    };

    gevechtResultaat();
    document.getElementById("gevechtsLog").innerHTML += `<br><br>`;    
};

const gevechtResultaat = () => {
    if (aanvalDobbelsteen > verdedigingsDobbelsteen) {                                  // Als de waarde van de aanval dobbelsteen van de Avonturier groter is dan verdedigings dobbelsteen van het Monster:
        --monsterType.Levenspunten;
        if (monsterType.Levenspunten === 0) {
            document.getElementById("gevechtsLog").innerHTML += `<br>De Avonturier wint het conflict! De ${monsterType.Naam} heeft geen levenspunten meer over!`;
            document.getElementById("GameTekst").innerHTML = `Hoezee! Je hebt de ${monsterType.Naam} verslagen!`;
            document.getElementById("overworldKnop").innerHTML = `Terug naar Stadstaat`
            document.getElementById("conflictKnop").style.display = "none"; 
            document.getElementById("wapenWisselenKnop").style.display = "none";
            document.getElementById("pantserWisselenKnop").style.display = "none";
            switch (monsterType) {
                case monsterArray[0]:
                    avonturier.Relikwie.Helm = true;
                    document.getElementById("GameTekst").innerHTML += 
                    `Je beloning voor het verslaan van de <b>${monsterArray[0].Naam}</b> is de <b>Gulden Helm</b>!<br>`
                    break;
                case monsterArray[1]:
                    avonturier.Relikwie.Kuras = true;
                    document.getElementById("GameTekst").innerHTML += 
                    `Je beloning voor het verslaan van de <b>${monsterArray[0].Naam}</b> is de <b>Gezegende Kuras</b>!<br>`
                    break;
                case monsterArray[2]:
                    avonturier.Relikwie.Polsbeschermers = true;
                    document.getElementById("GameTekst").innerHTML += 
                    `Je beloning voor het verslaan van de <b>${monsterArray[0].Naam}</b> zijn de <b>Meesterlijke Polsbeschermers</b>!<br>`
                    break;
                case monsterArray[3]:
                    avonturier.Relikwie.Mantel = true;
                    document.getElementById("GameTekst").innerHTML += 
                    `Je beloning voor het verslaan van de <b>${monsterArray[0].Naam}</b> is de <b>Betoverde Mantel</b>!<br>`
                    break;
                case monsterArray[4]:
                    avonturier.Relikwie.Zwaard = true;
                    document.getElementById("GameTekst").innerHTML += 
                    `Je beloning voor het verslaan van de <b>${monsterArray[0].Naam}</b> is het <b>Zilveren Zwaard</b>!<br>`
                    break;
                case monsterArray[5]:
                    avonturier.Relikwie.Pijlen = true;
                    document.getElementById("GameTekst").innerHTML += 
                    `Je beloning voor het verslaan van de <b>${monsterArray[0].Naam}</b> zijn de <b>Vergiftigde Pijlen</b>!<br>`
                    break;
                case monsterArray[6]:
                    avonturier.Relikwie.Amulet = true;
                    document.getElementById("GameTekst").innerHTML += 
                    `Je beloning voor het verslaan van de <b>${monsterArray[0].Naam}</b> is het <b>Vervloekte Amulet</b>!<br>`
            };
        } else {
            document.getElementById("gevechtsLog").innerHTML += `<br>De Avonturier wint het conflict! De ${monsterType.Naam} heeft nog <b>${monsterType.Levenspunten}</b> levenspunten over. `;
        };                                // Post het resultaat van het conflict; in dit geval heeft de Avonturier gewonnen!
        if (avonturier.Relikwie.Amulet === true) {
            ++avonturier.Levenspunten;
            document.getElementById("gevechtsLog").innerHTML += `<br>Het Vervloekte Amulet steelt een levenspunt van de <b>${monsterType.Naam}</b>, en sluist het door naar jou. Je hebt nu <b>${avonturier.Levenspunten}</b> levenspunten.`;
        };
    } else if (aanvalDobbelsteen < verdedigingsDobbelsteen) {
        --avonturier.Levenspunten;
        if (avonturier.Levenspunten === 0) {
            document.getElementById("gevechtsLog").innerHTML += `<br>De ${monsterType.Naam} wint het conflict! Je hebt geen levenspunten meer over...`;
            document.getElementById("GameTekst").innerHTML = `Oh nee! Je bent verslagen! Opnieuw beginnen?`
            document.getElementById("respawnKnop").style.display = "inline-block";
            document.getElementById("overworldKnop").style.display = "none";
            document.getElementById("conflictKnop").style.display = "none"; 
            document.getElementById("wapenWisselenKnop").style.display = "none";
            document.getElementById("pantserWisselenKnop").style.display = "none";
        } else {
            document.getElementById("gevechtsLog").innerHTML += `<br>De ${monsterType.Naam} wint het conflict! Je hebt nog <b>${avonturier.Levenspunten}</b> levenspunten over. `;
        };            
        if (avonturier.Relikwie.Amulet === true) {
            ++monsterType.Levenspunten;
            document.getElementById("gevechtsLog").innerHTML += `<br>Het Vervloekte Amulet steelt een levenspunt van jou, en sluist het door naar de <b>${monsterType.Naam}</b>. De <b>${monsterType.Naam}</b> heeft nu <b>${monsterType.Levenspunten}</b> levenspunten.`;
        };
    } else if (aanvalDobbelsteen === verdedigingsDobbelsteen && avonturier.Wapen === "Boog" && avonturier.Relikwie.Pijlen === true) {
        --monsterType.Levenspunten;
        if (monsterType.Levenspunten === 0) {
            document.getElementById("gevechtsLog").innerHTML += `<br>De Avonturier wint het conflict! De ${monsterType.Naam} heeft geen levenspunten meer over!`;
            document.getElementById("GameTekst").innerHTML = `Hoezee! Je hebt de ${monsterType.Naam} verslagen!`;
            document.getElementById("overworldKnop").innerHTML = `Terug naar Stadstaat`
            document.getElementById("conflictKnop").style.display = "none"; 
            document.getElementById("wapenWisselenKnop").style.display = "none";
            document.getElementById("pantserWisselenKnop").style.display = "none";
            
        } else {
            document.getElementById("gevechtsLog").innerHTML += `<br>Het is een standoff! Je Vergiftigde Pijlen activeren, en de ${monsterType.Naam} verliest een levenspunt. Het heeft nog <b>${monsterType.Levenspunten}</b> levenspunten over. `;
        };
        if (avonturier.Relikwie.Amulet === true) {
            ++avonturier.Levenspunten;
            document.getElementById("gevechtsLog").innerHTML += `<br>Het Vervloekte Amulet steelt een levenspunt van de <b>${monsterType.Naam}</b>, en sluist het door naar jou. Je hebt nu <b>${avonturier.Levenspunten}</b> levenspunten.`;
        };
    } else {
        document.getElementById("gevechtsLog").innerHTML += `<br>Het is een standoff. `;
    };
};