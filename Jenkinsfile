pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "syedshoieb/devops-app:latest"
        K8S_SERVER = "51.21.254.152"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/SyedShoieb/DevOps-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'

                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                ssh -o StrictHostKeyChecking=no ubuntu@$K8S_SERVER '
                sudo kubectl rollout restart deployment devops-app
                '
                """
            }
        }
    }
}