// Game data
const gameData = {
  "images": [
    {
      "id": 1751543670040.8564,
      "src": "assets/images/1.jpg",
      "name": "1.jpg"
    },
    {
      "id": 1751543670044.2158,
      "src": "assets/images/3.jpg",
      "name": "3.jpg"
    },
    {
      "id": 1751543670047.3516,
      "src": "assets/images/2.jpg",
      "name": "2.jpg"
    },
    {
      "id": 1751543670051.8167,
      "src": "assets/images/9.jpg",
      "name": "9.jpg"
    },
    {
      "id": 1751543670057.9673,
      "src": "assets/images/8.jpg",
      "name": "8.jpg"
    },
    {
      "id": 1751543670067.4287,
      "src": "assets/images/4.jpg",
      "name": "4.jpg"
    },
    {
      "id": 1751543670074.8894,
      "src": "assets/images/6.jpg",
      "name": "6.jpg"
    },
    {
      "id": 1751543670083.8877,
      "src": "assets/images/5.jpg",
      "name": "5.jpg"
    },
    {
      "id": 1751543670089.8604,
      "src": "assets/images/10.jpg",
      "name": "10.jpg"
    },
    {
      "id": 1751543670098.8752,
      "src": "assets/images/11 (1).jpg",
      "name": "11 (1).jpg"
    },
    {
      "id": 1751543670108.1501,
      "src": "assets/images/11 (2).jpg",
      "name": "11 (2).jpg"
    },
    {
      "id": 1751543670119.4106,
      "src": "assets/images/11 (3).jpg",
      "name": "11 (3).jpg"
    },
    {
      "id": 1751543670131.7205,
      "src": "assets/images/11 (4).jpg",
      "name": "11 (4).jpg"
    },
    {
      "id": 1751543670152.4502,
      "src": "assets/images/7.jpg",
      "name": "7.jpg"
    },
    {
      "id": 1751543670178.586,
      "src": "assets/images/11 (5).jpg",
      "name": "11 (5).jpg"
    },
    {
      "id": 1751543670195.9734,
      "src": "assets/images/11 (7).jpg",
      "name": "11 (7).jpg"
    },
    {
      "id": 1751543670211.0754,
      "src": "assets/images/11 (8).jpg",
      "name": "11 (8).jpg"
    },
    {
      "id": 1751543670226.032,
      "src": "assets/images/11 (9).jpg",
      "name": "11 (9).jpg"
    },
    {
      "id": 1751543670242.2395,
      "src": "assets/images/11 (10).jpg",
      "name": "11 (10).jpg"
    },
    {
      "id": 1751543670266.6304,
      "src": "assets/images/11 (11).jpg",
      "name": "11 (11).jpg"
    },
    {
      "id": 1751543670286.8032,
      "src": "assets/images/11 (12).jpg",
      "name": "11 (12).jpg"
    },
    {
      "id": 1751543670302.6697,
      "src": "assets/images/11 (13).jpg",
      "name": "11 (13).jpg"
    },
    {
      "id": 1751543670321.668,
      "src": "assets/images/11 (15).jpg",
      "name": "11 (15).jpg"
    },
    {
      "id": 1751543670344.7937,
      "src": "assets/images/11 (14).jpg",
      "name": "11 (14).jpg"
    },
    {
      "id": 1751543670373.5305,
      "src": "assets/images/11 (16).jpg",
      "name": "11 (16).jpg"
    },
    {
      "id": 1751543670398.104,
      "src": "assets/images/11 (17).jpg",
      "name": "11 (17).jpg"
    },
    {
      "id": 1751543670422.471,
      "src": "assets/images/11 (18).jpg",
      "name": "11 (18).jpg"
    },
    {
      "id": 1751543670442.229,
      "src": "assets/images/11 (19).jpg",
      "name": "11 (19).jpg"
    },
    {
      "id": 1751543670462.8105,
      "src": "assets/images/11 (20).jpg",
      "name": "11 (20).jpg"
    },
    {
      "id": 1751543670493.0972,
      "src": "assets/images/11 (21).jpg",
      "name": "11 (21).jpg"
    },
    {
      "id": 1751543670523.8752,
      "src": "assets/images/11 (22).jpg",
      "name": "11 (22).jpg"
    },
    {
      "id": 1751543670544.6912,
      "src": "assets/images/11 (23).jpg",
      "name": "11 (23).jpg"
    },
    {
      "id": 1751543670567.7522,
      "src": "assets/images/11 (6).jpg",
      "name": "11 (6).jpg"
    }
  ],
  "questions": [
    {
      "id": 1751543677643,
      "text": "edc",
      "correctAnswerId": "1751543670195.9734"
    },
    {
      "id": 1751543682100,
      "text": "wertt",
      "correctAnswerId": "1751543670131.7205"
    },
    {
      "id": 1751543688234,
      "text": "weti bvf",
      "correctAnswerId": "1751543670178.586"
    }
  ]
};

// Game state
let currentQuestionIndex = 0;
let score = 0;
let gameStarted = false;

// DOM elements
const sections = {
    opening: document.getElementById('opening'),
    game: document.getElementById('game'),
    ending: document.getElementById('ending')
};

// Initialize magical effects
document.addEventListener('DOMContentLoaded', function() {
    createGlitterEffect();
    createFloatingHearts();
    
    const music = document.getElementById('backgroundMusic');
    music.volume = 0.3;
    
    document.addEventListener('click', function() {
        if (music.paused) {
            music.play().catch(e => console.log('Audio play failed:', e));
        }
    }, { once: true });
});

// Create glitter falling effect
function createGlitterEffect() {
    const container = document.getElementById('glitterContainer');
    
    setInterval(() => {
        const glitter = document.createElement('div');
        glitter.className = 'glitter';
        glitter.style.left = Math.random() * 100 + 'vw';
        glitter.style.animationDuration = (Math.random() * 3 + 2) + 's';
        glitter.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(glitter);
        
        setTimeout(() => {
            if (glitter.parentNode) {
                glitter.parentNode.removeChild(glitter);
            }
        }, 5000);
    }, 300);
}

// Create floating hearts effect
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['💖', '💕', '💗', '💘', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 10000);
    }, 2000);
}

// Show section
function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
    });
    
    setTimeout(() => {
        sections[sectionName].classList.add('active');
    }, 100);
}

// Start the game
function startGame() {
    gameStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    showSection('game');
    
    setTimeout(() => {
        displayQuestion();
    }, 500);
}

// Display current question
function displayQuestion() {
    if (currentQuestionIndex >= gameData.questions.length) {
        endGame();
        return;
    }

    const question = gameData.questions[currentQuestionIndex];
    
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.text;
    document.getElementById('score').textContent = score;
    
    const shuffledImages = [...gameData.images].sort(() => Math.random() - 0.5);
    
    const imagesGrid = document.getElementById('imagesGrid');
    imagesGrid.innerHTML = '';
    
    shuffledImages.forEach((image, index) => {
        const imageElement = document.createElement('div');
        imageElement.className = 'image-option';
        imageElement.style.animationDelay = (index * 0.1) + 's';
        imageElement.innerHTML = `<img src="${image.src}" alt="${image.name}" />`;
        
        imageElement.addEventListener('click', () => {
            handleImageClick(image.id, question.correctAnswerId, imageElement);
        });
        
        imagesGrid.appendChild(imageElement);
    });
}

// Handle image click
function handleImageClick(selectedImageId, correctAnswerId, imageElement) {
    const allImages = document.querySelectorAll('.image-option');
    allImages.forEach(img => {
        img.style.pointerEvents = 'none';
    });
    
    if (selectedImageId == correctAnswerId) {
        imageElement.classList.add('correct');
        score++;
        
        setTimeout(() => {
            showFeedback('🎉 Correct! Amazing memory! ✨', 'success');
        }, 300);
        
    } else {
        imageElement.classList.add('wrong');
        
        allImages.forEach(img => {
            const imgSrc = img.querySelector('img').src;
            const correctImage = gameData.images.find(image => image.id == correctAnswerId);
            if (correctImage && imgSrc.includes(correctImage.name)) {
                img.classList.add('correct');
            }
        });
        
        setTimeout(() => {
            showFeedback('💫 Oops! The correct answer is highlighted! 💫', 'error');
        }, 300);
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 3000);
}

// Show feedback
function showFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `feedback ${type}`;
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: bold;
        z-index: 1000;
        animation: feedbackSlide 0.5s ease-out;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 2000);
}

// End the game
function endGame() {
    document.getElementById('finalScore').textContent = score;
    showSection('ending');
}

// Restart the game
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    showSection('opening');
}

// CSS for feedback animation
const style = document.createElement('style');
style.textContent = `
    @keyframes feedbackSlide {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(style);