import Feed from '@/components/feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Entdecke & Teile
        <br className="may-md:hidden" />
        <span className="orange_gradient text-center">AI - Prompts.</span>
      </h1>
      <p className="desc text-center">
        Promptopia ist ein Open-Source-KI-Prompting-Tool für die moderne Welt,
        mit dem man kreative Prompts entdecken, erstellen und teilen kann.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
