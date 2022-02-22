export async function getStaticProps() {
  const num = Math.random();

  return {
    props: { num },
  };
}

export default function Estatico1({ num }) {
  return (
    <div>
      <h1>Estático #01</h1>
      <h2>{num}</h2>
    </div>
  );
}
