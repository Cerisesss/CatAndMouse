# CatAndMouse

Un programme permettant de visualiser sur un plan en 2 dimensions un chat et
une souris.

# Conceptualiser et afficher une grille

__Dans le fichier m_afficher_grille.js :__
 * Écrivez une fonction qui prend en paramètre les dimensions de la grille, les
coordonnées du chat et les coordonnées de la souris, et qui affiche dans la
console une grille de points, sauf à l'endroit du chat où il faudra afficher
le caractère "c" et à l'endroit de la souris où il faura afficher
le caractère "s".

_Tip :_
 - Refléchissez bien à la meilleure manière de modéliser les informations.
Pensez aux objets, aux listes, aux nombres... et demandez-vous
ce qui est le plus approprié.

__Dans le fichier jardin.js :__
 * Appelez cette fonction avec un exemple arbitraire de dimensions et de
coordonnées.

# Exemple
Voici ce que ça peut donner si j'appelle ma fonction avec les valeurs
suivantes :
* > dimensions : 10 par 10
* > coordonnées du chat : x = 3, y = 2
* > coordonnées de la souris : x = 5, y = 7

_OUTPUT:_
```
 . . . . . . . . . .
 . . . . . . . . . .
 . . . c . . . . . .
 . . . . . . . . . .
 . . . . . . . . . .
 . . . . . . . . . .
 . . . . . . . . . .
 . . . . . s . . . .
 . . . . . . . . . .
 . . . . . . . . . .
```
