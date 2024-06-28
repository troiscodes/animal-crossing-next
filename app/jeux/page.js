import Games from "@/components/games";
import GamesSection from "@/components/games-section";

export default function Home() {
  return (
    <main className=" md: min-h-full w-full ">
      <GamesSection
        boiteJeux={"/jeu-gamecube.png"}
        texteJeux={
          "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
        }
        imageJeux={"/jeu-gamecube-image.png"}
        idJeux={"gamecube"}
        hImage={"h-[277px]"}
      ></GamesSection>

      <GamesSection
        boiteJeux={"/jeu-ds.png"}
        texteJeux={
          "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
        }
        imageJeux={"/jeu-ds-image.png"}
        idJeux={"ds"}
        hImage={"h-[275.01px]"}
      ></GamesSection>

      <GamesSection
        boiteJeux={"/jeu-wii.png"}
        texteJeux={
          "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
        }
        imageJeux={"/jeu-wii-image.png"}
        idJeux={"wii"}
        hImage={"h-[195.45px]"}
      ></GamesSection>

      <GamesSection
        boiteJeux={"/jeu-3ds.png"}
        texteJeux={
          "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
        }
        imageJeux={"/jeu-3ds-image.png"}
        idJeux={"3ds"}
        hImage={"h-[221px]"}
      ></GamesSection>

      <GamesSection
        boiteJeux={"/jeu-switch.png"}
        texteJeux={
          "Dans ce jeu, le joueur emménage dans un village de campagne habité par des animaux aux caractères bien distincts. Il introduit un nouveau type de jeu dérivé du collect them up : le but est de rendre tous les habitants heureux, de créer des vêtements et des décorations et de collectionner des objets (meubles, tapis, vêtements, fossiles…). Le jeu se déroule en temps réel, les minutes et les heures étant synchronisées avec la vie réelle (heure de la console), ainsi que les jours, les mois et les saisons. Il est également possible de fêter Noël et tous les autres événements avec les villageois. "
        }
        imageJeux={"/jeu-switch-image.png"}
        idJeux={"switch"}
        hImage={"h-[206.83px]"}
      ></GamesSection>
    </main>
  );
}
