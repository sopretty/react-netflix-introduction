1. Modifiez le composant « Card.tsx »

- Ajoutez des propriétés les propriétés « title » et « imageSrc » au composant « Card »
- [Typescript]: ces deux propriétés sont de type « string »
- Modifiez le JSX pour que ces propriétés soient prises en compte pour créer votre « Card »
- [Aide]: exemple de JSX pour le composant Card.tsx
  <div className="card">
      <span style={{ color: "#e5e5e5" }}>{title}</span>
      <img
        style={{ borderRadius: "0.2vw" }}
        src={imageSrc}
        alt=""
        width="300"
        height="200"
      />
    </div>`

2. Modifiez le JSX du composant « App.tsx » pour ajouter les propriétés désirées
  
- Les propriétés passées peuvent être écrites directement dans le JSX
- Pour la propriété « imageSrc », n’hésitez pas à trouver en ligne une url d’image de votre film ou de votre série préférée