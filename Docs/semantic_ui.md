Grid et Grid.Column sont des composants de Semantic UI React qui facilitent la création de grilles flexibles pour la mise en page. Ils sont basés sur le système de grille CSS et permettent de diviser l'espace en colonnes et de positionner les éléments en fonction de ces colonnes.

**Grid :**

Le composant `Grid` sert de conteneur principal pour les lignes et les colonnes. Il définit la structure de base de la grille et prend en charge différentes propriétés pour contrôler l'apparence et le comportement de la grille. Quelques-unes de ces propriétés incluent :

- `centered` : Centrer les colonnes horizontalement dans la grille.
- `columns` : Définit le nombre de colonnes dans la grille.
- `divided` : Ajoute des bordures entre les colonnes.
- `stackable` : Permet à la grille de se réorganiser automatiquement en piles sur les appareils mobiles.

**Grid.Column :**

Le composant `Grid.Column` représente une colonne individuelle dans la grille. Il est utilisé pour définir la largeur, l'alignement et d'autres propriétés spécifiques à la colonne. Les colonnes sont placées à l'intérieur du composant `Grid` pour créer la structure de la grille. Quelques propriétés de `Grid.Column` incluent :

- `width` : Définit la largeur de la colonne en fonction du nombre total de colonnes dans la grille.
- `textAlign` : Contrôle l'alignement du texte à l'intérieur de la colonne.
- `verticalAlign` : Contrôle l'alignement vertical du contenu à l'intérieur de la colonne.
- `style` : Permet d'appliquer des styles CSS personnalisés à la colonne.

Voici un exemple de base de l'utilisation de `Grid` et `Grid.Column` :

```jsx
import React from 'react';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <div>Contenu de la première colonne</div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div>Contenu de la deuxième colonne</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
