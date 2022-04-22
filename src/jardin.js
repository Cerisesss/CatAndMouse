const grille = require('./m_afficher_grille.js');
const readLineSync = require('readline-sync');

let x;
let y;
let i;
let j;
let c_x;
let c_y;
let s_x;
let s_y;

x = readLineSync.question(Combien de ligne : );
x = Number(x);

y = readLineSync.question(Combien de colonnes : );
y = Number(y);

c_x = readLineSync.question(Coordonnées x du chat : );
c_x = Number(c_x);

c_y = readLineSync.question(Coordonnées y du chat : );
c_y = Number(c_y);

s_x = readLineSync.question(Coordonnées x de la souris : );
s_x = Number(s_x);

s_y = readLineSync.question(Coordonnées y de la souris : );
s_y = Number(s_y);

grille(x, y, c_x, c_y, s_x, s_y);
