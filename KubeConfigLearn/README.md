# KubeConfigLearn

This project aims to learn about Kubernetes configuration files and their usage. It includes YAML files for defining the deployment and service configurations of an application.

## Application Image

The application image used for this project is hosted on Docker Hub. You can find the image at the following link:

[Docker Hub - littlemonster23/express-node-app:0.0.2](https://hub.docker.com/repository/docker/littlemonster23/express-node-app/general)

## Configuration Files

### Deployment YAML (`deployment.yaml`)

The `deployment.yaml` file defines how the application should be deployed within the Kubernetes cluster. It specifies details such as the number of replicas, container image, and ports.

### Service YAML (`service.yaml`)

The `service.yaml` file defines how the application should be exposed to external traffic. It specifies details such as the type of service (LoadBalancer), ports, and selectors.

## Instructions

1. **Apply the Deployment YAML file:**

   ```bash
   kubectl apply -f deployment.yaml
   ```

   **Check Deployment and Pods:**

   ```bash
   kubectl get deployments
   kubectl get pods
   ```

2. **Apply the Service YAML file:**

   ```bash
   kubectl apply -f service.yaml
   ```

   **Check Services:**

   ```bash
   kubectl get services
   ```

3. **Use Minikube to expose the service:**

   ```bash
   minikube service webapp-service
   ```

   This command will open the service in your default web browser. If it doesn't open automatically, you can copy the URL from the terminal and paste it into your browser.

## Additional Points

- The deployment ensures the application runs with the desired number of replicas for scalability and fault tolerance.
- The service exposes the application to external traffic, allowing access from outside the Kubernetes cluster.
- You can customize the YAML files to suit your application's specific requirements.
