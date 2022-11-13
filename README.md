# Support d'entretien

## Installation
Cloner le repo et exécuter: `npm install`

Lancer l'application via la commande `npm start` et vérifier que tout est OK à l'url [http://localhost:3000/](http://localhost:3000/)

## Exercices
1. Composant _[Liste.tsx](src/components/Liste.tsx)_
   1. Fetcher l'api et afficher les utilisateurs dans le tableau 
   2. Implémenter le bouton "Rafraichir" (relance le fetch de l'api et actualise les données)
   3. Implémenter le filtre: le texte filtre sur le nom ou le prénom
   5. Ajouter le _[VeryDeepComponent](src/components/VeryDeepComponent/VeryDeepComponent.tsx)_ et faire en sorte qu'il affiche la valeur du filtre
   ```jsx
   import VeryDeepComponent from "./VeryDeepComponent"
   
   [...]
   <VeryDeepComponent />
   ```
   6. Afficher l'heure dans la balise _&lt;time&gt;_ (vous pouvez utiliser la méthode _Date::toLocaleTimeString_): l'heure se rafraichit toutes les secondes
   7. Typer le composant (les dépendances sont déjà installées)
   8. Supprimer la balise _&lt;div&gt;_ à la racine du _return_
   9. Utiliser la méthode `userUtils.veryComplexScoreCalculation` pour calculer le "score" des utilisateurs
   10. Implémenter les tests (selon ce qui vous semble le plus judicieux)
