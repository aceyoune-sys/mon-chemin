# Mon chemin — app de cours de religion (Tawhid & Fiqh)

## Contexte
- App web installable (PWA) privée, pour l'utilisateur et son épouse uniquement. Chacun l'utilise de son côté sur iPhone (ajout à l'écran d'accueil). Pas d'App Store.
- L'utilisateur débute en développement : le guider pas à pas, réponses courtes, ne rien ajouter sans lui demander.
- Cours suivis : école malikite, niveau 1, avec un instituteur. Chaque cours = un épisode podcast de ~5 min + le quiz de l'instituteur.
- Contenu religieux : uniquement ce qui vient des récaps PDF de l'instituteur. Ne jamais inventer ni ajouter d'avis, hadith ou verset.

## Structure
- index.html : toute l'app (HTML, CSS, JS). Données du quiz dans la constante QUIZ.
- audio/episode-N.m4a : podcasts.
- manifest.json, sw.js, icons/ : installation et hors ligne. Changer VERSION dans sw.js à chaque mise à jour.
- Hébergement : GitHub Pages (branche main, dossier racine).

## Design choisi : « Sable & sauge »
Fond sable #F3EEE6, cartes blanches, accent sauge #5E7A63. Titres Cormorant Garamond, texte Nunito. Ludique et doux, façon citations.

## Fait (v1)
- Accueil : rappel du jour, épisode 1 « La ilaha illa Allah » avec lecteur audio, 6 emplacements verrouillés (épisodes 2 à 7).
- Quiz de 8 questions avec correction expliquée et score final.
- Audio actuel = provisoire (voix Microsoft Edge, jugée pas naturelle). À remplacer par le podcast NotebookLM.

## À faire (décidé avec l'utilisateur)
1. Remplacer audio/episode-1.m4a par le podcast NotebookLM.
2. Déblocage : l'épisode suivant s'ouvre quand le quiz est réussi ; navigation libre parmi les épisodes débloqués.
3. Suivi de progression, avec la progression de l'autre visible (base gratuite type Supabase).
4. Ajouter un épisode à chaque nouveau récap envoyé par l'utilisateur.
