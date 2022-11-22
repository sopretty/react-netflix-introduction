1. Modifier le composant App.tsx

- Créer un hook d’état nommé « series » avec comme valeur initiale la constante « initialSeries » importé du fichier « series.ts »
- Créer une constante nommé « filteredSeries » qui va filtrer les séries en fonction de la valeur de « searchFieldValue »
- Modifier le JSX pour parcourir « filteredSeries » (grâce au map) dans la div qui contient « className=cards »
- Pour chaque élément parcourus, vous devrez retourner un composant « Card », preciser sa « key » et ses propriétés « imageSrc » & « title »
