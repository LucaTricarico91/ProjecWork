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
  const delayPerLine = 300;      // tempo di attesa tra una riga e l'altra (ms)
  const extraDelay = 700;        // ritardo extra per rendere la simulazione più fluida
  const totalDuration = txt.length * delayPerLine + extraDelay;

  // Avvio di un popup modale (tramite SweetAlert2) con indicatore di caricamento
  Swal.fire({
    title: 'Simulazione in corso...',
    html: '<b>Cyber Security Analysis</b><br><br>Attendere il completamento della scansione...',
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading(); // Avvia animazione di caricamento
    }
  });

  // Simulazione di output tecnico riga per riga
  let log = '';    // Variabile per accumulare il log simulato
  let i = 0;       // Indice per scorrere l'array dei messaggi

  const interval = setInterval(() => {
    if (i < txt.length) {
      log += txt[i] + '\n'; // Aggiunge la riga corrente al log tecnico
      i++;
    } else {
      clearInterval(interval); // Quando i messaggi terminano, ferma l'intervallo
    }
  }, delayPerLine);

  // Dopo che il log è stato "stampato", calcola i risultati della simulazione
  setTimeout(() => {
    clearInterval(interval); // Assicura la chiusura dell'intervallo in ogni caso
    Swal.close();            // Chiude il popup di caricamento

    // Genera valori casuali per probabilità e impatto (range 1-5)
    const prob = Math.floor(Math.random() * 5) + 1;
    const imp = Math.floor(Math.random() * 5) + 1;
    const rischio = prob * imp; 

    // Definizione del livello di rischio e messaggio associato
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

    // Costruzione del testo completo del report tecnico
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

    // Crea un oggetto Blob e genera un URL temporaneo per il download del report
    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // HTML per mostrare un blocco espandibile con il log tecnico + link per scaricare il file
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

    // Mostra il popup finale con i risultati della simulazione e il log tecnico
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

    // Riabilita il pulsante per permettere una nuova simulazione
    btn.disabled = false;
    btn.style.opacity = "1";
  }, totalDuration);
}
