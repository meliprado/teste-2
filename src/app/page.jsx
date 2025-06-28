import Header from '../components/Header';
export default function Home({ message }) {
  return (
    <>
      <Header />
      <h1>Meu site</h1>
    </>
  );
}
export async function props() {
  return {
    props: {
      message: 'Bem-vindo ao mini site!',
    },
  };
}