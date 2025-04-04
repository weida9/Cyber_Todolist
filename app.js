// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const toggleFilterBtn = document.getElementById('toggle-filter');
const clearCompletedBtn = document.getElementById('clear-completed');
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const editInput = document.getElementById('edit-input');
const cancelEditBtn = document.getElementById('cancel-edit');

// App State
let todos = JSON.parse(localStorage.getItem('cybertodos')) || [];
let currentFilter = 'all'; // all, active, completed
let currentEditId = null; // To track which todo is being edited

// Initialize the app
function init() {
    renderTodos();
    addEventListeners();
    todoInput.focus();
    
    // Add cyberpunk boot animation
    document.body.classList.add('booting');
    setTimeout(() => {
        document.body.classList.remove('booting');
    }, 1500);
}

// Event Listeners
function addEventListeners() {
    todoForm.addEventListener('submit', addTodo);
    todoList.addEventListener('click', handleTodoClick);
    toggleFilterBtn.addEventListener('click', toggleFilter);
    clearCompletedBtn.addEventListener('click', clearCompleted);
    
    // Edit modal listeners
    editForm.addEventListener('submit', handleEditSubmit);
    cancelEditBtn.addEventListener('click', closeEditModal);
    
    // Close modal when clicking on backdrop
    editModal.addEventListener('click', function(e) {
        if (e.target === editModal) {
            closeEditModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !editModal.classList.contains('hidden')) {
            closeEditModal();
        }
    });
}

// Add a new todo
function addTodo(e) {
    e.preventDefault();
    
    const text = todoInput.value.trim();
    if (!text) return;
    
    // Add glitch effect to form on submit
    todoForm.classList.add('form-glitch');
    setTimeout(() => todoForm.classList.remove('form-glitch'), 500);
    
    // Create new todo
    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    // Add to state
    todos.unshift(newTodo);
    saveTodos();
    
    // Clear input
    todoInput.value = '';
    todoInput.focus();
    
    // Render todos
    renderTodos();
}

// Render todos based on filter
function renderTodos() {
    // Filter todos
    let filteredTodos = todos;
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(todo => todo.completed);
    }
    
    // Clear list
    todoList.innerHTML = '';
    
    // Render each todo
    filteredTodos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.classList.add(
            'todo-item', 
            'p-4', 
            'flex', 
            'items-center', 
            'justify-between',
            'group',
            'hover:bg-cyber-dark/60'
        );
        
        // Add completed class if todo is completed
        if (todo.completed) {
            todoItem.classList.add('completed-task');
        }
        
        todoItem.innerHTML = `
            <div class="flex items-center gap-3">
                <input 
                    type="checkbox" 
                    class="cyber-checkbox" 
                    data-id="${todo.id}" 
                    ${todo.completed ? 'checked' : ''}
                >
                <span class="text-lg">${todo.text}</span>
            </div>
            <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="edit-btn text-cyber-blue hover:text-cyber-yellow transition-colors" data-id="${todo.id}">
                    [EDIT]
                </button>
                <button class="delete-btn text-cyber-pink hover:text-cyber-yellow transition-colors" data-id="${todo.id}">
                    [DELETE]
                </button>
            </div>
        `;
        
        todoList.appendChild(todoItem);
    });
    
    // Update filter button text
    toggleFilterBtn.textContent = `[FILTER: ${currentFilter.toUpperCase()}]`;
    
    // Show empty state if no todos
    if (filteredTodos.length === 0) {
        const emptyState = document.createElement('li');
        emptyState.classList.add('p-6', 'text-center', 'text-cyber-blue/50', 'italic');
        emptyState.textContent = 'NO_TASKS_FOUND.exe';
        todoList.appendChild(emptyState);
    }
}

// Handle clicks on todo items (checkbox, edit, delete)
function handleTodoClick(e) {
    const target = e.target;
    const todoId = parseInt(target.dataset.id);
    
    // Handle checkbox click
    if (target.classList.contains('cyber-checkbox')) {
        toggleTodoComplete(todoId);
    }
    
    // Handle delete click
    if (target.classList.contains('delete-btn')) {
        deleteTodo(todoId);
    }
    
    // Handle edit click
    if (target.classList.contains('edit-btn')) {
        editTodo(todoId);
    }
}

// Toggle todo complete status
function toggleTodoComplete(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    
    saveTodos();
    renderTodos();
}

// Delete a todo
function deleteTodo(id) {
    // Add delete animation
    const todoElement = document.querySelector(`[data-id="${id}"]`).closest('.todo-item');
    todoElement.classList.add('deleting');
    
    // Delete after animation
    setTimeout(() => {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    }, 300);
}

// Edit a todo - open modal
function editTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return;
    
    // Set current edit id
    currentEditId = id;
    
    // Set input value
    editInput.value = todo.text;
    
    // Show modal with animation
    editModal.classList.remove('hidden');
    
    // Focus the input
    setTimeout(() => {
        editInput.focus();
        editInput.select();
    }, 100);
    
    // Add glitch effect to input
    editInput.classList.add('form-glitch');
    setTimeout(() => editInput.classList.remove('form-glitch'), 500);
}

// Handle edit form submission
function handleEditSubmit(e) {
    e.preventDefault();
    
    const newText = editInput.value.trim();
    if (!newText || !currentEditId) return;
    
    // Update todo
    todos = todos.map(todo => {
        if (todo.id === currentEditId) {
            return { ...todo, text: newText };
        }
        return todo;
    });
    
    // Save and render todos
    saveTodos();
    renderTodos();
    
    // Close modal
    closeEditModal();
}

// Close edit modal
function closeEditModal() {
    // Hide modal
    editModal.classList.add('hidden');
    
    // Reset current edit id
    currentEditId = null;
    
    // Reset form
    editForm.reset();
}

// Toggle filter (all, active, completed)
function toggleFilter() {
    if (currentFilter === 'all') {
        currentFilter = 'active';
    } else if (currentFilter === 'active') {
        currentFilter = 'completed';
    } else {
        currentFilter = 'all';
    }
    
    renderTodos();
}

// Clear completed todos
function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('cybertodos', JSON.stringify(todos));
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init); 