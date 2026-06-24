const names = [
  ["Ad-Darr", "The Distresser"],
  ["Al-'Adl", "The Just"],
  ["Al-'Afuww", "The Pardoner"],
  ["Al-'Ali", "The Most High"],
  ["Al-'Alim", "The All-Knowing"],
  ["Al-'Azim", "The Magnificent"],
  ["Al-'Aziz", "The Almighty"],
  ["Al-Ahad", "The One"],
  ["Al-Akhir", "The Last"],
  ["Al-Awwal", "The First"],
  ["Al-Badi", "The Incomparable Originator"],
  ["Al-Ba'ith", "The Resurrector"],
  ["Al-Baqi", "The Everlasting"],
  ["Al-Bari", "The Maker"],
  ["Al-Barr", "The Source of Goodness"],
  ["Al-Basir", "The All-Seeing"],
  ["Al-Basit", "The Expander"],
  ["Al-Batin", "The Hidden"],
  ["Al-Fattah", "The Opener"],
  ["Al-Ghaffar", "The Constant Forgiver"],
  ["Al-Ghafur", "The All-Forgiving"],
  ["Al-Ghani", "The Self-Sufficient"],
  ["Al-Hadi", "The Guide"],
  ["Al-Hafiz", "The Preserver"],
  ["Al-Hakam", "The Judge"],
  ["Al-Hakim", "The Wise"],
  ["Al-Halim", "The Forbearing"],
  ["Al-Hamid", "The Praiseworthy"],
  ["Al-Haqq", "The Truth"],
  ["Al-Hasib", "The Reckoner"],
  ["Al-Hayy", "The Ever-Living"],
  ["Al-Jabbar", "The Restorer"],
  ["Al-Jalil", "The Majestic"],
  ["Al-Jami", "The Gatherer"],
  ["Al-Kabir", "The Great"],
  ["Al-Karim", "The Generous"],
  ["Al-Khabir", "The All-Aware"],
  ["Al-Khafid", "The Abaser"],
  ["Al-Khaliq", "The Creator"],
  ["Al-Latif", "The Subtle"],
  ["Al-Maajid", "The Noble"],
  ["Al-Majid", "The Glorious"],
  ["Al-Malik", "The King"],
  ["Al-Mani", "The Withholder"],
  ["Al-Matin", "The Firm"],
  ["Al-Mu'akhkhir", "The Delayer"],
  ["Al-Mu'izz", "The Honorer"],
  ["Al-Mubdi", "The Originator"],
  ["Al-Mudhill", "The Dishonorer"],
  ["Al-Mughni", "The Enricher"],
  ["Al-Muhaymin", "The Guardian"],
  ["Al-Muhsi", "The Enumerator"],
  ["Al-Muhyi", "The Giver of Life"],
  ["Al-Mu'id", "The Restorer"],
  ["Al-Mujib", "The Responsive"],
  ["Al-Mu'min", "The Giver of Faith"],
  ["Al-Mumit", "The Bringer of Death"],
  ["Al-Muntaqim", "The Avenger"],
  ["Al-Muqaddim", "The Expediter"],
  ["Al-Muqit", "The Nourisher"],
  ["Al-Muqsit", "The Equitable"],
  ["Al-Muqtadir", "The Powerful"],
  ["Al-Musawwir", "The Fashioner"],
  ["Al-Muta'ali", "The Supremely Exalted"],
  ["Al-Mutakabbir", "The Supreme"],
  ["Al-Qabid", "The Restrainer"],
  ["Al-Qadir", "The Capable"],
  ["Al-Qahhar", "The Subduer"],
  ["Al-Qawi", "The Strong"],
  ["Al-Qayyum", "The Sustainer"],
  ["Al-Quddus", "The Most Holy"],
  ["Al-Wadud", "The Loving"],
  ["Al-Wahhab", "The Bestower"],
  ["Al-Wahid", "The Unique One"],
  ["Al-Wajid", "The Finder"],
  ["Al-Wakil", "The Trustee"],
  ["Al-Wali", "The Protecting Governor"],
  ["Al-Waliyy", "The Protecting Friend"],
  ["Al-Warith", "The Inheritor"],
  ["Al-Wasi", "The All-Encompassing"],
  ["An-Nafi", "The Benefactor"],
  ["An-Nur", "The Light"],
  ["Ar-Rafi", "The Exalter"],
  ["Ar-Ra'uf", "The Kind"],
  ["Ar-Rahim", "The Especially Merciful"],
  ["Ar-Rahman", "The Most Merciful"],
  ["Ar-Raqib", "The Watchful"],
  ["Ar-Rashid", "The Guide to the Right Path"],
  ["Ar-Razzaq", "The Provider"],
  ["As-Sabur", "The Patient"],
  ["As-Salam", "The Source of Peace"],
  ["As-Samad", "The Eternal Refuge"],
  ["As-Sami", "The All-Hearing"],
  ["Ash-Shahid", "The Witness"],
  ["Ash-Shakur", "The Appreciative"],
  ["At-Tawwab", "The Acceptor of Repentance"],
  ["Az-Zahir", "The Manifest"],
  ["Dhul-Jalali wal-Ikram", "The Lord of Majesty and Honor"],
  ["Malik al-Mulk", "Master of the Kingdom"]
].sort((a, b) => a[0].localeCompare(b[0]));

const storageKey = "asma-reflection-notes-v1";
const fields = [
  "extendedMeaning",
  "creationPodcast",
  "creationLife",
  "embodyPodcast",
  "embodyLife",
  "additionalNotes"
];

const namesList = document.querySelector("#namesList");
const selectedName = document.querySelector("#selectedName");
const shortMeaning = document.querySelector("#shortMeaning");
const clearName = document.querySelector("#clearName");
const menuToggle = document.querySelector("#menuToggle");
const menuClose = document.querySelector("#menuClose");
const menuOverlay = document.querySelector("#menuOverlay");
const brandBackground = document.querySelector(".brand-background");
const cursorLayer = document.querySelector(".cursor-layer");
const cursorDot = document.querySelector(".cursor-dot");
const fieldEls = Object.fromEntries(fields.map((id) => [id, document.querySelector(`#${id}`)]));
const sparkles = Array.from({ length: 280 }).map((_, index) => {
  const angle = index * 0.61;
  return {
    x: Math.cos(angle) * (120 + (index % 11) * 82),
    y: Math.sin(angle) * (95 + (index % 9) * 68),
    size: 2 + (index % 5),
    delay: (index % 13) * 0.18
  };
});
const cursorTrail = Array.from({ length: 11 });

let activeId = slugify(names[0][0]);
let notes = loadNotes();

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function loadNotes() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveNotes() {
  localStorage.setItem(storageKey, JSON.stringify(notes));
}

function isFilled(id) {
  return fields.some((field) => notes[id]?.[field]?.trim());
}

function renderNames() {
  namesList.innerHTML = "";

  names.forEach(([name, meaning]) => {
    const id = slugify(name);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "name-button";
    button.dataset.id = id;
    button.dataset.meaning = meaning;
    button.innerHTML = `<span>${name}</span>`;
    button.setAttribute("aria-label", `${name}, ${meaning}`);
    button.addEventListener("click", () => {
      selectName(id);
      closeMenu();
    });
    namesList.append(button);
  });

  updateSidebarStates();
}

function openMenu() {
  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (document.body.classList.contains("menu-open")) {
    closeMenu();
    return;
  }

  openMenu();
}

function updateSidebarStates() {
  document.querySelectorAll(".name-button").forEach((button) => {
    const id = button.dataset.id;
    button.classList.toggle("is-active", id === activeId);
    button.classList.toggle("is-filled", isFilled(id));
  });
}

function selectName(id) {
  activeId = id;
  const [name, meaning] = names.find(([item]) => slugify(item) === id);
  selectedName.textContent = name;
  shortMeaning.textContent = meaning;

  fields.forEach((field) => {
    fieldEls[field].value = notes[id]?.[field] || "";
  });

  updateSidebarStates();
}

function updateActiveNotes() {
  notes[activeId] = fields.reduce((acc, field) => {
    acc[field] = fieldEls[field].value;
    return acc;
  }, {});

  if (!isFilled(activeId)) {
    delete notes[activeId];
  }

  saveNotes();
  updateSidebarStates();
}

fields.forEach((field) => {
  fieldEls[field].addEventListener("input", updateActiveNotes);
});

clearName.addEventListener("click", () => {
  delete notes[activeId];
  saveNotes();
  fields.forEach((field) => {
    fieldEls[field].value = "";
  });
  updateSidebarStates();
});

menuToggle.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

function renderSparkles() {
  sparkles.forEach((sparkle) => {
    const element = document.createElement("span");
    element.className = "sparkle";
    element.style.setProperty("--sparkle-x", `${sparkle.x}px`);
    element.style.setProperty("--sparkle-y", `${sparkle.y}px`);
    element.style.width = `${sparkle.size}px`;
    element.style.height = `${sparkle.size}px`;
    element.style.animationDelay = `${sparkle.delay}s`;
    brandBackground.append(element);
  });
}

function initCursor() {
  const trailEls = cursorTrail.map(() => {
    const element = document.createElement("span");
    element.className = "cursor-trail";
    cursorLayer.append(element);
    return element;
  });

  const pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };

  const positions = Array.from({ length: 12 }).map(() => ({
    x: pointer.x,
    y: pointer.y
  }));

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  window.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      pointer.x = touch.clientX;
      pointer.y = touch.clientY;
    },
    { passive: true }
  );

  const animate = () => {
    positions[0].x += (pointer.x - positions[0].x) * 0.22;
    positions[0].y += (pointer.y - positions[0].y) * 0.22;

    for (let index = 1; index < positions.length; index += 1) {
      positions[index].x += (positions[index - 1].x - positions[index].x) * 0.2;
      positions[index].y += (positions[index - 1].y - positions[index].y) * 0.2;
    }

    cursorDot.style.transform = `translate(${positions[0].x}px, ${positions[0].y}px)`;
    trailEls.forEach((element, index) => {
      element.style.transform = `translate(${positions[index + 1].x}px, ${positions[index + 1].y}px)`;
    });

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}

renderSparkles();
initCursor();
renderNames();
selectName(activeId);
