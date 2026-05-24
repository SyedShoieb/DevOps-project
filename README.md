# End-to-End DevOps CI/CD Pipeline Project

## Project Overview

This project demonstrates a complete End-to-End DevOps CI/CD pipeline using AWS, Jenkins, Docker, Kubernetes, Prometheus, and Grafana.

The pipeline automates:

* Application build
* Docker image creation
* Docker Hub image push
* Kubernetes deployment update
* Monitoring and visualization

---

# Tech Stack

* AWS EC2,VPC
* Jenkins
* Docker
* Docker Hub
* Kubernetes (K3s)
* Prometheus
* Grafana
* Node Exporter
* GitHub Webhooks

---

# Project Architecture

Developer Push → GitHub → Webhook → Jenkins Pipeline → Docker Build → Docker Hub → Kubernetes Deployment → Monitoring with Prometheus & Grafana

---

# Features

* Automated CI/CD Pipeline
* Dockerized Application
* Kubernetes Deployment
* Rolling Updates using Kubernetes
* GitHub Webhook Integration
* Real-Time Monitoring
* Grafana Dashboard Visualization

---

# Jenkins Pipeline Flow

1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins pipeline
3. Jenkins builds Docker image
4. Jenkins pushes image to Docker Hub
5. Jenkins connects to Kubernetes server via SSH
6. Kubernetes deployment rollout restart executed
7. Updated application becomes available automatically

---

# Kubernetes Components

## Deployment

* Manages application pods
* Maintains replicas
* Performs rolling updates

## Service

* Exposes application externally using NodePort
* Application accessible on port 30080

---

# Monitoring Stack

## Prometheus

* Scrapes metrics from Node Exporter
* Stores monitoring data

## Node Exporter

* Exposes server metrics
* CPU
* Memory
* Disk
* Network

## Grafana

* Visualizes monitoring metrics
* Real-time dashboards

---

# Folder Structure

.
├──.dockerignore
├── Dockerfile
├── Jenkinsfile
├── deployment.yaml
├── service.yaml
├── package.json
├── index.html
├── style.css
├── server.js
└── README.md

---

# Commands Used

## Kubernetes

```bash
kubectl get pods
kubectl get svc
kubectl get deployment
kubectl rollout restart deployment devops-app
```

## Docker

```bash
docker build -t image-name .
docker push username/image-name
```

## Jenkins Container

```bash
docker ps
docker exec -it jenkins bash
```

---

# Problems Faced and Solutions

## 1. Jenkins unable to access Docker

Problem:
Permission denied for docker.sock

Solution:

```bash
sudo chmod 666 /var/run/docker.sock
```

---

## 2. Kubernetes website not accessible

Problem:
Application listening port mismatch

Solution:
Verified container port and corrected Kubernetes service mapping

---

## 3. Jenkins SSH connection failed

Problem:
Permission denied (publickey)

Solution:
Generated SSH keys inside Jenkins container and added public key to Kubernetes server

---

## 4. Prometheus targets DOWN

Problem:
Incorrect Prometheus scrape configuration

Solution:
Updated prometheus.yml with correct Node Exporter targets

---

## 5. EC2 Public IP Changed

Problem:
Pipeline failed after instance restart

Solution:
Updated Jenkinsfile with new Kubernetes server public IP

---

# How to Run This Project

## Step 1

Launch AWS EC2 instances

## Step 2

Install:

* Docker
* Jenkins
* Kubernetes (K3s)

## Step 3

Configure GitHub Webhook

## Step 4

Create Jenkins Pipeline Job

## Step 5

Push application code to GitHub

## Step 6

Pipeline automatically:

* Builds image
* Pushes image
* Deploys application

## Step 7

Access application via Kubernetes NodePort

## Step 8

Monitor infrastructure using:

* Prometheus
* Grafana

---

# Future Improvements

* Ingress Controller
* HTTPS with SSL
* Kubernetes Autoscaling
* Terraform Infrastructure
* Private Networking
* Helm Charts
* Alertmanager Integration

---

# Author

Syed Shoieb

End-to-End DevOps Project using AWS, Jenkins, Docker, Kubernetes, Prometheus and Grafana.
