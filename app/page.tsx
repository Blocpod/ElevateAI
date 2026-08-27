"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, ArrowUpRight, Check, AlertTriangle } from "lucide-react";

const capex = [
  ["3× 8-GPU NVIDIA B300 nodes", "$1,800,000", "24 GPUs / 6.912 TB aggregate HBM"],
  ["NVIDIA AI Enterprise — 5 years", "$432,000", "Published list-price allowance; confirm bundle"],
  ["800 Gb/s fabric + cabling", "$220,000", "Switch, optics, adapters and integration"],
  ["1 PB usable storage platform", "$350,000", "Hot NVMe plus durable object/backup tier"],
  ["2× media workstations", "$120,000", "Four RTX PRO 6000-class 96 GB GPUs total"],
  ["Rack, security, KVM and monitoring", "$100,000", "Deployment and facility controls"],
  ["Spares and commissioning", "$100,000", "Acceptance testing and initial stock"],
  ["Colocation installation", "$75,000", "One-time modeled setup"],
] as const;

function SectionTitle({index, eyebrow, title, copy}:{index:string;eyebrow:string;title:string;copy?:string}) {
  return <div className="section-title"><span className="section-index">{index}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy&&<p className="lede">{copy}</p>}</div></div>;
}

export default function Home(){
  const [dark,setDark]=useState(false);
  const [themeReady,setThemeReady]=useState(false);

  useEffect(()=>{
    const active=document.documentElement.dataset.theme==="dark";
    setDark(active);
    setThemeReady(true);
  },[]);

  const toggle=(next:boolean)=>{
    const theme=next?"dark":"light";
    document.documentElement.dataset.theme=theme;
    document.documentElement.style.colorScheme=theme;
    setDark(next);
    try{localStorage.setItem("elevate-theme",theme)}catch{}
  };
  return <main>
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Elevate Innovation Technologies AI Future">
        <img className="brand-logo brand-logo-gold" src="/brand/elevate-horizontal-gold.png" alt="Elevate Innovation Technologies" />
        <img className="brand-logo brand-logo-white" src="/brand/elevate-horizontal-white.png" alt="" aria-hidden="true" />
        <b>AI FUTURE</b>
      </a>
      <nav><a href="#system">System</a><a href="#why">Why Own It</a><a href="#cost">Cost</a><a href="#roadmap">Roadmap</a><a href="#sources">Sources</a></nav>
      <div className="theme-control" data-ready={themeReady}>
        <Sun size={14} aria-hidden="true"/>
        <button
          className="theme-toggle"
          type="button"
          role="switch"
          aria-checked={dark}
          aria-label={`Switch to ${dark?"light":"dark"} mode`}
          title={`Switch to ${dark?"light":"dark"} mode`}
          onClick={()=>toggle(!dark)}
        ><span /></button>
        <Moon size={14} aria-hidden="true"/>
      </div>
    </header>

    <section className="hero" id="top">
      <div className="hero-code">EIT // PRIVATE AI INFRASTRUCTURE // BUILD SPEC 2026.08</div>
      <div className="hero-grid"><div>
        <p className="status"><i/> INFRASTRUCTURE BUILDOUT · PLANNING ESTIMATE</p>
        <h1>Build the<br/><em>AI factory.</em></h1>
        <p className="hero-copy">The equipment, power, cooling, storage, networking and facility plan required to run frontier open-weight models, long-context coding swarms and commercial media production in-house.</p>
        <div className="hero-actions"><a className="button primary" href="#cost">View itemized cost <ArrowUpRight size={16}/></a><a className="button" href="#system">See the system</a></div>
      </div><div className="hero-panel">
        <img className="hero-brand-icon hero-brand-icon-gold" src="/brand/elevate-icon-gold.svg" alt="" aria-hidden="true" />
        <img className="hero-brand-icon hero-brand-icon-white" src="/brand/elevate-icon-white.svg" alt="" aria-hidden="true" />
        <p className="micro">COMMISSIONED INFRASTRUCTURE</p><div className="big-number">$3.68M</div><p>Base build including 15% procurement contingency</p><hr/>
        <dl><div><dt>Compute</dt><dd>3 × 8-GPU B300 nodes</dd></div><div><dt>Accelerators</dt><dd>24 × B300</dd></div><div><dt>Aggregate HBM</dt><dd>6.912 TB</dd></div><div><dt>Storage</dt><dd>1 PB usable start</dd></div><div><dt>Facility reserve</dt><dd>100 kW</dd></div><div><dt>5-year infra TCO</dt><dd>≈ $7.8M</dd></div></dl>
        <p className="note">Planning estimate. Replace with competitive vendor and facility quotations before purchase.</p>
      </div></div>
      <div className="metric-strip"><div><b>1M+</b><span>MAX CONTEXT CAPABILITY</span></div><div><b>200–400K</b><span>STANDARD OPERATING RANGE</span></div><div><b>85 kW</b><span>BASE FACILITY LOAD</span></div><div><b>25–30 tons</b><span>COOLING TARGET</span></div></div>
    </section>

    <section className="content-section" id="system">
      <SectionTitle index="01" eyebrow="COMPUTE ARCHITECTURE" title="Three nodes, deliberately separated by workload." copy="The system supports simultaneous production inference, long-context agent work, model adaptation and media workloads while preserving maintenance and failover capacity."/>
      <div className="node-grid">
        <article><span className="node-tag">NODE 01</span><h3>Production inference</h3><p>Kimi K3, DeepSeek V4 Pro/Flash, private endpoints, code review and internal copilots.</p><ul><li><Check/>8 × B300 GPUs</li><li><Check/>2.304 TB HBM</li><li><Check/>Up to 4 TB host memory</li></ul></article>
        <article><span className="node-tag">NODE 02</span><h3>Long context + swarms</h3><p>Repository-scale coding, parallel agents, 200–400K standard contexts and scheduled million-token jobs.</p><ul><li><Check/>8 × B300 GPUs</li><li><Check/>2.304 TB HBM</li><li><Check/>Large KV-cache headroom</li></ul></article>
        <article><span className="node-tag">NODE 03</span><h3>R&amp;D + media + failover</h3><p>Fine-tuning, distillation, evaluation, image/video generation, rendering and overflow capacity.</p><ul><li><Check/>8 × B300 GPUs</li><li><Check/>2.304 TB HBM</li><li><Check/>Maintenance resilience</li></ul></article>
      </div>
      <div className="model-table-wrap"><table><thead><tr><th>MODEL</th><th>MODEL SIZE</th><th>CONTEXT</th><th>PLANNED DEPLOYMENT</th></tr></thead><tbody>
        <tr><td>Kimi K3</td><td>2.8T total / 104B active</td><td>1,048,576</td><td><span className="pill good">8×B300 TARGET</span> Official NVFP4 checkpoint is approximately 1.6 TB.</td></tr>
        <tr><td>DeepSeek V4 Pro</td><td>1.6T total / 49B active</td><td>1,000,000</td><td><span className="pill good">PRIMARY TARGET</span> One optimized node; pool nodes for concurrency.</td></tr>
        <tr><td>DeepSeek V4 Flash</td><td>284B total / 13B active</td><td>1,000,000</td><td><span className="pill">SWARM WORKER</span> Higher-throughput agent and batch lane.</td></tr>
      </tbody></table></div>
      <div className="callout"><AlertTriangle/><div><b>Model fit does not guarantee fast one-million-token operation.</b><p>Throughput depends on runtime kernels, precision, KV cache, batch size and concurrency. Use 200–400K as the normal production range and schedule 1M+ jobs after benchmark acceptance.</p></div></div>
    </section>

    <section className="content-section inverse" id="why">
      <SectionTitle index="02" eyebrow="STRATEGIC CASE" title="Infrastructure is the permanent layer. Models are replaceable." copy="Applications built entirely on outside APIs inherit another company’s model behavior, pricing, rate limits, release schedule and policy decisions. Owned infrastructure creates a stable operating layer underneath changing models."/>
      <div className="governance-grid">
        <div className="governance-card"><span>CONTROL</span><h3>Stable production behavior</h3><p>Pin model weights, runtimes, quantization and evaluation standards. Upgrade applications on EIT’s schedule rather than whenever a provider changes an endpoint.</p></div>
        <div className="governance-card"><span>OPTIONALITY</span><h3>Change models without rebuilding the company</h3><p>Route each workload to the best open-weight model, fine-tune specialists and keep external APIs as optional escalation paths.</p></div>
        <div className="governance-card"><span>COMPOUNDING</span><h3>One platform, many products</h3><p>The same compute, storage, agents and creative pipelines can support multiple applications, client systems and internal ventures.</p></div>
      </div>
      <div className="boundary"><h3>Hybrid, not isolated</h3><div><p><Check/> <b>Own locally:</b> persistent inference, private data, product workloads, agent swarms, evaluation, fine-tuning and daily creative production.</p><p><Check/> <b>Burst to NVIDIA cloud:</b> large training runs, temporary GPU demand, regional capacity and custom-model development through DGX Cloud Lepton and aligned training services.</p></div></div>
    </section>

    <section className="content-section">
      <SectionTitle index="03" eyebrow="OUTPUT CAPACITY" title="This is infrastructure for a portfolio, not a single application." copy="The value is created by the products, workflows, proprietary data and creative teams operating on top of the cluster."/>
      <div className="node-grid">
        <article><span className="node-tag">BUILD</span><h3>Software + agent companies</h3><p>AI-native SaaS, coding systems, decision platforms, research agents, marketplaces, automation products and vertical copilots.</p><ul><li><Check/>Shared identity and orchestration</li><li><Check/>Reusable model gateway</li><li><Check/>Rapid product experimentation</li></ul></article>
        <article><span className="node-tag">CREATE</span><h3>AI production studio</h3><p>Campaign concepts, image and video generation, editing, 3D, audio, synthetic production and high-volume branded content.</p><ul><li><Check/>Cluster-scale batch work</li><li><Check/>Dedicated finishing systems</li><li><Check/>Private client assets</li></ul></article>
        <article><span className="node-tag">OWN</span><h3>Models + organizational memory</h3><p>Fine-tuned specialists, distilled workers, evaluation suites, retrieval systems, proprietary datasets and reusable agent capabilities.</p><ul><li><Check/>Local model registry</li><li><Check/>Cloud training when needed</li><li><Check/>Compounding internal IP</li></ul></article>
      </div>
      <div className="verdict"><div><p className="micro">APPLICATION-LAYER SIGNAL</p><b>Billions<span> in enterprise value</span></b></div><p>Cursor’s 2026 acquisition was valued at $60B, OpenRouter’s reported acquisition exceeded $8B, and Genspark’s latest financing valued it at $2.6B. These are market examples, not projections. They show how much value can accumulate in products and distribution built on top of AI infrastructure.</p></div>
    </section>

    <section className="content-section inverse" id="cost">
      <SectionTitle index="04" eyebrow="CAPITAL ENVELOPE" title="$8–10 million to launch the AI factory with runway." copy="The commissioned infrastructure costs $3.68M. The larger initial capitalization funds the operating team, facility, security, model integration and approximately two years of execution runway. Financing instruments and fundraising mechanics are intentionally outside this plan."/>
      <div className="economics-grid"><div className="table-card"><div className="card-head"><span>LINE ITEM</span><span>PLAN</span></div>
        {capex.map(([label,value,note])=><div className="cost-row" key={label}><div><b>{label}</b><small>{note}</small></div><strong>{value}</strong></div>)}
        <div className="cost-row subtotal"><div><b>Base commissioned subtotal</b></div><strong>$3,197,000</strong></div>
        <div className="cost-row subtotal"><div><b>Procurement contingency</b><small>15% for freight, tax, configuration and quote variance</small></div><strong>$479,550</strong></div>
        <div className="cost-row total"><div><b>TOTAL COMMISSIONED BUILD</b></div><strong>$3,676,550</strong></div>
      </div><div><div className="raise-block"><p className="micro">FIVE-YEAR INFRASTRUCTURE TCO</p><div className="big-number">≈$7.8M</div><p>Hardware, facility, support, storage growth, spares and refresh allowance.</p></div>
        <div className="tco"><span>INITIAL COMMISSIONED BUILD<b>$3.68M</b></span><span>5Y COLOCATION + CONNECTIVITY<b>≈$1.54M</b></span><span>5Y WARRANTY / STORAGE / SPARES<b>≈$0.95M</b></span><span>EXPANSION + REFRESH ALLOWANCE<b>≈$1.63M</b></span></div>
      </div></div>
      <div className="tco" style={{marginTop:30,border:"1px solid var(--bg)"}}><span>RECOMMENDED INITIAL CAPITALIZATION<b>$8–10M</b></span><span>FIVE-YEAR INFRASTRUCTURE TCO<b>≈$7.8M</b></span><span>FIVE-YEAR AI FACTORY PROGRAM TCO<b>≈$18.4M</b></span></div>
      <p className="fineprint">All figures are nominal USD planning estimates. The $18.4M program case combines approximately $7.8M of five-year infrastructure cost, $8.0M for a six-person technical operations unit, and approximately $2.6M for security, administration, working capital and execution reserve.</p>
    </section>

    <section className="content-section" id="facility">
      <SectionTitle index="05" eyebrow="POWER + FACILITY" title="Reserve 100 kW. Design cooling for high density." copy="The base equipment load is approximately 63 kW. At a modeled PUE of 1.35, expected peak facility load is approximately 85 kW."/>
      <div className="power-grid"><div><span>COMPUTE NODES</span><b>45 kW</b><small>3 × 15 kW maximum</small></div><div><span>SUPPORTING IT</span><b>18 kW</b><small>Storage, network, workstations</small></div><div><span>PEAK IT LOAD</span><b>63 kW</b><small>Base equipment plan</small></div><div><span>FACILITY LOAD</span><b>85 kW</b><small>At 1.35 PUE</small></div><div><span>ANNUAL ENERGY</span><b>522–745 MWh</b><small>Expected to theoretical peak</small></div></div>
      <div className="facility-grid" style={{marginTop:34}}><div className="facility-choice recommended"><span className="choice-label">RECOMMENDED START</span><h3>High-density colocation</h3><div className="choice-number">$350K <small>YEAR 01</small></div><p>Modeled at $225K committed capacity, $50K connectivity and $75K installation. Require written approval for a 100 kW envelope, rack density and cooling method.</p><ul><li>Faster time to power</li><li>Existing suppression and physical security</li><li>Lower construction risk</li></ul></div><div className="facility-choice"><span className="choice-label">FUTURE OPTION</span><h3>Dedicated on-prem facility</h3><div className="choice-number">$1.9M <small>RETROFIT ALLOWANCE</small></div><p>Pre-engineering allowance for electrical service, switchgear, UPS, generator interface, cooling distribution, security, controls, permits and commissioning. Site cost is excluded.</p><ul><li>25–30 tons N+1 cooling target</li><li>100 kW minimum usable capacity</li><li>Longer engineering and permitting path</li></ul></div></div>
    </section>

    <section className="content-section inverse" id="roadmap">
      <SectionTitle index="06" eyebrow="FIVE-YEAR ROADMAP" title="Build the factory, then compound what runs on it."/>
      <div className="timeline"><div><span>00</span><article><small>0–6 MONTHS</small><h3>Commission the foundation</h3><p>Secure facility, install fabric, storage and three nodes, validate Kimi K3 and DeepSeek, establish agent and media production lanes.</p></article></div><div><span>01</span><article><small>6–18 MONTHS</small><h3>Migrate and standardize</h3><p>Move appropriate EIT applications onto the private gateway, build evaluation baselines, establish internal model and data registries.</p></article></div><div><span>02</span><article><small>18–36 MONTHS</small><h3>Launch the portfolio</h3><p>Operate multiple software products, creative pipelines and customer environments from the shared AI platform; use NVIDIA cloud for large training bursts.</p></article></div><div><span>03</span><article><small>36–60 MONTHS</small><h3>Own differentiated intelligence</h3><p>Expand storage and capacity against utilization, deploy proprietary specialists, license platform capabilities and evaluate a dedicated facility.</p></article></div></div>
      <div className="boundary"><h3>Capability boundary</h3><div><p><Check/> <b>Designed for:</b> private inference, coding swarms, million-token scheduled jobs, fine-tuning, distillation, continued pretraining, smaller proprietary models and commercial media production.</p><p><AlertTriangle/> <b>Not designed for:</b> economically pretraining a Kimi K3- or DeepSeek V4-scale frontier foundation model from scratch. That is a separate data-center-scale program.</p></div></div>
    </section>

    <section className="content-section sources" id="sources">
      <SectionTitle index="07" eyebrow="EVIDENCE" title="Specifications verified. Prices still require quotes."/>
      <div className="source-grid"><a href="https://github.com/MoonshotAI/Kimi-K3" target="_blank">Moonshot AI · Kimi K3 <ArrowUpRight/></a><a href="https://huggingface.co/nvidia/Kimi-K3-NVFP4" target="_blank">NVIDIA · Kimi K3 NVFP4 <ArrowUpRight/></a><a href="https://api-docs.deepseek.com/news/news260424/" target="_blank">DeepSeek · V4 announcement <ArrowUpRight/></a><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro" target="_blank">DeepSeek · V4 Pro <ArrowUpRight/></a><a href="https://docs.nvidia.com/dgx/dgxb300-user-guide/introduction-to-dgxb300.html" target="_blank">NVIDIA · DGX B300 guide <ArrowUpRight/></a><a href="https://www.nvidia.com/en-us/data-center/dgx-cloud-lepton/" target="_blank">NVIDIA · DGX Cloud Lepton <ArrowUpRight/></a><a href="https://apnews.com/article/a5c60fcbaaca262cf107d30f1de899ef" target="_blank">AP · Cursor acquisition <ArrowUpRight/></a><a href="https://www.axios.com/2026/08/17/stripe-openrouter-paypal" target="_blank">Axios · OpenRouter acquisition <ArrowUpRight/></a><a href="https://www.reuters.com/technology/gensparkai-valued-26-billion-latest-funding-round-2026-06-17/" target="_blank">Reuters · Genspark valuation <ArrowUpRight/></a></div>
      <p className="source-note">Current as of 27 August 2026. Hardware and facility prices are estimates, not quotations. Final purchase authorization should use a normalized vendor BOM and written facility capacity approval.</p>
    </section>
    <footer><div className="brand footer-brand"><img className="brand-logo brand-logo-gold" src="/brand/elevate-horizontal-gold.png" alt="Elevate Innovation Technologies"/><img className="brand-logo brand-logo-white" src="/brand/elevate-horizontal-white.png" alt="" aria-hidden="true"/><b>AI FUTURE</b></div><p>AI Infrastructure Build Specification</p><p>PLANNING ESTIMATE · QUOTES REQUIRED</p></footer>
  </main>;
}
