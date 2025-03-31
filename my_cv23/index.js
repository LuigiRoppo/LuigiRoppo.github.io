<!DOCTYPE html>
<html lang="es">
  <head>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>

    <!-- ESTILOS RESPONSIVE PARA MÓVILES -->
    <style>
      @media (max-width: 768px) {
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          font-size: 14px;
        }

        .contenedor_general {
          width: 95%;
          max-width: 100%;
          margin: 0 auto;
          padding: 10px;
          box-sizing: border-box;
        }

        .contenedor {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .Nombres {
          font-size: 22px;
          margin: 10px 0 5px 0;
        }

        .subtitulo {
          font-size: 16px;
          line-height: 1.2;
        }

        .foto_carnet {
          width: 130px;
          height: auto;
          margin-top: 10px;
        }

        .contenedor2 {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 10px;
        }

        .Radar_img {
          width: 120px;
          height: auto;
          margin: 0 auto;
        }

        .Why_Hire_Me2 li {
          font-size: 13px;
          line-height: 1.5;
        }

        .contenedor3 {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          padding: 10px;
        }

        .contenedor3 section {
          width: 45%;
          text-align: center;
        }

        .f1, .f3, .f4, .f5 {
          width: 60px;
          height: auto;
        }

        .tc3 {
          text-align: center;
          font-size: 16px;
          margin: 15px 0 5px 0;
        }

        .footer {
          font-size: 12px;
          text-align: center;
          margin-top: 20px;
        }

        .download-button {
          text-align: center;
          margin-top: 15px;
        }

        .download-button button {
          font-size: 12px;
          padding: 6px 12px;
        }

        .h3 {
          font-size: 16px;
          text-align: center;
        }

        .text1, .text2, .text3, .text4, .text5 {
          font-size: 13px;
          margin-top: 5px;
        }

        .cintillo {
          width: 100%;
          height: auto;
          margin: 10px 0;
        }
      }
    </style>
  </head>

  <body>
    <main>
      <div class="contenedor_general">
        <div class="contenedor">
          <section>
            <h1 class="Nombres">LUIGI V ROPPO</h1>
            <h2 class="subtitulo"><b>Data Science <br>/ BI Consulting</b></h2>
            <section>
              <a class="CE1" href="contacto.html">
                <button type="button">Contact me</button>
              </a>
            </section>
          </section>

          <section class="imagen2">
            <img class="foto_carnet" src="img lr2.png" width="200" height="210" />
          </section>

          <div class="contenedor_especial"></div>
        </div>

        <script src="main.js"></script>

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
            <img class="Radar_img" src="bioengineering-09-00524-g005-550.webp" width="175" height="175" />
          </section>

          <section class="Why_Hire_Me">
            <h3 class="h3">Why Hire Me</h3>
            <ul class="Why_Hire_Me2" style="list-style-type: none">
              <li>✓ Programs for Strategic and Prospective Analysis. <br /><b>(MIC MAC) (MACTOR) (MOPHORL)</b></li>
              <li>✓ Programming and Web Development. <br /><b>(HTML) (CSS) (SQL) (PYTHON)</b></li>
              <li>✓ Data Visualization. <br /><b>(TABLEAU) (POWER BI) (KNIME)</b></li>
              <li>✓ DeFi and Blockchain. <br /><b>(SOLIDITY) (BNBCHAIN) (WEB 3.0)</b></li>
            </ul>
          </section>
        </div>

        <!--Bloque3-->
        <h3 class="tc3">BI in action</h3>
        <div class="contenedor3">
          <section>
            <img class="f1" src="strategy (1).png" alt="Build strategies" width="80" height="80" />
            <div class="text1">Build strategies</div>
          </section>
          <section>
            <img class="f1" src="kpi.png" alt="KPIs" width="80" height="80" />
            <div class="text2">Indicator systems</div>
          </section>
          <section>
            <img class="f3" src="consumer.png" alt="Consumer" width="80" height="80" />
            <div class="text3">Analyze the behavior</div>
          </section>
          <section>
            <img class="f4" src="economic-disparities.png" alt="Economics" width="80" height="80" />
            <div class="text4">Economic environment</div>
          </section>
          <section>
            <img class="f5" src="brain.png" alt="Growth" width="80" height="80" />
            <div class="text5">Grow business</div>
          </section>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>All rights reserved. Luigi Vincenzo Roppo. 2025</p>
    </footer>

    <div class="download-button">
      <a href="Es.LR.CV.P1 (^).pdf" download="ReseñaCurricular Luigi">
        <button type="download-button">Download as PDF</button>
      </a>
    </div>
  </body>
</html>

