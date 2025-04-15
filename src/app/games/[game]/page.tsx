type gameImageData = {
  id: number;
  src: string;
  alt: string;
};

type gameData = {
  id: string;
  title: string;
  linkGooglePlay?: string;
  linkAppStore?: string;
  imagesData: gameImageData[];
};

export default async function GamePage({
  params,
}: {
  params: Promise<{ game: string }>;
}) {
  const { game } = await params;

  return (
    <article>
      <section>
        <h1>{game}</h1>
      </section>
      <section>
        {game === "cybercats" ? (
          <p>CyberCats are just THAT special</p>
        ) : (
          <p>Generic info about {game}</p>
        )}
      </section>
    </article>
  );
}
