# Self-Healing and Scaling in Kubernetes with Express Node.js App

## Introduction

This project demonstrates the self-healing capabilities of Kubernetes and how to scale an application deployed in a Kubernetes cluster. We'll use an Express Node.js application as an example.

### Application Image

The application image used for this project is hosted on Docker Hub. You can find the image at the following link:

[Docker Hub - littlemonster23/express-node-app](https://hub.docker.com/repository/docker/littlemonster23/express-node-app/general)

## Self-Healing in Kubernetes

Kubernetes provides robust self-healing capabilities to ensure the reliability and availability of applications running in a cluster. Here's how we explore self-healing in this project:

1. **Create Deployment**: We deploy the Express Node.js application as a Kubernetes Deployment. This ensures that multiple replicas of the application are running to handle traffic.

   ```bash
   kubectl create deployment node-app --image=littlemonster23/express-node-app:0.0.2
   ```

2. **Check Deployment and Pods**: Verify that the deployment and pods are created successfully.

   ```bash
   kubectl get deployments
   kubectl get pods
   ```

3. **Expose Port with LoadBalancer Service**: Expose the application externally using a LoadBalancer type service to simulate external traffic.

   ```bash
   kubectl expose deployment node-app --type=LoadBalancer --port=3000
   ```

4. **Access Service URL**: Retrieve the external IP address and port to access the application.

   ```bash
   minikube service node-app
   ```

5. **Test Self-Healing**: Access the application URL and observe its behavior. Trigger an intentional failure by accessing /exit endpoint to simulate a server stoppage.

   ```bash
   curl <service-url>/exit
   ```

   Kubernetes should automatically restart the pod and restore the application's functionality after a brief downtime.

## Scaling Application in Kubernetes

Scaling an application in Kubernetes allows us to adjust the number of replicas dynamically based on workload demands. Here's how we scale the application:

1. **Scale Deployment**: Increase the number of replicas of the deployment to handle higher traffic or improve fault tolerance.

   ```bash
   kubectl scale deployment node-app --replicas=4
   ```

   Scaling up to four replicas provides redundancy and distributes the workload across multiple instances.

2. **Scale Down Deployment**: Reduce the number of replicas to optimize resource utilization during periods of lower traffic.

   ```bash
   kubectl scale deployment node-app --replicas=2
   ```

   Scaling down to two replicas saves resources and maintains optimal performance during quieter periods.
