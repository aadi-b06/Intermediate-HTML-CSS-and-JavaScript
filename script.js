// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        alert('Please enter your name');
        return;
    }

    if (email === '') {
        alert('Please enter your email');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});

// To-do list
document.getElementById('addTodo').addEventListener('click', function() {
    let input = document.getElementById('todoInput');
    let task = input.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');
    li.textContent = task;

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(removeBtn);
    document.getElementById('todoList').appendChild(li);

    input.value = '';
});
