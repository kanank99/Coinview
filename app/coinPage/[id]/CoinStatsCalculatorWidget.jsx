'use client'

// CoinStatsCalculatorWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './coinpage.module.css';

function CoinStatsCalculatorWidget() {

    const container = useRef();

    const searchParams = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.coinstats.app/widgets/coin-calculator-widget.js";
        script.async = true;

        const coinStatsElement = document.createElement("coin-stats-calculator-widget");
        coinStatsElement.setAttribute("type", "invest");
        coinStatsElement.setAttribute("per-coin-price", "1");
        coinStatsElement.setAttribute("invest-amount", "1000");
        coinStatsElement.setAttribute("coin-id", `${name}`);
        coinStatsElement.setAttribute("locale", "en");
        coinStatsElement.setAttribute("currency", "USD");
        coinStatsElement.setAttribute("is-editable", "true");
        coinStatsElement.setAttribute("width", "100dvw");
        coinStatsElement.setAttribute("max-width", "100%");
        coinStatsElement.setAttribute("selection-color", "rgb(86, 67, 204);");
        coinStatsElement.setAttribute("text-color", "#FFFFFF");
        coinStatsElement.setAttribute("background", "#1C1B1B");
        coinStatsElement.setAttribute("border-color", "rgba(255,255,255,0.15)");
        coinStatsElement.setAttribute("font", "Arial, Helvetica");

        container.current.appendChild(script);
        container.current.appendChild(coinStatsElement);

    }, []);

    return (
    <div className={styles.calculator} ref={container}></div>
    );
    }

export default memo(CoinStatsCalculatorWidget);