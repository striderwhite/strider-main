# STRIDER WHITE

[![Laravel Forge Site Deployment Status](https://img.shields.io/endpoint?url=https%3A%2F%2Fforge.laravel.com%2Fsite-badges%2F1c84beb7-afce-47b0-8e1e-703faf7416e1%3Fdate%3D1%26commit%3D1&style=for-the-badge)](https://forge.laravel.com)

## Docker & Sail Setup

This project uses Laravel Sail for local development with Docker.

### Prerequisites

- Docker Desktop installed and running
- Git

### Getting Started

1. **Add local.strider.test to your hosts file:**
   ```bash
   sudo sh -c 'echo "127.0.0.1 local.strider.test" >> /etc/hosts'
   ```

2. **Start the Docker containers:**
   ```bash
   ./vendor/bin/sail up
   ```
   
   Or run in detached mode:
   ```bash
   ./vendor/bin/sail up -d
   ```

3. **Stop the containers:**
   ```bash
   ./vendor/bin/sail down
   ```

4. **Run database migrations:**
   ```bash
   ./vendor/bin/sail artisan migrate
   ```

5. **Install npm dependencies:**
   ```bash
   ./vendor/bin/sail npm install
   ```

6. **Run Vite dev server:**
   ```bash
   ./vendor/bin/sail npm run dev
   ```

7. **Access the application:**
   - Main site: http://local.strider.test
   - Vite HMR: http://local.strider.test:5173

### Shell Alias (Recommended)

To avoid typing `./vendor/bin/sail` every time, add this alias to your shell configuration (`~/.zshrc` or `~/.bashrc`):

```bash
alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
```

After adding the alias and reloading your shell, you can use:
```bash
sail up -d
sail artisan migrate
sail npm run dev
sail composer require package-name
```

### Available Services

The Docker environment includes:
- **Laravel App** (PHP 8.1) - http://local.strider.test
- **MySQL 8.0** - Port 3306
- **Redis** - Port 6379
- **Meilisearch** - http://localhost:7700
- **Selenium** (for browser testing)

### Common Commands

```bash
# Start containers
sail up -d

# View logs
sail logs

# Run artisan commands
sail artisan migrate
sail artisan tinker

# Run composer commands
sail composer install
sail composer update

# Run npm commands
sail npm install
sail npm run dev
sail npm run build

# Run tests
sail test
sail artisan test

# Access MySQL
sail mysql

# Access Redis CLI
sail redis-cli

# SSH into the app container
sail shell

# View all running containers
sail ps
```
