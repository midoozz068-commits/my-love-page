// كلمة المرور الصحيحة
const CORRECT_PASSWORD = "2610";

// وظيفة فتح الصفحة
function unlockPage() {
    const input = document.getElementById('password-input').value;
    if (input === CORRECT_PASSWORD) {
        // إخفاء شاشة القفل وإظهار المحتوى الرئيسي
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert("كلمة المرور غير صحيحة، حاول مرة أخرى.");
        document.getElementById('password-input').value = ''; // مسح الإدخال
    }
}

// وظيفة بدء الرحلة (إخفاء شاشة الترحيب وإظهار الذكريات)
function startJourney() {
    // إخفاء البطاقة الترحيبية (أول بطاقة في المحتوى الرئيسي)
    document.querySelector('.welcome-card').style.display = 'none';
    
    // إظهار قسم الذكريات
    document.getElementById('memories-section').style.display = 'block';
}

// أضف مستمع حدث Enter على حقل كلمة المرور
document.getElementById('password-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        unlockPage();
    }
});

// وظيفة لإظهار الذاكرة التالية وإخفاء البطاقة الحالية
function showNextMemory() {
    // إخفاء البطاقة الجديدة الحالية
    document.querySelector('.new-card').style.display = 'none';

    // إظهار البطاقات الأخرى التي قمنا بإنشائها سابقاً
    // (هذا يعتمد على الأكواد المتبقية داخل memories-section)
    
    // لغرض المثال، يمكنك إعادة إظهار باقي البطاقات هنا إذا كانت مخفية:
    const otherCards = document.querySelectorAll('.memory-card:not(.new-card)');
    otherCards.forEach(card => {
        card.style.display = 'block'; // أو أي طريقة عرض مناسبة
    });
}
