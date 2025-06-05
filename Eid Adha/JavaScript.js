// انتظر حتى يتم تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function () {
    // العناصر الرئيسية
    const sheep = document.getElementById('sheep');
    const initialScreen = document.getElementById('initialScreen');
    const celebration = document.getElementById('celebration');
    const fireworksContainer = document.getElementById('fireworksContainer');
    const decorationsContainer = document.getElementById('decorationsContainer');
    const greetingMessage = document.getElementById('greetingMessage');

    // إضافة مستمع حدث للنقر على الخروف
    sheep.addEventListener('click', startCelebration);

    // تهيئة الألعاب النارية
    let fireworks = null;

    // دالة بدء الاحتفال
    function startCelebration() {
        // تشغيل صوت الانفجار
        playSound('explosion');

        // إضافة تأثير الانفجار على الخروف
        sheep.classList.add('exploding');

        // إخفاء الشاشة الأولية بعد انتهاء تأثير الانفجار
        setTimeout(() => {
            initialScreen.style.display = 'none';

            // إظهار عناصر الاحتفال
            celebration.classList.remove('hidden');

            // تشغيل الألعاب النارية
            initFireworks();

            // تشغيل الكونفيتي
            launchConfetti();

            // تشغيل صوت الألعاب النارية
            playSound('fireworks');

            // إظهار رسالة التهنئة بتأخير قليل
            setTimeout(() => {
                greetingMessage.style.opacity = '1';
            }, 500);
        }, 800);
    }

    // دالة تشغيل الأصوات
    function playSound(type) {
        // إنشاء عنصر الصوت
        const audio = new Audio();

        // تعيين المصدر بناءً على النوع
        if (type === 'explosion') {
            // استخدام صوت انفجار مشفر بـ base64
            audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADwADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYaAAAAAAAAA8CCxWgkAAAAAAAAAAAAAAAAAAAA//sUZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZCgP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZEoP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
        } else if (type === 'fireworks') {
            // استخدام صوت ألعاب نارية مشفر بـ base64
            audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAADwADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYaAAAAAAAAA8CCxWgkAAAAAAAAAAAAAAAAAAAA//sUZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZCgP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZEoP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
        }

        // تشغيل الصوت
        audio.play().catch(e => console.log('فشل تشغيل الصوت:', e));
    }

    // دالة تهيئة الألعاب النارية
    function initFireworks() {
        try {
            // التحقق من وجود مكتبة الألعاب النارية
            if (typeof Fireworks !== 'undefined') {
                // إنشاء كائن الألعاب النارية باستخدام مكتبة fireworks-js
                fireworks = new Fireworks.default(fireworksContainer, {
                    autoresize: true,
                    opacity: 0.8,
                    acceleration: 1.05,
                    friction: 0.97,
                    gravity: 1.5,
                    particles: 100,
                    traceLength: 3,
                    traceSpeed: 10,
                    explosion: 8,
                    intensity: 30,
                    flickering: 50,
                    lineStyle: 'round',
                    hue: {
                        min: 0,
                        max: 360
                    },
                    delay: {
                        min: 15,
                        max: 30
                    },
                    rocketsPoint: {
                        min: 50,
                        max: 50
                    },
                    lineWidth: {
                        explosion: {
                            min: 1,
                            max: 3
                        },
                        trace: {
                            min: 1,
                            max: 2
                        }
                    },
                    brightness: {
                        min: 50,
                        max: 80
                    },
                    decay: {
                        min: 0.015,
                        max: 0.03
                    },
                    mouse: {
                        click: false,
                        move: false,
                        max: 1
                    },
                    sound: {
                        enabled: false
                    }
                });

                // بدء الألعاب النارية
                fireworks.start();

                // إيقاف الألعاب النارية بعد 10 ثوانٍ وتشغيلها بشكل متقطع
                setTimeout(() => {
                    fireworks.stop();

                    // تشغيل الألعاب النارية بشكل متقطع
                    setInterval(() => {
                        fireworks.start();
                        setTimeout(() => {
                            fireworks.stop();
                        }, 2000);
                    }, 5000);
                }, 10000);
            } else {
                console.log('مكتبة الألعاب النارية غير متوفرة، استخدام الألعاب النارية البديلة');
                createSimpleFireworks();
            }
        } catch (error) {
            console.log('حدث خطأ في تهيئة الألعاب النارية:', error);
            createSimpleFireworks();
        }
    }

    // دالة إنشاء ألعاب نارية بسيطة (بديلة)
    function createSimpleFireworks() {
        // إنشاء 10 ألعاب نارية بسيطة
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.classList.add('simple-firework');

                // تعيين موقع عشوائي
                const top = Math.random() * 80 + 10; // 10% إلى 90%
                const left = Math.random() * 80 + 10; // 10% إلى 90%

                // تعيين لون عشوائي
                const hue = Math.floor(Math.random() * 360);
                const color = `hsl(${hue}, 100%, 60%)`;

                // تعيين الخصائص
                firework.style.top = `${top}%`;
                firework.style.left = `${left}%`;
                firework.style.backgroundColor = color;
                firework.style.boxShadow = `0 0 10px 5px ${color}`;

                // إضافة إلى الحاوية
                fireworksContainer.appendChild(firework);

                // إزالة بعد انتهاء التأثير
                setTimeout(() => {
                    firework.remove();
                }, 2000);
            }, i * 800);
        }

        // تشغيل الألعاب النارية بشكل متقطع
        setInterval(createSimpleFireworks, 5000);
    }

    // دالة إطلاق الكونفيتي
    function launchConfetti() {
        try {
            // التحقق من وجود مكتبة الكونفيتي
            if (typeof confetti !== 'undefined') {
                // تكوين الكونفيتي
                const confettiConfig = {
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#8e44ad', '#27ae60', '#f39c12', '#3498db', '#e74c3c', '#1abc9c'],
                    shapes: ['square', 'circle'],
                    ticks: 300,
                    gravity: 0.8,
                    scalar: 1.2,
                    drift: 0,
                    flat: false,
                    startVelocity: 40
                };

                // إطلاق الكونفيتي من اليسار
                confetti({
                    ...confettiConfig,
                    origin: { x: 0.2, y: 0.6 }
                });

                // إطلاق الكونفيتي من اليمين
                setTimeout(() => {
                    confetti({
                        ...confettiConfig,
                        origin: { x: 0.8, y: 0.6 }
                    });
                }, 250);

                // إطلاق الكونفيتي من الوسط
                setTimeout(() => {
                    confetti({
                        ...confettiConfig,
                        origin: { x: 0.5, y: 0.6 }
                    });
                }, 500);

                // إطلاق الكونفيتي بشكل متقطع
                setInterval(() => {
                    const randomX = Math.random();
                    confetti({
                        ...confettiConfig,
                        particleCount: 50,
                        origin: { x: randomX, y: 0.6 },
                        ticks: 200
                    });
                }, 3000);
            } else {
                console.log('مكتبة الكونفيتي غير متوفرة، استخدام الكونفيتي البديل');
                createSimpleConfetti();
            }
        } catch (error) {
            console.log('حدث خطأ في إطلاق الكونفيتي:', error);
            createSimpleConfetti();
        }
    }

    // دالة إنشاء كونفيتي بسيط (بديل)
    function createSimpleConfetti() {
        // إنشاء 50 قطعة كونفيتي
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('simple-confetti');

                // تعيين شكل عشوائي (مربع أو دائرة)
                const isCircle = Math.random() > 0.5;
                if (isCircle) {
                    confetti.style.borderRadius = '50%';
                }

                // تعيين حجم عشوائي
                const size = Math.random() * 10 + 5; // 5px إلى 15px
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;

                // تعيين موقع عشوائي
                const startX = Math.random() * 100; // 0% إلى 100%
                confetti.style.left = `${startX}%`;
                confetti.style.top = '0';

                // تعيين لون عشوائي
                const colors = ['#8e44ad', '#27ae60', '#f39c12', '#3498db', '#e74c3c', '#1abc9c'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.backgroundColor = color;

                // تعيين حركة عشوائية
                const duration = Math.random() * 3 + 2; // 2s إلى 5s
                const endX = startX + (Math.random() * 20 - 10); // انحراف -10% إلى +10%

                confetti.style.animation = `fall ${duration}s ease-in forwards`;

                // إضافة إلى الحاوية
                decorationsContainer.appendChild(confetti);

                // إزالة بعد انتهاء التأثير
                setTimeout(() => {
                    confetti.remove();
                }, duration * 1000);
            }, i * 100);
        }

        // تشغيل الكونفيتي بشكل متقطع
        setTimeout(createSimpleConfetti, 3000);
    }

    // إضافة تأثيرات CSS إضافية
    const style = document.createElement('style');
    style.textContent = `
        @keyframes explode {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.2);
                filter: brightness(1.5);
                opacity: 0.8;
            }
            100% {
                transform: scale(0.8);
                opacity: 0;
            }
        }
        
        .exploding {
            animation: explode 0.8s forwards;
        }
        
        .simple-firework {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            transform: scale(0);
            animation: firework-explode 2s forwards;
            z-index: 10;
        }
        
        @keyframes firework-explode {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            50% {
                transform: scale(30);
                opacity: 0.8;
            }
            100% {
                transform: scale(40);
                opacity: 0;
            }
        }
        
        .simple-confetti {
            position: absolute;
            z-index: 20;
            opacity: 0.8;
        }
        
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                opacity: 0.8;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

