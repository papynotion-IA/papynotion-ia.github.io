export type Resource = { title:string; description:string; type:string; price:string; url:string; featured?:boolean };
export const resources: Resource[] = [
  { title:'Le kit de démarrage IA', description:'12 prompts simples, une méthode en 3 étapes et une checklist pour obtenir de meilleurs premiers résultats.', type:'Guide PDF', price:'Gratuit', url:'https://papyai.gumroad.com', featured:true },
  { title:'50 prompts visuels qui racontent', description:'Un pack Midjourney pensé pour créer des images avec une intention, pas seulement un joli style.', type:'Pack de prompts', price:'Pay what you want', url:'https://papyai.gumroad.com' },
  { title:'Atelier créatif — Notion', description:'Un espace minimal pour capturer, faire mûrir et publier tes idées sans te perdre dans les propriétés.', type:'Template Notion', price:'Gratuit', url:'https://papyai.gumroad.com' },
  { title:'Le grand labo des accroches', description:'120 structures d’accroches, des exemples et un système pour trouver ta propre voix.', type:'Pack de prompts', price:'12 €', url:'https://papyai.gumroad.com', featured:true },
  { title:'Créer avec Suno sans tourner en rond', description:'Un guide concret pour diriger le style, les paroles et les variations de tes morceaux.', type:'Guide PDF', price:'9 €', url:'https://papyai.gumroad.com' },
  { title:'Calendrier contenu anti-panique', description:'Un modèle souple pour planifier quatre semaines sans transformer ta créativité en tableur triste.', type:'Template Notion', price:'5 €', url:'https://papyai.gumroad.com' },
];
