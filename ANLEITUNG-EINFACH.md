# Einfache Anleitung: Website ohne Programmierkenntnisse bearbeiten

Diese Anleitung ist für Stephan und alle, die Inhalte auf **https://stephan-mertin.de** ändern möchten, ohne programmieren zu können.

## Das Wichtigste zuerst

- Die Website liegt im GitHub-Repository **stephan-mertin/website**.
- Die veröffentlichte Website wird automatisch aktualisiert, wenn eine Änderung auf dem Branch `main` gespeichert wird.
- Nach dem Speichern dauert es normalerweise einige Minuten, bis die Änderung online sichtbar ist.
- Vor größeren Änderungen am besten erst eine Kopie des bisherigen Textes oder Bildes auf dem eigenen Rechner sichern.

## 1. Eine einfache Textänderung direkt bei GitHub

1. Öffne [das Website-Repository](https://github.com/stephan-mertin/website).
2. Öffne den Ordner und die Datei, die geändert werden soll (siehe Dateiliste weiter unten).
3. Klicke auf das Stift-Symbol **Edit this file**.
4. Ändere nur den gewünschten Text. Lass die übrigen Zeilen möglichst unverändert.
5. Klicke oben rechts auf **Commit changes…**.
6. Schreibe eine kurze Beschreibung, zum Beispiel „Angebotstext aktualisiert“.
7. Wähle **Commit directly to the main branch** und bestätige mit **Commit changes**.

Danach startet die automatische Veröffentlichung. Prüfe die Website nach einigen Minuten.

## 2. Ein Bild austauschen

Bilder liegen im Ordner `public`. Die Startseite verwendet unter anderem diese Bilddateien:

| Bild auf der Website | Dateiname |
| --- | --- |
| Großes Porträt auf der Startseite | `stephan-mertin.jpeg` |
| Logo | `logo.jpeg` |
| Programm 2027 | `reiseprogramm-2027.jpeg` |
| Reisecollage im Angebotsbereich | `wohin-soll-die-reise-gehen.jpeg` |

So tauschst du ein Bild aus, ohne den Website-Code anzufassen:

1. Öffne im Repository den Ordner `public`.
2. Öffne die vorhandene Bilddatei, die ersetzt werden soll.
3. Nutze **Add file → Upload files** (alternativ die Upload-Funktion im Ordner `public`).
4. Lade das neue Bild mit **dem exakt gleichen Dateinamen** hoch. Beispiel: `stephan-mertin.jpeg`.
5. GitHub fragt beim Speichern gegebenenfalls, ob die vorhandene Datei ersetzt werden soll. Bestätige das Ersetzen.
6. Speichere die Änderung mit **Commit changes** direkt auf `main`.

**Wichtig:** Der Dateiname muss exakt gleich bleiben (auch Groß-/Kleinschreibung und Dateiendung), sonst zeigt die Website möglicherweise weiterhin das alte Bild oder gar kein Bild. Wenn GitHub das Ersetzen nicht anbietet, nicht einfach einen zweiten Dateinamen verwenden: erst nachfragen.

## 3. Welche Datei gehört zu welchem Bereich?

| Bereich | Datei |
| --- | --- |
| Startseite und ihre Texte/Bildanordnung | `src/pages/index.astro` |
| Kopfzeile, Logo, Fußzeile und gemeinsame Seiteneinstellungen | `src/layouts/Layout.astro` |
| Impressum | `src/pages/impressum.astro` |
| Datenschutz | `src/pages/datenschutz.astro` |
| Bilder und PDF-Dateien | Ordner `public/` |
| Gestaltung/Farben/Abstände | `src/styles/global.css` |

Für normale Text- und Bildänderungen ist es meistens nicht nötig, die Dateien unter `src/` selbst zu bearbeiten. Bei Unsicherheit lieber erst fragen.

## 4. Mit ChatGPT Änderungen vorbereiten lassen

Du kannst in ChatGPT einfach schreiben, was geändert werden soll, zum Beispiel:

- „Ersetze das erste Bild auf meiner Website durch dieses Foto.“
- „Ändere auf der Startseite den Abschnitt ‚Was wir erleben können‘.“
- „Füge unter Veranstaltungen einen Hinweis auf Fußballspiele ein.“

Lade ein neues Bild direkt im Chat hoch, wenn ein Bild ausgetauscht werden soll. Nenne möglichst den Bereich der Website. Bitte ChatGPT, zuerst die betroffenen Dateien zu prüfen und nur die gewünschte Änderung vorzunehmen.

**Kontrolliere vor dem Speichern:** Was wird geändert? Welche Datei ist betroffen? Bleiben alle anderen Inhalte unverändert? Bei Änderungen an Impressum, Datenschutz, Preisen oder verbindlichen Leistungsangaben den Inhalt besonders sorgfältig prüfen.

## 5. Prüfen, ob die Änderung online ist

1. Öffne [https://stephan-mertin.de](https://stephan-mertin.de).
2. Aktualisiere die Seite mit **Strg + F5** (Windows), damit der Browser alte Bilder nicht aus dem Zwischenspeicher zeigt.
3. Wenn die Änderung noch fehlt, warte einige Minuten und prüfe erneut.
4. Den Veröffentlichungsstatus findest du im Repository unter **Actions**. Der neueste Workflow sollte erfolgreich abgeschlossen sein (grünes Häkchen).

Wenn bei **Actions** ein rotes Kreuz erscheint oder die Website nach längerer Zeit nicht richtig aussieht: keine weiteren Änderungen auf Verdacht machen. Notiere, was geändert wurde, und bitte um Hilfe.

## 6. Was du besser nicht änderst

Ohne technische Unterstützung bitte nicht verändern:

- Dateien in `.github/workflows/`
- `astro.config.mjs`, `package.json` oder `package-lock.json`
- `src/layouts/Layout.astro` und `src/styles/global.css`, wenn es nur um einen einfachen Text oder ein Bild geht
- Domain-, Seiten- oder Berechtigungseinstellungen bei GitHub

Diese Dateien steuern technische Abläufe und können dazu führen, dass die Website nicht mehr richtig veröffentlicht wird.

## Hilfe

Wenn du nicht sicher bist, welche Datei du bearbeiten musst, ändere lieber noch nichts. Beschreibe die gewünschte Änderung oder zeige einen Screenshot – dann kann die passende Stelle gefunden werden.
