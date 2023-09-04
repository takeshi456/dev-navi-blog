import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b py-3 bg-teal-600">
      <nav className="p-2 pl-10">
        <Link href="/" className="font-bold text-gray-100">
          能力開発navi
        </Link>
      </nav>
    </header>
  );
};

export default Header;
