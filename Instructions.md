1. Créez un composant card

- créez un fichier Card.tsx
- créez une fonction nommé "Card"
- voici un exemple de ce que pourrai retourner votre composant,
n'hésitez pas à le changer si vous le voulez.
<div
    style={{
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "200px",
    margin: "8px",
    alignItems: "center",
    }}
>
    <span>The Walking Dead</span>
    <img
    style={{ borderRadius: "0.2vw" }}
    src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:210/q:75/https://bleedingcool.com/wp-content/uploads/2022/09/TWD11_KA_HZ-2.jpg"
    alt=""
    width="300"
    height="200"
    />
</div>
- exportez votre composant Card

2. Dans le fichier App.tsx:

- importez le composant Card
- remplacez le JSX existant, en instanciant votre composant Card
