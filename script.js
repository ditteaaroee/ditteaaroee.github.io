// ══ TRANSLATIONS ══════════════════════════════════════════════════════════
const translations = {
  en: {
    // Nav
    "nav-about":    "About",
    "nav-cv":       "CV",
    "nav-projects": "Projects",
    "nav-stem":     "Volunteer",
    "nav-certs":    "Certifications",
    "nav-contact":  "Contact",

    // Hero
    "home-greeting":      "Hi, I'm",
    "hero-title":         "Ditte Aarøe Jepsen",
    "hero-bio":           "I turn data into insight. Passionate about machine learning, statistical modelling, and building tools that make sense of complex information.",
    "hero-cta-cv":        "Download CV",
    "hero-cta-projects":  "View Projects",
    "btn-cv":             "Download CV",

    // About
    "about-badge":      "About Me",
    "about-title":      "Transforming Data Into Decisions",
    "about-lead":       "Data Scientist with a strong foundation in statistics, machine learning, and analytical storytelling.",
    "about-bg-heading": "Background",
    "about-desc":       "Based in Denmark, I hold an MSc in Business Analytics from DTU. I currently work as a Data Scientist at KlimaID, developing data-driven solutions that support sustainable decisions. I enjoy working across the full data stack — from raw data wrangling to communicating insight to stakeholders.",

    // Skill categories
    "skill-cat-1": "Data Science",
    "skill-cat-2": "Visualisation",
    "skill-cat-3": "Machine Learning",
    "skill-cat-4": "Cloud & Tools",

    // Qualification
    "qual-badge":       "Journey",
    "qual-title":       "Education & Work",
    "qual-lead":        "My academic and professional journey.",
    "qual-education":   "Education",
    "qual-work":        "Work",
    "vol1-date":       "2024 – Present",
    "vol-badge-label": "Volunteer",

    // STEM section
    "stem-badge":         "Volunteering",
    "stem-title":         "STEM Role Model",
    "stem-lead":          "Inspiring the next generation of women in science and technology.",
    "stem-org-heading":   "About High5Girls",
    "stem-org-desc":      "High5Girls is a Danish non-profit founded in 2018 with a mission to create new stories about women in science and technology. They connect girls aged 7–19 with professional women role models through camps, Gå-til-Science afternoons, and networking events — helping young girls see themselves in tech and science careers.",
    "stem-event-heading": "Gå-til-Science Afternoon",
    "stem-event-desc":    "I designed and facilitated a hands-on afternoon session where participants downloaded their personal data exports from Instagram, Spotify, and Duolingo. Using a Streamlit app I built from scratch, they could visualise and explore patterns in their own digital footprint — from listening habits to learning streaks — making data science tangible, personal, and fun.",

    "edu1-title": "MSc in Business Analytics",
    "edu1-meta":  "Technical University of Denmark (DTU)",
    "edu2-title": "BSc in Data Science & Management",
    "edu2-meta":  "Technical University of Denmark (DTU)",

    "job1-title":      "Data Scientist",
    "job1-meta-short": "KlimaID",
    "job1-desc":       "Developing predictive models and data-driven solutions that support sustainable decision-making.",
    "job2-title":      "Student Consultant",
    "job2-meta-short": "ADC Consulting",
    "job2-desc":       "Built automated reporting pipelines and performed exploratory data analysis for clients.",

    // Projects
    "proj-badge":        "Work",
    "projects-heading":  "Featured Projects",
    "projects-subtitle": "A selection of recent work.",
    "proj1-title": "Project One",
    "proj1-desc":  "A short description of what this project does and why it is interesting.",
    "proj2-title": "Project Two",
    "proj2-desc":  "A short description of what this project does and why it is interesting.",
    "proj3-title": "Project Three",
    "proj3-desc":  "A short description of what this project does and why it is interesting.",
    "proj-link":   "View on GitHub",

    // Certifications
    "cert-badge":  "Credentials",
    "cert-title":  "Google Cloud Certifications",
    "cert-lead":   "Professional certifications from Google Cloud.",
    "cert1-name":  "Certificate Name",
    "cert1-date":  "Month YYYY",
    "cert2-name":  "Certificate Name",
    "cert2-date":  "Month YYYY",
    "cert3-name":  "Certificate Name",
    "cert3-date":  "Month YYYY",
    "cert-view":   "View credential →",

    // Contact
    "contact-badge":    "Contact",
    "contact-heading":  "Get in Touch",
    "contact-lead":     "Open to work, collaboration, or just a chat about data.",

    // Footer
    "footer-text": "Built with plain HTML/CSS · Hosted on GitHub Pages",
  },

  da: {
    // Nav
    "nav-about":    "Om mig",
    "nav-cv":       "CV",
    "nav-projects": "Projekter",
    "nav-stem":     "Frivillig",
    "nav-certs":    "Certifikater",
    "nav-contact":  "Kontakt",

    // Hero
    "home-greeting":      "Hej, jeg er",
    "hero-title":         "Ditte Aarøe Jepsen",
    "hero-bio":           "Jeg omsætter data til indsigt. Interesseret i maskinlæring, statistisk modellering og at bygge værktøjer, der giver mening i komplekse data.",
    "hero-cta-cv":        "Download CV",
    "hero-cta-projects":  "Se projekter",
    "btn-cv":             "Download CV",

    // About
    "about-badge":      "Om mig",
    "about-title":      "Fra Data til Beslutninger",
    "about-lead":       "Datavidenskabsmand med stærk baggrund i statistik, maskinlæring og analytisk formidling.",
    "about-bg-heading": "Baggrund",
    "about-desc":       "Baseret i Danmark med en kandidatgrad i Business Analytics fra DTU. Jeg arbejder som datavidenskabsmand hos KlimaID, hvor jeg udvikler datadrevne løsninger til bæredygtige beslutninger. Jeg nyder at arbejde på tværs af data-stacken — fra rå datahåndtering til formidling af indsigt til interessenter.",

    // Skill categories
    "skill-cat-1": "Data Science",
    "skill-cat-2": "Visualisering",
    "skill-cat-3": "Maskinlæring",
    "skill-cat-4": "Cloud & Værktøjer",

    // Qualification
    "qual-badge":       "Rejse",
    "qual-title":       "Uddannelse & Erfaring",
    "qual-lead":        "Min akademiske og professionelle rejse.",
    "qual-education":   "Uddannelse",
    "qual-work":        "Erfaring",
    "vol1-date":       "2024 – nu",
    "vol-badge-label": "Frivillig",

    // STEM section
    "stem-badge":         "Frivilligt arbejde",
    "stem-title":         "STEM-rollemodel",
    "stem-lead":          "Jeg inspirerer næste generation af kvinder i naturvidenskab og teknologi.",
    "stem-org-heading":   "Om High5Girls",
    "stem-org-desc":      "High5Girls er en dansk non-profit organisation grundlagt i 2018 med en mission om at skabe nye fortællinger om kvinder i naturvidenskab og teknologi. De forbinder piger fra 7–19 år med professionelle kvindelige rollemodeller inden for STEM gennem camps, Gå-til-Science-eftermiddage og netværksarrangementer.",
    "stem-event-heading": "Gå-til-Science-eftermiddag",
    "stem-event-desc":    "Jeg designede og faciliterede en hands-on eftermiddag, hvor deltagerne downloadede deres personlige dataeksporter fra Instagram, Spotify og Duolingo. Via en Streamlit-app, jeg byggede fra bunden, kunne de visualisere og udforske mønstre i eget digitale fodaftryk — fra lyttevaner til læringsrækker — og opleve data science som noget nærværende og sjovt.",

    "edu1-title": "Kandidat i Business Analytics",
    "edu1-meta":  "Danmarks Tekniske Universitet (DTU)",
    "edu2-title": "Bachelor i Data Science & Management",
    "edu2-meta":  "Danmarks Tekniske Universitet (DTU)",

    "job1-title":      "Datavidenskabsmand",
    "job1-meta-short": "KlimaID",
    "job1-desc":       "Udvikler prædiktive modeller og datadrevne løsninger til bæredygtig beslutningstagning.",
    "job2-title":      "Studenterkonsulent",
    "job2-meta-short": "ADC Consulting",
    "job2-desc":       "Byggede automatiserede rapporteringspipelines og udførte eksplorativ dataanalyse for kunder.",

    // Projects
    "proj-badge":        "Arbejde",
    "projects-heading":  "Udvalgte projekter",
    "projects-subtitle": "Et udvalg af nyligt arbejde.",
    "proj1-title": "Projekt Et",
    "proj1-desc":  "En kort beskrivelse af hvad projektet gør og hvorfor det er interessant.",
    "proj2-title": "Projekt To",
    "proj2-desc":  "En kort beskrivelse af hvad projektet gør og hvorfor det er interessant.",
    "proj3-title": "Projekt Tre",
    "proj3-desc":  "En kort beskrivelse af hvad projektet gør og hvorfor det er interessant.",
    "proj-link":   "Se på GitHub",

    // Certifications
    "cert-badge":  "Certifikater",
    "cert-title":  "Google Cloud Certifikater",
    "cert-lead":   "Professionelle certifikater fra Google Cloud.",
    "cert1-name":  "Certifikatnavn",
    "cert1-date":  "Måned ÅÅÅÅ",
    "cert2-name":  "Certifikatnavn",
    "cert2-date":  "Måned ÅÅÅÅ",
    "cert3-name":  "Certifikatnavn",
    "cert3-date":  "Måned ÅÅÅÅ",
    "cert-view":   "Se certifikat →",

    // Contact
    "contact-badge":    "Kontakt",
    "contact-heading":  "Sig hej",
    "contact-lead":     "Åben for arbejde, samarbejde eller bare en snak om data.",

    // Footer
    "footer-text": "Bygget med simpel HTML/CSS · Hostet på GitHub Pages",
  },
};

let currentLang = "en";

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  document.getElementById("lang-toggle").textContent = lang === "en" ? "DA" : "EN";
  currentLang = lang;
}

// ══ NAV: header shadow on scroll ══════════════════════════════════════════
window.addEventListener("scroll", () => {
  document.getElementById("site-header")
    .classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

// ══ NAV: active link highlight ════════════════════════════════════════════
function updateActiveLink() {
  const y = window.scrollY + 80;
  document.querySelectorAll("section[id]").forEach(sec => {
    const link = document.querySelector(`.nav__link[href="#${sec.id}"]`);
    if (!link) return;
    link.classList.toggle("active",
      y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight
    );
  });
}
window.addEventListener("scroll", updateActiveLink, { passive: true });

// ══ NAV: mobile hamburger ══════════════════════════════════════════════════
const navToggle = document.getElementById("nav-toggle");
const navLinks  = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
});

// Close on link click
navLinks.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
  });
});

// ══ QUALIFICATION TABS ════════════════════════════════════════════════════
document.querySelectorAll(".qual__tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".qual__tab").forEach(b => b.classList.remove("qual__tab--active"));
    document.querySelectorAll(".qual__content").forEach(c => c.classList.remove("qual__content--active"));

    btn.classList.add("qual__tab--active");
    document.getElementById("qual-" + btn.dataset.target)
      ?.classList.add("qual__content--active");
  });
});

// ══ SCROLL-UP BUTTON ══════════════════════════════════════════════════════
window.addEventListener("scroll", () => {
  document.getElementById("scroll-up")
    ?.classList.toggle("show", window.scrollY > 400);
}, { passive: true });

// ══ INIT ══════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-toggle").addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "da" : "en");
  });
  applyLanguage("en");
  updateActiveLink();
});
