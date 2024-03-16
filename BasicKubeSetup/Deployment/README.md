# Kubernetes Deployment Configuration Guide 🚀

This folder contains Kubernetes Deployment configuration files and instructions for managing applications using Deployments.

## About Deployments

Deployments are a Kubernetes resource used to manage the lifecycle of applications. They provide features for deploying, updating, and scaling applications in a Kubernetes cluster.

## Prerequisites

Before getting started with Kubernetes Deployments, ensure you have the following:

- Kubernetes cluster set up (e.g., minikube)
- kubectl command-line tool installed and configured

## Contents

- **deployment.yaml**: YAML file defining the Deployment configuration.
- **README.md**: Instructions and explanations for working with Deployments.

## Commands

Follow the commands below to work with Deployments:

1. **Create Deployment**: Apply the Deployment YAML file.

   ```bash
   kubectl apply -f deployment.yaml
   This command deploys the Nginx application using the provided Deployment YAML file.
   ```

2. **Check Deployment and Pods**:

```bash
kubectl get deployments
kubectl get pods
```

These commands verify that the Deployment is created and list the Pods created by the Deployment.

3. **Trigger Autohealing**: Delete a pod to simulate failure and trigger autohealing.

```bash
kubectl delete pod <pod_name>
```

Replace <pod_name> with the name of one of the pods running the Nginx application. This command simulates a failure in one of the pods, triggering autohealing mechanisms.

- Check Pods Again:

```bash
kubectl get pods
```

After triggering the autohealing, use this command to check the status of the pods. You should see a new pod created to replace the one that was deleted.

4. **Accessing the Application in a Pod**:

To access the application running in one of the pods, you can follow these steps:

- Get the Name of a Pod:

```bash
kubectl get pods
```

This command lists all pods running in the Kubernetes cluster. Identify the pod running the Nginx application.

- Port Forwarding:

```bash
kubectl port-forward <pod_name> 8080:80
```

Replace <pod_name> with the name of the pod running the Nginx application. This command forwards local port 8080 to port 80 on the selected pod.

- Access the Application:
  Open your web browser and navigate to the following URL:

```bash
http://localhost:8080
```

This URL will display the Nginx application running in the selected pod.

By using port forwarding, you can access the application running inside the pod directly from your local machine.
