const lessons = [
    {
        id: 1,
        title: 'Lesson 1',
        content: 'Content for Lesson 1'
    },
    {
        id: 2,
        title: 'Lesson 2',
        content: 'Content for Lesson 2'
    }
    // Add more lessons as needed
];

function getLessonById(id) {
    return lessons.find(lesson => lesson.id === id);
}

function displayLesson(lessonId) {
    const lesson = getLessonById(lessonId);
    if (lesson) {
        document.getElementById('lesson-title').innerText = lesson.title;
        document.getElementById('lesson-content').innerText = lesson.content;
    }
}

// Call displayLesson with an example ID
displayLesson(1);