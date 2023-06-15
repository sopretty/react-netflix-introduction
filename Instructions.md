1. Modifiez le composant « App »
- Déplacez le hook d’état du composant « SearchField » (n’hésitez pas à la renommer)
- Créez une fonction qui va mettre à jour l’état local (n’hésitez pas à la renommer)
- Modifiez le JSX pour passer la valeur de l’état local et la fonction qui met à jour l’état local au composant « NavBar »

2. Modifiez le composant « Navbar »
- Modifiez les propriétés du composant pour prendre en compte la fonction qui lui est passée et la valeur de l’état
- Modifiez son JSX pour passer les bonnes propriétés au composant « SearchField »

3. Modifiez le composant « SearchField »
- Supprimez le hook d’état
- Modifiez les propriétés du composant pour prendre en compte la fonction qui lui passée et la valeur de l’état
- Modifiez le JSX pour passer cette fonction et la valeur de l’état

[Typescript]:  Voici le type de la fonction que vous devez passer à votre composant `onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;`