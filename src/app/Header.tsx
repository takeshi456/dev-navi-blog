import Link from "next/link";
import { css } from "../../styled-system/css";

const Header = () => {
  return (
    <header
      className={css({
        margin: "10px",
        borderBottomWidth: "1px",
        borderColor: "red",
      })}
    >
      <nav className="p-2">
        <Link href="/">能力開発navi</Link>
      </nav>
    </header>
  );
};

export default Header;
