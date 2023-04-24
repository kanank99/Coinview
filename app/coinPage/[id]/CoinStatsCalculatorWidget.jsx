'use client'

// CoinStatsCalculatorWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function CoinStatsCalculatorWidget(props) {
const container = useRef();

useEffect(() => {
const script = document.createElement("script");
script.src = "https://static.coinstats.app/widgets/coin-calculator-widget.js";
script.async = true;

const coinStatsElement = document.createElement("coin-stats-calculator-widget");
coinStatsElement.setAttribute("type", "invest");
coinStatsElement.setAttribute("per-coin-price", "2");
coinStatsElement.setAttribute("invest-amount", "1000");
coinStatsElement.setAttribute("coin-id", "ripple");
coinStatsElement.setAttribute("locale", "en");
coinStatsElement.setAttribute("currency", "USD");
coinStatsElement.setAttribute("is-editable", "true");
coinStatsElement.setAttribute("selection-color", "#FFA959");
coinStatsElement.setAttribute("text-color", "#FFFFFF");
coinStatsElement.setAttribute("background", "#1C1B1B");
coinStatsElement.setAttribute("border-color", "rgba(255,255,255,0.15)");
coinStatsElement.setAttribute("font", "Roboto, Arial, Helvetica");

container.current.appendChild(script);
container.current.appendChild(coinStatsElement);

}, []);

return (
<div className="coinstats-calculator-widget-container" ref={container}></div>
);
}

export default memo(CoinStatsCalculatorWidget);