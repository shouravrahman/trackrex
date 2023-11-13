---
title: Issue Tracker App
---

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Issues](https://img.shields.io/github/issues/shouravrahman/trackrex.svg)](https://github.com/shouravrahman/trackrex/issues)
[![GitHub Stars](https://img.shields.io/github/stars/shouravrahman/trackrex.svg)](https://github.com/shouravrahman/trackrex/stargazers)

A powerful and flexible issue tracker application to streamline project management and collaboration.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Management:** Register, log in, and manage user profiles.
- **Project Management:** Create, view, and manage projects and project members.
- **Issue Tracking:** Create, update, and manage issues with various details.
- **Comments and Attachments:** Add comments and attachments to issues for better collaboration.
- **Roles and Permissions:** Assign roles to users for fine-grained access control.
- **Labels and Milestones:** Organize and categorize issues with labels and milestones.
- **Advanced Search:** Search and filter issues based on various criteria.
- **Notifications:** Stay informed with notifications about issue updates.

## Getting Started

### Prerequisites

- Node.js (version 18 or up)
- npm 
- MySQL Database

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/issue-tracker-app.git
    ```

2. Install dependencies:

    ```bash
    cd issue-tracker-app
    npm install
    ```

3. Set up the database:

    - Create a MySQL database and update the configuration in `prisma/schema.ts`.

4. Run the application:

    ```bash
    npm start
    ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

1. **Register:**
   - Create an account to get started.

2. **Create a Project:**
   - As a project owner, create a new project and add members.

3. **Issue Tracking:**
   - Create and manage issues within the project.

4. **Collaborate:**
   - Add comments, attachments, and updates to keep everyone in sync.

5. **Explore Features:**
   - Utilize labels, milestones, and advanced search for efficient project management.

## API Reference

Check the [API Documentation](link-to-api-docs) for detailed information about available APIs.

## Contributing

Feel free to contribute to this project. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).
