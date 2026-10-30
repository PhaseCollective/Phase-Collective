# Upload PHASE Collective to GitHub Pages

The ZIP contains a `phase-collective` folder with the complete website. No installation or build step is needed.

## Upload

1. Download and extract `PHASE-Collective-GitHub-Pages.zip` on your computer.
2. Open https://github.com/PhaseCollective/Phase-Collective and use **Code → Download ZIP** to keep a backup of your existing repository.
3. Check **Settings → Pages** to see which branch and folder currently publish your site. Keep the existing source. For a simple branch deployment this is usually `main` and `/(root)`; if it is `/docs`, upload into that folder instead. If a custom Actions workflow is configured, ensure it publishes the folder receiving these files.
4. In that publishing folder, choose **Add file → Upload files**. Open the extracted `phase-collective` folder and drag its CONTENTS into GitHub: `index.html`, `styles.css`, `app.js`, the entire `assets` folder, and `.nojekyll` if visible. Do not upload the enclosing folder or the ZIP. `.nojekyll` is included for static hosting; the site uses no Jekyll-specific features.
5. Commit the uploaded files. Replacing `index.html` is intentional. Leave unrelated repository files in place.
6. Wait for the Pages deployment in **Actions** to finish, then open https://phasecollective.github.io/Phase-Collective/ and refresh. Check the original logo, header photo, eight catalogue entries and report links.

Uploading to the existing publishing folder preserves the Mini App website address. This package has not been uploaded on your behalf.

## Telegram

Keep the existing website URL configured for **@PHASECollectivebot**. The page loads Telegram's official Mini App integration, signals readiness, expands the view, applies the cream header/background where supported and respects safe areas. It also works in a normal browser.

Open the Mini App from the bot's existing menu button and check all three tabs. If the existing menu URL needs checking, use @BotFather → `/mybots` → select @PHASECollectivebot → Bot Settings → Menu Button and confirm the same HTTPS URL. This website cannot change BotFather settings or the bot's backend.

## What is deliberately disabled

- No payment, checkout, order submission, Telegram `sendData`, invoice opening, message sharing or automatic enquiry transmission.
- Basket controls create a local combined enquiry draft only. The copy button copies that draft to the device clipboard. Selections reset on reload.
- Proposed prices are labelled throughout as not offers for sale.
- Supplied report links are reproduced as provided. Results and current-batch matches have not been verified; the website does not claim verification.
- KPV 30mg and BPC-157 10mg are awaiting arrival and batch verification, with no invented COAs. SS-31 is absent from the catalogue.

The generic link to @PHASECollectivebot opens the bot without a basket payload. Any existing ordering replies or flows in the bot itself must remain disabled separately; replacing this static website does not alter them.

There is no sales-enable switch. A qualified UK regulatory review must establish applicable requirements before a separate order system is designed or enabled. This package is not a legal compliance determination.

## Final check after upload

At phone width, confirm all eight names, strengths and prices; test every supplied COA link; check quantities, proposed-price totals, removal, clearing and copying. Confirm the send/order button is disabled and no checkout exists. Test inside Telegram as well as a normal browser. Reports open external third-party sites.

## Sources for setup instructions

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Telegram Mini Apps: https://core.telegram.org/bots/webapps

## Assets

`assets/phase-logo.png` is the original uploaded image, copied unchanged. The header is an AI-generated illustrative photograph, not a verified product or batch photograph. It must not be used as evidence of product appearance, contents or testing. See `ASSET-NOTES.txt` for its creation brief.
