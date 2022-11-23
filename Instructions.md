0. Ouvrir un deuxième terminal et lancer la commande `npm i`

- Lancer ensuite la commande `npm run http-server`
  Il vous sera utile pour faire tourner un serveur local qui va vous servir le fichier contenant les séries.

1. Modifier le composant App.tsx

- Ajouter un `useState` qui permettra de gérer l'état "loading"
- Ajouter un `useEffect` qui fetch les séries sur `http://localhost:3001/series.json`
- Une fois la donnée récupérée, il faudra changer l'état des séries et l'état du loading
- Dans le JSX, il faudra afficher le composant `Loading` lorsque l'état `loading` est à `true`
- Dans le JSX, il faudra cacher le composant `NoResult` lorsque l'état `loading` est à `true`
- Dans le JSX, il faudra cacher la div qui contient toutes les cartes lorsque l'état `loading` est à `true`
