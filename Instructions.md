0. Ouvrer un deuxième terminal et lancer la commande `npm run http-server` 
Il vous sera utile pour faire tourner un serveur local qui va vous servir le fichier contenant les séries.

1. Modifier le composant App.tsx

- Ajouter un `useEffect` qui fetch les séries sur `http://localhost:3001/series.json`