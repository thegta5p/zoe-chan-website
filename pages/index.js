import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import MainLayout from "../components/mainLayout";
import utilStyles from '../styles/utils.module.css';
import Image from "next/image";
import Link from 'next/link'
import HomeStyle from '../styles/HomePage.module.css'

export default function Home() {
  return(
    <>
      <MainLayout home>

      </MainLayout>
      <div className={HomeStyle.HomeLinks}>
        <div className={HomeStyle.SubLinks}>
          <Link href="/ZoeLore/LorePage">
            <Image priority
            src="/images/BaseZoe.PNG"
            height={300}
            width={300}
            />
          </Link>
          <Link href="/ZoeLore/LorePage">
            <h1 className="Bold text-2xl px-10">Who is Zoe?</h1>
          </Link>
        </div>
      </div>  
    
    </>
    
  )
}