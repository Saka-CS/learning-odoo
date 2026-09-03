# neovim-odoo-development-template

Starter template for neovim and odoo 18 development with the required LSPs, formatters and debuggers.

## Setup Commands

### 🛠️ Step-by-Step uv Commands

#### 1. Environment & Dependencies

    # Create virtual environment with Python 3.12
    uv venv --python 3.12 .venv

    # Install Odoo requirements
    uv pip install -r odoo/requirements.txt

    # Install Odoo core in editable mode
    uv pip install -e ./odoo

    # Install test & linting tools
    uv pip install pytest pytest-odoo pylint pylint-odoo ruff debugpy

#### 2. Module Scaffolding

    # Scaffold your module
    uv run odoo/odoo-bin scaffold module_name ./custom_addons

#### 3. Database Initialization & Server Run

    # Start Odoo development server with auto-reload

uv run odoo/odoo-bin -c odoo.conf -d dev_db --dev=reload,xml,qweb
