1. Modifiez le composant « SearchField »

- Utilisez le hook d’état « useState » avec une valeur par défaut
- Connectez la valeur de l’état à votre input
- Créez une fonction qui va changer la valeur de votre état dès que l’utilisateur écrit quelque chose:

`(event: React.ChangeEvent<HTMLInputElement>) => { // changer la valeur de votre état local // vous récupérez la valeur de ce que l'utilisateur tape via "event.target.value" };`
