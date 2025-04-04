# Getting Started with Cyberpunk Todolist

This guide will help you get up and running with the Cyberpunk Todolist application.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript (only for development)

## Installation

Since Cyberpunk Todolist is a client-side web application, there's no complex installation process required. Simply follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cyberpunk-todolist.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cyberpunk-todolist
   ```

3. Open `index.html` in your web browser.

That's it! You should now see the Cyberpunk Todolist application running in your browser.

## Features

### Adding Tasks

1. Type your task in the input field at the top of the page
2. Press Enter or click the "ADD_TASK" button
3. Your new task will appear in the task list

### Completing Tasks

1. Click the checkbox next to a task to mark it as completed
2. The task will be visually marked as completed with a strikethrough

### Editing Tasks

1. Hover over a task and click the "[EDIT]" button
2. A cyberpunk-styled modal will appear
3. Edit your task
4. Click "[UPDATE]" to save your changes or "[CANCEL]" to discard them

### Deleting Tasks

1. Hover over a task and click the "[DELETE]" button
2. The task will be removed with a disappearing animation

### Filtering Tasks

1. Click the "[FILTER]" button to cycle through filter options:
   - ALL: Shows all tasks
   - ACTIVE: Shows only uncompleted tasks
   - COMPLETED: Shows only completed tasks

### Clearing Completed Tasks

1. Click the "[CLEAR_COMPLETED]" button to remove all completed tasks

## Data Persistence

Cyberpunk Todolist uses the browser's localStorage to save your tasks. This means:

- Your tasks will persist even after you close the browser
- Tasks are stored locally on your device and are not sent to any server
- If you clear your browser data, your tasks will be deleted

## Customization

If you want to customize the application:

1. Edit the Tailwind configuration in the `<head>` section of `index.html` to change colors and theme
2. Modify `src/css/styles.css` to change animations and custom styles
3. Edit `src/js/app.js` to change functionality

## Troubleshooting

### Tasks not saving?

Make sure:
- Your browser supports localStorage
- You haven't disabled localStorage in your browser settings
- You haven't reached the localStorage quota limit

### Animations not working?

Make sure:
- You're using a modern browser that supports CSS animations
- You don't have any browser extensions that block animations

If you encounter any other issues, please [create an issue](https://github.com/yourusername/cyberpunk-todolist/issues) on GitHub. 