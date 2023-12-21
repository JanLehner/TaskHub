# Dokumentation

:::info
Das ist die Dokumentation unseres [Projekts](https://github.com/RelxOff/TaskHub), welches nach der Projektmethode IPERKA umgesetzt wurde. Hier wird unser Ablauf und die Vorgehensweise des Projekts dokumentiert.

:::

### Inhaltsverzeichnis

- [Dokumentation - TaskHub App](#dokumentation)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Projektberichte](#projektberichte)
  - [IPERKA](#iperka)
    - [Informieren](#informieren)
    - [Planen](#planen)
    - [Entscheiden](#entscheiden)
    - [Realisieren](#realisieren)
    - [Kontrollieren](#kontrollieren)
    - [Auswerten](#auswerten)
  - [Einleitung](#einleitung)
  - [Technologien](#technologien)
  - [Quellen](#quellen)
  - [Lokale Entwicklungsumgebung](#lokale-entwicklungsumgebung)
    - [Expo Go Download](#Expo-Go-Download)
    - [Lokale Entwicklungsumgebung aufsetzen](#Lokale-Entwicklungsumgebung-aufsetzen)
    - [Vorbereitung](#Vorbereitung)
    - [Dependencies mit NPM installieren](#Dependencies-mit-NPM-installieren)
  - [Anforderungen](#anforderungen)
  - [Arbeitspakete](#arbeitspakete)
  - [Ausführung](#ausführung)
  - [Testen](#testen)
    - [Testumgebungen](#testumgebungen)
  - [Testfälle](#testfälle)
    - [Testprotokoll](#testprotokoll)
    - [Testbericht](#testbericht)
  - [Projektauswertung](#projektauswertung)

## IPERKA

### Informieren

- [Einleitung](#einleitung)
- [Technologien](#technologien)
- [Quellen](#quellen)
- [Anforderungen](#anforderungen)

### Planen

- [Testfälle](#testfälle)
- [Arbeitspakete](#arbeitspakete)

### Entscheiden

- [Technologien](#technologien)

### Realisieren

- [Ausführung](#ausführung)

### Kontrollieren

- [Testfälle](#testfälle)
- [Tesprotokoll](#testprotokoll)
- [Testbericht](#testbericht)

### Auswerten

- [Projektauswertung](#projektauswertung)

## Einleitung

Für dieses Projekt haben wir uns dafür entschieden, dass wir eine ToDo-App erstellen, wo man verschiedene Boards hat, welchen man ToDos zu weisen kann. Die Boards können auf öffentlich gestellt werden und man kann sie anschauen, als nicht Besitzer, in dem man ein Passwort eingibt. Der Rest ist wie eine normale ToDo App, also man kann ToDos erstell, löschen, anschauen und aktualisieren. Boards kann man erstellen und löschen.

## Technologien

Für TaskHub verwenden wir folgende Technologien:

- [React Native](https://reactnative.dev/)
- [TypeScript(tsx)](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Docusaurus](https://docusaurus.io/)
- [Git](https://git-scm.com/doc)
- [GitHub](https://docs.github.com/en)
- [Expo Go](https://expo.dev/)
- ### Hosts:
- [Deta für das Hosten der Datenbank](https://deta.space/)
- [Netlify für das Hosten der Website der Dokumentation](https://www.netlify.com/)

## Quellen

- [Docusaurus](https://docusaurus.io/docs)
- [TypeScript React Native Expo Tutorial](https://www.youtube.com/watch?v=H8qOotIAaEA)
- [Expo TypeScript Guid](https://docs.expo.dev/guides/typescript/)

## Lokale Entwicklungsumgebung

### Lokale Entwicklungsumgebung aufsetzen

#### Vorbereitung

Für die Realisierung dieses Projekts haben wir Visual Studio Code mit wenigen Erweiterungen, und zwar ESLint, Prettier und Live Share verwendet. Bei der Live Share-Erweiterung haben wir keine speziellen Einstellungen vorgenommen, wobei wir bei der Erweiterung Prettier und ESLint eine eigene Konfiguration erstellt haben, um unsere eigenen Code-Konventionen zu erzwingen. Diese Einstellungen werden automatisch übernommen, insofern man die eine Erweiterung installiert hat und die Entwicklungsumgebung aufgesetzt hat.

Um die lokale Entwicklungsumgebung aufzusetzen, muss man sich zuerst eine Kopie vom Repository, von der [offiziellen Quelle](https://github.com/RelxOff/TaskHub) holen.

Dies kann man tun, indem man eine eigene Kopie von dem Repository erstellt (forkt), damit man später seine Änderungen auch bei GitHub pushen kann, auch wenn man kein Contributor ist.

_Dadurch kann man auch die eigenen Änderungen im offiziellen Repository eingbringen, indem man eine Pull Request erstellt._

Wenn das Repository erfolgreich geforkt wurde, muss man das Repository klonen und in dessen Verzeichnis wechseln.

```shell
git clone https://github.com/[deinBenutzername]/TaskHub.git
cd Taskhub/
```

#### Dependencies mit NPM installieren

:::caution
Für diesen Schritt ist es notwendig, die node.js-Runtime installiert zu haben. [Download von node.js](https://nodejs.org/de/)
:::

Nachdem man das Projekt geklont hat, sollte man alle Dependencies installieren. Dabei muss man in das entsprechende Verzeichnis wechseln und die Abhängigkeiten installieren.

```bash
§cd TaskHub/ #Falls man noch nicht im richtigen Verzeichnis ist
npm i
cd ..
```

#### Projekt starten

:::caution
Für diesen Schritt ist es notwendig, die [Dependencies installiert](#Dependencies-mit-NPM-installieren) zu haben.
:::

```bash
cd TaskHub/ # Falls man noch nicht im richtigen Verzeichnis ist
npm run start
```

Nun wurde die Applikation erfolgreich gestartet und kann unter http://localhost:5713 erreicht werden.

:::caution

Für dieses Projekt muss man selber das Backend starten und hosten, da wir es nicht machen. Das heisst man muss alle Dependencies installieren also wie folgt:

```bash
npm i
npm i jsonwebtoken
npm run dev
```

Falls das Backend nicht auf http://localhost:8080/ gehostet wird muss man dies im Code umändern.

:::

## Anforderungen


| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                                                                                                                               |
| :--------- | :---------------- | ------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.       | Muss            | funk.             | Die Webapplikation soll ein Registrierungsfeld haben, welches einen Benutzernamen und ein Password annimmt.                                                                |
| 2.       | Muss            | funk.             | Die Webapplikation soll ein Anmeldungsfeld haben, welches einen Benutzernamen und ein Password annimmt.                                                                    |
| 3.       | Kann            | qual.             | Beim Login Screen gibt es ein zusätzlicher Button "Passwort zurücksetzen" der bei aktivierung das Passwort resetet und dem Benutzer das neue Passwort per Mail sendet.   |
| 4.       | Kann            | qual.             | Hat der Benutzer sich eingelogt und noch keine Boards auf seinem Profil hinzugefügt, wird ihm gezeigt wie man das machen kann.                                            |
| 5.       | Muss            | funk.             | Auf der Boardseite gibt es einen Button mit dem sich der Benutzer ausloggen kann.                                                                                          |
| 6.       | Muss            | funk.             | Wenn der User ein Board hinzufügen will, kann er zwischen einem neuem erstellen und ein öffentliches hinzufügen auswählen.                                             |
| 7.       | Muss            | funk.             | Beim Erstellen von einem neuen Board kann der Benutzer einen Namen sowie eine Beschreibung für das Board eingeben.                                                        |
| 7.1      | Muss.           | funk.             | Beim Erstellen von einem neuen Board kann der Benutzer auswählen, ob das Board öffentlich machen möchte, falls er dies tut, muss er nach einem Passwort gefragt werden. |
| 8.       | Muss.           | funk.             | Beim Hinzufügen von einem öffentlichen Board, muss der Benutzer den Namen des Boards und das Passwort eingeben.                                                          |
| 9.       | Muss.           | funk.             | Wenn der Benutzer ein Board hinzugefügt hat, sollen auf der Boardseite alle seine Boards angezeigt werden.                                                                |
| 9.1      | Muss.           | funk.             | Wenn der Benutzer ein öffentliches Board hinzugefügt hat, sollen auf der Boardseite alle seine Boards sowie die öffentlichen Boards angezeigt werden.                   |
| 10.      | Muss.           | funk.             | Der Benutzer kann bei seinem eigenen Boards ToDos hinzufügen.                                                                                                             |
| 10.1     | Muss.           | funk.             | Beim Hinzufügen von einem ToDo muss der Benutzer den Namen, die Beschreibung und das Fälligkeitsdatum eingeben.                                                          |
| 10.2     | Kann.           | qual.             | Beim Hinzufügen von einem ToDo kann der Benutzer freiwillig, einen oder mehrere Verantwortliche(n) für das ToDo angeben.                                                 |
| 11.      | Muss.           | funk.             | Der Benutzer kann bei seinem eigenen Board ToDos aktualisieren.                                                                                                            |
| 11.1     | Muss.           | funk.             | Beim Aktualisieren von einem ToDo muss der Benutzer nur, die zu verändernden Daten neuen eingeben.                                                                        |
| 11.2     | Kann.           | qual.             | Beim Aktualisieren von einem ToDo kann der Benutzer freiwillig, den/die Verantwortlichen verändern.                                                                       |
| 12.      | Muss.           | funk.             | Der Benutzer kann bei seinem eigenen Board ToDos löschen, aber er muss gefragt werden, ob er das wirklich tun möchte.                                                    |
| 13.      | Muss.           | funk.             | Der Benutzer kann bei seinem eigenen Board oder bei öffentlichen Boards, zu denen er gehört, die ToDos genauer anschauen, indem er auf das ToDo drückt.                 |
| 14.      | Muss.           | funk.             | Auf jeder Seite gibt es einen "Back"-Knopf, damit der Benutzer wieder zur Boardseite (Startseite) gelanngt.                                                                |

## Arbeitspakete

:::info
1x Arbeitspaket = 45 Minuten (eine Schullektion) <br />
1x Sitzung = 5x Arbeitspakete (ein Halbtag) <br />
Arbeitspakete \* Sitzungen \* Gruppenmitglieder<br />

16 Arbeitspakete für das Portfolio, welches jedes Gruppenmitglieder in der Freizeit erstellen muss<br />

5 \* 7 \* 4 + 16 = 156 Arbeitpakete
:::


| Nr. | Frist      | Beschreibung                                           | Zeit in Arbeitspaketen (geplant) |
| ----- | ------------ | -------------------------------------------------------- | ---------------------------------- |
| 1   | 09.11.2023 | Informieren (von IPERKA)                               | 20                               |
| 2   | 16.11.2023 | Planen und Entscheiden (von IPERKA)                    | 18                               |
| 3   | 16.11.2023 | GitHub Repository aufsetzen                            | 2                                |
| 3   | 23.11.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 1 - 4   | 20                               |
| 4   | 30.11.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 5 - 10  | 20                               |
| 5   | 07.12.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 10 - 15 | 20                               |
| 6   | 14.12.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 15 - 21 | 20                               |
| 7   | 21.12.2023 | Kontrollieren (von IPERKA)                             | 10                               |
| 8   | 21.12.2023 | Auswerten (von IPERKA)                                 | 10                               |
| 9   | 21.12.2023 | Portfolioeintrag fertigstellen                         | 16                               |

## Ausführung


| Nr. | Frist      | Bemerkung                                                                                                                                                                                                                                                                                                                                                                 | Zeit (geplant) | Zeit (effektiv) |
| :---- | :----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------- |
| 1   | 09.11.2023 | Wir hatten schnell sehr viele gute Ideen, aber hatten Mühe uns zu einigen. Letztendlich konnten wir uns aber noch im Zeitrahmen einigen.                                                                                                                                                                                                                                 | 10             | 10              |
| 2   | 16.11.2023 | Wir haben die Planung erstellt und die wichtigen Entscheidungen getroffen. Wir hatten Probleme damit uns bei den Technologien zu einigen, da zwei Gruppenmitglieder an der Machbarkeit gezweifelt haben. Um uns zu einigen, haben wir das Problem in kleine Teile aufgeteilt und alle haben erkannt, dass es machbar ist. Beim Aufsetzen des Repos gab es keine Probleme. | 20             | 18              |
| 3.  | 23.11.2023 | Wir waren sogar ein wenig weiter als geplant, aber einer von uns war nicht da und irgendwie hat npm i nicht funktioniert wie es sollte und wir haben, nachdem das Projekt nicht richtig funktioniert, haben wir es neu aufgesetzt.                                                                                                                                        | 20             | 22              |
| 4.  | 30.11.2023 | Wir haben das Frontend realisiert mit den verschiedenen Unterseiten, aber nich nicht ganz vollständig                                                                                                                                                                                                                                                                    | 20             | 24              |
| 5.  | 07.12.2023 | Wir haben das Backend umgesetzt und am Ende gemrekt, dass man noch mehr Sachen braucht um Daten zu erstellen.                                                                                                                                                                                                                                                             | 20             | 30              |
| 6.  | 14.12.2023 | Wir haben die letzten Unterseiten erstellt und die API-Calls implementiert und die letzten Denkfehler und noch nicht fertigen API-Calls gemacht.                                                                                                                                                                                                                          | 20             | 36              |
| 7.  | 21.12.2023 | Wir haben die Testfälle durchgeführt und diese auch direkt ausgewertet, aber wir haben auch unser Portfolio geschrieben.                                                                                                                                                                                                                                                | 36             | 36              |

### Testumgebungen

Wir verwenden für alle Testfälle eine Testumgebung:

#### Manuell (Per Hand):

**Betriebssystem:**

Der Browser, mit dem wir die Tests in dem wir die Tests manuell testen, wird auf Microsoft Widnows 10 (**22H2** **_Build: 19045.3693_**) ausgeführt.

**Browser:**

Für den Browser verwenden wir die neuste Version von Mozilla Firefox (120).

## Testfälle


| Testf.-Nr. | Anforderung | Voraussetzung                                                     | Testumgebung | Eingabe                                                                                           | Erw. Ausgabe                                                                              |
| ------------ | ------------- | ------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1.0.1      | 1           | Webapplikation gestartet                                          | Per Hand     | 1. URL = "http://localhost:8081/register"                                                         | 2. Register als Titel und ein Feld für den Username und das Passwort mit register Button |
| 2.1        | 2           | Webapplikation gestartet                                          | Per Hand     | 1. URL = "http://localhost:8081/register"                                                         | 2. Login als Titel und ein Feld für den Username und das Passwort mit login Button       |
| 3.1        | 3           | Benutzer angemeldet                                               | Per Hand     | 1. Knopf "Passwort zurücksetzen" drüken                                                         | 2. Email mit neuem Passwort.                                                              |
| 4.1        | 4           | Benutzer angemeldet                                               | Per Hand     | 1. Username = 1<br />Passwort = 1                                                                 | 2. "ohh it's cold in here, time to create some items by clicking on the plus."            |
| 5.1        | 5           | URL eingegeben                                                    | Per Hand     | 1. Username = 1<br />Passwort = 1                                                                 | 2. Auslog Button unten links.                                                             |
| 6.1        | 6           | Benutzer angemeldet                                               | Per Hand     | 1. Auf das + klicken                                                                              | 2. Auswahl zwischen öffentliches und neues erstellen.                                    |
| 7.0.1      | 7.0         | Benutzer angemeldet                                               | Per Hand     | 1. Auf das + klicken                                                                              | 2. Eingabefeld für Beschreibung und Titel.                                               |
| 7.1.1      | 7.1         | Benutzer angemeldet                                               | Per Hand     | 1. Auf das + klicken und dann öffentlich auswählen                                              | 2. Eingabefeld für Passwort.                                                             |
| 8.1        | 8           | Benutzer angemeldet                                               | Per Hand     | 1. Gibt URL von öffentlichen Board ein.                                                          | 2. Eingabefelder für Titel und Passwort.                                                 |
| 9.0.1      | 9.0         | Benutzer angemeldet                                               | Per Hand     | 1. Seite refreshen                                                                                | 2. Alle seine aktuellen Boards.                                                           |
| 9.1.1      | 9.1         | Benutzer angemeldet                                               | Per Hand     | 1. Seite refreshen                                                                                | 2. Alle seine aktuellen Boards.                                                           |
| 10.0.1     | 10.0        | Benutzer angemeldet                                               | Per Hand     | 1. URL = "http://localhost:8081/screens/itemsSites"                                               | 2. Button mit +                                                                           |
| 10.1.1     | 10.1        | Benutzer angemeldet                                               | Per Hand     | 1. Auf den + Button drüken                                                                       | 2. Eingabefelder für Titel, Beschreibung und Datum                                       |
| 10.2.1     | 10.2        | Benutzer angemeldet und ToDo in einem Board erstellt              | Per Hand     | 1. URL = "http://localhost:8081/screens/itemsSites"                                               | 2. Alle ToDos werden angezeigt und man kann Verantwortliche auswählen.                   |
| 11.0.1     | 11.0        | Benutzer angemeldet und ToDo in einem Board erstellt              | Per Hand     | 1. URL = "http://localhost:8081/screens/itemsSites"                                               | 2. Auf Edit drücken.                                                                     |
| 11.1.1     | 11.1        | Benutzer angemeldet und ToDo in einem Board erstellt (und 11.0.1) | Per Hand     | 2. Titel wird zu test2 verändert und dann auf speichern drücken                                 | 1. ToDo Daten<br />3. (keine Fehlmeldung)                                                 |
| 11.1.2     | 11.1        | Benutzer angemeldet und ToDo in einem Board erstellt(und 11.0.1)  | Per Hand     | 2. Beschreibung wird zu 1234567 verändert und dann auf speichern drücken                        | 1. ToDo Daten<br /><br />3. (keine Fehlmeldung)                                           |
| 11.1.3     | 11.1        | Benutzer angemeldet und ToDo in einem Board erstellt(und 11.0.1)  | Per Hand     | 2. Beschreibung wird zu 24.12.2023 verändert und dann auf speichern drücken                     | 1. ToDo Daten<br /><br />3. (keine Fehlmeldung)                                           |
| 11.2.1     | 11.2        | Benutzer angemeldet und eines von 11.1.1/2/3                      | Per Hand     | 2. Der oberste wird ausgewählt                                                                   | 1. Alle Verantwortlichen werden angezeigt.<br />3. (keine Fehlmeldung)                    |
| 12.1       | 12          | Benutzer angemeldet und ein ToDo erstellt in einem Board          | Per Hand     | 1. URL = "http://localhost:8081/screens/itemsSites"<br />und man drückt beim ersten auf löschen | 2. Man wird gefragt, ob man es wirklich will.                                             |
| 13.1       | 13          | Benutzer angemeldet, Board mit ToDos vorhanden                    | Per Hand     | 1. URL = "http://localhost:8081/screens/boardSites"<br />und auf Inspect drücken                 | 2. Beschreibung wird angezeigt                                                            |
| 14.1       | 14          | Benutzer angemeldet                                               | Per Hand     | 1. URL = "http://localhost:8081/screens/boardSites"                                               | 2. Back Button wird angezeigt                                                             |
| 14.2       | 14          | Benutzer angemeldet                                               | Per Hand     | 1. URL = "http://localhost:8081/screens/boardSites"                                               | 2. Back Button wird angezeigt                                                             |
| 14.3       | 14          | Benutzer angemeldet                                               | Per Hand     | 1. URL = "http://localhost:8081/screens/createBoardSite"                                          | 2. Back Button wird angezeigt                                                             |
| 14.4       | 14          | Benutzer angemeldet                                               | Per Hand     | 1. URL = "http://localhost:8081/screens/CreateItemSite"                                           | 2. Back Button wird angezeigt                                                             |
| 14.5       | 14          | Benutzer angemeldet                                               | Per Hand     | 1. URL = "http://localhost:8081/screens/updateItemSite"                                           | 2. Back Button wird angezeigt                                                             |

### Testprotokoll

:::info

**OK** = Dieser Testfall wurde erfolgreich getestet.

**NOK** = Dieses Testfall konnte nicht (erfolgreich) getestet werden.

:::


| Test-Nr | Bericht | Tester                                               |
| --------- | --------- | ------------------------------------------------------ |
| 1       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 1.1     | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 2       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 3       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 4       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 5       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 6       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 7       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 7.1     | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 8       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 9       | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 9.1     | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 10      | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 10.1    | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 10.2    | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 11      | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 11.1    | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 11.2    | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 12      | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 13      | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |
| 14      | OK      | @RelxOff, @Niels-Brunokowski, @janLehner und @sanqro |

### Testbericht

## Projektauswertung
