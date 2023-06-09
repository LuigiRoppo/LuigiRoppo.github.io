// index.js
const puppeteer = require("puppeteer");
const http = require("http");

http
  .createServer(async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`
    <!DOCTYPE html>
    <!--Bloque_configuracion-->
    <html lang="es">
      <header>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LUIGI VINCENZO ROPPO GONZALEZ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="style.css" as="style" />
        <link rel="stylesheet" href="style.css" />
      </header>
      <!--////////inicio/////////////-->
      <body>
        <main>
          <!-- <div class = "rrss_bar">
               <section class = "Twitter">
                  <img src="twitter.png" alt="" width="20" height="20">
              </section>
              <section class = "GH">
                  <img src="github.png" alt="" width="20" height="20">
              </section>
              <section class = "Twitter">
                  <img src="twitter.png" alt="" width="20" height="20">
              </section>
              <section class = "GH">
                  <img src="github.png" alt="" width="20" height="20">
              </section>
              <section class = "LD">
                  <img src="linkedin.png" alt="" width="20" height="20">
              </section>
          </div>-->
  
          <!--Bloque1-->
          <div class="contenedor">
            <section>
              <head>
                <h1 class="Nombres">LUIGI VINCENZO</h1>
                <h1 class="Apellidos">ROPPO GONZALEZ</h1>
                <h2 class="subtitulo"><b>Frontend Developer</b></h2>
              </head>
            </section>
            <section class="imagen2">
              <img
                class="foto_carnet"
                src="img lr2.png"
                width="200"
                height="200"
              />
            </section>
            <div class="contenedor_especial">
              <!-- <section class="Lin"></section> -->
              <section>
                <a class="CE1" href="contacto.html">-->contact_me /</a>
              </section>
              <!-- <section>
                <a class="CE2" href="Es.LR.CV.P1.pdf" download="Es.LR.CV.P1.pdf"
                  >download_pdf</a>
              </section> -->
            </div>
          </div>
  
          <script src="index.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
            integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          ></script>
  
          <body2>
            <button id="download-button">Download as PDF</button>
            <div id="invoice">
              <h1></h1>
            </div>
            <script>
              const button = document.getElementById("download-button");
              function generatePDF() {
                // Choose the element that your content will be rendered to.
                const element = document.getElementById("invoice");
                // Choose the element and save the PDF for your user.
                html2pdf().from(element).save();
              }
  
              button.addEventListener("click", generatePDF);
            </script>
          </body2>
  
          <img class="cintillo" src="c (1).jpg" alt="" width="790" height="40" />
  
          <!--Bloque2-->
          <div class="contenedor2">
            <section class="Sobre_Mi">
              <h3 class="h3">About Me</h3>
              <p>
                Advisor in business intelligence and data management for decision
                making. Experience in environmental management, prospective
                analysis, strategic direction, risk management, market research,
                algorithmic trading and data mining.
              </p>
            </section>
            <section class="radar_u">
              <h3 class="h3">Radar Skills</h3>
              <img
                class="Radar_img"
                src="bioengineering-09-00524-g005-550.webp"
                width="175"
                height="175"
              />
            </section>
            <section class="Why_Hire_Me">
              <h3 class="h3">Why Hire Me</h3>
              <ul
                class="Why_Hire_Me2"
                style="list-style-type: none"
                margin="0"
                padding="0"
              >
                <li>
                  ✓ Programs for Strategic and Prospective Analysis. <br />
                  <b>(MIC MAC) (MACTOR) (MOPHORL)</b>
                </li>
                <li>
                  ✓ Programming and Web Development. <br />
                  <b>(HTML) (CSS) (SQL) (PYTHON)</b>
                </li>
                <li>
                  ✓ Data Visualization. <br />
                  <b>(TABLEAU) (POWER BI) (KNIME)</b>
                </li>
                <li>
                  ✓ DeFi and Blockchain. <br />
                  <b>(SOLIDITY) (BNBCHAIN) (WEB 3.0)</b>
                </li>
              </ul>
            </section>
          </div>
          <!--Bloque3-->
          <h3 class="tc3">We Can Help</h3>
          <div class="contenedor3">
            <section>
              <img
                class="f1"
                src="strategy (1).png"
                alt="Build strategies"
                width="80"
                height="80"
              />
              <div class="text1">Build strategies</div>
            </section>
            <section>
              <img class="f1" src="kpi.png" alt="" width="80" height="80" />
              <div class="text2">Indicator systems</div>
            </section>
            <section>
              <img class="f3" src="consumer.png" alt="" width="80" height="80" />
              <div class="text3">Analyze the behavior</div>
            </section>
            <section>
              <img
                class="f4"
                src="economic-disparities.png"
                alt=""
                width="80"
                height="80"
              />
              <div class="text4">Economic environment</div>
            </section>
            <section>
              <img class="f5" src="brain.png" alt="" width="80" height="80" />
              <div class="text5">Grow business</div>
            </section>
          </div>
        </main>
        <footer class="footer">
          <p>All rights reserved. Luigi Vincenzo Roppo. 2023</p>
        </footer>
      </body>
    </html></index.html
  >
  


`);
    const buffer = await page.pdf({ format: "A4" });
    await browser.close();

    res.end(buffer);
  })
  .listen(3000);
