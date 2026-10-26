/**
 * AT-CC // AGENTIC TRADING COMMAND CONSOLE & CHIEF EXECUTOR
 * Dual-Mode Engine: Real-Time Trading vs Historical Backtesting,
 * Swarm Pre-Trade Sweep, Autonomous Execution, and AI Training Journal.
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. ACOUSTIC FEEDBACK SYNTHESIZER (Pure Web Audio API, Zero Assets)
  // =========================================================================
  class SoundEngine {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    playTick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.01);
        gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.01);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.01);
      } catch (e) {}
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(580, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.018);
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.018);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.018);
      } catch (e) {}
    }

    playAlert() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.setValueAtTime(440, now + 0.06);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.12);
      } catch (e) {}
    }

    playFillChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.04);
          gain.gain.setValueAtTime(0.04, now + idx * 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.04 + 0.16);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.04);
          osc.stop(now + idx * 0.04 + 0.16);
        });
      } catch (e) {}
    }
  }

  const audio = new SoundEngine();

  // =========================================================================
  // 2. TICKER UNIVERSE & QUANTITATIVE ASSET PROFILES
  // =========================================================================
  const TICKER_PROFILES = {
    NVDA: {
      name: "NVIDIA CORPORATION",
      basePrice: 128.45,
      pe: 28.4,
      volatility: 38.2,
      rsi: 64.2,
      beta: 1.68,
      volume: 48200000,
      trend: "BULLISH EXPANSION",
      newsPulse: "MODERATE POSITIVE",
      catalyst: "BLACKWELL EXPANSION",
      socScore: 76,
      socVol: "+18.4%",
      var99: 2.14,
      conviction: 78.4,
      bullTarget: 146.20,
      bearStop: 124.50,
      dcfSpread: "+14.2% DISCOUNT",
      description: "Data center accelerator dominance with accelerating Blackwell hyperscaler backlogs."
    },
    AAPL: {
      name: "APPLE INC.",
      basePrice: 232.10,
      pe: 33.1,
      volatility: 21.4,
      rsi: 54.8,
      beta: 0.98,
      volume: 52100000,
      trend: "CONSOLIDATION",
      newsPulse: "NEUTRAL",
      catalyst: "SERVICES MIX REPORT",
      socScore: 61,
      socVol: "-4.2%",
      var99: 1.45,
      conviction: 59.2,
      bullTarget: 248.00,
      bearStop: 226.50,
      dcfSpread: "-2.1% FAIR",
      description: "Steady high-margin Services expansion offset by elongated hardware replacement cycles."
    },
    TSLA: {
      name: "TESLA INC.",
      basePrice: 248.60,
      pe: 64.5,
      volatility: 54.0,
      rsi: 71.3,
      beta: 2.12,
      volume: 78900000,
      trend: "PARABOLIC EXTENSION",
      newsPulse: "HIGH VOLATILITY",
      catalyst: "CYBERCAB PROTOCOL TEST",
      socScore: 88,
      socVol: "+42.8%",
      var99: 3.85,
      conviction: 68.5,
      bullTarget: 282.00,
      bearStop: 235.00,
      dcfSpread: "-18.5% PREMIUM",
      description: "Autonomous driving milestones priced in; margin compression monitored by Risk Sentinel."
    },
    MSFT: {
      name: "MICROSOFT CORP",
      basePrice: 426.30,
      pe: 31.8,
      volatility: 22.8,
      rsi: 58.1,
      beta: 1.14,
      volume: 24600000,
      trend: "STEADY ACCUMULATION",
      newsPulse: "STRONG POSITIVE",
      catalyst: "AZURE CAPEX REINVESTMENT",
      socScore: 69,
      socVol: "+8.1%",
      var99: 1.62,
      conviction: 82.6,
      bullTarget: 465.00,
      bearStop: 416.00,
      dcfSpread: "+9.8% DISCOUNT",
      description: "Enterprise software cash flow fortress funding sustained high-ROIC cloud infrastructure."
    },
    AMD: {
      name: "ADVANCED MICRO DEVICES",
      basePrice: 156.40,
      pe: 42.1,
      volatility: 46.5,
      rsi: 60.5,
      beta: 1.84,
      volume: 41200000,
      trend: "BREAKOUT RANGE",
      newsPulse: "POSITIVE",
      catalyst: "MI350X BENCHMARKS",
      socScore: 74,
      socVol: "+21.5%",
      var99: 2.95,
      conviction: 72.1,
      bullTarget: 178.50,
      bearStop: 148.20,
      dcfSpread: "+12.4% DISCOUNT",
      description: "MI300 ramp trajectory capturing hyperscaler multi-sourcing demand allocations."
    },
    SPY: {
      name: "SPDR S&P 500 ETF TRUST",
      basePrice: 584.20,
      pe: 26.2,
      volatility: 14.2,
      rsi: 56.4,
      beta: 1.00,
      volume: 64100000,
      trend: "UPTREND CHANNEL",
      newsPulse: "MACRO RESILIENT",
      catalyst: "FOMC RATE DECISION",
      socScore: 54,
      socVol: "+1.2%",
      var99: 0.95,
      conviction: 66.0,
      bullTarget: 610.00,
      bearStop: 574.00,
      dcfSpread: "+3.2% FAIR",
      description: "Broad-market breadth sustained by mega-cap profitability and balanced labor telemetry."
    },
    "BTC/USD": {
      name: "BITCOIN / US DOLLAR",
      basePrice: 67450.00,
      pe: 0,
      volatility: 62.0,
      rsi: 68.7,
      beta: 2.85,
      volume: 31200000000,
      trend: "MONETARY EXPANSION",
      newsPulse: "ETF INFLOW DOMINANCE",
      catalyst: "GLOBAL LIQUIDITY CYCLES",
      socScore: 92,
      socVol: "+58.0%",
      var99: 4.80,
      conviction: 84.0,
      bullTarget: 78000.00,
      bearStop: 63800.00,
      dcfSpread: "SCARCITY MODEL",
      description: "Institutional ETF custody accumulation continuing through supply halving constraint."
    },
    "ETH/USD": {
      name: "ETHEREUM / US DOLLAR",
      basePrice: 2640.00,
      pe: 0,
      volatility: 58.5,
      rsi: 52.3,
      beta: 2.45,
      volume: 16500000000,
      trend: "RANGE COMPRESSION",
      newsPulse: "NEUTRAL",
      catalyst: "L2 GAS CONSUMPTION",
      socScore: 68,
      socVol: "+12.4%",
      var99: 4.20,
      conviction: 61.5,
      bullTarget: 3100.00,
      bearStop: 2480.00,
      dcfSpread: "GAS YIELD MODEL",
      description: "Layer-2 transaction displacement exerting short-term fee compression on Mainnet."
    }
  };

  // =========================================================================
  // 3. MASTER APPLICATION STATE
  // =========================================================================
  const state = {
    currentTicker: "NVDA",
    currentPrice: 128.45,
    previousPrice: 128.45,
    openPrice: 124.20,
    highPrice: 129.50,
    lowPrice: 123.80,
    volume24h: 48200000,
    autoTickInterval: 3000,
    autoTickTimer: null,
    isFocusMode: false,
    sessionSeconds: 0,
    sessionTimer: null,
    timeframe: "5m",
    indicators: {
      sma: true,
      ema: true,
      bb: false,
      volume: true
    },
    candles: [],

    // DUAL OPERATIONAL MODE
    operationalMode: "trading", // "trading" or "backtest"
    backtestHorizon: "90d",

    // Demo Account State
    account: {
      cash: 78420.00,
      initialCash: 100000.00,
      userAllocPct: 2.0
    },

    // Autonomous Chief Executor
    autonomousBot: {
      active: false,
      lastDecisionNonce: "0x8F4A..7C12",
      action: "BUY",
      conviction: 78.4,
      reasoning: "Blackwell backlog visibility and DCF undervaluation (+14.2%) outweigh multi-quarter multiple expansion concerns. Stop strictly anchored at $124.50.",
      adaptedPolicyRules: [
        "Policy Rule 1: Prioritize DCF discount > 10% before taking long positions",
        "Policy Rule 2: Force 50% partial trim when RSI reaches 72.0 on 5M timeframe",
        "Policy Rule 3: Enforce invalidation stop <= 3.2% from entry across all equity buckets"
      ]
    },

    // Positions & Ledger
    openPositions: [
      {
        id: "pos_1",
        ticker: "NVDA",
        side: "LONG",
        shares: 120,
        entryPrice: 122.50,
        currentPrice: 128.45,
        stopLoss: 124.50,
        target: 146.20,
        timestamp: "2026-10-26 08:30:15"
      },
      {
        id: "pos_2",
        ticker: "MSFT",
        side: "LONG",
        shares: 25,
        entryPrice: 421.10,
        currentPrice: 426.30,
        stopLoss: 416.00,
        target: 465.00,
        timestamp: "2026-10-25 14:15:00"
      }
    ],

    // Downloadable Trade & Training Journal (for other AIs)
    tradeJournal: [
      {
        tradeId: "TRD_0042",
        timestamp: "2026-10-25 15:42:00",
        ticker: "NVDA",
        timeframe: "5M",
        side: "LONG",
        shares: 100,
        entryPrice: 121.50,
        exitPrice: 127.80,
        pnlDollar: 630.00,
        pnlPct: 5.18,
        swarmTelemetry: {
          bullConviction: 82.0,
          bearRiskScore: 18.0,
          dcfDiscountPct: 14.2,
          rsiMomentum: 61.4,
          newsSentiment: "POSITIVE",
          monteCarloVar99: 2.14
        },
        decisionThesis: "Breakout above 20-period moving average confirmed by SEC 10-Q gross margin stability (74.8%).",
        selfCritiqueRetrospective: "Execution entry was accurate; exited 1.2% before theoretical peak due to intraday RSI threshold, locking in risk-adjusted gain.",
        policyAdaptation: "Retained current trailing stop formula (2.8 * ATR)."
      },
      {
        tradeId: "TRD_0041",
        timestamp: "2026-10-24 11:20:12",
        ticker: "TSLA",
        timeframe: "15M",
        side: "SHORT",
        shares: 40,
        entryPrice: 254.10,
        exitPrice: 247.20,
        pnlDollar: 276.00,
        pnlPct: 2.71,
        swarmTelemetry: {
          bullConviction: 41.0,
          bearRiskScore: 68.0,
          dcfDiscountPct: -18.5,
          rsiMomentum: 76.5,
          newsSentiment: "VOLATILE",
          monteCarloVar99: 3.85
        },
        decisionThesis: "RSI extreme 76.5 with Bear Researcher warning on delivery multiple expansion.",
        selfCritiqueRetrospective: "Short was profitable. However, initial stop was placed too tight (1.8%), causing minor re-entry friction.",
        policyAdaptation: "Widened short invalidation buffer from 1.8% to 2.4% on high-beta names."
      }
    ],

    // Backtest Cumulative Stats
    backtestStats: {
      pnl: 41850.20,
      pnlPct: 24.8,
      winRate: 68.4,
      totalTrades: 57,
      wins: 39,
      sharpe: 2.41,
      maxDD: -4.18
    },

    // Chat
    chat: {
      targetScope: "all",
      messages: []
    },

    // Agent Details
    agentDetails: {
      bull: { id: "[RES-BULL]", name: "Bullish Thesis Researcher", model: "Tier: Deep-Thinking", promptContext: "Synthesize fundamental catalysts and forward leverage.", activeTrace: "Blackwell chip allocation visibility extends through FY27.", tools: [], memory: "Upside thesis valid above $124.50.", conviction: 78.4 },
      bear: { id: "[RES-BEAR]", name: "Bearish Counter Researcher", model: "Tier: Deep-Thinking", promptContext: "Challenge bull extrapolations and probe multiples.", activeTrace: "Top 4 hyperscalers represent 44% of revenue.", tools: [], memory: "Invalidation stop strictly demanded at $124.50.", conviction: 21.6 },
      fundamentals: { id: "[QUANT-FND]", name: "Fundamental Valuation Analyst", model: "Tier: Deep-Thinking", promptContext: "Compute free cash flow yield and DCF intrinsic fair value.", activeTrace: "DCF fair value establishes lower bound at $146.20.", tools: [], memory: "DCF discount evaluated at +14.2%.", conviction: 82.0 },
      market: { id: "[ALPHA-MKT]", name: "Technical & Momentum Analyst", model: "Tier: Quick-Thinking", promptContext: "Compute moving averages and RSI momentum.", activeTrace: "Consolidation established above 50-period EMA.", tools: [], memory: "Support confirmed at $126.50 shelf.", conviction: 79.0 },
      news: { id: "[INTELL-NEWS]", name: "Financial News & Macro Analyst", model: "Tier: Quick-Thinking", promptContext: "Isolate factual catalysts from media noise.", activeTrace: "Major regulatory dockets clean.", tools: [], memory: "Headline sentiment score: +0.68.", conviction: 74.0 },
      social: { id: "[SENT-SOC]", name: "Social Sentiment & Orderflow", model: "Tier: Quick-Thinking", promptContext: "Track retail velocity and put/call volume.", activeTrace: "Stocktwits sentiment index recorded at 76/100.", tools: [], memory: "Retail mania threshold not triggered.", conviction: 71.5 },
      risk: { id: "[SENTINEL-RSK]", name: "Risk & Portfolio Sentinel", model: "Tier: Deep-Thinking", promptContext: "Enforce portfolio solvency and drawdown caps.", activeTrace: "1-day 99% VaR calculated at 2.14%.", tools: [], memory: "Max drawdown limit set to 5.0%.", conviction: 88.0 }
    }
  };

  // =========================================================================
  // 4. CANDLESTICK GENERATION & CANVAS RENDERING
  // =========================================================================
  function generateInitialCandles(count, basePrice, vol) {
    const candles = [];
    let current = basePrice * 0.95;
    const now = Date.now();
    const intervalMs = 5 * 60 * 1000;

    for (let i = count; i >= 0; i--) {
      const time = new Date(now - i * intervalMs);
      const delta = (Math.random() - 0.48) * (basePrice * (vol / 500));
      const open = current;
      const close = open + delta;
      const high = Math.max(open, close) + Math.random() * (basePrice * 0.005);
      const low = Math.min(open, close) - Math.random() * (basePrice * 0.005);
      const volume = Math.floor(Math.random() * 800000 + 200000);

      candles.push({ time, open, high, low, close, volume });
      current = close;
    }
    return candles;
  }

  function renderChart() {
    const canvas = document.getElementById("candlestick-canvas");
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    ctx.fillStyle = "#060709";
    ctx.fillRect(0, 0, w, h);

    if (state.candles.length < 2) return;

    const padding = { top: 16, right: 60, bottom: 20, left: 8 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const volH = chartH * 0.22;
    const priceH = chartH * 0.74;

    let minP = Infinity;
    let maxP = -Infinity;
    let maxV = 0;

    state.candles.forEach(c => {
      if (c.low < minP) minP = c.low;
      if (c.high > maxP) maxP = c.high;
      if (c.volume > maxV) maxV = c.volume;
    });

    const priceRange = (maxP - minP) || 1;
    minP -= priceRange * 0.05;
    maxP += priceRange * 0.05;

    const candleCount = state.candles.length;
    const candleWidth = Math.max(2, (chartW / candleCount) * 0.72);
    const stepX = chartW / candleCount;

    const getY = (val) => padding.top + priceH - ((val - minP) / (maxP - minP)) * priceH;
    const getVolY = (vol) => padding.top + chartH - (vol / (maxV || 1)) * volH;

    // Grid lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#10141c";
    for (let i = 0; i <= 5; i++) {
      const y = padding.top + (priceH / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      const pVal = maxP - ((maxP - minP) / 5) * i;
      ctx.fillStyle = "#4e5d71";
      ctx.font = "9px monospace";
      ctx.textAlign = "left";
      ctx.fillText(pVal.toFixed(2), w - padding.right + 5, y + 3);
    }

    // Volume Profile
    if (state.indicators.volume) {
      state.candles.forEach((c, i) => {
        const x = padding.left + i * stepX + stepX * 0.14;
        const y = getVolY(c.volume);
        const barH = padding.top + chartH - y;
        ctx.fillStyle = c.close >= c.open ? "rgba(16, 185, 129, 0.2)" : "rgba(239, 68, 68, 0.2)";
        ctx.fillRect(x, y, candleWidth, barH);
      });
    }

    // Bollinger Bands
    if (state.indicators.bb && candleCount >= 20) {
      ctx.fillStyle = "rgba(6, 182, 212, 0.04)";
      ctx.beginPath();
      for (let i = 0; i < candleCount; i++) {
        if (i < 19) continue;
        const slice = state.candles.slice(i - 19, i + 1);
        const mean = slice.reduce((acc, v) => acc + v.close, 0) / 20;
        const variance = slice.reduce((acc, v) => acc + Math.pow(v.close - mean, 2), 0) / 20;
        const sd = Math.sqrt(variance);
        const upper = mean + 2 * sd;
        const x = padding.left + i * stepX + candleWidth / 2;
        const y = getY(upper);
        if (i === 19) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = candleCount - 1; i >= 19; i--) {
        const slice = state.candles.slice(i - 19, i + 1);
        const mean = slice.reduce((acc, v) => acc + v.close, 0) / 20;
        const variance = slice.reduce((acc, v) => acc + Math.pow(v.close - mean, 2), 0) / 20;
        const sd = Math.sqrt(variance);
        const lower = mean - 2 * sd;
        const x = padding.left + i * stepX + candleWidth / 2;
        const y = getY(lower);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }

    // SMA 20
    if (state.indicators.sma && candleCount >= 20) {
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      let started = false;
      for (let i = 19; i < candleCount; i++) {
        const sum = state.candles.slice(i - 19, i + 1).reduce((acc, val) => acc + val.close, 0);
        const sma = sum / 20;
        const x = padding.left + i * stepX + candleWidth / 2;
        const y = getY(sma);
        if (!started) { ctx.moveTo(x, y); started = true; }
        else { ctx.lineTo(x, y); }
      }
      ctx.stroke();
    }

    // EMA 50
    if (state.indicators.ema && candleCount >= 20) {
      const k = 2 / (30 + 1);
      let ema = state.candles[0].close;
      ctx.strokeStyle = "#06b6d4";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      state.candles.forEach((c, i) => {
        ema = c.close * k + ema * (1 - k);
        const x = padding.left + i * stepX + candleWidth / 2;
        const y = getY(ema);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }

    // Candles
    state.candles.forEach((c, i) => {
      const x = padding.left + i * stepX + stepX * 0.14;
      const midX = x + candleWidth / 2;
      const isUp = c.close >= c.open;
      const bodyColor = isUp ? "#10b981" : "#ef4444";

      ctx.strokeStyle = bodyColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(midX, getY(c.high));
      ctx.lineTo(midX, getY(c.low));
      ctx.stroke();

      const topY = getY(Math.max(c.open, c.close));
      const bottomY = getY(Math.min(c.open, c.close));
      const bodyHeight = Math.max(1.5, bottomY - topY);

      ctx.fillStyle = bodyColor;
      ctx.fillRect(x, topY, candleWidth, bodyHeight);
    });

    // Last Price Line
    const lastY = getY(state.currentPrice);
    ctx.strokeStyle = "#f59e0b";
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(padding.left, lastY);
    ctx.lineTo(w - padding.right, lastY);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(w - padding.right + 2, lastY - 7, 56, 14);
    ctx.fillStyle = "#000000";
    ctx.font = "bold 9px monospace";
    ctx.fillText(state.currentPrice.toFixed(2), w - padding.right + 5, lastY + 4);
  }

  // =========================================================================
  // 5. SWARM DECISION ENGINE & MASTER ACTION HANDLER
  // =========================================================================
  // =========================================================================
  // 5. SWARM AGENT SEARCH & INVARIANT DECISION ENGINE
  // =========================================================================
  function computeChiefDecision() {
    const ticker = state.currentTicker;
    const profile = TICKER_PROFILES[ticker] || TICKER_PROFILES.NVDA;

    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, "0");
    state.autonomousBot.lastDecisionNonce = `0x${hex}..${Date.now().toString(16).slice(-4).toUpperCase()}`;

    const bullScore = profile.conviction;
    const bearScore = 100 - profile.conviction;
    const rsi = profile.rsi;
    const var99 = profile.var99;
    const dcfSpread = profile.dcfSpread || "";

    // Multi-Agent Invariant Prohibition Logic:
    // First searches all agent signals to eliminate forbidden moves
    let shortForbidden = false;
    let longForbidden = false;
    let shortVetoReason = "";
    let longVetoReason = "";
    let riskVeto = false;

    // Check Short Prohibition:
    // If fundamental valuation is at a discount, or bull conviction is dominant, or RSI is oversold:
    // Shorting is strictly prohibited to avoid shorting into structural institutional demand.
    if (dcfSpread.includes("DISCOUNT") && bullScore >= 60) {
      shortForbidden = true;
      shortVetoReason = `DCF DISCOUNT (${dcfSpread}) & BULL SKEW (${bullScore}%)`;
    } else if (rsi <= 42) {
      shortForbidden = true;
      shortVetoReason = `OVERSOLD RSI (${rsi.toFixed(1)}) // REVERSAL RISK`;
    } else if (bullScore >= 72) {
      shortForbidden = true;
      shortVetoReason = `HIGH BULL CONVICTION (${bullScore.toFixed(1)}%)`;
    }

    // Check Long Prohibition:
    // If RSI is extended/overbought, multiple risk is flagged, valuation is at premium, or bear risk dominates:
    // Longing is strictly prohibited to prevent buying the top.
    if (rsi >= 70 || bearScore >= 55 || dcfSpread.includes("PREMIUM")) {
      longForbidden = true;
      longVetoReason = `RSI EXTENDED (${rsi.toFixed(1)}) & MULTIPLE RISK`;
    } else if (profile.newsPulse && (profile.newsPulse.includes("NEGATIVE") || profile.newsPulse.includes("BREAKDOWN"))) {
      longForbidden = true;
      longVetoReason = "NEGATIVE NEWS PULSE & REGULATORY RISK";
    }

    // Check Risk Sentinel Circuit Breakers:
    // If Monte Carlo VaR 99% breaches 3.8%, all aggressive moves are locked out.
    if (var99 > 3.8) {
      riskVeto = true;
    }

    let action = "HOLD";
    let reasoning = "";
    let auditSummary = "";

    if (riskVeto) {
      action = "HOLD";
      reasoning = `Risk Sentinel VETO: Monte Carlo VaR 99% is ${var99}% (exceeds safe 3.50% ceiling). All aggressive entries strictly prohibited to protect capital.`;
      auditSummary = `Circuit breaker engaged: VaR ${var99}% exceeds threshold. All entries locked.`;
    } else if (shortForbidden && !longForbidden) {
      action = "BUY";
      reasoning = `Swarm Pre-Search Audit: Shorting strictly prohibited by DCF intrinsic discount (${dcfSpread}) and Bull conviction (${bullScore}%). Authorized immediate LONG with stop at $${profile.bearStop.toFixed(2)} and target $${profile.bullTarget.toFixed(2)}.`;
      auditSummary = `6/6 agents audited. DCF margin of safety and hyperscaler backlog veto shorting. Immediate Long entry authorized.`;
    } else if (longForbidden && !shortForbidden) {
      action = "SELL";
      reasoning = `Swarm Pre-Search Audit: Longing strictly prohibited by overbought RSI (${rsi.toFixed(1)}) and multiple compression risk. Authorized tactical SHORT with swing-high invalidation stop.`;
      auditSummary = `6/6 agents audited. Extended RSI and Bear risk veto longing. Immediate Short entry authorized.`;
    } else if (bullScore >= 55 && var99 <= 3.5) {
      action = "BUY";
      reasoning = `Swarm Pre-Search Audit: Bullish consensus confirmed across agents. Authorized tactical Long entry with tight risk anchor.`;
      auditSummary = `Multi-agent search cleared. Moderate bullish convergence. Long authorized.`;
    } else if (bearScore >= 55) {
      action = "SELL";
      reasoning = `Swarm Pre-Search Audit: Bearish consensus confirmed across agents. Authorized tactical Short entry.`;
      auditSummary = `Multi-agent search cleared. Bearish divergence observed. Short authorized.`;
    } else {
      action = "HOLD";
      reasoning = `Swarm Pre-Search Audit: Signals unconverged (Bull: ${bullScore}%, Bear: ${bearScore}%). Invariant latch enforces tactical wait until volume profile shelf solidifies.`;
      auditSummary = `Signals unconverged across agents. Both sides prohibited until volume breakout.`;
    }

    state.autonomousBot.action = action;
    state.autonomousBot.conviction = bullScore;
    state.autonomousBot.reasoning = reasoning;
    state.autonomousBot.shortForbidden = shortForbidden;
    state.autonomousBot.longForbidden = longForbidden;
    state.autonomousBot.shortVetoReason = shortVetoReason;
    state.autonomousBot.longVetoReason = longVetoReason;
    state.autonomousBot.auditSummary = auditSummary;

    // Update UI elements
    const nonceEl = document.getElementById("decision-nonce");
    const tfDisplay = document.getElementById("executor-tf-display");
    const titleEl = document.getElementById("decision-action-title");
    const badgeEl = document.getElementById("decision-conviction-badge");
    const textEl = document.getElementById("decision-reasoning-text");

    if (nonceEl) nonceEl.textContent = state.autonomousBot.lastDecisionNonce;
    if (tfDisplay) tfDisplay.textContent = `${state.timeframe.toUpperCase()} INTRADAY`;

    if (titleEl && badgeEl) {
      if (action === "BUY") {
        titleEl.className = "decision-action-title long";
        titleEl.firstElementChild.textContent = "SWARM RECOMMENDATION: BUY / LONG";
        badgeEl.textContent = `${bullScore.toFixed(1)}% CONV.`;
        badgeEl.style.background = "var(--signal-green)";
        badgeEl.style.color = "#000";
      } else if (action === "SELL") {
        titleEl.className = "decision-action-title short";
        titleEl.firstElementChild.textContent = "SWARM RECOMMENDATION: SELL / SHORT";
        badgeEl.textContent = `${bearScore.toFixed(1)}% SKEW`;
        badgeEl.style.background = "var(--signal-red)";
        badgeEl.style.color = "#fff";
      } else {
        titleEl.className = "decision-action-title wait";
        titleEl.firstElementChild.textContent = "SWARM RECOMMENDATION: TACTICAL WAIT";
        badgeEl.textContent = "STANDBY";
        badgeEl.style.background = "var(--accent-amber)";
        badgeEl.style.color = "#000";
      }
    }

    if (textEl) textEl.textContent = reasoning;

    // Update Prohibition Invariant Matrix
    const shortCellStatus = document.getElementById("matrix-short-status");
    const longCellStatus = document.getElementById("matrix-long-status");
    const auditTextEl = document.getElementById("prohibition-audit-text");
    const badgeTag = document.getElementById("prohibition-badge");

    if (shortCellStatus) {
      if (shortForbidden) {
        shortCellStatus.className = "matrix-status forbidden";
        shortCellStatus.textContent = `PROHIBITED // ${shortVetoReason}`;
      } else {
        shortCellStatus.className = "matrix-status authorized";
        shortCellStatus.textContent = "PERMITTED // TECHNICAL SKEW";
      }
    }

    if (longCellStatus) {
      if (longForbidden) {
        longCellStatus.className = "matrix-status forbidden";
        longCellStatus.textContent = `PROHIBITED // ${longVetoReason}`;
      } else {
        longCellStatus.className = "matrix-status authorized";
        longCellStatus.textContent = `AUTHORIZED // ${bullScore.toFixed(1)}% SKEW`;
      }
    }

    if (auditTextEl) auditTextEl.textContent = auditSummary;
    if (badgeTag) {
      badgeTag.textContent = action === "BUY" ? "LONG APPROVED" : action === "SELL" ? "SHORT APPROVED" : "HOLD ENFORCED";
      badgeTag.style.color = action === "BUY" ? "var(--signal-green)" : action === "SELL" ? "var(--signal-red)" : "var(--accent-amber)";
    }
  }

  // Master Action Button: Intelligently switches based on mode
  function handleMasterAction() {
    const btn = document.getElementById("btn-master-action");
    const title = document.getElementById("master-btn-title");
    const sub = document.getElementById("master-btn-subtitle");

    if (state.operationalMode === "trading") {
      // SWARM PRE-SEARCH & IMMEDIATE EXECUTION (AUTO LONG / SHORT)
      audio.playAlert();
      btn.classList.add("scanning");
      title.textContent = "SEARCHING 6 AGENT THESES...";
      sub.textContent = "AUDITING DCF • RSI • CATALYSTS • PROHIBITING INVALID MOVES";

      const badgeTag = document.getElementById("prohibition-badge");
      if (badgeTag) {
        badgeTag.textContent = "SWEEPING ALL AGENTS...";
        badgeTag.style.color = "var(--accent-amber)";
      }

      setTimeout(() => {
        btn.classList.remove("scanning");
        executeSwarmSearchedTrade();
      }, 350);
    } else {
      // HISTORICAL BACKTEST SWARM EXECUTION
      audio.playAlert();
      btn.classList.add("scanning");
      title.textContent = "SIMULATING HISTORICAL PROPAGATION...";
      sub.textContent = `SWEEPING ${state.backtestHorizon.toUpperCase()} LOOKBACK THROUGH ALL 6 AGENTS`;

      setTimeout(() => {
        btn.classList.remove("scanning");
        runHistoricalBacktest();
      }, 500);
    }
  }

  // Real-Time Smart Trade: Ingests all agents, rejects forbidden moves, immediately longs or shorts
  function executeSwarmSearchedTrade() {
    computeChiefDecision();
    const action = state.autonomousBot.action;
    const ticker = state.currentTicker;
    const profile = TICKER_PROFILES[ticker] || TICKER_PROFILES.NVDA;
    const totalEquity = calculateTotalEquity();

    const allocPct = state.account.userAllocPct;
    const dollarAllocation = totalEquity * (allocPct / 100);
    const shares = Math.max(1, Math.floor(dollarAllocation / state.currentPrice));

    if (action === "HOLD") {
      audio.playAlert();
      addChatMessage("CHIEF EXECUTOR [INVARIANT VETO]", "system", `PRE-TRADE SEARCH HALTED // Agents detected incompatible risk (VaR ${profile.var99}% or signal deadlock). All moves prohibited to preserve capital.`);
      const title = document.getElementById("master-btn-title");
      const sub = document.getElementById("master-btn-subtitle");
      if (title && sub) {
        title.textContent = "SWARM INVARIANT HOLD // MOVES PROHIBITED";
        sub.textContent = `RISK CEILING ENGAGED • VaR ${profile.var99}% • CAPITAL PRESERVED`;
        setTimeout(updateMasterButtonState, 2200);
      }
      return;
    }

    if (dollarAllocation > state.account.cash && action === "BUY") {
      audio.playAlert();
      addChatMessage("CHIEF EXECUTOR", "system", `ORDER ABORTED // Insufficient demo buying power ($${state.account.cash.toFixed(2)} available).`);
      return;
    }

    audio.playFillChime();

    const entryPrice = state.currentPrice;
    const stopPrice = action === "BUY" ? profile.bearStop : Number((entryPrice * 1.035).toFixed(2));
    const targetPrice = action === "BUY" ? profile.bullTarget : Number((entryPrice * 0.94).toFixed(2));

    if (action === "BUY") {
      state.account.cash -= (shares * entryPrice);
      state.openPositions.push({
        id: "pos_" + Date.now(),
        ticker,
        side: "LONG",
        shares,
        entryPrice,
        currentPrice: entryPrice,
        stopLoss: stopPrice,
        target: targetPrice,
        timestamp: new Date().toISOString().replace("T", " ").substring(0, 19)
      });
    } else {
      // SHORT
      state.openPositions.push({
        id: "pos_" + Date.now(),
        ticker,
        side: "SHORT",
        shares,
        entryPrice,
        currentPrice: entryPrice,
        stopLoss: stopPrice,
        target: targetPrice,
        timestamp: new Date().toISOString().replace("T", " ").substring(0, 19)
      });
    }

    // Prohibited Move metadata for logging
    const prohibitedMove = action === "BUY" ? "SHORT (Vetoed by DCF Undervaluation & Trend)" : "LONG (Vetoed by RSI Overbought & Multiple Risk)";

    // Log to Training Journal
    state.tradeJournal.unshift({
      tradeId: "TRD_" + String(state.tradeJournal.length + 43).padStart(4, "0"),
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
      ticker,
      timeframe: state.timeframe.toUpperCase(),
      side: action === "BUY" ? "LONG" : "SHORT",
      shares,
      entryPrice,
      exitPrice: null,
      pnlDollar: 0.00,
      pnlPct: 0.00,
      swarmTelemetry: {
        bullConviction: profile.conviction,
        bearRiskScore: 100 - profile.conviction,
        dcfDiscountPct: profile.dcfSpread,
        rsiMomentum: profile.rsi,
        newsSentiment: profile.newsPulse,
        monteCarloVar99: profile.var99,
        prohibitedMoveAudit: prohibitedMove
      },
      decisionThesis: state.autonomousBot.reasoning,
      selfCritiqueRetrospective: `Order filled via Multi-Agent Pre-Search. ${prohibitedMove} was prohibited. Triggered immediate ${action === 'BUY' ? 'LONG' : 'SHORT'}.`,
      policyAdaptation: "Allocated strictly at user's " + allocPct + "% ceiling."
    });

    addChatMessage(
      "CHIEF EXECUTOR [SWARM AUDIT]",
      action === "BUY" ? "bull" : "bear",
      `MULTI-AGENT SEARCH COMPLETED // ${prohibitedMove} was prohibited. EXECUTED IMMEDIATE ${action === 'BUY' ? 'LONG' : 'SHORT'} ${shares} SHARES ${ticker} @ $${entryPrice.toFixed(2)} [STOP: $${stopPrice.toFixed(2)} | TARGET: $${targetPrice.toFixed(2)}]`
    );

    // Visual button feedback
    const title = document.getElementById("master-btn-title");
    const sub = document.getElementById("master-btn-subtitle");
    if (title && sub) {
      title.textContent = `FILLED IMMEDIATE ${action === 'BUY' ? 'LONG' : 'SHORT'} @ $${entryPrice.toFixed(2)} ✓`;
      sub.textContent = `STOP: $${stopPrice.toFixed(2)} | TARGET: $${targetPrice.toFixed(2)} | ${shares} SHS | ${prohibitedMove}`;
      setTimeout(updateMasterButtonState, 2600);
    }

    updateAllDisplays();
  }

  // Historical Backtest Simulation
  function runHistoricalBacktest() {
    audio.playFillChime();

    const horizon = state.backtestHorizon;
    let lookbackMultiplier = horizon === "30d" ? 0.35 : horizon === "180d" ? 1.8 : horizon === "1y" ? 3.4 : 1.0;

    const basePnl = 41850.20 * lookbackMultiplier;
    const baseWinRate = (68.4 + (Math.random() * 2 - 1)).toFixed(1);
    const tradesCount = Math.floor(57 * lookbackMultiplier);
    const winsCount = Math.floor(tradesCount * (parseFloat(baseWinRate) / 100));

    state.backtestStats = {
      pnl: basePnl,
      pnlPct: Number((24.8 * lookbackMultiplier).toFixed(1)),
      winRate: parseFloat(baseWinRate),
      totalTrades: tradesCount,
      wins: winsCount,
      sharpe: 2.41,
      maxDD: -4.18
    };

    // Update panel text
    const pnlEl = document.getElementById("bt-panel-pnl");
    const winrateEl = document.getElementById("bt-panel-winrate");
    const sharpeEl = document.getElementById("bt-panel-sharpe");
    const maxddEl = document.getElementById("bt-panel-maxdd");

    if (pnlEl) pnlEl.textContent = `+$${basePnl.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (+${state.backtestStats.pnlPct}%)`;
    if (winrateEl) winrateEl.textContent = `${baseWinRate}% (${winsCount} / ${tradesCount})`;
    if (sharpeEl) sharpeEl.textContent = "2.41";
    if (maxddEl) maxddEl.textContent = "-4.18%";

    // Render Backtest Ledger Rows
    renderBacktestLedger();

    addChatMessage(
      "SWARM BACKTEST ENGINE",
      "system",
      `BACKTEST COMPLETE // Horizon: ${horizon.toUpperCase()} · Win Rate: ${baseWinRate}% · Cumulative PnL: +$${basePnl.toFixed(2)} · Full audit ledger updated.`
    );

    const title = document.getElementById("master-btn-title");
    const sub = document.getElementById("master-btn-subtitle");
    if (title && sub) {
      title.textContent = `BACKTEST COMPLETE // +$${basePnl.toFixed(2)} ✓`;
      sub.textContent = `WIN RATE: ${baseWinRate}% | ${winsCount}/${tradesCount} TRADES | SHARPE: 2.41`;
      setTimeout(updateMasterButtonState, 2200);
    }
  }

  function renderBacktestLedger() {
    const tbody = document.getElementById("backtest-ledger-body");
    if (!tbody) return;

    const mockTrades = [
      { id: "BT_104", date: "2026-10-22", asset: "NVDA", action: "LONG", entry: 120.40, exit: 128.10, pnlDollar: 3850.00, pnlPct: 6.39, thesis: "DCF undervaluation + hyperscaler capex breakout" },
      { id: "BT_103", date: "2026-10-18", asset: "TSLA", action: "SHORT", entry: 258.00, exit: 249.20, pnlDollar: 2640.00, pnlPct: 3.41, thesis: "RSI exhaustion + Bear Researcher valuation divergence" },
      { id: "BT_102", date: "2026-10-14", asset: "MSFT", action: "LONG", entry: 412.50, exit: 424.00, pnlDollar: 4600.00, pnlPct: 2.78, thesis: "Azure capex guide reinforced by enterprise sentiment" },
      { id: "BT_101", date: "2026-10-09", asset: "AAPL", action: "STOP LOSS", entry: 235.00, exit: 230.20, pnlDollar: -1440.00, pnlPct: -2.04, thesis: "Sentinel Risk strictly executed hardware lag stop" },
      { id: "BT_100", date: "2026-10-04", asset: "BTC/USD", action: "LONG", entry: 62400.00, exit: 66500.00, pnlDollar: 8200.00, pnlPct: 6.57, thesis: "Institutional ETF custody net positive inflow" }
    ];

    tbody.innerHTML = mockTrades.map(t => `
      <tr>
        <td style="color: var(--accent-amber); font-weight: 700;">${t.id}</td>
        <td style="color: var(--text-muted); font-size: 8px;">${t.date}</td>
        <td style="font-weight: 700;">${t.asset}</td>
        <td style="color: ${t.action === 'LONG' ? 'var(--signal-green)' : t.action === 'SHORT' ? 'var(--signal-red)' : 'var(--text-muted)'}; font-weight: 700;">${t.action}</td>
        <td style="text-align: right;">$${t.entry.toFixed(2)}</td>
        <td style="text-align: right;">$${t.exit.toFixed(2)}</td>
        <td style="text-align: right; color: ${t.pnlDollar >= 0 ? 'var(--signal-green)' : 'var(--signal-red)'}; font-weight: 700;">
          ${t.pnlDollar >= 0 ? '+' : ''}$${t.pnlDollar.toFixed(2)}
        </td>
        <td style="text-align: right; color: ${t.pnlDollar >= 0 ? 'var(--signal-green)' : 'var(--signal-red)'};">
          ${t.pnlPct >= 0 ? '+' : ''}${t.pnlPct.toFixed(2)}%
        </td>
        <td style="color: var(--text-secondary); font-size: 9px;">${t.thesis}</td>
      </tr>
    `).join("");
  }

  function updateMasterButtonState() {
    const btn = document.getElementById("btn-master-action");
    const title = document.getElementById("master-btn-title");
    const sub = document.getElementById("master-btn-subtitle");
    if (!btn || !title || !sub) return;

    if (state.operationalMode === "trading") {
      btn.className = "btn-master-action trade-mode";
      title.textContent = "SWARM PRE-SEARCH & EXECUTE [AUTO LONG / SHORT]";
      sub.textContent = "SEARCHES ALL 6 AGENTS FIRST • PROHIBITS INVALID MOVES • INSTANT TRIGGER";
    } else {
      btn.className = "btn-master-action backtest-mode";
      title.textContent = `EXECUTE SWARM BACKTEST (${state.backtestHorizon.toUpperCase()} LOOKBACK)`;
      sub.textContent = "SIMULATES 6-AGENT HISTORICAL PROPAGATION • ADDS TO JOURNAL";
    }
  }

  function switchOperationalMode(mode) {
    state.operationalMode = mode;
    audio.playClick();

    const tabTrading = document.getElementById("tab-mode-trading");
    const tabBacktest = document.getElementById("tab-mode-backtest");
    const panelTrading = document.getElementById("trading-controls-panel");
    const panelBacktest = document.getElementById("backtest-controls-panel");

    if (mode === "trading") {
      tabTrading?.classList.add("active");
      tabBacktest?.classList.remove("active", "backtest-active");
      if (panelTrading) panelTrading.style.display = "flex";
      if (panelBacktest) panelBacktest.style.display = "none";
    } else {
      tabBacktest?.classList.add("active", "backtest-active");
      tabTrading?.classList.remove("active");
      if (panelTrading) panelTrading.style.display = "none";
      if (panelBacktest) panelBacktest.style.display = "flex";
    }

    updateMasterButtonState();
  }

  // =========================================================================
  // 6. RESEARCH COPILOT CHAT (RESEARCHERS ONLY)
  // =========================================================================
  function addChatMessage(sender, type, text) {
    const time = new Date().toTimeString().split(" ")[0];
    state.chat.messages.push({ sender, type, text, time });
    renderChatMessages();
    audio.playClick();
  }

  function renderChatMessages() {
    const container = document.getElementById("research-chat-history");
    if (!container) return;

    container.innerHTML = state.chat.messages.map(m => `
      <div class="chat-bubble ${m.type}">
        <div class="bubble-meta">
          <span class="bubble-sender ${m.type}">[${m.sender}]</span>
          <span style="color: var(--text-muted); font-size: 8px;">${m.time}</span>
        </div>
        <div class="bubble-text">${m.text}</div>
      </div>
    `).join("");

    container.scrollTop = container.scrollHeight;
  }

  function handleResearchQuery(queryText, forcePromptKey = null) {
    const ticker = state.currentTicker;
    const profile = TICKER_PROFILES[ticker] || TICKER_PROFILES.NVDA;

    addChatMessage("YOU", "user", queryText);

    setTimeout(() => {
      let responseSender = "ALL RESEARCHERS";
      let responseType = "bull";
      let responseText = "";

      if (forcePromptKey === "bull_thesis" || queryText.toLowerCase().includes("bull")) {
        responseSender = "RES-BULL // BULL RESEARCHER";
        responseType = "bull";
        responseText = `BULL THESIS ON ${ticker}: Upside target is $${profile.bullTarget.toFixed(2)} (+${((profile.bullTarget - state.currentPrice)/state.currentPrice*100).toFixed(1)}%). Core driver is ${profile.catalyst}. DCF valuation supports cash flow expansion with forward P/E at ${profile.pe}x. Recommended execution: ACCUMULATE LONG.`;
      } else if (forcePromptKey === "bear_counter" || queryText.toLowerCase().includes("bear") || queryText.toLowerCase().includes("risk")) {
        responseSender = "RES-BEAR // BEAR RESEARCHER";
        responseType = "bear";
        responseText = `BEAR RISK STRESS-TEST ON ${ticker}: Downside invalidation stop pinned at $${profile.bearStop.toFixed(2)} (-${((state.currentPrice - profile.bearStop)/state.currentPrice*100).toFixed(1)}%). Primary risk factor: ${profile.description}. Prune position if 50-period EMA breaks down.`;
      } else if (forcePromptKey === "valuation_dcf" || queryText.toLowerCase().includes("valuation") || queryText.toLowerCase().includes("dcf")) {
        responseSender = "QUANT-FND // FUNDAMENTAL VALUATION";
        responseType = "fnd";
        responseText = `VALUATION METRICS (${ticker}): Forward P/E is ${profile.pe}x. DCF Intrinsic Model spread: ${profile.dcfSpread}. Free cash flow yield is 3.9% with zero solvency flags. Balance sheet demonstrates 4.8x coverage on short-term obligations.`;
      } else if (forcePromptKey === "news_catalysts" || queryText.toLowerCase().includes("news") || queryText.toLowerCase().includes("catalyst")) {
        responseSender = "INTELL-NEWS // MACRO ANALYST";
        responseType = "mkt";
        responseText = `CATALYST MONITOR (${ticker}): Key catalyst: ${profile.catalyst}. Regulatory docket audit: Clean. News pulse index: ${profile.newsPulse}. Social sentiment momentum score: ${profile.socScore}/100.`;
      } else {
        responseSender = "RESEARCH CONSENSUS ARBITER";
        responseType = profile.conviction >= 70 ? "bull" : "bear";
        responseText = `SYNTHESIZED RESEARCH VERDICT ON ${ticker}: Swarm conviction stands at ${profile.conviction}% Bullish. Recommended Action: Accumulate at $${(state.currentPrice * 0.997).toFixed(2)}, Stop Loss at $${profile.bearStop.toFixed(2)}, Target at $${profile.bullTarget.toFixed(2)}.`;
      }

      addChatMessage(responseSender, responseType, responseText);
    }, 300);
  }

  // =========================================================================
  // 7. REAL-TIME TICK ENGINE & POSITIONS SYNCHRONIZATION
  // =========================================================================
  function executeTick() {
    const profile = TICKER_PROFILES[state.currentTicker] || TICKER_PROFILES.NVDA;
    const vol = profile.volatility;
    const deltaPct = (Math.random() - 0.49) * (vol / 1200);
    const newPrice = Math.max(1, state.currentPrice * (1 + deltaPct));

    state.previousPrice = state.currentPrice;
    state.currentPrice = Number(newPrice.toFixed(2));

    if (state.currentPrice > state.highPrice) state.highPrice = state.currentPrice;
    if (state.currentPrice < state.lowPrice) state.lowPrice = state.currentPrice;

    // Update last candle
    if (state.candles.length > 0) {
      const last = state.candles[state.candles.length - 1];
      last.close = state.currentPrice;
      if (state.currentPrice > last.high) last.high = state.currentPrice;
      if (state.currentPrice < last.low) last.low = state.currentPrice;
      last.volume += Math.floor(Math.random() * 40000 + 5000);
    }

    // Update open positions' current price
    state.openPositions.forEach(pos => {
      if (pos.ticker === state.currentTicker) {
        pos.currentPrice = state.currentPrice;
      }
    });

    // Autonomous Bot Trigger (If engaged)
    if (state.autonomousBot.active && state.operationalMode === "trading") {
      computeChiefDecision();
      const hasPos = state.openPositions.some(p => p.ticker === state.currentTicker);
      if (!hasPos && (state.autonomousBot.action === "BUY" || state.autonomousBot.action === "SELL")) {
        executeSmartTrade();
      }
    }

    updateAllDisplays();
    renderChart();
    audio.playTick();
  }

  function updateAllDisplays() {
    const profile = TICKER_PROFILES[state.currentTicker] || TICKER_PROFILES.NVDA;

    // Telemetry bar
    const priceEl = document.getElementById("telem-price");
    const deltaEl = document.getElementById("telem-delta");
    const spreadEl = document.getElementById("telem-spread");
    const volEl = document.getElementById("telem-vol");
    const vwapEl = document.getElementById("telem-vwap");
    const volatEl = document.getElementById("telem-volat");

    if (priceEl) {
      priceEl.textContent = "$" + state.currentPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      priceEl.classList.add("flash-tick");
      setTimeout(() => priceEl.classList.remove("flash-tick"), 350);
    }

    const netChange = state.currentPrice - state.openPrice;
    const pctChange = (netChange / state.openPrice) * 100;
    const isUp = netChange >= 0;

    if (deltaEl) {
      deltaEl.textContent = `${isUp ? "+" : ""}${pctChange.toFixed(2)}%`;
      deltaEl.className = isUp ? "telemetry-num up" : "telemetry-num down";
    }

    if (spreadEl) spreadEl.textContent = `$${(state.currentPrice - 0.02).toFixed(2)} / $${(state.currentPrice + 0.02).toFixed(2)}`;
    if (volEl) volEl.textContent = (profile.volume / 1000000).toFixed(1) + "M";
    if (vwapEl) vwapEl.textContent = "$" + (state.openPrice * 0.4 + state.currentPrice * 0.6).toFixed(2);
    if (volatEl) volatEl.textContent = profile.volatility.toFixed(1) + "%";

    renderPortfolioTelemetry();
    renderPositionsList();
  }

  function calculateTotalEquity() {
    let positionVal = 0;
    state.openPositions.forEach(p => {
      if (p.side === "LONG") {
        positionVal += (p.shares * p.currentPrice);
      } else {
        const shortPnl = (p.entryPrice - p.currentPrice) * p.shares;
        positionVal += (p.shares * p.entryPrice) + shortPnl;
      }
    });
    return state.account.cash + positionVal;
  }

  function renderPortfolioTelemetry() {
    const accEquity = document.getElementById("acc-equity");
    const accUnrealized = document.getElementById("acc-unrealized");
    const totalEquity = calculateTotalEquity();

    let totalUnrealized = 0;
    state.openPositions.forEach(p => {
      const pnl = p.side === "LONG" 
        ? (p.currentPrice - p.entryPrice) * p.shares 
        : (p.entryPrice - p.currentPrice) * p.shares;
      totalUnrealized += pnl;
    });

    if (accEquity) {
      accEquity.textContent = "$" + totalEquity.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      accEquity.className = totalEquity >= state.account.initialCash ? "acc-val green" : "acc-val red";
    }

    if (accUnrealized) {
      const isUp = totalUnrealized >= 0;
      accUnrealized.textContent = `${isUp ? "+" : ""}$${totalUnrealized.toFixed(2)}`;
      accUnrealized.className = isUp ? "acc-val green" : "acc-val red";
    }

    const txtAlloc = document.getElementById("txt-alloc-pct");
    if (txtAlloc) {
      const allocDollars = totalEquity * (state.account.userAllocPct / 100);
      txtAlloc.textContent = `${state.account.userAllocPct.toFixed(1)}% ($${allocDollars.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})`;
    }
  }

  function renderPositionsList() {
    const container = document.getElementById("positions-list");
    const countEl = document.getElementById("pos-count");
    if (!container) return;

    if (countEl) countEl.textContent = `${state.openPositions.length} ACTIVE`;

    if (state.openPositions.length === 0) {
      container.innerHTML = '<div style="color: var(--text-muted); font-size: 9px; padding: 6px 0;">No active positions in demo ledger.</div>';
      return;
    }

    container.innerHTML = state.openPositions.map(pos => {
      const pnl = pos.side === "LONG"
        ? (pos.currentPrice - pos.entryPrice) * pos.shares
        : (pos.entryPrice - pos.currentPrice) * pos.shares;
      const pnlPct = pos.side === "LONG"
        ? ((pos.currentPrice - pos.entryPrice) / pos.entryPrice) * 100
        : ((pos.entryPrice - pos.currentPrice) / pos.entryPrice) * 100;
      const isProfit = pnl >= 0;

      return `
        <div class="position-row">
          <div>
            <span class="pos-sym">${pos.ticker}</span>
            <span class="pos-side ${pos.side === 'SHORT' ? 'short' : ''}">${pos.side}</span>
            <span style="color: var(--text-muted); font-size: 9px; margin-left: 3px;">${pos.shares} shs @ $${pos.entryPrice.toFixed(2)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 4px;">
            <span class="pos-pnl ${isProfit ? 'green' : 'red'}">${isProfit ? '+' : ''}$${pnl.toFixed(2)}</span>
            <button class="btn-tactical btn-close-pos" data-id="${pos.id}" style="padding: 1px 4px; font-size: 8px;">CLOSE</button>
            <button class="btn-tactical btn-trim-pos" data-id="${pos.id}" style="padding: 1px 4px; font-size: 8px;">TRIM 50%</button>
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll(".btn-close-pos").forEach(btn => {
      btn.addEventListener("click", () => closePosition(btn.dataset.id));
    });

    container.querySelectorAll(".btn-trim-pos").forEach(btn => {
      btn.addEventListener("click", () => trimPosition(btn.dataset.id, 0.5));
    });
  }

  function closePosition(posId) {
    const idx = state.openPositions.findIndex(p => p.id === posId);
    if (idx < 0) return;

    const pos = state.openPositions[idx];
    const proceeds = pos.shares * pos.currentPrice;
    state.account.cash += proceeds;
    state.openPositions.splice(idx, 1);

    audio.playFillChime();
    addChatMessage(
      "CHIEF EXECUTOR",
      "system",
      `POSITION LIQUIDATED // ${pos.side} ${pos.shares} ${pos.ticker} CLOSED @ $${pos.currentPrice.toFixed(2)}`
    );

    updateAllDisplays();
  }

  function trimPosition(posId, ratio) {
    const pos = state.openPositions.find(p => p.id === posId);
    if (!pos) return;

    const trimShares = Math.max(1, Math.floor(pos.shares * ratio));
    const proceeds = trimShares * pos.currentPrice;
    state.account.cash += proceeds;
    pos.shares -= trimShares;

    if (pos.shares <= 0) {
      const idx = state.openPositions.indexOf(pos);
      state.openPositions.splice(idx, 1);
    }

    audio.playFillChime();
    addChatMessage(
      "CHIEF EXECUTOR",
      "system",
      `PARTIAL TRIM // TRIMMED ${trimShares} SHARES OF ${pos.ticker} @ $${pos.currentPrice.toFixed(2)}`
    );

    updateAllDisplays();
  }

  // =========================================================================
  // 8. AI TRAINING JOURNAL EXPORTER (JSON & MARKDOWN DOWNLOAD)
  // =========================================================================
  function generateJournalJSON() {
    return JSON.stringify({
      exportMetadata: {
        system: "TradingAgents Autonomous Chief Executor Training Journal",
        version: "2.2.0",
        exportTimestampUtc: new Date().toISOString(),
        totalTradesLogged: state.tradeJournal.length,
        demoAccountEquity: calculateTotalEquity(),
        backtestStatistics: state.backtestStats,
        activeAutonomousPolicy: state.autonomousBot.adaptedPolicyRules
      },
      trades: state.tradeJournal
    }, null, 2);
  }

  function generateJournalMarkdown() {
    let md = `# TradingAgents Chief Executor // Trade & Training Journal\n`;
    md += `> Exported at: ${new Date().toISOString()}\n`;
    md += `> Total Trades: ${state.tradeJournal.length} | Account Equity: $${calculateTotalEquity().toFixed(2)}\n\n`;
    md += `## 1. Trade History & Decision Audit\n\n`;
    md += `| ID | Time | Ticker | TF | Side | Shares | Entry | PnL ($) | PnL (%) | Thesis |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;

    state.tradeJournal.forEach(t => {
      md += `| ${t.tradeId} | ${t.timestamp} | **${t.ticker}** | ${t.timeframe} | ${t.side} | ${t.shares} | $${t.entryPrice.toFixed(2)} | $${t.pnlDollar.toFixed(2)} | ${t.pnlPct.toFixed(2)}% | ${t.decisionThesis.slice(0, 40)}... |\n`;
    });

    md += `\n## 2. Self-Critique & Internal Retrospectives\n\n`;
    state.tradeJournal.forEach(t => {
      md += `### ${t.tradeId} [${t.ticker} - ${t.side}]\n`;
      md += `- **Primary Swarm Telemetry**: Bull Conviction: ${t.swarmTelemetry.bullConviction}%, Bear Risk: ${t.swarmTelemetry.bearRiskScore}%, VaR 99%: ${t.swarmTelemetry.monteCarloVar99}%\n`;
      md += `- **Internal Thesis**: ${t.decisionThesis}\n`;
      md += `- **Post-Trade Self-Critique**: ${t.selfCritiqueRetrospective}\n`;
      md += `- **Policy Adaptation**: ${t.policyAdaptation}\n\n`;
    });

    return md;
  }

  function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    audio.playFillChime();
  }

  function openJournalModal() {
    const modal = document.getElementById("modal-journal");
    const pre = document.getElementById("journal-display");
    if (!modal || !pre) return;

    pre.textContent = generateJournalJSON();
    modal.classList.add("open");
    audio.playClick();
  }

  // =========================================================================
  // 9. ADHD TOOLS & COMMAND PALETTE
  // =========================================================================
  function toggleFocusMode() {
    state.isFocusMode = !state.isFocusMode;
    document.body.classList.toggle("focus-mode-active", state.isFocusMode);
    const statusEl = document.getElementById("focus-status");
    const btn = document.getElementById("btn-toggle-focus");

    if (statusEl) statusEl.textContent = state.isFocusMode ? "ON" : "OFF";
    if (btn) btn.classList.toggle("focus-active", state.isFocusMode);

    audio.playClick();
  }

  const PALETTE_COMMANDS = [
    { label: "Switch to NVDA (NVIDIA)", tag: "TICKER", action: () => loadTicker("NVDA") },
    { label: "Switch to TSLA (Tesla)", tag: "TICKER", action: () => loadTicker("TSLA") },
    { label: "Switch to AAPL (Apple)", tag: "TICKER", action: () => loadTicker("AAPL") },
    { label: "Switch to MSFT (Microsoft)", tag: "TICKER", action: () => loadTicker("MSFT") },
    { label: "Switch to BTC/USD (Bitcoin)", tag: "TICKER", action: () => loadTicker("BTC/USD") },
    { label: "Execute Swarm Decision (Master Action)", tag: "TRADE", action: () => handleMasterAction() },
    { label: "Switch to Real-Time Trading Mode", tag: "MODE", action: () => switchOperationalMode("trading") },
    { label: "Switch to Historical Backtest Mode", tag: "MODE", action: () => switchOperationalMode("backtest") },
    { label: "Toggle Autonomous Bot Mode", tag: "AGENT", action: () => toggleAutonomousMode() },
    { label: "Open Training Journal (Export AI)", tag: "JOURNAL", action: () => openJournalModal() },
    { label: "Toggle Focus Mode (ADHD Spotlight)", tag: "FOCUS", action: () => toggleFocusMode() }
  ];

  function openCommandPalette() {
    const overlay = document.getElementById("command-palette-overlay");
    const input = document.getElementById("palette-search-input");
    if (!overlay || !input) return;

    overlay.classList.add("open");
    input.value = "";
    input.focus();
    renderPaletteResults("");
    audio.playClick();
  }

  function closeCommandPalette() {
    const overlay = document.getElementById("command-palette-overlay");
    if (overlay) overlay.classList.remove("open");
  }

  function renderPaletteResults(query) {
    const container = document.getElementById("palette-results-list");
    if (!container) return;

    const q = query.toLowerCase().trim();
    const filtered = PALETTE_COMMANDS.filter(c => c.label.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q));

    if (filtered.length === 0) {
      container.innerHTML = '<div style="padding: 8px; color: var(--text-muted);">No matching commands or assets.</div>';
      return;
    }

    container.innerHTML = filtered.map((c, i) => `
      <div class="palette-item ${i === 0 ? 'active' : ''}" data-idx="${i}">
        <span>${c.label}</span>
        <span class="palette-item-tag">${c.tag}</span>
      </div>
    `).join("");

    container.querySelectorAll(".palette-item").forEach((el, idx) => {
      el.addEventListener("click", () => {
        filtered[idx].action();
        closeCommandPalette();
      });
    });
  }

  function toggleAutonomousMode() {
    state.autonomousBot.active = !state.autonomousBot.active;
    const btn = document.getElementById("btn-toggle-autonomous");
    const txt = document.getElementById("txt-autonomous-status");
    const badge = document.getElementById("bot-mode-badge");

    if (btn) btn.classList.toggle("active", state.autonomousBot.active);
    if (txt) txt.textContent = state.autonomousBot.active ? "ENGAGED" : "STANDBY";
    if (badge) {
      badge.textContent = state.autonomousBot.active ? "AUTONOMOUS // ACTIVE" : "STANDBY // ASSISTED";
      badge.className = state.autonomousBot.active ? "executor-status-badge autonomous" : "executor-status-badge";
    }

    if (state.autonomousBot.active) {
      audio.playFillChime();
      addChatMessage("CHIEF EXECUTOR", "executor", "AUTONOMOUS SWARM BOT ENGAGED // Apex agent monitoring research convergence, spreads, and risk latches to execute trades autonomously.");
    } else {
      audio.playClick();
      addChatMessage("CHIEF EXECUTOR", "system", "AUTONOMOUS BOT STANDBY // Switched to assisted master button mode.");
    }
  }

  // =========================================================================
  // 10. TICKER SWITCHING & SYNCHRONIZATION
  // =========================================================================
  function loadTicker(symbol) {
    const profile = TICKER_PROFILES[symbol] || TICKER_PROFILES.NVDA;
    state.currentTicker = symbol;
    state.currentPrice = profile.basePrice;
    state.openPrice = Number((profile.basePrice * (1 - (Math.random() * 0.02 - 0.01))).toFixed(2));
    state.highPrice = Math.max(state.currentPrice, state.openPrice) + 1.2;
    state.lowPrice = Math.min(state.currentPrice, state.openPrice) - 1.2;
    state.volume24h = profile.volume;

    const bullTarget = document.getElementById("bull-target");
    const bullCat = document.getElementById("bull-catalyst");
    const bearStop = document.getElementById("bear-stop");
    const bearRisk = document.getElementById("bear-risk");
    const fndPe = document.getElementById("fnd-pe");
    const fndDcf = document.getElementById("fnd-dcf");
    const mktRsi = document.getElementById("mkt-rsi");
    const mktTrend = document.getElementById("mkt-trend");
    const newsSent = document.getElementById("news-sentiment");
    const socScore = document.getElementById("soc-score");

    if (bullTarget) bullTarget.textContent = `$${profile.bullTarget.toFixed(2)}`;
    if (bullCat) bullCat.textContent = profile.catalyst;
    if (bearStop) bearStop.textContent = `$${profile.bearStop.toFixed(2)}`;
    if (bearRisk) bearRisk.textContent = "MULTIPLE RISK";
    if (fndPe) fndPe.textContent = profile.pe > 0 ? profile.pe + "x" : "N/A";
    if (fndDcf) fndDcf.textContent = profile.dcfSpread;
    if (mktRsi) mktRsi.textContent = profile.rsi.toFixed(1);
    if (mktTrend) mktTrend.textContent = profile.trend;
    if (newsSent) newsSent.textContent = profile.newsPulse;
    if (socScore) socScore.textContent = profile.socScore + "/100";

    const barBull = document.getElementById("bar-bull-conviction");
    const barBear = document.getElementById("bar-bear-conviction");
    const txtBull = document.getElementById("txt-bull-pct");
    const txtBear = document.getElementById("txt-bear-pct");

    if (barBull && txtBull) {
      barBull.style.width = profile.conviction + "%";
      txtBull.textContent = profile.conviction + "%";
    }
    if (barBear && txtBear) {
      const bearPct = (100 - profile.conviction).toFixed(0);
      barBear.style.width = bearPct + "%";
      txtBear.textContent = bearPct + "%";
    }

    state.candles = generateInitialCandles(50, state.currentPrice, profile.volatility);

    computeChiefDecision();

    state.chat.messages = [
      {
        sender: "CHIEF EXECUTOR",
        type: "executor",
        text: `TARGET SYNCHRONIZED: ${symbol} (${profile.name}). Timeframe: ${state.timeframe.toUpperCase()}. Swarm conviction: ${profile.conviction}%. Recommendation: ${state.autonomousBot.action}. Click master action button to execute swarm trade.`,
        time: new Date().toTimeString().split(" ")[0]
      }
    ];

    updateAllDisplays();
    renderChatMessages();
    renderChart();
  }

  // =========================================================================
  // 11. EVENT LISTENERS
  // =========================================================================
  function initEvents() {
    // Mode Switcher Tabs
    const tabTrading = document.getElementById("tab-mode-trading");
    const tabBacktest = document.getElementById("tab-mode-backtest");
    if (tabTrading) tabTrading.addEventListener("click", () => switchOperationalMode("trading"));
    if (tabBacktest) tabBacktest.addEventListener("click", () => switchOperationalMode("backtest"));

    // Master Action Button (Intelligently trades or backtests)
    const btnMaster = document.getElementById("btn-master-action");
    if (btnMaster) {
      btnMaster.addEventListener("click", () => handleMasterAction());
    }

    // Backtest Horizon Selector Tabs
    document.querySelectorAll("[data-bthorizon]").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll("[data-bthorizon]").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        state.backtestHorizon = tab.dataset.bthorizon;
        audio.playClick();
        updateMasterButtonState();
      });
    });

    // View Backtest Modal Button
    const btnViewBtModal = document.getElementById("btn-view-backtest-modal");
    if (btnViewBtModal) {
      btnViewBtModal.addEventListener("click", () => {
        renderBacktestLedger();
        document.getElementById("modal-backtest")?.classList.add("open");
        audio.playClick();
      });
    }

    const btnCloseBtModal = document.getElementById("btn-close-backtest");
    if (btnCloseBtModal) {
      btnCloseBtModal.addEventListener("click", () => {
        document.getElementById("modal-backtest")?.classList.remove("open");
        audio.playClick();
      });
    }

    // Ticker select
    const tickerSelect = document.getElementById("ticker-select");
    if (tickerSelect) {
      tickerSelect.addEventListener("change", (e) => {
        loadTicker(e.target.value);
        audio.playClick();
      });
    }

    // Custom ticker input
    const customInput = document.getElementById("custom-ticker-input");
    if (customInput) {
      customInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && customInput.value.trim().length > 0) {
          const sym = customInput.value.trim().toUpperCase();
          if (!TICKER_PROFILES[sym]) {
            TICKER_PROFILES[sym] = {
              name: `${sym} ASSET`,
              basePrice: 100.00,
              pe: 25.0,
              volatility: 35.0,
              rsi: 55.0,
              beta: 1.2,
              volume: 25000000,
              trend: "INITIALIZING",
              newsPulse: "MONITORING",
              catalyst: "DYNAMIC SCAN",
              socScore: 65,
              socVol: "+5.0%",
              var99: 2.2,
              conviction: 70.0,
              bullTarget: 114.00,
              bearStop: 96.00,
              dcfSpread: "DYNAMIC MODEL",
              description: "Custom asset initialized for multi-agent quantitative evaluation."
            };
            const opt = document.createElement("option");
            opt.value = sym;
            opt.textContent = `${sym} · CUSTOM`;
            tickerSelect.appendChild(opt);
          }
          tickerSelect.value = sym;
          loadTicker(sym);
          customInput.value = "";
          audio.playClick();
        }
      });
    }

    // Directly Editable Cash Input
    const editableCash = document.getElementById("editable-cash-field");
    if (editableCash) {
      editableCash.addEventListener("change", (e) => {
        const raw = e.target.value.replace(/[^0-9.]/g, "");
        const num = parseFloat(raw);
        if (!isNaN(num) && num > 0) {
          state.account.cash = num;
          audio.playFillChime();
        }
        e.target.value = "$" + state.account.cash.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        updateAllDisplays();
      });
    }

    // Autonomous Mode Toggle Button
    const btnAuto = document.getElementById("btn-toggle-autonomous");
    if (btnAuto) {
      btnAuto.addEventListener("click", () => toggleAutonomousMode());
    }

    // Self-Reflect Button
    const btnReflect = document.getElementById("btn-force-critique");
    if (btnReflect) {
      btnReflect.addEventListener("click", () => {
        audio.playAlert();
        const reflections = [
          `RETROSPECTIVE ANALYSIS ON ${state.currentTicker}: Evaluated recent execution trajectory. Root cause analysis: Bullish conviction (+${TICKER_PROFILES[state.currentTicker]?.conviction}%) held firm; however, intraday spread expanded +0.02%. Internal Adaptation: Injected adaptive TWAP micro-tranches to reduce execution slippage by 18 bps.`,
          `INTERNAL DECISION CRITIQUE: Screened Bear Researcher counter-arguments. Determined that margin of safety is adequate while DCF spread remains at ${TICKER_PROFILES[state.currentTicker]?.dcfSpread}. Internal Adaptation: Updated invalidation trailing threshold to protect capital if 5M EMA is violated.`,
          `ALGORITHMIC POST-MORTEM: Assessed portfolio drawdown invariant. VaR 99% stands safely at ${TICKER_PROFILES[state.currentTicker]?.var99}%. Internal Adaptation: Ratified current position sizing multiplier; confirmed zero invariant breach flags.`
        ];
        const chosen = reflections[Math.floor(Math.random() * reflections.length)];
        addChatMessage("CHIEF EXECUTOR [SELF-REFLECTION]", "executor", chosen);
        if (state.tradeJournal.length > 0) {
          state.tradeJournal[0].selfCritiqueRetrospective = chosen;
        }
      });
    }

    // Minimal Percentage Allocation Slider
    const sliderAlloc = document.getElementById("slider-alloc-pct");
    if (sliderAlloc) {
      sliderAlloc.addEventListener("input", (e) => {
        state.account.userAllocPct = parseFloat(e.target.value);
        renderPortfolioTelemetry();
      });
    }

    // Training Journal Modal Button
    const btnOpenJournal = document.getElementById("btn-open-journal");
    if (btnOpenJournal) {
      btnOpenJournal.addEventListener("click", () => openJournalModal());
    }

    const btnCloseJournal = document.getElementById("btn-close-journal");
    if (btnCloseJournal) {
      btnCloseJournal.addEventListener("click", () => {
        document.getElementById("modal-journal")?.classList.remove("open");
        audio.playClick();
      });
    }

    // Download JSON Journal
    const btnDownJson = document.getElementById("btn-download-json");
    if (btnDownJson) {
      btnDownJson.addEventListener("click", () => {
        const content = generateJournalJSON();
        downloadFile(content, `tradingagents_journal_${Date.now()}.json`, "application/json");
      });
    }

    // Download Markdown Journal
    const btnDownMd = document.getElementById("btn-download-md");
    if (btnDownMd) {
      btnDownMd.addEventListener("click", () => {
        const content = generateJournalMarkdown();
        downloadFile(content, `tradingagents_journal_${Date.now()}.md`, "text/markdown");
      });
    }

    // Copy Training Prompt
    const btnCopyJournal = document.getElementById("btn-copy-journal");
    if (btnCopyJournal) {
      btnCopyJournal.addEventListener("click", () => {
        const prompt = `You are an AI Trading Systems Architect. Below is the full execution and self-critique journal of the TauricResearch TradingAgents Chief Executor.\nAnalyze execution efficiency, evaluate whether the self-critique adaptations were effective, and propose updated conviction weightings:\n\n${generateJournalJSON()}`;
        navigator.clipboard.writeText(prompt).then(() => {
          btnCopyJournal.textContent = "COPIED TO CLIPBOARD ✓";
          setTimeout(() => { btnCopyJournal.textContent = "COPY PROMPT"; }, 1500);
          audio.playClick();
        });
      });
    }

    // Journal Modal Tabs
    document.querySelectorAll("#modal-journal .modal-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#modal-journal .modal-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const pre = document.getElementById("journal-display");
        if (!pre) return;
        const tab = btn.dataset.jtab;
        if (tab === "json") pre.textContent = generateJournalJSON();
        else if (tab === "markdown") pre.textContent = generateJournalMarkdown();
        else if (tab === "retrospective") {
          pre.textContent = state.tradeJournal.map(t => 
            `[${t.tradeId} // ${t.ticker} ${t.side}]\nTHESIS: ${t.decisionThesis}\nSELF-CRITIQUE: ${t.selfCritiqueRetrospective}\nADAPTATION: ${t.policyAdaptation}\n`
          ).join("\n--------------------------------------------------\n\n");
        }
        audio.playClick();
      });
    });

    // Auto-refresh interval toggle
    const btnAutoRefresh = document.getElementById("btn-auto-refresh");
    const autoStatus = document.getElementById("auto-tick-status");
    if (btnAutoRefresh) {
      btnAutoRefresh.addEventListener("click", () => {
        audio.playClick();
        if (state.autoTickInterval === 3000) {
          state.autoTickInterval = 1000;
          if (autoStatus) autoStatus.textContent = "1s";
        } else if (state.autoTickInterval === 1000) {
          state.autoTickInterval = 5000;
          if (autoStatus) autoStatus.textContent = "5s";
        } else if (state.autoTickInterval === 5000) {
          state.autoTickInterval = 0;
          if (autoStatus) autoStatus.textContent = "OFF";
        } else {
          state.autoTickInterval = 3000;
          if (autoStatus) autoStatus.textContent = "3s";
        }
        resetAutoTick();
      });
    }

    // Focus Mode Toggle
    const btnFocus = document.getElementById("btn-toggle-focus");
    if (btnFocus) {
      btnFocus.addEventListener("click", () => toggleFocusMode());
    }

    // Command Palette
    const btnPalette = document.getElementById("btn-open-palette");
    if (btnPalette) {
      btnPalette.addEventListener("click", () => openCommandPalette());
    }

    const paletteInput = document.getElementById("palette-search-input");
    if (paletteInput) {
      paletteInput.addEventListener("input", (e) => {
        renderPaletteResults(e.target.value);
      });
      paletteInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeCommandPalette();
        else if (e.key === "Enter") {
          const first = document.querySelector("#palette-results-list .palette-item.active");
          if (first) first.click();
        }
      });
    }

    // Sound Toggle
    const btnSound = document.getElementById("btn-toggle-sound");
    const soundStatus = document.getElementById("sound-status");
    if (btnSound) {
      btnSound.addEventListener("click", () => {
        audio.enabled = !audio.enabled;
        if (soundStatus) soundStatus.textContent = audio.enabled ? "ON" : "OFF";
        if (audio.enabled) audio.playClick();
      });
    }

    // Shock Button
    const btnShock = document.getElementById("btn-inject-shock");
    if (btnShock) {
      btnShock.addEventListener("click", () => {
        const shockVal = document.getElementById("shock-selector")?.value || "earnings_beat";
        audio.playAlert();
        let shockDelta = shockVal === "earnings_beat" ? 0.082 : -0.065;
        state.currentPrice = Number((state.currentPrice * (1 + shockDelta)).toFixed(2));

        const profile = TICKER_PROFILES[state.currentTicker];
        if (profile) {
          if (shockDelta < 0) {
            profile.conviction = Math.max(22, profile.conviction - 32);
            profile.rsi = Math.max(32, profile.rsi - 18);
            profile.var99 = 3.92;
            profile.newsPulse = "HIGH VOLATILITY BREAKDOWN";
          } else {
            profile.conviction = Math.min(94, profile.conviction + 14);
            profile.rsi = Math.min(78, profile.rsi + 12);
            profile.var99 = 2.45;
            profile.newsPulse = "EARNINGS ACCELERATION";
          }
        }

        updateAllDisplays();
        computeChiefDecision();
        addChatMessage(
          "SYSTEM STRESS TEST",
          shockDelta >= 0 ? "bull" : "bear",
          `VOLATILITY SHOCK INJECTED // Price adjusted to $${state.currentPrice.toFixed(2)}. Multi-agent invariant audit recalculated.`
        );
      });
    }

    // Research Chat Send
    const btnSendChat = document.getElementById("btn-send-chat");
    const chatInput = document.getElementById("chat-input-field");
    if (btnSendChat && chatInput) {
      const sendQuery = () => {
        const val = chatInput.value.trim();
        if (val.length > 0) {
          handleResearchQuery(val);
          chatInput.value = "";
        }
      };
      btnSendChat.addEventListener("click", sendQuery);
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendQuery();
      });
    }

    // Quick Prompt Buttons
    document.querySelectorAll(".quick-prompt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        handleResearchQuery(btn.textContent, btn.dataset.query);
      });
    });

    // Node click to open Inspector
    document.querySelectorAll(".agent-node").forEach(node => {
      node.addEventListener("click", () => {
        document.querySelectorAll(".agent-node").forEach(n => n.classList.remove("selected"));
        node.classList.add("selected");
        openInspector(node.dataset.agent);
      });
    });

    const btnCloseInspector = document.getElementById("btn-close-inspector");
    if (btnCloseInspector) {
      btnCloseInspector.addEventListener("click", () => {
        document.getElementById("modal-inspector")?.classList.remove("open");
        audio.playClick();
      });
    }

    // Timeframe Buttons
    document.querySelectorAll(".timeframe-group .btn-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".timeframe-group .btn-tab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.timeframe = btn.dataset.tf;
        audio.playClick();
        state.candles = generateInitialCandles(50, state.currentPrice, TICKER_PROFILES[state.currentTicker]?.volatility || 30);
        computeChiefDecision();
        renderChart();
      });
    });

    // Indicators
    document.getElementById("toggle-sma")?.addEventListener("click", function() {
      state.indicators.sma = !state.indicators.sma;
      this.classList.toggle("active", state.indicators.sma);
      audio.playClick();
      renderChart();
    });
    document.getElementById("toggle-ema")?.addEventListener("click", function() {
      state.indicators.ema = !state.indicators.ema;
      this.classList.toggle("active", state.indicators.ema);
      audio.playClick();
      renderChart();
    });
    document.getElementById("toggle-bb")?.addEventListener("click", function() {
      state.indicators.bb = !state.indicators.bb;
      this.classList.toggle("active", state.indicators.bb);
      audio.playClick();
      renderChart();
    });
    document.getElementById("toggle-volume")?.addEventListener("click", function() {
      state.indicators.volume = !state.indicators.volume;
      this.classList.toggle("active", state.indicators.volume);
      audio.playClick();
      renderChart();
    });

    // Chart Crosshair
    const canvas = document.getElementById("candlestick-canvas");
    if (canvas) {
      canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const padding = { left: 8, right: 60 };
        const chartW = rect.width - padding.left - padding.right;
        const candleCount = state.candles.length;
        const stepX = chartW / candleCount;
        const idx = Math.floor((mouseX - padding.left) / stepX);

        if (idx >= 0 && idx < candleCount) {
          const c = state.candles[idx];
          const hudTime = document.getElementById("hud-time");
          const hudO = document.getElementById("hud-o");
          const hudH = document.getElementById("hud-h");
          const hudL = document.getElementById("hud-l");
          const hudC = document.getElementById("hud-c");
          const hudV = document.getElementById("hud-v");

          if (hudTime) hudTime.textContent = c.time.toTimeString().split(" ")[0];
          if (hudO) hudO.textContent = "$" + c.open.toFixed(2);
          if (hudH) hudH.textContent = "$" + c.high.toFixed(2);
          if (hudL) hudL.textContent = "$" + c.low.toFixed(2);
          if (hudC) hudC.textContent = "$" + c.close.toFixed(2);
          if (hudV) hudV.textContent = (c.volume / 1000).toFixed(0) + "K";
        }
      });
    }

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        openCommandPalette();
        return;
      }

      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;

      if (e.key === "Escape") {
        document.querySelectorAll(".telemetry-modal-overlay").forEach(m => m.classList.remove("open"));
        closeCommandPalette();
      } else if (e.key === "f" || e.key === "F") {
        toggleFocusMode();
      } else if (e.key === "m" || e.key === "M") {
        btnSound?.click();
      } else if (e.key === "b" || e.key === "B") {
        switchOperationalMode(state.operationalMode === "trading" ? "backtest" : "trading");
      }
    });

    window.addEventListener("resize", () => {
      renderChart();
    });
  }

  function openInspector(agentKey) {
    const modal = document.getElementById("modal-inspector");
    const title = document.getElementById("modal-inspector-title");
    const body = document.getElementById("modal-inspector-body");
    const data = state.agentDetails[agentKey];

    if (!modal || !data) return;

    if (title) title.textContent = `NODE INSPECTION // ${data.id} ${data.name.toUpperCase()}`;
    const activeTab = document.querySelector("#modal-inspector .modal-tab-btn.active")?.dataset.tab || "reasoning";

    if (activeTab === "reasoning") {
      body.innerHTML = `
        <div style="margin-bottom: 8px;"><div style="font-size: 9px; color: var(--text-muted);">ACTIVE LLM SPEC</div><div style="color: var(--accent-amber); font-weight: 700;">${data.model}</div></div>
        <div style="margin-bottom: 8px;"><div style="font-size: 9px; color: var(--text-muted);">PROMPT CONTEXT</div><div style="background: var(--bg-primary); padding: 8px; color: var(--text-secondary);">${data.promptContext}</div></div>
        <div><div style="font-size: 9px; color: var(--text-muted);">ACTIVE REASONING TRACE</div><div style="background: var(--bg-primary); padding: 8px; color: var(--text-primary);">${data.activeTrace}</div></div>
      `;
    } else if (activeTab === "tools") {
      body.innerHTML = `<pre class="raw-json-block">${JSON.stringify(data.tools, null, 2)}</pre>`;
    } else if (activeTab === "memory") {
      body.innerHTML = `<div style="background: var(--bg-primary); padding: 10px;">${data.memory}</div>`;
    } else {
      body.innerHTML = `<pre class="raw-json-block">${JSON.stringify(data, null, 2)}</pre>`;
    }

    modal.classList.add("open");
    audio.playClick();
  }

  function resetAutoTick() {
    if (state.autoTickTimer) {
      clearInterval(state.autoTickTimer);
      state.autoTickTimer = null;
    }
    if (state.autoTickInterval > 0) {
      state.autoTickTimer = setInterval(executeTick, state.autoTickInterval);
    }
  }

  function startClocksAndSessionTimer() {
    setInterval(() => {
      state.sessionSeconds++;
      const hrs = String(Math.floor(state.sessionSeconds / 3600)).padStart(2, "0");
      const mins = String(Math.floor((state.sessionSeconds % 3600) / 60)).padStart(2, "0");
      const secs = String(state.sessionSeconds % 60).padStart(2, "0");
      const sessionEl = document.getElementById("session-timer");
      if (sessionEl) sessionEl.textContent = `${hrs}:${mins}:${secs}`;

      const now = new Date();
      const utc = now.toUTCString().split(" ")[4];
      const est = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(now);

      const clockUtc = document.getElementById("clock-utc");
      const clockEst = document.getElementById("clock-est");
      if (clockUtc) clockUtc.textContent = utc;
      if (clockEst) clockEst.textContent = est;
    }, 1000);
  }

  // =========================================================================
  // 12. INITIALIZATION RUNNER
  // =========================================================================
  window.addEventListener("DOMContentLoaded", () => {
    initEvents();
    startClocksAndSessionTimer();
    loadTicker("NVDA");
    resetAutoTick();
    updateMasterButtonState();

    setTimeout(() => {
      renderChart();
    }, 100);
  });
})();
