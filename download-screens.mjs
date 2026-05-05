import { stitch } from "@google/stitch-sdk";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import https from "https";
import http from "http";
import path from "path";

const PROJECT_ID = "4845081572027184826";

const SCREENS = [
  { id: "asset-stub-assets-d53435c236d44a0c8981bfb3a583cc02-1777700429586", name: "design-system" },
  { id: "f329031deedc48e2a013ac3246dd8a5f", name: "property-listings-1" },
  { id: "02e88a5ff3e64311be604dcc3520517f", name: "property-detail-1" },
  { id: "a701907b0f3d4ffe995d3b21a38ccacc", name: "homepage-1" },
  { id: "00c3a624e07b4475bb1b4031edee7d7c", name: "about-team-1" },
  { id: "da0ca25a86d946d4af72af1aefd8af85", name: "about-team-2" },
  { id: "0b7d19ad08284cc585ff31deb507cb26", name: "property-detail-2" },
  { id: "239a798e0fd74ff58586ecf4d5889765", name: "property-listings-2" },
  { id: "dc4889d79b3241778aac3124082eb524", name: "homepage-2" },
];

function downloadUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadUrl(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  const outDir = "./stitch-screens";
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

  const project = stitch.project(PROJECT_ID);
  const results = [];

  for (const { id, name } of SCREENS) {
    console.log(`\nFetching screen: ${name} (${id})`);
    try {
      const screen = await project.getScreen(id);

      const imgUrl = await screen.getImage();
      const htmlUrl = await screen.getHtml();

      console.log(`  Image URL: ${imgUrl?.substring(0, 80)}...`);
      console.log(`  HTML URL:  ${htmlUrl?.substring(0, 80)}...`);

      if (imgUrl) {
        const imgBuf = await downloadUrl(imgUrl);
        await writeFile(path.join(outDir, `${name}.png`), imgBuf);
        console.log(`  ✓ Saved ${name}.png (${imgBuf.length} bytes)`);
      }

      if (htmlUrl) {
        const htmlBuf = await downloadUrl(htmlUrl);
        await writeFile(path.join(outDir, `${name}.html`), htmlBuf);
        console.log(`  ✓ Saved ${name}.html (${htmlBuf.length} bytes)`);
      }

      results.push({ name, id, imgUrl, htmlUrl });
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
      if (err.details) console.error(`    Details: ${JSON.stringify(err.details)}`);
      results.push({ name, id, error: err.message });
    }
  }

  await writeFile(path.join(outDir, "manifest.json"), JSON.stringify(results, null, 2));
  console.log("\n✅ Done. Manifest saved to stitch-screens/manifest.json");
}

main().catch(console.error);
