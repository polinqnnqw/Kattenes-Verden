# Kattenes Verden 🐾

En interaktiv nettside om katters unike egenskaper og superkrefter.

## Hva jeg har laget
Jeg har videreutviklet nettsiden min om kattefakta ved å legge til interaktive funksjoner ved hjelp av JavaScript. Nettsiden inneholder spennende fakta om katter, bilde, utgående lenker og interaktive verktøy for brukeren.

## Hvordan jeg har brukt JavaScript
I prosjektet har jeg brukt JavaScript (`script.js`) til tre hovedfunksjoner:
1. **Katteteller:** En interaktiv teller der brukeren kan trykke på en knapp for å "klappe katten". Tellersystemet oppdaterer teksten dynamisk og gir ulike meldinger basert på hvor mange ganger brukeren har klappet katten.
2. **Kattesitat-generator:** En knapp som plukker ut et tilfeldig sitat om katter fra en liste (array) ved bruk av `Math.random()`.
3. **Mørk modus (Dark Mode):** En knapp i toppen som bruker `.classList.toggle()` til å skifte fargetema på nettsiden mellom lys og mørk modus.

## Hva jeg har lært
- Hvordan koble en JavaScript-fil til en HTML-fil med `<script>`-taggen.
- Hvordan hente elementer fra HTML ved bruk av `document.getElementById()`.
- Lytte til brukerhandlinger ved hjelp av `addEventListener('click', ...)`.
- Endre innhold i HTML-elementer dynamisk med `.textContent`.
- Bruke tilfeldige tall (`Math.floor(Math.random() * ...)`), lister (arrays) og vilkår (`if/else`).
- Endre CSS-klasser på elementer med JavaScript for å skape mørk modus.