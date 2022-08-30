Du skal lage en React-app som gir oversikt brukere. Listen over brukere hentes fra siden:
https://randomuser.me.

Appen skal oppfylle disse kriteriene:

●   Appen skal vise en liste med 10 brukere.

●   Hvert Liste-elementene skal vise

        ○ Navn,
        
        ○ By,
        
        ○ Epost,
        
        ○ Profil-bilde.
        
        ○ Alder
        
     Man skal kunne trykke en knapp for å laste inn de ti neste brukerne.
     
     Man skal kunne trykke en knapp for å laste inn de forrige ti brukerne (om man ikke
         allerede er på starten).
         
  ● Man skal kunne klikke på hver bruker og få opp en side med ekstra-informasjon om
    brukeren, i tillegg til det som allerede vises:
    
      ○ Brukernavn
      
      ○ Full adresse
      
      ○ Fødselsdag (i norsk dato-format)
      
      ○ Registreringsdato (i norsk-dato-format)
      
      ○ En unik id
      
      ○ En knapp for å sende en e-post til brukeren
      
●   Man skal kunne merke en bruker som favoritt

●   Siden skal ha en egen boks som viser favoritter

●   Brukere skal kunne fjernes fra favoritt-boksen.

●   Appen skal huske hvilke brukere man har merket selv om nettleseren lukkes og åpnes
    igjen.
    
●   Appen skal ha et pent design

Har du ekstra tid kan du også implementere følgende funksjonaliteter:

● Mulighet til å sortere brukerne

○ Alfabetisk etter navn

○ Etter alder

○ Etter merket som avoritt

● Antall dager til neste fødsesldag

● Tid siden brukeren ble registrert

● Knapp for å laste ned profilbildet som en fil.

Apien kan brukes på følgende måte med fetch i JavaScript:

fetch('https://randomuser.me/api?seed=00000&page=1&results=10')

Responsen kommer i form av json. Seed må alltid være den samme for at du skal få tilbake
samme liste med brukere hver gang.

Vi har beregnet at det skal være mulig å lage denne appen i løpet av en arbeidsdag, men om du
ikke får gjort, eller har tid til å gjøre alle punktene så er det bare å levere prosjektet så langt du
kommer.

Du kan sette opp prosjektet hvordan du vil, men det er en fordel om du kan bruke React/Next.js
og/eller Typescript, siden det er disse teknologiene vi jobber med i Utdannet..

Tips: Du kan enkelt sette opp ent Next-prosjekt med Typescript ved å bruke kommandoen:
npx create-next-app@latest --ts (krever at du har Node.js installert).

Obs: Vi har i ettertid sett at Randomuser.me api-en kan være litt ustabil og noen ganger gi en
cors-feil. Bare ignorer dette mens du lager appen.
