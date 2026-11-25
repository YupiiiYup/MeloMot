// =========================================================
// MÉLOMOT — Base de données des mots & chansons françaises
// Pour agrandir la base plus tard : il suffit de coller un
// nouveau bloc MOTS_DATA.push(...) tout en bas du fichier !
// =========================================================

const MOTS_DATA = [];

// --- BLOC 1/3 : FACILE (60 mots — 180 chansons) ---
MOTS_DATA.push(
  {
    word: "Amour",
    diff: "facile",
    songs: [
      { title: "Hymne à l'amour", artist: "Édith Piaf", tag: "Classique" },
      { title: "L'Amour brille sous les étoiles", artist: "Le Roi Lion", tag: "Disney" },
      { title: "L'Amour à la machine", artist: "Alain Souchon", tag: "Années 90" }
    ]
  },
  {
    word: "Nuit",
    diff: "facile",
    songs: [
      { title: "Nuit de folie", artist: "Début de Soirée", tag: "Années 80" },
      { title: "Nuits d'Arabie", artist: "Aladdin", tag: "Disney" },
      { title: "La Nuit je mens", artist: "Alain Bashung", tag: "Classique" }
    ]
  },
  {
    word: "Soleil",
    diff: "facile",
    songs: [
      { title: "Au soleil", artist: "Jenifer", tag: "Années 2000" },
      { title: "Le Soleil donne", artist: "Laurent Voulzy", tag: "Années 80" },
      { title: "Sous le soleil de Bodega", artist: "Les Négresses Vertes", tag: "Années 90" }
    ]
  },
  {
    word: "Cœur",
    diff: "facile",
    songs: [
      { title: "Cœur", artist: "Clara Luciani", tag: "Pop récente" },
      { title: "Mon cœur, mon amour", artist: "Anaïs", tag: "Années 2000" },
      { title: "Cœur de loup", artist: "Philippe Lafontaine", tag: "Années 80" }
    ]
  },
  {
    word: "Temps",
    diff: "facile",
    songs: [
      { title: "Le Temps de l'amour", artist: "Françoise Hardy", tag: "Classique" },
      { title: "Le Temps", artist: "Tayc", tag: "Pop / R&B" },
      { title: "Avec le temps", artist: "Léo Ferré", tag: "Classique" }
    ]
  },
  {
    word: "Rêve",
    diff: "facile",
    songs: [
      { title: "Ce rêve bleu", artist: "Aladdin", tag: "Disney" },
      { title: "Je te promets", artist: "Johnny Hallyday", tag: "Années 80" },
      { title: "Dommage", artist: "Bigflo & Oli", tag: "Rap / Pop" }
    ]
  },
  {
    word: "Vie",
    diff: "facile",
    songs: [
      { title: "La Vie en rose", artist: "Édith Piaf", tag: "Classique" },
      { title: "L'Histoire de la vie", artist: "Le Roi Lion", tag: "Disney" },
      { title: "C'est la vie", artist: "Khaled", tag: "Années 2010" }
    ]
  },
  {
    word: "Étoile",
    diff: "facile",
    songs: [
      { title: "Un peu plus près des étoiles", artist: "Gold", tag: "Années 80" },
      { title: "Quand on prie la bonne étoile", artist: "Pinocchio", tag: "Disney" },
      { title: "Les Étoiles filantes", artist: "Les Cowboys Fringants", tag: "Années 2000" }
    ]
  },
  {
    word: "Mer",
    diff: "facile",
    songs: [
      { title: "La Mer", artist: "Charles Trenet", tag: "Classique" },
      { title: "Dès que le vent soufflera", artist: "Renaud", tag: "Années 80" },
      { title: "Santiano", artist: "Hugues Aufray", tag: "Classique" }
    ]
  },
  {
    word: "Ciel",
    diff: "facile",
    songs: [
      { title: "Ciel", artist: "Gims", tag: "Pop récente" },
      { title: "Sous le ciel de Paris", artist: "Édith Piaf", tag: "Classique" },
      { title: "Le Ciel, le soleil et la mer", artist: "François Deguelt", tag: "Classique" }
    ]
  },
  {
    word: "Feu",
    diff: "facile",
    songs: [
      { title: "Allumer le feu", artist: "Johnny Hallyday", tag: "Années 90" },
      { title: "Le Feu", artist: "Kendji Girac & Vianney", tag: "Pop récente" },
      { title: "Feu de bois", artist: "Damso", tag: "Rap" }
    ]
  },
  {
    word: "Pluie",
    diff: "facile",
    songs: [
      { title: "La Pluie", artist: "Orelsan & Stromae", tag: "Rap / Pop" },
      { title: "La Pluie fait des claquettes", artist: "Claude Nougaro", tag: "Classique" },
      { title: "Écoute la pluie", artist: "Sylvie Vartan", tag: "Classique" }
    ]
  },
  {
    word: "Vent",
    diff: "facile",
    songs: [
      { title: "Sous le vent", artist: "Garou & Céline Dion", tag: "Années 2000" },
      { title: "Je t'emmène au vent", artist: "Louise Attaque", tag: "Années 90" },
      { title: "L'Air du vent", artist: "Pocahontas", tag: "Disney" }
    ]
  },
  {
    word: "Danse",
    diff: "facile",
    songs: [
      { title: "Dernière danse", artist: "Indila", tag: "Années 2010" },
      { title: "Alors on danse", artist: "Stromae", tag: "Années 2010" },
      { title: "Dernière danse", artist: "Kyo", tag: "Années 2000" }
    ]
  },
  {
    word: "Yeux",
    diff: "facile",
    songs: [
      { title: "Les Yeux revolver", artist: "Marc Lavoine", tag: "Années 80" },
      { title: "Les Yeux de la mama", artist: "Kendji Girac", tag: "Années 2010" },
      { title: "Dans les yeux d'Émilie", artist: "Joe Dassin", tag: "Classique" }
    ]
  },
  {
    word: "Main",
    diff: "facile",
    songs: [
      { title: "Ta main", artist: "Grégoire", tag: "Années 2000" },
      { title: "Prendre un enfant", artist: "Yves Duteil", tag: "Classique" },
      { title: "Les Mains d'or", artist: "Bernard Lavilliers", tag: "Années 2000" }
    ]
  },
  {
    word: "Jour",
    diff: "facile",
    songs: [
      { title: "Un jour mon prince viendra", artist: "Blanche-Neige", tag: "Disney" },
      { title: "Le Premier Jour (du reste de ta vie)", artist: "Étienne Daho", tag: "Années 90" },
      { title: "Un jour au mauvais endroit", artist: "Calogero", tag: "Années 2010" }
    ]
  },
  {
    word: "Chanson",
    diff: "facile",
    songs: [
      { title: "La Chanson des restos", artist: "Les Enfoirés", tag: "Années 80" },
      { title: "Une chanson douce", artist: "Henri Salvador", tag: "Classique" },
      { title: "Chanson sur ma drôle de vie", artist: "Véronique Sanson", tag: "Classique" }
    ]
  },
  {
    word: "Roi",
    diff: "facile",
    songs: [
      { title: "Je voudrais déjà être roi", artist: "Le Roi Lion", tag: "Disney" },
      { title: "Les Rois du monde", artist: "Roméo & Juliette", tag: "Comédie musicale" },
      { title: "Roi", artist: "Bilal Hassani", tag: "Pop récente" }
    ]
  },
  {
    word: "Monde",
    diff: "facile",
    songs: [
      { title: "Un autre monde", artist: "Téléphone", tag: "Rock 80s" },
      { title: "Tout le monde veut devenir un cat", artist: "Les Aristochats", tag: "Disney" },
      { title: "Tout le monde", artist: "Zazie", tag: "Années 90" }
    ]
  },
  {
    word: "Terre",
    diff: "facile",
    songs: [
      { title: "La Terre est ronde", artist: "Orelsan", tag: "Rap" },
      { title: "Les Lacs du Connemara", artist: "Michel Sardou", tag: "Années 80" },
      { title: "Terre promise", artist: "Johnny Hallyday", tag: "Classique" }
    ]
  },
  {
    word: "Lune",
    diff: "facile",
    songs: [
      { title: "J'ai demandé à la lune", artist: "Indochine", tag: "Années 2000" },
      { title: "Lune", artist: "Notre-Dame de Paris", tag: "Comédie musicale" },
      { title: "Au clair de la lune", artist: "Chanson traditionnelle", tag: "Classique" }
    ]
  },
  {
    word: "Fleur",
    diff: "facile",
    songs: [
      { title: "Le Pouvoir des fleurs", artist: "Laurent Voulzy", tag: "Années 90" },
      { title: "Des fleurs pour Salinger", artist: "Indochine", tag: "Années 90" },
      { title: "Fleur de saison", artist: "Émilie Simon", tag: "Années 2000" }
    ]
  },
  {
    word: "Musique",
    diff: "facile",
    songs: [
      { title: "La Musique que j'aime", artist: "Johnny Hallyday", tag: "Classique" },
      { title: "Musique", artist: "France Gall", tag: "Années 70" },
      { title: "La Musique", artist: "Nicoletta", tag: "Classique" }
    ]
  },
  {
    word: "Rouge",
    diff: "facile",
    songs: [
      { title: "En rouge et noir", artist: "Jeanne Mas", tag: "Années 80" },
      { title: "Rouge", artist: "Fredericks Goldman Jones", tag: "Années 90" },
      { title: "Rouge-gorge", artist: "Renaud", tag: "Années 80" }
    ]
  },
  {
    word: "Bleu",
    diff: "facile",
    songs: [
      { title: "Les Mots bleus", artist: "Christophe", tag: "Classique" },
      { title: "Le Bleu lumière", artist: "Vaiana", tag: "Disney" },
      { title: "Bleu comme toi", artist: "Étienne Daho", tag: "Années 80" }
    ]
  },
  {
    word: "Noir",
    diff: "facile",
    songs: [
      { title: "Noir c'est noir", artist: "Johnny Hallyday", tag: "Classique" },
      { title: "L'Aigle noir", artist: "Barbara", tag: "Classique" },
      { title: "Noir et Blanc", artist: "Bernard Lavilliers", tag: "Années 80" }
    ]
  },
  {
    word: "Rose",
    diff: "facile",
    songs: [
      { title: "Mon amie la rose", artist: "Françoise Hardy", tag: "Classique" },
      { title: "L'Important c'est la rose", artist: "Gilbert Bécaud", tag: "Classique" },
      { title: "Les Roses blanches", artist: "Berthe Sylva", tag: "Classique" }
    ]
  },
  {
    word: "Paris",
    diff: "facile",
    songs: [
      { title: "Les Champs-Élysées", artist: "Joe Dassin", tag: "Classique" },
      { title: "Paris-Seychelles", artist: "Julien Doré", tag: "Années 2010" },
      { title: "Il est cinq heures, Paris s'éveille", artist: "Jacques Dutronc", tag: "Classique" }
    ]
  },
  {
    word: "Été",
    diff: "facile",
    songs: [
      { title: "L'Été indien", artist: "Joe Dassin", tag: "Classique" },
      { title: "En été", artist: "La Reine des Neiges", tag: "Disney" },
      { title: "Un été français", artist: "Indochine", tag: "Pop / Rock" }
    ]
  },
  {
    word: "Neige",
    diff: "facile",
    songs: [
      { title: "Tombe la neige", artist: "Salvatore Adamo", tag: "Classique" },
      { title: "Je voudrais un bonhomme de neige", artist: "La Reine des Neiges", tag: "Disney" },
      { title: "Étoile des neiges", artist: "Line Renaud", tag: "Classique" }
    ]
  },
  {
    word: "Maman",
    diff: "facile",
    songs: [
      { title: "Maman", artist: "Louane", tag: "Pop récente" },
      { title: "Maman a tort", artist: "Mylène Farmer", tag: "Années 80" },
      { title: "Allô Maman Bobo", artist: "Alain Souchon", tag: "Années 70" }
    ]
  },
  {
    word: "Papa",
    diff: "facile",
    songs: [
      { title: "Papaoutai", artist: "Stromae", tag: "Années 2010" },
      { title: "Papa", artist: "Bigflo & Oli", tag: "Rap / Pop" },
      { title: "Papa chanteur", artist: "Jean-Luc Lahaye", tag: "Années 80" }
    ]
  },
  {
    word: "Enfant",
    diff: "facile",
    songs: [
      { title: "Comme les enfants", artist: "Cœur de Pirate", tag: "Années 2000" },
      { title: "Enfant du soleil", artist: "Les Mystérieuses Cités d'Or", tag: "Dessin animé" },
      { title: "Les Enfants du Pirée", artist: "Dalida", tag: "Classique" }
    ]
  },
  {
    word: "Femme",
    diff: "facile",
    songs: [
      { title: "Femme libérée", artist: "Cookie Dingler", tag: "Années 80" },
      { title: "Femme Like U", artist: "K.Maro", tag: "Années 2000" },
      { title: "Femme de couleur", artist: "Shy'm", tag: "Années 2000" }
    ]
  },
  {
    word: "Homme",
    diff: "facile",
    songs: [
      { title: "Comme un homme", artist: "Mulan", tag: "Disney" },
      { title: "Un homme heureux", artist: "William Sheller", tag: "Années 90" },
      { title: "Si j'étais un homme", artist: "Diane Tell", tag: "Années 80" }
    ]
  },
  {
    word: "Fille",
    diff: "facile",
    songs: [
      { title: "Les Filles d'aujourd'hui", artist: "Vianney & Joyce Jonathan", tag: "Pop récente" },
      { title: "Tous les garçons et les filles", artist: "Françoise Hardy", tag: "Classique" },
      { title: "Les Filles du bord de mer", artist: "Salvatore Adamo", tag: "Classique" }
    ]
  },
  {
    word: "Garçon",
    diff: "facile",
    songs: [
      { title: "Garçon", artist: "Koxie", tag: "Années 2000" },
      { title: "Un garçon pas comme les autres", artist: "Starmania", tag: "Comédie musicale" },
      { title: "Les Garçons de la plage", artist: "Elsa", tag: "Années 80" }
    ]
  },
  {
    word: "Ami",
    diff: "facile",
    songs: [
      { title: "Je suis ton meilleur ami", artist: "Aladdin", tag: "Disney" },
      { title: "L'Ami Caouette", artist: "Serge Gainsbourg", tag: "Classique" },
      { title: "Le Chant des partisans", artist: "Anna Marly", tag: "Classique" }
    ]
  },
  {
    word: "Chanter",
    diff: "facile",
    songs: [
      { title: "Chanter", artist: "Florent Pagny", tag: "Années 90" },
      { title: "En chantant", artist: "Michel Sardou", tag: "Classique" },
      { title: "Chanter pour ceux qui sont loin de chez eux", artist: "Michel Berger", tag: "Années 80" }
    ]
  },
  {
    word: "Aimer",
    diff: "facile",
    songs: [
      { title: "Aimer", artist: "Roméo & Juliette", tag: "Comédie musicale" },
      { title: "S'il suffisait d'aimer", artist: "Céline Dion", tag: "Années 90" },
      { title: "Je vais t'aimer", artist: "Michel Sardou", tag: "Classique" }
    ]
  },
  {
    word: "Partir",
    diff: "facile",
    songs: [
      { title: "Partir un jour", artist: "2Be3", tag: "Années 90" },
      { title: "Partir là-bas", artist: "La Petite Sirène", tag: "Disney" },
      { title: "Partir", artist: "Julien Clerc", tag: "Années 70" }
    ]
  },
  {
    word: "Voler",
    diff: "facile",
    songs: [
      { title: "Je vole", artist: "Louane", tag: "Pop" },
      { title: "Vole", artist: "Céline Dion", tag: "Années 90" },
      { title: "Voler de nuit", artist: "Calogero", tag: "Années 2010" }
    ]
  },
  {
    word: "Tomber",
    diff: "facile",
    songs: [
      { title: "Tomber la chemise", artist: "Zebda", tag: "Années 90" },
      { title: "Tomber pour elle", artist: "Pascal Obispo", tag: "Années 90" },
      { title: "Tomber", artist: "Gérald de Palmas", tag: "Années 2000" }
    ]
  },
  {
    word: "Vivre",
    diff: "facile",
    songs: [
      { title: "Vivre pour le meilleur", artist: "Johnny Hallyday", tag: "Années 90" },
      { title: "Vivre ou survivre", artist: "Daniel Balavoine", tag: "Années 80" },
      { title: "Vivre", artist: "Notre-Dame de Paris", tag: "Comédie musicale" }
    ]
  },
  {
    word: "Mourir",
    diff: "facile",
    songs: [
      { title: "Je l'aime à mourir", artist: "Francis Cabrel", tag: "Classique" },
      { title: "Mourir sur scène", artist: "Dalida", tag: "Années 80" },
      { title: "Mourir demain", artist: "Natasha St-Pier & Pascal Obispo", tag: "Années 2000" }
    ]
  },
  {
    word: "Maison",
    diff: "facile",
    songs: [
      { title: "San Francisco", artist: "Maxime Le Forestier", tag: "Classique" },
      { title: "La Maison où j'ai grandi", artist: "Françoise Hardy", tag: "Classique" },
      { title: "La Maison près de la fontaine", artist: "Nino Ferrer", tag: "Classique" }
    ]
  },
  {
    word: "Rue",
    diff: "facile",
    songs: [
      { title: "Rue de la Paix", artist: "Zazie", tag: "Années 2000" },
      { title: "Rue des Étoiles", artist: "Grégoire", tag: "Années 2000" },
      { title: "La Rue des Blancs-Manteaux", artist: "Juliette Gréco", tag: "Classique" }
    ]
  },
  {
    word: "Route",
    diff: "facile",
    songs: [
      { title: "Sur ma route", artist: "Black M", tag: "Années 2010" },
      { title: "Sur la route", artist: "Gérald de Palmas", tag: "Années 90" },
      { title: "Sur la route de Memphis", artist: "Eddy Mitchell", tag: "Classique" }
    ]
  },
  {
    word: "Chemin",
    diff: "facile",
    songs: [
      { title: "Le Chemin", artist: "Kyo & Sita", tag: "Années 2000" },
      { title: "Le Chemin de papa", artist: "Joe Dassin", tag: "Classique" },
      { title: "Les Chemins de traverse", artist: "Francis Cabrel", tag: "Années 70" }
    ]
  },
  {
    word: "Train",
    diff: "facile",
    songs: [
      { title: "Le Petit Train", artist: "Les Rita Mitsouko", tag: "Années 80" },
      { title: "J'entends siffler le train", artist: "Richard Anthony", tag: "Classique" },
      { title: "Les Voyages en train", artist: "Grand Corps Malade", tag: "Slam / Pop" }
    ]
  },
  {
    word: "Minuit",
    diff: "facile",
    songs: [
      { title: "Les Démons de minuit", artist: "Émile & Images", tag: "Années 80" },
      { title: "Cendrillon", artist: "Téléphone", tag: "Rock 80s" },
      { title: "Minuit, chrétiens", artist: "Chant traditionnel", tag: "Classique" }
    ]
  },
  {
    word: "Matin",
    diff: "facile",
    songs: [
      { title: "Ce matin va être une pure soirée", artist: "Fatal Bazooka", tag: "Années 2000" },
      { title: "Les Matins d'hiver", artist: "Gérard Lenorman", tag: "Classique" },
      { title: "Un matin", artist: "Jean-Jacques Goldman", tag: "Années 80" }
    ]
  },
  {
    word: "Soir",
    diff: "facile",
    songs: [
      { title: "Ce soir ne sors pas", artist: "Lacrim & Gims", tag: "Rap" },
      { title: "Ce soir je serai la plus belle", artist: "Sylvie Vartan", tag: "Classique" },
      { title: "Un soir de pluie", artist: "Blues Trottoir", tag: "Années 80" }
    ]
  },
  {
    word: "Demain",
    diff: "facile",
    songs: [
      { title: "Demain", artist: "Bigflo & Oli & Petit Biscuit", tag: "Pop / Rap" },
      { title: "Demain sera parfait", artist: "Jean-Louis Aubert", tag: "Rock" },
      { title: "Demain c'est loin", artist: "IAM", tag: "Rap 90s" }
    ]
  },
  {
    word: "Toujours",
    diff: "facile",
    songs: [
      { title: "Toujours debout", artist: "Renaud", tag: "Chanson" },
      { title: "Toujours là pour toi", artist: "2Be3", tag: "Années 90" },
      { title: "Toujours un coin qui me rappelle", artist: "Eddy Mitchell", tag: "Classique" }
    ]
  },
  {
    word: "Liberté",
    diff: "facile",
    songs: [
      { title: "Libérée, délivrée", artist: "La Reine des Neiges", tag: "Disney" },
      { title: "Ma liberté de penser", artist: "Florent Pagny", tag: "Années 2000" },
      { title: "Ma liberté", artist: "Georges Moustaki", tag: "Classique" }
    ]
  },
  {
    word: "Bonheur",
    diff: "facile",
    songs: [
      { title: "Il est où le bonheur", artist: "Christophe Maé", tag: "Années 2010" },
      { title: "Le Bonheur", artist: "Joyce Jonathan", tag: "Années 2010" },
      { title: "Le Bonheur", artist: "Berry", tag: "Années 2000" }
    ]
  },
  {
    word: "Fête",
    diff: "facile",
    songs: [
      { title: "C'est la fête", artist: "La Belle et la Bête", tag: "Disney" },
      { title: "Fête de trop", artist: "Eddy de Pretto", tag: "Pop récente" },
      { title: "La Fête", artist: "Amir", tag: "Pop récente" }
    ]
  },
  {
    word: "Paradis",
    diff: "facile",
    songs: [
      { title: "Paradis blanc", artist: "Michel Berger", tag: "Années 90" },
      { title: "Paradis", artist: "Orelsan", tag: "Rap / Pop" },
      { title: "Paradis", artist: "Alain Chamfort", tag: "Années 80" }
    ]
  }
);
// --- BLOC 2/3 : MOYEN (60 mots — 180 chansons) ---
MOTS_DATA.push(
  {
    word: "Ombre",
    diff: "moyen",
    songs: [
      { title: "À l'ombre", artist: "Mylène Farmer", tag: "Pop" },
      { title: "L'Ombre et la Lumière", artist: "Calogero & Grand Corps Malade", tag: "Pop / Slam" },
      { title: "Ne me quitte pas", artist: "Jacques Brel", tag: "Classique" }
    ]
  },
  {
    word: "Lumière",
    diff: "moyen",
    songs: [
      { title: "Ville de lumière", artist: "Gold", tag: "Années 80" },
      { title: "Éteins la lumière", artist: "Axel Bauer", tag: "Rock 90s" },
      { title: "Je veux y croire", artist: "Raiponce", tag: "Disney" }
    ]
  },
  {
    word: "Voyage",
    diff: "moyen",
    songs: [
      { title: "Voyage, voyage", artist: "Desireless", tag: "Années 80" },
      { title: "Voyage en Italie", artist: "Lilicub", tag: "Années 90" },
      { title: "L'Invitation au voyage", artist: "Léo Ferré", tag: "Classique" }
    ]
  },
  {
    word: "Vacances",
    diff: "moyen",
    songs: [
      { title: "Vacances j'oublie tout", artist: "Élégance", tag: "Années 80" },
      { title: "Les Vacances au bord de la mer", artist: "Michel Jonasz", tag: "Années 70" },
      { title: "C'est les vacances", artist: "Ilona Mitrecey", tag: "Années 2000" }
    ]
  },
  {
    word: "Or",
    diff: "moyen",
    songs: [
      { title: "De l'or", artist: "Vitaa & Slimane", tag: "Pop récente" },
      { title: "Or noir", artist: "Kaaris", tag: "Rap" },
      { title: "L'Or de nos vies", artist: "Fight Aids", tag: "Années 2000" }
    ]
  },
  {
    word: "Argent",
    diff: "moyen",
    songs: [
      { title: "Argent trop cher", artist: "Téléphone", tag: "Rock 80s" },
      { title: "Je veux", artist: "Zaz", tag: "Pop" },
      { title: "L'Argent ne fait pas le bonheur", artist: "Les Parisiennes", tag: "Années 60" }
    ]
  },
  {
    word: "Rivière",
    diff: "moyen",
    songs: [
      { title: "La Rivière de notre enfance", artist: "Garou & Michel Sardou", tag: "Années 2000" },
      { title: "Au détour de la rivière", artist: "Pocahontas", tag: "Disney" },
      { title: "Pleurer des rivières", artist: "Viktor Lazlo", tag: "Années 80" }
    ]
  },
  {
    word: "Eau",
    diff: "moyen",
    songs: [
      { title: "Couleur menthe à l'eau", artist: "Eddy Mitchell", tag: "Années 80" },
      { title: "L'Eau à la bouche", artist: "Serge Gainsbourg", tag: "Classique" },
      { title: "L'Eau vive", artist: "Guy Béart", tag: "Classique" }
    ]
  },
  {
    word: "Oiseau",
    diff: "moyen",
    songs: [
      { title: "Les Oiseaux", artist: "Pomme", tag: "Pop récente" },
      { title: "La Cage aux oiseaux", artist: "Pierre Perret", tag: "Classique" },
      { title: "L'Oiseau et l'Enfant", artist: "Marie Myriam", tag: "Classique" }
    ]
  },
  {
    word: "Ange",
    diff: "moyen",
    songs: [
      { title: "Un ange à ma table", artist: "Indochine", tag: "Rock / Pop" },
      { title: "Un ange frappe à ma porte", artist: "Natasha St-Pier", tag: "Années 2000" },
      { title: "Mon ange", artist: "Nolwenn Leroy", tag: "Années 2000" }
    ]
  },
  {
    word: "Lettre",
    diff: "moyen",
    songs: [
      { title: "Lettre à une femme", artist: "Ninho", tag: "Rap" },
      { title: "Lettre à France", artist: "Michel Polnareff", tag: "Classique" },
      { title: "La Lettre", artist: "Renan Luce", tag: "Années 2000" }
    ]
  },
  {
    word: "Souvenir",
    diff: "moyen",
    songs: [
      { title: "À nos souvenirs", artist: "Trois Cafés Gourmands", tag: "Pop" },
      { title: "Souvenirs, souvenirs", artist: "Johnny Hallyday", tag: "Classique" },
      { title: "Le Souvenir de ce jour", artist: "Jenifer", tag: "Années 2000" }
    ]
  },
  {
    word: "Oublier",
    diff: "moyen",
    songs: [
      { title: "Tout oublier", artist: "Angèle & Roméo Elvis", tag: "Pop récente" },
      { title: "Ne m'oublie pas", artist: "Coco", tag: "Disney" },
      { title: "J'ai oublié de vivre", artist: "Johnny Hallyday", tag: "Classique" }
    ]
  },
  {
    word: "Frère",
    diff: "moyen",
    songs: [
      { title: "Deux frères", artist: "PNL", tag: "Rap" },
      { title: "Mon frère", artist: "Maxime Le Forestier", tag: "Classique" },
      { title: "Mon frère", artist: "Les Dix Commandements", tag: "Comédie musicale" }
    ]
  },
  {
    word: "Sœur",
    diff: "moyen",
    songs: [
      { title: "Ma sœur", artist: "Vitaa", tag: "Pop / R&B" },
      { title: "Ma sœur", artist: "Clara Luciani", tag: "Pop récente" },
      { title: "Petite sœur", artist: "Lââm", tag: "Années 2000" }
    ]
  },
  {
    word: "Reine",
    diff: "moyen",
    songs: [
      { title: "Ta reine", artist: "Angèle", tag: "Pop récente" },
      { title: "Reine", artist: "Dadju", tag: "Pop / R&B" },
      { title: "Reine de Saba", artist: "Michel Laurent", tag: "Classique" }
    ]
  },
  {
    word: "Prince",
    diff: "moyen",
    songs: [
      { title: "Prince Ali", artist: "Aladdin", tag: "Disney" },
      { title: "Les Princes de la ville", artist: "113", tag: "Rap 2000" },
      { title: "Le Prince des villes", artist: "Michel Berger", tag: "Années 80" }
    ]
  },
  {
    word: "Place",
    diff: "moyen",
    songs: [
      { title: "Place des Grands Hommes", artist: "Patrick Bruel", tag: "Années 80" },
      { title: "À ma place", artist: "Axel Bauer & Zazie", tag: "Années 2000" },
      { title: "La Place du fantôme", artist: "La Grande Sophie", tag: "Pop" }
    ]
  },
  {
    word: "Pont",
    diff: "moyen",
    songs: [
      { title: "Le Pont Mirabeau", artist: "Marc Lavoine", tag: "Années 2000" },
      { title: "Sous les ponts de Paris", artist: "Lucienne Delyle", tag: "Classique" },
      { title: "Sur le pont d'Avignon", artist: "Chanson traditionnelle", tag: "Classique" }
    ]
  },
  {
    word: "Mur",
    diff: "moyen",
    songs: [
      { title: "Les Murs de poussière", artist: "Francis Cabrel", tag: "Classique" },
      { title: "Les Murs porteurs", artist: "Florent Pagny", tag: "Années 2010" },
      { title: "Le Mur du son", artist: "Willy Denzey", tag: "Années 2000" }
    ]
  },
  {
    word: "Mot",
    diff: "moyen",
    songs: [
      { title: "Les Mots", artist: "Mylène Farmer & Seal", tag: "Années 2000" },
      { title: "Des mots qui résonnent", artist: "Jenifer", tag: "Années 2000" },
      { title: "Il a les mots", artist: "Sheryfa Luna", tag: "Années 2000" }
    ]
  },
  {
    word: "Parler",
    diff: "moyen",
    songs: [
      { title: "Parle-moi", artist: "Isabelle Boulay", tag: "Années 2000" },
      { title: "Parle à ma main", artist: "Fatal Bazooka & Yelle", tag: "Années 2000" },
      { title: "Parler à mon père", artist: "Céline Dion", tag: "Années 2010" }
    ]
  },
  {
    word: "Attendre",
    diff: "moyen",
    songs: [
      { title: "J'attendrai", artist: "Dalida", tag: "Classique" },
      { title: "J'attends l'amour", artist: "Jenifer", tag: "Années 2000" },
      { title: "En attendant ses pas", artist: "Céline Dion", tag: "Années 90" }
    ]
  },
  {
    word: "Courir",
    diff: "moyen",
    songs: [
      { title: "Je cours", artist: "Kyo", tag: "Années 2000" },
      { title: "La Maladie d'amour", artist: "Michel Sardou", tag: "Classique" },
      { title: "Cours vite", artist: "Silmarils", tag: "Rock 90s" }
    ]
  },
  {
    word: "Respirer",
    diff: "moyen",
    songs: [
      { title: "Respire", artist: "Mickey 3D", tag: "Années 2000" },
      { title: "Respire encore", artist: "Clara Luciani", tag: "Pop récente" },
      { title: "Respire", artist: "Gaël Faye", tag: "Rap / Slam" }
    ]
  },
  {
    word: "Changer",
    diff: "moyen",
    songs: [
      { title: "Changer", artist: "Gims", tag: "Années 2010" },
      { title: "On ne change pas", artist: "Céline Dion", tag: "Années 90" },
      { title: "Je n'ai pas changé", artist: "Julio Iglesias", tag: "Classique" }
    ]
  },
  {
    word: "Encore",
    diff: "moyen",
    songs: [
      { title: "Encore et encore", artist: "Francis Cabrel", tag: "Années 80" },
      { title: "Pour que tu m'aimes encore", artist: "Céline Dion", tag: "Années 90" },
      { title: "Encore un matin", artist: "Jean-Jacques Goldman", tag: "Années 80" }
    ]
  },
  {
    word: "Jamais",
    diff: "moyen",
    songs: [
      { title: "Sapés comme jamais", artist: "Gims", tag: "Années 2010" },
      { title: "Jamais content", artist: "Alain Souchon", tag: "Années 70" },
      { title: "À jamais", artist: "Mylène Farmer", tag: "Pop récente" }
    ]
  },
  {
    word: "Seul",
    diff: "moyen",
    songs: [
      { title: "Seul", artist: "Garou", tag: "Années 2000" },
      { title: "Seul au monde", artist: "Corneille", tag: "Années 2000" },
      { title: "Hélène", artist: "Roch Voisine", tag: "Années 80" }
    ]
  },
  {
    word: "Belle",
    diff: "moyen",
    songs: [
      { title: "Belle", artist: "Notre-Dame de Paris", tag: "Comédie musicale" },
      { title: "Belle-Île-en-Mer, Marie-Galante", artist: "Laurent Voulzy", tag: "Années 80" },
      { title: "La Plus Belle pour aller danser", artist: "Sylvie Vartan", tag: "Classique" }
    ]
  },
  {
    word: "Mal",
    diff: "moyen",
    songs: [
      { title: "Ça fait mal", artist: "Christophe Maé", tag: "Années 2000" },
      { title: "Fais-moi mal Johnny", artist: "Magali Noël", tag: "Classique" },
      { title: "Le Mal de vivre", artist: "Barbara", tag: "Classique" }
    ]
  },
  {
    word: "Guerre",
    diff: "moyen",
    songs: [
      { title: "Le Sud", artist: "Nino Ferrer", tag: "Classique" },
      { title: "La Guerre de 14-18", artist: "Georges Brassens", tag: "Classique" },
      { title: "Le Déserteur", artist: "Boris Vian", tag: "Classique" }
    ]
  },
  {
    word: "Héros",
    diff: "moyen",
    songs: [
      { title: "Je ne suis pas un héros", artist: "Daniel Balavoine", tag: "Années 80" },
      { title: "De zéro en héros", artist: "Hercule", tag: "Disney" },
      { title: "Héros", artist: "Shy'm", tag: "Pop" }
    ]
  },
  {
    word: "Histoire",
    diff: "moyen",
    songs: [
      { title: "Histoire éternelle", artist: "La Belle et la Bête", tag: "Disney" },
      { title: "Une belle histoire", artist: "Michel Fugain", tag: "Classique" },
      { title: "Histoire d'un amour", artist: "Dalida", tag: "Classique" }
    ]
  },
  {
    word: "Dimanche",
    diff: "moyen",
    songs: [
      { title: "Dimanche à Bamako", artist: "Amadou & Mariam", tag: "Années 2000" },
      { title: "Dimanche à Orly", artist: "Gilbert Bécaud", tag: "Classique" },
      { title: "Un dimanche de janvier", artist: "Johnny Hallyday", tag: "Années 2010" }
    ]
  },
  {
    word: "Valse",
    diff: "moyen",
    songs: [
      { title: "La Valse à mille temps", artist: "Jacques Brel", tag: "Classique" },
      { title: "La Valse des lilas", artist: "Michel Legrand", tag: "Classique" },
      { title: "La Dernière Valse", artist: "Mireille Mathieu", tag: "Classique" }
    ]
  },
  {
    word: "Café",
    diff: "moyen",
    songs: [
      { title: "Couleur café", artist: "Serge Gainsbourg", tag: "Classique" },
      { title: "Le Café", artist: "Oldelaf", tag: "Années 2010" },
      { title: "Au café des délices", artist: "Patrick Bruel", tag: "Années 2000" }
    ]
  },
  {
    word: "Chocolat",
    diff: "moyen",
    songs: [
      { title: "La Femme chocolat", artist: "Olivia Ruiz", tag: "Années 2000" },
      { title: "Chocolat", artist: "Lartiste & Awa Imani", tag: "Pop / Rap" },
      { title: "Chocolat", artist: "Roméo Elvis", tag: "Rap" }
    ]
  },
  {
    word: "Vin",
    diff: "moyen",
    songs: [
      { title: "Le Petit Vin blanc", artist: "Lina Margy", tag: "Classique" },
      { title: "Le Vin de l'assassin", artist: "Léo Ferré", tag: "Classique" },
      { title: "Chevaliers de la Table Ronde", artist: "Chanson traditionnelle", tag: "Classique" }
    ]
  },
  {
    word: "Loup",
    diff: "moyen",
    songs: [
      { title: "Le Loup, la Biche et le Chevalier", artist: "Henri Salvador", tag: "Classique" },
      { title: "Qui a peur du grand méchant loup", artist: "Les Trois Petits Cochons", tag: "Disney" },
      { title: "Promenons-nous dans les bois", artist: "Chanson traditionnelle", tag: "Classique" }
    ]
  },
  {
    word: "Chat",
    diff: "moyen",
    songs: [
      { title: "Le Chat", artist: "Pow Wow", tag: "Années 90" },
      { title: "Le Chat botté", artist: "Thomas Fersen", tag: "Chanson" },
      { title: "C'est la mère Michel", artist: "Chanson traditionnelle", tag: "Classique" }
    ]
  },
  {
    word: "Papillon",
    diff: "moyen",
    songs: [
      { title: "L'Effet papillon", artist: "Bénabar", tag: "Années 2000" },
      { title: "Papillon de lumière", artist: "Cindy Sander", tag: "Années 2000" },
      { title: "Papillon", artist: "Lara Fabian", tag: "Pop" }
    ]
  },
  {
    word: "Arbre",
    diff: "moyen",
    songs: [
      { title: "Aux arbres citoyens", artist: "Yannick Noah", tag: "Années 2000" },
      { title: "Auprès de mon arbre", artist: "Georges Brassens", tag: "Classique" },
      { title: "Comme un arbre", artist: "Maxime Le Forestier", tag: "Classique" }
    ]
  },
  {
    word: "Jardin",
    diff: "moyen",
    songs: [
      { title: "Jardin d'hiver", artist: "Henri Salvador", tag: "Années 2000" },
      { title: "Le Jardin extraordinaire", artist: "Charles Trenet", tag: "Classique" },
      { title: "Les Jardins du ciel", artist: "Jairo", tag: "Classique" }
    ]
  },
  {
    word: "Métro",
    diff: "moyen",
    songs: [
      { title: "Métro (c'est trop)", artist: "Téléphone", tag: "Rock 80s" },
      { title: "Le Poinçonneur des Lilas", artist: "Serge Gainsbourg", tag: "Classique" },
      { title: "Métro", artist: "Java", tag: "Années 2000" }
    ]
  },
  {
    word: "Larme",
    diff: "moyen",
    songs: [
      { title: "Ne retiens pas tes larmes", artist: "Amel Bent", tag: "Années 2000" },
      { title: "Des larmes", artist: "Mylène Farmer", tag: "Pop récente" },
      { title: "Une larme aux nuages", artist: "Salvatore Adamo", tag: "Classique" }
    ]
  },
  {
    word: "Jouer",
    diff: "moyen",
    songs: [
      { title: "Il jouait du piano debout", artist: "France Gall", tag: "Années 80" },
      { title: "Je joue de la musique", artist: "Calogero", tag: "Pop" },
      { title: "Joue pas", artist: "François Feldman & Joniece Jamison", tag: "Années 80" }
    ]
  },
  {
    word: "Marcher",
    diff: "moyen",
    songs: [
      { title: "Je marche seul", artist: "Jean-Jacques Goldman", tag: "Années 80" },
      { title: "Marche à l'ombre", artist: "Renaud", tag: "Années 80" },
      { title: "Ces bottes sont faites pour marcher", artist: "Eileen", tag: "Années 60" }
    ]
  },
  {
    word: "Tourner",
    diff: "moyen",
    songs: [
      { title: "Tourner dans le vide", artist: "Indila", tag: "Années 2010" },
      { title: "Tourner les serviettes", artist: "Patrick Sébastien", tag: "Années 2000" },
      { title: "La Roue tourne", artist: "Zaho", tag: "Années 2000" }
    ]
  },
  {
    word: "Donner",
    diff: "moyen",
    songs: [
      { title: "Je te donne", artist: "Jean-Jacques Goldman & Michael Jones", tag: "Années 80" },
      { title: "Je te le donne", artist: "Vitaa & Slimane", tag: "Pop récente" },
      { title: "Donnez-moi", artist: "Les Frangines", tag: "Pop récente" }
    ]
  },
  {
    word: "Savoir",
    diff: "moyen",
    songs: [
      { title: "Savoir aimer", artist: "Florent Pagny", tag: "Années 90" },
      { title: "Je sais pas", artist: "Céline Dion", tag: "Années 90" },
      { title: "Je sais", artist: "Shy'm", tag: "Années 2010" }
    ]
  },
  {
    word: "Voir",
    diff: "moyen",
    songs: [
      { title: "Je veux te voir", artist: "Yelle", tag: "Années 2000" },
      { title: "Tu verras", artist: "Claude Nougaro", tag: "Classique" },
      { title: "J'ai vu", artist: "Niagara", tag: "Années 90" }
    ]
  },
  {
    word: "Perdre",
    diff: "moyen",
    songs: [
      { title: "À corps perdu", artist: "Grégory Lemarchal", tag: "Années 2000" },
      { title: "Perdu d'avance", artist: "Orelsan", tag: "Rap" },
      { title: "J'ai perdu le do de ma clarinette", artist: "Chanson traditionnelle", tag: "Classique" }
    ]
  },
  {
    word: "Prendre",
    diff: "moyen",
    songs: [
      { title: "Prendre l'air", artist: "Shy'm", tag: "Années 2010" },
      { title: "Prends ma main", artist: "Vitaa & Gims", tag: "Pop / R&B" },
      { title: "Prendre racine", artist: "Calogero", tag: "Années 2000" }
    ]
  },
  {
    word: "Laisser",
    diff: "moyen",
    songs: [
      { title: "Laisse-moi t'aimer", artist: "Mike Brant", tag: "Classique" },
      { title: "Laisse tomber les filles", artist: "France Gall", tag: "Classique" },
      { title: "Laisse béton", artist: "Renaud", tag: "Années 70" }
    ]
  },
  {
    word: "Bout",
    diff: "moyen",
    songs: [
      { title: "Au bout de mes rêves", artist: "Jean-Jacques Goldman", tag: "Années 80" },
      { title: "Jusqu'au bout", artist: "Amel Bent & Imen Es", tag: "Pop récente" },
      { title: "Emmenez-moi", artist: "Charles Aznavour", tag: "Classique" }
    ]
  },
  {
    word: "Haut",
    diff: "moyen",
    songs: [
      { title: "Haut les mains", artist: "Ottawan", tag: "Années 80" },
      { title: "Un peu plus haut, un peu plus loin", artist: "Ginette Reno", tag: "Classique" },
      { title: "Là-haut", artist: "Chimène Badi", tag: "Pop récente" }
    ]
  },
  {
    word: "Loin",
    diff: "moyen",
    songs: [
      { title: "Loin", artist: "Gims", tag: "Pop / Rap" },
      { title: "Loin du froid de décembre", artist: "Anastasia", tag: "Dessin animé" },
      { title: "Si loin de vous", artist: "Nâdiya", tag: "Années 2000" }
    ]
  },
  {
    word: "Reste",
    diff: "moyen",
    songs: [
      { title: "Le Reste", artist: "Clara Luciani", tag: "Pop récente" },
      { title: "Reste", artist: "Gims & Sting", tag: "Pop" },
      { title: "Que reste-t-il de nos amours ?", artist: "Charles Trenet", tag: "Classique" }
    ]
  },
  {
    word: "Jeune",
    diff: "moyen",
    songs: [
      { title: "Jeune Demoiselle", artist: "Diam's", tag: "Années 2000" },
      { title: "Jeune et con", artist: "Saez", tag: "Rock 2000" },
      { title: "Jeune (j'ai envie)", artist: "Louane", tag: "Pop" }
    ]
  }
);