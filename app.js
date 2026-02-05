// PFL2 Fitness App - Main Application Logic

// Workout Programs Data
const workoutPrograms = {
    lundi: {
        name: "Haut du corps",
        duration: 45,
        exercises: [
            { name: "Échauffement", description: "Rotations des bras et épaules", reps: "2 min", equipment: "Sans équipement" },
            { name: "Développé couché", description: "Allongé, pousser la barre vers le haut", reps: "4 × 10", equipment: "Barre 30kg" },
            { name: "Rowing barre", description: "Penché en avant, tirer la barre vers le ventre", reps: "4 × 10", equipment: "Barre 30kg" },
            { name: "Développé épaules", description: "Debout, pousser les haltères au-dessus de la tête", reps: "3 × 12", equipment: "Haltères 15kg" },
            { name: "Rowing haltères", description: "Un bras à la fois, tirer vers la hanche", reps: "3 × 12", equipment: "Haltères 15kg" },
            { name: "Biceps curl", description: "Debout, flexion des bras", reps: "3 × 15", equipment: "Haltères 10kg" },
            { name: "Extension triceps", description: "Au-dessus de la tête, extension des bras", reps: "3 × 15", equipment: "Haltères 10kg" },
            { name: "Élévations latérales", description: "Bras tendus, lever sur les côtés", reps: "3 × 15", equipment: "Haltères 5kg" },
            { name: "Curl marteau", description: "Paumes face à face, flexion", reps: "3 × 12", equipment: "Haltères 10kg" },
            { name: "Dips sur chaise", description: "Mains sur une chaise, descendre et remonter", reps: "3 × 10", equipment: "Sans équipement" },
            { name: "Pompes", description: "Au sol, pousser le corps vers le haut", reps: "3 × max", equipment: "Sans équipement" },
            { name: "Étirements", description: "Étirer tous les muscles travaillés", reps: "5 min", equipment: "Sans équipement" }
        ]
    },
    mardi: {
        name: "Cardio Vélo",
        duration: 45,
        exercises: [
            { name: "Échauffement vélo", description: "Pédalage léger pour échauffer", reps: "5 min", equipment: "Vélo" },
            { name: "Intervalle rapide 1", description: "Pédalage intense, haute résistance", reps: "1 min", equipment: "Vélo" },
            { name: "Récupération 1", description: "Pédalage modéré", reps: "2 min", equipment: "Vélo" },
            { name: "Intervalle rapide 2", description: "Pédalage intense, haute résistance", reps: "1 min", equipment: "Vélo" },
            { name: "Récupération 2", description: "Pédalage modéré", reps: "2 min", equipment: "Vélo" },
            { name: "Intervalle rapide 3", description: "Pédalage très intense", reps: "1 min 30", equipment: "Vélo" },
            { name: "Récupération 3", description: "Pédalage léger", reps: "2 min", equipment: "Vélo" },
            { name: "Endurance", description: "Rythme constant et soutenu", reps: "15 min", equipment: "Vélo" },
            { name: "Sprint final", description: "Effort maximum", reps: "1 min", equipment: "Vélo" },
            { name: "Récupération active", description: "Pédalage très léger", reps: "5 min", equipment: "Vélo" },
            { name: "Étirements jambes", description: "Quadriceps, ischio-jambiers, mollets", reps: "5 min", equipment: "Sans équipement" },
            { name: "Retour au calme", description: "Respiration profonde, relaxation", reps: "3 min", equipment: "Sans équipement" }
        ]
    },
    mercredi: {
        name: "Bas du corps",
        duration: 45,
        exercises: [
            { name: "Échauffement", description: "Squats légers et rotations de hanches", reps: "3 min", equipment: "Sans équipement" },
            { name: "Squats barre", description: "Barre sur les épaules, descendre et remonter", reps: "4 × 12", equipment: "Barre 30kg" },
            { name: "Soulevé de terre", description: "Barre au sol, soulever en gardant le dos droit", reps: "4 × 10", equipment: "Barre 30kg" },
            { name: "Fentes avant", description: "Pas en avant, descendre le genou arrière", reps: "3 × 12/jambe", equipment: "Haltères 15kg" },
            { name: "Squats goblet", description: "Haltère contre la poitrine, squat profond", reps: "3 × 15", equipment: "Haltères 15kg" },
            { name: "Step-ups", description: "Monter sur une marche en alternant", reps: "3 × 12/jambe", equipment: "Haltères 10kg" },
            { name: "Fentes latérales", description: "Pas sur le côté, plier une jambe", reps: "3 × 10/côté", equipment: "Haltères 10kg" },
            { name: "Pont fessiers", description: "Allongé, lever les hanches", reps: "4 × 15", equipment: "Sans équipement" },
            { name: "Mollets debout", description: "Monter sur la pointe des pieds", reps: "4 × 20", equipment: "Haltères 15kg" },
            { name: "Squat isométrique", description: "Tenir la position basse", reps: "3 × 30s", equipment: "Sans équipement" },
            { name: "Extension jambes", description: "Assis, lever une jambe tendue", reps: "3 × 12/jambe", equipment: "Sans équipement" },
            { name: "Étirements", description: "Étirer quadriceps, ischio-jambiers, fessiers", reps: "5 min", equipment: "Sans équipement" }
        ]
    },
    jeudi: {
        name: "Full Body",
        duration: 50,
        exercises: [
            { name: "Échauffement dynamique", description: "Jumping jacks et montées de genoux", reps: "3 min", equipment: "Sans équipement" },
            { name: "Squat + développé", description: "Squat puis pousser les haltères en haut", reps: "4 × 10", equipment: "Haltères 10kg" },
            { name: "Rowing barre", description: "Penché, tirer la barre vers le ventre", reps: "4 × 12", equipment: "Barre 30kg" },
            { name: "Fentes marchées", description: "Avancer en faisant des fentes", reps: "3 × 20 pas", equipment: "Haltères 5kg" },
            { name: "Développé couché", description: "Allongé, pousser les haltères", reps: "4 × 12", equipment: "Haltères 15kg" },
            { name: "Soulevé roumain", description: "Jambes tendues, descendre la barre", reps: "3 × 12", equipment: "Barre 30kg" },
            { name: "Curl + extension", description: "Curl biceps puis extension triceps", reps: "3 × 12", equipment: "Haltères 10kg" },
            { name: "Squat sauté", description: "Squat puis sauter explosif", reps: "3 × 10", equipment: "Sans équipement" },
            { name: "Planche", description: "Tenir la position gainage", reps: "3 × 45s", equipment: "Sans équipement" },
            { name: "Mountain climbers", description: "Position pompe, genoux vers la poitrine", reps: "3 × 30s", equipment: "Sans équipement" },
            { name: "Burpees modifiés", description: "Squat, descendre, remonter", reps: "3 × 8", equipment: "Sans équipement" },
            { name: "Étirements complets", description: "Étirer tout le corps", reps: "5 min", equipment: "Sans équipement" }
        ]
    },
    vendredi: {
        name: "HIIT",
        duration: 30,
        exercises: [
            { name: "Échauffement", description: "Marche rapide sur place", reps: "2 min", equipment: "Sans équipement" },
            { name: "Burpees", description: "Mouvement complet explosif", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Mountain climbers", description: "Genoux alternés vers la poitrine", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Squats sautés", description: "Squat puis explosion vers le haut", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Pompes", description: "Pompes rapides", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Jumping jacks", description: "Sauts écartés", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Planche", description: "Gainage statique", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "High knees", description: "Montées de genoux rapides", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Swing haltère", description: "Balancer l'haltère entre les jambes", reps: "45s travail / 15s repos", equipment: "Haltère 15kg" },
            { name: "Fentes sautées", description: "Alterner les fentes en sautant", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Crunchs vélo", description: "Abdos avec rotation", reps: "45s travail / 15s repos", equipment: "Sans équipement" },
            { name: "Étirements", description: "Retour au calme et étirements", reps: "3 min", equipment: "Sans équipement" }
        ]
    },
    samedi: {
        name: "Marche Active",
        duration: 60,
        exercises: [
            { name: "Échauffement", description: "Marche lente pour commencer", reps: "5 min", equipment: "Sans équipement" },
            { name: "Marche modérée", description: "Augmenter le rythme progressivement", reps: "10 min", equipment: "Sans équipement" },
            { name: "Marche rapide", description: "Rythme soutenu, bras actifs", reps: "10 min", equipment: "Sans équipement" },
            { name: "Intervalle sprint", description: "30s marche très rapide, 30s normale", reps: "5 min", equipment: "Sans équipement" },
            { name: "Marche en côte", description: "Chercher une montée ou simuler", reps: "10 min", equipment: "Sans équipement" },
            { name: "Marche rapide", description: "Maintenir un bon rythme", reps: "10 min", equipment: "Sans équipement" },
            { name: "Intervalle final", description: "Alterner rapide et modéré", reps: "5 min", equipment: "Sans équipement" },
            { name: "Retour au calme", description: "Ralentir progressivement", reps: "5 min", equipment: "Sans équipement" },
            { name: "Étirements mollets", description: "Étirer les mollets", reps: "1 min", equipment: "Sans équipement" },
            { name: "Étirements cuisses", description: "Quadriceps et ischio-jambiers", reps: "2 min", equipment: "Sans équipement" },
            { name: "Étirements hanches", description: "Fléchisseurs et fessiers", reps: "1 min", equipment: "Sans équipement" },
            { name: "Respiration", description: "Respiration profonde, relaxation", reps: "2 min", equipment: "Sans équipement" }
        ]
    },
    dimanche: {
        name: "Repos Actif",
        duration: 30,
        exercises: [
            { name: "Respiration profonde", description: "Inspirer 4s, retenir 4s, expirer 4s", reps: "3 min", equipment: "Sans équipement" },
            { name: "Rotation du cou", description: "Cercles lents de la tête", reps: "1 min", equipment: "Sans équipement" },
            { name: "Rotation épaules", description: "Grands cercles des bras", reps: "1 min", equipment: "Sans équipement" },
            { name: "Chat-vache", description: "À 4 pattes, arrondir et creuser le dos", reps: "2 min", equipment: "Sans équipement" },
            { name: "Étirement enfant", description: "Position fœtale, bras tendus devant", reps: "2 min", equipment: "Sans équipement" },
            { name: "Torsion spinale", description: "Allongé, genoux d'un côté, tête de l'autre", reps: "2 min/côté", equipment: "Sans équipement" },
            { name: "Papillon", description: "Assis, plantes des pieds ensemble", reps: "2 min", equipment: "Sans équipement" },
            { name: "Fente basse", description: "Étirement profond des hanches", reps: "2 min/côté", equipment: "Sans équipement" },
            { name: "Pli avant", description: "Debout, se pencher vers les orteils", reps: "2 min", equipment: "Sans équipement" },
            { name: "Étirement quadriceps", description: "Debout, talon vers fesse", reps: "1 min/jambe", equipment: "Sans équipement" },
            { name: "Étirement mollets", description: "Contre un mur, jambe tendue", reps: "1 min/jambe", equipment: "Sans équipement" },
            { name: "Méditation", description: "Assis confortablement, se détendre", reps: "5 min", equipment: "Sans équipement" }
        ]
    }
};

// Application State
let appState = {
    currentDay: 'lundi',
    currentExerciseIndex: 0,
    isRunning: false,
    isPaused: false,
    autoMode: false,
    timerInterval: null,
    pauseInterval: null,
    elapsedSeconds: 0,
    settings: {
        pauseDuration: 5,
        exerciseDuration: 45,
        currentWeight: 140,
        goalWeight: 120
    }
};

// DOM Elements
const elements = {
    daySelect: null,
    currentExercise: null,
    totalExercises: null,
    exerciseName: null,
    exerciseDescription: null,
    exerciseReps: null,
    exerciseEquipment: null,
    timerValue: null,
    pauseIndicator: null,
    pauseCountdown: null,
    startBtn: null,
    pauseBtn: null,
    nextBtn: null,
    prevBtn: null,
    autoModeToggle: null,
    workoutProgress: null,
    pauseDurationInput: null,
    exerciseDurationInput: null,
    currentWeightInput: null,
    goalWeightInput: null,
    saveSettingsBtn: null
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    loadSettings();
    setupEventListeners();
    updateExerciseDisplay();
});

function initializeElements() {
    elements.daySelect = document.getElementById('day-select');
    elements.currentExercise = document.getElementById('current-exercise');
    elements.totalExercises = document.getElementById('total-exercises');
    elements.exerciseName = document.getElementById('exercise-name');
    elements.exerciseDescription = document.getElementById('exercise-description');
    elements.exerciseReps = document.getElementById('exercise-reps');
    elements.exerciseEquipment = document.getElementById('exercise-equipment');
    elements.timerValue = document.getElementById('timer-value');
    elements.pauseIndicator = document.getElementById('pause-indicator');
    elements.pauseCountdown = document.getElementById('pause-countdown');
    elements.startBtn = document.getElementById('start-btn');
    elements.pauseBtn = document.getElementById('pause-btn');
    elements.nextBtn = document.getElementById('next-btn');
    elements.prevBtn = document.getElementById('prev-btn');
    elements.autoModeToggle = document.getElementById('auto-mode-toggle');
    elements.workoutProgress = document.getElementById('workout-progress');
    elements.pauseDurationInput = document.getElementById('pause-duration');
    elements.exerciseDurationInput = document.getElementById('exercise-duration');
    elements.currentWeightInput = document.getElementById('current-weight');
    elements.goalWeightInput = document.getElementById('goal-weight');
    elements.saveSettingsBtn = document.getElementById('save-settings');
}

function setupEventListeners() {
    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Day Selection
    elements.daySelect.addEventListener('change', (e) => {
        appState.currentDay = e.target.value;
        appState.currentExerciseIndex = 0;
        stopWorkout();
        updateExerciseDisplay();
    });

    // Workout Controls
    elements.startBtn.addEventListener('click', toggleWorkout);
    elements.pauseBtn.addEventListener('click', togglePause);
    elements.nextBtn.addEventListener('click', nextExercise);
    elements.prevBtn.addEventListener('click', prevExercise);

    // Auto Mode
    elements.autoModeToggle.addEventListener('change', (e) => {
        appState.autoMode = e.target.checked;
    });

    // Settings
    elements.saveSettingsBtn.addEventListener('click', saveSettings);
}

function switchTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });
}

function updateExerciseDisplay() {
    const program = workoutPrograms[appState.currentDay];
    const exercise = program.exercises[appState.currentExerciseIndex];

    elements.currentExercise.textContent = appState.currentExerciseIndex + 1;
    elements.totalExercises.textContent = program.exercises.length;
    elements.exerciseName.textContent = exercise.name;
    elements.exerciseDescription.textContent = exercise.description;
    elements.exerciseReps.textContent = `📊 ${exercise.reps}`;
    elements.exerciseEquipment.textContent = `🏋️ ${exercise.equipment}`;

    // Update progress bar
    const progress = ((appState.currentExerciseIndex + 1) / program.exercises.length) * 100;
    elements.workoutProgress.style.width = `${progress}%`;
}

function toggleWorkout() {
    if (appState.isRunning) {
        stopWorkout();
    } else {
        startWorkout();
    }
}

function startWorkout() {
    appState.isRunning = true;
    appState.isPaused = false;
    appState.elapsedSeconds = 0;

    elements.startBtn.textContent = '⏹️ Arrêter';
    elements.pauseBtn.disabled = false;
    elements.nextBtn.disabled = false;
    elements.prevBtn.disabled = false;

    startTimer();
}

function stopWorkout() {
    appState.isRunning = false;
    appState.isPaused = false;
    
    clearInterval(appState.timerInterval);
    clearInterval(appState.pauseInterval);

    elements.startBtn.textContent = '▶️ Démarrer';
    elements.pauseBtn.disabled = true;
    elements.pauseBtn.textContent = '⏸️ Pause';
    elements.nextBtn.disabled = true;
    elements.prevBtn.disabled = true;
    elements.pauseIndicator.style.display = 'none';
    elements.timerValue.textContent = '00:00';
}

function togglePause() {
    if (appState.isPaused) {
        resumeWorkout();
    } else {
        pauseWorkout();
    }
}

function pauseWorkout() {
    appState.isPaused = true;
    clearInterval(appState.timerInterval);
    elements.pauseBtn.textContent = '▶️ Reprendre';
}

function resumeWorkout() {
    appState.isPaused = false;
    startTimer();
    elements.pauseBtn.textContent = '⏸️ Pause';
}

function startTimer() {
    appState.timerInterval = setInterval(() => {
        appState.elapsedSeconds++;
        updateTimerDisplay();

        // Auto mode: switch to next exercise after duration
        if (appState.autoMode && appState.elapsedSeconds >= appState.settings.exerciseDuration) {
            triggerPauseBeforeNext();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(appState.elapsedSeconds / 60);
    const seconds = appState.elapsedSeconds % 60;
    elements.timerValue.textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function triggerPauseBeforeNext() {
    clearInterval(appState.timerInterval);
    
    const program = workoutPrograms[appState.currentDay];
    if (appState.currentExerciseIndex >= program.exercises.length - 1) {
        // Workout complete
        completeWorkout();
        return;
    }

    // Show pause countdown
    elements.pauseIndicator.style.display = 'block';
    let countdown = appState.settings.pauseDuration;
    elements.pauseCountdown.textContent = countdown;

    appState.pauseInterval = setInterval(() => {
        countdown--;
        elements.pauseCountdown.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(appState.pauseInterval);
            elements.pauseIndicator.style.display = 'none';
            nextExercise();
        }
    }, 1000);
}

function nextExercise() {
    clearInterval(appState.pauseInterval);
    elements.pauseIndicator.style.display = 'none';

    const program = workoutPrograms[appState.currentDay];
    if (appState.currentExerciseIndex < program.exercises.length - 1) {
        appState.currentExerciseIndex++;
        appState.elapsedSeconds = 0;
        updateExerciseDisplay();
        
        if (appState.isRunning && !appState.isPaused) {
            clearInterval(appState.timerInterval);
            startTimer();
        }
    } else {
        completeWorkout();
    }
}

function prevExercise() {
    if (appState.currentExerciseIndex > 0) {
        appState.currentExerciseIndex--;
        appState.elapsedSeconds = 0;
        updateExerciseDisplay();
        
        if (appState.isRunning && !appState.isPaused) {
            clearInterval(appState.timerInterval);
            startTimer();
        }
    }
}

function completeWorkout() {
    stopWorkout();
    elements.exerciseName.textContent = '🎉 Bravo!';
    elements.exerciseDescription.textContent = 'Entraînement terminé! Excellent travail!';
    elements.exerciseReps.textContent = '';
    elements.exerciseEquipment.textContent = '';
    elements.workoutProgress.style.width = '100%';

    // Play completion sound if available
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
    }
}

function loadSettings() {
    const savedSettings = localStorage.getItem('pfl2_settings');
    if (savedSettings) {
        appState.settings = JSON.parse(savedSettings);
        
        // Update input fields
        if (elements.pauseDurationInput) {
            elements.pauseDurationInput.value = appState.settings.pauseDuration;
        }
        if (elements.exerciseDurationInput) {
            elements.exerciseDurationInput.value = appState.settings.exerciseDuration;
        }
        if (elements.currentWeightInput) {
            elements.currentWeightInput.value = appState.settings.currentWeight;
        }
        if (elements.goalWeightInput) {
            elements.goalWeightInput.value = appState.settings.goalWeight;
        }
    }
    // Update header weight display
    updateHeaderWeight();
}

function updateHeaderWeight() {
    const headerWeight = document.getElementById('header-weight');
    if (headerWeight) {
        headerWeight.textContent = appState.settings.currentWeight;
    }
}

function saveSettings() {
    const pauseDuration = parseInt(elements.pauseDurationInput.value, 10) || 5;
    const exerciseDuration = parseInt(elements.exerciseDurationInput.value, 10) || 45;
    const currentWeight = parseInt(elements.currentWeightInput.value, 10) || 140;
    const goalWeight = parseInt(elements.goalWeightInput.value, 10) || 120;

    appState.settings = {
        pauseDuration: Math.min(60, Math.max(3, pauseDuration)),
        exerciseDuration: Math.min(180, Math.max(20, exerciseDuration)),
        currentWeight: Math.min(300, Math.max(50, currentWeight)),
        goalWeight: Math.min(200, Math.max(50, goalWeight))
    };

    localStorage.setItem('pfl2_settings', JSON.stringify(appState.settings));

    // Update header weight display
    updateHeaderWeight();

    // Show confirmation
    const btn = elements.saveSettingsBtn;
    const originalText = btn.textContent;
    btn.textContent = '✅ Sauvegardé!';
    btn.style.background = '#4CAF50';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            toggleWorkout();
            break;
        case 'ArrowRight':
            if (appState.isRunning) nextExercise();
            break;
        case 'ArrowLeft':
            if (appState.isRunning) prevExercise();
            break;
        case 'KeyP':
            if (appState.isRunning) togglePause();
            break;
    }
});
