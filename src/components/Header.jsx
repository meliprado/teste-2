import Link from 'next/link';

export default function Header() {
  return(
    <>
    <header>
        <div>
          &copy;2025 MeuSite. Todos os direitos reservados.
        </div>
      <nav>
        <li><Link href="/Home">Home</Link></li>
        <li><Link href="/Galeria">Galeria</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </nav>
    </header>
    </>
  );
}