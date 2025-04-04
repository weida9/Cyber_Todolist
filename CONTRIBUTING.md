# Contributing to Cyberpunk Todolist

First off, thank you for considering contributing to Cyberpunk Todolist! It's people like you that make this project such a great tool.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand what actions will and will not be tolerated.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

#### Before Submitting A Bug Report

* **Check the [FAQ](https://github.com/yourusername/cyberpunk-todolist/wiki/FAQ)** for a list of common questions and problems.
* **Check if the bug has already been reported** by searching on GitHub under [Issues](https://github.com/yourusername/cyberpunk-todolist/issues).
* **Try the latest version** to see if the problem has already been fixed.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable code snippets, which you use in those examples.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots or animated GIFs** which show you following the described steps and clearly demonstrate the problem.
* **If the problem is related to performance or memory**, include a CPU profile capture with your report.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

Before creating enhancement suggestions, please check if there is already an [issue](https://github.com/yourusername/cyberpunk-todolist/issues) or [pull request](https://github.com/yourusername/cyberpunk-todolist/pulls) which provides the enhancement you're thinking of.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots or animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to.
* **Explain why this enhancement would be useful** to most users.
* **Specify which version you're using.**
* **Specify the browser you're using.**

### Pull Requests

The process described here has several goals:

- Maintain the project's quality
- Fix problems that are important to users
- Enable a sustainable system for the project's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐎 `:racehorse:` when improving performance
    * 🚱 `:non-potable_water:` when plugging memory leaks
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * 💚 `:green_heart:` when fixing the CI build
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies

### JavaScript Styleguide

* Use 4 spaces for indentation
* Use semicolons
* Prefer `const` over `let` and `let` over `var`
* Prefer template literals over string concatenation
* Use camelCase for variables and functions
* Use PascalCase for classes

### CSS Styleguide

* Use 2 spaces for indentation
* Use kebab-case for class names
* Use meaningful class names that reflect the purpose of the element
* Group related properties together (positioning, box-model, typography, etc.)
* Comment complex or non-obvious code

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues or PRs that fix a bug
* `enhancement` - Issues or PRs that add a new feature or improvement
* `documentation` - Issues or PRs related to documentation
* `good first issue` - Issues that are good for newcomers
* `help wanted` - Issues that need assistance from the community 