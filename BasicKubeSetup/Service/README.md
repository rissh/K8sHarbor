# Service Configuration in Kubernetes

## About Service

A Service in Kubernetes is an abstraction that defines a logical set of Pods and a policy by which to access them. It enables external traffic to access the applications running in Pods.

## Deployment Configuration

The `deployment.yaml` file defines the configuration for the Deployment in Kubernetes. It specifies how many replicas of the application should be running and what Docker image to use.

## Service Configuration

The `service.yaml` file configures the Service in Kubernetes. It defines how external traffic should be routed to the Pods managed by the Deployment. In this case, it exposes the Nginx Deployment externally using the NodePort type.

## Commands

Follow the commands below to work with Deployments and Services:

### 1. Apply Deployment

Apply the Deployment YAML file to create the Deployment:

```bash
kubectl apply -f deployment.yaml
```

### 2. Check Deployment and Pods

Verify that the Deployment and Pods are created successfully:

- List all Pods in the cluster:

  ```bash
  kubectl get pods
  ```

- Check Deployments
  List all Deployments in the cluster:

  ```bash
  kubectl get deployments
  ```

- Check All Resources
  List all resources in the cluster, including Pods, Services, and Deployments:

  ```bash
  kubectl get all
  ```

### 3. Apply Service

Apply the Service YAML file to create the Service:

```bash
kubectl apply -f service.yaml
```

### 4. Check Service

Verify that the Service is created successfully.

- Check Service
  List all Services in the cluster:

  ```bash
  kubectl get svc
  ```

- Check All Resources
  List all resources in the cluster, including Pods, Services, and Deployments:

  ```bash
  kubectl get all
  ```

### 5. Access Application

**Step 1: Access via Minikube SSH**

- SSH into the Minikube virtual machine:

  ```bash
  minikube ssh
  ```

- Use curl to access the Nginx application page:

  ```bash
  curl http://<ClusterIP>:80
  ```

- Log out or exit from the Minikube SSH:

  ```bash
  logout
  ```

**Step 2: Access via Minikube IP**

- Get the Minikube IP:

  ```bash
  minikube ip
  ```

- Use curl to access the Nginx application page:

  ```bash
  curl http://<MinikubeIP>:30007
  ```

  Replace <MinikubeIP> with the IP address of Minikube, obtained using the command minikube ip. This command accesses the Nginx application externally via the NodePort exposed on each node.

## Observations

- **Cluster IP Access**: When accessing the Nginx application via the Cluster IP, it is limited to the Kubernetes cluster network. External access is not available through this method.
- **Minikube IP Access**: Accessing the Nginx application via the Minikube IP with the NodePort provides external access to the application. This method allows accessing the application from outside the Kubernetes cluster.
