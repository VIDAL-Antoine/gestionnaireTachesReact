# Gestionnaire de tâches

## Description

Ce projet est un gestionnaire de tâches (ou To Do list en anglais). Ce projet a été réalisé en React et est inspiré de [ce lien](www.youtube.com/watch?v=w7ejDZ8SWv8). 

Le fonctionnement de l'application est simple. L'utilisateur peut ajouter des tâches ou en supprimer. Une tâche possède un titre, une date (au format jour/mois/année), et un attribut rappel (activable en cliquant sur la cloche) qui permet de mettre en valeur la tâche (et ainsi voir plus facilement les tâches importantes).

## Ajouts

Divers ajouts ont été effectués par rapport à l'application intégrale. L'application utilisait de base une chaîne de caractères (string) pour stocker les dates, j'ai préféré utilisé des objets de type Date pour pouvoir manipuler les dates et pouvoir afficher le nombre de jours restants avant l'échéance d'une tâche. 

De plus, le rappel fonctionnait à la base avec un double-clic sur la tâche souhaitée, j'ai décidé d'ajouter un bouton cloche qui permet d'activer ou désactiver le rappel. 

Tous ces ajouts ont également impliqués de nouveaux ajouts au niveau du HTML/CSS pour pouvoir afficher ces éléments correctement.

## Utilisation

L'application utilise un serveur JSON côté backend pour stocker les tâches. Ainsi pour faire tourner l'application il est nécessaire de d'abord lancer le serveur JSON et d'ensuite ouvrir un autre terminal pour lancer l'application. Il faut donc lancer les commandes suivantes : 

1. Installer les dépendances : `npm install`
2. Lancer le serveur JSON qui contient les tâches enregistrées (sur http://localhost:5000) : `npm run server`
3. Lancer l'application React sur un autre terminal (sur http://localhost:3000) : `npm start`