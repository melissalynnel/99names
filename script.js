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
const spotifyEpisodes = {
  "al-fattah": "https://open.spotify.com/episode/150C3cmd7diNRaGWLKKvm1",
  "ash-shakur": "https://open.spotify.com/episode/2F5T8lWLu530POcwthyZRd",
  "al-karim": "https://open.spotify.com/episode/6mHoHCetvPRcngvCLlI3OG",
  "al-wakil": "https://open.spotify.com/episode/1J1ZySdtH69M7ga6QdIiWf",
  "al-wadud": "https://open.spotify.com/episode/6dsGsqMBXECyDKiw3nM7nU",
  "at-tawwab": "https://open.spotify.com/episode/6ceAFbzuNWFzc0uxY9agrT",
  "al-hadi": "https://open.spotify.com/episode/32eXWCge4crCSYhVPWRdpX",
  "al-qabid": "https://open.spotify.com/episode/7AC0l8LK0cHTtjsxt6m5KC",
  "al-basit": "https://open.spotify.com/episode/7AC0l8LK0cHTtjsxt6m5KC",
  "az-zahir": "https://open.spotify.com/episode/4xBv7mo3njx9EQPw9Ev33M",
  "al-batin": "https://open.spotify.com/episode/4xBv7mo3njx9EQPw9Ev33M",
  "al-ghani": "https://open.spotify.com/episode/1gzweafezVmqAwYBItm9kM",
  "al-mu-izz": "https://open.spotify.com/episode/0w5NFRpkV3U95RQcIjpr0j",
  "al-mudhill": "https://open.spotify.com/episode/0w5NFRpkV3U95RQcIjpr0j",
  "as-salam": "https://open.spotify.com/episode/3jwFwXo7eCeaynh0YR1Ud3",
  "al-wahhab": "https://open.spotify.com/episode/1Nxk8jtmx678iQPne1L5r6",
  "al-jabbar": "https://open.spotify.com/episode/7jMcCuWbKQ6MV4fSXn6UyM",
  "al-muqaddim": "https://open.spotify.com/episode/2Pl5SQnD2judoxq6L50rnr",
  "al-mu-akhkhir": "https://open.spotify.com/episode/2Pl5SQnD2judoxq6L50rnr",
  "al-mujib": "https://open.spotify.com/episode/131M6MLrfZOxEqGYcPuClG",
  "al-latif": "https://open.spotify.com/episode/5v1HsOM4YxJEIawfzaCSB6",
  "an-nur": "https://open.spotify.com/episode/4cQ1b3B9Nf5GSNbh002JOl",
  "ar-razzaq": "https://open.spotify.com/episode/2bBQGWt71BanGhIbOY3CoR",
  "al-afuww": "https://open.spotify.com/episode/3X5DYznqCHuknXq2uhrVAp",
  "as-sami": "https://open.spotify.com/episode/5pbeE76KG7MPyvtmsH9mB0",
  "al-mani": "https://open.spotify.com/episode/4vX3aWNPSxa6V5kSITIiB8",
  "al-hasib": "https://open.spotify.com/episode/5MzUGVCzBztuR0BPFxvpIV",
  "al-hakim": "https://open.spotify.com/episode/1DqBkSHHItRCi0g4046G5C",
  "al-qawi": "https://open.spotify.com/episode/0yePziYu2IKVgM6mnRLblR",
  "al-hamid": "https://open.spotify.com/episode/1nL9izoFt5qrFfaqi5yRuA"
};
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
const spotifyLink = document.querySelector("#spotifyLink");
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
  const episodeUrl = spotifyEpisodes[id];
  spotifyLink.hidden = !episodeUrl;
  spotifyLink.href = episodeUrl || "#";
  spotifyLink.setAttribute("aria-label", episodeUrl ? `Listen to the ${name} episode on Spotify` : "");

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
