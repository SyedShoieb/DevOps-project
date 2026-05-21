pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'syedshoieb/devops-app'
        CONTAINER_NAME = 'devops-container'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
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

        stage('Deploy Container') {
            steps {
                script {

                    sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true

                    docker pull $DOCKER_IMAGE

                    docker run -d \
                    --name $CONTAINER_NAME \
                    -p 80:3000 \
                    $DOCKER_IMAGE
                    '''
                }
            }
        }
    }
}