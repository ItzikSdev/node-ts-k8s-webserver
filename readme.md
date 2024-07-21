# Node.js TypeScript Webserver with Kubernetes

This project is a web server that runs with Kubernetes and Node.js TypeScript.

[![Docker Repository](https://img.shields.io/badge/Docker-Repository-blue)](https://hub.docker.com/repositories/itziksavaia)

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

This project sets up a web server using Node.js and TypeScript, and it is orchestrated with Kubernetes for scalability and resilience.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [pnpm](https://pnpm.io/)

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/itziksavaia/node-ts-k8s-webserver.git
    cd node-ts-k8s-webserver
    ```

2. **Install dependencies**:

    ```sh
    pnpm install
    ```

3. **Build the Docker image**:

    ```sh
    docker build -t itziksavaia/node-ts-k8s-webserver:latest .
    ```

4. **Verify the image is built**:

    ```sh
    docker images
    ```

## Usage

1. **Run the Docker container locally**:

    ```sh
    docker run -p 3002:3002 itziksavaia/node-ts-k8s-webserver:latest
    ```

    The server should now be accessible at `http://localhost:3002`.

2. **Push the Docker image to the registry**:

    ```sh
    docker push itziksavaia/node-ts-k8s-webserver:latest
    ```

## Deployment

1. **Deploy on Kubernetes**:

    - Ensure your Kubernetes cluster is running.
    - Apply the deployment configuration:

    ```sh
    kubectl apply -f k8s/deployment.yaml
    ```

2. **Check the status of your pods**:

    ```sh
    kubectl get pods
    ```

3. **Access your service**:

    ```sh
    kubectl get svc
    ```

    This will show the external IP and port where your service is accessible.

## License

This project is licensed under the MIT License.

## Contact

Itzik Savaia - [GitHub](https://github.com/itziksavaia) - [Docker Hub](https://hub.docker.com/repositories/itziksavaia)
