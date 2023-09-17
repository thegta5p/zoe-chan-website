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
        <Link href="/">
          <h1>Who is Zoe?</h1>
        </Link>
      </div>  
    
    </>
    
  )
}