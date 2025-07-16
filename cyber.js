// Funzione per scaricare il PDF con gestione popup e errori
function downloadPDF() {
  var filePath = "res/files/RISK_ASSESSMENT.pdf";

  Swal.fire({
    title: 'Download in corso...',
    text: 'Attendi qualche secondo',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('File non trovato o errore di rete.');
      }
      return response.blob();
    })
    .then(blob => {
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", "RISK_ASSESSMENT.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      Swal.fire({
        icon: 'success',
        title: 'Download completato!',
        text: 'Il file è stato scaricato correttamente.',
        confirmButtonColor: '#3085d6'
      });
    })
    .catch(error => {
      console.error('Errore nel download:', error);
      Swal.fire({
        icon: 'error',
        title: 'Errore!',
        text: 'Impossibile scaricare il file. Riprova più tardi.',
        confirmButtonColor: '#d33'
      });
    });
}


// Funzione principale per simulare un'analisi di rischio cyber e generare un report tecnico
function startHack() {
  // Disabilita temporaneamente il pulsante per evitare attivazioni multiple durante la simulazione
  const btn = document.querySelector(".cyber-btn");
  btn.disabled = true;
  btn.style.opacity = "0.5";

  // Array di stringhe che simulano i passaggi di un'analisi di sicurezza informatica
  const txt = [
    "💻 Analisi rete interna",
    "🌐 Rilevamento porte aperte: 22, 80, 443",
    "🛡️ Firewall bypassed con exploit noto",
    "🔐 Analisi crittografia trasmissione dati",
    "🧬 Scansione firme malware attivi",
    "💉 Iniezione SQL simulata: endpoint/login",
    "👁️‍🗨️ Keylogger virtuale attivato",
    "🔎 Analisi file di log sospetti",
    "⚠️ Rilevato comportamento anomalo: possibile RAT",
    "🚨 Tentativo di accesso root non autorizzato",
    "📦 Analisi pacchetti in tempo reale",
    "📁 Directory sensibili: var/log/srv",
    "🔐 Accesso a credenziali in chiaro",
    "💡 Verifica efficacia backup e recovery",
    "🧮 Calcolo Cyber Risk in corso",
    "📉 Generazione report finale rischio",
    "✅ Simulazione completata con successo"
  ];

  // Definizione delle tempistiche per l'intervallo tra i messaggi e il ritardo finale
  const delayPerLine = 300;
  const extraDelay = 700;
  const totalDuration = txt.length * delayPerLine + extraDelay;

  Swal.fire({
    title: 'Simulazione in corso...',
    html: '<b>Cyber Security Analysis</b><br><br>Attendere il completamento della scansione...',
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  let log = '';
  let i = 0;

  const interval = setInterval(() => {
    if (i < txt.length) {
      log += txt[i] + '\n';
      i++;
    } else {
      clearInterval(interval);
    }
  }, delayPerLine);

  setTimeout(() => {
    clearInterval(interval);
    Swal.close();

    const prob = Math.floor(Math.random() * 5) + 1;
    const imp = Math.floor(Math.random() * 5) + 1;
    const rischio = prob * imp;

    let livello, colore, spiegazione;
    if (rischio <= 6) {
      livello = 'BASSO';
      colore = 'green';
      spiegazione = "RISCHIO BASSO – Il sistema presenta vulnerabilità minime. Si consiglia comunque un monitoraggio periodico.";
    } else if (rischio <= 15) {
      livello = 'MEDIO';
      colore = 'orange';
      spiegazione = "RISCHIO MEDIO – Sono presenti vulnerabilità sfruttabili. Si consiglia un controllo più approfondito.";
    } else {
      livello = 'ALTO';
      colore = 'red';
      spiegazione = "RISCHIO ALTO – Il sistema è vulnerabile. Sono necessarie azioni correttive immediate!!";
    }

    const logText = `
SIMULAZIONE CYBERSECURITY RISK - REPORT TECNICO
----------------------------------------
📅 Data simulazione: ${new Date().toLocaleString()}
🔢 Probabilità: ${prob}
💥 Impatto: ${imp}
📊 Valore Rischio: ${rischio}
📈 Livello Rischio: ${livello}
----------------------------------------

🔍 LOG DETTAGLIATO:
${log}
`;

    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const logHtml = `
      <details style="margin-top: 15px; text-align: left;">
        <summary style="cursor: pointer; font-weight: bold; color: #007bff;">📂 Visualizza log tecnico</summary>
        <pre style="white-space: pre-wrap; background-color: #f4f4f4; color: #333; padding: 10px; border-radius: 6px; margin-top: 10px;">${logText}</pre>
      </details>
      <div style="text-align: center; margin-top: 20px;">
        <a href="${url}" download="report_cyber_risk.txt" style="
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          transition: background 0.3s;
        " onmouseover="this.style.backgroundColor='#0056b3'" onmouseout="this.style.backgroundColor='#007bff'">
          📥 Scarica report tecnico completo
        </a>
      </div>
    `;

    Swal.fire({
      title: `📊 RISULTATO SIMULAZIONE`,
      html: `
        <p><strong>Probabilità:</strong> ${prob}</p>
        <p><strong>Impatto:</strong> ${imp}</p>
        <p><strong>Valore rischio:</strong> ${rischio}</p>
        <p><strong>Livello:</strong> <span style="color:${colore}; font-weight:bold;">${livello}</span></p>
        <hr>
        <p>${spiegazione}</p>
        ${logHtml}
      `,
      icon: 'info',
      confirmButtonText: 'Chiudi',
      confirmButtonColor: colore
    });

    btn.disabled = false;
    btn.style.opacity = "1";
  }, totalDuration);
}
