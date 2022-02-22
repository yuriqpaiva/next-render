export function getStaticProps() {
  return {
    revalidate: 7,
    // A cada 7 segundos vamos montar a página estática novamente
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
