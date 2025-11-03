// Dados do conteúdo
const contentData = {
  introducao: {
    title: "Introdução",
    icon: "fa-book",
    sections: [
      {
        subtitle: "O que é Controle de Constitucionalidade?",
        content: `
          <p>O controle de constitucionalidade é o mecanismo pelo qual o Estado verifica se leis e atos administrativos estão em conformidade com a Constituição Federal, que é a lei suprema da república.</p>
          <p><strong>Histórico:</strong> Teve origem nos EUA em 1803, com o famoso caso Marbury vs Madison, quando o juiz John Marshall estabeleceu que toda lei contrária à Constituição é nula.</p>
          <p><strong>No Brasil:</strong> Adotamos um sistema MISTO que combina controle DIFUSO (qualquer juiz) e CONCENTRADO (STF).</p>
        `
      },
      {
        subtitle: "Por que existe?",
        content: `
          <ul>
            <li>Proteger a supremacia constitucional</li>
            <li>Garantir que toda norma esteja em conformidade com a CF</li>
            <li>Defender direitos fundamentais</li>
            <li>Manter a separação de poderes</li>
            <li>Viabilizar o estado democrático de direito</li>
          </ul>
        `
      }
    ]
  },

  supremacia: {
    title: "Supremacia Constitucional",
    icon: "fa-crown",
    sections: [
      {
        subtitle: "Princípio da Supremacia",
        content: `
          <p>A <strong>Constituição Federal é a lei suprema</strong> de um Estado e prevalece sobre qualquer outra norma jurídica.</p>
          <p><strong>Hierarquia normativa:</strong></p>
          <ul>
            <li><strong>Constituição Federal (CF)</strong> - SUPREMA</li>
            <li>Emendas Constitucionais</li>
            <li>Leis Complementares</li>
            <li>Leis Ordinárias</li>
            <li>Decretos e Portarias</li>
            <li>Resoluções</li>
          </ul>
          <p>Toda lei que contradiz a CF é considerada <strong>inconstitucional</strong> e deve ser removida do sistema.</p>
        `
      }
    ]
  },

  poder: {
    title: "Poder Constituinte",
    icon: "fa-users",
    sections: [
      {
        subtitle: "Poder Constituinte ORIGINÁRIO",
        content: `
          <p><strong>Conceito:</strong> É o poder <strong>ilimitado, soberano e inicial</strong> de criar uma nova Constituição.</p>
          <p><strong>Características:</strong></p>
          <ul>
            <li>Extraordinário</li>
            <li>Ilimitado (não tem limites materiais)</li>
            <li>Inicial/Autônomo</li>
            <li>Soberano</li>
          </ul>
          <p><strong>Exemplos:</strong> CF de 1988, quando a Constituinte se reuniu após a ditadura militar.</p>
        `
      },
      {
        subtitle: "Poder Constituinte DERIVADO",
        content: `
          <p><strong>Conceito:</strong> É o poder <strong>limitado</strong> de reformar ou alterar a Constituição já existente.</p>
          <p><strong>Tipos:</strong></p>
          <ul>
            <li><strong>Reformador:</strong> Emenda Constitucional (art. 60 CF)</li>
            <li><strong>Revisor:</strong> Revisão Constitucional (foi apenas em 1993 - gerou 6 Emendas de Revisão)</li>
            <li><strong>Decorrente:</strong> Constituições Estaduais e Municipais</li>
          </ul>
          <p><strong>Limites:</strong> O derivado não pode abolir cláusulas pétreas (art. 60, §4°).</p>
        `
      }
    ]
  },

  vicio: {
    title: "Vícios Constitucionais",
    icon: "fa-exclamation-triangle",
    sections: [
      {
        subtitle: "Inconstitucionalidade MATERIAL",
        content: `
          <p><strong>Conceito:</strong> Quando o <strong>conteúdo da lei</strong> viola direitos ou princípios fundamentais da Constituição.</p>
          <p><strong>Exemplo:</strong> Lei que discrimina mulheres em relação a homens para a mesma função viola a igualdade (art. 5°, I CF).</p>
          <p><strong>Característica:</strong> Desrespeita o CONTEÚDO material da CF.</p>
        `
      },
      {
        subtitle: "Inconstitucionalidade FORMAL",
        content: `
          <p><strong>Conceito:</strong> Quando há vício no <strong>processo de elaboração</strong> da lei.</p>
          <p><strong>Tipos:</strong></p>
          <ul>
            <li><strong>Formal ORGÂNICA:</strong> Violação de competência legislativa (ex: município legisla sobre direito penal)</li>
            <li><strong>Formal PROCEDIMENTAL:</strong> Desrespeito ao procedimento (ex: lei votada sem quórum)</li>
          </ul>
        `
      }
    ]
  },

  difuso: {
    title: "Controle Difuso",
    icon: "fa-layer-group",
    sections: [
      {
        subtitle: "O que é?",
        content: `
          <p><strong>Controle Difuso (ou aberto):</strong> Qualquer juiz ou tribunal pode declarar uma lei inconstitucional <strong>incidenter tantum</strong> (de forma incidental), ao julgar um caso concreto.</p>
          <p><strong>Origem:</strong> Sistema americano (judicial review).</p>
          <p><strong>Quando ocorre:</strong> Durante o julgamento de uma ação qualquer, o juiz percebe que a lei aplicável é inconstitucional.</p>
        `
      },
      {
        subtitle: "Características",
        content: `
          <ul>
            <li><strong>Legitimados:</strong> Qualquer juiz ou tribunal</li>
            <li><strong>Via:</strong> Incidental em ação concreta</li>
            <li><strong>Efeito Temporal:</strong> Ex tunc (retroativo)</li>
            <li><strong>Efeito Espacial:</strong> Inter partes (entre as partes)</li>
            <li><strong>Vinculação:</strong> NÃO vinculante</li>
            <li><strong>Competência:</strong> Todos os juízes</li>
          </ul>
        `
      }
    ]
  },

  concentrado: {
    title: "Controle Concentrado",
    icon: "fa-cube",
    sections: [
      {
        subtitle: "O que é?",
        content: `
          <p><strong>Controle Concentrado (ou fechado):</strong> Apenas um órgão específico (<strong>STF</strong> no Brasil) tem competência exclusiva para declarar uma lei inconstitucional.</p>
          <p><strong>Origem:</strong> Sistema austríaco/europeu (modelo Kelsen).</p>
          <p><strong>Via:</strong> Mediante ações específicas (ADI, ADC, ADPF, ADO, MI).</p>
        `
      },
      {
        subtitle: "Características",
        content: `
          <ul>
            <li><strong>Órgão:</strong> STF exclusivamente</li>
            <li><strong>Legitimados:</strong> Apenas os do art. 103 CF</li>
            <li><strong>Efeito Temporal:</strong> Ex nunc (REGRA) - a partir da decisão</li>
            <li><strong>Efeito Espacial:</strong> Erga omnes (para todos)</li>
            <li><strong>Vinculação:</strong> VINCULANTE para toda Administração e Judiciário</li>
            <li><strong>Repristinação:</strong> Possível (volta lei anterior)</li>
          </ul>
        `
      }
    ]
  },

  legitimados: {
    title: "Legitimados do Artigo 103 CF",
    icon: "fa-star",
    sections: [
      {
        subtitle: "Mnemônico: 3 PESSOAS, 3 MESAS, 3 INSTITUIÇÕES",
        content: `
          <div class="mnemonic-box">
            🔑 3 PESSOAS, 3 MESAS, 3 INSTITUIÇÕES 🔑
          </div>
          <p style="margin-top: 20px;"><strong>* = Exigem Pertinência Temática (art. 97 CF)</strong></p>
        `
      },
      {
        subtitle: "Detalhamento",
        content: `
          <div class="legitimados-box">
            <div class="legitimado-item">
              <h4>👤 TRÊS PESSOAS</h4>
              <ul>
                <li>✓ Presidente da República (Universal)</li>
                <li>✓ Governador de Estado <span class="pertinencia">*</span></li>
                <li>✓ Procurador-Geral da República (Universal)</li>
              </ul>
            </div>
            <div class="legitimado-item">
              <h4>🏛️ TRÊS MESAS</h4>
              <ul>
                <li>✓ Mesa da Assembleia Legislativa <span class="pertinencia">*</span></li>
                <li>✓ Mesa da Câmara dos Deputados (Universal)</li>
                <li>✓ Mesa do Senado Federal (Universal)</li>
              </ul>
            </div>
            <div class="legitimado-item">
              <h4>🏢 TRÊS INSTITUIÇÕES</h4>
              <ul>
                <li>✓ OAB (Universal)</li>
                <li>✓ Partido com Representação no CN (Universal)</li>
                <li>✓ Confederação Sindical/Entidade de Classe <span class="pertinencia">*</span></li>
              </ul>
            </div>
          </div>
          <p style="margin-top: 20px;"><strong>Total: 9 legitimados</strong> (3 com pertinência temática)</p>
        `
      }
    ]
  },

  acoes: {
    title: "As 5 Principais Ações (ADI, ADC, ADPF, ADO, MI)",
    icon: "fa-gavel",
    sections: [
      {
        subtitle: "ADI - Ação Direta de Inconstitucionalidade",
        content: `
          <p><strong>Objetivo:</strong> Declarar uma lei ou ato normativo INCONSTITUCIONAL.</p>
          <ul>
            <li><strong>Legitimados:</strong> Art. 103 CF (todos os 9)</li>
            <li><strong>Parecer da AGU:</strong> Obrigatório (defende a lei) - art. 103, §3</li>
            <li><strong>Ministério Público:</strong> Sempre participa</li>
            <li><strong>Efeito Temporal:</strong> Ex tunc (REGRA) - retroativo</li>
            <li><strong>Efeito Espacial:</strong> Erga omnes</li>
            <li><strong>Vinculação:</strong> Vinculante</li>
            <li><strong>Repristinação:</strong> Sim (volta lei anterior)</li>
          </ul>
        `
      },
      {
        subtitle: "ADC - Ação Declaratória de Constitucionalidade",
        content: `
          <p><strong>Objetivo:</strong> Declarar uma lei ou ato normativo CONSTITUCIONAL (inversa da ADI).</p>
          <ul>
            <li><strong>Legitimados:</strong> Apenas 3 (Presidente, PGR, Mesa do Senado)</li>
            <li><strong>Parecer da AGU:</strong> Obrigatório (defende a lei)</li>
            <li><strong>Ministério Público:</strong> Sempre CONTRÁRIO</li>
            <li><strong>Efeito Temporal:</strong> Ex nunc (prospectivo)</li>
            <li><strong>Efeito Espacial:</strong> Erga omnes</li>
            <li><strong>Vinculação:</strong> Vinculante</li>
            <li><strong>Função:</strong> Proteger lei de decisões difusas contraditórias</li>
          </ul>
        `
      },
      {
        subtitle: "ADPF - Arguição de Descumprimento de Preceito Fundamental",
        content: `
          <p><strong>Objetivo:</strong> Proteger direitos fundamentais contra lesão/risco de lesão.</p>
          <ul>
            <li><strong>Legitimados:</strong> Art. 103 CF (mesmos da ADI)</li>
            <li><strong>Cabimento:</strong> Lei anterior ou posterior à CF</li>
            <li><strong>Parecer da AGU:</strong> Obrigatório</li>
            <li><strong>Decisão Cautelar:</strong> Possível</li>
            <li><strong>Efeito:</strong> Erga omnes</li>
            <li><strong>Função:</strong> "Escape" quando não couber ADI, ADC, etc</li>
          </ul>
        `
      },
      {
        subtitle: "ADO - Ação Direta de Inconstitucionalidade por Omissão",
        content: `
          <p><strong>Objetivo:</strong> Declarar omissão inconstitucional (falta de lei que CF exige).</p>
          <ul>
            <li><strong>Quando:</strong> Falta norma que Constituição expressamente exige</li>
            <li><strong>Legitimados:</strong> Art. 103 CF</li>
            <li><strong>Parecer da AGU:</strong> Obrigatório</li>
            <li><strong>Efeito:</strong> Erga omnes</li>
            <li><strong>Consequência:</strong> STF comunica órgão competente para legislar</li>
          </ul>
        `
      },
      {
        subtitle: "MI - Mandado de Injunção",
        content: `
          <p><strong>Objetivo:</strong> Proteger direito/liberdade por falta de norma regulamentadora.</p>
          <ul>
            <li><strong>Natureza:</strong> Individual (pessoa física ou jurídica)</li>
            <li><strong>Diferença:</strong> Ação pessoal para proteger direito específico</li>
            <li><strong>Legitimados:</strong> Qualquer pessoa (ação individual)</li>
            <li><strong>Competência:</strong> Pode ser impetrado em qualquer tribunal</li>
            <li><strong>Efeito:</strong> Inter partes</li>
            <li><strong>Exemplo:</strong> Greve para servidores públicos (art. 37, VII)</li>
          </ul>
        `
      }
    ]
  },

  efeitos: {
    title: "Efeitos das Decisões",
    icon: "fa-wave-square",
    sections: [
      {
        subtitle: "Efeito TEMPORAL",
        content: `
          <h4 style="color: #0d47a1; margin: 15px 0 10px 0;">EX TUNC (Retroativo)</h4>
          <ul>
            <li><strong>Significado:</strong> "Desde então" - desde a origem</li>
            <li><strong>Quando:</strong> Controle DIFUSO (REGRA), ADI (REGRA)</li>
            <li><strong>Consequência:</strong> Lei considerada nula desde sua criação</li>
            <li><strong>Efeito:</strong> Voltam situações anteriores (repristinação)</li>
          </ul>

          <h4 style="color: #0d47a1; margin: 20px 0 10px 0;">EX NUNC (Prospectivo)</h4>
          <ul>
            <li><strong>Significado:</strong> "A partir de agora" - para frente</li>
            <li><strong>Quando:</strong> Controle CONCENTRADO (REGRA): ADC, ADO, ADPF</li>
            <li><strong>Consequência:</strong> Lei deixa de vigorar apenas a partir da decisão</li>
            <li><strong>Nota:</strong> Segurança jurídica - atos passados não se perdem</li>
          </ul>
        `
      },
      {
        subtitle: "Efeito ESPACIAL",
        content: `
          <h4 style="color: #0d47a1; margin: 15px 0 10px 0;">INTER PARTES (Entre as partes)</h4>
          <ul>
            <li><strong>Significado:</strong> Apenas entre quem participou do processo</li>
            <li><strong>Quando:</strong> Controle DIFUSO</li>
            <li><strong>Alcance:</strong> Limitado ao caso concreto</li>
          </ul>

          <h4 style="color: #0d47a1; margin: 20px 0 10px 0;">ERGA OMNES (Para todos)</h4>
          <ul>
            <li><strong>Significado:</strong> Para toda a coletividade</li>
            <li><strong>Quando:</strong> Controle CONCENTRADO</li>
            <li><strong>Alcance:</strong> Geral e obrigatório para todos</li>
            <li><strong>Vinculação:</strong> Vincula Administração e Judiciário</li>
          </ul>
        `
      }
    ]
  }
};

// Estado da aplicação
let appState = {
  currentSection: 'introducao',
  completedSections: new Set(),
  darkMode: localStorage.getItem('darkMode') === 'true'
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  setupEventListeners();
  setupNavigation();
  loadQuizData();
  updateTheme();
  showSection('introducao');
});

function initializeApp() {
  if (appState.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function setupEventListeners() {
  // Toggle tema
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Toggle sidebar mobile
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);

  // Voltar ao topo
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    });
  }
}

function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      showSection(section);
      
      // Fechar sidebar em mobile
      const sidebar = document.getElementById('sidebar');
      if (sidebar.classList.contains('open')) {
        toggleSidebar();
      }
    });
  });
}

function showSection(sectionName) {
  // Atualizar nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === sectionName);
  });

  // Gerar conteúdo
  const content = document.getElementById('content');
  const data = contentData[sectionName];

  if (sectionName === 'quiz') {
    renderQuiz();
  } else if (data) {
    let html = `<div class="content-section active">
      <h2>${data.title}</h2>`;
    
    data.sections.forEach(section => {
      html += `
        <div class="card">
          <h3>${section.subtitle}</h3>
          ${section.content}
        </div>
      `;
    });

    html += '</div>';
    content.innerHTML = html;
  }

  appState.currentSection = sectionName;
  window.scrollTo(0, 0);
}

function toggleTheme() {
  appState.darkMode = !appState.darkMode;
  localStorage.setItem('darkMode', appState.darkMode);
  updateTheme();
}

function updateTheme() {
  if (appState.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

// QUIZ
let quizState = {
  currentQuestion: 0,
  score: 0,
  answers: [],
  showingResults: false
};

const quizData = [
  {
    pergunta: "Uma lei federal que discrimina mulheres em relação a homens para mesma função viola inconstitucionalidade:",
    opcoes: ["Formal", "Material", "Procedimental", "Orgânica"],
    resposta: 1,
    explicacao: "Desrespeita CONTEÚDO material da CF (igualdade - art. 5°, I). Formal seria vício no processo."
  },
  {
    pergunta: "No Brasil, o modelo de controle de constitucionalidade adotado é:",
    opcoes: ["Difuso", "Concentrado", "Misto/Híbrido", "Preventivo"],
    resposta: 2,
    explicacao: "Brasil combina CONTROLE DIFUSO (qualquer juiz) e CONCENTRADO (STF). Sistema MISTO."
  },
  {
    pergunta: "No controle concentrado, como REGRA GERAL, os efeitos são:",
    opcoes: ["Ex tunc, inter partes, não vinculantes", "Ex nunc, erga omnes, vinculantes", "Ex tunc, erga omnes, vinculantes", "Ex nunc, inter partes"],
    resposta: 1,
    explicacao: "Concentrado: EX NUNC (prospectivo), ERGA OMNES (todos), VINCULANTE (obriga)."
  },
  {
    pergunta: "A CF/88 é classificada como:",
    opcoes: ["Flexível", "Rígida", "Semi-rígida", "Costumeira"],
    resposta: 1,
    explicacao: "CF/88 é RÍGIDA - exige processo especial (art. 60) para alteração. Justifica controle."
  },
  {
    pergunta: "O poder constituinte ORIGINÁRIO é:",
    opcoes: ["Limitado", "Ilimitado e soberano", "Regulado por lei", "Subordinado ao derivado"],
    resposta: 1,
    explicacao: "Poder constituinte originário é EXTRAORDINÁRIO, ILIMITADO, AUTÔNOMO e SOBERANO."
  },
  {
    pergunta: "Legitimados UNIVERSAIS do art. 103 CF (não precisam pertinência temática):",
    opcoes: ["Presidente, PGR, OAB, Partido CN, Confederação", "Presidente, Governador, PGR", "Presidente, PGR, OAB, Partido CN, Mesa Senado", "Apenas Presidente e PGR"],
    resposta: 2,
    explicacao: "Universais: Presidente, PGR, OAB, Partido (CN), Mesa Câmara, Mesa Senado. Especiais: Governador*, Mesa Assembléia*, Confederação*"
  },
  {
    pergunta: "Legitimação especial exigida para Governador, Mesa Assembléia e Confederação é:",
    opcoes: ["Maioria de votos", "Pertinência temática", "Parecer técnico", "Aprovação STF"],
    resposta: 1,
    explicacao: "Art. 97 CF: Governador, Mesa Assembléia e Confederação (3 com *) precisam pertinência temática."
  },
  {
    pergunta: "Diferença fundamental entre ADI e ADC:",
    opcoes: ["ADI concentrada, ADC difusa", "ADI declara inconstitucionalidade, ADC constitucionalidade", "ADI federal, ADC estadual", "Não há diferença"],
    resposta: 1,
    explicacao: "ADI: declara INCONSTITUCIONALIDADE. ADC: declara CONSTITUCIONALIDADE (protege lei)."
  },
  {
    pergunta: "Na ADI, o parecer da AGU é:",
    opcoes: ["Consultivo", "Facultativo", "Obrigatório - art. 103, §3 (defende lei)", "Vinculante"],
    resposta: 2,
    explicacao: "AGU deve intervir na ADI OBRIGATORIAMENTE (art. 103, §3) defensora da lei."
  },
  {
    pergunta: "A ADO (Ação Direta por Omissão) é utilizada quando:",
    opcoes: ["Lei contrária à CF", "Falta norma que CF exige", "Juiz age sem competência", "Lei prejudica alguém"],
    resposta: 1,
    explicacao: "ADO: combate OMISSÃO INCONSTITUCIONAL (falta de lei que deveria existir conforme CF)."
  },
  {
    pergunta: "O Mandado de Injunção (MI) diferencia-se porque:",
    opcoes: ["Só cabe no STF", "É individual e defende direito específico por falta de norma", "Sempre vincula", "Só cabe lei federal"],
    resposta: 1,
    explicacao: "MI é proteção INDIVIDUAL (pessoa) que não consegue exercer direito por falta de lei."
  },
  {
    pergunta: "Natureza jurídica da ADPF:",
    opcoes: ["Declarar inconstitucionalidade", "Proteger direitos fundamentais contra lesão", "Executar sentença", "Anular contrato"],
    resposta: 1,
    explicacao: "ADPF (Arguição): protege PRECEITO FUNDAMENTAL em risco de lesão."
  },
  {
    pergunta: "No controle DIFUSO, os efeitos são:",
    opcoes: ["Ex nunc, erga omnes", "Ex tunc, inter partes", "Ex nunc, inter partes", "Ex tunc, erga omnes"],
    resposta: 1,
    explicacao: "Difuso: EX TUNC (retroativo), INTER PARTES (entre partes), NÃO vinculante."
  },
  {
    pergunta: "Qual poder realiza o controle de constitucionalidade NO BRASIL:",
    opcoes: ["Executivo", "Legislativo", "Judiciário", "Todos igualmente"],
    resposta: 2,
    explicacao: "JUDICIÁRIO exerce controle (preventivo é CCJ, repressivo é juízes/STF)."
  },
  {
    pergunta: "Controle PREVENTIVO é realizado por:",
    opcoes: ["STF em ADI", "Comissão de Constituição e Justiça do Congresso", "Presidente da República", "OAB"],
    resposta: 1,
    explicacao: "Controle preventivo: CCJ rejeita projeto antes de lei ser sancionada."
  },
  {
    pergunta: "Repristinação é efeito específico da:",
    opcoes: ["ADC", "ADPF", "ADI", "MI"],
    resposta: 2,
    explicacao: "ADI pode ter efeito repristinatório: lei anterior volta quando lei é anulada."
  },
  {
    pergunta: "Lei que invade competência de outro ente viola inconstitucionalidade:",
    opcoes: ["Material", "Formal orgânica", "Formal procedimental", "Por omissão"],
    resposta: 1,
    explicacao: "Formal ORGÂNICA: vício de COMPETÊNCIA legislativa (quem não podia legislou)."
  },
  {
    pergunta: "Classificação da CF/88:",
    opcoes: ["Outorgada, consuetudinária, flexível", "Promulgada, escrita, rígida, formal, dogmática", "Cesarista, costumeira, material", "Dictatorial, sintética"],
    resposta: 1,
    explicacao: "CF/88: Promulgada (democrática), ESCRITA, RÍGIDA, Formal, Dogmática."
  },
  {
    pergunta: "Exemplo de vício FORMAL PROCEDIMENTAL:",
    opcoes: ["Lei que discrimina", "Lei votada sem quórum", "Lei que invade competência", "Decreto sem fundamentação"],
    resposta: 1,
    explicacao: "Formal PROCEDIMENTAL: violação do PROCEDIMENTO legislativo (quórum, votação, etc)."
  },
  {
    pergunta: "A Súmula Vinculante permite:",
    opcoes: ["Legislar", "Vincular todos os juízes", "Anular lei", "Eleger ministros"],
    resposta: 1,
    explicacao: "Súmula Vinculante (art. 103-A) obriga todos os juízes e órgãos administrativos."
  },
  {
    pergunta: "Cabe ADI contra lei:",
    opcoes: ["Municipal", "Estadual", "Federal", "Todas as anteriores"],
    resposta: 3,
    explicacao: "ADI cabe contra LEI ou ATO NORMATIVO federal, estadual ou municipal."
  },
  {
    pergunta: "Quem pode requerer reconsideração de decisão de ADI:",
    opcoes: ["Qualquer cidadão", "Somente Presidente", "Qualquer dos legitimados (art. 103)", "Ministério Público"],
    resposta: 2,
    explicacao: "Reconsideração pode ser requerida por qualquer legitimado do art. 103."
  },
  {
    pergunta: "Lei que exige pressupostos de validade para ser constitucional devem constar em:",
    opcoes: ["Lei ordinária", "Decretos", "Constituição", "Portaria"],
    resposta: 2,
    explicacao: "Direitos fundamentais e pressupostos processuais são matéria CONSTITUCIONAL."
  },
  {
    pergunta: "A competência originária para julgamento de ADI é:",
    opcoes: ["Tribunal de Justiça", "STF", "STJ", "Qualquer juiz"],
    resposta: 1,
    explicacao: "STF tem COMPETÊNCIA ORIGINÁRIA e EXCLUSIVA para ADI."
  },
  {
    pergunta: "Efeito vinculante de decisão STF em ADI se aplica a:",
    opcoes: ["Partes", "Poder Executivo", "Poder Legislativo e Judiciário", "Todos"],
    resposta: 3,
    explicacao: "Decisão ERGA OMNES vincula TODOS (Executivo, Legislativo, Judiciário e cidadãos)."
  },
  {
    pergunta: "Sistema misto brasileiro prevê controle:",
    opcoes: ["Apenas difuso", "Apenas concentrado", "Difuso + Concentrado", "Nenhum dos anteriores"],
    resposta: 2,
    explicacao: "Brasil adota SISTEMA MISTO: qualquer juiz (difuso) + STF (concentrado)."
  },
  {
    pergunta: "Qual ação pode ser ajuizada por qualquer pessoa?",
    opcoes: ["ADI", "ADC", "ADPF", "MI"],
    resposta: 3,
    explicacao: "MI (Mandado de Injunção) pode ser impetrado por qualquer pessoa física ou jurídica."
  },
  {
    pergunta: "Limite material para emenda constitucional (Cláusula Pétrea):",
    opcoes: ["Art. 60, §1°", "Art. 60, §2°", "Art. 60, §4°", "Art. 60, §5°"],
    resposta: 2,
    explicacao: "Cláusulas pétreas (art. 60, §4°): forma federativa, separação poderes, direitos individuais, voto direto."
  },
  {
    pergunta: "Pode haver conversão de controle DIFUSO em decisão CONCENTRADO quando:",
    opcoes: ["Sempre", "Nunca", "Art. 102, III, b CPC - jurisprudência defensiva", "Só com AGU"],
    resposta: 2,
    explicacao: "Lei de 2016 permite conversão em ADI (art. 948 CPC) quando há jurisprudência consolidada."
  }
];

function loadQuizData() {
  quizState.data = quizData;
}

function renderQuiz() {
  const content = document.getElementById('content');
  
  if (quizState.showingResults) {
    showQuizResults(content);
  } else if (quizState.currentQuestion < quizData.length) {
    renderCurrentQuestion(content);
  }
}

function renderCurrentQuestion(content) {
  const question = quizData[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion) / quizData.length) * 100;

  content.innerHTML = `
    <div class="content-section active">
      <div class="quiz-question">
        <div class="quiz-header">
          <h3>Questão ${quizState.currentQuestion + 1} de ${quizData.length}</h3>
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progress}%"></div>
          </div>
        </div>
        <div class="question-text">${question.pergunta}</div>
        <div class="question-options">
          ${question.opcoes.map((opcao, idx) => `
            <label class="option-label">
              <input type="radio" name="answer" value="${idx}">
              <span>${String.fromCharCode(97 + idx)}) ${opcao}</span>
            </label>
          `).join('')}
        </div>
        <div class="quiz-actions">
          <button class="btn btn--primary" onclick="submitAnswer()">Responder</button>
        </div>
      </div>
    </div>
  `;
}

function submitAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert('Selecione uma opção!');
    return;
  }

  const answer = parseInt(selected.value);
  const question = quizData[quizState.currentQuestion];
  const isCorrect = answer === question.resposta;

  if (isCorrect) quizState.score++;

  showFeedback(isCorrect, question);
}

function showFeedback(isCorrect, question) {
  const content = document.getElementById('content');
  
  content.innerHTML = `
    <div class="content-section active">
      <div class="quiz-feedback">
        <div class="feedback-result ${isCorrect ? 'correct' : 'incorrect'}">
          <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
          <h3>${isCorrect ? '✓ Correto!' : '✗ Incorreto!'}</h3>
        </div>
        <div class="feedback-explanation">
          <p><strong>Resposta correta:</strong> ${question.opcoes[question.resposta]}</p>
          <p><strong>Explicação:</strong> ${question.explicacao}</p>
        </div>
        <div class="quiz-actions">
          <button class="btn btn--primary" onclick="nextQuestion()">
            ${quizState.currentQuestion < quizData.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function nextQuestion() {
  quizState.currentQuestion++;
  
  if (quizState.currentQuestion >= quizData.length) {
    quizState.showingResults = true;
  }
  
  renderQuiz();
}

function showQuizResults(content) {
  const percentage = Math.round((quizState.score / quizData.length) * 100);
  let performance = '';
  let perfClass = '';

  if (percentage >= 80) {
    performance = 'Excelente! Você domina bem o conteúdo!';
    perfClass = 'excellent';
  } else if (percentage >= 60) {
    performance = 'Bom! Continue estudando para melhorar.';
    perfClass = 'good';
  } else {
    performance = 'Continue estudando! Revise o material.';
    perfClass = 'needs-improvement';
  }

  content.innerHTML = `
    <div class="content-section active">
      <div class="quiz-results">
        <h2>Resultado Final</h2>
        <div class="score-display ${perfClass}">
          <div class="score-circle">${percentage}%</div>
          <p class="score-text">${quizState.score} de ${quizData.length} questões corretas</p>
        </div>
        <div class="performance-feedback">
          <p>${performance}</p>
        </div>
        <div class="quiz-actions">
          <button class="btn btn--outline" onclick="resetQuiz()">Refazer Quiz</button>
          <button class="btn btn--primary" onclick="location.href='#'">Voltar ao Início</button>
        </div>
      </div>
    </div>
  `;
}

function resetQuiz() {
  quizState = {
    currentQuestion: 0,
    score: 0,
    answers: [],
    showingResults: false
  };
  renderQuiz();
}