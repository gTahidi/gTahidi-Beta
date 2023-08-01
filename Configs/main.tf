provider "azurerm" {
  subscription_id = "2c9e694a-be3b-4604-b4d9-dc4bdd41a3e1"
  client_id       = "2f51a83b-b49d-41e1-b4a0-18715d37419d"
  client_secret   = "OSZ8Q~~0hUlU36oxi1TPzOt8WQKGD6hD-gRhFbf0"
  tenant_id       = "e9fba1ee-d3b6-4595-b71c-1481db964a58"
  features {}
}

# Create a new resource group
resource "azurerm_resource_group" "rg" {
  name     = "gtahidi-flowise"
  location = "West Europe"  # update this with your desired location
}

# Create a container group with a single container
resource "azurerm_container_group" "flowise" {
  name                = "flowise"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  ip_address_type     = "Public"
  dns_name_label      = "gtahidionflowise" # you may need to change this if it's already taken
  os_type             = "Linux"

  container {
    name   = "flowise"
    image  = "flowiseai/flowise"
    cpu    = "1.0"
    memory = "1.5"

    ports {
      port     = 80
      protocol = "TCP"
    }

    ports {
      port     = 3000
      protocol = "TCP"
    }

    commands = ["/bin/sh", "-c", "flowise start"]

    environment_variables = {
      "FLOWISE_USERNAME"  = "gTahidiData"
      "FLOWISE_PASSWORD"  = "gTahidiDataAPI"
      "DATABASE_PATH"     = "/opt/flowise/.flowise"
      "APIKEY_PATH"       = "/opt/flowise/.flowise"
      "SECRETKEY_PATH"    = "/opt/flowise/.flowise"
      "LOG_PATH"          = "/opt/flowise/.flowise/logs"
    }

    volume {
      name       = "flowise-platform"
      mount_path = "/opt/flowise/.flowise"
      read_only  = false
      share_name = "gtahidi"
      storage_account_name = "csb10032002a4c81c53"
      storage_account_key = "ewyDymeo+u5lZgG05XlJTJONTSB2ORe4zrTB6gk3WFT8asUtNYt/W+jrlXNaIGEbEHAkG7yyBA+h+AStQtcE/w=="
    }
  }

  restart_policy = "OnFailure"
}
