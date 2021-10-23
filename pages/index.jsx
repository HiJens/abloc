// Next.js
import Head from "next/head";

// Layout
import { BaseLayout } from "../layouts";

// Partials
import { Hero } from "../partials";

// Components
import { Arrow } from "../components";

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
      />
    </BaseLayout>
  );
};

export default Home;