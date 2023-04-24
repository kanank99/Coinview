'use client'

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget(props) {
  const contariner = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "CRYPTO:${props.coin}USD|1M"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": 500,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "line",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "backgroundColor": "rgba(19, 23, 34, 0)",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 3,
          "lineType": 0,
          "upColor": "#22ab94",
          "downColor": "#f7525f"
        }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" style={{ height: '60%' }} ref={contariner} >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
