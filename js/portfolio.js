'use strict';

const perspectives = {
  platform: { core: 'PLATFORM', nodes: ['Developer', 'Control plane', 'Guardrails', 'Compute', 'Observability', 'Operations'], caption: 'Good platforms connect developer autonomy with operational confidence.' },
  network: { core: 'DATAPATH', nodes: ['Workload', 'Cilium / eBPF', 'Network policy', 'Routing', 'Hubble', 'Validation'], caption: 'A network migration is a sequence of verifiable changes, with recovery designed in.' },
  workflow: { core: 'EXECUTION', nodes: ['Client', 'Task queue', 'Authorization', 'Workers', 'Event history', 'Recovery'], caption: 'Durable execution needs capacity, visibility, and a clear path through failure.' }
};

document.querySelectorAll('[data-system]').forEach(button => {
  button.addEventListener('click', () => {
    const perspective = perspectives[button.dataset.system];
    document.querySelector('.system').dataset.mode = button.dataset.system;
    document.querySelector('[data-core]').textContent = perspective.core;
    document.querySelectorAll('[data-node]').forEach(node => { node.textContent = perspective.nodes[Number(node.dataset.node)]; });
    document.querySelector('.system-caption').textContent = perspective.caption;
    document.querySelectorAll('[data-system]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
  });
});

const roles = {
  oracle: {
    location: 'AUSTIN, TEXAS / SEP 2022 — PRESENT',
    title: ['Lead Principal', 'Site Reliability Engineer'],
    description: 'Building and operating the foundations of cloud platforms: Kubernetes fleet lifecycle, network modernization, workflow reliability, and security guardrails.',
    points: ['Operate 400+ production Kubernetes clusters and build centralized discovery across a roughly 30,000-cluster global fleet.', 'Engineer Go automation for node lifecycle, CNI migration, and admission controls.', 'Lead cross-team architecture, incident response, and FOCUS-aligned cost ownership for shared platform services.'],
    stack: 'Go / Kubernetes / OCI / Cilium / Temporal'
  },
  blackrock: {
    location: 'SAN FRANCISCO & NEW YORK / SEP 2016 — SEP 2022',
    title: ['Vice President', 'Lead Site Reliability Engineer'],
    description: 'Progressed from Associate in Platform & Data Engineering (2016–2019) to Vice President / Lead SRE (2019–2022), building platforms for Aladdin engineering teams.',
    points: ['Led and mentored a distributed 12-engineer platform team across San Francisco and New York.', 'Architected self-service Kubernetes provisioning with Cluster API and ArgoCD, moving setup from days to minutes.', 'Delivered API authentication and authorization architecture, container-native data infrastructure, and distributed workflow tooling.'],
    stack: 'Cluster API / ArgoCD / OpenShift / Go / gRPC'
  },
  toyota: {
    location: 'LOS ANGELES / MAY 2016 — SEP 2016',
    title: ['Lead Performance Engineer', 'Senior Associate'],
    description: 'Improved enterprise application performance for Toyota’s corporate accessory design and management platform.',
    points: ['Diagnosed bottlenecks across a complex JSF application and its database access paths.', 'Used Java Executor services and concurrent execution to improve throughput and meet application service objectives.', 'Worked with stakeholders to translate performance requirements into targeted engineering changes.'],
    stack: 'Java / Concurrency / JSF / Hibernate / Oracle Database'
  },
  northern: {
    location: 'CHICAGO & CHENNAI / FEB 2012 — MAY 2016',
    title: ['Systems Engineer', 'Technical Project Coordinator'],
    description: 'Delivered financial software for Northern Trust through Tata Consultancy Services, progressing from hands-on development in Chennai to onsite coordination in Chicago.',
    points: ['Built private-equity, investment-operations, and treasury workflows using Java and enterprise database systems.', 'Developed reconciliation, batch orchestration, and APAC treasury file-extract automation using test-driven development.', 'Coordinated onshore and offshore delivery, conducted design and code reviews, and supported production releases.'],
    stack: 'Java / J2EE / Spring / Oracle Database / TDD'
  }
};

const careerTabs = [...document.querySelectorAll('[data-career]')];
function selectCareer(button) {
  const role = roles[button.dataset.career];
  careerTabs.forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.querySelector('#career-panel').setAttribute('aria-labelledby', button.id);
  document.querySelector('[data-career-location]').textContent = role.location;
  const title = document.querySelector('[data-career-title]');
  title.replaceChildren(document.createTextNode(role.title[0]), document.createElement('br'), document.createTextNode(role.title[1]));
  document.querySelector('[data-career-description]').textContent = role.description;
  document.querySelector('[data-career-points]').replaceChildren(...role.points.map(point => {
    const item = document.createElement('li');
    item.textContent = point;
    return item;
  }));
  document.querySelector('[data-career-stack]').textContent = role.stack;
}
careerTabs.forEach((button, index) => {
  button.addEventListener('click', () => selectCareer(button));
  button.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % careerTabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + careerTabs.length) % careerTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = careerTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectCareer(careerTabs[next]);
      careerTabs[next].focus();
    }
  });
});
document.querySelector('[data-year]').textContent = new Date().getFullYear();
