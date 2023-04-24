'use client'
// make this SSR by moving useSearchParams to another component where it will be used
import styles from './coinpage.module.css'
import CoinStatsCalculatorWidget from './CoinStatsCalculatorWidget'
import TradingViewWidget from './TradingViewWidget'
import { useSearchParams } from 'next/navigation';

export default async function Page({ params }) {

    const searchParams = useSearchParams();
    const search = searchParams.get('rank');

    return <div className={styles.container}>
        <div className={styles.containerContent}>
            <TradingViewWidget coin={params.id}/>
            <CoinStatsCalculatorWidget />
            <p>{search}</p>
        </div>
    </div>
}

