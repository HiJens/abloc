// Next.js
import Head from "next/head";

// Layout
import { BaseLayout } from "../layouts";

// Partials
import { About, Cases, Contact, Formules, Hero, Services } from "../partials";

// Components
import { Arrow, Facebook, Linkedin, Instagram, Cycling, Running, OneOnOne, Corporate } from "../components";

const Home = () => {
  return (
    <BaseLayout>
      <Hero 
        isMain={true}
        title="Find the <span>perfect balance</span> between your body and well-being"
        text='“Een gezonde geest in een gezond lichaam”  is waarschijnlijk een gezegde die je al veel gehoord hebt, maar er wordt vaak geen belang aan gehecht. Bij A’bloc is dit een van de kernwaardes, wat mij onderscheid van de rest.'
        buttons={[
          {
            title: "Neem contact op",
            href: "#contact",
            color: "blue",
            icon: Arrow,
          },
          {
            title: "Bekijk referenties",
            href: "#referenties",
            color: "grey"
          }
        ]}
        img="/assets/images/cutout.png"
        hasScrollDown={true}
        socials={[
          {
            href: "https://www.facebook.com/abloccoaching",
            icon: Facebook,
          },
          {
            href: "https://www.instagram.com/abloccoaching/",
            icon: Instagram,
          },
          {
            href: "https://www.linkedin.com/in/arnaud-deleu-a51b46182/",
            icon: Linkedin,
          },
        ]}
      />

      <About 
        img="/assets/images/about.jpeg"
        title="All about <span>evolution</span>"
        content={{
          title: "Why A'Bloc?",
          text: "Opzoek naar de perfecte balans tussen lichaam en geest? Vanuit mijn kennis en ervaring in duurzame gedragsverandering en wielrennen breng ik deze twee werelden samen om optimaal te presteren op en naast de fiets of het bureau.",
          button: {
            title: "Bekijk meer",
            href: "#diensten",
            icon: Arrow
          }
        }}
      />

      <Services 
        title="Get to know <span>the services</span>"
        text="Ontdek het hier"
        services={[
          {
            icon: Cycling,
            title: "Wielrennen",
            text: "Ben je opzoek naar net dat tikkeltje extra, die het verschil tussen winnen en verliezen kan maken. Dan ben je bij A’bloc coaching aan het juiste adres want naast het fysieke aspect is het mentale aspect van een even groot belang."
          },
          {
            icon: Running,
            title: "Lopen",
            text: "Lukt het jou niet om gestructureerd jouw trainingen in te plannen of weet je gewoon weg niet waar te beginnen, dan help ik jou graag verder met het halen van jou doel."
          },
          {
            icon: OneOnOne,
            title: "1 op 1 coaching",
            text: "Denk je nou het fysieke vind ik minder belangrijk, maar heb je nood aan een goed gesprek voor, of na uw wedstrijd dan kan je bij mij ook steeds terecht voor mentale begeleiding en coaching."
          },
          {
            icon: Corporate,
            title: "Corporate wellbeing",
            text: "Ben je met je bedrijf of organisatie opzoek naar die goede sfeer op het werk of wil je net dat tikkeltje extra naambekendheid van een gezond bedrijf dan zoeken wij samen naar de oplossing om je organisatie duurzaam te veranderen met gezonde omzetcijfers. Alles verloopt in een nauwe samenwerking met jullie als organisatie."
          }
        ]}
      />

      <Formules
        title="<span>The formules</span> explained"
        text="Lukt het jou niet om gestructureerd jouw trainingen in te plannen of weet je gewoon weg niet waar te beginnen, dan help ik jou graag verder met het halen van jou doel."
        formules={[
          {
            title: "Voor beginner",
            text: "Physical coaching",
            showPrice: true,
            price: "€ 80,00"
          },
          {
            title: "Voor experts",
            text: "Mental & physical coaching",
            showPrice: true,
            price: "€ 140,00"
          },
          {
            title: "Voor bedrijven",
            showPrice: false,
          }
        ]}
      />

      <Cases 
          title="Some <span>references</span>"
          references={[
            {
              name: "Sven Steyaert",
              avatar: "/assets/images/sven.jpeg",
              function: "Klant bij A'Bloc",
              title: "Niet twijfelen, doen!",
              text: "Ik heb altijd geworsteld met structuur in mijn trainingen. De wil was er wel, maar de motivatie niet altijd. Te koud, te nat, geen zin…Arnaud werkt een haalbaar maar uitdagend weekschema uit, waarin per dag vermeld wordt wat het doel van de training is en waar je moet op letten. Als het in mijn agenda staat, heb ik geen excuus om niet te trainen… En het werkt! Ik sport nu ongeveer 8 à 12 uur per week, basisconditie is enorm verbeterd, mijn weerstand is verhoogd en ik voel me goed in mijn vel. Niet twijfelen, doen!"
            },
            {
              name: "Nourdine Ranson",
              avatar: "/assets/images/nourdine.jpeg",
              function: "Renner bij Asfra Racing Team",
              title: "Top trainer!",
              text: "Arnaud is een top trainer en weet waar hij het over heeft. Ikzelf heb dankzij Arnaud heel veel progressie kunnen maken en heb het plezier teruggevonden in het wielrennen."
            },
          ]}
      />

      <Contact 
        title="<span>Contact me</span> right away"
        socials={[
          {
            href: "https://www.facebook.com/abloccoaching",
            icon: Facebook,
          },
          {
            href: "https://www.instagram.com/abloccoaching/",
            icon: Instagram,
          },
          {
            href: "https://www.linkedin.com/in/arnaud-deleu-a51b46182/",
            icon: Linkedin,
          },
        ]}      
      />
    </BaseLayout>
  );
};

export default Home;