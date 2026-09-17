import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../public/catalogue/esteio-systems-catalogue-2026.pdf");

const steel = rgb(0.039, 0.051, 0.063);
const plate = rgb(0.086, 0.106, 0.133);
const cream = rgb(0.902, 0.882, 0.839);
const mute = rgb(0.545, 0.573, 0.533);
const safety = rgb(0.91, 0.353, 0.09);

const pages = [
  ["ESTEIO SYSTEMS CATALOGUE 2026", "Structure that holds.", "Scaffolding · Structural · Modular · Lisboa"],
  ["CONTENTS", "01 Cover  02 Contents  03 Company  04 Standards", "05–10 Scaffolding  11–15 Structural  16–21 Modular  22–24 Desk"],
  ["COMPANY", "Esteio Sistemas Industriais, Lda.", "Sacavém yard since 1998. EN-compliant access, shoring, site buildings."],
  ["STANDARDS", "EN 12810 / 12811  ·  EN 1090-1 EXC2  ·  EN 1065", "ISO 9001 · ISO 45001 · CE fabrication · Portuguese wind zones."],
  ["SCAFFOLDING", "FX-250 façade frame", "Bay 2.50 / 3.00 m · Lift 2.00 m · Class 4–6 · HDG 85 µm."],
  ["SCAFFOLDING", "FX-250 continued", "Anchorage every 4 m. Max free height 24 m without tying study."],
  ["SCAFFOLDING", "RX-8 ring-lock", "8-way rosette, 50 kN node SWL, ledgers 0.73–3.07 m."],
  ["SCAFFOLDING", "RX-8 industrial", "Birdcage, ship repair, heritage independent scaffolds."],
  ["SCAFFOLDING", "MT-135 mobile tower", "EN 1004-1 · 1.35 × 2.50 m · indoor 12.2 m / outdoor 8.2 m."],
  ["SCAFFOLDING", "WX weather deck", "12–24 m span PVC roof. Lisbon winter programmes stay live."],
  ["STRUCTURAL", "Load paths", "Shoring and falsework sized to Eurocode 3. Sketch with every quote."],
  ["STRUCTURAL", "PR-D steel prop", "EN 1065 class D · 1.80–4.00 m · 30 kN mid-range SWL."],
  ["STRUCTURAL", "HT-200 heavy tower", "100 / 150 / 200 kN · 1.09–2.07 m bays · EN 12812."],
  ["STRUCTURAL", "TB-12 temporary beam", "450 / 750 mm lattice · up to 85 kNm · loading platforms."],
  ["STRUCTURAL", "LP-25 loading platform", "2.5 t SWL · 2.40 × 1.50 m deck · daily inspection."],
  ["MODULAR", "Site architecture", "ISO boxes that leave a clean plot. Stack to three storeys."],
  ["MODULAR", "SO-20 site office", "6.06 × 2.44 m · U=0.35 · EI 30/60 · 48-hour Loures dispatch."],
  ["MODULAR", "WF-24 welfare", "16 seats + 24 lockers. Sized for housing-plot gangs."],
  ["MODULAR", "SN-20 sanitary", "3 + 1 accessible WCs. ACT-aligned welfare."],
  ["MODULAR", "WS-40 workshop", "12.19 m body · 400 V 63 A · 5.0 kN/m² floor."],
  ["MODULAR", "Stacks & stairs", "Three-storey rating with stair towers and EI 60 links."],
  ["APPLICATIONS", "Portuguese sites", "Lisboa high-rise · Sines tanks · Belém heritage · Taguspark data."],
  ["HOW TO SPECIFY", "Send loads, height, wind, hire or sale.", "We return a fleet list and a drawing — not a mood board."],
  ["DESK", "+351 21 000 4480  ·  projectos@esteio.pt", "Rua das Oficinas 48, 2685-331 Sacavém · Mon–Fri 08:00–18:00 WET"],
];

async function main() {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  pages.forEach(([kicker, title, body], index) => {
    const page = doc.addPage([595.28, 841.89]);
    page.drawRectangle({ x: 0, y: 0, width: 595.28, height: 841.89, color: steel });
    page.drawRectangle({ x: 0, y: 820, width: 595.28, height: 6, color: safety });
    page.drawRectangle({ x: 36, y: 72, width: 523, height: 720, color: plate });
    page.drawText("ESTEIO", { x: 52, y: 760, size: 12, font: bold, color: cream, letterSpacing: 4 });
    page.drawText(String(index + 1).padStart(2, "0"), {
      x: 500,
      y: 760,
      size: 12,
      font,
      color: safety,
    });
    page.drawText(kicker, { x: 52, y: 700, size: 10, font, color: safety, letterSpacing: 2 });
    const titleLines = wrap(title, 28);
    titleLines.forEach((line, i) => {
      page.drawText(line, { x: 52, y: 640 - i * 28, size: 22, font: bold, color: cream });
    });
    const bodyLines = wrap(body, 62);
    bodyLines.forEach((line, i) => {
      page.drawText(line, { x: 52, y: 520 - i * 16, size: 11, font, color: mute });
    });
    page.drawText("esteio.pt  ·  sample PDF generated in-repo  ·  24 pages", {
      x: 52,
      y: 96,
      size: 8,
      font,
      color: mute,
    });
  });

  mkdirSync(dirname(outPath), { recursive: true });
  const bytes = await doc.save();
  const { writeFileSync } = await import("node:fs");
  writeFileSync(outPath, bytes);
}

function wrap(text, max) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

main();
