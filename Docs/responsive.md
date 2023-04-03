
- Les Media Queries permettent d'adapter le style en fonction de la taille de l'écran :

- `@media screen and (max-width: 991px)` : Applique les styles suivants pour les écrans dont la largeur est inférieure ou égale à 991px (tablettes) :
  - `.card-wrapper` : Modifie la largeur maximale des éléments ayant la classe `card-wrapper` à 40% de la largeur de leur conteneur parent.
  ```
  @media screen and (max-width: 991px) {
    .card-wrapper {
      max-width: 40%;
    }
  }
  ```

- `@media screen and (max-width: 767px)` : Applique les styles suivants pour les écrans dont la largeur est inférieure ou égale à 767px (mobiles) :
  - `.card-wrapper` : Modifie la largeur maximale des éléments ayant la classe `card-wrapper` à 80% de la largeur de leur conteneur parent.
  ```
  @media screen and (max-width: 767px) {
    .card-wrapper {
      max-width: 80%;
    }
  }
  ```
