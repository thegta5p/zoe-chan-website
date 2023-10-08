import Styles from "./layout.module.css";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const SiteName = "Zoe-Chan";

export const siteTitle = "Zoe-Chan Website";

export default function MainLayout({ children, home }) {
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{SiteName}</h1>
          </>
        ) : (
          <>
            <h1 className={utilStyles.heading2Xl}>
              <Link href="/">{SiteName}</Link>
            </h1>
          </>
        )}
      </header>
    </div>
  );
}
