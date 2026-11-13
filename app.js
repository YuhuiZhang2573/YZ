const cases = {
  content: { title: 'AI-enabled content transformation', intro: 'Data Analyst Internship · CICC Wealth Management · June–August 2024', sections: [
    ['The context', 'The team worked on AI-enabled content creation and distribution. The challenge involved connecting content transformation with usable reporting and the surrounding user workflow.'],
    ['My contribution', 'Contributed to an AI-powered financial-content transformation platform using Python, PowerPoint, and Canva; collaborated with IT and UI teams on integration. Designed a Tableau dashboard to visualize AI-model contributions and helped prototype and test content-related projects.'],
    ['What this demonstrates', 'Translating a business workflow into a prototype, collaborating across teams, and using visualization to make a process easier to understand.'],
    ['Public availability', 'This is a summary of internship work, not a standalone public application. Company code, internal datasets, and product screenshots are not published here.'] ] },
  research: { title: 'Behavioral data & predictive modeling', intro: 'Research Assistant · University of Wisconsin–Madison · September–December 2024', sections: [
    ['The context', 'Supported outcome-prediction research using behavioral datasets, with attention to data preparation and the comparison of different modeling approaches.'],
    ['My contribution', 'Collected, cleaned, and preprocessed data using Python and R. Performed exploratory analysis and implemented MLP and FT-Transformer models alongside Ridge and Lasso baselines in a unified pipeline. Evaluated performance and conducted diagnostics to examine reliability and generalization.'],
    ['What this demonstrates', 'Data preparation, baseline comparison, model evaluation, and communicating analytical findings for research use.'],
    ['Reading the illustration', 'The chart on this site identifies model families only. Bar heights are decorative and do not represent measured performance. Research data, scores, and code are not included in this public summary.'] ] },
  automation: { title: 'Automating data preparation & reporting', intro: 'Business Analyst Internship · Apple · May–August 2023', sections: [
    ['The context', 'Working with data from partner companies required repeated cleaning, integration, error checking, and reporting.'],
    ['My contribution', 'Used Python to automate processing of varied partner data, including cleaning, integration, and error checking. Built Tableau visualizations of sales data and prepared weekly reports and recommendations for stakeholders. Also contributed to the Apple Coach training-platform project through UI work and feedback analysis.'],
    ['What this demonstrates', 'Turning repeatable analytical work into a clearer process, understanding stakeholder needs, and communicating data through reporting and visualization.'],
    ['Public availability', 'The workflow illustration is a conceptual reconstruction. This page does not expose internal Apple materials or claim to provide a public version of the internship system.'] ] }
};
const dialog = document.getElementById('case-dialog');
let trigger;
document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
  trigger = button;
  const entry = cases[button.dataset.case];
  const body = document.getElementById('case-body');
  body.replaceChildren();
  const title = document.createElement('h2'); title.id = 'case-title'; title.textContent = entry.title; body.append(title);
  const intro = document.createElement('p'); intro.textContent = entry.intro; body.append(intro);
  entry.sections.forEach(([heading, text]) => { const h = document.createElement('h3'); h.textContent = heading; const p = document.createElement('p'); p.textContent = text; body.append(h, p); });
  dialog.showModal();
}));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
dialog.addEventListener('close', () => trigger?.focus());
