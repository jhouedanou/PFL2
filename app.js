// Workout Programs Data
const workoutPrograms = {
    day1: {
        title: "🏋️ Jour 1: Haut du Corps",
        duration: "45-60 min",
        exercises: [
            {
                name: "Échauffement",
                sets: "1 série",
                reps: "5 min",
                rest: "0",
                notes: "Rotations des bras, étirements, mouvements d'épaules"
            },
            {
                name: "Développé Couché avec Barre",
                sets: "4 séries",
                reps: "8-10 reps",
                rest: "90 sec",
                weight: "Barre 30kg",
                notes: "Contrôlez la descente, montez explosif"
            },
            {
                name: "Rowing avec Barre",
                sets: "4 séries",
                reps: "8-10 reps",
                rest: "90 sec",
                weight: "Barre 30kg",
                notes: "Dos droit, tirez vers le bas du ventre"
            },
            {
                name: "Développé Militaire avec Haltères",
                sets: "3 séries",
                reps: "10-12 reps",
                rest: "60 sec",
                weight: "2x10kg",
                notes: "Contrôlez le mouvement, ne cambrez pas le dos"
            },
            {
                name: "Élévations Latérales",
                sets: "3 séries",
                reps: "12-15 reps",
                rest: "60 sec",
                weight: "2x5kg",
                notes: "Montez jusqu'à hauteur d'épaule"
            },
            {
                name: "Curl Biceps avec Haltères",
                sets: "3 séries",
                reps: "10-12 reps",
                rest: "45 sec",
                weight: "2x10kg",
                notes: "Coudes fixes, mouvement contrôlé"
            },
            {
                name: "Extension Triceps",
                sets: "3 séries",
                reps: "10-12 reps",
                rest: "45 sec",
                weight: "1x10kg",
                notes: "Haltère derrière la tête, extension complète"
            },
            {
                name: "Étirements",
                sets: "1 série",
                reps: "5 min",
                rest: "0",
                notes: "Étirez tous les muscles travaillés"
            }
        ]
    },
    day2: {
        title: "🦵 Jour 2: Bas du Corps + Cardio",
        duration: "45-60 min",
        exercises: [
            {
                name: "Échauffement",
                sets: "1 série",
                reps: "5 min",
                rest: "0",
                notes: "Marche sur place, rotations des hanches"
            },
            {
                name: "Squats avec Barre",
                sets: "4 séries",
                reps: "10-12 reps",
                rest: "90 sec",
                weight: "Barre 30kg",
                notes: "Descendez jusqu'à parallèle, genoux alignés"
            },
            {
                name: "Fentes Alternées avec Haltères",
                sets: "3 séries",
                reps: "10 reps/jambe",
                rest: "60 sec",
                weight: "2x10kg",
                notes: "Genou arrière touche presque le sol"
            },
            {
                name: "Soulevé de Terre Roumain",
                sets: "4 séries",
                reps: "8-10 reps",
                rest: "90 sec",
                weight: "Barre 30kg",
                notes: "Dos droit, poussez les hanches en arrière"
            },
            {
                name: "Squats Gobelet avec Haltère",
                sets: "3 séries",
                reps: "12-15 reps",
                rest: "60 sec",
                weight: "1x15kg",
                notes: "Haltère contre la poitrine, squat profond"
            },
            {
                name: "Extensions Mollets",
                sets: "3 séries",
                reps: "15-20 reps",
                rest: "45 sec",
                weight: "2x10kg",
                notes: "Debout, montez sur la pointe des pieds"
            },
            {
                name: "Vélo d'Exercice",
                sets: "1 série",
                reps: "15-20 min",
                rest: "0",
                notes: "Intensité modérée à élevée, résistance progressive"
            },
            {
                name: "Étirements",
                sets: "1 série",
                reps: "5 min",
                rest: "0",
                notes: "Focus sur jambes et fessiers"
            }
        ]
    },
    day3: {
        title: "🔥 Jour 3: Full Body",
        duration: "45-60 min",
        exercises: [
            {
                name: "Échauffement",
                sets: "1 série",
                reps: "5 min",
                rest: "0",
                notes: "Mobilité générale, jumping jacks"
            },
            {
                name: "Thruster avec Haltères",
                sets: "4 séries",
                reps: "8-10 reps",
                rest: "90 sec",
                weight: "2x10kg",
                notes: "Squat + développé en un mouvement"
            },
            {
                name: "Rowing Penché avec Haltères",
                sets: "3 séries",
                reps: "10-12 reps",
                rest: "60 sec",
                weight: "2x15kg",
                notes: "Dos parallèle au sol, tirez vers les hanches"
            },
            {
                name: "Fentes Marchées avec Haltères",
                sets: "3 séries",
                reps: "12 reps/jambe",
                rest: "60 sec",
                weight: "2x10kg",
                notes: "Avancez en alternant les jambes"
            },
            {
                name: "Développé Incliné avec Haltères",
                sets: "3 séries",
                reps: "10-12 reps",
                rest: "60 sec",
                weight: "2x10kg",
                notes: "Sur banc incliné ou au sol avec dos surélevé"
            },
            {
                name: "Burpees",
                sets: "3 séries",
                reps: "8-10 reps",
                rest: "60 sec",
                weight: "Poids du corps",
                notes: "Mouvement complet: squat, planche, saut"
            },
            {
                name: "Planche",
                sets: "3 séries",
                reps: "30-60 sec",
                rest: "45 sec",
                weight: "Poids du corps",
                notes: "Corps aligné, abdos contractés"
            },
            {
                name: "Vélo Sprint Intervals",
                sets: "5 séries",
                reps: "1 min sprint + 1 min repos",
                rest: "60 sec",
                notes: "Alternez haute et basse intensité"
            },
            {
                name: "Étirements",
                sets: "1 série",
                reps: "5 min",
                rest: "0",
                notes: "Corps complet"
            }
        ]
    },
    weekend: {
        title: "🚶 Weekend: Cardio Léger",
        duration: "60 min",
        exercises: [
            {
                name: "Marche Rapide",
                sets: "1 série",
                reps: "60 min",
                rest: "0",
                notes: "Rythme soutenu, bonne posture, bras en mouvement"
            },
            {
                name: "Vélo Optionnel",
                sets: "1 série",
                reps: "20-30 min",
                rest: "0",
                notes: "Si vous avez encore de l'énergie, intensité modérée"
            },
            {
                name: "Étirements Légers",
                sets: "1 série",
                reps: "10 min",
                rest: "0",
                notes: "Relaxation et récupération"
            }
        ]
    }
};

// Application State
let appState = {
    currentWeight: 140,
    startWeight: 140,
    workoutHistory: [],
    currentWorkout: null,
    timerInterval: null,
    timerSeconds: 0,
    timerRunning: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    initializeEventListeners();
    updateUI();
    registerServiceWorker();
});

// Local Storage Functions
function loadFromLocalStorage() {
    const saved = localStorage.getItem('fitnessApp');
    if (saved) {
        const data = JSON.parse(saved);
        appState = { ...appState, ...data, timerInterval: null, timerRunning: false };
    }
}

function saveToLocalStorage() {
    const dataToSave = {
        currentWeight: appState.currentWeight,
        startWeight: appState.startWeight,
        workoutHistory: appState.workoutHistory
    };
    localStorage.setItem('fitnessApp', JSON.stringify(dataToSave));
}

// Event Listeners
function initializeEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            switchTab(e.target.dataset.tab);
        });
    });

    // Start workout buttons
    document.querySelectorAll('.start-workout-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            startWorkout(e.target.dataset.workout);
        });
    });

    // Back button
    document.getElementById('back-btn').addEventListener('click', () => {
        hideWorkoutDetail();
    });

    // Timer controls
    document.getElementById('start-timer-btn').addEventListener('click', startTimer);
    document.getElementById('pause-timer-btn').addEventListener('click', pauseTimer);
    document.getElementById('reset-timer-btn').addEventListener('click', resetTimer);

    // Complete workout
    document.getElementById('complete-workout-btn').addEventListener('click', completeWorkout);

    // Weight tracking
    document.getElementById('save-weight-btn').addEventListener('click', saveWeight);
}

// Tab Navigation
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Workout Functions
function startWorkout(workoutId) {
    appState.currentWorkout = workoutId;
    const workout = workoutPrograms[workoutId];

    // Hide workout list, show workout detail
    document.getElementById('workouts').classList.remove('active');
    document.getElementById('workout-detail').classList.remove('hidden');

    // Set title
    document.getElementById('workout-title').textContent = workout.title;

    // Render exercises
    renderExercises(workout.exercises);

    // Reset timer
    resetTimer();
}

function renderExercises(exercises) {
    const container = document.getElementById('exercise-list');
    container.innerHTML = '';

    exercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-item';
        
        let html = `
            <h3>${index + 1}. ${exercise.name}</h3>
            <div class="exercise-details">
                <strong>Séries:</strong> ${exercise.sets} | 
                <strong>Répétitions:</strong> ${exercise.reps}
                ${exercise.rest !== "0" ? ` | <strong>Repos:</strong> ${exercise.rest}` : ''}
            </div>
        `;

        if (exercise.weight) {
            html += `<div class="exercise-details"><strong>Poids:</strong> ${exercise.weight}</div>`;
        }

        if (exercise.notes) {
            html += `<div class="exercise-note">💡 ${exercise.notes}</div>`;
        }

        exerciseDiv.innerHTML = html;
        container.appendChild(exerciseDiv);
    });
}

function hideWorkoutDetail() {
    document.getElementById('workout-detail').classList.add('hidden');
    document.getElementById('workouts').classList.add('active');
    appState.currentWorkout = null;
    pauseTimer();
    resetTimer();
}

function completeWorkout() {
    if (!appState.currentWorkout) return;

    const workout = workoutPrograms[appState.currentWorkout];
    const entry = {
        id: Date.now(),
        workout: workout.title,
        date: new Date().toISOString(),
        duration: appState.timerSeconds
    };

    appState.workoutHistory.unshift(entry);
    saveToLocalStorage();

    alert('✅ Séance terminée ! Excellent travail ! 💪');
    hideWorkoutDetail();
    updateUI();
}

// Timer Functions
function startTimer() {
    if (appState.timerRunning) return;

    appState.timerRunning = true;
    document.getElementById('start-timer-btn').classList.add('hidden');
    document.getElementById('pause-timer-btn').classList.remove('hidden');

    appState.timerInterval = setInterval(() => {
        appState.timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    if (!appState.timerRunning) return;

    appState.timerRunning = false;
    document.getElementById('start-timer-btn').classList.remove('hidden');
    document.getElementById('pause-timer-btn').classList.add('hidden');

    if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
        appState.timerInterval = null;
    }
}

function resetTimer() {
    pauseTimer();
    appState.timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(appState.timerSeconds / 60);
    const seconds = appState.timerSeconds % 60;

    document.getElementById('timer-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('timer-seconds').textContent = String(seconds).padStart(2, '0');
}

// Weight Tracking
function saveWeight() {
    const input = document.getElementById('new-weight');
    const newWeight = parseFloat(input.value);

    if (!newWeight || newWeight < 50 || newWeight > 200) {
        alert('❌ Veuillez entrer un poids valide (50-200 kg)');
        return;
    }

    appState.currentWeight = newWeight;
    saveToLocalStorage();
    updateUI();

    input.value = '';
    alert('✅ Poids enregistré !');
}

// UI Updates
function updateUI() {
    // Update current weight display
    document.getElementById('current-weight').textContent = appState.currentWeight;
    document.getElementById('weight-current').textContent = `${appState.currentWeight} kg`;

    // Calculate weight loss
    const weightLoss = appState.startWeight - appState.currentWeight;
    document.getElementById('weight-loss').textContent = `${weightLoss.toFixed(1)} kg`;

    // Update workout history
    updateWorkoutHistory();
}

function updateWorkoutHistory() {
    const container = document.getElementById('history-list');
    
    if (appState.workoutHistory.length === 0) {
        container.innerHTML = '<p class="empty-state">Aucune séance enregistrée. Commencez votre premier workout!</p>';
        return;
    }

    container.innerHTML = '';
    appState.workoutHistory.slice(0, 10).forEach(entry => {
        const date = new Date(entry.date);
        const formattedDate = date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        const formattedTime = date.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
        });

        const durationMin = Math.floor(entry.duration / 60);
        const durationSec = entry.duration % 60;

        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="history-item-info">
                <h4>${entry.workout}</h4>
                <p>${formattedDate} à ${formattedTime}</p>
            </div>
            <div class="history-item-duration">
                <strong>${durationMin}:${String(durationSec).padStart(2, '0')}</strong>
            </div>
        `;
        container.appendChild(item);
    });
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker enregistré:', registration);
            })
            .catch(error => {
                console.log('❌ Erreur Service Worker:', error);
            });
    }
}

// Install prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('💾 App peut être installée');
});
